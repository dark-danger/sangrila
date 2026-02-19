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
  description: "Experience the ultimate celebration of talent, culture, and creativity at Sangrila 2026. Register for dance, singing, fashion, and theatre events at Geeta University.",
  keywords: ["Sangrila 2026", "Sangrila Festival", "College Fest Panipat", "Geeta University Fest", "Student Cultural Festival", "Fashion Show Panipat", "Dance Competition 2026"],
  authors: [{ name: "Sangrila Team" }],
  openGraph: {
    title: "Sangrila Festival 2026 | Official Student Fest",
    description: "Experience the ultimate celebration of talent, culture, and creativity at Sangrila 2026.",
    url: "https://sangrila.vercel.app", // Placeholder, update if needed
    siteName: "Sangrila 2k26",
    images: [
      {
        url: "/logo.png", // Use logo as OG image for now
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangrila Festival 2026",
    description: "Join the biggest cultural fest of 2026 at Geeta University!",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://sangrila.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-background text-foreground selection:bg-purple-500/30 selection:text-purple-200`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Sangrila 2k26",
              "startDate": "2026-03-13",
              "endDate": "2026-03-14",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Geeta University",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "NH-71, Naultha",
                  "addressLocality": "Panipat",
                  "addressRegion": "Haryana",
                  "postalCode": "132145",
                  "addressCountry": "IN"
                }
              },
              "image": [
                "https://sangrila.vercel.app/logo.png"
              ],
              "description": "The biggest techno-cultural fest of Geeta University.",
              "organizer": {
                "@type": "Organization",
                "name": "Geeta University",
                "url": "https://geetauniversity.edu.in"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
