import{b as n,m as r,i as l,t as c}from"./web-DScAkgcG.js";import{M as t}from"./index-CYDpJFld.js";var a=c("<br>");function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...s.components};return[n(e.h2,{children:"Overview"}),`
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
`,n(e.p,{get children(){return["It is recommended that you avoid saving any files in the ",n(e.code,{children:"lua/plugins/*"})," directory."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["Our system utilizes the import feature provided by",n(e.code,{children:"lazy.nvim"}),", which imports all files in a directory and expects each file to return plugin tables. This behavior is undesirable for our purposes, so it is recommended to create a single file named ",n(e.strong,{children:"custom/plugins.lua"}),". This file will be imported by ",n(e.code,{children:"lazy.nvim"}),", and no other files in the directory will be processed."]}}),`
`]}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.strong,{children:"custom/chadrc.lua"})}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return["M.plugins = ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),`
`,l(a),`
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
  
  {
    `,n(e.span,{className:"hljs-string",children:'"folke/which-key.nvim"'}),`,
    enabled = `,n(e.span,{className:"hljs-literal",children:"false"}),`,
  },

  `,n(e.span,{className:"hljs-comment",children:"-- If your opts uses a function call, then make opts spec a function*"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- should return the modified default config as well"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- here we just call the default telescope config "}),`
  `,n(e.span,{className:"hljs-comment",children:"-- and then assign a function to some of its options"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-telescope/telescope.nvim"'}),`,
    opts = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
      `,n(e.span,{className:"hljs-keyword",children:"local"})," conf = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"plugins.configs.telescope"'}),`
      conf.defaults.mappings.i = {
        [`,n(e.span,{className:"hljs-string",children:'"<C-j>"'}),"] = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"telescope.actions"'}),`).move_selection_next,
        [`,n(e.span,{className:"hljs-string",children:'"<Esc>"'}),"] = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"telescope.actions"'}),").",n(e.span,{className:"hljs-built_in",children:"close"}),`,
      }

      `,n(e.span,{className:"hljs-keyword",children:"return"}),` conf
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  }
}

`,n(e.span,{className:"hljs-keyword",children:"return"}),` plugins
`]}})}})]}function d(s={}){const{wrapper:e}={...t(),...s.components};return e?n(e,r(s,{get children(){return n(i,s)}})):i(s)}export{d as default};
