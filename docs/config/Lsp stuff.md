## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Then check [server_configurations.md](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) to make sure your language's lsp server is present there.

- Create a file in your custom folder. (I would suggest creating plugins dir in custom folder , so /custom/plugins/lspconfig.lua is the config file for this example).
- Enter the file path in the chadrc's lspconfig section :

```lua
M.plugins = {
   options = {
      lspconfig = {
         setup_lspconf = "custom.plugins.lspconfig",
      },
   },
}

-- so setup_lspconf = any file but that should be in custom dir!
```

- The following file is an example lspconfig file 

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   -- lspservers with default config
   local servers = { "html", "cssls", "clangd" }

   for _, lsp in ipairs(servers) do
      lspconfig[lsp].setup {
         on_attach = attach,
         capabilities = capabilities,
      }
   end
end

return M
```

### Overriding `on_attach`

You can override the default `on_attach` for example to change the server capabilities:

```lua
M.setup_lsp = function(attach, capabilities)
   -- [...]

   for _, lsp in ipairs(servers) do
      lspconfig[lsp].setup {
         on_attach = function(client, bufnr)
            attach(client, bufnr)
            -- change gopls server capabilities
            if lsp == "gopls" then
               client.resolved_capabilities.document_formatting = true
               client.resolved_capabilities.document_range_formatting = true
            end
         end,
         capabilities = capabilities,
      }
   end
end
```

Make sure you pass `bufnr` to the `attach` function.

## lsp-installer

```
:LspInstall clangd 
```

- We've enabled automatic installation in lsp-installer config, meaning that you dont have to run LspInstall anymore. Any lsp server you configure in your custom lspconfig file, lsp-installer will detect it and install the lsp server automatically!
