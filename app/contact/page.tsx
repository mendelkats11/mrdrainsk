import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PhotoBackground } from "@/components/PhotoBackground";
import { NetlifyHiddenForm } from "@/components/NetlifyHiddenForm";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/icons/UiIcons";
import { serviceAreas } from "@/lib/service-areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Mr. Drain Plumber",
  description:
    "Request a free plumbing quote in Saskatoon, Brighton, Rosewood, Stonebridge, College Park, Martensville, or Warman.",
};

export default function ContactPage() {
  return (
    <>
      <NetlifyHiddenForm />
      <section className="relative overflow-hidden border-b border-border bg-surface/40">
        <PhotoBackground src="/photos/contact-bg.jpg" alt="" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
            Contact
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-text sm:text-5xl">
            Tell us what&apos;s going on
          </h1>
          <p className="mt-4 max-w-2xl text-text-muted">
            For anything urgent — active leaks, no water, sewage backup —
            call{" "}
            <a href={site.phoneHref} className="font-mono text-brass">
              {site.phone}
            </a>{" "}
            directly. For everything else, the form below gets you a
            same-day response.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-text">
                Direct contact
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  <a href={site.phoneHref} className="font-mono text-text hover:text-brass">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  <a href={site.emailHref} className="text-text hover:text-brass">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  <span>{site.addressLine}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-text">
                Serving your neighborhood
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Jump to your community for local details and response times.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="block rounded-md border border-border px-4 py-2.5 text-sm text-text transition-colors hover:border-brass/60 hover:text-brass"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
