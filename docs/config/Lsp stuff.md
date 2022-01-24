- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Basic [lsp_installer commands](https://github.com/williamboman/nvim-lsp-installer/#commands)
- Then check [server_configurations.md](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) to make sure your language's lsp server is present there.

## Install plugins
- plugins used :  nvim-lspconfig, nvim-lsp-installer , lsp-signature.nvim 

```lua
 use {
      "williamboman/nvim-lsp-installer",
      config = function()
         require "custom.plugins.lspconfig"
      end,

      -- lazy load!
      setup = function()
         require("core.utils").packer_lazy_load "nvim-lsp-installer"
         -- reload the current file so lsp actually starts for it
         vim.defer_fn(function()
            vim.cmd 'if &ft == "packer" | echo "" | else | silent! e %'
         end, 0)
      end,
      opt = true,
   }

   use {
      "neovim/nvim-lspconfig",
      module = "lspconfig",
      after = "nvim-lsp-installer",
   }

   use {
      "ray-x/lsp_signature.nvim",
      after = "nvim-lspconfig",
      config = function()
         require "custom.plugins.signature"
      end,
   }
```

## Configs

- custom/plugins/lspconfig.lua be like 

```lua
require("plugins.configs.others").lsp_handlers()

local function on_attach(_, bufnr)
   local function buf_set_option(...)
      vim.api.nvim_buf_set_option(bufnr, ...)
   end

   -- Enable completion triggered by <c-x><c-o>
   buf_set_option("omnifunc", "v:lua.vim.lsp.omnifunc")
   require("core.mappings").lspconfig()
end

local capabilities = vim.lsp.protocol.make_client_capabilities()
local lsp_installer = require "nvim-lsp-installer"

lsp_installer.settings {
   ui = {
      icons = {
         server_installed = "﫟",
         server_pending = "",
         server_uninstalled = "✗",
      },
   },
}

lsp_installer.on_server_ready(function(server)
   -- server options, so default options for all servers
   local opts = {
      on_attach = on_attach,
      capabilities = capabilities,
      flags = {
         debounce_text_changes = 150,
      },
      settings = {},
   }

   server:setup(opts)
   vim.cmd [[ do User LspAttachBuffers ]]
end)
```

- custom/plugins/signature.lua be like 

```lua
local present, lspsignature = pcall(require, "lsp_signature")

if present then
   lspsignature.setup {
      bind = true,
      doc_lines = 0,
      floating_window = true,
      fix_pos = true,
      hint_enable = true,
      hint_prefix = " ",
      hint_scheme = "String",
      hi_parameter = "Search",
      max_height = 22,
      max_width = 120,
      handler_opts = {
         border = "single", -- double, single, shadow, none
      },
      zindex = 200,
      padding = "",
   }
end
```

- Now install your lsp server! :LspInstall html

## Only lspconfig

### Install

```lua
use {
      "neovim/nvim-lspconfig",
      module = "lspconfig",

      config = function()
         require "custom.plugins.lspconfig"
      end,

      -- lazy load!
      setup = function()
         require("core.utils").packer_lazy_load "nvim-lspconfig"
         vim.defer_fn(function()
            vim.cmd 'if &ft == "packer" | echo "" | else | silent! e %'
         end, 0)
      end,
      opt = true,
}
```

### Config

```lua
require("plugins.configs.others").lsp_handlers()

local function on_attach(_, bufnr)
   local function buf_set_option(...)
      vim.api.nvim_buf_set_option(bufnr, ...)
   end

   -- Enable completion triggered by <c-x><c-o>
   buf_set_option("omnifunc", "v:lua.vim.lsp.omnifunc")
   require("core.mappings").lspconfig()
end

local capabilities = vim.lsp.protocol.make_client_capabilities()
local lspconfig = require "lspconfig"

-- lspservers with default config
local servers = { "html", "cssls" }

for _, lsp in ipairs(servers) do
   lspconfig[lsp].setup {
      on_attach = on_attach,
      capabilities = capabilities,
      flags = {
         debounce_text_changes = 150,
      },
   }
end
```
- Check siduck's [lspconfig](https://github.com/siduck/dotfiles/blob/master/nvchad/custom/plugins/lspconfig.lua) for reference 
