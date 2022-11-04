## Override default options

- Put the options in `custom/init.lua`.
- New options can put in the same file as well. 

## Autocmds & Globals

- Load these in the `custom/init.lua` file.

## Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startup time. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!

## Snippets 

- Put this in `custom/init.lua`:

`vim.g.luasnippets_path = "your snippets path"`
