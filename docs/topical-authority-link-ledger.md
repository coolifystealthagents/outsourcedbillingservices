# Service-led topical authority link ledger

Status: source planning record. This file does not change rendered pages or claim a live handoff.

## Scope

Outsourced Billing Services serves teams that need Philippines-based billing support. The mapped service pages are existing routes. Each proposed source page already exists in the generated sitemap and has a distinct operational question.

## Verified delivery inventory

| Service pillar | Existing destination | Supporting source URL | Reader question | Route-local destination status | Next action |
| --- | --- | --- | --- | --- | --- |
| Payment posting | `/services/payment-posting` | `/research/research-medical-billing-remittance-review` | How can a team match remittance evidence to a claim before posting? | Delivered: one route-local link in the built main content. | Keep as delivered; do not add another CTA. |
| Payment posting | `/services/payment-posting` | `/research/research-medical-billing-payment-posting-quality` | What controls keep payment posting reviewable when a support team prepares the work? | Delivered: one route-local link in the built main content. | Keep as delivered; do not add another CTA. The existing handoff keeps refund, transfer, reversal, and release decisions with the authorized owner. |
| Invoice preparation | `/services/invoice-preparation` | `/research/research-medical-billing-invoice-preparation-controls` | What source checks should happen before an invoice draft reaches its release owner? | Delivered: one route-local link in the built main content. | Keep as delivered; do not add another CTA. The existing handoff keeps terms, credits, tax treatment, customer-facing changes, and release decisions with the authorized owner. |
| Subscription billing | `/services/subscription-billing-support` | `/research/research-medical-billing-subscription-billing-review` | How should a recurring-charge queue handle plan changes, pauses, and credits without assuming approval? | Delivered locally: one route-local link in the verified built main content. | Preserve rendered-source commit `efd1ac6cfa0a8c865161b544bf1ea73ca73724ed`; deployment and public verification remain unavailable under the repository routine policy. |
| Usage billing | `/services/usage-billing-administration` | `/research/research-medical-billing-usage-billing-reconciliation` | How can a team reconcile activity evidence with a draft usage charge? | Delivered locally: one route-local link in the verified built main content. | Preserve rendered-source commit `28df26082c67cc945dc40901ecced87589d635d2`; deployment and public verification remain unavailable under the repository routine policy. |
| Credit memo administration | `/services/credit-memo-administration` | `/research/research-medical-billing-credit-memo-governance` | What evidence and approval should be visible before a credit memo changes an account balance? | Delivered locally: one route-local link in the verified built main content. | Preserve rendered-source commit `de1262931343d2c5168c8658f69c657801134706`; deployment and public verification remain unavailable under the repository routine policy. |
| Collections follow-up | `/services/collections-follow-up` | `/research/research-medical-billing-collections-follow-up` | How can approved follow-up preserve account facts and hand off exceptions? | Delivered locally: one route-local link in the verified built main content. | Preserve rendered-source commit `d94ec962d2ac53f96bb473fe2453e9c564cd18c9`; deployment and public verification remain unavailable under the repository routine policy. |
| Customer billing support | `/services/customer-billing-support` | `/research/research-medical-billing-customer-billing-inbox` | How can a billing team route customer questions with the source record and a named owner? | Verified absent: no route-local service link in the built main content. | First bounded candidate. Use the existing `serviceCta` field; keep policy interpretation, concessions, refunds, payment commitments, and final customer responses with the authorized owner. |

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

## Release status — 2026-09-09

- Rendered source: `efd1ac6cfa0a8c865161b544bf1ea73ca73724ed` added the subscription-billing next step and preserved the route's 2026-08-07 publication date while setting its modified date to 2026-09-09.
- Local artifact proof: the research route has its expected H1, canonical, exactly one `/services/subscription-billing-support` link inside main, Article and Open Graph modified date `2026-09-09`, and a sitemap `<loc>`; the repository sitemap intentionally emits no `<lastmod>`.
- Deployment policy: `ops/recurring-routines.json` prohibits Coolify API/deploy, deployment monitoring, and live-site verification for its approved publishing routines. No deployment or public request was made.
- Preserve rendered-source commit `efd1ac6cfa0a8c865161b544bf1ea73ca73724ed`; this status-only record does not claim public rollout.

## Release status — 2026-09-11

- Rendered source: `28df26082c67cc945dc40901ecced87589d635d2` added the usage-billing next step and set this record's modified date to 2026-09-11.
- Local artifact proof: the research route has its expected H1 and canonical, exactly one `/services/usage-billing-administration` link inside main, Article and Open Graph modified date `2026-09-11`, and a sitemap `<loc>`; the repository sitemap intentionally emits no `<lastmod>`.
- Deployment policy: `ops/recurring-routines.json` prohibits Coolify API/deploy, deployment monitoring, and live-site verification for its approved publishing routines. No deployment or public request was made.
- Preserve rendered-source commit `28df26082c67cc945dc40901ecced87589d635d2`; this status-only record does not claim public rollout.

