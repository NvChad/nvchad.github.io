---
id: install
title: Install
sidebar_position: 1
---

## Try in a Docker container 

This will leave your current Neovim configuration untouched. Once you exit Neovim, the image is deleted.

```zsh
  docker run -w /root -it --rm alpine:edge sh -uelic '
    apk add git nodejs neovim ripgrep alpine-sdk --update
    git clone https://github.com/NvChad/NvChad ~/.config/nvim
    nvim
    '
```

## Pre-requisites

- You should be an existing Vim user or keen to learn Neovim and NvChad (through these docs).
- [Neovim 0.8.0](https://github.com/neovim/neovim/releases/tag/v0.8.0), if your distro/OS doesn't have it then try [neovim version manager](https://github.com/MordechaiHadad/bob).
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- Make sure to delete this folder `~/.local/share/nvim` on Linux/macOS or `~\AppData\Local\nvim` and `~\AppData\Local\nvim-data` on Windows.

### Semi-optional 

- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with _Telescope_. 

## Install

### Linux / macOS (UNIX)

```bash
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim
```
### Windows

```bash
git clone https://github.com/NvChad/NvChad $HOME\AppData\Local\nvim --depth 1 && nvim
```
(Note: Windows users must have [`mingw`](http://mingw-w64.org) installed and set on path).

## Update

NvChad has an update mechanism built-in, which will pull any new updates from the git repository.

- Update NvChad by pressing `<leader> + uu`

- **Note**: by NvChad default, `<leader>` is the `<space>` key.

This will open a prompt in Neovim warning you that it is about to do a `git reset --hard` and **you will lose any customisations** you've made to NvChad outside the custom folder.

## Uninstall

```bash
# linux/macos (unix)
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
rm -rf ~/.cache/nvim

# windows
rd -r ~\AppData\Local\nvim
rd -r ~\AppData\Local\nvim-data
```
