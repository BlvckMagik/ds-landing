import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Dela_Gothic_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const delaGothicOne = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-dela-gothic-one",
  display: "swap",
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Drako Schule | Сучасна освіта для майбутнього",
  description:
    "Drako Schule — це інноваційна школа, де кожен учень розкриває свій потенціал. Ми пропонуємо якісну освіту, сучасні методи навчання та індивідуальний підхід до кожного. Приєднуйтесь до нас, щоб створити разом майбутнє, наповнене знаннями та можливостями!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${montserrat.variable} ${delaGothicOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
