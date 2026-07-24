"use client";

import { FormEvent, useMemo, useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: string;
  art: string;
};

type Member = {
  name: string;
  phone: string;
  points: number;
  visits: number;
};

const categories = ["Todos", "Para compartir", "Hamburguesas", "Platos", "Bebidas"];

const menuItems: MenuItem[] = [
  {
    name: "Alitas Barbudos",
    description: "10 alitas crujientes con salsa de la casa, apio y dip cremoso.",
    price: "₡5.900",
    category: "Para compartir",
    tag: "Favorito",
    art: "wings",
  },
  {
    name: "Papas Bravas",
    description: "Papas rústicas, salsa brava ahumada, alioli y cebollín.",
    price: "₡3.800",
    category: "Para compartir",
    art: "fries",
  },
  {
    name: "La Barbuda",
    description: "Carne de res, queso, cebolla caramelizada, tocineta y salsa especial.",
    price: "₡6.900",
    category: "Hamburguesas",
    tag: "La de la casa",
    art: "burger",
  },
  {
    name: "La Fuego",
    description: "Carne de res, pepper jack, jalapeño, pico de gallo y mayo picante.",
    price: "₡7.200",
    category: "Hamburguesas",
    tag: "Picante",
    art: "fire",
  },
  {
    name: "Costilla BBQ",
    description: "Costilla cocida lentamente, BBQ de café, papas y ensalada fresca.",
    price: "₡8.900",
    category: "Platos",
    art: "ribs",
  },
  {
    name: "Tacos del Barrio",
    description: "Tres tacos de birria, queso, cebolla, culantro y consomé.",
    price: "₡6.500",
    category: "Platos",
    tag: "Nuevo",
    art: "tacos",
  },
  {
    name: "Barbudo Sour",
    description: "Whisky, limón, sirope especiado, clara y bitters.",
    price: "₡4.500",
    category: "Bebidas",
    art: "cocktail",
  },
  {
    name: "Limonada de la Casa",
    description: "Limón, hierbabuena, jengibre y soda. También disponible con gin.",
    price: "₡2.900",
    category: "Bebidas",
    art: "lemonade",
  },
];

