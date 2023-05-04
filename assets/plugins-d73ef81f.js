import{b as n,q as r,g as s,t as c}from"./entry-client-ed02b346.js";import{M as t}from"./index-a27ef57d.js";const a=c("<br>",1);function i(l){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre",span:"span"},t(),l.components);return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{get children(){return["NvChad uses ",n(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management. Basically, NvChad expects a user plugin table, which then gets merged with the default plugins table. You can find the default table in: ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/plugins/init.lua",get children(){return n(e.code,{children:"lua/plugins/init.lua"})}}),"."]}}),`
`,n(e.h2,{children:"Lazy loading"}),`
`,n(e.p,{children:"We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as its efficient in reducing startuptime."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"We don't want users making NvChad slow just because they didn't lazy load plugins they've added."}),`
`,n(e.li,{get children(){return["Please read the ",n(e.a,{href:"https://github.com/folke/lazy.nvim#-plugin-spec",children:"lazy.nvim plugin specs"})," docs to know what options are available for lazyloading etc."]}}),`
`,n(e.li,{children:"Try your best to lazy-load a plugin!"}),`
`]}}),`
`,n(e.h2,{children:"Manage custom plugins"}),`
`,n(e.p,{get children(){return["All NvChad default plugins will have ",n(e.code,{children:"lazy = true"})," set. Therefore, if you want a plugin to be enabled on startup, change it to ",n(e.code,{children:"lazy = false"}),"."]}}),`
`,n(e.p,{get children(){return["It is recommended that you avoid saving any files in the ",n(e.code,{children:"custom/plugins/*"})," directory."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["Our system utilizes the import feature provided by",n(e.code,{children:"lazy.nvim"}),", which imports all files in a directory and expects each file to return plugin tables. This behavior is undesirable for our purposes, so it is recommendeed to create a single file named ",n(e.strong,{children:"custom/plugins.lua"}),". This file will be imported by ",n(e.code,{children:"lazy.nvim"}),", and no other files in the directory will be processed."]}}),`
`]}}),`
`,s(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.strong,{children:"custom/chadrc.lua"})}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return["M.plugins = ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),`
`,s(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.strong,{children:"custom/plugins.lua"})}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"local"}),` plugins = {

  { `,n(e.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",n(e.span,{className:"hljs-literal",children:"false"})," },  ",n(e.span,{className:"hljs-comment",children:"-- load a plugin at startup"}),`

  `,n(e.span,{className:"hljs-comment",children:"-- You can use any plugin specification from lazy.nvim"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,n(e.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",n(e.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.truezen"'})," ",n(e.span,{className:"hljs-comment",children:"-- just an example path"}),`
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  },

  `,n(e.span,{className:"hljs-comment",children:"-- this opts will extend the default opts "}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"css"'}),", ",n(e.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },

  `,n(e.span,{className:"hljs-comment",children:"-- if you load some function or module within your opt, wrap it with a function"}),`
  {
   `,n(e.span,{className:"hljs-string",children:'"nvim-telescope/telescope.nvim"'}),`,
   opts = {
     defaults = {
       mappings = {
         i = {
           [`,n(e.span,{className:"hljs-string",children:'"<esc>"'}),"] = ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(...)"})]}}),`
               `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"telescope.actions"'}),").",n(e.span,{className:"hljs-built_in",children:"close"}),`(...)
            `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
          },
        },
      },
    },
   },

   {
     `,n(e.span,{className:"hljs-string",children:'"folke/which-key.nvim"'}),`,
     enabled = `,n(e.span,{className:"hljs-literal",children:"false"}),`,
   }

}

`,n(e.span,{className:"hljs-keyword",children:"return"}),` plugins
`]}})}})]}function d(l={}){const{wrapper:e}=Object.assign({},t(),l.components);return e?n(e,r(l,{get children(){return n(i,l)}})):i(l)}export{d as default};
