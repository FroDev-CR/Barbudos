import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host =
    incomingHeaders.get("x-forwarded-host") ??
    incomingHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    incomingHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Barbudos | Comé rico. Volvé pronto.",
    description:
      "Menú digital, reservaciones y recompensas de Barbudos en un solo lugar.",
    openGraph: {
      title: "Barbudos | Comé rico. Volvé pronto.",
      description:
        "Explorá el menú, reservá tu mesa y sumá puntos por cada visita.",
      type: "website",
      locale: "es_CR",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1732,
          height: 909,
          alt: "Barbudos: Escaneá, elegí y disfrutá.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Barbudos | Comé rico. Volvé pronto.",
      description:
        "Explorá el menú, reservá tu mesa y sumá puntos por cada visita.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
