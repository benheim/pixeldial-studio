const portfolio = [
  {
    name: 'Neon Static',
    niche: 'Indie electronic artist',
    outcome: 'Single-page release site concept with merch + mailing list conversion focus.'
  },
  {
    name: 'Softgrid Collective',
    niche: 'Creative studio',
    outcome: 'Clean multi-section agency concept built for positioning and lead generation.'
  },
  {
    name: 'PulseArc Records',
    niche: 'Streetwear / vinyl label',
    outcome: 'Launch-first storefront concept with editorial art direction and product storytelling.'
  }
]

const services = [
  {
    title: 'Launch Landing Page',
    price: '$2,000',
    detail: 'Conversion-focused one-pager for releases, drops, events, and campaigns. Includes responsive build + basic SEO setup.'
  },
  {
    title: 'Brand Website (3-8 pages)',
    price: '$4,000-$8,000',
    detail: 'Full marketing site with a custom visual system, content hierarchy, and polished interactions.'
  },
  {
    title: 'Retainer Support',
    price: '$500+/mo',
    detail: 'Post-launch updates, seasonal refreshes, and optimization support for active brands.'
  }
]

const process = [
  'Discovery call + goals',
  'Moodboard and structure',
  'Design + build sprint',
  'Launch + handoff'
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero panel">
        <p className="eyebrow">PIXELDIAL STUDIO</p>
        <h1>Retro-futurist web design for modern creators.</h1>
        <p className="lead">
          We build polished Y2K-inspired websites for musicians, labels, studios, and culture brands that want personality—not templates.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn">Book a project</a>
          <a href="#portfolio" className="btn btn-ghost">View work</a>
        </div>
      </header>

      <section id="portfolio" className="panel">
        <h2>Spec Portfolio</h2>
        <div className="grid">
          {portfolio.map((piece) => (
            <article key={piece.name} className="card">
              <span>Spec Project</span>
              <h3>{piece.name}</h3>
              <p className="muted">{piece.niche}</p>
              <p>{piece.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="panel">
        <h2>Services & Pricing</h2>
        <div className="grid services">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Simple Process</h2>
        <ol className="steps">
          {process.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section id="contact" className="panel contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:hello@pixeldial.studio">hello@pixeldial.studio</a></p>
        <p>Share your goals, timeline, and launch date. We will reply with fit + next steps.</p>
      </section>
    </div>
  )
}
