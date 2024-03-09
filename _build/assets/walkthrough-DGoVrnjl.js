import{b as n,m as a,i as t,t as c}from"./web-BodIy5GG.js";import{M as r}from"./index-Cy02P5WC.js";var h=c("<kbd>space");function s(l){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...l.components};return[n(e.h1,{children:"How does NvChad work?"}),`
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

`,n(e.span,{className:"hljs-comment",children:"-- The list tables i.e arrays wont merge, only the array from the table 2 gets preferred. "}),`
`]}})}}),`
`,n(e.h2,{children:"Chadrc.lua"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"NvChad's ui and base46 plugin expect nvconfig.lua to be on path and take the config from it."}),`
`,n(e.li,{children:"So nvconfig returns a table of config and then merges chadrc's table."}),`
`]}}),`
`,n(e.h2,{children:"Themes"}),`
`,n(e.p,{get children(){return["You can see all the themes with the following keymap: ",n(e.code,{children:"<leader> + th"}),"."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["The ",n(e.code,{children:"leader"})," key is the  ",t(h),"  in NvChad."]}}),`
`]}}),`
`,n(e.h2,{children:"Mappings"}),`
`,n(e.p,{children:"If you want to know all the keymaps, you can run the following comands:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.code,{children:"NvCheatsheet"})}}),`
`,n(e.li,{get children(){return n(e.code,{children:"Telescope keymaps"})}}),`
`]}})]}function d(l={}){const{wrapper:e}={...r(),...l.components};return e?n(e,a(l,{get children(){return n(s,l)}})):s(l)}export{d as default};
