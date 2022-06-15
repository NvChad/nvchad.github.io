## Make your own config :

- Create custom folder in lua/
- Copy the /examples dir files in this custom dir.
- Check siduck's [custom config](https://github.com/siduck/dotfiles/tree/master/nvchad) as a reference!
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

```lua
-- chadrc.lua


M.plugins = {
   user = require "custom.plugins"
}
```

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
```

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

### Add & Override default highlights

- Make sure the highlight group you use is defined in the base46 repo
- check your theme at :

```shell
~/.local/share/nvim/site/pack/packer/opt/base46/lua/hl_themes
```

- Over there, in your theme file ex : onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups.
- You can even use hex colors in fg/bg field but its preferred to use variable names ex : blue, darker_black, one_bg etc from your theme file as it'll integrate better.
- So no need to import a color table etc

```lua
M.ui = {
   hl_override = {
      --override default highlights
      Pmenu = { bg = "white" },
   },
}
```

- NOTE: check our base16 repo's integration section to know the default hl groups used
- You can even use the path of the table in hl_override table (make sure u load it in variable before) like :

```lua
-- custom.highlights
return   {
      Pmenu = { bg = "#ffffff" },
}
```

```lua
-- chadrc
local my_highlights = require("custom.highlights")

M.ui = {
   hl_override = my_highlights
}
```

- The same method as above can be used to add new highlight groups (which arent present in the base46 repo) but use the "hl_add" instead of "hl_override" table

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
