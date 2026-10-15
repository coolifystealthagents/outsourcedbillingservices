import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const serviceAliases: Record<string, string> = {
  'outsourced-team-handoff-checklist': 'billing-data-quality-review',
  'claim-status-follow-up': 'collections-follow-up',
  'claim-submission-checklist': 'invoice-preparation',
};

type Playbook = {
  scope: string;
  checks: string;
  inputs: string[];
  outputs: string[];
  scenarios: string[];
  launchQuestion: string;
  related: string[];
};

const playbooks: Record<string, Playbook> = {
  'invoice-preparation': {
    scope: 'Prepare invoice drafts from approved orders, contracts, time, usage, and customer records while preserving the source version used for every line.',
    checks: 'Check periods, quantities, rates, taxes, duplicates, missing approvals, and cutoff exceptions. The owner approves release, pricing interpretation, credits, and disputed items.',
    inputs: ['Approved order or contract terms', 'Time, usage, or delivery evidence', 'Customer master and tax instructions'],
    outputs: ['Review-ready invoice draft', 'Source-reference index', 'Exception list for owner approval'],
    scenarios: ['A monthly invoice queue is late', 'Source records arrive in several formats', 'Approvals are difficult to trace'],
    launchQuestion: 'Which record proves each billable line, and who authorizes release?',
    related: ['usage-billing-administration', 'subscription-billing-support', 'billing-data-quality-review'],
  },
  'usage-billing-administration': {
    scope: 'Match usage events to the correct account, billing period, approved unit rule, and retained activity report before preparing a billable record.',
    checks: 'Flag missing events, duplicates, cutoff differences, conversions, caps, minimums, and manual overrides. The owner resolves contract interpretation and disputed usage.',
    inputs: ['Usage event export', 'Approved meter-to-account map', 'Billing period and rate rules'],
    outputs: ['Account-level usage register', 'Cutoff and duplicate exceptions', 'Review packet for disputed events'],
    scenarios: ['Late usage arrives after cutoff', 'Meter identifiers do not match accounts', 'Minimums or caps need owner interpretation'],
    launchQuestion: 'What event source is authoritative, and how are late records handled?',
    related: ['invoice-preparation', 'billing-reconciliation', 'billing-data-quality-review'],
  },
  'subscription-billing-support': {
    scope: 'Maintain a dated record of subscription starts, stops, plan changes, approved terms, billing periods, and customer notices.',
    checks: 'Compare recurring charges with the current approved agreement and prior invoice. Route proration, cancellation, refund, and exception decisions to the owner.',
    inputs: ['Approved subscription agreement', 'Change and cancellation log', 'Prior invoice and account history'],
    outputs: ['Recurring-charge review file', 'Effective-date exception queue', 'Owner questions for proration or refund'],
    scenarios: ['Plan changes cross a billing period', 'Cancellation evidence is incomplete', 'Recurring charges differ from the prior cycle'],
    launchQuestion: 'Which approved record controls the effective date of a subscription change?',
    related: ['invoice-preparation', 'customer-billing-support', 'billing-reconciliation'],
  },
  'billing-reconciliation': {
    scope: 'Tie billing totals to source transactions, invoices, payments, adjustments, and the prior-period balance at the same unit of analysis.',
    checks: 'Separate timing differences from missing, duplicate, or misapplied records and retain an exception trail. The owner approves adjustments and close sign-off.',
    inputs: ['Billing ledger and source totals', 'Payment and adjustment records', 'Prior reconciliation and open-item list'],
    outputs: ['Control-total reconciliation', 'Explained difference log', 'Unresolved items for owner sign-off'],
    scenarios: ['Ledger and invoice totals differ', 'Payments are posted to the wrong account', 'Close depends on unexplained carry-forward items'],
    launchQuestion: 'What totals must agree, at what cutoff, and who signs off differences?',
    related: ['payment-posting', 'month-end-billing-support', 'billing-data-quality-review'],
  },
  'payment-posting': {
    scope: 'Match each payment or remittance line to an account and source trace before preparing the posting record.',
    checks: 'Isolate partial, duplicate, reversed, unapplied, and conflicting payments. The owner approves transfers, refunds, reversals, write-offs, and uncertain matches.',
    inputs: ['Bank or processor settlement', 'Remittance detail', 'Open invoice and account records'],
    outputs: ['Prepared payment posting file', 'Unapplied-cash queue', 'Duplicate and reversal exceptions'],
    scenarios: ['Remittance detail is incomplete', 'One payment covers several invoices', 'A reversal conflicts with an earlier posting'],
    launchQuestion: 'What evidence is required before a payment may be matched to an account?',
    related: ['billing-reconciliation', 'credit-memo-administration', 'customer-billing-support'],
  },
  'credit-memo-administration': {
    scope: 'Prepare credit-memo records from an approved request, original charge, reason, amount, account, and supporting evidence.',
    checks: 'Check authorization, duplicate credits, tax effects, related payments, and period status. The owner approves the credit, refund, transfer, or write-off decision.',
    inputs: ['Approved credit request', 'Original invoice and payment history', 'Reason code and supporting evidence'],
    outputs: ['Credit memo preparation packet', 'Duplicate-credit check', 'Approval and posting status log'],
    scenarios: ['A customer disputes part of an invoice', 'A refund request lacks approval', 'A credit affects a closed period'],
    launchQuestion: 'Which owner can authorize a credit, and what source evidence must accompany it?',
    related: ['payment-posting', 'dispute-documentation', 'billing-reconciliation'],
  },
  'collections-follow-up': {
    scope: 'Maintain a dated queue of open balances, approved contact instructions, prior responses, commitments, disputes, and next actions.',
    checks: 'Record factual outcomes and stop at contact, legal, policy, or dispute boundaries. The owner approves settlement, write-off, escalation, and account restrictions.',
    inputs: ['Aging report and account contacts', 'Approved cadence and message templates', 'Prior contact and dispute history'],
    outputs: ['Dated follow-up log', 'Promise-to-pay and response queue', 'Escalation list with deadlines'],
    scenarios: ['Balances age without a next action', 'Customers dispute invoice evidence', 'Commitments are not tracked consistently'],
    launchQuestion: 'What contact cadence is approved, and which conditions require an owner?',
    related: ['customer-billing-support', 'dispute-documentation', 'billing-reconciliation'],
  },
  'customer-billing-support': {
    scope: 'Organize customer billing questions around the account, invoice, source records, prior messages, and the specific answer or decision still needed.',
    checks: 'Answer only from approved records and route pricing, refund, dispute, policy, or account-change decisions to the owner.',
    inputs: ['Customer question and account reference', 'Invoice and approved source records', 'Response standards and escalation rules'],
    outputs: ['Documented response draft', 'Question and evidence log', 'Escalation packet for owner decisions'],
    scenarios: ['Customers ask for invoice explanations', 'Portal access or statements are missing', 'A question becomes a formal dispute'],
    launchQuestion: 'Which answers may support staff provide, and what must be escalated?',
    related: ['collections-follow-up', 'dispute-documentation', 'invoice-preparation'],
  },
  'revenue-schedule-preparation': {
    scope: 'Prepare schedule inputs from approved billing records, contract dates, delivery evidence, prior schedules, and owner-provided accounting rules.',
    checks: 'Trace every schedule line to source and isolate date, amount, allocation, modification, and completeness questions. The qualified owner approves accounting treatment.',
    inputs: ['Approved contract and billing record', 'Delivery or service-period evidence', 'Prior schedule and owner instructions'],
    outputs: ['Review-ready schedule draft', 'Source-to-schedule index', 'Accounting questions for the qualified owner'],
    scenarios: ['Billing dates differ from service periods', 'Contract changes affect future periods', 'Schedule lines lack source references'],
    launchQuestion: 'Which accounting decisions remain with the qualified owner, and what can support staff prepare?',
    related: ['invoice-preparation', 'billing-reconciliation', 'month-end-billing-support'],
  },
  'billing-data-quality-review': {
    scope: 'Compare required billing fields with approved source records and record missing, conflicting, duplicate, stale, or out-of-scope values.',
    checks: 'Use written validation rules and preserve the observed value rather than guessing a correction. The owner approves master-data, coding, pricing, and policy changes.',
    inputs: ['Field definition and validation rules', 'Approved source system or document', 'Queue sample and prior exception history'],
    outputs: ['Field-level quality report', 'Exception and suspected-duplicate queue', 'Correction questions for the owner'],
    scenarios: ['Required fields are often incomplete', 'Several systems disagree', 'Returned work lacks a repeatable cause log'],
    launchQuestion: 'What source controls each field, and who may authorize a correction?',
    related: ['invoice-preparation', 'billing-reconciliation', 'month-end-billing-support'],
  },
  'dispute-documentation': {
    scope: 'Assemble the invoice, source records, messages, dates, amounts, requested outcome, deadlines, and unresolved questions for a billing dispute.',
    checks: 'Preserve the customer or payer wording and separate facts from assumptions. The owner decides liability, response position, credit, appeal, refund, or legal escalation.',
    inputs: ['Dispute notice and correspondence', 'Invoice and source evidence', 'Deadline and response requirements'],
    outputs: ['Indexed dispute evidence packet', 'Chronology and open-question log', 'Owner-ready response brief'],
    scenarios: ['Evidence is spread across systems', 'A response deadline is approaching', 'The requested outcome requires financial judgment'],
    launchQuestion: 'What evidence and deadline must the decision owner see before responding?',
    related: ['customer-billing-support', 'credit-memo-administration', 'collections-follow-up'],
  },
  'month-end-billing-support': {
    scope: 'Reconcile assigned billing queues to complete, held, escalated, and carried-forward items before the owner reviews close readiness.',
    checks: 'Check cutoffs, unbilled work, unposted items, unresolved differences, late source records, and evidence status. The owner approves close and financial adjustments.',
    inputs: ['Close calendar and cutoff rules', 'Open billing and exception queues', 'Reconciliations and prior carry-forward list'],
    outputs: ['Close-readiness checklist', 'Unresolved-item register', 'Owner sign-off packet with source links'],
    scenarios: ['Unbilled items surface near close', 'Open exceptions lack owners', 'Prior-period differences keep carrying forward'],
    launchQuestion: 'What evidence is required for close readiness, and who accepts each carry-forward item?',
    related: ['billing-reconciliation', 'revenue-schedule-preparation', 'billing-data-quality-review'],
  },
};

