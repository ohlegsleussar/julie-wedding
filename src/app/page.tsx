"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CatalogCarousel from "@/components/CatalogCarousel";
import Footer from "@/components/Footer";

import { useLang } from "@/context/LangContext";
import { translations } from "@/i18n/translations";

export default function Page() {
  const { lang } = useLang();

  return (
    <main className="bg-[#fbfaf8] text-[#1a1a1a]">

      <Header />

      <Hero />

      <div id="catalog">
        <CatalogCarousel />
      </div>

      {/* ABOUT */}
      <section id="about" className="py-32 text-center px-6 bg-[#fbfaf8]">
        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-xs text-[#b89b7a] mb-6">
            {translations[lang].about}
          </p>

          <h2 className="text-5xl md:text-6xl mb-8 font-light">
            {translations[lang].aboutTitle}
          </h2>

          <p className="text-lg leading-relaxed text-[#2a2a2a]">
            {translations[lang].aboutText}
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <div id="contact">
        <Footer />
      </div>

    </main>
  );
}