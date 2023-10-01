import{b as n,n as tn,g as P,a as t,i as l,t as q}from"./entry-client-82ac7634.js";import{M as B}from"./index-1cafb174.js";const ln=q("<u>NvDash"),rn=q('<div id="DocContent" class="news"><!#><!/><!#><!/><div my-10><!#><!/><!#><!/></div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><div class="iframe-container"><iframe src="https://www.youtube.com/embed/xytzreFq_us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen"></iframe></div><br><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><div class="iframe-container"><iframe src="https://www.youtube.com/embed/IljDD4cjgKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="fullscreen;"></iframe></div><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/>'),an={heading:"NvChad v2.0 released!",details:"This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",cover:"v2.0.webp"};function U(r){const e=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",a:"a"},B(),r.components);return(()=>{const i=P(rn),E=i.firstChild,[s,F]=t(E.nextSibling),R=s.nextSibling,[o,X]=t(R.nextSibling),a=o.nextSibling,Y=a.firstChild,[c,K]=t(Y.nextSibling),W=c.nextSibling,[G,H]=t(W.nextSibling),J=a.nextSibling,[h,Q]=t(J.nextSibling),V=h.nextSibling,[d,Z]=t(V.nextSibling),ee=d.nextSibling,[g,ne]=t(ee.nextSibling),ie=g.nextSibling,[u,te]=t(ie.nextSibling),le=u.nextSibling,[m,re]=t(le.nextSibling),ae=m.nextSibling,[_,se]=t(ae.nextSibling),oe=_.nextSibling,[b,ce]=t(oe.nextSibling),he=b.nextSibling,de=he.nextSibling,ge=de.nextSibling,[p,ue]=t(ge.nextSibling),me=p.nextSibling,[$,_e]=t(me.nextSibling),be=$.nextSibling,[f,pe]=t(be.nextSibling),$e=f.nextSibling,[x,fe]=t($e.nextSibling),xe=x.nextSibling,[v,ve]=t(xe.nextSibling),Se=v.nextSibling,[S,we]=t(Se.nextSibling),ye=S.nextSibling,[w,Ne]=t(ye.nextSibling),Ce=w.nextSibling,[y,ke]=t(Ce.nextSibling),je=y.nextSibling,[N,Me]=t(je.nextSibling),ze=N.nextSibling,[C,Ie]=t(ze.nextSibling),De=C.nextSibling,[k,Te]=t(De.nextSibling),Ae=k.nextSibling,[j,Le]=t(Ae.nextSibling),Oe=j.nextSibling,[M,Pe]=t(Oe.nextSibling),Ue=M.nextSibling,qe=Ue.nextSibling,[z,Be]=t(qe.nextSibling),Ee=z.nextSibling,[I,Fe]=t(Ee.nextSibling),Re=I.nextSibling,[D,Xe]=t(Re.nextSibling),Ye=D.nextSibling,[T,Ke]=t(Ye.nextSibling),We=T.nextSibling,[A,Ge]=t(We.nextSibling),He=A.nextSibling,[L,Je]=t(He.nextSibling),Qe=L.nextSibling,[O,Ve]=t(Qe.nextSibling),Ze=O.nextSibling,[en,nn]=t(Ze.nextSibling);return l(i,n(e.h1,{children:"Announcing NvChad v2.0"}),s,F),l(i,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0.webp",alt:"v2.0 poster"})}}),o,X),l(a,n(e.h2,{children:"Changelog"}),c,K),l(a,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`
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

`]}})}}),G,H),l(i,n(e.p,{get children(){return["NvChad ",n(e.code,{children:"v2.0"}),", a new release is now available, after all these months! From this release onwards, NvChad will take care about stability & exciting featuers at the same time."]}}),h,Q),l(i,n(e.p,{get children(){return["Meaning that each release ",n(e.strong,{children:"(version like v3.0 v4.0 etc)"})," will be maintained in their own separate branches.  New versions will release based on new features, bug fixes will still be done in older versions of NvChad."]}}),d,Z),l(i,n(e.p,{children:"So Whats new in this release?"}),g,ne),l(i,n(e.h2,{children:"Using lazy.nvim"}),u,te),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Lazy.nvim is used as the package manager, replacing packer so obviously it has minor syntax changes."}),`
`]}}),m,re),l(i,n(e.h2,{children:"Cachifying base46"}),_,se),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Before base46 used to do some sort of computations like checking for user define highlight groups, highlight groups overrides, theme specific overrides i.e if user has changed colors in specific themes etc and then it would generate a final list of all highlight groups -> then load them."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now it base46 does all the computations beforehand (when its compile module runs) and then generates highlight group files in the form of bytecode which is faster to run."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now you can live-reload some parts of the UI table in chadrc."}),`
`]}}),`
`]}}),b,ce),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),p,ue),l(i,n(e.h2,{children:"NvDash"}),$,_e),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[P(ln)," is the command"]}}),`
`]}}),f,pe),l(i,n(e.p,{get children(){return n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}}),x,fe),l(i,n(e.h2,{children:"New cmp styles"}),v,ve),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Now we have around 4-5 cmp styles, you can remove their icons, cmp_kind text directly from chadrc itself now."}),`
`]}}),S,we),l(i,n(e.p,{get children(){return n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}}),w,Ne),l(i,n(e.h2,{children:"Statusline themes"}),y,ke),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"3 new statusline themes have been added! (the first one is the default)"}),`
`]}}),N,Me),l(i,n(e.p,{get children(){return n(e.img,{src:"/features/statuslines.webp",alt:"NvChad statusline"})}}),C,Ie),l(i,n(e.h2,{children:"NvCheatsheet"}),k,Te),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It will list both default & user keys and their descriptions."}),`
`,n(e.li,{children:"It has 2 themes (grid & simple)"}),`
`,n(e.li,{get children(){return["Command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}}),`
`]}}),j,Le),l(i,n(e.p,{get children(){return n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),M,Pe),l(i,n(e.h2,{children:"Chadrc completion"}),z,Be),l(i,n(e.p,{get children(){return n(e.img,{src:"/features/chadrc_types.webp",alt:"chadrc types"})}}),I,Fe),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Big thanks to @Lucario387 for adding types to chadrc options. This will get you autocompletions for all NvChad options in the chadrc file!"}),`
`]}}),D,Xe),l(i,n(e.h2,{children:"Example_config"}),T,Ke),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To have a custom config quickstart, you can check the ",n(e.a,{href:"https://github.com/NvChad/example_config/",children:"example_config"}),". If you want something featureful, check its ",n(e.code,{children:"v2.0_featureful"})," branch."]}}),`
`]}}),A,Ge),l(i,n(e.h2,{children:"Notice To v1.0 users"}),L,Je),l(i,n(e.p,{children:"As there's lazy.nvim being used in this release so this might be a breaking change for you, but dont worry, you can still use old NvChad version and slowly migrate to v2.0."}),O,Ve),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Migration changes are mentioned in this ",n(e.a,{href:"/news/v2.0_migration",children:"section"}),"."]}}),`
`]}}),en,nn),i})()}function sn(r={}){const{wrapper:e}=Object.assign({},B(),r.components);return e?n(e,tn(r,{get children(){return n(U,r)}})):U(r)}const hn=Object.freeze(Object.defineProperty({__proto__:null,default:sn,meta:an},Symbol.toStringTag,{value:"Module"}));export{hn as _};
