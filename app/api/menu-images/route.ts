import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("menu_images")
      .select("product_key, image_url");

    if (error) throw error;

    const images = Object.fromEntries(
      (data ?? []).map((item) => [item.product_key, item.image_url]),
    );

    return Response.json(
      { images },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
    );
  } catch (error) {
    console.error("menu_images_error", error);
    return Response.json({ images: {} });
  }
}
