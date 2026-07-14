import Image from "next/image";
import Link from "next/link";

/**
 * Renders the Mr. Drain Plumber badge logo from public/brand/logo.png.
 * That file isn't checked into this build yet — drop the logo image there
 * (see project setup notes) and it will appear automatically; until then
 * this renders as a broken image with correct alt text.
 */
export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Mr. Drain Plumber — Home" className="inline-flex items-center">
      <Image
        src="/brand/logo.png"
        alt="Mr. Drain Plumber"
        width={220}
        height={190}
        priority
        className={className}
      />
    </Link>
  );
}
