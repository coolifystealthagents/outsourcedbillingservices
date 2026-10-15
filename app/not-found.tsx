import { Footer, Header } from './components';

export default function NotFound() {
  return <>
    <Header />
    <main>
      <section className="architecture-hero">
        <div className="container">
          <p className="eyebrow">Outsourced Billing Services</p>
          <h1>Page not found</h1>
          <p className="lead">The page may have moved, but the billing support resources and service directory are still available.</p>
          <div className="actions">
            <a className="btn primary" href="/services">Explore billing services</a>
            <a className="btn secondary" href="/">Return home</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
