from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, PngImagePlugin
import json, textwrap

ROOT=Path(__file__).resolve().parents[2]; DATE='2026-10-13'
blogs=[
('Reconcile Usage Cutoff Late Arrivals','usage-cutoff-late-arrival-reconciliation','late usage at a billing cutoff','event time, receipt time, approved cutoff, draft version, and carry-forward decision'),
('Verify a Customer Billing Address Change','customer-billing-address-change-verification','billing address changes','authenticated request, effective date, destination systems, and customer-visible confirmation'),
('Control a Partial Invoice Cancellation','partial-invoice-cancellation-control','partial invoice cancellation','released version, eligible lines, approval boundary, replacement document, and balance evidence'),
('Route Purchase Order Exhaustion Exceptions','purchase-order-exhaustion-exception-routing','purchase order exhaustion','approved ceiling, consumed amount, open drafts, exception owner, and release stop'),
('Track Credit Memo Delivery Evidence','credit-memo-delivery-evidence-tracking','credit memo delivery','approved credit version, delivery channel, receipt event, account state, and open dispute'),
('Reconcile Tax Exemption Certificate Expiry','tax-exemption-certificate-expiry-reconciliation','certificate expiry records','certificate reference, effective interval, affected accounts, owner interpretation, and billing hold'),
('Verify Metered Billing Unit Conversions','metered-billing-unit-conversion-verification','metered unit conversion','source quantity, source unit, approved factor, precision, draft quantity, and exception'),
('Control Consolidated Invoice Group Changes','consolidated-invoice-group-change-control','invoice group changes','account membership, approved hierarchy, effective cycle, draft population, and destination checks'),
('Route Refund Status Inquiry Handoffs','refund-status-inquiry-handoff','refund status inquiries','requester identity, approved refund reference, processor state, disclosure scope, and next owner'),
('Reconcile Payment Processor Fee Lines','payment-processor-fee-line-reconciliation','processor fee lines','settlement batch, gross amount, fee schedule, fee detail, net deposit, and ledger handoff'),
('Verify Billing Contact Consent Changes','billing-contact-consent-change-verification','billing contact consent','authenticated instruction, recipient role, approved channels, effective time, and suppression evidence'),
('Close Stale Draft Invoice Versions','stale-draft-invoice-version-closure','stale invoice drafts','draft lineage, current approved version, queued jobs, duplicate risk, and archive evidence'),
]
research=[
('Study Invoice Approval Queue Censoring','research-invoice-approval-queue-censoring','invoice approval queue censoring','eligible entries, resolved cases, withdrawals, paused time, and unresolved end-of-window cases'),
('Measure Billing Address Change Propagation','research-billing-address-change-propagation','billing address propagation','approved source change, dependent destinations, activation time, failure states, and verification'),
('Analyze Credit Memo Application Lag','research-credit-memo-application-lag','credit memo application lag','approval, release, delivery, account application, reversal, and censored observations'),
('Measure Reviewer Agreement on Usage Exceptions','research-usage-exception-reviewer-agreement','usage exception reviewer agreement','independent classifications, disagreement classes, evidence selection, and adjudication'),
('Review Billing Export Field Minimization','research-billing-export-field-minimization','billing export minimization','declared purpose, fields requested, fields used, recipient scope, retention, and exceptions'),
]
sources=[
{'name':'GAO Green Book','url':'https://www.gao.gov/green-book'},
{'name':'NIST Cybersecurity Framework 2.0','url':'https://www.nist.gov/cyberframework'},
{'name':'FTC Protecting Personal Information','url':'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business'},
{'name':'IRS Recordkeeping Guidance','url':'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping'},
{'name':'CISA Identity and Access Management','url':'https://www.cisa.gov/topics/cybersecurity-best-practices/identity-and-access-management'},
{'name':'National Archives Records Management','url':'https://www.archives.gov/records-mgmt'},
{'name':'Federal Reserve Financial Services','url':'https://www.frbservices.org/resources/financial-services'},
{'name':'CFPB Compliance Resources','url':'https://www.consumerfinance.gov/compliance/compliance-resources/'},
{'name':'SEC Books and Records Guidance','url':'https://www.sec.gov/about/divisions-offices/division-investment-management/books-records-requirements'},
{'name':'Federal Register Document Resources','url':'https://www.federalregister.gov/reader-aids/using-federalregister-gov'},
]

