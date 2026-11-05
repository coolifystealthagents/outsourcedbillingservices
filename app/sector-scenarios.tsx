import './sector-scenarios.css';
const scenarios = [
  [
    "Subscription businesses",
    "Reconcile the approved subscriber or usage export with the draft billing run. Flag missing account IDs, effective-date changes, and duplicate charges before invoices are released.",
    "A review list tied to the source export; the billing owner approves adjustments.",
    "subscription-billing-support"
  ],
  [
    "Professional services",
    "Prepare invoice drafts from approved time records, milestones, and client terms. Keep missing approvals and disputed expenses separate from items ready for review.",
    "A draft invoice pack with supporting records and a named approver.",
    "invoice-preparation"
  ],
  [
    "Businesses receiving partial payments",
    "Match remittance references to invoice records and document short payments or unidentified receipts without guessing at an allocation.",
    "A matched-receipts queue and unresolved items for the finance owner.",
    "payment-posting"
  ]
];
export function SectorScenarios() { return <section className="sector-scenarios" aria-labelledby="sector-examples-title"><p className="sector-scenarios__label">Practical service examples</p><h2 id="sector-examples-title">Start with the records your business already uses.</h2><div className="sector-scenarios__grid">{scenarios.map(([title,work,output,slug])=><article key={slug}><h3>{title}</h3><p>{work}</p><p><strong>Prepared output: </strong>{output}</p><a href={`/services/${slug}`}>Review the service scope →</a></article>)}</div><p>Agree the coverage window, source-system access, review owner, and escalation rules before assigning live work.</p></section>; }
