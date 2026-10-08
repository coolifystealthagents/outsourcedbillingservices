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

## 2026-10-08 selected handoff

`/research/research-medical-billing-revenue-schedule-preparation` now links once inside route-local `<main>` to `/services/revenue-schedule-preparation`. The route asks for source checks before close, and the service page gives the reader the related preparation path. The handoff keeps recognition treatment, amendments, materiality, journal entries, and close sign-off with the finance owner.

Treat this pair as delivered and non-duplicable. Its source record owns the CTA and modified date; local artifact verification must confirm both routes' canonicals and sitemap entries before release.

## 2026-09-18 Research publication ledger

| Service pillar | New Research route | Distinct reader decision | Status |
| --- | --- | --- | --- |
| `/services/invoice-preparation` | `/research/research-outsourced-billing-invoice-approval-latency-2026` | Is delay in source intake, draft preparation, owner review, correction, or release? | Delivered in the local generated artifact; the authorized routine owns public verification. |
| `/services/usage-billing-administration` | `/research/research-outsourced-billing-usage-event-completeness-2026` | Can source usage reach draft quantities without silent loss, duplication, or period shift? | Delivered in the local generated artifact; the authorized routine owns public verification. |
| `/services/subscription-billing-support` | `/research/research-outsourced-billing-subscription-change-cutoff-2026` | Which approved subscription version governed a cycle-boundary charge? | Delivered in the local generated artifact; the authorized routine owns public verification. |
| `/services/revenue-schedule-preparation` | `/research/research-outsourced-billing-revenue-schedule-source-lineage-2026` | Can an authorized reviewer rebuild every prepared schedule row? | Delivered in the local generated artifact; the authorized routine owns public verification. |
| `/services/customer-billing-support` | `/research/research-outsourced-billing-inquiry-evidence-completeness-2026` | Is an inquiry supported and routed well enough for an owner decision? | Delivered in the local generated artifact; the authorized routine owns public verification. |

## 2026-10-02 local-artifact reconciliation

A fresh 670-page production build found each September 18 research route and its matching existing service in the generated sitemap. The shared research renderer emits the record-owned service CTA once inside route-local `<main>`, so these five pairs are delivered and non-duplicable. This source-only map correction does not claim deployment or public rollout: `ops/recurring-routines.json` assigns live verification outside this routine.

## 2026-10-04 October research handoff reconciliation

A fresh 687-page production build selected the five October 2 research routes by their exact self-canonical links. Each route is in the sitemap and has exactly one record-owned service link inside its route-local `<main>`, so the following pairs are delivered and non-duplicable:

| Supporting research | Existing service pillar | Reader decision |
| --- | --- | --- |
| `/research/research-outsourced-billing-consolidated-invoice-entity-allocation-2026` | `/services/invoice-preparation` | Can each source charge be traced to the correct entity before an authorized owner releases a consolidated invoice? |
| `/research/research-outsourced-billing-invoice-number-collision-control-2026` | `/services/billing-data-quality-review` | Can staff distinguish duplicate-looking invoice references without changing a sequence or guessing at a document? |
| `/research/research-outsourced-billing-foreign-exchange-rate-input-lineage-2026` | `/services/billing-reconciliation` | Can a reviewer reproduce the rate input and calculation while owners retain rate-selection and release decisions? |
| `/research/research-outsourced-billing-hold-release-evidence-2026` | `/services/customer-billing-support` | What evidence shows a scoped billing hold changed before any work resumed? |
| `/research/research-outsourced-billing-chargeback-receivable-reinstatement-2026` | `/services/dispute-documentation` | Can a chargeback packet trace the payment event without deciding a balance, dispute, or collection outcome? |

This map update prevents duplicate CTAs. It changes no rendered route, schema, sitemap output, deployment state, or public-release claim.

## 2026-10-06 October research handoff reconciliation

A fresh production build selected the five October 6 research routes by their self-canonical links. Each route has one record-owned service link inside its route-local `<main>`, and each source and service route is in the generated sitemap. These paths are delivered and non-duplicable:

| Supporting research | Existing service pillar | Reader decision |
| --- | --- | --- |
| `/research/research-outsourced-billing-rendered-invoice-source-equality-2026` | `/services/invoice-preparation` | Did approved billing data survive document generation before an authorized owner releases the invoice? |
| `/research/research-outsourced-billing-recurring-schedule-drift-2026` | `/services/subscription-billing-support` | Did the live recurring schedule depart from the approved version? |
| `/research/research-outsourced-billing-partial-credit-application-lineage-2026` | `/services/credit-memo-administration` | Where did each approved credit component go after application or reversal? |
| `/research/research-outsourced-billing-dispute-hold-synchronization-2026` | `/services/dispute-documentation` | Do billing and collections show the same approved dispute-hold state? |
| `/research/research-outsourced-billing-close-package-control-total-integrity-2026` | `/services/month-end-billing-support` | Can a reviewer rebuild a month-end billing package from frozen source totals? |

This is a source-only planning correction. It does not change rendered copy, schema, route registration, sitemap output, deployment state, or public-release status.
