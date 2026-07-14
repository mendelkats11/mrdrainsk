import Link from "next/link";
import { serviceAreas } from "@/lib/service-areas";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { PhoneIcon, MapPinIcon, ClockIcon, MailIcon } from "@/components/icons/UiIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface pb-28 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo className="h-20 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              Locally owned residential plumbing, serving Saskatoon and the
              surrounding communities since {site.foundedYear}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-xs uppercase tracking-wide text-text-muted">
              Site
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><Link className="text-text-muted hover:text-text" href="/">Home</Link></li>
              <li><Link className="text-text-muted hover:text-text" href="/services">Services</Link></li>
              <li><Link className="text-text-muted hover:text-text" href="/reviews">Reviews</Link></li>
              <li><Link className="text-text-muted hover:text-text" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <h2 className="font-mono text-xs uppercase tracking-wide text-text-muted">
              Service Areas
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    className="text-text-muted hover:text-text"
                    href={`/service-areas/${area.slug}`}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wide text-text-muted">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-3 text-sm text-text-muted">
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
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Mr. Drain Plumber. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-text">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-text">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
