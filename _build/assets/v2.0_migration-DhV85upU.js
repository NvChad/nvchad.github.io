import{b as n,q as h,k as l,t as a,m as o}from"./web-CBU83r8B.js";import{M as c}from"./index-C2YDUEaq.js";var d=a("<u>"),t=a("<br>");const m={title:"Breaking changes in v2.0",desc:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax.",cover:"v2.0_migration.svg"};function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...c(),...r.components};return[n(e.h1,{children:"Breaking changes in v2.0"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0_migration.svg",alt:"v2.0 poster"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old NvChad."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"To use v2.0, you have to delete all old Neovim dirs (backup custom dir) and then re-install NvChad again"}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Lazy.nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This release uses lazy.nvim instead of packer.nvim for plugin management."}),`
`,n(e.li,{get children(){return["The ",n(e.code,{children:"M.plugins"})," variable in chadrc expects a string now instead of table."]}}),`
`,n(e.li,{get children(){return["The string should be path of your file which returns a table, example : ",(()=>{var i=l(d);return o(i,n(e.strong,{children:"custom/plugins.lua"})),i})()]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"--  before "}),`
M.plugins = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"--  now"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),`
`,l(t),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:'Rename your custom plugins dir to something else, like configs etc. It shouldnt be "plugins" (as per our example)  and update the path in your custom plugins table.'}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Also old plugin syntax has some slight changes now (as per lazy.nvim's syntax)"}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before"}),`
[`,n(e.span,{className:"hljs-string",children:'"some plugin"'}),` ] = { options } 
 
`,n(e.span,{className:"hljs-comment",children:"-- now"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"some plugin"'}),`,
   options
}
`]}})}}),`
`,l(t),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://github.com/folke/lazy.nvim#examples",children:"lazy.nvim docs"})," to know how it works & its syntax."]}}),`
`]}}),`
`,n(e.h2,{children:"Override opts"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"override_opts"})," which was used to override default plugin configs is now ",n(e.code,{children:"opts"})]}}),`
`]}}),`
`,n(e.h2,{children:"NvChad ui options"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"These options can now be directly changed from chadrc file"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before "}),`
[`,n(e.span,{className:"hljs-string",children:'"NvChad/ui"'}),`] = {
     override_opts = {
         statusline = {
             separator_style  = `,n(e.span,{className:"hljs-string",children:'"round"'}),` 
          }
     }
}

`,n(e.span,{className:"hljs-comment",children:"-- now "}),`
M.ui = {
    statusline = {
         separator_style = `,n(e.span,{className:"hljs-string",children:'"round"'}),`
     }
}
`]}})}}),`
`,n(e.h2,{children:"Removed Alpha-nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Its replaced by our own dashboard module which has a simple config & is lightweight."}),`
`,n(e.li,{get children(){return["Check the NvDash config in the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",children:"default_config file"})]}}),`
`]}}),`
`,n(e.h2,{children:"Removed commands & mappings"}),`
`,n(e.p,{get children(){return["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ",n(e.a,{href:"http://nvchad.com/docs/api",children:"api functions docs"}),"."]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Removed commands"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Tbufpick , TbufLeft, TbufRight"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Removed mappings"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"\\"})," (to trigger tbufpick)."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"leader + tt"})," (for toggling themes)"]}}),`
`]}})]}function p(r={}){const{wrapper:e}={...c(),...r.components};return e?n(e,h(r,{get children(){return n(s,r)}})):s(r)}export{p as default,m as meta};
