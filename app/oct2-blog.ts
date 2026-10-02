const published = '2026-10-02' as const;
const featuredImage = '/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp';

type Seed = {
  slug: string; title: string; description: string; service: string; serviceHref: string;
  situation: string; packet: string; method: string; boundary: string; example: string;
  reconciliation: string; measures: string; playbook: string[];
};

const sourcesList = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { name: 'FTC: Protecting Personal Information, A Guide for Business', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business' },
];

const seeds: Seed[] = [
  {
    slug: 'invoice-dispute-intake-triage', title: 'Invoice Dispute Intake Triage Without Premature Credits',
    description: 'A disciplined intake method that separates customer statements, billing evidence, ownership, and authorized resolution.',
    service: 'customer billing support', serviceHref: '/services/customer-billing-support',
    situation: 'a customer challenges an invoice by email, portal, or telephone and the first message contains only part of the information needed to investigate',
    packet: 'the released invoice, invoice-line support, contract or order reference supplied by the client, delivery evidence, customer message in its original form, payment activity, prior credits, account owner, and dispute policy',
    method: 'preserve the customer claim verbatim, classify the affected lines without deciding the outcome, freeze the current balance snapshot, collect the minimum missing evidence, and route a precise question to the authorized owner',
    boundary: 'The support specialist does not concede an error, promise a credit, interpret contract language, change tax, waive a balance, or stop collections outside an approved hold rule. Those decisions remain with the client’s commercial, billing, tax, or legal owner.',
    example: 'A customer says an invoice is “double billed.” The two lines have the same description but different service periods and source identifiers. Intake records both lines, the claimed duplicate, delivery date, and open balance. It requests the service owner’s confirmation instead of deleting one line or assuring the customer that a credit will follow.',
    reconciliation: 'received disputes equal awaiting-customer evidence, awaiting-internal evidence, owner review, approved adjustment, no-change decision, withdrawn claim, and unresolved exceptions',
    measures: 'disputes by reason and age, value under review, incomplete submissions, first-touch routing accuracy, owner response time, credits approved, no-change outcomes, reopened cases, and contacts made while a valid hold was active',
    playbook: [
      'Create one case key per contested invoice and claim, not one case per message. Link later replies and attachments to that key. Record which lines, quantities, dates, and amounts the customer contests. A whole-invoice flag is appropriate only when the customer actually challenges the whole document; otherwise it can hide the undisputed balance and distort reporting.',
      'Separate allegations from observed system facts. “Duplicate charge” is the customer’s reason; matching source IDs, service periods, and calculation inputs are evidence. Preserve both without turning either into a conclusion. This lets the decision owner see exactly what is known, what conflicts, and which source would resolve the uncertainty.',
      'Use a hold matrix defined by the client. It should state whether the hold applies to one invoice, selected lines, or the entire account; who can apply it; when it expires; and which communications remain permitted. Intake may execute a documented rule but should never invent a broader suppression because the complaint sounds urgent.',
      'Close the intake loop with a decision reference, effective amount, downstream action, customer-communication owner, and verification step. If a credit is authorized, treat preparation, approval, posting, and delivery as distinct events. A case is not complete merely because an approver said yes in a message.'
    ],
  },
  {
    slug: 'billing-cutoff-change-impact-review', title: 'Billing Cutoff Change Impact Review Before the Next Cycle',
    description: 'A population-based review for moving a cutoff without losing, duplicating, or misdating billable activity.',
    service: 'billing reconciliation', serviceHref: '/services/billing-reconciliation',
    situation: 'a client proposes an earlier or later invoice cutoff to accommodate close, customer delivery, source availability, or staffing constraints',
    packet: 'the current and proposed cutoff definitions, timezone, source schedules, late-arrival history, draft calendar, customer commitments, approval path, exception queues, and prior-cycle reconciliation',
    method: 'model both windows against the same source population, isolate records that change cycles, test upstream readiness and downstream capacity, document customer effects, and obtain approval on the exact timestamp and transition treatment',
    boundary: 'The billing team does not choose revenue treatment, alter contractual service periods, estimate missing activity, accelerate customer charges, or declare a cutoff acceptable. Finance, commercial, and system owners approve policy and transition decisions.',
    example: 'Moving cutoff from 23:59 UTC on month-end to 18:00 local time shifts six hours of events. The impact table identifies 1,420 records by source and customer, rather than calling the change immaterial because their current estimated value is small. The owner chooses whether those records enter the next cycle or a controlled supplemental run.',
    reconciliation: 'the original cycle population equals unchanged records, records proposed for deferral, records proposed for acceleration, excluded test data, and unresolved timing exceptions',
    measures: 'records and value moved between cycles, sources unavailable at cutoff, late-arrival rate, supplemental invoices, manual adjustments, customer delivery changes, close delay, and unresolved transition decisions',
    playbook: [
      'Write the cutoff as a timestamp, timezone, inclusivity rule, and source event. “End of day” is not reproducible when systems store UTC while teams work in several locations. Test events immediately before, exactly at, and immediately after the boundary, including daylight-saving transitions where a source uses a local zone.',
      'Replay at least one representative historical period under the proposed rule. Compare counts, units, accounts, invoice candidates, and exception volume. Keep the simulation clearly labeled; it is decision evidence, not permission to change historical billing or production configuration.',
      'Map dependencies backward and forward. Upstream feeds need extraction and correction windows; downstream reviewers, delivery channels, payment terms, and close packages need enough time after the freeze. A cutoff that improves one team’s calendar can silently transfer delay or control risk to another queue.',
      'Plan the transition population explicitly. Identify activity between the last old cutoff and first new cutoff, then prove each record appears once. Store approval, configuration version, test results, first-run reconciliation, and rollback owner. Do not rely on ordinary cycle totals to reveal a narrow gap or overlap.'
    ],
  },
  {
    slug: 'failed-autopay-exception-review', title: 'Failed Autopay Exception Review Without Unsafe Retries',
    description: 'A factual queue for processor responses, account state, retry eligibility, customer contact, and owner decisions.',
    service: 'subscription billing', serviceHref: '/services/subscription-billing',
    situation: 'a scheduled subscription payment does not produce a confirmed success and the next operational action depends on the exact processor and account state',
    packet: 'the subscription version, invoice or billing event, token reference, attempt identifier, amount and currency, submission time, raw processor response, retry policy, cancellation or pause events, contact preferences, and owner instructions',
    method: 'distinguish declines from timeouts and technical failures, verify the account state at attempt time, prevent duplicate submission while confirmation is uncertain, apply only approved retry rules, and route ambiguous cases',
    boundary: 'The operator does not choose a retry cadence, interpret network rules, override a pause, reactivate a subscription, change a payment method, promise service continuity, or describe a technical error as a customer fault.',
    example: 'The processor request times out and no final response is present. The scheduler proposes another attempt 20 minutes later. The case is placed in confirmation review using the first attempt ID; it is not categorized as a decline and resubmitted merely because the billing system lacks a success flag.',
    reconciliation: 'scheduled attempts equal confirmed successes, confirmed declines, technical failures eligible under policy, uncertain submissions on hold, stopped attempts, and orphan events requiring system-owner review',
    measures: 'successes and declines by attempt, uncertain confirmations, duplicate attempts prevented, retries stopped by state changes, processor response lag, manual overrides, customer contacts, and unresolved technical cases',
    playbook: [
      'Preserve the processor’s native code and message alongside a client-approved classification. Do not collapse every non-success into “declined.” A timeout, malformed request, unavailable token, authentication step, and issuer decline imply different evidence and different permitted next actions.',
      'Reconstruct state immediately before each submission. Later account updates should not overwrite the snapshot used to judge the attempt. Compare plan version, amount, currency, payment token, pause or cancellation, prior confirmed success, and retry count. Record both effective and observed times when events arrive asynchronously.',
      'Use an idempotency or attempt key where the approved system provides one. Search processor records before a manual retry and keep uncertain attempts visible until a documented terminal state or owner decision exists. Operational urgency does not justify exposing a customer to a duplicate charge.',
      'Keep payment handling and customer communication linked but separate. The outreach record should use an approved template appropriate to the confirmed state, never expose sensitive payment data, and route reported cancellations, disputes, hardship, or unauthorized-payment claims to the named owner.'
    ],
  },
  {
    slug: 'duplicate-customer-account-review', title: 'Duplicate Customer Account Review Before Any Billing Merge',
    description: 'An evidence-led way to identify likely duplicate accounts while preserving invoices, payments, contacts, and authority.',
    service: 'billing data quality review', serviceHref: '/services/billing-data-quality-review',
    situation: 'two or more customer records share names, addresses, domains, tax identifiers, or contacts and may represent the same organization or related entities',
    packet: 'stable account IDs, legal and trading names, addresses, domain and contact sources, parent-child relationships, contracts, invoices, credits, receipts, open disputes, system integrations, and client merge policy',
    method: 'score candidate relationships using approved identifiers, document conflicting evidence, map every dependent object, prevent new duplicate creation where authorized, and submit a merge-or-keep-separate decision packet',
    boundary: 'The reviewer does not declare legal identity, move balances, combine contracts, transfer cash, delete history, change tax settings, or merge records. Account and system owners retain those decisions and execute controlled changes.',
    example: 'Two accounts have similar names and the same email domain, but invoices reference different legal entities and currencies. The analyst labels them related candidates, maps the shared contact, and recommends no automated merge pending the account owner’s entity evidence.',
    reconciliation: 'candidate records equal confirmed separate entities, approved merge groups, parent-child relationships, dormant duplicates held for history, false-positive matches, and unresolved identity cases',
    measures: 'candidate pairs, confirmed duplicates, false positives, records lacking stable identifiers, dependent invoices and receipts, merge reversals, new duplicates, and decisions overdue by owner',
    playbook: [
      'Start with deterministic identifiers before fuzzy names. Account numbers issued by an authoritative system, verified legal identifiers, and approved hierarchy links carry more weight than punctuation, abbreviations, or shared office addresses. Record why each field is trusted and when it was last verified.',
      'Build a dependency graph for both records. Include drafts, released invoices, credits, payments, unapplied cash, disputes, tax settings, delivery destinations, subscriptions, portal users, integrations, and reports. The apparent simplicity of a master-record merge can conceal contradictory downstream ownership.',
      'Treat contact overlap cautiously. Consultants, purchasing platforms, shared-service centers, and parent-company teams may legitimately appear across entities. Never use an email-domain match alone to infer liability or permission to disclose one account’s billing information through another account.',
      'After an approved change, verify source and downstream systems independently. Preserve former IDs as aliases where policy permits, test that new transactions route correctly, and reconcile balances without netting unrelated activity. Keep a rollback and exception plan until the next billing cycle completes.'
    ],
  },
  {
    slug: 'partial-payment-allocation-handoff', title: 'Partial Payment Allocation Handoff With a Reproducible Balance Bridge',
    description: 'A controlled handoff for receipts that reference several invoices but do not settle the stated population.',
    service: 'payment posting', serviceHref: '/services/payment-posting',
    situation: 'a receipt is smaller than the referenced invoice population or includes a deduction whose reason is not established by approved remittance evidence',
    packet: 'bank or processor receipt, remittance, payer identity evidence, open invoices, currency, prior applications, credit memos, disputes, deduction detail, customer instructions, and allocation policy',
    method: 'lock the gross receipt, compare stated invoices with current open items, reproduce any customer arithmetic, isolate the short amount, apply only deterministic approved rules, and route the residual decision',
    boundary: 'The specialist does not infer customer intent, choose which invoice to disadvantage, create a credit, accept a deduction, write off a balance, move money between accounts, or represent that the remaining amount is resolved.',
    example: 'A $31,000 receipt lists invoices totaling $32,200 and notes “freight” beside a $1,200 difference. The operator can reproduce the deduction but finds no approved credit. The supported amount is posted only under the client’s rule, while the $1,200 remains a named decision item.',
    reconciliation: 'gross receipt equals approved invoice applications, approved on-account amount, supported fees or deductions, refunds or reversals authorized elsewhere, and unapplied balance',
    measures: 'partial receipts, unapplied value, deductions by stated reason, cases lacking remittance, owner decision time, reversals, misapplications, reopened balances, and repeat payer patterns',
    playbook: [
      'Preserve the payer’s allocation statement separately from the ledger result. A remittance tells the team what the payer intended or reported; it does not by itself authorize a credit, deduction, or cross-account transfer. Mark conflicts with current invoice status and retain the original document.',
      'Use a line-level bridge showing invoice ID, invoiced amount, prior payments and credits, current open amount, remitted amount, proposed application, difference, and rule reference. Totals alone can conceal that an apparently balanced receipt was applied to the wrong version or entity.',
      'Ask the smallest decision question. Identify the exact residual, evidence reviewed, candidate treatment allowed by client policy, and deadline. Avoid sending an owner a full account dump when only the status of one deduction is uncertain; narrow packets improve response quality and protect unnecessary data.',
      'Verify after posting from both directions. Trace the bank receipt to applications and each application back to the same receipt. Confirm remaining open balances, unapplied cash, customer statement impact, and queue status. Link later decisions instead of rewriting the original allocation record.'
    ],
  },
  {
    slug: 'recurring-invoice-suspension-control', title: 'Recurring Invoice Suspension Control for Pauses, Cancellations, and Holds',
    description: 'A time-aware control that stops only the intended billing events and preserves restart authority.',
    service: 'subscription billing', serviceHref: '/services/subscription-billing',
    situation: 'a client-approved pause, cancellation, dispute hold, or operational stop may affect one or more scheduled recurring invoices',
    packet: 'the authoritative instruction, account and subscription IDs, plan version, effective timestamp, timezone, next bill time, draft state, usage dependencies, related services, restart condition, and approving role',
    method: 'translate the instruction into an explicit scope, identify every scheduled event at the boundary, hold or cancel only through approved system actions, independently verify the queue, and record any restart dependency',
    boundary: 'The coordinator does not interpret cancellation rights, choose an effective date, waive accrued charges, end service, issue credits, resume billing, or broaden an invoice hold to unrelated accounts or products.',
    example: 'An instruction pauses one add-on from October 3, while the base subscription bills October 2 at 23:00 UTC. The operator maps both schedules and suspends only the add-on’s eligible future event; the base invoice and any retroactive treatment remain visible for owner review.',
    reconciliation: 'in-scope schedules equal successfully suspended events, already-generated drafts, events outside the effective boundary, failed system changes, approved exclusions, and unresolved dependencies',
    measures: 'suspensions by reason, events stopped, drafts requiring decisions, overbilled or missed events, failed changes, time to verification, restart dates approaching, and holds without named owners',
    playbook: [
      'Normalize the instruction into account, product, schedule, action, effective time, and end condition. Free-text phrases such as “stop billing next month” are not executable until the owner confirms whether the boundary refers to service, invoice generation, or customer delivery.',
      'Inspect queued and generated artifacts separately. A schedule change may prevent a future draft while leaving an existing draft ready for release. Identify usage collection, minimum commitments, consolidated invoices, and dependent credits so the change does not create a hidden orphan population.',
      'Use least-scope system action. Prefer a product- or schedule-level state when the instruction is narrow, and record old and new values with system evidence. Do not deactivate a whole customer simply because that is the fastest interface control available.',
      'Create a review event for temporary holds. State who can resume billing, what evidence is required, and how missed or deferred activity will be handled. At the next cycle, verify both that prohibited billing stayed stopped and that unrelated approved billing continued.'
    ],
  },
  {
    slug: 'usage-source-completeness-review', title: 'Usage Source Completeness Review Before Rating Begins',
    description: 'A pre-rating control for files, partitions, sequence gaps, duplicates, corrections, and accountable exceptions.',
    service: 'usage billing administration', serviceHref: '/services/usage-billing-administration',
    situation: 'usage from several systems, devices, regions, or daily partitions must be frozen before pricing and invoice preparation',
    packet: 'the expected-source register, delivery schedule, file manifests, sequence numbers, checksums, row and unit totals, event timestamps, correction files, rejection logs, mapping versions, and cutoff record',
    method: 'enumerate expected partitions independently, compare arrivals with manifests, test continuity and duplicates, reconcile accepted and rejected records, isolate corrections, and obtain owner disposition for every gap',
    boundary: 'The analyst does not fabricate missing usage, estimate a partition, change source timestamps, decide billability, accept a duplicate because totals look plausible, or move cutoff without client authorization.',
    example: 'Thirty-one daily files are expected from each of four regions. All 124 filenames exist, but one region repeats sequence 447 and omits 448. The control reports a duplicate and a gap instead of passing on file count alone.',
    reconciliation: 'expected source partitions equal accepted unique partitions, documented zero-activity partitions, rejected files, duplicate deliveries, missing partitions, and approved late arrivals',
    measures: 'source arrival timeliness, missing and duplicate partitions, checksum changes, rejected rows and units, corrections after freeze, mapping failures, owner response time, and invoices affected by source defects',
    playbook: [
      'Maintain the expectation register outside the arrival folder. It should state source, cadence, timezone, partition key, naming rule, sequence behavior, expected zero-activity evidence, and owner. Deriving expectations only from files that arrived guarantees that a completely missing source remains invisible.',
      'Validate layers in order: transport identity, file integrity, schema, record identity, time window, units, and business mapping. A file can pass a checksum and still contain the wrong period. Store each result so repair of one layer does not erase evidence of the original failure.',
      'Separate duplicates from corrections. A redelivery with the same checksum may be safely recognized as repeated transport; a changed checksum under the same name needs version and source-owner review. Corrections should link original and replacement records rather than silently overwriting the frozen population.',
      'Publish a freeze report before rating. Include accepted files, exclusions, gaps, rejected records, late arrivals, and explicit owner decisions. Rating should consume a stable population identifier, making it possible to reproduce why a later invoice differs from raw-source totals.'
    ],
  },
  {
    slug: 'credit-memo-application-sequencing', title: 'Credit Memo Application Sequencing Across Open Invoices',
    description: 'A bounded workflow for applying an approved credit to the intended invoices without rewriting customer history.',
    service: 'credit memo administration', serviceHref: '/services/credit-memo-administration',
    situation: 'an approved credit exists, but several open invoices, payments, disputes, and statement dates make its intended application ambiguous',
    packet: 'the final credit memo version, approval scope, originating invoice and lines, customer account, currency, open items, payments, prior credits, dispute state, refund instruction, statement cutoff, and application policy',
    method: 'verify the approved credit components, identify eligible open items under the supplied rule, simulate the balance effect, separate application from refund or write-off decisions, and post only after exact authorization',
    boundary: 'The administrator does not choose the customer benefit, change the credit amount, cross currencies or entities, resolve a dispute, create a refund, reopen a period, or decide accounting and tax presentation.',
    example: 'A $4,800 credit cites an invoice that has since been paid. Two newer invoices remain open. The team does not automatically apply oldest-first; it shows the paid origin, current account state, policy options, and refund dependency to the named owner.',
    reconciliation: 'approved credit value equals amounts applied to authorized invoices, approved unapplied credit, approved refund transfer, reversals, and unresolved application balance',
    measures: 'credits awaiting application, unapplied value by age, paid-origin credits, cross-entity conflicts, application reversals, statement changes, refunds initiated, and owner decisions overdue',
    playbook: [
      'Confirm that approval refers to the exact credit version. Compare amount, currency, tax components, customer, reason, and source invoice. A later corrected credit invalidates a simulation made on an earlier version even if the headline total did not change.',
      'Snapshot the account immediately before application. Include invoices, payments in transit, unapplied cash, other credits, disputes, and statement status. This prevents a valid decision from being executed against a materially changed population without review.',
      'Model the application line by line and show the resulting balance for every affected invoice. Keep ordering rules visible and cite the client procedure. If multiple outcomes are permitted, ask the authorized owner; operational staff should not select whichever clears the most aging.',
      'After posting, trace the credit into invoice balances, account balance, statement, aging, collections queue, and refund or unapplied-credit register as applicable. Differences may reflect refresh timing, but each needs an owner and next check rather than a premature “complete” status.'
    ],
  },
  {
    slug: 'duplicate-refund-prevention-review', title: 'Duplicate Refund Prevention Before Payment Release',
    description: 'A cross-reference check for approved refunds, prior attempts, credits, chargebacks, and settlement evidence.',
    service: 'customer billing support', serviceHref: '/services/customer-billing-support',
    situation: 'a refund request is approved for preparation while account and payment systems may contain earlier attempts or alternative return paths',
    packet: 'the approved refund version, original receipt, invoice applications, credits, reversals, chargebacks, prior refund requests, payment attempts, processor and bank references, payee source, amount, currency, and release authority',
    method: 'assign a stable refund key, search all payment states and linked account activity, distinguish failed from uncertain and settled attempts, compare the current instruction with prior versions, and hold any collision for review',
    boundary: 'The preparer does not approve eligibility, change destination details, release funds, retry an uncertain payment, net a chargeback, decide fraud risk, or tell the customer a refund is paid before settlement is confirmed.',
    example: 'A first refund attempt shows “submitted” in the billing tool but the processor record is unavailable. A replacement request arrives with a new destination. The duplicate check holds the second request and escalates both the uncertain settlement and destination change.',
    reconciliation: 'approved refund value equals confirmed settlements, active payment attempts, failed attempts available for authorized retry, returned funds, cancelled instructions, and unreleased approved balance',
    measures: 'potential duplicates detected, uncertain attempts, confirmed duplicate prevention, destination changes, failed and returned payments, approval-to-settlement time, manual searches, and reconciliation exceptions',
    playbook: [
      'Use more than customer name and amount. Match original receipt, account, approval ID, reason, currency, destination token, and time window. Repeated equal refunds can be legitimate, while one refund split across attempts can differ in amount. Document the match logic and contrary evidence.',
      'Treat every attempt as immutable. Link failed, returned, cancelled, and replacement attempts to the approved refund rather than overwriting the first reference. Preserve native provider statuses and timestamps; “not visible in billing” is not evidence that a payment failed.',
      'Search adjacent return mechanisms such as chargebacks, card reversals, account credits, and bank refunds. A payment may be technically different while economically duplicating the same customer remedy. Route policy interpretation to finance rather than netting paths on assumption.',
      'Close with a three-way proof between approval, external settlement, and customer-account treatment. Confirm the exact amount and currency, record any returned residual, and ensure open queues no longer propose another release. Customer communication should reflect the verified state and approved wording.'
    ],
  },
  {
    slug: 'promise-to-pay-monitoring-handoff', title: 'Promise-to-Pay Monitoring as a Factual Collections Handoff',
    description: 'A monitoring method that records customer-stated commitments without converting them into concessions or policy.',
    service: 'collections follow-up', serviceHref: '/services/collections-follow-up',
    situation: 'a customer states that payment will be made on a future date and the collections queue needs a controlled follow-up event',
    packet: 'the original customer message or call record, invoice and balance snapshot, stated amount and date, payment channel, dispute status, prior promises, contact restrictions, account owner, and client follow-up policy',
    method: 'record the statement accurately, distinguish it from a client-approved arrangement, schedule the permitted review, refresh cash and account evidence on that date, and escalate a missed or changed statement without punitive assumptions',
    boundary: 'The collections specialist does not negotiate terms, grant an extension, accept a settlement, waive fees, threaten consequences, characterize intent, change service, or treat a reported promise as cleared cash.',
    example: 'A customer writes, “We expect to send $9,000 Friday,” against $14,000 open. The record captures the customer-stated amount and date, keeps the remaining balance visible, and schedules a payment-evidence review. It does not mark the account paid or create an installment agreement.',
    reconciliation: 'open promise records equal payment confirmed, partial payment received, customer revised statement, owner-approved arrangement, disputed balance, missed review, contact suppressed, and unresolved follow-up',
    measures: 'promises by stated date and value, payments confirmed, partial receipts, missed reviews, repeat revised dates, owner escalations, contacts prevented by restrictions, and statements incorrectly recorded as agreements',
    playbook: [
      'Preserve the customer’s wording or an approved factual call summary. Record who spoke, channel, timestamp, timezone, invoices referenced, stated amount, stated date, and contingencies. Avoid rewriting “we expect” as “customer committed” or inventing certainty absent from the source.',
      'Keep three dates distinct: the customer-stated payment date, the permitted follow-up date, and the actual bank or processor receipt date. A promised date is not a transaction date, and a screenshot or remittance notice may still require payment confirmation under the client rule.',
      'Refresh volatile facts before follow-up. Search receipts, unapplied cash, credits, disputes, returned messages, and new owner instructions. If a possible receipt exists under another payer name, route payment research before sending language that says no payment was received.',
      'Use the approved outcome path. A confirmed receipt moves to posting or reconciliation; a partial receipt preserves the residual; a missed statement returns to owner-approved outreach; and a new dispute or hardship statement escalates. None of those facts authorize the operator to change commercial terms.'
    ],
  },
  {
    slug: 'invoice-supporting-attachment-control', title: 'Invoice Supporting Attachment Control Before Delivery',
    description: 'A release check that matches invoice versions with purchase orders, usage detail, timesheets, and customer-required support.',
    service: 'invoice preparation', serviceHref: '/services/invoice-preparation',
    situation: 'a customer requires evidence files with an invoice and several versions or source exports exist near the release deadline',
    packet: 'the approved invoice version, customer delivery instructions, required-document matrix, purchase order, usage or service detail, approved timesheets, redaction rules, file versions, reviewer evidence, and transmission plan',
    method: 'derive requirements from the approved customer profile, map each attachment to invoice lines and period, verify file identity and permitted data, package the exact release set, and test delivery constraints',
    boundary: 'The preparer does not fabricate support, modify source records, approve time or usage, decide what sensitive data may be shared, replace missing contractual evidence, or deliver an invoice before release approval.',
    example: 'An invoice includes September services, but the newest attachment folder contains an October export and a prior September draft. The package is held until the approved September evidence is identified; a matching filename is not treated as proof of period or version.',
    reconciliation: 'required package items equal approved included files, documented not-applicable items, owner-approved exceptions, files removed for data restrictions, and missing evidence that blocks release',
    measures: 'packages complete at first review, missing and wrong-period files, version mismatches, data-exposure findings, delivery-size failures, customer rejections, release delays, and regenerated packages',
    playbook: [
      'Maintain requirements by customer, entity, invoice type, and channel. Record each item’s source owner, period rule, acceptable format, naming convention, data restriction, and approval need. Copying last month’s folder is not a requirements check because terms and source versions can change.',
      'Bind every attachment to the invoice release identifier. Inspect internal titles, covered dates, row totals, customer identity, and approval state rather than trusting filenames. Where feasible, retain a checksum so reviewers can prove the delivered file is the one they approved.',
      'Apply least-data principles. Remove unrelated customers, hidden spreadsheet tabs, formulas that expose internal assumptions, and fields excluded by the client’s sharing rule. Redaction decisions and permitted content must come from authorized policy, not the preparer’s personal judgment.',
      'Test the delivery bundle under the actual channel limits. Record filenames, sizes, destination, transmission reference, and response. A portal upload or email acceptance is distinct from customer access; route rejected or inaccessible packages without regenerating invoice content unnecessarily.'
    ],
  },
  {
    slug: 'billing-kpi-definition-dictionary', title: 'Billing KPI Definition Dictionary for Outsourced Operations',
    description: 'A governance tool that makes backlog, accuracy, timeliness, and exception measures reproducible across teams.',
    service: 'billing process documentation', serviceHref: '/services/billing-process-documentation',
    situation: 'client and outsourced billing teams use the same KPI labels but calculate populations, clocks, exclusions, or outcomes differently',
    packet: 'the current dashboards, source systems, queue states, operating procedures, service-level definitions, calendar and timezone, historical extracts, adjustment rules, report owners, and known reconciliation differences',
    method: 'define each business question first, write numerator and denominator populations, specify event timestamps and exclusions, connect fields to authoritative sources, test examples and edge cases, and version every approved change',
    boundary: 'The documentation owner does not choose performance targets, redefine accounting results, hide exceptions, alter source data to improve a rate, or present an operational proxy as a contractual or financial conclusion.',
    example: 'Two teams report “invoice accuracy.” One counts invoices never reissued; the other counts line items without customer disputes. The dictionary keeps both measures under distinct names and explains their limits instead of averaging incompatible percentages.',
    reconciliation: 'the reporting population equals included records, documented exclusions, records awaiting source correction, late-arriving records, duplicates, and unresolved classification exceptions',
    measures: 'definitions with complete lineage, reports reconciled to source, manual adjustments, late inputs, definition changes, unexplained variances, dashboard refresh lag, and users trained on the current version',
    playbook: [
      'Give each metric a plain-language decision purpose. Then state grain, population, numerator, denominator, timestamp, timezone, filters, exclusions, owner, source fields, refresh cadence, and rounding. A formula without a defined population is not a controlled metric.',
      'Define clocks with start, pause, resume, and stop events. Separate time waiting for client evidence from time under operator control when that distinction supports the management question. Never pause a clock simply to improve performance; every pause needs an observable state and source.',
      'Test edge cases using worked records: reopened items, cancelled invoices, credits, partial payments, migrated accounts, late files, duplicate events, and actions crossing midnight. Store expected classifications so system or spreadsheet changes can be checked against the approved meaning.',
      'Version the dictionary and dashboards together. Record effective date, approver, reason, old and new definition, expected trend break, and backfill decision. Do not silently restate history. Report comparability limits whenever a new definition changes the population or clock.'
    ],
  },
];

