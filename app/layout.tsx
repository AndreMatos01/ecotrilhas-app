import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecotrilhas",
  description: "Ecoturismo, roteiros e experiencias no Caparao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}
