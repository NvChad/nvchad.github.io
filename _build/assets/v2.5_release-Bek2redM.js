import{b as n,q as l,k as h,t as c}from"./web-CBU83r8B.js";import{M as t}from"./index-C2YDUEaq.js";var o=c("<br>");const s={title:"NvChad v2.5 released!",desc:"Minor NvChad release with standard neovim config structure, new 11 themes, UI Term module replacing nvterm.",cover:"v2.5.webp"};function i(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return[n(e.h1,{children:"NvChad v2.5 Released!"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/v2.5.webp",alt:"v2.5 poster"})}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"This release is a minor release, only major changes in it are new config structure ( no custom config stuff), you will be using nvchad repo as plugin, like LazyVim does with its starter config. NvTerm is replaced by UI's term module"}),`
`]}}),`
`,n(e.h2,{children:"Changelog"}),`
`,n(e.h2,{children:"Added"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Starter template for NvChad which lets users use NvChad as a plugin, thus not needing custom config stuff."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:`11 New themes for base46:
flexoki,
jabuti,
poimandres,
mito-laser
nano-light,
flexoki-light,
chadracula-evondev,
material-darker,
material-lighter,
solarized_oska,
rosepine-dawn`}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Minimal terminal module which replaces nvterm which lets you created any amount of toggleable terminals , change bg color / highlights of each window etc."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"term table ( config ) in ui table of chadrc."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Integrations list of base46 so you can exclude/include integrations supported by base46."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Default lspconfig now exports on_init function which you can include in your custom lspconfig"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["All nvchad modules will start with ",n(e.code,{children:"nvchad"})," , example : require('nvchad.options')"]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Changed"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"List of all defaults will be in lua/nvconfig instead of core/default_config"}),`
`,n(e.li,{children:"Overriding modules for tabufline/statusline, its a lot easier now."}),`
`,n(e.li,{children:"Extended_integrations syntax for base46"}),`
`,n(e.li,{get children(){return["Mappings no longer use nvchad's custom syntax. It uses nvim's ",n(e.code,{children:"vim.keymap.set"})]}}),`
`]}}),`
`,n(e.h2,{children:"Removed"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Custom config structure handling."}),`
`,n(e.li,{children:"Nvterm plugin"}),`
`,n(e.li,{children:"NvChad updater"}),`
`,n(e.li,{children:"chadrc's cmp options: border_color , selected_item_bg"}),`
`,n(e.li,{children:"tabufline, show_numbers"}),`
`]}}),`
`,n(e.h2,{children:"Migration"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Check the ",n(e.a,{href:"/docs/config/walkthrough",children:"Quick walkthrough doc"})," for having a basic understanding of how NvChad works now."]}}),`
`,n(e.li,{get children(){return["git clone ",n(e.a,{href:"https://github.com/NvChad/starter",children:"starter repo"})," as your nvim config."]}}),`
`,n(e.li,{get children(){return["Go through the new ",n(e.a,{href:"https://github.com/NvChad/NvChad/tree/v2.5",children:"module structure of nvchad"})," which will be used as your plugin."]}}),`
`,n(e.li,{get children(){return["You can use this ",n(e.a,{href:"https://gist.github.com/siduck/048bed2e7570569e6b327b35d1715404",children:"shell script"})," ( unix only ) to automate your migration."]}}),`
`]}}),`
`,h(o),`
`,n(e.p,{get children(){return n(e.strong,{children:"For Manual Migration :"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Move All of your custom dir files to the ",n(e.code,{children:"lua"})," dir of starter config"]}}),`
`,n(e.li,{get children(){return["Remove all instances of ",n(e.code,{children:"custom."}),` word in all your files, example
`,n(e.code,{children:"require('custom.options')"})," -> ",n(e.code,{children:"require('options')"})]}}),`
`,n(e.li,{get children(){return["Check the new ",n(e.a,{href:"https://nvchad.com/docs/config/mappings",children:"mappings syntax"})," and the ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/2688",children:"pinned issue"})," for some recipes."]}}),`
`,n(e.li,{get children(){return["replace ",n(e.code,{children:'require "plugin.configs.lspconfig"'})," with ",n(e.code,{children:"require('nvchad.configs.lspconfig').defaults()"})]}}),`
`,n(e.li,{get children(){return["Replace all instances of ",n(e.code,{children:"plugin.configs"})," with ",n(e.code,{children:"nvchad.configs"})]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Few docs to check again"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://nvchad.com/docs/config/lsp",children:"Lsp docs"})}}),`
`,n(e.li,{get children(){return["Check the term module ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#term",children:"docs"})," which is a replacement for nvterm."]}}),`
`,n(e.li,{get children(){return["Check statusline/tabufline overriding syntax ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#statusline___tabufline",children:"docs"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"New Themes"}),`
`,n(e.h3,{children:"Jabuti"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/jabuti.webp",alt:"jabuti theme"})}}),`
`,n(e.h3,{children:"Flexoki"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki.webp",alt:"flexoki theme"})}}),`
`,n(e.h3,{children:"Poimandres"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/poimandres.webp",alt:"poimandres theme"})}}),`
`,n(e.h3,{children:"Mito-laser"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/mito-laser.webp",alt:"mito-laser theme"})}}),`
`,n(e.h3,{children:"Chadracula-evondev"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/chadracula-evondev.webp",alt:"chadracula-evondev theme"})}}),`
`,n(e.h3,{children:"Nano-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/nano-light.webp",alt:"nano-light theme"})}}),`
`,n(e.h3,{children:"Flexoki-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki-light.webp",alt:"flexoki-light theme"})}}),`
`,n(e.h3,{children:"Material-darker"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/material-darker.webp",alt:"material-darker theme"})}}),`
`,n(e.h3,{children:"Material-lighter"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/material-lighter.webp",alt:"material-lighter theme"})}}),`
`,n(e.h3,{children:"Rosepine-dawn"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/rosepine-dawn.webp",alt:"rosepine-dawn theme"})}}),`
`,n(e.h3,{children:"Solarized_oska"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/solarized_oska.webp",alt:"solarized_oska theme"})}})]}function u(r={}){const{wrapper:e}={...t(),...r.components};return e?n(e,l(r,{get children(){return n(i,r)}})):i(r)}export{u as default,s as meta};
