import { site } from "@/data/site";
import { Icon } from "@/components/icons";

export function Hero() {
  return (
    <section className="hero hero-ad-hero" id="top">
      <div className="wrap hero-ad-inner">
        <span className="hero-eyebrow">
          <span className="dot" />
          Serving Metro Atlanta
        </span>
        <div className="hero-ad-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-ad.jpg"
            alt="Southern Peach Junk Removal crew, junk removal, dumpster rental, and light demolition across metro Atlanta"
          />
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
    </section>
  );
}
