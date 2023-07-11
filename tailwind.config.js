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
        'sm': { 'max': '400px' },
      },
    },
    plugins: [],
  }
}