blog_controls=[
('purpose and authority','Define the single billing decision this queue supports and list actions reserved for commercial, finance, tax, accounting, privacy, security, or customer owners. The support specialist can prepare evidence but cannot use a balanced total or approaching cutoff as implied approval.'),
('intake identity','Assign one stable case key and verify the account, requester, affected document or transaction, period, currency, and approved channel. Preserve the original instruction and mark missing values unknown rather than filling gaps from a familiar customer pattern.'),
('source hierarchy','Name the controlling contract record, approved account setting, transaction source, processor evidence, or responsible-office instruction for each field. Keep retrieval time and version beside the value so a later correction does not erase what the preparer observed.'),
('version control','Separate source events, calculations, proposed drafts, approved versions, released documents, and destination responses. A new file name does not establish a new business version, while an identical amount does not prove two documents have the same lineage.'),
('queue states','Use received, evidence checked, waiting for owner, approved, executed, verified, conditionally closed, and closed as distinct states. Attach owners and timestamps to every transition. A sent message is not evidence that a portal, ledger, processor, or customer account changed.'),
('exception path','Classify missing source, identity mismatch, wrong period, stale evidence, duplicate candidate, unavailable approver, system outage, and scope change separately. Each exception needs a next owner, next-check time, permitted action, and explicit stop condition.'),
('calculation review','Retain inputs, units, direction, precision, rounding, rule version, and residual instead of storing only the answer. Reperform one calculation from the saved inputs and route ambiguity before release. Mathematical consistency cannot establish contractual or tax correctness.'),
('release control','Confirm the approved audience, destination identifier, exact version, and delivery method before execution. Prevent parallel operators and jobs from releasing the same item. Capture the destination response and reconcile retries, replacements, reversals, and notifications.'),
('privacy and access','Use named accounts, multifactor authentication, least privilege, controlled exports, and purpose-limited retention. Keep stable references in the queue and sensitive customer, payment, health, contract, or identity data inside approved systems.'),
('outage recovery','Issue temporary identifiers from a controlled sequence, restrict local storage, record actions and timestamps, and prohibit irreversible release unless an approved emergency rule permits it. Reconcile every temporary item to primary-system events after recovery.'),
('quality measurement','Report opening items, additions, transfers, approved completions, withdrawals, reopened work, and ending items. Show exception reasons and age bands beside throughput. Separate preparation time, owner waiting time, system delay, destination failure, and rework.'),
('completion standard','Close only when source, authority, calculation where relevant, exact released version, destination evidence, communication, and residual limitation can be reconstructed. Reopen after a material source, account, policy, system, schedule, or scope change.'),
]
research_controls=[
('research question','Define a narrow operational question without claiming that process evidence establishes legal compliance, accounting treatment, tax correctness, customer agreement, or future payment behavior.'),
('population and window','Freeze the eligible population, systems, period, time zone, and inclusion and exclusion rules before viewing results. Reconcile opening cases, additions, withdrawals, resolutions, and unresolved ending cases.'),
('unit of analysis','Choose whether a unit is an invoice, line, account, approval, source event, destination, or correction episode. Do not count linked events as independent successes and define how cross-period cases remain in the cohort.'),
('data dictionary','Record pseudonymous case key, source class, observed timestamp, eligibility, state, owner, pause reason, destination evidence, reviewer, and adjudication. Blank, unavailable, and confirmed negative values need separate codes.'),
('collection protocol','Collect on a fixed cadence, preserve source wording and versions, and separate scheduled observations from incident-triggered checks. Document deviations and never bypass access controls to improve apparent completeness.'),
('reviewer independence','Train reviewers outside the analytic sample and retain their first classifications before discussion. Separate disagreement about evidence, authority, calculation, and severity so adjudication adds information rather than erasing ambiguity.'),
('primary measures','Lock numerator, denominator, start and stop events, pause treatment, withdrawal handling, and censoring before calculation. Publish counts beside rates, medians beside ranges, and unresolved observations beside closed cases.'),
('quality controls','Check identifiers, timestamps, impossible sequences, duplicates, missing destinations, and edits after observation. Automated checks can identify inconsistencies, but an authorized reviewer must interpret billing meaning.'),
('sensitivity analysis','Repeat measures under reasonable alternate cutoffs, pause rules, and missing-evidence treatments. Exclude incident-triggered checks in a separate analysis and disclose when a few extreme cases drive the conclusion.'),
('privacy and security','Collect the minimum fields needed, restrict exports and identity crosswalks, log access, and define disposal dates before the study starts. Aggregate public results so customer or worker narratives cannot be reconstructed.'),
('limitations','Billing platforms can lag, unrecorded work may exist, and policy, system design, volume, customer mix, and owner availability can change together. Association cannot demonstrate intent or causation, and one window may not represent another.'),
('governance and stopping','Name the protocol owner, data custodian, operational owner, privacy or security reviewer, and remediation decision maker. Pause on unauthorized disclosure, action without approval, source corruption, or loss of the promised evidence boundary.'),
('operational interpretation','Translate results into recheck intervals, better evidence fields, clearer owner maps, and testable exception routes rather than provider or customer rankings. Verify corrective actions with fresh cases.'),
('reporting','Publish case flow, counts, denominators, exclusions, unresolved cases, observation coverage, deviations, sensitivity results, and limitations together, keeping every claim within the tested systems, population, period, and definitions.'),
]

