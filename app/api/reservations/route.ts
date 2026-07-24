import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

function cleanPhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim().slice(0, 100);
    const phone = cleanPhone(String(body.phone ?? ""));
    const date = String(body.date ?? "").trim();
    const time = String(body.time ?? "").trim();
    const guests = Number(body.guests ?? 0);
    const notes = String(body.notes ?? "").trim().slice(0, 500);

    if (!name || !phone || !date || !time || guests < 1 || guests > 12) {
      return Response.json(
        { error: "Revisá los datos de la reservación." },
        { status: 400 },
      );
    }

    const code = `BRB-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("reservations").insert({
      code,
      name,
      phone,
      reservation_date: date,
      reservation_time: time,
      guests,
      notes,
      status: "pending",
    });

    if (error) throw error;
    return Response.json({ code }, { status: 201 });
  } catch (error) {
    console.error("reservation_error", error);
    return Response.json(
      {
        error:
          error instanceof Error && error.message.includes("Supabase")
            ? "Falta configurar Supabase en Vercel."
            : "No pudimos guardar la reservación. Intentá de nuevo.",
      },
      { status: 500 },
    );
  }
}
