const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",

  content: [
    "./src/**/*.tsx",
  ],

  darkMode: "class", // or 'media' or 'class'
  variants: {},

  fontFamily: {
    sans: ["Inter"],
  },

  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#111825",
        black2: "#0b121f",
        whiteTint: "#ECEEF2",
        tintBlack: "#19202d",
        tintBlack2: '#2d3441'
      },

      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
