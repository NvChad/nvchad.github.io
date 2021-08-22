---
id: setup
title: Setup
sidebar_position: 1
---

## Pre-requisites 

- [Neovim 0.5](https://neovim.io/)
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal.
- Terminal supporting true colors ( most already do ).
- `git`

#### Semi-optional dependencies

- `node` **Node.js** is required for many Language Servers (LSPs)
- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with *Telescope*

### Install

Installation is as easy as cloning the NvChad repository into your NeoVim configuration folder.

If you already have a `~/.config/nvim` folder, make a backup with:

```shell
$ mv ~/.config/nvim ~/.config/nvim.backup
```

Next, clone the `nvchad` repository to `~/.config/nvim`.

#### Mac / Linux:

```shell 
$ git clone https://github.com/NvChad/NvChad ~/.config/nvim
$ nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
```

#### Windows

0. Install [`mingw`](http://mingw-w64.org/doku.php) if you don't already have it.

```shell
$ choco install mingw
```

1. Install `packer`.

```shell
$ git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
$ git clone https://github.com/siduck76/NvChad
```

2. Go to `~/AppData/Local/nvim`. Copy nvchad's `init.lua` and `lua` folder into the nvim folder.

3. Then launch `nvim` like so:

```shell
$ nvim +PackerSync
```

Press enter to skip errors and let it install plugins.

### Update

NvChad has an update mechanism built-in, which will pull any new updates to the git repository. 

Activate it by running `<leader> + uu`.

This will open a prompt in NeoVim warning you that it is about to do a `git reset --hard` and **you will lose any customisations** you've made to NvChad.

### Uninstall

Uninstalling is as simple as removing the `nvim` configuration directories.

```shell
rm -rf ~/.config/cache/nvim
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
```
