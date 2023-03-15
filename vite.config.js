import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import solidPlugin from "vite-plugin-solid";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 8000
  },
  plugins: [
    Unocss(),
    solidPlugin(),
    mdx({ jsxImportSource: "solid-jsx", rehypePlugins: [rehypeHighlight] }),
  ],
  build: {
    target: "esnext",
  },
});
