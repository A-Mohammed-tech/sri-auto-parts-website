import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Capabilities from './components/Capabilities.jsx'
import Products from './components/Products.jsx'
import Industries from './components/Industries.jsx'
import Quality from './components/Quality.jsx'
import VisionMission from './components/VisionMission.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Icon from './components/Icons.jsx'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <Industries />
        <Quality />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
      <button
        type="button"
        className={`to-top ${showTop ? 'visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrowUp" size={20} />
      </button>
    </>
  )
}
