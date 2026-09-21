import { site } from "@/data/site";
import { Icon } from "@/components/icons";

export function CTA() {
  return (
    <section className="cta-band" id="quote">
      <div className="wrap cta-inner">
        <h2 className="display chrome">Ready To Get It Gone?</h2>
        <p>
          Send a few photos and we will send back a quote today. No obligation, no
          pressure.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={site.phoneHref}>
            Get A Free Quote
          </a>
          <a className="btn btn-dark" href={site.phoneHref}>
            <Icon name="phone" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
