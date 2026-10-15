import { Header, Footer, CTA } from '../components';
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
    <main>
      <section className="architecture-hero"><div className="container"><p className="eyebrow">Philippines service directory</p><h1>Specialized support for a defined workload.</h1><p className="lead">Choose a Filipino support lane built around repeatable tasks and written controls. Each service page explains the role before the staffing intake begins.</p></div></section>
      <section className="section"><div className="container service-directory">{services.map((service) => <a className="card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.title}</h2><p>{service.desc}</p><span>Explore service →</span></a>)}</div></section>
      <section className="section muted"><div className="container"><p className="eyebrow">Decision support</p><h2>How to choose a billing support lane</h2><div className="cards">{decisionLanes.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section"><div className="container two"><div><p className="eyebrow">Scope before access</p><h2>What to prepare before scoping</h2><p>Bring one representative queue, the approved source systems, a named reviewer, and the decisions that must stay with your owner. A small, mixed sample is safer than opening broad access on day one.</p></div><div className="support-strip"><h2>A useful starting brief</h2><ul><li>Queue name, volume, and timing</li><li>Source records and required output</li><li>Access boundaries and sensitive fields</li><li>Approval owner and escalation deadlines</li><li>Sample-review cadence and launch criteria</li></ul></div></div></section>
      <section className="section muted"><div className="container"><p className="eyebrow">Common questions</p><h2>Start with the workflow, not a job title.</h2><div className="cards"><article className="card"><h3>Can services be combined?</h3><p>Yes. Combine adjacent queues only when the source records, access rules, and review owner are clear for each lane.</p></article><article className="card"><h3>Who approves billing changes?</h3><p>Your authorized owner retains pricing, coding, refund, write-off, release, and other judgment-based decisions.</p></article><article className="card"><h3>How should a launch begin?</h3><p>Use a representative sample, review every result, correct the instructions, and widen volume only after the controls work.</p></article></div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
