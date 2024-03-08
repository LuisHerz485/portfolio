/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors : {
        'primary-50'  : '#e9ebfe',
        'primary-100' : '#c6ccfc',
        'primary-200' : '#9eabfa',
        'primary-300' : '#7289f9',
        'primary-400' : '#4b6df7',
        'primary-500' : '#0c51f3',
        'primary-600' : '#0149e7',
        'primary-700' : '#003ddb',
        'primary-800' : '#0032d0',
        'primary-900' : '#001bb7',
        'secondary-500' : '#090E34',
        'ternary-500': '#959CB1',
        'background-primary' : '#090E34',
        'white-transparent': 'rgba(255, 255, 255, 0.57)',
        'black-transparent': 'rgba(15, 23, 42, 0.13)',
        'black-menu': 'rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [
  ],
}