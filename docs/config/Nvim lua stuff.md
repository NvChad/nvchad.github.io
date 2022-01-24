### load a file 

- suppose file is ~/.config/nvim/lua/core/chad.lua
- note that lua dir in your nvim config is already in the runtime!

```lua
require 'core.chad'
```

- if you rename that chad.lua to init.lua 

```lua
require 'core'
```
### options

vimscript:

```vim
set mouse = a
```

lua :
```lua
vim.opt.mouse = "a"
```

### autocmds / augroups

```lua
vim.cmd "augroup stuff"

--  multiline  :
vim.cmd([[
  stuff
  stuff
]])
```

### globals

vimscript :

```
let g:autosave = true
```

lua:

```lua
vim.g.autosave = true
```

- multiline global stuff

vimscript:

```vim
let g:nvim_tree_show_icons = {
    \ 'git': 1,
    \ 'folders': 0,
    \ }
```
lua:

```lua
 vim.g.nvim_tree_show_icons = {
     git = 1,
     folders = 0,
  }
```

check [nvim-lua guide](https://github.com/nanotee/nvim-lua-guide) for better explanation and more info!
