import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export const StudioLocation: React.FC = () => {
  return (
    <section id="contacto" className="relative py-28 bg-black text-white border-t border-zinc-900 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#580318]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-[#92979d]/30 backdrop-blur-md mb-3 shadow-metal-sm">
            <MapPin className="w-3.5 h-3.5 text-[#b8143d]" />
            <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-widest font-semibold">
              Instalaciones & Sala Blanca
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ESTUDIO MATRIZ EN <span className="text-[#b8143d] text-glow-wine">LUGO</span>
          </h2>
          <p className="max-w-xl text-[#92979d] text-sm font-light mt-3">
            Ubicados estratégicamente en el corazón industrial de Lugo, con instalaciones climatizadas de máxima seguridad para custodia de vehículos de alto valor.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-black/85 backdrop-blur-xl border border-[#92979d]/25 p-8 flex flex-col justify-between shadow-luxury-card">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[#d6d9dc] shrink-0">
                  <MapPin className="w-5 h-5 text-[#b8143d]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#92979d] mb-1">
                    Dirección Física
                  </h4>
                  <p className="font-display font-bold text-white text-base">
                    {STUDIO_INFO.address}
                  </p>
                  <p className="text-[#b8bcc2] text-sm">
                    {STUDIO_INFO.postalCode} {STUDIO_INFO.city}, {STUDIO_INFO.region} ({STUDIO_INFO.country})
                  </p>
                  <div className="inline-block mt-2 font-mono text-[11px] text-[#d6d9dc] bg-[#580318]/30 px-2.5 py-0.5 rounded border border-[#b8143d]/40">
                    GPS: {STUDIO_INFO.coordinates.lat}, {STUDIO_INFO.coordinates.lng}
                  </div>
                </div>
              </div>

              {/* Schedules */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[#d6d9dc] shrink-0">
                  <Clock className="w-5 h-5 text-[#92979d]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#92979d] mb-1">
                    Horario de Atención
                  </h4>
                  <p className="text-white text-sm font-medium">
                    {STUDIO_INFO.schedule.weekdays}
                  </p>
                  <p className="text-[#b8bcc2] text-sm mt-0.5">
                    {STUDIO_INFO.schedule.saturday}
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    {STUDIO_INFO.schedule.sunday}
                  </p>
                </div>
              </div>

              {/* Telephone & Mobile */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[#d6d9dc] shrink-0">
                  <Phone className="w-5 h-5 text-[#b8143d]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#92979d] mb-1">
                    Líneas Directas & WhatsApp VIP
                  </h4>
                  <p className="text-white font-mono text-sm font-semibold">
                    <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#d6d9dc] transition-colors">
                      {STUDIO_INFO.phone} (Fijo)
                    </a>
                  </p>
                  <p className="text-[#b8bcc2] font-mono text-sm font-semibold mt-0.5">
                    <a href={`tel:${STUDIO_INFO.mobile.replace(/\s+/g, '')}`} className="hover:text-white hover:underline">
                      {STUDIO_INFO.mobile} (Móvil / WhatsApp)
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[#d6d9dc] shrink-0">
                  <Mail className="w-5 h-5 text-[#92979d]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#92979d] mb-1">
                    Atención Corporativa
                  </h4>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="font-mono text-sm text-[#b8bcc2] hover:text-white transition-colors"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Certifications Row */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80">
              <span className="font-mono text-[10px] text-[#92979d] uppercase tracking-widest block mb-2">
                Acreditaciones Oficiales
              </span>
              <div className="flex flex-wrap gap-2">
                {STUDIO_INFO.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-[#b8bcc2]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Simulated Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950 border border-[#92979d]/25 overflow-hidden relative flex flex-col justify-between shadow-luxury-card min-h-[420px]">
            
            {/* Dark Styled Map UI Simulation */}
            <div className="absolute inset-0 bg-[#070507]">
              {/* Abstract Road Grid with Metallic Silver & Deep Wine hints */}
              <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="road-grid-wine" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(146, 151, 157, 0.15)" strokeWidth="1" />
                    <circle cx="0" cy="0" r="1.5" fill="#92979d" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#road-grid-wine)" />
                
                {/* Highways (A-6 / N-VI / Rúa da Industria) */}
                <path d="M -50 250 Q 200 230 450 300 T 900 280" fill="none" stroke="rgba(88, 3, 24, 0.65)" strokeWidth="4" />
                <path d="M 350 -50 Q 370 200 420 450 T 480 800" fill="none" stroke="rgba(184, 188, 194, 0.3)" strokeWidth="3" />
                <path d="M 120 400 L 700 100" fill="none" stroke="rgba(184, 20, 61, 0.4)" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
            </div>

            {/* Map Top Bar */}
            <div className="relative z-10 p-6 flex items-center justify-between bg-black/70 backdrop-blur-md border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#b8143d] animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Radar Satelital · Polígono O Ceao, Lugo
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#92979d]">
                Acceso directo desde A-6 & N-VI
              </span>
            </div>

            {/* Center Pin Indicator */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center my-auto">
              <div className="relative flex items-center justify-center mb-3">
                <div className="absolute w-24 h-24 rounded-full bg-[#580318]/30 animate-ping" />
                <div className="absolute w-14 h-14 rounded-full bg-[#8c0b2c]/40 border border-[#b8143d]/60" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white flex items-center justify-center shadow-wine-lg z-10 border border-[#b8143d]">
                  <Navigation className="w-5 h-5 fill-current" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/90 backdrop-blur-xl border border-[#92979d]/40 shadow-luxury-card max-w-sm">
                <span className="font-display font-extrabold text-white text-base block">
                  APEX DETAIL STUDIO HQ
                </span>
                <span className="font-mono text-xs text-[#d6d9dc] block mt-0.5">
                  Rúa da Industria, 42 · O Ceao (Lugo)
                </span>
                <span className="text-[11px] text-[#92979d] block mt-1">
                  Aparcamiento privado cerrado y videovigilancia 24h
                </span>
              </div>
            </div>

            {/* Map Bottom Action */}
            <div className="relative z-10 p-6 bg-black/85 backdrop-blur-md border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#92979d]">
                ¿Vienes desde A Coruña, Ourense, Santiago o Ponferrada?
              </span>
              
              <a
                href="https://maps.google.com/?q=Poligono+Industrial+O+Ceao+Lugo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-wine-sm hover:shadow-wine-md hover:scale-105 transition-all shrink-0 border border-[#b8143d]/50"
              >
                <span>Cómo Llegar en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
