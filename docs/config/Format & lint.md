- There are many plugins for this , I will use null-ls.nvim in this example!

### Install null-ls

```lua
 use {
      "jose-elias-alvarez/null-ls.nvim",
      after = "nvim-lspconfig",
      config = function()
         require("custom.plugin_confs.null-ls").setup()
      end,
   }

-- load it after nvim-lspconfig , since we'll use some lspconfig stuff in the null-ls config!
```

### Null-ls config

- NOTE : The below config is my personal one! So use it as a reference or check null-ls docs

```lua
local ok, null_ls = pcall(require, "null-ls")

if not ok then
   return
end

local b = null_ls.builtins

local sources = {

   -- JS html css stuff
   b.formatting.prettierd.with {
      filetypes = { "html", "json", "markdown", "css", "javascript", "javascriptreact" },
   },
   b.diagnostics.eslint.with {
      command = "eslint_d",
   },

   -- Lua
   b.formatting.stylua,
   b.diagnostics.luacheck.with { extra_args = { "--global vim" } },

   -- Shell
   b.formatting.shfmt,
   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },
}

local M = {}

M.setup = function(on_attach)
   null_ls.config {
      sources = sources,
   }
   require("lspconfig")["null-ls"].setup { on_attach = on_attach }
end

return M
```

- Format code : leader fm
- If you want to change this mapping , check this line in your lspconfig :

```lua
buf_set_keymap("n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)
```

- Check [null-ls builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) to get config for your language!
- Also note that I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd , stylua , shfmt , eslint_d , etc.
