---
sidebar_position: 1
---

## Pre-requisites 

- Terminal supporting true colors ( most already do ).
- Use a Nerd Font in your terminal.
- Neovim 0.5
- ```git``` ``` Node.js```

### Install

- Installing is as easy as git cloning into your NeoVim configuration folder.

If you already have a `~/.config/nvim` folder, move it with:

```shell
mv ~/.config/nvim ~/.config/Nvim.backup
```
Then do : 

``` shell 
git clone https://github.com/NvChad/NvChad.git ~/.config/nvim
nvim +PackerSync
```

### Update

```

```

### Uninstall

```shell
rm -rf ~/.config/cache/nvim
rm -rf ~/.config/config/nvim
rm -rf ~/.local/share/nvim
```
