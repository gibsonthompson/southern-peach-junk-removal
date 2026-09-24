"use client";

import { useState } from "react";

const PIN_LENGTH = 4;
const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

export function AdminLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  async function submit(code: string) {
    setChecking(true);
    setError(false);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: code }),
      });
      if (!res.ok) throw new Error();
      window.location.reload();
    } catch {
      setError(true);
      setPin("");
      setChecking(false);
    }
  }

  function press(k: string) {
    if (checking || k === "") return;
    if (k === "del") {
      setPin((p) => p.slice(0, -1));
      setError(false);
      return;
    }
    setError(false);
    setPin((p) => {
      if (p.length >= PIN_LENGTH) return p;
      const next = p + k;
      if (next.length === PIN_LENGTH) submit(next);
      return next;
    });
  }

  return (
    <div className="pin-wrap">
      <div className="pin-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pin-logo" src="/peach-mark.png" alt="Southern Peach" />
        <h1>Admin</h1>
        <p className="pin-sub">Enter your PIN</p>

        <div className={`pin-dots ${error ? "err" : ""}`}>
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <span key={i} className={`pin-dot ${i < pin.length ? "on" : ""}`} />
          ))}
        </div>
        <p className="pin-error">{error ? "Incorrect PIN" : ""}</p>

        <div className="pin-pad">
          {KEYS.map((k, i) =>
            k === "" ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                type="button"
                className="pin-key"
                onClick={() => press(k)}
                disabled={checking}
                aria-label={k === "del" ? "Delete" : k}
              >
                {k === "del" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 5H8l-5 7 5 7h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                    <path d="m15 9-6 6M9 9l6 6" />
                  </svg>
                ) : (
                  k
                )}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
