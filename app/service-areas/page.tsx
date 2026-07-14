import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PhotoBackground } from "@/components/PhotoBackground";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Service Areas | Mr. Drain Plumber",
  description:
    "Mr. Drain Plumber serves Saskatoon, Brighton, Rosewood, Stonebridge, College Park, Martensville, and Warman.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface/40">
        <PhotoBackground src="/photos/areas-bg.jpg" alt="" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
            Service Areas
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-text sm:text-5xl">
            Saskatoon, and the communities around it
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Dedicated routes cover Saskatoon proper and the neighborhoods of
            Brighton, Rosewood, Stonebridge, and College Park, plus the
            satellite cities of Martensville and Warman to the north.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brass/60"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                {area.region}
              </p>
              <h2 className="font-display text-xl font-semibold text-text group-hover:text-brass">
                {area.name}
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">{area.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
