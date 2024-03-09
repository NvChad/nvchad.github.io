import{M as r}from"./index-Cy02P5WC.js";import{b as e,m as l}from"./web-BodIy5GG.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return[e(n.h1,{children:"NvChad v2.5 Released!"}),`
`,e(n.h2,{children:"Changelog"}),`
`,e(n.h2,{children:"Added"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"Starter template for NvChad which lets users use NvChad as a plugin, thus not needing custom config stuff."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:`7 New themes for base46:
flexoki,
jabuti,
poimandres,
mito-laser
nano-light,
flexoki-light,
chadracula-evondev`}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"Minimal terminal module which replaces nvterm which lets you created any amount of toggleable terminals , change bg color / highlights of each window etc."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"term table ( config ) in ui table of chadrc."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"Integrations list of base46 so you can exclude/include integrations supported by base46."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"Default lspconfig now exports on_init function which you can include in your custom lspconfig"}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["All nvchad modules will start with ",e(n.code,{children:"nvchad"})," , example : require('nvchad.options')"]}}),`
`]}}),`
`]}}),`
`,e(n.h2,{children:"Changed"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"List of all defaults will be in lua/nvconfig instead of core/default_config"}),`
`,e(n.li,{children:"Overriding modules for tabufline/statusline, its a lot easier now."}),`
`,e(n.li,{children:"Extended_integrations syntax for base46"}),`
`,e(n.li,{get children(){return["Mappings no longer use nvchad's custom syntax. It uses nvim's ",e(n.code,{children:"vim.keymap.set"})]}}),`
`]}}),`
`,e(n.h2,{children:"Removed"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"Custom config structure handling."}),`
`,e(n.li,{children:"Nvterm plugin"}),`
`,e(n.li,{children:"NvChad updater"}),`
`,e(n.li,{children:"chadrc's cmp options: border_color , selected_item_bg"}),`
`,e(n.li,{children:"tabufline, show_numbers"}),`
`]}})]}function d(i={}){const{wrapper:n}={...r(),...i.components};return n?e(n,l(i,{get children(){return e(t,i)}})):t(i)}export{d as default};
