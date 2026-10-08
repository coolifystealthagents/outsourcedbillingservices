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
| Customer billing support | `/services/customer-billing-support` | `/research/research-medical-billing-customer-billing-inbox` | How can a billing team route customer questions with the source record and a named owner? | Delivered locally: one route-local link in the verified built main content. | Preserve rendered-source commit `90e77af996432cdc3a0014e32092e9d8dfa9b2cc`; deployment and public verification remain unavailable under the repository routine policy. Do not add another CTA. |

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

## 2026-09-25 combined recovery batch (OUTAAAAAAAAAAAAA-86 + OUTAAAAAAAAAAAAA-85)

Exactly 12 new Blog guides and 5 new Research studies were prepared together from production base `9ca701e52bd323248953c4e135b9a4637d14a022`. The Blog topics extend invoice integrity, subscription and usage controls, cash application, reconciliation, credit linkage, data quality, revenue-schedule handoff, and close readiness. The Research studies test invoice-sequence integrity, delivery-failure layers, partial-payment lineage, interface schema drift, and unbilled-work completeness. Each route uses a relevant service CTA and the shared contact path.

- Publication date and timezone: `2026-09-25`, UTC.
- Blog manifest: `ops/daily-blog-2026-09-25-out86.json` (12 entries).
- Research manifest: `ops/daily-research-2026-09-25-out85.json` (5 entries).
- Combined release manifest: `ops/combined-release-2026-09-25-out86.json` (17 entries).
- Local evidence: typecheck passed, 7 test suites passed, production build passed with 652 static pages, and all 17 rendered routes passed canonical, structured-date, substantive-word, image, and sitemap checks.
- Release boundary: browser operator owns the single Coolify3 deployment for application `p134b2omci9euwptg3jkjygg`; the user owns article-by-article public-route verification. This ledger does not claim deployment or live verification.

## 2026-09-28 Research handoff (OUTAAAAAAAAAAAAA-87)

Five new Research studies were prepared from baseline `90e77af996432cdc3a0014e32092e9d8dfa9b2cc` for the combined release owned by Blog issue `OUTAAAAAAAAAAAAA-88`. Content commit `8c2a7f906564bde5d5727f0335853f8d71428b46` remains local on `content/out-87-research-20260928`; Research did not push or deploy.

| Topic | Prepared route | Conversion path | Substantive words |
| --- | --- | --- | ---: |
| Invoice delivery acknowledgment integrity | `/research/research-outsourced-billing-invoice-delivery-acknowledgment-integrity-2026` | `/services/invoice-preparation` | 1,423 |
| Subscription payment retry authorization state | `/research/research-outsourced-billing-subscription-retry-authorization-state-2026` | `/services/subscription-billing-support` | 1,410 |
| Usage event late-arrival cutoff cohort | `/research/research-outsourced-billing-usage-late-arrival-cutoff-cohort-2026` | `/services/usage-billing-administration` | 1,438 |
| Credit memo downstream propagation | `/research/research-outsourced-billing-credit-memo-downstream-propagation-2026` | `/services/credit-memo-administration` | 1,410 |
| Collections contact restriction lineage | `/research/research-outsourced-billing-collections-contact-restriction-lineage-2026` | `/services/collections-follow-up` | 1,428 |

Rendered body audit excludes shared navigation, CTA, source appendix, and layout. Maximum pairwise five-word-shingle Jaccard overlap is 39.97%. The manifest is `ops/daily-research-2026-09-28-out87.json`. Dates are release-intent metadata for the September 28 UTC combined cycle and must be reconciled by the Blog integrator if first publication crosses local midnight. No route is represented as live or publicly verified.

## 2026-10-02 Research handoff (OUTAAAAAAAAAAAAA-89)

Five new Research studies were prepared from production base `7e17e95875cdc45759abf589e0f4bc897bfd20af` for the combined release owned by Blog issue `OUTAAAAAAAAAAAAA-90`. Content commit `90e05f061d1a0e5668fc400e1b527f7edfc7e5e3` remains local on `content/out-89-research-20261002`; Research did not push or deploy.

| Topic | Prepared route | Conversion path | Substantive words |
| --- | --- | --- | ---: |
| Consolidated invoice entity allocation | `/research/research-outsourced-billing-consolidated-invoice-entity-allocation-2026` | `/services/invoice-preparation` | 1,549 |
| Invoice number collision control | `/research/research-outsourced-billing-invoice-number-collision-control-2026` | `/services/billing-data-quality-review` | 1,562 |
| Foreign exchange rate input lineage | `/research/research-outsourced-billing-foreign-exchange-rate-input-lineage-2026` | `/services/billing-reconciliation` | 1,527 |
| Billing hold release evidence | `/research/research-outsourced-billing-hold-release-evidence-2026` | `/services/customer-billing-support` | 1,541 |
| Chargeback receivable reinstatement lineage | `/research/research-outsourced-billing-chargeback-receivable-reinstatement-2026` | `/services/dispute-documentation` | 1,546 |

