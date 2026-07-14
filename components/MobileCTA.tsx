"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { PhoneIcon, QuoteBoltIcon } from "@/components/icons/UiIcons";

export function MobileCTA() {
  const pathname = usePathname();

  function handleQuoteClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // On the home page, "/#quote-form" is already the current URL after the
    // first click, so the hash never changes again and the browser won't
    // re-scroll on subsequent clicks. Scroll manually instead of relying on
    // hash navigation whenever we're already here.
    if (pathname === "/") {
      const target = document.getElementById("quote-form");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center gap-3 px-4 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <a
        href={site.phoneHref}
        className="pointer-events-auto flex flex-1 max-w-[190px] items-center justify-center gap-2 rounded-full border border-border bg-surface py-3.5 text-sm font-semibold text-text shadow-xl shadow-black/30 active:scale-95"
      >
        <PhoneIcon className="h-5 w-5 text-teal-bright" />
        Call Now
      </a>
      <Link
        href="/#quote-form"
        onClick={handleQuoteClick}
        className="pointer-events-auto flex flex-1 max-w-[190px] items-center justify-center gap-2 rounded-full bg-brass py-3.5 text-sm font-semibold text-bg shadow-xl shadow-brass/30 active:scale-95"
      >
        <QuoteBoltIcon className="h-5 w-5" />
        Free Quote
      </Link>
    </div>
  );
}
