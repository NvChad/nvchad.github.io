import{M as a}from"./index-yHsRVhWw.js";import{b as n,q as t}from"./web-DqPol8Cv.js";const c={title:"NvChad Plugins",desc:"Maintain plugins in NvChad"};function l(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...s.components};return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{get children(){return["NvChad uses ",n(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management. List of ",n(e.a,{href:"https://github.com/NvChad/NvChad/tree/v2.5/lua/nvchad/plugins",children:"default plugins"}),"."]}}),`
`,n(e.h2,{children:"Lazy loading"}),`
`,n(e.p,{children:`We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as it's
efficient in reducing startup-time.`}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"We don't want users making NvChad slow just because they didn't lazy load plugins they've added."}),`
`,n(e.li,{get children(){return["Please read the ",n(e.a,{href:"https://lazy.folke.io/spec",children:"lazy.nvim plugin specs"})," docs to know what options are available for lazyloading etc."]}}),`
`,n(e.li,{children:"Try your best to lazy-load a plugin!"}),`
`]}}),`
`,n(e.h2,{children:"Manage plugins"}),`
`,n(e.p,{get children(){return["All NvChad default plugins will have ",n(e.code,{children:"lazy = true"})," set. Therefore, if you want a plugin to be enabled on startup, change it to ",n(e.code,{children:"lazy = false"}),"."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Read official ",n(e.a,{href:"https://lazy.folke.io/spec/examples",children:"lazy doc"})," examples"]}}),`
`,n(e.li,{get children(){return n(e.strong,{children:"plugins/anyname.lua"})}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"return"}),` {
  { `,n(e.span,{className:"hljs-string",children:'"folke/which-key.nvim"'}),",  enabled = ",n(e.span,{className:"hljs-literal",children:"false"})," }, ",n(e.span,{className:"hljs-comment",children:"-- disable a default nvchad plugin"}),`

  `,n(e.span,{className:"hljs-comment",children:"-- this opts will extend the default opts "}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = { ensure_installed = {`,n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"css"'}),", ",n(e.span,{className:"hljs-string",children:'"bash"'}),`} },
  }, 

  `,n(e.span,{className:"hljs-comment",children:"-- If your opts uses a function call ex: require*, then make opts spec a function"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- Then modify the opts arg"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-telescope/telescope.nvim"'}),`,
    opts = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(_, conf)"})]}}),`
      conf.defaults.mappings.i = {
        [`,n(e.span,{className:"hljs-string",children:'"<C-j>"'}),"] = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"telescope.actions"'}),`).move_selection_next,
        [`,n(e.span,{className:"hljs-string",children:'"<Esc>"'}),"] = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"telescope.actions"'}),").",n(e.span,{className:"hljs-built_in",children:"close"}),`,
      }

     `,n(e.span,{className:"hljs-comment",children:"-- or "}),`
     `,n(e.span,{className:"hljs-comment",children:"-- table.insert(conf.defaults.mappings.i, your table)"}),`
      `,n(e.span,{className:"hljs-keyword",children:"return"}),` conf
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  }
}
`]}})}})]}function h(s={}){const{wrapper:e}={...a(),...s.components};return e?n(e,t(s,{get children(){return n(l,s)}})):l(s)}export{h as default,c as meta};
