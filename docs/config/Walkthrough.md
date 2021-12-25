- (NOTE : Make sure you know basic lua , if not then [check](https://nvchad.github.io/getting-started/learn-lua) ).

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
│   │   ├── chadrc.lua
│   │   ├── init.lua
│   │   ├── more files
│   │
│   ├── plugins
│   │    ├── init.lua
│   │    ├── packerInit.lua
│   │    └── configs
│   │        ├── bufferline.lua
│   │        ├── others.lua
│   │        └── <many more plugin configs>

```

- The file names in the tree with (i) are meant to be ignored , i.e the user doesnt need to look at them. I assume you have basic lua knowledge The lua code in those files might fret you or look very complex / scare you from NvChad xD.

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
- pcall is usually used for error handling. check [https://www.lua.org/pil/8.4.html](lua docs) for more info.
- Let's explain this : local ok, err = pcall(require, module)
- pcall will run : require module which basically imports that module, which is require "core" in our case.
- pcall returns a boolean value and runs the function inside in it , (the require thingy).
- if the file exists , then the pcall thing above will return 2 values , true and true.
- But for some reason if there's no such module , then pcall will return false and some errors. ok will be set to false and the err variable will be set to the errors produced by pcall.

- Basic example for setting assign values to multiple vars at the same time

```lua
local a, b = 1, 2
print(a,b)

// 1  2
```

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
