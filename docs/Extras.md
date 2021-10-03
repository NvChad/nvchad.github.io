# Extras

- Plugins which seem awesome and cool , which enhance the experience while working in neovim and aren't added by default in nvchad will be added here.

## neoscroll.nvim

- Smooth scrolling neovim plugin written in lua
- [repo](https://github.com/karb94/neoscroll.nvim)
- config :

```lua
  use {
      "karb94/neoscroll.nvim",
       opt = true,
       config = function()
          require("neoscroll").setup()
       end,

       -- lazy loading
       setup = function()
         require("core.utils").packer_lazy_load "neoscroll.nvim"
       end,
}
```

## autosave.nvim

- Auto save files plugin written in lua
- [repo](https://github.com/Pocco81/AutoSave.nvim)
- config :

```lua
   use {
   "Pocco81/AutoSave.nvim",
   config = function()
      local autosave = require "autosave"

      autosave.setup {
         enabled = true,
         execution_message = "autosaved at : " .. vim.fn.strftime "%H:%M:%S",
         events = { "InsertLeave", "TextChanged" },
         conditions = {
            exists = true,
            filetype_is_not = {},
            modifiable = true,
         },
         clean_command_line_interval = 2500,
         on_off_commands = true,
         write_all_buffers = false,
      }
   end,
}
```

## Truezen.nvim

- Clean and elegant distraction-free writing for NeoVim.
- [repo](https://github.com/Pocco81/TrueZen.nvim)
- config :

```lua
   use {
      "Pocco81/TrueZen.nvim",
      disable = not status.truezen,
      cmd = {
         "TZAtaraxis",
         "TZMinimalist",
         "TZFocus",
      },
      config = function()
          check https://github.com/Pocco81/TrueZen.nvim#setup-configuration (init.lua version)
      end
   }
```

## filetype.nvim

- A fast and lua alternative to `filetype.vim`. It is ~175x faster than `filetype.vim`
- [Repo](https://github.com/nathom/filetype.nvim)
- Config :

```lua
   use { "nathom/filetype.nvim" }
```

Add the following to `lua/core/options.lua` :

```lua
   -- Stop sourcing filetype.vim
   vim.g.did_load_filetypes = 1
```
