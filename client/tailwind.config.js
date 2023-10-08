/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        'tomato': '#f06543',
        'antiflash-white': '#e8e9eb',
        'alabaster': '#e0dfd5',
        'input-gray': '#474a4f',
        'border-gray': '#24272a',
        'onyx': '#262a2c',
        'dark-gray': '#202425',
        'sandy-brown': '#f09d51',
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
};

