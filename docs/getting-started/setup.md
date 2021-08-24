---
id: setup
title: Setup
sidebar_position: 1
---

## Pre-requisites 

- [Neovim 0.5+ install page](https://github.com/neovim/neovim/wiki/Installing-Neovim)
  
<details><summary>Some NeoVim installation options</summary>
<div>

### NeoVim installation options
> Note: This is a summary of [NeoVim's installation page](https://github.com/neovim/neovim/wiki/Installing-Neovim)

#### [With an appimage](https://github.com/neovim/neovim/wiki/Installing-Neovim#appimage-universal-linux-package)
This should work across all Linux distros.
```shell
$ curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
$ chmod u+x nvim.appimage
$ ./nvim.appimage
```
Then consider moving this to your local/user bin & adding an alias to this
```shell
mv ./nvim.appimage ~/.local/bin/
echo "alias vim='/home/<YOUR USERNAME>/.local/bin/nvim.appimage'" >>~/.<bashrc or zshrc>
```

#### [Using PACMAN on Arch](https://github.com/neovim/neovim/wiki/Installing-Neovim#arch-linux)
```shell
$ sudo pacman -S neovim
```

#### [Using APT on Ubuntu](https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu)
> Note: This doesn't work with Debian

```shell
$ sudo add-apt-repository ppa:neovim-ppa/stable
$ sudo apt-get update
$ sudo apt-get install neovim
```
</div>
</details>

- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- `git` & other basic Linux CLI tools

### Semi-optional dependencies

- `node` **Node.js** is required for many Language Servers (LSPs)
- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with *Telescope*

## Install

Installation is as easy as cloning the NvChad repository into your NeoVim configuration folder.


Next, clone the `NvChad` repository to `~/.config/nvim` & install plugins with:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="linux" values={[ {label: 'Linux & Macintosh', value: 'linux'}, {label: 'Windows', value: 'win'} ]}>
<TabItem value="linux">

### Linux & MacOS:
If you already have a `~/.config/nvim` folder, make a backup with:

```shell
$ mv ~/.config/nvim ~/.config/NVIM.BAK
```
Then install NvChad & it's plugins with:

```shell 
$ git clone https://github.com/NvChad/NvChad ~/.config/nvim
$ nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
```
</TabItem>
<TabItem value="win">

### Windows
1. Install [`mingw`](http://mingw-w64.org/doku.php) if you don't already have it.
  ```shell
  $ choco install mingw
  ```

2. Install `packer`
  ```shell
  $ git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
  $ git clone https://github.com/NvChad/NvChad
  ```

3. Go to `~/AppData/Local/nvim`. Copy nvchad's `init.lua` and `lua` folder into the nvim folder.
4. Then launch `nvim` like so:
  ```shell
  $ nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
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
$ rm -rf ~/.config/nvim
$ rm -rf ~/.local/share/nvim
$ rm -rf ~/.cache/nvim
```
