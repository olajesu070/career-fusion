"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = {
  students: {
    label: "Students",
    image: "/Frame 86 (2).png",
    alt: "Students using Career Fusion",
    title: "For Students",
    copy:
      "Track your employability score, build a verified portfolio, and get matched to opportunities you qualify for.",
    path: "Discover Your Readiness \u2192 Build Your Score \u2192 Unlock Opportunities",
  },
  employers: {
    label: "Employers",
    image: "/Frame 86 (1).png",
    alt: "Employer reviewing Career Fusion candidates",
    title: "For Employers",
    copy:
      "Source verified job-ready candidates, review readiness signals, and match talent to roles with confidence.",
    path: "Post Opportunities \u2192 Review Readiness \u2192 Hire Confidently",
  },
} as const;

type Audience = keyof typeof tabs;

export default function EmployersSection() {
  const [activeTab, setActiveTab] = useState<Audience>("students");
  const active = tabs[activeTab];

  return (
    <section className="how-section">
      <div className="page-container">
        <p className="eyebrow yellow">How It Works</p>
        <div className="tabs" role="tablist" aria-label="How it works audience">
          <button
            className={`tab ${activeTab === "students" ? "active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeTab === "students"}
            onClick={() => setActiveTab("students")}
          >
            Students
          </button>
          <span className="tabs-divider" aria-hidden="true" />
          <button
            className={`tab ${activeTab === "employers" ? "active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeTab === "employers"}
            onClick={() => setActiveTab("employers")}
          >
            Employers
          </button>
        </div>

        <div className={`how-content ${activeTab}`}>
          <div className="student-photo">
            <Image
              src={active.image}
              alt={active.alt}
              key={active.image}
              fill
              loading="eager"
              sizes="(max-width: 1020px) 100vw, 620px"
            />
          </div>

          <article className="how-card">
            <span className="how-icon" aria-hidden="true">
              {activeTab === "students" ? (
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="m3 7 7-3.5L17 7l-7 3.5L3 7Z" fill="currentColor" />
                  <path d="M6.2 9.2v3.1c0 1.2 1.7 2.2 3.8 2.2s3.8-1 3.8-2.2V9.2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16.2 7.4v4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M7 6.2V4.9c0-.8.6-1.4 1.4-1.4h3.2c.8 0 1.4.6 1.4 1.4v1.3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3.8 7h12.4v8.5H3.8V7Z" fill="currentColor" stroke="#fff" strokeWidth="1.4" />
                  <path d="M8.2 10.6h3.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <h2 className="how-title">{active.title}</h2>
            <p className="how-copy">{active.copy}</p>
            <p className="how-path">{active.path}</p>
            <a className="pill-button primary" href="#">
              Learn More <span aria-hidden="true">&rarr;</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
