import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '../data/content';
import { Sparkles, Shield, Droplets, CheckCircle, ArrowRight, Gauge, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CanvasCarScrollerProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CanvasCarScroller: React.FC<CanvasCarScrollerProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  // References for mobile cards to calculate exact center-based opacity
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileOpacities, setMobileOpacities] = useState<number[]>([1, 0, 0, 0, 0]);

  // Screen size check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload all 5 car sequential images
  useEffect(() => {
    let isMounted = true;
    const urls = [
      '/imagenes/intentoscroll/car-step1.png',
      '/imagenes/intentoscroll/car-step2.png',
      '/imagenes/intentoscroll/car-step3.png',
      '/imagenes/intentoscroll/car-step4.png',
      '/imagenes/intentoscroll/car-step5.png',
    ];

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    urls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (!isMounted) return;
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === urls.length) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.src = `/imagenes/car-step${index + 1}.png`;
        fallbackImg.onload = () => {
          if (!isMounted) return;
          loadedImages[index] = fallbackImg;
          loadedCount++;
          if (loadedCount === urls.length) {
            imagesRef.current = loadedImages;
            setImagesLoaded(true);
          }
        };
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // High-performance canvas drawing with Retina DPR & luxurious wine underglow
  const renderCanvas = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (images.length < 5) return;

    // Retina DPR setup
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Continuous Frame Interpolation
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const rawIndex = clampedProgress * (PROCESS_STEPS.length - 1);
    const indexA = Math.min(Math.floor(rawIndex), PROCESS_STEPS.length - 2);
    const indexB = indexA + 1;
    const blend = rawIndex - indexA;

    // Desktop Split-Screen displacement:
    // On desktop, car glides to the side (+24% or -24%), guaranteeing zero overlap with text!
    const isMobile = width < 1024;
    const shiftScale = isMobile ? 0.0 : 1.0;
    const shiftA = PROCESS_STEPS[indexA].carShiftXPercent * shiftScale;
    const shiftB = PROCESS_STEPS[indexB].carShiftXPercent * shiftScale;
    const currentShiftPercent = shiftA + (shiftB - shiftA) * blend;
    const shiftXPixels = (width * currentShiftPercent) / 100;

    // Image sizing & bounding
    const refImg = images[indexA] || images[0];
    if (!refImg.naturalWidth || !refImg.naturalHeight) {
      ctx.restore();
      return;
    }

    const imgAspect = refImg.naturalWidth / refImg.naturalHeight;
    // On desktop, car is scaled to 56% so with the shift it leaves ~44% free space for text
    let targetWidth = width * (isMobile ? 0.94 : 0.56);
    let targetHeight = targetWidth / imgAspect;

    const maxHeight = height * (isMobile ? 0.58 : 0.70);
    if (targetHeight > maxHeight) {
      targetHeight = maxHeight;
      targetWidth = targetHeight * imgAspect;
    }

    const carX = (width - targetWidth) / 2 + shiftXPixels;
    // In mobile, position car centrally so it dominates the screen
    const carY = (height - targetHeight) / 2 + (isMobile ? -15 : 10);

    // Deep wine red floor glow with metallic reflection halo
    const floorY = carY + targetHeight * 0.88;
    const glowRadius = targetWidth * 0.48;
    const floorGlow = ctx.createRadialGradient(
      carX + targetWidth / 2,
      floorY,
      12,
      carX + targetWidth / 2,
      floorY,
      glowRadius
    );
    floorGlow.addColorStop(0, 'rgba(88, 3, 24, 0.45)');
    floorGlow.addColorStop(0.35, 'rgba(146, 151, 157, 0.16)');
    floorGlow.addColorStop(0.7, 'rgba(88, 3, 24, 0.08)');
    floorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = floorGlow;
    ctx.beginPath();
    ctx.ellipse(
      carX + targetWidth / 2,
      floorY,
      targetWidth * 0.46,
      22,
      0,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Draw Image A with opacity (1 - blend)
    const imgA = images[indexA];
    if (imgA && imgA.complete) {
      ctx.globalAlpha = Math.max(0, 1 - blend);
      ctx.drawImage(imgA, carX, carY, targetWidth, targetHeight);
    }

    // Draw Image B with opacity blend
    const imgB = images[indexB];
    if (imgB && imgB.complete && blend > 0.001) {
      ctx.globalAlpha = Math.min(1, blend);
      ctx.drawImage(imgB, carX, carY, targetWidth, targetHeight);
    }

    ctx.globalAlpha = 1.0;

    // Technical crosshair marks in metallic silver
    ctx.strokeStyle = 'rgba(146, 151, 157, 0.22)';
    ctx.lineWidth = 1;
    const crossSize = 8;
    const cx = carX + targetWidth / 2;
    const cy = carY + targetHeight / 2;
    
    ctx.beginPath();
    ctx.moveTo(cx - crossSize, cy);
    ctx.lineTo(cx + crossSize, cy);
    ctx.moveTo(cx, cy - crossSize);
    ctx.lineTo(cx, cy + crossSize);
    ctx.stroke();

    ctx.restore();
  }, []);

  // Update mobile card opacities based on distance to the exact vertical center of the screen
  const updateMobileCenterOpacities = useCallback(() => {
    if (window.innerWidth >= 1024) return;
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    const fadeRadius = viewportHeight * 0.38; // Opacity drops to 0 beyond this distance from center

    const newOpacities = mobileCardRefs.current.map((cardEl) => {
      if (!cardEl) return 0;
      const rect = cardEl.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenter - viewportCenter);

      if (dist >= fadeRadius) return 0;
      // Cosine smoothing: 1 at center, smoothly 0 at edge of fadeRadius
      const norm = dist / fadeRadius;
      return Math.max(0, Math.min(1, 0.5 * (1 + Math.cos(norm * Math.PI))));
    });

    setMobileOpacities(newOpacities);
  }, []);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      renderCanvas(scrollProgress);
      updateMobileCenterOpacities();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderCanvas, scrollProgress, updateMobileCenterOpacities]);

  // GSAP ScrollTrigger Integration with slower, more progressive scrub
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current || !canvasRef.current) return;

    renderCanvas(0);
    updateMobileCenterOpacities();

    const container = containerRef.current;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        // Slower, buttery smooth scrub (1.2s lag for luxurious ease)
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);
          renderCanvas(p);
          updateMobileCenterOpacities();

          const stepIndex = Math.min(
            Math.floor(p * PROCESS_STEPS.length),
            PROCESS_STEPS.length - 1
          );
          setActiveStepIndex(stepIndex);
        },
      });
    }, container);

    // Scroll listener for mobile opacity
    const handleScroll = () => {
      updateMobileCenterOpacities();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesLoaded, renderCanvas, updateMobileCenterOpacities]);

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const totalHeight = container.offsetHeight - window.innerHeight;
    const targetScroll = container.offsetTop + (index / (PROCESS_STEPS.length - 1)) * totalHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full bg-black text-white"
      // Extended scroll height: 170vh per step allows a leisurely, detailed, and unhurried scrub
      style={{ height: `${PROCESS_STEPS.length * 170}vh` }}
    >
      {/* Sticky Canvas & Viewport View (Fixed throughout scroll track) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between pointer-events-none">
        
        {/* Ambient Dark Wine & Metallic Background Glows */}
        <div className="absolute inset-0 bg-radial-gradient-hero opacity-80 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#580318]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

        {/* Top Header / Brand Stepper HUD */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-24 md:pt-28 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-[#92979d]/30 backdrop-blur-md mb-2">
              <span className="w-2 h-2 rounded-full bg-[#b8143d] animate-ping" />
              <span className="font-mono text-xs text-[#b8bcc2] uppercase tracking-wider font-semibold">
                Estudio Certificado GYEON & XPEL · Polígono O Ceao, Lugo
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              TRANSFORMACIÓN DEL VEHÍCULO EN <span className="text-[#b8143d] text-glow-wine">5 FASES</span>
            </h1>
          </div>

          {/* Stepper HUD Navigation with Wine / Silver tones */}
          <div className="flex items-center gap-2 bg-black/90 backdrop-blur-xl border border-[#92979d]/30 p-1.5 rounded-full shadow-wine-sm">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(idx)}
                  className={`relative flex items-center justify-center transition-all duration-300 rounded-full text-xs font-mono font-medium ${
                    isActive
                      ? 'bg-gradient-to-r from-[#580318] to-[#8c0b2c] text-white px-3.5 py-1.5 font-bold shadow-wine-sm border border-[#b8143d]/50'
                      : 'text-[#92979d] hover:text-white px-2.5 py-1.5 hover:bg-white/5'
                  }`}
                  aria-label={`Ir a ${step.title}`}
                >
                  <span>{step.stepNumber}</span>
                  {isActive && (
                    <span className="hidden sm:inline-block ml-1.5 text-[10px] tracking-wider uppercase font-semibold text-[#d6d9dc]">
                      {step.title.split(' ')[0]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* HTML5 Interactive Canvas: Sticky Center */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {!imagesLoaded && (
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 border-2 border-[#580318] border-t-[#b8143d] rounded-full animate-spin" />
              <p className="font-mono text-xs text-[#b8bcc2] tracking-widest uppercase">
                Sincronizando Óptica del Vehículo...
              </p>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={`w-full h-full object-contain transition-opacity duration-700 ${
              imagesLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Bottom Technical HUD Bar */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-6 flex items-center justify-between text-xs font-mono text-[#92979d] pointer-events-auto">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[#d6d9dc]">APEX STUDIO // LUGO HQ</span>
            <span className="text-zinc-700">|</span>
            <span>FASE {PROCESS_STEPS[activeStepIndex]?.stepNumber} DE 05</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">Scroll pausado para apreciar el curado</span>
            <div className="w-24 h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-[#580318] to-[#b8143d] transition-all duration-150"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <ChevronDown className="w-4 h-4 text-[#b8143d] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Floating Narrative Cards Along the Scroll Track */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 pointer-events-none">
        {PROCESS_STEPS.map((step, idx) => {
          const isLeft = step.cardPosition === 'left';
          const isDesktopActive = activeStepIndex === idx;
          const mobileOpacity = mobileOpacities[idx] ?? 0;

          return (
            <div
              key={step.id}
              className={`min-h-[170vh] flex ${
                // Mobile: centered vertically to test exact screen-center opacity; Desktop: side-by-side
                isMobileScreen
                  ? 'items-center justify-center'
                  : `items-center ${isLeft ? 'justify-start' : 'justify-end'}`
              }`}
            >
              {/* DESKTOP CARD VIEW: Full rich technical card structured strictly on the side */}
              <div
                className={`hidden lg:block w-full max-w-[420px] xl:max-w-[460px] pointer-events-auto transition-all duration-500 ${
                  isDesktopActive
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-15 translate-y-8 scale-95 pointer-events-none'
                }`}
              >
                <div className="relative p-7 xl:p-8 rounded-2xl bg-black/90 backdrop-blur-2xl border border-[#92979d]/25 hover:border-[#b8143d]/60 shadow-luxury-card group">
                  {/* Subtle Wine Red & Silver Corner Highlights */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#b8143d]" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#92979d]" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded bg-[#580318]/40 border border-[#b8143d]/50 font-mono text-xs font-bold text-white shadow-wine-sm">
                        FASE {step.stepNumber}
                      </span>
                      <span className="font-mono text-[11px] text-[#92979d] uppercase tracking-wider">
                        {step.tagline}
                      </span>
                    </div>
                    {idx === 0 && <Droplets className="w-5 h-5 text-[#b8bcc2]" />}
                    {idx === 1 && <Sparkles className="w-5 h-5 text-[#b8143d]" />}
                    {idx === 2 && <Gauge className="w-5 h-5 text-[#b8bcc2]" />}
                    {idx === 3 && <Shield className="w-5 h-5 text-[#b8143d]" />}
                    {idx === 4 && <CheckCircle className="w-5 h-5 text-[#b8bcc2]" />}
                  </div>

                  {/* Title & Description */}
                  <h2 className="font-display text-2xl xl:text-3xl font-bold text-white mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[#b8bcc2] text-xs xl:text-sm leading-relaxed mb-5 font-light">
                    {step.description}
                  </p>

                  {/* Micro-specs Bullets */}
                  <div className="space-y-2 mb-6">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8143d] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800/80 mb-6">
                    {step.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
                        <div className="font-mono text-[10px] text-[#92979d] uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="font-mono text-base font-bold text-[#d6d9dc]">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking(step.title)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d6d9dc] hover:text-[#b8143d] transition-colors group/btn"
                    >
                      <span className="font-semibold">Solicitar esta fase</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#b8143d]" />
                    </button>
                    <span className="font-mono text-[10px] text-zinc-500">
                      Apex Studio Lugo
                    </span>
                  </div>
                </div>
              </div>

              {/* MOBILE CARD VIEW: Minimalist, short, punchy floating pill with screen-center opacity */}
              <div
                ref={(el) => {
                  mobileCardRefs.current[idx] = el;
                }}
                className="lg:hidden w-full max-w-[340px] pointer-events-auto"
                style={{
                  opacity: mobileOpacity,
                  transform: `translateY(${(1 - mobileOpacity) * 16}px) scale(${0.95 + mobileOpacity * 0.05})`,
                  pointerEvents: mobileOpacity > 0.3 ? 'auto' : 'none',
                  transition: 'opacity 0.12s ease-out, transform 0.12s ease-out',
                }}
              >
                <div className="p-4 rounded-xl bg-black/90 backdrop-blur-2xl border border-[#b8143d]/40 shadow-wine-md flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#580318] text-[10px] font-mono font-bold text-white border border-[#b8143d]/60">
                        {step.stepNumber}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white">
                        {step.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#d6d9dc] bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      {step.mobileHighlight}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs font-light leading-snug">
                    {step.mobileSummary}
                  </p>

                  <div className="pt-2 border-t border-zinc-850 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking(step.title)}
                      className="text-[11px] font-mono text-[#d6d9dc] hover:text-[#b8143d] flex items-center gap-1 font-semibold uppercase"
                    >
                      <span>Reservar</span>
                      <ArrowRight className="w-3 h-3 text-[#b8143d]" />
                    </button>
                    <span className="font-mono text-[9px] text-[#92979d]">
                      Apex Lugo
                    </span>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
