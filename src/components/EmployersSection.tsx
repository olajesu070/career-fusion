"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = {
  students: {
    label: "Students",
    image: "/Frame 86 (2).png",
    imageWidth: 622,
    imageHeight: 452,
    alt: "Students using Career Fusion",
    title: "For Students",
    copy: "Track your employability score, build a verified portfolio, and get matched to opportunities you qualify for.",
    path: "Discover Your Readiness \u2192 Build Your Score \u2192 Unlock Opportunities",

    icon: "/gradCap.png",
  },
  employers: {
    label: "Employers",
    image: "/forEmployee.png",
    imageWidth: 608,
    imageHeight: 452,
    alt: "Employer reviewing Career Fusion candidates",
    title: "For Employers",
    copy: "Discover pre-screened talent by readiness band. No more CV noise, just verified, capable candidates",
    path: "Define Readiness → Filter by Performance → Hire With Confidence",
    icon: "/gradCase.png",
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
              width={active.imageWidth}
              height={active.imageHeight}
              loading="eager"
              sizes="(max-width: 1020px) 100vw, 620px"
            />
          </div>

          <article className="how-card">
            <span className="how-icon" aria-hidden="true">
              <Image
                src={active.icon}
                alt=""
                width={32}
                height={32}
                loading="eager"
              />
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
