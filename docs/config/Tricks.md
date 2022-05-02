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
## Simple rename function

-- This function uses `vim.lsp.buf.rename` to rename variable

```lua
M.rename = function()
        { "╭", "CmpBorder" },
        { "─", "CmpBorder" },
        { "╮", "CmpBorder" },
        { "│", "CmpBorder" },
        { "╯", "CmpBorder" },
        { "─", "CmpBorder" },
        { "╰", "CmpBorder" },
        { "│", "CmpBorder" },
    }
    local function post(rename_old)
        vim.cmd("stopinsert!")
        local rename_new = vim.api.nvim_get_current_line()
        vim.schedule(function()
            vim.api.nvim_win_close(0, true)
            vim.lsp.buf.rename(vim.trim(rename_new))
        end)
        -- Use notify.nvim, logs notification as warn, title as Variable Rename
        vim.notify(rename_old .. "  " .. rename_new, vim.log.levels.WARN, { title = "Variable Rename" })
    end
    local rename_old = vim.fn.expand("<cword>")
    local created_buffer = vim.api.nvim_create_buf(false, true)
    vim.api.nvim_open_win(created_buffer, true, {
        relative = "cursor",
        style = "minimal",
        border = border,
        row = 1,
        col = 0,
        width = 30,
        height = 1,
    })
    vim.cmd("startinsert")

    vim.keymap.set("i", "<ESC>", function()
        vim.cmd("q")
        vim.cmd("stopinsert")
    end, { buffer = created_buffer })

    vim.keymap.set("i", "<CR>", function()
        return post(rename_old)
    end, { buffer = created_buffer })
end
```
