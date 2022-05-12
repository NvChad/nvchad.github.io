## Make your own config :

- Create custom folder in lua/
- Copy the /examples dir files in this custom dir.
- Check siduck's [custom config](https://github.com/siduck/dotfiles/tree/master/nvchad/custom) as an reference!
- Below are just examples bruhh

### Change default options

```lua
M.options = {
   user = function()
      vim.opt.number = false
   end,
}

-- or just load the module with your options

M.options = {
   user = function()
       require("custom.myoptions")
   end,
}
```

### Mappings

- Mappings are present in a table which is ( core.mappings file )
- Go and check the mapping structure in ( core.mappings )
- This file's linked with `M.mappings` field in ( default_config.lua ) so the user can override mappings straight from chadrc itself

#### Mapping format

```lua
 ["keys"] = {"action", "icon  mapping description"}

 -- example :

 ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree"}

 ["<C-s>"] = { "<cmd> w <CR>", "﬚  save file" },

 ["<leader>uu"] = { "<cmd> :NvChadUpdate <CR>", "  update nvchad" },

 -- can use lua functions too
 ["<leader>tt"] = {
     function()
        require("base46").toggle_theme()
     end,
        "   toggle theme",
   },
```

- Mapping description is required as we need it for registering in whichkey
- NOTE : As per the above example, you can use lua functions in the mappings to call lua modules etc
- Its always better to use an icon at the beginning of the mapping mapping description + 2 or 3 spaces after the icon.
- Find the icons from https://www.nerdfonts.com/cheat-sheet
- This helps gives a good visual look in the whichkey popup and makes it easier to read. But the icon is still optional

#### Mappings table structure

- This is the mappings structure of core.mappings & your mappings file

```lua
local M = {}

M.abc = {

  n = {
     ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree"}
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

- The abc, xyz stuff above can be named anything like a plugin's name etc.
- n, i, v, are the mode names i.e normal, insert, visual
- Make sure to maintain the table structure from core.mappings 

#### Override default mappings

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
      ["<leader>ah"] = { "<cmd> NvimTreeToggle <CR>", "   toggle nvimtree" },

      ["<C-n>"] = "", -- to disable Ctrl n keys!
   },
}

```

- Check [siduck's config](https://github.com/siduck/dotfiles/blob/master/nvchad/custom/mappings.lua) for reference
- The same way you can add your mappings :)

#### Mapping with which-key disabled

- The method's just the same but in this you dont have to write the mappings description!
- Also put this into your custom.init.lua file l

```lua
 nvchad.no_WhichKey_map()
```

### Add plugins

```lua
-- custom/plugins/init.lua

return {

   ["elkowar/yuck.vim"] = { ft = "yuck" }

    ["NvChad/nvterm"] = {
      config = function()
         require "plugins.configs.nvterm"
      end,
   },
}
```

- you can use a table too or just link the path of your table to organize config clean!

````lua
-- chadrc.lua

local userPlugins = require "custom.plugins"

M.plugins = {
   user = userPlugins
}

### Replace default config of a plugin

- Use the default_plugin_config_replace table in chadrc.lua

```lua
M.plugins = {
   user = {
      ["NvChad/nvterm"] = {
         config = function()
           require "custom.nvterm"
         end
       }
   },
}
````

- Do :PackerSync

### Override default config of a plugin

- This feature comes useful when you want to change one thing from default config of a plugin but not copy paste the whole config!

```lua
M.plugins = {
   override = {
      ["nvim-treesitter/nvim-treesitter"] = {
        ensure_installed = {
          "html",
          "css",
       },
     }
   }
}
```

- Note : the word 'nvim_treesitter' is taken from the override function from /lua/plugins/init.lua's treesitter 'use' table.
- The above method might get messy if you override many plugin configs, so below is a basic example to keep it clean :

```lua
local pluginConfs = require "custom.plugins.configs"

M.plugins = {
   override = {
      ["nvim-treesitter/nvim-treesitter"] = pluginConfs.treesitter,
      ["kyazdani42/nvim-tree.lua"] = pluginConfs.nvimtree,
   },
}
```

```lua
-- custom/plugins/configs.lua file

local M = {}

M.treesitter = {
   ensure_installed = {
      "lua",
      "html",
      "css",
   },
}

M.nvimtree = {
   git = {
      enable = true,
   },
   view = {
      side = "right",
      width = 20,
   },
}

return M
```

### Local themes

- Default themes are in our nvim-base16 repo's hl_themes dir
- Any nvchad theme structure be like :

```lua
-- siduck.lua = theme name
local M = {}

M.base_30 = {
    -- my colors
}

M.base_16 = {
    -- my base16 colors
}

