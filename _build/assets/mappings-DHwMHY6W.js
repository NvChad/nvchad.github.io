import{b as n,m as i,i as l,t as a}from"./web-BodIy5GG.js";import{M as c}from"./index-Cy02P5WC.js";var t=a("<kbd>Ctrl"),h=a("<kbd>Space"),d=a("<kbd>alt"),m=a("<kbd>shift");function r(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...c(),...s.components};return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"The mapping configuration uses the nvim name shorcuts as:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"<C>"})," -> ",l(t)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<leader>"})," -> ",l(h)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<A>"})," -> ",l(d)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<S>"})," -> ",l(m)]}}),`
`,n(e.li,{get children(){return["The default mappings are defined ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.5/lua/nvchad/mappings.lua",children:"here"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Mapping format"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["NvChad uses ",n(e.code,{children:"vim.keymap.set"})," by default, check ",n(e.code,{children:":h vim.keymap.set"})," for detailed docs."]}}),`
`,n(e.li,{children:"The desc opt is optional. Its only needed for NvCheatsheet to document, First word in desc will be used for group heading."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"local"}),` map = vim.keymap.set

map(`,n(e.span,{className:"hljs-string",children:'"i"'}),", ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),", ",n(e.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Move up"'}),` })

`,n(e.span,{className:"hljs-comment",children:"-- multiple modes "}),`
map({ `,n(e.span,{className:"hljs-string",children:'"i"'}),", ",n(e.span,{className:"hljs-string",children:'"n"'})," }, ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),", ",n(e.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Move down"'}),` })

map(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<leader>ff"'}),", ",n(e.span,{className:"hljs-string",children:'":Telescope <cr>"'}),`)

`,n(e.span,{className:"hljs-comment",children:"-- mapping with a lua function"}),`
map(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<A-i>"'}),", ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
  `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),`).toggle()
`,n(e.span,{className:"hljs-keyword",children:"end"}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Terminal toggle floating"'}),` })


`,n(e.span,{className:"hljs-comment",children:"-- Disable mappings"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` nomap = vim.keymap.del

nomap(`,n(e.span,{className:"hljs-string",children:'"i"'}),", ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),`)
nomap(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"<C-k>"'}),`)
`]}})}})]}function g(s={}){const{wrapper:e}={...c(),...s.components};return e?n(e,i(s,{get children(){return n(r,s)}})):r(s)}export{g as default};
