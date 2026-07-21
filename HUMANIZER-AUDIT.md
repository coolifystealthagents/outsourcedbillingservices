# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the visitor-facing marketing and editorial copy across the homepage, shared site data, metadata, service template, billing guide index and detail template, contact flow, shared CTA and footer, and thank-you page.

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/layout.tsx`
- `app/components.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/globals.css` for an old brand identifier

## What changed

- Repaired a broken planning-guide title and replaced the repeated generic guide body with four billing-specific guides.
- Replaced broad offshore staffing language with clear Philippines-only language for Filipino billing talent.
- Removed dormant unsupported savings, pilot-length, and task-count figures.
- Replaced generic staffing scope with billing queues, approval lines, access limits, review steps, and owner decisions.
- Rewrote contact, CTA, footer, metadata, and confirmation copy so they describe the actual billing offer.
- Removed filler, robotic fragments, vague claims, and an old brand class name.
- Added a centered shared CTA container after visual QA found the guide CTA touching the viewport edge.
- Kept route slugs, citations, schema types, billing controls, and conversion paths intact.

## Final anti-AI pass

The first pass still had a generic article template, broad staffing phrases, an awkward guide title, and tidy but empty planning language. The final copy names the work: invoice prep, claims admin, portal checks, account notes, blocked items, refunds, write-offs, disputes, access, and review. Sentence rhythm is plain and direct. No first-person story, testimonial, performance claim, or statistic was invented.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their wording and legal meaning were not changed. Existing factual source links and billing decision boundaries were preserved.
