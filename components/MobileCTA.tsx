import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, QuoteBoltIcon } from "@/components/icons/UiIcons";

export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-surface/95 px-3 pt-3 backdrop-blur supports-[backdrop-filter]:bg-surface/90 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
    >
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-bg py-3.5 text-sm font-semibold text-text active:scale-[0.98]"
      >
        <PhoneIcon className="h-5 w-5 text-teal-bright" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brass py-3.5 text-sm font-semibold text-bg active:scale-[0.98]"
      >
        <QuoteBoltIcon className="h-5 w-5" />
        Get Free Quote
      </Link>
    </div>
  );
}
