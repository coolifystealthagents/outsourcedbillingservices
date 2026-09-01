# Service-led topical map

**Scope:** Philippines-based billing support for medical, service, and B2B teams. This is an internal planning ledger, not a public claim about rankings, pricing, outcomes, or backlinks.

## Existing pillars and supporting research

| Service pillar | Existing supporting research | Reader decision | Editorial rule |
| --- | --- | --- | --- |
| `/services/invoice-preparation` | `/research/research-medical-billing-invoice-accuracy-review` | Can a specialist prepare a draft from approved source records without setting terms or releasing it? | Link only from articles about invoice lines, source records, or draft-release boundaries. |
| `/services/usage-billing-administration` | `/research/research-medical-billing-usage-billing-reconciliation` | How should activity records be checked before an owner releases a usage charge? | Keep contract interpretation, overrides, and credits with the owner. |
| `/services/subscription-billing-support` | `/research/research-medical-billing-subscription-billing-review` | Which recurring-charge changes can be prepared and which need approval? | Do not turn a cancellation, pause, credit, or refund request into an automatic action. |
| `/services/billing-reconciliation` | `/research/research-medical-billing-payment-reconciliation` | How can a team show where source totals, remittances, and posted records differ? | Use this path for explainable differences, not for generic billing advice. |
| `/services/payment-posting` | `/research/research-medical-billing-remittance-review` | What can a specialist match from a remittance before an owner decides an unusual adjustment? | Keep reallocation, refunds, transfers, and reversals outside the specialist's authority. |
| `/services/credit-memo-administration` | `/research/research-medical-billing-credit-memo-governance` | What proof and approval are needed before a credit changes an account balance? | Do not imply that a support worker can approve credits or tax treatment. |
| `/services/collections-follow-up` | `/research/research-medical-billing-collections-follow-up` | How can approved follow-up preserve account facts and hand off exceptions? | Do not promise collection results or authorize settlements, write-offs, or strategy changes. |
| `/services/customer-billing-support` | `/research/research-medical-billing-customer-billing-inbox` | How should a billing inbox route questions while keeping records and decisions separate? | Keep balance changes, privacy concerns, and disputed conclusions with the owner. |
| `/services/revenue-schedule-preparation` | `/research/research-medical-billing-revenue-schedule-preparation` | Which source checks make a prepared revenue schedule reviewable before close? | The finance owner keeps recognition judgments, amendments, and sign-off. |
| `/services/billing-data-quality-review` | `/research/research-medical-billing-data-quality-review` | What should a mixed sample test before a billing team expands a queue? | Describe evidence and defects, not performance guarantees. |
| `/services/dispute-documentation` | `/research/research-medical-billing-dispute-documentation` | What records make a billing dispute answerable before an owner responds? | Route legal threats, privacy issues, refunds, and final responses to the authorized owner. |
| `/services/month-end-billing-support` | `/research/research-medical-billing-month-end-close` | What must remain visible before a billing close is signed off? | Preparation is not final close approval; do not hide unresolved differences. |

## Duplicate-prevention rules

1. Each route keeps one clear reader question. Do not create another article when the existing research already answers the same decision.
2. A contextual service link must use the specific service that follows from the source question. Existing generic navigation or a generic contact CTA does not qualify.
3. Before a reader-facing link change, verify the exact source and destination routes, search the source model for an existing equivalent href, refresh the source date, then check the emitted HTML, canonical, Article date, and sitemap record.
4. Keep the Philippines-based staffing boundary explicit. Do not claim staff can make clinical, coding, financial, legal, policy, or final-release decisions.

## Reconciled service handoff

`/research/research-medical-billing-remittance-review` already has one route-local next-step link to `/services/payment-posting`. The rendered research route has its H1 and canonical URL, the service href appears once inside `<main>`, and both routes are in the generated sitemap. Treat this pair as delivered and non-duplicable; do not add another CTA for the same handoff.

No new reader-facing handoff is selected from this map until a separate review confirms a useful, currently absent source-to-service pair.
