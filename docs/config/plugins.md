---
id: plugins
title: Plugins
---

### Plugin Definition

- Nvchad uses packer.nvim underhood but the syntax is different & better
- This shows how a plugin definition syntax looks like in packer.nvim and nvchad, below are some examples

#### Packer's way to define plugins

```lua
   use { "NvChad/nvterm" }, -- without any options

   -- with more options
   use {
      "NvChad/nvterm"
      module = "nvterm",
      config = function()
         require "plugins.configs.nvterm"
      end,
   },
```

#### NvChad's way to define plugins

```lua
   ["NvChad/nvterm"] = {}, -- without any options

   -- with more options
   ["NvChad/nvterm"] = {
      module = "nvterm",
      config = function()
         require "plugins.configs.nvterm"
      end,
   },
```

### Add plugins

- Install new plugins

```lua
-- chadrc.lua

M.plugins = {
   user = require "custom.plugins"
}
```
- You can use a table too or just link the path of your table to organize config clean!

```lua
-- custom/plugins/init.lua has to return a table
-- THe plugin name is github user or organization name/reponame

return {

   ["elkowar/yuck.vim"] = { ft = "yuck" },

   ["max397574/better-escape.nvim"] = {
      event = "InsertEnter",
      config = function()
         require("better_escape").setup()
      end,
   },
}
```
### Override default config of a plugin

- This feature comes useful when you want to change one thing from default config's options of a plugin but not copy paste the whole config!

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

- Take the exact plugin name from `plugins/init.lua`
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

-- we use a function here as we are calling a moodule (cmp)
-- so the function needs to return a table!
M.cmp = function()
   local cmp = require 'cmp' 

   return {
       ["<C-d>"] = cmp.mapping.scroll_docs(-8),
    }
end

return M
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
- And we want to change the values in config, setup , cmd etc
- So put that plugin definition in the custom plugins section ( the place where you define new plugins to install them)

```lua

M.plugins = {
  user = {
      ["kyazdani42/nvim-tree.lua"] = {
      cmd = { "abc" },
      config = function()
          require "custom.plugins.nvimtree"
      end,
   }
} 

-- This will change cmd, config values from default plugin definition
-- So the setup value isnt changed, look close!
```

### Enable dashboard

- You can enable alpha.nvim i.e dashboard plugin the same way.

```lua
M.plugins = {
   user = {
      ["goolord/alpha-nvim"] = {
         disable = false,
      },
   },
}

-- now run :PackerSync
```


### Remove plugins

```lua
M.plugins = {
  remove = {
      "andymass/vim-matchup",
      "NvChad/nvterm",
   },
}

-- now run :PackerSync
```
