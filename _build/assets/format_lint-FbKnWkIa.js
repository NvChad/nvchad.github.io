import{M as i}from"./index-CYDpJFld.js";import{b as e,m as o}from"./web-DScAkgcG.js";function r(t){const n={a:"a",h2:"h2",li:"li",ul:"ul",...i(),...t.components};return[e(n.h2,{children:"Formatting"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["There are many formatter plugins but we use ",e(n.a,{href:"https://github.com/stevearc/conform.nvim",children:"conform.nvim"})," in our example_config."]}}),`
`,e(n.li,{get children(){return["Read its docs and the conform config in the ",e(n.a,{href:"https://github.com/NvChad/example_config/blob/v2.0/configs/conform.lua",children:"example_config"})," repo"]}}),`
`]}}),`
`,e(n.h2,{children:"Linting"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`Most of the times the lsp's just enough for diagnostic messages, linting etc. Although you can use plugins like
`,e(n.a,{href:"https://github.com/mfussenegger/nvim-lint",children:"nvim-lint"}),"."]}}),`
`]}})]}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e(n,o(t,{get children(){return e(r,t)}})):r(t)}export{h as default};
