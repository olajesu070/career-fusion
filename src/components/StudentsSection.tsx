import Image from "next/image";

const pathItems = [
  { label: "Complete SQL assessment", done: true },
  { label: "Add 2 portfolio projects", done: true },
  { label: "Communication module", done: true },
  { label: "Mock interview — Software", done: false },
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

export default function StudentsSection() {
  return (
    <>
      <section className="truth-section">
        <div className="page-container">
          <div className="truth-grid">
            <div>
              <p className="eyebrow">The Student Truth</p>
              <h2 className="truth-title">
                Most students don&apos;t
                <br />
                know where they stand
              </h2>
              <div>
                <span className="mini-bubble">
                  Got another rejection today...
                </span>
              </div>
              <div>
                <span className="reply-bubble">
                  Same... I don&apos;t even know what I&apos;m missing.
                </span>
              </div>
            </div>
            <div className="truth-image">
              <Image
                src="/Frame 86.png"
                alt="Student unsure about readiness"
                fill
                loading="eager"
                sizes="(max-width: 1020px) 100vw, 576px"
              />
            </div>
          </div>

          <div className="truth-grid employer">
            <div className="truth-image">
              <Image
                src="/Frame 86 (1).png"
                alt="Employer struggling to screen candidates"
                fill
                loading="eager"
                sizes="(max-width: 1020px) 100vw, 576px"
              />
            </div>
            <div>
              <p className="eyebrow yellow">The Employer Truth</p>
              <h2 className="truth-title">
                Employers are
                <br />
                struggling to find
                <br />
                candidates...
              </h2>
              <div>
                <span className="employer-quote">
                  &quot;I wish there was a score that told me who&apos;s
                  actually ready...&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/yellowArc.png"
            alt=""
            width={1440}
            height={900}
            style={{
              position: "absolute",
              top: "450px",
              left: 0,
              width: "1440px",
              height: "auto",
            }}
          />
        </div>
        <div className="page-container">
          <p className="eyebrow yellow">The Solution</p>
          <h2 className="solution-title">
            A new way to <span className="accent">measure employability</span>
          </h2>
          <p className="solution-copy">
            CareerFusion gives you a clear path to improve, readiness score, and
            real opportunities based on your level. No more guessing. Just
            progress.
          </p>

          <div className="solution-cards">
            <article className="product-card path">
              <h3 className="card-title">Your Path to Improve</h3>
              <p className="card-subtitle">3 of 7 milestones complete</p>
              <div className="progress-bar">
                <span />
              </div>
              <ul className="check-list">
                {pathItems.map((item) => (
                  <li className={item.done ? "done" : ""} key={item.label}>
                    <span className={`check-dot ${item.done ? "done" : ""}`}>
                      {item.done ? "" : ""}
                    </span>
                    <span className="check-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>

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
              <a href="#" className="jobs-link">
                View all 23 opportunities &rarr;
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
