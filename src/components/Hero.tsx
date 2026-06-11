"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/i18n/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations?.[lang] ?? translations.EN;

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">

        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-white">

          {/* LABEL */}
          <p className="uppercase tracking-[0.5em] text-xs text-white/70">
            {t.heroLabel}
          </p>

          {/* TITLE */}
          <h1 className="text-4xl md:text-7xl font-light leading-tight">
            {t.heroTitle}
          </h1>

          {/* TEXT */}
          <p className="text-sm md:text-lg text-white/80 leading-relaxed">
            {t.heroText}
          </p>

          {/* BUTTON */}
          <div className="pt-4">
            <a
              href="/files/Collection_Julie_Wedding.pdf"
              download
              className="inline-block bg-white text-black px-7 py-3 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-[#d8c3a5] hover:text-white transition"
            >
              {t.heroButton}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}