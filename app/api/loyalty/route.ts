import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const rewardCosts: Record<string, number> = {
  "Papas de la casa": 180,
  "Postre del día": 250,
  "Combo Barbudos": 420,
};

type Member = {
  name: string;
  phone: string;
  points: number;
  visits: number;
};

function cleanPhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

function publicMember(member: Member) {
  return {
    name: member.name,
    phone: member.phone,
    points: member.points,
    visits: member.visits,
  };
}

export async function GET(request: Request) {
  try {
    const phone = cleanPhone(new URL(request.url).searchParams.get("phone") ?? "");
    if (!phone) {
      return Response.json({ error: "El teléfono es requerido." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("members")
      .select("name, phone, points, visits")
      .eq("phone", phone)
      .maybeSingle<Member>();

    if (error) throw error;
    if (!data) {
      return Response.json({ error: "Cuenta no encontrada." }, { status: 404 });
    }

    return Response.json({ member: publicMember(data) });
  } catch (error) {
    console.error("loyalty_lookup_error", error);
    return Response.json(
      {
        error:
          error instanceof Error && error.message.includes("Supabase")
            ? "Falta configurar Supabase en Vercel."
            : "No pudimos consultar tus puntos.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const action = String(body.action ?? "");
    const phone = cleanPhone(String(body.phone ?? ""));
    if (!phone) {
      return Response.json({ error: "El teléfono es requerido." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    if (action === "join") {
      const name = String(body.name ?? "").trim().slice(0, 100);
      if (!name) {
        return Response.json({ error: "El nombre es requerido." }, { status: 400 });
      }

      const { data: existing, error: lookupError } = await supabase
        .from("members")
        .select("name, phone, points, visits")
        .eq("phone", phone)
        .maybeSingle<Member>();
      if (lookupError) throw lookupError;
      if (existing) {
        return Response.json({ member: publicMember(existing) });
      }

      const { data, error } = await supabase
        .from("members")
        .insert({ name, phone, points: 120, visits: 0 })
        .select("name, phone, points, visits")
        .single<Member>();
      if (error) throw error;

      return Response.json({ member: publicMember(data) }, { status: 201 });
    }

    if (action === "redeem") {
      const reward = String(body.reward ?? "");
      const cost = rewardCosts[reward];
      if (!cost) {
        return Response.json({ error: "La recompensa no es válida." }, { status: 400 });
      }

      const { data, error } = await supabase
        .rpc("redeem_reward", {
          p_phone: phone,
          p_reward: reward,
          p_cost: cost,
        })
        .single<Member>();

      if (error) {
        if (error.message.includes("insufficient_points")) {
          return Response.json(
            { error: "Todavía no tenés suficientes puntos para este premio." },
            { status: 409 },
          );
        }
        throw error;
      }

      return Response.json({ member: publicMember(data) });
    }

    return Response.json({ error: "La acción no es válida." }, { status: 400 });
  } catch (error) {
    console.error("loyalty_action_error", error);
    return Response.json(
      {
        error:
          error instanceof Error && error.message.includes("Supabase")
            ? "Falta configurar Supabase en Vercel."
            : "No pudimos completar la acción.",
      },
      { status: 500 },
    );
  }
}
