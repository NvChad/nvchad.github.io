import{b as n,q as i,g as r,t}from"./entry-client-1875b987.js";import{M as a}from"./index-fd5f6a83.js";const c=t("<br>",1);function l(s){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",span:"span"},a(),s.components);return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{get children(){return["NvChad uses ",n(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management. Basically, NvChad expects a user plugin table, which then gets merged with the default plugins table. You can find the table in: ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/plugins/init.lua",get children(){return n(e.code,{children:"lua/plugins/init.lua"})}}),"."]}}),`
`,n(e.h2,{children:"Lazy loading"}),`
`,n(e.p,{children:"We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as its efficient in reducing startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!"}),`
`,n(e.h3,{children:"Tips"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"cmd"}),":"]}})," If a plugin loads on commands, then use the ",n(e.code,{children:"cmd"})," spec. For example, the ",n(e.code,{children:"trouble.nvim"})," plugin opens when the command ",n(e.code,{children:"Trouble"})," is run. Therefore, we would write the word ",n(e.code,{children:"Trouble"})," in the ",n(e.code,{children:"cmd"})," spec of the ",n(e.code,{children:"trouble.nvim"})," plugin configuration."]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"event"}),":"]}})," Use this spec if you want to load a plugin on certain vim event (check ",n(e.code,{children:":h events"}),"). For example, the ",n(e.code,{children:"cmp.nvim"})," plugin is useful when we're in insert mode, so it is lazyload it at the ",n(e.code,{children:"InsertEnter"})," event."]}}),`
`]}}),`
`,n(e.p,{get children(){return["There are more specs through which you could do lazy-loading like ",n(e.code,{children:"ft"}),", ",n(e.code,{children:"config"})," and ",n(e.code,{children:"keys"}),"."]}}),`
`,n(e.h2,{children:"Managing custom plugins"}),`
`,n(e.p,{get children(){return["All NvChad default plugins will have ",n(e.code,{children:"lazy = true"})," set. Therefore, if you want a plugin to be enabled on startup, change it to ",n(e.code,{children:"lazy = false"}),"."]}}),`
`,r(c),`
`,n(e.p,{get children(){return["It is recommended that you avoid saving any files in the ",n(e.code,{children:"custom/plugins/*"})," directory. Our system utilizes the import feature provided by",n(e.code,{children:"lazy.nvim"}),", which imports all files in a directory and expects each file to return plugin tables. This behavior is undesirable for our purposes, so it is recommendeed to create a single file named ",n(e.code,{children:"custom/plugins.lua"}),". This file will be imported by ",n(e.code,{children:"lazy.nvim"}),", and no other files in the directory will be processed."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- custom/chadrc.lua"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- custom/plugins.lua"}),`
`,n(e.span,{className:"hljs-keyword",children:"return"}),` {
  `,n(e.span,{className:"hljs-comment",children:"-- Install plugin"}),`
  { `,n(e.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",n(e.span,{className:"hljs-literal",children:"false"}),` },

  `,n(e.span,{className:"hljs-comment",children:"-- You can use any plugin specification from lazy.nvim"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,n(e.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",n(e.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.truezen"'}),`
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  }

  `,n(e.span,{className:"hljs-comment",children:"-- opts overrides all default plugin configurations"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"css"'}),", ",n(e.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },

  `,n(e.span,{className:"hljs-comment",children:"-- It is also possible to wrap opts with a function because it is required"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- to load the cmp module. If it wasn't done, then the code would run on startup"}),`
   {
    `,n(e.span,{className:"hljs-string",children:'"hrsh7th/nvim-cmp"'}),`,
    opts = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
      `,n(e.span,{className:"hljs-keyword",children:"local"})," cmp = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"cmp"'}),`

      `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
        mapping = {
          [`,n(e.span,{className:"hljs-string",children:'"<C-d>"'}),"] = cmp.mapping.scroll_docs(",n(e.span,{className:"hljs-number",children:"-8"}),`),
        },
      }
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
   },
}
`]}})}})]}function o(s={}){const{wrapper:e}=Object.assign({},a(),s.components);return e?n(e,i(s,{get children(){return n(l,s)}})):l(s)}export{o as default};
