import{b as e,q as t,g as s,t as a}from"./entry-client-debd7ce2.js";import{M as i}from"./index-f97cef65.js";const h=a("<kbd>Ctrl</kbd>",2),d=a("<kbd>Space</kbd>",2),o=a("<kbd>alt</kbd>",2),p=a("<kbd>shift</kbd>",2),r=a("<br>",1);function c(l){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",strong:"strong",blockquote:"blockquote"},i(),l.components);return[e(n.h2,{children:"Overview"}),`
`,e(n.p,{children:"The mapping configuration uses the nvim name shorcuts as:"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"<C>"})," -> ",s(h)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<leader>"})," -> ",s(d)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<A>"})," -> ",s(o)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<S>"})," -> ",s(p)]}}),`
`]}}),`
`,s(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["The default mappings are defined in ",e(n.code,{children:"core.mappings"})," (`core/mappings.lua)."]}}),`
`,e(n.li,{get children(){return["Alternatively, you can use ",e(n.code,{children:"NvCheatsheet"})," or ",e(n.code,{children:"Telescope keymaps"})," to list all mappings."]}}),`
`]}}),`
`,e(n.h2,{children:"Mapping format"}),`
`,e(n.p,{children:"In order to list custom shortcuts in NvCheatsheet, make sure to use the following format"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- opts is an optional parameter"}),`
[`,e(n.span,{className:"hljs-string",children:'"keys"'}),"] = {",e(n.span,{className:"hljs-string",children:'"action"'}),", ",e(n.span,{className:"hljs-string",children:'"description"'}),`, opts = {}},

[`,e(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",e(n.span,{className:"hljs-string",children:'"<cmd> NvimTreeToggle <CR>"'}),", ",e(n.span,{className:"hljs-string",children:'"Toggle nvimtree"'}),`},
[`,e(n.span,{className:"hljs-string",children:'"<leader>ff"'}),"] = {",e(n.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",e(n.span,{className:"hljs-string",children:'"Telescope"'}),`},   

`,e(n.span,{className:"hljs-comment",children:"-- opts can have the props: buffer, silent, noremap, nowait and so on."}),`
`,e(n.span,{className:"hljs-comment",children:"-- All standard key binding opts are supported. "}),`
[`,e(n.span,{className:"hljs-string",children:'";"'}),"] = { ",e(n.span,{className:"hljs-string",children:'":"'}),", ",e(n.span,{className:"hljs-string",children:'"enter cmdline"'}),", opts = { nowait = ",e(n.span,{className:"hljs-literal",children:"true"}),` } },

`,e(n.span,{className:"hljs-comment",children:"-- For a more complex keymap"}),`
[`,e(n.span,{className:"hljs-string",children:'"<leader>tt"'}),`] = {
  `,e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
     `,e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
  `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
  `,e(n.span,{className:"hljs-string",children:'"toggle transparency"'}),`,
},
`]}})}}),`
`,e(n.h2,{children:"Add new mappings"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`
`,e(n.p,{children:"In order to add or customize the mappings, make sure that you follow the expected file structure for NvChad."}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["The default mappings are loaded from ",e(n.code,{children:"core.mappings"}),", and it is recommended that you place your mappings inside ",e(n.code,{children:"custom.mappings"})," file."]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["Remember that the mappings ",e(n.strong,{children:"must"})," have a vim mode: ",e(n.code,{children:"n"})," (for normal), ",e(n.code,{children:"v"})," (for visual), ",e(n.code,{children:"i"})," (for insert) and so on."]}}),`
`]}}),`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return e(n.strong,{children:"custom/chadrc.lua"})}}),`
`]}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return["M.mappings = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.mappings"'}),`
`]}})}}),`
`,s(r),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return e(n.strong,{children:"custom/mappings.lua"})}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` M = {}

`,e(n.span,{className:"hljs-comment",children:"-- In order to disable a default keymap, use"}),`
M.disabled = {
  n = {
      [`,e(n.span,{className:"hljs-string",children:'"<leader>h"'}),"] = ",e(n.span,{className:"hljs-string",children:'""'}),`,
      [`,e(n.span,{className:"hljs-string",children:'"<C-a>"'}),"] = ",e(n.span,{className:"hljs-string",children:'""'}),`
  }
}

`,e(n.span,{className:"hljs-comment",children:"-- Your custom mappings"}),`
M.abc = {
  n = {
     [`,e(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",e(n.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",e(n.span,{className:"hljs-string",children:'"Telescope"'}),`}
     [`,e(n.span,{className:"hljs-string",children:'"<C-s>"'}),"] = {",e(n.span,{className:"hljs-string",children:'":Telescope Files <CR>"'}),", ",e(n.span,{className:"hljs-string",children:'"Telescope Files"'}),`} 
  }

  i = {
     [`,e(n.span,{className:"hljs-string",children:'"jk"'}),"] = { ",e(n.span,{className:"hljs-string",children:'"<ESC>"'}),", ",e(n.span,{className:"hljs-string",children:'"escape insert mode"'})," , opts = { nowait = ",e(n.span,{className:"hljs-literal",children:"true"}),` }},
    `,e(n.span,{className:"hljs-comment",children:"-- ..."}),`
  }
}

`,e(n.span,{className:"hljs-keyword",children:"return"}),` M
`]}})}}),`
`,s(r),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{children:"Mappings will be automatically loaded. You don't need to load them manually!"}),`
`]}}),`
`,e(n.h2,{children:"Manually load mappings"}),`
`,e(n.p,{children:"Even though it is not required, you can manually load your mappings"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[`M.some_plugin_name = {
  plugin = `,e(n.span,{className:"hljs-literal",children:"true"}),", ",e(n.span,{className:"hljs-comment",children:"-- Important"}),`

  n = {
     [`,e(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",e(n.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",e(n.span,{className:"hljs-string",children:'"Telescope"'}),`}
  }
}

`,e(n.span,{className:"hljs-comment",children:"-- Now to load it "}),`
`,e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"core.utils"'}),").load_mappings(",e(n.span,{className:"hljs-string",children:'"someplugin"'}),`)
`]}})}})]}function u(l={}){const{wrapper:n}=Object.assign({},i(),l.components);return n?e(n,t(l,{get children(){return e(c,l)}})):c(l)}export{u as default};
