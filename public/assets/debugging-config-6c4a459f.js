import{M as r}from"./index-995cd32a.js";import{b as n,q as o}from"./entry-client-9739558d.js";function i(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",a:"a"},r(),t.components);return[n(e.h2,{children:"Basic debugging"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["You can check the health of Neovim with the ",n(e.code,{children:"checkhealth"})," command."]}}),`
`,n(e.li,{children:"Make sure you dont have syntax errors in your custom config files"}),`
`,n(e.li,{children:"By default in NvChad sumneko lua LSP is enabled so it'll look for syntax errors etc for you."}),`
`]}}),`
`,n(e.h2,{children:"Before logging an issue"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/NvChad/NvChad/issues?q=is%3Aissue",children:"Search the GitHub issue list"})}}),`
`,n(e.li,{get children(){return["Then ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/new/choose",children:"log an issue, be sure to provide all prompted information"})]}}),`
`,n(e.li,{children:"If it's a plugin issue, then make sure you're familiar with the lazy loading of default NvChad plugins as that plugin might depend on the default plugin which is lazy loaded."}),`
`]}})]}function a(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n(e,o(t,{get children(){return n(i,t)}})):i(t)}export{a as default};
