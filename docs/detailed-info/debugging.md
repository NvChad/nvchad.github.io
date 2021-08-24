---
id: detailed-debugging
title: Adv. debugging 
---

## How to gather fundamental debugging info
- Get your current NvChad version: `git rev-parse --short HEAD`
- Get all the differences between your local config & NvChad: `git diff origin/HEAD > diff.txt`
- Get the Packer log: `less ~/.cache/nvim/packer.nvim.log`
