import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const links = ['About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

export default function Navbar({ scrollY }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isScrolled = scrollY > 60;

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => l.toLowerCase());
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#c9a96e]/20 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col leading-none group"
        >
          <span className="font-serif text-2xl font-light tracking-[0.3em] text-white group-hover:text-[#c9a96e] transition-colors duration-300">
            SEREN
          </span>
          <span className="font-serif text-xs tracking-[0.6em] text-[#c9a96e] mt-[-2px]">
            LUXÈ
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                activeSection === link.toLowerCase()
                  ? 'text-[#c9a96e]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#c9a96e] transition-all duration-300 ${
                  activeSection === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="px-6 py-2 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-[#c9a96e] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#080808]/98 backdrop-blur-lg border-b border-[#c9a96e]/20 transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm tracking-[0.2em] uppercase text-white/70 hover:text-[#c9a96e] transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="w-full py-3 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300 mt-2"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
