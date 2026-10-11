import { about } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About Us" title="Two decades of sheet metal expertise" intro={about.lead} />

        <div className="about-grid">
          <div className="about-text">
            {about.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="about-block">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="about-side">
            <Reveal className="facts">
              {about.facts.map((f) => (
                <div key={f.label} className="fact">
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </Reveal>
            <Reveal className="looking-ahead" delay={120}>
              <h3>{about.lookingAhead.title}</h3>
              <ul>
                {about.lookingAhead.items.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={18} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
        <p className="source-note">{about.source}</p>
      </div>
    </section>
  )
}
