import Link from "next/link";
import { haulItems } from "@/data/haul";
import { Icon } from "@/components/icons";

export function WhatWeHaul() {
  return (
    <section className="section take-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">If It&apos;s In The Way, It&apos;s Gone</span>
          <h2>What We Haul</h2>
          <p>
            Non-hazardous household, commercial, and outdoor material. Not sure
            about something? Just ask.
          </p>
        </div>
        <div className="take-grid">
          {haulItems.map((item) => (
            <Link className="take" href={`/services/${item.slug}`} key={item.label}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <p className="take-note">
          Do not see it here? We take almost everything non-hazardous.{" "}
          <a href="/quote">Send a photo</a> and we will tell you straight.
        </p>
      </div>
    </section>
  );
}
