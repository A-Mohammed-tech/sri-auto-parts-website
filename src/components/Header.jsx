import { useEffect, useMemo, useState } from 'react'
import { company, navLinks } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import Icon from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ids = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the menu if the viewport grows to desktop width.
  useEffect(() => {
    const onResize = () => window.innerWidth > 980 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label={`${company.name} – home`}>
          <img src={company.logo} alt="" className="brand-logo" />
          <span className="brand-text">
            <strong>{company.name}</strong>
            <small>Private Limited</small>
          </span>
        </a>

        <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'active' : ''}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  )
}
