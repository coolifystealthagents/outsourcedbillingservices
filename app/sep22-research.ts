const published = '2026-09-22' as const;
const checked = 'September 22, 2026';
const featuredImage = '/aug20-research-heroes/research-medical-billing-claim-evidence-lineage.png';

type Source = { title: string; publisher: string; url: string; use: string };
type Seed = {
  slug: string;
  topic: string;
  title: string;
  excerpt: string;
  question: string;
  decision: string;
  unit: string;
  population: string;
  evidence: string;
  states: string;
  tests: string;
  interpretation: string;
  limitations: string;
  service: string;
  serviceLabel: string;
  sources: Source[];
};

const greenBook: Source = {
  title: 'Standards for Internal Control in the Federal Government: 2025 Revision',
  publisher: 'U.S. Government Accountability Office',
  url: 'https://www.gao.gov/greenbook',
  use: 'the control environment, quality information, documented control activities, and monitoring',
};
const nist: Source = {
  title: 'Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Revision 5',
  publisher: 'National Institute of Standards and Technology',
  url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
  use: 'access control, audit records, information integrity, and separation of duties',
};
const ftc: Source = {
  title: 'Protecting Personal Information: A Guide for Business',
  publisher: 'U.S. Federal Trade Commission',
  url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business',
  use: 'mapping sensitive information, limiting access, secure handling, and appropriate disposal',
};
const regF: Source = {
  title: 'Debt Collection Practices (Regulation F)',
  publisher: 'Consumer Financial Protection Bureau',
  url: 'https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/debt-collection/',
  use: 'the regulatory context for covered consumer-debt communications, validation information, disputes, and records',
};

