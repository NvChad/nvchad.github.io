import{b as n,q as s,g as t,t as l}from"./entry-client-022945ec.js";import{M as o}from"./index-ccb7c80e.js";import{O as a}from"./install-4249d092.js";const c=l("<strong>Mono</strong>",2),d=l("<strong>Example : </strong>",2),h=l("<s>Iosevka Nerd Font Mono</s>",2),m=l("<strong>(OPTIONAL)</strong>",2);function i(r){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",pre:"pre",span:"span"},o(),r.components);return[n(e.h2,{children:"Pre-requisites"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.8.0",children:"Neovim 0.8.3"}),"."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," Set it in your terminal emulator.",`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Make sure the nerd font you set doesnt end with ",t(c)," to prevent small icons."]}}),`
`,n(e.li,{get children(){return[t(d)," Iosevka Nerd Font and not ",t(h)]}}),`
`]}}),`
`]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",t(m),"."]}}),`
`,n(e.li,{get children(){return["GCC, Windows users must have ",n(e.a,{href:"http://mingw-w64.org/downloads",get children(){return n(e.code,{children:"mingw"})}})," installed and set on path."]}}),`
`,n(e.li,{children:"Delete old neovim folder (check commands below)"}),`
`]}}),`
`,n(e.h2,{children:"Install"}),`
`,n(a,{}),`
`,n(e.h2,{children:"Update"}),`
`,n(e.p,{children:"To update NvChad run the following command :"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"NvChadUpdate"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Uninstall"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-comment",children:"# linux/macos (unix)"}),`
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim

`,n(e.span,{className:"hljs-comment",children:"# windows"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data
`]}})}})]}function f(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,s(r,{get children(){return n(i,r)}})):i(r)}export{f as default};
