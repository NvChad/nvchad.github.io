---
id: post-install
title: Post Install
---

## If you're new to NeoVim/Vim

We strongly encourage you to learn how to use NeoVim/Vim. If you are totally new to vim then you cannot use nvchad, you need to at least have some basic knowledge.

These are highly recommend and a **must do for any new Vimmer**

- Vim tutor
  ```
  :Tutor
  ```
- In-built help docs
  ```
  :h terminal
  :h autocommand
  :h vim.api
  :h insert
  ```
- [Google your issue](https://google.com)
  - Example format query, `neovim how to delete 10 lines`
- [NeoVim quick reference](https://neovim.io/doc/user/quickref.html)
- Vim movement games
  - [Vim Adventures](https://vim-adventures.com/)
  - [Vim Genius](http://www.vimgenius.com/)

After the initial installation, we recommend setting up a few things based on your needs.

## Setup your custom config

- NvChad updates wont overwite `lua/custom` dir as its gitignored, all of the user changes must be done in this dir only

- `custom/init.lua` gets loaded at the end in the main init.lua file, add your commands,options, autocmds here etc
- `custom/chadrc.lua` is used to override `core/default_config.lua` and basically control whole of nvchad, you have to maintain the table structure of `default_config.lua`
---

NvChad provides `init.lua` & `chadrc.lua` inside of the `examples` folder.
- Copy the default files

```
mkdir lua/custom
cp examples/init.lua lua/custom/init.lua
cp examples/chadrc.lua lua/custom/chadrc.lua
```
- [Minimal custom config](https://github.com/NvChad/example_config) (this is a good starting point and can be taken as an example)

## Install Treesitter Parsers

The goal of `nvim-treesitter` is to provide basic functionality such as syntax-highlighting for various languages. For more info check out their repository at [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter).

For example, to install the treesitter parser for `css` , `html`:

```shell
:TSInstall css html
```

For a list of supported languages, please checkout the [docs](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages).
