import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, QuoteBoltIcon } from "@/components/icons/UiIcons";

export function CtaBand({
  heading = "Got a plumbing problem that can't wait?",
  subheading = `Call ${site.phone} or send us the details — most requests get a same-day response.`,
  phone = site.phone,
  phoneHref = site.phoneHref,
}: {
  heading?: string;
  subheading?: string;
  phone?: string;
  phoneHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(230,172,53,0.14), transparent 65%)",
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          {heading}
        </h2>
        <p className="max-w-xl text-text-muted">{subheading}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="flex items-center justify-center gap-2 rounded-lg bg-teal-bright px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-teal"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-lg bg-brass px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-brass-dim"
          >
            <QuoteBoltIcon className="h-4 w-4" />
            Get My Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
