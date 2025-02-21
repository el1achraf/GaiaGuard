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
       
       
      },
      animation: {
        'slideDown': 'slideDown 1s ease-out forwards',
      }
    },
  },
  plugins: [],
};
