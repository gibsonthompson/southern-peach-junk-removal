import { NextResponse } from "next/server";
import { tokenFor, ADMIN_COOKIE } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const pin = typeof body.pin === "string" ? body.pin : "";
  const expected = process.env.ADMIN_PIN;

  if (!expected) {
    return NextResponse.json({ error: "Admin PIN is not configured." }, { status: 500 });
  }
  if (pin !== expected) {
    await new Promise((r) => setTimeout(r, 400)); // slow brute force
    return NextResponse.json({ error: "Incorrect PIN." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, tokenFor(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
