import{c as x,e as A,g as d,a,i as n,b as p,h as L,t as h,f as b,d as M,r as O}from"./entry-client-c584cbe2.js";const D=h("<button><div text-base></div><!#><!/>"),y=h('<div grid gap-5><div flex flex-wrap class="[&amp;_button]:p-3" gap-3><!#><!/><!#><!/><!#><!/></div><!#><!/>'),u=h('<pre class="hljs">'),[R,P]=x("Linux / Macos"),S="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",U=["git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",`# if the above path doesnt work, try any of these paths :

%LOCALAPPDATA%\\nvim 

%USERPROFILE%AppDataLocal\\nvim 

C:Users%USERNAME%AppDataLocal\\nvim`],j=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[_,H]=x(S),$=i=>{const{cmd:t,os:s,icon:o}=i;return(()=>{const e=d(D),c=e.firstChild,l=c.nextSibling,[m,g]=a(l.nextSibling);return e.$$click=()=>{P(s),H(t)},b(c,o),n(e,s,m,g),M(()=>b(e,`!text-vsm ${R()==s?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),O(),e})()},F=()=>(()=>{const i=d(y),t=i.firstChild,s=t.firstChild,[o,e]=a(s.nextSibling),c=o.nextSibling,[l,m]=a(c.nextSibling),g=l.nextSibling,[f,C]=a(g.nextSibling),k=t.nextSibling,[w,N]=a(k.nextSibling);return n(t,p($,{os:"Linux / Macos",cmd:S,icon:"i-mingcute:hashtag-fill"}),o,e),n(t,p($,{os:"Windows",cmd:U,icon:"i-mdi:windows"}),l,m),n(t,p($,{os:"Docker",cmd:j,icon:"i-nonicons:docker-16"}),f,C),n(i,(()=>{const E=L(()=>typeof _()=="string");return()=>E()?(()=>{const r=d(u);return n(r,_),r})():_().map(r=>(()=>{const v=d(u);return n(v,r),v})())})(),w,N),i})();A(["click"]);export{F as O,H as a,j as d,P as s};
