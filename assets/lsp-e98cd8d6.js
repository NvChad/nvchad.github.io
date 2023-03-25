import{b as e,q as r,g as l,t}from"./entry-client-a6386263.js";import{M as c}from"./index-7e16e971.js";const a=t("<br>",1);function i(s){const n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},c(),s.components);return[e(n.h2,{children:"Setup lsp server"}),`
`,e(n.p,{get children(){return["Before starting, it is strongly recommended that you walk through the LSP configuration: ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig",get children(){return[e(n.code,{children:"lspconfig"})," repository"]}}),". Then check ",e(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's LSP server is present there. You can install LSP servers manually or through ",e(n.code,{children:"mason.nvim"})," (recommended option)."]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- In order to modify the `lspconfig` configuration:"}),`
{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.plugins.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]}})}}),`
`,l(a),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- custom/configs/lspconfig.lua"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"})," on_attach = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).on_attach
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
`,e(n.p,{get children(){return["The ",e(n.code,{children:"mason.nvim"})," plugin is used to install LSP servers, formatters, linters, and debug adapters. It's better to list all your required packages and put them into your Mason override config, so they are automatically installed when running ",e(n.code,{children:"MasonInstallAll"}),". You can find the exact name of the LSP packages using ",e(n.code,{children:":Mason"}),", that will open a window."]}}),`
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
`,l(a),`
`,e(n.p,{get children(){return["After modifying ",e(n.code,{children:"mason"}),"'s configuration, do:"]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Run ",e(n.code,{children:"nvim +MasonInstallAll"}),". This will install the listed binaries in the ",e(n.code,{children:"ensure_installed"})," table."]}}),`
`]}}),`
`,e(n.p,{children:"Once the binaries are installed, you will have to configure them to properly work with LSP. NvChad does not provide any language configuration aside from lua."})]}function d(s={}){const{wrapper:n}=Object.assign({},c(),s.components);return n?e(n,r(s,{get children(){return e(i,s)}})):i(s)}export{d as default};
