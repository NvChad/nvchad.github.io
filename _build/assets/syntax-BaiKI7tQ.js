import{b as n,q as a,k as l,t as i}from"./web-uzQsy4d_.js";import{M as r}from"./index-BosUlz4E.js";var c=i("<br>");const m={title:"NvChad Syntax highlighting",desc:"Manage nvim-treesitter in nvchad"};function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...t.components};return[n(e.h1,{children:"Nvim-treesitter"}),`
`,n(e.p,{get children(){return["We use ",n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",children:"Nvim-treesitter"})," plugin to have proper syntax highlighting in NvChad. It can be used for various things such as auto indent etc too."]}}),`
`,n(e.h2,{children:"Install parsers"}),`
`,n(e.p,{get children(){return["The TSInstall command is used to install treesitter parsers i.e ",n(e.code,{children:"TSInstall <parser>"})]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Example :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",children:`TSInstall lua html
`})}}),`
`,l(c),`
`,n(e.p,{children:"But this may be tedious when you have so many parsers to install and you'd have to repeat this step if you're re-installing nvchad with your old custom settings."}),`
`,n(e.h2,{children:"Plugin Table"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["For knowing correct parser names, do check ",n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",children:"nvim-treesitter docs"})]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {
        `,n(e.span,{className:"hljs-comment",children:"-- defaults "}),`
        `,n(e.span,{className:"hljs-string",children:'"vim"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"lua"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"vimdoc"'}),`,

        `,n(e.span,{className:"hljs-comment",children:"-- web dev "}),`
        `,n(e.span,{className:"hljs-string",children:'"html"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"css"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"javascript"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"typescript"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"tsx"'}),`,

       `,n(e.span,{className:"hljs-comment",children:"-- low level"}),`
        `,n(e.span,{className:"hljs-string",children:'"c"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"zig"'}),`
      },
    },
  },
`]}})}})]}function o(t={}){const{wrapper:e}={...r(),...t.components};return e?n(e,a(t,{get children(){return n(s,t)}})):s(t)}export{o as default,m as meta};
