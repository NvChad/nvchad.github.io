import{b as n,m as r,i,t as l}from"./web-DScAkgcG.js";import{M as a}from"./index-CYDpJFld.js";var o=l("<br>");function s(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...t.components};return[n(e.h2,{children:"Luasnip"}),`
`,n(e.p,{get children(){return["NvChad uses ",n(e.code,{children:"luasnip"})," plugin for handling snippets, by default it uses ",n(e.code,{children:"friendly-snippets"})," plugin which provides snippets for many languages ."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["But you would want to extend or add your own snippets so read ",n(e.a,{href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#loaders",children:"luasnip docs"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Globals"}),`
`,n(e.p,{get children(){return["These are the globals you can use to include the path of your snippets. Put them in ",n(e.strong,{children:"custom/init.lua"}),"."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- vscode format i.e json files"}),`
vim.g.vscode_snippets_path = `,n(e.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- snipmate format "}),`
vim.g.snipmate_snippets_path = `,n(e.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- lua format "}),`
vim.g.lua_snippets_path = vim.fn.stdpath `,n(e.span,{className:"hljs-string",children:'"config"'})," .. ",n(e.span,{className:"hljs-string",children:'"/lua/custom/lua_snippets"'}),`
`]}})}}),`
`,i(o),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"The above code is an example in which we first get the path of nvim config and then add our custom snippets dir"}),`
`]}})]}function h(t={}){const{wrapper:e}={...a(),...t.components};return e?n(e,r(t,{get children(){return n(s,t)}})):s(t)}export{h as default};
