import{b as n,m as we,i as C,k as t,j as l,t as M}from"./web-20758ba6.js";import{M as R}from"./index-16ef742e.js";var je=M("<u>"),ke=M("<div id=DocContent class=news><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><br><!$><!/><!$><!/><br><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>");const Me={heading:"Breaking changes in v2.0",details:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",cover:"v2.0_migration.svg"};function T(r){const e=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",h2:"h2",code:"code",strong:"strong",pre:"pre",span:"span",a:"a"},R(),r.components);return(()=>{var i=C(ke),z=i.firstChild,[s,D]=t(z.nextSibling),L=s.nextSibling,[a,O]=t(L.nextSibling),A=a.nextSibling,[c,B]=t(A.nextSibling),I=c.nextSibling,[o,X]=t(I.nextSibling),q=o.nextSibling,[h,E]=t(q.nextSibling),H=h.nextSibling,[g,P]=t(H.nextSibling),F=g.nextSibling,G=F.nextSibling,[d,J]=t(G.nextSibling),K=d.nextSibling,[u,Q]=t(K.nextSibling),U=u.nextSibling,V=U.nextSibling,[m,W]=t(V.nextSibling),Y=m.nextSibling,[p,Z]=t(Y.nextSibling),ee=p.nextSibling,[$,ne]=t(ee.nextSibling),ie=$.nextSibling,[_,le]=t(ie.nextSibling),te=_.nextSibling,[b,re]=t(te.nextSibling),se=b.nextSibling,[x,ae]=t(se.nextSibling),ce=x.nextSibling,[v,oe]=t(ce.nextSibling),he=v.nextSibling,[S,ge]=t(he.nextSibling),de=S.nextSibling,[f,ue]=t(de.nextSibling),me=f.nextSibling,[N,pe]=t(me.nextSibling),$e=N.nextSibling,[y,_e]=t($e.nextSibling),be=y.nextSibling,[w,xe]=t(be.nextSibling),ve=w.nextSibling,[j,Se]=t(ve.nextSibling),fe=j.nextSibling,[Ne,ye]=t(fe.nextSibling);return l(i,n(e.h1,{children:"Breaking changes in v2.0"}),s,D),l(i,n(e.p,{get children(){return n(e.img,{src:"/news/v2.0_migration.svg",alt:"v2.0 poster"})}}),a,O),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old NvChad."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"To use v2.0, you have to delete all old Neovim dirs (backup custom dir) and then re-install NvChad again"}),`
`]}}),`
`]}}),c,B),l(i,n(e.h2,{children:"Lazy.nvim"}),o,X),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This release uses lazy.nvim instead of packer.nvim for plugin management."}),`
`,n(e.li,{get children(){return["The ",n(e.code,{children:"M.plugins"})," variable in chadrc expects a string now instead of table."]}}),`
`,n(e.li,{get children(){return["The string should be path of your file which returns a table, example : ",(()=>{var k=C(je);return l(k,n(e.strong,{children:"custom/plugins.lua"})),k})()]}}),`
`]}}),h,E),l(i,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"--  before "}),`
M.plugins = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"--  now"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]}})}}),g,P),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:'Rename your custom plugins dir to something else, like configs etc. It shouldnt be "plugins" (as per our example)  and update the path in your custom plugins table.'}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Also old plugin syntax has some slight changes now (as per lazy.nvim's syntax)"}),`
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
`,n(e.li,{get children(){return[n(e.code,{children:"override_opts"})," which was used to override default plugin configs is now ",n(e.code,{children:"opts"})]}}),`
`]}}),$,ne),l(i,n(e.h2,{children:"NvChad ui options"}),_,le),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"These options can now be directly changed from chadrc file"}),`
`]}}),b,re),l(i,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- before "}),`
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
`]}})}}),x,ae),l(i,n(e.h2,{children:"Removed Alpha-nvim"}),v,oe),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Its replaced by our own dashboard module which has a simple config & is lightweight."}),`
`,n(e.li,{get children(){return["Check the NvDash config in the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",children:"default_config file"})]}}),`
`]}}),S,ge),l(i,n(e.h2,{children:"Removed commands & mappings"}),f,ue),l(i,n(e.p,{get children(){return["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ",n(e.a,{href:"http://nvchad.com/docs/api",children:"api functions docs"}),"."]}}),N,pe),l(i,n(e.p,{get children(){return n(e.strong,{children:"Removed commands"})}}),y,_e),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Tbufpick , TbufLeft, TbufRight"}),`
`]}}),w,xe),l(i,n(e.p,{get children(){return n(e.strong,{children:"Removed mappings"})}}),j,Se),l(i,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"\\"})," (to trigger tbufpick)."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"leader + tt"})," (for toggling themes)"]}}),`
`]}}),Ne,ye),i})()}function Re(r={}){const{wrapper:e}=Object.assign({},R(),r.components);return e?n(e,we(r,{get children(){return n(T,r)}})):T(r)}export{Re as default,Me as meta};
