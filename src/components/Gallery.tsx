import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: 'https://static.wixstatic.com/media/be5891_350edb6dbc6d4de2a149ba2518cfbe9d~mv2.jpg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/be5891_350edb6dbc6d4de2a149ba2518cfbe9d~mv2.jpg',
    label: 'Salon Interior',
    span: 'col-span-2',
  },
  {
    src: 'https://static.wixstatic.com/media/be5891_8291e7033d7343d1bfb9d5802b66664d~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/be5891_8291e7033d7343d1bfb9d5802b66664d~mv2.jpg',
    label: 'Expert Styling',
    span: '',
  },
  {
    src: 'https://static.wixstatic.com/media/be5891_a02554e5b6f742bcb0a3bb6ec0a169f1~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/be5891_a02554e5b6f742bcb0a3bb6ec0a169f1~mv2.jpg',
    label: 'Premium Experience',
    span: '',
  },
  {
    src: 'https://static.wixstatic.com/media/be5891_c9b088a4c6d946428ef46042ab7c57ba~mv2.jpg/v1/fit/w_960,h_721,q_90,enc_avif,quality_auto/be5891_c9b088a4c6d946428ef46042ab7c57ba~mv2.jpg',
    label: 'Our Craft',
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
