/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'modal': 'modal 1s ease-out',
        'modalMain': 'modalMain 1s ease-out',
        'just': 'just 1s forwards',
        'ssynergyAnimate': 'ssynergyAnimate 1s forwards',
        'nsynergyAnimate': 'nsynergyAnimate 1s forwards',
        'profileAnimate':'profileAnimate 0.8s forwards',
        'langAnimate': 'langAnimate 1s forwards',
        'webAnimate': 'webAnimate 1s forwards',
        'frameAnimate': 'frameAnimate 1s forwards',
        'dbAnimate': 'dbAnimate 1s forwards',
      },
      keyframes: {
        modalMain: {
          '0%': { opacity: '0', backdropFilter: "blur(0px)" },
          '50%': { opacity: '0.5', backdropFilter: "blur(6px)" },
          '100%': { opacity: '1', backdropFilter: "blur(12px)" }
        },
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
            transform: 'scale(1) rotateY(0deg) translate(-50%,-30%)',
          },
          '40%': {
            transform: 'scale(2)  rotateY(60deg) translate(-50%,-30%)',
            opacity:'0.6'
          },
          '60%': {
            transform: 'scale(2) rotateY(90deg) translate(-50%,-30%)',
            opacity:'0.3'
          },

          '100%': {
            transform: 'scale(4) rotateY(90deg) translate(-50%,-30%)',
            opacity:'0'
          },
        },
        langAnimate:{
          '0%': {
            transform: 'rotateY(0deg)',
            color:'black',
            zIndex:'400',
          },
          '40%': {
            transform: 'scale(1.5) rotateY(90deg) translateX(-180%) translateY(20%)',
            color:'white',
            zIndex:'400',
          },
          '60%': {
            transform: 'scale(2) rotateY(150deg) translateX(-180%) translateY(20%)', // Hold the flip position briefly
            color:'white',
            opacity:'0.5',
            zIndex:'400',
          },
          '100%': {
            transform: 'scale(2) rotateY(180deg) translateX(-180%) translateY(20%)',
            color:'white',
            opacity:'0',
            zIndex:'400',
          }

        },
        webAnimate:{
          '0%': {
            transform: 'rotateY(0deg)',
            color:'black',
            zIndex:'400',
          },
          '40%': {
            transform: 'scale(2) rotateY(90deg) translateX(-60%) translateY(50%)',
            color:'white',
            zIndex:'400',
          },
          '60%': {
            transform: 'scale(2) rotateY(150deg) translateX(-60%) translateY(50%)', // Hold the flip position briefly
            color:'white',
            opacity:'0.5',
            zIndex:'400',
          },
          '100%': {
            transform: 'scale(2) rotateY(180deg) translateX(-60%) translateY(60%)',
            color:'white',
            opacity:'0',
            zIndex:'400',
          }
        },
        frameAnimate:{
          '0%': {
            transform: 'rotateY(0deg)',
            color:'black',
            zIndex:'400',
          },
          '40%': {
            transform: 'scale(2) rotateY(90deg) translateX(-50%) translateY(50%)',
            color:'white',
            zIndex:'400',
          },
          '60%': {
            transform: 'scale(2) rotateY(150deg) translateX(-50%) translateY(50%)', // Hold the flip position briefly
            color:'white',
            opacity:'0.5',
            zIndex:'400',
          },
          '100%': {
            transform: 'scale(2) rotateY(180deg) translateX(-50%) translateY(60%)',
            color:'white',
            opacity:'0',
            zIndex:'400',
          }
        },
        dbAnimate:{
          '0%': {
            transform: 'rotateY(0deg)',
            color:'black',
            zIndex:'400',
          },
          '40%': {
            transform: 'scale(2) rotateY(90deg) translateX(-60%) ',
            color:'white',
            opacity:'0.7',
            zIndex:'400',
          },
          '60%': {
            transform: 'scale(2) rotateY(150deg) translateX(-60%) ', // Hold the flip position briefly
            color:'white',
            opacity:'0.5',
            zIndex:'400',
          },
          '100%': {
            transform: 'scale(2) rotateY(180deg) translateX(-60%) ',
            color:'white',
            opacity:'0',
            zIndex:'400',
          }
        },
        ssynergyAnimate:{
          
              '0%': {
            transform: 'scale(1) translateX(0%) translateY(0%)',
          },
          '40%': {
            transform: 'scale(2) translateX(-60%) translateY(-20%)',
            opacity:'1'
          },
          '60%': {
            transform: 'scale(2) rotateY(93deg)  translateX(650%) translateY(-20%)',
            opacity:'1'
          },

          '100%': {
            transform: 'scale(2) rotateY(93deg)  translateX(650%) translateY(-20%)',
            opacity:'0'
          },
        }
        ,
        nsynergyAnimate:{
          
              '0%': {
            transform: 'scale(1) translateX(0%) translateY(0%)',
          },
          '40%': {
            transform: 'scale(2) translateX(-150%) translateY(-20%)',
            opacity:'1'
          },
          '60%': {
            transform: 'scale(2) rotateY(93deg)  translateX(3000%) translateY(-20%)',
            opacity:'1'
          },

          '100%': {
            transform: 'scale(2) rotateY(93deg)  translateX(3000%) translateY(-20%)',
            opacity:'0'
          },
        }
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        }
      })
    }
  ],
}