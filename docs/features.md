---
id: features
title: Features
---

NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration!

## Plugins

### [`packer.nvim`](https://github.com/wbthomason/packer.nvim)

- A use-package inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config , lazy loading etc.

### [`better-escape.vim`](https://github.com/jdhao/better-escape.vim)

- A plugin for escaping Vim insert mode without lagging.

### [`dashboard-nvim`](https://github.com/glepnir/dashboard-nvim)

- dashboard plugin for nvim

![dashboard](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/dashboard-nvim.png)

### [`galaxyline.nvim`](https://github.com/glepnir/galaxyline.nvim)

- fast neovim statusline plugin written in lua

(Separator styles : slant, round, default, block, arrow )
![nn](/img/features/galaxyline.png) 

### [`bufferline.nvim`](https://github.com/akinsho/bufferline.nvim)

- Bufferline for neovim ( can be used for managing buffers , tabs and close them . create custom clickable buttons on the bufferline etc)
![bufferline](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/bufferline.png)

### [`nvim-base16.lua`](https://github.com/norcalli/nvim-base16.lua)

- Manages syntax colorscheme in NvChad

### [`nvim-colorizer.lua`](https://github.com/norcalli/nvim-colorizer.lua)

- fastest Neovim colorizer , colors hex colors , hsl codes and much more!

### [`nvim-treesitter`](https://github.com/nvim-treesitter/nvim-treesitter)

- Nvim Treesitter configurations and abstraction layer. We mostly use this for syntax highlighting. 

(without / with treesitter)
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

- Installing lsp servers

```
 :LspInstall css
```

### [`neoformat`](https://github.com/sbdchd/neoformat)

- Formatting plugin , just install a [formatter](https://github.com/sbdchd/neoformat#supported-filetypes) for your language and  

```
(key for formatting)

<leader> + fm  
```

### [`nvim-tree.lua`](https://github.com/kyazdani42/nvim-tree.lua)

- A file explorer tree for neovim written in lua.

![chad](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/nvimtree.png)

### [`nvim-web-devicons`](https://github.com/kyazdani42/nvim-web-devicons)

- Lua fork of vim devicons , lets you change colors and edit icons of filetypes

![devi](/img/features/devi.png) 

### [`telescope.nvim`](https://github.com/nvim-telescope/telescope.nvim)

- ![Telescope](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/tel.png)
- ![Telescope-media](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/telmedia.png)
(telescope media works in linux only)

### [`cheatsheet.nvim`](https://github.com/sudormrfbin/cheatsheet.nvim)

- Shows cheatsheet of all nvchad mappings + default vim mappings

### [`blankline`](https://github.com/lukas-reineke/indent-blankline.nvim)

- Indentline plugin

![devi](https://raw.githubusercontent.com/siduck76/dotfiles/master/rice%20flex/blanklineNvim.png) 

### [`truezen.nvim`](https://github.com/Pocco81/TrueZen.nvim)

- add screnshots here

### Misc plugins

- gitsigns.nvim
- nvim-autopairs  
- vim-matchup
- nvim-comment
- autosave.nvim     
- neoscroll.nvim 
- vim fugitive
