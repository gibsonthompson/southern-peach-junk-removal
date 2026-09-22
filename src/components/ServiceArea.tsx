import Link from "next/link";
import { locationsByRegion } from "@/data/locations";
import { Icon } from "@/components/icons";

export function ServiceArea() {
  return (
    <section className="section area-band" id="areas">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Where We Work</span>
          <h2>Serving Metro Atlanta</h2>
          <p>
            Same-day and next-day service across the metro. Do not see your city?
            Call, we most likely cover it.
          </p>
        </div>

        <div className="area-map">
          <iframe
            title="Southern Peach Junk Removal service area, metro Atlanta"
            src="https://maps.google.com/maps?q=Atlanta,GA&z=9&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

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
  );
}