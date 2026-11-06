import { SectorScenarios } from "../sector-scenarios";
import { Header, Footer, CTA } from '../components';
import { servicePlaybooks } from '../service-playbooks';
import { services, site } from '../data';

export const metadata = {
  title: 'Billing Support Services',
  description: `Compare Philippines-based ${site.primary} services by task scope, source inputs, approval limits, exception handling, and owner review.`,
  alternates: { canonical: '/services' },
};

const groups = [
 { title: 'Prepare & bill', description: 'Turn approved source records into review-ready billing.', slugs: ['invoice-preparation','usage-billing-administration','subscription-billing-support'] },
 { title: 'Record & reconcile', description: 'Keep account activity and payment records aligned.', slugs: ['billing-reconciliation','payment-posting','credit-memo-administration'] },
 { title: 'Resolve & follow up', description: 'Give open questions the evidence and next owner they need.', slugs: ['collections-follow-up','customer-billing-support','dispute-documentation'] },
 { title: 'Review & close', description: 'Prepare cleaner schedules and exceptions for sign-off.', slugs: ['revenue-schedule-preparation','billing-data-quality-review','month-end-billing-support'] },
];

export default function Services() {
  return <>
    <Header />
    <main className="billing-directory">
      <section className="architecture-hero"><div className="container field-split"><div><p className="eyebrow">Billing operations support</p><h1>Billing support, from invoice to close.</h1><p className="lead">Get help with invoice preparation, payment records, customer questions, and month-end queues. Compare the work below by what arrives at the desk and what comes back ready for review.</p></div><figure className="field-frame"><img className="field-photo" src="/design-photography/6963050.webp" alt="Two colleagues checking figures with a calculator and laptop" width={1440} height={960} loading="eager" fetchPriority="high" /></figure></div></section>
      <section className="section" id="billing-services"><div className="container"><div className="directory-heading"><p className="eyebrow">Find your starting point</p><h2>Which part of billing needs a hand?</h2></div><div className="billing-groups">{groups.map((group,i)=><section className="billing-group" key={group.title}><header><span>0{i+1}</span><h2>{group.title}</h2><p>{group.description}</p></header><div>{group.slugs.map(slug=>{const service=services.find(item=>item.slug===slug)!;return <a className="billing-service-row" href={`/services/${slug}`} key={slug}><div><h3>{service.title}</h3><p>{servicePlaybooks[slug].scope}</p></div><span aria-hidden="true">↗</span></a>})}</div></section>)}</div></div></section>
      <section className="section"><div className="container two"><div><p className="eyebrow">Scope before access</p><h2>What to prepare before scoping</h2><p>Bring one representative queue, the approved source systems, a named reviewer, and the decisions that must stay with your owner. A small, mixed sample is safer than opening broad access on day one.</p></div><div className="support-strip"><h2>A useful starting brief</h2><ul><li>Queue name, volume, and timing</li><li>Source records and required output</li><li>Access boundaries and sensitive fields</li><li>Approval owner and escalation deadlines</li><li>Sample-review cadence and launch criteria</li></ul></div></div></section>
      <section className="section muted directory-faq"><div className="container"><p className="eyebrow">Common questions</p><h2>Start with the workflow, not a job title.</h2><div className="cards"><article className="card"><h3>Can services be combined?</h3><p>Yes. Combine adjacent queues only when the source records, access rules, and review owner are clear for each lane.</p></article><article className="card"><h3>Who approves billing changes?</h3><p>Your authorized owner retains pricing, coding, refund, write-off, release, and other judgment-based decisions.</p></article><article className="card"><h3>How should a launch begin?</h3><p>Use a representative sample, review every result, correct the instructions, and widen volume only after the controls work.</p></article></div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