def blog_item(title,slug,topic,evidence,i):
 body=[f'For {title}, checkpoint {i+1}.{n} covers {label}. {text} In this {topic} workflow, the reviewer specifically checks {evidence}, records the current evidence version, and leaves a bounded question whenever the item cannot advance.' for n,(label,text) in enumerate(blog_controls,1)]
 body += [f'Test {title} with one ordinary case, one incomplete case, one conflict, one duplicate candidate, one late change, and one destination rejection using masked or synthetic data. A second reviewer should reconstruct the source, authority, proposed action, and stop reason without relying on the preparer’s memory.',f'{title} produces a reproducible billing handoff, not permission to make a balance appear convenient. This guide is general operational information rather than legal, tax, accounting, security, privacy, or customer-remedy advice; qualified owners must adapt it to applicable systems, contracts, and jurisdictions.']
 return {'slug':slug,'title':title,'description':f'A source-led workflow for {topic}, preserving {evidence}.','published':DATE,'featuredImage':f'/oct13-heroes/{slug}.png','body':body,'sourcesList':sources[:4],'service':'billing-data-quality-review','serviceHref':'/services/billing-data-quality-review'}

def research_item(title,slug,topic,measure,i):
 body=[f'In {title}, protocol stage {i+1}.{n} defines {label}. {text} This stage specifically evaluates {measure} for {topic} and preserves the source reference, observer, exception state, and observation window required for independent reconstruction.' for n,(label,text) in enumerate(research_controls,1)]
 body += [f'For the {title} calibration exercise, two reviewers independently reconstruct a routine record, an exception, a withdrawn case, and an unresolved end-of-window case. They compare eligibility, timestamps, pause treatment, evidence selection, destination state, and classification before adjudication. The protocol owner records why each difference arose and revises only prospective instructions; the original judgments remain available so an apparently cleaner final dataset cannot conceal ambiguous rules.',f'The {title} release gate requires a reproducible case-flow table, locked denominator, source inventory, missing-evidence report, disagreement summary, sensitivity results, access review, retention decision, and owner-approved interpretation boundary. A reader should be able to distinguish observed events from calculated intervals and owner judgments. If that reconstruction fails, the study remains incomplete even when every row contains a status.',f'The protocol for {title} is complete only when its data, codebook, exclusions, denominator, censoring, unresolved cases, alternate calculations, and limitations can be reviewed together. Its value is disciplined uncertainty, not a universal claim about a customer, provider, staff member, or billing outcome.']
 return {'slug':slug,'title':title,'excerpt':f'A source-linked protocol for {topic}, evaluating {measure} with explicit governance and limitations.','published':DATE,'datePublished':DATE,'updated':DATE,'featuredImage':f'/oct13-heroes/{slug}.png','body':body,'sources':sources,'related':[f'/research/{research[(i+1)%5][1]}',f'/research/{research[(i+2)%5][1]}','/research'],'serviceCta':{'href':'/services/billing-data-quality-review','label':'Review billing data quality support','title':'Turn the evidence method into a bounded billing pilot','body':'Define population, sources, staff actions, stop rules, owner decisions, and verification before live volume expands.'}}

