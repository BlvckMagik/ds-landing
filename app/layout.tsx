import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
