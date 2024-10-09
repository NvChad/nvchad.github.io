import{b as n,q as a,k as t,t as i}from"./web-DqPol8Cv.js";import{M as l}from"./index-yHsRVhWw.js";var m=i('<div class=iframe-container><iframe src="https://www.youtube.com/embed/lhwcaAS66nQ?si=VYvg44IiJB6k9PPU"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>'),c=i("<br>"),g=i('<div class=iframe-container><iframe width=560 height=315 src="https://www.youtube.com/embed/eUnDUhYoNJg?si=t9BxDCsA9ru1eXox"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>');const p={title:"UI plugin v3.0",desc:"NvChad's Base46 and UI plugin can now be used by non nvchad users! docs at :h nvui",cover:"nvui.webp",order:3};function s(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...r.components};return[n(e.h1,{children:"NvUI v3.0 ( NvChad's UI + Base46 )"}),`
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
`,t(m),`
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

## Removed

- Nvim-colorizer plugin
- Default gitsigns mappings

`]}})}}),`
`,t(c),`
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
`,t(g),`
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
`,t(c),`
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
`,t(c),`
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
`]}})]}function f(r={}){const{wrapper:e}={...l(),...r.components};return e?n(e,a(r,{get children(){return n(s,r)}})):s(r)}const $=Object.freeze(Object.defineProperty({__proto__:null,default:f,meta:p},Symbol.toStringTag,{value:"Module"}));var o=i("<br>"),b=i('<iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen>'),v=i("<u>NvDash"),w=i('<iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen>');const y={title:"NvChad v2.0 released!",desc:"New UI features & using lazy.nvim. Improvements in startuptime, using base46 theme compiler",cover:"v2.0.webp",order:1};function h(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...r.components};return[n(e.h1,{children:"Announcing NvChad v2.0"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0.webp",alt:"v2.0 poster"})}}),`
`,n(e.h2,{children:"Changelog"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`
## Added

- Lazy.nvim `,n(e.span,{className:"hljs-built_in",children:"package"}),` manager
- NvDash (dashboard `,n(e.span,{className:"hljs-built_in",children:"module"}),`)
- Multiple statusline themes : vscode, vscode_colored, minimal. 
- Some cmp styles : flat_light, flat_dark, atom, atom_colored
- NvCheatsheet, a mappings cheatsheet with `,n(e.span,{className:"hljs-number",children:"2"}),` themes (grid & simple)
- Ported `,n(e.span,{className:"hljs-number",children:"13"}),` new themes to base46 
- Made base46 generate compiled cache of highlight groups.
- Make some chadrc ui options auto-reloadable.
- Added types `,n(e.span,{className:"hljs-keyword",children:"for"}),` chadrc options.


## Changed 

- Made nvchad_ui options overridable from chadrc itself.
- Refactored our telescope extensions, made them more minimal.
- override_opts is renamed to opts (cuz lazy.nvim handles it now)
- M.plugins `,n(e.span,{className:"hljs-keyword",children:"in"})," chadrc now expects only a ",n(e.span,{className:"hljs-built_in",children:"string"}),`


## Removed

- Alpha.nvim dashboard plugin
- Packer.nvim `,n(e.span,{className:"hljs-built_in",children:"package"}),` manager
- Impatient.nvim as lazy.nvim handles cache part too.

`]}})}}),`
`,t(o),`
`,n(e.p,{get children(){return["NvChad ",n(e.code,{children:"v2.0"}),", a new release is now available, after all these months! From this release onwards, NvChad will take care about stability & exciting featuers at the same time."]}}),`
`,n(e.p,{get children(){return["Meaning that each release ",n(e.strong,{children:"(version like v3.0 v4.0 etc)"})," will be maintained in their own separate branches.  New versions will release based on new features, bug fixes will still be done in older versions of NvChad."]}}),`
`,n(e.p,{children:"So Whats new in this release?"}),`
`,n(e.h2,{children:"Using lazy.nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Lazy.nvim is used as the package manager, replacing packer so obviously it has minor syntax changes."}),`
`]}}),`
`,n(e.h2,{children:"Cachifying base46"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Before base46 used to do some sort of computations like checking for user define highlight groups, highlight groups overrides, theme specific overrides i.e if user has changed colors in specific themes etc and then it would generate a final list of all highlight groups -> then load them."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now it base46 does all the computations beforehand (when its compile module runs) and then generates highlight group files in the form of bytecode which is faster to run."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now you can live-reload some parts of the UI table in chadrc."}),`
`,t(b),`
`]}}),`
`]}}),`
`,t(o),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),`
`,n(e.h2,{children:"NvDash"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[t(v)," is the command"]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}}),`
`,n(e.h2,{children:"New cmp styles"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Now we have around 4-5 cmp styles, you can remove their icons, cmp_kind text directly from chadrc itself now."}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}}),`
`,n(e.h2,{children:"Statusline themes"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"3 new statusline themes have been added! (the first one is the default)"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/statuslines.webp",alt:"NvChad statusline"})}}),`
`,n(e.h2,{children:"NvCheatsheet"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It will list both default & user keys and their descriptions."}),`
`,n(e.li,{children:"It has 2 themes (grid & simple)"}),`
`,n(e.li,{get children(){return["Command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),`
`,t(w),`
`,n(e.h2,{children:"Chadrc completion"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/features/chadrc_types.webp",alt:"chadrc types"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Big thanks to @Lucario387 for adding types to chadrc options. This will get you autocompletions for all NvChad options in the chadrc file!"}),`
`]}}),`
`,n(e.h2,{children:"Example_config"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To have a custom config quickstart, you can check the ",n(e.a,{href:"https://github.com/NvChad/example_config/",children:"example_config"}),". If you want something featureful, check its ",n(e.code,{children:"v2.0_featureful"})," branch."]}}),`
`]}}),`
`,n(e.h2,{children:"Notice To v1.0 users"}),`
`,n(e.p,{children:"As there's lazy.nvim being used in this release so this might be a breaking change for you, but dont worry, you can still use old NvChad version and slowly migrate to v2.0."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Migration changes are mentioned in this ",n(e.a,{href:"/news/v2.0_migration",children:"section"}),"."]}}),`
`]}})]}function N(r={}){const{wrapper:e}={...l(),...r.components};return e?n(e,a(r,{get children(){return n(h,r)}})):h(r)}const z=Object.freeze(Object.defineProperty({__proto__:null,default:N,meta:y},Symbol.toStringTag,{value:"Module"}));var _=i("<br>");const k={title:"NvChad v2.5 released!",desc:"Minor NvChad release with standard neovim config structure, new themes & term module.",cover:"v2.5.webp",order:2};function d(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return[n(e.h1,{children:"NvChad v2.5 Released!"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/v2.5.webp",alt:"v2.5 poster"})}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"This release is a minor release, only major changes in it are new config structure ( no custom config stuff), you will be using nvchad repo as plugin, like LazyVim does with its starter config. NvTerm is replaced by UI's term module"}),`
`]}}),`
`,n(e.h2,{children:"Changelog"}),`
`,n(e.h2,{children:"Added"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Starter template for NvChad which lets users use NvChad as a plugin, thus not needing custom config stuff."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:`11 New themes for base46:
flexoki,
jabuti,
poimandres,
mito-laser
nano-light,
flexoki-light,
chadracula-evondev,
material-darker,
material-lighter,
solarized_oska,
rosepine-dawn`}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Minimal terminal module which replaces nvterm which lets you created any amount of toggleable terminals , change bg color / highlights of each window etc."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"term table ( config ) in ui table of chadrc."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Integrations list of base46 so you can exclude/include integrations supported by base46."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Default lspconfig now exports on_init function which you can include in your custom lspconfig"}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["All nvchad modules will start with ",n(e.code,{children:"nvchad"})," , example : require('nvchad.options')"]}}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Changed"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"List of all defaults will be in lua/nvconfig instead of core/default_config"}),`
`,n(e.li,{children:"Overriding modules for tabufline/statusline, its a lot easier now."}),`
`,n(e.li,{children:"Extended_integrations syntax for base46"}),`
`,n(e.li,{get children(){return["Mappings no longer use nvchad's custom syntax. It uses nvim's ",n(e.code,{children:"vim.keymap.set"})]}}),`
`]}}),`
`,n(e.h2,{children:"Removed"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Custom config structure handling."}),`
`,n(e.li,{children:"Nvterm plugin"}),`
`,n(e.li,{children:"NvChad updater"}),`
`,n(e.li,{children:"chadrc's cmp options: border_color , selected_item_bg"}),`
`,n(e.li,{children:"tabufline, show_numbers"}),`
`]}}),`
`,n(e.h2,{children:"Migration"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Check the ",n(e.a,{href:"/docs/config/walkthrough",children:"Quick walkthrough doc"})," for having a basic understanding of how NvChad works now."]}}),`
`,n(e.li,{get children(){return["git clone ",n(e.a,{href:"https://github.com/NvChad/starter",children:"starter repo"})," as your nvim config."]}}),`
`,n(e.li,{get children(){return["Go through the new ",n(e.a,{href:"https://github.com/NvChad/NvChad/tree/v2.5",children:"module structure of nvchad"})," which will be used as your plugin."]}}),`
`,n(e.li,{get children(){return["You can use this ",n(e.a,{href:"https://gist.github.com/siduck/048bed2e7570569e6b327b35d1715404",children:"shell script"})," ( unix only ) to automate your migration."]}}),`
`]}}),`
`,t(_),`
`,n(e.p,{get children(){return n(e.strong,{children:"For Manual Migration :"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Move All of your custom dir files to the ",n(e.code,{children:"lua"})," dir of starter config"]}}),`
`,n(e.li,{get children(){return["Remove all instances of ",n(e.code,{children:"custom."}),` word in all your files, example
`,n(e.code,{children:"require('custom.options')"})," -> ",n(e.code,{children:"require('options')"})]}}),`
`,n(e.li,{get children(){return["Check the new ",n(e.a,{href:"https://nvchad.com/docs/config/mappings",children:"mappings syntax"})," and the ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/2688",children:"pinned issue"})," for some recipes."]}}),`
`,n(e.li,{get children(){return["replace ",n(e.code,{children:'require "plugin.configs.lspconfig"'})," with ",n(e.code,{children:"require('nvchad.configs.lspconfig').defaults()"})]}}),`
`,n(e.li,{get children(){return["Replace all instances of ",n(e.code,{children:"plugin.configs"})," with ",n(e.code,{children:"nvchad.configs"})]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Few docs to check again"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://nvchad.com/docs/config/lsp",children:"Lsp docs"})}}),`
`,n(e.li,{get children(){return["Check the term module ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#term",children:"docs"})," which is a replacement for nvterm."]}}),`
`,n(e.li,{get children(){return["Check statusline/tabufline overriding syntax ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#statusline___tabufline",children:"docs"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"New Themes"}),`
`,n(e.h3,{children:"Jabuti"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/jabuti.webp",alt:"jabuti theme"})}}),`
`,n(e.h3,{children:"Flexoki"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki.webp",alt:"flexoki theme"})}}),`
`,n(e.h3,{children:"Poimandres"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/poimandres.webp",alt:"poimandres theme"})}}),`
`,n(e.h3,{children:"Mito-laser"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/mito-laser.webp",alt:"mito-laser theme"})}}),`
`,n(e.h3,{children:"Chadracula-evondev"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/chadracula-evondev.webp",alt:"chadracula-evondev theme"})}}),`
`,n(e.h3,{children:"Nano-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/nano-light.webp",alt:"nano-light theme"})}}),`
`,n(e.h3,{children:"Flexoki-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki-light.webp",alt:"flexoki-light theme"})}}),`
`,n(e.h3,{children:"Material-darker"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/material-darker.webp",alt:"material-darker theme"})}}),`
`,n(e.h3,{children:"Material-lighter"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/material-lighter.webp",alt:"material-lighter theme"})}}),`
`,n(e.h3,{children:"Rosepine-dawn"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/rosepine-dawn.webp",alt:"rosepine-dawn theme"})}}),`
`,n(e.h3,{children:"Solarized_oska"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/solarized_oska.webp",alt:"solarized_oska theme"})}})]}function C(r={}){const{wrapper:e}={...l(),...r.components};return e?n(e,a(r,{get children(){return n(d,r)}})):d(r)}const U=Object.freeze(Object.defineProperty({__proto__:null,default:C,meta:k},Symbol.toStringTag,{value:"Module"}));var M=i('<div class=iframe-container><iframe width=560 height=315 src="https://www.youtube.com/embed/NHC4jLoR_zI?si=E9upX0ZWT-c5q7v6"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>'),j=i('<div class=iframe-container><iframe width=560 height=315 src="https://www.youtube.com/embed/VauET3tR2J4?si=cT1BTkgXweBTNZWW"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>');const x={title:"Volt framework",desc:"Build Interactive UI for Neovim using the Volt framework! 100% Mouse friendly",cover:"volt.webp",order:4};function u(r){const e={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...l(),...r.components};return[n(e.h1,{children:"Volt UI Framework"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/volt.webp",alt:"volt plugins"})}}),`
`,n(e.h2,{children:"Introduction"}),`
`,n(e.p,{children:"Volt is a Neovim plugin to create interactive UIs within Neovim!"}),`
`,n(e.h2,{children:"Volt Showcase"}),`
`,n(e.h2,{children:"Minty"}),`
`,n(e.p,{get children(){return["Beautiful color picker tool for Neovim. ",n(e.a,{href:"https://github.com/NvChad/minty",children:"repo url"})]}}),`
`,n(e.p,{get children(){return[n(e.img,{src:"https://github.com/user-attachments/assets/d499748b-d9c8-4a92-89ba-bfce1814c275",alt:"shades"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/504ba2a1-9d83-492c-9913-f0e159ef9ad8",alt:"huefy"})]}}),`
`,t(M),`
`,n(e.h2,{children:"Menu"}),`
`,n(e.p,{get children(){return["Extensible menu & sub-menus creator . ",n(e.a,{href:"https://github.com/NvChad/menu",children:"repo url"})]}}),`
`,n(e.p,{get children(){return[n(e.img,{src:"https://github.com/user-attachments/assets/c8402279-b86d-432f-ad11-14a76c887ab1",alt:"image"}),`
`,n(e.img,{src:"https://github.com/user-attachments/assets/d70430e1-74d2-40dd-ba60-0b8919d53af6",alt:"image"})]}}),`
`,t(j)]}function I(r={}){const{wrapper:e}={...l(),...r.components};return e?n(e,a(r,{get children(){return n(u,r)}})):u(r)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:I,meta:x},Symbol.toStringTag,{value:"Module"}));export{$ as _,z as a,U as b,D as c};
