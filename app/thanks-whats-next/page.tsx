import type { Metadata } from "next";
import { Header, Footer } from "../components";

export const metadata: Metadata = {
  title: "Booking Confirmed | Outsourced Billing Services",
  description: "Your consultation booking is confirmed. Review what to prepare before the conversation.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  ["Check your inbox", "Keep the calendar confirmation handy so you have the meeting link and scheduled time."],
  ["Gather the billing context", "Bring the queues, systems, approval rules, and exception types that create the most friction."],
  ["Choose the right owner", "Invite the person who understands current billing decisions, access boundaries, and review expectations."],
];

export default function ThanksWhatsNextPage() {
  return <>
    <Header />
    <main className="sa-next-page">
      <section className="container sa-next-hero">
        <p className="sa-booking-kicker">Consultation booked</p>
        <span className="sa-next-check" aria-hidden="true">✓</span>
        <h1>Booking confirmed.</h1>
        <p className="sa-next-lead">Your meeting is on the calendar. Check your inbox for the confirmation and meeting details.</p>
      </section>
      <section className="container sa-next-steps" aria-labelledby="next-steps-title">
        <div className="sa-next-heading">
          <p className="sa-booking-kicker">Prepare for a useful conversation</p>
          <h2 id="next-steps-title">What happens next</h2>
          <p>A little context helps us spend the consultation on the billing work that matters most.</p>
        </div>
        <div className="sa-next-grid">
          {nextSteps.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="container sa-next-actions" aria-label="Continue exploring">
        <div><h2>Explore billing support before the meeting.</h2><p>Review the workflows that can be scoped with clear ownership and approval controls.</p></div>
        <div><a className="btn primary" href="/services">View billing services</a><a className="btn secondary" href="/">Return home</a></div>
      </section>
    </main>
    <Footer />
  </>;
}
