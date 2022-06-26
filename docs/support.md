---
id: debugging-config
title: Debugging config
---

## Basic Debugging

- If you have trouble with plugins, your first place to look is the packer log

  ```shell
  less ~/.cache/nvim/packer.nvim.log
  ```

- If you still can't figure out what's going wrong, you can remove your compiled Packer plugins with:

  ```shell
  rm -r ~/.config/nvim/plugin`
  ```

  Then in NeoVim run `:PackerSync` and **restart NeoVim**.
  This will redownload and install all plugins.

- You can check the health of NeoVim with the built-in health check command. In nvim run:
  ```shell
  :checkhealth
  ```

## Before logging an issue:

- [Search the GitHub issue list](https://github.com/NvChad/NvChad/issues?q=is%3Aissue)
- Then [log an issue, be sure to provide **all prompted information**](https://github.com/NvChad/NvChad/issues/new/choose)

## How to gather fundamental debugging info for GitHub issues

- Get your current NvChad version
  ```shel
  $ git rev-parse --short HEAD
  ```
- Get all the differences between your local config & NvChad
  ```shell
  $ git diff origin/HEAD > diff.txt
  ```
- Get the Packer log
  ```shell
  $ less ~/.cache/nvim/packer.nvim.log
  ```

## NeoVim debugging options

- Verbosity will show what is being executed by NeoVim
  - Primarily through the use of `:set verbose=9` (or another number 0<= num < 10)
  - Or start NeoVim with `nvim -v9`
- Use the NeoVim command line to call Lua & VimL functions & examine code
  - [Print a lua table in readable format](<https://neovim.io/doc/user/lua.html#vim.inspect()>), like the
  ```
  :lua print(vim.inspect())
  ```
  - [Call a lua function manually](https://neovim.io/doc/user/lua.html#lua-require)
  ```
  :lua require('<FILE PATH FROM /lua>').function()
  ```
  - [Print a buffer option variable](https://neovim.io/doc/user/lua.html#vim.g), for example the current filetype
  ```
  :lua print(vim.bo.ft)
  :echo &ft
  ```
