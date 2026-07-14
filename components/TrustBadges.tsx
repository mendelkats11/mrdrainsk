import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon, ClockIcon } from "@/components/icons/UiIcons";
import { site } from "@/lib/site";

const badges = [
  {
    icon: CheckCircleIcon,
    accent: "brass" as const,
    label: `${site.yearsInBusiness} Years in Saskatoon`,
    detail: `Locally owned since ${site.foundedYear}, not a franchise`,
  },
  {
    icon: ShieldCheckIcon,
    accent: "teal" as const,
    label: "Upfront Pricing",
    detail: "You approve the price before any work starts, no surprises",
  },
  {
    icon: ClockIcon,
    accent: "brass" as const,
    label: "Same-Day Response",
    detail: "Most calls get a plumber out the same day, not next week",
  },
  {
    icon: MapPinIcon,
    accent: "teal" as const,
    label: "7 Communities Covered",
    detail: "Saskatoon, Martensville, Warman, and area neighborhoods",
  },
];

export function TrustBadges() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {badges.map((badge) => (
        <li
          key={badge.label}
          className={`flex flex-col gap-3 rounded-xl border bg-surface p-4 sm:p-5 ${
            badge.accent === "brass" ? "border-brass/30" : "border-teal/40"
          }`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              badge.accent === "brass" ? "bg-brass text-bg" : "bg-teal-bright text-bg"
            }`}
          >
            <badge.icon className="h-[18px] w-[18px]" />
          </span>
          <p className="font-display text-sm font-semibold text-text sm:text-base">
            {badge.label}
          </p>
          <p className="text-xs leading-relaxed text-text-muted sm:text-sm">{badge.detail}</p>
        </li>
      ))}
    </ul>
  );
}
