import unocss from "unocss/vite";

import rehypeHighlight from "rehype-highlight";
import { defineConfig } from "@solidjs/start/config";

/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;

export default defineConfig({
  start: {
    ssr: true,
    server: {
      preset: process.env.NODE_ENV == "development" ? "node" : "static",
      baseURL: process.env.BASE_PATH,
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
