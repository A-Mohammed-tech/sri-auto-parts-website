import { quality } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Quality() {
  return (
    <section id="quality" className="section">
      <div className="container">
        <SectionHeading eyebrow="Quality" title="Quality, precision and customer satisfaction" intro={quality.intro} />

        <Reveal className="standards">
          <span className="standards-label">Quality standards</span>
          {quality.standards.map((s) => (
            <span key={s} className="chip"><Icon name="check" size={16} /> {s}</span>
          ))}
          <small>{quality.standardsNote}</small>
        </Reveal>

        <div className="card-grid q-grid">
          {quality.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="card q-card">
              <span className="icon-badge"><Icon name={p.icon} size={26} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
