import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Fasting = Freedom`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "fasting",
    "food freedom",
    "ancestral health",
    "metabolic control",
    "Greek fasting",
    "ancestral wisdom",
    "intermittent fasting",
    "FastOS"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${site.name} | Fasting = Freedom`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/brand-hero.png",
        width: 1672,
        height: 941,
        alt: "My Big Greek Fasting brand image with Aegean architecture"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Fasting = Freedom`,
    description: site.description,
    images: ["/images/brand-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
