import { industries, industriesNote } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Industries() {
  return (
    <section id="industries" className="section section-navy">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Industries and Applications"
          title="Serving high-precision product needs"
          intro="Sri Auto Parts supplies the Automobile, Construction, Agri and Telecom industries."
        />
        <div className="card-grid ind-grid">
          {industries.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="card ind-card">
              <span className="icon-badge on-dark"><Icon name={c.icon} size={28} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="note-strip"><Icon name="factory" size={18} /> {industriesNote}</p>
      </div>
    </section>
  )
}
