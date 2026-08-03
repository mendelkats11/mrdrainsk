import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, QuoteBoltIcon } from "@/components/icons/UiIcons";

export function MobileCTA() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center gap-3 px-4 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <a
        href={site.phoneHref}
        className="pointer-events-auto flex flex-1 max-w-[190px] items-center justify-center gap-2 rounded-full border-2 bg-surface py-3 text-sm font-semibold text-text shadow-xl active:scale-95"
        style={{ borderColor: "var(--color-accent-green)" }}
      >
        <span style={{ color: "var(--color-accent-green)" }}>
          <PhoneIcon className="h-5 w-5" />
        </span>
        Call Now
      </a>
      <Link
        href="/contact"
        className="pointer-events-auto flex flex-1 max-w-[190px] items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-bg shadow-xl active:scale-95"
        style={{ backgroundImage: "var(--gradient-brass)" }}
      >
        <QuoteBoltIcon className="h-5 w-5 animate-icon-flash" />
        Free Quote
      </Link>
    </div>
  );
}
