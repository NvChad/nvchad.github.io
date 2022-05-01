- There are many plugins for this , I will use null-ls.nvim in this example!

### Install null-ls

```lua
["jose-elias-alvarez/null-ls.nvim"] = {
    after = "nvim-lspconfig",
    config = function()
        require("custom.plugins.null-ls").setup()
    end,
}

-- load it after nvim-lspconfig cuz we lazy loaded lspconfig
```

### Null-ls config

- NOTE : The below config is my personal one! So use it as a reference or check null-ls docs

```lua
local null_ls = require "null-ls"
local b = null_ls.builtins

local sources = {

    b.formatting.prettierd.with { filetypes = { "html", "markdown", "css" } },
    b.formatting.deno_fmt,

    -- Lua
    b.formatting.stylua,
    b.diagnostics.luacheck.with { extra_args = { "--global vim" } },

    -- Shell
    b.formatting.shfmt,
    b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },
}

local M = {}

M.setup = function()
    null_ls.setup {
        debug = true,
        sources = sources,

        -- format on save
        on_attach = function(client)
            if client.resolved_capabilities.document_formatting then
                vim.cmd "autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync()"
            end
        end,
    }
end

return M
```

- Format code : `<leader> + fm`
- Check [null-ls builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) to get config for your language!
- Also note that in the above example I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd, stylua, shfmt, eslint_d etc.
