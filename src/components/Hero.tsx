import React, { useEffect, useRef } from 'react';
import { Shield, Sparkles, Award, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Staggered reveal for metrics cards
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      value: '+850',
      label: 'Superdeportivos Detallados',
      sublabel: 'Gama alta y exóticos en Galicia',
      icon: Award,
    },
    {
      value: '9H / 10H',
      label: 'Dureza Molecular',
      sublabel: 'SiO2 & Grafeno certificado por SGS',
      icon: Shield,
    },
    {
      value: '5 Años',
      label: 'Garantía Oficial',
      sublabel: 'Contrato escrito de brillo e hidrofobia',
      icon: Sparkles,
    },
    {
      value: '100%',
      label: 'Sin Hologramas',
      sublabel: 'Corrección microscópica RUPES',
      icon: CheckCircle2,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-black text-white border-y border-[#92979d]/20 overflow-hidden">
      
      {/* Background Ambience with animated pulse */}
      <div className="absolute inset-0 bg-radial-wine-spot opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Quality Seal Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#580318]/30 border border-[#b8143d]/50 flex items-center justify-center text-[#d6d9dc] shadow-wine-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b8143d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="w-6 h-6 relative z-10" />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-lg block tracking-wide">
                APEX DETAIL STUDIO · LUGO
              </span>
              <span className="font-mono text-xs text-[#92979d]">
                Instalaciones climatizadas de alta seguridad en Polígono O Ceao
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${STUDIO_INFO.mobile.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-[#b8bcc2] hover:text-white hover:border-[#b8143d] transition-all hover:shadow-wine-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#b8143d]" />
              <span>{STUDIO_INFO.mobile}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#580318] to-[#8c0b2c] hover:from-[#740722] hover:to-[#b8143d] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-wine-sm hover:shadow-wine-md transition-all duration-300 border border-[#b8143d]/50 active:scale-98"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
              <span className="relative z-10">Consultar Presupuesto</span>
              <ChevronRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* 4 Metric Cards in Wine & Silver Glassmorphism */}
        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#92979d]/20 hover:border-[#b8143d]/60 transition-all duration-300 group shadow-luxury-card hover:-translate-y-1 hover:shadow-wine-md relative overflow-hidden"
              >
                {/* Micro corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-[#b8143d]/20 to-transparent rounded-tr-2xl" />

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#d6d9dc] transition-colors">
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-[#92979d] group-hover:text-[#b8143d] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-display font-bold text-sm text-white">
                  {item.label}
                </span>
                <span className="font-mono text-[11px] text-[#92979d] mt-1 line-clamp-1">
                  {item.sublabel}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
