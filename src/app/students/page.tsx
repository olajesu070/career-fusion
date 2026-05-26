import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Students - Career Fusion",
  description:
    "Stop guessing. Start proving your employability with Career Fusion's readiness score, real plan, and job opportunities.",
};

const pathItems = [
  { label: "Complete SQL assessment", done: true },
  { label: "Add 2 portfolio projects", done: true },
  { label: "Communication module", done: true },
  { label: "Mock interview - Software", done: false },
  { label: "Industry readiness module", done: false },
];

const skills = [
  { label: "Technical Skills", value: "78%", width: "78%" },
  { label: "Communication", value: "54%", width: "54%" },
  { label: "Industry Knowledge", value: "51%", width: "51%" },
];

const jobs = [
  {
    letter: "T",
    title: "Frontend Developer",
    meta: "TechCo - Remote",
    score: "84%",
  },
  {
    letter: "B",
    title: "Data Analyst Intern",
    meta: "Brightline - Lagos - Hybrid",
    score: "76%",
  },
  {
    letter: "M",
    title: "UX Research Asst.",
    meta: "Mosaic - London - Remote",
    score: "71%",
  },
];

export default function StudentsPage() {
  return (
    <div className="home-page student-page">
      <Image
        src="/studentsYellowBg.png"
        alt=""
        width={1440}
        height={1416}
        priority
        className="student-yellow-bg"
        aria-hidden="true"
      />
      <Navbar />
      <main className="home-main student-main">
        <section className="student-hero interior-hero">
          <div className="page-container student-hero-container">
            <div className="student-hero-copy">
              <h1 className="interior-hero-title">
                Stop guessing.
                <br />
                Start proving your
                <br />
                <span className="accent-yellow">employability</span>
              </h1>
              <p className="interior-hero-subtitle">
                Know exactly how job-ready you are - and take control of your
                future
              </p>
              <div className="button-row">
                <a className="pill-button primary" href="#">
                  Start My Readiness Check{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a className="pill-button secondary" href="#">
                  How it Works <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="student-hero-reference">
              <Image
                src="/studentHeaderImage.png"
                alt="Student proving employability"
                fill
                priority
                sizes="(max-width: 1020px) 100vw, 607px"
              />

              <div className="hero-floating-card">
                <div className="floating-card-icon">
                  <div className="circle-progress">
                    <span className="progress-text">62%</span>
                    <svg viewBox="0 0 36 36">
                      <path
                        className="circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle-fill"
                        strokeDasharray="62, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </div>
                <div className="floating-card-text">
                  <p className="card-label">Current Readiness</p>
                  <p className="card-value">Ready for Interview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="student-truth-section truth-section">
          <div className="page-container">
            <div className="student-truth-panel">
              <Image
                src="/halfCircle.png"
                alt=""
                width={197}
                height={249}
                className="truth-half-circle"
                aria-hidden="true"
              />
              <div
                className="student-truth-reference"
                aria-label="Frustrated student"
              >
                <Image
                  src="/studentTruthImage.png"
                  alt=""
                  fill
                  className="truth-image"
                  sizes="(max-width: 1020px) 100vw, 523px"
                />
                <div className="truth-floating-bubble top-right">
                  &ldquo;Another rejection. They didn&apos;t even say why&rdquo;
                </div>
                <div className="truth-floating-bubble bottom-left">
                  &ldquo;I have the qualifications. So what am I missing?&rdquo;
                </div>
              </div>

              <div className="student-truth-copy">
                <p className="eyebrow yellow">The Student Truth</p>
                <h2 className="truth-title">
                  You&apos;ve done the work.
                  <br />
                  So why does it still
                  <br />
                  feel uncertain?
                </h2>
                <ul className="student-bullets">
                  <li className="student-bullet">
                    You don&apos;t know if you&apos;re ready
                  </li>
                  <li className="student-bullet">
                    You don&apos;t know what you&apos;re missing
                  </li>
                  <li className="student-bullet">
                    You don&apos;t know why you&apos;re getting rejected
                  </li>
                </ul>
                <p className="student-truth-punchline">
                  And no one is telling you
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="student-solution-section solution-section">
          <div className="page-container">
            <p className="eyebrow yellow">Solution</p>
            <h2 className="solution-title">
              <span className="accent-green">CareerFusion</span> changes that
            </h2>
            <p className="solution-copy">
              We offer you: A clear answer. A real plan. Real opportunities.
            </p>

            <div className="student-solution-cards-wrap">
              <div className="solution-cards">
                <article className="product-card score-card">
                  <div className="score-head">
                    <div>
                      <h3 className="card-title">Your Readiness Score</h3>
                      <p className="card-subtitle">Updated 2 days ago</p>
                    </div>
                    <span className="score-pill">+12% this month</span>
                  </div>
                  <div className="donut">
                    <div className="donut-center">
                      <div>
                        <strong>62%</strong>
                        <span>Readiness</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bars">
                    {skills.map((skill) => (
                      <div className="skill-row" key={skill.label}>
                        <span>{skill.label}</span>
                        <span>{skill.value}</span>
                        <div className="skill-meter">
                          <span style={{ width: skill.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="product-card path">
                  <h3 className="card-title">Your Path to Improve</h3>
                  <p className="card-subtitle">3 of 7 milestones complete</p>
                  <div className="progress-bar">
                    <span />
                  </div>
                  <ul className="check-list">
                    {pathItems.map((item) => (
                      <li className={item.done ? "done" : ""} key={item.label}>
                        <span
                          className={`check-dot ${item.done ? "done" : ""}`}
                        />
                        <span className="check-label">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="product-card jobs">
                  <div className="match-header">
                    <div>
                      <h3 className="card-title">Opportunities for you</h3>
                      <p className="card-subtitle">
                        Based on your current score
                      </p>
                    </div>
                    <span className="match-pill">23 matches</span>
                  </div>
                  <div className="job-list">
                    {jobs.map((job) => (
                      <div className="job-row" key={job.title}>
                        <span className="job-icon">{job.letter}</span>
                        <div>
                          <p className="job-title">{job.title}</p>
                          <p className="job-meta">{job.meta}</p>
                        </div>
                        <span className="job-score">{job.score}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="jobs-link">
                    View all 23 opportunities{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </article>
              </div>
            </div>

            <div className="solution-quote">
              <strong>Your degree shows what you learned.</strong>
              Your readiness shows what you can do
            </div>
          </div>
        </section>

        <section className="student-cta interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">
                  Start proving your readiness today
                </h2>
                <p className="interior-cta-text">
                  Join thousands of students discovering the employability
                  strengths in under 5 minutes
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
