import type { Metadata } from "next";
import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./interior.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Career Fusion - Know Your Readiness, Get Hired",
  description:
    "Career Fusion connects students and employers. Prove your potential or hire top talent.",
  icons: {
    icon: "/svgNavLogo.svg",
    shortcut: "/svgNavLogo.svg",
    apple: "/icon.png",
  },
};

import PageLoader from "@/components/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
