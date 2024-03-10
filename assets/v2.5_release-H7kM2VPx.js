import{createComponent as n,mergeProps as o,ssr as r,ssrHydrationKey as i}from"solid-js/web";import{useMDXComponents as l}from"solid-mdx";var a=["<br",">"],s=["<iframe",' src="https://www.youtube.com/embed/xytzreFq_us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen"></iframe>'],d=["<u",">NvDash</u>"],u=["<iframe",' src="https://www.youtube.com/embed/IljDD4cjgKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;"></iframe>'];const m={title:"NvChad v2.0 released!",desc:"New UI features & using lazy.nvim. Improvements in startuptime, using base46 theme plugin as theme compiler",cover:"v2.0.webp"};function h(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...t.components};return[n(e.h1,{children:"Announcing NvChad v2.0"}),`
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
`,r(a,i()),`
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
`,r(s,i()),`
`]}}),`
`]}}),`
`,r(a,i()),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),`
`,n(e.h2,{children:"NvDash"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[r(d,i())," is the command"]}}),`
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
`,r(u,i()),`
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
`]}})]}function g(t={}){const{wrapper:e}={...l(),...t.components};return e?n(e,o(t,{get children(){return n(h,t)}})):h(t)}const y=Object.freeze(Object.defineProperty({__proto__:null,default:g,meta:m},Symbol.toStringTag,{value:"Module"}));var p=["<br",">"];const f={title:"NvChad v2.5 released!",desc:"Minor NvChad release with standard neovim config structure, new 7 themes, UI Term module replacing nvterm.",cover:"v2.5.webp"};function c(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...l(),...t.components};return[n(e.h1,{children:"NvChad v2.5 Released!"}),`
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
`,n(e.p,{children:`7 New themes for base46:
flexoki,
jabuti,
poimandres,
mito-laser
nano-light,
flexoki-light,
chadracula-evondev`}),`
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
`,n(e.li,{get children(){return["git clone ",n(e.a,{href:"https://github.com/NvChad/starter",children:"starter repo"})," as your nvim config."]}}),`
`,n(e.li,{get children(){return["Go through the new ",n(e.a,{href:"https://github.com/NvChad/NvChad/tree/v2.5",children:"module structure of nvchad"})," which will be used as your plugin."]}}),`
`,n(e.li,{get children(){return["You can use this ",n(e.a,{href:"https://gist.github.com/siduck/048bed2e7570569e6b327b35d1715404",children:"shell script"})," ( unix only ) to automate your migration."]}}),`
`]}}),`
`,r(p,i()),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"For Manual Migration, do the following:"}),`
`,n(e.li,{get children(){return["Move All of your custom dir files to the ",n(e.code,{children:"lua"})," dir of starter config"]}}),`
`,n(e.li,{get children(){return["Remove all instances of ",n(e.code,{children:"custom."}),` word in all your files, example
`,n(e.code,{children:"require('custom.options')"})," -> ",n(e.code,{children:"require('options')"})]}}),`
`,n(e.li,{get children(){return["Check the new ",n(e.a,{href:"https://nvchad.com/docs/config/mappings",children:"mappings syntax"})," and the ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/2688",children:"pinned issue"})," for some recipes."]}}),`
`,n(e.li,{get children(){return["replace ",n(e.code,{children:'require "plugin.configs.lspconfig"'})," with ",n(e.code,{children:"require('nvchad.configs.lspconfig').defaults()"})]}}),`
`,n(e.li,{get children(){return["Check the term module ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#term",children:"docs"})]}}),`
`,n(e.li,{get children(){return["Check statusline/tabufline overriding syntax ",n(e.a,{href:"http://nvchad.com/docs/config/nvchad_ui#statusline___tabufline",children:"docs"})]}}),`
`]}}),`
`,n(e.h2,{children:"New Themes"}),`
`,n(e.h3,{children:"Jabuti"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/jabuti.webp",alt:"jabuti theme"})}}),`
`,n(e.h3,{children:"flexoki"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki.webp",alt:"flexoki theme"})}}),`
`,n(e.h3,{children:"poimandres"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/poimandres.webp",alt:"poimandres theme"})}}),`
`,n(e.h3,{children:"mito-laser"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/mito-laser.webp",alt:"mito-laser theme"})}}),`
`,n(e.h3,{children:"chadracula-evondev"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/chadracula-evondev.webp",alt:"chadracula-evondev theme"})}}),`
`,n(e.h3,{children:"nano-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/nano-light.webp",alt:"nano-light theme"})}}),`
`,n(e.h3,{children:"flexoki-light"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/themes/flexoki-light.webp",alt:"flexoki-light theme"})}})]}function v(t={}){const{wrapper:e}={...l(),...t.components};return e?n(e,o(t,{get children(){return n(c,t)}})):c(t)}const _=Object.freeze(Object.defineProperty({__proto__:null,default:v,meta:f},Symbol.toStringTag,{value:"Module"}));export{y as _,_ as a};
