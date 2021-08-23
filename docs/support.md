---
id: support
title: Support
---

## Basic Debugging

If you have trouble with plugins, your first place to look is the packer log

```shell
less ~/.cache/nvim/packer.nvim.log
```

If you still can't figure out what's going wrong, you can remove your compiled Packer plugins with:

```shell
rm -r ~/.config/nvim/plugin`
```

Then in NeoVim run `:PackerSync` and **restart NeoVim**. This will redownload and install all plugins.


You can check the health of NeoVim with the built-in health check command. In nvim run:

```shell
:checkhealth
```

Before logging an issue:
- [Search the GitHub issue list](https://github.com/NvChad/NvChad/issues?q=is%3Aissue)
- Then [log an issue, be sure to provide **all prompted information**](https://github.com/NvChad/NvChad/issues/new/choose)
