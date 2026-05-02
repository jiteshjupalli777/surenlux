import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Reddy',
    role: 'Regular Client',
    quote:
      'Seren Luxè is hands down the best salon experience I have ever had. The attention to detail in my haircut was exceptional, and the ambiance makes you feel truly pampered.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Rohan Sharma',
    role: 'Monthly Member',
    quote:
      'As a guy who was always skeptical of luxury salons, Seren Luxè completely changed my perspective. The haircut was precise, the scalp treatment felt incredible, and the staff are knowledgeable professionals.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Bridal Client',
    quote:
      'Had my bridal makeover done at Seren Luxè and I could not have been happier. They listened to every detail of my vision and delivered beyond expectations. Absolutely stunning results!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Karthik Menon',
    role: 'Loyal Client',
    quote:
      'The zero-bleach highlights they recommended for my wife were phenomenal. Rich, glossy and her hair looks healthier than ever. The team truly knows their craft.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, #c9a96e 0%, transparent 70%)' }}
        />
      </div>

      {/* Divider */}
      <div className="gold-divider mb-32 max-w-7xl mx-auto" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">Client Stories</span>
            <div className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
            What Our Clients
            <span className="block text-gold-gradient italic">Say About Us</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Active testimonial */}
          <div className="relative luxury-card p-10 md:p-14">
            {/* Big quote mark */}
            <Quote
              size={60}
              className="absolute top-8 right-8 text-[#c9a96e]/10"
              strokeWidth={1}
            />

            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#c9a96e]/40"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#c9a96e] rounded-full flex items-center justify-center">
                    <Star size={10} className="text-black fill-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#c9a96e] fill-[#c9a96e]" />
                  ))}
                </div>

                <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-relaxed mb-6">
                  "{testimonials[active].quote}"
                </p>

                <div>
                  <div className="text-white font-medium text-sm tracking-wide">
                    {testimonials[active].name}
                  </div>
                  <div className="text-[#c9a96e]/60 text-xs tracking-[0.2em] uppercase mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? 'w-8 h-px bg-[#c9a96e]'
                      : 'w-2 h-px bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
