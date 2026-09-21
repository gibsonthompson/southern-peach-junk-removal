import { Icon } from "@/components/icons";

const shots = [
  "Garage Cleanout",
  "Estate Haul",
  "Construction Debris",
  "Appliance Removal",
  "Dumpster Drop-Off",
  "Shed Demolition",
];

export function Gallery() {
  return (
    <section className="section gal-band" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Our Work</span>
          <h2>Recent Jobs Around Atlanta</h2>
          <p>
            A cleared garage, an emptied estate, a driveway swept clean. Real job
            photos going in here.
          </p>
        </div>
        <div className="gal-grid">
          {shots.map((caption) => (
            <div className="gal" key={caption}>
              <div className="ph">
                <Icon name="image" />
                <span>Photo placeholder</span>
              </div>
              <div className="cap">{caption}</div>
            </div>
          ))}
        </div>
        <p className="gal-note">
          Placeholders for now. Swap in real before-and-after job photos, they are
          the strongest trust signal on the page.
        </p>
      </div>
    </section>
  );
}
