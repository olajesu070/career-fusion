import Image from "next/image";

const stats = [
  {
    value: "10K+",
    label: "Students",
    note: "Actively building their readiness profile",
  },
  {
    value: "50+",
    label: "Universities",
    note: "Using live cohort dashboard",
  },
  {
    value: "500+",
    label: "Employers",
    note: "Sourcing pre-screened talents",
  },
  {
    value: "89%",
    label: "Placement rate",
    note: "Among verified Gold-band graduates",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="yellow-ribbons" aria-hidden="true">
        <Image
          src="/yellowBg.png"
          alt=""
          width={1440}
          height={40}
          className="yellow-ribbons-image"
        />
      </div>
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Know Your
              <br />
              <span className="nowrap">Readiness. Get Hired</span>
              <br />
              <span className="accent">Faster</span>
            </h1>
            <p className="hero-subtitle">
              Stop guessing. Start proving your employability with real job
              opportunities
            </p>
            <div className="button-row">
              <a className="pill-button primary" href="#">
                Start My Readiness Check <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="pill-button secondary" href="#">
                Hire Job-Ready Talent <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Career readiness progress illustration"
          >
            <div className="hero-bubble top">
              <span className="bubble-icon sad" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="8.4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M6.8 8.1h.1M13.1 8.1h.1"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.7 13.3c1.9-1.7 4.7-1.7 6.6 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              I keep getting rejected and I don&apos;t know why
            </div>
            <div className="hero-bubble score">
              <span className="score-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3.4 13.2 7.3 9.3l3.2 3.2 5.8-5.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6.7h4.3V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Readiness Score updated: +12%
            </div>
            <div className="hero-bubble middle">
              Okay... this feels different.
            </div>
            <div className="hero-bubble dark">
              This is the progress we look for.
            </div>

            <div className="hero-student">
              <Image
                src="/heroStudentVector.svg"
                alt=""
                fill
                priority
                sizes="215px"
                className="hero-portrait-bg student-bg"
              />
              <Image
                src="/heroStudentForeground.png"
                alt=""
                fill
                priority
                sizes="215px"
                className="hero-person-image hero-student-image"
              />
            </div>
            <div className="hero-teacher-wrap">
              <Image
                src="/heroTeacherVector.svg"
                alt=""
                fill
                priority
                sizes="250px"
                className="hero-portrait-bg teacher-bg"
              />
              <div className="hero-teacher-inner">
                <Image
                  src="/heroTeacherForeground.png"
                  alt=""
                  fill
                  priority
                  sizes="250px"
                  className="hero-person-image hero-teacher-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-strip">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-note">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
