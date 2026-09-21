export type Location = {
  slug: string;
  name: string;
  region: "North Metro" | "Atlanta & In-Town";
};

// Metro Atlanta service area. Each becomes /service-area/[slug].
// Keep every page unique (local landmarks, real job examples, area reviews)
// so Google treats it as genuine coverage, not a thin doorway page.
export const locations: Location[] = [
  { slug: "alpharetta", name: "Alpharetta", region: "North Metro" },
  { slug: "roswell", name: "Roswell", region: "North Metro" },
  { slug: "johns-creek", name: "Johns Creek", region: "North Metro" },
  { slug: "milton", name: "Milton", region: "North Metro" },
  { slug: "duluth", name: "Duluth", region: "North Metro" },
  { slug: "suwanee", name: "Suwanee", region: "North Metro" },
  { slug: "buford", name: "Buford", region: "North Metro" },
  { slug: "cumming", name: "Cumming", region: "North Metro" },
  { slug: "sugar-hill", name: "Sugar Hill", region: "North Metro" },
  { slug: "lawrenceville", name: "Lawrenceville", region: "North Metro" },
  { slug: "atlanta", name: "Atlanta", region: "Atlanta & In-Town" },
  { slug: "sandy-springs", name: "Sandy Springs", region: "Atlanta & In-Town" },
  { slug: "dunwoody", name: "Dunwoody", region: "Atlanta & In-Town" },
  { slug: "brookhaven", name: "Brookhaven", region: "Atlanta & In-Town" },
  { slug: "marietta", name: "Marietta", region: "Atlanta & In-Town" },
  { slug: "smyrna", name: "Smyrna", region: "Atlanta & In-Town" },
  { slug: "kennesaw", name: "Kennesaw", region: "Atlanta & In-Town" },
  { slug: "woodstock", name: "Woodstock", region: "Atlanta & In-Town" },
  { slug: "decatur", name: "Decatur", region: "Atlanta & In-Town" },
  { slug: "norcross", name: "Norcross", region: "Atlanta & In-Town" },
];

export const locationsByRegion = {
  "North Metro": locations.filter((l) => l.region === "North Metro"),
  "Atlanta & In-Town": locations.filter((l) => l.region === "Atlanta & In-Town"),
};
