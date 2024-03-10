import{b as n,q as r,k as l,t as i}from"./web-CBU83r8B.js";import{M as a}from"./index-C2YDUEaq.js";var o=i("<br>");const h={title:"NvChad Snippets",desc:"Manage custom snippets in NvChad"};function s(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...t.components};return[n(e.h2,{children:"Luasnip"}),`
`,n(e.p,{get children(){return["NvChad uses ",n(e.code,{children:"luasnip"})," plugin for handling snippets, by default it uses ",n(e.code,{children:"friendly-snippets"})," plugin which provides snippets for many languages ."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["But you would want to extend or add your own snippets so read ",n(e.a,{href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#loaders",children:"luasnip docs"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Globals"}),`
`,n(e.p,{children:"These are the globals you can use to include the path of your snippets."}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- vscode format i.e json files"}),`
vim.g.vscode_snippets_path = `,n(e.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- snipmate format "}),`
vim.g.snipmate_snippets_path = `,n(e.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- lua format "}),`
vim.g.lua_snippets_path = vim.fn.stdpath `,n(e.span,{className:"hljs-string",children:'"config"'})," .. ",n(e.span,{className:"hljs-string",children:'"/lua/lua_snippets"'}),`
`]}})}}),`
`,l(o),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:'stdpath("config") returns the path of our nvimc config folder'}),`
`]}})]}function d(t={}){const{wrapper:e}={...a(),...t.components};return e?n(e,r(t,{get children(){return n(s,t)}})):s(t)}export{d as default,h as meta};
