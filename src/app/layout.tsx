import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Southern Peach Junk Removal | Metro Atlanta Junk Removal & Dumpster Rental",
    template: "%s | Southern Peach Junk Removal",
  },
  description:
    "Junk removal, dumpster rentals, and light demolition across metro Atlanta. Licensed and insured, same-day availability, upfront quotes. Call (470) 760-5249.",
  keywords: [
    "junk removal Atlanta",
    "dumpster rental Atlanta",
    "junk removal metro Atlanta",
    "estate cleanout Atlanta",
    "light demolition Atlanta",
  ],
  openGraph: {
    title: "Southern Peach Junk Removal | Metro Atlanta",
    description:
      "Junk removal, dumpster rentals, and light demolition across metro Atlanta. Licensed, insured, same-day availability.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
