import { buildDecisionResearchBody, type ResearchSeed, type ResearchSource } from './sep22b-research';

const published = '2026-10-02' as const;
const checked = 'October 2, 2026';
const featuredImage = '/aug20-research-heroes/research-medical-billing-remittance-batch-reconciliation.png';

const greenBook: ResearchSource = { title: 'Standards for Internal Control in the Federal Government: 2025 Revision', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'quality information, control activities, segregation of duties, and monitoring' };
const nist: ResearchSource = { title: 'Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Revision 5', publisher: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', use: 'audit records, controlled change, least privilege, and information integrity' };
const ftc: ResearchSource = { title: 'Protecting Personal Information: A Guide for Business', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', use: 'data inventory, limited access, secure handling, service-provider oversight, and disposal' };
const fasb: ResearchSource = { title: 'Revenue Recognition: ASU 2014-09, Revenue from Contracts with Customers (Topic 606)', publisher: 'Financial Accounting Standards Board', url: 'https://fasb.org/projects/recently-completed-projects/revenue-recognition-summary', use: 'authoritative context for revenue judgments reserved to qualified accounting owners' };
const cisa: ResearchSource = { title: 'Use Logging on Business Systems', publisher: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems', use: 'useful event records, centralized logging, protected log access, and retention' };

const seeds: ResearchSeed[] = [
  {
    slug: 'research-outsourced-billing-consolidated-invoice-entity-allocation-2026', topic: 'consolidated invoice entity allocation',
    title: 'Consolidated Invoice Allocation Research: Does Every Charge Reach the Intended Entity?',
    excerpt: 'A membership-and-allocation study connecting operating entities, approved billing groups, source charges, consolidated lines, exceptions, and release review.',
    question: 'For each consolidated invoice, can every component charge be traced to the intended legal or operating entity and can every eligible source charge be traced to an included, excluded, held, or unresolved disposition?',
    decision: 'whether consolidated-invoice preparation has reproducible membership and allocation evidence while entity, contract, tax, and release judgments remain with authorized owners',
    unit: 'one source charge assigned to one declared entity, billing group, invoice version, consolidated line, and final disposition',
    population: 'all charges considered for consolidation in the selected cycle, including cross-entity services, shared charges, reversals, credits, manual allocations, new entities, closed entities, intercompany-looking items, missing mappings, excluded charges, inaccessible records, and unresolved candidates',
    evidence: 'source charge and version; service period; customer and entity identifiers; approved billing-group version; membership effective dates; allocation rule locator; input amount and currency; calculation; consolidated invoice and line; exclusion or hold reason; preparer; reviewer; approval scope; release event; and correction lineage',
    states: 'entity linked, group membership linked, effective-date conflict, allocation reproduced, allocation mismatch, duplicate candidate, omitted candidate, cross-entity review required, tax question, held, approved, released, corrected, inaccessible, and unresolved',
    tests: 'trace every released line backward to component charges and every eligible charge forward to a disposition; freeze group membership by effective date; independently reproduce allocations; reconcile component and consolidated totals by currency; inspect new and closed entities; preserve negative and zero-value components; test manual overrides; and second-review every entity or membership conflict',
    interpretation: 'A consolidated total that balances does not prove that its components belong to the correct entity or that the grouping is contractually, legally, or tax appropriate. Membership evidence, arithmetic allocation, owner approval, and invoice release are separate findings.',
    limitations: 'Corporate structures, contract parties, tax registrations, intercompany policy, shared-service methods, currency, effective dates, source aggregation, and incomplete entity histories constrain the analysis. It cannot determine legal entity responsibility, transfer pricing, tax treatment, contract interpretation, accounting classification, or invoice release.',
    service: '/services/invoice-preparation', serviceLabel: 'Review invoice-preparation support', sources: [greenBook, nist, fasb, cisa],
  },
  {
    slug: 'research-outsourced-billing-invoice-number-collision-control-2026', topic: 'invoice number collision control',
    title: 'Invoice Number Collision Research: Can Each Reference Identify One Released Document?',
    excerpt: 'A namespace study of numbering rules, entity prefixes, resets, migrations, voids, drafts, exports, customer references, and duplicate-looking identifiers.',
    question: 'Across every invoice namespace used by the billing operation, does each released reference identify one document version in its declared context and do duplicate-looking values remain distinguishable?',
    decision: 'whether invoice numbering and retrieval controls support outsourced preparation without allowing a support role to invent identifiers, alter statutory sequences, or resolve ambiguous documents by guesswork',
    unit: 'one invoice reference observed in one issuer, system, series, period, document state, and version context',
    population: 'all invoice identifiers created, imported, released, voided, cancelled, corrected, migrated, or exposed to customers in the selected period, including drafts, credit documents, entity-specific series, year resets, reused legacy values, truncated exports, manual entries, and inaccessible records',
    evidence: 'invoice identifier exactly as stored and displayed; issuer and entity; system and namespace; series or prefix; sequence source; creation and release times; document type and version; customer account; migration key; void or cancellation event; replacement link; export representation; preparer; approver; and retrieval result',
    states: 'unique in context, duplicate across valid namespaces, collision candidate, reused after void, sequence gap, format transformation, truncation, migration alias, replacement linked, wrong-document retrieval, release blocked, approved exception, inaccessible, and unresolved',
    tests: 'preserve identifiers as strings; define each namespace before duplicate testing; compare exact and normalized values; inspect leading zeros, punctuation, resets, and prefixes; retrieve samples from customer-facing and internal systems; trace voids and replacements; reconcile issued counts to sequence events without assuming every gap is an error; and independently review every collision candidate',
    interpretation: 'The same visible number can be valid in different declared namespaces, while two differently formatted strings can retrieve the same document. Uniqueness, continuity, retrieval accuracy, regulatory requirements, and customer clarity should be reported separately.',
    limitations: 'Jurisdictional invoicing rules, entity policy, legacy migrations, offline issuance, third-party portals, formatting, truncation, sequence reservation, test environments, and missing audit history may limit conclusions. This study cannot define a legally compliant sequence, authorize renumbering, void documents, or decide tax treatment.',
    service: '/services/billing-data-quality-review', serviceLabel: 'Review billing data-quality support', sources: [greenBook, nist, cisa, ftc],
  },
  {
    slug: 'research-outsourced-billing-foreign-exchange-rate-input-lineage-2026', topic: 'foreign exchange rate input lineage',
    title: 'Billing Exchange-Rate Lineage Research: Which Rate Reached the Invoice?',
    excerpt: 'A source-and-calculation study separating transaction currency, billing currency, approved rate source, timestamp, convention, rounding, and owner release.',
    question: 'For every invoice line converted between currencies, can a reviewer reproduce the selected rate, source version, applicable timestamp, direction, rounding convention, converted amount, and approval?',
    decision: 'whether multi-currency invoice preparation can be delegated as evidence and calculation work while treasury, contract, tax, accounting, and release decisions remain with qualified owners',
    unit: 'one monetary component converted from one declared source currency into one billing currency using one rate observation and calculation version',
    population: 'all converted invoice, credit, adjustment, fee, and tax-related components in the chosen cycle, including weekends, holidays, backdated events, corrections, reversals, manual rates, missing rates, inverse-rate calculations, triangulation, currency changes, and unresolved conversions',
    evidence: 'source amount and currency; billing currency; contract or policy locator; rate publisher and series; source URL or approved feed; observation and effective timestamps with timezone; direct or inverse quote; triangulation path; precision and rounding rule; calculation; prior version; override request and approval; draft line; release reference; and later correction',
    states: 'approved source linked, timestamp supported, direct rate, inverse reproduced, triangulated, precision conflict, rounding conflict, stale rate candidate, missing observation, unsupported override, calculation matched, calculation mismatch, approved, released, corrected, inaccessible, and unresolved',
    tests: 'freeze the approved rate-source file or response; reproduce direct, inverse, and triangulated calculations; test currency direction; compare event, rate, billing, and release dates; inspect non-business-day handling; preserve full precision before approved rounding; reconcile component and invoice totals; trace every manual rate to approval; and independently recalculate all exceptions',
    interpretation: 'A mathematically correct conversion does not prove that the chosen source, date, convention, or rate is contractually or accounting appropriate. Source provenance, calculation accuracy, policy interpretation, approval, and release must remain distinct.',
    limitations: 'Contract terms, treasury policy, market conventions, rate availability, timezones, currency redenomination, tax, settlement timing, accounting rules, feed corrections, and rounding can change the appropriate treatment. The research cannot select an authoritative rate, provide financial advice, approve an override, or determine revenue or tax treatment.',
    service: '/services/billing-reconciliation', serviceLabel: 'Review billing-reconciliation support', sources: [greenBook, nist, fasb, cisa],
  },
  {
    slug: 'research-outsourced-billing-hold-release-evidence-2026', topic: 'billing hold release evidence',
    title: 'Billing Hold Release Research: What Evidence Changed Before Work Resumed?',
    excerpt: 'A state-transition study of hold reasons, scope, effective times, prerequisites, owner decisions, resumed work, and downstream consequences.',
    question: 'For every billing hold that was released, can a reviewer reconstruct the original reason and scope, evidence reviewed, prerequisite satisfied, authorized decision, effective time, and work that subsequently resumed?',
    decision: 'whether billing support can maintain hold evidence and prepare release packets without acquiring authority to remove restrictions, resume collection, issue invoices, or alter balances',
    unit: 'one hold version applied to one account, invoice, charge population, workflow stage, or communication scope and linked to one retained, narrowed, expanded, or released outcome',
    population: 'all holds active, created, changed, expired, or released during the window, including dispute, compliance, credit, data-quality, contract, tax, security, customer-requested, technical, partial-scope, inherited, duplicate, inaccessible, and unresolved holds',
    evidence: 'hold identifier and version; account and affected records; reason source; scope; created and effective times; initiating owner; prerequisites; review date; source evidence supplied; conflicting evidence; release request; decision owner; approval event; effective release time; resumed queue events; customer communication restriction; exception; and closure review',
    states: 'active supported, scope unclear, prerequisite open, prerequisite evidenced, conflicting evidence, owner review pending, retained, narrowed, expanded, release approved, release rejected, released effective, premature-resumption candidate, downstream resumed, inaccessible, and unresolved',
    tests: 'reconstruct state immediately before release; compare release evidence with declared prerequisites; preserve reason and scope versions; inspect automatic expiry separately from affirmative approval; identify work occurring while a hold remained effective; trace released items into downstream queues; sample retained holds for asymmetry; reconcile opening holds plus changes to closing holds; and second-review every premature-resumption candidate',
    interpretation: 'An elapsed review date is not release authority, and a completed prerequisite does not itself remove a hold. Conversely, a released hold does not prove that every downstream action is appropriate. Evidence readiness, owner decision, effective state, and resumed work are separate observations.',
    limitations: 'Hold terminology, system synchronization, legal or compliance restrictions, contract disputes, credit policy, privacy, owner availability, automatic expiration, partial scope, and incomplete state history constrain reconstruction. The study cannot remove a hold, determine liability, approve billing or collection, or provide legal or compliance conclusions.',
    service: '/services/customer-billing-support', serviceLabel: 'Review customer-billing support', sources: [greenBook, nist, ftc, cisa],
  },
  {
    slug: 'research-outsourced-billing-chargeback-receivable-reinstatement-2026', topic: 'chargeback receivable reinstatement lineage',
    title: 'Chargeback Reinstatement Research: Did the Disputed Payment Return to the Right Balance?',
    excerpt: 'An event-lineage study connecting original payment, application, chargeback, fees, dispute evidence, receivable state, owner decisions, and later recovery.',
    question: 'When a payment is charged back, can the operation trace the original receipt and application, processor event, disputed component, approved receivable treatment, customer-account effect, and any later reversal or recovery?',
    decision: 'whether payment and dispute support can prepare a complete chargeback packet and reconciliation while financial, legal, fraud, accounting, customer, and collections owners retain all disposition authority',
    unit: 'one processor chargeback component linked to one original payment event, one application history, one account treatment, and one final or open disposition',
    population: 'all chargebacks, reversals, representments, pre-arbitration events, fees, partial disputes, bundled settlements, duplicate-looking events, recovered amounts, lost disputes, open cases, inaccessible processor records, and unresolved account effects in the selected cohort',
    evidence: 'processor case and event identifiers; original payment and settlement; amount and currency; customer and invoice application; reason code and exact text; notice and deadline; fee component; processor timeline; evidence submission locator; decision event; account balance before and after; proposed reinstatement; approval; posting reference; customer communication state; later reversal or recovery; and reconciliation',
    states: 'original payment linked, application linked, chargeback observed, fee separated, duplicate candidate, deadline evidenced, evidence packet prepared, processor decision observed, reinstatement proposed, owner approval pending, approved treatment posted, reversed, recovered, account mismatch, inaccessible, and unresolved',
    tests: 'trace the chargeback backward to settlement and forward to account treatment; separate principal, fee, and currency components; preserve processor events without translating codes into legal conclusions; compare account state before and after; inspect partial and bundled cases; prevent duplicate reinstatement; reconcile processor movements to local postings; link later recovery to the same case; and independently review every balance-changing proposal',
    interpretation: 'A processor chargeback proves an observed payment-network event, not that the customer legally owes the amount or that a receivable should automatically be reinstated. Processor outcome, account treatment, customer communication, accounting entry, and collection strategy require separate evidence and authority.',
    limitations: 'Processor rules, network timelines, fraud controls, consumer law, contract terms, settlement aggregation, currency, fees, account architecture, evidence access, and later reversals may limit linkage. The study cannot decide liability, representment strategy, customer balance, write-off, refund, accounting entry, or collection action.',
    service: '/services/dispute-documentation', serviceLabel: 'Review dispute-documentation support', sources: [greenBook, nist, ftc, cisa],
  },
];

const specificAnalysis: Record<string, string[]> = {
  'research-outsourced-billing-consolidated-invoice-entity-allocation-2026': [
    'Entity-membership experiment. Build a time-bounded membership table before examining invoice totals. Each row should name the source entity, billing group, effective interval, approving record, and any overlapping or missing interval. Then join charges by their own service or event dates rather than the date the consolidation job happened to run. Test acquisitions, divestitures, newly activated entities, and entities that closed mid-cycle because these boundary cases reveal whether a current master record is being projected backward. Where a shared charge needs allocation, retain the unallocated source, the approved driver, each component, rounding residue, and the owner-approved destination of that residue. A group total can reconcile while a charge sits under the wrong entity, so balance and membership require different tests.',
    'Release scenario. Suppose one regional entity leaves a consolidated group on the twentieth day of a month, while the source system sends a full-month charge under the former parent account. The researcher should not choose an entity from the latest hierarchy screen. The evidence packet should show the service interval, historical membership, charge granularity, allocation instruction, draft treatment, and the exact question for the contract or tax owner. Compare the released invoice with the approved decision and preserve any corrected version. This scenario distinguishes a data lineage failure from a genuine interpretation question and prevents outsourced preparation from silently deciding which legal party owes the charge.',
  ],
  'research-outsourced-billing-invoice-number-collision-control-2026': [
    'Namespace analysis. Treat an invoice number as a composite key until evidence shows it is globally unique. Candidate components include issuer, legal entity, system, document type, series, fiscal period, environment, and version. Produce both an exact-value frequency table and a normalized-value table that removes presentation characters only for analysis. Never replace the stored reference with the normalized form. A value such as 000417 may be valid in two entity series, while INV-417 and INV417 may resolve to one document after an export transformation. Test search screens, PDFs, API responses, payment remittances, and customer portals because a control can succeed in the ledger yet fail at the place a customer or cash team tries to retrieve the invoice.',
    'Collision scenario. Consider a migration that imports a legacy invoice numbered 1042 after the new platform already issued 1042 under a different series whose prefix is omitted from a remittance export. The research should preserve both documents, their namespaces, migration keys, customers, amounts, issue dates, and retrieval behavior. It should test whether a payment reference can reach the wrong invoice and whether staff see enough context to stop. A sequence gap created by a void is a separate question from a collision, and a collision candidate is not authority to renumber either document. The useful finding identifies where contextual fields disappear and which authorized system owner must decide the correction.',
  ],
  'research-outsourced-billing-foreign-exchange-rate-input-lineage-2026': [
    'Rate reconstruction. Store the source observation exactly as published, including currency pair direction, timestamp, timezone, rate type, and precision. If the invoice requires the inverse, show the inversion formula and retain intermediate precision. If triangulation is approved, show both legs, their observation times, the intermediate currency, and the final rounding step. Recompute at component level and at invoice level because rounding each line can differ from rounding a total. Classify that difference rather than forcing one total to match. Separate missing-source, stale-source, wrong-direction, wrong-date, precision, rounding, and unauthorized-override findings; each requires a different repair owner.',
    'Boundary scenario. An invoice prepared on Monday may cover a service event from Sunday when the approved source publishes only business-day observations. The latest available Friday rate, a Monday rate, or another convention could each be plausible under different policies. The support researcher should display the unavailable Sunday observation, relevant policy locator, candidate source records, calculations under each documented convention, and the unresolved owner question. It should not select whichever rate makes the invoice resemble an earlier draft. Once the owner decides, the record should link that decision to the exact calculation and released version so a later feed correction does not rewrite the original basis.',
  ],
  'research-outsourced-billing-hold-release-evidence-2026': [
    'State-transition analysis. Model holds as versioned constraints rather than a yes-or-no account flag. One account can have an invoice hold, communication hold, collection hold, or narrow line-level hold with different owners and prerequisites. Record applied time, effective time, scope, reason source, next review, and supersession for every version. Before calling a release timely or late, reconstruct what the queue actually knew and when. A document uploaded after approval should not be presented as evidence the approver used. Conversely, evidence can satisfy a prerequisite before the authorized release event occurs. This chronology reveals synchronization gaps without allowing the researcher to infer permission from elapsed time.',
    'Resumption scenario. Imagine a dispute hold covering one invoice while a system-level flag suppresses every invoice for the account. An owner resolves the disputed line and approves release only for the affected invoice, but an integration clears the account-wide flag and sends three other drafts. The study should compare requested scope, approved scope, system change, release timestamps, delivery events, and later correction. It should classify the additional invoices as potential premature resumptions without deciding their validity or contacting the customer. This makes the operational defect precise: the problem may sit in scope translation rather than in the owner decision or the preparation work.',
  ],
  'research-outsourced-billing-chargeback-receivable-reinstatement-2026': [
    'Money-movement chronology. Start with the original payment, settlement, and applications, then append every chargeback, fee, provisional credit, representment, decision, reversal, recovery, and local posting as a separate event. Never net these events before linkage is tested. A single settlement deposit may combine several cases, and one chargeback may cover only part of an applied payment. Reconcile principal separately from processor fees and currency effects. Compare the processor timeline with the customer ledger without assuming that a network event prescribes the local entry. The resulting schedule should expose duplicated reinstatement, missing recovery, and wrong-invoice application candidates while leaving account treatment to the authorized owner.',
    'Partial-dispute scenario. A customer payment covered two invoices, but the processor chargeback challenges only one portion and includes a fee in the next net settlement. The preparation packet should identify the original split application, disputed principal, undisputed component, fee, processor case, deadline, current account state, and any later recovery. It should show candidate local treatments only when they follow an approved rule and route the decision. Reinstating the full payment would overstate the candidate balance; ignoring the fee would break settlement reconciliation. Neither observation decides customer liability, representment, collections, accounting, or communication.',
  ],
};

const sectionContext: Record<string, string[]> = {
  'research-outsourced-billing-consolidated-invoice-entity-allocation-2026': [
    'The practical boundary is especially important here because preparing an allocation table is not authority to decide which entity is the contracting party.',
    'For this study, the link graph should have source charges on one side and entity-specific consolidated lines on the other, with group membership and allocation versions between them.',
    'Measures should distinguish unallocated value, multiply allocated value, entity conflicts, rounding residue, and owner-pending value instead of publishing only a balanced grand total.',
    'A proposed cause such as a stale corporate hierarchy remains an inference until dated membership records and integration events support it.',
    'Unknown entity membership should stay in the allocation population because excluding it would make the apparent completion rate stronger by hiding the hardest charges.',
    'Access can be narrowed by giving preparers billing-group identifiers and approved allocation inputs without exposing unrelated corporate, tax, or contract records.',
    'The buyer can use results to repair group-effective dates, allocation drivers, or exception routing, while entity responsibility stays with commercial, tax, and finance owners.',
    'The decisive test is whether a reviewer can reconstruct each component-to-entity path without relying on the preparer’s memory or the fact that the invoice total balances.',
  ],
  'research-outsourced-billing-invoice-number-collision-control-2026': [
    'The role boundary matters because locating and comparing identifiers is support work, while changing a sequence or document reference may have statutory and customer consequences.',
    'This study needs a namespace map rather than a monetary reconciliation: issuer, system, series, document type, and period establish the context in which uniqueness is tested.',
    'Useful measures include exact collisions, normalized collisions, ambiguous retrievals, lost prefixes, migration aliases, sequence gaps by reason, and unresolved namespace ownership.',
    'An apparent duplicate may be caused by export truncation, a valid entity namespace, migration reuse, or a real issuance defect; those explanations remain hypotheses until retrieval evidence distinguishes them.',
    'An unknown namespace is not a harmless missing field because it prevents the reviewer from deciding whether two visible values identify one document or two.',
    'Preparers need search and audit evidence but should not receive sequence-administration or document-voiding permissions merely to investigate a collision.',
    'The buyer can use the findings to preserve prefixes in exports, improve composite keys, or route ambiguous remittances without authorizing renumbering through the research queue.',
    'The concluding question is whether the reference remains unambiguous at every retrieval point used by billing staff and customers, not whether a database column happens to be unique.',
  ],
  'research-outsourced-billing-foreign-exchange-rate-input-lineage-2026': [
    'A specialist can preserve a rate observation and reproduce arithmetic, but cannot choose the economically or contractually appropriate rate convention.',
    'The core lineage runs from a monetary component through an approved source observation, quote direction, timestamp rule, precision, rounding step, and released invoice amount.',
    'Report converted value affected by missing, stale, inverted, triangulated, overridden, and rounding-conflict rates as well as the number of lines in each state.',
    'A recurring Monday variance may suggest non-business-day handling, feed latency, or date-selection logic, but chronology and policy evidence are needed before naming a cause.',
    'Missing rate evidence must remain distinct from a zero rate or a repeated prior rate because each condition implies a different calculation and risk.',
    'Rate-feed access can be read-only and invoice preparation can exclude treasury accounts, trading tools, and override administration that are unnecessary to reproduce the calculation.',
    'Results can direct the buyer toward a clearer timestamp convention, preserved feed snapshot, precision rule, or owner escalation without turning the support team into treasury or accounting decision-makers.',
    'A defensible conclusion shows the exact observation and calculation behind each conversion and labels policy selection separately from numerical reproduction.',
  ],
  'research-outsourced-billing-hold-release-evidence-2026': [
    'Maintaining a hold register and assembling prerequisite evidence are support activities; removing the constraint or resuming billing requires the named owner and system event.',
    'The study should use a time-ordered state machine whose edges show apply, narrow, expand, retain, approve-release, effective-release, and downstream-resumption events.',
    'Measures should show holds by scope and reason, prerequisites still open, decisions pending, release-to-resumption time, premature-resumption candidates, and scope-translation mismatches.',
    'A long hold may suggest missing evidence, unclear prerequisites, unavailable owners, or deliberate restriction; elapsed time alone cannot determine which explanation is correct.',
    'When the release event or its scope cannot be established, the item remains unknown even if downstream work appears to have resumed.',
    'Read access to hold versions and prerequisites does not justify permission to clear flags, change customer restrictions, issue invoices, or restart collections.',
    'The buyer can use findings to clarify prerequisites, synchronize flags, tighten scope translation, or improve release routing while keeping the underlying dispute or compliance decision outside the support role.',
    'The conclusion should show that resumed work followed a scoped, effective, attributable release rather than assuming activity itself proves permission.',
  ],
  'research-outsourced-billing-chargeback-receivable-reinstatement-2026': [
    'Evidence assembly and reconciliation can be delegated, but no researcher should reinstate a balance, submit representment, promise a customer outcome, or select collections treatment.',
    'The analytical graph links an original payment and its applications to processor case events, principal and fee components, local account proposals, approvals, postings, and later recovery.',
    'Report principal and fees separately across linked, partially linked, duplicate-candidate, owner-pending, posted, reversed, recovered, account-mismatch, and unresolved states.',
    'A repeated account mismatch may suggest faulty application lineage, bundled settlement mapping, or duplicated reinstatement, but the event chronology must test each possibility.',
    'An inaccessible processor event or missing original application leaves the balance effect unknown and must not be converted into a presumed receivable.',
    'Processor and ledger access should be limited to the records needed for linkage; money movement, balance changes, customer contact, and case submission remain segregated.',
    'The buyer can use the study to repair case-to-payment keys, component reconciliation, approval packets, or recovery monitoring without outsourcing financial and legal disposition.',
    'The central conclusion is whether every proposed account effect can be reconstructed from the disputed payment through an authorized local decision, including later reversals.',
  ],
};

const buildOct2Body = (seed: ResearchSeed) => {
  const base = buildDecisionResearchBody(seed, checked);
  const appendixLength = seed.sources.length + 1;
  const substantive = base.slice(0, -appendixLength);
  const context = sectionContext[seed.slug];
  const genericIndexes = [1, 6, 8, 9, 11, 12, 13, 15];
  for (let index = 0; index < genericIndexes.length; index += 1) substantive[genericIndexes[index]] += ` ${context[index]}`;
  return [...substantive, ...specificAnalysis[seed.slug], ...base.slice(-appendixLength)];
};

export const oct2ResearchBatch = seeds.map((seed) => ({
  slug: seed.slug, title: seed.title, excerpt: seed.excerpt, published, datePublished: published, updated: published,
  featuredImage, body: buildOct2Body(seed),
  serviceCta: { href: seed.service, label: seed.serviceLabel, title: 'Turn this research design into a bounded billing routine', body: 'Define the population, evidence, stopping points, review owner, and approval boundary before assigning volume.' },
}));

export const oct2ResearchTopics = seeds.map(({ slug, topic, sources }) => ({ slug, topic, sources }));
