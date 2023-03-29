import{b as e,q as o,g as l,i as h,t as c}from"./entry-client-e2f7a0db.js";import{M as t}from"./index-122662dd.js";const r=c("<br>",1),d=c("<u></u>",2);function i(s){const n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",span:"span",blockquote:"blockquote"},t(),s.components);return[e(n.h2,{children:"Setup lsp server"}),`
`,e(n.p,{get children(){return["Before starting, it is strongly recommended that you walk through the LSP configuration: ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig",get children(){return[e(n.code,{children:"lspconfig"})," repository"]}}),"."]}}),`
`,e(n.p,{get children(){return["Then check ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's LSP server is present there."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"custom/plugins.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- In order to modify the `lspconfig` configuration:"}),`
{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.configs.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]}})}}),`
`,l(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"custom/configs/lspconfig.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"})," on_attach = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).on_attach
`,e(n.span,{className:"hljs-keyword",children:"local"})," capabilities = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).capabilities

`,e(n.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"lspconfig"'}),`
`,e(n.span,{className:"hljs-keyword",children:"local"})," servers = { ",e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"cssls"'}),", ",e(n.span,{className:"hljs-string",children:'"clangd"'}),`}

`,e(n.span,{className:"hljs-keyword",children:"for"})," _, lsp ",e(n.span,{className:"hljs-keyword",children:"in"})," ",e(n.span,{className:"hljs-built_in",children:"ipairs"}),"(servers) ",e(n.span,{className:"hljs-keyword",children:"do"}),`
  lspconfig[lsp].setup {
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
`,e(n.p,{get children(){return["The ",e(n.code,{children:"mason.nvim"})," plugin is used to install LSP servers, formatters, linters, and debug adapters. It's better to list all your required packages in your Mason override config, so they automatically install when running ",e(n.code,{children:"MasonInstallAll"})," command."]}}),`
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
`,l(r),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return["Once the binaries are installed, you will have to configure them to properly work with LSP, null-ls, nvim-dap etc. It depends on what you installed. ",(()=>{const a=l(d);return h(a,e(n.strong,{children:"NvChad does not provide any language configuration aside from lua"})),a})(),"."]}}),`
`]}})]}function u(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e(n,o(s,{get children(){return e(i,s)}})):i(s)}export{u as default};
