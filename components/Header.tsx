"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { serviceAreas } from "@/lib/service-areas";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  QuoteBoltIcon,
} from "@/components/icons/UiIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const pathname = usePathname();

  // Reset transient nav UI when the route changes (derived during render,
  // per React's "adjusting state" pattern, to avoid an extra effect pass).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileAreasOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo className="h-14 w-auto sm:h-16" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}

          <div className="group relative">
            <Link
              href="/service-areas"
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/service-areas")
                  ? "text-brass"
                  : "text-text-muted hover:text-text"
              }`}
            >
              Service Areas
              <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-10 w-56 rounded-lg border border-border bg-surface p-2 shadow-xl group-hover:visible">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="block rounded-md px-3 py-2 text-sm text-text transition-colors hover:bg-bg hover:text-brass"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-teal hover:text-teal-bright"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md bg-brass px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-brass-dim"
          >
            <QuoteBoltIcon className="h-4 w-4" />
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-text lg:hidden"
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-bg px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-base font-medium text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMobileAreasOpen((v) => !v)}
            aria-expanded={mobileAreasOpen}
            className="mt-2 flex w-full items-center justify-between rounded-md px-2 py-3 text-base font-medium text-text"
          >
            Service Areas
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileAreasOpen && (
            <ul className="grid grid-cols-2 gap-1 pb-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="block rounded-md px-2 py-2 text-sm text-text"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active ? "text-brass" : "text-text-muted hover:text-text"
      }`}
    >
      {children}
    </Link>
  );
}
