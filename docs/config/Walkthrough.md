- NOTE : Make sure you know basic lua , if not then [check](/quickstart/learn-lua).
- Make sure that you read sections in config (in the sidebar of this site) orderwise.

## Structure

```lua

├── init.lua
│
├── lua
│   │
│   ├── core
│   │   ├── default_config.lua
│   │   ├── mappings.lua
│   │   ├── options.lua
│   │   ├── packer.lua  -- (bootstrap packer & installs plugins)
│   │   ├── utils.lua  -- (core util functions) (i)
│   │   └── init.lua  -- (autocmds)
│   │
│   ├── plugins
│   │    ├── init.lua -- (default plugin list)
│   │    └── configs
│   │        ├── cmp.lua
│   │        ├── others.lu -- (list of small configs of plugins)
│   │        └── many more plugin configs
|   |
│   ├── custom *
│   │   ├── chadrc.lua -- (overrides default_config)
│   │   ├── init.lua -- (runs after main init.lua file)
│   │   ├── more files, dirs
```

-  Note : custom dir is created by user

## Walkthrough

- Letss goooo!

![chad](https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png)
![lessgooo](https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png)

## Themes

- `<leader> + th`   (`<leader>` is `<space>` in our config)

## Mappings

- `:Telescope keymaps` 

## Default settings

- This file is lua/core/default_config.lua

```lua
-- Table fields in default_config.lua
M.ui = {}
M.plugins = {}
M.mappings = {} 
```
