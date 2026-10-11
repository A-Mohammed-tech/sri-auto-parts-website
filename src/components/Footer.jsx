import { company, navLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={company.logo} alt={`${company.name} logo`} className="footer-logo" />
          <p>{company.legalName}</p>
          <p className="muted">{company.shortLocation}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
        <span>Academic demonstration website · Content based on the company profile document.</span>
      </div>
    </footer>
  )
}
