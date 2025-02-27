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
import Header from "@/src/widgets/Header";
import Footer from "@/src/widgets/Footer";
import Script from "next/script";

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
  keywords:
    "школа німецької мови, німецька онлайн, вивчення німецької, курси німецької, німецька для дітей, німецька для початківців, Drako Schule",
  openGraph: {
    title: "Drako Schule | Сучасний простір для вивчення мов",
    description:
      "Drako Schule — це місце, де навчання перетворюється на казку! Ми пропонуємо якісні заняття, цікаву подачу матеріалу та індивідуальний підхід до кожного. Приєднуйтесь до нас та зануртесь у Всесвіт драконів!",
    url: "https://www.drakoschule.com.ua",
    siteName: "Drako Schule",
    locale: "uk_UA",
    type: "website",
  },
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
      <head>
        <meta property="og:type" content="website" />
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
        <meta property="og:url" content="https://www.drakoschule.com.ua/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Drako Schule" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://www.drakoschule.com.ua" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon 32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon 16x16.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Drako Schule",
            description: "Репетиторський центр німецької мови онлайн",
            url: "https://www.drakoschule.com.ua",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Ukraine",
            },
            teaches: ["German language", "Deutsche Sprache", "Німецька мова"],
            keywords:
              "школа німецької мови, німецька онлайн, вивчення німецької, курси німецької",
            educationalLevel: "All levels",
          })}
        </script>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y6MFLDH3T9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y6MFLDH3T9');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${delaGothicOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
