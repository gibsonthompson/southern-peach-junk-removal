import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/icons";
import { locationsByRegion } from "@/data/locations";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Area | Metro Atlanta Junk Removal & Dumpster Rental",
  description:
    "Southern Peach serves junk removal, dumpster rentals, and light demolition across metro Atlanta, from Alpharetta and Marietta to Decatur and downtown. Call (470) 760-5249.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="svc-hero">
          <div className="wrap">
            <div className="inner">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Area" }]} />
              <span className="eyebrow">
                <Icon name="pin" style={{ width: 18, height: 18 }} />
                Metro Atlanta
              </span>
              <h1>Where We Work</h1>
              <p className="tagline">Same-day and next-day service across the metro.</p>
              <div className="intro">
                <p>
                  {site.shortName} covers junk removal, dumpster rentals, and light
                  demolition across metro Atlanta. Pick your city below for local
                  details, or call and we will confirm we cover you.
                </p>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#quote">
                  Get A Free Quote
                </a>
                <a className="btn btn-ghost" href={site.phoneHref}>
                  <Icon name="phone" /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section area-band">
          <div className="wrap">
            <div className="area-grid">
              {Object.entries(locationsByRegion).map(([region, cities]) => (
                <div className="area-block" key={region}>
                  <h3>{region}</h3>
                  <div className="city-list">
                    {cities.map((c) => (
                      <Link href={`/service-area/${c.slug}`} key={c.slug}>
                        <Icon name="pin" />
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
