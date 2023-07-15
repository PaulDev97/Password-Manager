/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'base': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': {
          'violet-card': '#262132',
          'white-text': '#fafafa',

        },

      },
      screens: {
        'phone': { 'max': '360px' },
        'sm': { 'max': '500px' },
        'lg': { 'min': '501px' }

      },
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  }
}
