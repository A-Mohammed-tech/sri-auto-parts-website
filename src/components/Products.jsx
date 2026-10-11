import { products, productsDisclaimer } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { ProductArt } from './Illustrations.jsx'
import Icon from './Icons.jsx'

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Products"
          title="Automotive components and spare parts"
          intro="A wide range of sheet metal works, with particular strength in two-wheeler parts and components."
        />
        <div className="card-grid prod-grid">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="card prod-card">
              <div className="prod-media">
                <ProductArt name={p.art} />
                <span className="tag">Illustrative</span>
              </div>
              <div className="prod-body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer">
          <Icon name="shield" size={18} />
          <span>{productsDisclaimer}</span>
        </p>
      </div>
    </section>
  )
}
