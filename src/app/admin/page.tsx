import { isAdmin } from "@/lib/admin-auth";
import { AdminLogin } from "@/components/AdminLogin";
import { AdminDashboard } from "@/components/AdminDashboard";
import { getSupabaseAdmin, QUOTE_TABLE, type Submission } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!isAdmin()) {
    return <AdminLogin />;
  }

  let submissions: Submission[] = [];
  let loadError = "";
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from(QUOTE_TABLE)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    submissions = (data as Submission[]) ?? [];
  } catch {
    loadError =
      "Could not load submissions. Check that Supabase env vars are set and the schema has been run.";
  }

  if (loadError) {
    return (
      <div className="admin-wrap">
        <p className="admin-empty">{loadError}</p>
      </div>
    );
  }

  return <AdminDashboard submissions={submissions} />;
}
