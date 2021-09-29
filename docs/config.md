---
id: config
title: Config
---

## Structure

NvChad comes with the following file / folder structure. [An up-to-date & full tree can be viewed in the repo](https://github.com/NvChad/NvChad/)

```tree

├── init.lua
│
├── lua
│   ├── colors
│   │   ├── highlights.lua
│   │   └── init.lua (i)
│   │   
│   ├── core
│   │   ├── init.lua
│   │   ├── autocmds.lua
│   │   ├── custom.lua (i)
│   │   ├── default_config.lua
│   │   ├── hooks.lua (i)
│   │   ├── mappings.lua
│   │   ├── options.lua
│   │   └── utils.lua (i)
|   |
│   ├── custom
│   │   ├── example_chadrc.lua
│   │   ├── example_init.lua
│   │   
│   ├── plugins
│   │    ├── init.lua
│   │    ├── packerInit.lua
│   │    └── configs
│   │        ├── bufferline.lua
│   │        ├── others.lua
│   │        └── <many more plugin configs>

```
- The file names in the tree with (i) are meant to be ignored , i.e the user doesnt need to look at them. I assume you have basic lua knowledge  The lua code in those files might fret you or look very complex / scare you from nvchad xD. If you're not familiar with lua's syntax then please check [our basic lua guide](http://localhost:3000/getting-started/learn-lua). Dont worry you just need to skim through it. 

## Walkthrough

- Letss goooo!

![chad](https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png)
![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

## Init.lua

- So the nvchad config's dir has a lua folder and init.lua file.
- The init.lua basically loads the core config.
- You could check there must be a file named "init.lua" in the core folder which makes it easy for us to require it . 

- for example , you have a file called "test.lua" and you want to organize your config structure so you put test.lua in a folder called "chadir", So you gotta require this "test.lua" to load it right? its obvious to do this :

```lua
require("chadir.test") or require "chadir.test".
```
- You could also rename the test.lua as init.lua , and then you just need to do :

```lua 
require "chadir".
 -- which calls the init.lua present in the chadir
```

- So basically require "core" is loading the init.lua file in the core folder.
- Since we are also doing error handling , we wrap that up in a pcall.

- lets explain this :  local ok, err = pcall(require, module) 

- pcall will run : require module , which is require "core" in our case , only if ok's value is true.
- pcall returns a boolean value and run the function inside in it , (the require thingy)
- But for some reason if there's no such module , then pcall will return false and some errors , which are then passed into the "err" variable.
- Basically if require of the module (core in our case) fails then nvim will show up an error on startup , if not then it'll just run that require thingy.

## Colors

- This dir has two files : init.lua and highlights.lua
- Themeing is done with the nvim-base16.lua plugin , this is a fork of the original plugin (nvim-base16.lua) made by @norcalli. The original repo was dead for ages so I had to fork it and this plugin's pretty fast in load times , we have stripped down the code , removed outdated stuffs and made it more nvchad specific.

- The base16 plugin loads the init.lua file.
- The init.lua file in the colors dir loads the base16 plugin and loads highlights after it.
- Previously we loaded themes this way : 

```lua
local base16 = require 'base16'
base16(base16.themes("ondark"), true)
```

- Since the addition of chadrc , we added a variable so (theme_var instead of "onedark") , this variable was defined in chadrc , so changing the theme name directly from chadrc changed the overall theme!
- But this was a little cumbersome since , a new neovim window had to be opened to check the theme changes.

- We then added a telescope picker for changing themes on the fly :D.
- So leader + th (leader is the space key) will open a telescope picker and scrolling through the items (themes) in it would temporarily apply theme + preview them in a previewer window of the telescope , pressing enter on the theme name does two things : 

- 1) apply the theme 
- 2) save the theme's name in the variable of chadrc file.

## Core

- The core folder has several files , some of them which you dont even need to worry checking like : custom.lua hooks.lua utils.lua.
- The init.lua file in this folder just runs some of the modules i.e files in the core repo , check it yourself! 

- autocmds.lua : defines some default autocmds of nvchad.
- default_config.lua : This is an important file , more like a global file which has some default options for everything in nvchad , like themes , mappings , other UI related stuff etc.
- If you need something to be changed then add that thing from default_config.lua to chadrc.lua (in custom folder). Make sure you copy example_chadrc.lua to chadrc.lua!! 

- mappings.lua : defines all the default mappings, all mappings are wrapped up into specific functions for example each plugin has its own function for mapping ( ex - M.bufferline in mappings.lua). These functions are put in the "Setup() call" of the plugin in the plugins/init.lua config. 

- Those mappings are loaded only if the plugin is loaded! 

- The mappings take values from the chadrc ( if anything related to mappings isnt defined here , then the values will be taken from default_config.lua). I'll explain this part later in this section!

- options.lua : defines all default options , again takes value from chadrc or default_config.lua

## Default config

- This file is core/default_config.lua 
- It contains all the default options for various stuffs in nvchad.

For example :

```lua
-- options section contains default options
-- core/options.lua takes values from this part , for example : 

M.options = {
   mapleader = " ",
}

-- the mapleader's value is set to space here.
```

```lua
-- UI related stuffs
M.ui = {
   theme = "nord",
}
```

```lua 

-- this part has all the plugins related stuff
M.plugins = {

-- The plugin_status part is meant for enabling/disablinlg default plugins , so in this case autosave to false disables it ( and its config & mappings too)

plugin_status = {
      ... 
      autosave = false, 
      ...
 },


-- this has plugin options , so in this case enable_git = 0 disables git status on the nvimtree.
options  = {
  ...
   nvimtree = {
         enable_git = 0,
   },
  ... 
}

-- this is for replacing default config with your custom config.
 default_plugin_config_replace = {
     nvim_web_devicons = "",
     feline = "", 
     bufferline ="",
     indent_blankline = "",
     nvim_colorizer = "",
     nvim_treesitter ="",
     gitsigns = "",
     neoscroll = "",
     signature = "",
     autosave = "",
     better_escape = "",
     nvim_cmp = "",
     luasnip = "",
     nvim-autopairs = "",
     dashboard = "",
     nvim_comment = "",
     nvim_tree ="",
     telescope = "",

     -- example custom/lspconfig.lua file 

     lspconfig = "custom.lspconfig",
  },
}

M.mappings = {} has general mappings
M.mappings.plugins = {} has plugin related mappings

```

- Ok now you might be wondering how do values from the non existant chadrc file is taken? (chadrc.lua doesnt exist by default , only example_chadrc.lua does).
- For example if the user doesnt set up the theme in chadrc then nvchad will automatically take value from the default_config.lua (core dir).
- This happens by: 

```lua
require("core.utils").load_config()
```
- This basically merges the tables in chadrc to default_config , so if the user makes any changes in the chadrc then that change will overwrite the value in default_config!!
- you could check plugins/configs/nvimtree.lua file , the 2nd line in it and various files like statusline , file-icons etc too!

# Plugins

- The plugins dir contains three files , init.lua , packerInit.lua and the configs dir.

- packerInit.lua : this file is used for defining packer's init stuffs , so things like clone_timeout , compile_on_sync etc and other packer related options are mentioned here.
- init.lua : is basically the packer config , it calls packerInit first and then following with definitions of other plugins + their configs'

- For example to add a plugin , packer uses this format : 

```lua

use {
  "org or username/reponame",
  config = function()
    path to config ( require it)
  end
}

-- for example 

 use {
       "max397574/better-escape.nvim",
       config = function()
          require("plugins.configs.better_escape")
       end
    }

```

- The lua folder (in .config/nvim) is already on the path so suppose you added a file called example.lua in ".config/nvim/lua".
- To require it you just need to do : require "example" . No need to add the .lua extension :D.

- configs dir : All default nvchad plugins's configs are stored here!!

- You might've seen this function being used in the (plugins/init.lua) file : 

```lua 
config = override_req("nvim_cmp", "plugins.configs.cmp"),
```

- The override_req function here , checks if the "nvim_cmp" is added in the default_plugin_config_replace in (chadrc.lua) file and if its added , then the function will make packer use that custom config.

- In case if thats not added then the function will just make use of "plugins.configs.cmp"


## Replace default config of a plugin

- use the default_plugin_config_replace table in chadrc.lua 

- Example : 

```lua
M.plugins = {
   default_plugin_config_replace = {
      lspconfig = "custom.lspconfig",
   },
}

-- this will replace lspconfig's default config with the file custom/lspconfig.lua
-- Make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.vim or packer_compiled.lua present in the ~/.config/nvim/plugin dir needs to update the paths!
```

## Setup formatting and linting

- There are many plugins for this , I will use null-ls.nvim in this example!

### Install null-ls

```lua
 use {
      "jose-elias-alvarez/null-ls.nvim",
      after = "nvim-lspconfig",
      config = function()
         require("custom.plugin_confs.null-ls").setup()
      end,
   }

-- load it after nvim-lspconfig , since we'll use some lspconfig stuff in null-ls config!
```

### Null-ls config

```lua
local ok, null_ls = pcall(require, "null-ls")

if not ok then
   return
end

local b = null_ls.builtins

local sources = {

   -- JS html css stuff
   b.formatting.prettierd.with {
      filetypes = { "html", "json", "markdown", "scss", "css", "javascript", "javascriptreact" },
   },
   b.diagnostics.eslint.with {
      command = "eslint_d",
   },

   -- Lua
   b.formatting.stylua,
   b.diagnostics.luacheck.with { extra_args = { "--global vim" } },

   -- Shell
   b.formatting.shfmt,
   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },
}

local M = {}
M.setup = function(on_attach)
   null_ls.config {
      sources = sources,
   }
   require("lspconfig")["null-ls"].setup { on_attach = on_attach }
end

return M
```

- Check [null-ls builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) to get config for your language!
- Also note that I've added some config of linters and formatters in null-ls so those programs must be installe on my system as well! like prettierd , stylua , eslint_d etc 


## Setup lsp server?

- first check [lspconfig_config.md](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md)

- if your servers are like html ,cssls , tsserver etc then you dont need to add config for it , you can just include their names in the lspconfig's section containing servers table.
- Then install that lspserver, if you get issues like "cmd not executable" in :LspInfo then install those lspservers globally in your system. 

Ive had this issue with some lspservers which were installed by npm ,

```shell
npm config set prefix=~/.node_modules

add ~/.node_modules/bin to PATH
```

- But there are servers like sumneko_lua , jdtls etc which just dont work with the default config i.e you need to configure stuffs in its lspconfig like setting right path for the lsp's binary in cmd etc

- I would suggest creating a dir called "plugin_confs" in the custom folder to organize your custom config well :)

