import{b as e,m as r,i as l,t as i}from"./web-BodIy5GG.js";import{M as a}from"./index-Cy02P5WC.js";var o=i("<br>");function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...s.components};return[e(n.h2,{children:"Luasnip"}),`
`,e(n.p,{get children(){return["NvChad uses ",e(n.code,{children:"luasnip"})," plugin for handling snippets, by default it uses ",e(n.code,{children:"friendly-snippets"})," plugin which provides snippets for many languages ."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["But you would want to extend or add your own snippets so read ",e(n.a,{href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#loaders",children:"luasnip docs"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Globals"}),`
`,e(n.p,{children:"These are the globals you can use to include the path of your snippets."}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- vscode format i.e json files"}),`
vim.g.vscode_snippets_path = `,e(n.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,e(n.span,{className:"hljs-comment",children:"-- snipmate format "}),`
vim.g.snipmate_snippets_path = `,e(n.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,e(n.span,{className:"hljs-comment",children:"-- lua format "}),`
vim.g.lua_snippets_path = vim.fn.stdpath `,e(n.span,{className:"hljs-string",children:'"config"'})," .. ",e(n.span,{className:"hljs-string",children:'"/lua/custom/lua_snippets"'}),`
`]}})}}),`
`,l(o),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{children:'stdpath("config") returns the path of our nvimc config folder'}),`
`]}})]}function h(s={}){const{wrapper:n}={...a(),...s.components};return n?e(n,r(s,{get children(){return e(t,s)}})):t(s)}export{h as default};
