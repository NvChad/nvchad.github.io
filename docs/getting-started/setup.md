---
id: setup
title: Setup
sidebar_position: 1
---

## Pre-requisites

- [Neovim 0.6.1 install page](https://github.com/neovim/neovim/releases/tag/v0.6.1)

(note : use the stable 0.6v from the releases only i.e the same version if packaged in your distro will work too, dont use nightly! )

- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.

### Semi-optional 

- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with _Telescope_

## Install

Installation is as easy as cloning the NvChad repository into your NeoVim configuration folder.

Next, clone the `NvChad` repository to `~/.config/nvim` & install plugins with:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="linux" values={[ {label: 'Linux & MacOS', value: 'linux'}, {label: 'Windows', value: 'win'} ]}>
<TabItem value="linux">

### Linux & MacOS:

If you already have a `~/.config/nvim` folder, make a backup with:

```shell
mv ~/.config/nvim ~/.config/NVIM.BAK
```

Then install NvChad & it's plugins with:

```shell
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1
nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
```

</TabItem>
<TabItem value="win">

### Windows

1. Install [`mingw`](http://mingw-w64.org/doku.php) if you don't already have it.

```shell
choco install mingw
```

2. Install `packer`

```shell
git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
git clone https://github.com/NvChad/NvChad nvim --depth 1
```

3. Copy the nvim dir to `~/AppData/Local/`.
4. Then launch `nvim` like so:

```shell
nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
```

Press enter to skip errors and let it install plugins.
</TabItem>
</Tabs>

## Update

NvChad has an update mechanism built-in, which will pull any new updates to the git repository.

Activate it by running `<leader> + uu`.

- Note: by NvChad default, `<leader>` is the `<space>` key

This will open a prompt in NeoVim warning you that it is about to do a `git reset --hard` and **you will lose any customisations** you've made to NvChad that are not in designated customisation folders.

## Uninstall

Uninstalling is as simple as removing the `nvim` configuration directories.

> Note: it's suggested to backup your config first, consider `mv ~/.config/nvim ~/.config/NVIM.BAK`

```shell
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
rm -rf ~/.cache/nvim
```
