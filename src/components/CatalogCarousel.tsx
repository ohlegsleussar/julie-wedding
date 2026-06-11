"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = Array.from(
  { length: 10 },
  (_, i) => `/catalog/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function CatalogCarousel() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#f8f6f2]" id="catalog">

      {/* TITLE */}
      <div className="text-center py-14 px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-3">
          Wedding Catalog
        </h2>

        <p className="text-sm uppercase tracking-[0.25em] text-[#6b6b6b]">
          Scroll through our bridal collection
        </p>
      </div>

      {/* SWIPER WRAPPER */}
      <div className="w-full px-0">

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="w-full aspect-[4/3] md:aspect-[21/9]"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => setActiveImage(src)}
                className="w-full h-full overflow-hidden bg-black"
              >
                <img
                  src={src}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* FULLSCREEN */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
        >
          <button className="absolute top-6 right-6 text-white text-3xl opacity-70 hover:opacity-100 transition">
            ✕
          </button>

          <img
            src={activeImage}
            className="max-w-[92%] max-h-[92%] object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}