/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'modal': 'modal 0.9s ease-out',
        'just': 'just 1s forwards',
        'profileAnimate':'profileAnimate 1s forwards'
      },
      keyframes: {
        modal: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95) translate(0, -30px) rotateY(90deg)'
          },
          '50%': { 
            opacity: '0.5', 
            transform: 'scale(0.95) translate(0, -30px) rotateY(90deg)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translate(0, 0) rotateY(0deg)'
          },
        },
        just: {
          '0%': {
            transform: 'scale(1) rotateY(0deg)',
          },
          '50%': {
            transform: 'scale(2) rotateY(90deg)',
            opacity:'0.5'
          },
          '75%': {
            transform: 'scale(2) rotateY(90deg)',
            opacity:'0.3'
          },

          '100%': {
            zIndex: '200',
            transform: 'scale(2) rotateY(90deg)',
            opacity:'0'
          },
        },
        profileAnimate:{
          '0%': {
            transform: 'scale(1) rotateY(0deg) translate(-50%,-50%)',
          },
          '50%': {
            transform: 'scale(2)  rotateY(90deg) translate(-100%,-50%)',
            opacity:'0.6'
          },
          '75%': {
            transform: 'scale(2) rotateY(90deg) translate(-100%,-50%)',
            opacity:'0.3'
          },

          '100%': {
            zIndex: '200',
            transform: 'scale(4) rotateY(90deg) translate(-100%,-50%)',
            opacity:'0'
          },
        }
      },
    },
  },
  plugins: [],
};