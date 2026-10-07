import type { Metadata, Viewport } from "next";
import { assetPath, siteConfig } from "@/data/site";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Casa da Lagoa | Hospedagem no Encano Alto em Indaial SC",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Casa da Lagoa | Um refúgio para desacelerar", description: siteConfig.description, url: "/", siteName: "Casa da Lagoa", locale: "pt_BR", type: "website" },
  twitter: { card: "summary", title: "Casa da Lagoa | Um refúgio para desacelerar", description: siteConfig.description },
  icons: { icon: assetPath("/favicon.svg"), shortcut: assetPath("/favicon.svg") },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#163c35" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
