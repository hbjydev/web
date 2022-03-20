const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
      }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      default: colors.zinc,
      primary: colors.indigo,
      black: colors.black,
      white: colors.white,
      yellow: colors.yellow,
    },
  },
  plugins: [],
}
