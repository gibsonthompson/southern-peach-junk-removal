// Sends the new-quote SMS to the owner (and admin, if set) via Telnyx.
// Reads credentials from env at call time. Never throws, so a texting
// problem can't block a customer's quote from being saved. Failures are
// logged (without the API key) so they show up in the Vercel function logs.

// Telnyx requires E.164 numbers (+1XXXXXXXXXX). Normalize whatever format
// the env var is stored in so a stray space or missing +1 doesn't fail.
function e164(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (trimmed.startsWith("+")) return "+" + trimmed.slice(1).replace(/\D/g, "");
  const d = trimmed.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith("1")) return `+${d}`;
  return d ? `+${d}` : null;
}

export async function sendOwnerSms(text: string): Promise<void> {
  const apiKey = process.env.TELNYX_API_KEY;
  const from = e164(process.env.TELNYX_PHONE_NUMBER);
  const recipients = Array.from(
    new Set(
      [process.env.NOTIFY_PHONE_OWNER, process.env.NOTIFY_PHONE_ADMIN]
        .map(e164)
        .filter((n): n is string => !!n)
    )
  );

  if (!apiKey || !from || recipients.length === 0) {
    console.error("[sms] not sent, missing config", {
      hasApiKey: !!apiKey,
      hasFrom: !!from,
      recipientCount: recipients.length,
    });
    return;
  }

  await Promise.all(
    recipients.map(async (to) => {
      try {
        const res = await fetch("https://api.telnyx.com/v2/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ from, to, text }),
        });
        if (!res.ok) {
          const body = await res.text().catch(() => "");
          console.error(`[sms] Telnyx responded ${res.status}: ${body.slice(0, 400)}`);
        }
      } catch (err) {
        console.error("[sms] send failed", err);
      }
    })
  );
}
