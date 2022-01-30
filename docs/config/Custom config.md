## Make your own config :

- Create custom folder in lua/
- Copy the examples dir files in this custom dir.
- The chadrc.lua here is for editing nvchad default options which are mentioned in lua/core/default_config.lua
- The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings. It just behaves like the init.lua in ~/.config/nvim
- check siduck's [custom config](https://github.com/siduck/dotfiles/tree/master/nvchad/custom) as an reference!

### Add plugins

- Go to custom folder

```lua
-- /lua/custom/plugins/init.lua
return {
   { "elkowar/yuck.vim", ft = "yuck" },
   { "ellisonleao/glow.nvim", cmd = "Glow" },
}
-- just an example!
```

```lua
-- chadrc
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

- Add a path to the 'hl_override' option in the UI section of chadrc.

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

### Autocmds

- Well, for example you just create a new file called autochad_cmds.lua in the custom folder and require it in the init.lua file of the custom folder! BOOOM!!

### Files to edit

- Only files that are supposed to edited by the user are meant to be in the custom dir, default files in that folder are example_chadrc and example_init which can be just renamed by the user into chadrc.lua and init.lua .

- The rest of the files outside the custom folder will get overwritten by the update so don't put your config there!! Just put it in the custom folder.

### Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. Don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

(note : Please open out an issue on the repo if you find any inaccuracies in the docs!)
