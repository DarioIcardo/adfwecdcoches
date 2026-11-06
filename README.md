# Apex Detail Studio — Web Application & Interactive Canvas Scroller

> Aplicación web de producción de ultra-lujo para **Apex Detail Studio** (estudio premium de car detailing y recubrimientos cerámicos en Lugo, España). Desarrollada con rendimiento a 60 FPS, estética ultra-dark pura (`#000000`), acentos cian eléctrico (`#00f0ff`), tarjetas de cristal oscuro y un canvas scroller interactivo con interpolación secuencial de frames.

---

## 🚀 Stack Tecnológico

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (configuración personalizada ultra-dark y efectos de resplandor cian)
- **Animaciones & Scroll:** [GSAP 3](https://greensock.com/gsap/) con [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Tipografía:** [Syne](https://fonts.google.com/specimen/Syne) (Display), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 💎 Características Principales

### 1. Canvas Scroller Interactivo a 60 FPS
- Renderizado de alto rendimiento en elemento HTML5 `<canvas>` con soporte para **pantallas Retina (DPR)**.
- **Interpolación y desvanecimiento alfa continuo** entre las 5 imágenes secuenciales del coche (`car-step1.png` a `car-step5.png`).
- **Desplazamiento lateral dinámico:** el vehículo se desliza suavemente a la izquierda o derecha en cada fase para despejar la lectura de las tarjetas de información técnicas flotantes.
- Progresión de las 5 fases del proceso técnico:
  1. **Descontaminación Profunda**
  2. **Lavado Foam Activo**
  3. **Corrección de Pintura Multietapa**
  4. **Tratamiento Cerámico 9H**
  5. **Acabado Espejo & Entrega**
- Indicadores numéricos HUD interactivos que permiten saltar directamente a cualquier fase.

### 2. Estética Ultra-Dark & Glassmorphism
- Fondo `#000000` con atmósfera inspirada en *Morpho Water, RTM Audio, Tigris, Riy3 y Ride Radian*.
- Tarjetas con cristal oscuro (`bg-black/85 backdrop-blur-xl border border-[#00f0ff]/30`).
- Tipografía de alto contraste con resplandor neón (`text-glow-cyan`, `shadow-cyan-md`).

### 3. Componentes Completos
- **Navbar Glassmórfica Sticky:** Logotipo con monograma, enlaces suaves, enlace de llamada directa y botón CTA "Reservar Cita".
- **Hero Cinemático:** Métricas de impacto (+850 deportivos, 9H+ dureza, 5 años garantía, 100% sin hologramas).
- **Grid de 4 Servicios:** Tratamiento Cerámico, PPF Autorregenerable, Corrección de Pintura de Alta Definición y Detailing Interior de Cuero Noble.
- **Tarifas y Paquetes de 3 Niveles:** Esencial Detail, Protección Cerámica (destacada con neón cian) y Apex Ultimate Bespoke.
- **FAQ Interactivo:** Acordeón técnico que resuelve dudas sobre tiempos de curado, mantenimiento y diferencias entre PPF y cerámica.
- **Ubicación & Radar Satelital:** Datos del estudio en Polígono Industrial O Ceao (Lugo), horarios, coordenadas GPS y mapa simulado ultra-dark.
- **Modal Interactivo de Reserva:** Formulario multi-paso (Servicio/Vehículo -> Fecha/Hora -> Contacto -> Pasaporte digital de cita generado con código único).

---

## 🛠️ Instalación y Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Despliegue en Vercel / GitHub

El proyecto está 100% listo para desplegarse en [Vercel](https://vercel.com/):
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
