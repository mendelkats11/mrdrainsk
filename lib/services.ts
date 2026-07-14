export type ServiceIcon =
  | "drain"
  | "toilet"
  | "water-heater"
  | "sewer"
  | "leak"
  | "faucet"
  | "pipe"
  | "sump-pump"
  | "water-softener"
  | "emergency";

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIcon;
  flagship?: boolean;
  summary: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "drain-unclogging",
    name: "Drain Unclogging",
    icon: "drain",
    flagship: true,
    summary: "Slow or blocked kitchen, bathroom, and floor drains cleared fast.",
    description:
      "We clear slow and fully blocked drains in kitchens, bathrooms, and basement floor drains using hand augers, motorized snakes, and hydro-jetting for stubborn grease or root intrusion. Most calls are same-day. If a drain backs up more than once every few months, we'll also scope it with a camera so you're not paying to clear the same clog twice.",
  },
  {
    slug: "toilet-installation-repair",
    name: "Toilet Installation & Repair",
    icon: "toilet",
    flagship: true,
    summary: "Running toilets, weak flushes, wobbly bases, and new installs.",
    description:
      "From a toilet that runs all night to one that rocks on the floor or won't flush with any force, we repair the internal fill and flush mechanisms, replace worn wax rings and flange bolts, and re-set toilets that are leaking at the base. We also handle full replacements, including hauling away the old unit, for homeowners upgrading to a taller or low-flow model.",
  },
  {
    slug: "water-heater-replacement",
    name: "Water Heater Replacement",
    icon: "water-heater",
    flagship: true,
    summary: "Tank and tankless installs, sized right for your household.",
    description:
      "When a tank starts leaking, rumbling, or simply can't keep up with your household anymore, we size and install a replacement — conventional tank or tankless — to code, with proper venting and a pressure relief line. We'll also tell you honestly if a repair will buy you another year or two instead of pushing a full replacement you don't need yet.",
  },
  {
    slug: "sewer-line-cleaning-repair",
    name: "Sewer Line Cleaning & Repair",
    icon: "sewer",
    summary: "Camera-verified sewer clearing and repair for older Saskatoon lines.",
    description:
      "Backups at the main line, gurgling drains, or sewage odor in the basement usually point to a blocked or damaged sewer lateral. We run a camera down the line first to find the actual problem — root intrusion, bellied pipe, or a collapsed section — before recommending a fix, so you're not guessing at what's under your yard.",
  },
  {
    slug: "leak-detection-repair",
    name: "Leak Detection & Repair",
    icon: "leak",
    summary: "Finding hidden leaks before they become drywall and flooring damage.",
    description:
      "A higher-than-usual water bill, a damp patch on a wall, or the sound of running water with everything off are all signs of a hidden leak. We use acoustic detection and moisture meters to pinpoint leaks inside walls, under slabs, and behind fixtures without tearing your home apart to find them, then repair the line at the source.",
  },
  {
    slug: "faucet-fixture-installation",
    name: "Faucet & Fixture Installation",
    icon: "faucet",
    summary: "Kitchen and bathroom faucets, sinks, and shower fixtures.",
    description:
      "Whether you're replacing a leaking kitchen faucet, upgrading a bathroom vanity, or installing a new shower valve, we handle the supply line hookups, shutoffs, and sealing so it's done right the first time. We work with fixtures you've already purchased or can advise on reliable brands that hold up to Saskatoon's hard water.",
  },
  {
    slug: "pipe-repair-repiping",
    name: "Pipe Repair & Repiping",
    icon: "pipe",
    summary: "Section repairs and whole-home repiping for aging plumbing.",
    description:
      "Older Saskatoon homes still running on original galvanized or early copper lines are prone to pinhole leaks, low pressure, and rust-colored water. We repair individual failed sections or, for homes where the whole system is at end of life, requip with PEX or copper to bring the plumbing up to current standards.",
  },
  {
    slug: "sump-pump-installation-repair",
    name: "Sump Pump Installation & Repair",
    icon: "sump-pump",
    summary: "Keeping spring meltwater and storm runoff out of your basement.",
    description:
      "Sump pumps take the brunt of spring runoff on the Prairies, and a pump that fails during a heavy melt means a flooded basement. We install new sump systems, replace tired pumps before they fail, and add battery backup so you're covered during a power outage — which is exactly when pumps tend to be needed most.",
  },
  {
    slug: "water-softener-filtration",
    name: "Water Softener & Filtration Installation",
    icon: "water-softener",
    flagship: true,
    summary: "Whole-home softeners and filtration systems, properly tied in.",
    description:
      "Hard water leaves scale on fixtures, shortens the life of your water heater, and dulls everything from dishes to hair. We size and install whole-home softeners and filtration systems, tie them into your existing supply line correctly, and set them up so maintenance is simple instead of a mystery.",
  },
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    icon: "emergency",
    flagship: true,
    summary: "24/7 response for burst pipes, major leaks, and no-water emergencies.",
    description:
      "Burst pipes, sewage backups, and total loss of water don't wait for business hours, and neither do we. Our emergency line is answered around the clock, and we prioritize getting a plumber on-site fast to stop active water damage first, then diagnose and repair the underlying cause once the immediate emergency is under control.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
