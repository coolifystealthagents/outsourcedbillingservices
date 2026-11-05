import { blogPosts, services, site, staffingOffer } from './data';
import { Footer, Header, JsonLd } from './components';

export const metadata = { alternates: { canonical: '/' } };

const workflowSummaries: Record<string,string> = {
  "invoice-preparation": "Prepare invoice drafts from approved time entries, order details, and delivery records; flag missing references before review.",
  "usage-billing-administration": "Compare usage exports with approved rates and billing periods; route gaps or unusual quantities to the account owner.",
  "subscription-billing-support": "Track renewal dates, approved plan changes, and proration inputs so the owner can review the next recurring bill.",
  "billing-reconciliation": "Match invoices, credits, and remittances; maintain a dated exception list for balances that do not agree.",
  "payment-posting": "Match remittance references to open invoices and prepare posting batches; hold unclear allocations for finance review.",
  "credit-memo-administration": "Assemble the original invoice, adjustment reason, and approval evidence before an authorized owner releases a credit.",
  "collections-follow-up": "Send approved reminders, log replies and promised dates, and escalate disputed or overdue balances through the agreed process.",
  "customer-billing-support": "Locate invoice copies, explain approved account information, and route refund or pricing requests to the decision owner.",
  "revenue-schedule-preparation": "Organize contract dates and approved billing records into a review schedule; accountants retain recognition decisions.",
  "billing-data-quality-review": "Check customer references, dates, duplicates, and required fields before records enter the next billing batch.",
  "dispute-documentation": "Collect the disputed line, delivery evidence, correspondence, and open questions in one case file for the account owner.",
  "month-end-billing-support": "Track unbilled items, unresolved payment matches, and cutoff questions in a close checklist with named owners."
};

const queue = [
  { item: 'Invoice batch', owner: 'Billing desk', state: 'Ready for review', tone: 'mint' },
  { item: 'Missing PO', owner: 'Client owner', state: 'Approval needed', tone: 'amber' },
  { item: 'Payment follow-up', owner: 'Billing desk', state: 'Due today', tone: 'blue' },
  { item: 'Balance dispute', owner: 'Client owner', state: 'Escalated', tone: 'rose' },
];

