## Setup lsp server

- Skim through [lspconfig repo](https://github.com/neovim/nvim-lspconfig) to get a general overview of how the config looks/works.
- Then check [server_configurations.md](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) to make sure your language's lsp server is present there.

- Create a file in your custom folder. (I would suggest creating plugins dir in custom folder , so /custom/plugins/lspconfig.lua is the config file for this example).

- Enter the file path in the chadrc's lspconfig section :

```lua
M.plugins = {
   options = {
      lspconfig = {
         setup_lspconf = "",
      },
   },
}

-- so setup_lspconf = "custom.plugins.lspconfig" as per our example
```

- Your lspconfig must contain these :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   lspconfig.lspname.setup {
      on_attach = attach,
      capabilities = capabilities,
   }
end

return M
```

- For example if you wanted to setup html lsp :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   lspconfig.html.setup {
      on_attach = attach,
      capabilities = capabilities,
   }
end

return M
```

- The following file is an example lspconfig file :

```lua
local M = {}

M.setup_lsp = function(attach, capabilities)
   local lspconfig = require "lspconfig"

   -- lspservers with default config

   local servers = { "html", "cssls", "pyright" }

   for _, lsp in ipairs(servers) do
      lspconfig[lsp].setup {
         on_attach = attach,
         capabilities = capabilities,
         flags = {
            debounce_text_changes = 150,
         },
      }
   end
   
   -- typescript

 lspconfig.tsserver.setup {
      on_attach = function(client, bufnr)
         client.resolved_capabilities.document_formatting = false
         vim.api.nvim_buf_set_keymap(bufnr, "n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", {})
      end,
   }

-- the above tsserver lspconfig will remvoe the tsserver's inbuilt formatting,since I use null-ls with denofmt for formatting ts/js.
end

return M

```

- Note : I have used a loop there since I'm just using default lspconfigs and it looks cleaner that way , without the loop it would've been very ugly , something like this :

```lua
  lspconfig.html.setup { my options }
  lspconfig.cssls.setup { my options }
  lspconfig.pyright.setup { my options }
```

- Then install that lspserver, if you get issues like "cmd not executable" in :LspInfo, then install that lspservers globally in your system.

- I've had that same issue with some lspservers which were installed by npm and it got fixed by installing those npm packages globally :

```shell
npm config set prefix=~/.node_modules

add ~/.node_modules/bin to PATH
```

## lsp-installer

- If you don't like copy pasting configs for your lspservers and installing lspservers manually , then try nvim-lspinstalller.

### Basic config
```lua
 use {
      "williamboman/nvim-lsp-installer",
   }
```

-- The below snippet must be your custom lspconfig! (that setup_lspconf variable in chadrc)

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

      server:setup(opts)
      vim.cmd [[ do User LspAttachBuffers ]]
   end)
end

return M
```

### Advanced config

- The following config shows how lsp-installer + custom user keybinds (for codeactions) is done in the lspconfig. (custom/plugins/lspconfig). 
- NOTE : This is just an example , make sure you use it as a reference. 

```lua
 use {
      "williamboman/nvim-lsp-installer",
   }
```

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

      if server.name == "rust_analyzer" then
         opts.settings = {
            ["rust-analyzer"] = {
               experimental = {
                  procAttrMacros = true,
               },
               checkOnSave = {
	        	command = "clippy",
	       },
            },
         }

         opts.on_attach = function(client, bufnr)
            local function buf_set_keymap(...)
               vim.api.nvim_buf_set_keymap(bufnr, ...)
            end

            -- Run nvchad's attach
            attach(client, bufnr)

            -- Use nvim-code-action-menu for code actions for rust
            buf_set_keymap("n", "<leader>ca", "lua vim.lsp.buf.range_code_action()<CR>", { noremap = true, silent = true })
            
            -- autoformat on save
            if client.resolved_capabilities.document_formatting then
	       	vim.cmd("autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync()")
	    end
         end
      end

      server:setup(opts)
      vim.cmd [[ do User LspAttachBuffers ]]
   end)
end

return M
```
- Basic [lsp_installer commands](https://github.com/williamboman/nvim-lsp-installer/#commands)
