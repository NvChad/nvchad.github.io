import{b as e,n as r,g as i,t as l}from"./entry-client-092c6a78.js";import{M as a}from"./index-4e284d9a.js";const o=l("<br>");function s(t){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",strong:"strong",pre:"pre",span:"span",blockquote:"blockquote"},a(),t.components);return[e(n.h2,{children:"Luasnip"}),`
`,e(n.p,{get children(){return["NvChad uses ",e(n.code,{children:"luasnip"})," plugin for handling snippets, by default it uses ",e(n.code,{children:"friendly-snippets"})," plugin which provides snippets for many languages ."]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["But you would want to extend or add your own snippets so read ",e(n.a,{href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#loaders",children:"luasnip docs"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Globals"}),`
`,e(n.p,{get children(){return["These are the globals you can use to include the path of your snippets. Put them in ",e(n.strong,{children:"custom/init.lua"}),"."]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- vscode format i.e json files"}),`
vim.g.vscode_snippets_path = `,e(n.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,e(n.span,{className:"hljs-comment",children:"-- snipmate format "}),`
vim.g.snipmate_snippets_path = `,e(n.span,{className:"hljs-string",children:'"your snippets path"'}),`

`,e(n.span,{className:"hljs-comment",children:"-- lua format "}),`
vim.g.lua_snippets_path = vim.fn.stdpath `,e(n.span,{className:"hljs-string",children:'"config"'})," .. ",e(n.span,{className:"hljs-string",children:'"/lua/custom/lua_snippets"'}),`
`]}})}}),`
`,i(o),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{children:"The above code is an example in which we first get the path of nvim config and then add our custom snippets dir"}),`
`]}})]}function h(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,r(t,{get children(){return e(s,t)}})):s(t)}export{h as default};
