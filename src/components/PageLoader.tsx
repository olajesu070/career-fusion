"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFade(true);
      const timeout = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timeout);
    };

    if (document.readyState === "complete") {
      const timeout = setTimeout(handleLoad, 800);
      return () => clearTimeout(timeout);
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`page-loader ${fade ? "page-loader--out" : ""}`}>
      <Image
        src="/logo.png"
        alt="Career Fusion"
        width={120}
        height={67}
        priority
        className="page-loader__logo"
      />
    </div>
  );
}
