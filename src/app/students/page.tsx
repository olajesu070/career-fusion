import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Students — Career Fusion",
  description:
    "Stop guessing. Start proving your employability with Career Fusion's readiness score, real plan, and job opportunities.",
};

const pathItems = [
  { label: "Complete SQA assessment", done: true },
  { label: "Add 2 portfolio projects", done: true },
  { label: "Communication module", done: true },
  { label: "Mock Interview — Software", done: false },
  { label: "Industry readiness module", done: false },
];

const skills = [
  { label: "Technical Skills", value: "78%", width: "78%" },
  { label: "Communication",   value: "54%", width: "54%" },
  { label: "Industry Knowledge", value: "51%", width: "51%" },
];

const jobs = [
  { letter: "T", title: "Frontend Developer",  meta: "TechCo · Remote",                score: "84%" },
  { letter: "D", title: "Data Analyst Intern", meta: "Brightline · Lagos · Hybrid",    score: "76%" },
  { letter: "U", title: "UX Research Asst.",   meta: "Mosaic · London · Remote",       score: "71%" },
];

export default function StudentsPage() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        {/* Hero */}
        <section className="interior-hero">
          <div className="page-container">
            <div className="interior-hero-grid">
              {/* Left copy */}
              <div>
                <h1 className="interior-hero-title">
                  Stop guessing.<br />
                  Start proving your<br />
                  <span className="accent-yellow">employability</span>
                </h1>
                <p className="interior-hero-subtitle">
                  Know exactly how job-ready you are and take control of your future.
                </p>
                <div className="button-row">
                  <a className="pill-button primary" href="#">
                    Start My Readiness Check &rarr;
                  </a>
                  <a className="pill-button secondary" href="#">
                    How It Works &rarr;
                  </a>
                </div>
              </div>

              {/* Right visual */}
              <div className="interior-hero-visual">
                <div className="interior-hero-img-wrap">
                  <Image
                    src="/Frame 86.png"
                    alt="Student proving employability"
                    fill
                    priority
                    sizes="(max-width:1020px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="hero-badge-card">
                  <span className="badge-dot" />
                  Sarah M. &nbsp;·&nbsp; Ready for Interview
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Truth */}
        <section className="truth-section" style={{ paddingTop: 80 }}>
          <div className="page-container">
            <div className="truth-grid">
              {/* Left image */}
              <div className="truth-image" style={{ position: "relative" }}>
                <Image
                  src="/Frame 86 (1).png"
                  alt="Frustrated student"
                  fill
                  sizes="(max-width:1020px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <span className="mini-bubble" style={{ position: "absolute", top: 20, left: 20 }}>
                  &ldquo;Another rejection. They didn&apos;t even say why.&rdquo;
                </span>
                <span className="reply-bubble" style={{ position: "absolute", bottom: 28, left: 32, margin: 0 }}>
                  &ldquo;I have the qualifications. So what am I missing?&rdquo;
                </span>
              </div>

              {/* Right copy */}
              <div>
                <p className="eyebrow yellow">The Student Truth</p>
                <h2 className="truth-title">
                  You&apos;ve done the work.<br />
                  So why does it still<br />
                  feel uncertain?
                </h2>
                <ul className="student-bullets">
                  <li className="student-bullet">You don&apos;t know if you&apos;re ready</li>
                  <li className="student-bullet">You don&apos;t know what you&apos;re missing</li>
                  <li className="student-bullet">You don&apos;t know why you&apos;re getting rejected</li>
                </ul>
                <p className="student-truth-punchline">And no one is telling you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="solution-section">
          <div className="page-container">
            <p className="eyebrow yellow">Solution</p>
            <h2 className="solution-title">
              <span className="accent-green">CareerFusion</span> changes that
            </h2>
            <p className="solution-copy">
              We offer you: A clear answer. A real plan. Real opportunities.
            </p>

            <div className="solution-cards">
              {/* Readiness Score card */}
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
                  {skills.map((s) => (
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

              {/* Path to Improve */}
              <article className="product-card path">
                <h3 className="card-title">Your Path to Improve</h3>
                <p className="card-subtitle">3 of 7 milestones complete</p>
                <div className="progress-bar"><span /></div>
                <ul className="check-list">
                  {pathItems.map((item) => (
                    <li key={item.label}>
                      <span className={`check-dot ${item.done ? "done" : ""}`} />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Opportunities */}
              <article className="product-card jobs">
                <div className="match-header">
                  <div>
                    <h3 className="card-title">Opportunities for you</h3>
                    <p className="card-subtitle">Based on your current score</p>
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
                <a href="#" className="jobs-link">View all 23 opportunities &rarr;</a>
              </article>
            </div>

            <div className="solution-quote">
              <strong>Your degree shows what you learned.</strong>
              Your readiness shows what you can do.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="interior-cta">
          <div className="page-container">
            <div className="interior-cta-panel">
              <div className="interior-cta-content">
                <h2 className="interior-cta-title">Start proving your readiness today</h2>
                <p className="interior-cta-text">
                  Join thousands of students discovering their employability strengths in under 5 minutes.
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
