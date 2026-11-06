import React, { useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ShieldCheck, Layers, Sparkles, Armchair, ArrowUpRight, Clock, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesGridProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#d6d9dc]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#b8143d]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#d6d9dc]" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#b8143d]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d6d9dc]" />;
    }
  };

  return (
    <section id="servicios" ref={sectionRef} className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#580318]/15 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-[#92979d]/30 backdrop-blur-md mb-3 shadow-metal-sm">
              <span className="w-2 h-2 rounded-full bg-[#b8143d]" />
              <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-widest font-semibold">
                Nuestros Servicios de Élite
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              TRATAMIENTOS DE <span className="text-[#b8143d] text-glow-wine">ALTA PRECISIÓN</span>
            </h2>
          </div>
          <p className="max-w-md text-[#92979d] text-sm font-light leading-relaxed">
            Cada panel intervenido es analizado bajo estrictos protocolos técnicos internacionales, garantizando una restauración y blindaje sin precedentes.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl bg-black/85 backdrop-blur-xl border border-[#92979d]/25 hover:border-[#b8143d]/60 transition-all duration-300 p-8 flex flex-col justify-between group shadow-luxury-card hover:shadow-wine-md hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle luxury light sweep */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Corner tech accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#580318]/40 to-transparent" />
              </div>

              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-[#92979d]/30 shadow-sm group-hover:scale-105 group-hover:border-[#b8143d]/60 transition-all">
                    {getServiceIcon(service.icon)}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#580318]/40 border border-[#b8143d]/50 font-mono text-[10px] font-bold text-white tracking-wider uppercase">
                        {service.badge}
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#92979d]">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Titles */}
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#d6d9dc] transition-colors">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-[#92979d] mb-4 tracking-wide">
                  {service.subtitle}
                </p>
                
                <p className="text-[#b8bcc2] text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Technical Bullet points */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-[#b8143d] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & CTA */}
              <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#92979d] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#b8143d]" />
                    <span>Duración: {service.duration}</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-white">
                    {service.startingPrice}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-[#580318] border border-[#92979d]/30 hover:border-[#b8143d] text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 group/btn"
                >
                  <span>Reservar Servicio</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#b8143d] group-hover/btn:text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
