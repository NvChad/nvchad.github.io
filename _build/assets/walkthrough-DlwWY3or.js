import{b as n,m as c,i as r,t as a}from"./web-DScAkgcG.js";import{M as i}from"./index-CYDpJFld.js";var s=a("<br>"),h=a("<kbd>space");function t(l){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...l.components};return[n(e.h1,{children:"How does NvChad work?"}),`
`,n(e.h2,{children:"Understanding the basics"}),`
`,n(e.p,{get children(){return["Before getting into the topic, first you should understand the ",n(e.code,{children:"vim.tbl_deep_extend"})," function which is used for merging tables and their values recursively."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["The function ",n(e.code,{children:"vim.tbl_deep_extend"})," is normally used to merge 2 tables, and its syntax looks like this:"]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- table 1"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}

`,n(e.span,{className:"hljs-comment",children:"-- table 2"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}

`,n(e.span,{className:"hljs-comment",children:'-- "force" will overwrite equal values from the someone table over the person table'}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)

`,n(e.span,{className:"hljs-comment",children:"-- result : "}),`
{
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),", ",n(e.span,{className:"hljs-comment",children:"-- as you can see, name has been overwritten"}),`
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}
`]}})}}),`
`,r(s),`
`,n(e.p,{children:"Its usage can be used in even more complex tables. As was mentioned before, it works recursively, which means that it will apply the same behavior for nested table values:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"python"'}),", ",n(e.span,{className:"hljs-string",children:'"java"'}),", ",n(e.span,{className:"hljs-string",children:'"c++"'}),`}

    distros_used = {
        ubuntu = `,n(e.span,{className:"hljs-string",children:'"5 years"'}),`,
        arch = `,n(e.span,{className:"hljs-string",children:'"10 minutes"'}),`,
        manjaro = `,n(e.span,{className:"hljs-string",children:'"10 years"'}),`,
    }
}

`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},

    distros_used = {
       ubuntu = `,n(e.span,{className:"hljs-string",children:'"1 month"'}),`,
       artix = `,n(e.span,{className:"hljs-string",children:'"2 years"'}),`
    }
}

`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)
`]}})}}),`
`,r(s),`
`,n(e.p,{get children(){return["The resulting table will have merged each property from the tables, and the same for the ",n(e.code,{children:"skills"})," and ",n(e.code,{children:"distros_used"})," values:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
   name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
   age = `,n(e.span,{className:"hljs-number",children:"19"}),`

   skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},

   distros_used = {
       ubuntu = `,n(e.span,{className:"hljs-string",children:'"1 month"'}),`,
       arch = `,n(e.span,{className:"hljs-string",children:'"10 minutes"'}),`,
       manjaro = `,n(e.span,{className:"hljs-string",children:'"10 years"'}),`,
       artix = `,n(e.span,{className:"hljs-string",children:'"2 years"'}),`
   }
}

`,n(e.span,{className:"hljs-comment",children:"-- tbl_deep_extend function merges values recursively, but if there's an array (list), it won't merge the list tables. "}),`

`,n(e.span,{className:"hljs-comment",children:'-- Example: the first table has {"python", "java", "c++"} and the second table has {"js","lua"}. '}),`

`,n(e.span,{className:"hljs-comment",children:'-- Now you might be wondering that it should merge it like this: { "python", "java", "c++", "lua"}'}),`

`,n(e.span,{className:"hljs-comment",children:'-- But no! thats wrong, the result will be only {"js","lua"}'}),`
`]}})}}),`
`,r(s),`
`,n(e.p,{get children(){return["To sum up, ",n(e.code,{children:"tbl_deep_extend"})," merges dictonary tables recursively (i.e tables which have ",n(e.code,{children:"key/value"})," pair but not lists)."]}}),`
`,n(e.h2,{children:"Config Structure"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",children:`├── init.lua ( main init.lua )
│
├── lua
│   │
│   ├── core
│   │   ├── default_config.lua
│   │   ├── mappings.lua
│   │   ├── utils.lua 
│   │   └── init.lua  
│   │
│   ├── plugins
│   │    ├── init.lua 
│   │    └── configs
│   │        ├── cmp.lua
│   │        └── other configs
│   │  
│   │   USER CONFIG  
│   │  
│   ├── custom *
│   │   ├── chadrc.lua
│   │   ├── init.lua
│   │   ├── more files, dirs
`})}}),`
`,r(s),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"init.lua"})," -"]}})," runs whole config"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"core/default_config"})," -"]}})," returns a table of default options in NvChad."]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"core/mappings"})," -"]}})," default mappings"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"core/init"})," -"]}})," default globals, nvim options, commands, autocmds"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return[n(e.code,{children:"core/utils"})," -"]}})," helpful functions"]}}),`
`]}}),`
`,n(e.h2,{children:"Custom config"}),`
`,n(e.p,{get children(){return["There are 2 important files in ",n(e.strong,{children:"custom"})," dir which extend NvChad:"]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return n(e.code,{children:"custom/chadrc.lua"})}})," meant to override that table in ",n(e.code,{children:"default_config.lua"})," file"]}}),`
`,n(e.li,{get children(){return[n(e.strong,{get children(){return n(e.code,{children:"custom/init.lua"})}})," runs in the main ",n(e.code,{children:"init.lua"}),", its meant to have vim options, globals, autocmds, commands etc."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/illustrations/config_nutshell.webp",alt:"GitHub Logo"})}}),`
`,n(e.p,{get children(){return["From now on, whenever we talk about paths, keep in mind that they're relative to the ",n(e.code,{children:"lua"})," folder in your ",n(e.code,{children:"nvim"})," config (by default it should be ",n(e.code,{children:"~/.config/nvim/"}),")."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["It is not recommended to make changes outside the ",n(e.code,{children:"custom"})," dir, because NvChad config is a repo and it ",n(e.strong,{children:"gitignores"})," only the custom dir, it uses ",n(e.code,{children:"git pull"})," to update the config."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["Any other file outside the ",n(e.code,{children:"custom"})," dir will be treated as a change by ",n(e.code,{children:"git"}),", meaning that NvChad will not be able to fast-forward the pull."]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["Check ",n(e.a,{href:"https://github.com/NvChad/example_config",children:"example_config"})," for reference."]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Themes"}),`
`,n(e.p,{get children(){return["You can see all the themes with the following keymap: ",n(e.code,{children:"<leader> + th"}),"."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["The ",n(e.code,{children:"leader"})," key is the  ",r(h),"  in NvChad."]}}),`
`]}}),`
`,n(e.h2,{children:"Mappings"}),`
`,n(e.p,{children:"If you want to know all the keymaps, you can run the following comands:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.code,{children:"NvCheatsheet"})}}),`
`,n(e.li,{get children(){return n(e.code,{children:"Telescope keymaps"})}}),`
`]}})]}function u(l={}){const{wrapper:e}={...i(),...l.components};return e?n(e,c(l,{get children(){return n(t,l)}})):t(l)}export{u as default};
