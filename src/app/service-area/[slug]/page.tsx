import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/data/locations";
import { site } from "@/data/site";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  const url = `${site.url}/service-area/${loc.slug}`;
  const title = `Junk Removal in ${loc.name}, GA | Dumpster Rental & Demolition`;
  const description = `Junk removal, dumpster rentals, and light demolition in ${loc.name}, GA, from ${loc.landmarks[0]} to ${loc.landmarks[1]}. Same-day, licensed and insured. Call (470) 760-5249.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-area/${loc.slug}` },
    openGraph: { title, description, url },
  };
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const url = `${site.url}/service-area/${loc.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${site.name} - ${loc.name}`,
      description: `Junk removal, dumpster rental, and light demolition in ${loc.name}, GA.`,
      telephone: site.phone,
      url,
      areaServed: { "@type": "City", name: `${loc.name}, GA` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Area",
          item: `${site.url}/service-area`,
        },
        { "@type": "ListItem", position: 3, name: loc.name, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LocationPageTemplate location={loc} />
    </>
  );
}
