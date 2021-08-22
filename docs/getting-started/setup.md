---
id: setup
title: Setup
sidebar_position: 1
---

## Pre-requisites 

- [Neovim 0.5](https://neovim.io/)
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal.
- Terminal supporting true colors ( most already do ).
- ```git```

#### Semi-optional dependencies

- ```node``` *Node.js* is required for many Language Servers (LSPs)
- ```ripgrep``` is required for grep searching with *Telescope*

### Install

- Installing is as easy as git cloning into your NeoVim configuration folder.

If you already have a `~/.config/nvim` folder, move it with:

```shell
mv ~/.config/nvim ~/.config/Nvim.backup
```
Then do : 

``` shell 

(*Nix systems)

git clone https://github.com/NvChad/NvChad ~/.config/nvim
nvim +'hi NormalFloat guibg=#1e222a' +PackerSync
```

(Windows)

- Install mingw

 ```ps
ps>choco install mingw

(install packer)
- git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim"

(clone nvchad repo)
- git clone https://github.com/siduck76/NvChad

- go to  ~/AppData/Local/nvim
- copy nvchad's init.lua and lua folder in the nvim folder 
- nvim +PackerSync
- press enter to skip errors and let it install plugins.
 ```


### Update

```
<leader> + uu

(leader is the space key)
```

### Uninstall

```shell
rm -rf ~/.config/cache/nvim
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
```
