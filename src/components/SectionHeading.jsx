import { useReveal } from '../hooks/useReveal.js'

export default function SectionHeading({ eyebrow, title, intro, light = false, center = false }) {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      className={`section-heading reveal ${shown ? 'in' : ''} ${light ? 'on-dark' : ''} ${center ? 'center' : ''}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  )
}
