export const site = {
  domain: 'OutsourcedBillingServices.com',
  slug: 'outsourcedbillingservices',
  brand: 'Outsourced Billing Services',
  primary: 'outsourced billing services',
  audience: 'medical, service, and B2B teams outsourcing billing admin',
  angle: 'billing queues, claims/invoices, follow-up, denials, reports, and controls',
  style: 'Billing revenue desk',
  dark: '#111827',
  color: '#4f46e5',
  accent: '#16a34a',
  heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  alt: 'Billing team reviewing invoice reports',
  badge: 'Billing desk',
} as const;

export const serviceSources = [
  {
    name: 'FTC: Business Guidance on Data Security',
    url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security',
    note: 'Use least access, strong passwords, and safe handling rules for customer data.',
  },
  {
    name: 'NIST Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/cyberframework',
    note: 'A simple way to plan access, monitoring, and response duties.',
  },
  {
    name: 'CMS: Medicare Claims Processing Manual',
    url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912',
    note: 'Healthcare billing teams need clear claim handling and review rules.',
  },
] as const;

export const services = [
  { slug: "invoice-preparation", title: "Invoice Preparation", desc: "Filipino billing specialists can handle invoice preparation with documented workflows, approval limits, and owner review." },
  { slug: "usage-billing-administration", title: "Usage Billing Administration", desc: "Filipino billing specialists can handle usage billing administration with documented workflows, approval limits, and owner review." },
  { slug: "subscription-billing-support", title: "Subscription Billing Support", desc: "Filipino billing specialists can handle subscription billing support with documented workflows, approval limits, and owner review." },
  { slug: "billing-reconciliation", title: "Billing Reconciliation", desc: "Filipino billing specialists can handle billing reconciliation with documented workflows, approval limits, and owner review." },
  { slug: "payment-posting", title: "Payment Posting", desc: "Filipino billing specialists can handle payment posting with documented workflows, approval limits, and owner review." },
  { slug: "credit-memo-administration", title: "Credit Memo Administration", desc: "Filipino billing specialists can handle credit memo administration with documented workflows, approval limits, and owner review." },
  { slug: "collections-follow-up", title: "Collections Follow-Up", desc: "Filipino billing specialists can handle collections follow-up with documented workflows, approval limits, and owner review." },
  { slug: "customer-billing-support", title: "Customer Billing Support", desc: "Filipino billing specialists can handle customer billing support with documented workflows, approval limits, and owner review." },
  { slug: "revenue-schedule-preparation", title: "Revenue Schedule Preparation", desc: "Filipino billing specialists can handle revenue schedule preparation with documented workflows, approval limits, and owner review." },
  { slug: "billing-data-quality-review", title: "Billing Data Quality Review", desc: "Filipino billing specialists can handle billing data quality review with documented workflows, approval limits, and owner review." },
  { slug: "dispute-documentation", title: "Dispute Documentation", desc: "Filipino billing specialists can handle dispute documentation with documented workflows, approval limits, and owner review." },
  { slug: "month-end-billing-support", title: "Month-End Billing Support", desc: "Filipino billing specialists can handle month-end billing support with documented workflows, approval limits, and owner review." },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-billing-services-planning',
    title: 'How to plan outsourced billing support',
    excerpt: 'Turn your billing queue into a clear role, with approval lines and a review plan.',
    minutes: 6,
  },
  {
    slug: 'outsourced-billing-services-tasks-to-outsource',
    title: 'Which billing tasks should you outsource first?',
    excerpt: 'Choose repeatable billing work with examples, an owner, and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-billing-services-provider-questions',
    title: 'Questions to ask an outsourced billing provider',
    excerpt: 'Ask who reviews the work, how access is limited, and when issues reach your team.',
    minutes: 8,
  },
  {
    slug: 'outsourced-billing-services-onboarding-checklist',
    title: 'First-week checklist for a Filipino billing specialist',
    excerpt: 'Set up safe tool access, sample work, daily checks, and a clear escalation path.',
    minutes: 9,
  },
  {
    slug: 'philippines-medical-billing-audit-checklist',
    title: 'Philippines medical billing audit checklist for safer claim review',
    excerpt: 'A practical audit plan for Filipino billing staff, with clear evidence checks, owner approvals, and escalation rules.',
    minutes: 12,
    detail: {
      keyword: 'Philippines medical billing audit checklist',
      marker: 'OBS-PH-MED-AUDIT-20260725',
      published: '2026-07-25',
      updated: '2026-07-25',
      intro: [
        'A Philippines medical billing audit checklist should tell a billing specialist what to inspect, what proof to save, and when to stop. It should also keep clinical judgment, coding approval, write-offs, and payment release with the named owner.',
        'The checklist below is built for a remote Filipino staff member who handles repeatable billing support. It gives the worker a clean queue while giving the practice or billing company a clear review trail.',
      ],
      stats: [
        { label: 'Insufficient documentation', value: 59.8, display: '59.8%' },
        { label: 'Medical necessity', value: 15.7, display: '15.7%' },
        { label: 'Incorrect coding', value: 10, display: '10.0%' },
        { label: 'No documentation', value: 8.2, display: '8.2%' },
        { label: 'Other', value: 6.3, display: '6.3%' },
      ],
      table: [
        { check: 'Patient and encounter match', staff: 'Compare the claim, encounter, and approved source record. Flag any mismatch.', owner: 'Decide how to correct a disputed identity or encounter record.' },
        { check: 'Required order or note', staff: 'Confirm that the named document is present and readable. Record what is missing.', owner: 'Confirm whether the record supports the billed service.' },
        { check: 'Code and units', staff: 'Compare the entered code and units with the approved coding note. Do not choose a new code.', owner: 'Approve coding changes and clinical interpretation.' },
        { check: 'Payer response', staff: 'Sort the response, save the reason, and route it to the right queue.', owner: 'Choose the appeal, correction, write-off, or other response.' },
        { check: 'Payment posting', staff: 'Match the remittance to the account and flag an unexplained balance.', owner: 'Approve refunds, adjustments, and unusual balance changes.' },
        { check: 'Access or privacy issue', staff: 'Stop work, preserve the facts, and alert the named contact.', owner: 'Lead the incident response and decide who must be notified.' },
      ],
      quote: {
        text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location.',
        by: 'National Institute of Standards and Technology, SP 800-207, August 2020',
        url: 'https://csrc.nist.gov/pubs/sp/800/207/final',
      },
      sections: [
        {
          heading: 'Start with one audit boundary',
          paragraphs: [
            'Do not hand a new staff member a whole billing system and ask for a general audit. Pick one payer, one claim type, or one age band, then define the fields and documents that belong in the review.',
            'Write the stopping points next to the checks. A Filipino billing specialist can compare records, name a missing item, and route an exception, but the worker should not invent a code, infer medical necessity, or approve a financial change.',
            'Use a short sample before opening the live queue. Ten varied records can show whether the instructions cover common work, missing documents, payer messages, duplicate entries, and odd cases that need an owner.',
          ],
          bullets: ['Name the exact queue and date range.', 'List the source records the worker may use.', 'Mark every decision that stays with the owner.', 'Choose one place for questions and evidence.'],
        },
        {
          heading: 'Build the daily audit queue',
          paragraphs: [
            'A good queue has a small set of statuses that both people understand. Use labels such as ready to check, missing proof, owner decision, corrected by owner, and closed after review.',
            'Each row should show the claim or account ID, the check date, the issue found, the source used, and the next owner. Keep sensitive details inside the approved billing system instead of copying them into chat or a personal sheet.',
            'Set a daily review point while the role is new. The owner can clear hard cases, correct the instructions, and see whether the worker is stopping at the right line rather than guessing.',
          ],
          bullets: ['One record per row', 'One clear status', 'One named next owner', 'One short evidence note'],
        },
        {
          heading: 'Check proof before touching the claim',
          paragraphs: [
            'The 2024 CMS report gives a useful warning for any medical billing team. It found that insufficient documentation made up 59.8 percent of measured improper Medicare fee-for-service payments, while no documentation made up another 8.2 percent.',
            'Those figures do not predict the result for one practice or one Filipino worker. They do show why an audit should begin with the order, note, date, identity, and other required proof before anyone discusses a correction.',
            'Have the specialist name the missing item in plain words. "Order not found in the approved chart folder" is more useful than "bad claim," because the owner can see what was checked and what action is needed.',
          ],
          bullets: ['Match the person and encounter.', 'Find the required order or note.', 'Confirm the billed date against the source.', 'Save the payer message or remittance reference.'],
        },
        {
          heading: 'Keep coding and clinical calls with the owner',
          paragraphs: [
            'CMS placed 15.7 percent of measured improper payments in the medical-necessity category and 10.0 percent in incorrect coding. A remote audit role should surface those questions without asking support staff to settle them.',
            'Give the worker a route for each question. Coding issues go to the coder or billing owner, clinical support questions go to the clinician or approved reviewer, and money decisions go to the finance owner.',
            'The handoff should include the record ID, the exact conflict, the source checked, and the requested decision. That is enough for the owner to act without forcing the worker to make a judgment outside the role.',
          ],
          bullets: ['Staff find and describe the conflict.', 'Owners make the coded or clinical decision.', 'Staff record the approved result.', 'Owners review repeat patterns and update the guide.'],
        },
        {
          heading: 'Limit access for a Philippines-based team member',
          paragraphs: [
            'Remote location is not a reason to grant broad trust or broad access. Give the Filipino specialist a named account, only the systems needed for the queue, and a sign-in method approved by the business.',
            'NIST says access should not be trusted just because of location or ownership. That fits a billing desk well: verify the person and device, limit what the account can reach, and remove access when the assignment changes.',
            'Philippine privacy law also matters when personal data is handled in the Philippines. The business should get legal and compliance advice for its own setup, while the daily checklist stays focused on approved tools, safe handling, and fast escalation.',
          ],
          bullets: ['Use a named account instead of a shared login.', 'Keep exports off personal devices.', 'Review permissions when duties change.', 'Report an access problem before work continues.'],
        },
        {
          heading: 'Run a first-week sample audit',
          paragraphs: [
            'On day one, review the instructions and walk through two examples together. On days two and three, let the specialist check a small batch, then compare every result with the owner\'s review.',
            'On day four, group the misses by cause instead of blaming the person. A missing source path calls for a better guide, a repeated judgment call needs a clearer escalation line, and a simple entry error needs a focused quality check.',
            'On day five, approve only the checks that were done correctly in the sample. Keep uncertain work in review until the owner has enough evidence to widen the queue safely.',
          ],
          bullets: ['Day 1: two guided examples', 'Days 2–3: small checked batch', 'Day 4: fix the guide and routes', 'Day 5: approve only proven checks'],
        },
        {
          heading: 'Measure the audit without fake precision',
          paragraphs: [
            'Count records checked, records returned for missing proof, owner decisions requested, and corrections confirmed by the owner. These are simple work counts, not claims about revenue saved or errors prevented.',
            'Review a small sample of closed records each week. If the owner finds a missed issue, record the cause and update the checklist before adding more volume.',
            'Do not turn the CMS national figures into a target for your team. Your own results depend on payer mix, service type, source quality, coding rules, and how the sample was chosen.',
          ],
          bullets: ['Records checked', 'Missing-proof returns', 'Owner decisions requested', 'Owner-confirmed corrections'],
        },
      ],
      faqs: [
        { q: 'Can a Filipino billing specialist change a medical code during an audit?', a: 'The specialist can compare the entered code with an approved source and flag a conflict. A qualified owner should approve any coding change and record the reason.' },
        { q: 'How large should the first audit sample be?', a: 'Start with a small varied sample that the owner can review in full. Ten records can be enough to test the instructions before the queue grows.' },
        { q: 'What should happen when required proof is missing?', a: 'The worker should stop that item, name the missing proof, and route it to the assigned owner. The worker should not fill the gap with an assumption.' },
        { q: 'Should audit notes include patient details in chat?', a: 'Keep sensitive details inside approved systems whenever possible. Use a record ID and a short issue label in the handoff unless the business has approved another safe method.' },
      ],
      banners: [
        { title: 'Need a tighter billing QA role?', body: 'Use the billing data quality service guide to define the checks and owner limits.', href: '/services/billing-data-quality-review', label: 'Review the role' },
        { title: 'Keep payment work inside clear lines', body: 'See how payment posting support can separate matching work from owner-only adjustments.', href: '/services/payment-posting', label: 'Map payment posting' },
        { title: 'Turn the checklist into a staffing brief', body: 'Share the queue, tools, schedule, and review owner for a Philippines-based billing role.', href: '/contact', label: 'Build the brief' },
      ],
      internalLinks: [
        { title: 'Billing dispute documentation', href: '/services/dispute-documentation' },
        { title: 'Month-end billing support', href: '/services/month-end-billing-support' },
        { title: 'Billing reconciliation', href: '/services/billing-reconciliation' },
        { title: 'First-week Filipino billing checklist', href: '/blog/outsourced-billing-services-onboarding-checklist' },
      ],
      sources: [
        { n: 1, name: 'CMS, 2024 Medicare Fee-for-Service Supplemental Improper Payment Data', date: '2024', url: 'https://www.cms.gov/files/document/2024-medicare-fee-service-supplemental-improper-payment-data.pdf', note: 'National findings for the 2024 report period, including the 7.66 percent total, 59.8 percent insufficient-documentation share, 15.7 percent medical-necessity share, 10.0 percent incorrect-coding share, and 8.2 percent no-documentation share.' },
        { n: 2, name: 'NIST SP 800-207, Zero Trust Architecture', date: 'August 2020', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Primary source for the exact access-control quote and zero-trust guidance.' },
        { n: 3, name: 'NIST SP 800-66 Revision 2, Implementing the HIPAA Security Rule', date: 'February 2024', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final', note: 'Guidance for regulated health information security and risk management.' },
        { n: 4, name: 'CMS Medicare Claims Processing Manual', date: 'Updated by CMS', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912', note: 'CMS source for claim-processing instructions and chapter files.' },
        { n: 5, name: 'Republic Act No. 10173, Data Privacy Act of 2012', date: 'August 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Text of the Philippine law covering personal data processing and security duties.' },
      ],
    },
  },
  {
    slug: 'philippines-medical-billing-documentation-follow-up-checklist',
    title: 'Philippines medical billing documentation follow-up checklist',
    excerpt: 'A step-by-step guide for Filipino billing staff who request missing claim records, track replies, and send judgment calls to the right owner.',
    minutes: 13,
    detail: {
      keyword: 'Philippines medical billing documentation follow-up checklist',
      marker: 'OBS-PH-DOC-FOLLOWUP-20260725',
      published: '2026-07-25',
      updated: '2026-07-25',
      intro: [
        'A Philippines medical billing documentation follow-up checklist should tell a staff member which record is missing, where to ask for it, and how long to wait. It should also make clear that the worker gathers proof but does not decide medical necessity, select a code, or approve a balance change.',
        'This guide is for a Filipino billing specialist working inside an approved claim queue. It gives the worker a repeatable way to chase missing records while the practice keeps control of clinical, coding, privacy, and money decisions.',
      ],
      stats: [
        { label: 'Insufficient documentation', value: 59.8, display: '59.8%' },
        { label: 'Medical necessity', value: 15.7, display: '15.7%' },
        { label: 'Incorrect coding', value: 10, display: '10.0%' },
        { label: 'No documentation', value: 8.2, display: '8.2%' },
        { label: 'Other', value: 6.3, display: '6.3%' },
      ],
      table: [
        { check: 'Missing order or referral', staff: 'Name the missing item, check the approved record locations, and send the saved request.', owner: 'Decide whether the available record supports the service or another action is needed.' },
        { check: 'Unsigned or incomplete note', staff: 'Record the date, author, and missing field without changing the note.', owner: 'Ask the proper clinician or records owner to complete the record.' },
        { check: 'Code does not match the approved note', staff: 'Flag the exact mismatch and attach the approved source reference. Do not choose a replacement code.', owner: 'Review the coding question and approve any correction.' },
        { check: 'Payer asks for more proof', staff: 'Save the request, due date, and list of documents in the claim queue.', owner: 'Approve the response and any clinical explanation.' },
        { check: 'No reply by the check date', staff: 'Send the approved reminder and move the item to the late-response view.', owner: 'Choose whether to escalate, pause, or close the request.' },
        { check: 'Privacy or access concern', staff: 'Stop the task and report the facts through the approved channel.', owner: 'Lead the response and decide what notice or access change is required.' },
      ],
      quote: {
        text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location.',
        by: 'National Institute of Standards and Technology, SP 800-207, August 2020',
        url: 'https://csrc.nist.gov/pubs/sp/800/207/final',
      },
      sections: [
        {
          heading: 'Define the missing record before outreach',
          paragraphs: [
            'Start with the payer message, claim note, or owner instruction that names the missing proof. The worker should write one plain issue label, such as unsigned visit note or referral not found, instead of a broad label like claim problem.',
            'List every approved place the specialist must check before sending a request. That may include the billing platform, chart folder, document inbox, payer portal, and a named internal queue.',
            'The checklist also needs a stopping line. If the record exists but its meaning is unclear, the worker routes the question to the owner rather than deciding whether the note supports the billed service.',
          ],
          bullets: ['Name one missing item.', 'List the approved places to check.', 'Save the payer or owner reference.', 'Route unclear meaning to the owner.'],
        },
        {
          heading: 'Use one request template for each record type',
          paragraphs: [
            'A saved request keeps the message short and makes the reply easier to match. It should include the record ID, service date, missing item, safe return path, due date, and the name of the person who can answer questions.',
            'Keep patient details inside the approved system whenever the setup allows it. A chat message or task alert can point to the record ID without copying the full claim or clinical note into another tool.',
            'The owner should approve each template before the Filipino specialist uses it. A request for an order, a signed note, and a payer attachment may need different wording and different recipients.',
          ],
          bullets: ['Use the approved record ID.', 'State the exact missing item.', 'Give a clear reply path and date.', 'Keep sensitive details in approved tools.'],
        },
        {
          heading: 'Track every request in a small queue',
          paragraphs: [
            'Each open item needs a request date, recipient, check date, current status, and next owner. This gives the specialist a daily list and lets the practice see which records are stuck.',
            'Use a few statuses that describe real work: ready to request, waiting for reply, reply received, owner review, and closed. Too many labels make the queue harder to scan and hide old items.',
            'Set the next check date when the request is sent. The worker can then follow the saved reminder rule instead of choosing a new wait time for every claim.',
          ],
          bullets: ['Request date and recipient', 'Next check date', 'Current status', 'Named owner for the next decision'],
        },
        {
          heading: 'Put the CMS figures in the right context',
          paragraphs: [
            'CMS reported a 7.66% Medicare fee-for-service improper payment rate for the 2024 report period. In its cause table, insufficient documentation accounted for 59.8% of measured improper payments, while no documentation accounted for 8.2%.',
            'The same 2024 table assigned 15.7% to medical necessity and 10.0% to incorrect coding. These national findings explain why proof, clinical review, and coding review need separate paths in a claim follow-up queue.',
            'The figures are not a target for one practice and do not measure one Filipino worker. Local results depend on the claim mix, payer rules, record quality, and the way the practice chooses its review sample.',
          ],
          bullets: ['Use national data only as context.', 'Measure your own queue separately.', 'Keep proof checks apart from judgment calls.', 'Record how the local sample was chosen.'],
        },
        {
          heading: 'Send judgment calls to the named owner',
          paragraphs: [
            'A reply can contain the requested file and still leave a hard question. The note may be unsigned, the date may conflict with the claim, or the content may not answer the payer request.',
            'The specialist should describe that conflict in plain words and attach the approved record reference. Coding questions go to the coding owner, clinical questions go to the approved clinician, and account changes go to the billing or finance owner.',
            'The owner decision should come back through the same controlled queue. The worker can then record the approved result without guessing why a code, claim, or balance changed.',
          ],
          bullets: ['Describe the exact conflict.', 'Send it to the named decision owner.', 'Wait for an approved result.', 'Record the decision source before closing.'],
        },
        {
          heading: 'Keep remote access narrow and reviewable',
          paragraphs: [
            'A Philippines-based worker needs access to the records required for the assigned queue, not every folder the business owns. Use a named account, approved sign-in controls, and permissions that match the task.',
            'NIST zero-trust guidance says location alone should not create trust. The practical rule is simple: verify the user and device, limit the reachable systems, and review access when the role changes.',
            'The Philippine Data Privacy Act also applies when personal data is processed in the Philippines. The business should get advice for its own legal setup, while the daily guide tells the worker where data may be viewed, saved, and discussed.',
          ],
          bullets: ['Use a named account.', 'Allow only the required record locations.', 'Keep exports off personal tools.', 'Review access after any role change.'],
        },
        {
          heading: 'Review the queue before adding more work',
          paragraphs: [
            'During the first week, the owner should check every completed item in a small sample. Compare the original request, the reply, the worker note, and the final owner decision.',
            'Count open requests, late replies, records returned for more proof, and owner decisions still waiting. These are useful work counts because they show where the queue slows down without making a claim about money saved.',
            'Fix the guide when the same problem appears twice. Add a source path when workers cannot find a record, tighten a template when replies are unclear, and add an owner when an exception has nowhere to go.',
          ],
          bullets: ['Review a small sample in full.', 'Count late and returned requests.', 'Find repeat causes.', 'Change the guide before growing the queue.'],
        },
      ],
      faqs: [
        { q: 'Can a Filipino billing specialist decide whether a note proves medical necessity?', a: 'The specialist can find the note, compare it with the requested record, and flag a gap. An approved clinical or billing owner should decide whether the documentation supports medical necessity.' },
        { q: 'What belongs in a missing-record request?', a: 'Use the approved record ID, service date, exact missing item, safe reply path, due date, and contact for questions. Keep extra patient details out of chat and other unapproved tools.' },
        { q: 'How often should the worker check for a reply?', a: 'Use the schedule approved for that payer, record type, or queue. Set the next check date when the first request is sent so the worker does not have to guess.' },
        { q: 'What should happen when the reply is incomplete?', a: 'The worker should record what arrived, name what is still missing, and send the item to the assigned owner or approved reminder path. The worker should not rewrite a clinical note or invent support.' },
      ],
      banners: [
        { title: 'Build a cleaner billing QA role', body: 'Use the billing data quality guide to define proof checks, owners, and review points.', href: '/services/billing-data-quality-review', label: 'Review the role' },
        { title: 'Keep disputed records organized', body: 'See how a Filipino specialist can prepare dispute notes without owning the final decision.', href: '/services/dispute-documentation', label: 'Map dispute support' },
        { title: 'Turn the queue into a staffing brief', body: 'Share the record types, tools, schedule, access limits, and review owner for the role.', href: '/contact', label: 'Build the brief' },
      ],
      internalLinks: [
        { title: 'Medical billing audit checklist', href: '/blog/philippines-medical-billing-audit-checklist' },
        { title: 'First-week Filipino billing checklist', href: '/blog/outsourced-billing-services-onboarding-checklist' },
        { title: 'Billing data quality review', href: '/services/billing-data-quality-review' },
        { title: 'Customer billing support', href: '/services/customer-billing-support' },
      ],
      sources: [
        { n: 1, name: 'CMS, 2024 Medicare Fee-for-Service Supplemental Improper Payment Data', date: '2024', url: 'https://www.cms.gov/files/document/2024-medicare-fee-service-supplemental-improper-payment-data.pdf', note: 'Primary source for the 7.66% total rate and the cause shares shown in the chart and article.' },
        { n: 2, name: 'NIST SP 800-207, Zero Trust Architecture', date: 'August 2020', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Primary source for the exact access-control quote and the rule against location-based trust.' },
        { n: 3, name: 'NIST SP 800-66 Revision 2, Implementing the HIPAA Security Rule', date: 'February 2024', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final', note: 'Federal guidance for protecting electronic health information and reviewing security risks.' },
        { n: 4, name: 'CMS Medicare Claims Processing Manual', date: 'CMS manual page checked July 2026', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912', note: 'CMS source for current claim-processing manual chapters and change references.' },
        { n: 5, name: 'Republic Act No. 10173, Data Privacy Act of 2012', date: 'August 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Official Philippine legal text covering personal data processing and security duties.' },
      ],
    },
  },
  {
    slug: 'philippines-medical-billing-remittance-review-checklist',
    title: 'Philippines medical billing remittance review checklist',
    excerpt: 'A practical guide for Filipino billing staff who review remittance records, post approved results, and send money or coding decisions to the right owner.',
    minutes: 13,
    detail: {
      keyword: 'Philippines medical billing remittance review checklist',
      marker: 'OBS-PH-REMIT-REVIEW-20260725',
      published: '2026-07-25',
      updated: '2026-07-25',
      intro: [
        'A Philippines medical billing remittance review checklist should tell a staff member which file to open, which fields to compare, and where an exception goes. It should also keep refunds, write-offs, coding changes, and disputed payment decisions with a named owner.',
        'This guide is for a Filipino billing specialist who handles repeatable remittance work in approved systems. The worker can sort records, match approved details, and prepare a clean handoff without guessing what a payer meant or changing an account without permission.',
      ],
      stats: [
        { label: 'Insufficient documentation', value: 59.8, display: '59.8%' },
        { label: 'Medical necessity', value: 15.7, display: '15.7%' },
        { label: 'Incorrect coding', value: 10, display: '10.0%' },
        { label: 'No documentation', value: 8.2, display: '8.2%' },
        { label: 'Other', value: 6.3, display: '6.3%' },
      ],
      table: [
        { check: 'Remittance and account match', staff: 'Match the remittance, payer, patient or account ID, and service date in the approved billing system.', owner: 'Resolve a disputed identity, payer, or encounter match before anything is posted.' },
        { check: 'Paid and allowed amounts', staff: 'Copy the stated figures into the review row and flag any difference from the approved source.', owner: 'Decide whether the difference is expected, disputed, or ready for another action.' },
        { check: 'Adjustment reason', staff: 'Record the payer code and plain description from the approved reference. Do not invent a reason.', owner: 'Interpret an unclear adjustment and choose the response.' },
        { check: 'Payment posting', staff: 'Post only the result covered by the written rule and save the remittance reference.', owner: 'Approve unusual adjustments, refunds, write-offs, and balance changes.' },
        { check: 'Reversal or recoupment', staff: 'Stop the item, save the payer notice, and place it in the named exception queue.', owner: 'Review the notice and approve the account response.' },
        { check: 'Privacy or access concern', staff: 'Stop work and report the facts through the approved channel.', owner: 'Lead the response and decide whether access or notice must change.' },
      ],
      quote: {
        text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).',
        by: 'National Institute of Standards and Technology, SP 800-207, August 2020',
        url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf',
      },
      sections: [
        {
          heading: 'Set the remittance review boundary',
          paragraphs: [
            'Start with one payer, one approved file type, and one place where finished work is recorded. The staff member needs a written list of the fields to compare before opening a live queue.',
            'Name the decisions that stay with the practice or billing owner. A Filipino specialist may match an account, record a payer code, and post an approved result, but the worker should not approve a refund, choose a write-off, or settle a coding dispute.',
            'Test the boundary with a small group of varied records. Include a clean payment, a partial payment, an adjustment, a reversal, and a record that cannot be matched so the handoff rules face real examples.',
          ],
          bullets: ['Name the payer and file type.', 'List every field the worker must compare.', 'Mark each owner-only decision.', 'Choose one exception queue.'],
        },
        {
          heading: 'Build a queue that shows the next action',
          paragraphs: [
            'Each row should show the remittance reference, account ID, service date, amount shown, adjustment code, status, and next owner. Keep patient details inside the approved billing system instead of copying them into a personal sheet or chat message.',
            'Use a short status list that describes actual work. Ready to review, matched, owner question, approved to post, posted, and closed are easier to scan than a long list of vague labels.',
            'Give every open item a check date and a named person. The worker can then return to the right records without deciding alone how long an exception should wait.',
          ],
          bullets: ['One remittance reference', 'One current status', 'One next check date', 'One named decision owner'],
        },
        {
          heading: 'Read adjustment details without guessing',
          paragraphs: [
            'The specialist should copy the payer code and its approved description exactly as shown in the source. If the code is missing, combined with another message, or unclear for that account, the item moves to the owner queue.',
            'A plain note should say what the worker found and where it came from. "Adjustment code shown on the remittance, account balance does not match the approved posting rule" gives the reviewer something useful to check.',
            'Do not ask support staff to translate a payer message into a new code or clinical conclusion. Their job is to preserve the evidence, describe the conflict, and send it to the person who owns that decision.',
          ],
          bullets: ['Copy the code exactly.', 'Use the approved code reference.', 'Describe the conflict in plain words.', 'Send unclear meaning to the owner.'],
        },
        {
          heading: 'Use national findings as a warning, not a target',
          paragraphs: [
            'CMS reported that 7.66% of measured Medicare fee-for-service payments were improper for the 2024 report period. Its cause table assigned 59.8% of measured improper payments to insufficient documentation and 8.2% to no documentation.',
            'The same 2024 table assigned 15.7% to medical necessity and 10.0% to incorrect coding. These findings are a good reason to keep proof checks, coding questions, and clinical questions in separate paths.',
            'Those national percentages do not describe one practice or one Philippines-based worker. Local findings depend on the payer mix, claim types, source records, owner rules, and the way the team selects its review sample.',
          ],
          bullets: ['Use dated national data only for context.', 'Measure the local queue on its own.', 'Keep document checks apart from judgment.', 'Write down how samples are chosen.'],
        },
        {
          heading: 'Separate posting work from money decisions',
          paragraphs: [
            'A written posting rule should cover the ordinary result, the required source, and the evidence saved after posting. Anything outside that rule should pause before the account changes.',
            'Refunds, write-offs, unusual adjustments, disputed balances, and recoupments need a named owner. The specialist can prepare the record and show the payer notice, but the owner decides what the business will do.',
            'The approved decision should return through the same queue with the reviewer name and source note. The worker can then post or close the item without trying to remember a decision made in a call or private message.',
          ],
          bullets: ['Post only from a written rule.', 'Pause every exception.', 'Save the owner approval.', 'Record the final result in the approved system.'],
        },
        {
          heading: 'Limit access for remote remittance work',
          paragraphs: [
            'A Filipino billing specialist needs access to the records used for the assigned queue, not every account or folder the business owns. Use a named login, approved sign-in controls, and permissions that match the task.',
            'NIST explains that a person or account should not be trusted merely because of location or ownership. For a billing desk, that means checking the user and device, limiting reachable systems, and reviewing access whenever the assignment changes.',
            'The Philippine Data Privacy Act matters when personal data is processed in the Philippines. The business should get advice for its own legal setup, while the daily checklist tells the worker where records may be opened, saved, and discussed.',
          ],
          bullets: ['Use a named account.', 'Allow only the required systems.', 'Keep exports off personal tools.', 'Report an access problem before continuing.'],
        },
        {
          heading: 'Check the first week before adding volume',
          paragraphs: [
            'On the first day, walk through two examples and point out every owner decision. During the next two days, let the specialist review a small batch while the owner checks every result before posting.',
            'Group mistakes by cause on the fourth day. A missing source path needs a better guide, a repeated judgment call needs a clearer owner, and an entry error needs a focused recheck.',
            'On the fifth day, approve only the record types that the sample supports. Keep hard cases in review until the team has enough checked work to change the boundary safely.',
          ],
          bullets: ['Day 1: guided examples', 'Days 2–3: fully checked sample', 'Day 4: fix the guide and owner paths', 'Day 5: approve only proven work'],
        },
      ],
      faqs: [
        { q: 'Can a Filipino billing specialist post every remittance result?', a: 'The specialist should post only the ordinary results covered by a written and tested rule. Every exception should go to the named owner before the account changes.' },
        { q: 'What should happen when an adjustment code is unclear?', a: 'The worker should save the exact code, payer message, and account reference, then send the item to the owner. The worker should not invent a description or choose the account response.' },
        { q: 'Should remittance details be copied into chat?', a: 'Keep sensitive details in approved billing tools whenever possible. A handoff can use the approved record ID and a short issue label without copying the full record into another system.' },
        { q: 'How should the owner review the first sample?', a: 'Compare the source remittance, worker note, posting result, and any owner approval for every item in a small varied sample. Fix the guide before adding more records when the same gap appears twice.' },
      ],
      banners: [
        { title: 'Define the payment posting role', body: 'Use the service guide to separate routine matching from owner-only account changes.', href: '/services/payment-posting', label: 'Map payment posting' },
        { title: 'Give exceptions a clean review path', body: 'Use billing reconciliation support to organize mismatches before the owner decides.', href: '/services/billing-reconciliation', label: 'Review reconciliation' },
        { title: 'Turn the queue into a staffing brief', body: 'Share the payer files, tools, schedule, access limits, and review owner for the role.', href: '/contact', label: 'Build the brief' },
      ],
      internalLinks: [
        { title: 'Billing data quality review', href: '/services/billing-data-quality-review' },
        { title: 'Billing dispute documentation', href: '/services/dispute-documentation' },
        { title: 'Medical billing audit checklist', href: '/blog/philippines-medical-billing-audit-checklist' },
        { title: 'Documentation follow-up checklist', href: '/blog/philippines-medical-billing-documentation-follow-up-checklist' },
      ],
      sources: [
        { n: 1, name: 'CMS, 2024 Medicare Fee-for-Service Supplemental Improper Payment Data', date: '2024', url: 'https://www.cms.gov/files/document/2024-medicare-fee-service-supplemental-improper-payment-data.pdf', note: 'Primary source for the 7.66%, 59.8%, 15.7%, 10.0%, and 8.2% findings used in this guide.' },
        { n: 2, name: 'NIST SP 800-207, Zero Trust Architecture', date: 'August 2020', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf', note: 'Primary source for the exact access-control quote and guidance against location-based trust.' },
        { n: 3, name: 'NIST SP 800-66 Revision 2, Implementing the HIPAA Security Rule', date: 'February 2024', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-66r2.pdf', note: 'Federal guidance for protecting electronic health information and reviewing security risks.' },
        { n: 4, name: 'CMS Medicare Claims Processing Manual', date: 'CMS manual page checked July 2026', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912', note: 'CMS hosts claim-processing chapters, including remittance advice instructions, on this manual page.' },
        { n: 5, name: 'Republic Act No. 10173, Data Privacy Act of 2012', date: '2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Philippine legal text covering personal data processing and security duties.' },
      ],
    },
  },
] as const;

export const staffingOffer = {
  partner: 'our Philippines staffing team',
  promise: 'Get a Filipino billing staffing plan built around the queue you need covered.',
  fit: [
    'billing owners who need a Filipino specialist but do not want to screen alone',
    'teams that want a named reviewer and a clear escalation path',
    'companies with invoice, claims admin, payment follow-up, or billing QA queues',
  ],
  included: [
    'A role call that turns your billing queue into a clear scope',
    'Matching with Filipino talent based on billing skills, schedule, tools, and communication needs',
    'A handoff plan for examples, review points, reporting, and safe tool access',
    'A named contact for quality, attendance, and replacement questions',
  ],
  proof: [
    'clear task scope before hiring',
    'a weekly report the billing owner can review',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which billing tools, portals, inboxes, or account systems will the specialist use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the specialist', body: 'Our staffing team matches Filipino talent to the billing work, schedule, tools, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Add work carefully', body: 'Once the first tasks are stable, add more billing work and update the review plan.' },
] as const;

export const staffingFitNote = 'Every plan depends on the billing scope, schedule, tools, access, and review needs. We recruit and hire Filipino talent only in the Philippines.';


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
