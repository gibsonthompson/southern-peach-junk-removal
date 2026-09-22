"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";
import { coreServices, subServices } from "@/data/services";
import { locations } from "@/data/locations";

const serviceOptions = [
  ...coreServices.map((s) => s.name),
  ...subServices.map((s) => s.name),
  "Not sure yet",
];
const cityOptions = [...locations.map((l) => l.name), "Other / not listed"];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`cs-chev ${open ? "open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CustomSelect({
  name,
  placeholder,
  options,
}: {
  name: string;
  placeholder: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="cs" ref={ref}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className={`cs-btn ${value ? "" : "cs-placeholder"}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value || placeholder}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <ul className="cs-panel" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              className={`cs-opt ${opt === value ? "sel" : ""}`}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
          Your request is in and we&apos;ll get you a quote today. Need us sooner?
          Call <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <p className="card-intro">
        Tell us what needs to go and add a few photos. We&apos;ll text you back a
        straight quote, usually the same day.
      </p>
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
          <label>City</label>
          <CustomSelect name="city" placeholder="Select a city" options={cityOptions} />
        </div>
        <div className="field field-full">
          <label>Service</label>
          <CustomSelect
            name="service"
            placeholder="What do you need?"
            options={serviceOptions}
          />
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
        Prefer to talk? Call or text <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </form>
  );
}
