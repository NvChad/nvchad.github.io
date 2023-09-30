import{b as n,n as a,g as r,t}from"./entry-client-fc2b3836.js";import{M as o}from"./index-8d1425ad.js";const c=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/xytzreFq_us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen">'),h=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/wt7IX8ojMrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;">'),s=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/V_9iJ96U_k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;">'),d=t("<kbd> leader + pt "),u=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/3DysWI_6YpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;">'),m=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/IljDD4cjgKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;">'),p=t('<div class="iframe-container"><iframe src="https://www.youtube.com/embed/oMzMDXA-VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;">'),g=t("<br>");function l(i){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",h4:"h4",p:"p",img:"img",code:"code",a:"a"},o(),i.components);return[n(e.h1,{children:"Inbuilt features"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["NvChad is built upon its personal plugins and many general Neovim plugins, below are the features that are provided by nvchad plugins ",n(e.strong,{children:"( our ui plugin, base46, extensions, nvterm, nvim-colorizer )"})]}}),`
`]}}),`
`,n(e.h2,{children:"Base46"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Base46 is NvChad's highlight performant theming plugin and has many ported themes ( around 57+ )."}),`
`]}}),`
`,n(e.h4,{children:"How it works?"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Gets highlight groups"}),`
`,n(e.li,{children:"Do some computations i.e. check for overridden highlight groups, new highlight groups, theme overrides, custom user themes etc."}),`
`,n(e.li,{children:"Now, base46 compiles all of that into bytecode."}),`
`,n(e.li,{children:"Integration files aren't loaded by default; for example highlight group for telescope, nvimtree etc are put into different files."}),`
`,n(e.li,{children:"highlight groups are lazyloaded i.e. you load them when needed"}),`
`,n(e.li,{get children(){return n(e.strong,{children:'example : dofile(vim.g.base46_cache .. "cmp")'})}}),`
`,n(e.li,{children:"In the below video, you can see that the chadrc file's ( user config ) UI related options reload on the fly"}),`
`]}}),`
`,r(c),`
`,n(e.h2,{children:"Theme switcher"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"A theme switcher with telescope.nvim that reloads themes on the fly using the base46 plugin + plenary.nvim."}),`
`]}}),`
`,r(h),`
`,n(e.h2,{children:"Statusline"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"We have our own statusline module ( our UI Plugin ) which has 4 statusline styles"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/statuslines.webp",alt:"nvchad statusline"})}}),`
`,n(e.h2,{children:"Tabufline"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"NvChad's tabufline module ( from UI Plugin ) is a mix of tabline & bufferline."}),`
`,n(e.li,{children:"It manages buffers & tabs, buttons in it are clickable"}),`
`,n(e.li,{children:"Each tab will have its own set of buffers stored, and the tabufline will show those only."}),`
`,n(e.li,{children:"Think of it like workspaces on Linux/Windows where windows stay in their own workspaces, but in vim buffers from all tabs will be shown in every tab!"}),`
`]}}),`
`,r(s),`
`,n(e.h2,{children:"Nvterm"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"NvChad's terminal plugin to toggle and run commands in Neovim terminal buffer"}),`
`,n(e.li,{get children(){return["Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers ",r(d),"."]}}),`
`]}}),`
`,r(u),`
`,n(e.h2,{children:"Dashboard"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return["Command to run it ",n(e.code,{children:"Nvdash"}),", its disabled on startup, check the default_config.lua for its syntax and override it from chadrc."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}}),`
`,n(e.h2,{children:"NvCheatsheet"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module, which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}}),`
`]}}),`
`,r(m),`
`,n(e.h1,{children:"General Neovim plugins"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"These plugins aren't related to nvchad, we just tweak them a bit and theme the UI related ones."}),`
`]}}),`
`,n(e.h2,{children:"Telescope.nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/nvim-telescope/telescope.nvim",children:"Telescope.nvim"})," is a highly extensible fuzzy finder over lists. Built on the latest awesome features from Neovim core. Telescope is centered around modularity, allowing for easy customization."]}}),`
`,n(e.li,{children:"Below are 2 styles of telescope in nvchad ( bordered and borderless )"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/telescope.webp",alt:"telescope"})}}),`
`,n(e.h2,{children:"Nvim-tree.lua"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/kyazdani42/nvim-tree.lua",get children(){return n(e.code,{children:"nvim-tree.lua"})}})," is a file explorer tree for Neovim written in Lua."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})}}),`
`,n(e.h2,{children:"Nvim-cmp"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["[",n(e.code,{children:"nvim-cmp"}),"](A completion plugin for Neovim coded in Lua.) is a completion plugin for Neovim coded in Lua."]}}),`
`,n(e.li,{children:"Below are some cmp styles in nvchad"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Note that that's just the cmp look in everblush theme, there are more 57 themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"}),`
`]}}),`
`,n(e.h2,{children:"Auto-completion & LSP"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/neovim/nvim-lspconfig",get children(){return n(e.code,{children:"nvim-lspconfig"})}})," is used along with cmp for completion and ",n(e.a,{href:"https://github.com/L3MON4D3/LuaSnip",get children(){return n(e.code,{children:"luasnip"})}}),"  + ",n(e.a,{href:"https://github.com/rafamadriz/friendly-snippets",get children(){return n(e.code,{children:"friendly-snippets"})}})," for snippet completion!"]}}),`
`]}}),`
`,r(p),`
`,r(g),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/folke/lazy.nvim",get children(){return n(e.code,{children:"lazy.nvim"})}})," - A modern plugin manager for Neovim"]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/folke/which-key.nvim",get children(){return n(e.code,{children:"whichkey.nvim"})}})," - Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/NvChad/nvim-colorizer.lua",get children(){return n(e.code,{children:"nvim-colorizer.lua"})}})," - Fastest Neovim colorizer, hex colors, hsl codes and much more."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",get children(){return n(e.code,{children:"nvim-treesitter"})}})," - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/lukas-reineke/indent-blankline.nvim",get children(){return n(e.code,{children:"blankline"})}})," - Indent guides for Neovim i.e indentline plugin."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/lewis6991/gitsigns.nvim",get children(){return n(e.code,{children:"gitsigns.nvim"})}})," - Git integration for buffers"]}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/windwp/nvim-autopairs",get children(){return n(e.code,{children:"nvim-autopairs"})}})}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/numToStr/Comment.nvim",get children(){return n(e.code,{children:"comment.nvim"})}})," - Commenting plugin"]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/williamboman/mason.nvim",get children(){return n(e.code,{children:"mason.nvim"})}})," - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."]}}),`
`]}})]}function v(i={}){const{wrapper:e}=Object.assign({},o(),i.components);return e?n(e,a(i,{get children(){return n(l,i)}})):l(i)}export{v as default};
