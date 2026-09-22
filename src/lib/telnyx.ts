// Sends an SMS to the owner via Telnyx. Reads credentials from env at call
// time. If anything is missing or fails, it stays quiet so a texting
// problem never blocks a customer's quote from being saved.
export async function sendOwnerSms(text: string): Promise<void> {
  const apiKey = process.env.TELNYX_API_KEY;
  const from = process.env.TELNYX_PHONE_NUMBER;
  const to = process.env.NOTIFY_PHONE_OWNER;
  if (!apiKey || !from || !to) return;
  try {
    await fetch("https://api.telnyx.com/v2/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from, to, text }),
    });
  } catch {
    // swallow: the submission already succeeded
  }
}
