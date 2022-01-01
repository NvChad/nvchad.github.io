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
      cmd = {
         "TZAtaraxis",
         "TZMinimalist",
         "TZFocus",
      },
      config = function()
          -- check https://github.com/Pocco81/TrueZen.nvim#setup-configuration (init.lua version)
      end
   }
```

## filetype.nvim

- A fast and lua alternative to `filetype.vim`. It is ~175x faster than `filetype.vim`
- [Repo](https://github.com/nathom/filetype.nvim)
- config :

```lua
   use { "nathom/filetype.nvim" }
```

Add the following to `lua/custom/init.lua` :

```lua
   -- Stop sourcing filetype.vim
   vim.g.did_load_filetypes = 1
```

## stabilize.nvim

- Neovim plugin to stabilize window open/close events
- config : 

```lua
   use {
	"luukvbaal/stabilize.nvim",
	config = function() require("stabilize").setup() end
   }
```

## telescope-media-files.nvim

- Telescope extension to preview media files using Ueberzug
- dependencies : ueberzug , ripgrep or fd
- config : 

```lua
   use {
      "nvim-telescope/telescope-media-files.nvim",
      after = "telescope.nvim",
      config = function()
         require("telescope").setup {
            extensions = {
               media_files = {
                  filetypes = { "png", "webp", "jpg", "jpeg" },
                  find_cmd = "rg", -- find command (defaults to `fd`)
               },
            },
         }
         require("telescope").load_extension "media_files"
      end,
   }
```

- command : 

```vim
:Telescope media_files 
```

- note: This works with ueberzug only which is xorg dependant so it wont work on wayland. And it wont work on other OS's either! But you can implement kitty graphics protocol support or icat support for this plugin as a PR.

- screenshot: 

<img src="https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/telmedia.png"/>
