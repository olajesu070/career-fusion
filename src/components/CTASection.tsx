import Image from "next/image";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="page-container">
        <div className="cta-panel">
          <svg
            className="cta-arch"
            viewBox="0 0 1200 375"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M720 0C806 35 914 165 1240 410L1200 410L1200 0Z" />
          </svg>

          <div className="cta-copy">
            <p className="cta-eyebrow">Ready To Get Started?</p>
            <h2 className="cta-title">
              Start building your career advantage today
            </h2>
            <p className="cta-text">
              Join thousands of students discovering the employability strengths
              in under 5 minutes
            </p>
            <div className="cta-buttons">
              <a href="#" className="pill-button yellow">
                Start Free Assessment <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" className="pill-button ghost">
                Learn More
              </a>
            </div>
            <div className="cta-proof">
              <span>No credit card required</span>
              <span>Takes less than 5 minutes</span>
              <span>10,000+ students trust us</span>
            </div>
          </div>

          <div className="cta-collage">
            <Image
              src="/Frame 110.png"
              alt="Career Fusion community"
              width={320}
              height={230}
              loading="eager"
              className="cta-collage-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
