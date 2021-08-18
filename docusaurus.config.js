const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NvChad',
  tagline: 'Neovim with lua is cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NvChad', // Usually your GitHub org/user name.
  projectName: 'NvChad', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NvChad',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Getting started/Setup',
          position: 'right',
          label: 'Getting started',
        },
      {to: 'docs/Features', label: 'Features', position: 'right'},
      {to: 'docs/Config', label: 'Config', position: 'right'},
        {
          href: 'https://github.com/NvChad/NvChad',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      lightTheme: require('prism-react-renderer/themes/duotoneDark'),
      darkTheme : require('prism-react-renderer/themes/duotoneDark'),
      additionalLanguages: ['lua']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
