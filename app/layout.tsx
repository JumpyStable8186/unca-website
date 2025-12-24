import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Unca - Personal Website",
  description: "Personal website and blog",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="antialiased font-sans bg-[#F2F3F2] text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

