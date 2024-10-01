import{b as e,q as o,k as l,t as i,m as h}from"./web-DqPol8Cv.js";import{M as t}from"./index-yHsRVhWw.js";var r=i("<br>"),d=i("<u>");const u={title:"NvChad Lsp Configuration",desc:"Manage lsp servers & mason.nvim in NvChad"};function c(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...s.components};return[e(n.h2,{children:"Setup lsp server"}),`
`,e(n.p,{get children(){return["Before starting, it is strongly recommended that you walk through the LSP configuration ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"lspconfig repository"}),"."]}}),`
`,e(n.p,{get children(){return["Then check ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's LSP server is present there."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"Plugin table"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- In order to modify the `lspconfig` configuration:"}),`
{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"configs.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]}})}}),`
`,l(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"configs/lspconfig.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"})," nvlsp = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"nvchad.configs.lspconfig"'}),`
`,e(n.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"lspconfig"'}),`

nvlsp.defaults() `,e(n.span,{className:"hljs-comment",children:"-- loads nvchad's defaults"}),`

`,e(n.span,{className:"hljs-keyword",children:"local"})," servers = { ",e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"cssls"'}),", ",e(n.span,{className:"hljs-string",children:'"clangd"'}),` }

`,e(n.span,{className:"hljs-comment",children:"-- lsps with default config"}),`
`,e(n.span,{className:"hljs-keyword",children:"for"})," _, lsp ",e(n.span,{className:"hljs-keyword",children:"in"})," ",e(n.span,{className:"hljs-built_in",children:"ipairs"}),"(servers) ",e(n.span,{className:"hljs-keyword",children:"do"}),`
  lspconfig[lsp].setup {
    on_attach = nvlsp.on_attach,
    on_init = nvlsp.on_init,
    capabilities = nvlsp.capabilities,
  }
`,e(n.span,{className:"hljs-keyword",children:"end"}),`

`,e(n.span,{className:"hljs-comment",children:"-- Without the loop, you would have to manually set up each LSP "}),`
`,e(n.span,{className:"hljs-comment",children:"-- "}),`
`,e(n.span,{className:"hljs-comment",children:"-- lspconfig.html.setup {"}),`
`,e(n.span,{className:"hljs-comment",children:"--   on_attach = nvlsp.on_attach,"}),`
`,e(n.span,{className:"hljs-comment",children:"--   capabilities = nvlsp.capabilities,"}),`
`,e(n.span,{className:"hljs-comment",children:"-- }"}),`
`]}})}}),`
`,e(n.h2,{children:"Mason.nvim"}),`
`,e(n.p,{get children(){return["Run the ",e(n.code,{children:"MasonInstallAll"})," command"]}}),`
`,l(r),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return["Once the binaries are installed, you will have to configure them to properly work with LSP, conform.nvim, nvim-lint, nvim-dap etc. It depends on what you installed. ",(()=>{var a=l(d);return h(a,e(n.strong,{children:"NvChad does not provide any language configuration aside from lua"})),a})(),"."]}}),`
`]}})]}function g(s={}){const{wrapper:n}={...t(),...s.components};return n?e(n,o(s,{get children(){return e(c,s)}})):c(s)}export{g as default,u as meta};
