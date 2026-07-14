import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon, CheckCircleIcon, ClockIcon } from "@/components/icons/UiIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews | Mr. Drain Plumber",
  description: "Customer reviews for Mr. Drain Plumber are coming soon.",
};

export default function ReviewsPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-brass">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="m12 4 2.2 4.5 4.9.7-3.6 3.5.8 4.9L12 15.3l-4.3 2.3.8-4.9-3.6-3.5 4.9-.7L12 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl">
        Reviews are on their way
      </h1>
      <p className="mt-4 max-w-md text-text-muted">
        We&apos;re still building out this page with real feedback from real
        Saskatoon-area customers. We won&apos;t post anything here until
        it&apos;s genuine — so for now, this space is honestly empty.
      </p>

      <ul className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <li className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4">
          <ShieldCheckIcon className="h-5 w-5 text-brass" />
          <span className="text-xs text-text-muted">Licensed &amp; Insured</span>
        </li>
        <li className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4">
          <CheckCircleIcon className="h-5 w-5 text-brass" />
          <span className="text-xs text-text-muted">{site.yearsInBusiness} Years Local</span>
        </li>
        <li className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4">
          <ClockIcon className="h-5 w-5 text-brass" />
          <span className="text-xs text-text-muted">24/7 Emergency Line</span>
        </li>
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-lg bg-brass px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-brass-dim"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-teal hover:text-teal-bright"
        >
          Browse Services
        </Link>
      </div>
    </section>
  );
}