const rewards = [
  { name: "Papas de la casa", cost: 180, note: "Para acompañar tu próxima visita" },
  { name: "Postre del día", cost: 250, note: "Un cierre dulce por la casa" },
  { name: "Combo Barbudos", cost: 420, note: "Hamburguesa clásica + bebida" },
];

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export default function Home() {
  const [category, setCategory] = useState("Todos");
  const [reservationState, setReservationState] = useState<{
    loading: boolean;
    message: string;
    code?: string;
  }>({ loading: false, message: "" });
  const [member, setMember] = useState<Member | null>(null);
  const [loyaltyName, setLoyaltyName] = useState("");
  const [loyaltyPhone, setLoyaltyPhone] = useState("");
  const [loyaltyState, setLoyaltyState] = useState({
    loading: false,
    message: "",
    canJoin: false,
  });

  const filteredItems = useMemo(
    () =>
      category === "Todos"
        ? menuItems
        : menuItems.filter((item) => item.category === category),
    [category],
  );

  const today = new Date().toISOString().split("T")[0];

  async function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReservationState({ loading: true, message: "" });
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { code?: string; error?: string };
      if (!response.ok) throw new Error(result.error || "No pudimos guardar la reservación.");
      setReservationState({
        loading: false,
        message: "¡Listo! Tu solicitud quedó registrada.",
        code: result.code,
      });
      event.currentTarget.reset();
    } catch (error) {
      setReservationState({
        loading: false,
        message: error instanceof Error ? error.message : "Intentá de nuevo.",
      });
    }
  }

  async function lookupMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phone = normalizePhone(loyaltyPhone);
    if (!phone) return;
    setLoyaltyState({ loading: true, message: "", canJoin: false });

    try {
      const response = await fetch(`/api/loyalty?phone=${encodeURIComponent(phone)}`);
      if (response.status === 404) {
        setMember(null);
        setLoyaltyState({
          loading: false,
          message: "Todavía no encontramos una cuenta con este teléfono.",
          canJoin: true,
        });
        return;
      }
      const result = (await response.json()) as { member?: Member; error?: string };
      if (!response.ok || !result.member) {
        throw new Error(result.error || "No pudimos consultar tus puntos.");
      }
      setMember(result.member);
      setLoyaltyName(result.member.name);
      setLoyaltyState({ loading: false, message: "", canJoin: false });
    } catch (error) {
      setLoyaltyState({
        loading: false,
        message: error instanceof Error ? error.message : "Intentá de nuevo.",
        canJoin: false,
      });
    }
  }

  async function joinClub() {
    const phone = normalizePhone(loyaltyPhone);
    if (!phone || !loyaltyName.trim()) {
      setLoyaltyState({
        loading: false,
        message: "Escribí tu nombre para crear la cuenta.",
        canJoin: true,
      });
      return;
    }
    setLoyaltyState({ loading: true, message: "", canJoin: true });

    try {
      const response = await fetch("/api/loyalty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "join", phone, name: loyaltyName }),
      });
      const result = (await response.json()) as { member?: Member; error?: string };
      if (!response.ok || !result.member) {
        throw new Error(result.error || "No pudimos crear la cuenta.");
      }
      setMember(result.member);
      setLoyaltyState({
        loading: false,
        message: "¡Bienvenido! Empezás con 120 puntos.",
        canJoin: false,
      });
    } catch (error) {
      setLoyaltyState({
        loading: false,
        message: error instanceof Error ? error.message : "Intentá de nuevo.",
        canJoin: true,
      });
    }
  }

  async function redeemReward(reward: (typeof rewards)[number]) {
    if (!member) return;
    setLoyaltyState({ loading: true, message: "", canJoin: false });

    try {
      const response = await fetch("/api/loyalty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "redeem",
          phone: member.phone,
          reward: reward.name,
        }),
      });
      const result = (await response.json()) as { member?: Member; error?: string };
      if (!response.ok || !result.member) {
        throw new Error(result.error || "No fue posible realizar el canje.");
      }
      setMember(result.member);
      setLoyaltyState({
        loading: false,
        message: `Canjeaste ${reward.name}. Mostrá esta pantalla al equipo de Barbudos.`,
        canJoin: false,
      });
    } catch (error) {
      setLoyaltyState({
        loading: false,
        message: error instanceof Error ? error.message : "Intentá de nuevo.",
        canJoin: false,
      });
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Barbudos, volver al inicio">
          <span className="brand-mark">B</span>
          <span>BARBUDOS</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#menu">Menú</a>
          <a href="#reservar">Reservar</a>
          <a href="#puntos">Mis puntos</a>
        </nav>
        <a className="button button-small" href="#reservar">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">BAR · RESTAURANTE · BUENOS RATOS</p>
          <h1>
            Comé rico.
            <span>Volvé pronto.</span>
          </h1>
          <p className="hero-description">
            Tu lugar para compartir, brindar y sumar puntos por cada visita. Explorá
            el menú, reservá tu mesa y descubrí todo lo que Barbudos tiene para vos.
          </p>
          <div className="hero-actions">
            <a className="button" href="#menu">
              Ver el menú <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#puntos">
              Consultar mis puntos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Beneficios de Barbudos">
            <div>
              <strong>+1 punto</strong>
              <span>por cada ₡100</span>
            </div>
            <div>
              <strong>120 pts</strong>
              <span>de bienvenida</span>
            </div>
            <div>
              <strong>Sin app</strong>
              <span>solo tu teléfono</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Experiencia Barbudos">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="share-card">
            <img
              src="/og.png"
              alt="Barbudos: Escaneá, elegí y disfrutá, con hamburguesa, papas y coctel"
            />
          </div>
          <div className="floating-card floating-top">
            <span className="pulse-dot" />
            <div>
              <strong>Abierto hoy</strong>
              <span>12:00 m. - 11:00 p. m.</span>
            </div>
          </div>
          <div className="floating-card floating-bottom">
            <span className="stamp">+20</span>
            <div>
              <strong>Puntos extra</strong>
              <span>en tu próxima visita</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Características">
        <span>BUENA COMIDA</span><i>✦</i>
        <span>COCTELERÍA DE LA CASA</span><i>✦</i>
        <span>RESERVAS EN LÍNEA</span><i>✦</i>
        <span>PUNTOS QUE SÍ ANTOJAN</span>
      </section>

      <section className="menu-section section" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ANTOJOS PARA TODOS</p>
            <h2>¿Qué se te antoja hoy?</h2>
          </div>
          <p>
            Una selección de favoritos para compartir, descubrir y pedir otra vez.
          </p>
        </div>

        <div className="category-tabs" role="tablist" aria-label="Categorías del menú">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
              role="tab"
              aria-selected={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <div className={`food-art ${item.art}`} aria-hidden="true">
                <span className="art-label">{item.category}</span>
                <span className="art-number">{item.name.slice(0, 2).toUpperCase()}</span>
                <i className="plate plate-one" />
                <i className="plate plate-two" />
              </div>
              <div className="menu-card-body">
                <div className="menu-title-row">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.description}</p>
                {item.tag && <span className="tag">{item.tag}</span>}
              </div>
            </article>
          ))}
        </div>
        <p className="menu-note">
          * Menú de muestra. Precios y disponibilidad pueden variar.
        </p>
      </section>

      <section className="reservation-section section" id="reservar">
        <div className="reservation-intro">
          <p className="eyebrow light">TU MESA TE ESPERA</p>
          <h2>Hagamos espacio para algo bueno.</h2>
          <p>
            Contanos cuándo venís y cuántas personas nos acompañan. El equipo de
            Barbudos confirmará tu mesa.
          </p>
          <div className="reservation-details">
            <div>
              <span>01</span>
              <p><strong>Elegí la fecha</strong> y la hora que más te conviene.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Dejanos tus datos</strong> para confirmar la solicitud.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Llegá con hambre.</strong> Nosotros hacemos el resto.</p>
            </div>
          </div>
        </div>

        <form className="reservation-form" onSubmit={submitReservation}>
          <div className="form-heading">
            <span className="form-kicker">RESERVACIÓN</span>
            <h3>Guardá tu mesa</h3>
          </div>
          <label>
            Nombre completo
            <input name="name" placeholder="Tu nombre" required />
          </label>
          <label>
            Teléfono
            <input name="phone" type="tel" placeholder="8888 8888" required />
          </label>
          <div className="form-row">
            <label>
              Fecha
              <input name="date" type="date" min={today} required />
            </label>
            <label>
              Hora
              <select name="time" defaultValue="" required>
                <option value="" disabled>Elegir</option>
                <option>12:00 p. m.</option>
                <option>1:30 p. m.</option>
                <option>5:00 p. m.</option>
                <option>6:30 p. m.</option>
                <option>8:00 p. m.</option>
                <option>9:30 p. m.</option>
              </select>
            </label>
          </div>
          <label>
            Cantidad de personas
            <select name="guests" defaultValue="2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "persona" : "personas"}
                </option>
              ))}
            </select>
          </label>
          <label>
            Nota especial <span>(opcional)</span>
            <textarea name="notes" placeholder="Cumpleaños, silla para bebé, alergias..." />
          </label>
          <button className="button button-full" disabled={reservationState.loading}>
            {reservationState.loading ? "Guardando..." : "Solicitar reservación"}
          </button>
          {reservationState.message && (
            <div className="form-message" role="status">
              <strong>{reservationState.message}</strong>
              {reservationState.code && <span>Código: {reservationState.code}</span>}
            </div>
          )}
        </form>
      </section>

      <section className="loyalty-section section" id="puntos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MI BARBUDOS</p>
            <h2>Tu próxima recompensa está más cerca.</h2>
          </div>
          <p>
            Identificate con tu teléfono, sumá puntos en cada visita y canjealos por
            algo que realmente querés probar.
          </p>
        </div>

        <div className="loyalty-layout">
          <div className="member-panel">
            {!member ? (
              <>
                <span className="mini-label">CONSULTÁ TU CUENTA</span>
                <h3>¿Ya sos parte del club?</h3>
                <p>
                  Ingresá el teléfono que usaste en Barbudos. Si es tu primera vez,
                  te regalamos 120 puntos de bienvenida.
                </p>
                <form className="member-form" onSubmit={lookupMember}>
                  {loyaltyState.canJoin && (
                    <label>
                      Tu nombre
                      <input
                        value={loyaltyName}
                        onChange={(event) => setLoyaltyName(event.target.value)}
                        placeholder="¿Cómo te llamás?"
                      />
                    </label>
                  )}
                  <label>
                    Teléfono
                    <input
                      type="tel"
                      value={loyaltyPhone}
                      onChange={(event) => setLoyaltyPhone(event.target.value)}
                      placeholder="8888 8888"
                      required
                    />
                  </label>
                  <button className="button button-full" disabled={loyaltyState.loading}>
                    {loyaltyState.loading ? "Consultando..." : "Ver mis puntos"}
                  </button>
                </form>
                {loyaltyState.message && (
                  <p className="loyalty-message" role="status">{loyaltyState.message}</p>
                )}
                {loyaltyState.canJoin && (
                  <button className="join-button" onClick={joinClub} disabled={loyaltyState.loading}>
                    Crear mi cuenta con 120 puntos →
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="member-header">
                  <div>
                    <span className="mini-label">HOLA, {member.name.toUpperCase()}</span>
                    <h3>Mi balance</h3>
                  </div>
                  <button
                    className="ghost-button"
                    onClick={() => {
                      setMember(null);
                      setLoyaltyState({ loading: false, message: "", canJoin: false });
                    }}
                  >
                    Salir
                  </button>
                </div>
                <div
                  className="points-ring"
                  style={{ "--points-progress": `${Math.min(member.points / 4.2, 100)}%` } as React.CSSProperties}
                >
                  <div>
                    <strong>{member.points}</strong>
                    <span>puntos</span>
                  </div>
                </div>
                <div className="member-stats">
                  <div><strong>{member.visits}</strong><span>visitas</span></div>
                  <div><strong>{Math.max(0, 180 - member.points)}</strong><span>para tu 1.er premio</span></div>
                </div>
                {loyaltyState.message && (
                  <p className="loyalty-message success" role="status">{loyaltyState.message}</p>
                )}
              </>
            )}
          </div>

          <div className="rewards-panel">
            <div className="rewards-heading">
              <div>
                <span className="mini-label">RECOMPENSAS</span>
                <h3>Elegí tu próximo antojo</h3>
              </div>
              <span className="reward-count">3 premios</span>
            </div>
            <div className="reward-list">
              {rewards.map((reward, index) => {
                const canRedeem = !!member && member.points >= reward.cost;
                return (
                  <article className="reward-card" key={reward.name}>
                    <span className={`reward-art reward-${index + 1}`}>0{index + 1}</span>
                    <div>
                      <h4>{reward.name}</h4>
                      <p>{reward.note}</p>
                      <strong>{reward.cost} puntos</strong>
                    </div>
                    <button
                      onClick={() => redeemReward(reward)}
                      disabled={!canRedeem || loyaltyState.loading}
                      aria-label={`Canjear ${reward.name} por ${reward.cost} puntos`}
                    >
                      {canRedeem ? "Canjear" : "Bloqueado"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow light">NOS VEMOS EN BARBUDOS</p>
        <h2>La mesa está lista.<br />Solo faltás vos.</h2>
        <div className="closing-actions">
          <a className="button" href="#reservar">Reservar mesa</a>
          <a className="text-link light-link" href="#menu">Volver al menú ↑</a>
        </div>
      </section>

      <footer>
        <div>
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">B</span>
            <span>BARBUDOS</span>
          </a>
          <p>Buena comida. Buenos tragos. Mejores historias.</p>
        </div>
        <div className="footer-links">
          <a href="#menu">Menú</a>
          <a href="#reservar">Reservaciones</a>
          <a href="#puntos">Puntos</a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Barbudos</span>
          <span>Diseño y desarrollo: Andrés Garita R</span>
        </div>
      </footer>

      <nav className="mobile-nav" aria-label="Navegación móvil">
        <a href="#menu"><span>☰</span>Menú</a>
        <a href="#reservar"><span>◇</span>Reservar</a>
        <a href="#puntos"><span>★</span>Puntos</a>
      </nav>
    </main>
  );
}
