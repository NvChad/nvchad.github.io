import { defineConfig } from "vite";
import unocss from "unocss/vite";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import solid from "solid-start/vite";

export default defineConfig({
  plugins: [
    unocss(),
    {
      ...(await mdx({
        jsxImportSource: "solid-js",
        jsx: true,
        providerImportSource: "/node_modules/solid-mdx",
        rehypePlugins: [rehypeHighlight],
      })),
      enforce: "pre",
    },
    solid({
      adapter: (await import("solid-start-static")).default(),
      extensions: [".mdx"],
    }),
  ],
});
