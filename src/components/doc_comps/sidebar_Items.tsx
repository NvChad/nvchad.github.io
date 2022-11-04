const sidebar_Items: Array<any> = [
  {
    label: "Quickstart",
    items: [
      ["Install", "quickstart/install"],
      ["Post Install", "quickstart/post-install"],
      ["Learn basic Lua", "quickstart/learn-lua"],
      ["Nvim Lua guide", "quickstart/Nvim lua"],
    ],
  },
  {
    label: "Custom Config",
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

  ["Debugging config", "debugging-config"],
  ["Contributing", "contribute"],
  ["Acknowledgements", "credits"],
];

export default sidebar_Items;
