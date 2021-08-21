## Basic debugging
 + Check the Packer log
```
less ~/.cache/nvim/packer.nvim.log
```
 + Remove your compiled Packer plugins with
```
rm -r ~/.config/nvim/plugin`
```
Then in NeoVim run `:PackerSync` and **restart NeoVim**
 + Check the health of neovim using
```
checkhealth
```
- Before logging an issue:
-- [Search the GitHub issue list](https://github.com/NvChad/NvChad/issues?q=is%3Aissue)
-- Then [log an issue, be sure to provide **all prompted information**](https://github.com/NvChad/NvChad/issues/new/choose)
