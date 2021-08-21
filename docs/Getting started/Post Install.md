- Some things can be done after the installation.

### Install a LSP server

The Language Server Protocol (LSP) defines the protocol used between an editor or IDE and a language server that provides language features like auto complete, go to definition, find all references etc. For more info goto [neovim-lspconfig](https://github.com/neovim/nvim-lspconfig)

- To install lsp for css : 
```
:LspInstall css 
```

### Install a treesitter parser

The goal of nvim-treesitter is to provide some basic functionality such as highlighting. For more info goto [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

- To install treesitter parser for css : 
```
:TSInstall css
```

### Set a theme

- NvChad comes with many themes. By default onedark is set
- Switch themes with this mapping : 

```
<leader> + th
``` 
