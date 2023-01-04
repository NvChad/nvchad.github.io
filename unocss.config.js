import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";

// lets me use unocss classes in css files
import transformerDirectives from "@unocss/transformer-directives";

import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      white: {
        1: "#fff",
        2: "#c9d0dd",
      },

      black: {
        1: "#111825",
        2: "#0b121f",
      },

      onedark: "#1E222A",
      whiteTint: "#eff3f7",

      tintBlack: {
        1: "#19202d",
        2: "#2d3441",
        3: "#333a47",
      },

      grey: "#b5bcc9",
      darkgrey: "#79808d",
      pale: "#daebf1",
    },
  },

  presets: [presetUno(), presetIcons(
    {
      scale:1.2
    }
  ), presetAttributify()],

  rules: [
    ['softShadow', { 'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }],
  ],

  shortcuts: [
    ["vertCentered", "flex items-center gap-2", { layer: "utilites" }],
  ],

  transformers: [transformerAttributifyJsx(), transformerDirectives()],
});
