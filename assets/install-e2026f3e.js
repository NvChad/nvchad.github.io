import{b as e,q as s,g as t,t as l}from"./entry-client-8e9ccd14.js";import{M as i}from"./index-b165016c.js";import{O as a}from"./install-7c4b0fea.js";const c=l("<strong>Mono</strong>",2),d=l("<strong>Example : </strong>",2),h=l("<s>JetbrainsMono Nerd Font Mono</s>",2),m=l("<strong>(OPTIONAL)</strong>",2);function o(r){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",strong:"strong",code:"code",p:"p",pre:"pre",span:"span"},i(),r.components);return[e(n.h2,{children:"Pre-requisites"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.8.0",children:"Neovim 0.8.3"}),"."]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," as your terminal font.",`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Make sure the nerd font you set doesnt end with ",t(c)," to prevent small icons."]}}),`
`,e(n.li,{get children(){return[t(d)," JetbrainsMono Nerd Font and not ",e(n.strong,{get children(){return t(h)}})]}}),`
`]}}),`
`]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",t(m),"."]}}),`
`,e(n.li,{get children(){return["GCC, Windows users must have ",e(n.a,{href:"http://mingw-w64.org/downloads",get children(){return e(n.code,{children:"mingw"})}})," installed and set on path."]}}),`
`,e(n.li,{children:"Delete old neovim folder (check commands below)"}),`
`]}}),`
`,e(n.h2,{children:"Install"}),`
`,e(a,{}),`
`,e(n.h2,{children:"Update"}),`
`,e(n.p,{children:"To update NvChad run the following command :"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"NvChadUpdate"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Uninstall"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-bash",get children(){return[e(n.span,{className:"hljs-comment",children:"# Linux / Macos (unix)"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim

`,e(n.span,{className:"hljs-comment",children:"# Windows"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data
`]}})}})]}function f(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e(n,s(r,{get children(){return e(o,r)}})):o(r)}export{f as default};
