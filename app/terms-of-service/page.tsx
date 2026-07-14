import type { Metadata } from "next";
import { site } from "@/lib/site";

// PLACEHOLDER LEGAL COPY — have a lawyer licensed in Saskatchewan review
// this page before launch. This is generic boilerplate, not legal advice.

export const metadata: Metadata = {
  title: "Terms of Service | Mr. Drain Plumber",
};

const sections = [
  {
    heading: "Terms of Use",
    body: `By using this website, you agree to use it only for lawful purposes related to requesting information about, or scheduling, residential plumbing services from Mr. Drain Plumber.`,
  },
  {
    heading: "Service Estimates",
    body: `Quotes requested through this website are preliminary estimates based on the information you provide. Final pricing is confirmed on-site once a plumber has diagnosed the actual issue, since many plumbing problems can't be fully assessed remotely.`,
  },
  {
    heading: "Service Disclaimers",
    body: `Information on this website — including service descriptions and service-area content — is provided for general informational purposes and does not constitute a guarantee of availability, response time, or pricing in every circumstance.`,
  },
  {
    heading: "Limitation of Liability",
    body: `To the extent permitted by Saskatchewan law, Mr. Drain Plumber is not liable for indirect, incidental, or consequential damages arising from use of this website. This does not limit any liability related to services actually performed, which is governed by the separate service agreement provided at time of booking.`,
  },
  {
    heading: "Changes to These Terms",
    body: `We may update these terms from time to time. Continued use of this website after changes are posted constitutes acceptance of the updated terms.`,
  },
  {
    heading: "Contact",
    body: `Questions about these terms can be sent to ${site.email} or by calling ${site.phone}.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
        Legal
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-text">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-text-muted">
        Last updated: placeholder date. This is template content for
        development purposes and has not been reviewed by legal counsel —
        replace with reviewed copy before this site goes live.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-text">
              {section.heading}
            </h2>
            <p className="mt-2 leading-relaxed text-text-muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
