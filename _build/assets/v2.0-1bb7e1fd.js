import{b as n,m as ln,i as U,k as l,j as t,t as B}from"./web-20758ba6.js";import{M as E}from"./index-16ef742e.js";var tn=B("<u>NvDash"),rn=B('<div id=DocContent class=news><!$><!/><!$><!/><div my-10><!$><!/><!$><!/></div><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><div class=iframe-container><iframe src=https://www.youtube.com/embed/xytzreFq_us title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen></iframe></div><br><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><div class=iframe-container><iframe src=https://www.youtube.com/embed/IljDD4cjgKc title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allow=fullscreen;></iframe></div><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>');const on={heading:"NvChad v2.0 released!",details:"This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",cover:"v2.0.webp"};function q(r){const e=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",a:"a"},E(),r.components);return(()=>{var i=U(rn),F=i.firstChild,[s,O]=l(F.nextSibling),R=s.nextSibling,[o,X]=l(R.nextSibling),a=o.nextSibling,Y=a.firstChild,[c,K]=l(Y.nextSibling),W=c.nextSibling,[G,H]=l(W.nextSibling),J=a.nextSibling,[h,Q]=l(J.nextSibling),V=h.nextSibling,[d,Z]=l(V.nextSibling),ee=d.nextSibling,[g,ne]=l(ee.nextSibling),ie=g.nextSibling,[u,le]=l(ie.nextSibling),te=u.nextSibling,[m,re]=l(te.nextSibling),ae=m.nextSibling,[$,se]=l(ae.nextSibling),oe=$.nextSibling,[b,ce]=l(oe.nextSibling),he=b.nextSibling,de=he.nextSibling,ge=de.nextSibling,[p,ue]=l(ge.nextSibling),me=p.nextSibling,[_,$e]=l(me.nextSibling),be=_.nextSibling,[x,pe]=l(be.nextSibling),_e=x.nextSibling,[v,xe]=l(_e.nextSibling),ve=v.nextSibling,[f,fe]=l(ve.nextSibling),Se=f.nextSibling,[S,we]=l(Se.nextSibling),ye=S.nextSibling,[w,Ne]=l(ye.nextSibling),Ce=w.nextSibling,[y,ke]=l(Ce.nextSibling),je=y.nextSibling,[N,Me]=l(je.nextSibling),ze=N.nextSibling,[C,Ie]=l(ze.nextSibling),De=C.nextSibling,[k,Ae]=l(De.nextSibling),Te=k.nextSibling,[j,Le]=l(Te.nextSibling),Pe=j.nextSibling,[M,Ue]=l(Pe.nextSibling),qe=M.nextSibling,Be=qe.nextSibling,[z,Ee]=l(Be.nextSibling),Fe=z.nextSibling,[I,Oe]=l(Fe.nextSibling),Re=I.nextSibling,[D,Xe]=l(Re.nextSibling),Ye=D.nextSibling,[A,Ke]=l(Ye.nextSibling),We=A.nextSibling,[T,Ge]=l(We.nextSibling),He=T.nextSibling,[L,Je]=l(He.nextSibling),Qe=L.nextSibling,[P,Ve]=l(Qe.nextSibling),Ze=P.nextSibling,[en,nn]=l(Ze.nextSibling);return t(i,n(e.h1,{children:"Announcing NvChad v2.0"}),s,O),t(i,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0.webp",alt:"v2.0 poster"})}}),o,X),t(a,n(e.h2,{children:"Changelog"}),c,K),t(a,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`
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

`]}})}}),G,H),t(i,n(e.p,{get children(){return["NvChad ",n(e.code,{children:"v2.0"}),", a new release is now available, after all these months! From this release onwards, NvChad will take care about stability & exciting featuers at the same time."]}}),h,Q),t(i,n(e.p,{get children(){return["Meaning that each release ",n(e.strong,{children:"(version like v3.0 v4.0 etc)"})," will be maintained in their own separate branches.  New versions will release based on new features, bug fixes will still be done in older versions of NvChad."]}}),d,Z),t(i,n(e.p,{children:"So Whats new in this release?"}),g,ne),t(i,n(e.h2,{children:"Using lazy.nvim"}),u,le),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Lazy.nvim is used as the package manager, replacing packer so obviously it has minor syntax changes."}),`
`]}}),m,re),t(i,n(e.h2,{children:"Cachifying base46"}),$,se),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Before base46 used to do some sort of computations like checking for user define highlight groups, highlight groups overrides, theme specific overrides i.e if user has changed colors in specific themes etc and then it would generate a final list of all highlight groups -> then load them."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now it base46 does all the computations beforehand (when its compile module runs) and then generates highlight group files in the form of bytecode which is faster to run."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Now you can live-reload some parts of the UI table in chadrc."}),`
`]}}),`
`]}}),b,ce),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",get children(){return n(e.code,{children:"theme page"})}})," for more details"]}}),`
`]}}),p,ue),t(i,n(e.h2,{children:"NvDash"}),_,$e),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,n(e.li,{get children(){return[U(tn)," is the command"]}}),`
`]}}),x,pe),t(i,n(e.p,{get children(){return n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}}),v,xe),t(i,n(e.h2,{children:"New cmp styles"}),f,fe),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Now we have around 4-5 cmp styles, you can remove their icons, cmp_kind text directly from chadrc itself now."}),`
`]}}),S,we),t(i,n(e.p,{get children(){return n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}}),w,Ne),t(i,n(e.h2,{children:"Statusline themes"}),y,ke),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"3 new statusline themes have been added! (the first one is the default)"}),`
`]}}),N,Me),t(i,n(e.p,{get children(){return n(e.img,{src:"/features/statuslines.webp",alt:"NvChad statusline"})}}),C,Ie),t(i,n(e.h2,{children:"NvCheatsheet"}),k,Ae),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It will list both default & user keys and their descriptions."}),`
`,n(e.li,{children:"It has 2 themes (grid & simple)"}),`
`,n(e.li,{get children(){return["Command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}}),`
`]}}),j,Le),t(i,n(e.p,{get children(){return n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}}),M,Ue),t(i,n(e.h2,{children:"Chadrc completion"}),z,Ee),t(i,n(e.p,{get children(){return n(e.img,{src:"/features/chadrc_types.webp",alt:"chadrc types"})}}),I,Oe),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Big thanks to @Lucario387 for adding types to chadrc options. This will get you autocompletions for all NvChad options in the chadrc file!"}),`
`]}}),D,Xe),t(i,n(e.h2,{children:"Example_config"}),A,Ke),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["To have a custom config quickstart, you can check the ",n(e.a,{href:"https://github.com/NvChad/example_config/",children:"example_config"}),". If you want something featureful, check its ",n(e.code,{children:"v2.0_featureful"})," branch."]}}),`
`]}}),T,Ge),t(i,n(e.h2,{children:"Notice To v1.0 users"}),L,Je),t(i,n(e.p,{children:"As there's lazy.nvim being used in this release so this might be a breaking change for you, but dont worry, you can still use old NvChad version and slowly migrate to v2.0."}),P,Ve),t(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Migration changes are mentioned in this ",n(e.a,{href:"/news/v2.0_migration",children:"section"}),"."]}}),`
`]}}),en,nn),i})()}function cn(r={}){const{wrapper:e}=Object.assign({},E(),r.components);return e?n(e,ln(r,{get children(){return n(q,r)}})):q(r)}export{cn as default,on as meta};
