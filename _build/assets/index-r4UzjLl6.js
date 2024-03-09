import{b as n,m as f,i as t,t as l,j as a,k as N,n as k,p as x}from"./web-BodIy5GG.js";import{M as s}from"./index-Cy02P5WC.js";import{A as C}from"./components-X6nCsk4M.js";import"./routing-C9Kny7Fw.js";var m=l("<br>"),j=l('<iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen>'),$=l("<u>NvDash"),M=l('<iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;>');const z={heading:"NvChad v2.0 released!",details:"This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",cover:"v2.0.webp"};function g(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...r.components};return[n(e.h1,{children:"Announcing NvChad v2.0"}),`
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
`,t(m),`
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
`,t(j),`
`]}}),`
`]}}),`
`,t(m),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),`
`,n(e.h2,{children:"NvDash"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[t($)," is the command"]}}),`
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
`,t(M),`
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
`]}})]}function T(r={}){const{wrapper:e}={...s(),...r.components};return e?n(e,f(r,{get children(){return n(g,r)}})):g(r)}const S=Object.freeze(Object.defineProperty({__proto__:null,default:T,meta:z},Symbol.toStringTag,{value:"Module"}));var I=l("<u>"),p=l("<br>");const R={heading:"Breaking changes in v2.0",details:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",cover:"v2.0_migration.svg"};function v(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...r.components};return[n(e.h1,{children:"Breaking changes in v2.0"}),`
`,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0_migration.svg",alt:"v2.0 poster"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old NvChad."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"To use v2.0, you have to delete all old Neovim dirs (backup custom dir) and then re-install NvChad again"}),`
`]}}),`
`]}}),`
`,n(e.h2,{children:"Lazy.nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This release uses lazy.nvim instead of packer.nvim for plugin management."}),`
`,n(e.li,{get children(){return["The ",n(e.code,{children:"M.plugins"})," variable in chadrc expects a string now instead of table."]}}),`
`,n(e.li,{get children(){return["The string should be path of your file which returns a table, example : ",(()=>{var i=t(I);return a(i,n(e.strong,{children:"custom/plugins.lua"})),i})()]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"--  before "}),`
M.plugins = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"--  now"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),`
`,t(p),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:'Rename your custom plugins dir to something else, like configs etc. It shouldnt be "plugins" (as per our example)  and update the path in your custom plugins table.'}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Also old plugin syntax has some slight changes now (as per lazy.nvim's syntax)"}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before"}),`
[`,n(e.span,{className:"hljs-string",children:'"some plugin"'}),` ] = { options } 
 
`,n(e.span,{className:"hljs-comment",children:"-- now"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"some plugin"'}),`,
   options
}
`]}})}}),`
`,t(p),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://github.com/folke/lazy.nvim#examples",children:"lazy.nvim docs"})," to know how it works & its syntax."]}}),`
`]}}),`
`,n(e.h2,{children:"Override opts"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"override_opts"})," which was used to override default plugin configs is now ",n(e.code,{children:"opts"})]}}),`
`]}}),`
`,n(e.h2,{children:"NvChad ui options"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"These options can now be directly changed from chadrc file"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before "}),`
[`,n(e.span,{className:"hljs-string",children:'"NvChad/ui"'}),`] = {
     override_opts = {
         statusline = {
             separator_style  = `,n(e.span,{className:"hljs-string",children:'"round"'}),` 
          }
     }
}

`,n(e.span,{className:"hljs-comment",children:"-- now "}),`
M.ui = {
    statusline = {
         separator_style = `,n(e.span,{className:"hljs-string",children:'"round"'}),`
     }
}
`]}})}}),`
`,n(e.h2,{children:"Removed Alpha-nvim"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Its replaced by our own dashboard module which has a simple config & is lightweight."}),`
`,n(e.li,{get children(){return["Check the NvDash config in the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",children:"default_config file"})]}}),`
`]}}),`
`,n(e.h2,{children:"Removed commands & mappings"}),`
`,n(e.p,{get children(){return["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ",n(e.a,{href:"http://nvchad.com/docs/api",children:"api functions docs"}),"."]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Removed commands"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Tbufpick , TbufLeft, TbufRight"}),`
`]}}),`
`,n(e.p,{get children(){return n(e.strong,{children:"Removed mappings"})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"\\"})," (to trigger tbufpick)."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"leader + tt"})," (for toggling themes)"]}}),`
`]}})]}function A(r={}){const{wrapper:e}={...s(),...r.components};return e?n(e,f(r,{get children(){return n(v,r)}})):v(r)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:A,meta:R},Symbol.toStringTag,{value:"Module"}));var L=l('<div m="y-5 xl:y-10 x-auto"px-3 max=w-[1700px]><div grid gap-5 class="md:grid-cols-2 2xl:grid-cols-4">'),O=l("<button bg-blue-6 text-white-1 dark:bg-blue-3 dark:text-dark-1 px-5>Read More"),P=l('<div border="slate 0 dark:dark-4 solid"class="shadow-xl flex flex-col gap-4 items-start"bg=dark:dark-3><img w-full rounded-t-lg loading=lazy><div h-full flex flex-col gap-4 justify-between p-10 pt-5><div><h2 class=m-0 pb-5></h2><p text-lg class="m-0 p-0"></p></div><!$><!/>');const B=r=>Object.entries(r).map(([e,i])=>({link:e.replace(/^\.\/|\.mdx$/g,""),...i.meta})),X=B(Object.assign({"./v2.0.mdx":S,"./v2.0_migration.mdx":D}));function Y(){return(()=>{var r=t(L),e=r.firstChild;return a(e,()=>X.map(i=>(()=>{var h=t(P),c=h.firstChild,o=c.nextSibling,d=o.firstChild,u=d.firstChild,b=u.nextSibling,w=d.nextSibling,[y,_]=N(w.nextSibling);return a(u,()=>i.heading),a(b,()=>i.details),a(o,n(C,{get href(){return i.link},get children(){return t(O)}}),y,_),k(()=>x(c,"src",`/news/${i.cover}`)),h})())),r})()}export{Y as default};
