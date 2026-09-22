import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="foot-logo" src="/logo-black.png" alt={site.name} />
            <p>{site.description}</p>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <a href="#services">Junk Removal</a>
            <a href="#services">Dumpster Rental</a>
            <a href="#services">Light Demolition</a>
            <a href="#services">Estate Cleanouts</a>
            <a href="#services">Construction Debris</a>
          </div>
          <div className="foot-col">
            <h4>Service Area</h4>
            <a href="/service-area/atlanta">Atlanta</a>
            <a href="/service-area/alpharetta">Alpharetta</a>
            <a href="/service-area/roswell">Roswell</a>
            <a href="/service-area/marietta">Marietta</a>
            <a href="/service-area">All areas</a>
          </div>
          <div className="foot-col">
            <h4>Get A Quote</h4>
            <a className="foot-phone" href={site.phoneHref}>
              {site.phone}
            </a>
            <a href="#quote">Request a free quote</a>
            <a href="/service-area">Check your area</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="tag">{site.tagline}</span>
          <span className="cr">
            &copy; {new Date().getFullYear()} {site.name}, {site.state}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
