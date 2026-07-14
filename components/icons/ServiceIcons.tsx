import type { ServiceIcon } from "@/lib/services";

type IconProps = { className?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function DrainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6.2V9M12 15v2.8M6.2 12H9M15 12h2.8M8 8l1.8 1.8M16 16l-1.8-1.8M16 8l-1.8 1.8M8 16l1.8-1.8" />
    </svg>
  );
}

function ToiletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M7 10V6.5A2.5 2.5 0 0 1 9.5 4h4A2.5 2.5 0 0 1 16 6.5V9" />
      <rect x="5.5" y="9.5" width="12" height="4" rx="1" />
      <path d="M6.5 13.5v1.2C6.5 17.8 8.9 20 12 20s5.5-2.2 5.5-5.3v-1.2" />
      <path d="M17.5 11h1.8a1 1 0 0 1 1 1v1.2a1 1 0 0 1-1 1H17" />
    </svg>
  );
}

function WaterHeaterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="7" y="3.5" width="10" height="17" rx="3" />
      <path d="M9.5 8h5M9.5 11.5h5M9.5 15h5" />
      <circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SewerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 5h4a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h8" />
      <circle cx="17" cy="16" r="4" />
      <path d="M15.3 14.3h3.4M15.3 16h3.4M15.3 17.7h3.4" />
    </svg>
  );
}

function LeakIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 3.5c2.8 3.6 5 6.9 5 9.6a5 5 0 0 1-10 0c0-2.7 2.2-6 5-9.6Z" />
      <path d="M9.7 13.5a2.4 2.4 0 0 0 2.4 2.3" />
    </svg>
  );
}

function FaucetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M6 7h4V4.5" />
      <path d="M6 4.5h6" />
      <path d="M10 7v2a2 2 0 0 0 2 2h4.5a2.5 2.5 0 0 1 0 5H15" />
      <path d="M15 16v1.2c0 1-.8 1.8-1.8 1.8h0" />
      <path d="M12.8 20.2c0-1 .8-1.9 1.8-1.9" />
    </svg>
  );
}

function PipeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h5" />
      <path d="M4 4.5v5M9 17v2.5M20 17v2.5" />
    </svg>
  );
}

function SumpPumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M5 11h14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6Z" />
      <path d="M5 11 8 4h8l3 7" />
      <path d="M12 8v4M9.8 10.2 12 12l2.2-1.8" />
    </svg>
  );
}

function WaterSoftenerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="6" y="4" width="7" height="15" rx="2.5" />
      <path d="M9.5 8h3M9.5 11h3M9.5 14h3" />
      <path d="M16 8.5c1.8 2.4 3 4.4 3 6a3 3 0 0 1-6 0c0-1.6 1.2-3.6 3-6Z" />
    </svg>
  );
}

function EmergencyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 7 9 13h3l-1 4 4-6h-3l1-4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons: Record<ServiceIcon, (props: IconProps) => React.JSX.Element> = {
  drain: DrainIcon,
  toilet: ToiletIcon,
  "water-heater": WaterHeaterIcon,
  sewer: SewerIcon,
  leak: LeakIcon,
  faucet: FaucetIcon,
  pipe: PipeIcon,
  "sump-pump": SumpPumpIcon,
  "water-softener": WaterSoftenerIcon,
  emergency: EmergencyIcon,
};

export function ServiceIconGraphic({
  icon,
  className = "h-7 w-7",
}: {
  icon: ServiceIcon;
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
