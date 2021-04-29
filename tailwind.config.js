const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        blue : colors.blue,
        indigo: colors.indigo,
        red: colors.rose,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
