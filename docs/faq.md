# FAQ

## Configuration

### How to change theme of NvChad?

- Press `<leader>`(which is space by default) + th, then select your theme and press enter, restart nvim and done 👍🏻

### My icons aren't working, what should I do?

- It's probably because you aren't using correct font, download and install any font from [Nerd Fonts](https://www.nerdfonts.com/font-downloads) and set that font to your terminal and your icons will work fine 👍🏻

### NvChad is not working, I have nvim installed

- Make sure you have Nvim 0.5.1+ version

### How can I add external plugin in NvChad?

- [Docs](config/Custom%20config#add-new-plugins)

## General

### Would lots of plugins in nvchad make it slow?

- NvChad has like 30 ~ plugins but that doesn't mean those plugins are compromising neovim's speed, snappiness, or making it slow. No matter how many plugins I'd add on NvChad, it wouldn't compromise speed/snappiness/make it slow or whatever since it uses packer.nvim as plugin manager. packer.nvim lets you lazy load plugins i.e. loading plugins on certain events, mappings, sequentially loading them, etc, thus loading them only when needed. I have lazy loaded all the plugins so most plugins aren't loaded by default, hence not affecting neovim's startup/launch time.
