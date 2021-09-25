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
- The file names in the tree with (i) are meant to be ignored , i.e the user doesnt need to look at them. I assume you have basic lua knowledge and the lua code in those files might fret you or look very complex / scare you from nvchad xD.

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
