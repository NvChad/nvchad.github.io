const sidebar_Items: Array<any> = [
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
      ["Options", "config/options"],
      ["Manage Plugins", "config/plugins"],
      ["LSP Configuration", "config/Lsp"],
      ["Format & Lint", "config/format_lint"],
      ["Mappings", "config/mappings"],
      ["UI Customization", "config/nvchad_ui"],
      ["Customize colors", "config/theming"],
    ],
  },

  ["Features", "features", "i-tabler:server-cog"],
  ["Debug config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Credits", "credits", "i-line-md:heart"],
];

export default sidebar_Items;
