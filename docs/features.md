---
id: features
title: Features
---

NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration while still looking very beautiful!

## Plugins

### Core plugins

#### [`packer.nvim`](https://github.com/wbthomason/packer.nvim)

A `use-package` inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config, lazy loading etc.

#### [`better-escape.nvim`](https://github.com/max397574/better-escape.nvim)

A plugin for escaping Vim insert mode without lagging.

#### [`telescope.nvim`](https://github.com/nvim-telescope/telescope.nvim)

Fuzzy finding select menu with text.

![Telescope](https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/tel.png)

### UI plugins

#### [`bufferline.nvim`](https://github.com/akinsho/bufferline.nvim)

Top bar bufferline for neovim (can be used for managing buffers and tabs, including close them. It also creates custom clickable buttons on the bufferline.

![bufferline](https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/bufferline.png)

#### [`NvChad's statusline written from scratch`](https://github.com/NvChad/NvChad/blob/main/lua/ui/statusline.lua)

Fast NeoVim statusline plugin written in lua.

Separator styles: `slant`, `round`, `default`, `block`, `arrow`:

![statusline ](/img/features/statusline.png)
![statusline modes](/img/features/statusline_modes.png)

- NOTE : (statusline looks different based on the themes, the above screenshot is from the onedark theme)

#### [`nvim-tree.lua`](https://github.com/kyazdani42/nvim-tree.lua)

A file explorer tree for NeoVim written in lua.

![nvim tree](https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png)

#### [`blankline`](https://github.com/lukas-reineke/indent-blankline.nvim)

Indentline plugin.

![blankline screenshot](https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/blanklineNvim.png)

#### [`dashboard-nvim`](https://github.com/goolord/alpha-nvim)

Dashboard plugin for NeoVim.

![dashboard](/img/screenshots/dashboard.png)

#### [`nvim-base16.lua`](https://github.com/norcalli/nvim-base16.lua)

Manages syntax colorscheme in NvChad.

#### [`nvim-colorizer.lua`](https://github.com/norcalli/nvim-colorizer.lua)

Fastest NeoVim colorizer, colors hex colors, hsl codes and much more!

#### [`nvim-web-devicons`](https://github.com/kyazdani42/nvim-web-devicons)

Lua fork of vim devicons which lets you change colors and edit icons of filetypes.


### [`nvim-treesitter`](https://github.com/nvim-treesitter/nvim-treesitter)

NeoVim Treesitter configurations and abstraction layer. We mostly use this for syntax highlighting. The pretty syntax highlighting you see in all of our screenshots has gotten possible due to treesitter

### Language Server Plugins


#### Various LSP plugins

- [`nvim-lspconfig`](https://github.com/neovim/nvim-lspconfig) - Used for configuring lsp servers etc
- [`nvim-cmp`](https://github.com/hrsh7th/nvim-cmp) - completion menu
- [`lsp-signature.nvim`](https://github.com/ray-x/lsp_signature.nvim) - lsp signature hint when you type
- [`lspkind.nvim`](https://github.com/onsails/lspkind-nvim) - Adds pictograms to neovim built-in lsp completion items:

![lspkind](https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/lspkind.png)

<!-- ![lsp](/img/features/lsp.gif) -->
<!-- _(The video shows compe + lsp completions and lsp-signature while completion of functions and lsp diagnostics in the editor as well as on the statusline)_ -->

### Misc plugins

- [`gitsigns.nvim`](https://github.com/lewis6991/gitsigns.nvim)
- [`nvim-autopairs`](https://github.com/windwp/nvim-autopairs)
- [`comment.nvim`](https://github.com/numToStr/Comment.nvim)
