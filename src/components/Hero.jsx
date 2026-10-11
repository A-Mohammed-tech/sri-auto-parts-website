import { hero, heroStats } from '../data/content.js'
import { HeroArt } from './Illustrations.jsx'
import Icon from './Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <HeroArt />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="eyebrow light fade-up" style={{ animationDelay: '0.05s' }}>{hero.eyebrow}</span>
        <h1 className="fade-up" style={{ animationDelay: '0.15s' }}>
          {hero.title} <span className="accent">{hero.titleAccent}</span>
        </h1>
        <p className="hero-intro fade-up" style={{ animationDelay: '0.3s' }}>{hero.intro}</p>
        <div className="hero-actions fade-up" style={{ animationDelay: '0.45s' }}>
          <a href="#capabilities" className="btn btn-primary">
            Explore Our Capabilities <Icon name="arrowRight" size={18} />
          </a>
          <a href="#about" className="btn btn-ghost">About the Company</a>
        </div>
      </div>

      <div className="container">
        <dl className="stats fade-up" style={{ animationDelay: '0.6s' }}>
          {heroStats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="art-note">Illustrative artwork</p>
    </section>
  )
}
