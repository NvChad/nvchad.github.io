const sidebars = {
  config: [
    {
      type: "category",
      label: "Quickstart",
      items: [
        "quickstart/install",
        "quickstart/post-install",
        "quickstart/learn-lua",
        "quickstart/Nvim lua",
      ],
    },
    {
      type: "category",
      label: "Custom Config",
      items: [
        "config/Walkthrough",
        "config/options",
        "config/plugins",
        "config/Mappings",
        "config/nvchad_ui",
        "config/Language Server Protocol",
        "config/Format & lint",
        "config/theming",
      ],
    },
    "features",
    "debugging-config",
    "contribute",
    "credits",
  ],

  testside: [
    "themes/themelist"
  ]
}

module.exports = sidebars
