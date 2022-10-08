## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config works.
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

- The Mason.nvim plugin in NvChad is mainly used to install lspservers, formatters, linters, and debug adapters. 

(NOTE: This only downloads the binaries. The lsp server/formatters won't run automatically. You need to configure a custom lspconfig and possibly some plugin like null-ls/neoformat or others for the formatters to work.)

```
:MasonInstall html-lsp 
```

- Run the `:Mason` command to open Mason.nvim's floating window and there you can install, update, or uninstall the available packages (i.e. lspservers, linters, formatters, etc.)
- Press `i` on the package name in the list to install it.
- It's better to list all your requireed packages and put them into your Mason override config.
- Find the exact name of your packages from the `:Mason` window
- This is an example of siduck's config:

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

- Once this is done, reopen nvim and run the `:MasonInstallAll` command. This will install the listed packages in the `ensure_installed` field of the mason.nvim config.
- The `MasonInstallAll` command is a custom NvChad command and not from the original set of mason.nvim commands. 
