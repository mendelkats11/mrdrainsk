import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ResponseBadge } from "@/components/ResponseBadge";
import { PhoneIcon, StarIcon } from "@/components/icons/UiIcons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/photos/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-bg/80" />
      </div>

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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:py-6 lg:px-8">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-brass">
            Mr. Drain Plumber
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.6rem]">
            Fast, honest plumbing.
            <br />
            Done right the first time.
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
            Drain cleaning, water heaters, leak repairs, and emergency
            plumbing across Saskatoon and area. Upfront pricing, licensed
            plumbers, and service you can count on.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brass px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-bg shadow-lg shadow-brass/20">
              <span className="h-1.5 w-1.5 rounded-full bg-bg" />
              24/7 Emergency Service
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-bright px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-bg shadow-lg shadow-teal/20">
              <span className="h-1.5 w-1.5 rounded-full bg-bg" />
              Licensed &amp; Insured
            </span>
          </div>

          <div className="mt-5 flex max-w-sm items-center gap-4 rounded-xl border border-brass/30 bg-surface/95 p-4 shadow-xl backdrop-blur">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass text-bg">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                Call Us for Emergencies!
              </p>
              <a
                href={site.phoneHref}
                className="font-display text-xl font-semibold text-text hover:text-brass"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div
          id="quote-form"
          className="relative scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface p-4 sm:p-6 lg:p-5"
          style={{ boxShadow: "0 30px 80px -20px rgba(217,164,65,0.4)" }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-brass) 25%, var(--color-brass) 75%, transparent)",
            }}
          />
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-xl font-semibold text-text lg:text-lg">
              Get a Free Quote
            </h2>
            <ResponseBadge />
          </div>
          <p className="mt-1 text-sm text-text-muted">
            Fill out the form and we&apos;ll get back to you the same
            business day.
          </p>
          <div className="mt-3 lg:mt-3">
            <ContactForm source="Home Page" />
          </div>
        </div>
      </div>
    </section>
  );
}
