import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artisan Wooden Furniture | Pakistani Craftsmanship",
  description: "Discover exquisite handmade wooden furniture crafted by skilled Pakistani artisans. Each piece tells a story of heritage, tradition, and exceptional craftsmanship.",
  keywords: "wooden furniture, Pakistani craftsmanship, handmade furniture, artisan furniture",
  openGraph: {
    title: "Artisan Wooden Furniture | Pakistani Craftsmanship",
    description: "Discover exquisite handmade wooden furniture crafted by skilled Pakistani artisans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#faf8f3] text-[#2a2420]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
