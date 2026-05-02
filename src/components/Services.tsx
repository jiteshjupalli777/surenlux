import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Heart, Brush, Wand2, Leaf } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Haircuts',
    description: 'Sculpted cuts tailored to your face shape and personality by our master stylists.',
    image: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Signature',
  },
  {
    icon: Wand2,
    title: 'Hair Colouring',
    description: 'From balayage to bold transformations — rich, glossy tones that keep hair healthy and radiant.',
    image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Popular',
  },
  {
    icon: Leaf,
    title: 'Hair Treatments',
    description: 'Deep repair therapies for scalp health, hydration, and silky texture restoration.',
    image: 'https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Therapeutic',
  },
  {
    icon: Sparkles,
    title: 'Skin Care',
    description: 'Rejuvenating facials and advanced skin therapies for a luminous, youthful glow.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Luxury',
  },
  {
    icon: Heart,
    title: 'Body Care',
    description: 'Full-body spa rituals and massage therapies designed for total relaxation and renewal.',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Wellness',
  },
  {
    icon: Brush,
    title: 'Makeup & Styling',
    description: 'Professional makeup artistry and styling for every occasion, from everyday to bridal.',
    image: 'https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tag: 'Artistry',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardInView.current) observer.observe(cardInView.current);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 6;
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div ref={cardInView} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
      <div
        ref={cardRef}
        className="luxury-card overflow-hidden cursor-pointer h-full"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />

          {/* Tag */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#c9a96e]/90 text-black text-xs tracking-[0.2em] uppercase font-medium">
            {service.tag}
          </div>

          {/* Icon */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#c9a96e]/40 flex items-center justify-center">
            <service.icon size={16} className="text-[#c9a96e]" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl text-white mb-2">{service.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
          <div className={`mt-4 flex items-center gap-2 text-[#c9a96e] text-xs tracking-[0.2em] uppercase transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <span>Learn More</span>
            <div className="h-px flex-1 bg-[#c9a96e]/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const headers = sectionRef.current?.querySelectorAll('.reveal-header');
    headers?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-[0.03]"
          style={{ background: 'radial-gradient(ellipse, #c9a96e 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal-header reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">What We Offer</span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
            Our Signature
            <span className="block text-gold-gradient italic">Services</span>
          </h2>
          <p className="mt-5 text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            From expert haircuts to luxurious spa rituals — every service is delivered with
            passion, precision, and the finest products available.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
          >
            Book Your Service
          </button>
        </div>
      </div>
    </section>
  );
}
