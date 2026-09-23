const clips = [
  { src: "/videos/job-cumming.mp4", poster: "/videos/job-cumming.jpg", label: "On Site In Cumming" },
  { src: "/videos/loaded-trailer.mp4", poster: "/videos/loaded-trailer.jpg", label: "Loaded And Rolling" },
  { src: "/videos/on-the-road.mp4", poster: "/videos/on-the-road.jpg", label: "Headed To The Job" },
  { src: "/videos/job-atlanta.mp4", poster: "/videos/job-atlanta.jpg", label: "Working In Atlanta" },
  { src: "/videos/demo-day.mp4", poster: "/videos/demo-day.jpg", label: "Demo Day" },
];

export function Videos() {
  return (
    <section className="section vid-band" id="videos">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">See Us In Action</span>
          <h2>Straight From The Job</h2>
          <p>
            Real crews, real trucks, real hauls around metro Atlanta. Tap any clip
            to play.
          </p>
        </div>
        <div className="vid-strip">
          {clips.map((c) => (
            <figure className="vid-card" key={c.src}>
              <video className="vid" preload="none" poster={c.poster} controls playsInline>
                <source src={c.src} type="video/mp4" />
              </video>
              <figcaption>{c.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
