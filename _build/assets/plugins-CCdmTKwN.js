import{M as a}from"./index-C2YDUEaq.js";import{b as e,q as i}from"./web-CBU83r8B.js";const r={title:"NvChad Plugins",desc:"Maintain plugins in NvChad"};function l(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...s.components};return[e(n.h2,{children:"Overview"}),`
`,e(n.p,{get children(){return["NvChad uses ",e(n.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management. List of ",e(n.a,{href:"https://github.com/NvChad/NvChad/tree/v2.5/lua/nvchad/plugins",children:"default plugins"}),"."]}}),`
`,e(n.h2,{children:"Lazy loading"}),`
`,e(n.p,{children:`We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as it's
efficient in reducing startup-time.`}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"We don't want users making NvChad slow just because they didn't lazy load plugins they've added."}),`
`,e(n.li,{get children(){return["Please read the ",e(n.a,{href:"https://github.com/folke/lazy.nvim#-plugin-spec",children:"lazy.nvim plugin specs"})," docs to know what options are available for lazyloading etc."]}}),`
`,e(n.li,{children:"Try your best to lazy-load a plugin!"}),`
`]}}),`
`,e(n.h2,{children:"Manage plugins"}),`
`,e(n.p,{get children(){return["All NvChad default plugins will have ",e(n.code,{children:"lazy = true"})," set. Therefore, if you want a plugin to be enabled on startup, change it to ",e(n.code,{children:"lazy = false"}),"."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"plugins/anyname.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` plugins = {

  { `,e(n.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",e(n.span,{className:"hljs-literal",children:"false"})," },  ",e(n.span,{className:"hljs-comment",children:"-- load a plugin at startup"}),`

  `,e(n.span,{className:"hljs-comment",children:"-- You can use any plugin specification from lazy.nvim"}),`
  {
    `,e(n.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,e(n.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",e(n.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.configs.truezen"'})," ",e(n.span,{className:"hljs-comment",children:"-- just an example path"}),`
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
  },

  `,e(n.span,{className:"hljs-comment",children:"-- this opts will extend the default opts "}),`
  {
    `,e(n.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"css"'}),", ",e(n.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },
  
  {
    `,e(n.span,{className:"hljs-string",children:'"folke/which-key.nvim"'}),`,
    enabled = `,e(n.span,{className:"hljs-literal",children:"false"}),`,
  },

  `,e(n.span,{className:"hljs-comment",children:"-- If your opts uses a function call ex: require*, then make opts spec a function"}),`
  `,e(n.span,{className:"hljs-comment",children:"-- should return the modified default config as well"}),`
  `,e(n.span,{className:"hljs-comment",children:"-- here we just call the default telescope config "}),`
  `,e(n.span,{className:"hljs-comment",children:"-- And edit its mappinsg"}),`
  {
    `,e(n.span,{className:"hljs-string",children:'"nvim-telescope/telescope.nvim"'}),`,
    opts = `,e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
      `,e(n.span,{className:"hljs-keyword",children:"local"})," conf = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"nvchad.configs.telescope"'}),`

      conf.defaults.mappings.i = {
        [`,e(n.span,{className:"hljs-string",children:'"<C-j>"'}),"] = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"telescope.actions"'}),`).move_selection_next,
        [`,e(n.span,{className:"hljs-string",children:'"<Esc>"'}),"] = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"telescope.actions"'}),").",e(n.span,{className:"hljs-built_in",children:"close"}),`,
      }

     `,e(n.span,{className:"hljs-comment",children:"-- or "}),`
     `,e(n.span,{className:"hljs-comment",children:"-- table.insert(conf.defaults.mappings.i, your table)"}),`

      `,e(n.span,{className:"hljs-keyword",children:"return"}),` conf
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
  }
}

`,e(n.span,{className:"hljs-keyword",children:"return"}),` plugins
`]}})}})]}function h(s={}){const{wrapper:n}={...a(),...s.components};return n?e(n,i(s,{get children(){return e(l,s)}})):l(s)}export{h as default,r as meta};
