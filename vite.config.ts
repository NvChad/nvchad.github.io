import unocss from "unocss/vite";

import rehypeHighlight from "rehype-highlight";
import { defineConfig } from "@solidjs/start/config";

/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  start: {
    server: {
      experimental: {
        asyncContext: true,
      },
    },

    extensions: ["mdx", "md"],
  },
  plugins: [
    unocss(),
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
      rehypePlugins: [rehypeHighlight],
    }),
  ],
});
