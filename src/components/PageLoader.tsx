"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleLoad = () => {
      if (fadeTimeout) clearTimeout(fadeTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
      setFade(true);
      hideTimeout = setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      fadeTimeout = setTimeout(handleLoad, 450);
    } else {
      window.addEventListener("load", handleLoad);
      fadeTimeout = setTimeout(handleLoad, 1400);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      if (fadeTimeout) clearTimeout(fadeTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`page-loader ${fade ? "page-loader--out" : ""}`}>
      <Image
        src="/svgNavLogo.svg"
        alt="Career Fusion"
        width={120}
        height={67}
        priority
        className="page-loader__logo"
      />
    </div>
  );
}
