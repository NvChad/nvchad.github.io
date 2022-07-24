## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Then check [server_configurations.md](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) to make sure your language's lsp server is present there.

```lua
-- we are just modifying lspconfig's packer definition table
-- put this in your custom plugins section

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

## lsp-installer

```
:LspInstall clangd 
```

- We've enabled automatic installation in lsp-installer config, meaning that you dont have to run LspInstall anymore. Any lsp server you configure in your custom lspconfig file, lsp-installer will detect it and install the lsp server automatically!
