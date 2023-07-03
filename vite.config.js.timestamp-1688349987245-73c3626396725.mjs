// vite.config.js
import { defineConfig } from "file:///home/sid/nvchad_site/node_modules/.pnpm/vite@4.3.9/node_modules/vite/dist/node/index.js";
import unocss from "file:///home/sid/nvchad_site/node_modules/.pnpm/unocss@0.53.1_postcss@8.4.24_rollup@3.25.1_vite@4.3.9/node_modules/unocss/dist/vite.mjs";
import mdx from "file:///home/sid/nvchad_site/node_modules/.pnpm/@mdx-js+rollup@2.3.0_rollup@3.25.1/node_modules/@mdx-js/rollup/index.js";
import rehypeHighlight from "file:///home/sid/nvchad_site/node_modules/.pnpm/rehype-highlight@6.0.0/node_modules/rehype-highlight/index.js";
import solid from "file:///home/sid/nvchad_site/node_modules/.pnpm/solid-start@0.2.26_@solidjs+meta@0.28.5_@solidjs+router@0.8.2_solid-js@1.7.6_solid-start-node_7c2iwwl2z3blhgah4lnbtnpz3m/node_modules/solid-start/vite/plugin.js";
var vite_config_default = defineConfig({
  plugins: [
    unocss(),
    {
      ...await mdx({
        jsxImportSource: "solid-js",
        jsx: true,
        providerImportSource: "/node_modules/solid-mdx",
        rehypePlugins: [rehypeHighlight]
      }),
      enforce: "pre"
    },
    solid({
      adapter: (await import("file:///home/sid/nvchad_site/node_modules/.pnpm/solid-start-static@0.2.26_solid-start@0.2.26_undici@5.22.1_vite@4.3.9/node_modules/solid-start-static/index.js")).default(),
      extensions: [".mdx"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zaWQvbnZjaGFkX3NpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NpZC9udmNoYWRfc2l0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zaWQvbnZjaGFkX3NpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCBtZHggZnJvbSBcIkBtZHgtanMvcm9sbHVwXCI7XG5pbXBvcnQgcmVoeXBlSGlnaGxpZ2h0IGZyb20gXCJyZWh5cGUtaGlnaGxpZ2h0XCI7XG5pbXBvcnQgc29saWQgZnJvbSBcInNvbGlkLXN0YXJ0L3ZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHVub2NzcygpLFxuICAgIHtcbiAgICAgIC4uLihhd2FpdCBtZHgoe1xuICAgICAgICBqc3hJbXBvcnRTb3VyY2U6IFwic29saWQtanNcIixcbiAgICAgICAganN4OiB0cnVlLFxuICAgICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogXCIvbm9kZV9tb2R1bGVzL3NvbGlkLW1keFwiLFxuICAgICAgICByZWh5cGVQbHVnaW5zOiBbcmVoeXBlSGlnaGxpZ2h0XSxcbiAgICAgIH0pKSxcbiAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgfSxcbiAgICBzb2xpZCh7XG4gICAgICBhZGFwdGVyOiAoYXdhaXQgaW1wb3J0KFwic29saWQtc3RhcnQtc3RhdGljXCIpKS5kZWZhdWx0KCksXG4gICAgICBleHRlbnNpb25zOiBbXCIubWR4XCJdLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLFNBQVMsb0JBQW9CO0FBQzlRLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQO0FBQUEsTUFDRSxHQUFJLE1BQU0sSUFBSTtBQUFBLFFBQ1osaUJBQWlCO0FBQUEsUUFDakIsS0FBSztBQUFBLFFBQ0wsc0JBQXNCO0FBQUEsUUFDdEIsZUFBZSxDQUFDLGVBQWU7QUFBQSxNQUNqQyxDQUFDO0FBQUEsTUFDRCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osVUFBVSxNQUFNLE9BQU8sZ0tBQW9CLEdBQUcsUUFBUTtBQUFBLE1BQ3RELFlBQVksQ0FBQyxNQUFNO0FBQUEsSUFDckIsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
