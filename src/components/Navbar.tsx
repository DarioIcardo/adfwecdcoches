import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, (window.scrollY / totalHeight) * 100));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'El Proceso', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Tarifas', href: '#tarifas' },
    { label: 'Garantía & FAQ', href: '#faq' },
    { label: 'Ubicación', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-2xl border-b border-[#92979d]/25 shadow-wine-sm py-3'
          : 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo with Wine Red Monogram */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-black border border-[#92979d]/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#b8143d] group-hover:shadow-wine-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#580318]/50 via-transparent to-transparent opacity-80" />
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#b8bcc2] group-hover:text-white transform transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 22 22 22" />
              <polyline points="7 17 12 7 17 17" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
              APEX <span className="text-[#b8bcc2] font-mono text-sm tracking-widest font-normal">STUDIO</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#92979d] group-hover:text-[#d6d9dc] transition-colors">
              Detailing & Cerámica · Lugo
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-[#b8bcc2] hover:text-white transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#580318] to-[#b8143d] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Quick Phone & Glowing Wine CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${STUDIO_INFO.mobile.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs font-mono text-[#92979d] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            title="Llamar a Apex Detail Studio"
          >
            <Phone className="w-3.5 h-3.5 text-[#b8143d]" />
            <span>{STUDIO_INFO.mobile}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#580318] via-[#740722] to-[#8c0b2c] hover:from-[#740722] hover:to-[#b8143d] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-wine-sm hover:shadow-wine-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#b8143d]/40 group"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
            <Calendar className="w-4 h-4 text-[#d6d9dc] relative z-10" />
            <span className="relative z-10">Reservar Cita</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="p-2 rounded-lg bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white font-mono text-xs font-bold border border-[#b8143d]/50"
            aria-label="Reservar"
          >
            <Calendar className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Thin Micro Scroll Progress Indicator underneath Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-[#580318] to-[#b8143d] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-[#92979d]/25 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-[#b8bcc2] hover:text-white py-2 border-b border-zinc-900 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#b8143d] text-xs">→</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${STUDIO_INFO.mobile.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300"
              >
                <Phone className="w-4 h-4 text-[#b8143d]" />
                <span>{STUDIO_INFO.mobile} · Contactar Ahora</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-wine-sm border border-[#b8143d]/50"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Cita Previa</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
