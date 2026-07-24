import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

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
