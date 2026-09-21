import type { IconName } from "@/components/icons";

// "What we haul" grid. Each links to its sub-service page.
export type HaulItem = { label: string; icon: IconName; slug: string };

export const haulItems: HaulItem[] = [
  { label: "Furniture", icon: "sofa", slug: "furniture-removal" },
  { label: "Appliances", icon: "fridge", slug: "appliance-removal" },
  { label: "Mattresses", icon: "mattress", slug: "mattress-removal" },
  { label: "Estate cleanouts", icon: "house", slug: "estate-cleanouts" },
  { label: "Eviction & foreclosure", icon: "clipboard", slug: "eviction-foreclosure-cleanouts" },
  { label: "Garage cleanouts", icon: "garage", slug: "garage-cleanouts" },
  { label: "Construction debris", icon: "debris", slug: "construction-debris-removal" },
  { label: "Yard & storm debris", icon: "leaf", slug: "yard-storm-debris-removal" },
  { label: "Hot tubs", icon: "tub", slug: "hot-tub-removal" },
  { label: "E-waste", icon: "monitor", slug: "e-waste-removal" },
];
