import{b as n,n as t,g as l,t as c}from"./entry-client-f7fd553f.js";import{M as i}from"./index-6ceddcc7.js";const a=c("<br>");function r(s){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li"},i(),s.components);return[n(e.h2,{children:"Statusline & tabufline"}),`
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
`,n(e.h3,{children:"Override statusline modules"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To override default list of statusline modules, you need to check their indexes in the modules table ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v2.0/lua/nvchad/statusline",get children(){return["our ",n(e.code,{children:"statusline"})," modules file"]}})]}}),`
`,n(e.li,{children:"you can either define a function outside or just define & run it right away like below :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  statusline = {
    `,n(e.span,{className:"hljs-comment",children:"-- modules arg here is the default table of modules"}),`
    overriden_modules = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(modules)"})]}}),`
      modules[`,n(e.span,{className:"hljs-number",children:"1"}),"] = (",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
        `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-string",children:'"MODE!"'}),`
      `,n(e.span,{className:"hljs-keyword",children:"end"}),`)()

      `,n(e.span,{className:"hljs-comment",children:"-- define the somefunction anywhwere in your custom dir, just call it well!"}),`
      `,n(e.span,{className:"hljs-comment",children:"-- modules[2] = somefunction()  "}),`

      `,n(e.span,{className:"hljs-comment",children:"-- adding a module between 2 modules"}),`
      `,n(e.span,{className:"hljs-comment",children:"-- Use the table.insert functin to insert at specific index"}),`
      `,n(e.span,{className:"hljs-comment",children:"-- This will insert a new module at index 2 and previous index 2 will become 3 now"}),`

      `,n(e.span,{className:"hljs-built_in",children:"table"}),".",n(e.span,{className:"hljs-built_in",children:"insert"}),`(
        modules,
        `,n(e.span,{className:"hljs-number",children:"2"}),`,
        (`,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
          `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-string",children:'" between mode and filename ! "'}),`
        `,n(e.span,{className:"hljs-keyword",children:"end"}),`)()
      )
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  },
}
`]}})}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"To highlight a string in statusline, wrap it with your highlight group:"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-string",children:'"%#BruhHl#"'})," .. ",n(e.span,{className:"hljs-string",children:'" bruh "'})," ",n(e.span,{className:"hljs-comment",children:"-- the highlight group here is BruhHl"}),`
`]}})}}),`
`,n(e.h3,{children:"Override tabufline modules"}),`
`,n(e.p,{get children(){return["The configuration for overriding ",n(e.code,{children:"tabufline"})," is the same as in ",n(e.code,{children:"statusline"}),":"]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Below code will hide module at index 4 as it returns an empty string, (hiding buttons module)"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  tabufline = {
    overriden_modules = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(modules)"})]}}),`
      modules[`,n(e.span,{className:"hljs-number",children:"4"}),"] = (",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
        `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-string",children:'""'}),`
      `,n(e.span,{className:"hljs-keyword",children:"end"}),`)()

    `,n(e.span,{className:"hljs-comment",children:"-- or table.remove(modules, 4)"}),`
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  },
}
`]}})}}),`
`,l(a),`
`,n(e.p,{get children(){return["Again, check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v2.0/lua/nvchad/tabufline",children:"our tabufline modules file"}),"."]}})]}function o(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?n(e,t(s,{get children(){return n(r,s)}})):r(s)}export{o as default};
