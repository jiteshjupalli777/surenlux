import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Where Beauty',
    subheadline: 'Meets Artistry',
    tagline: 'Premium Unisex Salon Experience',
  },
  {
    image: 'https://images.pexels.com/photos/3738344/pexels-photo-3738344.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Crafted With',
    subheadline: 'Pure Elegance',
    tagline: 'Expert Cuts · Color · Skincare',
  },
  {
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Your Finest',
    subheadline: 'Transformation',
    tagline: 'Luxury Treatments for Every Soul',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setLoaded(true);
    intervalRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 scale-110"
            style={{ transform: `translateY(${parallaxOffset}px) scale(1.15)` }}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#c9a96e]/20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 10 + 8) + 's',
              animationDelay: (Math.random() * 5) + 's',
              animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light">
              Premium Unisex Salon · Madhapur
            </span>
            <div className="h-px w-12 bg-[#c9a96e]" />
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-7xl md:text-9xl font-light leading-none tracking-tight mb-2">
            <span className="block text-white text-3d">
              {slides[current].headline}
            </span>
            <span className="block shimmer mt-1">
              {slides[current].subheadline}
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-white/60 text-sm tracking-[0.3em] uppercase font-light">
            {slides[current].tagline}
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-[#c9a96e] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#e8d5a3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]"
            >
              Book Appointment
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase font-light hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-px bg-[#c9a96e]'
                  : 'w-2 h-px bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#c9a96e] transition-colors animate-bounce"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent z-20" />
    </section>
  );
}
