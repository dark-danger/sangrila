import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sangrila Festival 2026 | Official Student Fest",
  description: "The official website for Sangrila Festival 2026. Register for events, meet the team, and experience the ultimate student fest.",
  keywords: ["Sangrila", "Festival", "College Fest", "Events", "Registration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-background text-foreground selection:bg-purple-500/30 selection:text-purple-200`}>
        {children}
      </body>
    </html>
  );
}
