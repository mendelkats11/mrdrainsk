import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const stats = [
  { value: site.yearsInBusiness, suffix: "+", label: "Years in Saskatoon" },
  { value: site.serviceCities.length, suffix: "", label: "Communities Served" },
  { value: services.length, suffix: "", label: "Core Services" },
];

export function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 100} className="text-center">
          <p
            className="font-display text-4xl font-bold sm:text-5xl"
            style={{
              backgroundImage: "var(--gradient-brass)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <CountUp to={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-text-muted sm:text-sm">
            {stat.label}
          </p>
        </Reveal>
      ))}
      <Reveal delay={300} className="text-center">
        <p className="font-display text-4xl font-bold text-teal-bright sm:text-5xl">24/7</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-text-muted sm:text-sm">
          Emergency Response
        </p>
      </Reveal>
    </div>
  );
}
