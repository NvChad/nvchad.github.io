import{b as n,q as c,k as r,t}from"./web-DqPol8Cv.js";import{M as a}from"./index-yHsRVhWw.js";var o=t('<div class=iframe-container><iframe src="https://www.youtube.com/embed/lhwcaAS66nQ?si=VYvg44IiJB6k9PPU"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>'),i=t("<br>"),h=t('<div class=iframe-container><iframe width=560 height=315 src="https://www.youtube.com/embed/eUnDUhYoNJg?si=t9BxDCsA9ru1eXox"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>');const p={title:"UI plugin v3.0",desc:"NvChad's Base46 and UI plugin can now be used by non nvchad users! docs at :h nvui",cover:"nvui.webp",order:3};function s(l){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...l.components};return[n(e.h1,{children:"NvUI v3.0 ( NvChad's UI + Base46 )"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/nvui.webp",alt:"nvui v3.0"})}}),`
`,n(e.h2,{children:"Introduction"}),`
`,n(e.p,{children:"NvChad got famous due to its look, which are powered by its Base46 & UI plugin!"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Base46 : Powerful Collection of 68 beautifully crafted themes, extensible and compiled to bytecode"}),`
`,n(e.li,{children:"UI : Collection of various ui's like statusline, tabline, dashboard, cheatsheet etc"}),`
`]}}),`
`,n(e.p,{children:"Now Non NvChad users can use both the plugins! check ui repo's readme for more info."}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"Video showing setup of nvui on non nvchad configs!"}),`
`]}}),`
`,r(o),`
`,n(e.p,{children:"Note: These are changelogs for entire of NvChad."}),`
`,n(e.h2,{children:"Changelog"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`## Added

- :h nvui ( docs `,n(e.span,{className:"hljs-keyword",children:"for"})," ui ",n(e.span,{className:"hljs-keyword",children:"and"}),` base46)

- `,n(e.span,{className:"hljs-number",children:"3"}),` new modern theme switchers made using volt
- TailwindCSS & CSS Lsp support `,n(e.span,{className:"hljs-keyword",children:"in"}),` cmp
- Improved highlighting of Nvdash
- Minimal colorizer `,n(e.span,{className:"hljs-built_in",children:"module"}),`
- MasonInstallAll will now pull mason tools from user `,n(e.span,{className:"hljs-built_in",children:"config"}),`
- Base46 mixing colors syntax
- New plugins : Volt, Minty, Menu 

## Changed 

- Nvdash button `,n(e.span,{className:"hljs-built_in",children:"config"}),` has been improved
- All theme related options have been moved to base46 `,n(e.span,{className:"hljs-built_in",children:"table"}),", ",n(e.span,{className:"hljs-keyword",children:"do"})," ",n(e.span,{className:"hljs-keyword",children:"not"})," use M.ui ",n(e.span,{className:"hljs-keyword",children:"for"}),` them.

## Removed

- Nvim-colorizer plugin
- Default gitsigns mappings

`]}})}}),`
`,r(i),`
`,n(e.h2,{children:"Docs for nvui"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Proper and complete docs for both have been added at ",n(e.code,{children:":h nvui"})]}}),`
`,n(e.li,{children:"I urge all NvChad users to read it! same with non nvchad users when they install ui+base46."}),`
`]}}),`
`,n(e.h2,{children:"Theme switchers"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"With 3 different styles : bordered, compact, flat"}),`
`,n(e.li,{get children(){return["read ",n(e.code,{children:":h nvui.theme-picker"})]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/897e46f1-9ae2-4cc2-8fa2-64eff40a90dd",alt:"image"})}}),`
`,r(h),`
`,n(e.h2,{children:"TailwindCSS & CSS Lsp in Cmp"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Read ",n(e.code,{children:":h nvui.cmp"})," to enable it"]}}),`
`,n(e.li,{get children(){return["The support was added as it was easy (",n(e.a,{href:"https://github.com/NvChad/ui/blob/v3.0/lua/nvchad/cmp/format.lua",children:"barely 20 ~ LOC"}),")"]}}),`
`]}}),`
`,n(e.p,{get children(){return[n(e.img,{src:"https://github.com/user-attachments/assets/c44e405b-f0f1-4c56-ae58-85c49b9616a0",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/57e88886-7c95-4e77-a252-2021160cd274",alt:"image"})]}}),`
`,n(e.h2,{children:"Improved Nvdash UI"}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://github.com/user-attachments/assets/0c7e2c8f-8940-42ea-9c18-7456768d2d05",alt:"nvdash"})}}),`
`,n(e.p,{children:"Note: Nvdash config has been moved to the root table instead of UI"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"--Before :"}),`

M.ui = {
  nvdash = { ... }
}

`,n(e.span,{className:"hljs-comment",children:"-- Now: "}),`
M.nvdash = { ... }
`]}})}}),`
`,r(i),`
`,n(e.p,{get children(){return["Check the syntax of buttons in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v3.0/lua/nvconfig.lua#L61",children:"nvconfig file"})]}}),`
`,n(e.h2,{children:"Automatic Mason install"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"MasonInstallAll command will now capture all the mason tools from your config"}),`
`,n(e.li,{children:"Supported plugins are : lspconfig, nvim-lint, conform.nvim"}),`
`,n(e.li,{children:"So for example if you have lspconfig like this :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"lspconfig"'}),`).html.setup{}
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"lspconfig"'}),`).clangd.setup{}
`]}})}}),`
`,r(i),`
`,n(e.p,{children:"Then running MasonInstallAll will install both the mason pkgs"}),`
`,n(e.p,{get children(){return["check ",n(e.code,{children:":h nvui.mason"})," for more info"]}}),`
`,n(e.h2,{children:"Mixing colors with base46"}),`
`,n(e.p,{get children(){return["Base46 now allows mixing of colors. Check the ",n(e.a,{href:"https://github.com/NvChad/base46/pull/262",children:"PR"})," to understand the usecases."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.base46 = {
  hl_override = {
     Function = { `,n(e.span,{className:"hljs-string",children:'"blue"'}),", ",n(e.span,{className:"hljs-string",children:'"red"'}),", ",n(e.span,{className:"hljs-number",children:"20"}),` }
  }
}
`]}})}}),`
`,n(e.h2,{children:"Volt framework"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/volt.webp",alt:"volt"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Plugin to create interactive UI in Neovim, clickable & hoverable!"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"This release v3.0 was going to be a huge one as the volt ui framework was being built in this UI plugin itself."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"But for the greater good I decided it to be a standalone plugin and all its helper plugins are standalone plugins."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"So All Neovim users will benefit from it and they're general plugins now!"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["Check the ",n(e.a,{href:"/news/volt",children:"blog post"})," showcasing volt framework and its plugins."]}}),`
`]}}),`
`]}})]}function m(l={}){const{wrapper:e}={...a(),...l.components};return e?n(e,c(l,{get children(){return n(s,l)}})):s(l)}export{m as default,p as meta};