return M
```

- Make sure to use the exact variable names!

- Then put your theme file in /custom/themes dir , ex : custom/themes/siduck.lua

```lua
M.ui = {
   theme = "siduck",
}
```

- NOTE: The telescope theme switcher is still WIP so u have to add theme name in chadrc manually for now.

### Override specific colors in themes

```lua
M.ui = {

   changed_themes = {
      onedark = {
         base_16 = {
            base00 = "#mycol",
         },
         base_30 = {
            red = "#mycol",
            white = "#mycol",
         },
      },

      nord = {
         -- and so on!
      },
   },
}
```

### Override default highlights

- (NOTE: This method can also be used to add your own highlight groups too)
- Make sure you use a valid hl group!

```lua
-- local colors = require("custom.colors").base_30
-- make sure to copy paste your theme color from base16 repo manually to this file ;(
-- avoid the line with M = require("....")

M.ui = {
   hl_override = {
      --override default highlights
      Pmenu = { bg = "#ffffff" },

      MyHighlightGroup = {
         fg = "abc",
         bg = "xyz"
      }
   },
}
```

- NOTE: check our base16 repo's integration section to know the default hl groups used

- You can even use the path of the table in hl_override table (make sure u load it in variable before) like :

```lua
-- custom.highlights
return   {
      Pmenu = { bg = "#ffffff" },
      MyHighlightGroup = {
         fg = "abc",
         bg = "xyz"
      }
}
```

```lua
-- chadrc
local my_highlights = require("custom.highlights")

M.ui = {
   hl_override = my_highlights
}
```

### Custom theme

Many popular themes are integrated perfectly by default (check them by <kbd>\<Leader\></kbd>+<kbd>t</kbd>+<kbd>h</kbd> or `:Telescope themes`).
If your favorite one is not covered, you could get it by the followings:

#### Recommended

Make a [PR](https://nvchad.github.io/contribute#how-to-submit-themes) or open an [issue](https://github.com/NvChad/NvChad/issues) for the theme on Github.

#### Manually

- add themes as plugins:

```lua
--  custom/plugins/inited.lua

return {
	{ "local/path/to/mytheme" }, -- local
	{ "Iron-E/nvim-highlite" }, -- remote
}
```

- add colors file in format of [this](https://github.com/NvChad/nvim-base16.lua/blob/master/lua/hl_themes/aquarium.lua) for ui stuffs:

```lua
-- custom/colors.lua

return {
	white = "#ced4df",
	darker_black = "#1a1a24",
	black = "#20202A", --  nvim bg
	...
}
```

- set colors and theme in `chadrc.lua`:

```lua
-- custom/chadrc.lua

M.ui = {
  theme = "mytheme",
  -- theme = "highlite",
  colors = "custom.colors",
}
```

(_Note_, the compatibility of a custom theme with NvChad is not guaranteed, and potential highlighting issues should be fixed by yourself in `hl_override` or somewhere else)

### Remove plugins

```lua
M.plugins = {
  remove = {
      "andymass/vim-matchup",
      "NvChad/nvterm",
   },
}
```

- Do :PackerSync

### Modify plugin definition options

- For example this is nvimtree's definition

```lua
 ["kyazdani42/nvim-tree.lua"] = {
      cmd = { "NvimTreeToggle", "NvimTreeFocus" },

      setup = function()
         require("core.mappings").nvimtree()
      end,

      config = function()
         require "plugins.configs.nvimtree"
      end,
 }
```

- Now to change cmd, setup or any option defined in it :

```lua

M.plugins = {
  user = {
      ["kyazdani42/nvim-tree.lua"] = {
      cmd = { "abc"},

      setup = function()
         require("core.mappings").yourfile
      end,

      config = function()
        your stuff!
      end,
   }
} }
```

- Do :PackerSync

### Enable dashboard

```lua
local M = {}

M.plugins = {
   user = {
      ["goolord/alpha-nvim"] = {
         disable = false,
      },
   },
}

return M
```

- Do :PackerSync
- The above is an example, its better to put alpha in your custom plugins list table which is most probably in another file if you like organizing stuff

### Packer Snapshot

- Lets run `:PackerSnapshot stable_chad` (this command creates new snapshots)
- my chadrc could look like this

```lua
M.plugins = {

  override = {
      ["wbthomason/packer.nvim"] = {
          snapshot = "stable_chad",
       }
   }
}
```

- In case there's a breaking change, I can just do `:PackerSnapshotRollback stable_chad` and wait for 1-2 minutes
- To delete that snapshot, `PackerSnapshotDelete stable_chad`

### Autocmds

- for example you can create a new file called autochad_cmds.lua in the lua/custom folder and require it in lua/custom/init.lua! or just define autocmds in custom/init.lua

### Files to edit

- Only edit files in custom dir, dont touch anything outside it.
- The rest of the files outside the custom folder will get overwritten when updated using `<leader> + uu` .

### Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

(Note : Please open out an [issue](https://github.com/NvChad/nvchad.github.io/issues) on the repo if you find any inaccuracies in the docs!)
