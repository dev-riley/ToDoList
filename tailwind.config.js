const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      main: '#00498C',
      'red-dark': '#8B0000',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      red: colors.red,
    },
    extend: {},
  },
  plugins: [],
}

