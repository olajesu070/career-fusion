import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Career Fusion",
  description:
    "Get in touch with Career Fusion. Whether you're proving skills, hiring talent, or partnering - we're here.",
};

const contactMethods = [
  {
    type: "phone",
    label: "Phone Support",
    lines: ["+1 (800) 555-0198", "Mon-Fri, 9am - 5pm EST"],
  },
  {
    type: "location",
    label: "Headquarters",
    lines: ["123 Innovation Drive, Suite 400", "San Francisco, CA 94105"],
  },
  {
    type: "mail",
    label: "General Inquiries",
    lines: ["hello@careerfusion.com"],
    href: "mailto:hello@careerfusion.com",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.8 9 3.2c.8-.2 1.6.2 1.9 1l1 2.4c.3.7.1 1.4-.4 1.9l-1.2 1.1a12 12 0 0 0 4.2 4.2l1.1-1.2c.5-.5 1.2-.7 1.9-.4l2.4 1c.8.3 1.2 1.1 1 1.9l-.6 2.4c-.2.8-.9 1.4-1.7 1.4A15.5 15.5 0 0 1 5.2 5.5c0-.8.6-1.5 1.4-1.7Z" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6.6-5.8 6.6-11.2A6.6 6.6 0 0 0 5.4 9.8C5.4 15.2 12 21 12 21Z" />
        <circle cx="12" cy="9.8" r="2.1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.8 6.4h14.4v11.2H4.8V6.4Z" />
      <path d="m5.6 7.2 6.4 5 6.4-5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="home-page contact-page">
      <Navbar />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="page-container">
            <p className="contact-hero-eyebrow">Contact Us</p>
            <h1 className="contact-hero-title">
              Let&apos;s talk <span>readiness</span>
            </h1>
            <p className="contact-hero-subtitle">
              Whether you&apos;re looking to prove your skills, hire top talent,
              or partner with us, we&apos;re here to help you navigate the
              future of work.
            </p>
          </div>
        </section>

        <section className="contact-message-section">
          <div className="page-container contact-grid">
            <form className="contact-form" aria-label="Contact form">
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
                    placeholder="John"
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

              <button className="pill-button primary contact-submit" type="submit">
                Send Message <span aria-hidden="true">&rarr;</span>
              </button>
            </form>

            <aside className="contact-sidebar-card">
              <h2 className="contact-sidebar-title">Other ways to reach us</h2>

              <div className="contact-info-list">
                {contactMethods.map((method) => (
                  <div className="contact-info-item" key={method.label}>
                    <span className="contact-info-icon">
                      <ContactIcon type={method.type} />
                    </span>
                    <div>
                      <p className="contact-info-label">{method.label}</p>
                      <p className="contact-info-value">
                        {method.href ? (
                          <a href={method.href}>{method.lines[0]}</a>
                        ) : (
                          method.lines.map((line, index) => (
                            <span key={line}>
                              {line}
                              {index < method.lines.length - 1 ? <br /> : null}
                            </span>
                          ))
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social-actions">
                <button className="contact-action-btn" type="button" aria-label="Copy link">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.5 14.5 14.5 9.5" />
                    <path d="M8.7 10.6 7.4 12a4 4 0 0 0 5.7 5.7l1.3-1.3" />
                    <path d="M15.3 13.4 16.6 12a4 4 0 0 0-5.7-5.7L9.6 7.6" />
                  </svg>
                </button>
                <button className="contact-action-btn" type="button" aria-label="Share">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="18" cy="5" r="2.6" />
                    <circle cx="6" cy="12" r="2.6" />
                    <circle cx="18" cy="19" r="2.6" />
                    <path d="m8.3 10.8 7.4-4.4M8.3 13.2l7.4 4.4" />
                  </svg>
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-still-exploring">
          <div className="page-container">
            <div className="contact-cta-panel">
              <div className="contact-cta-content">
                <h2 className="interior-cta-title">Still exploring?</h2>
                <p className="interior-cta-text">
                  Discover how our employability readiness scores can transform
                  your hiring or learning outcomes.
                </p>
                <div className="interior-cta-buttons">
                  <a href="#" className="pill-button yellow">
                    Get Started <span aria-hidden="true">&rarr;</span>
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
