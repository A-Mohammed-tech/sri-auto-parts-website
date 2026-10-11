import { capabilities } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Capabilities() {
  return (
    <section id="capabilities" className="section section-grey">
      <div className="container">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Deep-domain technical capabilities"
          intro="From pressing and forming to surface coating, the company combines advanced infrastructure with decades of tooling, development, manufacturing and testing experience."
        />
        <div className="card-grid cap-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className="card cap-card">
              <span className="icon-badge"><Icon name={c.icon} size={26} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
