"use client";

import { useState } from "react";

const clips = [
  { src: "/videos/job-cumming.mp4", poster: "/videos/job-cumming.jpg", label: "On Site In Cumming" },
  { src: "/videos/loaded-trailer.mp4", poster: "/videos/loaded-trailer.jpg", label: "Loaded And Rolling" },
  { src: "/videos/on-the-road.mp4", poster: "/videos/on-the-road.jpg", label: "Headed To The Job" },
  { src: "/videos/job-atlanta.mp4", poster: "/videos/job-atlanta.jpg", label: "Working In Atlanta" },
  { src: "/videos/demo-day.mp4", poster: "/videos/demo-day.jpg", label: "Demo Day" },
];

function VideoCard({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="vid-card">
      <div className="vid-frame">
        {playing ? (
          <video className="vid" src={src} controls autoPlay playsInline />
        ) : (
          <button
            type="button"
            className="vid-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt={label} loading="lazy" />
            <span className="vid-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

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
            <VideoCard key={c.src} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
