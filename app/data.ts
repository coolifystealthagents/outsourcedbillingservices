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
