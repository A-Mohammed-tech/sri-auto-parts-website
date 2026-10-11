import { company, location } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Find us" intro="Locate Sri Auto Parts on the map." />

        <div className="contact-grid">
          <Reveal className="contact-card">
            <span className="icon-badge"><Icon name="pin" size={26} /></span>
            <h3>{company.legalName}</h3>
            <address>
              <strong>{location.city}</strong>
              <br />
              {location.region}
            </address>
            <p className="muted">{location.facilitiesNote}</p>
            <p className="muted">
              Telephone and e-mail details are not listed in the company profile and will be added here once
              confirmed by the company.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={location.mapsViewUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={18} /> Open in Google Maps <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a className="btn btn-outline" href={location.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="directions" size={18} /> Get Directions <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="map-wrap" delay={100}>
            <iframe
              title="Map showing Vellore, Tamil Nadu, India"
              src={location.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
