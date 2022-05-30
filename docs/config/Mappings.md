# Mappings

- list of some important mappings!
- C = Ctrl
- leader = space
- A = alt
- S = shift

## Navigate in insert mode

- `C + h/j/k/l` - move cursor
- `C + a` - beginning of the line
- `C + e` -  end of the line

## Switch windows 

- `C + h` - switch left window
- `C + j` - switch bottom window
- `C + k` - switch top window
- `C + l` - switch right window

## Misc

- `C + s` - save
- `S + b` - new buffer
- `leader + n` - toggle number line
- `leader + rn` - toggle relative number line

## NvChad

- `leader + uu` - update nvchad
- `leader + th` - change themes

## Terminal 

- `A + i` - toggle floating terminal
- `A + h` - toggle horizontal terminal
- `A + v` - toggle vertical terminal
- `leader + h` - new horizontal terminal
- `leader + v` - new vertical terminal

## NvimTree

- `C + n` - toggle NvimTree

(Note check the rest of the mappings by running :Telescope keymaps)


# Customization
- Defaults are defined in `core.mappings` (core/mappings.lua), which you should familiarize yourself with
- User mappings should be defined in the `mappings` field of the table returned by `custom.chadrc` (these can be required from another file, e.g., `M.mappings = require "custom.mappings"`)

## Mapping format

```lua
-- general format

-- opts here is completely optional

 ["keys"] = {"action", "icon  mapping description", opts = {}},
 ["keys"] = {"action",  opts = {}}, -- non whichkey users


 -- examples

 ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree", opts = {}},

 ["<C-s>"] = { "<cmd> w <CR>", "﬚  save file" },

 ["<leader>uu"] = { "<cmd> :NvChadUpdate <CR>", "  update nvchad" },

 -- example with lua function
 ["<leader>tt"] = {
     function()
        require("base46").toggle_theme()
     end,
        "   toggle theme",
   },
```

- The mapping description is required for `WhichKey` [but this can be disabled](#mapping-with-which-key-disabled)
- As shown above, you can use lua functions in the mappings (e.g., to call lua modules)
- Icons are visually appealing and help readability, but they are optional
  - Best practice: place icons before the textual description, separated by 2-3 spaces
  - Tip: [Find icons to copy/paste at https://www.nerdfonts.com/cheat-sheet](https://www.nerdfonts.com/cheat-sheet)


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

- Note : This is completely optional

## Mappings table structure

- This is the mappings structure of core.mappings and your mappings file

```lua
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

 -- non which key users
  n = {
     ["<C-n>"] = {"<cmd> Telescope <CR>"}
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
- n, i, v, are the mode names, i.e., normal, insert, visual
- Be sure to maintain a table structure similar to core.mappings 

## Override default mappings & create mappings

- lets override nvimtree's mappings

```lua
-- chadrc
M.mappings = require "custom.mappings"

-- the above path can be any file in custom dir, just an example!
```

```lua
-- custom.mappings

local M = {}

M.nvimtree = {
   n = {
      ["<leader>ff"] = { "<cmd> NvimTreeToggle <CR>", "   toggle nvimtree" },
      ["<C-n>"] = { "<cmd> Telescope <CR>", "open telescope" },
   },
}
```

- Check [siduck's config](https://github.com/siduck/dotfiles/blob/master/nvchad/custom/mappings.lua) for reference
- The same way you can add your mappings :)

## Mapping with which-key disabled

- The method's just the same but in this you dont have to write the mappings description!
- Also put this into your custom.init.lua file :

```lua
 require("core.utils").load_mappings()
```
