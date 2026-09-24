import { NextResponse } from "next/server";
import { getSupabaseAdmin, QUOTE_TABLE, STATUSES } from "@/lib/supabase";
import { isAdmin } from "@/lib/admin-auth";

export const runtime = "nodejs";

// Protected by middleware (Basic Auth on /api/admin/*).
export async function POST(req: Request) {
  if (!isAdmin()) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  try {
    const { id, status } = await req.json();
    if (!id || !STATUSES.includes(status)) {
      return NextResponse.json({ error: "Bad request." }, { status: 400 });
    }
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from(QUOTE_TABLE)
      .update({ status })
      .eq("id", id);
    if (error) {
      return NextResponse.json({ error: "Update failed." }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error." }, { status: 500 });
  }
}
