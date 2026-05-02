import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const hours = [
  { day: 'Monday – Sunday', time: '9:00 AM – 9:00 PM' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919127383838?text=Hi%20there!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Seren%20Lux%C3%A8%20%F0%9F%92%AB`,
      '_blank'
    );
  };

  const handleCall = () => {
    window.open('tel:09127383838');
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Divider */}
      <div className="gold-divider mb-32 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="reveal-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Visit Us</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-10">
              Come Experience
              <span className="block text-gold-gradient italic">Seren Luxè</span>
            </h2>

            {/* Info cards */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a96e]/60 transition-colors">
                  <MapPin size={16} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Address</div>
                  <div className="text-white/80 text-sm leading-relaxed">
                    No. 1-98/7/2/5A, 1st Floor, Above Karachi Bakery,<br />
                    Madhapur, Hyderabad, Telangana – 500081
                  </div>
                  <a
                    href="https://maps.app.goo.gl/XnpWsvYzFP8yFHsT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[#c9a96e] text-xs hover:text-[#e8d5a3] transition-colors"
                  >
                    Get Directions <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-5 border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-colors duration-300 group cursor-pointer"
                onClick={handleCall}
              >
                <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a96e]/60 transition-colors">
                  <Phone size={16} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Book Appointment</div>
                  <div className="text-white/80 text-sm">09127383838</div>
                  <div className="text-white/40 text-xs mt-0.5">Tap to call</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-[#c9a96e]/15">
                <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">Opening Hours</div>
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-8">
                      <span className="text-white/60 text-sm">{day}</span>
                      <span className="text-[#c9a96e] text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleCall}
                className="flex-1 py-4 bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#e8d5a3] transition-all duration-300"
              >
                Call to Book
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 py-4 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
              >
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Right: Map — correct Manea Madhapur location */}
          <div className="reveal-right">
            <div className="relative h-full min-h-[450px] overflow-hidden border border-[#c9a96e]/20">
              <iframe
                title="Seren Luxe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3088572!2d78.3809!3d17.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc4c4c4c4d%3A0x0!2sManea%20The%20Salon%20Madhapur!5e0!3m2!1sen!2sin!4v1&q=Manea+The+Salon,+Above+Karachi+Bakery,+Madhapur,+Hyderabad"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ filter: 'grayscale(1) invert(0.9) contrast(0.8) sepia(0.3)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 px-4 py-3 bg-[#080808]/90 backdrop-blur-sm border border-[#c9a96e]/30 z-10">
                <div className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium">Seren Luxè</div>
                <div className="text-white/60 text-xs mt-0.5">Madhapur, Hyderabad</div>
                <a
                  href="https://maps.app.goo.gl/XnpWsvYzFP8yFHsT8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-[#c9a96e] text-xs hover:text-[#e8d5a3] transition-colors"
                >
                  Open in Maps <ExternalLink size={9} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
