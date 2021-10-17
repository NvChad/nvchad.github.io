### options

vimscript :

```
set mouse = a
```

lua :

```
vim.opt.mouse = "a"
```

### autocmds / augroups

```lua

vim.cmd "augroup stuff"

if its multi line then use  :

vim.cmd([[
  stuff
]])
```

### globals

vimscript

```
let g:autosave = true
```

lua

```
vim.g.autosave = true
```

- multiline global stuff

vimscript

```
let g:nvim_tree_show_icons = {
    \ 'git': 1,
    \ 'folders': 0,
    \ }
```

lua :

```lua
 vim.g.nvim_tree_show_icons = {
     git = 1,
     folders = 0,
  }
```

check [nvim-lua guide](https://github.com/nanotee/nvim-lua-guide) for better explanation and more info!
