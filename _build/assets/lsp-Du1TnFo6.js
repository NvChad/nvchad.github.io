import{b as e,q as o,k as s,t as i,m as h}from"./web-DqPol8Cv.js";import{M as c}from"./index-yHsRVhWw.js";var t=i("<br>"),d=i("<u>");const g={title:"NvChad Lsp Configuration",desc:"Manage lsp servers & mason.nvim in NvChad"};function a(r){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...c(),...r.components};return[e(n.h2,{children:"Setup lsp server"}),`
`,e(n.p,{get children(){return["Before starting, it is strongly recommended that you walk through the LSP configuration ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"lspconfig repository"}),"."]}}),`
`,e(n.p,{get children(){return["Then check ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md",children:"configs.md"})," to make sure your language's LSP server is present there."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"Plugin table"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[`{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"configs.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]}})}}),`
`,s(t),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"configs/lspconfig.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"nvchad.configs.lspconfig"'}),`).defaults()

`,e(n.span,{className:"hljs-keyword",children:"local"})," servers = { ",e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"cssls"'}),` }
vim.lsp.enable(servers)

`,e(n.span,{className:"hljs-comment",children:"-- to configure lsps further read :h vim.lsp.config"}),`
`]}})}}),`
`,e(n.h2,{children:"Mason.nvim"}),`
`,e(n.p,{get children(){return["Run the ",e(n.code,{children:"MasonInstallAll"})," command"]}}),`
`,s(t),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return["Once the binaries are installed, you will have to configure them to properly work with LSP, conform.nvim, nvim-lint, nvim-dap etc. It depends on what you installed. ",(()=>{var l=s(d);return h(l,e(n.strong,{children:"NvChad does not provide any language configuration aside from lua"})),l})(),"."]}}),`
`]}})]}function p(r={}){const{wrapper:n}={...c(),...r.components};return n?e(n,o(r,{get children(){return e(a,r)}})):a(r)}export{p as default,g as meta};
