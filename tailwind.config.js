/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          'violet-card': '#30253C'
        }
      },
      screens: {
        'sm': {'max': '360px'},
      }
    },
  },
  plugins: [],
}

