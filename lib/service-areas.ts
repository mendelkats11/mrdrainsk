export interface ServiceArea {
  slug: string;
  name: string;
  kind: "neighborhood" | "satellite-city";
  region: string;
  phone: string;
  phoneHref: string;
  address: string;
  intro: string;
  detail: string;
  homesNote: string;
}

// phone / phoneHref / address are independent placeholder values per area
// (not shared constants) so each one can be edited on its own without
// affecting the others — just replace the value directly on the area you
// want to update.
export const serviceAreas: ServiceArea[] = [
  {
    slug: "brighton",
    name: "Brighton",
    kind: "neighborhood",
    region: "Northeast Saskatoon",
    phone: "(306)-220-4770",
    phoneHref: "tel:+13062204770",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "Brighton is one of Saskatoon's newest neighborhoods, built out on the northeast edge of the city along McOrmond Drive.",
    detail:
      "Because most Brighton homes were built in the last decade, the plumbing itself is rarely the issue — new-build PEX systems hold up well. What we see more of here is builder-grade fixtures wearing out early, sump pump systems working overtime during spring runoff since the neighborhood backs onto newly graded land, and the occasional rough-in issue surfacing a few years after possession. Our trucks are in and around Brighton regularly for exactly these calls.",
    homesNote: "Typical housing stock: 2013–present, PEX supply lines, sump pump standard.",
  },
  {
    slug: "rosewood",
    name: "Rosewood",
    kind: "neighborhood",
    region: "Southeast Saskatoon",
    phone: "(306) 555-0142",
    phoneHref: "tel:+13065550142",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "Rosewood sits in southeast Saskatoon, one of the city's larger new-growth neighborhoods over the last fifteen years.",
    detail:
      "Rosewood's mix of single-family homes, condos, and townhomes each come with different plumbing quirks — shared-wall condos tend to call us for low water pressure and shared-stack drain issues, while single-family homes are more often sump pump and fixture calls. We know the neighborhood's layout well enough to give you a realistic arrival window, not just \"sometime this afternoon.\"",
    homesNote: "Typical housing stock: 2008–present, mix of single-family and multi-unit.",
  },
  {
    slug: "stonebridge",
    name: "Stonebridge",
    kind: "neighborhood",
    region: "South Saskatoon",
    phone: "(306) 555-0142",
    phoneHref: "tel:+13065550142",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "Stonebridge is a well-established south Saskatoon neighborhood along the river, with homes now old enough that first-generation fixtures and water heaters are reaching end of life.",
    detail:
      "A lot of our Stonebridge calls are homeowners replacing the original builder-grade water heater or dealing with a fixture that's simply worn out after 15+ years of daily use. We also handle our share of frozen pipe calls on homes near the river valley where cold air pockets around exterior walls. If your Stonebridge home hasn't had a plumbing check since it was built, it's about due.",
    homesNote: "Typical housing stock: 2005–2015, original fixtures reaching end of service life.",
  },
  {
    slug: "college-park",
    name: "College Park",
    kind: "neighborhood",
    region: "Saskatoon area",
    phone: "(306) 555-0142",
    phoneHref: "tel:+13065550142",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "College Park is a quieter, established residential pocket in the Saskatoon area, with a steady mix of long-time owners and newer families.",
    detail:
      "Homes in College Park run the full range of ages, so our calls here are just as varied — everything from routine drain cleaning to full water heater replacements on original units. What homeowners tell us they value most is that we show up on time and give a straight answer about whether something needs fixing now or can reasonably wait.",
    homesNote: "Typical housing stock: mixed vintage, wide range of plumbing systems.",
  },
  {
    slug: "martensville",
    name: "Martensville",
    kind: "satellite-city",
    region: "Satellite city, north of Saskatoon",
    phone: "(306) 555-0142",
    phoneHref: "tel:+13065550142",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "Martensville is a satellite city about 12 minutes north of Saskatoon on Highway 12, and one of the fastest-growing communities in the region.",
    detail:
      "We treat Martensville as a full part of our regular service area, not an out-of-town add-on — a dedicated truck covers Martensville and Warman calls so you're not waiting behind a full Saskatoon schedule. New-construction growth here means a steady mix of warranty-adjacent fixture issues alongside the same winter freeze-up calls every Saskatchewan community deals with.",
    homesNote: "Typical housing stock: rapid new-build growth, mixed with older acreage-style homes.",
  },
  {
    slug: "warman",
    name: "Warman",
    kind: "satellite-city",
    region: "Satellite city, north of Saskatoon",
    phone: "(306) 555-0142",
    phoneHref: "tel:+13065550142",
    address: "PLACEHOLDER — 1425 8th Street E, Saskatoon, SK S7H 0S6",
    intro:
      "Warman is a satellite city just northwest of Saskatoon, one of the fastest-growing municipalities in the province.",
    detail:
      "With Warman's rapid growth has come a wide spread of home ages in a small area — from brand-new subdivisions to original 1990s-era housing stock. We're familiar with both: newer homes tend to bring us sump pump and fixture calls, while older Warman homes are more often pipe repair and water heater replacement. Being close by means a faster response than a city-based plumber who treats Warman as an afterthought.",
    homesNote: "Typical housing stock: mixed, from 1990s original homes to current new-build phases.",
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
