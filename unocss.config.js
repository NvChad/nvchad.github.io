// lets me use unocss classes in css files
import transformerDirectives from "@unocss/transformer-directives";

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      white: {
        1: "#fff",
        2: "#c9d0dd",
      },

      onedark: "#1E222A",

      dark: {
        1: "#13141b",
        2: "#171821",
        3: "#222331",
        4: "#2d2f41",
      },

      // for light theme
      grey: {
        1: "#8798AD",
        2: "#536387",
        4: "#2E384D",
      },
    },
  },

  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetAttributify(),
  ],

  rules: [
    ["softShadow", { "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }],
    ["lightenBg", { filter: "brightness(125%)" }],
    ["darkenBg", { filter: "brightness(93%)" }],
    ["box", { "max-width": "1700px" }],
  ],

  shortcuts: [
    ["vertCentered", "flex items-center gap-2", { layer: "utilites" }],
  ],

  transformers: [
    transformerDirectives(),
  ],
});