The rendered body audit excludes shared navigation, CTA, source appendix, and layout. Maximum pairwise five-word-shingle Jaccard overlap is 34.56%; no identical substantive paragraph appears across the five articles. The five studies use distinct units, populations, state models, tests, scenarios, owner decisions, and service paths. Manifest: `ops/daily-research-2026-10-02-out89.json`. October 2 is release-intent metadata and must be reconciled by the Blog integrator to actual first publication before the sole combined push if timing changes. No prepared route is represented as live or publicly verified.

## Reconciliation — 2026-10-05

The October 2 research batch is now present in the current generated route inventory. A fresh artifact check selected each source by its self-canonical URL, checked the matching existing service route and sitemap locations, and counted destination anchors only inside the source `<main>`. Each pair below has one matching route-local service link, so these are delivered paths rather than new CTA candidates.

| Research question | Existing service path | Route-local result | Follow-up |
| --- | --- | --- | --- |
| Can every charge on a consolidated invoice be traced to its intended entity? | `/services/invoice-preparation` | One matching link in the research `<main>`. | Keep delivered; do not add another CTA. |
| Can one released document be found from each invoice reference? | `/services/billing-data-quality-review` | One matching link in the research `<main>`. | Keep delivered; do not add another CTA. |
| Which exchange-rate input reached the invoice? | `/services/billing-reconciliation` | One matching link in the research `<main>`. | Keep delivered; do not add another CTA. |
| What evidence changed before a billing hold was released? | `/services/customer-billing-support` | One matching link in the research `<main>`. | Keep delivered; do not add another CTA. |
| Did a disputed payment return to the right balance? | `/services/dispute-documentation` | One matching link in the research `<main>`. | Keep delivered; do not add another CTA. |

This is a repository-local topical-map correction only. It does not change rendered copy, schema, route registration, sitemap data, deployment state, or public verification.

## Reconciliation — 2026-10-08

A fresh 705-page production build selected all 12 current service routes by self-canonical URL and parsed the sitemap structurally. Every service route is self-canonical and sitemap-listed. The selected supporting research records below each contain one matching service link inside their own rendered `<main>`, so none is a new CTA candidate.

| Service pillar | Existing destination | Delivered supporting research route | Reader question | Route-local result |
| --- | --- | --- | --- | --- |
| Invoice preparation | `/services/invoice-preparation` | `/research/research-outsourced-billing-consolidated-invoice-entity-allocation-2026` | Can every charge on a consolidated invoice be traced to its intended entity? | One matching link in `<main>`. |
| Usage billing administration | `/services/usage-billing-administration` | `/research/research-outsourced-billing-usage-late-arrival-cutoff-cohort-2026` | Which billing cycle should receive late usage evidence? | One matching link in `<main>`. |
| Subscription billing support | `/services/subscription-billing-support` | `/research/research-outsourced-billing-subscription-retry-authorization-state-2026` | Was each retry allowed by the current account state? | One matching link in `<main>`. |
| Billing reconciliation | `/services/billing-reconciliation` | `/research/research-outsourced-billing-foreign-exchange-rate-input-lineage-2026` | Which exchange-rate input reached the invoice? | One matching link in `<main>`. |
| Payment posting | `/services/payment-posting` | `/research/research-medical-billing-payment-posting-quality` | What controls keep prepared payment posting reviewable? | One matching link in `<main>`. |
| Credit memo administration | `/services/credit-memo-administration` | `/research/research-outsourced-billing-credit-memo-downstream-propagation-2026` | Did an approved change reach every dependent record? | One matching link in `<main>`. |
| Collections follow-up | `/services/collections-follow-up` | `/research/research-medical-billing-collections-follow-up` | How can approved follow-up preserve account facts and hand off exceptions? | One matching link in `<main>`. |
| Customer billing support | `/services/customer-billing-support` | `/research/research-outsourced-billing-hold-release-evidence-2026` | What evidence changed before a billing hold was released? | One matching link in `<main>`. |
| Revenue schedule preparation | `/services/revenue-schedule-preparation` | `/research/research-medical-billing-revenue-schedule-preparation` | What source checks should happen before period close? | One matching link in `<main>`. |
| Billing data quality review | `/services/billing-data-quality-review` | `/research/research-outsourced-billing-invoice-number-collision-control-2026` | Can one released document be found from each invoice reference? | One matching link in `<main>`. |
| Dispute documentation | `/services/dispute-documentation` | `/research/research-outsourced-billing-chargeback-receivable-reinstatement-2026` | Did a disputed payment return to the right balance? | One matching link in `<main>`. |
| Month-end billing support | `/services/month-end-billing-support` | `/research/research-outsourced-billing-month-end-cutoff-completeness-2026` | Does the close population explain its included, held, and excluded items? | One matching link in `<main>`. |

This source-only reconciliation records a complete current service-pillar inventory. Do not create another contextual CTA until a fresh artifact audit identifies a relevant source/destination pair with no existing route-local handoff.
