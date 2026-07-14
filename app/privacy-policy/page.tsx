import type { Metadata } from "next";
import { site } from "@/lib/site";

// PLACEHOLDER LEGAL COPY — have a lawyer licensed in Saskatchewan review
// this page before launch. This is generic boilerplate, not legal advice.

export const metadata: Metadata = {
  title: "Privacy Policy | Mr. Drain Plumber",
};

const sections = [
  {
    heading: "Information We Collect",
    body: `When you request a quote or contact us through this website, we collect the information you provide directly — name, phone number, service area, and any details about your plumbing issue. We do not collect this information through third-party trackers beyond standard, privacy-respecting website analytics.`,
  },
  {
    heading: "How We Use It",
    body: `We use the information you submit solely to respond to your request, schedule service, and provide you with a quote. We do not sell or rent your personal information to third parties.`,
  },
  {
    heading: "Data Retention",
    body: `We retain contact and job information for as long as reasonably necessary to provide service, maintain records for warranty purposes, and comply with applicable Saskatchewan business record-keeping requirements.`,
  },
  {
    heading: "Your Choices",
    body: `You can request that we delete the information you've provided by contacting us directly using the details below. We will honor reasonable requests except where we're required to retain records by law.`,
  },
  {
    heading: "Cookies & Analytics",
    body: `This website may use basic, privacy-respecting analytics to understand how visitors use the site. This data is aggregated and is not used to personally identify you.`,
  },
  {
    heading: "Contact",
    body: `Questions about this policy can be sent to ${site.email} or by calling ${site.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">
        Legal
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-text">
        Privacy Policy
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
