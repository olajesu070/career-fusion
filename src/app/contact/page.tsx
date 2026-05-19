import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Career Fusion",
  description:
    "Get in touch with Career Fusion. Whether you're proving skills, hiring talent, or partnering — we're here.",
};

export default function ContactPage() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="contact-hero">
          <div className="page-container">
            <p className="contact-hero-eyebrow">Contact Us</p>
            <h1 className="contact-hero-title">
              Let&apos;s talk <span className="accent-green">readiness</span>
            </h1>
            <p className="contact-hero-subtitle">
              Whether you&apos;re looking to prove your skills, hire top talent,
              or partner with us, we&apos;re here to help you navigate the
              future of work.
            </p>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section>
          <div className="page-container contact-grid">
            {/* Left — form */}
            <div>
              <h2 className="contact-form-title">Send us a message</h2>

              <div className="form-row-two">
                <div className="form-group">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    className="form-input"
                    type="text"
                    placeholder="Jane"
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    className="form-input"
                    type="text"
                    placeholder="Doe"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="work-email">
                  Work Email
                </label>
                <input
                  id="work-email"
                  className="form-input"
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell us a bit about your needs..."
                />
              </div>

              <button className="pill-button primary" style={{ marginTop: 8 }}>
                Send Message &rarr;
              </button>
            </div>

            {/* Right — sidebar */}
            <aside className="contact-sidebar-card">
              <h3 className="contact-sidebar-title">Other ways to reach us</h3>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  {/* Phone icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Phone Support</p>
                  <p className="contact-info-value">
                    +1 (800) 555-0198<br />Mon–Fri, 9am – 5pm EST
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  {/* Location icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Headquarters</p>
                  <p className="contact-info-value">
                    123 Innovation Drive, Suite 400<br />San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  {/* Mail icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">General Inquiries</p>
                  <p className="contact-info-value">
                    <a href="mailto:hello@careerfusion.com">hello@careerfusion.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-social-actions">
                <button className="contact-action-btn" aria-label="Copy link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </button>
                <button className="contact-action-btn" aria-label="Share">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Still exploring CTA */}
        <section style={{ paddingBottom: 80 }}>
          <div className="page-container">
            <div className="contact-cta-panel">
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 className="interior-cta-title">Still exploring?</h2>
                <p className="interior-cta-text">
                  Discover how our employability readiness scores can transform
                  your hiring or learning outcomes.
                </p>
                <div className="interior-cta-buttons" style={{ marginTop: 24 }}>
                  <a href="#" className="pill-button yellow">
                    Get Started &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
