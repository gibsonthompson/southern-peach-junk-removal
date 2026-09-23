import { site } from "@/data/site";
import { Icon } from "@/components/icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="dot" />
            Serving Metro Atlanta
          </span>
          <h1 className="display chrome">
            Your Junk,
            <br />
            Gone Today.
          </h1>
          <p className="sub">
            Junk removal, dumpster rentals, and light demolition across metro
            Atlanta. <b>Point at what has to go and we load it, haul it, and clean
            up</b>, most of it recycled or donated.
          </p>
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
        <div className="hero-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-black.png"
            alt="Southern Peach Junk Removal, Atlanta skyline inside a Georgia peach"
          />
        </div>
      </div>
    </section>
  );
}
