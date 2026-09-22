import { NextResponse } from "next/server";
import { getSupabaseAdmin, QUOTE_BUCKET, QUOTE_TABLE } from "@/lib/supabase";
import { sendOwnerSms } from "@/lib/telnyx";
import { site } from "@/data/site";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Please include your name and a phone number." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const files = form
      .getAll("photos")
      .filter((f): f is File => f instanceof File && f.size > 0);

    const photoUrls: string[] = [];
    for (const file of files.slice(0, 10)) {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from(QUOTE_BUCKET)
        .upload(path, file, {
          contentType: file.type || "image/jpeg",
          upsert: false,
        });
      if (!error) {
        const { data } = supabase.storage.from(QUOTE_BUCKET).getPublicUrl(path);
        photoUrls.push(data.publicUrl);
      }
    }

    const { error: insertError } = await supabase.from(QUOTE_TABLE).insert({
      name,
      phone,
      email: email || null,
      city: city || null,
      service: service || null,
      details: details || null,
      photo_urls: photoUrls,
    });

    if (insertError) {
      return NextResponse.json(
        { error: `Could not save your request. Please call us at ${site.phone}.` },
        { status: 500 }
      );
    }

    await sendOwnerSms(
      `New quote request\n${name} - ${phone}\n${city || "City n/a"} | ${
        service || "Service n/a"
      }\n${photoUrls.length} photo(s)\n${
        details ? details.slice(0, 300) : "(no details)"
      }\n${site.url}/admin`
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: `Something went wrong. Please call us at ${site.phone}.` },
      { status: 500 }
    );
  }
}
