export function Crew() {
  return (
    <section className="section crew-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">The Crew</span>
          <h2>Locally Owned, On Every Job</h2>
          <p>
            The same crew that answers the phone is the one that shows up at your
            door. Real people from right here in Georgia, not a call center three
            states away.
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
