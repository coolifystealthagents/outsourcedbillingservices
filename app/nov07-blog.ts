// Generated 2026-11-07 batch
export const nov07BlogBatch = [
 {
  "slug": "run-a-charge-capture-review-before-the-daily-claim-release",
  "title": "Run a charge capture review before the daily claim release",
  "description": "A daily charge review that reconciles the schedule to the charge file, assigns source owners, and protects the release cutoff.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/run-a-charge-capture-review-before-the-daily-claim-release.webp",
  "heroImage": "/images/november-07/run-a-charge-capture-review-before-the-daily-claim-release.webp",
  "minutes": 6,
  "wordCount": 934,
  "body": [
   "## Why the release needs its own charge review",
   "A charge capture review compares the work a practice actually performed with the charges ready for the next claim release. The review runs before claims leave the billing desk, not after a payer denies them, so a missing line can still be added with full support. Scope it to encounters with a service date inside the release window and to any late charge that arrived after the previous cutoff. The output is a short list of supported charges, held charges, and items that need a source owner.",
   "Without a daily review, small omissions accumulate into a month-end scramble that hides their cause. A missing supply line or a skipped procedure may look like a posting error later, when the operating record that proves it is harder to retrieve. The review also catches duplicate charges, because a second entry often appears when two people try to fix the same gap. Treat it as a control on both completeness and accuracy, and keep its evidence with the release file.",
   "## Reconcile the schedule to the charge file",
   "Freeze the schedule extract and the charge file at the same cutoff before anyone compares them. Match on a stable identifier such as an encounter number, appointment identifier, or procedure log line, and keep manual matches in a separate tab. Investigate every item that appears on one side and not the other before changing either source. A one-sided match can reflect a timing difference, a cancelled visit, a duplicate record, or a genuine omission.",
   "Group the differences into timing, missing source record, coding hold, authorization hold, and unknown. Count each group and give the largest group an owner before the end of the shift. Do not let the unknown bucket grow without a review, because it usually hides a defect in the matching logic rather than a billing problem. A small set of categories shows whether the gap sits in operations, coding, or the interface between them.",
   "## Name an owner for every missing charge",
   "Every missing charge needs a named source owner, even when the owner is outside the billing team. A missing implant may belong to the surgery center, a missing visit to the clinic scheduler, and a missing supply to the materials manager. Put the role in the file rather than a personal nickname that will mean nothing next quarter. When ownership changes, update the record on the same day the queue is reassigned.",
   "Read the oldest five items and the largest three items at each daily review, because the two views expose different risks. Age shows where the process has stalled, while value shows where the financial exposure is concentrated. Ask the owner for the next concrete step and the date it will happen. End the review with decisions, not a promise to look into it later.",
   "## Decide what may leave today",
   "A charge may leave the queue when the source record supports the code, the quantity, the date, and the responsible party. Hold any charge whose documentation is incomplete, whose rate is unapproved, or whose authorization is unresolved. Record the hold reason and the approver who can release it, then set a review date that falls before the filing deadline. A hold without an expiration date becomes an accidental write-off.",
   "The specialist can reconcile, annotate, and route a normal exception, while the billing manager keeps decisions that change money or coding. Link the release work to [invoice preparation](/services/invoice-preparation) and the [billing data quality review](/services/billing-data-quality-review) so a source defect is corrected upstream. Capture a screenshot or export of the release report after the file is accepted. That artifact proves which charges left, which stayed, and who approved the difference.",
   "## Close the loop with a weekly pattern review",
   "A weekly sample should test whether the daily review is catching the same defect in the same place. Pull ten held or corrected charges and ask which source field failed, who owned it, and how long the repair took. If one scheduling template or one supply list keeps producing gaps, the fix belongs in that template rather than in another reminder to the team. Feed the pattern into the next training session with the actual case attached.",
   "Report four numbers to the billing manager each week: charges released, charges held, average hold age, and the share of holds caused by a missing source. Pair the numbers with one decision the manager needs to make, such as approving a template change or assigning a backup owner. Keep the detail in the release file so a later reviewer can trace the summary back to the individual charge. A review that produces numbers but no decision will quietly stop happening.",
   "## Keep the review workable when volume rises",
   "A charge review can fail simply because it tries to inspect every line with the same depth. Set a materiality rule that sends small, routine charges through an automated match and reserves manual review for new codes, high-value lines, and known problem sources. Document the rule and review it quarterly so it does not quietly exclude a growing category. The goal is a repeatable control, not a heroic daily audit.",
   "When the team is short staffed, reduce the sample before reducing the evidence standard. A smaller review that still records the source, owner, and decision is more useful than a broad review that leaves no trail. Ask the billing manager to approve the temporary scope in writing and restore the full scope on a named date. A control that disappears under pressure was never a control."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "design-a-payer-contract-rate-variance-review-for-the-billing-desk",
  "title": "Design a payer contract rate variance review for the billing desk",
  "description": "A practical method for comparing allowed amounts to contracted rates, separating carve-outs, and routing underpayment findings to an owner.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/design-a-payer-contract-rate-variance-review-for-the-billing-desk.webp",
  "heroImage": "/images/november-07/design-a-payer-contract-rate-variance-review-for-the-billing-desk.webp",
  "minutes": 6,
  "wordCount": 894,
  "body": [
   "## What a rate variance review is meant to catch",
   "A payer contract rate variance review compares the allowed amount on a paid claim with the rate the contract says should apply. The review looks for underpayments, but it also surfaces wrong fee schedules, missing escalators, and claims paid under an outdated product. Scope the first pass to high-volume codes and recently renegotiated contracts so the sample stays manageable. The output is a ranked list of variances with the contract clause and claim evidence attached.",
   "A variance is not automatically an underpayment, because a contract may allow a different rate for a site of service, a modifier, or a bundled service. The reviewer must read the payment against the same clause the contract applies before raising a dispute. Separating a true rate error from a permitted adjustment protects the billing team's credibility with the payer. It also keeps the recovery queue focused on claims that can actually be corrected.",
   "## Build a rate card from the contract itself",
   "Build the rate card from the executed contract, its fee schedule attachment, and any signed amendment, not from a summary someone typed into a spreadsheet. Record the effective dates, the product or plan type, the place of service rules, and the modifiers that change the rate. Note the carve-outs and case rates that intentionally sit outside the fee schedule. Version the rate card and keep the source page number next to each line.",
   "When a contract has multiple schedules, label the claim population each schedule applies to before comparing payments. A Medicaid managed care line and a commercial line may share a code but not a rate, and mixing them produces false variances. Ask the contract owner to confirm any ambiguous clause in writing. The confirmation belongs in the rate card file so the next reviewer does not reopen the same question.",
   "## Match paid claims to the right rate line",
   "Match each paid claim to one rate line using the code, modifier, place of service, date of service, and plan. Load the allowed amount, the paid amount, the patient responsibility, and the contractual adjustment into the review file. Calculate the variance against the expected allowed amount and keep the calculation visible. A variance without a visible calculation is difficult to defend in a payer dispute.",
   "Sort the results by dollar impact and by repeat pattern rather than by claim count alone. One high-value surgical line may matter more than fifty small office visits, while a repeated small variance can signal a fee schedule that was never loaded. Flag any line where the paid amount exceeds the expected rate, because an overpayment creates a different obligation. Treat both directions as findings that need an owner.",
   "## Separate permitted adjustments from errors",
   "Permitted adjustments include contractual bundling, multiple procedure reductions, site of service differentials, and patient responsibility shifts. Document the clause that supports each adjustment and remove the claim from the error queue. A claim that is correctly adjusted should still be counted so the review shows how much of the apparent variance was expected. This step prevents the team from chasing recoveries that the contract does not support.",
   "Errors include a missing escalation, an old fee schedule, a wrong product mapping, or a rate applied to the wrong provider. Route each error to the contract owner, the credentialing team, or the payer relationship owner as appropriate. Set a response date and record the payer reference number when a dispute is filed. The billing specialist can prepare the packet, but the contract owner should approve the interpretation that goes to the payer.",
   "## Recover, report, and prevent the next variance",
   "File recovery requests through the channel named in the contract and keep the submission proof with the claim. Track the recovery status separately from the original variance so the team can see how much was recovered, denied, or still open. Reconcile the recovered amount back to the payment posting record before closing the case. A recovery that never reaches the account is not a completed review.",
   "Report the variance rate by payer, contract, and code family each month, with the dollar impact and the age of open items. Share the pattern with [payment posting](/services/payment-posting) and [billing reconciliation](/services/billing-reconciliation) so future payments are checked against the same rate card. Ask for one preventive change, such as a fee schedule reload or a contract clarification, at every review. The goal is fewer variances next quarter, not a longer list of disputed claims.",
   "## Handle small variances without losing the pattern",
   "A small per-claim variance can still be material when it repeats across hundreds of claims. Aggregate the low-dollar lines by payer and code before deciding to ignore them. If the total exceeds the review threshold, treat the group as one finding with a single owner. A variance policy that looks only at individual claim size will miss the most expensive pattern.",
   "Rebuild the expected rate whenever a contract is amended or a fee schedule is loaded. Compare the new rate card with the old one and list the codes that changed. Send the list to the posting team so they know which payments to watch in the first month after the change. Most rate errors appear at the seam between an old contract and a new one, and a short watch list catches them early."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "build-a-secondary-claim-filing-checklist-for-coordination-of-benefits",
  "title": "Build a secondary claim filing checklist for coordination of benefits",
  "description": "A coordination of benefits checklist that confirms payer order, captures the primary payment, and keeps the secondary claim inside its filing window.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/build-a-secondary-claim-filing-checklist-for-coordination-of-benefits.webp",
  "heroImage": "/images/november-07/build-a-secondary-claim-filing-checklist-for-coordination-of-benefits.webp",
  "minutes": 6,
  "wordCount": 876,
  "body": [
   "## Confirm the payer order before anything else",
   "A secondary claim is only valid when the billing team can prove which payer is primary for that service date. Start with the coordination of benefits record, the subscriber's coverage history, and any payer response that names the primary plan. Do not rely on the order the patient mentioned at registration, because coverage changes and plan rules can reverse it. Record the source and the date the order was confirmed.",
   "If two payers each deny primary responsibility, the claim needs a coordination review rather than a second submission. Send the conflicting responses to the payer that should be primary and request a written determination. Keep the request and the response in the claim file so the secondary claim has a defensible basis. A secondary claim filed on a guess usually returns as a duplicate or a COB denial.",
   "## Capture the primary payment and denial correctly",
   "The secondary claim needs the primary payer's remittance advice, including the allowed amount, paid amount, adjustments, and any denial reason. Attach the explanation of benefits and enter the primary payment in the secondary claim exactly as the remittance shows it. Do not net the primary payment against the charge without preserving the original amounts. The secondary payer must be able to reconstruct how the balance was calculated.",
   "When the primary payer denies the service instead of paying it, the denial reason determines whether a secondary claim is appropriate. A denial for lack of coverage may support a secondary submission, while a denial for missing information may need the primary claim corrected first. Read the remark codes and the claim status before choosing the path. Filing a secondary claim on an unresolved primary denial can create duplicate coverage liability.",
   "## Complete the secondary claim fields",
   "Complete the patient, subscriber, and payer identifiers for both plans, and mark the primary and secondary payer order in the claim. Include the primary payer name, policy number, and the paid or denied amounts in the fields the secondary payer requires. Check that the diagnosis codes, procedure codes, and service dates match the primary claim. A mismatch between the two claims is a common reason for a secondary rejection.",
   "Use the same rendering provider and facility identifiers that appear on the primary claim unless the contract requires otherwise. Review the secondary payer's companion guide for any local field rules, because a standard claim format still leaves room for payer-specific requirements. Save the completed claim and its attachments as one packet before transmission. The packet should let a reviewer follow the claim from primary payment to secondary submission without opening another system.",
   "## Protect the secondary filing deadline",
   "The secondary filing deadline may run from the date of service or from the primary payer's remittance date, depending on the contract. Put the rule and the calculated deadline in the claim record before the packet is worked. Set an internal cutoff several business days before the payer deadline so a missing attachment does not become a late filing. A deadline that lives only in a queue note is easy to miss when volume rises.",
   "If the primary payer is slow to respond, document the follow-up dates and the evidence that the secondary deadline is still open. Ask the secondary payer for a written extension when the contract allows one, and keep the response with the claim. Do not let a slow primary response become an excuse for an unmeasured backlog. The weekly review should show every secondary claim approaching its cutoff.",
   "## Reconcile the outcome and close the loop",
   "After the secondary payer responds, post the payment or adjustment and compare the total reimbursement with the expected allowed amount. If the secondary claim is denied, record the reason and decide whether a correction, appeal, or write-off is appropriate. Link the outcome to [payment posting](/services/payment-posting) and [collections follow-up](/services/collections-follow-up) so the balance does not sit unresolved. Close the case only when the account shows the final financial result.",
   "Review a sample of secondary claims each month for wrong payer order, missing primary remittance, and late filing. Share the findings with registration and the primary claim team, because many secondary problems begin as a coverage or data entry error. Update the checklist when a payer changes a field rule or a deadline. A checklist that is never revised becomes a record of last year's process.",
   "## Keep the packet auditable after it leaves",
   "Store the secondary claim packet with the primary remittance and the coverage determination in one accessible record. Record the submission date, the channel, and the confirmation number so a later reader can prove when the claim left. If the payer requests additional information, add the request and the response to the same record. An audit trail assembled after a dispute is much weaker than one built during the work.",
   "A secondary claim often crosses teams, so use a short handoff note when the item moves from registration to billing to follow-up. The note should state what was confirmed, what remains open, and who owns the next action. Avoid repeating the full history in every message. The note is a baton, not a transcript, and it should let the next person continue without a call."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "set-up-a-remittance-advice-exception-log-for-the-posting-team",
  "title": "Set up a remittance advice exception log for the posting team",
  "description": "A remittance exception log that captures unmatched payments, denial lines, and posting holds, with clear routing and a daily close.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/set-up-a-remittance-advice-exception-log-for-the-posting-team.webp",
  "heroImage": "/images/november-07/set-up-a-remittance-advice-exception-log-for-the-posting-team.webp",
  "minutes": 6,
  "wordCount": 906,
  "body": [
   "## Define what belongs in the exception log",
   "A remittance advice exception is any line the posting team cannot apply cleanly to the expected claim or account. Include unmatched payments, payments with an unknown claim number, denial lines that need follow-up, and amounts that differ from the expected reimbursement. Exclude normal contractual adjustments and patient responsibility that post without a question. Write the definition in the log so every poster classifies the same way.",
   "The log should capture the payer, remittance date, claim identifier, amount, exception type, and the source document. Add the poster's initials and the date the item entered the queue. Keep the original remittance image or file link next to the entry so a later reviewer can reconstruct the decision. An exception log without the source document is only a list of unresolved numbers.",
   "## Triage the log at the start of each shift",
   "Start the shift with the oldest unresolved exception and the largest dollar item, because age and value expose different risks. Check whether a matching payment already posted under another claim number before creating a second entry. Route coding questions to the coding reviewer, contract questions to the contract owner, and patient balance questions to the billing team. Give every route a response date rather than a general request to review.",
   "A payment that cannot be matched within the first pass should move to a research queue with a named owner. Record what was searched, which systems were checked, and what evidence would resolve the match. Do not apply an unmatched payment to a similar account just to clear the report. A forced match creates a reconciliation problem that is harder to unwind than an open item.",
   "## Keep denial lines connected to follow-up",
   "A denial line is not closed when the posting team records the zero payment. It needs a denial reason, an owner, and a next action such as a correction, appeal, or patient transfer. Link the remittance line to the denial record so the follow-up team sees the same evidence the poster saw. This connection prevents a denial from being rediscovered weeks later with no history.",
   "Separate technical denials from clinical or coverage denials when routing the work. A technical denial may return to the clearinghouse or the claim editor, while a coverage denial may need the payer relationship owner. Do not let one broad denial category send every item to the same queue. The route should match the reason and the person who can actually resolve it.",
   "## Reconcile the log before the daily close",
   "At the end of the day, reconcile the total posted amount to the remittance total and explain every difference. Count the open exceptions by type and age, and confirm that each one has an owner and a next date. A log that grows without a daily count hides a posting defect behind routine activity. The close should take minutes, not a second full review.",
   "Investigate any exception that has crossed a defined age threshold, such as five business days, and escalate it to the billing manager. Check whether the same payer or claim type keeps producing the exception, because repetition often points to a mapping or enrollment problem. Record the escalation and the decision in the log. The manager should see the pattern, not just the individual item.",
   "## Use the trend to fix the source",
   "Review the exception log weekly with [payment posting](/services/payment-posting) and [billing reconciliation](/services/billing-reconciliation) to find repeat causes. A recurring unmatched payment may reflect a missing payer identifier, while a recurring denial may reflect a claim edit that should have caught the issue earlier. Assign one preventive change per week and check whether the exception count falls. A log used only for cleanup will never reduce the work.",
   "Keep the log small enough to read and specific enough to act on. Merge categories that require the same owner and next step, and split a category only when the route changes. Test the definitions with a second poster and compare how each person classifies the same remittance line. If two trained people disagree, the log needs a clearer rule rather than more training.",
   "## Set a daily close routine for the posting desk",
   "End each posting shift with a short close that reconciles posted cash to the remittance file and lists every open exception. Confirm that each open item has an owner and a next action date before the shift ends. A log that carries items without a date becomes a second backlog with no accountability. The close should also record any payment that was intentionally left unapplied and the reason.",
   "The close is not a full re-review. It is a checkpoint that asks whether the day's work can be explained to the next poster. If the answer is no, the remaining items stay open with a named owner rather than being forced to a clean total. That honesty protects the reconciliation and gives the morning shift a clear starting point.",
   "## Keep the log useful over time",
   "Review the log monthly for categories that no longer earn their place. Remove a category when the last three months produced no items, and add one only when the route differs from every existing option. Archive closed items on a schedule that matches the record retention policy. A log that is easy to maintain is more likely to survive a busy week than a perfect design nobody updates."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "audit-a-small-balance-ar-worklist-without-writing-off-the-wrong-accounts",
  "title": "Audit a small-balance AR worklist without writing off the wrong accounts",
  "description": "A small-balance AR audit that verifies patient responsibility, excludes active disputes, and keeps write-off approvals visible.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/audit-a-small-balance-ar-worklist-without-writing-off-the-wrong-accounts.webp",
  "heroImage": "/images/november-07/audit-a-small-balance-ar-worklist-without-writing-off-the-wrong-accounts.webp",
  "minutes": 6,
  "wordCount": 964,
  "body": [
   "## Set a defensible small-balance definition",
   "A small-balance worklist is a group of open accounts below a dollar threshold that the team reviews for collection, adjustment, or write-off. The threshold should come from a written policy, not from the amount that happens to be convenient this month. Include the age of the balance and the account type in the definition, because a new patient copay and a stale insurance residual carry different risks. Publish the rule so every reviewer applies it the same way.",
   "A low balance is not the same as an uncollectible balance. The account may still have an active appeal, a pending secondary claim, or a patient payment plan that has not posted. Check those conditions before the worklist reaches a write-off decision. Writing off an account that is still in play removes it from follow-up and hides the real outcome.",
   "## Verify the balance before reviewing the dollar amount",
   "Recompute the balance from the charge, payment, adjustment, and patient responsibility records rather than trusting the aging report total. Confirm that the primary and secondary payers have both responded or that the remaining balance is genuinely patient responsibility. Check for duplicate postings and unapplied cash that could clear the account. A balance that cannot be rebuilt from its components is not ready for a write-off.",
   "Match the account to the most recent patient statement and any returned mail or portal message. A small balance may be uncollectible because the patient cannot be reached, but that conclusion needs evidence. Record the contact attempts, the dates, and the response or nonresponse. The write-off file should show why collection stopped, not only that the amount was small.",
   "## Exclude accounts that need a different path",
   "Exclude accounts with an open dispute, an active appeal, a bankruptcy indicator, or a legal hold from the routine small-balance worklist. Route those accounts to the owner who can decide the next step under the applicable policy. A bankruptcy or deceased-patient account may require a specific adjustment code and supporting documentation. Mixing those cases into a general write-off batch creates compliance and reporting risk.",
   "Also exclude accounts that belong to a payer contract with a minimum recovery or audit requirement. A small balance may still need to stay open because the contract or a recovery vendor requires a documented collection attempt. Read the contract and the payer policy before applying the internal threshold. The threshold is an internal convenience, not a substitute for the obligation.",
   "## Keep approval visible at the right level",
   "Set approval thresholds that match the financial exposure and the person's authority. A billing specialist may prepare the packet, but a supervisor or manager should approve the write-off and record the reason. Require a second approval for accounts above a defined amount or for any account connected to a patient complaint. The approval should name the person, the date, and the policy basis.",
   "Keep the approval in the same file as the balance calculation and the contact evidence. A separate email chain is easy to lose when the account is reviewed later. If the approver changes the decision, update the file and the accounting entry together. The version that posts should match the version that was approved.",
   "## Sample the worklist before the batch posts",
   "Before a write-off batch posts, sample at least ten accounts or ten percent of the batch, whichever is larger. Recheck the balance, the exclusion rules, the contact evidence, and the approval level. Look specifically for accounts that were written off while a secondary claim or appeal was still open. A small sample catches process errors before they become a reporting problem.",
   "Reconcile the batch total to the accounting entry and confirm that every account has a reason code. Compare the batch to the prior month to see whether one reason or one payer is driving the increase. Share the result with [collections follow-up](/services/collections-follow-up) and [billing reconciliation](/services/billing-reconciliation) so the write-off is visible in the financial close. A batch that cannot be reconciled should not post.",
   "## Learn from the accounts that should not be there",
   "The most useful audit finding is an account that entered the worklist for the wrong reason. A missing secondary filing, a stale address, or an unposted payment may be fixable and may recur across many accounts. Count those causes separately from true uncollectible balances and assign a preventive owner. The goal is to shrink next month's worklist, not to celebrate a faster write-off.",
   "Review the policy annually and whenever a payer changes its billing rules. Test the threshold against the actual cost of collection, the contract requirements, and the patient experience. Document the decision to keep or change the rule with the evidence behind it. A defensible small-balance policy is one the team can explain to a patient, a payer, and an auditor without reaching for a different answer.",
   "## Keep a clear record of what was not written off",
   "The worklist review should also record the accounts that were kept open and the reason. A balance may stay open because a payment plan is active, a secondary claim is pending, or the patient asked for more time. Those reasons are as important as the write-off reasons because they explain why the outstanding total did not fall. Review the kept-open list at the next cycle to confirm the condition is still true.",
   "A written reason code for each retained account prevents the worklist from being reviewed twice with different conclusions. Use a small set of codes and require a note when the code is other. That small discipline makes the next review faster and gives the manager a way to see whether a collection policy is actually being followed."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "create-a-claim-submission-hold-queue-that-protects-the-filing-deadline",
  "title": "Create a claim submission hold queue that protects the filing deadline",
  "description": "A hold queue design with reason codes, deadline clocks, daily ownership, and release criteria that keep claims from aging past filing limits.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/create-a-claim-submission-hold-queue-that-protects-the-filing-deadline.webp",
  "heroImage": "/images/november-07/create-a-claim-submission-hold-queue-that-protects-the-filing-deadline.webp",
  "minutes": 6,
  "wordCount": 968,
  "body": [
   "## Why claims need a controlled hold queue",
   "A claim submission hold is a deliberate pause before a claim leaves the billing system, and it should never be an accidental parking lot. Holds exist for missing eligibility, unresolved authorization, coding review, incomplete documentation, and payer setup issues. The queue gives each hold a reason, an owner, and a deadline so the pause does not become a lost claim. Without that structure, a hold is just a claim nobody is working.",
   "The filing deadline is the constraint that makes the queue urgent. A hold that is reasonable on day two can become a write-off by day forty, and the team may not notice until the payer rejects the claim. Build the queue around the deadline rather than around the date the claim entered the system. The oldest item by remaining filing time should drive the daily review.",
   "## Use a small, stable reason taxonomy",
   "Choose a small set of hold reasons that map to different owners and different next actions. Eligibility, authorization, coding, documentation, payer enrollment, and account data are usually enough for a first version. Add a reason only when the next action genuinely differs from every existing category. A long taxonomy slows triage and produces inconsistent choices.",
   "Write a definition for each reason and include one example in the queue documentation. Test the definitions by having two reviewers classify the same ten claims and compare the results. If they disagree, the category is ambiguous and should be rewritten. Stable categories make the hold report useful and the owner routing predictable.",
   "## Put a deadline clock on every item",
   "Record the payer filing limit, the date of service, and the calculated last safe submission date for every held claim. Make the remaining days visible in the queue rather than buried in a payer guide. Set an internal cutoff that leaves time for review, correction, and transmission. The internal cutoff is the date the team works against, not the payer's final date.",
   "When the filing rule depends on a remittance or denial date, record the event that starts the clock and the source document. A claim with an unclear deadline should be escalated rather than guessed. Review the clock calculation when a payer changes its policy or a contract adds a new requirement. A wrong deadline is worse than no deadline because it creates false confidence.",
   "## Assign daily ownership and a release test",
   "Give every hold reason a primary owner and a backup, and make the owner's daily job to move each item to a release decision. The release test should state what must be present before the claim can leave: a verified eligibility response, an authorization number, an approved code, or a signed note. If the test is not met, the item stays held with a new action date. The owner should not close a hold by simply removing the flag.",
   "The billing specialist can gather evidence, update the queue, and prepare the release, while the billing manager or coding lead approves the exceptions that change coding or financial risk. Record the approver and the time of approval in the claim history. This separation keeps the specialist inside a documented role and gives the reviewer a clear decision point. A reviewer should be able to see both names without opening a separate message thread.",
   "## Escalate before the cutoff, not after",
   "Set an escalation trigger at a fixed number of days before the internal cutoff, such as five business days. At that point, the item goes to the backup owner and then to the billing manager if it is still unresolved. Make the escalation visible in the daily report so the team can see which claims are at risk. An escalation that happens after the deadline is only an explanation.",
   "Track the number of claims released on time, the number escalated, and the number that missed the internal cutoff. Investigate the misses for a root cause rather than blaming the last person who touched the claim. A missing authorization may belong to the scheduling team, while a payer enrollment gap may belong to credentialing. The queue should route the cause, not only the symptom.",
   "## Review the queue weekly for repeat holds",
   "A weekly review should show which reason codes are growing and which owners are carrying the oldest items. Connect the findings to [invoice preparation](/services/invoice-preparation) and the [billing data quality review](/services/billing-data-quality-review) so the upstream source is corrected. If one payer or one service line dominates the holds, the fix may be a template change or a contract conversation. The queue is a control, but its best output is fewer preventable holds.",
   "Keep the report short enough for a daily huddle and detailed enough for a monthly review. The daily view needs the oldest five claims by remaining filing time and the items due for escalation. The monthly view needs the trend by reason, owner, and payer. Both views should trace back to the claim record, so a reviewer can verify the number instead of trusting the summary.",
   "## Train the backup before the queue needs one",
   "A hold queue depends on a backup who can run the release test when the primary owner is away. Train the backup on the same definitions and let them work a live sample with the primary owner observing. Record the training date and the sample reviewed so the coverage is not just an assumption. A queue with no trained backup becomes a filing risk every time someone takes leave.",
   "Review the backup's decisions on a small sample after the first independent shift. Look for whether the release test was applied consistently and whether escalations happened on time. Correct the definition rather than the person when the two reviewers disagree. That habit keeps the queue stable as staff change."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "run-a-quarterly-credit-balance-review-with-named-owner-sign-off",
  "title": "Run a quarterly credit balance review with named owner sign-off",
  "description": "A quarterly credit balance review that validates the credit source, separates refunds from reapplications, and records owner approval.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/run-a-quarterly-credit-balance-review-with-named-owner-sign-off.webp",
  "heroImage": "/images/november-07/run-a-quarterly-credit-balance-review-with-named-owner-sign-off.webp",
  "minutes": 6,
  "wordCount": 954,
  "body": [
   "## Start with a clear credit balance definition",
   "A credit balance exists when payments and adjustments exceed the allowed charges on an account. The credit may belong to the patient, a payer, or another party, and the review must establish which one before any refund is issued. Include overpayments, duplicate payments, returned refunds, and postings that were reversed but never cleared. Exclude normal patient prepayments that are still being applied to scheduled services.",
   "The quarterly cadence is useful because it gives the team enough volume to see patterns without letting credits age through several close cycles. A credit that sits for a year is harder to refund, reapply, or escheat correctly. The review should also cover accounts that were closed in the prior quarter, because a closed account can still hold an unresolved credit. Include the closing date in the review file so the age of the credit is measured from the right event.",
   "## Validate the source before choosing a remedy",
   "Recompute the credit from the payment, adjustment, and charge history instead of relying on the aging report line. Identify the payer or patient who provided the excess and confirm that the original payment cleared. Check whether the credit is the result of a duplicate posting that should be reversed rather than refunded. The remedy depends on the source, so the source must be proven first.",
   "Look for a matching open balance on another account before issuing a refund. A payment may have posted to the wrong patient or the wrong claim, and moving it is often more accurate than returning it. Document the search and the result even when no match is found. A refund that ignores an obvious offset creates two problems where there was one.",
   "## Separate refunds, reapplications, and adjustments",
   "A refund returns money to the party that paid it, while a reapplication moves the credit to a valid open balance. An adjustment corrects a posting error or applies a contractual write-off. Each path needs a different approval and a different accounting entry. Mixing them in one batch makes the reconciliation impossible to explain.",
   "For a patient refund, confirm the patient identity and the preferred refund method before releasing funds. For a payer refund, use the payer's recovery process and keep the reference number with the account. For a reapplication, show the source account, the destination account, and the approval for the move. The file should let a reviewer follow the money from receipt to final disposition.",
   "## Put a named owner on every decision",
   "Assign each credit to a named reviewer who can explain the source and the proposed remedy. The reviewer may be a billing specialist, but the approval to refund or reapply above a defined threshold should sit with a manager. Record the approver, the date, and the evidence used for the decision. A queue with no named owner becomes a list of items everyone assumes someone else is handling.",
   "Separate the preparation role from the approval role in the written procedure. A specialist can validate the balance and assemble the packet, while the manager approves the refund or the write-off. This split protects the specialist from making a decision that belongs to the business owner. It also gives the auditor a clear record of who decided and why.",
   "## Reconcile the quarter before it closes",
   "Before the quarter closes, reconcile the opening credit balance, new credits, refunds, reapplications, adjustments, and the ending balance. Explain every difference between the subledger and the general ledger. Confirm that each closed item has a posting reference and each open item has an owner and a next date. A reconciliation that only matches the total can still hide an unresolved patient refund.",
   "Review the age of the remaining credits and escalate anything beyond the policy threshold. Check whether a credit is subject to unclaimed property rules and route it to the owner who handles escheatment. Do not let a small credit sit indefinitely because the refund cost feels high. The policy should define the threshold and the required evidence for both refund and write-off.",
   "## Use the review to prevent the next credit",
   "Group the quarter's credits by cause, such as duplicate posting, wrong payer, missed secondary filing, or patient overpayment. Share the pattern with [payment posting](/services/payment-posting) and [billing reconciliation](/services/billing-reconciliation). Choose one preventive change, such as a posting edit or a secondary claim check, and measure whether the next quarter's credits fall. The review is successful when the inventory shrinks, not when the batch is merely cleared.",
   "Keep a short decision log with the review packet. The log should name the approver, the remedy, the amount, and the evidence for each item above the threshold. A later reviewer should be able to answer who approved the refund and why without opening a separate email archive. That record is the difference between a controlled refund and an unexplained payment out the door.",
   "## Set the review calendar and the handoff",
   "Open the quarterly review at a fixed point in the close calendar so the team knows when evidence is due. Assign a preparer and a reviewer before the quarter starts, and give both a named backup. The preparer should finish the packet before the last week of the quarter so the reviewer has time to test a sample. A review that starts on the final day becomes a signature exercise.",
   "At the handoff, the preparer should walk the reviewer through the largest items, the unresolved items, and any change to the refund policy. The reviewer should test at least one calculation and confirm the approval evidence is present. Record the handoff date and the questions raised. The next quarter's packet should answer those questions before they are asked again."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 },
 {
  "slug": "build-a-front-end-registration-error-brief-for-denial-prevention",
  "title": "Build a front-end registration error brief for denial prevention",
  "description": "A weekly registration error brief that traces denials to front-end fields, names the owner, and measures whether the fix worked.",
  "published": "2026-11-07",
  "featuredImage": "/images/november-07/build-a-front-end-registration-error-brief-for-denial-prevention.webp",
  "heroImage": "/images/november-07/build-a-front-end-registration-error-brief-for-denial-prevention.webp",
  "minutes": 6,
  "wordCount": 921,
  "body": [
   "## Choose denials that trace to registration",
   "A front-end registration error brief focuses on denials caused by information captured before the claim was built. Typical examples include a wrong subscriber identifier, a missing authorization, an incorrect plan, or a stale patient address. The brief should not try to cover every denial, because coding and clinical denials need a different review. Select the denial reasons that the registration team can actually influence.",
   "Start with the denial notice and the claim history, then trace the disputed field back to the registration record. Compare what was entered with what the eligibility response or the patient provided. If the field was correct at registration and changed later, the cause sits elsewhere. The brief should show the field, the source, and the point where the error entered the workflow.",
   "## Collect a small, repeatable sample",
   "Pull a weekly sample of denied claims that share a registration-related reason code or remark. Aim for a sample the team can review in one sitting, such as ten to twenty claims, rather than a full population. Include at least one denial from each major payer or service line so the pattern is not dominated by one contract. Record the sample size and the selection rule with the brief.",
   "For each claim, capture the registration field, the expected value, the value that reached the claim, and the evidence that shows the difference. Note whether the error was caught by an edit, by the clearinghouse, or only by the payer. A field that fails at the payer but passes every internal check is a candidate for a new edit. A field that fails internal review is a training or workflow issue.",
   "## Write the brief for the people who can fix it",
   "Write each finding as a short statement of what happened, how often, and what change is requested. Avoid a long narrative about the denial, because the registration team needs the field and the fix. Include one example claim and the redacted evidence that shows the error. End with a specific owner and a due date for the change.",
   "Separate errors caused by missing information from errors caused by incorrect entry. Missing information may require a patient outreach step or an eligibility check, while incorrect entry may require a template change or coaching. The remedy should match the cause, not the volume. A brief that asks for more training when the real problem is an unavailable field will not reduce denials.",
   "## Route the fix to the right owner",
   "The registration supervisor owns data entry and template changes, while the eligibility team owns coverage verification and the billing manager owns claim edits. Send each finding to one owner with the evidence attached and a date for the response. Copy the billing manager so the financial impact stays visible. A finding sent to everyone is usually owned by no one.",
   "Track the status of each requested change until it is implemented or rejected with a reason. If a change is rejected, record the alternative control that will catch the error. A rejection without a compensating control leaves the same denial path open. The brief should show both the recommendation and the decision.",
   "## Measure whether the fix reduced denials",
   "Choose one measure for the following week, such as the count of denials with the target reason or the share of claims that passed the relevant edit. Compare the same payer and service line so the result is not distorted by mix. Give the measure a baseline before the change and a review date after it. Without a baseline, the team cannot tell improvement from normal variation.",
   "Check whether the fix moved the error rather than removing it. A new registration rule may reduce one denial while creating more manual work or a new rejection at the clearinghouse. Watch the related edit and hold counts alongside the denial count. The goal is a cleaner claim, not a number that looks better in one report.",
   "## Keep the brief connected to the billing workflow",
   "Share the weekly brief with [invoice preparation](/services/invoice-preparation) and the [billing data quality review](/services/billing-data-quality-review) so registration, billing, and posting see the same evidence. Invite the registration lead to the denial review when a finding needs a workflow change. Keep the meeting short and decision-focused. The brief is a tool for prevention, not a report to file.",
   "Review the brief format each quarter and remove fields nobody uses. Keep the evidence that supports decisions and drop the commentary that repeats the denial notice. Test the brief with a new reviewer and ask whether they can identify the owner and the requested change without help. A brief that cannot be understood in one read will not change the front end.",
   "## Watch for edits that create new denials",
   "A front-end edit can reduce one denial while blocking a legitimate claim or shifting the error to a later field. Monitor the edit's hold and rejection counts for the first month after release. Ask registration whether the new field or rule is easy to complete correctly under time pressure. An edit that is technically correct but unusable at the desk will be bypassed.",
   "Keep a short feedback loop from registration back to billing when a rule is unclear. The registration team sees the patient conversation and can explain why a field is often blank or wrong. That context should shape the next version of the brief. Denial prevention works best when the people entering the data help design the check."
  ],
  "sourcesList": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS National Correct Coding Initiative",
    "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "X12 Health Care Claim 837",
    "url": "https://x12.org/products/health-care-claim-837"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ]
 }
];
export const nov07BlogSlugs=nov07BlogBatch.map(x=>x.slug);
