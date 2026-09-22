"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";
import { coreServices, subServices } from "@/data/services";
import { locations } from "@/data/locations";

const serviceOptions = [...coreServices, ...subServices].map((s) => s.name);

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [photoCount, setPhotoCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/quote", { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="quote-success">
        <Icon name="check" />
        <h3>Got it. We&apos;ll be in touch shortly.</h3>
        <p>
          Your request is in and we&apos;ll get you a quote today. Need us
          sooner? Call{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">Email (optional)</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <select id="city" name="city" defaultValue="">
            <option value="" disabled>
              Select a city
            </option>
            {locations.map((l) => (
              <option key={l.slug} value={l.name}>
                {l.name}
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              What do you need?
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="What needs to go? Roughly how much, and any access notes (stairs, gate code, etc.)"
          />
        </div>
        <div className="field field-full">
          <label htmlFor="photos">Photos (optional, up to 10)</label>
          <label className="file-drop" htmlFor="photos">
            <Icon name="camera" />
            <span>
              {photoCount > 0
                ? `${photoCount} photo${photoCount > 1 ? "s" : ""} attached`
                : "Tap to add photos of your junk"}
            </span>
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
          />
        </div>
      </div>

      {status === "error" && <p className="form-error">{error}</p>}

      <button
        className="btn btn-primary form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send My Request"}
      </button>
      <p className="form-note">
        Prefer to talk? Call or text{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </form>
  );
}
