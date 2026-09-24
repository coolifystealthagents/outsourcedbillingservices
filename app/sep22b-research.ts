const published = '2026-09-22' as const;
const checked = 'September 22, 2026';
const featuredImage = '/aug20-research-heroes/research-medical-billing-remittance-batch-reconciliation.png';

export type ResearchSource = { title: string; publisher: string; url: string; use: string };
export type ResearchSeed = {
  slug: string; topic: string; title: string; excerpt: string; question: string;
  decision: string; unit: string; population: string; evidence: string; states: string;
  tests: string; interpretation: string; limitations: string; service: string;
  serviceLabel: string; sources: ResearchSource[];
};

type Source = ResearchSource;
type Seed = ResearchSeed;

const greenBook: Source = { title: 'Standards for Internal Control in the Federal Government: 2025 Revision', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'quality information, control activities, segregation of duties, and monitoring' };
const nist: Source = { title: 'Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Revision 5', publisher: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', use: 'least privilege, audit records, change control, and information integrity' };
const ftc: Source = { title: 'Protecting Personal Information: A Guide for Business', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', use: 'data inventory, limited access, secure handling, and disposal' };
const fasb: Source = { title: 'Revenue Recognition: ASU 2014-09, Revenue from Contracts with Customers (Topic 606)', publisher: 'Financial Accounting Standards Board', url: 'https://fasb.org/projects/recently-completed-projects/revenue-recognition-summary', use: 'authoritative context for revenue-recognition judgments that remain with qualified accounting owners' };
const cisa: Source = { title: 'Use Logging on Business Systems', publisher: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems', use: 'useful event records, centralized logging, protected log access, and retention' };

const seeds: Seed[] = [
  {
    slug: 'research-outsourced-billing-usage-event-to-invoice-lineage-2026', topic: 'usage event to invoice lineage',
    title: 'Usage Event-to-Invoice Lineage Research: Can Every Billed Unit Reach Its Source?',
    excerpt: 'A bidirectional population study connecting source activity, transformations, pricing inputs, draft lines, exceptions, and release approval.',
    question: 'For a frozen usage-billing cycle, can every billed quantity be traced back to eligible source events and can every eligible source event be traced forward to a billed, held, excluded, or unresolved disposition?',
    decision: 'whether usage-billing administration is documented well enough to delegate without allowing a support specialist to interpret contracts or approve charges',
    unit: 'one source usage event or declared aggregate connected to one customer, service, billing period, transformation version, and invoice-line disposition',
    population: 'all source events received for the selected period, including zero-quantity records, corrections, duplicates, late arrivals, rejected events, manual imports, inaccessible events, test records, aggregate-only feeds, and events still unresolved at cutoff',
    evidence: 'source system and event identifier; customer and service mapping; event and ingestion time with timezone; quantity and unit; correction or supersession link; extraction version; eligibility rule locator; transformation version; pricing-input locator; draft invoice and line; exclusion or hold reason; preparer; reviewer; approval; and final release reference',
    states: 'source linked, transformed with reproducible rule, duplicate candidate, corrected event, mapping missing, unit conflict, period conflict, pricing question, excluded with evidence, held for owner, billed, released, source inaccessible, and unresolved',
    tests: 'reconcile source counts and quantities to the transformation output; trace a stratified sample in both directions; rerun transformations from frozen inputs; inspect boundary timestamps, negative events, and manual overrides; compare invoice units with source units before price; and require a second reviewer to reproduce every exception class',
    interpretation: 'Quantity agreement does not prove that an event is contractually billable or that a price is correct. A missing invoice line can reflect a supported exclusion, a mapping defect, a late event, or an owner decision. Report completeness, transformation accuracy, pricing readiness, and approval status separately.',
    limitations: 'Contract language, metering design, aggregation, clock drift, late corrections, currency, tax, bundled services, mutable exports, and inaccessible raw events constrain the analysis. It cannot decide entitlement, price, revenue treatment, tax, or customer communication.',
    service: '/services/usage-billing-administration', serviceLabel: 'Review usage-billing administration support', sources: [greenBook, nist, cisa, ftc],
  },
  {
    slug: 'research-outsourced-billing-subscription-change-effective-date-lineage-2026', topic: 'subscription change effective-date lineage',
    title: 'Subscription Change Effective-Date Research: Which Version Governed the Charge?',
    excerpt: 'A version-lineage study of plan changes, pauses, renewals, cancellations, credits, draft charges, and owner approvals.',
    question: 'When a subscription charge changes, can a reviewer identify the request, authorized terms, effective date, system version, proration inputs, draft charge, and approval that governed the result?',
    decision: 'whether subscription-billing support can prepare recurring charges and exception packets while commercial and accounting owners retain interpretation and approval',
    unit: 'one subscription change event linked to one affected billing period, one calculation version, and one charge, credit, hold, cancellation, or unresolved outcome',
    population: 'all changes created, imported, or made effective during the selected cycle, including upgrades, downgrades, pauses, resumptions, cancellations, renewals, date corrections, price overrides, failed changes, backdated requests, and records open at cutoff',
    evidence: 'subscription and customer locator; prior and proposed plan version; request source and time; requester authority state; approved terms locator; requested and system effective dates; timezone; quantity; price input; proration convention; calculation; prior invoice or credit; change history; preparer; reviewer; approval; and released charge reference',
    states: 'version linked, authority unclear, effective-date conflict, term conflict, quantity conflict, price question, proration reproduced, proration mismatch, duplicate change, superseded, held, approved, rejected, released, reversed, inaccessible, and unresolved',
    tests: 'order all versions without overwriting the prior state; compare requested, approved, entered, and effective timestamps; independently reproduce prorations from preserved inputs; inspect changes near renewal and cutoff; trace every override to an approval; compare change events forward to charges and charges backward to changes; and independently review ambiguous sequences',
    interpretation: 'A system-applied effective date is an observation, not proof that the date reflects the agreement. A reproduced proration proves arithmetic under stated inputs, not that the inputs or policy are correct. Treat timing, term interpretation, calculation, approval, and release as separate findings.',
    limitations: 'Contract amendments, sales authority, consumer rules, local cancellation policy, timezone handling, tax, currency, product bundling, migrations, and undocumented manual changes may prevent a definitive reconstruction. The study cannot decide enforceability, customer entitlement, accounting treatment, or the correct commercial outcome.',
    service: '/services/subscription-billing-support', serviceLabel: 'Review subscription-billing support', sources: [greenBook, nist, fasb, ftc],
  },
  {
    slug: 'research-outsourced-billing-payment-application-suspense-aging-2026', topic: 'payment application suspense aging',
    title: 'Payment Application Suspense Research: Why Is Confirmed Cash Still Unapplied?',
    excerpt: 'A cohort design that separates bank evidence, remittance availability, account matching, posting preparation, owner decisions, and elapsed time.',
    question: 'For confirmed receipts held in an unapplied or suspense queue, which evidence state explains the wait and how much time belongs to retrieval, matching, preparation, owner review, or system completion?',
    decision: 'whether payment-posting support needs better evidence access, matching instructions, reviewer capacity, or decision ownership rather than a broader posting mandate',
    unit: 'one bank-confirmed receipt or separately identifiable receipt component linked to one current application, return, transfer, hold, or unresolved disposition',
    population: 'every receipt entering or remaining in the selected suspense population, including split receipts, combined deposits, missing remittances, partial matches, duplicate candidates, reversals, currency conflicts, unidentified senders, restricted records, and post-cutoff resolutions',
    evidence: 'bank trace and protected locator; received and value dates; amount and currency; sender evidence; deposit or batch; remittance locator; candidate customer and invoice references; search steps; match rule; confidence must not replace proof; posting proposal; exception reason; owner question; approval; system result; and final reconciliation',
    states: 'bank confirmed, remittance missing, sender unresolved, account unresolved, invoice unresolved, multiple candidates, amount conflict, currency conflict, duplicate candidate, posting prepared, awaiting owner, approved application, return approved, transfer approved, completed, reversed, inaccessible, and unresolved',
    tests: 'reconcile opening suspense plus receipts and movements to closing suspense; test candidate matches against stable identifiers rather than amount alone; inspect repeated amounts and split deposits; separate bank receipt time from remittance receipt and review time; reproduce aging intervals; trace completed applications back to bank evidence; and independently review all money-movement proposals',
    interpretation: 'An equal amount or familiar sender is not identity evidence. Aging may reflect missing remittance, restricted bank access, ambiguous customer references, an owner decision, or posting capacity. A later application does not prove the first candidate was reasonable. Publish time by evidence state and preserve rejected candidates.',
    limitations: 'Bank retention, payment-network data, privacy, fraud controls, currency conversion, combined settlements, lockbox practices, accounting policy, and incomplete remittance detail can limit linkage. The method cannot authorize an application, return, transfer, refund, write-off, or accounting entry.',
    service: '/services/payment-posting', serviceLabel: 'Review payment-posting support', sources: [greenBook, nist, cisa, ftc],
  },
  {
    slug: 'research-outsourced-billing-invoice-release-segregation-2026', topic: 'invoice preparation and release segregation',
    title: 'Invoice Release Segregation Research: Are Preparation and Approval Actually Separate?',
    excerpt: 'An access-and-event study testing whether invoice creation, edits, approval, release, cancellation, and override actions remain attributable.',
    question: 'For invoices released during a selected cycle, does the evidence show who prepared each version, who approved it, who released it, which access path they used, and whether exceptions followed the declared authority model?',
    decision: 'whether an outsourced invoice-preparation role has clear access and approval boundaries that remain visible in the operating record',
    unit: 'one released, cancelled, or held invoice version together with its preparation, edit, approval, release, and post-release events',
    population: 'all invoice versions reaching ready, approved, released, cancelled, voided, or equivalent states during the window, including automated invoices, emergency overrides, service accounts, rejected approvals, same-user actions, missing logs, and invoices still held at cutoff',
    evidence: 'invoice and version identifier; source packet locator; created time and actor; material edits; preparer identity; approval request; approver identity and event; approval scope; release actor and event; role and permission snapshot; override reason; system or integration identity; delivery response; cancellation or correction; and audit-log locator',
    states: 'declared separation observed, approved combined role, unauthorized combination candidate, approval before final edit, approval scope unclear, release without linked approval, automation with named control owner, override supported, override unsupported, log incomplete, access mismatch, cancelled, and unresolved',
    tests: 'compare written role design with current permissions and actual event logs; identify edits after approval; trace approvals to the exact released version; inspect shared, service, and integration accounts; verify override review; sample ordinary and exception invoices; test whether preparers can self-approve or release; and have an authorized second reviewer reproduce every potential boundary failure',
    interpretation: 'Different usernames do not prove independent review, and one username does not automatically prove a control failure when a documented small-team alternative control exists. The study should report actual capability, actual events, approval scope, exception evidence, and compensating review separately.',
    limitations: 'Application log design, identity federation, shared terminals, integrations, emergency procedures, role inheritance, retention, and organization size affect the evidence. This method does not certify fraud prevention, legal compliance, invoice accuracy, or the adequacy of a control for a particular organization.',
    service: '/services/invoice-preparation', serviceLabel: 'Review invoice-preparation support', sources: [greenBook, nist, cisa, ftc],
  },
  {
    slug: 'research-outsourced-billing-revenue-schedule-source-change-control-2026', topic: 'revenue schedule source change control',
    title: 'Revenue Schedule Source-Change Research: Can Every Update Be Reproduced?',
    excerpt: 'A versioned schedule study connecting approved source changes, calculations, exceptions, review, and downstream handoff.',
    question: 'For each revenue-schedule change in a selected close period, can a reviewer reproduce the prior value, new value, source event, calculation, approval, and downstream handoff without relying on preparer memory?',
    decision: 'whether revenue-schedule preparation can be delegated as controlled evidence and calculation work while qualified owners retain accounting judgments and sign-off',
    unit: 'one schedule line and version changed by one source event, approved correction, calculation update, reclassification request, or close adjustment',
    population: 'all added, changed, removed, carried, held, and manually overridden schedule lines during the period, including zero-value lines, terminated arrangements, amendments, delayed source records, currency changes, reopened periods, inaccessible support, and unresolved entries',
    evidence: 'schedule and line identifier; prior version; customer or arrangement locator; source contract, invoice, delivery, acceptance, usage, or amendment locator; event and effective dates; amount and currency; calculation inputs and formula; period allocation; preparer; reviewer; accounting question; approval; export or journal handoff; downstream response; and supersession link',
    states: 'source linked, calculation reproduced, formula mismatch, date conflict, currency conflict, amendment pending, accounting interpretation required, duplicate line, unsupported override, downstream mismatch, approved, rejected, carried, inaccessible, superseded, and unresolved',
    tests: 'compare versions field by field; trace schedule lines back to named sources; independently recalculate from preserved inputs; inspect formula-to-value replacements; reconcile opening schedule plus additions, changes, and removals to closing; compare approved output with downstream handoff; isolate owner judgments from clerical changes; and reproduce all high-risk exceptions with a second reviewer',
    interpretation: 'A reproducible formula does not establish that the revenue treatment is correct. A source document can support dates and amounts while leaving performance obligations, allocation, collectibility, modification treatment, or recognition timing to qualified accounting judgment. Report evidence readiness and accounting approval separately.',
    limitations: 'Contract complexity, accounting policy, estimates, variable consideration, foreign currency, tax, system aggregation, confidential terms, period reopening, and incomplete historical versions can constrain reconstruction. The research is not an accounting opinion and cannot approve recognition, entries, disclosures, or materiality.',
    service: '/services/revenue-schedule-preparation', serviceLabel: 'Review revenue-schedule preparation support', sources: [greenBook, nist, fasb, ftc],
  },
];

export const buildDecisionResearchBody = (x: ResearchSeed, checkedDate = checked): string[] => [
  `Research question. ${x.question} The buyer decision is ${x.decision}. This is a prospective research design, not a report of client results. It keeps source facts, calculations, analysis, owner interpretation, and uncertainty distinct so a buyer can see what the proposed evidence would and would not establish.`,
  `Why this matters for Outsourced Billing Services. A Philippines-based billing specialist can prepare records, compare approved fields, reproduce documented calculations, maintain an exception queue, and assemble a review packet. Delegation does not transfer authority over contracts, accounting, money movement, customer commitments, privacy, legal positions, access administration, or final release. The research tests whether daily records preserve that line.`,
  `Unit of analysis. Use ${x.unit}. Assign a stable, privacy-safe identifier and preserve each corrected, reopened, cancelled, or superseded version. Do not combine events, accounts, invoices, people, and balances in one denominator. If the operation aggregates records, retain the member list or document why a lower level is unavailable.`,
  `Population and cutoff. Include ${x.population}. Before inspecting results, freeze the observation window, timezone, systems, extraction versions, query or report names, filters, duplicate rule, and cutoff. Keep inaccessible records in the denominator with an access state. Record later arrivals and decisions in a movement schedule instead of rewriting the opening population.`,
  `Evidence model. Capture ${x.evidence}. Store sensitive source material only in approved systems. The research table should use permitted locators and the minimum fields needed to reproduce a finding. Label every value source-observed, externally reported, calculated, owner-interpreted, or unknown, and retain the original value beside any normalized value.`,
  `Classification. Use declared states such as ${x.states}. Define the states before outcome review and keep examples for boundary cases. A status label does not prove its own meaning. Approved, complete, posted, or released requires a linked actor, time, scope, version, and source event. Conflicts remain visible until the authorized owner resolves them.`,
  `Method. Start from the frozen population, preserve extraction evidence, normalize identifiers and timestamps in separate fields, and link each unit upstream to its source and downstream to its disposition. Apply the written states without changing the rule to improve the result. Count unknowns, late movements, exclusions, access blocks, owner-pending work, and resolved work alongside ordinary completions.`,
  `Reproducibility tests. ${x.tests}. The second reviewer must use the same source locators and written rules, not the first reviewer's conclusion. Record the initial classification, disagreement, evidence consulted, owner adjudication when required, and final rule clarification. A rule changed after results are visible should be labeled exploratory and rerun across the frozen population.`,
  `Measures. Publish the full population, source-linked units, complete required-field units, conflicts, duplicates, inaccessible records, owner-pending items, resolved items, and unresolved items. Show numerator and denominator with every rate. For elapsed time, define the exact starting and ending events and disclose the count with both timestamps. Use a median and a stated upper percentile instead of an average alone.`,
  `Facts, analysis, and inference. Facts are preserved values, identifiers, versions, statements, actors, and timestamps. Calculations include joins, intervals, formulas, and reconciliations. Analysis applies the declared classification. Inference proposes a possible explanation. Keep each in a separate field. A recurring pattern can support another test, but it does not establish motive, fault, or cause.`,
  `Interpretation. ${x.interpretation} Comparisons across periods or teams require reasonably consistent population rules, authority, systems, cutoff, and source availability. Segment results when those conditions change. Do not turn a queue measure into an individual score when source quality, permissions, owner response, or downstream systems sit outside the specialist's control.`,
  `Uncertainty. Unknown is a valid result when a source, version, identity, timestamp, authority, rule, or final disposition cannot be established. Name whether the cause is missing evidence, denied access, conflicting records, undefined instructions, system retention, or an owner decision still pending. Never substitute a current screen for historical evidence or choose the value that makes a total reconcile.`,
  `Access and auditability. Grant only the access needed for the assigned preparation step. Keep approval, release, balance change, money movement, and permission administration separate where the buyer's control design requires it. Review access when duties change. Protect logs and evidence from unnecessary alteration, and retain them under the buyer's approved policy and applicable requirements.`,
  `Decision use. The findings can show whether work stops at intake, mapping, source access, calculation, exception instructions, reviewer capacity, owner judgment, or system completion. A buyer can then narrow the role, improve a required field, adjust a review cadence, or fix a source handoff. The study cannot show that outsourcing caused a pattern or guarantee that staffing will correct it.`,
  `Limitations. ${x.limitations} Non-random missing records, mutable reports, local procedures, short observation windows, and incomplete retention also restrict generalization. Outsourced Billing Services does not claim to have conducted this study for a client, achieved a measured result, or guaranteed an operational or financial outcome.`,
  `Niche conclusion. The useful outsourcing question is not whether a queue can be made to look complete. It is whether another authorized person can reproduce the prepared work, see unresolved evidence, and make the reserved decision from a controlled record. This design gives a buyer a practical way to test that condition before expanding scope or access.`,
  `Source method. We reviewed the publisher pages below on ${checkedDate}. They supply control, security, privacy, logging, or accounting context, not performance data about Outsourced Billing Services or a client. Their application depends on the buyer's facts and should be assessed by qualified accounting, legal, privacy, security, tax, or compliance owners when needed.`,
  ...x.sources.map((source) => `${source.title}. ${source.publisher}. ${source.url}. Checked ${checkedDate}. Used for ${source.use}.`),
];

export const sep22bResearchBatch = seeds.map((x) => ({
  slug: x.slug, title: x.title, excerpt: x.excerpt, published, datePublished: published,
  updated: published, featuredImage, body: buildDecisionResearchBody(x), serviceCta: {
    href: x.service, label: x.serviceLabel, title: 'Turn the research question into a bounded billing role',
    body: 'Define sources, required evidence, access, exception ownership, review, and reserved decisions before handing off the queue.',
  },
}));

export const sep22bResearchTopics = seeds.map(({ slug, topic, sources }) => ({ slug, topic, sources }));
