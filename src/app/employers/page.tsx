import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Employers - Career Fusion",
  description:
    "Hire job-ready candidates, not just CVs. Access pre-verified talent with proven readiness scores.",
};

const costItems = [
  {
    icon: "/application.png",
    iconWidth: 18,
    iconHeight: 18,
    title: "Too many applications.",
    text: "Hours lost screening profiles that don't match actual job requirements.",
  },
  {
    icon: "/noSignal.png",
    iconWidth: 21,
    iconHeight: 20,
    title: "Too little signal.",
    text: "CVs and university grades simply don't reliably predict workplace readiness.",
  },
  {
    icon: "/risk.png",
    iconWidth: 20,
    iconHeight: 12,
    title: "Too much risk.",
    text: "Bad hires cost upward of 30%+ of an employee's annual salary.",
  },
];

const readinessBars = [
  { label: "Technical", value: "82%", width: "82%" },
  { label: "Communication", value: "74%", width: "74%" },
  { label: "Industry", value: "68%", width: "68%" },
];

const candidateRows = [
  {
    avatar: "/segunAvatar.png",
    avatarAlt: "Segun candidate avatar",
    name: "Sales Analyst",
    match: "81%",
  },
  {
    avatar: "/amaraAvatar.png",
    avatarAlt: "Amara candidate avatar",
    name: "Data Engineer",
    match: "79%",
  },
];

export default function EmployersPage() {
  return (
    <div className="home-page employer-page">
      <Navbar />
      <main className="home-main employer-main">
        <section className="employer-hero">
          <div className="page-container employer-hero-grid">
            <div className="employer-hero-copy">
              <h1 className="employer-hero-title">
                Hire <span>job-ready candidates</span>, not
                <br />
                just CVs
              </h1>
              <p className="employer-hero-subtitle">
                Stop wasting time screening. Hire based on performance, not
                paper.
              </p>
              <div className="employer-tags" aria-label="Employer benefits">
                <span>Pre-assessed talent</span>
                <span>Faster hiring</span>
                <span>Better outcomes</span>
              </div>
              <div className="employer-hero-actions">
                <a className="pill-button primary" href="#">
                  Access Job-Ready Talent <span aria-hidden="true">&rarr;</span>
                </a>
                <a className="pill-button secondary" href="#">
                  How it Works <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="employer-hero-visual">
              <Image
                src="/employeeHeroImage.jpg"
                alt="Employer interviewing a job-ready candidate"
                fill
                priority
                sizes="(max-width: 1020px) 100vw, 610px"
                className="employer-hero-image"
              />

              <div className="employer-match-card hero-match-card">
                <div className="match-initials">AO</div>
                <div>
                  <strong>Amara O.</strong>
                  <span className="match-status">84% Match</span>
                </div>
              </div>

              <div className="employer-match-card hero-profile-card">
                <Image
                  src="/serahJ.png"
                  alt="Sarah J. avatar"
                  width={48}
                  height={48}
                  className="hero-profile-avatar"
                />
                <div>
                  <strong>Sarah J.</strong>
                  <span>UX Designer</span>
                </div>
                <span className="small-match-badge">84% match</span>
              </div>
            </div>
          </div>
        </section>

        <section className="employer-cost-section">
          <div className="page-container">
            <p className="employer-eyebrow">The Cost of Guessing</p>
            <h2 className="employer-section-title">
              CVs don&apos;t show performance.
              <br />
              Interviews don&apos;t scale.
            </h2>

            <div className="employer-cost-grid">
              <div className="cv-image-card">
                <Image
                  src="/cvImage.png"
                  alt="Employer reviewing a CV"
                  fill
                  sizes="(max-width: 1020px) 100vw, 590px"
                  className="cv-image"
                />
                <div className="cv-quote">
                  &quot;I wish there was a score that told me who&apos;s
                  actually ready.&quot;
                </div>
              </div>

              <div className="employer-cost-list">
                {costItems.map((item) => (
                  <article className="employer-cost-item" key={item.title}>
                    <span className="cost-icon" aria-hidden="true">
                      <Image
                        src={item.icon}
                        alt=""
                        width={item.iconWidth}
                        height={item.iconHeight}
                        className="cost-icon-image"
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

        <section className="employer-solution-section">
          <div className="page-container">
            <p className="employer-eyebrow">The Solution</p>
            <h2 className="employer-solution-title">
              Hire based on <span>what actually</span>
              <br />
              <span>matters</span>
            </h2>
            <p className="employer-solution-copy">
              Verified readiness. Performance-based filtering. Better outcomes.
            </p>

            <div className="employer-solution-cards">
              <article className="employer-product-card verified-card">
                <div className="employer-card-head">
                  <h3>Verified Readiness</h3>
                  <span>Pre-assessed</span>
                </div>

                <div className="verified-profile">
                  <Image
                    src="/amaraAvatar.png"
                    alt="Amara candidate avatar"
                    width={40}
                    height={40}
                    className="verified-avatar"
                  />
                  <div>
                    <strong>Amara O.</strong>
                    <p>Software Engineer</p>
                  </div>
                </div>

                <div className="verified-bars">
                  {readinessBars.map((bar) => (
                    <div className="verified-bar-row" key={bar.label}>
                      <span>{bar.label}</span>
                      <span>{bar.value}</span>
                      <div>
                        <i style={{ width: bar.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="employer-product-card filtering-card">
                <h3>Performance Filtering</h3>

                <div className="filtering-panel">
                  <div className="filter-pills">
                    <span>Min score: 70%</span>
                    <span>Skills: SQL, Python</span>
                    <span>Location: Remote</span>
                  </div>
                  <p className="filter-showing">Showing 14 of 142 candidates</p>
                  <div className="candidate-list">
                    {candidateRows.map((candidate) => (
                      <div className="candidate-row" key={candidate.name}>
                        <span className="candidate-avatar">
                          <Image
                            src={candidate.avatar}
                            alt={candidate.avatarAlt}
                            width={34}
                            height={34}
                          />
                        </span>
                        <strong>{candidate.name}</strong>
                        <span>{candidate.match}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="employer-product-card outcomes-card">
                <h3>Better Outcomes</h3>
                <div className="outcome-panel">
                  <div className="outcome-stat">
                    <strong>12</strong>
                    <span>days</span>
                    <del>42 days</del>
                  </div>
                  <p>
                    Avg time-to-hire <span>Industry average</span>
                  </p>
                  <div className="outcome-progress-head">
                    <span>71% faster</span>
                    <b>+71%</b>
                  </div>
                  <div className="outcome-progress">
                    <i />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="employer-cta interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">Access job-ready talent</h2>
                <p className="interior-cta-text">
                  Stop screening. Start hiring ready.
                </p>
                <div className="interior-cta-buttons">
                  <a href="#" className="pill-button yellow">
                    Get Started <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="#" className="pill-button ghost">
                    Get Early Access
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
