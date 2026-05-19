"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/students", label: "Students" },
  { href: "/employers", label: "Employers" },
  { href: "/institutions", label: "Institutions" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="brand-logo">
          <Image src="/logo.png" alt="Career Fusion" width={91} height={51} priority />
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link href="#" className="login-link">Login</Link>
          <Link href="#" className="signup-link">Sign-up</Link>
        </div>
      </nav>
    </header>
  );
}
