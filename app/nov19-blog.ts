export const nov19BlogSlugs = ["set-a-prior-authorization-expiry-check-before-the-next-claim-batch", "track-a-workers-compensation-claim-through-the-payer-transition", "review-a-patient-statement-hold-against-the-appeals-queue", "check-a-telemedicine-modifier-before-the-claim-is-released", "set-a-payer-fee-schedule-load-check-after-a-contract-renewal", "track-an-overpayment-demand-letter-through-the-refund-ledger", "review-a-lab-claim-s-ordering-provider-field-before-submission", "set-a-monthly-credit-balance-report-review-with-a-named-owner"] as const;

export const nov19BlogBatch = [
  {
    "slug": "set-a-prior-authorization-expiry-check-before-the-next-claim-batch",
    "title": "Set a prior authorization expiry check before the next claim batch",
    "description": "A practical prior authorization expiry check control for billing teams, with a named owner, dated evidence, and a reviewable close in the authorization log.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/set-a-prior-authorization-expiry-check-before-the-next-claim-batch.webp",
    "heroImage": "/images/blog/november-19/set-a-prior-authorization-expiry-check-before-the-next-claim-batch.webp",
    "minutes": 6,
    "wordCount": 896,
    "body": [
      "## Name the decision and the queue owner",
      "Start prior authorization expiry check with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. Record the requester and the promised response time. Write the decision in one sentence so the reviewer knows what would count as an answer. State explicitly what is in scope and what is out of scope for the case. The prior authorization expiry check case note should show what the authorization log held at the time and who reviewed it. Outsourced Billing Services keeps the prior authorization expiry check source, reviewer, and decision date together in the authorization log so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "The evidence set for prior authorization expiry check should join authorization record, expiry date, claim detail, and reviewer note on one stable case reference. A short written rule is easier to test than an unwritten habit. The next reviewer should not have to ask which document is authoritative. Use the same case key in the queue and in the evidence extract. In the prior authorization expiry check queue, an item without a next action is treated as an exception. For this prior authorization expiry check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "A standing instruction for prior authorization expiry check needs a limit and an expiry, and the billing manager should confirm it is still current. When urgency presses against the limit, pause and route the decision. A role change should trigger a review of queue access. Write the authority limit into the case template. The prior authorization expiry check reviewer records reviewer note, the owner, and the next action in one place. The Outsourced Billing Services review ties each prior authorization expiry check correction to the original claim record in the authorization log instead of replacing it.",
      "## Run the daily handoff",
      "A prior authorization expiry check status update should point to a verifiable event in the authorization log, not to a feeling about progress. Assign every unowned case before new work begins. A case that moves between owners should keep both owner periods visible. A short written rule is easier to test than an unwritten habit. A sample prior authorization expiry check review checks authorization record, expiry date, and the surviving value in the authorization log. Outsourced Billing Services treats a missing authorization record as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "The prior authorization expiry check exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. A short written rule is easier to test than an unwritten habit. Do not let a deadline expand a role beyond its written limit. The next reviewer should not have to ask which document is authoritative. For prior authorization expiry check, compare authorization record with the destination value rather than relying on a status label. A prior authorization expiry check handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "Close prior authorization expiry check only when the destination value in the authorization log, the approver, and the time of the final check are all visible. Name the owner for every open item, including items waiting on someone else. The next reviewer should not have to ask which document is authoritative. Test one closed case by rebuilding it from the evidence map. For prior authorization expiry check, the working file keeps authorization record and expiry date beside the decision note. At Outsourced Billing Services, the prior authorization expiry check queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "A useful prior authorization expiry check review ends with one testable change, one owner, and a date to measure whether the change moved the result. Include a routine case, a reopened case, and a cross-owner handoff. The record should show the source, the decision, and the surviving value in one place. Choose the sample from the export before the meeting. A prior authorization expiry check exception keeps reviewer note attached and routes the question to the billing manager. Outsourced Billing Services keeps the prior authorization expiry check source, reviewer, and decision date together in the authorization log so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Label authorization record and expiry date with their versions so a later reviewer can tell a stale extract from a current one. Make the handoff readable by the next shift and the next auditor. Keep the original request so a later correction does not erase the reason for the work. Keep the source reference and the coded value in the same row. Apply the same prior authorization expiry check test to claim detail and to the value that survives in the authorization log. For this prior authorization expiry check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/track-a-workers-compensation-claim-through-the-payer-transition) and [a second workflow](/blog/review-a-patient-statement-hold-against-the-appeals-queue)."
    ],
    "sourcesList": [
      {
        "name": "CMS: Medicare Claims Processing Manual",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912"
      }
    ]
  },
  {
    "slug": "track-a-workers-compensation-claim-through-the-payer-transition",
    "title": "Track a workers' compensation claim through the payer transition",
    "description": "A practical workers compensation transition control for billing teams, with a named owner, dated evidence, and a reviewable close in the claim system.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/track-a-workers-compensation-claim-through-the-payer-transition.webp",
    "heroImage": "/images/blog/november-19/track-a-workers-compensation-claim-through-the-payer-transition.webp",
    "minutes": 6,
    "wordCount": 874,
    "body": [
      "## Name the decision and the queue owner",
      "The workers compensation transition note should separate the request, the decision that is still open, and the person who can close it. Separate the request from the decision, because a complete request is not an approval. A clean-looking status is not evidence that the underlying work is correct. The next reviewer should not have to ask which document is authoritative. Apply the same workers compensation transition test to transition effective date and to the value that survives in the claim system. Outsourced Billing Services keeps the workers compensation transition source, reviewer, and decision date together in the claim system so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "Attach carrier notice and claim history to the case, label their versions, and record the time each was observed. Preserve a conflicting value instead of overwriting the first one. The record should show the source, the decision, and the surviving value in one place. Keep the original request so a later correction does not erase the reason for the work. The workers compensation transition close note cites the claim system, the approver, and the time of the final check. For this workers compensation transition case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "The billing manager owns the decision in workers compensation transition; the preparer may compare, label, and route but may not approve the outcome. If two roles share a queue, mark which one decides each item. The next reviewer should not have to ask which document is authoritative. Preparation, comparison, and follow-up may sit with the assistant. Every workers compensation transition handoff names the billing manager and the field in the claim system that will confirm the change. The Outsourced Billing Services review ties each workers compensation transition correction to the original claim record in the claim system instead of replacing it.",
      "## Run the daily handoff",
      "End the workers compensation transition shift with an owner, a next action, and a due time on every open case. Log the handoff time when a case crosses a shift. Assign every unowned case before new work begins. Keep the queue view readable on one screen. In this workers compensation transition case, the record points to the claim system and names the billing manager as the decision owner. Outsourced Billing Services treats a missing carrier notice as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "If the claim is submitted to the old carrier after the transition date, stop the dependent action and log the conflict in the claim system rather than choosing the more convenient value. The next reviewer should not have to ask which document is authoritative. If the exception repeats, give it a reason code. Do not close a case just because the requester stopped asking. The workers compensation transition record should let a second reviewer rebuild the decision from claim history and transition effective date. A workers compensation transition handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "The final workers compensation transition check compares follow-up note with the surviving value in the claim system; a status label alone is not a close. Test one closed case by rebuilding it from the evidence map. Do not let a deadline expand a role beyond its written limit. A case that moves between owners should keep both owner periods visible. The workers compensation transition case note should show what the claim system held at the time and who reviewed it. At Outsourced Billing Services, the workers compensation transition queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "Review workers compensation transition with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. Report a null result as clearly as a positive one. Keep the prior procedure available for comparison. A stable total can hide a growing tail. In the workers compensation transition queue, an item without a next action is treated as an exception. Outsourced Billing Services keeps the workers compensation transition source, reviewer, and decision date together in the claim system so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Store sensitive workers compensation transition evidence in the approved repository and keep only the reference and access path in the analysis note. Make the handoff readable by the next shift and the next auditor. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. The workers compensation transition reviewer records follow-up note, the owner, and the next action in one place. For this workers compensation transition case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/review-a-patient-statement-hold-against-the-appeals-queue) and [a second workflow](/blog/check-a-telemedicine-modifier-before-the-claim-is-released)."
    ],
    "sourcesList": [
      {
        "name": "CMS: Medicare Claims Processing Manual",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912"
      }
    ]
  },
  {
    "slug": "review-a-patient-statement-hold-against-the-appeals-queue",
    "title": "Review a patient statement hold against the appeals queue",
    "description": "A practical statement hold review control for billing teams, with a named owner, dated evidence, and a reviewable close in the patient ledger.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/review-a-patient-statement-hold-against-the-appeals-queue.webp",
    "heroImage": "/images/blog/november-19/review-a-patient-statement-hold-against-the-appeals-queue.webp",
    "minutes": 6,
    "wordCount": 892,
    "body": [
      "## Name the decision and the queue owner",
      "Start statement hold review with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. Name the trigger that brought the case into the queue. Give the case a stable identifier before any document is attached. Distinguish a new request from a correction to an earlier one. The statement hold review case note should show what the patient ledger held at the time and who reviewed it. Outsourced Billing Services keeps the statement hold review source, reviewer, and decision date together in the patient ledger so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "The evidence set for statement hold review should join appeal record, statement schedule, hold reason, and reviewer note on one stable case reference. Record who supplied each document and when it arrived. Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. In the statement hold review queue, an item without a next action is treated as an exception. For this statement hold review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "A standing instruction for statement hold review needs a limit and an expiry, and the billing manager should confirm it is still current. If the team cannot reproduce the result from the record, the control is not finished. Do not let a familiar requester bypass the approval boundary. The record should show the source, the decision, and the surviving value in one place. The statement hold review reviewer records reviewer note, the owner, and the next action in one place. The Outsourced Billing Services review ties each statement hold review correction to the original claim record in the patient ledger instead of replacing it.",
      "## Run the daily handoff",
      "A statement hold review status update should point to a verifiable event in the patient ledger, not to a feeling about progress. Keep the original request so a later correction does not erase the reason for the work. Assign every unowned case before new work begins. Record one next action and one due time per open item. A sample statement hold review review checks appeal record, statement schedule, and the surviving value in the patient ledger. Outsourced Billing Services treats a missing appeal record as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "The statement hold review exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. Keep the original request so a later correction does not erase the reason for the work. Preserve both values and the time each was observed. Use the same definition across the queue and the review so the counts agree. For statement hold review, compare appeal record with the destination value rather than relying on a status label. A statement hold review handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "Close statement hold review only when the destination value in the patient ledger, the approver, and the time of the final check are all visible. Record the close reason with the same codes used in the exception queue. Tie the close note to the original request and the final evidence. The record should show the source, the decision, and the surviving value in one place. For statement hold review, the working file keeps appeal record and statement schedule beside the decision note. At Outsourced Billing Services, the statement hold review queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "A useful statement hold review review ends with one testable change, one owner, and a date to measure whether the change moved the result. Set the next review date before the action begins. Use case-level review to explain an outlier before calling it a trend. Keep the original request so a later correction does not erase the reason for the work. A statement hold review exception keeps reviewer note attached and routes the question to the billing manager. Outsourced Billing Services keeps the statement hold review source, reviewer, and decision date together in the patient ledger so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Label appeal record and statement schedule with their versions so a later reviewer can tell a stale extract from a current one. Write the note so a reviewer can reconstruct the decision without a meeting. Use the same definition across the queue and the review so the counts agree. If the team cannot reproduce the result from the record, the control is not finished. Apply the same statement hold review test to hold reason and to the value that survives in the patient ledger. For this statement hold review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/check-a-telemedicine-modifier-before-the-claim-is-released) and [a second workflow](/blog/set-a-payer-fee-schedule-load-check-after-a-contract-renewal)."
    ],
    "sourcesList": [
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "check-a-telemedicine-modifier-before-the-claim-is-released",
    "title": "Check a telemedicine modifier before the claim is released",
    "description": "A practical telemedicine modifier check control for billing teams, with a named owner, dated evidence, and a reviewable close in the claim file.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/check-a-telemedicine-modifier-before-the-claim-is-released.webp",
    "heroImage": "/images/blog/november-19/check-a-telemedicine-modifier-before-the-claim-is-released.webp",
    "minutes": 6,
    "wordCount": 883,
    "body": [
      "## Name the decision and the queue owner",
      "The telemedicine modifier check note should separate the request, the decision that is still open, and the person who can close it. Confirm that the request belongs in this queue before assigning an owner. State explicitly what is in scope and what is out of scope for the case. The next reviewer should not have to ask which document is authoritative. Apply the same telemedicine modifier check test to payer policy and to the value that survives in the claim file. Outsourced Billing Services keeps the telemedicine modifier check source, reviewer, and decision date together in the claim file so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "Attach encounter record and modifier list to the case, label their versions, and record the time each was observed. The record should show the source, the decision, and the surviving value in one place. Record who supplied each document and when it arrived. Name the repository where sensitive evidence is held. The telemedicine modifier check close note cites the claim file, the approver, and the time of the final check. For this telemedicine modifier check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "The coding lead owns the decision in telemedicine modifier check; the preparer may compare, label, and route but may not approve the outcome. A case that moves between owners should keep both owner periods visible. Name the backup owner and the coverage window in advance. A delegation needs a scope, a limit, an end date, and a named backup. Every telemedicine modifier check handoff names the coding lead and the field in the claim file that will confirm the change. The Outsourced Billing Services review ties each telemedicine modifier check correction to the original claim record in the claim file instead of replacing it.",
      "## Run the daily handoff",
      "End the telemedicine modifier check shift with an owner, a next action, and a due time on every open case. The next reviewer should not have to ask which document is authoritative. Record one next action and one due time per open item. Use the same definition across the queue and the review so the counts agree. In this telemedicine modifier check case, the record points to the claim file and names the coding lead as the decision owner. Outsourced Billing Services treats a missing encounter record as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "If the claim releases without the payer-required modifier, stop the dependent action and log the conflict in the claim file rather than choosing the more convenient value. Keep the original request so a later correction does not erase the reason for the work. Separate a data conflict from a policy conflict. Check whether the exception came from a form, a rule, or a permission. The telemedicine modifier check record should let a second reviewer rebuild the decision from modifier list and payer policy. A telemedicine modifier check handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "The final telemedicine modifier check check compares reviewer note with the surviving value in the claim file; a status label alone is not a close. Compare the destination field, not only the activity log. Note the next review date before closing. Do not mark complete until the check is repeatable by another reviewer. The telemedicine modifier check case note should show what the claim file held at the time and who reviewed it. At Outsourced Billing Services, the telemedicine modifier check queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "Review telemedicine modifier check with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Choose the sample from the export before the meeting. In the telemedicine modifier check queue, an item without a next action is treated as an exception. Outsourced Billing Services keeps the telemedicine modifier check source, reviewer, and decision date together in the claim file so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Store sensitive telemedicine modifier check evidence in the approved repository and keep only the reference and access path in the analysis note. Keep the original request so a later correction does not erase the reason for the work. Avoid a private second version in a personal document. If the team cannot reproduce the result from the record, the control is not finished. The telemedicine modifier check reviewer records reviewer note, the owner, and the next action in one place. For this telemedicine modifier check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/set-a-payer-fee-schedule-load-check-after-a-contract-renewal) and [a second workflow](/blog/track-an-overpayment-demand-letter-through-the-refund-ledger)."
    ],
    "sourcesList": [
      {
        "name": "CMS: National Correct Coding Initiative",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      }
    ]
  },
  {
    "slug": "set-a-payer-fee-schedule-load-check-after-a-contract-renewal",
    "title": "Set a payer fee schedule load check after a contract renewal",
    "description": "A practical fee schedule load check control for billing teams, with a named owner, dated evidence, and a reviewable close in the fee schedule.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/set-a-payer-fee-schedule-load-check-after-a-contract-renewal.webp",
    "heroImage": "/images/blog/november-19/set-a-payer-fee-schedule-load-check-after-a-contract-renewal.webp",
    "minutes": 6,
    "wordCount": 893,
    "body": [
      "## Name the decision and the queue owner",
      "Start fee schedule load check with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. Use the same definition across the queue and the review so the counts agree. A clean-looking status is not evidence that the underlying work is correct. State explicitly what is in scope and what is out of scope for the case. For fee schedule load check, compare renewal agreement with the destination value rather than relying on a status label. Outsourced Billing Services keeps the fee schedule load check source, reviewer, and decision date together in the fee schedule so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "The evidence set for fee schedule load check should join renewal agreement, rate exhibit, fee schedule version, and load confirmation on one stable case reference. Use the same definition across the queue and the review so the counts agree. The next reviewer should not have to ask which document is authoritative. Preserve a conflicting value instead of overwriting the first one. For fee schedule load check, the working file keeps renewal agreement and rate exhibit beside the decision note. For this fee schedule load check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "A standing instruction for fee schedule load check needs a limit and an expiry, and the billing manager should confirm it is still current. A delegation needs a scope, a limit, an end date, and a named backup. Do not let a deadline expand a role beyond its written limit. Use the same definition across the queue and the review so the counts agree. A fee schedule load check exception keeps load confirmation attached and routes the question to the billing manager. The Outsourced Billing Services review ties each fee schedule load check correction to the original claim record in the fee schedule instead of replacing it.",
      "## Run the daily handoff",
      "A fee schedule load check status update should point to a verifiable event in the fee schedule, not to a feeling about progress. A handoff is complete only when the receiver acknowledges it. Check that the owner is actually available before assigning. Do not let a status update stand in for a verified event. Apply the same fee schedule load check test to fee schedule version and to the value that survives in the fee schedule. Outsourced Billing Services treats a missing renewal agreement as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "The fee schedule load check exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. Record who released the dependent action and when. Keep the original request so a later correction does not erase the reason for the work. Separate a data conflict from a policy conflict. The fee schedule load check close note cites the fee schedule, the approver, and the time of the final check. A fee schedule load check handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "Close fee schedule load check only when the destination value in the fee schedule, the approver, and the time of the final check are all visible. A closed status is not proof that the destination changed. Note the next review date before closing. A clean-looking status is not evidence that the underlying work is correct. Every fee schedule load check handoff names the billing manager and the field in the fee schedule that will confirm the change. At Outsourced Billing Services, the fee schedule load check queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "A useful fee schedule load check review ends with one testable change, one owner, and a date to measure whether the change moved the result. A clean-looking status is not evidence that the underlying work is correct. A stable total can hide a growing tail. End the review with one change and one measure. In this fee schedule load check case, the record points to the fee schedule and names the billing manager as the decision owner. Outsourced Billing Services keeps the fee schedule load check source, reviewer, and decision date together in the fee schedule so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Label renewal agreement and rate exhibit with their versions so a later reviewer can tell a stale extract from a current one. Do not store credentials or unnecessary personal data in the case. Avoid a private second version in a personal document. Do not let a deadline expand a role beyond its written limit. The fee schedule load check record should let a second reviewer rebuild the decision from rate exhibit and fee schedule version. For this fee schedule load check case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/track-an-overpayment-demand-letter-through-the-refund-ledger) and [a second workflow](/blog/review-a-lab-claim-s-ordering-provider-field-before-submission)."
    ],
    "sourcesList": [
      {
        "name": "CMS: Medicare Claims Processing Manual",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912"
      }
    ]
  },
  {
    "slug": "track-an-overpayment-demand-letter-through-the-refund-ledger",
    "title": "Track an overpayment demand letter through the refund ledger",
    "description": "A practical overpayment demand tracking control for billing teams, with a named owner, dated evidence, and a reviewable close in the refund ledger.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/track-an-overpayment-demand-letter-through-the-refund-ledger.webp",
    "heroImage": "/images/blog/november-19/track-an-overpayment-demand-letter-through-the-refund-ledger.webp",
    "minutes": 6,
    "wordCount": 889,
    "body": [
      "## Name the decision and the queue owner",
      "For overpayment demand tracking, the first step is to write the open decision, the requesting role, and the queue owner before anyone touches the refund ledger. Confirm that the request belongs in this queue before assigning an owner. Record the queue and the entity so the case cannot drift into another team's work. Say which system of record governs if two sources disagree. Every overpayment demand tracking handoff names the billing manager and the field in the refund ledger that will confirm the change. Outsourced Billing Services keeps the overpayment demand tracking source, reviewer, and decision date together in the refund ledger so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "Map each overpayment demand tracking value to its source: demand letter for the request, payment history for the check, and the refund ledger for the surviving destination value. Record the export time beside any value taken from a system. If the team cannot reproduce the result from the record, the control is not finished. A clean-looking status is not evidence that the underlying work is correct. In this overpayment demand tracking case, the record points to the refund ledger and names the billing manager as the decision owner. For this overpayment demand tracking case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "When overpayment demand tracking changes a record in the refund ledger, the billing manager approves and the preparer records the action; the two roles stay separate. A short written rule is easier to test than an unwritten habit. Name the backup owner and the coverage window in advance. Approval, payment, records disposition, and policy exceptions stay with the named owner. The overpayment demand tracking record should let a second reviewer rebuild the decision from payment history and refund ledger. The Outsourced Billing Services review ties each overpayment demand tracking correction to the original claim record in the refund ledger instead of replacing it.",
      "## Run the daily handoff",
      "Each morning the team reviews overpayment demand tracking arrivals, items waiting on the billing manager, and items ready for a verified close. Escalate an item that has waited past the written threshold. The next reviewer should not have to ask which document is authoritative. A clean-looking status is not evidence that the underlying work is correct. The overpayment demand tracking case note should show what the refund ledger held at the time and who reviewed it. Outsourced Billing Services treats a missing demand letter as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "When the demand sits without a refund or appeal decision, preserve both versions, record the observation times, and route one answerable question to the billing manager. Keep the failed attempt and the correction in the same history. Do not rewrite the earlier record to match the later answer. A case that moves between owners should keep both owner periods visible. In the overpayment demand tracking queue, an item without a next action is treated as an exception. A overpayment demand tracking handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "Record the overpayment demand tracking close reason, the approver, and the surviving evidence reference in the same case note. Name the owner for every open item, including items waiting on someone else. A clean-looking status is not evidence that the underlying work is correct. Keep the original request so a later correction does not erase the reason for the work. The overpayment demand tracking reviewer records approval note, the owner, and the next action in one place. At Outsourced Billing Services, the overpayment demand tracking queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "Report overpayment demand tracking open cases by age and dependency, not only the total, because a stable total can hide an aging tail. Include a routine case, a reopened case, and a cross-owner handoff. Use case-level review to explain an outlier before calling it a trend. End the review with one change and one measure. A sample overpayment demand tracking review checks demand letter, payment history, and the surviving value in the refund ledger. Outsourced Billing Services keeps the overpayment demand tracking source, reviewer, and decision date together in the refund ledger so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "The overpayment demand tracking working paper should show the request, the source, the decision, the action, and the surviving value without a private inbox. Link the evidence to the exact field it supports. Use the approved repository for sensitive content. If the team cannot reproduce the result from the record, the control is not finished. For overpayment demand tracking, compare demand letter with the destination value rather than relying on a status label. For this overpayment demand tracking case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/review-a-lab-claim-s-ordering-provider-field-before-submission) and [a second workflow](/blog/set-a-monthly-credit-balance-report-review-with-a-named-owner)."
    ],
    "sourcesList": [
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "review-a-lab-claim-s-ordering-provider-field-before-submission",
    "title": "Review a lab claim's ordering provider field before submission",
    "description": "A practical ordering provider field review control for billing teams, with a named owner, dated evidence, and a reviewable close in the claim file.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/review-a-lab-claim-s-ordering-provider-field-before-submission.webp",
    "heroImage": "/images/blog/november-19/review-a-lab-claim-s-ordering-provider-field-before-submission.webp",
    "minutes": 6,
    "wordCount": 913,
    "body": [
      "## Name the decision and the queue owner",
      "Before work begins on ordering provider field review, confirm which entity, period, and queue the case belongs to and who accepts the outcome. Note the observation window; a case without a period cannot be compared later. Distinguish a new request from a correction to an earlier one. Keep the original request so a later correction does not erase the reason for the work. A ordering provider field review exception keeps reviewer note attached and routes the question to the billing manager. Outsourced Billing Services keeps the ordering provider field review source, reviewer, and decision date together in the claim file so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "A reviewer should be able to rebuild ordering provider field review from claim detail, reviewer note, and the claim file record without asking for a private screenshot. Keep the original request so a later correction does not erase the reason for the work. Keep the original document and the working copy in separate states. Preserve a conflicting value instead of overwriting the first one. Apply the same ordering provider field review test to claim detail and to the value that survives in the claim file. For this ordering provider field review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "Write the ordering provider field review authority limit into the case template, including the amount, scope, and end date of any delegation. Approval, payment, records disposition, and policy exceptions stay with the named owner. A case that moves between owners should keep both owner periods visible. A complete packet is not an approval; the decision needs a person and a timestamp. The ordering provider field review close note cites the claim file, the approver, and the time of the final check. The Outsourced Billing Services review ties each ordering provider field review correction to the original claim record in the claim file instead of replacing it.",
      "## Run the daily handoff",
      "The daily ordering provider field review pass starts with the oldest item, the unassigned handoff, and the case paused for more than two business days. Use the same definition across the queue and the review so the counts agree. Keep the original request so a later correction does not erase the reason for the work. A case that moves between owners should keep both owner periods visible. Every ordering provider field review handoff names the billing manager and the field in the claim file that will confirm the change. Outsourced Billing Services treats a missing requisition as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "A repeated ordering provider field review exception becomes a reason code in the queue, not a story retold in each thread. Do not rewrite the earlier record to match the later answer. Name the owner for every open item, including items waiting on someone else. Record the stop reason and the release decision together. In this ordering provider field review case, the record points to the claim file and names the billing manager as the decision owner. A ordering provider field review handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "If ordering provider field review hands work to another team, keep it open until that team acknowledges receipt and the surviving record is confirmed. Record the approximate value, the approver, and the final check time. If the team cannot reproduce the result from the record, the control is not finished. The next reviewer should not have to ask which document is authoritative. The ordering provider field review record should let a second reviewer rebuild the decision from ordering provider record and claim detail. At Outsourced Billing Services, the ordering provider field review queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "The ordering provider field review review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. A clean-looking status is not evidence that the underlying work is correct. Set the next review date before the action begins. The next reviewer should not have to ask which document is authoritative. The ordering provider field review case note should show what the claim file held at the time and who reviewed it. Outsourced Billing Services keeps the ordering provider field review source, reviewer, and decision date together in the claim file so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Keep the ordering provider field review record short enough to read during the day and specific enough to survive a later audit. Avoid a private second version in a personal document. A case that moves between owners should keep both owner periods visible. Use the same definition across the queue and the review so the counts agree. In the ordering provider field review queue, an item without a next action is treated as an exception. For this ordering provider field review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/set-a-monthly-credit-balance-report-review-with-a-named-owner) and [a second workflow](/blog/set-a-prior-authorization-expiry-check-before-the-next-claim-batch)."
    ],
    "sourcesList": [
      {
        "name": "CMS: Medicare Claims Processing Manual",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912"
      }
    ]
  },
  {
    "slug": "set-a-monthly-credit-balance-report-review-with-a-named-owner",
    "title": "Set a monthly credit balance report review with a named owner",
    "description": "A practical credit balance review control for billing teams, with a named owner, dated evidence, and a reviewable close in the patient ledger.",
    "published": "2026-11-19",
    "featuredImage": "/images/blog/november-19/set-a-monthly-credit-balance-report-review-with-a-named-owner.webp",
    "heroImage": "/images/blog/november-19/set-a-monthly-credit-balance-report-review-with-a-named-owner.webp",
    "minutes": 6,
    "wordCount": 872,
    "body": [
      "## Name the decision and the queue owner",
      "Before work begins on credit balance review, confirm which entity, period, and queue the case belongs to and who accepts the outcome. Write the decision in one sentence so the reviewer knows what would count as an answer. A case that moves between owners should keep both owner periods visible. Give the case a stable identifier before any document is attached. The credit balance review reviewer records reviewer sign-off, the owner, and the next action in one place. Outsourced Billing Services keeps the credit balance review source, reviewer, and decision date together in the patient ledger so a later check does not depend on memory.",
      "## Map the source and the evidence trail",
      "A reviewer should be able to rebuild credit balance review from refund request, reviewer sign-off, and the patient ledger record without asking for a private screenshot. Record the export time beside any value taken from a system. State whether the evidence is confirmed, inferred, or unavailable. Do not let a deadline expand a role beyond its written limit. A sample credit balance review review checks credit balance report, payment history, and the surviving value in the patient ledger. For this credit balance review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves.",
      "## Set the authority boundary",
      "Write the credit balance review authority limit into the case template, including the amount, scope, and end date of any delegation. A clean-looking status is not evidence that the underlying work is correct. Record rejected and deferred requests as well as approvals. Approval, payment, records disposition, and policy exceptions stay with the named owner. For credit balance review, compare credit balance report with the destination value rather than relying on a status label. The Outsourced Billing Services review ties each credit balance review correction to the original claim record in the patient ledger instead of replacing it.",
      "## Run the daily handoff",
      "The daily credit balance review pass starts with the oldest item, the unassigned handoff, and the case paused for more than two business days. Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. A handoff is complete only when the receiver acknowledges it. For credit balance review, the working file keeps credit balance report and payment history beside the decision note. Outsourced Billing Services treats a missing credit balance report as an open item, not as a passed check.",
      "## Handle exceptions without rewriting history",
      "A repeated credit balance review exception becomes a reason code in the queue, not a story retold in each thread. If the exception repeats, give it a reason code. Name the owner for every open item, including items waiting on someone else. Do not rewrite the earlier record to match the later answer. A credit balance review exception keeps reviewer sign-off attached and routes the question to the AR manager. A credit balance review handoff at Outsourced Billing Services ends only when the next reviewer can act from the written record.",
      "## Close with a verified destination value",
      "If credit balance review hands work to another team, keep it open until that team acknowledges receipt and the surviving record is confirmed. Record the close reason with the same codes used in the exception queue. If the team cannot reproduce the result from the record, the control is not finished. Record the approximate value, the approver, and the final check time. Apply the same credit balance review test to refund request and to the value that survives in the patient ledger. At Outsourced Billing Services, the credit balance review queue marks a held claim with the reason it stopped and the person who can release it.",
      "## Review the pattern, not only the case",
      "The credit balance review review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. A stable total can hide a growing tail. The record should show the source, the decision, and the surviving value in one place. A clean-looking status is not evidence that the underlying work is correct. The credit balance review close note cites the patient ledger, the approver, and the time of the final check. Outsourced Billing Services keeps the credit balance review source, reviewer, and decision date together in the patient ledger so a later check does not depend on memory.",
      "## Keep the record ready for the next reviewer",
      "Keep the credit balance review record short enough to read during the day and specific enough to survive a later audit. Use the approved repository for sensitive content. Use the same definition across the queue and the review so the counts agree. A clean-looking status is not evidence that the underlying work is correct. Every credit balance review handoff names the AR manager and the field in the patient ledger that will confirm the change. For this credit balance review case, Outsourced Billing Services asks the billing specialist to write the open question and the named approver before the claim moves. For related work, see [the next billing check](/blog/set-a-prior-authorization-expiry-check-before-the-next-claim-batch) and [a second workflow](/blog/track-a-workers-compensation-claim-through-the-payer-transition)."
    ],
    "sourcesList": [
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  }
];
