import{b as e,m as o,i as t,t as l}from"./web-DScAkgcG.js";import{M as a}from"./index-CYDpJFld.js";import{O as s}from"./install-PNguWO08.js";var c=l("<strong>Mono"),h=l("<strong>Example : "),d=l("<s>JetbrainsMono Nerd Font Mono"),m=l("<strong>(OPTIONAL)");function i(r){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...r.components};return[e(n.h2,{children:"Pre-requisites"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.9.4",children:"Neovim 0.9.4"}),"."]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," as your terminal font.",`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Make sure the nerd font you set doesn't end with ",t(c)," to prevent small icons."]}}),`
`,e(n.li,{get children(){return[t(h)," JetbrainsMono Nerd Font and not ",e(n.strong,{get children(){return t(d)}})]}}),`
`]}}),`
`]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",t(m),"."]}}),`
`,e(n.li,{get children(){return["GCC, Windows users must have ",e(n.a,{href:"http://mingw-w64.org/downloads",get children(){return e(n.code,{children:"mingw"})}})," installed and set on path."]}}),`
`,e(n.li,{get children(){return["Make, Windows users must have ",e(n.a,{href:"https://gnuwin32.sourceforge.net/install.html",get children(){return e(n.code,{children:"GnuWin32"})}})," installed and set on path."]}}),`
`,e(n.li,{children:"Delete old neovim folders (check commands below)"}),`
`]}}),`
`,e(n.h2,{children:"Install"}),`
`,e(s,{}),`
`,e(n.h2,{children:"Update"}),`
`,e(n.p,{children:"To update NvChad run the following command :"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"NvChadUpdate"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Uninstall"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-bash",get children(){return[e(n.span,{className:"hljs-comment",children:"# Linux / Macos (unix)"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim

`,e(n.span,{className:"hljs-comment",children:"# Windows CMD"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data

`,e(n.span,{className:"hljs-comment",children:"# Window PowerShell"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -Force ~\\AppData\\Local\\nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -Force ~\\AppData\\Local\\nvim-data
`]}})}})]}function f(r={}){const{wrapper:n}={...a(),...r.components};return n?e(n,o(r,{get children(){return e(i,r)}})):i(r)}export{f as default};
