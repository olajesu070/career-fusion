import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          <div className="footer-about">
            <Image
              src="/footerLogo.png"
              alt="Career Fusion"
              width={91}
              height={51}
              loading="eager"
            />
            <p className="footer-text">
              Bridging the gap between education, careers and opportunity
              through verified employability intelligence
            </p>
            <p className="social-label">Follow us</p>
            <div className="socials" aria-label="Social links">
              {/* X (Twitter) */}
              <Link href="#" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </Link>
              {/* Email */}
              <Link href="#" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.5 6.8h15v10.4h-15V6.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="m5.2 7.6 6.8 5.3 6.8-5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Platforms</h2>
            <nav className="footer-links" aria-label="Platform links">
              <Link href="#">Login</Link>
              <Link href="#">Sign-up</Link>
              <Link href="#">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h2 className="footer-heading">For Users</h2>
            <nav className="footer-links" aria-label="User links">
              <Link href="#">Students</Link>
              <Link href="#">Employers</Link>
              <Link href="#">Institutions</Link>
            </nav>
          </div>
        </div>

        <div
          className="footer-wordmark flex justify-center items-center py-8"
          aria-hidden="true"
        >
          <Image
            src="/footerText.png"
            alt="Career Fusion"
            width={1920}
            height={51}
            loading="eager"
            className="footer-text-logo w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
