import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-only admin client (uses the service role key). Never import this
// into a client component. Created lazily so a missing env var does not
// break the build, only a live request.
export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }
  return createClient(url, key, { auth: { persistSession: false } });
}

export const QUOTE_BUCKET = "quote-photos";
export const QUOTE_TABLE = "quote_submissions";
export const STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;
export type Status = (typeof STATUSES)[number];

export type Submission = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  city: string | null;
  service: string | null;
  details: string | null;
  photo_urls: string[];
  status: Status;
};
