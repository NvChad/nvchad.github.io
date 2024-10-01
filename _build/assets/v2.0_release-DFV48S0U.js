import{b as n,q as h,k as r,t as i}from"./web-DqPol8Cv.js";import{M as s}from"./index-yHsRVhWw.js";var a=i("<br>"),o=i('<iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen>'),c=i("<u>NvDash"),d=i('<iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>');const p={title:"NvChad v2.0 released!",desc:"New UI features & using lazy.nvim. Improvements in startuptime, using base46 theme compiler",cover:"v2.0.webp",order:1};function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...t.components};return[n(e.h1,{children:"Announcing NvChad v2.0"}),`
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
`,r(a),`
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
`,r(o),`
`]}}),`
`]}}),`
`,r(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),`
`,n(e.h2,{children:"NvDash"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[r(c)," is the command"]}}),`
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
`,r(d),`
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
`]}})]}function g(t={}){const{wrapper:e}={...s(),...t.components};return e?n(e,h(t,{get children(){return n(l,t)}})):l(t)}export{g as default,p as meta};
