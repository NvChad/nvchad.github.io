import{b as e,q as c,k as a,t as l}from"./web-CBU83r8B.js";import{M as i}from"./index-C2YDUEaq.js";var t=l("<kbd>Ctrl"),h=l("<kbd>Space"),d=l("<kbd>alt"),p=l("<kbd>shift");const g={title:"NvChad Mappings",desc:"Manage mappings in nvchad"};function r(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...s.components};return[e(n.h2,{children:"Overview"}),`
`,e(n.p,{children:"The mapping configuration uses the nvim name shortcuts as:"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"<C>"})," -> ",a(t)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<leader>"})," -> ",a(h)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<A>"})," -> ",a(d)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<S>"})," -> ",a(p)]}}),`
`,e(n.li,{get children(){return["The default mappings are defined ",e(n.a,{href:"https://github.com/NvChad/NvChad/blob/v2.5/lua/nvchad/mappings.lua",children:"here"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Mapping format"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["NvChad uses ",e(n.code,{children:"vim.keymap.set"})," by default, check ",e(n.code,{children:":h vim.keymap.set"})," for detailed docs."]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"The desc opt is optional. It's only needed for NvCheatsheet to document, First word in desc will be used for group heading."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"NvCheatsheet groups require at least 2 mappings"}),`
`]}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` map = vim.keymap.set

map(`,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),", ",e(n.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Move up"'}),` })

`,e(n.span,{className:"hljs-comment",children:"-- multiple modes "}),`
map({ `,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"n"'})," }, ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),", ",e(n.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Move down"'}),` })

map(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<leader>ff"'}),", ",e(n.span,{className:"hljs-string",children:'":Telescope <cr>"'}),`)

`,e(n.span,{className:"hljs-comment",children:"-- mapping with a lua function"}),`
map(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<A-i>"'}),", ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
  `,e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle({ pos = ",e(n.span,{className:"hljs-string",children:'"sp"'}),", id =",e(n.span,{className:"hljs-string",children:"'abc'"}),` })
`,e(n.span,{className:"hljs-keyword",children:"end"}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Terminal toggle floating"'}),` })


`,e(n.span,{className:"hljs-comment",children:"-- Disable mappings"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"}),` nomap = vim.keymap.del

nomap(`,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),`)
nomap(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),`)
`]}})}})]}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e(n,c(s,{get children(){return e(r,s)}})):r(s)}export{u as default,g as meta};
