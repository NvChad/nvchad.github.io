import{b as n,q as i,g as l,t as a}from"./entry-client-1875b987.js";import{M as c}from"./index-fd5f6a83.js";const t=a("<kbd>Ctrl</kbd>",2),h=a("<kbd>Space</kbd>",2),d=a("<kbd>alt</kbd>",2),o=a("<kbd>shift</kbd>",2),m=a("<br>",1);function r(s){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",strong:"strong"},c(),s.components);return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"The mapping configuration uses the nvim name shorcuts as:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"<C>"}),": ",l(t)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<leader>"})," = ",l(h)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<A>"})," = ",l(d)]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"<S>"})," = ",l(o)]}}),`
`,n(e.li,{get children(){return["The default mappings are defined in ",n(e.code,{children:"core.mappings"})," (`core/mappings.lua)."]}}),`
`,n(e.li,{get children(){return["Alternatively, you can use ",n(e.code,{children:"NvCheatsheet"})," or ",n(e.code,{children:"Telescope keymaps"})," to list all mappings."]}}),`
`]}}),`
`,n(e.h2,{children:"Mapping format"}),`
`,n(e.p,{children:"In order to list custom shortcuts in NvCheatsheet, make sure to use the following format"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- opts is an optional parameter"}),`
[`,n(e.span,{className:"hljs-string",children:'"keys"'}),"] = {",n(e.span,{className:"hljs-string",children:'"action"'}),", ",n(e.span,{className:"hljs-string",children:'"description"'}),`, opts = {}},

[`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> NvimTreeToggle <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Toggle nvimtree"'}),`},
`,n(e.span,{className:"hljs-comment",children:"-- In this case : equals <cmd>"}),`
[`,n(e.span,{className:"hljs-string",children:'"<leader>ff"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`},   

`,n(e.span,{className:"hljs-comment",children:"-- opts can have the props: buffer, silent, noremap, nowait and so on."}),`
`,n(e.span,{className:"hljs-comment",children:"-- All standard key binding opts are supported. "}),`
[`,n(e.span,{className:"hljs-string",children:'";"'}),"] = { ",n(e.span,{className:"hljs-string",children:'":"'}),", ",n(e.span,{className:"hljs-string",children:'"enter cmdline"'}),", opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` } },

`,n(e.span,{className:"hljs-comment",children:"-- For a more complex keymap"}),`
[`,n(e.span,{className:"hljs-string",children:'"<leader>tt"'}),`] = {
  `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
     `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  `,n(e.span,{className:"hljs-string",children:'"toggle transparency"'}),`,
},
`]}})}}),`
`,n(e.h2,{children:"Add new mappings"}),`
`,n(e.p,{get children(){return["In order to add or customize the mappings, make sure that you follow the expected file structure for NvChad. The default mappings are loaded from ",n(e.code,{children:"core.mappings"}),", and it is recommended that you place your mappings inside ",n(e.code,{children:"custom.mappings"}),". Remember that the mappings ",n(e.strong,{children:"must"})," have a vim mode: ",n(e.code,{children:"n"})," (for normal), ",n(e.code,{children:"v"})," (for visual), ",n(e.code,{children:"i"})," (for insert) and so on."]}}),`
`,n(e.p,{get children(){return["Inside your ",n(e.code,{children:"chadrc"})," file, make sure you add:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- custom/chadrc.lua"}),`
M.mappings = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.mappings"'}),`
`,n(e.span,{className:"hljs-comment",children:"-- You can change the file location, as long as you update the previous line accordingly"}),`
`]}})}}),`
`,n(e.p,{get children(){return["Then, in your ",n(e.code,{children:"custom.mappings"})," configuration, add the wanted mappings:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- custom/mappings.lua"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

`,n(e.span,{className:"hljs-comment",children:"-- In order to disable a default keymap, use"}),`
M.disabled = {
  n = {
      [`,n(e.span,{className:"hljs-string",children:'"<leader>h"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`,
      [`,n(e.span,{className:"hljs-string",children:'"<C-a>"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`
  }
}

`,n(e.span,{className:"hljs-comment",children:"-- Your custom mappings"}),`
M.abc = {
  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
     [`,n(e.span,{className:"hljs-string",children:'"<C-s>"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope Files <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope Files"'}),`} 
  }

  i = {
     [`,n(e.span,{className:"hljs-string",children:'"jk"'}),"] = { ",n(e.span,{className:"hljs-string",children:'"<ESC>"'}),", ",n(e.span,{className:"hljs-string",children:'"escape insert mode"'})," , opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` }},
    `,n(e.span,{className:"hljs-comment",children:"-- ..."}),`
  }
}

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]}})}}),`
`,l(m),`
`,n(e.p,{children:"A couple of recommendations:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Be sure to maintain a table structure similar to the one in ",n(e.code,{children:"core.mappings"}),"."]}}),`
`,n(e.li,{children:"Mappings will be automatically loaded. You don't need to load them manually!"}),`
`]}}),`
`,n(e.h2,{children:"Manually load mappings"}),`
`,n(e.p,{children:"Even though it is not required, you can manually load your mappings with:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.some_plugin_name = {
  plugin = `,n(e.span,{className:"hljs-literal",children:"true"}),", ",n(e.span,{className:"hljs-comment",children:"-- <- Important!"}),`

  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
  }
}

`,n(e.span,{className:"hljs-comment",children:"-- Now to load it "}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"core.utils"'}),").load_mappings(",n(e.span,{className:"hljs-string",children:'"someplugin"'}),`)
`]}})}})]}function u(s={}){const{wrapper:e}=Object.assign({},c(),s.components);return e?n(e,i(s,{get children(){return n(r,s)}})):r(s)}export{u as default};
