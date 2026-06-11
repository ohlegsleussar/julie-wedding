export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#ece7df] py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-3xl mb-4 tracking-[0.3em]">
            JULIE WEDDING
          </h3>

          <p className="text-gray-600 leading-relaxed">
            High-end bridal gowns designed for elegance and unforgettable moments.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="uppercase text-sm tracking-[0.3em] mb-6">
            Navigation
          </h4>

          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#c6a27b] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#catalog" className="hover:text-[#c6a27b] transition">
                Catalog
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#c6a27b] transition">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <h4 className="uppercase text-sm tracking-[0.3em] mb-6">
            Contact
          </h4>

          <ul className="space-y-3 text-gray-600">
            <li>Chernivtsi, Ukraine</li>

            <li>
              <a
                href="tel:++380976609620"
                className="hover:text-[#c6a27b] transition"
              >
                +380976609620
              </a>
            </li>

            <li>
              <a
                href="mailto:julieweddingdresses@gmail.com"
                className="hover:text-[#c6a27b] transition"
              >
                julieweddingdresses@gmail.com
              </a>
            </li>

            <li>
              <a
                href="https://t.me/julie_wedding_dresses"
                target="_blank"
                className="hover:text-[#c6a27b] transition"
              >
                Telegram Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="uppercase text-sm tracking-[0.3em] mb-6">
            Social
          </h4>

          <div className="flex flex-col gap-3 text-gray-600">
            
            <a
              href="https://www.instagram.com/julie.wedding_dresses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="hover:text-[#c6a27b] transition"
            >
              Instagram
            </a>

            <a
              href="https://t.me/Juliewedding"
              target="_blank"
              className="hover:text-[#c6a27b] transition"
            >
              Telegram Channel
            </a>

            <a
              href="https://www.facebook.com/people/%D0%AE%D0%BB%D0%B8%D1%8F-%D0%A1%D0%BB%D1%8E%D1%81%D0%B0%D1%80/100055190929363/"
              target="_blank"
              className="hover:text-[#c6a27b] transition"
            >
              Facebook
            </a>

            <a
              href="https://www.tiktok.com/@juliawedding8?_r=1&_t=ZG-96elQuY0VIf"
              target="_blank"
              className="hover:text-[#c6a27b] transition"
            >
              TikTok
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#ece7df] mt-16 pt-8 text-center text-sm text-gray-500">
        © 2026 Julie Wedding. All rights reserved.
      </div>
    </footer>
  );
}