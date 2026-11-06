import React, { useState, useEffect } from 'react';
import { X, Calendar, Check, ChevronRight, ChevronLeft, Clock, Phone, Mail, User } from 'lucide-react';
import { SERVICES_DATA, PRICING_TIERS, STUDIO_INFO } from '../data/content';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preselectedService || 'Protección Cerámica 9H',
    vehicleType: 'sedan',
    carModel: '',
    carYear: '',
    preferredDate: '',
    preferredTime: '09:30',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: '',
  });
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 2);
      const dateString = tomorrow.toISOString().split('T')[0];
      setFormData((prev) => ({
        ...prev,
        preferredDate: prev.preferredDate || dateString,
      }));
    } else {
      document.body.style.overflow = '';
      setCurrentStep(1);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (currentStep === 3) {
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setConfirmationCode(`APX-${randomId}-LUGO`);
      setCurrentStep(4);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const copyToClipboard = () => {
    const text = `Reserva Apex Detail Studio: ${confirmationCode} | Servicio: ${formData.serviceId} | Vehículo: ${formData.carModel} | Fecha: ${formData.preferredDate} a las ${formData.preferredTime}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const vehicleTypes = [
    { id: 'sedan', label: 'Berlina / Turismo', desc: 'Audi A6, BMW Serie 5, Mercedes Clase C' },
    { id: 'suv', label: 'SUV / 4x4 / Familiar', desc: 'Porsche Macan, Range Rover, BMW X5' },
    { id: 'sports', label: 'Superdeportivo / Exótico', desc: 'Porsche 911, Ferrari, Lamborghini, AMG GT' },
    { id: 'coupe', label: 'Compacto / Coupé', desc: 'Golf R, BMW M2, Audi RS3, Toyota GR Yaris' },
  ];

  const timeSlots = [
    '08:30 (Recepción primera hora)',
    '10:00 (Franja media mañana)',
    '12:30 (Antes del mediodía)',
    '15:30 (Recepción turno de tarde)',
    '17:30 (Última franja de tarde)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-black/95 backdrop-blur-2xl border border-[#92979d]/30 shadow-wine-lg p-6 sm:p-8 text-white overflow-hidden my-8">
        
        {/* Subtle wine corner light */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-[#580318]/20 rounded-bl-full pointer-events-none" />
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-[#92979d]/40 flex items-center justify-center text-[#d6d9dc]">
              <Calendar className="w-4 h-4 text-[#b8143d]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                RESERVA DE CITA · <span className="text-[#b8bcc2] font-mono text-sm">APEX STUDIO</span>
              </h3>
              <p className="font-mono text-[10px] text-[#92979d]">
                Polígono O Ceao · Lugo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#b8143d]/60 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step Progress Indicator */}
        <div className="py-4 flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNum) => {
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            return (
              <div key={stepNum} className="flex-1 flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white shadow-wine-sm scale-105 border border-[#b8143d]'
                      : isCompleted
                      ? 'bg-zinc-900 text-[#d6d9dc] border border-[#92979d]/40'
                      : 'bg-zinc-950 text-zinc-600 border border-zinc-900'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 text-[#b8143d]" /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 transition-colors ${
                      isCompleted ? 'bg-[#580318]' : 'bg-zinc-900'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* STEP 1: Service & Vehicle */}
        {currentStep === 1 && (
          <div className="space-y-6 pt-2 animate-fadeIn">
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-2">
                1. Selecciona el Tratamiento o Paquete:
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white font-mono text-xs outline-none transition-colors"
              >
                <optgroup label="Paquetes Todo Incluido">
                  {PRICING_TIERS.map((tier) => (
                    <option key={tier.id} value={tier.name}>
                      {tier.name} — {tier.price} ({tier.duration})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Servicios Específicos">
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title} — {srv.startingPrice}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-2">
                2. Segmento de Vehículo:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicleTypes.map((v) => {
                  const isSelected = formData.vehicleType === v.id;
                  return (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => setFormData({ ...formData, vehicleType: v.id as any })}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-zinc-950 border-[#b8143d] shadow-wine-sm'
                          : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-sm text-white">
                          {v.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#b8143d]" />}
                      </div>
                      <p className="text-[11px] text-[#92979d] font-light">
                        {v.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-2">
                3. Marca, Modelo y Año (opcional):
              </label>
              <input
                type="text"
                placeholder="Ej. Porsche 911 GT3 (2024) / BMW M3 G80"
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white text-xs font-mono outline-none transition-colors"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Date & Time */}
        {currentStep === 2 && (
          <div className="space-y-6 pt-2 animate-fadeIn">
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-2">
                Fecha de Recepción Preferida:
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white font-mono text-xs outline-none transition-colors [color-scheme:dark]"
              />
              <p className="text-[11px] text-[#92979d] mt-1 font-mono">
                Horario: Lunes a Viernes 08:30 - 19:30 | Sábados con cita previa.
              </p>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-2">
                Franja Horaria para Entrega en Estudio:
              </label>
              <div className="space-y-2">
                {timeSlots.map((slot) => {
                  const isSelected = formData.preferredTime === slot.split(' ')[0];
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, preferredTime: slot.split(' ')[0] })}
                      className={`w-full p-3 rounded-xl text-left border font-mono text-xs flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-zinc-950 border-[#b8143d] text-white shadow-wine-sm'
                          : 'bg-zinc-950/80 border-zinc-800 text-[#92979d] hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#b8143d]" />
                        <span>{slot}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#b8143d]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs text-[#92979d] font-mono">
              <span className="text-[#d6d9dc] font-bold block mb-1">Nota de Custodia en Lugo:</span>
              Disponemos de bahía de recepción climatizada con videovigilancia conectada a central 24h y seguro de todo riesgo durante toda la estancia.
            </div>
          </div>
        )}

        {/* STEP 3: Contact Details */}
        {currentStep === 3 && (
          <div className="space-y-4 pt-2 animate-fadeIn">
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-1">
                Nombre y Apellidos *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#92979d]" />
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Méndez"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white text-xs font-mono outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-1">
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#92979d]" />
                  <input
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white text-xs font-mono outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-1">
                  Correo Electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#92979d]" />
                  <input
                    type="email"
                    required
                    placeholder="carlos@ejemplo.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white text-xs font-mono outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#d6d9dc] block mb-1">
                Estado Actual o Peticiones Especiales (opcional):
              </label>
              <textarea
                rows={3}
                placeholder="Cuéntanos si tiene marcas de túnel de lavado, excrementos de pájaros marcados o si buscas protegerlo antes de un viaje..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#b8143d] text-white text-xs font-mono outline-none transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Success Confirmation */}
        {currentStep === 4 && (
          <div className="py-4 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#580318]/40 border-2 border-[#b8143d] mx-auto flex items-center justify-center text-white shadow-wine-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-widest block mb-1">
                SOLICITUD REGISTRADA CON ÉXITO
              </span>
              <h4 className="font-display font-extrabold text-2xl text-white">
                PASAPORTE DIGITAL DE CITA APEX
              </h4>
            </div>

            {/* Generated ticket badge */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-[#92979d]/30 text-left space-y-3 font-mono text-xs shadow-luxury-card">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-[#92979d]">CÓDIGO DE RESERVA:</span>
                <span className="text-[#d6d9dc] font-bold text-sm tracking-wider">
                  {confirmationCode}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#92979d]">Tratamiento:</span>
                <span className="text-white font-medium text-right">{formData.serviceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#92979d]">Vehículo:</span>
                <span className="text-white font-medium">{formData.carModel || formData.vehicleType.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#92979d]">Cita Propuesta:</span>
                <span className="text-[#d6d9dc] font-medium">{formData.preferredDate} a las {formData.preferredTime} h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#92979d]">Ubicación:</span>
                <span className="text-zinc-300">Rúa da Industria 42 · O Ceao (Lugo)</span>
              </div>
            </div>

            <p className="text-xs text-[#92979d] font-light max-w-md mx-auto leading-relaxed">
              Nos pondremos en contacto vía WhatsApp o teléfono en un plazo máximo de 2 horas laborables para confirmar la admisión y coordinar la recepción en nuestra sala blanca.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={copyToClipboard}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#b8143d] font-mono text-xs text-white transition-colors"
              >
                {copied ? '✓ ¡Datos Copiados!' : 'Copiar Resumen de Cita'}
              </button>
              
              <a
                href={`tel:${STUDIO_INFO.mobile.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-wine-sm border border-[#b8143d]/50"
              >
                Llamar Ahora al Estudio
              </a>
            </div>
          </div>
        )}

        {/* Modal Controls (Back & Next) */}
        {currentStep < 4 && (
          <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#580318] to-[#8c0b2c] hover:from-[#740722] hover:to-[#b8143d] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-wine-sm hover:shadow-wine-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 border border-[#b8143d]/50"
            >
              <span>{currentStep === 3 ? 'Confirmar Cita Previa' : 'Siguiente Paso'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
