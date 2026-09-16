import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";

export const metadata: Metadata = { title: "Contact Us | Outsourced Billing Support", description: "Book a free consultation to scope accountable outsourced billing support for your business.", alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true } };
const services = [
  ["Invoice preparation", "Prepare complete, review-ready invoices from approved terms, time, usage, or delivery records."],
  ["Payment posting", "Apply receipts consistently, reconcile remittances, and route unidentified payments for review."],
  ["Collections follow-up", "Run respectful follow-up cadences, document every contact, and escalate disputes to the right owner."],
  ["Exception management", "Maintain queues for credits, short pays, missing approvals, and account discrepancies with aging visibility."],
];
const reviewPriorities = [
  ["Review-ready queues", "Each invoice or exception should carry the source record, current status, and next owner."],
  ["Visible escalation", "Disputes, short pays, and missing approvals need documented triggers and response dates."],
  ["Controlled authority", "Your designated finance owner retains approval, credit, and payment-release decisions."],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Billing support with clear approval</p><h1>Turn billing backlogs into reliable cash flow.</h1><p className="tc-lead">Tell us where invoice preparation, payment posting, collections follow-up, or exception handling slows the team down. We’ll help scope a Filipino billing desk with explicit ownership and approval rules.</p><div className="tc-proof-row"><span>35+ industries</span><span>Exception management focus</span><span>Free consultation</span></div><a className="tc-text-link" href="#billing-support">Explore the billing plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Approval controls</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="billing-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where billing support fits</p><h2>Delegate the workflow, preserve payment authority.</h2></div><p>The best outsourced billing roles use clean source inputs, visible exception queues, and a designated owner who retains approval and release authority.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-testimonials"><div className="container"><p className="tc-kicker">Billing review priorities</p><h2>A billing desk that makes the queue visible.</h2><div className="tc-quote-grid">{reviewPriorities.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Controls turn activity into cash flow.</h2><p>We’ll map the operating conditions that help outsourced billing stay accurate, responsive, and easy to review.</p></div><ul><li>Billing sources and invoice decision rules</li><li>ERP, payment, CRM, and access boundaries</li><li>Approval owners and weekly review cadence</li><li>Dispute, credit, and short-pay escalation</li><li>Account notes and source-evidence requirements</li><li>Aging targets and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp" width="1400" height="1400" alt="Billing specialists reviewing an organized invoice and payment dashboard"/><div><p className="tc-kicker">Why structure matters</p><h2>Every billing action should leave a decision trail.</h2><p>We shape billing support around approved inputs, named owners, secure access, and unmistakable escalation points—so throughput grows without weakening financial control.</p><a href="#contactPageForm">Scope my billing desk →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better billing brief</p><h2>Build billing support your finance team can confidently review.</h2><p>Share your billing queue, systems, approval rules, and goals. We’ll help define the desk and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}
