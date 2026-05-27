import Image from "next/image";

const ctaImages = [
  { src: "/cta5.png", className: "cta-tile-one" },
  { src: "/cta2.png", className: "cta-tile-two" },
  { src: "/cta4.png", className: "cta-tile-three" },
  { src: "/cta3.png", className: "cta-tile-four" },
  { src: "/cta7.png", className: "cta-tile-five" },
  { src: "/cta6.png", className: "cta-tile-six" },
  { src: "/cta1.png", className: "cta-tile-seven" },
  { src: "/cta2.png", className: "cta-tile-eight" },
] as const;

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="page-container">
        <div className="cta-panel">
          <div className="cta-arch" aria-hidden="true">
            <Image
              src="/Vector.png"
              alt=""
              fill
              sizes="640px"
              loading="eager"
              className="cta-arch-img"
            />
          </div>

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

          <div className="cta-collage" aria-hidden="true">
            <div className="cta-collage-stack">
              {ctaImages.map((image) => (
                <span
                  className={`cta-collage-card ${image.className}`}
                  key={image.src}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    loading="eager"
                    sizes="120px"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
