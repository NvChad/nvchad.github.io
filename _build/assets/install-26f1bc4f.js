import{b as e,m as s,i as t,t as l}from"./web-20758ba6.js";import{M as a}from"./index-16ef742e.js";import{O as o}from"./install-0aa991ac.js";var c=l("<strong>Mono"),h=l("<strong>Example : "),d=l("<s>JetbrainsMono Nerd Font Mono"),m=l("<strong>(OPTIONAL)");function i(r){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",strong:"strong",code:"code",p:"p",pre:"pre",span:"span"},a(),r.components);return[e(n.h2,{children:"Pre-requisites"}),`
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
`,e(o,{}),`
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
`]}})}})]}function f(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,s(r,{get children(){return e(i,r)}})):i(r)}export{f as default};
