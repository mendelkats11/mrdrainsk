import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PhotoBackground } from "@/components/PhotoBackground";
import { PhoneIcon, QuoteBoltIcon, MapPinIcon } from "@/components/icons/UiIcons";
import { getServiceAreaBySlug, serviceAreas } from "@/lib/service-areas";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `Plumber in ${area.name} | Mr. Drain Plumber`,
    description: `Residential plumbing services in ${area.name}, ${area.region}. ${area.intro}`,
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface/40">
        <PhotoBackground src="/photos/areas-bg.jpg" alt="" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
            {area.region}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-text sm:text-5xl">
            Plumber in {area.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
            {area.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={area.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg bg-brass px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-brass-dim"
            >
              <PhoneIcon className="h-4 w-4" />
              Call <span className="font-mono">{area.phone}</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-surface/80 px-6 py-3.5 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-teal-bright hover:text-teal-bright"
            >
              <QuoteBoltIcon className="h-4 w-4" />
              Get My Free Quote
            </Link>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-text-muted">
            <MapPinIcon className="h-4 w-4 shrink-0 text-teal-bright" />
            {area.address}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-text">
            Plumbing in {area.name}
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">{area.detail}</p>
          <div className="mt-6 rounded-lg border border-border bg-surface px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              Housing stock note
            </p>
            <p className="mt-1 text-sm text-text">{area.homesNote}</p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-xl font-semibold text-text">
            Also serving nearby
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/service-areas/${other.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-teal hover:text-teal-bright"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Ready to book a ${area.name} plumber?`}
        subheading={`Call ${area.phone} or send us the details — we'll give you a real arrival window, not a vague afternoon.`}
        phone={area.phone}
        phoneHref={area.phoneHref}
      />
    </>
  );
}
