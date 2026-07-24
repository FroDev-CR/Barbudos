import { eq } from "drizzle-orm";
import { ensureSchema, getD1, getDb } from "../../../db";
import { members, redemptions } from "../../../db/schema";

const rewardCosts: Record<string, number> = {
  "Papas de la casa": 180,
  "Postre del día": 250,
  "Combo Barbudos": 420,
};

function cleanPhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

function publicMember(member: {
  name: string;
  phone: string;
  points: number;
  visits: number;
}) {
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

    await ensureSchema();
    const db = getDb();
    const [member] = await db
      .select()
      .from(members)
      .where(eq(members.phone, phone))
      .limit(1);

    if (!member) {
      return Response.json({ error: "Cuenta no encontrada." }, { status: 404 });
    }

    return Response.json({ member: publicMember(member) });
  } catch (error) {
    console.error("loyalty_lookup_error", error);
    return Response.json(
      { error: "No pudimos consultar tus puntos." },
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

    await ensureSchema();
    const db = getDb();

    if (action === "join") {
      const name = String(body.name ?? "").trim().slice(0, 100);
      if (!name) {
        return Response.json({ error: "El nombre es requerido." }, { status: 400 });
      }

      const [existing] = await db
        .select()
        .from(members)
        .where(eq(members.phone, phone))
        .limit(1);
      if (existing) {
        return Response.json({ member: publicMember(existing) });
      }

      const [member] = await db
        .insert(members)
        .values({ name, phone, points: 120 })
        .returning();
      return Response.json({ member: publicMember(member) }, { status: 201 });
    }

    if (action === "redeem") {
      const reward = String(body.reward ?? "");
      const cost = rewardCosts[reward];
      if (!cost) {
        return Response.json({ error: "La recompensa no es válida." }, { status: 400 });
      }

      const d1 = getD1();
      const updated = await d1
        .prepare(
          `UPDATE members
           SET points = points - ?
           WHERE phone = ? AND points >= ?
           RETURNING id, name, phone, points, visits`,
        )
        .bind(cost, phone, cost)
        .first<{
          id: number;
          name: string;
          phone: string;
          points: number;
          visits: number;
        }>();

      if (!updated) {
        return Response.json(
          { error: "Todavía no tenés suficientes puntos para este premio." },
          { status: 409 },
        );
      }

      await db.insert(redemptions).values({
        memberId: updated.id,
        reward,
        pointsCost: cost,
      });

      return Response.json({ member: publicMember(updated) });
    }

    return Response.json({ error: "La acción no es válida." }, { status: 400 });
  } catch (error) {
    console.error("loyalty_action_error", error);
    return Response.json(
      { error: "No pudimos completar la acción." },
      { status: 500 },
    );
  }
}
