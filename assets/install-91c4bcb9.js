import{c as _,d as S,g as b,a as l,i,b as m,t as u,f as p,e as C,r as f}from"./entry-client-29c1bbcd.js";const k=u('<button><div text-base=""></div><!#><!/></button>',6),N=u('<div grid="" gap-5=""><div class="[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3"><!#><!/><!#><!/><!#><!/></div><pre class="hljs"></pre></div>',12),[w,E]=_("Linux / Macos"),v="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",M="git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",O=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[D,L]=_(v),g=s=>{const{cmd:t,os:n,icon:o}=s;return(()=>{const e=b(k),c=e.firstChild,a=c.nextSibling,[d,r]=l(a.nextSibling);return e.$$click=()=>{E(n),L(t)},p(c,o),i(e,n,d,r),C(()=>p(e,`!text-vsm ${w()==n?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),f(),e})()},H=()=>(()=>{const s=b(N),t=s.firstChild,n=t.firstChild,[o,e]=l(n.nextSibling),c=o.nextSibling,[a,d]=l(c.nextSibling),r=a.nextSibling,[$,h]=l(r.nextSibling),x=t.nextSibling;return i(t,m(g,{os:"Linux / Macos",cmd:v,icon:"i-mingcute:hashtag-fill"}),o,e),i(t,m(g,{os:"Windows",cmd:M,icon:"i-mdi:windows"}),a,d),i(t,m(g,{os:"Docker",cmd:O,icon:"i-nonicons:docker-16"}),$,h),i(x,D),s})();S(["click"]);export{H as O,E as s};