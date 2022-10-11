---
id: post-install
title: Post Install
---

## If you're new to Neovim/Vim

We strongly encourage you to learn how to use Neovim/Vim. If you are totally new to Vim then you cannot use NvChad until you gain some basic knowledge about Vim's modes, default editor commands, and key bindings.

These are highly recommended and a **must do for any new Vimmer:**

- Vim tutor
  ```
  :Tutor
  ```
- Built-in help docs
  ```
  :h terminal
  :h autocommand
  :h vim.api
  :h insert
  ```
- [Google your issue](https://google.com)
  - Example format query: `neovim how to delete 10 lines`
- [Neovim quick reference](https://neovim.io/doc/user/quickref.html)
- Vim movement games:
  - [Vim Adventures](https://vim-adventures.com/)
  - [Vim Genius](http://www.vimgenius.com/)

After the initial installation, we recommend setting up a few things based on your needs.

## Setup your custom config

- NvChad updates won't overwite the `lua/custom` dir as it's gitignored; all of the user changes must be done in this dir only.

- `custom/init.lua` gets loaded at the end in the main init.lua file, add your commands,options, autocmds here etc
- `custom/chadrc.lua` is used to override `core/default_config.lua` and basically control all of NvChad; you have to maintain the table structure of `default_config.lua`
---

- [Minimal custom config](https://github.com/NvChad/example_config) (This is a good starting point and can be taken as an example.)
- You can use this as your initial custom dir (delete .git folder from it).

## Install Treesitter Parsers

The goal of `nvim-treesitter` is to provide basic functionality such as syntax highlighting for various languages. For more info check out their repository at [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter).

For example, to install the treesitter parser for `css` , `html`:

```shell
:TSInstall css html
```

For a list of supported languages, please checkout the [docs](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages).
