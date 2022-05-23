---
id: setup
title: Setup
sidebar_position: 1
---

## Try NvChad in a Docker container

This will leave your current Neovim configuration untouched. Once you exit Neovim, the image is deleted.

```zsh
  docker run -w /root -it --rm alpine:edge sh -uelic '
    apk add git nodejs neovim ripgrep alpine-sdk --update
    git clone https://github.com/NvChad/NvChad ~/.config/nvim
    nvim
    '
```

## Pre-requisites

- [Neovim 0.7.0 install page](https://github.com/neovim/neovim/releases/tag/v0.7.0)
- If neovim's very old for your OS then consider trying this [neovim version manager](https://github.com/MordechaiHadad/bob)
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.

### Semi-optional 

- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with _Telescope_

## Install

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="linux" values={[ {label: 'Linux & MacOS', value: 'linux'}, {label: 'Windows', value: 'win'} ]}>
<TabItem value="linux">

Clone NvChad & install it's plugins:

```shell
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim
```

</TabItem>
<TabItem value="win">

1. Install [`mingw`](http://mingw-w64.org/doku.php) if you don't already have it.

```shell
choco install mingw
```

2. Install `packer`

```shell
git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"
git clone https://github.com/NvChad/NvChad nvim --depth 1
```

3. Copy the nvim dir to `~/AppData/Local/`
4. Then launch `nvim`:

```shell
nvim
```
</TabItem>
</Tabs>

## Update

NvChad has an update mechanism built-in, which will pull any new updates to the git repository.

Activate it by running `<leader> + uu`.

- Note: by NvChad default, `<leader>` is the `<space>` key

This will open a prompt in NeoVim warning you that it is about to do a `git reset --hard` and **you will lose any customisations** you've made to NvChad that are not in designated customisation folders.

## Uninstall

Uninstalling is as simple as removing the `nvim` configuration directories.

```shell
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
rm -rf ~/.cache/nvim
```
