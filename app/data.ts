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
  alt: 'billing specialist working on invoice reports',
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
  {
    slug: 'operations-support',
    title: 'Billing Operations Support',
    desc: 'Remote billing operations support for teams that need clean queues, aging follow-up, payment notes, and daily handoff reports.',
    buyerProblem: 'Billing work gets risky when every invoice, claim, or follow-up lives in a different inbox. This service turns the daily desk into a reviewed queue with owners, due dates, and exception notes.',
    bestTasks: [
      'Clean billing queues and tag items by owner, payer, status, and next step',
      'Prepare invoice, claim, and payment follow-up lists for manager review',
      'Update customer or patient account notes after approved actions',
      'Track missing details, short pays, denials, and aging items that need a decision',
    ],
    controls: [
      'Limit access by tool, client, payer, and action type',
      'Keep money movement, refunds, write-offs, and coding decisions with the client-side owner',
      'Review a small work sample each day during the first two weeks',
      'Use a weekly scorecard for queue age, error rate, and unresolved exceptions',
    ],
    launchPlan: [
      'Export a sample queue with safe test records or scrubbed examples',
      'Mark which actions the assistant can take and which need approval',
      'Run a two-day shadow pass before giving live queue responsibility',
      'Hold a 20-minute weekly review until the queue is stable',
    ],
    faqs: [
      {
        q: 'Can an outsourced billing assistant make write-off or refund decisions?',
        a: 'No. Keep money decisions, refunds, write-offs, and policy exceptions with your internal billing owner. The assistant can prepare the file and flag the issue.',
      },
      {
        q: 'What should we outsource first?',
        a: 'Start with repeatable follow-up and account-note work. Do not start with disputed accounts or unclear payment decisions.',
      },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Billing Customer Support',
    desc: 'Billing customer support for payment questions, balance follow-up, document requests, and simple status updates with clear escalation rules.',
    buyerProblem: 'Customers usually do not care which department owns billing. They want a clear answer. Outsourced support can handle simple billing replies while your internal team keeps control of exceptions.',
    bestTasks: [
      'Answer basic invoice, statement, balance, and payment-status questions from approved scripts',
      'Collect missing documents or updated contact details before the next billing step',
      'Send approved reminder messages for overdue or incomplete billing items',
      'Escalate disputes, angry customers, medical questions, and policy exceptions quickly',
    ],
    controls: [
      'Use approved scripts for balance, payment, refund, and dispute language',
      'Require manager review for account credits, refunds, service shutoff, or collections threats',
      'Log every customer contact in the billing or CRM system',
      'Track response time, reopened tickets, and escalation volume each week',
    ],
    launchPlan: [
      'Write three approved answer examples for the most common billing questions',
      'Create an escalation list for disputes, refunds, legal threats, and sensitive data',
      'Start with email or ticket replies before adding phone work',
      'Review the first 25 replies before the assistant works alone',
    ],
    faqs: [
      {
        q: 'Can a remote billing support assistant talk to customers?',
        a: 'Yes, if the scripts, access rules, and escalation points are clear. Start with written replies because they are easier to review.',
      },
      {
        q: 'What should never be handled from a script?',
        a: 'Disputes, refund promises, legal threats, medical advice, pricing exceptions, and anything that changes the account balance need owner approval.',
      },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Billing Admin Support',
    desc: 'Billing admin support for document collection, data cleanup, invoice prep, portal checks, and billing desk coordination.',
    buyerProblem: 'Billing admins lose time chasing small missing pieces. A remote assistant can keep forms, portal notes, invoice details, and task lists moving so senior billing staff can handle judgment calls.',
    bestTasks: [
      'Collect missing billing details, files, purchase orders, claim attachments, and contact updates',
      'Prepare draft invoices, claim packets, or billing forms for review',
      'Check payer, vendor, or customer portals for status updates',
      'Clean duplicate records, missing fields, and outdated account notes',
    ],
    controls: [
      'Separate draft preparation from final billing approval',
      'Use view-only or limited edit access when possible',
      'Keep a change log for updated records and uploaded documents',
      'Review a random sample of completed admin tasks each week',
    ],
    launchPlan: [
      'Pick one admin queue with clear examples and low risk',
      'Record the naming rules for files, notes, and task statuses',
      'Give the assistant a daily done list and a blocked list',
      'Add more document or portal work after the first clean week',
    ],
    faqs: [
      {
        q: 'Is billing admin support the same as full revenue cycle management?',
        a: 'No. This is support work around the billing desk. Strategy, coding, compliance decisions, collections policy, and final approvals stay with the client.',
      },
      {
        q: 'How do we reduce errors during handoff?',
        a: 'Use sample records, naming rules, and a daily review list. Small repeated checks catch more problems than a long training deck nobody reads.',
      },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Billing Reporting and QA',
    desc: 'Billing reporting and QA support for aging summaries, denial logs, invoice checks, work sampling, and simple weekly management dashboards.',
    buyerProblem: 'Billing problems hide when nobody checks the same numbers each week. Reporting support gives the owner a short view of queue age, blockers, errors, and follow-up work.',
    bestTasks: [
      'Build weekly aging, denial, invoice, or unpaid-item summaries from approved exports',
      'Check a sample of completed billing tasks against the SOP',
      'Maintain a blocker log for missing data, payer delays, customer disputes, and tool issues',
      'Prepare a short weekly report for the billing owner before the review call',
    ],
    controls: [
      'Tie every report number back to a named export or source system',
      'Separate reporting from financial approval or revenue recognition decisions',
      'Use the same date range and status definitions each week',
      'Flag odd changes instead of explaining them without proof',
    ],
    launchPlan: [
      'Choose three weekly numbers the owner already trusts',
      'Create one export template and one report format',
      'Run reports in parallel with the current process for one week',
      'Review mismatches before replacing the old report',
    ],
    faqs: [
      {
        q: 'What reports should an outsourced billing team send first?',
        a: 'Start with aging, blocked items, completed tasks, and error checks. Keep the first report short enough that a manager will read it every week.',
      },
      {
        q: 'Can the assistant explain revenue changes?',
        a: 'The assistant can flag changes and collect source notes. Your billing or finance owner should explain revenue impact and approve the final view.',
      },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-billing-services-planning',
    title: 'Outsourced Billing Services: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
  },
  {
    slug: 'outsourced-billing-services-tasks-to-outsource',
    title: 'Outsourced Billing Services: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-billing-services-provider-questions',
    title: 'Outsourced Billing Services: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-billing-services-onboarding-checklist',
    title: 'Outsourced Billing Services: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
