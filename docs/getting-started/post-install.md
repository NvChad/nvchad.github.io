---
id: post-install
title: Post Install
---

After the initial installation, we recommend setting up a few things based on your needs.

### Install LSP Server(s)

The Language Server Protocol (LSP) defines the protocol used between an editor or IDE and a language server that provides language features like auto complete, go to definition, find all references etc. For more information, check out [neovim-lspconfig](https://github.com/neovim/nvim-lspconfig).

For example, to install the LSP Server for `css`, open `nvim` and execute:

```shell
:LspInstall css 
```

For `typescript`:

```shell
:LspInstall typescript
```

For a list of available LSP Server configurations, please check out the [`nvim-lspinstall`](https://github.com/kabouzeid/nvim-lspinstall) docs.

### Install Treesitter Parser(s)

The goal of `nvim-treesitter` is to provide basic functionality such as syntax-highlighting for various languages. For more info check out their repository at [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter).

For example, to install the treesitter parser for `css`: 

```shell
:TSInstall css
```

For a list of supported languages, please checkout the [docs](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages).

### Theming

NvChad ships with many themes. The default theme is `onedark`.

You may switch themes with this mapping: `<leader> + th`.

This will open a telescope fuzzy finder, with which you can preview and select a new default theme.