## Release status — 2026-09-12

- Rendered source: `de1262931343d2c5168c8658f69c657801134706` added the credit-memo administration next step and set this record's modified date to 2026-09-12.
- Local artifact proof: the research route has its expected H1 and canonical, exactly one `/services/credit-memo-administration` link inside main, Article and Open Graph modified date `2026-09-12`, and a sitemap `<loc>`; the repository sitemap intentionally emits no `<lastmod>`.
- Deployment policy: `ops/recurring-routines.json` prohibits Coolify API/deploy, deployment monitoring, and live-site verification for its approved publishing routines. No deployment or public request was made.
- Preserve rendered-source commit `de1262931343d2c5168c8658f69c657801134706`; this status-only record does not claim public rollout.

## Release status — 2026-09-15

- Rendered source: `d94ec962d2ac53f96bb473fe2453e9c564cd18c9` added the collections-follow-up next step and set this record's modified date to 2026-09-15.
- Local artifact proof: the research route has its expected H1 and canonical, exactly one `/services/collections-follow-up` link inside main, the visible `Prepare a controlled follow-up queue` marker, Article and Open Graph modified date `2026-09-15`, and a sitemap `<loc>`; the repository sitemap intentionally emits no `<lastmod>`.
- Deployment policy: `ops/recurring-routines.json` prohibits Coolify API/deploy, deployment monitoring, and live-site verification for its approved publishing routines. No deployment or public request was made.
- Preserve rendered-source commit `d94ec962d2ac53f96bb473fe2453e9c564cd18c9`; this status-only record does not claim public rollout.
## 2026-09-22 Research batch (OUTAAAAAAAAAAAAA-78)

| Topic | Research URL | Conversion path |
| --- | --- | --- |
| Credit memo approval evidence | `/research/research-outsourced-billing-credit-memo-approval-evidence-2026` | `/services/credit-memo-administration` |
| Month-end billing cutoff completeness | `/research/research-outsourced-billing-month-end-cutoff-completeness-2026` | `/services/month-end-billing-support` |
| Billing dispute evidence chain | `/research/research-outsourced-billing-dispute-evidence-chain-2026` | `/services/dispute-documentation` |
| Collections promise-to-pay authority | `/research/research-outsourced-billing-promise-to-pay-authority-2026` | `/services/collections-follow-up` |
| Billing reconciliation control total provenance | `/research/research-outsourced-billing-reconciliation-control-total-provenance-2026` | `/services/billing-reconciliation` |

## 2026-09-23 Blog batch (OUTAAAAAAAAAAAAA-80)

Deployment `uhxj2csddzfz3t6mlrrt7oxt` finished against production commit `2404345cfe6f9e90fe234fdd8c0f801df9b2f2f4`. All 12 routes were publicly verified at `2026-09-23T19:33:13Z`; each returned HTTP 200 with its unique H1, canonical URL, visible September 23 date, matching `datePublished`, BlogPosting schema, image, service/contact path, blog-index entry, and sitemap entry.

| Topic | Live URL | Conversion path |
| --- | --- | --- |
| Account onboarding control | `/blog/billing-account-onboarding-control` | `/services/invoice-preparation` |
| Customer master data changes | `/blog/customer-master-data-change-log` | `/services/billing-data-quality-review` |
| Invoice delivery confirmation | `/blog/invoice-delivery-confirmation-workflow` | `/services/invoice-preparation` |
| Unapplied cash research | `/blog/unapplied-cash-research-queue` | `/services/payment-posting` |
| Customer refund preparation | `/blog/customer-refund-preparation-packet` | `/services/credit-memo-administration` |
| Dunning suppression review | `/blog/dunning-suppression-review-register` | `/services/collections-follow-up` |
| Accounts receivable aging rollforward | `/blog/accounts-receivable-aging-rollforward` | `/services/billing-reconciliation` |
| Rate card change control | `/blog/billing-rate-card-change-control` | `/services/billing-data-quality-review` |
| Tax data handoff | `/blog/billing-tax-data-handoff-checklist` | `/services/invoice-preparation` |
| Billing contact change verification | `/blog/billing-contact-change-verification` | `/services/customer-billing-support` |
| Billing process offboarding | `/blog/billing-process-offboarding-checklist` | `/services` |
| KPI definition governance | `/blog/billing-kpi-definition-register` | `/services` |
