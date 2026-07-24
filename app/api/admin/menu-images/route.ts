import { timingSafeEqual } from "node:crypto";
import { MENU_ITEMS } from "@/data/menu";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

function isAuthorized(request: Request) {
  const supplied = request.headers.get("x-admin-key") ?? "";
  const expected = process.env.ADMIN_UPLOAD_KEY ?? "";
  if (!supplied || !expected) return false;

  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expected);
  if (suppliedBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Clave administrativa incorrecta." }, { status: 401 });
  }

  try {
    const form = await request.formData();
    const productKey = String(form.get("productKey") ?? "");
    const altText = String(form.get("altText") ?? "").trim().slice(0, 150);
    const image = form.get("image");
    const item = MENU_ITEMS.find((menuItem) => menuItem.id === productKey);

    if (!item) {
      return Response.json({ error: "El producto no es válido." }, { status: 400 });
    }
    if (!(image instanceof File)) {
      return Response.json({ error: "Seleccioná una imagen." }, { status: 400 });
    }
    if (!ALLOWED_TYPES.has(image.type)) {
      return Response.json(
        { error: "Usá una imagen JPG, PNG, WebP o AVIF." },
        { status: 400 },
      );
    }
    if (image.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "La imagen no puede superar 5 MB." },
        { status: 400 },
      );
    }

    const extension = image.name.split(".").pop()?.toLowerCase() || "jpg";
    const storagePath = `${productKey}.${extension}`;
    const bytes = Buffer.from(await image.arrayBuffer());
    const supabase = getSupabaseAdmin();

    const { error: uploadError } = await supabase.storage
      .from("menu-images")
      .upload(storagePath, bytes, {
        contentType: image.type,
        upsert: true,
        cacheControl: "3600",
      });
    if (uploadError) throw uploadError;

    const { data: publicUrl } = supabase.storage
      .from("menu-images")
      .getPublicUrl(storagePath);
    const imageUrl = `${publicUrl.publicUrl}?v=${Date.now()}`;

    const { error: databaseError } = await supabase.from("menu_images").upsert(
      {
        product_key: productKey,
        image_url: imageUrl,
        storage_path: storagePath,
        alt_text: altText || item.name,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "product_key" },
    );
    if (databaseError) throw databaseError;

    return Response.json({
      productKey,
      imageUrl,
      message: `Fotografía de ${item.name} actualizada.`,
    });
  } catch (error) {
    console.error("menu_image_upload_error", error);
    return Response.json(
      { error: "No pudimos subir la imagen. Revisá la configuración de Supabase." },
      { status: 500 },
    );
  }
}
