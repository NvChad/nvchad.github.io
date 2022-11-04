## Plugin definition

- What is a plugin definition? It's a term we use to define plugins so Packer can use and install them.
- Our way of defining plugins through Packer is slightly different:

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

## Install, remove plugins & override them

- Check all Packer options available for plugin definitions : [codeblock section here](https://github.com/wbthomason/packer.nvim#specifying-plugins).

```lua
-- chadrc
M.plugins = require "custom.plugins"
```

```lua
-- custom/plugins/init.lua
-- we're basically returning a table!
return {

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

- NOTE : The override_options will override the default plugin config's options, so you don't have to re-write the whole default plugin config but rather write only the things you want to change (overwrite).
