import{b as n,q as i,k as a,t as l}from"./web-uzQsy4d_.js";import{M as t}from"./index-BosUlz4E.js";var c=l("<kbd>Ctrl"),h=l("<kbd>Space"),d=l("<kbd>alt"),p=l("<kbd>shift"),m=l("<br>");const u={title:"NvChad Mappings",desc:"Manage mappings in nvchad"};function r(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...t(),...s.components};return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"The mapping configuration uses the nvim name shortcuts as:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"<C>"})," -> ",a(c)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<leader>"})," -> ",a(h)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<A>"})," -> ",a(d)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<S>"})," -> ",a(p)]}}),`
`,n(e.li,{get children(){return["The default mappings are defined ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.5/lua/nvchad/mappings.lua",children:"here"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Mapping format"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["NvChad uses ",n(e.code,{children:"vim.keymap.set"})," by default, check ",n(e.code,{children:":h vim.keymap.set"})," for detailed docs."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"The desc opt is optional. It's only needed for NvCheatsheet to document, First word in desc will be used for group heading."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"NvCheatsheet groups require at least 2 mappings"}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"local"}),` map = vim.keymap.set

map(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<leader>ff"'}),", ",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <cr>"'}),`)

`,n(e.span,{className:"hljs-comment",children:"-- multiple modes "}),`
map({ `,n(e.span,{className:"hljs-string",children:'"i"'}),", ",n(e.span,{className:"hljs-string",children:'"n"'})," }, ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),", ",n(e.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Move up"'}),` })

`,n(e.span,{className:"hljs-comment",children:"-- mapping with a lua function"}),`
map(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<A-i>"'}),", ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
   `,n(e.span,{className:"hljs-comment",children:"-- do something"}),`
`,n(e.span,{className:"hljs-keyword",children:"end"}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Terminal toggle floating"'}),` })

`,n(e.span,{className:"hljs-comment",children:"-- Disable mappings"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` nomap = vim.keymap.del

nomap(`,n(e.span,{className:"hljs-string",children:'"i"'}),", ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),`)
nomap(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),`)
`]}})}}),`
`,a(m),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Do know that lsp & gitsigns mappings wont be overrided by the above methods, because they dont load on startup & are lazy loaded. So put the lsp ones in ",n(e.code,{children:"LspAttach"})," autocmd or right after your on_attach"]}}),`
`]}})]}function N(s={}){const{wrapper:e}={...t(),...s.components};return e?n(e,i(s,{get children(){return n(r,s)}})):r(s)}export{N as default,u as meta};
