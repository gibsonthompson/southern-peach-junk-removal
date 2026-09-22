// Central business facts. Change once, updates everywhere.
export const site = {
  name: "Southern Peach Junk Removal",
  shortName: "Southern Peach",
  phone: "(470) 760-5249",
  phoneHref: "tel:+14707605249",
  tagline: "Cleaner Spaces, Stronger Communities",
  state: "Georgia",
  metro: "Metro Atlanta",
  description:
    "Junk removal, dumpster rentals, and light demolition across metro Atlanta.",
  trust: ["Licensed & Insured", "Same-Day Availability", "Upfront Quotes"],
  url:
    process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim()
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://southernpeachjunkremoval.com",
} as const;
