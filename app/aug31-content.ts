const date = '2026-08-31';

const sources = [
  { n: 1, name: 'CMS Medicare Claims Processing Manual', date: 'Checked August 31, 2026', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912', note: 'Primary federal guidance for claim-processing controls and evidence.' },
  { n: 2, name: 'HHS HIPAA Security Rule', date: 'Checked August 31, 2026', url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html', note: 'Federal guidance for safeguards applied to electronic protected health information.' },
  { n: 3, name: 'NIST SP 800-66 Revision 2', date: 'February 2024', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final', note: 'Implementation guidance for HIPAA security controls.' },
  { n: 4, name: 'CAQH CORE Operating Rules', date: 'Checked August 31, 2026', url: 'https://www.caqh.org/core/operating-rules', note: 'Industry operating-rule context for administrative transactions.' },
  { n: 5, name: 'CMS 2024 Medicare FFS Improper Payment Data', date: '2024', url: 'https://www.cms.gov/files/document/2024-medicare-fee-service-supplemental-improper-payment-data.pdf', note: 'Context for the evidence chart shown with each guide.' },
];

const stats = [
  { label: 'Insufficient documentation', value: 59.8, display: '59.8%' }, { label: 'Medical necessity', value: 15.7, display: '15.7%' },
  { label: 'Incorrect coding', value: 10, display: '10.0%' }, { label: 'No documentation', value: 8.2, display: '8.2%' }, { label: 'Other', value: 6.3, display: '6.3%' },
];
const quote = { text: 'Access to systems and records should be limited to the work a person is authorized to perform.', by: 'NIST SP 800-66 Rev. 2', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final' };

const blogTopics = [
  ['claim-control-number-crosswalk','Claim control number crosswalk','link payer, clearinghouse, and practice claim references without merging unrelated records'],
  ['electronic-remittance-version-check','Electronic remittance version check','confirm which remittance version supports a posting or reconciliation question'],
  ['secondary-payer-handoff','Secondary payer handoff','prepare coordination evidence while leaving coverage decisions with the qualified owner'],
  ['patient-statement-suppression-review','Patient statement suppression review','document why a statement is held and who may authorize release'],
  ['rejected-claim-resubmission-lineage','Rejected claim resubmission lineage','preserve original, corrected, and resubmitted claim events'],
  ['payer-call-reference-audit','Payer call reference audit','test whether follow-up notes retain source wording, dates, and reference numbers'],
  ['zero-payment-remittance-triage','Zero-payment remittance triage','separate denial, adjustment, pending, and missing-evidence states'],
  ['invoice-tax-field-source-review','Invoice tax field source review','compare tax fields with approved customer and contract sources'],
  ['cash-batch-reversal-handoff','Cash batch reversal handoff','trace reversals without authorizing reposting or refunds'],
  ['billing-address-change-control','Billing address change control','validate change evidence before an authorized owner updates billing records'],
  ['weekend-queue-carryforward','Weekend queue carryforward','hand off deadlines, holds, and access limits across shifts'],
  ['month-end-unbilled-item-register','Month-end unbilled item register','reconcile unbilled items to source evidence and named decisions'],
] as const;

const sections = (topic: string, purpose: string) => [
  { heading: 'Define the queue and evidence', paragraphs: [`For ${topic}, begin with a named population, period, source report, stable record reference, and cutoff timezone. The purpose is to ${purpose}. Record the source version before comparing values so a later reviewer can reproduce the check.`, `Keep observed facts separate from worker summaries. When sources conflict, retain both values and state the precise question that remains open. Missing access is a limitation, not a clean result.`], bullets: ['Name the population and period.', 'Retain source versions.', 'Use stable references.', 'Label unknowns honestly.'] },
  { heading: 'Perform a bounded comparison', paragraphs: [`Compare only fields relevant to ${topic}. Record timestamps, identifiers, amounts, statuses, and source wording as applicable. Avoid matching on a familiar amount or name alone when another stable key is available.`, `The specialist may assemble evidence and calculate differences. Coding, coverage, money movement, claim release, write-offs, refunds, and policy interpretation remain with the authorized owner.`], bullets: ['Compare like fields.', 'Show calculation inputs.', 'Avoid assumption-based matches.', 'Respect the authority boundary.'] },
  { heading: 'Classify exceptions precisely', paragraphs: [`Use specific states such as matched, conflicting source, missing evidence, access blocked, duplicate risk, owner review, or carried forward. A generic pending label conceals the reason work has stopped.`, `Each exception needs the source checked, observed condition, affected record, next action, owner, and review date. Preserve earlier states when new evidence arrives.`], bullets: ['Use evidence-based states.', 'Name the exact conflict.', 'Assign an owner and date.', 'Preserve event history.'] },
  { heading: 'Reconcile and hand off', paragraphs: [`At close, reconcile the opening population to every disposition. Explain exclusions and denominator changes. A balanced count proves the queue was accounted for; it does not prove that every interpretation or billing outcome is correct.`, `A useful handoff answers one bounded question and links the evidence needed to decide it. The owner records the authorized disposition, while the support specialist keeps the audit trail intact.`], bullets: ['Reconcile every item.', 'Explain exclusions.', 'Ask one bounded question.', 'Link the owner disposition.'] },
  { heading: 'Review the control over time', paragraphs: [`Track matched, unresolved, blocked, reopened, and owner-decided items for ${topic}. Compare periods only when the population and definitions remain stable. Faster completion can reflect narrower scope rather than better control.`, `Review recurring exceptions with the billing owner. Improve source access, field definitions, and escalation rules, but never erase unresolved work to improve a metric.`], bullets: ['Keep definitions stable.', 'Report reopened work.', 'Review recurring causes.', 'Never hide unresolved records.'] },
];

export const aug31BlogBatch = blogTopics.map(([slug, label, purpose], index) => ({
  slug: `aug31-philippines-medical-billing-${slug}`, title: `Philippines medical billing ${label}`, excerpt: `A practical control to ${purpose}.`, minutes: 11,
  detail: { keyword: `Philippines medical billing ${label}`, marker: `OBS-BLOG-20260831-${String(index + 1).padStart(2, '0')}`, published: date, updated: date,
    intro: [`A Philippines-based billing support desk can use this ${label.toLowerCase()} to ${purpose}. The routine defines the evidence to collect, the exception states to use, and the point where an authorized owner must decide.`, `Start with a defined population and the original system evidence. Do not turn a convenient match, an elapsed deadline, or a worker note into an unsupported billing conclusion.`, `This guide treats preparation and approval as separate jobs. The specialist makes the record reviewable; the named owner controls any action that changes claims, accounts, money, coding, coverage, or customer communication.`],
    stats, table: [
      { check: 'Scope', staff: 'Record population, period, source, and stable reference.', owner: 'Approve the governing rule and authority.' },
      { check: 'Exception', staff: 'Preserve observed values, conflicts, and limitations.', owner: 'Resolve interpretation and account-changing action.' },
      { check: 'Close', staff: 'Reconcile dispositions and prepare a bounded handoff.', owner: 'Record the approved disposition and follow-up.' },
    ], quote, sections: sections(label.toLowerCase(), purpose),
    faqs: [{ q: `Who owns decisions in a ${label.toLowerCase()}?`, a: 'The support specialist prepares and compares approved evidence. The qualified billing owner retains coding, coverage, financial, release, and policy decisions.' }, { q: 'What belongs in the handoff?', a: 'Include the stable reference, source checked, observed result, exact unresolved question, deadline, access limitation, next owner, and review date.' }],
    banners: [{ title: 'Keep source evidence intact', body: 'Build a reviewable billing queue with explicit decision limits.', href: '/services/billing-data-quality-review', label: 'Review the service' }, { title: 'Reconcile every disposition', body: 'Explain matched, held, and unresolved records.', href: '/services/billing-reconciliation', label: 'Map the control' }, { title: 'Design the owner handoff', body: 'Turn exceptions into bounded, answerable questions.', href: '/contact', label: 'Plan the workflow' }], internalLinks: [], sources,
  },
}));

const researchTopics = [
  ['claim-reopen-rate','Claim Reopen Rate Research','what share of closed claim work returns to the queue, and which documented events explain the return?'],
  ['remittance-to-posting-lag','Remittance-to-Posting Lag Research','how much time passes between remittance availability and a reviewable posting event?'],
  ['payer-reference-completeness','Payer Reference Completeness Research','which follow-up records retain enough payer evidence for an independent reviewer?'],
  ['unbilled-item-aging','Unbilled Item Aging Research','which evidence states explain the age of items not yet released to billing?'],
  ['billing-handoff-rework','Billing Handoff Rework Research','which missing fields or unclear decisions cause a billing handoff to be returned?'],
] as const;

export const aug31ResearchBatch = researchTopics.map(([slug, title, question]) => ({
  slug: `research-medical-billing-aug31-${slug}`, title, excerpt: `A bounded cohort study asking ${question}`, published: date, updated: date,
  body: [
    `Research question: ${question}`,
    'Method: define the source population, observation period, unit of analysis, inclusion rule, exclusions, and cutoff timezone before selecting records. Preserve stable references and source versions. Sample across relevant queue states rather than choosing only completed or convenient cases.',
    'Evidence collection: record the initiating event, relevant system timestamps, original status wording, assigned role, access limitations, later events, and final observed disposition. Keep calculated intervals separate from source timestamps, and link repeated events for one record so they are not counted as independent cases.',
    'Analysis: classify records as source-confirmed, conflicting, missing evidence, access-limited, owner interpretation required, reopened, or unresolved at cutoff. Report counts and denominators beside any rate or median. A changed denominator can create apparent improvement without an operational change.',
    'The study separates observation from authorization. A Philippines-based support specialist can collect permitted evidence, reproduce calculations, and prepare a bounded owner question. The specialist should not change a claim or account, move money, interpret coding or coverage, or promise an outcome from the measured pattern.',
    'Results should describe only the sampled population and period. Timing does not establish causation: a long interval may reflect a source delay, access restriction, owner wait, correction chain, or incomplete history. Where evidence cannot distinguish explanations, record the cause as unknown.',
    'Quality checks include duplicate detection, reconciliation of all sampled records, independent review of a subset, and verification that event definitions stayed consistent. Retain exclusions and reopened items; removing hard cases after selection biases the result.',
    'Limitations include incomplete historical logs, payer-specific semantics, local policy, privacy restrictions, changing workflow definitions, and selected samples. This research cannot determine legal compliance, clinical necessity, fraud, payer liability, or the correct financial disposition.',
    'Conclusion: use the finding to sharpen source capture and escalation questions, not to automate an owner decision. Repeat the cohort with the same definitions before claiming a trend, and publish unknowns beside resolved cases.',
    'Sources checked August 31, 2026: CMS Medicare Claims Processing Manual — https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912',
    'CAQH CORE Operating Rules — https://www.caqh.org/core/operating-rules',
    'HHS HIPAA Security Rule — https://www.hhs.gov/hipaa/for-professionals/security/index.html',
    'NIST SP 800-66 Revision 2 — https://csrc.nist.gov/pubs/sp/800/66/r2/final',
  ],
  serviceCta: { href: '/services/billing-data-quality-review', label: 'Review the workflow', title: 'Turn the finding into a controlled queue', body: 'Define evidence fields, exception states, and named owner decisions before operational use.' },
}));
