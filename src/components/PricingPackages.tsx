import React, { useEffect, useRef } from 'react';
import { PRICING_TIERS } from '../data/content';
import { Check, X, Shield, Clock, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PricingPackagesProps {
  onOpenBooking: (packageName?: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current!.children, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tarifas" ref={sectionRef} className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Background glow and ambient grid */}
      <div className="absolute inset-0 bg-radial-wine-spot opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-[#92979d]/30 backdrop-blur-md mb-4 shadow-metal-sm">
            <span className="w-2 h-2 rounded-full bg-[#b8143d]" />
            <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-widest font-semibold">
              Tarifas Transparentes & Llave en Mano
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            PAQUETES DE TRATAMIENTO <span className="text-[#b8143d] text-glow-wine">APEX</span>
          </h2>
          <p className="text-[#92979d] text-sm sm:text-base font-light">
            Selecciona el nivel de intervención que mejor se adapte al estado de tu vehículo y a tus expectativas de durabilidad.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-black/95 backdrop-blur-2xl border-2 border-[#b8143d] shadow-wine-lg scale-100 lg:-translate-y-3 z-20 hover:scale-[1.02]'
                    : 'bg-black/80 backdrop-blur-xl border border-[#92979d]/25 hover:border-[#b8143d]/50 shadow-luxury-card z-10 hover:-translate-y-1'
                }`}
              >
                {/* Popular Wine/Cherry Banner */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#580318] via-[#740722] to-[#b8143d] text-white font-mono text-[11px] font-extrabold uppercase tracking-widest shadow-wine-md flex items-center gap-1.5 border border-[#b8143d]/60">
                    <Sparkles className="w-3.5 h-3.5 text-[#d6d9dc]" />
                    <span>MÁS SOLICITADO · RECOMENDADO</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="mb-6 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {tier.name}
                      </h3>
                      <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 font-mono text-[10px] text-[#d6d9dc] uppercase">
                        {tier.warranty}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#92979d]">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-4xl sm:text-5xl font-black text-white">
                        {tier.price}
                      </span>
                      <span className="font-mono text-xs text-[#92979d]">
                        / vehículo
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs font-mono text-[#92979d]">
                      <Clock className="w-3.5 h-3.5 text-[#b8143d]" />
                      <span>{tier.duration}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-400">{tier.priceNote}</span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#b8bcc2] leading-relaxed mb-6 font-light">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#92979d] block mb-2">
                      Detalle de intervenciones:
                    </span>
                    {tier.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs ${
                          feature.included ? 'text-zinc-200' : 'text-zinc-600 line-through'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[#b8143d] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                        )}
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(tier.name)}
                    className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#580318] to-[#8c0b2c] hover:from-[#740722] hover:to-[#b8143d] text-white shadow-wine-md hover:shadow-wine-lg border border-[#b8143d]/60'
                        : 'bg-zinc-950 hover:bg-[#580318] text-white border border-[#92979d]/30 hover:border-[#b8143d]'
                    }`}
                  >
                    <Shield className="w-4 h-4 text-[#d6d9dc]" />
                    <span>{tier.ctaText}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Quote Notice */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-[#92979d]">
            ¿Tienes un vehículo clásico, superdeportivo exótico o flota corporativa?{' '}
            <button
              onClick={() => onOpenBooking('Presupuesto a Medida')}
              className="text-[#d6d9dc] underline underline-offset-4 hover:text-[#b8143d] transition-colors"
            >
              Solicita un estudio personalizado a medida
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
