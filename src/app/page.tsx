import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Audiences } from "@/components/Audiences";
import { Process } from "@/components/Process";
import { WhatWeHaul } from "@/components/WhatWeHaul";
import { WhyUs } from "@/components/WhyUs";
import { ServiceArea } from "@/components/ServiceArea";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  telephone: site.phone,
  url: site.url,
  areaServed: locations.map((l) => ({
    "@type": "City",
    name: `${l.name}, GA`,
  })),
  slogan: site.tagline,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Audiences />
        <Process />
        <WhatWeHaul />
        <WhyUs />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
