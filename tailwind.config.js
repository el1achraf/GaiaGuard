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
    },
  },
  plugins: [],
};