(For example I needed to add vls)

This is the default config provided by the lspconfig and I change it to : 

```lua
local vls_root_path = vim.fn.stdpath('cache')..'/lspconfig/vls'
local vls_binary = vls_root_path.."/cmd/vls/vls"

require'lspconfig'.vls.setup {
  cmd = {vls_binary},
}
```

```lua
local vls_root_path = '/home/sid/mylsp_servers/vls'
local vls_binary = vls_root_path.."/vls"

require'lspconfig'.vls.setup {
  cmd = {vls_binary},
}

-- note : the "/vls" is just the biinary here!
```

- I would add this in the custom/plugin_confs/lspconfig.lua's last line!

- check [lspconfig repo](https://github.com/neovim/nvim-lspconfig) for getting more info about its config , lspservers default config etc.

## Basic nvim lua stuffs

-  options

vimscript : 

```
set mouse = a
```

lua :

```
vim.opt.mouse = "a"
```

-  autocmds / augroups

```lua

vim.cmd "augroup stuff"

if its multi line then use  :

vim.cmd([[
  stuff
]])
```

- globals

vimscript 

```
let g:autosave = true
```

lua 

```
vim.g.autosave = true
```

- multiline global stuff 

vimscript 

```
let g:nvim_tree_show_icons = {
    \ 'git': 1,
    \ 'folders': 0,
    \ }
```

lua : 

```lua
 vim.g.nvim_tree_show_icons = {
     git = 1,
     folders = 0,
  }
```

check [nvim-lua guide](https://github.com/nanotee/nvim-lua-guide) for better explanation and more info!

## How to make my own config?

- Go to custom folder

- cp example_chadrc.lua chadrc.lua 
- cp example_init.lua init.lua 

- The chadrc here is for editing nvchad default options etc.
- The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings.

### Add new plugins 

- Go to init.lua file in custom folder 
- uncomment the line hooks.add line containing the "install_plugins" stuff

- example : 

```lua

hooks.add("install_plugins", function(use)
   use {
       "folke/which-key.nvim"
        event = "something", 
        config = function()
            require("custom.plugin_confs.whichkey")
        end
    }
 end)

-- so the path of the config here basically is in the custom/plugin_confs/whichkey.lua
```

### Add new mappings

```lua

 hooks.add("setup_mappings", function(map)
    map("n", "<leader>cc", "dd", opt) -- example to delete the buffer
    .... many more mappings ....
 end)

```

### Autocmds

- Well, for example you  just create a new file called autochad_cmds.lua in the custom folder and require it in the init.lua file of the custom folder!  BOOOM!!

## Files to edit 

- Only files that are supposed to edit by the user are meant to be in the custom dir, default files in that folder are example_chadrc and example_init which can be just renamed by the user into chadrc.lua and init.lua .

- The rest of the files outside the custom folder will get overwritten by the update so dont put your config there!! Just put it in the custom folder.

(note : the docs will be refined and updated more if there are any inaccuracies)

### Lazy loading 

- We lazy load almost 95% of the plugins so we expect you to lazy load the plugins you've added to reduce startuptime. Dont want users making nvchad slow just because they didnt lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)
