// Generated 2026-11-11 batch
export const nov11ResearchBatch = [
 {
  "slug": "how-fee-schedule-updates-propagate-through-billing-operations",
  "title": "How fee schedule updates propagate through billing operations",
  "excerpt": "An analysis of how a contracted rate travels from notice to claim, where the path loses fidelity, and what evidence proves it arrived.",
  "body": [
   "## Question and scope",
   "A fee schedule update is usually described as a contracting event, but its effects appear in billing operations. This research asks how a new rate travels from the contract to the claim and where that path loses fidelity. The scope is a billing team that submits claims under multiple payer contracts and maintains a loaded fee schedule in its practice management system. The analysis follows one rate change from notice to first paid claim.",
   "The question matters because an unloaded or misloaded rate does not always produce an obvious failure. The claim may be accepted and paid at the old amount, and the loss appears as a quiet underpayment. The goal is to identify the handoffs where a change can stall and the evidence that shows whether it arrived. A review that checks only the screen will miss the loss that appears on the remittance.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one rate change for one code under one contract. A change includes the source notice, the contract clause, the effective date, the loaded rate, and the claims that follow. Propagation means the change is reflected in the price of a claim at the time the contract requires. A change that exists only in a spreadsheet has not propagated.",
   "Fidelity means the loaded rate matches the contracted rate and the rules that qualify it. A rate can be numerically correct and still fail because a modifier, a place of service, or a unit rule is wrong. The analysis therefore treats the rate and its rules as one unit. This distinction prevents a team from declaring success after a partial load.",
   "## Method and evidence reviewed",
   "The method is a document and claim review rather than a statistical estimate. Select a recent rate change and collect the contract, the payer notice, the load record, and a sample of claims before and after the effective date. Compare the allowed amount with the contracted rate. Record the dates when each artifact was created.",
   "Review the change log, the test claims, and any communication to the billing team. Interview the person who loaded the rate and the person who reviews underpayments. The combination shows whether the process has a step for verification or only a step for entry. The method does not assume that a documented process was followed.",
   "## The contract as the source of truth",
   "The contract defines the rate, the effective date, and the conditions that change the payable amount. A payer notice may summarize the change, but the contract governs when the two conflict. The billing team should work from a contract summary that names the clause and the version. A rate loaded from an email without that reference is hard to defend later.",
   "Contract language can also set notice periods and retrospective adjustments. Those terms affect when a change should be applied and whether a prior claim can be reopened. Record the notice requirement beside the effective date. The operational team needs to know not only the new rate but also the date from which it can rely on it.",
   "## Where propagation breaks",
   "The first break is between the person who receives the notice and the person who loads the rate. When no owner is named, the notice is forwarded and then forgotten. A shared inbox is not an owner, because everyone assumes someone else has acted. The change log should begin at receipt, not at the load.",
   "The second break is between the loaded rate and the claim edit. A rate can be correct in the fee schedule while an override, a contract rule, or a legacy mapping applies the old amount. The team sees the new rate on screen and the old rate on the remittance. Testing a real claim is the only way to detect this gap.",
   "## Underpayment as a delayed signal",
   "An underpayment is often the first visible evidence that a rate did not propagate. The claim is accepted, the service is documented, and the payment is simply lower than expected. If no one compares the allowed amount with the contract, the loss continues. The delay between the change and the discovery can span several billing cycles.",
   "Underpayments are also easy to misclassify as payer behavior or contractual adjustments. A team that trusts the payer's pricing will not open a review. The control is a periodic comparison of high-value claims against the contracted rate. The comparison converts a silent loss into a finding with a date and an amount.",
   "## Capacity and control implications",
   "Rate changes consume review capacity even when the load is automated. Someone must read the notice, confirm the clause, stage the codes, test a claim, and review the first payments. A process that budgets only for data entry will miss the verification work. The capacity plan should include the review time for each change.",
   "A second implication is the need for a staged rollout when a change covers many codes. High-volume and high-value codes should be loaded and tested first, with the remaining codes on a dated plan. Staging is a control only when the sequence and the completion date are visible. Otherwise it becomes a permanent partial state.",
   "## Limits of the analysis",
   "The review cannot establish how often rate changes fail across the industry, because the sample is local and the contracts differ. It also cannot prove that a specific underpayment was caused by a load failure without the payer's pricing record. The finding is a pattern of risk, not a measured defect rate. The limits should be stated with any recommendation.",
   "The analysis also cannot separate a rate error from a rule error when the claim record is incomplete. A missing modifier or a wrong place of service can produce the same lower payment. The team should preserve the full claim and the payer response before drawing a conclusion. A narrow sample may miss the codes that fail most often.",
   "## Controls and reporting",
   "Report each rate change with its source, effective date, load date, test result, and first paid claim. A dashboard that shows only the load date hides the interval when claims may have priced incorrectly. Add a short exception note when a code is staged or deferred. The note gives the next reviewer the context to interpret the numbers.",
   "Assign an owner for the load and a separate reviewer for the test. Require the reviewer to compare a real claim with the contract, not only with the fee schedule screen. Review open changes weekly until they close. These controls are simple, and they address the handoffs where propagation most often fails.",
   "## Conclusion",
   "Fee schedule updates propagate through a chain of contract interpretation, data entry, claim rules, and payment review. The chain fails quietly when no owner verifies the result at the claim level. A correct screen is not proof that the claim will pay correctly. Billing teams should treat the first paid claim as the completion test.",
   "The practical response is a change log with named owners, a real-claim test, and a periodic underpayment review. Those steps do not eliminate payer errors, but they make the team's own failures visible. A rate change is complete when the evidence shows it reached the claim, not when the notice was received. The log should be reviewed before the next contract cycle so the pattern is not rediscovered.",
   "## Alternative explanations and confounders",
   "A lower payment may reflect a payer edit, a patient responsibility, or a contract term that the team did not apply. The rate change may be unrelated. The review should compare the claim with the remittance and the contract before attributing the difference to a load failure. A single explanation can hide a separate issue.",
   "Volume and service mix also change the average allowed amount. A shift toward lower-acuity services can look like an underpayment even when every rate is correct. Compare like codes and like periods. The analysis should state which variables were held constant.",
   "## Practical test for a local team",
   "Choose one recent rate change and trace it from the notice to the first paid claim. Record each handoff, the date, and the evidence. Test one high-volume code and one high-value code. The trace shows whether the process has a verification step or only an entry step.",
   "Then compare the allowed amount on ten claims with the contracted rate. Record any difference and the reason. If the difference repeats, open a recovery case and fix the load. Repeat the test after the fix to confirm the change reached the claim."
  ],
  "published": "2026-11-11",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/how-fee-schedule-updates-propagate-through-billing-operations.webp",
  "heroImage": "/images/november-11/how-fee-schedule-updates-propagate-through-billing-operations.webp",
  "minutes": 9,
  "wordCount": 1600,
  "sources": [
   {
    "name": "CMS Medicare Physician Fee Schedule",
    "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "HHS Office of Inspector General Work Plan",
    "url": "https://oig.hhs.gov/reports-and-publications/workplan/"
   }
  ],
  "related": [
   "/services/billing-reconciliation",
   "/research/what-unbilled-claim-aging-reveals-about-billing-process-control"
  ]
 },
 {
  "slug": "what-unbilled-claim-aging-reveals-about-billing-process-control",
  "title": "What unbilled claim aging reveals about billing process control",
  "excerpt": "An analysis of why the age distribution of unbilled claims matters more than the total and what it says about ownership.",
  "body": [
   "## Question and scope",
   "Unbilled claim aging is often treated as a work queue metric, but it also describes the health of the billing process. This research asks what the age distribution of unbilled claims reveals about control, ownership, and hidden capacity. The scope is a billing operation that submits claims electronically and tracks work in a practice management system. The analysis follows claims from service completion to first submission.",
   "The question matters because a stable unbilled total can hide a worsening backlog. New claims enter the queue while old claims remain, and the total looks unchanged. The age distribution shows whether the team is keeping up or merely replacing the work it clears. That distinction changes the staffing and process decision.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one unbilled claim at a point in time. An unbilled claim is a service that has not reached the payer, including charges on hold, failed edits, and items waiting for documentation. The age is measured from the service date or the date the charge became billable. The analysis states which date it uses.",
   "Control means the claim moves through a defined path with an owner and a decision at each hold. A claim that waits without a decision is not under control even if it is visible on a report. The research distinguishes visibility from control. A list of old claims is not the same as a managed queue.",
   "## Method and evidence reviewed",
   "The method is a queue and document review. Pull the unbilled report for several dates and compare the age buckets over time. Sample the oldest items and trace each one to the hold reason, the owner, and the last action. Review the written policy for hold reasons and escalation.",
   "Interview the people who work the queue about the decisions they cannot make. Compare the stated process with the actual notes. The method does not estimate industry benchmarks, because filing rules and service mix differ. It produces a local picture of where claims wait and who can move them.",
   "## The age distribution as a control signal",
   "A healthy queue has most claims in the youngest bucket and a small tail of older items. A queue with a growing tail is accumulating work that the current process cannot resolve. The median age shows the typical experience, while the oldest item shows the worst case. Both matter for the filing deadline.",
   "The shape of the distribution is more informative than the total. A large spike at one age often points to a batch process that runs on a schedule. A long flat tail points to items that no one owns. The team can use the shape to choose between a process fix and a capacity fix.",
   "## Hold reasons and ownership",
   "Each hold reason should map to an owner and a decision. Missing authorization, missing documentation, coding queries, and payer rejections require different work. When the reason is vague, the claim moves between queues without progress. The report should show the reason and the owner, not only the age.",
   "A large reason bucket is a process problem rather than a long to-do list. If many claims wait for the same document, the fix may be at the front desk or in the clinical workflow. The queue review should ask why the document was missing, not only who will chase it. That question moves the control upstream.",
   "## Aging and filing deadlines",
   "The filing limit changes the meaning of age. A claim that is young in days may be close to a deadline if the payer has a short window. The queue should show the days remaining, not only the days elapsed. A priority based on age alone can miss the claim that will become uncollectible first.",
   "Different payers and service types have different limits, and some limits depend on the original submission date. Record the limit with the claim or in a rules table. Review the rules when a payer changes its policy. A queue that ignores the limit is measuring activity rather than risk.",
   "## Capacity and hidden work",
   "Old unbilled claims consume capacity even when no one is working them. They appear in reports, meetings, and reconciliation, and they create rework when the documentation finally arrives. The hidden work is the repeated review of the same item. A queue with a long tail is more expensive than its claim count suggests.",
   "Aging also distorts the capacity picture because new work and old work compete for the same people. A team that clears the new claims may look productive while the tail grows. The review should separate the time spent on current work from the time spent on the backlog. That separation shows the real staffing gap.",
   "## Limits of the analysis",
   "The review cannot establish a universal target age, because payer rules and service mix vary. It also cannot prove that an old claim would have been paid if it had been submitted earlier. The finding is a pattern of control gaps, not a measured revenue loss. The limits should be stated with any recommendation.",
   "The sample may overrepresent the items that are easy to find in the system. Some work may sit in spreadsheets or inboxes outside the report. The analysis should include those informal queues where possible. A queue review that ignores them can understate the backlog.",
   "## Controls and reporting",
   "Report the count, the median age, the oldest item, and the share past the threshold. Add the top hold reason and its owner. These measures describe the queue without requiring a long narrative. Compare them over time with the same definitions.",
   "Set a decision rule for each hold reason and a maximum time before escalation. Review the actions from the prior period before adding new ones. A queue review should end with a small number of owned changes. The report is useful when it changes what happens next.",
   "## Conclusion",
   "Unbilled claim aging reveals whether a billing process has ownership and decision rules, not just volume. A stable total can conceal a growing tail, and a young average can conceal a few claims near a deadline. The age distribution and the hold reasons together show where the process loses control. The oldest item deserves a named decision even when the total looks stable.",
   "The practical response is to measure age by reason, show the filing deadline, and assign an owner to every hold. Those steps make the queue manageable and the capacity gap visible. A billing team that controls the tail controls the work that would otherwise become a write-off. That practice turns a passive report into a queue the team can actually close.",
   "## Alternative explanations and confounders",
   "A rise in unbilled age may follow a new payer, a template change, or a temporary staffing gap. The queue may be responding to a change outside its control. The review should record those events before attributing the pattern to the team. A single month is not enough to establish a trend.",
   "Seasonal volume and holiday schedules also change the age distribution. A short month can produce a larger tail even when the process is unchanged. Compare similar periods and state the difference. The analysis should separate a structural problem from a temporary one.",
   "## Practical test for a local team",
   "Pull the unbilled report on two dates a week apart and compare the age buckets. Sample the ten oldest claims and record the hold reason, the owner, and the last action. Ask why each item has not moved. The answers show whether the problem is capacity, ownership, or a missing decision.",
   "Test one change, such as a decision rule for a common hold reason, on a small group. Compare the age of that group with a similar group after two weeks. Keep the change if the tail shrinks. The test should produce evidence, not just a new report."
  ],
  "published": "2026-11-11",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/what-unbilled-claim-aging-reveals-about-billing-process-control.webp",
  "heroImage": "/images/november-11/what-unbilled-claim-aging-reveals-about-billing-process-control.webp",
  "minutes": 9,
  "wordCount": 1580,
  "sources": [
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
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
  ],
  "related": [
   "/services/charge-entry",
   "/research/how-fee-schedule-updates-propagate-through-billing-operations"
  ]
 },
 {
  "slug": "why-payer-contract-implementation-delays-show-up-as-denial-patterns",
  "title": "Why payer contract implementation delays show up as denial patterns",
  "excerpt": "An analysis of how incomplete enrollment, identifiers, and claim rules surface later as repeated denials.",
  "body": [
   "## Question and scope",
   "A payer contract implementation delay is usually logged as an administrative problem. This research asks how that delay appears later as a pattern of denials and rejected claims. The scope is a billing operation that has signed a new payer contract and is preparing to submit claims. The analysis follows the implementation steps that must be complete before the first claim.",
   "The question matters because a late step does not always stop the claim. The claim may be submitted and denied for a reason that looks clinical or coding-related. The denial then sends the team to the wrong fix. The goal is to connect the denial pattern to the implementation gap that produced it.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one implementation requirement for one payer contract. Requirements include enrollment, provider identifiers, fee schedule load, portal access, and claim rules. Implementation is complete when each requirement has an owner, evidence, and a date. A signed contract is not an implemented contract.",
   "A denial pattern is a repeated denial reason that appears after the contract start. The pattern may be caused by a missing setup step, a wrong identifier, or a rule the team did not receive. The analysis separates a pattern caused by implementation from one caused by clinical or coding content. That separation determines the remedy.",
   "## Method and evidence reviewed",
   "The method is a contract and denial review. Collect the implementation checklist, the enrollment confirmations, the fee schedule, and the first month of denials. Group the denials by reason and compare them with the checklist. Record which requirements were incomplete at the first submission.",
   "Interview the people who set up the contract and the people who worked the denials. Compare their accounts of what was communicated. The method does not assume that a completed checklist reflects a working setup. It looks for evidence that each step reached the claim.",
   "## The implementation chain",
   "Contract implementation is a chain that runs from contract terms through enrollment, identifiers, fee schedule, claim rules, portal access, and testing. Each link depends on the one before it. A break early in the chain can produce a denial that looks like a later problem. The team should map the chain before the first claim.",
   "The chain is also a set of handoffs between contracting, credentialing, billing, and IT. Each handoff needs a named recipient and a confirmation. A checklist that only records the sender's action does not prove the receiver acted. The gaps usually appear at the handoffs.",
   "## Denials that signal setup gaps",
   "A denial for an invalid provider identifier often points to an enrollment or linkage problem. A denial for a non-covered service may point to a fee schedule or contract interpretation gap. A denial for a missing authorization may point to a rule that was not loaded. The reason code is a clue, not a full explanation.",
   "The pattern becomes clearer when the denials are grouped by the implementation step they touch. A cluster of identifier denials in the first weeks suggests a setup issue rather than a sudden coding problem. The team should trace a sample back to the setup record before changing the clinical workflow. Only then can the team tell whether the remedy belongs in setup or in clinical documentation.",
   "## The cost of a delayed step",
   "A delayed step creates rework at the point of the claim. Claims may be held, resubmitted, or appealed, and each path consumes capacity. The cost is not only the denied amount but the work required to recover it. A delay that lasts a month can create a backlog that outlasts the setup fix.",
   "The cost also includes the patient conversation. A claim delayed by a setup gap may produce a patient statement that is wrong or premature. The front desk then has to explain a problem that originated in administration. The implementation delay reaches the patient even when the service was correct.",
   "## Capacity and control implications",
   "Implementation work competes with daily billing for the same people. If the work is not scheduled, it happens in fragments and the first claims arrive before the setup is complete. The plan should reserve time for testing and for the first weeks of denials. That time is a cost of the contract, not an interruption.",
   "A control point at the first claim prevents a small gap from becoming a pattern. The reviewer confirms the identifiers, the rate, the rules, and the submission channel before volume begins. A test claim that pays correctly is stronger evidence than a checklist that says complete. It also gives the team a dated record to compare with the first month of denials.",
   "## Limits of the analysis",
   "The review cannot determine the prevalence of implementation delays across the industry, because contracts and payer requirements differ. It also cannot prove that a specific denial was caused by a setup gap without the payer's record. The finding is a local pattern that requires confirmation. A second sample after the fixes would show whether the pattern actually changed.",
   "Some denials have multiple causes, and a setup gap may coexist with a coding issue. The analysis should report the evidence for each cause rather than choosing one. A larger sample and payer feedback would strengthen the conclusion. Recording each contributing cause keeps the review honest about what the evidence supports.",
   "## Controls and reporting",
   "Report the implementation status by requirement, with an owner and an evidence date. Compare the first month of denials with the checklist to find the requirements that were incomplete. Record the fix and the date it was verified. A status report without evidence is a plan, not a control.",
   "Review the denial pattern by implementation step, not only by denial code. That view shows whether the remedy belongs with contracting, credentialing, or billing. Assign the fix to the team that owns the step. Report the closure date so the pattern can be compared later.",
   "## Conclusion",
   "Payer contract implementation delays show up as denial patterns because the claim depends on a chain of setup steps. A missing identifier or rule produces a denial that looks like a different problem. The remedy is to trace the denial back to the implementation step before changing the clinical or coding process. That trace is more useful than a broad instruction to improve claim quality.",
   "The practical response is a requirement-level checklist with evidence, a first-claim test, and a denial review by implementation step. Those controls do not remove payer complexity, but they make the organization's own gaps visible. A contract is implemented when the claims pay, not when the paperwork is signed. The checklist should be revisited after the first month of live claims.",
   "## Alternative explanations and confounders",
   "A denial cluster may follow a payer policy change, a new claim edit, or a shift in service mix. The implementation may be sound while the payer changes the rules. The review should record those events before attributing the pattern to the setup. A dated note beside the denial group keeps the explanation available for the next review.",
   "Staff experience also affects the denial rate. A new team may produce more errors even with a complete setup. Compare the same team before and after the contract, or the same service mix. The analysis should separate learning effects from setup effects.",
   "## Practical test for a local team",
   "Take the five most common denial reasons in the first month and trace one claim from each back to the implementation record. Record the step, the evidence, and the owner. The trace shows whether the denial maps to a setup gap or to a clinical or coding issue. Write the result into the implementation file so the next contract starts with the lesson.",
   "Then test one fix, such as correcting an identifier or loading a missing rule, on a small batch. Confirm that the denial reason disappears before rolling the fix out. The test should close the loop between implementation and denial. A written result beside the contract file keeps the lesson available for the next implementation."
  ],
  "published": "2026-11-11 Record the before-and-after denial count so the result is visible to the whole team.",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/why-payer-contract-implementation-delays-show-up-as-denial-patterns.webp",
  "heroImage": "/images/november-11/why-payer-contract-implementation-delays-show-up-as-denial-patterns.webp",
  "minutes": 9,
  "wordCount": 1560,
  "sources": [
   {
    "name": "CMS Medicare Provider Enrollment",
    "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "CMS Administrative Simplification",
    "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ],
  "related": [
   "/services/denial-management",
   "/research/why-eligibility-denials-differ-from-coding-denials-in-root-cause-work"
  ]
 },
 {
  "slug": "how-statement-timing-affects-patient-payment-behavior-and-call-volume",
  "title": "How statement timing affects patient payment behavior and call volume",
  "excerpt": "An analysis of how early and late patient statements change payment timing, questions, and avoidable billing work.",
  "body": [
   "## Question and scope",
   "Patient statements are often designed around a billing calendar rather than the patient's experience. This research asks how statement timing affects payment behavior and the volume of inbound calls. The scope is a patient billing operation that sends statements after payer adjudication and handles questions by phone. The analysis follows a balance from adjudication to the first statement and the patient's response.",
   "The question matters because a statement that arrives too early or too late creates work. An early statement shows a balance that is about to change, while a late one delays payment and increases the chance of a follow-up call. The goal is to identify the timing choices that reduce confusion without slowing cash. A schedule that ignores that tradeoff will either slow cash or increase avoidable contact.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one patient statement and the events that follow it. Events include the payment, the call, the dispute, and the request for a plan. Timing is measured from the adjudication date and from the date the payment posted. The analysis distinguishes the statement date from the date the patient received it.",
   "Payment behavior includes the time to payment and the share of the balance paid. Call volume includes calls that reference the statement. The research treats a call as a signal of uncertainty, not automatically as a failure. Some calls are appropriate and some are avoidable.",
   "## Method and evidence reviewed",
   "The method is a statement and call review. Sample accounts across statement stages and compare the date of adjudication, the date the statement was generated, and the date of the first payment or call. Review the statement layout and the phone script for consistency. The comparison should use the same payer and service mix where the sample allows it.",
   "Interview the patient contact team about the questions they hear most often. Compare those questions with the statement wording. The method does not measure patient satisfaction directly, so it uses call reasons and payment timing as proxies. The limits of those proxies are stated in the analysis.",
   "## The early statement problem",
   "A statement generated before the payer payment posts can show a balance that is not final. The patient sees an amount that may change and calls to confirm it. The call is rational, because the statement did not explain the pending status. The team then spends time on a question that better timing would have prevented.",
   "An early statement can also create a duplicate payment if the patient pays before the payer's remittance arrives. The refund or adjustment then adds work for the billing team. The timing rule should wait for the posting to settle, not merely for the claim to adjudicate. A refund or adjustment is more expensive than waiting one or two posting cycles.",
   "## The late statement problem",
   "A late statement delays the patient's opportunity to pay and shortens the time before a reminder. The patient may receive the first statement and the reminder close together, which feels aggressive. That experience increases calls and reduces the willingness to set up a plan. The interval between the first statement and the reminder should be long enough to respond.",
   "Late statements also compress the team's response window. A question that arrives near the final notice is harder to resolve without pausing the sequence. The schedule should leave enough time for a question before the next step. A patient who cannot reach the team before the next notice is more likely to escalate.",
   "## Clarity and call volume",
   "Many calls are not about the amount but about the explanation. A statement that shows the payer payment, the adjustment, and the patient responsibility in plain terms reduces the need to call. The explanation should match the phone script and the portal. Inconsistent terms create doubt even when the numbers are correct.",
   "The first statement should also show one clear way to ask a question. A buried contact route pushes the patient to call the main line, where the queue is longer. A visible route can route simple questions away from the billing team. The same route should appear on the portal and in the printed statement.",
   "## Capacity and control implications",
   "Statement timing is a capacity decision because it changes the mix of calls and the rework from duplicate payments. A small delay in the first statement may reduce calls enough to free review time. The team should measure the tradeoff rather than choosing a date by habit. A small test is safer than a full calendar change across every payer.",
   "The control is a schedule with defined triggers: adjudication, posting, statement, reminder, and final notice. The schedule should pause for a dispute or a plan. A trigger-based schedule is easier to explain to the patient than a fixed calendar. Each trigger should be recorded in the account so the next person can see why a statement was sent.",
   "## Limits of the analysis",
   "The review cannot establish a universal statement delay, because payer posting times and patient populations differ. It also cannot prove that a call was caused by the statement timing rather than by the balance itself. The finding is a local pattern that requires confirmation. The local pattern still gives the team a place to start testing.",
   "Payment behavior is influenced by income, insurance design, and prior experience, which the analysis cannot fully observe. The sample may overrepresent patients who contact the team. The conclusions should be read as operational guidance, not as a causal estimate. Those factors should be described when the results are shared with the front desk.",
   "## Controls and reporting",
   "Report the statement date, the adjudication date, the posting date, and the first patient action. Group calls by statement stage and by reason. A rise in calls after a specific stage points to a wording or timing issue. Compare periods with the same payer mix where possible.",
   "Test one timing or wording change at a time. Measure the call rate and the payment rate for a full cycle. Keep the change only if it improves both or clearly reduces avoidable work. Report the result with the definition used.",
   "## Conclusion",
   "Statement timing affects payment behavior and call volume through the accuracy and clarity of the first bill. An early statement creates questions about a changing balance, while a late one compresses the response window. A trigger-based schedule with a clear explanation reduces both problems. The test should compare like cases so the timing effect is not confused with the balance.",
   "The practical response is to wait for posting, explain the payer decision, and give the patient one visible route to ask a question. Those choices do not guarantee payment, but they reduce the calls that come from uncertainty. A statement is a communication, not only a request for money. The wording should be reviewed with the people who answer the phone.",
   "## Alternative explanations and confounders",
   "A change in call volume may follow a new portal, a seasonal shift, or a payer change. The statement timing may be unrelated. The review should compare call reasons and payer mix before attributing the change to the schedule. A short note on the timeline keeps the comparison honest.",
   "A change in payment rate may reflect the economy or a new payment plan option. The analysis should record those factors and avoid a single-cause explanation. A small sample can produce a misleading result. The team should avoid claiming a causal result from a small before-and-after comparison.",
   "## Practical test for a local team",
   "Track twenty statements from adjudication to the first patient action. Record the dates and the call reason. Compare the early and late statements within the sample. The pattern shows whether timing is associated with confusion.",
   "Then test a later first statement on a small group and compare the call rate with a similar group. Keep the change for a full cycle before deciding. The test should measure both calls and payments. A later reviewer should be able to see the dates and the group definition."
  ],
  "published": "2026-11-11 Record the result with the dates so a later reviewer can reproduce the comparison.",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/how-statement-timing-affects-patient-payment-behavior-and-call-volume.webp",
  "heroImage": "/images/november-11/how-statement-timing-affects-patient-payment-behavior-and-call-volume.webp",
  "minutes": 9,
  "wordCount": 1570,
  "sources": [
   {
    "name": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/consumer-tools/"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "HHS Office for Civil Rights",
    "url": "https://www.hhs.gov/ocr/index.html"
   },
   {
    "name": "HHS HIPAA",
    "url": "https://www.hhs.gov/hipaa/index.html"
   }
  ],
  "related": [
   "/services/payment-posting",
   "/research/what-unbilled-claim-aging-reveals-about-billing-process-control"
  ]
 },
 {
  "slug": "the-capacity-cost-of-cross-training-in-small-billing-teams",
  "title": "The capacity cost of cross-training in small billing teams",
  "excerpt": "An analysis of the trainer time, output loss, review load, and quality tradeoffs behind billing coverage plans.",
  "body": [
   "## Question and scope",
   "Cross-training is often presented as a low-cost way to cover absences in a small billing team. This research asks what cross-training actually costs in time, quality, and managerial attention. The scope is a billing team of roughly five to fifteen people that handles posting, claims, denials, and patient contact. The analysis follows a training cycle from planning to independent work.",
   "The question matters because the benefit of coverage is visible during an absence, while the cost is spread across ordinary weeks. A team may approve cross-training without reserving the time it requires. The goal is to make the cost explicit so the coverage decision is based on evidence. Without that estimate, the team cannot tell whether the coverage is worth the disruption.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one cross-training pair for one task. A pair includes a primary owner, a backup, the training activity, and the review period. Coverage means the backup can complete the task to the required standard without the primary owner. Training time includes preparation, practice, review, and rework.",
   "Cost includes the trainer's time, the trainee's reduced output, the reviewer's time, and the errors produced during learning. The research treats these as real costs rather than externalities. A coverage plan that ignores them overstates the benefit. The estimate should name which costs were measured and which were assumed.",
   "## Method and evidence reviewed",
   "The method is a workflow and time review. Select several cross-training pairs and record the time spent on preparation, practice, and review. Compare the trainee's output and error rate with the primary owner's during the transition. Review the training materials and the review standard.",
   "Interview the trainers about the time they lost from their own work. Interview the trainees about the parts they could not practice. The method does not estimate a universal training cost, because tasks and systems differ. It produces a local estimate that the team can use in planning.",
   "## The hidden trainer cost",
   "The primary owner is usually the most experienced person and often the busiest. Training removes that person from production and adds a review load at the same time. The cost appears as overtime, delayed work, or a backlog in the owner's queue. A plan that does not protect the trainer's time shifts the cost to the customer.",
   "The trainer also absorbs the interruptions after the formal session. Questions arrive during live work, and each one breaks concentration. The cost is small per question and large across a month. The team should schedule a question window rather than relying on constant availability.",
   "## The trainee output curve",
   "A trainee produces less than a trained person at first and may produce errors that require review. The output curve depends on the task, the system, and the quality of the practice. A simple posting task may reach independence quickly, while a denial appeal may take longer. The plan should use different timelines for different tasks.",
   "The trainee's errors also consume reviewer time and can reach the payer if the review is weak. The team should start with low-risk batches and increase the scope after a clean result. A trainee who is pushed to full volume too early creates rework that erases the coverage benefit. The review load should be planned for the weeks after the formal training ends.",
   "## Quality and control tradeoffs",
   "Cross-training can improve quality by exposing a second person to the task and its exceptions. The backup may notice a problem that the primary owner has normalized. That benefit is real but not automatic. It depends on whether the backup is encouraged to question the process.",
   "Cross-training can also weaken control if the backup is given approval authority without the same review. The team should separate the ability to prepare from the authority to approve. A coverage plan that ignores that boundary creates a control gap in the name of flexibility. The matrix should show the approval limit beside each trained task.",
   "## Capacity and planning implications",
   "The capacity plan should reserve training time as a scheduled cost, not a spare-time activity. A team that trains only during slow periods will delay coverage and may never reach it. The plan should name the tasks, the pairs, and the target dates. A plan without dates is a hope rather than a coverage decision.",
   "The plan should also limit the number of pairs per person. A single experienced person who trains everyone becomes a bottleneck and a retention risk. Spread the trainer role and protect the production time. Coverage is a portfolio decision, not a single assignment.",
   "## Limits of the analysis",
   "The review cannot establish a universal training cost, because task complexity and system design vary. It also cannot prove that cross-training prevents a specific absence cost. The finding is a local estimate of time and quality effects. The local estimate is still useful for comparing one coverage option with another.",
   "The sample may miss the informal training that happens during ordinary work. That training is real but hard to measure. The analysis should state which costs were included and which were not. The analysis should describe the missing data rather than filling it with an assumption.",
   "## Controls and reporting",
   "Report the training pairs, the scheduled hours, the review hours, and the error rate during the transition. Compare the cost with the estimated cost of an uncovered absence. A coverage decision should use both numbers. The report should separate training cost from ordinary production time.",
   "Track whether the backup actually performs the task after training. A skill that is never used decays. Schedule a periodic practice or a real batch to keep the coverage current. Report the result at the quarterly review.",
   "## Conclusion",
   "Cross-training has a real capacity cost that appears as trainer time, trainee output loss, review, and rework. The benefit is coverage during an absence or a volume spike. A team should decide with both numbers rather than assuming that training is free. The decision should be revisited when the team or the systems change.",
   "The practical response is to schedule the cost, protect the trainer, start with low-risk work, and keep the skill in use. Those steps make coverage reliable without hiding the expense. Cross-training is an investment, and it should be planned like one. A coverage plan that is never tested is only a training intention.",
   "## Alternative explanations and confounders",
   "A rise in errors during training may reflect a system change or an unusual workload rather than the trainee. The review should record those events. A single pair is not enough to estimate the cost. The review should compare the same task before and after the training window.",
   "The benefit of coverage may also be overstated if the backup cannot access the system during an absence. The analysis should test access as part of the coverage. Training without access is not coverage. Access should be tested in the same exercise as the task itself.",
   "## Practical test for a local team",
   "Choose one critical task and record the full training time for one backup. Include preparation, practice, review, and rework. Compare the cost with the estimated cost of one uncovered day. The comparison gives a local break-even point.",
   "Then test the backup during a planned absence and record the result. If the task is completed on time and within the quality standard, the coverage is real. If not, the gap is the next training target. The test should include the access check as well as the task itself."
  ],
  "published": "2026-11-11 Record the review time as part of the result, not as an afterthought.",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/the-capacity-cost-of-cross-training-in-small-billing-teams.webp",
  "heroImage": "/images/november-11/the-capacity-cost-of-cross-training-in-small-billing-teams.webp",
  "minutes": 9,
  "wordCount": 1520,
  "sources": [
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "NIST Cybersecurity Framework",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "HHS Office of Inspector General Work Plan",
    "url": "https://oig.hhs.gov/reports-and-publications/workplan/"
   }
  ],
  "related": [
   "/services/billing-operations",
   "/research/how-billing-dashboards-change-prioritization-under-capacity-pressure"
  ]
 },
 {
  "slug": "what-recoupment-notices-reveal-about-post-payment-risk-management",
  "title": "What recoupment notices reveal about post-payment risk management",
  "excerpt": "An analysis of recoupment notices as delayed risk signals and what a response process must prove.",
  "body": [
   "## Question and scope",
   "A recoupment notice arrives after the payment, which makes it easy to treat as an accounting correction. This research asks what those notices reveal about a billing team's post-payment risk management. The scope is a billing operation that receives payer demands, offsets, and take-backs after claims have been paid. The analysis follows a notice from receipt to resolution.",
   "The question matters because a recoupment is a signal about a control that failed earlier. It may point to a coding error, a documentation gap, a duplicate payment, or a payer policy change. Treating each notice as an isolated event hides the pattern that could prevent the next one. The pattern is the unit that supports prevention, not the single notice.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one recoupment notice and the claims it references. A notice includes the payer, the amount, the reason, the deadline, and the response path. Post-payment risk management is the set of controls that detect, respond to, and prevent recoveries after payment. That separation matters when the reporting explains a change in cash.",
   "A recoupment is not the same as a refund or a contractual adjustment. A refund returns an overpayment to a patient or payer, while a recoupment is the payer taking money back. A contractual adjustment changes the expected payment. The analysis keeps the categories separate.",
   "## Method and evidence reviewed",
   "The method is a notice and claims review. Sample recoupment notices across payers and reasons, then trace each one to the claim, the documentation, and the original payment. Record the time from notice to response and the outcome. Review the written policy for response and escalation.",
   "Interview the staff who prepare the responses and the staff who record the financial adjustment. Compare the stated process with the actual files. The method does not estimate industry recoupment rates, because payer mixes differ. It produces a local picture of where risk is detected and where it is missed.",
   "## The notice as a delayed signal",
   "A recoupment notice is a delayed signal because the defect occurred before payment. The team may have closed the claim and moved on. The notice reopens work that the team thought was finished. The delay makes the cause harder to find unless the claim record is complete.",
   "The signal is also partial, because the payer states a reason that may not match the internal cause. A notice for a coding error may reflect a documentation gap or a rule change. The team should trace the reason to the workflow event before choosing a fix. The workflow record is the evidence that turns the reason into a usable finding.",
   "## Response capacity and deadlines",
   "Recoupment notices carry deadlines that are often shorter than the team expects. A response requires the claim, the evidence, and a decision about whether to accept or dispute. The work competes with current billing and is easy to defer. A deferred notice becomes an automatic offset.",
   "The team should have a standard response path with a named owner and a timeline. The path should include a decision point for accepting a valid recovery. Disputing every notice is not a strategy, because weak disputes consume capacity and damage credibility. The decision rule should name who can accept a recovery without further review.",
   "## Financial and patient effects",
   "A recoupment changes the payer balance and may change the patient balance. If the notice is not recorded correctly, the reporting shows a payment that no longer exists. The patient may receive a statement that does not reflect the recovery. Clear accounting and patient communication are part of the response.",
   "The financial effect is not only the recouped amount. The team also spends time on the response, the reconciliation, and any patient contact. A small recoupment can consume more capacity than its value. The review should include the handling cost when prioritizing.",
   "## Pattern analysis and prevention",
   "Group recoupments by payer, reason, and service line. A reason that repeats points to a process that needs a fix. A reason that appears once may be an isolated payer error. The pattern is more useful than the individual notice.",
   "Compare the pattern with the denial data and the audit findings. The same root cause may appear in several forms. A fix that addresses the cause should reduce both denials and recoupments. The review should verify the reduction after the fix.",
   "## Limits of the analysis",
   "The review cannot prove that a specific recoupment was avoidable, because the payer's review criteria are not fully visible. It also cannot establish a universal response timeline. The finding is a local pattern of risk and response capacity. The limits should be stated before the team proposes a preventive change.",
   "The sample may overrepresent notices that were disputed or large enough to attract attention. Small notices may be accepted without review. The analysis should state which notices were included and which were not. A short note on the selection rule keeps the finding in context.",
   "## Controls and reporting",
   "Report notices by reason, amount, response time, and outcome. Add the handling cost where it can be estimated. A report that shows only the recouped amount hides the work and the prevention opportunity. The same report should show which notices remain open past the deadline.",
   "Assign an owner for each notice and a reviewer for the decision. Record the evidence and the date. Review open notices weekly and closed notices monthly. The control is complete when the pattern review produces a preventive change.",
   "## Conclusion",
   "Recoupment notices reveal how well a billing team manages risk after payment. The notice is a delayed signal of a defect that the team may have already closed. A response that only corrects the amount misses the chance to prevent the next one. The response process should be judged by the prevention it produces over time.",
   "The practical response is a standard path with an owner, a deadline, and a decision rule, plus a monthly pattern review. Those controls make the financial effect visible and the prevention work possible. Post-payment risk is part of billing quality, not a separate finance problem. The pattern review should name the change and the date it will be checked.",
   "## Alternative explanations and confounders",
   "A rise in recoupments may follow a payer audit campaign rather than a change in the team's work. The pattern may reflect the payer's focus. The review should record payer announcements and audit activity before attributing the change to internal performance. Payer announcements belong in the same file as the notices they explain.",
   "A change in service mix can also change the recoupment rate. Higher-risk services may produce more notices even when the process is stable. Compare like services and like periods. A single average can hide a shift that the service breakdown would reveal.",
   "## Practical test for a local team",
   "Select five recoupment notices from the last quarter and trace each one to the claim and the workflow event. Record the reason, the response, and the outcome. The trace shows whether the team is correcting symptoms or causes. The exercise should end with one question the team can answer with better data.",
   "Then choose one recurring reason and test a preventive change on a small group. Compare the recoupment rate with a similar group after a full cycle. The test should show whether the fix reduced the notice, not only the response time. A dated result turns the pattern review into a control rather than a discussion."
  ],
  "published": "2026-11-11 Record the evidence and the date so the next review can confirm the result.",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/what-recoupment-notices-reveal-about-post-payment-risk-management.webp",
  "heroImage": "/images/november-11/what-recoupment-notices-reveal-about-post-payment-risk-management.webp",
  "minutes": 9,
  "wordCount": 1540,
  "sources": [
   {
    "name": "CMS Medicare Appeals",
    "url": "https://www.cms.gov/medicare/appeals-grievances"
   },
   {
    "name": "HHS Office of Inspector General Work Plan",
    "url": "https://oig.hhs.gov/reports-and-publications/workplan/"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   }
  ],
  "related": [
   "/services/collections-support",
   "/research/why-payer-contract-implementation-delays-show-up-as-denial-patterns"
  ]
 },
 {
  "slug": "how-billing-dashboards-change-prioritization-under-capacity-pressure",
  "title": "How billing dashboards change prioritization under capacity pressure",
  "excerpt": "An analysis of how dashboard visibility, thresholds, and easy counts steer billing work when capacity is tight.",
  "body": [
   "## Question and scope",
   "A billing dashboard is often introduced to make performance visible, but it also changes what the team works on first. This research asks how dashboard design affects prioritization when capacity is tight. The scope is a billing operation that uses a shared dashboard for claims, denials, and receivables. The analysis follows how a team chooses the next task under pressure.",
   "The question matters because a dashboard can direct attention to a measure that is easy to count rather than the work that reduces risk. Under capacity pressure, the team follows the signal the dashboard makes most visible. The goal is to understand that effect and design for it. A design that ignores that effect leaves prioritization to whatever is most visible.",
   "## Definitions and unit of analysis",
   "The unit of analysis is one prioritization decision made with the dashboard. A decision includes the measure observed, the threshold that triggered action, and the task chosen. Capacity pressure means the team has more work than it can complete in the available hours. The analysis compares decisions at normal and constrained capacity.",
   "A dashboard is a set of measures with definitions, owners, and display choices. Prioritization is the ordering of work that follows. The research treats the display as part of the control, not a neutral view. What is visible shapes what is done.",
   "## Method and evidence reviewed",
   "The method is an observation and document review. Observe how the team uses the dashboard during a normal week and a busy week. Record the measures they check, the tasks they choose, and the work they defer. Compare the observed behavior with the written priorities.",
   "Review the dashboard definitions and the meeting agenda. Interview the team about which numbers feel urgent. The method does not measure productivity directly, because the work mix changes. It identifies the signals that drive prioritization.",
   "## Visibility and urgency",
   "A measure displayed at the top of a dashboard receives more attention than one in a detail report. The position creates urgency even when the underlying risk is unchanged. A team under pressure will work the visible number first. The design should place the highest-risk work where the team will see it.",
   "Color and thresholds also create urgency. A red count can pull attention away from a quieter measure that carries a filing deadline. The team should test whether the visual signal matches the operational risk. A dashboard that highlights the wrong work is worse than no dashboard.",
   "## The easy-count trap",
   "Counts are easy to display and easy to compare, but they do not always reflect the work that matters. A team may reduce a count by closing items that are not resolved. The measure improves while the underlying problem remains. The dashboard should pair counts with an outcome or a quality check.",
   "The trap is stronger under capacity pressure because the team needs a quick win. A count that can be closed without evidence becomes the path of least resistance. The review should sample the closed items to confirm the work was real. A sampled check is the cheapest way to find out whether the closure was real.",
   "## Deferred work and hidden risk",
   "When the dashboard emphasizes current volume, the team may defer the work that prevents future volume. A reconciliation or a payer follow-up can look less urgent than a new claim. The deferred work returns as a larger problem later. The dashboard should show the deferred risk, not only the current queue.",
   "A measure such as the age of the oldest item or the number of claims near a filing limit can make the deferred risk visible. The team can then choose between current work and future risk with the evidence in view. Prioritization is a choice, and the dashboard should show the tradeoff. The team should name the owner who can accept the deferral before it happens.",
   "## Capacity and control implications",
   "A dashboard should help the team decide what not to do when capacity is short. That requires a clear risk ranking and a named owner for the deferral decision. A team that defers without a record cannot explain the choice later. The dashboard should support a documented tradeoff.",
   "The control is a short list of measures with thresholds and actions. Each measure should have an owner and a response. The team should review the deferrals at the end of the week. The review turns an implicit choice into a managed one.",
   "## Limits of the analysis",
   "The review cannot establish a universal dashboard design, because the work mix and payer rules differ. It also cannot prove that a specific prioritization caused an outcome. The finding is a local pattern of attention and choice. The local pattern is still enough to test one change at a time.",
   "The sample may reflect the behavior of the people observed rather than the design. A different team may respond differently. The analysis should be confirmed with a longer observation and a comparison group where possible. The observation should be repeated before the design is changed broadly.",
   "## Controls and reporting",
   "Report the measures, the thresholds, and the actions taken. Add the deferred work and the reason for the deferral. A dashboard review should show what the team chose not to do as well as what it completed. The report should also show which deferrals were accepted and by whom.",
   "Review the dashboard quarterly and remove measures that no longer support a decision. Test the ranking with the team and adjust the display. The dashboard should reflect the work, not an older version of it. Each owner should be able to name the last action the measure prompted.",
   "## Conclusion",
   "Billing dashboards change prioritization by making some work visible and other work quiet. Under capacity pressure, the team follows the visible signal, which may not be the highest-risk work. The design should place risk, deadlines, and deferred work where the team can see them. The ranking should be tested against the filing deadlines the team actually faces.",
   "The practical response is a short list of owned measures, a risk ranking, and a record of deferrals. Those controls make the tradeoff explicit. A dashboard is useful when it improves the next decision, not when it displays the most numbers. The list should be short enough to read at the start of a shift.",
   "## Alternative explanations and confounders",
   "A change in prioritization may follow a new manager, a payer deadline, or a staffing change. The dashboard may be one factor among several. The review should record those events before attributing the behavior to the design. A short timeline of events keeps the review from crediting the dashboard for everything.",
   "The team may also respond to incentives outside the dashboard, such as a supervisor's request. The analysis should include those signals. A dashboard is not the only source of urgency. Those signals should be recorded when the observed behavior is compared with the design.",
   "## Practical test for a local team",
   "Observe one busy day and record the first five tasks the team chooses. Ask what signal prompted each choice. Compare the choices with the written priorities and the risk ranking. The comparison should use the same team and the same kind of day.",
   "Then move one high-risk measure to a more visible position and observe whether it changes the choice. Keep the change if it improves the prioritization without hiding other risk. The test should be small and measured. The team should record what it stopped doing as carefully as what it started."
  ],
  "published": "2026-11-11 Record the before-and-after choice so the result is not based on memory.",
  "datePublished": "2026-11-11",
  "featuredImage": "/images/november-11/how-billing-dashboards-change-prioritization-under-capacity-pressure.webp",
  "heroImage": "/images/november-11/how-billing-dashboards-change-prioritization-under-capacity-pressure.webp",
  "minutes": 9,
  "wordCount": 1500,
  "sources": [
   {
    "name": "GAO Green Book",
    "url": "https://www.gao.gov/products/gao-14-704g"
   },
   {
    "name": "CMS Medicare Learning Network",
    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
   },
   {
    "name": "NIST Cybersecurity Framework",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "name": "HHS Office of Inspector General Work Plan",
    "url": "https://oig.hhs.gov/reports-and-publications/workplan/"
   }
  ],
  "related": [
   "/services/billing-operations",
   "/research/the-capacity-cost-of-cross-training-in-small-billing-teams"
  ]
 }
];
export const nov11ResearchSlugs=nov11ResearchBatch.map(x=>x.slug);
