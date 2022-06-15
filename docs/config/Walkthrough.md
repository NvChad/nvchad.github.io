- (NOTE : Make sure you know basic lua , if not then [check](https://nvchad.github.io/getting-started/learn-lua)).
- Make sure that you read sections in config (in the sidebar of this site) orderwise.

## Structure

NvChad comes with the following file / folder structure. [An up-to-date & full tree can be viewed in the repo](https://github.com/NvChad/NvChad/).

```tree

├── init.lua
│
├── lua
│   │
│   ├── core
│   │   ├── autocmds.lua
│   │   ├── default_config.lua
│   │   ├── mappings.lua
│   │   ├── options.lua
│   │   └── utils.lua (i)
│   │
│   ├── plugins
│   │    ├── init.lua
│   │    └── configs
│   │        ├── bufferline.lua
│   │        ├── others.lua
│   │        └── many more plugin configs
|   |
│   ├── custom *
│   │   ├── chadrc.lua
│   │   ├── init.lua
│   │   ├── more files, dirs

```

- The file names in the tree with (i) are meant to be ignored , i.e the user doesn't need to look at them as the lua code in those files might fret you or look very complex / scare you from NvChad xD.
- (note) : custom dir has to be created by the user.

## Walkthrough

- Letss goooo!

![chad](https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png)
![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

## Init.lua

- NvChads's config has a lua dir and init.lua.
- The init.lua basically loads the core config and custom config.
- pcall is usually used for error handling . Check [lua docs](https://www.lua.org/pil/8.4.html) for more info.

## Themes

- First copy examples/chadrc.lua to lua/custom/chadrc.lua , make sure it has the theme table
- `<leader> + th` (`<leader>` is `<space>` in our config)

## Mappings

- `:Telescope keymaps`

## Default general options

- This file is lua/core/default_config.lua
- The table below contains all the default options for various stuff in NvChad.

For example :

```lua
M.options = {}
M.ui = {}
M.plugins = {}
M.mappings = {} has general mappings
```

# Plugins

- init.lua : is basically the packer config listing various plugins and their configs
- For example to add a plugin , packer uses this format :

```lua

["org or username/reponame"] = {
  config = function()
    path to config ( require it)
  end
}

-- example
 ["max397574/better-escape.nvim"] = {
    config = function()
       require("plugins.configs.better_escape")
    end
}

-- packer's original way of defining plugins :

 use {
   "max397574/better-escape.nvim",
    config = function()
       require("plugins.configs.better_escape")
    end
}
```