const seeds: Seed[] = [
  {
    slug: 'research-outsourced-billing-credit-memo-approval-evidence-2026',
    topic: 'credit memo approval evidence',
    title: 'Credit Memo Approval Evidence Research: Can a Draft Be Traced Before It Changes a Balance?',
    excerpt: 'A population study for tracing credit memo drafts to the initiating request, affected invoice, calculation, reason, and authorized approval.',
    question: 'For every credit memo prepared during a selected period, can a reviewer reconstruct why it was requested, how the amount was calculated, which invoice or balance it affects, and who authorized release?',
    decision: 'whether credit memo preparation is bounded well enough to delegate without transferring authority to reduce a balance',
    unit: 'one credit memo version linked to one initiating request and one release, rejection, cancellation, or open disposition',
    population: 'all credit memo drafts created in the observation window, including zero-value tests, replacements, rejected drafts, cancelled requests, duplicates, partial credits, tax questions, inaccessible-source cases, and drafts still open at cutoff',
    evidence: 'a stable memo and request identifier; account and invoice references; request channel and timestamp; reason supplied by the requester; source contract, order, service, return, or dispute record; amount and formula; currency and tax fields; preparer; reviewer; approval event; posting or release reference; superseded version; and final disposition',
    states: 'source complete, source incomplete, amount reproduced, amount mismatch, affected invoice mismatch, duplicate candidate, policy question, tax question, requester authority unclear, awaiting owner, approved, rejected, cancelled, released, and unresolved at cutoff',
    tests: 'rebuild amounts from preserved inputs; trace a sample in both directions between request, memo, invoice, and account; compare approval time with release time; search for reused request identifiers and equal-value duplicates; inspect every manual override; and ask a second reviewer to reproduce all exception classifications',
    interpretation: 'A correct calculation does not establish that a credit is owed. An approved reason does not prove that the entered amount is correct. A delayed memo may reflect missing source evidence or owner review rather than preparation capacity. Report those findings separately. If the source request changes, retain the earlier version instead of rewriting its history.',
    limitations: 'Contract terms, tax treatment, returns policy, customer negotiations, accounting treatment, foreign currency, restricted records, and system posting behavior can limit reconstruction. The method does not determine entitlement, legal liability, tax, accounting classification, materiality, or final approval.',
    service: '/services/credit-memo-administration',
    serviceLabel: 'Review credit memo administration support',
    sources: [greenBook, nist, ftc],
  },
  {
    slug: 'research-outsourced-billing-month-end-cutoff-completeness-2026',
    topic: 'month-end billing cutoff completeness',
    title: 'Month-End Billing Cutoff Research: What Was Open When the Cycle Closed?',
    excerpt: 'A frozen-population method for testing whether billable work, draft invoices, exceptions, and approvals were represented at close.',
    question: 'At the declared billing cutoff, did the close population include every known candidate item and preserve the disposition of work that was billed, held, excluded, cancelled, or still unresolved?',
    decision: 'whether month-end billing support produces a reproducible close package instead of a clean-looking list that omits difficult items',
    unit: 'one billable candidate or previously open billing item tied to one cutoff disposition and, where applicable, one draft or released invoice',
    population: 'the prior open-item rollforward plus every source event, approved recurring item, usage file, manual request, adjustment, late arrival, cancellation, and exception identified for the selected close window, without removing items simply because they lack a final value',
    evidence: 'source identifier and system; service or activity date; ingestion date; billing period; customer or account; item type; expected owner; prior-period state; current cutoff state; invoice or draft link; hold or exclusion reason; approval reference; post-cutoff movement; preparer; reviewer; and close sign-off',
    states: 'released in period, prepared and awaiting approval, source incomplete, commercial question, late arrival, valid hold, valid exclusion, cancelled with evidence, carried forward, duplicate candidate, unmatched draft, unmatched source item, inaccessible, and unresolved',
    tests: 'roll the prior closing population into the current opening population; reconcile source counts and values where values are known; inspect events around both sides of cutoff; trace every exclusion to a reason and owner; compare invoices back to candidates and candidates forward to invoices; and rerun the close report after corrections using the same frozen rules',
    interpretation: 'A balanced invoice total can coexist with missing items. A complete candidate population can also contain amounts that require judgment. Count completeness, value reconciliation, approval status, and release status therefore need separate measures. Post-cutoff discoveries belong in a movement schedule; they should not be silently inserted into the original snapshot.',
    limitations: 'Late operational records, timezone differences, estimates, unapproved commercial changes, system interfaces, restricted source access, and business-specific close policies constrain the result. This design does not decide whether activity is billable, when revenue is recognized, or whether finance should close the period.',
    service: '/services/month-end-billing-support',
    serviceLabel: 'Review month-end billing support',
    sources: [greenBook, nist, ftc],
  },
  {
    slug: 'research-outsourced-billing-dispute-evidence-chain-2026',
    topic: 'billing dispute evidence chain',
    title: 'Billing Dispute Evidence Research: Can the File Support an Owner Decision?',
    excerpt: 'A case-file study for separating customer statements, source records, calculations, correspondence, and owner judgments before resolution.',
    question: 'Does each billing dispute file preserve the customer-stated issue and the relevant account evidence well enough for an authorized owner to make and explain a decision?',
    decision: 'whether dispute documentation can be delegated as evidence preparation while the buyer retains authority over credits, refunds, settlement, and external statements',
    unit: 'one disputed charge or defined group of charges connected to one customer-stated issue and one current owner disposition',
    population: 'all disputes received through approved channels during the frozen window, including duplicates, reopened cases, partial disputes, identity holds, privacy escalations, legal notices, inaccessible records, withdrawn matters, and unresolved cases',
    evidence: 'privacy-safe case identifier; received channel and time; authenticated account locator; the customer statement in its original form; disputed invoice and line references; amount disputed; source contract, order, usage, delivery, or service records; prior adjustments; calculation worksheet; correspondence chronology; deadline source; assigned owner; decision; communication approval; and resolution record',
    states: 'intake complete, identity or authority check required, charge reference missing, source record missing, source conflict, arithmetic reproduced, arithmetic mismatch, contract question, privacy concern, legal escalation, duplicate or related case, awaiting owner, decision recorded, response approved, reopened, and unresolved',
    tests: 'trace every factual statement in the case summary to a source locator; preserve customer wording apart from the internal interpretation; recalculate disputed amounts; verify dates and attachments in the chronology; link duplicates without deleting messages; test access permissions; and have a second reviewer rebuild a mixed sample from the case index',
    interpretation: 'File completeness is not evidence that the customer or business is correct. A source conflict may be the central fact, not a documentation defect. Resolution time can also mislead when identity checks, missing records, or authorized negotiation occur outside the preparation queue. The report should show evidence readiness and decision status rather than assign fault.',
    limitations: 'Privilege, privacy, jurisdiction, contract language, payment-network rules, consumer law, channel authentication, oral communications, incomplete history, and confidential negotiations limit what a preparer can collect or conclude. Qualified owners must decide legal positions, credits, refunds, settlement, and final communications.',
    service: '/services/dispute-documentation',
    serviceLabel: 'Review dispute documentation support',
    sources: [greenBook, nist, ftc, regF],
  },
  {
    slug: 'research-outsourced-billing-promise-to-pay-authority-2026',
    topic: 'collections promise-to-pay authority',
    title: 'Promise-to-Pay Research: Did the Collections Queue Record a Commitment or an Assumption?',
    excerpt: 'A communication cohort for testing the source, terms, authority, follow-up, and outcome of recorded payment commitments.',
    question: 'When a billing queue records a promise to pay, does the record show who made the statement, the exact amount and date, the communication source, and any authority limits that affect follow-up?',
    decision: 'whether collections follow-up records support safe routing and forecasting without allowing a specialist to invent terms or make unauthorized commitments',
    unit: 'one recorded payment commitment tied to one account, one communication event, and one stated amount or payment action',
    population: 'every record assigned a promise, commitment, payment-plan, callback, disputed, or equivalent status during the window, including later edits, broken promises, partial payments, duplicate contacts, third-party statements, inaccessible recordings, and records reversed after review',
    evidence: 'account and invoice locator; communication date, channel, and participants; authentication or authority state; exact customer statement or approved structured capture; amount; currency; promised date; payment method only where collection and storage are authorized; conditions; dispute indicators; collector notes; next action; owner; later payment match; edit history; and disposition',
    states: 'specific supported commitment, incomplete commitment, callback only, third-party statement, dispute raised, terms requested, owner approval required, duplicate record, statement conflict, access blocked, paid as stated, partially paid, unpaid at observation cutoff, superseded, and unresolved',
    tests: 'compare structured fields with the preserved communication; distinguish a request, intention, and confirmed commitment; inspect all edits to amount and date; match later receipts without assuming causation; verify that disputed items follow the approved path; review contact timing and channel rules; and have a second reviewer classify ambiguous language independently',
    interpretation: 'A later payment does not prove that a specific follow-up caused it. An unpaid commitment does not establish unwillingness or collector error. The record may show that circumstances changed, that the initial entry was vague, or that a dispute interrupted collection. Forecasting use should disclose the definition, denominator, observation window, and unknown outcomes.',
    limitations: 'The legal status of a debt, coverage under collection law, consent, identity, communication restrictions, settlement authority, payment processing, hardship, disputes, jurisdiction, and company policy all affect permissible action. The study is not legal advice and does not authorize contact, terms, fees, credit reporting, or settlement.',
    service: '/services/collections-follow-up',
    serviceLabel: 'Review collections follow-up support',
    sources: [regF, greenBook, nist, ftc],
  },
  {
    slug: 'research-outsourced-billing-reconciliation-control-total-provenance-2026',
    topic: 'billing reconciliation control total provenance',
    title: 'Billing Reconciliation Control Total Research: Where Did the Number Come From?',
    excerpt: 'A reproducibility study for tracing opening balances, source populations, movements, exceptions, and closing totals to preserved evidence.',
    question: 'Can each control total in a billing reconciliation be rebuilt from a named source population and a complete movement schedule without relying on copied values or private preparer knowledge?',
    decision: 'whether reconciliation preparation is documented and controlled enough to outsource while finance retains judgment, adjustment authority, and sign-off',
    unit: 'one control total for one named population, system, period, currency, extraction, and version, together with its opening balance, movements, and closing balance',
    population: 'every control total and reconciling item in the selected package, including zero balances, carried exceptions, manual adjustments, late entries, reversals, duplicates, inaccessible extracts, replaced files, and items still unresolved when the package is signed',
    evidence: 'stable reconciliation and version identifier; source system and report name; query or filter; extraction time and timezone; covered period; currency and unit; row count; source hash or protected file locator; opening balance; classified movements; closing balance; downstream comparison; reconciling items; formula; adjustment request; preparer; reviewer; approval; and superseded version',
    states: 'reproduced, reproduced with documented transformation, opening mismatch, source population mismatch, movement mismatch, closing mismatch, currency or unit conflict, duplicate, unsupported manual adjustment, source unavailable, awaiting owner, approved exception, carried exception, and unresolved',
    tests: 'foot and cross-foot each schedule; recalculate opening plus movements to closing; recreate totals from frozen source rows; compare source and downstream populations in both directions; inspect formulas replaced by values; verify currency and sign conventions; retain prior versions; and ask an independent reviewer to rebuild every high-risk or unexplained item',
    interpretation: 'Agreement between two totals is weak evidence if one was copied from the other. A difference is not automatically an error because timing, scope, or an approved adjustment may explain it. Findings should identify source independence, population definition, arithmetic result, evidence status, and owner judgment in different fields.',
    limitations: 'Mutable reports, unavailable historical queries, aggregation, currency translation, timing, system migrations, manual journals, restricted data, and organization-specific accounting policies may prevent full reconstruction. The method does not determine accounting treatment, materiality, fraud, tax, or whether an adjustment should be approved.',
    service: '/services/billing-reconciliation',
    serviceLabel: 'Review billing reconciliation support',
    sources: [greenBook, nist, ftc],
  },
];

