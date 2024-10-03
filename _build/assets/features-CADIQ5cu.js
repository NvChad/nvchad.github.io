import{b as n,q as s,k as t,t as r}from"./web-DqPol8Cv.js";import{M as c}from"./index-yHsRVhWw.js";var h=r('<div class=iframe-container><iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen>'),o=r('<div class=iframe-container><iframe width=560 height=315 src="https://www.youtube.com/embed/eUnDUhYoNJg?si=t9BxDCsA9ru1eXox"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>'),d=r('<div class=iframe-container><iframe src=https://www.youtube.com/embed/V_9iJ96U_k8 title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),u=r("<kbd> leader + pt "),m=r('<div class=iframe-container><iframe src=https://www.youtube.com/embed/3DysWI_6YpQ title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),g=r('<div class=iframe-container><iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>'),l=r("<br>"),p=r('<div class=iframe-container><iframe src=https://www.youtube.com/embed/oMzMDXA-VO0 title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>');const w={title:"NvChad Features",desc:"List of all features in Nvchad"};function a(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...c(),...i.components};return[n(e.h1,{children:"Inbuilt features"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["NvChad is built upon its personal plugins and many general Neovim plugins, below are the features that are provided by nvchad plugins ",n(e.strong,{children:"( our ui plugin, base46 )"})]}}),`
`]}}),`
`,n(e.h2,{children:"Base46"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Base46 is NvChad's highly performant theming plugin and has 68 themes."}),`
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
`,t(h),`
`,n(e.h2,{children:"Theme switcher"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"A theme switcher with telescope.nvim that reloads themes on the fly using the base46 plugin + plenary.nvim."}),`
`]}}),`
`,t(o),`
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
`,t(d),`
`,n(e.h2,{children:"Term"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"NvChad's terminal module to toggle and run commands in Neovim terminal buffer"}),`
`,n(e.li,{children:"Its features are :"}),`
`,n(e.li,{children:"Creating new terminal windows"}),`
`,n(e.li,{children:"Creating toggleable terminal windows"}),`
`,n(e.li,{children:"Creating terminal window for code runner"}),`
`,n(e.li,{children:"All of the above functions allow floating, horizontal, vertical windows"}),`
`,n(e.li,{children:"Each window can have its own cmd/size/cmd/ highlight group"}),`
`,n(e.li,{get children(){return["Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers ",t(u),"."]}}),`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://nvchad.com/docs/config/nvchad_ui#term",children:"ui plugin docs"})]}}),`
`]}}),`
`,t(m),`
`,n(e.h2,{children:"Dashboard"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return["Command to run it ",n(e.code,{children:"Nvdash"}),", its disabled on startup, check the nvconfig.lua for its syntax and override it from chadrc."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/072c8733-8a44-4cf3-8732-e5fa7eb9459e",alt:"nvdash"})}}),`
`,n(e.h2,{children:"NvCheatsheet"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module, which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}}),`
`]}}),`
`,t(g),`
`,n(e.h2,{children:"Colorify"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Colors hex color on buffer and lsp colors on the buffer, like tailwind etc"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/c5f3dc55-7810-48ae-879e-25453ab16b71",alt:"image"})}}),`
`,n(e.h2,{children:"Lsp Signature"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Minimal signature window ( ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v3.0/lua/nvchad/lsp/signature.lua",children:"50 LOC ~"}),"), just uses ",n(e.code,{children:"vim.lsp.buf.signature_help"})," on some autocmds."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/b2db5cd1-a81b-41a7-a132-7d2dc15edf39",alt:"image"})}}),`
`,n(e.h2,{children:"Lsp Variable Renamer"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used for renaming"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/c90c1de4-3f42-4bc4-9392-766ca989e4ea",alt:"image"})}}),`
`,n(e.h2,{children:"Nvim-cmp styling"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/hrsh7th/nvim-cmp",get children(){return n(e.code,{children:"nvim-cmp"})}})," is a completion plugin for Neovim coded in Lua."]}}),`
`,n(e.li,{children:"Below are some cmp styles in nvchad"}),`
`]}}),`
`,n(e.p,{get children(){return[n(e.img,{src:"https://github.com/user-attachments/assets/661bbc0f-7073-4b4c-81cb-7cf035e29d6f",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/0557e479-2735-4a86-b23a-eafa540ab4a5",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/5b445b45-4802-4851-a8a4-1de051d58ade",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/3fdbbaa7-a212-499a-a291-0609c72b6f96",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/28775c0c-ce85-45cd-8c76-bdd97344f5b4",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/c44e405b-f0f1-4c56-ae58-85c49b9616a0",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/57e88886-7c95-4e77-a252-2021160cd274",alt:"image"})]}}),`
`,n(e.h2,{children:"Automating Mason installation"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"MasonInstallAll command will now capture all the mason tools from your config"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Supported plugins are : lspconfig, nvim-lint, conform.nvim"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"So for example if you have lspconfig like this :"}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"lspconfig"'}),`).html.setup{}
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"lspconfig"'}),`).clangd.setup{}
`]}})}}),`
`,t(l),`
`,n(e.p,{children:"Then running MasonInstallAll will install both the mason pkgs"}),`
`,n(e.p,{get children(){return["check ",n(e.code,{children:":h nvui.mason"})," for more info"]}}),`
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
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Note that that's just the cmp look in everblush theme, there are more 57 themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"}),`
`]}}),`
`,n(e.h2,{children:"Auto-completion & LSP"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/neovim/nvim-lspconfig",get children(){return n(e.code,{children:"nvim-lspconfig"})}})," is used along with cmp for completion and ",n(e.a,{href:"https://github.com/L3MON4D3/LuaSnip",get children(){return n(e.code,{children:"luasnip"})}}),"  + ",n(e.a,{href:"https://github.com/rafamadriz/friendly-snippets",get children(){return n(e.code,{children:"friendly-snippets"})}})," for snippet completion!"]}}),`
`]}}),`
`,t(p),`
`,t(l),`
`,n(e.h2,{children:"Other plugins"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/folke/lazy.nvim",get children(){return n(e.code,{children:"lazy.nvim"})}})," - A modern plugin manager for Neovim"]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/folke/which-key.nvim",get children(){return n(e.code,{children:"whichkey.nvim"})}})," - Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/NvChad/nvim-colorizer.lua",get children(){return n(e.code,{children:"nvim-colorizer.lua"})}})," - Fastest Neovim colorizer, hex colors, hsl codes and much more."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",get children(){return n(e.code,{children:"nvim-treesitter"})}})," - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/lukas-reineke/indent-blankline.nvim",get children(){return n(e.code,{children:"blankline"})}})," - Indent guides for Neovim i.e indentline plugin."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/lewis6991/gitsigns.nvim",get children(){return n(e.code,{children:"gitsigns.nvim"})}})," - Git integration for buffers"]}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/windwp/nvim-autopairs",get children(){return n(e.code,{children:"nvim-autopairs"})}})}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/williamboman/mason.nvim",get children(){return n(e.code,{children:"mason.nvim"})}})," - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/stevearc/conform.nvim",get children(){return n(e.code,{children:"conform.nvim"})}})," - Lightweight yet powerful formatter plugin for Neovim"]}}),`
`]}})]}function v(i={}){const{wrapper:e}={...c(),...i.components};return e?n(e,s(i,{get children(){return n(a,i)}})):a(i)}export{v as default,w as meta};
