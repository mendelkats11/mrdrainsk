import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsStrip } from "@/components/StatsStrip";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { serviceAreas } from "@/lib/service-areas";

const flagshipServices = services.filter((s) => s.flagship);

export default function Home() {
  return (
    <>
      <Hero />

      <section id="trust" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
        <TrustBadges />
      </section>

      <section className="relative overflow-hidden border-y border-border bg-surface/60">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 20% 0%, rgba(230,172,53,0.08), transparent 60%), radial-gradient(ellipse 800px 400px at 80% 100%, rgba(52,195,184,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <StatsStrip />
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
                What we handle
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-text">
                The calls we get most
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brass hover:text-brass-dim"
            >
              View all 10 services &rarr;
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3">
            {flagshipServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
              Real jobs, real work
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text">
              Our work around Saskatoon
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              No stock photos — this is what our trucks actually roll up to.
            </p>
          </Reveal>
          <div className="mt-10">
            <WorkGallery />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
              Where we work
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text">
              Saskatoon, and the communities around it
            </h2>
            <p className="mt-4 max-w-lg text-text-muted">
              We run dedicated routes covering Saskatoon proper along with
              Brighton, Rosewood, Stonebridge, and College Park, plus the
              satellite cities of Martensville and Warman to the north. Pick
              your community for local response times and details.
            </p>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-teal-bright"
            >
              View all service areas &rarr;
            </Link>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <div className="flex flex-wrap gap-2.5 rounded-xl border border-border bg-surface p-6 sm:p-8">
              {serviceAreas.map((area, i) => (
                <Reveal key={area.slug} delay={i * 60} className="inline-block">
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="rounded-full border border-teal/30 bg-bg px-4 py-2 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-brass/60 hover:text-brass hover:shadow-lg"
                  >
                    {area.name}
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
              Reputation
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text">
              Reviews are on their way
            </h2>
            <p className="mt-4 text-text-muted">
              We&apos;re a real local shop and we&apos;d rather show you honest
              reviews once we&apos;ve collected them than make any up. In the meantime, our
              licensing, insurance, and years of Saskatoon service are on the
              record — feel free to ask about references when you call.
            </p>
            <Link
              href="/reviews"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-brass-dim"
            >
              Visit the Reviews page &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
