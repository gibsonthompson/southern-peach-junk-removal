import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_COOKIE = "sp_admin";

export function tokenFor(pin: string): string {
  return crypto.createHash("sha256").update(`sp:${pin}`).digest("hex");
}

// True when the request carries a valid admin session cookie.
export function isAdmin(): boolean {
  const pin = process.env.ADMIN_PIN;
  if (!pin) return false;
  const got = cookies().get(ADMIN_COOKIE)?.value;
  return !!got && got === tokenFor(pin);
}
