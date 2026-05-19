import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StudentsSection from "@/components/StudentsSection";
import EmployersSection from "@/components/EmployersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        <div className="yellow-ribbons" aria-hidden="true">
          <Image
            src="/yellowBg.png"
            alt=""
            width={1440}
            height={1553}
            className="yellow-ribbons-image"
          />
        </div>
        <HeroSection />
        <StudentsSection />
        <EmployersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
