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
      animationDelay: {
        '200': '200ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      keyframes: {
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        },
       
        'slide-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'scale-in': {
      '0%': {
        transform: 'scale(0)',
        opacity: '0',
      },
      '100%': {
        transform: 'scale(1)',
        opacity: '1',
      },
    },
    'blur-out-expand-fwd': {
  '0%': {
    transform: 'translateY(-50%)  translateZ(0)',
    filter: 'blur(0)',
    opacity: '1'
  },
  '100%': {
    transform: 'translateY(-50%)  translateZ(80px)',
    filter: 'blur(12px)',
    opacity: '0'
  }
},
   'blur-fwd': {
  '0%': {
    transform: 'translateX(-50%) translateZ(0)',
    filter: 'blur(0)',
    opacity: '1'
  },
  '100%': {
    transform: 'translateX(-50%) translateZ(80px)',
    filter: 'blur(12px)',
    opacity: '0'
  }
}
,
'blur-out-fwd': {
  '0%': {
    transform: 'translateZ(0)',
    filter: 'blur(0)',
    opacity: '1'
  },
  '100%': {
    transform: ' translateZ(80px)',
    filter: 'blur(12px)',
    opacity: '0'
  }
},
'backInDown': {
  '0%': {
    transform: 'translateY(-1200px) scale(0.7)',
    opacity: '0.7',
  },
  '80%': {
    transform: 'translateY(0px) scale(0.9)',
    opacity: '0.9',
  },
  '100%': {
    transform: 'translateY(0px) scale(1)',
    opacity: '1',
  }
},
grow: {
  '0%': { height: '0' },
  '100%': { height: '38em' },
},
Secondegrow: {
  '0%': { height: '0' },
  '100%': { height: '31.3em' },
},
 
  
      },
      animation: {
        'slideDown': 'slideDown 1s ease-out forwards',
        'slide-left': 'slide-left 0.5s ease-out',
        'scale-in': 'scale-in 0.6s ease-out forwards',
       'blur-out-expand-fwd': 'blur-out-expand-fwd 0.8s ease-in forwards',
  'blur-out-fwd': 'blur-out-fwd 0.8s ease-in forwards',
  'blur-fwd': 'blur-out-fwd 0.8s ease-in forwards',
  'back-in-down': 'backInDown 1s ease-out both',
  'grow': 'grow 1s ease-out forwards',
  'Secondegrow': 'Secondegrow 1s ease-out forwards ',

      }
    },
  },
  plugins: [],
};
