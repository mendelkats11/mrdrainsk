import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { PhotoBackground } from "@/components/PhotoBackground";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Plumbing Services | Mr. Drain Plumber",
  description:
    "Drain unclogging, water heater replacement, sewer line repair, water softener installation, and 24/7 emergency plumbing for Saskatoon and area homeowners.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface/40">
        <PhotoBackground src="/photos/services-bg.jpg" alt="" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
            Services
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-text sm:text-5xl">
            Everything under your roof, plumbing-wise
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Ten services cover the vast majority of residential calls we get
            in Saskatoon and area. If what you&apos;re dealing with
            isn&apos;t listed here, call anyway — chances are we&apos;ve
            handled it before.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>

      <CtaBand
        heading="Not sure which service you need?"
        subheading="Describe the problem when you call and we'll point you in the right direction — no charge for the conversation."
      />
    </>
  );
}
