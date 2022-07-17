---
id: options
title: Options
---

(Note: You should add these in chadrc )

### Override default options

- Note : The same method can be used to add new options
```lua
M.options = {
   user = function()
      vim.opt.number = false
   end,
}

-- or just load the module with your options

M.options = {
   user = function()
       require("custom.myoptions")
   end,
}
```

### Autocmds & Globals

- Load these in `custom/init.lua` file

### Lazy loading

- We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!

- Check [packer's readme](https://github.com/wbthomason/packer.nvim#specifying-plugins) for more info!