function body(s: Seed): string[] {
  return [
    `${s.title} matters when ${s.situation}. A dependable outsourced routine should make the underlying facts reviewable by someone who did not work the case. The operating objective is not speed alone. It is a controlled handoff in which evidence, action, decision authority, and verification remain distinct.`,
    `Start with the authoritative packet: ${s.packet}. For every source, record the system, stable identifier, version or effective time, extraction time, and accountable owner. Screenshots and copied spreadsheets can support a case, but they should not silently replace the designated source or conceal that a source was unavailable.`,
    `Define the scope of ${s.title.toLowerCase()} before opening the clock. State the customer or account population, period, cutoff timestamp, timezone, ready condition, and completion evidence. A case is ready only when required inputs exist and the next action falls inside the assigned role. This prevents dependency time from being mislabeled as processing time and keeps staffing analysis honest.`,
    `The repeatable method is to ${s.method}. Translate that method into visible checks with inputs, expected outputs, and exception states. Preserve prior values and original records. Preparation, review, authorization, system action, and post-action verification should remain traceable even when one small team performs several steps.`,
    s.boundary,
    ...s.playbook,
    `For ${s.title.toLowerCase()}, use explicit queue states such as received, waiting for evidence, ready, in preparation, in review, returned, authorized, system action pending, verified, and closed with exception. Every open item needs a next action, owner, and review time. Labels such as pending or handled are too vague to support a shift handoff or an independent control review.`,
    `Consider the working example. ${s.example} The useful escalation does not simply announce a problem. It identifies the exact records affected, sources checked, conflict found, smallest answerable question, owner with decision rights, timing consequence, and what the billing team will do after each permitted answer.`,
    `Reconcile the full population at each handoff: ${s.reconciliation}. Use both record counts and monetary or unit values when relevant. Counts catch missing cases; values reveal concentration. Opening population plus arrivals, less verified completions and approved removals, should equal the closing open population. Any residual needs a named state rather than a balancing plug.`,
    `Measure the routine with ${s.measures}. Pair speed measures with quality and dependency measures. An improving average can hide an old high-value exception, repeated rework, or a queue narrowed through undocumented exclusions. Publish definitions with the result so buyers and operators interpret the same population.`,
    `Access for ${s.title.toLowerCase()} should follow least privilege. Give preparers only the systems and fields needed for the documented checks, separate approval or payment-release rights where practical, and review retained access when roles change. Store evidence in approved locations and avoid copying customer or payment data into informal notes merely to make a queue convenient.`,
    `Before launching ${s.title.toLowerCase()}, test normal, boundary, and failure scenarios with the client owner. Sample outputs independently, confirm escalation response times, and rehearse unavailable-source and system-failure paths. After launch, review early exceptions more frequently, compare outcomes with the written method, and update the procedure only through a versioned approval.`,
    `A practical outsourcing scope for ${s.title.toLowerCase()} names the volume, arrival pattern, required sources, allowed actions, prohibited decisions, service window, queue states, review sample, access model, escalation owners, and completion evidence. That design lets a specialist add capacity without transferring authority the client intends to retain. It also gives both teams a concrete basis for improving the process after real operating evidence accumulates.`
  ];
}

export const oct2BlogBatch = seeds.map((s) => ({
  ...s, published, datePublished: published, featuredImage, sourcesList, body: body(s),
}));

export const oct2BlogSlugs = seeds.map((s) => s.slug);
