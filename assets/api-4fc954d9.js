import{M as s}from"./index-a172eef7.js";import{b as n,q as a}from"./entry-client-d253aea2.js";function l(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",a:"a"},s(),r.components);return[n(e.h1,{children:"# NvChad API"}),`
`,n(e.p,{children:"These are list of some functions & tips/tricks which are provided by nvchad plugins that aren't included in the config. You can make commands & mappings out of them."}),`
`,n(e.h2,{children:"Tbufpick"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used for picking buffers by entering the numbers previewed on them after running this module."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).tbufpick()
`]}})}}),`
`,n(e.h2,{children:"Arrange buffer"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used for arranging buffers left/right in the tabufline."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- move buffer right"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"1"}),`)

`,n(e.span,{className:"hljs-comment",children:"-- move buffer left"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"-1"}),`)
`]}})}}),`
`,n(e.h2,{children:"Toggle transparency"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used to toggle transparency, make sure that you have transparency option set in your chadrc."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
`]}})}}),`
`,n(e.h2,{children:"Toggle themes"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Used to toggle between 2 themes, make sure that you have ",n(e.code,{children:"theme_toggle"})," option set in your chadrc."]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_themes()
`]}})}}),`
`,n(e.h2,{children:"Close all buffers"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used to close all the buffers in current tab. ( the close icon in tabufline handles this )."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).closeAllbufs()
`]}})}}),`
`,n(e.h2,{children:"Show only modifed buffers"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["This is an autocmd which will show only modified buffers and current buffer, ",n(e.a,{href:"https://github.com/NvChad/ui/issues/78",children:"read more"}),"."]}}),`
`,n(e.li,{get children(){return["Put it in your ",n(e.code,{children:"custom/init.lua"})]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return["vim.api.nvim_create_autocmd({ ",n(e.span,{className:"hljs-string",children:'"BufAdd"'}),", ",n(e.span,{className:"hljs-string",children:'"BufEnter"'}),", ",n(e.span,{className:"hljs-string",children:'"tabnew"'}),` }, {
  callback = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
    vim.t.bufs = vim.tbl_filter(`,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(bufnr)"})]}}),`
      `,n(e.span,{className:"hljs-keyword",children:"return"})," vim.api.nvim_buf_get_option(bufnr, ",n(e.span,{className:"hljs-string",children:'"modified"'}),`)
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`, vim.t.bufs)
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
})
`]}})}})]}function c(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n(e,a(r,{get children(){return n(l,r)}})):l(r)}export{c as default};
