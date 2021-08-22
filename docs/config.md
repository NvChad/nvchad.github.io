---
id: config
title: Config
---

## Structure

NvChad comes with the following file / folder structure.

```tree
├── init.lua
├── LICENSE
├── lua
│   ├── chadrc.lua
│   ├── colors
│   │   ├── highlights.lua
│   │   ├── init.lua
│   │   └── themes
│   │       ├── chadracula.lua
│   │       ├── everforest.lua
│   │       ├── gruvchad.lua
│   │       ├── javacafe.lua
│   │       ├── mountain.lua
│   │       ├── norchad.lua
│   │       ├── onedark.lua
│   │       ├── one-light.lua
│   │       ├── tokyonight.lua
│   │       └── tomorrow-night.lua
│   ├── core
│   │   ├── autocmds.lua
│   │   ├── init.lua
│   │   ├── mappings.lua
│   │   ├── options.lua
│   │   └── utils.lua
│   ├── default_config.lua
│   └── plugins
│       ├── configs
│       │   ├── autopairs.lua
│       │   ├── autosave.lua
│       │   ├── bufferline.lua
│       │   ├── chadsheet.lua
│       │   ├── compe.lua
│       │   ├── dashboard.lua
│       │   ├── gitsigns.lua
│       │   ├── icons.lua
│       │   ├── lspconfig.lua
│       │   ├── luasnip.lua
│       │   ├── nvimtree.lua
│       │   ├── others.lua
│       │   ├── statusline.lua
│       │   ├── telescope.lua
│       │   ├── treesitter.lua
│       │   └── zenmode.lua
│       ├── init.lua
│       └── packerInit.lua
├── plugin
│   └── packer_compiled.lua
└── README.md
```

Some important files that you may want to take a look at and/or adjust to your liking include:

- `/lua/chadrc.lua` - This is the main config file for users options, themes, disabling plugins etc.
- `/lua/colors/init.lua` - Loads syntax theme (base16 plugin) and highlights.
- `/lua/colors/highlights.lua` - All the highlights are defined here.
- `/lua/core/mappings.lua` - All mappings are defined here. 
- `/lua/core/options.lua` - All options are defined here.
- `/lua/plugins/packerInit.lua` -  Packer's config.
- `/lua/plugins/config/*.lua` - Configs of various plugins (plugins having small configs).

Please do not modify the following files!
- `/lua/core/utils.lua`
- `/lua/default_config.lua`

## Mappings

To see some of the common mappings, check out the `/lua/chadrc.lua` file. 

Alternatively, some notable mappings are:

| Key mapping         |  Action                                |  Note                 |
|---------------------|----------------------------------------|-----------------------|
|  `jk`                 | ESC to normal mode                   |                       |
|  `<SHIFT> + t`        | open a new buffer                      |                       |
|  `<SPACE> + x`        | close current buffer                   | (hides a terminal)    |
|  `<TAB>`              | cycle in bufferline (next)             |                       |
|  `<SHIFT> + <TAB>`    | cycle in bufferline (previous)         |                       |
|  `<CTRL> + n`         | open NvimTree explorer                 | `<ENTER>` to select   |
|  `<SPACE> + u + k`    | view key mappings                      |                       |
|  `<SPACE> + /`        | toggle commenting a line               |                       |
|  `<SPACE> + f + f`    | find a file                            | Telescope picker      |
|  `<SPACE> + g + s`    | git status                             | Telescope picker      |

## Configuration

The primary user adjustable configuration lives in the ```/lua/chadrc.lua``` file. There we adjust some common settings you may want to change depending on your preferences.

There is an `M.options` object which contains options you can toggle on/off or adjust the values of yourself.

For example, to change the autosave feature, change the variable `autosave`.

```shell
M.options = {
   ...
   autosave = true,
   ...
}
```

There is also an `M.plugin_status` object which contains a map of plugin names and booleans. Here you can toggle individual plugins on/off if you do not need them.

In addition, theres an object of common shortcuts you can adjust found in `M.mappings` and `M.mappings.plugins` for plugin shortcuts.

### Advanced Configuration

More advanced configuration options can be found in the `/lua/core/` directory. There you will find a file called `options.lua`, for example.

If you take a look in there, you will see the basic NeoVim options we defined in the `chadrc.lua` file imported and mapped to their real `vim.opt` options. Therefore, if you want to add a custom setting to your `chadrc.lua`, you'll need to add the mapping from the chadrc value to the vim `set` value here. Then you can stay organised and manage the setting in your `chadrc.lua`.

If you take a look through the rest of the `/lua/core/*.lua` files, you'll find that most configuration in NvChad works like this. There are most basic settings exposed to the user the `chadrc.lua` file, and then they are imported and mapped to real settings, or remaps, autocmds, etc. in these advanced configuration files.
