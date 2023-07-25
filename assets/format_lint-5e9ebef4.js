import{b as e,q as t,g as s,t as c}from"./entry-client-91f37588.js";import{M as a}from"./index-a728405f.js";const r=c("<br>");function i(l){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li",a:"a"},a(),l.components);return[e(n.h2,{children:"Null-ls.nvim"}),`
`,e(n.p,{get children(){return["It is recommended that you install ",e(n.code,{children:"null-ls"}),` to manage formatting & linting.
Here's a possible install configuration for `,e(n.code,{children:"null-ls"}),":"]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[`{
  `,e(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,

   dependencies = {
     `,e(n.span,{className:"hljs-string",children:'"jose-elias-alvarez/null-ls.nvim"'}),`,
     `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
       `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.configs.null-ls"'}),`
     `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
   },
 
   `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.configs.lspconfig"'}),`
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
}
`]}})}}),`
`,s(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Dependencies are loaded after the original plugin (",e(n.code,{children:"lspconfig"})," in NvChad's case)."]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"null-ls"})," is loaded after ",e(n.code,{children:"lspconfig"})," as ",e(n.code,{children:"lspconfig"})," is lazy-loaded."]}}),`
`]}}),`
`,e(n.h2,{children:"Configuration"}),`
`,e(n.p,{get children(){return["Make sure to check ",e(n.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",get children(){return[e(n.code,{children:"null-ls"})," builtins"]}})," to get exact names for formatters, linters etc."]}}),`
`,e(n.p,{get children(){return["Here's an example configuration for ",e(n.code,{children:"null-ls"}),", following the NvChad file directory structure:"]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- custom/configs/null-ls.lua"}),`

`,e(n.span,{className:"hljs-keyword",children:"local"})," null_ls = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"null-ls"'}),`

`,e(n.span,{className:"hljs-keyword",children:"local"}),` formatting = null_ls.builtins.formatting
`,e(n.span,{className:"hljs-keyword",children:"local"}),` lint = null_ls.builtins.diagnostics

`,e(n.span,{className:"hljs-keyword",children:"local"}),` sources = {
   formatting.prettier,
   formatting.stylua,

   lint.shellcheck,
}

null_ls.setup {
   `,e(n.span,{className:"hljs-built_in",children:"debug"})," = ",e(n.span,{className:"hljs-literal",children:"true"}),`,
   sources = sources,
}
`]}})}}),`
`,s(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["Check ",e(n.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/wiki/Formatting-on-save",children:"null-ls docs"}),` for adding format on save.
Other things to take into account when configuring `,e(n.code,{children:"null-ls"})," for NvChad:"]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["This shortcut is defined for code formatting: ",e(n.code,{children:"<leader> + fm"}),"."]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["The linter, formatter or debugger that you will use in ",e(n.code,{children:"null-ls"})," configuration, has to be downloaded via ",e(n.code,{children:"mason"})," (that ensure_installed opt) or system wide."]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["Make sure the LSP servers for the filetypes are active for the relevant ",e(n.code,{children:"null-ls"})," formatter and/or linter to work."]}}),`
`]}}),`
`]}})]}function h(l={}){const{wrapper:n}=Object.assign({},a(),l.components);return n?e(n,t(l,{get children(){return e(i,l)}})):i(l)}export{h as default};
