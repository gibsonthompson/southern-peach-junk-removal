import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";
import type { Service } from "@/data/services";

export function ServicePageTemplate({ service }: { service: Service }) {
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
                  { label: "Services", href: "/services" },
                  { label: service.name },
                ]}
              />
              <span className="eyebrow">
                <Icon name={service.icon} style={{ width: 18, height: 18 }} />
                {service.name}
              </span>
              <h1>{service.h1}</h1>
              <p className="tagline">{service.tagline}</p>
              <div className="intro">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#quote">
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

        <section className="section included-band">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">{"What's Included"}</span>
              <h2>What We Take Care Of</h2>
            </div>
            <div className="included-grid">
              {service.included.map((item) => (
                <div className="inc" key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process />

        <section className="section faq-band">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Questions</span>
              <h2>Good To Know</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((f) => (
                <div className="faq" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
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
