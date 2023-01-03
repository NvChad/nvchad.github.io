---
id: theming
title: Highlight groups
---

### Override default highlight groups

- Make sure you use a valid highlight group!
- Check your theme colors in this dir:

```shell
~/.local/share/nvim/site/pack/packer/start/base46/lua/base46/themes/
```
- In your theme file, for instance onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups. 
- You can even use hex colors in the fg/bg field, but it's preferable to use variable names (for instance: blue, darker_black, one_bg, etc.) from your theme file as these will look better.
- No need to write hex colors manually!

```lua
M.ui = {
   hl_override = {
      Pmenu = { bg = "white" },

      MyHighlightGroup = {
         fg = "red",
         bg = "darker_black"
      }
   },
}
```

OR 

- You can even use the path of the table in hl_override (but make sure you load it in variable before):

```lua
-- custom.highlights file
return   {
      Pmenu = { bg = "#ffffff" },
      MyHighlightGroup = {
         fg = "blue",
         bg = "grey"
      }
}
```

```lua
-- chadrc
M.ui = {
   hl_override =  require "custom.highlights" 
}
```

### Add new highlight groups

- The same method can be used as above, but instead of `hl_override`, you can use the `hl_add` field in chadrc.

## Customize themes

### Local themes

(WARNING: Do this at your own risk because you might not be able to make perfect nvchad themes like siduck.)
- Default themes are in our nvim-base16 repo's hl_themes dir.
- Any nvchad theme structure looks like this:

```lua
-- theme file is custom/themes/siduck.lua

local M = {}

M.base_30 = {
    -- my colors
}

M.base_16 = {
    -- my base16 colors
}

vim.opt.bg = "dark" -- or light 
return M
```

- Make sure to use the exact variable names!

```lua
M.ui = {
   theme = "siduck",
}
```

### Override specific colors in themes

```lua
M.ui = {

   changed_themes = {
      onedark = {
         base_16 = {
            base00 = "#mycol",
         },
         base_30 = {
            red = "#mycol",
            white = "#mycol",
         },
      },

      nord = {
         -- and so on!
      },
   },
}
```


