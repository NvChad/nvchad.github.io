## How to make my own config?

- Create custom dir in lua/
- Copy the examples dir files in this custom dir. 
- The chadrc.lua here is for editing nvchad default options etc.
- The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings.

## Replace default config of a plugin

- Use the default_plugin_config_replace table in chadrc.lua

- Example :

```lua
M.plugins = {
   default_plugin_config_replace = {
      lspconfig = "custom.lspconfig",
   },
}

-- this will replace lspconfig's default config with the file custom/lspconfig.lua
-- make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.vim or packer_compiled.lua present in the ~/.config/nvim/plugin dir needs to update the paths!
```

## Override default config of a plugin

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
- The above method might get clutted if you override many plugin configs, so below is a basic example to keep it clean : 

```lua
local pluginConfs = require "custom.plugins.configs"

M.plugins = {
   default_plugin_config_replace = {
      nvim_treesitter = pluginConfigs.treesitter,
      nvim_tree = pluginConfigs.nvimtree,
   },
}
```

```
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
   view = {
      side = "right",
      width = 20,
   },
}

return M
```

### Add new plugins

- Go to init.lua file in custom folder
- example :

```lua
local customPlugins = require "core.customPlugins"

customPlugins.add(function(use)
   use {
       "folke/which-key.nvim"
        event = "something",
        config = function()
           path of config file within custom dir or add the config here itself
        end
    }
 end)

-- the above snippet is just an example
```

### Add new mappings

```lua
    local map = require("core.utils").map

    map("n", "<leader>cc", ":Telescope <CR>")
    map("n", "<leader>q", ":q <CR>")
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

## Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. Don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

(note : Please open out an issue on the repo if you find any inaccuracies in the docs!)
