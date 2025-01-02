/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'modal': 'modal 0.3s ease-out'
      },
      keyframes: {
        modal: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95) translate(0, -30px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translate(0, 0)'
          },
        }
      }
    },
  },
  plugins: [],
  // variants: {
  //   extend: {
  //     translate: ['group-hover', 'hover'],
  //     display: ["group-hover"],
  //     scale:["group-hover"],
  //   },
  // },
}