const sidebar_Items = [
  {
    label: ["Quickstart", "i-mingcute:safe-flash-fill"],
    items: [
      ["Install", "quickstart/install"],
      ["Post Install", "quickstart/post-install"],
      ["Learn basic Lua", "quickstart/learn-lua"],
    ],
  },

  {
    label: ["Custom config", "i-mdi-cog"],
    items: [
      ["Walkthrough", "config/walkthrough"],
      ["Snippets", "config/snippets"],
      ["Manage Plugins", "config/plugins"],
      ["Syntax highlighting", "config/syntax"],
      ["LSP Configuration", "config/lsp"],
      ["Format & Lint", "config/format_lint"],
      ["Mappings", "config/mappings"],
      ["UI Customization", "config/nvchad_ui"],
      ["Customize colors", "config/theming"],
    ],
  },

  ["Features", "features", "i-tabler:server-cog"],
  ["Api Functions", "api", "i-mdi:atom-variant"],
  ["Debug config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Credits", "credits", "i-line-md:heart"],
];

export default sidebar_Items;
