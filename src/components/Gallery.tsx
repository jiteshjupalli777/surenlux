import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    label: 'Precision Cut',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    label: 'Color Treatment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3760611/pexels-photo-3760611.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    label: 'Balayage',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3993474/pexels-photo-3993474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    label: 'Skin Glow',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    label: 'Styling',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    label: 'Bridal Makeup',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Divider */}
      <div className="gold-divider mb-32 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Our Work</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
              A Glimpse of
              <span className="block text-gold-gradient italic">Our Craft</span>
            </h2>
          </div>
          <p className="reveal-right text-white/50 text-sm max-w-xs leading-relaxed md:text-right">
            Every transformation tells a story. Explore a curated selection of our finest work.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden cursor-pointer group ${img.span}`}
              style={{ transitionDelay: `${i * 80}ms`, aspectRatio: img.span ? '16/9' : '1/1' }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div>
                  <div className="h-px w-8 bg-[#c9a96e] mb-2" />
                  <span className="text-white text-sm font-light tracking-wide">{img.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
