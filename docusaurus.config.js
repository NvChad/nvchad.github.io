const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

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
          to: "getting-started/setup",
          label: "Getting Started",
          position: "right",
        },
        {
          to: "config",
          label: "Config",
          position: "right",
        },
        {
          to: "features",
          label: "Features",
          position: "right",
        },
        {
          href: "https://github.com/NvChad/NvChad",
          position: "right",
        },
      ],
    },
    prism: {
      lightTheme: require("prism-react-renderer/themes/duotoneDark"),
      darkTheme: require("prism-react-renderer/themes/duotoneDark"),
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
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
