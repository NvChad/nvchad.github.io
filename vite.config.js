import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import solidPlugin from "vite-plugin-solid";

import rehypeHighlight from 'rehype-highlight';

export default defineConfig({
  plugins: [
    solidPlugin(),
    mdx({ jsxImportSource: "solid-jsx", rehypePlugins: [rehypeHighlight] }),
  ],
  build: {
    target: "esnext",
  },
});