const base = `https://${String(site.domain).toLowerCase()}`;
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.title, description: service.desc, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (serviceAliases[slug]) permanentRedirect(`/services/${serviceAliases[slug]}`);
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const playbook = playbooks[service.slug];
  const related = playbook.related.map((relatedSlug) => services.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const url = `${base}/services/${service.slug}`;

  return <>
    <Header />
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, url, areaServed: 'United States' }} />
      <section className="service-hero"><div className="container two"><div><p className="eyebrow">Philippines-based service</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><a className="btn primary" href="/contact-us">Discuss this role</a></div><div className="support-strip"><h2>Built for a clear handoff</h2><p>Filipino specialists work from your examples, system permissions, and approval rules. Your team keeps ownership of exceptions and final decisions.</p><ul><li>Documented recurring tasks</li><li>Named quality reviewer</li><li>Defined escalation path</li><li>Weekly workload review</li></ul></div></div></section>
      <section className="section"><div className="container"><p className="eyebrow">Scope and boundaries</p><h2>What this workflow checks</h2><p>{playbook.scope}</p><p>{playbook.checks}</p></div></section>
      <section className="section muted"><div className="container two"><div><h2>Inputs and access</h2><ul>{playbook.inputs.map((item) => <li key={item}>{item}</li>)}</ul><p>Begin with the least access needed for the sample queue. Expand permissions only after the owner confirms the workflow and stopping points.</p></div><div><h2>Review-ready deliverables</h2><ul>{playbook.outputs.map((item) => <li key={item}>{item}</li>)}</ul><p>Each deliverable should preserve source references, current status, unresolved questions, and the next accountable owner.</p></div></div></section>
      <section className="section"><div className="container"><p className="eyebrow">Decision support</p><h2>Common starting scenarios</h2><div className="cards">{playbook.scenarios.map((scenario) => <article className="card" key={scenario}><h3>{scenario}</h3><p>Start with a mixed sample, record exceptions without guessing, and review the result before widening volume.</p></article>)}</div></div></section>
      <section className="section muted"><div className="container two"><div><h2>Questions before launch</h2><h3>{playbook.launchQuestion}</h3><p>Also name the queue cutoff, source system, review cadence, sensitive fields, response deadlines, and actions that support staff must never approve.</p></div><div><h2>Quality and escalation</h2><ul><li>Review a mixed first sample completely</li><li>Measure missing evidence and incorrect routing</li><li>Keep held work visible with a next date</li><li>Escalate financial, policy, coding, clinical, or legal decisions</li></ul></div></div></section>
      <section className="section"><div className="container"><h2>Related billing services</h2><div className="cards">{related.map((item) => item && <a className="card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><span>Compare service →</span></a>)}</div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
