"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/i18n/translations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { lang, setLang } = useLang();

  const t = translations[lang] ?? translations.EN;

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-[#ece7df]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 relative flex items-center">

          {/* LOGO */}
          <div className="absolute left-4 md:left-6 text-base md:text-xl tracking-[0.25em] font-light">
            JULIE WEDDING
          </div>

          {/* CENTER NAV */}
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] mx-auto">
            <a href="#">{t.home}</a>
            <a href="#catalog">{t.catalog}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="absolute right-4 md:right-6 flex items-center gap-4">

            {/* LANG */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.2em]"
              >
                {lang} <ChevronDown size={14} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border shadow-md text-xs uppercase z-50">
                  {["EN", "UA", "RU"].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l as any);
                        setLangOpen(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 z-40 bg-black/80"
            onClick={() => setOpen(false)}
          />

          {/* DRAWER */}
          <div className="fixed top-0 right-0 w-[80%] h-full bg-[#fbfaf8] z-50 shadow-2xl p-8 flex flex-col gap-6">
            <button className="self-end text-2xl" onClick={() => setOpen(false)}>
              <X />
            </button>

            <a onClick={() => setOpen(false)} href="#">{t.home}</a>
            <a onClick={() => setOpen(false)} href="#catalog">{t.catalog}</a>
            <a onClick={() => setOpen(false)} href="#about">{t.about}</a>
            <a onClick={() => setOpen(false)} href="#contact">{t.contact}</a>
          </div>
        </>
      )}
    </>
  );
}