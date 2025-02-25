import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Dela_Gothic_One,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cookies } from "next/headers";

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
  title: "Drako Schule | Сучасний простір для вивчення мов",
  description:
    "Drako Schule — це місце, де навчання перетворюється на казку! Ми пропонуємо якісні заняття, цікаву подачу матеріалу та індивідуальний підхід до кожного. Приєднуйтесь до нас та зануртесь у Всесвіт драконів!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userCookies = await cookies();
  const isDarkModeEnabled =
    userCookies.get("isDarkModeEnabled")?.value || "light";
  return (
    <html lang="uk" className={isDarkModeEnabled === "true" ? "dark" : ""}>
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Drako Schule | Сучасний простір для вивчення мов"
      />
      <meta
        property="og:description"
        content="Drako Schule — це місце, де навчання перетворюється на казку! Ми пропонуємо якісні заняття, цікаву подачу матеріалу та індивідуальний підхід до кожного. Приєднуйтесь до нас та зануртесь у Всесвіт драконів!"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/di1lzfsaa/image/upload/v1738929811/drako-schule-banner.jpg"
      />
      <meta property="og:image:alt" content="Drako Schule banner" />
      <meta property="og:url" content="https://ds-landing-weld.vercel.app/" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="Drako Schule" />

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
