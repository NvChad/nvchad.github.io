import{b as n,n as l,g as a,t as i}from"./entry-client-c584cbe2.js";import{M as r}from"./index-aa0bc0bc.js";const c=i("<br>");function t(s){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",span:"span"},r(),s.components);return[n(e.h1,{children:"Nvim-treesitter"}),`
`,n(e.p,{get children(){return["We use ",n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",children:"Nvim-treesitter"})," plugin to have proper syntax highlighting in NvChad. It can be used for various things such as auto indent etc too."]}}),`
`,n(e.h2,{children:"Install parsers"}),`
`,n(e.p,{get children(){return["The TSInstall command is used to install treesitter parsers i.e ",n(e.code,{children:"TSInstall <parser>"})]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Example :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",children:`TSInstall lua html
`})}}),`
`,a(c),`
`,n(e.p,{children:"But this may be tedious when you have so many parsers to install and you'd have to repeat this step if you're re-installing nvchad with your old custom settings."}),`
`,n(e.h2,{children:"Custom config"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"So now we'll just override the default config and add our own parser names to it."}),`
`,n(e.li,{get children(){return["For knowing correct parser names, do check ",n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",children:"nvim-treesitter docs"})]}}),`
`,n(e.li,{get children(){return n(e.code,{children:"custom/plugins.lua"})}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {
        `,n(e.span,{className:"hljs-comment",children:"-- defaults "}),`
        `,n(e.span,{className:"hljs-string",children:'"vim"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"lua"'}),`,

        `,n(e.span,{className:"hljs-comment",children:"-- web dev "}),`
        `,n(e.span,{className:"hljs-string",children:'"html"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"css"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"javascript"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"typescript"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"tsx"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"json"'}),`,
        `,n(e.span,{className:"hljs-comment",children:'-- "vue", "svelte",'}),`

       `,n(e.span,{className:"hljs-comment",children:"-- low level"}),`
        `,n(e.span,{className:"hljs-string",children:'"c"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"zig"'}),`
      },
    },
  },
`]}})}})]}function d(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n(e,l(s,{get children(){return n(t,s)}})):t(s)}export{d as default};
