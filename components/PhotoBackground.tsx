import Image from "next/image";

/**
 * Full-bleed jobsite photo with a dark scrim so headline text stays legible
 * against the site's charcoal-navy theme. Expects the src file to already
 * exist under public/photos.
 */
export function PhotoBackground({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/60 to-bg" />
    </div>
  );
}
