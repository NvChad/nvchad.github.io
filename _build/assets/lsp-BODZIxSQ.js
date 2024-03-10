import{b as e,q as o,k as a,t as c,m as h}from"./web-CBU83r8B.js";import{M as t}from"./index-C2YDUEaq.js";var r=c("<br>"),d=c("<u>");const g={title:"NvChad Lsp Configuration",desc:"Manage lsp servers & mason.nvim in NvChad"};function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...s.components};return[e(n.h2,{children:"Setup lsp server"}),`
`,e(n.p,{get children(){return["Before starting, it is strongly recommended that you walk through the LSP configuration ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"lspconfig repository"}),"."]}}),`
`,e(n.p,{get children(){return["Then check ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's LSP server is present there."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"Plugin table"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- In order to modify the `lspconfig` configuration:"}),`
{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"nvchad.configs.lspconfig"'}),`).defaults()
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"configs.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]}})}}),`
`,a(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"configs/lspconfig.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"})," configs = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"nvchad.configs.lspconfig"'}),`)

`,e(n.span,{className:"hljs-keyword",children:"local"}),` on_attach = configs.on_attach
`,e(n.span,{className:"hljs-keyword",children:"local"}),` on_init = configs.on_init
`,e(n.span,{className:"hljs-keyword",children:"local"}),` capabilities = configs.capabilities

`,e(n.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"lspconfig"'}),`
`,e(n.span,{className:"hljs-keyword",children:"local"})," servers = { ",e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"cssls"'}),", ",e(n.span,{className:"hljs-string",children:'"clangd"'}),`}

`,e(n.span,{className:"hljs-keyword",children:"for"})," _, lsp ",e(n.span,{className:"hljs-keyword",children:"in"})," ",e(n.span,{className:"hljs-built_in",children:"ipairs"}),"(servers) ",e(n.span,{className:"hljs-keyword",children:"do"}),`
  lspconfig[lsp].setup {
    on_init = on_init,
    on_attach = on_attach,
    capabilities = capabilities,
  }
`,e(n.span,{className:"hljs-keyword",children:"end"}),`

`,e(n.span,{className:"hljs-comment",children:"-- Without the loop, you would have to manually set up each LSP "}),`
`,e(n.span,{className:"hljs-comment",children:"-- "}),`
`,e(n.span,{className:"hljs-comment",children:"-- lspconfig.html.setup {"}),`
`,e(n.span,{className:"hljs-comment",children:"--   on_attach = on_attach,"}),`
`,e(n.span,{className:"hljs-comment",children:"--   capabilities = capabilities,"}),`
`,e(n.span,{className:"hljs-comment",children:"-- }"}),`
`,e(n.span,{className:"hljs-comment",children:"--"}),`
`,e(n.span,{className:"hljs-comment",children:"-- lspconfig.cssls.setup {"}),`
`,e(n.span,{className:"hljs-comment",children:"--   on_attach = on_attach,"}),`
`,e(n.span,{className:"hljs-comment",children:"--   capabilities = capabilities,"}),`
`,e(n.span,{className:"hljs-comment",children:"-- }"}),`
`]}})}}),`
`,e(n.h2,{children:"Mason.nvim"}),`
`,e(n.p,{get children(){return["The ",e(n.code,{children:"mason.nvim"})," plugin is used to download LSP servers, formatters, linters, and debug adapters. It's better to list all your required packages in your Mason override config, so they automatically download when running ",e(n.code,{children:"MasonInstallAll"})," command."]}}),`
`,e(n.p,{get children(){return["You can find the exact name of the LSP packages using ",e(n.code,{children:":Mason"}),", that will open a window."]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[` {
   `,e(n.span,{className:"hljs-string",children:'"williamboman/mason.nvim"'}),`,
   opts = {
      ensure_installed = {
        `,e(n.span,{className:"hljs-string",children:'"lua-language-server"'}),`,
        `,e(n.span,{className:"hljs-string",children:'"html-lsp"'}),`,
        `,e(n.span,{className:"hljs-string",children:'"prettier"'}),`,
        `,e(n.span,{className:"hljs-string",children:'"stylua"'}),`
      },
    },
  }
`]}})}}),`
`,a(r),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return["Once the binaries are installed, you will have to configure them to properly work with LSP, conform.nvim, nvim-lint, nvim-dap etc. It depends on what you installed. ",(()=>{var l=a(d);return h(l,e(n.strong,{children:"NvChad does not provide any language configuration aside from lua"})),l})(),"."]}}),`
`]}})]}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e(n,o(s,{get children(){return e(i,s)}})):i(s)}export{u as default,g as meta};
