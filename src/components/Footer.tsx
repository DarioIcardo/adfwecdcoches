import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { ArrowUp, Instagram, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white border-t border-zinc-900 pt-16 pb-12 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-[#92979d]/40 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#d6d9dc]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <polygon points="12 2 2 22 22 22" />
                  <polyline points="7 17 12 7 17 17" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                APEX <span className="text-[#b8bcc2] font-mono text-sm font-normal">DETAIL STUDIO</span>
              </span>
            </div>

            <p className="text-[#92979d] text-sm font-light leading-relaxed max-w-sm">
              Centro técnico especializado en tratamientos cerámicos de grado nanotecnológico 9H, corrección de barniz de alta definición y películas PPF autorregenerables en Lugo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[#92979d] hover:text-white hover:border-[#b8143d]/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[#92979d] hover:text-white hover:border-[#b8143d]/60 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[#92979d] hover:text-white hover:border-[#b8143d]/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#d6d9dc] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#92979d]">
              <li><a href="#inicio" className="hover:text-white transition-colors">El Proceso en 5 Fases</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Principales</a></li>
              <li><a href="#tarifas" className="hover:text-white transition-colors">Paquetes & Precios</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Ubicación en O Ceao</a></li>
            </ul>
          </div>

          {/* Services Quick list */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#d6d9dc] mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#92979d]">
              <li><span className="text-zinc-300">Tratamiento Cerámico 9H</span></li>
              <li><span className="text-zinc-300">PPF Autorregenerable</span></li>
              <li><span className="text-zinc-300">Corrección de Pintura</span></li>
              <li><span className="text-zinc-300">Detailing Interior & Cuero</span></li>
              <li><span className="text-zinc-300">Curado Infrarrojo IR</span></li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#d6d9dc] mb-4">
              Cita Previa
            </h4>
            <p className="text-xs text-[#92979d] font-light leading-relaxed mb-4">
              Atendemos de forma personalizada para garantizar la máxima dedicación por vehículo.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#580318] to-[#8c0b2c] hover:from-[#740722] hover:to-[#b8143d] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-wine-sm hover:shadow-wine-md transition-all border border-[#b8143d]/40"
            >
              Pedir Cita Ahora
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#92979d]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {STUDIO_INFO.name}. Todos los derechos reservados.</span>
            <span>·</span>
            <span className="text-zinc-400">Lugo (Galicia)</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Aviso Legal</span>
            <span className="hover:text-zinc-300 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-zinc-300 cursor-pointer">Términos de Garantía</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-[#92979d] hover:text-white hover:border-[#b8143d]/60 transition-colors ml-4"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
