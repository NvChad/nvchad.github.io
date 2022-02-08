# FAQ

## Configuration

### How to change theme of NvChad?

- Copy the examples dir files in the custom dir `lua/custom`, see [Custom config](config/Custom%20config) 
- Press `<leader> + th`, then select your theme and press enter, type y (to set the default theme), restart nvim and done 👍. (`<leader>` is `<space>` by default)

### How can I update NvChad?

- Press `<leader> + uu`, to update NvChad. (`<leader>` is `<space>` by default)

### How can I check default mappings of NvChad?

- Press `<leader> + ch`, to see the cheatsheet. (`<leader>` is `<space>` by default)

### My icons aren't working, what should I do?

- It's probably because you aren't using correct font, download and install any font from [Nerd Fonts](https://www.nerdfonts.com/font-downloads) and set that font to your terminal and your icons will work fine 👍.

### NvChad is not working, I have nvim installed

- Make sure you have NeoVim 0.5.1+ version.

### How can I add external plugin in NvChad?

- [Docs](config/Custom%20config#add-new-plugins)

## General

### Would lots of plugins in NvChad make it slow?

- NvChad has like 30 ~ plugins but that doesn't mean those plugins are compromising NeoVim's speed, snappiness, or making it slow. No matter how many plugins I'd add on NvChad, it wouldn't compromise speed/snappiness/make it slow or whatever since it uses `packer.nvim` as plugin manager. `packer.nvim` lets you lazy load plugins i.e. loading plugins on certain events, mappings, sequentially loading them, etc, thus loading them only when needed. I have lazy loaded all the plugins so most plugins aren't loaded by default, hence not affecting NeoVim's startup/launch time.
