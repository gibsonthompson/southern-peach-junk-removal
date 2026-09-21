import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/icons";
import { coreServices, subServices } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services | Junk Removal, Dumpster Rental & Light Demolition",
  description:
    "Junk removal, dumpster rental, and light demolition across metro Atlanta, plus furniture, appliance, estate, and construction debris removal. Call (470) 760-5249.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="svc-hero">
          <div className="wrap">
            <div className="inner">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
              <span className="eyebrow">
                <Icon name="trash" style={{ width: 18, height: 18 }} />
                Our Services
              </span>
              <h1>Everything We Haul, Rent, And Tear Down</h1>
              <p className="tagline">Three core services, plus the specialty jobs under them.</p>
              <div className="intro">
                <p>
                  {site.shortName} covers junk removal, dumpster rentals, and light
                  demolition across metro Atlanta. Below the three core services are
                  the specific jobs we get asked for most.
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

        <section className="section svc-band">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Core Services</span>
              <h2>Where It Starts</h2>
            </div>
            <div className="svc-index-grid">
              {coreServices.map((s) => (
                <Link className="svc-card" href={`/services/${s.slug}`} key={s.slug}>
                  <Icon name={s.icon} className="ci" />
                  <h3>{s.name}</h3>
                </Link>
              ))}
            </div>

            <h3 className="svc-sub-head">Specialty Jobs</h3>
            <div className="svc-index-grid sub">
              {subServices.map((s) => (
                <Link className="svc-card" href={`/services/${s.slug}`} key={s.slug}>
                  <Icon name={s.icon} className="ci" />
                  <h3>{s.name}</h3>
                </Link>
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
