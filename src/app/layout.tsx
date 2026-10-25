import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-white text-slate-800 antialiased">
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
