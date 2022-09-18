## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Then check [server_configurations.md](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) to make sure your language's lsp server is present there.

```lua
-- we are just modifying lspconfig's packer definition table
-- put this in your custom plugins section i.e M.plugins field 

["neovim/nvim-lspconfig"] = {
    config = function()
      require "plugins.configs.lspconfig"
      require "custom.plugins.lspconfig"
    end,
},
```

```lua
-- custom.plugins.lspconfig
local on_attach = require("plugins.configs.lspconfig").on_attach
local capabilities = require("plugins.configs.lspconfig").capabilities

local lspconfig = require "lspconfig"
local servers = { "html", "cssls", "clangd"}

for _, lsp in ipairs(servers) do
  lspconfig[lsp].setup {
    on_attach = on_attach,
    capabilities = capabilities,
  }
end
```
- Open nvim and run `:PackerCompile`

## Mason.nvim

- Mason.nvim plugin in nvchad is mainly used to install lspservers, formatters, linters, debug adapters. 

(NOTE: IT just downloads the binaries and lsp server/formatters wont run automatically! You need to configure custom lspconfig & probably some plugin like null-ls/neoformat etc for the formatters to work)

```
:MasonInstall html-lsp 
```

- Run `:Mason` command to open Mason.nvim's floating window and there you can install, update, uninstall etc the available packages ( i.e lspservers, linters, formatters etc)
- Press i on the package name in the list to install it.
- Its better to list all your requireed packages and put them into your mason override config.
- Find exact names of your package from `:Mason` window
- This is an example of siduck's config :D

```lua
 ["williamboman/mason.nvim"] = {
   override_options = {
      ensure_installed = {
        -- lua stuff
        "lua-language-server",
        "stylua",

        -- web dev
        "css-lsp",
        "html-lsp",
        "typescript-language-server",
        "deno",
        "emmet-ls",
        "json-lsp",

        -- shell
        "shfmt",
        "shellcheck",
      },
    },
  }
```

- Once this is done, then reopen nvim and run `:MasonInstallAll` command. This will install the listed packages in `ensure_installed` field of mason.nvim config.
- Btw that `MasonInstallAll` command is a custom nvchad command and not really from any of mason.nvim's original commands. 
