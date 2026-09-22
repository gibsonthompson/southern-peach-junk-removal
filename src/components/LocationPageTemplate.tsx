import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhatWeHaul } from "@/components/WhatWeHaul";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";
import { nearbyLocations, type Location } from "@/data/locations";

export function LocationPageTemplate({ location }: { location: Location }) {
  const nearby = nearbyLocations(location);
  return (
    <>
      <Header />
      <main>
        <section className="svc-hero">
          <div className="wrap">
            <div className="inner">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Service Area", href: "/service-area" },
                  { label: `${location.name}, GA` },
                ]}
              />
              <span className="eyebrow">
                <Icon name="pin" style={{ width: 18, height: 18 }} />
                {location.name}, {location.county} County
              </span>
              <h1>Junk Removal In {location.name}, GA</h1>
              <p className="tagline">{location.tagline}</p>
              <div className="intro">
                {location.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  Areas we cover in {location.name}: {location.landmarks.join(", ")}.
                </p>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="/quote">
                  Get A Free Quote
                </a>
                <a className="btn btn-ghost" href={site.phoneHref}>
                  <Icon name="phone" /> {site.phone}
                </a>
              </div>
              <div className="trust">
                {site.trust.map((t) => (
                  <span className="t" key={t}>
                    <Icon name="check" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Process />
        <WhatWeHaul />

        <section className="section area-band">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Nearby</span>
              <h2>We Also Serve</h2>
            </div>
            <div className="svc-index-grid sub">
              {nearby.map((n) => (
                <Link className="svc-card" href={`/service-area/${n.slug}`} key={n.slug}>
                  <Icon name="pin" className="ci" />
                  <h3>{n.name}</h3>
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
