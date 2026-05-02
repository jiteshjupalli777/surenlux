import { useEffect, useRef } from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '10K+', label: 'Happy Clients' },
  { icon: Clock, value: '9AM–9PM', label: 'Open Every Day' },
  { icon: Star, value: '5.0', label: 'Client Rating' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, #c9a96e 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: images */}
          <div className="reveal-left relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Seren Luxe salon interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 overflow-hidden border-4 border-[#080808]">
                <img
                  src="https://images.pexels.com/photos/3865608/pexels-photo-3865608.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Salon detail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold frame accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#c9a96e]" />
              <div className="absolute -bottom-3 -right-12 w-16 h-16 border-b-2 border-r-2 border-[#c9a96e]" />
            </div>
          </div>

          {/* Right: content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Our Story</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight text-white mb-6">
              Where Every
              <span className="block text-gold-gradient italic">Detail Matters</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Seren Luxè is Madhapur's premier unisex luxury salon, where we believe beauty is an art
              form. Our team of expert stylists and therapists are dedicated to crafting transformations
              that are uniquely yours.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              From precision haircuts to radiant skin treatments, every service is delivered with
              meticulous care, premium products, and an unwavering commitment to excellence.
              Step in and experience the Seren Luxè difference.
            </p>

            {/* Gold divider */}
            <div className="h-px w-20 bg-[#c9a96e]/40 mb-10" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#c9a96e]" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-white">{value}</div>
                    <div className="text-white/40 text-xs tracking-wide mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
