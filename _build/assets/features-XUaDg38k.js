import{b as r,m as a,i as n,t}from"./web-BodIy5GG.js";import{M as o}from"./index-Cy02P5WC.js";var c=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen>'),h=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/wt7IX8ojMrs title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),s=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/V_9iJ96U_k8 title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),d=t("<kbd> leader + pt "),u=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/3DysWI_6YpQ title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),m=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),p=t('<div class=iframe-container><iframe src=https://www.youtube.com/embed/oMzMDXA-VO0 title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),g=t("<br>");function l(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return[r(e.h1,{children:"Inbuilt features"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return["NvChad is built upon its personal plugins and many general Neovim plugins, below are the features that are provided by nvchad plugins ",r(e.strong,{children:"( our ui plugin, base46, extensions, nvterm, nvim-colorizer )"})]}}),`
`]}}),`
`,r(e.h2,{children:"Base46"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"Base46 is NvChad's highlight performant theming plugin and has many ported themes ( around 57+ )."}),`
`]}}),`
`,r(e.h4,{children:"How it works?"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"Gets highlight groups"}),`
`,r(e.li,{children:"Do some computations i.e. check for overridden highlight groups, new highlight groups, theme overrides, custom user themes etc."}),`
`,r(e.li,{children:"Now, base46 compiles all of that into bytecode."}),`
`,r(e.li,{children:"Integration files aren't loaded by default; for example highlight group for telescope, nvimtree etc are put into different files."}),`
`,r(e.li,{children:"highlight groups are lazyloaded i.e. you load them when needed"}),`
`,r(e.li,{get children(){return r(e.strong,{children:'example : dofile(vim.g.base46_cache .. "cmp")'})}}),`
`,r(e.li,{children:"In the below video, you can see that the chadrc file's ( user config ) UI related options reload on the fly"}),`
`]}}),`
`,n(c),`
`,r(e.h2,{children:"Theme switcher"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"A theme switcher with telescope.nvim that reloads themes on the fly using the base46 plugin + plenary.nvim."}),`
`]}}),`
`,n(h),`
`,r(e.h2,{children:"Statusline"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"We have our own statusline module ( our UI Plugin ) which has 4 statusline styles"}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"/features/statuslines.webp",alt:"nvchad statusline"})}}),`
`,r(e.h2,{children:"Tabufline"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"NvChad's tabufline module ( from UI Plugin ) is a mix of tabline & bufferline."}),`
`,r(e.li,{children:"It manages buffers & tabs, buttons in it are clickable"}),`
`,r(e.li,{children:"Each tab will have its own set of buffers stored, and the tabufline will show those only."}),`
`,r(e.li,{children:"Think of it like workspaces on Linux/Windows where windows stay in their own workspaces, but in vim buffers from all tabs will be shown in every tab!"}),`
`]}}),`
`,n(s),`
`,r(e.h2,{children:"Nvterm"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"NvChad's terminal plugin to toggle and run commands in Neovim terminal buffer"}),`
`,r(e.li,{get children(){return["Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers ",n(d),"."]}}),`
`]}}),`
`,n(u),`
`,r(e.h2,{children:"Dashboard"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,r(e.li,{get children(){return["Command to run it ",r(e.code,{children:"Nvdash"}),", its disabled on startup, check the default_config.lua for its syntax and override it from chadrc."]}}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}}),`
`,r(e.h2,{children:"NvCheatsheet"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"Auto-generated mappings cheatsheet module, which has a similar layout to that of CSS's masonry layout."}),`
`,r(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return["command to toggle it : ",r(e.code,{children:"NvCheatsheet"})," and mapping ",r(e.code,{children:"leader + ch"})]}}),`
`]}}),`
`,n(m),`
`,r(e.h1,{children:"General Neovim plugins"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"These plugins aren't related to nvchad, we just tweak them a bit and theme the UI related ones."}),`
`]}}),`
`,r(e.h2,{children:"Telescope.nvim"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/nvim-telescope/telescope.nvim",children:"Telescope.nvim"})," is a highly extensible fuzzy finder over lists. Built on the latest awesome features from Neovim core. Telescope is centered around modularity, allowing for easy customization."]}}),`
`,r(e.li,{children:"Below are 2 styles of telescope in nvchad ( bordered and borderless )"}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"/features/telescope.webp",alt:"telescope"})}}),`
`,r(e.h2,{children:"Nvim-tree.lua"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/kyazdani42/nvim-tree.lua",get children(){return r(e.code,{children:"nvim-tree.lua"})}})," is a file explorer tree for Neovim written in Lua."]}}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})}}),`
`,r(e.h2,{children:"Nvim-cmp"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/hrsh7th/nvim-cmp",get children(){return r(e.code,{children:"nvim-cmp"})}})," is a completion plugin for Neovim coded in Lua."]}}),`
`,r(e.li,{children:"Below are some cmp styles in nvchad"}),`
`]}}),`
`,r(e.p,{get children(){return r(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:"Note that that's just the cmp look in everblush theme, there are more 57 themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"}),`
`]}}),`
`,r(e.h2,{children:"Auto-completion & LSP"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/neovim/nvim-lspconfig",get children(){return r(e.code,{children:"nvim-lspconfig"})}})," is used along with cmp for completion and ",r(e.a,{href:"https://github.com/L3MON4D3/LuaSnip",get children(){return r(e.code,{children:"luasnip"})}}),"  + ",r(e.a,{href:"https://github.com/rafamadriz/friendly-snippets",get children(){return r(e.code,{children:"friendly-snippets"})}})," for snippet completion!"]}}),`
`]}}),`
`,n(p),`
`,n(g),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/folke/lazy.nvim",get children(){return r(e.code,{children:"lazy.nvim"})}})," - A modern plugin manager for Neovim"]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/folke/which-key.nvim",get children(){return r(e.code,{children:"whichkey.nvim"})}})," - Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing."]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/NvChad/nvim-colorizer.lua",get children(){return r(e.code,{children:"nvim-colorizer.lua"})}})," - Fastest Neovim colorizer, hex colors, hsl codes and much more."]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",get children(){return r(e.code,{children:"nvim-treesitter"})}})," - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/lukas-reineke/indent-blankline.nvim",get children(){return r(e.code,{children:"blankline"})}})," - Indent guides for Neovim i.e indentline plugin."]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/lewis6991/gitsigns.nvim",get children(){return r(e.code,{children:"gitsigns.nvim"})}})," - Git integration for buffers"]}}),`
`,r(e.li,{get children(){return r(e.a,{href:"https://github.com/windwp/nvim-autopairs",get children(){return r(e.code,{children:"nvim-autopairs"})}})}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/numToStr/Comment.nvim",get children(){return r(e.code,{children:"comment.nvim"})}})," - Commenting plugin"]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"https://github.com/williamboman/mason.nvim",get children(){return r(e.code,{children:"mason.nvim"})}})," - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."]}}),`
`]}})]}function v(i={}){const{wrapper:e}={...o(),...i.components};return e?r(e,a(i,{get children(){return r(l,i)}})):l(i)}export{v as default};
