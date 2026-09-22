export type Location = {
  slug: string;
  name: string;
  county: string;
  region: "North Metro" | "Atlanta & In-Town";
  tagline: string;
  intro: string[];
  landmarks: string[];
};

// Metro Atlanta service area. Each becomes /service-area/[slug].
// Every page has unique, locally-specific content so Google treats it
// as genuine coverage, not a thin doorway page.
export const locations: Location[] = [
  {
    slug: "alpharetta",
    name: "Alpharetta",
    county: "Fulton",
    region: "North Metro",
    tagline: "From the GA 400 corridor to Avalon, we haul it off.",
    intro: [
      "Alpharetta runs on momentum, from the offices along the GA 400 tech corridor to the constant buildout around Avalon and downtown. When an office move, a renovation, or a garage full of the old setup needs to disappear, our crew handles the haul so you can keep moving.",
      "We cover every corner of Alpharetta, from Windward and Haynes Bridge to the neighborhoods off Old Milton Parkway. Same-day and next-day pickup, upfront quotes, and most of what we take gets donated or recycled instead of landfilled.",
    ],
    landmarks: ["Avalon", "Downtown Alpharetta", "Windward", "Haynes Bridge", "Old Milton Parkway"],
  },
  {
    slug: "roswell",
    name: "Roswell",
    county: "Fulton",
    region: "North Metro",
    tagline: "Historic charm makes a lot of clutter. We clear it.",
    intro: [
      "Roswell blends historic charm with a lot of living, and both pile up. Whether you are clearing a bungalow near Canton Street, renovating off Holcomb Bridge, or emptying a rental down by the river, we do the lifting and haul it away.",
      "We serve all of Roswell, from the Historic District to Martin's Landing and Horseshoe Bend. Straight quotes, careful crews, and responsible disposal on every single job.",
    ],
    landmarks: ["Historic Canton Street", "Roswell Mill", "Martin's Landing", "Holcomb Bridge", "Horseshoe Bend"],
  },
  {
    slug: "johns-creek",
    name: "Johns Creek",
    county: "Fulton",
    region: "North Metro",
    tagline: "Clean-outs and haul-offs across the whole community.",
    intro: [
      "Johns Creek is a planned community of quiet subdivisions and good schools, and even the tidiest homes accumulate. From basement clean-outs off Medlock Bridge to appliance haul-offs in Newtown, we clear it out without leaving a mark.",
      "We cover all of Johns Creek, from Abbotts Bridge to State Bridge Road. Book same-day or next-day, get an upfront quote, and we handle the rest.",
    ],
    landmarks: ["Medlock Bridge", "Newtown", "Abbotts Bridge", "State Bridge Road", "Johns Creek Town Center"],
  },
  {
    slug: "milton",
    name: "Milton",
    county: "Fulton",
    region: "North Metro",
    tagline: "From Crabapple to the horse farms, hauled clean.",
    intro: [
      "Milton keeps its rural, equestrian feel even as it grows, with big lots, long driveways, and barns that collect a lifetime of gear. We handle the haul on properties of every size, from Crabapple townhomes to the estates off Birmingham Highway.",
      "We serve all of Milton, and the space and access that come with these properties are exactly what our crew is built for. Upfront quotes, careful work, and responsible disposal.",
    ],
    landmarks: ["Crabapple", "Birmingham Highway", "Downtown Crabapple", "Freemanville", "Milton"],
  },
  {
    slug: "duluth",
    name: "Duluth",
    county: "Gwinnett",
    region: "North Metro",
    tagline: "Downtown Duluth to Sugarloaf, we take it away.",
    intro: [
      "Duluth mixes a lively downtown with busy corridors along Pleasant Hill and Sugarloaf, so there is always something being cleared, moved, or torn out. We haul junk, drop dumpsters, and handle light demolition across the whole city.",
      "We cover all of Duluth, from the Town Green and Gas South District to the neighborhoods off Peachtree Industrial. Same-day availability and quotes you can trust.",
    ],
    landmarks: ["Downtown Duluth", "Sugarloaf", "Gas South District", "Pleasant Hill Road", "Peachtree Industrial"],
  },
  {
    slug: "suwanee",
    name: "Suwanee",
    county: "Gwinnett",
    region: "North Metro",
    tagline: "Around Town Center and beyond, junk gone fast.",
    intro: [
      "Suwanee built its identity around Town Center Park and a strong sense of community, and its neighborhoods keep growing. From garage clean-outs near Old Town to full haul-offs off Lawrenceville-Suwanee Road, we clear the space and sweep up after.",
      "We serve every part of Suwanee with same-day and next-day pickup, upfront pricing, and donation-first disposal.",
    ],
    landmarks: ["Town Center Park", "Old Town Suwanee", "Lawrenceville-Suwanee Road", "Peachtree Industrial", "Suwanee"],
  },
  {
    slug: "buford",
    name: "Buford",
    county: "Gwinnett",
    region: "North Metro",
    tagline: "From the Mall of Georgia to Lake Lanier, hauled off.",
    intro: [
      "Buford stretches from the shops around the Mall of Georgia to the docks and cabins on Lake Lanier, with a walkable historic Main Street in between. We haul junk, rent dumpsters, and knock down old sheds and decks across all of it.",
      "We cover Buford end to end, and lakeside clean-outs and long gravel drives are no problem for our crew. Straight quotes, fast scheduling, and careful work.",
    ],
    landmarks: ["Mall of Georgia", "Lake Lanier", "Historic Main Street", "Buford", "Lake Lanier Islands"],
  },
  {
    slug: "cumming",
    name: "Cumming",
    county: "Forsyth",
    region: "North Metro",
    tagline: "All of Forsyth, from The Collection to the lake.",
    intro: [
      "Cumming anchors one of the fastest-growing counties in the state, from the shops at The Collection to the coves of Lake Lanier and the subdivisions filling in off GA 400. When a build, a move, or a cleanout leaves a pile behind, we clear it.",
      "We serve all of Cumming and greater Forsyth County with same-day and next-day pickup, upfront quotes, and responsible disposal.",
    ],
    landmarks: ["The Collection at Forsyth", "Lake Lanier", "GA 400", "Downtown Cumming", "Sawnee Mountain"],
  },
  {
    slug: "sugar-hill",
    name: "Sugar Hill",
    county: "Gwinnett",
    region: "North Metro",
    tagline: "Around The Bowl and every street around it.",
    intro: [
      "Sugar Hill grew a real downtown around The Bowl amphitheater, and its neighborhoods keep filling in along Peachtree Industrial. From attic clean-outs to construction debris on a remodel, we haul it away in one trip.",
      "We cover all of Sugar Hill with fast scheduling, upfront quotes, and donation-first disposal on everything we can.",
    ],
    landmarks: ["The Bowl at Sugar Hill", "Downtown Sugar Hill", "Peachtree Industrial", "E.E. Robinson Park", "Sugar Hill"],
  },
  {
    slug: "lawrenceville",
    name: "Lawrenceville",
    county: "Gwinnett",
    region: "North Metro",
    tagline: "The county seat's crew for junk and debris.",
    intro: [
      "Lawrenceville is the Gwinnett county seat, with a historic square, a mix of older homes and new builds, and plenty of rental turnover. We handle junk removal, dumpsters, and light demolition across the whole city, homes and businesses alike.",
      "We serve all of Lawrenceville, from the Square to the neighborhoods off Sugarloaf Parkway. Upfront quotes and same-day availability.",
    ],
    landmarks: ["Historic Lawrenceville Square", "Sugarloaf Parkway", "Gwinnett Justice Center", "Rhodes Jordan Park", "Lawrenceville"],
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    county: "Fulton",
    region: "Atlanta & In-Town",
    tagline: "Every neighborhood, from Buckhead to the West End.",
    intro: [
      "Atlanta is a hundred neighborhoods stacked together, from Buckhead high-rises to Midtown lofts to the bungalows of the West End and East Atlanta. Tight parking, stairs, and walk-ups are the norm, and that is exactly the kind of haul we are built for.",
      "We cover the city end to end with same-day and next-day pickup, upfront quotes, and disposal that keeps most of it out of the landfill.",
    ],
    landmarks: ["Buckhead", "Midtown", "West End", "East Atlanta", "Old Fourth Ward"],
  },
  {
    slug: "sandy-springs",
    name: "Sandy Springs",
    county: "Fulton",
    region: "Atlanta & In-Town",
    tagline: "From City Springs to the Perimeter, hauled clean.",
    intro: [
      "Sandy Springs runs from the City Springs district down through the office towers of the Perimeter, with condos, townhomes, and older ranches all around. Whether it is a high-rise unit or a full house, we handle the lifting and the loading.",
      "We serve all of Sandy Springs with fast scheduling, upfront quotes, and careful crews that respect your building and your neighbors.",
    ],
    landmarks: ["City Springs", "Perimeter", "GA 400", "Chattahoochee River", "Sandy Springs"],
  },
  {
    slug: "dunwoody",
    name: "Dunwoody",
    county: "DeKalb",
    region: "Atlanta & In-Town",
    tagline: "Perimeter clean-outs and haul-offs, done right.",
    intro: [
      "Dunwoody wraps around Perimeter Mall and the office district, with established neighborhoods like Georgetown and Dunwoody Village filling in the rest. From office clean-outs to a garage full of the old life, we clear it and haul it.",
      "We cover all of Dunwoody with same-day availability, upfront quotes, and donation-first disposal.",
    ],
    landmarks: ["Perimeter Mall", "Georgetown", "Dunwoody Village", "Brook Run Park", "Dunwoody"],
  },
  {
    slug: "brookhaven",
    name: "Brookhaven",
    county: "DeKalb",
    region: "Atlanta & In-Town",
    tagline: "Around Town Brookhaven and every street off Peachtree.",
    intro: [
      "Brookhaven runs along Peachtree Road with a mix of new mid-rises around Town Brookhaven and classic homes in Historic Brookhaven. Renovations, downsizes, and rental turnovers keep the haul-offs coming, and we handle them all.",
      "We serve every part of Brookhaven with upfront quotes, fast scheduling, and careful, insured crews.",
    ],
    landmarks: ["Town Brookhaven", "Historic Brookhaven", "Peachtree Road", "Murphey Candler Park", "Brookhaven"],
  },
  {
    slug: "marietta",
    name: "Marietta",
    county: "Cobb",
    region: "Atlanta & In-Town",
    tagline: "From the Square to Kennesaw Mountain, we clear it.",
    intro: [
      "Marietta centers on its historic Square and spreads out toward Kennesaw Mountain and the East Cobb neighborhoods. Older homes, big renovations, and estate clean-outs are everyday work here, and we handle the whole haul.",
      "We cover all of Marietta with same-day and next-day pickup, upfront quotes, and responsible disposal on everything we take.",
    ],
    landmarks: ["Marietta Square", "Kennesaw Mountain", "East Cobb", "Dobbins", "Marietta"],
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    county: "Cobb",
    region: "Atlanta & In-Town",
    tagline: "Jonquil City clean-outs, hauled the same day.",
    intro: [
      "Smyrna packs a lot into a small footprint, from the walkable Market Village to the neighborhoods near The Battery and Truist Park. Townhome turnovers and quick renovations keep things moving, and we keep the debris from piling up.",
      "We serve all of Smyrna with fast scheduling, upfront quotes, and donation-first disposal.",
    ],
    landmarks: ["Smyrna Market Village", "The Battery", "Truist Park", "Cumberland", "Smyrna"],
  },
  {
    slug: "kennesaw",
    name: "Kennesaw",
    county: "Cobb",
    region: "Atlanta & In-Town",
    tagline: "Around the mountain and Town Center, junk gone.",
    intro: [
      "Kennesaw sits under its namesake mountain, with Town Center at Cobb, a growing downtown, and neighborhoods full of families. From garage clean-outs to construction debris on a remodel, we haul it off in one trip.",
      "We cover all of Kennesaw with same-day availability, upfront quotes, and careful, insured crews.",
    ],
    landmarks: ["Kennesaw Mountain", "Town Center at Cobb", "Downtown Kennesaw", "Swift-Cantrell Park", "Kennesaw"],
  },
  {
    slug: "woodstock",
    name: "Woodstock",
    county: "Cherokee",
    region: "Atlanta & In-Town",
    tagline: "Downtown Woodstock to the far end of Cherokee.",
    intro: [
      "Woodstock turned its downtown into one of the busiest small-town centers in metro Atlanta, and the neighborhoods around it keep spreading through Cherokee County. Renovations, move-outs, and cleanouts all leave a pile, and we take it away.",
      "We serve all of Woodstock and nearby Cherokee County with upfront quotes, fast scheduling, and responsible disposal.",
    ],
    landmarks: ["Downtown Woodstock", "The Outlet Shoppes", "Towne Lake", "Woofstock Park", "Woodstock"],
  },
  {
    slug: "decatur",
    name: "Decatur",
    county: "DeKalb",
    region: "Atlanta & In-Town",
    tagline: "Everything's greater, and we haul all of it.",
    intro: [
      "Decatur is dense, walkable, and proud of it, from the Square out through Oakhurst and the tree-lined streets around Agnes Scott. Older homes and tight lots mean stairs and narrow drives, which is exactly what our crew handles every day.",
      "We cover all of Decatur with same-day and next-day pickup, upfront quotes, and donation-first disposal.",
    ],
    landmarks: ["Decatur Square", "Oakhurst", "Agnes Scott College", "Downtown Decatur", "Decatur"],
  },
  {
    slug: "norcross",
    name: "Norcross",
    county: "Gwinnett",
    region: "Atlanta & In-Town",
    tagline: "Historic Norcross and everything off Buford Highway.",
    intro: [
      "Norcross pairs a charming historic downtown with a busy commercial stretch along Buford Highway and Jimmy Carter, so there is always a home or a business clearing something out. We haul junk, rent dumpsters, and handle light demolition across all of it.",
      "We serve every part of Norcross with upfront quotes, fast scheduling, and careful, insured crews.",
    ],
    landmarks: ["Historic Norcross", "Buford Highway", "Jimmy Carter Boulevard", "Lillian Webb Park", "Norcross"],
  },
];

export const locationsByRegion = {
  "North Metro": locations.filter((l) => l.region === "North Metro"),
  "Atlanta & In-Town": locations.filter((l) => l.region === "Atlanta & In-Town"),
};

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

// Nearby cities for cross-linking: same county first, then same region.
export function nearbyLocations(loc: Location, limit = 6): Location[] {
  const sameCounty = locations.filter(
    (l) => l.slug !== loc.slug && l.county === loc.county
  );
  const sameRegion = locations.filter(
    (l) => l.slug !== loc.slug && l.region === loc.region && l.county !== loc.county
  );
  return [...sameCounty, ...sameRegion].slice(0, limit);
}
