- There are many plugins for this , I will use null-ls.nvim in this example!

### Install null-ls

```lua
 ["jose-elias-alvarez/null-ls.nvim"] = {
      after = "nvim-lspconfig",
      config = function()
         require "custom.plugins.null-ls"
      end,
 }

-- load it after nvim-lspconfig cuz we lazy loaded lspconfig
```

### Null-ls config

- NOTE : The below config is my personal one! So use it as a reference or check null-ls docs

```lua
local present, null_ls = pcall(require, "null-ls")

if not present then
   return
end

local b = null_ls.builtins

local sources = {

   -- webdev stuff
   b.formatting.deno_fmt,
   b.formatting.prettier,

   -- Lua
   b.formatting.stylua,

   -- Shell
   b.formatting.shfmt,
   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },
}

null_ls.setup {
   debug = true,
   sources = sources,
}
```

- Format code : `<leader> + fm`
- Check [null-ls builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) to get config for your language!
- Also note that in the above example I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd, stylua, shfmt, eslint_d etc.
