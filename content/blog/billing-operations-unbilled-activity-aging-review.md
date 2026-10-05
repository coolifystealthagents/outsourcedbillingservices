# Unbilled Activity Aging Review: Find the Decision Holding Each Charge

An unbilled report often mixes very different records. Some activity is not yet eligible because the billing window remains open. Some lacks a customer or price. Some is held for approval, disputed, rejected by an interface, or stranded after a system change. Aging all of it from the service date can make routine timing look overdue and hide the items that truly need intervention.

An unbilled activity aging review groups work by eligibility and evidence state before measuring delay. It helps billing teams identify the smallest missing decision while leaving contract interpretation, revenue recognition, estimates, and write-offs with qualified owners.

## Define the unit before calculating age

Choose the lowest unit that can become a billable line: a usage event, service record, milestone, time entry, shipment, fee, or another client-defined item. Assign a stable identifier and retain its customer, service period, quantity, source value, currency, product, contract or order locator, and current billing status.

Avoid mixing aggregate balances with individual events. A project may show $40,000 unbilled while containing one eligible milestone and several future milestones. The aggregate cannot tell the queue which action is due.

Record corrections and supersession. If a usage file is replaced, link the new version to the old events instead of counting both. If several raw events combine into one invoice line, retain the member list so the line remains traceable.

## Use more than one clock

Service date is only one possible start. Capture source-event time, source arrival, eligibility time, approval request, owner response, billing cutoff, invoice-candidate creation, and current observation time. These timestamps divide total age into meaningful intervals.

For example, usage occurs throughout September, arrives October 2, passes validation October 3, and is contractually billable after an October 5 cutoff. On October 4 the activity is old by service date but not late by eligibility. If the owner approves it October 8 and it remains unbilled October 12, the delay after approval belongs to a different process stage.

Define each clock and timezone before measuring. Do not compare calendar days in one system with business hours in another without disclosure. Keep negative or impossible intervals visible as data-quality exceptions.

## Classify why the item is unbilled

Use reason states that point to evidence or an owner: window open, source not received, identity missing, price missing, quantity conflict, contract or order question, customer setup incomplete, approval pending, dispute hold, interface failure, invoice draft held, rejected by validation, corrected source pending, approved deferral, duplicate candidate, or unresolved.

Each state needs entry and exit criteria. “Approval pending” should name the approval, request time, owner, and required evidence. “Source missing” should identify the expected source and due time. A generic hold state is not actionable.

Separate records that are ineligible from records that are eligible but blocked. The first population informs upcoming workload; the second identifies operational backlog. Do not call an item billable merely because it has an amount. Eligibility must follow the client’s approved rule.

## Build a worked aging cohort

Suppose 600 service events remain outside invoices at month-end. Two hundred are inside an open billing window, 150 await a scheduled source confirmation, 90 lack approved customer mappings, 80 have price conflicts, 50 are on documented dispute holds, and 30 passed all controls but failed invoice generation.

A single average age would blur the result. The review creates six cohorts with their own starting event and next owner. The 30 generation failures may be young but immediately actionable. The 200 window-open events may be older but require no exception action. The 80 price conflicts need commercial decisions, not faster data entry.

The cohort bridge must reconcile to all 600 events. If one record has several problems, apply a declared primary blocking state and retain secondary flags. Otherwise the same event inflates multiple queues.

## Ask the smallest decision question

For each owner-pending cohort, present the precise missing fact, sources already checked, candidate affected population, value by currency, deadline, and downstream consequence. “Please review unbilled work” forces the owner to reconstruct the queue. “Confirm which approved price version applies to 14 events for order O-62 after September 15” is answerable.

Billing specialists can retrieve sources, compare fields, reproduce calculations, and prepare invoice candidates under approved instructions. They should not select a price, infer customer acceptance, move an effective date, remove a dispute hold, estimate missing usage, or decide that old activity should be written off.

Record owner responses as versioned decisions. A decision for one order or period should not become a permanent global rule unless the owner explicitly approves that scope.

## Reconcile movements instead of refreshing history away

At each review date, freeze the opening population. Reconcile it through newly eligible activity, new arrivals, corrections, duplicates removed under rule, invoices created, approved deferrals, cancellations, and closing unbilled items. Later arrivals belong in a movement schedule rather than being inserted into the original extract.

Trace billed outcomes to the exact invoice line and artifact. A status change to “billed” does not prove the event appeared once, used the approved quantity and rate, or reached the intended customer. Search for split, combined, and duplicate outcomes.

For items removed without an invoice, require a reason and authority. Deleting a stale record from the queue is not resolution.

## Design aging measures that explain work

Report count and value by eligibility state, blocking reason, owner, source, and age band. Separate currencies. Use median and an upper percentile with the number of records that possess both required timestamps. Averages alone are vulnerable to a few very old items.

Measure time from expected source to arrival, eligibility to review, decision request to owner response, approval to invoice candidate, and candidate to release. This decomposition shows whether delay comes from input availability, unclear rules, owner capacity, system failure, or billing execution.

Track cohort migration. An item moving from identity missing to price missing has progressed but remains blocked. Frequent cycling between states can reveal incomplete handoffs or unclear exit criteria.

## Close the review with a decision map

The final artifact should let a reviewer select any aged item and see its source, eligibility rule, timeline, current blocker, question, owner, and expected next event. It should also show inaccessible or unresolved records, not only the population the team could classify easily.

Teams that need this evidence prepared without transferring policy decisions can review our [billing reconciliation service](/services/billing-reconciliation) and [month-end billing support](/services/month-end-billing-support). A useful unbilled review does not merely shrink an aging total. It distinguishes work that is not due from work waiting on a specific source, system, or authorized decision.

## Authoritative references

- [GAO Standards for Internal Control in the Federal Government](https://www.gao.gov/greenbook)
- [FASB Revenue Recognition resources](https://www.fasb.org/page/PageContent?pageId=/projects/recentlycompleted/revenue-recognition.html)