const process = [
  { title: 'Map the queue', body: 'Show us where billing work arrives, what repeats, and which decisions must stay with your team.' },
  { title: 'Set the guardrails', body: 'We document access, approval points, escalation rules, and the format of the daily handoff.' },
  { title: 'Shadow the work', body: 'The billing specialist starts with sample records and reviewed tasks before touching the live queue.' },
  { title: 'Run and review', body: 'You get a short exception log, clear ownership, and a weekly quality check that people will read.' },
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
        areaServed: 'United States',
        availableChannel: { '@type': 'ServiceChannel', serviceLocation: { '@type': 'Country', name: 'Philippines' } },
      },
    ],
  };

  return <>
    <Header />
    <main className="billing-home" data-release="billing-desk-2026-07" data-gi-rollout="two-illustration-packs-one-icon-pack">
      <JsonLd data={schema} />

      <section className="billing-hero">
        <div className="billing-grid" aria-hidden="true" />
        <div className="container billing-hero-grid">
          <div className="billing-copy">
            <p className="billing-kicker"><span /> Filipino billing support</p>
            <h1>Keep invoices moving.</h1>
            <p className="billing-lead">Prepare invoices from approved time, usage, and delivery records. Match payment references, track unresolved balances, and return an exception list to your finance owner. Your team approves credits, adjustments, and account decisions.</p>
            <div className="billing-trust">
              <span className="billing-trust-stars" role="img" aria-label="Five visible billing checkpoints">★★★★★</span>
              <p><b>Five visible billing checkpoints</b><small>Received, prepared, reviewed, sent, and followed up.</small></p>
            </div>
            <div className="billing-actions">
              <a className="btn billing-primary" href="/contact-us">Map my billing desk <span>↗</span></a>
              <a className="billing-text-link" href="#tasks">See what to hand off <span>↓</span></a>
            </div>
            <div className="control-line">
              <span>Philippines-based talent</span><i />
              <span>Limited access</span><i />
              <span>Named reviewer</span>
            </div>
          </div>

          <figure className="billing-visual field-frame"><img className="field-photo" src="/design-photography/8297220.webp" alt="a person working on the documents using a calculator" width={1440} height={960} loading="eager" fetchPriority="high" /></figure>
        </div>
        <div className="container workflow-strip">
          <span className="workflow-title">How the queue moves</span>
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
            <div className="service-top"><span className="service-category">Billing workflow</span><i className={`service-mark mark-${i + 1}`} /></div>
            <h3>{service.title}</h3>
            <p>{workflowSummaries[service.slug] ?? service.desc}</p>
            <b className="service-link">Open the workflow <span>↗</span></b>
          </a>)}
        </div>
      </section>

      <section className="control-room">
        <div className="container control-room-grid">
          <div className="billing-exception-example" aria-labelledby="exception-example-title">
            <p className="billing-kicker dark">Illustrative work item</p>
            <h3 id="exception-example-title">A short payment with a clear next step</h3>
            <dl>
              <div><dt>Source record</dt><dd>Invoice, remittance reference, and customer message</dd></div>
              <div><dt>Desk prepares</dt><dd>Compare the amounts, attach evidence, and log the unresolved difference.</dd></div>
              <div><dt>Owner decides</dt><dd>Confirm whether to request payment, correct the invoice, or approve a credit.</dd></div>
              <div><dt>Review trail</dt><dd>Keep the decision, date, and next action with the account.</dd></div>
            </dl>
          </div>
          <div className="control-copy">
            <p className="billing-kicker"><span /> Built around control</p>
            <h2>Outsource the work. Keep the decisions.</h2>
            <p>Your billing desk should not hide behind a monthly report. You should know what moved, what is blocked, and where your approval is needed.</p>
            <div className="control-list">
              {(staffingOffer.included || []).map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item.replace(/^./, (m) => m.toUpperCase())}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container billing-section process-section">
        <div className="billing-section-head process-head">
          <div><p className="billing-kicker dark"><span /> The launch</p><h2>A careful handoff beats a rushed hire.</h2></div>
          <a className="billing-text-link dark-link" href="/contact-us">Talk through your queue <span>↗</span></a>
        </div>
        <div className="process-grid">
          {process.map((step) => <article key={step.title}><span aria-hidden="true">✓</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
        </div>
      </section>

      <section className="fit-section">
        <div className="container fit-grid">
          <div className="fit-intro"><p className="billing-kicker dark"><span /> A sensible first scope</p><h2>Good fit or bad fit?</h2><p>Billing support works best when the work has examples, an owner, and a clear stop sign. If nobody can explain the decision rules yet, fix that before you hand the queue to someone else.</p></div>
          <div className="fit-card good"><span className="fit-tag">Good first handoff</span><ul className="icon-replacement-list"><li><img src="/icons/getillustrations/3d-finance-icons-png/invoice-prep.webp" alt="Invoice preparation step" width="42" height="42"/>Draft invoices and claim packets</li><li><img src="/icons/getillustrations/3d-finance-icons-png/payment-followup.webp" alt="Payment follow-up step" width="42" height="42"/>Missing document follow-up</li><li><img src="/icons/getillustrations/3d-finance-icons-png/weekly-review.webp" alt="Weekly billing review" width="42" height="42"/>Account notes and portal checks</li><li>Aging and exception summaries</li></ul></div>
          <div className="fit-card wait"><span className="fit-tag">Keep with your owner</span><ul><li>Refund and write-off decisions</li><li>Pricing or coding exceptions</li><li>Disputed balances</li><li>Legal or medical advice</li></ul></div>
        </div>
      </section>

      <section className="container gi-proof" aria-label="Billing workflow checks">
        <img className="gi-proof-art field-photo" src="/design-photography/4308014.webp" alt="focused male accountant doing paperwork" width={1440} height={960} loading="lazy" />
        <div><p className="billing-kicker dark"><span/>A reviewable queue</p><h2>Keep every billing checkpoint visible.</h2><div className="gi-icon-row"><span><img src="/icons/getillustrations/3d-finance-icons-png/invoice-prep.webp" alt="Invoice preparation step" width="42" height="42"/>Invoice prep</span><span><img src="/icons/getillustrations/3d-finance-icons-png/payment-followup.webp" alt="Payment follow-up step" width="42" height="42"/>Payment follow-up</span><span><img src="/icons/getillustrations/3d-finance-icons-png/weekly-review.webp" alt="Weekly billing review" width="42" height="42"/>Weekly review</span></div></div>
      </section>

      <section className="container billing-section guides-section">
        <div className="guides-title"><p className="billing-kicker dark"><span /> Before the handoff</p><h2>Useful reading for your billing owner.</h2></div>
        <div className="billing-guides">
          {blogPosts.slice(0, 3).map((post) => <a href={`/blog/${post.slug}`} key={post.slug}><span>Billing guide</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read guide ↗</b></a>)}
        </div>
      </section>

      <section className="container billing-final">
        <div><span className="tiny-label">YOUR QUEUE / YOUR RULES</span><h2>Bring the messy billing list.</h2><p>We will turn it into a role with owners, limits, review points, and a practical first handoff.</p></div>
        <a className="btn billing-primary" href="/contact-us">Request a billing plan <span>↗</span></a>
      </section>
    </main>
    <Footer />
  </>;
}
