import type { IconName } from "@/components/icons";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  category: "core" | "sub";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  included: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  // ---------------- CORE SERVICES ----------------
  {
    slug: "junk-removal",
    name: "Junk Removal",
    icon: "trash",
    category: "core",
    metaTitle: "Junk Removal in Metro Atlanta | Same-Day Hauling",
    metaDescription:
      "Full-service junk removal across metro Atlanta. Furniture, appliances, garage and estate cleanouts, hauled and cleaned up. Licensed, insured, upfront quotes. Call (470) 760-5249.",
    h1: "Junk Removal In Metro Atlanta",
    tagline: "Point at what has to go. We handle the rest.",
    intro: [
      "From a single mattress on the curb to a garage packed to the ceiling, Southern Peach hauls away whatever you are done with. Our crew does all the lifting, loading, and cleanup, so you never touch a thing.",
      "We work across metro Atlanta with same-day and next-day availability, and we sort for donation and recycling before anything heads to the landfill. You get a straight quote up front, and the price we say is the price you pay.",
    ],
    included: [
      "Furniture and appliances",
      "Garage, attic, and basement cleanouts",
      "Whole-home and estate cleanouts",
      "Mattresses, hot tubs, and exercise equipment",
      "Yard waste and storm debris",
      "Loading, hauling, and sweep-up",
    ],
    faqs: [
      {
        q: "How much does junk removal cost?",
        a: "Pricing is based on how much space your items take up in the truck. Send a few photos or call and we will give you a straight quote before we lift anything, with no surprise fees at the curb.",
      },
      {
        q: "Do I need to move everything outside first?",
        a: "No. Point our crew at what has to go and we carry it out ourselves, whether it is in the basement, the attic, or the back of the garage.",
      },
      {
        q: "What will you not take?",
        a: "We handle almost everything non-hazardous. We cannot take paint, chemicals, motor oil, propane tanks, asbestos, or biohazardous material. If you are unsure, send a photo and we will tell you straight.",
      },
    ],
  },
  {
    slug: "dumpster-rental",
    name: "Dumpster Rental",
    icon: "trailer",
    category: "core",
    metaTitle: "Dumpster Rental in Metro Atlanta | Driveway Dump Trailer",
    metaDescription:
      "Dumpster rental across metro Atlanta. A dump trailer dropped in your driveway, filled on your schedule, hauled off when you are done. No permit hassle. Call (470) 760-5249.",
    h1: "Dumpster Rental In Metro Atlanta",
    tagline: "A dump trailer in your driveway for the jobs that run long.",
    intro: [
      "For renovations, cleanouts, and projects that take more than a day, we drop a dump trailer right in your driveway. Fill it on your own schedule and we haul it off when you are done.",
      "No permits to chase and no mess left behind. It is the flexible middle ground between hiring a full crew and making a dozen dump runs yourself.",
    ],
    included: [
      "Driveway drop-off and pickup",
      "Flexible rental windows",
      "No permit hassle",
      "Great for renovations and cleanouts",
      "Straightforward flat pricing",
      "We haul and dispose of the load",
    ],
    faqs: [
      {
        q: "Is it a dumpster or a trailer?",
        a: "It is a dump trailer, which sits flat in your driveway like a dumpster but is easier to load and easier on your surface. You fill it and we haul it off.",
      },
      {
        q: "How long can I keep it?",
        a: "We offer flexible rental windows to match your project. Tell us how long you need it when you book and we will work it out.",
      },
      {
        q: "What can I put in it?",
        a: "General household and renovation debris. No hazardous material like paint, chemicals, propane, or asbestos. Ask us about heavy material like concrete or dirt before you load.",
      },
    ],
  },
  {
    slug: "light-demolition",
    name: "Light Demolition",
    icon: "demo",
    category: "core",
    metaTitle: "Light Demolition in Metro Atlanta | Sheds, Decks & Tear-Outs",
    metaDescription:
      "Light demolition across metro Atlanta. Sheds, decks, fences, playsets, hot tubs, and interior tear-outs, knocked down and hauled away in one trip. Call (470) 760-5249.",
    h1: "Light Demolition In Metro Atlanta",
    tagline: "We knock it down and clear every piece of it.",
    intro: [
      "Some things have to come down before they can be hauled away. We handle light demolition on sheds, decks, fences, playsets, hot tubs, and interior tear-outs, then clear the debris in the same trip.",
      "You are left with a clean slate instead of a pile. Fully insured, so your property is protected from the first swing.",
    ],
    included: [
      "Sheds and outbuildings",
      "Decks, fences, and railings",
      "Playsets and swing sets",
      "Hot tubs and above-ground pools",
      "Interior tear-outs (drywall, flooring, cabinets)",
      "Full debris removal and cleanup",
    ],
    faqs: [
      {
        q: "Is demolition and hauling one price?",
        a: "Yes. We knock it down and haul the debris in the same visit, quoted together up front so there is no separate cleanup bill.",
      },
      {
        q: "Do you do structural demolition?",
        a: "We handle light, non-structural demolition. For load-bearing or full-structure teardowns you will want a licensed structural demolition contractor, and we are happy to point you in the right direction.",
      },
      {
        q: "Will my yard be a mess after?",
        a: "No. Clearing the debris and leaving the site clean is part of the job, not an afterthought.",
      },
    ],
  },

  // ---------------- SUB-SERVICE SEO PAGES ----------------
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    icon: "sofa",
    category: "sub",
    metaTitle: "Furniture Removal in Metro Atlanta | Couch & Sofa Pickup",
    metaDescription:
      "Furniture removal across metro Atlanta. Couches, sofas, dressers, tables, and office furniture hauled away, most donated or recycled. Call (470) 760-5249.",
    h1: "Furniture Removal In Metro Atlanta",
    tagline: "Old couches and dressers, gone in one trip.",
    intro: [
      "Couches, sectionals, dressers, tables, desks, and office furniture, we haul it all. Our crew handles the heavy lifting and the stairs, so you do not have to wrestle a sleeper sofa down a hallway.",
      "Usable furniture goes to donation whenever we can, so your old pieces get a second life instead of a landfill.",
    ],
    included: [
      "Couches, sofas, and sectionals",
      "Dressers, tables, and chairs",
      "Desks and office furniture",
      "Bed frames and headboards",
      "Stairs and tight spaces handled",
      "Donation whenever possible",
    ],
    faqs: [
      {
        q: "Can you get it down the stairs?",
        a: "Yes. Our crew handles stairs, elevators, and tight doorways. That is part of why you hire us instead of doing it yourself.",
      },
      {
        q: "Do you donate the furniture?",
        a: "Whenever a piece is still usable, we route it to donation rather than the landfill.",
      },
      {
        q: "How fast can you come?",
        a: "Same-day and next-day pickup is available across metro Atlanta. Book in the morning and it is often gone the same afternoon.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    icon: "fridge",
    category: "sub",
    metaTitle: "Appliance Removal in Metro Atlanta | Fridge & Washer Haul-Off",
    metaDescription:
      "Appliance removal across metro Atlanta. Refrigerators, washers, dryers, stoves, and water heaters hauled off and recycled. Call (470) 760-5249.",
    h1: "Appliance Removal In Metro Atlanta",
    tagline: "Refrigerators to water heaters, hauled and recycled.",
    intro: [
      "Refrigerators, washers, dryers, stoves, dishwashers, and water heaters, we haul the heavy stuff out for you so you do not have to move it yourself.",
      "Metal and components get recycled wherever possible, and we manage refrigerant-bearing units responsibly.",
    ],
    included: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Stoves, ovens, and dishwashers",
      "Water heaters and HVAC units",
      "Microwaves and small appliances",
      "Responsible recycling",
    ],
    faqs: [
      {
        q: "Do you recycle old appliances?",
        a: "Yes. We route metal and usable components to recycling and handle refrigerant-bearing units responsibly.",
      },
      {
        q: "Can you get the fridge out of the basement?",
        a: "Yes. Heavy appliances and awkward spots are exactly what our crew is for.",
      },
      {
        q: "Do I need to unhook it first?",
        a: "It helps if it is disconnected, but let us know and we will work with you on it.",
      },
    ],
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    icon: "mattress",
    category: "sub",
    metaTitle: "Mattress Removal in Metro Atlanta | Same-Day Pickup",
    metaDescription:
      "Mattress removal across metro Atlanta. Old mattresses and box springs hauled away and recycled, same-day pickup available. Call (470) 760-5249.",
    h1: "Mattress Removal In Metro Atlanta",
    tagline: "Old mattresses hauled off and recycled, not landfilled.",
    intro: [
      "Mattresses are bulky, awkward, and a pain to get rid of. We take them off your hands, box springs and frames included, so you can set up the new bed and move on.",
      "Mattresses are highly recyclable, and we route them to recycling wherever the option exists.",
    ],
    included: [
      "Mattresses of every size",
      "Box springs and foundations",
      "Bed frames and headboards",
      "Multiple mattresses for cleanouts",
      "Recycling where available",
      "Same-day pickup",
    ],
    faqs: [
      {
        q: "Can you take just one mattress?",
        a: "Yes, single-item pickups are welcome. Send a photo and we will give you a quick quote.",
      },
      {
        q: "Do you recycle mattresses?",
        a: "Wherever recycling is available in the area, that is where your mattress goes.",
      },
    ],
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    icon: "house",
    category: "sub",
    metaTitle: "Estate Cleanouts in Metro Atlanta | Whole-Home Clearing",
    metaDescription:
      "Estate cleanout services across metro Atlanta. Compassionate, thorough whole-home clearing with donation and recycling, coordinated with realtors and executors. Call (470) 760-5249.",
    h1: "Estate Cleanouts In Metro Atlanta",
    tagline: "Whole-home clearing, handled with respect.",
    intro: [
      "Clearing an entire home is a heavy job, often at a hard time. We handle estate cleanouts start to finish, from the attic to the basement, with respect for the property and the family.",
      "We sort for donation and recycling as we go, keep you informed, and leave the home broom-clean and ready for sale or handover.",
    ],
    included: [
      "Full attic-to-basement clearing",
      "Furniture, appliances, and belongings",
      "Donation and recycling sorting",
      "Coordination with realtors and executors",
      "Discreet, respectful crews",
      "Broom-clean finish",
    ],
    faqs: [
      {
        q: "Can you work with our realtor or attorney?",
        a: "Yes. We regularly coordinate with realtors, executors, and property managers to hit a closing or handover date.",
      },
      {
        q: "What happens to usable items?",
        a: "We sort for donation and recycling as we clear, so usable belongings benefit someone rather than the landfill.",
      },
      {
        q: "How quickly can a full home be cleared?",
        a: "Most homes are cleared in a day or two depending on size and volume. We will give you a timeline with your quote.",
      },
    ],
  },
  {
    slug: "eviction-foreclosure-cleanouts",
    name: "Eviction & Foreclosure Cleanouts",
    icon: "clipboard",
    category: "sub",
    metaTitle: "Eviction & Foreclosure Cleanouts in Metro Atlanta",
    metaDescription:
      "Eviction and foreclosure cleanout services across metro Atlanta for property managers and owners. Fast, reliable, broom-clean turnovers. Call (470) 760-5249.",
    h1: "Eviction & Foreclosure Cleanouts",
    tagline: "Fast, reliable turnovers for property managers and owners.",
    intro: [
      "When a unit needs to be cleared and turned fast, we move. We handle eviction and foreclosure cleanouts for property managers, landlords, and banks, removing everything left behind and leaving the space ready to re-list.",
      "Reliable scheduling, clear communication, and broom-clean results, so you can get the property back to work.",
    ],
    included: [
      "Full removal of left-behind belongings",
      "Trash-out and debris removal",
      "Appliance and furniture haul-off",
      "Fast turnaround scheduling",
      "Broom-clean finish",
      "Recurring work for property managers",
    ],
    faqs: [
      {
        q: "Can you turn a unit on short notice?",
        a: "Yes. Fast scheduling is the point of this service. Call us and we will get you on the calendar quickly.",
      },
      {
        q: "Do you work with property management companies?",
        a: "Regularly. We can set up recurring turnovers so you are not rebooking every time.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    icon: "garage",
    category: "sub",
    metaTitle: "Garage Cleanouts in Metro Atlanta | Reclaim Your Space",
    metaDescription:
      "Garage cleanout services across metro Atlanta. Clear years of clutter and park in your garage again. Same-day availability. Call (470) 760-5249.",
    h1: "Garage Cleanouts In Metro Atlanta",
    tagline: "Park in your garage again.",
    intro: [
      "Garages collect a decade of what-ifs. We clear the whole thing, old furniture, broken tools, boxes you have not opened since the last move, and haul it away in one visit.",
      "You point at what stays and what goes, and we do the sorting, lifting, and cleanup. Most of it gets donated or recycled.",
    ],
    included: [
      "Old furniture and boxes",
      "Broken tools and equipment",
      "Bikes, toys, and sporting goods",
      "Household clutter",
      "Sorting and cleanup",
      "Donation and recycling",
    ],
    faqs: [
      {
        q: "Can I keep some things?",
        a: "Of course. Point out what stays and we clear the rest around it.",
      },
      {
        q: "How long does a garage take?",
        a: "Most garages are cleared in a single visit. Send photos for a quick quote and timeline.",
      },
    ],
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    icon: "debris",
    category: "sub",
    metaTitle: "Construction Debris Removal in Metro Atlanta",
    metaDescription:
      "Construction and renovation debris removal across metro Atlanta for contractors and homeowners. Drywall, lumber, flooring, and more, one-time or recurring. Call (470) 760-5249.",
    h1: "Construction Debris Removal",
    tagline: "Job-site cleanup so your crew keeps building.",
    intro: [
      "Renovations and builds generate a lot of waste. We clear construction and demolition debris, drywall, lumber, flooring, tile, fixtures, and packaging, so your crew can keep working and the site stays safe.",
      "One-time hauls or recurring pickups for active job sites, scheduled around your build.",
    ],
    included: [
      "Drywall, lumber, and trim",
      "Flooring, tile, and carpet",
      "Old fixtures and cabinetry",
      "Packaging and general debris",
      "One-time or recurring pickups",
      "Job-site safety in mind",
    ],
    faqs: [
      {
        q: "Do you work with contractors?",
        a: "Yes. We set up one-time or recurring hauls around your build schedule.",
      },
      {
        q: "Can you handle heavy material?",
        a: "Ask us about concrete, brick, and dirt before booking. We will let you know what we can take and how it is priced.",
      },
    ],
  },
  {
    slug: "yard-storm-debris-removal",
    name: "Yard & Storm Debris Removal",
    icon: "leaf",
    category: "sub",
    metaTitle: "Yard & Storm Debris Removal in Metro Atlanta",
    metaDescription:
      "Yard waste and storm debris removal across metro Atlanta. Branches, brush, fallen limbs, and cleanup hauled away fast. Call (470) 760-5249.",
    h1: "Yard & Storm Debris Removal",
    tagline: "Branches, brush, and storm cleanup, hauled fast.",
    intro: [
      "After a storm or a big yard project, the pile of branches and brush can be overwhelming. We haul away limbs, brush, leaves, and general yard debris so your property looks right again.",
      "Fast response after storms, and clean pickup after your own landscaping projects.",
    ],
    included: [
      "Fallen limbs and branches",
      "Brush and cut vegetation",
      "Bagged leaves and yard waste",
      "Old fencing and landscape material",
      "Post-storm cleanup",
      "Fast response",
    ],
    faqs: [
      {
        q: "Do you respond after storms?",
        a: "Yes, we prioritize storm cleanup and move as fast as conditions allow.",
      },
      {
        q: "Do you remove whole trees?",
        a: "We haul cut debris and limbs. For felling standing trees you will want a licensed tree service, and we can handle the debris once it is down.",
      },
    ],
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    icon: "tub",
    category: "sub",
    metaTitle: "Hot Tub Removal in Metro Atlanta | Spa Haul-Off",
    metaDescription:
      "Hot tub and spa removal across metro Atlanta. We break down, haul, and clean up old hot tubs in one visit. Call (470) 760-5249.",
    h1: "Hot Tub Removal In Metro Atlanta",
    tagline: "Old spa gone, deck cleared, in one visit.",
    intro: [
      "An old hot tub is heavy, waterlogged, and nobody's favorite DIY project. We drain what is left, break it down, and haul every piece away, leaving your deck or patio clear.",
      "One visit, one price, no borrowed trucks or weekend struggle.",
    ],
    included: [
      "Above-ground hot tubs and spas",
      "Disassembly and breakdown",
      "Full haul-off and cleanup",
      "Deck and patio left clear",
      "Insured, careful removal",
      "One-visit service",
    ],
    faqs: [
      {
        q: "Do I need to drain it first?",
        a: "It helps if it is drained, but tell us the situation and we will plan around it.",
      },
      {
        q: "Can you get it off the back deck?",
        a: "Yes. Awkward access is normal for this job and our crew is set up for it.",
      },
    ],
  },
  {
    slug: "e-waste-removal",
    name: "E-Waste Removal",
    icon: "monitor",
    category: "sub",
    metaTitle: "E-Waste Removal in Metro Atlanta | Electronics Recycling",
    metaDescription:
      "E-waste and electronics removal across metro Atlanta. TVs, monitors, computers, and office electronics hauled and recycled responsibly. Call (470) 760-5249.",
    h1: "E-Waste Removal In Metro Atlanta",
    tagline: "Old electronics hauled and recycled responsibly.",
    intro: [
      "Old TVs, monitors, computers, printers, and office electronics pile up fast and do not belong in the regular trash. We haul them off and route them to responsible recycling.",
      "Great for home offices, upgrades, and business cleanouts where the e-waste has been stacking up.",
    ],
    included: [
      "TVs and monitors",
      "Computers, laptops, and printers",
      "Office and networking gear",
      "Cables and small electronics",
      "Business and home pickups",
      "Responsible recycling",
    ],
    faqs: [
      {
        q: "Do you wipe data from devices?",
        a: "We route devices to responsible recyclers, but for sensitive data you should wipe or remove drives before pickup to be safe.",
      },
      {
        q: "Can you handle a whole office of electronics?",
        a: "Yes. Business e-waste cleanouts are a good fit, one-time or scheduled.",
      },
    ],
  },
];

export const coreServices = services.filter((s) => s.category === "core");
export const subServices = services.filter((s) => s.category === "sub");

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
