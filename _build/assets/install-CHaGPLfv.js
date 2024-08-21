import{b as e,q as s,k as t,t as l}from"./web-uzQsy4d_.js";import{M as a}from"./index-BosUlz4E.js";import{O as o}from"./install-DOTgAu_g.js";import"./clipboard-DzJ4oxno.js";var c=l("<strong>Mono"),d=l("<strong>Example : "),h=l("<s>JetbrainsMono Nerd Font Mono"),m=l("<strong>(OPTIONAL)"),p=l("<br>");const N={title:"NvChad Installation",desc:"Install, Update, Uninstall guide for nvchad"};function i(r){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...r.components};return[e(n.h2,{children:"Pre-requisites"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.10.0",children:"Neovim 0.10"}),"."]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," as your terminal font.",`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Make sure the nerd font you set doesn't end with ",t(c)," to prevent small icons."]}}),`
`,e(n.li,{get children(){return[t(d)," JetbrainsMono Nerd Font and not ",e(n.strong,{get children(){return t(h)}})]}}),`
`]}}),`
`]}}),`
`,e(n.li,{get children(){return[e(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",t(m),"."]}}),`
`,e(n.li,{get children(){return["GCC, Windows users must have ",e(n.a,{href:"http://mingw-w64.org/downloads",get children(){return e(n.code,{children:"mingw"})}})," installed and set on path."]}}),`
`,e(n.li,{get children(){return["Make, Windows users must have ",e(n.a,{href:"https://sourceforge.net/projects/gnuwin32",get children(){return e(n.code,{children:"GnuWin32"})}})," installed and set on path."]}}),`
`,e(n.li,{children:"Delete old neovim folders (check commands below)"}),`
`]}}),`
`,e(n.h2,{children:"Install"}),`
`,e(o,{}),`
`,t(p),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Run ",e(n.code,{children:":MasonInstallAll"})," command after lazy.nvim finishes downloading plugins."]}}),`
`,e(n.li,{get children(){return["Delete the ",e(n.code,{children:".git"})," folder from nvim folder."]}}),`
`]}}),`
`,e(n.h2,{children:"Update"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"Lazy sync"})," command"]}}),`
`]}}),`
`,e(n.h2,{children:"Uninstall"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-bash",get children(){return[e(n.span,{className:"hljs-comment",children:"# Linux / MacOS (unix)"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/state/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim

`,e(n.span,{className:"hljs-comment",children:"# Flatpak (linux)"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.var/app/io.neovim.nvim/config/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.var/app/io.neovim.nvim/data/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.var/app/io.neovim.nvim/.local/state/nvim

`,e(n.span,{className:"hljs-comment",children:"# Windows CMD"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data

`,e(n.span,{className:"hljs-comment",children:"# Windows PowerShell"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -Force ~\\AppData\\Local\\nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -Force ~\\AppData\\Local\\nvim-data
`]}})}})]}function w(r={}){const{wrapper:n}={...a(),...r.components};return n?e(n,s(r,{get children(){return e(i,r)}})):i(r)}export{w as default,N as meta};
