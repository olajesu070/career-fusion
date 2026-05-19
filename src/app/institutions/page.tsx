import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Institutions — Career Fusion",
  description:
    "Know exactly how job-ready your student cohorts are. Take control of their employability outcomes.",
};

const problems = [
  {
    icon: "⏱",
    variant: "red",
    title: "Outcomes measured too late.",
    text: "Relying on lagging indicators makes it impossible to take timely corrective action.",
  },
  {
    icon: "◎",
    variant: "orange",
    title: "No real-time insight.",
    text: "Disconnected online learning and tracking systems can't give a continuous readiness view.",
  },
  {
    icon: "×",
    variant: "teal",
    title: "Limited intervention.",
    text: "Inability to effectively target support resources to the students who are falling behind.",
  },
];

const cohortBars = [
  { label: "Gold",   width: "72%", color: "#1a6e3f" },
  { label: "61-80",  width: "55%", color: "#009966" },
  { label: "41-60",  width: "40%", color: "#f7b900" },
  { label: "21-40",  width: "25%", color: "#e57c00" },
  { label: "0-20",   width: "10%", color: "#d63939" },
];

const gapAlerts = [
  { color: "#d63939", text: "12 students below readiness threshold" },
  { color: "#f7b900", text: "Emerging core skill: SQL" },
  { color: "#009966", text: "Communication skills are closing well; 16 to track" },
];

export default function InstitutionsPage() {
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
                  Your students deserve{" "}
                  <span className="accent-yellow">better<br />outcomes</span>
                </h1>
                <p className="interior-hero-subtitle">
                  Know exactly how job-ready your cohorts are and take control
                  of their employability outcomes.
                </p>
                <div className="button-row">
                  <a className="pill-button primary" href="#">Get Started &rarr;</a>
                  <a className="pill-button secondary" href="#">Get Early Access &rarr;</a>
                </div>
              </div>

              <div className="interior-hero-visual">
                <div className="interior-hero-img-wrap">
                  <Image
                    src="/Frame 86 (1).png"
                    alt="Students in a lecture setting"
                    fill
                    priority
                    sizes="(max-width:1020px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Cohort readiness mini-card */}
                <div className="cohort-hero-card">
                  <p className="cohort-hero-card-title">
                    <span>Cohort Readiness</span>
                    <span style={{ color: "var(--muted)" }}>Cohort 2027</span>
                  </p>
                  <div className="cohort-bars">
                    {cohortBars.slice(0, 4).map((b) => (
                      <div className="cohort-bar-row" key={b.label}>
                        <span>{b.label}</span>
                        <div style={{ background: "#e9efec", borderRadius: 999, height: 8, flex: 1 }}>
                          <div className="cohort-bar-fill" style={{ width: b.width, background: b.color, height: "100%", borderRadius: 999 }} />
                        </div>
                        <span>{b.width}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Institutional Truth */}
        <section className="truth-section" style={{ paddingTop: 80 }}>
          <div className="page-container">
            <p className="eyebrow" style={{ textAlign: "center" }}>The Institutional Truth</p>
            <h2 className="truth-title" style={{ textAlign: "center", marginBottom: 56 }}>
              You measure what you can&apos;t change
            </h2>
            <div className="truth-grid">
              <div className="truth-image" style={{ position: "relative" }}>
                <Image
                  src="/Frame 86 (2).png"
                  alt="Institution educator"
                  fill
                  sizes="(max-width:1020px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <span className="reply-bubble" style={{ position: "absolute", bottom: 28, left: 24, margin: 0, fontSize: 11, maxWidth: 280 }}>
                  &ldquo;By the time we find out about graduate outcomes, it&apos;s too late. By exception.&rdquo;
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
              See readiness.{" "}
              <span className="accent-green">Shape outcomes.</span>
            </h2>
            <p className="solution-copy">
              Live cohort readiness, early signal detection, and outcome
              reporting all in one institutional view.
            </p>

            <div className="solution-cards">
              {/* Cohort Readiness Distribution */}
              <article className="product-card path">
                <h3 className="card-title">Cohort Readiness Distribution</h3>
                <p className="card-subtitle">Cohort 2027 · 348 students</p>
                <div className="inst-bar-chart">
                  {cohortBars.map((b) => (
                    <div className="inst-bar-row" key={b.label}>
                      <span>{b.label}</span>
                      <div style={{ background: "#e9efec", borderRadius: 999, height: 10, flex: 1 }}>
                        <div className="inst-bar-fill" style={{ width: b.width, background: b.color }} />
                      </div>
                      <span>{b.width}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Gap Alerts */}
              <article className="product-card score-card">
                <div className="score-head">
                  <div>
                    <h3 className="card-title">Gap Alerts</h3>
                    <p className="card-subtitle">Live · Updated now</p>
                  </div>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#d63939", display: "inline-block", marginTop: 4 }} />
                </div>
                <div className="inst-alert-list">
                  {gapAlerts.map((a) => (
                    <div className="inst-alert-item" key={a.text}>
                      <span className="inst-alert-dot" style={{ background: a.color }} />
                      {a.text}
                    </div>
                  ))}
                </div>
              </article>

              {/* Cohort Outcomes */}
              <article className="product-card jobs">
                <h3 className="card-title">Cohort Outcomes</h3>
                <p className="card-subtitle">Across verified graduates</p>
                <div className="inst-outcomes-numbers">
                  <div>
                    <p className="inst-big-num">87%</p>
                    <p className="inst-num-label">Employment rate</p>
                  </div>
                  <div>
                    <p className="inst-big-num">74</p>
                    <p className="inst-num-label">Days avg. to employ</p>
                  </div>
                </div>
                <div className="progress-bar" style={{ marginTop: 8 }}>
                  <span style={{ width: "87%" }} />
                </div>
                <p className="inst-num-label" style={{ marginTop: 8 }}>87% graduate to employer match</p>
                <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
                  {["Tech Corp", "FinancePlus", "Nest Employers"].map((n) => (
                    <span key={n} className="hero-tag">{n}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">Partner with CareerFusion</h2>
                <p className="interior-cta-text">
                  Shape outcomes. Don&apos;t just report them. Join the
                  forward-thinking institutions leading the change in graduate
                  employability.
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
