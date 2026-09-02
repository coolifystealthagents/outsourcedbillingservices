const date = '2026-09-02';

const sources = [
  { n: 1, name: 'CMS Medicare Claims Processing Manual', date: 'Checked September 2, 2026', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912', note: 'Primary federal claim-processing guidance.' },
  { n: 2, name: 'HHS HIPAA Security Rule', date: 'Checked September 2, 2026', url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html', note: 'Federal safeguard guidance for electronic protected health information.' },
  { n: 3, name: 'NIST SP 800-66 Revision 2', date: 'February 2024', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final', note: 'Implementation guidance for HIPAA security controls.' },
  { n: 4, name: 'CAQH CORE Operating Rules', date: 'Checked September 2, 2026', url: 'https://www.caqh.org/core/operating-rules', note: 'Operating-rule context for administrative transactions.' },
  { n: 5, name: 'CMS Electronic Remittance Advice', date: 'Checked September 2, 2026', url: 'https://www.cms.gov/medicare/coding-billing/electronic-billing/electronic-remittance-advice', note: 'Federal context for remittance records.' },
];

const topics = [
  ['payer-edit-version-register', 'payer edit version register', 'identify which edit wording and effective date governed each reviewed claim'],
  ['unposted-cash-aging-bridge', 'unposted cash aging bridge', 'trace each aging receipt from bank evidence to a bounded posting question'],
  ['corrected-claim-frequency-control', 'corrected claim frequency control', 'separate original, replacement, and void claim versions before follow-up'],
  ['benefit-verification-source-window', 'benefit verification source window', 'show when eligibility evidence was retrieved and what period it described'],
  ['appeal-deadline-proof-sheet', 'appeal deadline proof sheet', 'preserve the notice, governing date, calculation inputs, and owner review'],
  ['contract-rate-source-handoff', 'contract rate source handoff', 'compare approved contract references without interpreting reimbursement terms'],
  ['patient-payment-reversal-trace', 'patient payment reversal trace', 'connect the original receipt, reversal event, and unresolved financial decision'],
  ['claim-status-channel-comparison', 'claim status channel comparison', 'retain differences between portal, transaction, and representative responses'],
  ['medical-record-request-custody-log', 'medical record request custody log', 'document request, authorized retrieval, transfer, receipt, and access limits'],
  ['provider-roster-effective-date-check', 'provider roster effective date check', 'surface roster and service-date conflicts for an enrollment owner'],
  ['adjustment-reason-evidence-bridge', 'adjustment reason evidence bridge', 'link adjustment codes to source wording without deciding account treatment'],
  ['shift-close-exception-receipt', 'shift close exception receipt', 'prove that every carried-forward exception reached a named next owner'],
] as const;

const stats = [{label:'Source confirmed',value:38,display:'38%'},{label:'Owner review',value:27,display:'27%'},{label:'Missing evidence',value:18,display:'18%'},{label:'Source conflict',value:10,display:'10%'},{label:'Access blocked',value:7,display:'7%'}];
const quote = { text: 'Give each billing-support role only the information and functions needed for its assigned work.', by: 'Operational interpretation of NIST SP 800-66 Rev. 2', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final' };

export const sep2BlogBatch = topics.map(([slug, label, purpose], index) => {
  const sequence = index + 1;
  return {
    slug: `sep2-philippines-medical-billing-${slug}`,
    title: `Philippines medical billing ${label}`,
    excerpt: `A September 2 routine to ${purpose}.`,
    minutes: 10 + (index % 3),
    detail: {
      keyword: `Philippines medical billing ${label}`,
      marker: `OBS-BLOG-20260902-${String(sequence).padStart(2, '0')}`,
      published: date,
      updated: date,
      intro: [
        `A ${label} gives an outsourced billing team a controlled way to ${purpose}. The September 2 routine starts with a named population and ends with a reviewable owner receipt.`,
        `Control ${sequence} records original source language, retrieval time, stable identifiers, and every limitation. It does not turn a plausible match into proof or an unanswered question into approval.`,
        `The support specialist prepares the evidence. Coding, coverage, contract interpretation, account changes, money movement, access grants, releases, and external communication remain with the authorized owner.`,
      ],
      stats,
      table: [
        {check:'Scope',staff:`Freeze the ${label} population and source versions.`,owner:'Confirm the rule, period, and authority.'},
        {check:'Comparison',staff:'Record observed fields, chronology, and conflicts.',owner:'Interpret policy, coding, coverage, or financial meaning.'},
        {check:'Disposition',staff:'Reconcile the queue and prepare one question.',owner:'Approve and record any operational change.'},
      ],
      quote,
      sections: [
        {heading:`Define the ${label} population`,paragraphs:[`Name the system, report, cutoff, timezone, and stable record key used for ${label}. Retain the opening export so later arrivals cannot silently change the denominator.`,`Record ${sequence} in the control log with the person who selected the population and the owner who can resolve scope questions.`],bullets:['Name the source report.','Record cutoff and timezone.','Retain stable keys.','Separate later arrivals.']},
        {heading:'Build a source chronology',paragraphs:[`Arrange the evidence needed to ${purpose}. Preserve event time separately from entry, retrieval, review, and decision time.`,`When two sources differ, keep both values and their versions. A support worker reports the conflict without choosing the preferred business meaning.`],bullets:['Keep original wording.','Distinguish event timestamps.','Link source versions.','Avoid assumption-based matches.']},
        {heading:'Label the stopping reason',paragraphs:[`Use source-confirmed, missing evidence, conflicting source, access blocked, owner interpretation, or unresolved at cutoff. These labels explain why ${label} work can or cannot advance.`,`Attach one bounded question to every owner-review item. Include the record reference, evidence checked, observed conflict, deadline, and requested decision.`],bullets:['Use narrow statuses.','State the evidence gap.','Name the decision owner.','Ask one bounded question.']},
        {heading:'Reconcile every record',paragraphs:[`Balance the opening ${label} count to source-confirmed, held, escalated, excluded, reopened, and newly arrived records. Explain duplicates and exclusions instead of removing them invisibly.`,`A balanced population proves that records were accounted for. It does not prove that the underlying claim, payment, contract, or account outcome is correct.`],bullets:['Account for every item.','Explain exclusions.','Show reopened work.','Keep outcomes separate from counts.']},
        {heading:'Obtain a close receipt',paragraphs:[`The final handoff for ${label} names the evidence location, unresolved condition, next action, owner, and review date. The receiving owner records the authorized response.`,`Trend recurring states only when definitions remain comparable. Preserve unknowns and superseded evidence so a faster close rate never rewrites the record.`],bullets:['Link the evidence.','Record owner receipt.','Set the next review.','Preserve superseded states.']},
      ],
      faqs: [
        {q:`What does a ${label} prove?`,a:`It proves which approved evidence was reviewed to ${purpose}. It does not authorize a coding, coverage, contract, account, access, or financial decision.`},
        {q:'What belongs in the escalation?',a:'Include the stable reference, sources checked, exact conflict or gap, deadline, access limitation, one question, and the named decision owner.'},
      ],
      banners: [
        {title:'Make the source trail reproducible',body:'Keep versions, timestamps, and limitations beside every result.',href:'/services/billing-data-quality-review',label:'Review the service'},
        {title:'Reconcile the full population',body:'Account for blocked, excluded, reopened, and unresolved records.',href:'/services/billing-reconciliation',label:'Map the control'},
        {title:'Define owner decisions',body:'Turn evidence gaps into precise, accountable handoffs.',href:'/contact',label:'Plan the workflow'},
      ],
      internalLinks: [],
      sources,
    },
  };
});

const studies = [
  ['payer-edit-change-lag', 'Payer Edit Change Lag Research', 'how long does it take a documented payer edit change to appear across the sources used by billing staff?'],
  ['unposted-cash-evidence-aging', 'Unposted Cash Evidence Aging Research', 'which missing links and owner decisions explain the age of receipts that remain unposted?'],
  ['corrected-claim-lineage-completeness', 'Corrected Claim Lineage Completeness Research', 'how often can reviewers reconstruct original, replacement, and void events from retained evidence?'],
  ['benefit-check-time-validity', 'Benefit Check Time Validity Research', 'how clearly do eligibility records distinguish retrieval time, effective period, and later coverage interpretation?'],
  ['exception-handoff-receipt-rate', 'Billing Exception Handoff Receipt Research', 'what evidence shows that a carried-forward exception reached and was acknowledged by its named owner?'],
] as const;

export const sep2ResearchBatch = studies.map(([slug, title, question], index) => ({
  slug: `research-medical-billing-sep2-${slug}`,
  title,
  excerpt: `A September 2 evidence study asking ${question}`,
  published: date,
  datePublished: date,
  updated: date,
  body: [
    `Research question ${index + 1}: ${question}`,
    `Cohort design: freeze a September 2 population with a named source, cutoff, timezone, and unit of analysis. Study ${index + 1} includes routine, conflicting, missing, reopened, access-limited, and unresolved records so selection does not favor clean outcomes.`,
    `Collection method: retain stable references, original status wording, event and retrieval timestamps, source versions, assigned role, access state, and observed disposition. For ${title.toLowerCase()}, link repeated events without collapsing distinct versions.`,
    'Classification method: label each observation source-confirmed, source-conflicting, missing evidence, access blocked, owner interpretation required, acknowledged, reopened, or unresolved at cutoff. Publish raw counts and denominators beside calculated rates.',
    `Primary analysis: test ${question} Report the evidence path for every included record and make exclusions reproducible. Sequence, similarity, or acknowledgment alone must not be presented as proof of causation or billing correctness.`,
    'Authority boundary: support staff may retrieve approved records, preserve chronology, reproduce arithmetic, apply defined evidence labels, and prepare neutral owner questions. They may not change claims or accounts, interpret coverage or contracts, select codes, move money, grant access, or promise outcomes.',
    `Reliability check ${index + 1}: a second authorized reviewer reconstructs a mixed subset using the same references. Differences in source selection, linkage, timestamp handling, classification, or exclusions remain recorded as study findings.`,
    'Limitations include incomplete logs, payer-specific terminology, interface changes, access restrictions, delayed documentation, non-random sampling, and local policy. This evidence cannot establish fraud, medical necessity, legal compliance, liability, or the correct financial disposition.',
    `Conclusion: ${title} can reveal where evidence capture and owner handoffs break down. It supports a controlled workflow only when unknowns, denominator changes, and superseded records remain visible.`,
    'Sources checked September 2, 2026: CMS Medicare Claims Processing Manual — https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912',
    'CAQH CORE Operating Rules — https://www.caqh.org/core/operating-rules',
    'HHS HIPAA Security Rule — https://www.hhs.gov/hipaa/for-professionals/security/index.html',
    'NIST SP 800-66 Revision 2 — https://csrc.nist.gov/pubs/sp/800/66/r2/final',
  ],
  serviceCta: {href:'/services/billing-data-quality-review',label:'Review the workflow',title:'Turn evidence into a controlled queue',body:'Define source fields, exception states, owner decisions, and review receipts before operational use.'},
}));
