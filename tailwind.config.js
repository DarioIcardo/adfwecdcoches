/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        wine: {
          DEFAULT: '#580318',
          dark: '#3d0110',
          deep: '#29000a',
          rich: '#740722',
          light: '#8c0b2c',
          bright: '#b8143d',
          glow: 'rgba(88, 3, 24, 0.65)',
        },
        metal: {
          DEFAULT: '#92979d',
          light: '#b8bcc2',
          silver: '#d6d9dc',
          dim: '#656a70',
          dark: '#3c4046',
          glow: 'rgba(146, 151, 157, 0.4)',
        },
        surface: {
          DEFAULT: '#050507',
          glass: 'rgba(10, 6, 8, 0.88)',
          card: 'rgba(14, 9, 12, 0.75)',
          border: 'rgba(146, 151, 157, 0.2)',
          borderWine: 'rgba(88, 3, 24, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'wine-sm': '0 0 15px rgba(88, 3, 24, 0.45)',
        'wine-md': '0 0 30px rgba(88, 3, 24, 0.55), 0 0 10px rgba(184, 20, 61, 0.3)',
        'wine-lg': '0 0 50px rgba(88, 3, 24, 0.7), 0 0 20px rgba(184, 20, 61, 0.4)',
        'metal-sm': '0 0 15px rgba(146, 151, 157, 0.25)',
        'metal-md': '0 0 30px rgba(146, 151, 157, 0.35)',
        'luxury-card': '0 20px 45px -10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(88, 3, 24, 0.25)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(88, 3, 24, 0.28) 0%, rgba(20, 5, 10, 0.75) 55%, #000000 100%)',
        'radial-wine-spot': 'radial-gradient(circle at 50% 50%, rgba(88, 3, 24, 0.35) 0%, rgba(0, 0, 0, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(146, 151, 157, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(146, 151, 157, 0.05) 1px, transparent 1px)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
