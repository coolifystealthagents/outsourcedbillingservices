import { blogPosts, services, site, staffingOffer } from './data';
import { Footer, Header, JsonLd } from './components';

const queue = [
  { item: 'Invoice batch', owner: 'Billing desk', state: 'Ready for review', tone: 'mint' },
  { item: 'Missing PO', owner: 'Client owner', state: 'Approval needed', tone: 'amber' },
  { item: 'Payment follow-up', owner: 'Billing desk', state: 'Due today', tone: 'blue' },
  { item: 'Balance dispute', owner: 'Client owner', state: 'Escalated', tone: 'rose' },
];

const process = [
  { n: '01', title: 'Map the queue', body: 'Show us where billing work arrives, what repeats, and which decisions must stay with your team.' },
  { n: '02', title: 'Set the guardrails', body: 'We document access, approval points, escalation rules, and the format of the daily handoff.' },
  { n: '03', title: 'Shadow the work', body: 'The billing specialist starts with sample records and reviewed tasks before touching the live queue.' },
  { n: '04', title: 'Run and review', body: 'You get a short exception log, clear ownership, and a weekly quality check that people will read.' },
];

const slug = (value: { slug: string }) => value.slug;

export default function Home() {
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${baseUrl}/#website`, name: site.brand, url: baseUrl },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#service`,
        name: 'Outsourced billing support',
        serviceType: 'Billing administration and operations support',
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
        areaServed: 'Worldwide',
      },
    ],
  };

  return <>
    <Header />
    <main className="billing-home" data-release="billing-desk-2026-07">
      <JsonLd data={schema} />

      <section className="billing-hero">
        <div className="billing-grid" aria-hidden="true" />
        <div className="container billing-hero-grid">
          <div className="billing-copy">
            <p className="billing-kicker"><span /> Managed billing operations</p>
            <h1>Get the billing queue out of your inbox.</h1>
            <p className="billing-lead">A managed specialist handles invoice prep, claims admin, payment follow-up, customer questions, and weekly QA. Your team keeps control of approvals and account decisions.</p>
            <div className="billing-actions">
              <a className="btn billing-primary" href="/contact">Map my billing desk <span>↗</span></a>
              <a className="billing-text-link" href="#tasks">See what to hand off <span>↓</span></a>
            </div>
            <div className="control-line">
              <span>Limited access</span><i />
              <span>Named owner</span><i />
              <span>Reviewed work</span>
            </div>
          </div>

          <div className="billing-visual">
            <div className="billing-photo">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=88" alt="Billing operations team reviewing account work" />

            </div>
            <div className="queue-card">
              <div className="queue-head">
                <div><span className="tiny-label">TODAY / BILLING DESK</span><strong>Exception queue</strong></div>
                <span className="live-dot">Active</span>
              </div>
              <div className="queue-columns"><span>Work item</span><span>Owner</span><span>Status</span></div>
              {queue.map((row) => <div className="queue-row" key={row.item}>
                <b>{row.item}</b><span>{row.owner}</span><em className={row.tone}>{row.state}</em>
              </div>)}
              <div className="queue-foot"><span>Last handoff</span><b>Today · reviewed</b></div>
            </div>
            <div className="review-chip"><span>✓</span><div><b>Weekly QA</b><small>sample checked against SOP</small></div></div>
          </div>
        </div>
        <div className="container workflow-strip">
          <span className="workflow-title">A cleaner route to done</span>
          {['Received', 'Prepared', 'Reviewed', 'Sent', 'Follow-up'].map((item, i) => <div key={item}><i>{i + 1}</i><b>{item}</b></div>)}
        </div>
      </section>

      <section className="container billing-section" id="tasks">
        <div className="billing-section-head">
          <div><p className="billing-kicker dark"><span /> Work to hand off</p><h2>Start where the queue gets stuck.</h2></div>
          <p>Give repeatable work to the billing desk. Keep refunds, write-offs, coding decisions, and policy exceptions with the person who owns the account.</p>
        </div>
        <div className="billing-service-grid">
          {services.map((service, i) => <a className="billing-service" href={`/services/${slug(service)}`} key={service.slug}>
            <div className="service-top"><span>0{i + 1}</span><i className={`service-mark mark-${i + 1}`} /></div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <b className="service-link">Open the workflow <span>↗</span></b>
          </a>)}
        </div>
      </section>

      <section className="control-room">
        <div className="container control-room-grid">
          <div className="control-image">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=88" alt="Manager and billing specialist reviewing an operations report" />
            <div className="image-note"><span>OWNER CHECK</span><b>Exceptions stay visible.</b></div>
          </div>
          <div className="control-copy">
            <p className="billing-kicker"><span /> Built around control</p>
            <h2>Outsource the work. Keep the decisions.</h2>
            <p>A useful billing desk does not hide behind a monthly report. You should know what moved, what is blocked, and exactly where your approval is needed.</p>
            <div className="control-list">
              {(staffingOffer.included || []).map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span><p>{item.replace(/^./, (m) => m.toUpperCase())}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container billing-section process-section">
        <div className="billing-section-head process-head">
          <div><p className="billing-kicker dark"><span /> The launch</p><h2>A careful handoff beats a rushed hire.</h2></div>
          <a className="billing-text-link dark-link" href="/contact">Talk through your queue <span>↗</span></a>
        </div>
        <div className="process-grid">
          {process.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
        </div>
      </section>

      <section className="fit-section">
        <div className="container fit-grid">
          <div className="fit-intro"><p className="billing-kicker dark"><span /> A sensible first scope</p><h2>Good fit or bad fit?</h2><p>Billing support works best when the work has examples, an owner, and a clear stop sign. If nobody can explain the decision rules yet, fix that before you hand the queue to someone else.</p></div>
          <div className="fit-card good"><span className="fit-tag">Good first handoff</span><ul><li>Draft invoices and claim packets</li><li>Missing document follow-up</li><li>Account notes and portal checks</li><li>Aging and exception summaries</li></ul></div>
          <div className="fit-card wait"><span className="fit-tag">Keep with your owner</span><ul><li>Refund and write-off decisions</li><li>Pricing or coding exceptions</li><li>Disputed balances</li><li>Legal or medical advice</li></ul></div>
        </div>
      </section>

      <section className="container billing-section guides-section">
        <div className="guides-title"><p className="billing-kicker dark"><span /> Before the handoff</p><h2>Useful reading for your billing owner.</h2></div>
        <div className="billing-guides">
          {blogPosts.slice(0, 3).map((post, i) => <a href={`/blog/${post.slug}`} key={post.slug}><span>Guide / 0{i + 1}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read guide ↗</b></a>)}
        </div>
      </section>

      <section className="container billing-final">
        <div><span className="tiny-label">YOUR QUEUE / YOUR RULES</span><h2>Bring the messy billing list.</h2><p>We will turn it into a role with owners, limits, review points, and a practical first handoff.</p></div>
        <a className="btn billing-primary" href="/contact">Request a billing plan <span>↗</span></a>
      </section>
    </main>
    <Footer />
  </>;
}
