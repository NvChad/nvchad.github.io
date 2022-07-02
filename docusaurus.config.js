/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NvChad",
  tagline: "Neovim with lua is cool",
  url: "https://nvchad.github.io/",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NvChad",
  projectName: "nvchad.github.io",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "NvChad",
      logo: {
        alt: "NvChad Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "quickstart/install",
          label: "Docs",
          position: "left",
          sidebarId: 'config'
        },
        {
          to: "Features",
          label: "Features",
          position: "left",
          sidebarId: 'config'
        },
        {
          to: "themes/themelist",
          label: "Themes",
          position: "left",
          sidebarId: 'testside'
        },
        {
          href: "https://github.com/NvChad/NvChad",
          position: "right",
        },
        {
          href: "https://t.me/DE_WM",
          position: "right",
        },

        {
          href: "https://discord.com/invite/gADmkJb9Fb",
          position: "right",
        },

        { href: "https://matrix.to/#/#nvchad:matrix.org", position: "right" },
      ],
    },
    prism: {
      additionalLanguages: ["lua"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/style.css"),
        },
      },
    ],
  ],
};
