import{M as a}from"./index-yHsRVhWw.js";import{b as e,q as i}from"./web-DqPol8Cv.js";const h={title:"NvChad Recipes",desc:"NvChad Recipes & tips and tricks configuration"};function l(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...s.components};return[e(n.h1,{children:"Recipes"}),`
`,e(n.p,{children:"This page will contain useful snippets of plugin configs & vim tricks etc shared by the NvChad community."}),`
`,e(n.h2,{children:"Clean Lspconfig syntax"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"If you have multiple servers configured in your lspconfig, then you can just put them in a table & loop through them for a cleaner syntax."}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` servers = {
  html = {},
  awk_ls = {},
  bashls = {},

  pyright = {
    settings = {
      python = {
        analysis = {
          autoSearchPaths = `,e(n.span,{className:"hljs-literal",children:"true"}),`,
          typeCheckingMode = `,e(n.span,{className:"hljs-string",children:'"basic"'}),`,
        },
      },
    },
  },
}

`,e(n.span,{className:"hljs-keyword",children:"for"})," name, opts ",e(n.span,{className:"hljs-keyword",children:"in"})," ",e(n.span,{className:"hljs-built_in",children:"pairs"}),"(servers) ",e(n.span,{className:"hljs-keyword",children:"do"}),`
  vim.lsp.`,e(n.span,{className:"hljs-built_in",children:"config"}),`(name, opts)
  vim.lsp.enable(name)
`,e(n.span,{className:"hljs-keyword",children:"end"}),`

`,e(n.span,{className:"hljs-comment",children:"-- if you dont want to call the enable method in the loop, just pass a table."}),`
`,e(n.span,{className:"hljs-comment",children:"-- vim.lsp.enable(vim.tbl_keys(servers))"}),`
`,e(n.span,{className:"hljs-comment",children:'-- vim.lsp.enable({"pyright", "clangd"})'}),`
`]}})}}),`
`,e(n.h2,{children:"Dynamic terminal padding"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"Neovim would look bad if terminal has padding as top is covered by bufferline and nvimtree etc with left."}),`
`,e(n.li,{get children(){return["So we can dynamically set padding if nvim's opened or not. So add padding on ",e(n.code,{children:"VimLeavePre"})," and remove padding on ",e(n.code,{children:"VimEnter"})," events."]}}),`
`,e(n.li,{children:"Below is an example for kitty terminal, you can apply the same logic for other terminals!"}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` autocmd = vim.api.nvim_create_autocmd

autocmd(`,e(n.span,{className:"hljs-string",children:'"VimEnter"'}),`, {
  command = `,e(n.span,{className:"hljs-string",children:'":silent !kitty @ set-spacing padding=0 margin=0"'}),`,
})

autocmd(`,e(n.span,{className:"hljs-string",children:'"VimLeavePre"'}),`, {
  command = `,e(n.span,{className:"hljs-string",children:'":silent !kitty @ set-spacing padding=20 margin=10"'}),`,
})
`]}})}}),`
`,e(n.h2,{children:"Restore cursor position"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"This autocmd will restore cursor position on file open"}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` autocmd = vim.api.nvim_create_autocmd

autocmd(`,e(n.span,{className:"hljs-string",children:'"BufReadPost"'}),`, {
  pattern = `,e(n.span,{className:"hljs-string",children:'"*"'}),`,
  callback = `,e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
    `,e(n.span,{className:"hljs-keyword",children:"local"})," line = vim.fn.line ",e(n.span,{className:"hljs-string",children:`"'\\""`}),`
    `,e(n.span,{className:"hljs-keyword",children:"if"}),`
      line > `,e(n.span,{className:"hljs-number",children:"1"}),`
      `,e(n.span,{className:"hljs-keyword",children:"and"})," line <= vim.fn.line ",e(n.span,{className:"hljs-string",children:'"$"'}),`
      `,e(n.span,{className:"hljs-keyword",children:"and"})," vim.bo.filetype ~= ",e(n.span,{className:"hljs-string",children:'"commit"'}),`
      `,e(n.span,{className:"hljs-keyword",children:"and"})," vim.fn.index({ ",e(n.span,{className:"hljs-string",children:'"xxd"'}),", ",e(n.span,{className:"hljs-string",children:'"gitrebase"'})," }, vim.bo.filetype) == ",e(n.span,{className:"hljs-number",children:"-1"}),`
    `,e(n.span,{className:"hljs-keyword",children:"then"}),`
      vim.cmd `,e(n.span,{className:"hljs-string",children:"'normal! g`\"'"}),`
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`
  `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
})
`]}})}}),`
`,e(n.h2,{children:"Clipboard in WSL without xclip"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"This is a WSL specific setting to use the Windows clipboard for + and * registers"}),`
`,e(n.li,{children:"If you have the default PowerShell, substitute pwsh.exe with powershell.exe"}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[`vim.g.clipboard = {
  name = `,e(n.span,{className:"hljs-string",children:"'WslClipboard'"}),`,
  copy = {
    [`,e(n.span,{className:"hljs-string",children:"'+'"}),"] = ",e(n.span,{className:"hljs-string",children:"'clip.exe'"}),`,
    [`,e(n.span,{className:"hljs-string",children:"'*'"}),"] = ",e(n.span,{className:"hljs-string",children:"'clip.exe'"}),`,
  },
  paste = {
    [`,e(n.span,{className:"hljs-string",children:"'+'"}),"] = ",e(n.span,{className:"hljs-string",children:`'pwsh.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("\`r", ""))'`}),`,
    [`,e(n.span,{className:"hljs-string",children:"'*'"}),"] = ",e(n.span,{className:"hljs-string",children:`'pwsh.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("\`r", ""))'`}),`,
  },
  cache_enabled = `,e(n.span,{className:"hljs-number",children:"0"}),`,
}
`]}})}}),`
`,e(n.h2,{children:"Show Nvdash when all buffers are closed"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"You can use nvim_list_bufs() too but vim.t.bufs has only listed bufs"}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return["vim.api.nvim_create_autocmd(",e(n.span,{className:"hljs-string",children:'"BufDelete"'}),`, {
  callback = `,e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
    `,e(n.span,{className:"hljs-keyword",children:"local"}),` bufs = vim.t.bufs
    `,e(n.span,{className:"hljs-keyword",children:"if"})," #bufs == ",e(n.span,{className:"hljs-number",children:"1"})," ",e(n.span,{className:"hljs-keyword",children:"and"})," vim.api.nvim_buf_get_name(bufs[",e(n.span,{className:"hljs-number",children:"1"}),"]) == ",e(n.span,{className:"hljs-string",children:'""'})," ",e(n.span,{className:"hljs-keyword",children:"then"}),`
      vim.cmd `,e(n.span,{className:"hljs-string",children:'"Nvdash"'}),`
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`
  `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
})
`]}})}})]}function t(s={}){const{wrapper:n}={...a(),...s.components};return n?e(n,i(s,{get children(){return e(l,s)}})):l(s)}export{t as default,h as meta};
