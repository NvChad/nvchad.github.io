###  Call or import a module

- Neovim config's Lua dir is on the PATH. 
- Suppose the file is ~/.config/nvim/lua/core/chad.lua

```lua
require 'core.chad'
```

- If you rename chad.lua to init.lua:

```lua
require 'core'
```
### Options

```lua
set mouse = a -- vimscript
```
```lua
vim.opt.mouse = "a" -- lua
```

### Globals

```lua
let g:autosave = true -- vimscript
```
```lua
vim.g.autosave = true -- lua
```

- Multiline globals

vimscript:

```lua 
-- vimscript
let g:nvim_tree_show_icons = {
    \ 'git': 1,
    \ 'folders': 0,
    \ }
```
```lua
-- lua
 vim.g.nvim_tree_show_icons = {
     git = 1,
     folders = 0,
  }
```

Check [nvim-lua guide](https://github.com/nanotee/nvim-lua-guide) for a better explanation and more information.
