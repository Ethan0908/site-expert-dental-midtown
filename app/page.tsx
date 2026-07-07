import business from '../data/business.json';

const address = '110 E 40th St #104, New York, NY 10016';
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;

const visitReasons = [
  'Schedule an appointment near Grand Central',
  'Confirm location details before your visit',
  'Speak with the office about care needs and timing',
];

const contactItems = [
  {
    label: 'Call',
    value: business.phone,
    href: phoneHref,
  },
  {
    label: 'Visit',
    value: address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  },
  {
    label: 'Website',
    value: 'expertdentalnyc.com',
    href: business.website,
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Expert Dental - Midtown home">
            <span className="brand-mark" aria-hidden="true">ED</span>
            <span>
              <strong>{business.name}</strong>
              <small>Midtown Manhattan</small>
            </span>
          </a>
          <div className="nav-actions">
            <a href="#location">Location</a>
            <a href={phoneHref}>Call</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Dentist in Manhattan</p>
            <h1 id="hero-title">Dental visits in Midtown, planned around a clear next step.</h1>
            <p className="lede">
              Expert Dental - Midtown serves patients from its East 40th Street office in Manhattan.
              Call the office or visit the practice website to confirm appointment options.
            </p>
            <div className="hero-actions" aria-label="Contact options">
              <a className="button primary" href={phoneHref}>Call {business.phone}</a>
              <a className="button secondary" href={business.website}>Visit website</a>
            </div>
            <div className="proof-strip" aria-label="Business details">
              <span><strong>4.5</strong> Google rating</span>
              <span><strong>2,174</strong> Google reviews</span>
              <span><strong>Midtown</strong> Manhattan</span>
            </div>
          </div>

          <aside className="appointment-panel" aria-label="Office overview">
            <div className="panel-header">
              <span className="status-dot" aria-hidden="true" />
              <span>Office details</span>
            </div>
            <div className="appointment-card">
              <p className="card-kicker">Address</p>
              <h2>{address}</h2>
              <p>
                Located near the core of Midtown, with direct contact available by phone for
                appointment questions.
              </p>
            </div>
            <div className="mini-map" aria-hidden="true">
              <span className="avenue one" />
              <span className="avenue two" />
              <span className="street one" />
              <span className="street two" />
              <span className="pin" />
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">What visitors need first</p>
          <h2 id="intro-title">A straightforward path to the office.</h2>
        </div>
        <p>
          Most dental visitors arrive with practical questions: where the office is, how to reach
          the team, and what to do next. This page keeps those details close, without adding claims
          that were not supplied by the business.
        </p>
      </section>

      <section className="section reasons" aria-labelledby="reasons-title">
        <div className="section-heading">
          <p className="eyebrow">Common next steps</p>
          <h2 id="reasons-title">Use the contact links for appointment-specific information.</h2>
        </div>
        <div className="reason-grid">
          {visitReasons.map((reason, index) => (
            <article className="reason-card" key={reason}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="location-band" id="location" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="eyebrow">Midtown office</p>
          <h2 id="location-title">Find Expert Dental - Midtown on East 40th Street.</h2>
          <p>
            The supplied business listing places the office at {address}. Use the map link for
            directions or call before visiting.
          </p>
        </div>
        <div className="contact-list">
          {contactItems.map((item) => (
            <a className="contact-row" href={item.href} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section final-cta" aria-labelledby="final-title">
        <p className="eyebrow">Ready to contact the office?</p>
        <h2 id="final-title">Call Expert Dental - Midtown or continue to the practice website.</h2>
        <div className="hero-actions centered">
          <a className="button primary" href={phoneHref}>Call {business.phone}</a>
          <a className="button secondary" href={business.website}>Open website</a>
        </div>
      </section>
    </main>
  );
}
