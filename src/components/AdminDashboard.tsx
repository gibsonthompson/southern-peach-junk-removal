"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { STATUSES, type Submission, type Status } from "@/lib/supabase";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
function smsHref(phone: string) {
  return `sms:${phone.replace(/[^\d+]/g, "")}`;
}
function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function SubmissionCard({ sub }: { sub: Submission }) {
  const [status, setStatus] = useState<Status>(sub.status);
  const [saving, setSaving] = useState(false);

  async function updateStatus(next: Status) {
    const prev = status;
    setStatus(next);
    setSaving(true);
    try {
      const res = await fetch("/api/admin/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: sub.id, status: next }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setStatus(prev);
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className={`sub-card status-${status}`}>
      <div className="sub-top">
        <div>
          <h3>{sub.name}</h3>
          <span className="sub-date">{fmtDate(sub.created_at)}</span>
        </div>
        <select
          className="status-select"
          value={status}
          disabled={saving}
          onChange={(e) => updateStatus(e.target.value as Status)}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="sub-meta">
        <span>
          <Icon name="pin" /> {sub.city || "City n/a"}
        </span>
        <span>
          <Icon name="trash" /> {sub.service || "Service n/a"}
        </span>
      </div>

      {sub.details && <p className="sub-details">{sub.details}</p>}

      {sub.photo_urls.length > 0 && (
        <div className="sub-photos">
          {sub.photo_urls.map((url) => (
            // eslint-disable-next-line @next/next/no-img-element
            <a key={url} href={url} target="_blank" rel="noreferrer">
              <img src={url} alt="Submitted photo" />
            </a>
          ))}
        </div>
      )}

      <div className="sub-actions">
        <a className="btn btn-primary" href={telHref(sub.phone)}>
          <Icon name="phone" /> Call {sub.phone}
        </a>
        <a className="btn btn-ghost" href={smsHref(sub.phone)}>
          Text
        </a>
        {sub.email && (
          <a className="btn btn-ghost" href={`mailto:${sub.email}`}>
            Email
          </a>
        )}
      </div>
    </article>
  );
}

export function AdminDashboard({ submissions }: { submissions: Submission[] }) {
  const counts = submissions.reduce<Record<string, number>>((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="admin-wrap">
      <header className="admin-head">
        <div>
          <h1>Quote Requests</h1>
          <p>
            {submissions.length} total
            {counts.new ? ` · ${counts.new} new` : ""}
          </p>
        </div>
      </header>

      {submissions.length === 0 ? (
        <p className="admin-empty">No requests yet. They will show up here the moment one comes in.</p>
      ) : (
        <div className="sub-grid">
          {submissions.map((sub) => (
            <SubmissionCard key={sub.id} sub={sub} />
          ))}
        </div>
      )}
    </div>
  );
}
