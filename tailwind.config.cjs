const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.tsx",
  ],

  darkMode: "class", // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        white: "#fff",
        white2: "#c9d0dd",
        black: "#111825",
        black2: "#0b121f",
        onedark: "#1E222A",
        whiteTint: "#ECEEF2",
        tintBlack: "#19202d",
        tintBlack2: "#2d3441",
        tintBlack3: "#333a47",
        grey: "#b5bcc9",
        darkgrey: "#79808d",
        pale: "#eaf0f5",
      },

      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      boxShadow: {
        soft: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
};
