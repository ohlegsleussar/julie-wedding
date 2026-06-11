import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, Montserrat } from "next/font/google";
import { LangProvider } from "@/context/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Bridal Elegance",
  description: "Luxury wedding dresses",
  icons: {
  icon: "/favico.ico",
  shortcut: "/favico.ico",
  apple: "/favico.ico",
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        
        <LangProvider>
          {children}
        </LangProvider>

      </body>
    </html>
  );
}