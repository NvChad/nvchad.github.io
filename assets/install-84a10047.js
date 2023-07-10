import{c as C,d as D,g as m,a as n,i,b,h as y,t as u,f as S,e as R,r as P}from"./entry-client-b32c7a1d.js";const U=u("<button><div text-base></div><!#><!/>"),j=u('<div grid gap-5><div flex flex-wrap class="[&amp;_button]:p-3" gap-3><!#><!/><!#><!/><!#><!/></div><!#><!/>'),f=u('<pre class="hljs"> <!#><!/>'),[H,B]=C("Linux / Macos"),k="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",F=["git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",`# if the above path doesnt work, try any of these paths :

%LOCALAPPDATA%\\nvim 

%USERPROFILE%AppDataLocal\\nvim 

C:Users%USERNAME%AppDataLocal\\nvim`],I=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[v,T]=C(k),x=s=>{const{cmd:e,os:o,icon:c}=s;return(()=>{const t=m(U),r=t.firstChild,d=r.nextSibling,[_,g]=n(d.nextSibling);return t.$$click=()=>{B(o),T(e)},S(r,c),i(t,o,_,g),R(()=>S(t,`!text-vsm ${H()==o?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),P(),t})()},q=()=>(()=>{const s=m(j),e=s.firstChild,o=e.firstChild,[c,t]=n(o.nextSibling),r=c.nextSibling,[d,_]=n(r.nextSibling),g=d.nextSibling,[N,w]=n(g.nextSibling),E=e.nextSibling,[A,L]=n(E.nextSibling);return i(e,b(x,{os:"Linux / Macos",cmd:k,icon:"i-mingcute:hashtag-fill"}),c,t),i(e,b(x,{os:"Windows",cmd:F,icon:"i-mdi:windows"}),d,_),i(e,b(x,{os:"Docker",cmd:I,icon:"i-nonicons:docker-16"}),N,w),i(s,(()=>{const M=y(()=>typeof v()=="string");return()=>M()?(()=>{const l=m(f),a=l.firstChild,$=a.nextSibling,[p,h]=n($.nextSibling);return i(l,v,p,h),l})():v().map(l=>(()=>{const a=m(f),$=a.firstChild,p=$.nextSibling,[h,O]=n(p.nextSibling);return i(a,l,h,O),a})())})(),A,L),s})();D(["click"]);export{q as O,T as a,I as d,B as s};
