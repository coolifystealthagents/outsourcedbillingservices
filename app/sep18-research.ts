const published = '2026-09-18' as const;
const checked = 'September 18, 2026';
const featuredImage = '/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp';

type Seed = {
  slug: string;
  title: string;
  excerpt: string;
  question: string;
  decision: string;
  unit: string;
  population: string;
  fields: string;
  states: string;
  tests: string;
  interpretation: string;
  limits: string;
  service: string;
  serviceLabel: string;
  sources: Array<{ title: string; publisher: string; url: string; use: string }>;
};

const seeds: Seed[] = [
  {
    slug: 'research-outsourced-billing-invoice-approval-latency-2026',
    title: 'Invoice Approval Latency Research: Where Does a Prepared Draft Actually Wait?',
    excerpt: 'A decision-grade cohort design for separating invoice preparation time from source gaps, owner review, correction, and release delay.',
    question: 'For invoice drafts prepared by an outsourced billing team, where does elapsed time accumulate between a complete source packet and authorized release?',
    decision: 'whether a buyer should redesign intake, preparation, or approval ownership before adding more invoice-preparation capacity',
    unit: 'one invoice draft version connected to one defined billing obligation and one release decision',
    population: 'all invoice drafts entering the selected billing cycle, including released drafts, returned drafts, cancelled drafts, duplicates, source-blocked drafts, and drafts still open at cutoff',
    fields: 'source packet receipt, contract or order version, service or delivery evidence, billing period, draft creation, preparer, exception code, return event, approval request, approval event, release event, and authorized owner',
    states: 'not ready for preparation, ready and unassigned, in preparation, waiting for source evidence, waiting for owner judgment, returned for correction, approved but unreleased, released, cancelled, and unresolved at cutoff',
    tests: 'recalculate stage intervals from raw timestamps; verify that every return creates a new version rather than overwriting the prior draft; inspect the oldest open item in every state; and have a second reviewer reproduce a mixed sample of ordinary, returned, and source-blocked drafts',
    interpretation: 'A long preparation interval may indicate capacity, but it may also reflect an intake packet that was never complete. A long approval interval is not evidence that the preparer was slow. Rework after owner review may point to ambiguous source rules, a transcription defect, or a changed commercial decision; the event alone does not establish which explanation is correct.',
    limits: 'Selected-cycle mix, customer-specific terms, tax review, late source records, timezone normalization, batch approvals, system-created timestamps, and changes made outside the approved workflow can distort comparisons. The design does not judge contract meaning, tax treatment, revenue recognition, or whether an invoice should be released.',
    service: '/services/invoice-preparation',
    serviceLabel: 'Review invoice preparation support',
    sources: [
      { title: 'Standards for Internal Control in the Federal Government (Green Book)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'control activities, documentation, responsibility, and quality information' },
      { title: 'NIST Special Publication 800-53 Revision 5, Update 1', publisher: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', use: 'audit records, access control, separation of duties, and system integrity' },
      { title: 'Data Security', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security', use: 'proportionate access and protection of customer and business data' },
    ],
  },
  {
    slug: 'research-outsourced-billing-usage-event-completeness-2026',
    title: 'Usage Event Completeness Research: Can Billable Activity Reach the Draft Without Silent Loss?',
    excerpt: 'A source-to-draft population study for testing missing, duplicated, late, excluded, and transformed usage events before invoice release.',
    question: 'Can a frozen population of source usage events be reconciled to draft billable quantities without silently losing, duplicating, or shifting activity across periods?',
    decision: 'whether a buyer has a reproducible usage-billing control that an outsourced specialist can operate without interpreting commercial terms',
    unit: 'one uniquely identified source event, or an explicitly documented aggregate when event-level data is unavailable',
    population: 'all source events inside a frozen activity window plus late arrivals, reversals, test records, exclusions, duplicates, adjustments, and unmatched draft quantities reported as separate movements',
    fields: 'event identifier, source system, account, event time, ingestion time, unit, quantity, billing period, rule version, transformation, exclusion reason, aggregation key, draft invoice line, override, reviewer, and release status',
    states: 'matched unchanged, matched after documented transformation, valid exclusion, duplicate candidate, late arrival, wrong-period candidate, orphan source event, orphan draft quantity, unit conflict, rule question, access blocked, and unresolved',
    tests: 'reconcile source counts and quantities to transformation outputs and draft lines; test boundary events on both sides of cutoff; rerun documented unit conversions; search for repeated identifiers and identical event signatures; and ask an independent reviewer to rebuild selected line totals from source records',
    interpretation: 'Count agreement is weaker than lineage. Two missing events and two duplicates can leave a total unchanged. Quantity agreement can also conceal a wrong customer, period, unit, or rule version. Findings should therefore report identifier linkage, quantity reconciliation, and period assignment separately instead of compressing them into one accuracy percentage.',
    limits: 'Clock drift, delayed ingestion, source retention, aggregation, mutable events, estimated usage, contract-specific minimums or caps, unavailable identifiers, and non-random selection limit inference. The study does not decide billability, price, contract interpretation, credits, or release.',
    service: '/services/usage-billing-administration',
    serviceLabel: 'Review usage billing administration',
    sources: [
      { title: 'Framework for Improving Critical Infrastructure Cybersecurity, Version 2.0', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/cyberframework', use: 'governance, data protection, detection, and recovery concepts for operational records' },
      { title: 'Standards for Internal Control in the Federal Government (Green Book)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'complete populations, quality information, documented controls, and monitoring' },
      { title: 'Data Security', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security', use: 'limiting access and protecting retained customer data' },
    ],
  },
  {
    slug: 'research-outsourced-billing-subscription-change-cutoff-2026',
    title: 'Subscription Change Cutoff Research: Which Version Governed the Billing Cycle?',
    excerpt: 'A cohort method for tracing starts, pauses, upgrades, downgrades, cancellations, and credits to dated source and approval evidence.',
    question: 'For subscriptions changed near a billing cutoff, can each recurring charge be traced to the source version and authorized decision effective for that cycle?',
    decision: 'whether a buyer can delegate recurring-charge preparation while retaining clear authority for changes, exceptions, credits, and customer communication',
    unit: 'one subscription-account-cycle relationship with its pre-cutoff and post-cutoff source versions',
    population: 'every subscription with a start, stop, pause, resume, plan change, quantity change, renewal, cancellation request, credit request, failed-payment state, or manual override near the selected cutoff, plus an unchanged comparison sample',
    fields: 'account, plan or service version, request channel and time, authenticated source, stated effective date, approved effective date, cycle boundary, prior charge, proposed charge, proration input, override, owner decision, customer notice reference, and release state',
    states: 'unchanged and supported, changed before cutoff, changed after cutoff, requested but not authorized, effective date unclear, conflicting source versions, proration question, credit question, duplicate recurring line, customer-communication question, and unresolved',
    tests: 'trace each draft line backward to the version used; compare events immediately before and after cutoff; recompute only arithmetic governed by an already approved rule; distinguish request time from approval and effective time; retain superseded versions; and have a second reviewer reproduce all ambiguous boundary classifications',
    interpretation: 'A cancellation request is evidence of a request, not automatically evidence of the effective billing treatment. Likewise, a current subscription screen can show today’s state while hiding the version that applied at cutoff. The defensible conclusion is whether the charge has a reproducible source-and-decision chain, not whether the business made the best commercial decision.',
    limits: 'Jurisdiction-specific consumer rules, channel authentication, processor behavior, trial terms, grace periods, backdated owner decisions, timezone boundaries, proration rules, and incomplete version history constrain the study. It does not give legal advice or decide cancellation validity, pricing, refund entitlement, or customer remedies.',
    service: '/services/subscription-billing-support',
    serviceLabel: 'Review subscription billing support',
    sources: [
      { title: 'Negative Option Rule', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/negative-option-rule', use: 'the regulatory context for recurring offers, consent, disclosures, and cancellation; applicability requires qualified review' },
      { title: 'Data Security', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security', use: 'access limits and protection of account and payment-related information' },
      { title: 'Standards for Internal Control in the Federal Government (Green Book)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'documented authorization, quality information, and separation of responsibilities' },
    ],
  },
  {
    slug: 'research-outsourced-billing-revenue-schedule-source-lineage-2026',
    title: 'Revenue Schedule Source Lineage Research: Can Every Row Be Rebuilt?',
    excerpt: 'A reproducibility study for connecting prepared revenue-schedule rows to approved source versions, amendments, calculations, and finance review.',
    question: 'Can an authorized reviewer rebuild each prepared revenue-schedule row from the approved source version and documented calculation without relying on private preparer knowledge?',
    decision: 'whether schedule preparation is documented well enough to outsource while finance retains accounting judgments and close approval',
    unit: 'one schedule row for one defined source obligation, period, and version',
    population: 'all rows added, changed, carried forward, ended, reversed, or left unresolved in a selected close cycle, including zero-value rows, amendments, manual entries, and inaccessible-source exceptions',
    fields: 'stable row identifier, customer or arrangement reference, approved source location, source version, billing and service periods, input amount, method identifier, formula, rounding, amendment date, preparer, reviewer, exception, downstream total, and close status',
    states: 'reproduced from approved source, reproduced with documented transformation, source-version conflict, formula mismatch, period mismatch, amendment not reflected, unexplained manual entry, inaccessible source, finance judgment required, and unresolved',
    tests: 'rebuild a risk-based sample from source rather than copying displayed totals; foot and cross-foot schedules; compare opening plus movements to closing; inspect formulas hidden by pasted values; trace amendments in both directions; compare schedule totals to the approved downstream control total; and let a second reviewer reproduce every exception classification',
    interpretation: 'Reproducibility supports preparation quality but does not validate the accounting conclusion. A mathematically correct row can still rely on the wrong contract version or period. Conversely, a schedule difference may be a deliberate, approved judgment. Findings must keep source facts, arithmetic results, finance interpretations, and unresolved questions in different columns.',
    limits: 'Restricted contracts, accounting-system exports, foreign currency, estimates, allocations, amendments, spreadsheet behavior, close adjustments, and local accounting policies can prevent complete reconstruction. The method cannot determine recognition, classification, materiality, tax, audit treatment, or final close approval.',
    service: '/services/revenue-schedule-preparation',
    serviceLabel: 'Review revenue schedule preparation',
    sources: [
      { title: 'Accounting Standards Codification', publisher: 'Financial Accounting Standards Board', url: 'https://www.fasb.org/page/PageContent?pageId=/standards/accounting-standards-codification.html', use: 'authoritative U.S. GAAP source location; accounting interpretation remains with qualified finance owners' },
      { title: 'Standards for Internal Control in the Federal Government (Green Book)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'documentation, review, responsibility, quality information, and monitoring principles' },
      { title: 'NIST Special Publication 800-53 Revision 5, Update 1', publisher: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', use: 'access control, audit records, information integrity, and separation of duties' },
    ],
  },
  {
    slug: 'research-outsourced-billing-inquiry-evidence-completeness-2026',
    title: 'Billing Inquiry Evidence Completeness Research: Is the Question Ready for an Owner?',
    excerpt: 'A queue study for measuring whether customer billing questions arrive with the account facts, source records, requested outcome, and decision owner needed for a safe response.',
    question: 'Which evidence gaps prevent customer billing inquiries from reaching the right owner with an answerable question?',
    decision: 'whether an outsourced customer billing support queue improves intake and routing without granting unauthorized authority to change balances or make commitments',
    unit: 'one inbound billing inquiry linked to one account or invoice question and one current disposition',
    population: 'all inquiries received through approved channels during a frozen window, including duplicates, reopened cases, misrouted messages, identity-verification holds, privacy concerns, disputes, promised-payment messages, credit requests, and unresolved cases',
    fields: 'privacy-safe case identifier, received time and channel, authenticated account reference, invoice or charge reference, customer-stated question, requested outcome, relevant source records, prior contact link, urgency or deadline source, routing reason, owner, response authority, response event, reopen event, and disposition',
    states: 'answerable factual request, missing account reference, missing invoice reference, identity or authority check required, source conflict, duplicate or related case, dispute, balance-change request, privacy concern, legal or regulatory escalation, owner judgment required, responded under approved script, and unresolved',
    tests: 'measure evidence completeness at first receipt and after triage; inspect whether duplicate consolidation preserves every message; trace a response to the source facts and approved authority used; review reopened cases for premature closure; retain cases excluded for access or privacy reasons; and have a second reviewer reroute a mixed sample using the documented rules',
    interpretation: 'Faster closure is not automatically better. A short handling time can reflect a simple factual question, an unsafe unsupported response, or premature closure. Reopen rate can reveal ambiguity but can also reflect a genuinely new question. Report evidence completeness, routing agreement, time in each owner state, and resolution status separately.',
    limits: 'Channel mix, identity controls, sensitive information, customer language, linked cases, local policy, incomplete conversation history, business hours, and non-random sampling limit generalization. The study does not determine liability, dispute outcome, credit, refund, settlement, legal response, or what personal information may be disclosed.',
    service: '/services/customer-billing-support',
    serviceLabel: 'Review customer billing support',
    sources: [
      { title: 'Data Security', publisher: 'U.S. Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security', use: 'limiting access, retaining only needed data, and protecting customer information' },
      { title: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework', use: 'privacy-risk governance and data-processing context' },
      { title: 'Standards for Internal Control in the Federal Government (Green Book)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/greenbook', use: 'quality information, defined responsibility, documentation, and monitoring' },
    ],
  },
];

const body = (x: Seed): string[] => [
  `Research question. ${x.question} This is an operational research question, not a promise about performance. The buyer decision is ${x.decision}. A useful answer must show what was observed, how it was classified, what is inferred, and what remains unknown.`,
  `Why this matters for outsourced billing. Moving preparation or support work to a Philippines-based specialist does not transfer the buyer’s authority over contracts, accounting, privacy, credits, refunds, final release, or customer commitments. It does create a need for a work record that another authorized person can follow. If the record only says “done,” speed and quality cannot be separated from missing evidence, hidden rework, or an owner decision that occurred outside the queue.`,
  `Unit of analysis. Use ${x.unit}. Do not switch between cases, events, lines, accounts, people, and batches while calculating a rate. Assign a stable privacy-safe identifier and link later versions to the original unit. A reopened or corrected record remains visible; it is not replaced simply because the newest state looks cleaner.`,
  `Population and cutoff. Include ${x.population}. Freeze the opening population, observation window, system query, filters, timezone, extraction time, duplicate rule, and cutoff before classifying results. Record post-cutoff arrivals and state changes as movements. Never quietly remove an inaccessible, cancelled, zero-value, or unresolved unit from the denominator merely because it complicates the result.`,
  `Evidence model. Capture ${x.fields}. Store protected or commercially sensitive detail only in approved systems; the research table should use the minimum locator needed for an authorized reviewer to retrieve the source. Mark every important value as source-observed, externally reported, calculated, owner-interpreted, or unknown. A displayed system value is evidence of what that system showed at retrieval time, not automatic proof that the underlying event occurred as described.`,
  `Classification. Use mutually understandable states: ${x.states}. Define each state before review and keep a decision log for borderline examples. When two records conflict, preserve both and classify the conflict. Do not choose the source that produces the preferred operational result. “Awaiting owner” must name the decision owner and the exact question; otherwise it is only an aging bucket.`,
  `Method. First, extract the frozen population and preserve query evidence. Second, normalize identifiers and timestamps without altering source values. Third, link each unit to its source and downstream record. Fourth, apply the prewritten classification rules. Fifth, calculate counts and elapsed intervals only where required inputs exist. Sixth, review exceptions and boundary cases. Finally, publish numerators, denominators, unknowns, and late movements together so that a reader can reproduce the result.`,
  `Quality checks. ${x.tests}. Reviewer disagreement is a result, not an inconvenience. Record the original classifications, the reason for disagreement, the adjudicating owner when one is needed, and the final rule clarification. Do not tune the definition after seeing the outcome without labeling the analysis exploratory and rerunning the full frozen population.`,
  `Measures. Report population count; source-linked count; unresolved count; access-blocked count; conflict count; rework or reopen count where applicable; and count by final state. For elapsed time, publish the median, a stated upper percentile, and the number of units with calculable start and end events. Averages alone can hide a long tail. Every percentage must display its numerator and denominator, and every interval must name its two events.`,
  `Facts versus analysis. Facts are the preserved records, identifiers, values, versions, and timestamps. Calculations are joins, differences, elapsed intervals, and reconciliations produced from those facts. Analysis is the application of the declared classification rule. Inference is an explanation that might account for a pattern. Keep these layers separate in the report so a plausible explanation is not presented as an observed cause.`,
  `Interpretation. ${x.interpretation} Compare like with like: the same queue definition, source availability, cutoff rule, and case mix. If those conditions change, show a segmented result rather than claiming improvement or deterioration. The research can locate where evidence or decisions stop; it cannot assign fault from timing or disagreement alone.`,
  `Uncertainty. Unknown is a valid result when an identifier, source version, timestamp, authority, or disposition cannot be established. State whether the uncertainty comes from missing evidence, denied access, a conflicting source, an undefined rule, or an owner decision still pending. Do not impute a convenient value or use the current state as a substitute for historical evidence.`,
  `Role boundaries. The specialist may retrieve permitted sources, index records, compare fields, reproduce documented arithmetic, prepare a draft, and write a neutral exception question. The authorized owner retains contract interpretation, accounting and tax judgments, privacy decisions, credits, refunds, write-offs, price or rule changes, final release, and external commitments. Access should be named, least-necessary, reviewable, and removed when the role ends.`,
  `Decision use. A buyer can use the result to decide whether the next improvement belongs in intake, source access, instructions, system linkage, preparation capacity, reviewer availability, or owner escalation. It should not be used as an individual performance score unless the population, authority, dependencies, and review standard make that use valid. Queue outcomes often depend on inputs and decisions controlled by several roles.`,
  `Limitations. ${x.limits} This is a study design for a defined operating population, not a benchmark for every billing team. It does not claim that Outsourced Billing Services has performed the study for a client, achieved a stated result, or guarantees an outcome. Replication in another environment requires a newly frozen population and locally approved rules.`,
  `Niche-specific conclusion. For teams considering outsourced billing support, the practical test is not whether a specialist can move items quickly. It is whether the prepared work remains traceable to approved sources and reaches the correct owner without obscuring uncertainty. For this question, the proposed cohort and evidence chain create a reviewable decision surface while keeping business authority with the buyer.`,
  'Source register. The sources below establish control, security, privacy, consumer-protection, or accounting context. They do not prove a result for any company, and they do not replace advice from qualified legal, accounting, compliance, privacy, or security professionals.',
  ...x.sources.map(s => `${s.title} — ${s.publisher}. ${s.url}. Checked ${checked}. Used for ${s.use}.`),
];

export const sep18ResearchBatch = seeds.map(x => ({
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
    body: 'Define approved sources, access, queue states, exception ownership, and release authority before delegating the work.',
  },
}));
