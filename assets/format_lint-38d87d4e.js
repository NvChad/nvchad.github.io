import{M as i}from"./index-be05d0a9.js";import{b as e,n as o}from"./entry-client-10316c79.js";function r(t){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a"},i(),t.components);return[e(n.h2,{children:"Formatting"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["There are many formatter plugins but we use ",e(n.a,{href:"https://github.com/stevearc/conform.nvim",children:"conform.nvim"})," in our example_config."]}}),`
`,e(n.li,{get children(){return["Read its docs and the conform config in the ",e(n.a,{href:"https://github.com/NvChad/example_config/blob/v2.0/configs/conform.lua",children:"example_config"})," repo"]}}),`
`]}}),`
`,e(n.h2,{children:"Linting"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`Most of the times the lsp's just enough for diagnostic messages, linting etc. Although you can use plugins like
`,e(n.a,{href:"https://github.com/mfussenegger/nvim-lint",children:"nvim-lint"}),"."]}}),`
`]}})]}function h(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e(n,o(t,{get children(){return e(r,t)}})):r(t)}export{h as default};
