import{b as n,q as i,g as l,t as c}from"./entry-client-b32c7a1d.js";import{M as t}from"./index-b3f414e3.js";const a=c("<br>");function r(s){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",h3:"h3"},t(),s.components);return[n(e.h2,{children:"Statusline & tabufline"}),`
`,n(e.p,{get children(){return["We use our own ",n(e.a,{href:"https://github.com/NvChad/ui",children:"plugin"})," for ",n(e.code,{children:"statusline"})," and ",n(e.code,{children:"tabufline"}),". The default config is (keep in mind that every plugin's default config is just a table):"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  `,n(e.span,{className:"hljs-comment",children:"-- ...other options"}),`

  statusline = {
    theme = `,n(e.span,{className:"hljs-string",children:'"default"'}),", ",n(e.span,{className:"hljs-comment",children:"-- default/vscode/vscode_colored/minimal"}),`

    `,n(e.span,{className:"hljs-comment",children:'-- default/round/block/arrow (separators work only for "default" statusline theme;'}),`
    `,n(e.span,{className:"hljs-comment",children:"-- round and block will work for the minimal theme only)"}),`
    separator_style = `,n(e.span,{className:"hljs-string",children:'"default"'}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  tabufline = {
    lazyload = `,n(e.span,{className:"hljs-literal",children:"true"}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  `,n(e.span,{className:"hljs-comment",children:"-- ...other options"}),`
}
`]}})}}),`
`,n(e.h3,{get children(){return["Override ",n(e.code,{children:"statusline"})," modules"]}}),`
`,n(e.p,{children:"It is also possible to override the plugin's configuration:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  statusline = {
    overriden_modules = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
      `,n(e.span,{className:"hljs-keyword",children:"local"})," st_modules = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"nvchad_ui.statusline.default"'}),`
      `,n(e.span,{className:"hljs-comment",children:"-- this is just default table of statusline modules"}),`
  
      `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
        mode = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
          `,n(e.span,{className:"hljs-keyword",children:"return"})," st_modules.mode() .. ",n(e.span,{className:"hljs-string",children:'" bruh "'}),` 
          `,n(e.span,{className:"hljs-comment",children:'-- or just return "" to hide this module'}),`
        `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
      }
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  },
}
`]}})}}),`
`,l(a),`
`,n(e.p,{get children(){return["It is recommended to check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v2.0/lua/nvchad_ui/statusline",get children(){return["our ",n(e.code,{children:"statusline"})," modules file"]}}),'. In the above code, you can see that we want to print "bruh" next to the mode module, in the statusline. In order to add highlight group to your text, do:']}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-string",children:'"%#BruhHl#"'})," .. ",n(e.span,{className:"hljs-string",children:'" bruh "'})," ",n(e.span,{className:"hljs-comment",children:"-- the highlight group here is BruhHl"}),`
`]}})}}),`
`,n(e.h3,{get children(){return["Override ",n(e.code,{children:"tabufline"})," modules"]}}),`
`,n(e.p,{get children(){return["The configuration for overriding ",n(e.code,{children:"tabufline"})," is the same as in ",n(e.code,{children:"statusline"}),":"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  tabufline = {
     overriden_modules = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
       `,n(e.span,{className:"hljs-keyword",children:"local"})," modules = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline.modules"'}),`
  
       `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
         buttons = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
           `,n(e.span,{className:"hljs-keyword",children:"return"})," modules.buttons() .. ",n(e.span,{className:"hljs-string",children:'" my button "'}),`
         `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
         `,n(e.span,{className:"hljs-comment",children:'-- or buttons = "" , this will hide the buttons'}),`
       }
     `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  },
}
`]}})}}),`
`,l(a),`
`,n(e.p,{get children(){return["Again, check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v2.0/lua/nvchad_ui/tabufline",children:"our tabufline modules file"}),"."]}})]}function o(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?n(e,i(s,{get children(){return n(r,s)}})):r(s)}export{o as default};
