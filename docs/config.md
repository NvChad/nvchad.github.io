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

- The file names in the tree with (i) are meant to be ignored , i.e the user doesnt need to look at them. I assume you have basic lua knowledge The lua code in those files might fret you or look very complex / scare you from NvChad xD. If you're not familiar with lua's syntax then please check [our basic lua guide](getting-started/learn-lua). Don't worry you just need to skim through it.

## Walkthrough

- Letss goooo!

![chad](https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png)
![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

## Init.lua

- So NvChads's config dir has a lua folder and an init.lua file.
- The init.lua basically loads the core config.
- You could check there must be a file named "init.lua" in the core folder which makes it easy for us to require it.

- For example , you have a file called "test.lua" and you want to organize your config structure so you put test.lua in a folder called "chadir". So you gotta require this "test.lua" to load it right? It's obvious to do this :

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

- Let's explain this : local ok, err = pcall(require, module)

- pcall will run : require module , which is require "core" in our case , only if ok's value is true.
- pcall returns a boolean value and run the function inside in it , (the require thingy).
- But for some reason if there's no such module , then pcall will return false and some errors , which are then passed into the "err" variable.
- Basically if require of the module (core in our case) fails then nvim will show up an error on startup , if not then it'll just run that require thingy.

## Colors

- This dir has two files : init.lua and highlights.lua
- Theming is done with the nvim-base16.lua plugin , this is a fork of the original plugin (nvim-base16.lua) made by @norcalli. The original repo was dead for ages so I had to fork it and this plugin's pretty fast in load times , we have stripped down the code , removed outdated things and made it more NvChad specific.

- The base16 plugin loads the init.lua file.
- The init.lua file in the colors dir loads the base16 plugin and loads highlights after it.
- Previously we loaded themes this way :

```lua
local base16 = require 'base16'
base16(base16.themes("ondark"), true)
```

- Since the addition of chadrc , we added a variable (theme_var instead of "onedark") , this variable was defined in chadrc , so changing the theme name directly from chadrc changed the overall theme!
- But this was a little cumbersome since a new nvim window had to be opened to check the theme changes.

- We then added a telescope picker for changing themes on the fly :D.
- So leader + th (leader is the space key) will open a telescope picker and scrolling through the items (themes) in it would temporarily apply theme + preview them in a previewer window of the telescope , pressing enter on the theme name does two things :

- 1. apply the theme
- 2. save the theme's name in the variable of chadrc file.

## Core

- The core folder has several files , some of them you don't even need to worry checking like : custom.lua hooks.lua utils.lua.
- The init.lua file in this folder just runs some of the modules i.e files in the core folder , check it yourself!

- autocmds.lua : Defines some default autocmds in NvChad.
- default_config.lua : This is an important file , more like a global file which has some default options for everything in NvChad , like themes , mappings , other UI related stuff etc.
- If you need something to be changed , then add that thing from default_config.lua to chadrc.lua (in custom folder). Make sure you copy example_chadrc.lua to chadrc.lua!!

- mappings.lua : Defines all the default mappings, all mappings are wrapped up into specific functions. For example, each plugin has its own function for mapping ( ex - M.bufferline in mappings.lua). These functions are put in the "Setup() call" of the plugin in the plugins/init.lua config.

- Those mappings are loaded only if the plugin is loaded!

- The mappings take values from the chadrc ( if anything related to mappings isn't defined here , then the values will be taken from default_config.lua). I'll explain this part later in this section!

- options.lua : Defines all default options , again takes values from chadrc or default_config.lua

## Default config

- This file is core/default_config.lua
- It contains all the default options for various stuffs in NvChad.

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

-- The status section can be used to disable or enable built-in plugins. In this case, we
-- disable the "nvimtree" plugin (and its config & mappings too), and enable "dashboard".

status = {
  ...
  nvim_tree = false,
  dashboard = true,
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
     signature = "",
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

- Ok now you might be wondering how are values from the non existant chadrc file taken? (chadrc.lua doesnt exist by default , only example_chadrc.lua does).
- For example , if the user doesn't set up the theme in chadrc then NvChad will automatically take value from the default_config.lua (core dir).
- This happens by:

```lua
require("core.utils").load_config()
```

- This basically merges the tables in chadrc to default_config , so if the user makes any changes in the chadrc then that change will overwrite the value in default_config!!
- You could check plugins/configs/nvimtree.lua file , the 2nd line in it , and various files like statusline , file-icons etc too!

# Plugins

- The plugins dir contains three files , init.lua , packerInit.lua and the configs dir.

- packerInit.lua : this file is used for defining packer's init stuff , so things like clone_timeout , compile_on_sync , etc and other packer related options are mentioned here.
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

- The override_req function here , checks if the "nvim_cmp" is added in the default_plugin_config_replace in (chadrc.lua) file and if it's added , then the function will make packer use that custom config.

- In case if that's not added then the function will just make use of "plugins.configs.cmp"

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

## formatting and linting

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

-- load it after nvim-lspconfig , since we'll use some lspconfig stuff in the null-ls config!
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

- Format code : leader fm
- If you want to change this mapping , check this line in your lspconfig :

```lua
buf_set_keymap("n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)
```

- Check [null-ls builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) to get config for your language!
- Also note that I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd , stylua , shfmt , eslint_d , etc.

## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Then check [lspconfig_config.md](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md) to make sure your language's lsp server is present there.

- Create a file in your custom folder. (I would suggest creating plugins dir in custom folder , so /custom/plugins/lspconfig.lua is the config file for this example).

- Enter the file path in the chadrc's lspconfig section :

```lua
M.plugins = {
   options = {
      lspconfig = {
         setup_lspconf = "",
      },
   },
}

-- so setup_lspconf = "custom.plugins.lspconfig" as per our example
```

- Your lspconfig must contain these :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   lspconfig.lspname.setup {
      on_attach = attach,
      capabilities = capabilities,
   }
end

return M
```

- For example if you wanted to setup html lsp :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   lspconfig.html.setup {
      on_attach = attach,
      capabilities = capabilities,
   }
end

return M
```

- The following file is an example lspconfig file :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   -- lspservers with default config

   local servers = { "html", "cssls", "pyright" }

   for _, lsp in ipairs(servers) do
      lspconfig[lsp].setup {
         on_attach = attach,
         capabilities = capabilities,
         -- root_dir = vim.loop.cwd,
         flags = {
            debounce_text_changes = 150,
         },
      }
   end
   
   -- typescript

  lspconfig.tsserver.setup {
      on_attach = attach,
      capabilities = capabilities,
      cmd = { "typescript-language-server", "--stdio" },
      filetypes = { "javascript", "javascriptreact", "javascript.jsx", "typescript", "typescriptreact", "typescript.tsx" },
      root_dir = lspconfig.util.root_pattern("package.json", "tsconfig.json")
    }
end

return M

```

- Note : I have used a loop there since I'm just using default lspconfigs and it looks cleaner that way , without the loop it would've been very ugly , something like this :

```lua
  lspconfig.html.setup { my options }
  lspconfig.cssls.setup { my options }
  lspconfig.pyright.setup { my options }
```

- Then install that lspserver, if you get issues like "cmd not executable" in :LspInfo, then install that lspservers globally in your system.

- I've had that same issue with some lspservers which were installed by npm and it got fixed by installing those npm packages globally :

```shell
npm config set prefix=~/.node_modules

add ~/.node_modules/bin to PATH
```

## Setup lsp-installer

- If you don't like copy pasting configs for your lspservers and installing lspservers manually , then try nvim-lspinstalller.
- Basic Sample config : (custom/init.lua hooks section for install_plugins)

```lua
 use {
      "williamboman/nvim-lsp-installer",
      config = function()
         local lsp_installer = require "nvim-lsp-installer"

         lsp_installer.on_server_ready(function(server)
            local opts = {}

            server:setup(opts)
            vim.cmd [[ do User LspAttachBuffers ]]
         end)
      end,
   }
```

### advanced config

- The following config shows how lsp-installer + custom user keybinds (for codeactions) is done in the lspconfig. (custom/plugins/lspconfig) , if this is done then the above config within lsp-installer's use{} section shouldn't be done so only :

```lua
 use {
      "williamboman/nvim-lsp-installer",
   }
```

```lua

local M = {}

M.setup_lsp = function(attach, capabilities)
   local lsp_installer = require "nvim-lsp-installer"

   lsp_installer.on_server_ready(function(server)
      local opts = {
         on_attach = attach,
         capabilities = capabilities,
         flags = {
            debounce_text_changes = 150,
         },
         settings = {},
      }

      if server.name == "rust_analyzer" then
         opts.settings = {
            ["rust-analyzer"] = {
               experimental = {
                  procAttrMacros = true,
               },
            },
         }

         opts.on_attach = function(client, bufnr)
            local function buf_set_keymap(...)
               vim.api.nvim_buf_set_keymap(bufnr, ...)
            end

            -- Run nvchad's attach
            attach(client, bufnr)

            -- Use nvim-code-action-menu for code actions for rust
            buf_set_keymap(bufnr, "n", "<leader>ca", ":CodeActionMenu<CR>", { noremap = true, silent = true })
            buf_set_keymap(bufnr, "v", "<leader>ca", ":CodeActionMenu<CR>", { noremap = true, silent = true })
         end
      end

      server:setup(opts)
      vim.cmd [[ do User LspAttachBuffers ]]
   end)

return M
```

- Basic [lsp_installer commands](https://github.com/williamboman/nvim-lsp-installer/#commands)

## Basic nvim lua stuffs

- options

vimscript :

```
set mouse = a
```

lua :

```
vim.opt.mouse = "a"
```

- autocmds / augroups

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
- Uncomment the line hooks.add line containing the "install_plugins" stuff

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

### Default Nvchad mappings

#### Non plugin mappings

| Action             | Key           |
| ------------------ | ------------- |
| close buffer       | space + x     |
| copy whole file    | ctrl + a      |
| line number toggle | space + n     |
| new buffer         | shift + t     |
| new tab            | ctrl + t + b  |
| save file          | ctrl + s      |
| theme toggler      | space + t + t |

#### Navigation in insert mode

| Action      | Key      |
| ----------- | -------- |
| backward    | ctrl + h |
| end of line | ctrl + e |
| forward     | ctrl + l |
| next line   | ctrl + k |
| prev line   | ctrl + j |
| top of line | ctrl + a |

#### Better window movement

| Action    | Key      |
| --------- | -------- |
| moveLeft  | ctrl + h |
| moveRight | ctrl + l |
| moveUp    | ctrl + k |
| moveDown  | ctrl + j |

#### Terminal related mappings

| Action            | Key           |
| ----------------- | ------------- |
| esc termmode      | jk            |
| esc hide termmode | JK            |
| pick term         | space + W     |
| new horizontal    | space + h     |
| new vertical      | space + v     |
| new window        | space + w     |
| update nvchad     | space + u + u |

#### Plugins related mappings

| Action                                  | Key           |
| --------------------------------------- | ------------- |
| BUFFERLINE                              |
| next buffer                             | tab           |
| prev buffer                             | shift + tab   |
| &nbsp;                                  |
| COMMENT                                 |
| toggle                                  | space + /     |
| &nbsp;                                  |
| DASHBOARD                               |
| bookmarks                               | space + b + m |
| new file                                | space + f + n |
| open                                    | space + d + b |
| session load                            | space + l     |
| session save                            | space + s     |
| &nbsp;                                  |
| BETTER ESCAPE                           |
| esc insertmode                          | jk            |
| &nbsp;                                  |
| FILE TREE/EXPLORER                      |
| toggle                                  | ctrl + n      |
| focus                                   | space + e     |
| universal code formatter                |
| format                                  | space + f + m |
| &nbsp;                                  |
| MULTITOOL FOR FINDING & PICKING THINGS  |
| buffers                                 | space + f + b |
| find files                              | space + f + f |
| find hiddenfiles                        | space + f + a |
| git commits                             | space + c + m |
| git status                              | space + g + t |
| help tags                               | space + f + h |
| live grep                               | space + f + w |
| oldfiles                                | space + f + o |
| themes                                  | space + t + h |
| &nbsp;                                  |
| MEDIA PREVIEWS WITHIN TELESCOPE FINDERS |
| media files                             | space + f + p |
| &nbsp;                                  |
| DISTRACTION FREE & MINIMALIST UI MODE   |
| ataraxis mode                           | space + z + z |
| focus mode                              | space + z + f |
| minimalistic mode                       | space + z + m |

### Autocmds

- Well, for example you just create a new file called autochad_cmds.lua in the custom folder and require it in the init.lua file of the custom folder! BOOOM!!

### Files to edit

- Only files that are supposed to edited by the user are meant to be in the custom dir, default files in that folder are example_chadrc and example_init which can be just renamed by the user into chadrc.lua and init.lua .

- The rest of the files outside the custom folder will get overwritten by the update so don't put your config there!! Just put it in the custom folder.

(note : The docs will be refined and updated more if there are any inaccuracies)

## Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. Don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)
