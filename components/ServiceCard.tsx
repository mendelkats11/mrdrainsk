import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIconGraphic } from "@/components/icons/ServiceIcons";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      id={service.slug}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brass/60 hover:shadow-2xl hover:shadow-brass/10 scroll-mt-24"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
        <Image
          src={`/photos/services/${service.slug}.jpg`}
          alt={`${service.name} — Mr. Drain Plumber`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
        <div className="absolute bottom-3 left-3 h-11 w-11 rounded-lg bg-teal-bright shadow-lg transition-opacity duration-300 group-hover:opacity-0" />
        <div
          className="absolute bottom-3 left-3 h-11 w-11 rounded-lg opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundImage: "var(--gradient-brass)" }}
        />
        <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg text-bg transition-transform duration-300 group-hover:scale-110">
          <ServiceIconGraphic icon={service.icon} className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="font-display text-lg font-semibold text-text">{service.name}</h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {detailed ? service.description : service.summary}
        </p>
      </div>
    </Link>
  );
}
