import Link from "next/link";
import { PhotoCollage } from "@/components/PhotoCollage";
import { PhoneIcon, QuoteBoltIcon, ShieldCheckIcon, StarIcon } from "@/components/icons/UiIcons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(230,172,53,0.12), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 100%, rgba(52,195,184,0.08), transparent 55%)",
        }}
      />

      <div className="relative border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-xs text-text-muted sm:px-6 lg:px-8">
          <span>Proudly serving Saskatoon and all surrounding areas</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 text-brass" />
              ))}
            </span>
            <span className="font-semibold text-text">5.0</span> on Google
          </span>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:py-20 lg:px-8">
        <div>
          <p className="animate-hero-fade-up -mt-2 mb-3 font-display text-3xl font-black tracking-tight text-text sm:text-4xl lg:-mt-3 lg:mb-4">
            Mr. Drain Plumber
          </p>

          <p
            className="animate-hero-fade-up mt-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brass"
            style={{ animationDelay: "40ms" }}
          >
            <ShieldCheckIcon className="h-4 w-4 shrink-0" />
            Licensed &amp; Insured &middot; 24/7 Emergency Service
          </p>

          <h1
            className="animate-hero-fade-up mt-2 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: "80ms" }}
          >
            Fast, honest plumbing.
            <br />
            Done right the first time.
          </h1>

          <p
            className="animate-hero-fade-up mt-5 max-w-xl text-lg leading-relaxed text-text-muted"
            style={{ animationDelay: "160ms" }}
          >
            At Mr. Drain, we believe plumbing should be simple, honest, and
            stress free. Whether you need a clogged drain cleared, a water
            heater repaired, or an emergency plumber, you can count on
            friendly service, upfront pricing, and quality workmanship every
            time.
          </p>

          <div
            className="animate-hero-fade-up mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-bg shadow-xl transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "var(--gradient-brass)",
                boxShadow: "0 15px 40px -12px rgba(217,114,15,0.55)",
              }}
            >
              <QuoteBoltIcon className="h-5 w-5 animate-icon-flash" />
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full border-2 px-6 py-4 text-base font-semibold text-text transition-colors hover:text-brass"
              style={{ borderColor: "rgba(61,220,114,0.9)" }}
            >
              <span style={{ color: "var(--color-accent-green)" }}>
                <PhoneIcon className="h-4 w-4 animate-icon-flash" />
              </span>
              Call Now
            </a>
          </div>
        </div>

        <div className="animate-hero-fade-up lg:-mt-8" style={{ animationDelay: "120ms" }}>
          <PhotoCollage />
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll to learn more"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-muted transition-colors hover:text-brass sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
