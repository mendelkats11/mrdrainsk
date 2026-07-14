import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/site";

// Self-hosted (downloaded from Google Fonts, latin subset) instead of
// next/font/google, since that requires a live fetch to fonts.googleapis.com
// at build/dev time — not guaranteed in every environment this runs in.
const fraunces = localFont({
  src: "./fonts/fraunces-variable.woff2",
  weight: "500 700",
  style: "normal",
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = localFont({
  src: "./fonts/public-sans-variable.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr. Drain Plumber | Saskatoon Residential Plumbing",
  description:
    "Licensed residential plumbers serving Saskatoon, Brighton, Rosewood, Stonebridge, College Park, Martensville, and Warman. Drain cleaning, water heaters, sewer lines, frozen pipes, and 24/7 emergency service.",
  metadataBase: new URL("https://www.mrdrainplumber.example"),
  openGraph: {
    title: "Mr. Drain Plumber | Saskatoon Residential Plumbing",
    description:
      "Licensed, insured residential plumbers serving Saskatoon and area. Call " +
      site.phone +
      " or request a free quote.",
    siteName: site.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brass focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
