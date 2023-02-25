import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";

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
        1: "#121723",
        2: "#141926",
        3: "#212633",
        4: "#2E3340",
      },
    },
  },

  presets: [
    presetUno(),
    presetIcons(
      {
        scale: 1.2,
      },
    ),
    presetAttributify(),
  ],

  rules: [
    ["softShadow", { "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }],
  ],

  shortcuts: [
    ["vertCentered", "flex items-center gap-2", { layer: "utilites" }],
  ],

  transformers: [transformerAttributifyJsx(), transformerDirectives()],
});
