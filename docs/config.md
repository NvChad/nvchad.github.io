---
id: config
title: Config
---

## Structure
```
project
│   README.md
│   init.lua 
│
└───lua
│   │   chadrc.lua              
|   |   default_config.lua      
|   |   mappings.lua            
|   |   options.lua             
|   |   packerInit.lua          
|   |   pluginList.lua          
|   |   utils.lua               
|   |   theme.lua
|   |   highlights.lua
|   |   
│   └───plugins
│   |       autopairs.lua
│   |       autosave.lua
│   |       ...
|   |       others.lua          
|   |       ...                
|   |
│   └───themes
│   |   │   onedark.lua        
│   |   │   gruvchad.lua
|   |   |   ...                
│   │
│   └───telescope
│       └───_extensions
|           |   themes.lua     
|           |   terms.lua      
│   
└───plugin                     
    │   packer_compiled.lua    (packer compiles the whole config here) 
```

- theme.lua : Loads syntax theme ( base16 plugin) and highlights.
- highlights.lua : All the highlights are defined here.
- chadrc.lua : The main config file for users options, themes, disabling plugins etc.
- default_config.lua : Default config (Do not modify this).
- mappings.lua : All mappings are defined here. 
- options.lua : All options are defined here.
- packerInit.lua :  Packer's config 
- pluginList.lua : List of all plugins. 
- others.lua : Configs of various plugins ( plugins having small configs)

(Files not to modify)

- themes.lua , terms.lua ( telescope/_extensions dir) and utils.lua (lua dir) 

## Mappings

To see all of the mappings, read the `/lua/chadrc.lua` file, alternatively...

### Some notable mappings are
```
| Key mapping         |  Action                                         |  Note                 |
|---------------------|-------------------------------------------------|-----------------------|
|  jk                 | <ESC> to normal mode                            |                       |
|  <SHIFT> + t        | open a new buffer                               |                       |
|  <SHIFT> + x        | close current buffer                            | (hides a terminal)    |
|  <TAB>              | cycle in bufferline (next)                      |                       |
|  <SHIFT> + <TAB>    | cycle in bufferline (previous)                  |                       |
|  <CTRL> + n         | open NvimTree explorer                          | `<ENTER>` to select   |
|  <SPACE> + u + k    | view key mappings                               |                       |
|  <SPACE> + /        | toggle commenting a line                        |                       |
|  <SPACE> + f + f    | pick a file                                     | Telescope picker      |
|  <SPACE> + g + s    | git status                                      | Telescope picker      |
|-----------------------------------------------------------------------------------------------|
```

## Configure
Modify the ```lua/chadrc.lua``` file.

For example, to change the autosave feature, change the variable (autosave) within `chadrc.lua`
```
M.options = {
   ...
    autosave = true,
   ...
}
```

