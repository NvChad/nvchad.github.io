---
id: features
title: Features
---

NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration!

## Plugins

### [`packer.nvim`](https://github.com/wbthomason/packer.nvim)

A `use-package` inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config, lazy loading etc.

### [`better-escape.vim`](https://github.com/jdhao/better-escape.vim)

A plugin for escaping Vim insert mode without lagging.

### [`dashboard-nvim`](https://github.com/glepnir/dashboard-nvim)

Dashboard plugin for nvim.

![dashboard](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/dashboard-nvim.png)

### [`galaxyline.nvim`](https://github.com/glepnir/galaxyline.nvim)

Fast NeoVim statusline plugin written in lua.

Separator styles: `slant`, `round`, `default`, `block`, `arrow`:

![nn](/img/features/galaxyline.png) 

### [`bufferline.nvim`](https://github.com/akinsho/bufferline.nvim)

Top bar bufferline for neovim (can be used for managing buffers and tabs, including close them. It also creates custom clickable buttons on the bufferline.

![bufferline](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/bufferline.png)

### [`nvim-base16.lua`](https://github.com/norcalli/nvim-base16.lua)

Manages syntax colorscheme in NvChad.

### [`nvim-colorizer.lua`](https://github.com/norcalli/nvim-colorizer.lua)

Fastest NeoVim colorizer, colors hex colors, hsl codes and much more!

### [`nvim-treesitter`](https://github.com/nvim-treesitter/nvim-treesitter)

NeoVim Treesitter configurations and abstraction layer. We mostly use this for syntax highlighting. 

_without / with treesitter:_
![treesitter](/img/features/treesitter.png) 


### LSP related plugins 

- [`nvim-lspconfig`](https://github.com/neovim/nvim-lspconfig) - Used for configuring lsp servers etc
- [`nvim-compe`](https://github.com/hrsh7th/nvim-compe) - completion menu 
- [`lsp-signature.nvim`](https://github.com/ray-x/lsp_signature.nvim) -  lsp signature hint when you type
- [`lspkind.nvim`](https://github.com/onsails/lspkind-nvim) - Adds pictograms to neovim built-in lsp completion items:

![lspkind](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/lspkind.png)

![lsp](/img/features/lsp.gif) 

_(The video shows compe + lsp completions and lsp-signature while completion of functions and lsp diagnostics in the editor as well as on the statusline)_

### [`nvim-lspinstall`](https://github.com/kabouzeid/nvim-lspinstall)

Makes installing lsp servers easy. For example:

```
 :LspInstall css
```

### [`neoformat`](https://github.com/sbdchd/neoformat)

Formatting plugin for most languages. Just install a [formatter](https://github.com/sbdchd/neoformat#supported-filetypes) for your language and execute `<leader> + fm`.

### [`nvim-tree.lua`](https://github.com/kyazdani42/nvim-tree.lua)

A file explorer tree for NeoVim written in lua.

![chad](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/nvimtree.png)

### [`nvim-web-devicons`](https://github.com/kyazdani42/nvim-web-devicons)

Lua fork of vim devicons which lets you change colors and edit icons of filetypes.

![devi](/img/features/devi.png) 

### [`telescope.nvim`](https://github.com/nvim-telescope/telescope.nvim)

Fuzzy finding select menu with text and image preview.

![Telescope](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/tel.png)
![Telescope-media](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/telmedia.png)
(telescope media works in linux only)

### [`cheatsheet.nvim`](https://github.com/sudormrfbin/cheatsheet.nvim)

Shows cheatsheet of all NvChad mappings including default vim mappings.

### [`blankline`](https://github.com/lukas-reineke/indent-blankline.nvim)

Indentline plugin.

![devi](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/blanklineNvim.png) 

### [`truezen.nvim`](https://github.com/Pocco81/TrueZen.nvim)

Focus mode for NeoVim - temporarily hide statusbars, bufferlines, etc.

TODO: Add screnshots here

### Misc plugins

- [`gitsigns.nvim`](https://github.com/lewis6991/gitsigns.nvim)
- [`nvim-autopairs`](https://github.com/windwp/nvim-autopairs)
- [`vim-matchup`](https://github.com/andymass/vim-matchup)
- [`nvim-comment`](https://github.com/terrortylor/nvim-comment)
- [`autosave.nvim`](https://vimawesome.com/plugin/vim-auto-save)
- [`neoscroll.nvim`](https://github.com/karb94/neoscroll.nvim)
- [`vim-fugitive`](https://github.com/tpope/vim-fugitive)
