# Tips & tricks

- These are some useful functions which you can map.
- They're not included in the main repo so this section's just a collection of useful user functions :o

## Swap boolean

- This function swaps booleans, when the cursor's on ```true``` boolean then running this function makes it false and vice versa.

```lua
local swapBoolean = function()
   local c = vim.api.nvim_get_current_line()
   local subs = c:match "true" and c:gsub("true", "false") or c:gsub("false", "true")

   vim.api.nvim_set_current_line(subs)
 end
```
