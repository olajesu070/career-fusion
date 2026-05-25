import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Institutions - Career Fusion",
  description:
    "Know exactly how job-ready your student cohorts are. Take control of their employability outcomes.",
};

const truthItems = [
  {
    icon: "/outcome.png",
    alt: "Outcome timing icon",
    iconWidth: 20,
    iconHeight: 20,
    title: "Outcomes measured too late",
    text: "Relying on lagging indicators means interventions are impossible when they matter most.",
  },
  {
    icon: "/noRealTime.png",
    alt: "No real-time insight icon",
    iconWidth: 22,
    iconHeight: 20,
    title: "No real-time insight",
    text: "Without a live view of cohort readiness, identifying systemic skill gaps becomes guesswork.",
  },
  {
    icon: "/limited.png",
    alt: "Limited intervention icon",
    iconWidth: 20,
    iconHeight: 20,
    title: "Limited intervention",
    text: "Inability to precisely target support resources to the students who are falling behind.",
  },
];

const readinessRows = [
  { label: "86%+", width: "16%", color: "#006b49" },
  { label: "71-85", width: "36%", color: "#007a50" },
  { label: "56-70", width: "25%", color: "#61d9a0" },
  { label: "41-55", width: "16%", color: "#f4b400" },
  { label: "0-40", width: "11%", color: "#cf171d" },
];

const alertRows = [
  {
    icon: "/firstImage.png",
    iconWidth: 19,
    iconHeight: 16,
    text: "12 students below readiness threshold",
  },
  {
    icon: "/secondImage.png",
    iconWidth: 17,
    iconHeight: 17,
    text: "4 missing core skill: SQL",
  },
  {
    icon: "/thirdImage.png",
    iconWidth: 17,
    iconHeight: 10,
    text: "Communication scores trending -8% this term",
  },
];

const destinations = ["TechCorp", "FinancePlus", "HealthSystems"];

export default function InstitutionsPage() {
  return (
    <div className="home-page institution-page">
      <Navbar />
      <main className="home-main institution-main">
        <section className="institution-hero">
          <div className="page-container institution-hero-grid">
            <div className="institution-hero-copy">
              <h1 className="institution-hero-title">
                Your students
                <br />
                deserve <span>better</span>
                <br />
                <span>outcomes</span>
              </h1>
              <p className="institution-hero-subtitle">
                Know exactly how job-ready your cohort is and take control of
                their employability outcomes.
              </p>
              <div className="institution-hero-actions">
                <a className="pill-button primary" href="#">
                  Get Started <span aria-hidden="true">&rarr;</span>
                </a>
                <a className="pill-button secondary" href="#">
                  Get Early Access <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="institution-hero-visual">
              <Image
                src="/institutionHeroImage.png"
                alt="Students in a library seminar"
                fill
                priority
                sizes="(max-width: 1020px) 100vw, 600px"
                className="institution-hero-image"
              />
              <div className="institution-readiness-card">
                <div className="institution-card-head">
                  <strong>Cohort Readiness</strong>
                  <span>Class of 2027</span>
                </div>
                <div className="institution-hero-bars" aria-hidden="true">
                  <span className="bar-one" />
                  <span className="bar-two" />
                  <span className="bar-three" />
                  <span className="bar-four" />
                  <span className="bar-five" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="institution-truth-section">
          <div className="page-container">
            <p className="institution-eyebrow">The Institutional Truth</p>
            <h2 className="institution-section-title">
              You measure what you can&apos;t
              <br />
              change
            </h2>

            <div className="institution-truth-grid">
              <div className="institution-truth-visual">
                <Image
                  src="/institutionalTruthImage.png"
                  alt="Institution team reviewing graduate outcomes"
                  fill
                  sizes="(max-width: 1020px) 100vw, 560px"
                  className="institution-truth-image"
                />
                <div className="institution-note-bubble">
                  We hear about graduate outcomes too late.
                  <br />
                  Always after.
                </div>
                <div className="institution-dark-bubble">
                  By then there&apos;s nothing we can change.
                </div>
              </div>

              <div className="institution-problem-list">
                {truthItems.map((item) => (
                  <article
                    className="institution-problem-item"
                    key={item.title}
                  >
                    <span
                      className="institution-problem-icon"
                      aria-hidden="true"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={item.iconWidth}
                        height={item.iconHeight}
                        className="institution-problem-icon-image"
                      />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="institution-solution-section">
          <div className="institution-solution-arc" aria-hidden="true">
            <Image
              src="/yellowArc.png"
              alt=""
              width={1205}
              height={1402}
              className="institution-solution-arc-image"
              loading="eager"
            />
          </div>
          <div className="page-container">
            <p className="institution-eyebrow">The Solution</p>
            <h2 className="institution-solution-title">
              See readiness. <span>Shape outcomes.</span>
            </h2>
            <p className="institution-solution-copy">
              Live cohort readiness, early signal detection, and outcome
              reporting &mdash; all in one institutional view.
            </p>

            <div className="institution-solution-cards">
              <article className="institution-product-card readiness-distribution-card">
                <div className="institution-product-head">
                  <h3>Cohort Readiness Distribution</h3>
                  <span>
                    248
                    <br />
                    students
                  </span>
                </div>
                <div className="readiness-distribution-list">
                  {readinessRows.map((row) => (
                    <div className="readiness-row" key={row.label}>
                      <span>{row.label}</span>
                      <div>
                        <i
                          style={{ width: row.width, background: row.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="institution-product-card gap-alert-card">
                <div className="institution-product-head">
                  <h3>Gap Alerts</h3>
                  <b aria-hidden="true" />
                </div>
                <div className="gap-alert-list">
                  {alertRows.map((alert) => (
                    <div className="gap-alert-row" key={alert.text}>
                      <span className="alert-icon">
                        <Image
                          src={alert.icon}
                          alt=""
                          width={alert.iconWidth}
                          height={alert.iconHeight}
                        />
                      </span>
                      <p>{alert.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="institution-product-card cohort-outcomes-card">
                <h3>Cohort Outcomes</h3>
                <div className="cohort-outcome-stats">
                  <div>
                    <strong>87%</strong>
                    <span>Placement rate</span>
                  </div>
                  <div>
                    <strong>74</strong>
                    <span>Avg readiness at grad</span>
                  </div>
                </div>
                <div className="cohort-lift-pill">
                  <Image src="/cohort.png" alt="" width={14} height={8} />
                  +11% vs last cohort
                </div>
                <p className="destination-label">Top Destinations</p>
                <div className="destination-list">
                  {destinations.map((destination) => (
                    <span key={destination}>{destination}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="institution-cta interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">
                  Partner with CareerFusion
                </h2>
                <p className="interior-cta-text">
                  Shape outcomes. Don&apos;t just report them. Join the
                  forward-thinking institutions leading the change in graduate
                  employability.
                </p>
                <div className="interior-cta-buttons">
                  <a href="#" className="pill-button yellow">
                    Get Started <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="#" className="pill-button ghost">
                    Get Early Access <span aria-hidden="true">&rarr;</span>
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
