export function Crew() {
  return (
    <section className="section crew-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">The Crew</span>
          <h2>The Same Crew, Every Job</h2>
          <p>
            You get the same crew from the first call to the last load on the
            truck. We show up when we say we will, work clean, and treat your
            property like it is ours.
          </p>
        </div>
        <div className="crew-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/crew-banner.jpg"
            alt="The Southern Peach Junk Removal crew"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
