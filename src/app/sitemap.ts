import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

// Phase 4: add location routes here as those pages ship.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: s.category === "core" ? 0.9 : 0.7,
    })),
  ];
}
