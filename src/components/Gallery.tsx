const gallery = [
  { src: "/work/debris-pile.jpg", caption: "Construction Debris" },
  { src: "/work/debris-foundation.jpg", caption: "Before The Haul" },
  { src: "/work/patio-cleared.jpg", caption: "Patio Cleared" },
  { src: "/work/patio-covered.jpg", caption: "Ready To Enjoy" },
  { src: "/work/deck-before-wide.jpg", caption: "Tired Old Deck" },
  { src: "/work/deck-hauled.jpg", caption: "Loaded And Gone" },
];

const deckProcess = [
  { src: "/work/deck-before.jpg", label: "Before" },
  { src: "/work/deck-tearout.jpg", label: "Tear-Out" },
  { src: "/work/deck-joists.jpg", label: "Down To The Frame" },
  { src: "/work/deck-cleared.jpg", label: "Cleared" },
];

export function Gallery() {
  return (
    <section className="section gal-band" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Our Work</span>
          <h2>Recent Jobs Around Atlanta</h2>
          <p>
            Real hauls from around the metro, from a pile of construction debris
            to a full backyard deck taken down to nothing.
          </p>
        </div>

        <div className="gal-grid">
          {gallery.map((g) => (
            <div className="gal" key={g.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.caption} loading="lazy" />
              <div className="cap">{g.caption}</div>
            </div>
          ))}
        </div>

        <div className="process-block">
          <div className="process-head">
            <span className="kicker">Start To Finish</span>
            <h3>A Deck Teardown, Step By Step</h3>
            <p>One backyard deck, stripped to the frame, hauled off, and left clean.</p>
          </div>
          <div className="process-strip">
            {deckProcess.map((p, i) => (
              <figure className="pstep" key={p.src}>
                <div className="pstep-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.label} loading="lazy" />
                  <span className="pnum">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <figcaption>{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
