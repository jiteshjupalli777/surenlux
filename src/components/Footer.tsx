import { Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';

const links = {
  Services: ['Haircuts', 'Hair Colouring', 'Hair Treatments', 'Skin Care', 'Body Care', 'Makeup'],
  Visit: ['Book Appointment', 'Our Location', 'Opening Hours', 'Gift Cards'],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#c9a96e]/15 pt-20 pb-10 px-6">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="font-serif text-3xl font-light tracking-[0.3em] text-white">SEREN</div>
              <div className="font-serif text-sm tracking-[0.6em] text-[#c9a96e] mt-[-4px]">LUXÈ</div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              Premium unisex luxury salon in the heart of Madhapur, Hyderabad. Where artistry meets excellence.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#c9a96e]/60 hover:text-[#c9a96e] transition-all duration-300"
                >
                  <Icon size={13} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-5">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo('services')}
                      className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <Phone size={12} className="text-[#c9a96e] mt-1 flex-shrink-0" />
                <a href="tel:09127383838" className="text-white/40 text-sm hover:text-white/80 transition-colors">
                  09127383838
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={12} className="text-[#c9a96e] mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/EWd9QEM9Q5WBvzdd8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/80 transition-colors leading-relaxed"
                >
                  Above Karachi Bakery,<br />Madhapur, Hyderabad
                </a>
              </div>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="mt-8 w-full py-3 bg-[#c9a96e]/10 border border-[#c9a96e]/30 text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Seren Luxè. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <button key={item} className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
