const sidebar_Items: Array<any> = [
  {
    label: ["Quickstart", "i-heroicons-rocket-launch-20-solid"],
    items: [
      ["Install", "quickstart/install"],
      ["Post Install", "quickstart/post-install"],
      ["Learn basic Lua", "quickstart/learn-lua"],
    ],
  },
  {
    label: ["Custom config", "i-mdi-cog"],

    items: [
      ["Walkthrough", "config/Walkthrough"],
      ["Options", "config/options"],
      ["Manage Plugins", "config/plugins"],
      ["LSP Configuration", "config/Lsp"],
      ["Format & Lint", "config/format_lint"],
      ["Mappings", "config/mappings"],
      ["UI Customization", "config/nvchad_ui"],
      ["Themeing", "config/theming"],
    ],
  },

  ["Debugging config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Credits", "credits", "i-mdi-cards-heart-outline"],
];

export default sidebar_Items;
