import{c as x,e as A,g as d,a as o,i as n,b as p,h as L,t as h,f as v,d as M,r as O}from"./entry-client-f4b1dc74.js";const D=h("<button><div text-base></div><!#><!/>"),y=h('<div grid gap-5><div flex flex-wrap class="[&amp;_button]:p-3" gap-3><!#><!/><!#><!/><!#><!/></div><!#><!/>'),u=h('<pre class="hljs">'),[R,P]=x("Linux / Macos"),S="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",U=["git clone https://github.com/NvChad/NvChad %USERPROFILE%\\AppData\\Local\\nvim --depth 1 && nvim",`# if the above path doesnt work, try any of these paths :

%LOCALAPPDATA%\\nvim 

C:Users\\%USERNAME%\\AppData\\Local\\nvim`],j=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[_,B]=x(S),$=i=>{const{cmd:t,os:s,icon:a}=i;return(()=>{const e=d(D),c=e.firstChild,l=c.nextSibling,[m,g]=o(l.nextSibling);return e.$$click=()=>{P(s),B(t)},v(c,a),n(e,s,m,g),M(()=>v(e,`!text-vsm ${R()==s?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),O(),e})()},H=()=>(()=>{const i=d(y),t=i.firstChild,s=t.firstChild,[a,e]=o(s.nextSibling),c=a.nextSibling,[l,m]=o(c.nextSibling),g=l.nextSibling,[f,C]=o(g.nextSibling),k=t.nextSibling,[w,N]=o(k.nextSibling);return n(t,p($,{os:"Linux / Macos",cmd:S,icon:"i-mingcute:hashtag-fill"}),a,e),n(t,p($,{os:"Windows",cmd:U,icon:"i-mdi:windows"}),l,m),n(t,p($,{os:"Docker",cmd:j,icon:"i-nonicons:docker-16"}),f,C),n(i,(()=>{const E=L(()=>typeof _()=="string");return()=>E()?(()=>{const r=d(u);return n(r,_),r})():_().map(r=>(()=>{const b=d(u);return n(b,r),b})())})(),w,N),i})();A(["click"]);export{H as O,B as a,j as d,P as s};
