import{M as o}from"./index-16ef742e.js";import{b as n,m as i}from"./web-20758ba6.js";function t(r){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",pre:"pre",span:"span"},o(),r.components);return[n(e.h2,{children:"Icons not working"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Setup a ",n(e.a,{href:"https://www.nerdfonts.com/#home",children:"nerdfont"})," as your terminal's default font."]}}),`
`]}}),`
`,n(e.h2,{children:"Set highlight groups"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"For that you have to add highlight groups in hl_override ( existing ones which NvChad defines), for new ones, use hl_add."}),`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://nvchad.com/docs/config/theming",children:"theming docs"})," for detailed info."]}}),`
`]}}),`
`,n(e.h2,{children:"Customize theme colors"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Use ",n(e.code,{children:"changed_themes"})," option in chadrc. check ",n(e.a,{href:"https://nvchad.com/docs/config/theming#customize_themes",children:"theming docs"})," for detailed info."]}}),`
`]}}),`
`,n(e.h2,{children:"Custom local base46 themes"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To make a custom local theme thats of the base46 format, you have to create ",n(e.code,{children:"/custom/themes/mytheme.lua"}),". Check ",n(e.a,{href:"https://github.com/NvChad/base46/blob/v2.0/README.md",children:"base46 docs"})," for more info."]}}),`
`]}}),`
`,n(e.h2,{children:"Can I remove base46?"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"No, NvChad hard-depends on base46, just use another config."}),`
`]}}),`
`,n(e.h2,{children:"Mapping Ctrl + o / i keys"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["In Nvchad ",n(e.code,{children:"<Tab> & <S-Tab>"})," are mapped by default and nvim maps to ",n(e.code,{children:"<C-i>"})," if ",n(e.code,{children:"<Tab>"})," key is mapped. ",n(e.a,{href:"https://stackoverflow.com/questions/16209213/vim-jump-forward-with-c-i-doesnt-work-for-me-too-snipmate/16209534#16209534",children:"Check"})]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["To map those keys, you should either disable ",n(e.code,{children:"<Tab>"})," in your custom mappings file or have certain settings in your terminal config, for exampele:  alacritty config :"]}}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[`key_bindings:
   - { key: I, mods: Control, chars: `,n(e.span,{className:"hljs-string",children:'"\\x1b[105;6u"'}),` }
`]}})}})]}function d(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,i(r,{get children(){return n(t,r)}})):t(r)}export{d as default};
