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

-  you can use a table too or just link the path of your table to organize config clean!

```lua
-- chadrc.lua

local userPlugins = require "custom.plugins"

M.plugins = {
   user = userPlugins
}
```

### Mappings

#### Add new mappings

- custom/init.lua or any file in custom dir (then load it in custom/init.lua)

```lua
local map = require("core.utils").map

map("n", "<leader>cc", ":Telescope <CR>")
map("n", "<leader>q", ":q <CR>")
```

#### Change non plugin mapping 

- For example to change :

```lua
map("n", "<C-s>", "<cmd> :w <CR>") -- (check core.mappings.lua first)
```

```lua 
M.mappings = {
   misc = function()
      local map = require("core.utils").map
      map("n", "<leader>ss", "<cmd> :w <CR>")

      -- or just load your module
      -- require("custom.my_mappings")
   end,
}
```

#### Change plugin mappings

- For example to change :

```lua
map("n", "<leader>th", "<cmd> :Telescope themes <CR>")
```

```lua 
-- leader + e is used for nvimtree focus so disable it
M.plugins = {
  user = {
     ["nvim-telescope/telescope.nvim"] = {
      setup = function()
         -- load default mappings first
         require("core.mappings").telescope()

         -- then load your mappings
         local map = require("core.utils").map
         map("n", "<leader>ts", "<cmd> :Telescope themes <CR>")
      end,
     }
  }
}
```

- Note: In the above example you can just make this change in your custom/plugins/init.lua itself! (the user table here is very useful)

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
   default_plugin_config_replace = {
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

### Override default highlights

- Add a path to the 'hl_override' option in the UI section of chadrc.lua.

```lua
M.ui = {
   hl_override = "custom.highlights",
}
```

- NOTE : The above path is just an example , which will mean that your highlights file is /custom/highlights.lua.
- highlights file might contain this.

```lua
local colors = require("colors").get()

local fg = require("core.utils").fg
local fg_bg = require("core.utils").fg_bg
local bg = require("core.utils").bg

fg("Normal", colors.red)

-- If you dont want to require the above stuffs then you could just do :

vim.cmd("hi Normal guifg=#yourhexcolor")
```

### Custom theme

Many popular themes are integrated perfectly by default (check them by <kbd>\<Leader\></kbd>+<kbd>t</kbd>+<kbd>h</kbd> or `:Telescope themes`).
If your favorite one is not covered, you could get it by the followings:

#### Recommended

Make a [PR](https://nvchad.github.io/contribute#how-to-submit-themes) or open an [issue](https://github.com/NvChad/NvChad/issues) for the theme on Github.

#### Manually

* add themes as plugins:

```lua
--  custom/plugins/inited.lua

return {
	{ "local/path/to/mytheme" }, -- local
	{ "Iron-E/nvim-highlite" }, -- remote
}
```

* add colors file in format of [this](https://github.com/NvChad/nvim-base16.lua/blob/master/lua/hl_themes/aquarium.lua) for ui stuffs:

```lua
-- custom/colors.lua

return {
	white = "#ced4df",
	darker_black = "#1a1a24",
	black = "#20202A", --  nvim bg
	...
}
```

* set colors and theme in `chadrc.lua`:

```lua
-- custom/chadrc.lua

M.ui = {
  theme = "mytheme",
  -- theme = "highlite",
  colors = "custom.colors",
}
```
(*Note*, the compatibility of a custom theme with NvChad is not guaranteed, and potential highlighting issues should be fixed by yourself in `hl_override` or somewhere else)

### Remove plugins 

```lua
M.plugins = {
  user = {
      ["andymass/vim-matchup"] = {
          disable = true
       }
   }
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
