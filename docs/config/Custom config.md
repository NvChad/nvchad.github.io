## Make your own config :

- Create custom folder in lua/
- Copy the /examples dir files in this custom dir.
- The chadrc.lua here is for editing NvChad default options which are mentioned in lua/core/default_config.lua
- The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings. It just behaves like the init.lua in ~/.config/nvim
- Check siduck's [custom config](https://github.com/siduck/dotfiles/tree/master/nvchad/custom) as an reference!

### Add plugins

- Go to custom folder
- make sure that every plugin definition is wrapped into a table.

```lua
-- /lua/custom/plugins/init.lua
return {
   { "elkowar/yuck.vim", ft = "yuck" },
   { "ellisonleao/glow.nvim", cmd = "Glow" },
}
-- just an example!
```

```lua
-- /lua/custom/chadrc.lua
local userPlugins = require "custom.plugins" -- path to table

M.plugins = {
   install = userPlugins
}
```

### Add mappings

```lua
    local map = require("core.utils").map

    map("n", "<leader>cc", ":Telescope <CR>")
    map("n", "<leader>q", ":q <CR>")
```

### Use default mapping for another command 

```lua 

-- Just an example! (chadrc boiii)
local map = require("core.utils").map

-- leader + e is used for nvimtree focus so disable it
M.mappings = {
   plugins = {
      nvimtree = {
         focus = "",
      },
   },
}

-- Leader + e => opens telescope
M.plugins = {
   default_plugin_config_replace = {
      telescope = {
         on_setup = function()
            map("n", "<leader>e", ":Telescope<CR>")
         end,
      },
   },
}
```

### Replace default config of a plugin

- Use the default_plugin_config_replace table in chadrc.lua

- Example :

```lua
M.plugins = {
   default_plugin_config_replace = {
      bufferline = "custom.bufferline",
   },
}

-- NOTE: The 'bufferline' variable there is taken from the first argument here
--  config = override_req("bufferline", "plugins.configs.bufferline", "setup")
-- you will find that in the packer's bufferline use function
-- make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.lua present needs to update
```

### Override default config of a plugin

- Note : check 'default' table in your plugin's config and override a valid table in that default table.

```lua
M.plugins = {
   default_plugin_config_replace = {
      nvim_treesitter = {
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
      nvim_treesitter = pluginConfs.treesitter,
      nvim_tree = pluginConfs.nvimtree,
   },
}
```

```lua
-- /lua/custom/plugins/configs.lua file

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

### Remove / Redefine plugins  

- Sometimes you want to totally change the packer definition config of a plugin , for example this : 

```lua
  {
    "plugin name",
    -- more options here like config,setup
    -- after, cmd etc!
  }
```

- So in order to remove that plugin, add plugin's name in  default_plugin_remove of plugins table in chadrc. Example :

```lua
M.plugins = {
   default_plugin_remove = {
       "akinsho/bufferline.nvim",
       "norcalli/nvim-colorizer.lua",
       "neovim/nvim-lspconfig",
   },
}
```
- There's a function which takes the values in the above table and remove those plugins from the default plugin table (in lua/plugins/init.lua).
- And then you can re-define (i.e install) that plugin in your custom dir's chadrc.

### Autocmds

- Well, for example you just create a new file called autochad_cmds.lua in the lua/custom folder and require it in lua/custom/init.lua! BOOOM!!

### Files to edit

- Only files that are supposed to edited by the user are meant to be in the /lua/custom/ , example files can be copied from /examples/.

- The rest of the files outside the custom folder will get overwritten when updated using `<leader> + uu` , so don't put your config there!! Just put it in the /lua/custom/ folder.

### Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

(Note : Please open out an [issue](https://github.com/NvChad/nvchad.github.io/issues) on the repo if you find any inaccuracies in the docs!)
