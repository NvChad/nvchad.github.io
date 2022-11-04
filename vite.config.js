import { defineConfig } from "vite";
import path from "path";

import solidPlugin from "vite-plugin-solid";
import solidMarkedPlugin from "vite-plugin-solid-marked";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    solidMarkedPlugin({
      source: "~/markdown",
    }),
    solidPlugin(),
  ],
});
