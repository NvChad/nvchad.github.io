import{b as n,q as je,g as C,a as t,i as l,t as M}from"./entry-client-66f42a9f.js";import{M as z}from"./index-29714db3.js";const we=M("<u></u>",2),ke=M('<div id="DocContent" class="news"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><br><!#><!/><!#><!/><br><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div>',48),Ce={heading:"Breaking changes in v2.0",details:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",cover:"v2.0_migration.svg"};function T(r){const e=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",h2:"h2",code:"code",strong:"strong",pre:"pre",span:"span",a:"a"},z(),r.components);return(()=>{const i=C(ke),R=i.firstChild,[s,O]=t(R.nextSibling),D=s.nextSibling,[c,L]=t(D.nextSibling),q=c.nextSibling,[a,A]=t(q.nextSibling),B=a.nextSibling,[o,I]=t(B.nextSibling),P=o.nextSibling,[h,X]=t(P.nextSibling),E=h.nextSibling,[g,H]=t(E.nextSibling),F=g.nextSibling,G=F.nextSibling,[d,J]=t(G.nextSibling),K=d.nextSibling,[u,Q]=t(K.nextSibling),U=u.nextSibling,V=U.nextSibling,[m,W]=t(V.nextSibling),Y=m.nextSibling,[p,Z]=t(Y.nextSibling),ee=p.nextSibling,[_,ne]=t(ee.nextSibling),ie=_.nextSibling,[b,le]=t(ie.nextSibling),te=b.nextSibling,[$,re]=t(te.nextSibling),se=$.nextSibling,[x,ce]=t(se.nextSibling),ae=x.nextSibling,[v,oe]=t(ae.nextSibling),he=v.nextSibling,[S,ge]=t(he.nextSibling),de=S.nextSibling,[f,ue]=t(de.nextSibling),me=f.nextSibling,[y,pe]=t(me.nextSibling),_e=y.nextSibling,[N,be]=t(_e.nextSibling),$e=N.nextSibling,[j,xe]=t($e.nextSibling),ve=j.nextSibling,[w,Se]=t(ve.nextSibling),fe=w.nextSibling,[ye,Ne]=t(fe.nextSibling);return l(i,n(e.h1,{children:"# Breaking changes in v2.0"}),s,O),l(i,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0_migration.svg",alt:"v2.0 poster"})}}),c,L),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old nvchad."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"To use v2.0 , you have to delete all old neovim dirs ( backup custom dir ) and then re-install nvchad again"}),`
`]}}),`
`]}}),a,A),l(i,n(e.h2,{children:"Lazy.nvim"}),o,I),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This release uses lazy.nvim instead of packer.nvim for plugin management."}),`
`,n(e.li,{get children(){return["The ",n(e.code,{children:"M.plugins"})," variable in chadrc expects a string now instead of table."]}}),`
`,n(e.li,{get children(){return["The string should be path of your file which returns a table, example : ",(()=>{const k=C(we);return l(k,n(e.strong,{children:"custom/plugins.lua"})),k})()]}}),`
`]}}),h,X),l(i,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"--  before "}),`
M.plugins = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"--  now"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),g,H),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:'Rename your custom plugins dir to something else, like configs etc. It shouldnt be "plugins" ( as per our example )  and update the path in your custom plugins table.'}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Also old plugin syntax has some slight changes now ( as per lazy.nvim's syntax )"}),`
`]}}),`
`]}}),d,J),l(i,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before"}),`
[`,n(e.span,{className:"hljs-string",children:'"some plugin"'}),` ] = { options } 
 
`,n(e.span,{className:"hljs-comment",children:"-- now"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"some plugin"'}),`,
   options
}
`]}})}}),u,Q),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Check ",n(e.a,{href:"https://github.com/folke/lazy.nvim#examples",children:"lazy.nvim docs"})," to know how it works & its syntax."]}}),`
`]}}),m,W),l(i,n(e.h2,{children:"Override opts"}),p,Z),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"override_opts"})," which was used to overridin default plugin configs is now ",n(e.code,{children:"opts"})]}}),`
`]}}),_,ne),l(i,n(e.h2,{children:"NvChad ui options"}),b,le),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"These options can now be directly changed from chadrc file"}),`
`]}}),$,re),l(i,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before "}),`
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
`]}})}}),x,ce),l(i,n(e.h2,{children:"Removed Alpha-nvim"}),v,oe),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Its replaced by our own dashboard module which has a simple config & is lightweight."}),`
`,n(e.li,{get children(){return["Check the NvDash config in the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",children:"default_config file"})]}}),`
`]}}),S,ge),l(i,n(e.h2,{children:"Removed commands & mappings"}),f,ue),l(i,n(e.p,{get children(){return["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ",n(e.a,{href:"http://nvchad.com/#/docs/api",children:"api functions docs"}),"."]}}),y,pe),l(i,n(e.p,{get children(){return n(e.strong,{children:"Removed commands"})}}),N,be),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Tbufpick , TbufLeft, TbufRight"}),`
`]}}),j,xe),l(i,n(e.p,{get children(){return n(e.strong,{children:"Removed mappings"})}}),w,Se),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"\\"})," ( to trigger tbufpick)."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"leader + tt"})," ( for toggling themes )"]}}),`
`]}}),ye,Ne),i})()}function Te(r={}){const{wrapper:e}=Object.assign({},z(),r.components);return e?n(e,je(r,{get children(){return n(T,r)}})):T(r)}const Re=Object.freeze(Object.defineProperty({__proto__:null,default:Te,meta:Ce},Symbol.toStringTag,{value:"Module"}));export{Re as _};
