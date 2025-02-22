/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Mono One', 'sans-serif'], // Ajout de la police
        Staatliches: ['Staatliches', 'serif'],
        orbitron: ['Orbitron', 'serif'],
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(-50%)', opacity: '1' }
        },
        'slide-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translate(-50%, 100%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(-50%, -1.25rem)'
          }
        }
      },
      animation: {
        'slideDown': 'slideDown 1s ease-out forwards',
        'slide-left': 'slide-left 0.5s ease-out',
        slideUp: 'slideUp 1s ease-out forwards'
      }
    },
  },
  plugins: [],
};
