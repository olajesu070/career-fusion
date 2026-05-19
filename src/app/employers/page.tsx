import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Employers — Career Fusion",
  description:
    "Hire job-ready candidates, not just CVs. Access pre-verified talent with proven readiness scores.",
};

const problems = [
  {
    icon: "!",
    variant: "red",
    title: "Too many applications.",
    text: "Hours lost screening profiles that don't match actual job requirements.",
  },
  {
    icon: "N",
    variant: "orange",
    title: "Too little signal.",
    text: "CVs and university grades simply don't reliably predict workplace readiness.",
  },
  {
    icon: "↑",
    variant: "orange",
    title: "Too much risk.",
    text: "Bad hires cost around 30%+ of an employee's annual salary.",
  },
];

const candidates = [
  { initials: "AO", name: "Amara O.",   role: "Software Engineer", match: "94%" },
  { initials: "SJ", name: "Sarah J.",   role: "Data Analyst",      match: "89%" },
  { initials: "BG", name: "Brian G.",   role: "UX Researcher",     match: "82%" },
];

export default function EmployersPage() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        {/* Hero */}
        <section className="interior-hero">
          <div className="page-container">
            <div className="interior-hero-grid">
              <div>
                <h1 className="interior-hero-title">
                  Hire{" "}
                  <span className="accent-yellow">job-ready<br />candidates</span>
                  , not<br />just CVs
                </h1>
                <p className="interior-hero-subtitle">
                  Stop wasting time screening. Hire based on performance, not paper.
                </p>
                <div className="hero-tags">
                  {["Pre-screened talent", "Submitted", "Better outcomes"].map((t) => (
                    <span key={t} className="hero-tag">{t}</span>
                  ))}
                </div>
                <div className="button-row" style={{ marginTop: 24 }}>
                  <a className="pill-button primary" href="#">Access Job-Ready Talent &rarr;</a>
                  <a className="pill-button secondary" href="#">How It Works &rarr;</a>
                </div>
              </div>

              <div className="interior-hero-visual">
                <div className="interior-hero-img-wrap">
                  <Image
                    src="/Frame 86 (2).png"
                    alt="Employer interviewing a candidate"
                    fill
                    priority
                    sizes="(max-width:1020px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="hero-avatar-stack">
                  <div className="avatar-pill">
                    <div className="avatar-circle green">AO</div>
                    <div className="avatar-pill-text">
                      <strong>Amara O.</strong>
                      <span>@94% match</span>
                    </div>
                  </div>
                  <div className="avatar-pill">
                    <div className="avatar-circle navy">SJ</div>
                    <div className="avatar-pill-text">
                      <strong>Sarah J.</strong>
                      <span>HR Analyst</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Cost of Guessing */}
        <section className="truth-section" style={{ paddingTop: 80 }}>
          <div className="page-container">
            <p className="eyebrow" style={{ textAlign: "center" }}>The Cost of Guessing</p>
            <h2 className="truth-title" style={{ textAlign: "center", marginBottom: 56 }}>
              CVs don&apos;t show performance.<br />Interviews don&apos;t scale.
            </h2>
            <div className="truth-grid">
              <div className="truth-image" style={{ position: "relative" }}>
                <Image
                  src="/Frame 86.png"
                  alt="Interview scenario"
                  fill
                  sizes="(max-width:1020px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <span className="reply-bubble" style={{ position: "absolute", bottom: 28, left: 24, margin: 0, fontSize: 11 }}>
                  &ldquo;I wish there was a score that told me who&apos;s actually ready…&rdquo;
                </span>
              </div>
              <div>
                <div className="problem-list">
                  {problems.map((p) => (
                    <div className="problem-item" key={p.title}>
                      <div className={`problem-icon ${p.variant}`}>{p.icon}</div>
                      <div>
                        <p className="problem-item-title">{p.title}</p>
                        <p className="problem-item-text">{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="solution-section">
          <div className="page-container">
            <p className="eyebrow yellow">The Solution</p>
            <h2 className="solution-title">
              Hire based on <span className="accent-green">what actually matters</span>
            </h2>
            <p className="solution-copy">
              Verified readiness. Performance-based hiring. Better outcomes.
            </p>

            <div className="solution-cards">
              {/* Verified Readiness */}
              <article className="product-card score-card">
                <div className="score-head">
                  <div>
                    <h3 className="card-title">Verified Readiness</h3>
                    <p className="card-subtitle">Pre-screened profile</p>
                  </div>
                  <span className="score-pill">Verified</span>
                </div>
                <div className="emp-card-profile">
                  <div className="emp-avatar">AO</div>
                  <div>
                    <p className="emp-name">Amara O.</p>
                    <p className="emp-role">Software Engineering Graduate</p>
                  </div>
                </div>
                <div className="skill-bars">
                  {[
                    { label: "Technical Skills",    value: "91%", width: "91%" },
                    { label: "Communication",       value: "84%", width: "84%" },
                    { label: "Problem Solving",     value: "88%", width: "88%" },
                  ].map((s) => (
                    <div className="skill-row" key={s.label}>
                      <span>{s.label}</span>
                      <span>{s.value}</span>
                      <div className="skill-meter">
                        <span style={{ width: s.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Performance Filtering */}
              <article className="product-card path">
                <h3 className="card-title">Performance Filtering</h3>
                <p className="card-subtitle">Location: Remote · Role: Software Eng.</p>
                <div className="emp-candidate-list" style={{ marginTop: 20 }}>
                  {candidates.map((c) => (
                    <div className="emp-candidate-row" key={c.name}>
                      <span>{c.name} · {c.role}</span>
                      <span className="emp-match-badge">{c.match}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Better Outcomes */}
              <article className="product-card jobs">
                <h3 className="card-title">Better Outcomes</h3>
                <p className="card-subtitle">Average across verified hires</p>
                <div className="emp-outcomes-stats">
                  <div>
                    <p className="emp-stat-big">12</p>
                    <p className="emp-stat-label">days to hire</p>
                  </div>
                  <div>
                    <p className="emp-stat-big">87%</p>
                    <p className="emp-stat-label">30-day retention</p>
                  </div>
                </div>
                <div className="progress-bar" style={{ marginTop: 16 }}>
                  <span style={{ width: "87%" }} />
                </div>
                <p className="emp-stat-label" style={{ marginTop: 8 }}>87% talent match rate</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">Access job-ready talent</h2>
                <p className="interior-cta-text">
                  Stop screening. Start hiring intelligently.
                </p>
                <div className="interior-cta-buttons">
                  <a href="#" className="pill-button yellow">Get Started &rarr;</a>
                  <a href="#" className="pill-button ghost">Get Early Access &rarr;</a>
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
