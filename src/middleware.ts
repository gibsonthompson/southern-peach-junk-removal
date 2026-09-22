import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basic Auth gate for the admin dashboard and its API.
// Set ADMIN_USER and ADMIN_PASSWORD in the environment. If they are unset,
// access is denied (fail closed).
export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  const auth = req.headers.get("authorization");

  if (user && pass && auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const i = decoded.indexOf(":");
      const u = decoded.slice(0, i);
      const p = decoded.slice(i + 1);
      if (u === user && p === pass) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Southern Peach Admin"' },
  });
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
