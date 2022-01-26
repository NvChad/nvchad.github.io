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
         flags = {
            debounce_text_changes = 150,
         },
      }
   end
end

return M
```

## lsp-installer

- If you don't like copy pasting configs for your lspservers and installing lspservers manually , then try nvim-lspinstalller.

### Basic config
```lua
 use {
      "williamboman/nvim-lsp-installer",
  }
```

note: The below snippet must be your custom lspconfig! (that setup_lspconf variable in chadrc)

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lsp_installer = require "nvim-lsp-installer"

   lsp_installer.settings {
      ui = {
         icons = {
            server_installed = "﫟" ,
            server_pending = "",
            server_uninstalled = "✗",
         },
      },
   }

   lsp_installer.on_server_ready(function(server)
      local opts = {
         on_attach = attach,
         capabilities = capabilities,
         flags = {
            debounce_text_changes = 150,
         },
         settings = {},
      }

      -- basic example to edit lsp server's options, disabling tsserver's inbuilt formatter
      if server.name == 'tsserver' then 
        opts.on_attach = function(client, bufnr)
           client.resolved_capabilities.document_formatting = false
           vim.api.nvim_buf_set_keymap(bufnr, "n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", {})
         end,
      end
      
      server:setup(opts)
      vim.cmd [[ do User LspAttachBuffers ]]
   end)
end

return M
```
