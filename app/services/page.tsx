import { SectorScenarios } from "../sector-scenarios";
import { Header, Footer, CTA } from '../components';
import { servicePlaybooks } from '../service-playbooks';
import { services, site } from '../data';

export const metadata = {
  title: 'Billing Support Services',
  description: `Compare Philippines-based ${site.primary} services by task scope, source inputs, approval limits, exception handling, and owner review.`,
  alternates: { canonical: '/services' },
};

const decisionLanes = [
  ['Prepare billing work', 'Invoice preparation, usage billing, and subscription support turn approved source records into review-ready drafts.'],
  ['Reconcile activity', 'Billing reconciliation, payment posting, and credit memo administration isolate mismatches before an owner acts.'],
  ['Manage open questions', 'Collections follow-up, customer support, and dispute documentation keep evidence, dates, and next owners visible.'],
  ['Strengthen close controls', 'Revenue schedules, data-quality reviews, and month-end support organize exceptions for sign-off.'],
];

export default function Services() {
  return <>
    <Header />
    <main className="billing-directory">
      <section className="architecture-hero"><div className="container field-split"><div><p className="eyebrow">Billing operations support</p><h1>Keep billing moving. Keep approvals with your team.</h1><p className="lead">Get help with invoice preparation, payment records, customer questions, and month-end queues. Compare the work below by what arrives at the desk and what comes back ready for review.</p></div><figure className="field-frame"><img className="field-photo" src="/design-photography/6963050.webp" alt="Two colleagues checking figures with a calculator and laptop" width={1440} height={960} loading="eager" fetchPriority="high" /></figure></div></section>
      <section className="section" id="billing-services"><div className="container"><div className="directory-heading"><p className="eyebrow">Twelve billing services</p><h2>Find the work you need off your desk.</h2><p>Each service has a defined output, a review trail, and clear approval limits.</p></div><div className="service-directory">{services.map((service) => <a className="card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.title}</h2><p>{servicePlaybooks[service.slug].scope}</p><div className="directory-output"><b>You receive</b><span>{servicePlaybooks[service.slug].deliverables[0]}</span></div><span className="directory-link">View scope and workflow →</span></a>)}</div></div></section>
      <section className="section muted"><div className="container"><p className="eyebrow">Decision support</p><h2>How to choose a billing support lane</h2><div className="cards">{decisionLanes.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section"><div className="container two"><div><p className="eyebrow">Scope before access</p><h2>What to prepare before scoping</h2><p>Bring one representative queue, the approved source systems, a named reviewer, and the decisions that must stay with your owner. A small, mixed sample is safer than opening broad access on day one.</p></div><div className="support-strip"><h2>A useful starting brief</h2><ul><li>Queue name, volume, and timing</li><li>Source records and required output</li><li>Access boundaries and sensitive fields</li><li>Approval owner and escalation deadlines</li><li>Sample-review cadence and launch criteria</li></ul></div></div></section>
      <section className="section muted directory-faq"><div className="container"><p className="eyebrow">Common questions</p><h2>Start with the workflow, not a job title.</h2><div className="cards"><article className="card"><h3>Can services be combined?</h3><p>Yes. Combine adjacent queues only when the source records, access rules, and review owner are clear for each lane.</p></article><article className="card"><h3>Who approves billing changes?</h3><p>Your authorized owner retains pricing, coding, refund, write-off, release, and other judgment-based decisions.</p></article><article className="card"><h3>How should a launch begin?</h3><p>Use a representative sample, review every result, correct the instructions, and widen volume only after the controls work.</p></article></div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
