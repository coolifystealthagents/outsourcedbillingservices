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
