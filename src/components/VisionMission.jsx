import { vision, coreValuesSummary, missionIntro, mission, coreValues } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function VisionMission() {
  return (
    <section id="vision" className="section section-grey">
      <div className="container">
        <SectionHeading eyebrow="Vision and Mission" title="What drives Sri Auto Parts" />

        <div className="vm-grid">
          <Reveal className="vm-card vision-card">
            <span className="icon-badge on-dark"><Icon name="eye" size={26} /></span>
            <h3>Our Vision</h3>
            <p className="vision-text">{vision}</p>
            <p className="vision-values">{coreValuesSummary}</p>
          </Reveal>

          <Reveal className="vm-card mission-card" delay={100}>
            <span className="icon-badge"><Icon name="target" size={26} /></span>
            <h3>Our Mission</h3>
            <p className="mission-intro">{missionIntro}</p>
            <ol>
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
          </Reveal>
        </div>

        <h3 className="subhead">Core values</h3>
        <div className="values">
          {coreValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 60} className="value">
              <strong>{v.title}</strong>
              <span>{v.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
