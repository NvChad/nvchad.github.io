---
id: plugins
title: Plugins
---

## Plugin definition

- What is a plugin definition? Its a term we use to define plugins so packer could use & install them.
- Our way of defining plugin is slightly different and better than packer's way
- Example : 

```lua
  -- packer's original syntax
  use {
    "Pocco81/TrueZen.nvim",
     cmd = "abc"
  }

  -- NvChad's syntax
  ["Pocco81/TrueZen.nvim"] = {
    cmd = "abc"
  },

  -- if you dont wish to have any plugin definition options
  ["Pocco81/TrueZen.nvim"] = {}
```

## Install, Remove plugins & Override them

```lua
M.plugins = {

  -- Install plugin
  ["Pocco81/TrueZen.nvim"] = {},

  -- Override plugin definition options
  ["goolord/alpha-nvim"] = {
    disable = false,
    cmd = "Alpha",
  },

  -- Override plugin config
  ["williamboman/mason.nvim"] = {
    override_options = {
          ensure_installed = { "html-lsp", "clangd" }
      }
  },
   
   -- Override plugin config if it has a module called
   -- If you wish to call a module, which is 'cmp' in this case
   ["hrsh7th/nvim-cmp"] = {
    override_options = function()
      local cmp = require "cmp"

      return {
        mapping = {
          ["<C-d>"] = cmp.mapping.scroll_docs(-8),
        },
      }
    end,
  },

  -- remove plugin
  ["neovim/nvim-lspconfig"] = false
}
```

- NOTE : THe override_options will override the default plugin config's options, so you dont have to re-write the whole default plugin config but just write the things you want to change ( override )
