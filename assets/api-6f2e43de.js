import{b as n,q as a,g as i,t}from"./entry-client-ef724eef.js";import{M as r}from"./index-fcedbfab.js";const c=t("<kbd>Alt+1");function l(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",a:"a"},r(),s.components);return[n(e.h1,{children:"# NvChad API"}),`
`,n(e.p,{children:"These are list of some functions & tips/tricks which are provided by nvchad plugins that aren't included in the config. You can make commands & mappings out of them."}),`
`,n(e.h2,{children:"GotoTab"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["This utilizes the ",n(e.code,{children:"vim.t.bufs"})," tab table variable where we store buffer numbers of current tab."]}}),`
`,n(e.li,{get children(){return["Then it loops from 1-9 to create mappings of switching tab by number i.e ",i(c)," will switch first tab."]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"for"})," i = ",n(e.span,{className:"hljs-number",children:"1"}),", ",n(e.span,{className:"hljs-number",children:"9"}),", ",n(e.span,{className:"hljs-number",children:"1"})," ",n(e.span,{className:"hljs-keyword",children:"do"}),`
  vim.keymap.set(`,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-built_in",children:"string"}),".",n(e.span,{className:"hljs-built_in",children:"format"}),"(",n(e.span,{className:"hljs-string",children:'"<A-%s>"'}),", i), ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
    vim.api.nvim_set_current_buf(vim.t.bufs[i])
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
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
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_theme()
`]}})}}),`
`,n(e.h2,{children:"Close all buffers"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used to close all the buffers in current tab. ( the close icon in tabufline handles this )."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).closeAllBufs()
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
`]}})}})]}function u(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n(e,a(s,{get children(){return n(l,s)}})):l(s)}export{u as default};
