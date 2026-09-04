# Service-led topical authority link ledger

Status: source planning record. This file does not change rendered pages or claim a live handoff.

## Scope

Outsourced Billing Services serves teams that need Philippines-based billing support. The mapped service pages are existing routes. Each proposed source page already exists in the generated sitemap and has a distinct operational question.

## Verified delivery inventory

| Service pillar | Existing destination | Supporting source URL | Reader question | Route-local destination status | Next action |
| --- | --- | --- | --- | --- | --- |
| Payment posting | `/services/payment-posting` | `/research/research-medical-billing-remittance-review` | How can a team match remittance evidence to a claim before posting? | Delivered: one route-local link in the built main content. | Keep as delivered; do not add another CTA. |
| Payment posting | `/services/payment-posting` | `/research/research-medical-billing-payment-posting-quality` | What controls keep payment posting reviewable when a support team prepares the work? | Delivered: one route-local link in the built main content. | Keep as delivered; do not add another CTA. The existing handoff keeps refund, transfer, reversal, and release decisions with the authorized owner. |
| Invoice preparation | `/services/invoice-preparation` | `/research/research-medical-billing-invoice-preparation-controls` | What source checks should happen before an invoice draft reaches its release owner? | Absent from the built main content. | Hold until the payment-posting candidate is evaluated. |
| Subscription billing | `/services/subscription-billing-support` | `/research/research-medical-billing-subscription-billing-review` | How should a recurring-charge queue handle plan changes, pauses, and credits without assuming approval? | Absent from the built main content. | Hold until the payment-posting candidate is evaluated. |
| Usage billing | `/services/usage-billing-administration` | `/research/research-medical-billing-usage-billing-reconciliation` | How can a team reconcile activity evidence with a draft usage charge? | Absent from the built main content. | Hold until the payment-posting candidate is evaluated. |

## Evidence captured on 2026-08-27

- Built source route: `/research/research-medical-billing-payment-posting-quality`
  - H1: `Payment Posting Quality: Research on Controls for Billing Support Teams`
  - Canonical: `https://outsourcedbillingservices.com/research/research-medical-billing-payment-posting-quality`
  - Sitemap inclusion: confirmed in `.next/server/app/sitemap.xml.body`
  - Main-content check: no `/services/payment-posting` link
- Reconciled on 2026-09-04 after the later data-owned release:
  - Source record `research-medical-billing-payment-posting-quality` now uses the existing `serviceCta` field for `/services/payment-posting`.
  - The built route-local main contains that destination once. This ledger records it as delivered and non-duplicable.
- Built destination route: `/services/payment-posting`
  - H1: `Payment Posting`
  - Canonical: `https://outsourcedbillingservices.com/services/payment-posting`
  - Sitemap inclusion: confirmed in `.next/server/app/sitemap.xml.body`

## Release boundary

Any future CTA must use the existing `researchPosts` `serviceCta` field instead of a route exception. The copy must describe workflow preparation and owner review. It must not imply that a Philippines-based support specialist approves refunds, transfers, reversals, financial adjustments, coding decisions, clinical decisions, payer-policy interpretation, or final release.
