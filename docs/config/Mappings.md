# Mappings

## Overview

- C = Ctrl
- leader = space
- A = alt
- S = shift

- Defaults are defined in `core.mappings` (core/mappings.lua)

## Mapping format

```lua
-- opts here is completely optional

 ["keys"] = {"action", "icon  mapping description", opts = {}},

 -- more examples
 ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree", opts = {}},

 ["<leader>uu"] = { "<cmd> :NvChadUpdate <CR>", "  update nvchad" },

 [";"] = { ":", "enter cmdline", opts = { nowait = true } },
 ["jk"] = { "<ESC>", "escape insert mode" , opts { nowait = true }},

 -- example with lua function
 ["<leader>tt"] = {
     function()
        require("base46").toggle_theme()
     end,
        "   toggle theme",
   },
```

- The mapping description is required for `WhichKey`, do non-whichkey users can skip it
- Icons are visually appealing and help readability, but they are optional
  - So you can place icons before the textual description, separated by 2-3 spaces
  - [Find icons to copy/paste at nerdfonts website](https://www.nerdfonts.com/cheat-sheet)

### Default opts values


```lua
{
  buffer = nil, -- Global mappings. Specify a buffer number for buffer local mappings
  silent = true, 
  noremap = true,
  nowait = false,

  -- all standard key binding opts are supported 
}
```

## Add new mappings

- This is the mappings structure of core.mappings and your custom mappings
- You have to put your mappings into `modes` like n, v, i, t etc
```lua
-- chadrc
M.mappings = require "custom.mappings"
```

- n = normal, i = insert and so on!

```lua
-- lua/custom/mappings 
local M = {}

-- add this table only when you want to disable default keys
M.disabled = {
  n = {
      ["<leader>h"] = "",
      ["<C-s>"] = ""
  }
}

M.abc = {

  n = {
     ["<C-n>"] = {"<cmd> Telescope <CR>", "Open Telescope"}
  }

  i = {
    -- more keys!
  }
}

M.xyz = {
  -- stuff
}

return M
```

- `abc` and `xyz` above are arbitrary; they could, for example, be a plugin's name
- Be sure to maintain a table structure similar to core.mappings 

## Override default mappings

```lua
- lets override nvimtree's mappings

M.nvimtree = {
   n = {
      ["<leader>ff"] = { "<cmd> NvimTreeToggle <CR>", "   toggle nvimtree" },
      ["<C-n>"] = { "<cmd> Telescope <CR>", "open telescope" },
   },
}
```
