import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebSiteSchema } from "@/app/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://comentologia.online";

export const metadata: Metadata = {
  title: {
    default: "Comentologia - Revista de Farándula y Espectáculos",
    template: "%s - Comentologia",
  },
  description:
    "Tu fuente de confianza para las últimas noticias de farándula, chismes de celebridades y entretenimiento.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "Comentologia",
    title: "Comentologia - Revista de Farándula y Espectáculos",
    description:
      "Tu fuente de confianza para las últimas noticias de farándula, chismes de celebridades y entretenimiento.",
    url: SITE_URL,
    locale: "es_MX",
    images: [{ url: `${SITE_URL}/portada.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comentologia - Revista de Farándula y Espectáculos",
    description:
      "Tu fuente de confianza para las últimas noticias de farándula, chismes de celebridades y entretenimiento.",
    images: [`${SITE_URL}/portada.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`h-full antialiased scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <WebSiteSchema />
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
          <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg px-6 py-3 flex items-center justify-between">
            <a
              href="/"
              className="font-serif text-2xl font-bold text-primary"
            >
              Comentologia
            </a>
            <div className="flex items-center gap-6 text-sm font-medium text-muted">
              <a
                href="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="/dmca"
                className="hover:text-primary transition-colors duration-200"
              >
                DMCA
              </a>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-white py-8 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <a
                href="/"
                className="font-serif text-xl font-bold text-primary"
              >
                Comentologia
              </a>
              <p className="text-sm text-muted">
                © 2020 - 2026 Comentologia. Todos los derechos
                reservados.
              </p>
              <a
                href="/dmca"
                className="text-sm text-muted hover:text-primary transition-colors duration-200"
              >
                DMCA
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