const body = (x: Seed): string[] => [
  `Research question. ${x.question} The buyer decision is ${x.decision}. This article presents a research design, not a claim about results. It separates observed records, calculations, interpretations, and unresolved facts so a buyer can judge the evidence without confusing a plausible explanation with a measured cause.`,
  `Why the question belongs in outsourced billing research. Delegation changes who prepares the record, not who owns the business decision. A Philippines-based billing specialist may organize evidence, reproduce documented arithmetic, maintain a queue, and prepare an exception question. The buyer still controls contracts, accounting positions, legal and privacy decisions, balance changes, customer commitments, final release, and sign-off. Research should test whether that boundary is visible in daily work.`,
  `Unit of analysis. Use ${x.unit}. Give the unit a stable, privacy-safe identifier. Link corrected, reopened, or replaced versions rather than overwriting the earlier state. Do not change the unit midway through analysis by mixing accounts, invoices, messages, batches, people, and events in one rate. If grouped items are necessary, document the grouping rule and retain the members.`,
  `Population and cutoff. Include ${x.population}. Freeze the observation window, systems, reports, filters, timezone, extraction time, duplicate rule, and cutoff before classification. Keep a count of records that cannot be accessed. After-cutoff arrivals and decisions belong in a movement log. They may explain the final state, but they must not quietly alter the opening population used to calculate results.`,
  `Evidence record. Capture ${x.evidence}. Use the minimum sensitive detail needed for an authorized reviewer to retrieve the source from an approved system. The study table should contain locators and classifications, not copies of protected records when copies are unnecessary. Mark each field as source-observed, externally reported, calculated, owner-interpreted, or unknown.`,
  `Classification. Apply declared states such as ${x.states}. Write definitions before looking at the outcome, and keep examples for borderline cases. A queue label is not self-proving. "Approved," "disputed," or "complete" only becomes useful research evidence when the record identifies the event, actor, timestamp, scope, and source that support the label. Preserve conflicts rather than picking the more convenient record.`,
  `Method. Start with the frozen population and preserve evidence of the extraction. Normalize identifiers, units, and timestamps in separate fields without replacing source values. Link each unit to its upstream evidence and downstream result. Apply the classification rules. Calculate only from records that contain the required inputs. Review exceptions and boundary cases, then publish counts, denominators, late movements, unknowns, and access exclusions together.`,
  `Reproducibility checks. ${x.tests}. A second reviewer should work from the same source locators and written rules, not from the first reviewer's conclusion. Record initial disagreement, the evidence examined, any owner adjudication, and the final rule clarification. If the rule changes after results are visible, label that analysis exploratory and rerun the complete frozen population.`,
  `Measures. Report the total population; source-linked units; units with complete required fields; conflicts; duplicates; inaccessible records; owner-pending items; resolved items; and unresolved items. Show each percentage with its numerator and denominator. For elapsed time, name the start and end events, disclose how many units contain both, and publish a median plus a stated upper percentile. Averages alone conceal long waits.`,
  `Facts and calculations. Facts are preserved source values, identifiers, versions, statements, and timestamps. Calculations include joins, elapsed intervals, formulas, counts, and reconciliations produced from those facts. Analysis applies a declared classification rule. Inference proposes why a pattern may have occurred. Keep these in separate report columns. A repeated pattern can guide the next investigation, but it does not prove motive or root cause.`,
  `Interpretation. ${x.interpretation} Compare results only when population rules, source availability, authority, cutoff, and case mix are reasonably comparable. If one of those conditions changes, segment the result. Do not turn a queue measure into an individual performance score when source quality, access, approvals, and downstream decisions are controlled by other roles.`,
  `Uncertainty. Unknown is a reportable result. Use it when a source, version, identifier, timestamp, authority, or final disposition cannot be established. Name the reason: missing evidence, denied access, conflicting records, undefined instructions, or an owner decision still pending. Do not substitute the current screen for historical evidence or fill a gap with the value that makes the reconciliation work.`,
  `Access and retention. Give the specialist only the systems and records needed for the assigned step. Separate preparation rights from approval, release, balance-change, and access-administration rights. Log material changes and retain evidence according to the buyer's approved policy and applicable requirements. Remove access when the role changes or ends. Research extracts should avoid sensitive fields that do not serve the stated question.`,
  `Decision use. The result can tell a buyer where work stops: intake, source access, instructions, system linkage, preparation, reviewer capacity, or owner judgment. It can support a narrower role design, a required-field change, a better exception code, or a review cadence. It cannot, by itself, establish that outsourcing caused the pattern or that adding headcount will correct it.`,
  `Limitations. ${x.limitations} Selection rules, observation length, source retention, access constraints, system-created timestamps, non-random missing records, and local procedures also limit comparison. This design is not a universal industry benchmark. Outsourced Billing Services does not claim to have run this study for a client, achieved a stated result, or guaranteed an outcome.`,
  `Niche conclusion. For a buyer considering outsourced billing support, the useful test is whether prepared work remains traceable and reaches the right owner with uncertainty intact. The proposed population, evidence model, and independent checks make that test reproducible. They also keep the specialist's role practical: prepare, compare, document, and escalate without quietly acquiring authority that belongs to the buyer.`,
  `Source method. We reviewed the current publisher pages on ${checked} and used them for control, security, privacy, or regulatory context. They do not supply company performance data and do not prove an outcome for a billing operation. Applicability depends on the buyer's facts and should be evaluated by qualified legal, accounting, compliance, privacy, or security owners where needed.`,
  ...x.sources.map((source) => `${source.title}. ${source.publisher}. ${source.url}. Checked ${checked}. Used for ${source.use}.`),
];

export const sep22ResearchBatch = seeds.map((x) => ({
  slug: x.slug,
  title: x.title,
  excerpt: x.excerpt,
  published,
  datePublished: published,
  updated: published,
  featuredImage,
  body: body(x),
  serviceCta: {
    href: x.service,
    label: x.serviceLabel,
    title: 'Turn the research design into a bounded support role',
    body: 'Define approved sources, required evidence, access, exception ownership, and decision authority before delegating the queue.',
  },
}));

export const sep22ResearchTopics = seeds.map(({ slug, topic, sources }) => ({ slug, topic, sources }));
