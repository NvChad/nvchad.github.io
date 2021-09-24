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
- pcall("require", "path to module") will show out an error if the module doesnt exist and it'll save a boolean value in "ok" variable.
- If the ok variable is true then the module will be loaded which is (core in our case) but if its false then the it'll print some error.
- The loop in the init.lua does the error handling , you dont need to worry about that!