blog=[blog_item(*x,i) for i,x in enumerate(blogs)]; res=[research_item(*x,i) for i,x in enumerate(research)]
content='export const oct13BlogBatch='+json.dumps(blog,indent=2,ensure_ascii=False)+' as const;\n\nexport const oct13BlogSlugs=oct13BlogBatch.map(x=>x.slug);\n\nexport const oct13ResearchBatch='+json.dumps(res,indent=2,ensure_ascii=False)+' as const;\n'
(ROOT/'app/oct13-content.ts').write_text(content)

out=ROOT/'public/oct13-heroes'; out.mkdir(parents=True,exist_ok=True)
font_path='/System/Library/Fonts/Supplemental/Arial Bold.ttf'; small_path='/System/Library/Fonts/Supplemental/Arial.ttf'
for idx,item in enumerate(blog+res):
 im=Image.new('RGB',(1536,1024),('#102f46' if idx<12 else '#3d2148')); d=ImageDraw.Draw(im)
 accent=['#38bdf8','#34d399','#f472b6','#fbbf24','#a78bfa'][idx%5]
 d.ellipse((1120,-150,1700,430),fill=accent); d.ellipse((1100,650,1650,1200),fill='#553c9a')
 d.rounded_rectangle((80,75,1456,949),radius=38,fill='#100b28',outline=accent,width=5)
 d.rounded_rectangle((110,115,410,185),radius=35,fill=accent)
 family='RESEARCH' if idx>=12 else 'BLOG'; label=ImageFont.truetype(font_path,34); titlefont=ImageFont.truetype(font_path,67); foot=ImageFont.truetype(small_path,36)
 box=d.textbbox((0,0),family,font=label); d.text((260-(box[2]-box[0])/2,132),family,font=label,fill='#08111e')
 lines=textwrap.wrap(item['title'],30); y=310-(len(lines)-1)*42
 for line in lines: d.text((120,y),line,font=titlefont,fill='white'); y+=88
 d.text((120,855),'OutsourcedBillingServices.com',font=foot,fill='#e9d5ff')
 meta=PngImagePlugin.PngInfo(); meta.add_text('Title',item['title']); meta.add_text('Description',f'Outsourced Billing Services {family.lower()} thumbnail')
 im.save(out/f'{item["slug"]}.png',pnginfo=meta,optimize=True)

manifest={'domain':'OutsourcedBillingServices.com','canonicalDomain':'https://outsourcedbillingservices.com','repository':'coolifystealthagents/outsourcedbillingservices','branch':'main','baseSha':'2c080a4b909ccc4a69cc6e89a60fb6ccbeef67e7','publicationDate':DATE,'blog':[{'title':x['title'],'slug':x['slug'],'sourcePath':'app/oct13-content.ts','thumbnailPath':f'public/oct13-heroes/{x["slug"]}.png','route':f'/blog/{x["slug"]}'} for x in blog],'research':[{'title':x['title'],'slug':x['slug'],'sourcePath':'app/oct13-content.ts','thumbnailPath':f'public/oct13-heroes/{x["slug"]}.png','route':f'/research/{x["slug"]}'} for x in res],'registryPaths':['app/data.ts','app/blog/page.tsx','app/blog/[slug]/page.tsx'],'routePaths':['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx'],'indexPaths':['app/blog/page.tsx','app/blog/page/[page]/page.tsx','app/research/page.tsx'],'sitemapPath':'app/sitemap.xml/route.ts'}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('generated',len(blog),len(res),'and thumbnails')
