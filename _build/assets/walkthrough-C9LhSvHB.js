import{b as n,q as i,k as r,t}from"./web-CBU83r8B.js";import{M as a}from"./index-C2YDUEaq.js";var h=t("<br>"),c=t("<kbd>space");const u={title:"NvChad Walkthrough",desc:"Walkthrough guide for NvChad"};function s(l){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...l.components};return[n(e.h1,{children:"How does NvChad work?"}),`
`,n(e.h2,{children:"Understanding the basics"}),`
`,n(e.p,{get children(){return["Before getting into the topic, first you should understand the ",n(e.code,{children:"vim.tbl_deep_extend"})," function which is used for merging tables and their values recursively."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["The function ",n(e.code,{children:"vim.tbl_deep_extend"})," is normally used to merge 2 tables, and its syntax looks like this:"]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- table 1"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"python"'}),", ",n(e.span,{className:"hljs-string",children:'"html"'}),`},
}

`,n(e.span,{className:"hljs-comment",children:"-- table 2"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},
}

`,n(e.span,{className:"hljs-comment",children:'-- "force" will overwrite equal values from the someone table over the person table'}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)

`,n(e.span,{className:"hljs-comment",children:"-- result : "}),`
{
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},
}

`,n(e.span,{className:"hljs-comment",children:"-- The list tables wont merge cuz they dont have keys "}),`
`]}})}}),`
`,n(e.h2,{children:"Main Config Structure"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/NvChad/NvChad",children:"NvChad/NvChad"})," repo, this contains plugins, options, mappings, autocmds."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/NvChad/starter",children:"NvChad/starter"})," - This is a minimal config which shows how to use the nvchad repo as a plugin."]}}),`
`,n(e.li,{children:"Users will be using the starter config or can create their own"}),`
`]}}),`
`,n(e.p,{children:"config structure of the main nvchad repo :"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",children:`lua
│
├── nvchad
│   ├── autocmds.lua
│   ├── mappings.lua
│   ├── options.lua
│   │
│   │── plugins
│   │    ├── init.lua
│   │    └── ui.lua
│   │
│   ├── configs
│       ├── cmp.lua
│       ├── more...
│       
└── nvconfig.lua
`})}}),`
`,r(h),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["example module import, ",n(e.code,{children:'require "nvchad.options"'})]}}),`
`,n(e.li,{children:"nvconfig.lua is the list of all options for both ui/base46 repo!"}),`
`]}}),`
`,n(e.h2,{children:"Chadrc.lua"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["This file is meant to have structure of ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.5/lua/nvconfig.lua",children:"nvconfig.lua"}),", check the nvconfig.lua for knowing all supported options."]}}),`
`,n(e.li,{children:"So nvconfig returns a table of config and then merges chadrc's table."}),`
`,n(e.li,{get children(){return["And you put this file in your ",n(e.code,{children:"/lua"})," folder"]}}),`
`]}}),`
`,n(e.h2,{children:"Themes"}),`
`,n(e.p,{get children(){return["You can see all the themes with the following keymap: ",n(e.code,{children:"<leader> + th"}),"."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["The ",n(e.code,{children:"leader"})," key is the  ",r(c),"  in NvChad."]}}),`
`]}}),`
`,n(e.h2,{children:"Mappings"}),`
`,n(e.p,{children:"If you want to know all the keymaps, you can run the following commands:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.code,{children:"NvCheatsheet"})}}),`
`,n(e.li,{get children(){return n(e.code,{children:"Telescope keymaps"})}}),`
`]}})]}function m(l={}){const{wrapper:e}={...a(),...l.components};return e?n(e,i(l,{get children(){return n(s,l)}})):s(l)}export{m as default,u as meta};
