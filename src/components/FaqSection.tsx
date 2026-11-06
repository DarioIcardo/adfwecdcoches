import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#580318]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-[#92979d]/30 backdrop-blur-md mb-4 shadow-metal-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#b8143d]" />
            <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-widest font-semibold">
              Resolviendo tus dudas técnicas
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            PREGUNTAS <span className="text-[#b8143d] text-glow-wine">FRECUENTES</span>
          </h2>
          <p className="text-[#92979d] text-sm sm:text-base font-light">
            Transparencia técnica absoluta sobre tiempos de curado, mantenimiento preventivo y garantías en Lugo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-black/90 backdrop-blur-xl border border-[#b8143d]/60 shadow-wine-sm'
                    : 'bg-black/60 backdrop-blur-md border border-zinc-800/80 hover:border-[#92979d]/40'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-[#d6d9dc]' : 'text-white group-hover:text-[#b8bcc2]'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`p-2 rounded-lg bg-zinc-950 border border-zinc-800 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#580318]/40 border-[#b8143d]/50 text-white' : 'text-[#92979d]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <div className="pt-2 border-t border-zinc-800/80">
                      <p className="text-[#b8bcc2] text-sm sm:text-base font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
