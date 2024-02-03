import{c as x,e as k,g as d,a as s,i as n,b as g,h as L,t as v,f as u,d as D,r as M}from"./entry-client-5337b336.js";const P=v("<button><div text-base></div><!#><!/>"),O=v('<div grid gap-5><div flex flex-wrap class="[&amp;_button]:p-3" gap-3><!#><!/><!#><!/><!#><!/></div><!#><!/>'),b=v('<pre class="hljs">'),[R,y]=x("Linux / Macos"),C="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",U=[`# if you're using Command Prompt(CMD) 

git clone https://github.com/NvChad/NvChad %USERPROFILE%\\AppData\\Local\\nvim --depth 1 && nvim`,`# if you're using PowerShell(pwsh) 

git clone https://github.com/NvChad/NvChad $ENV:USERPROFILE\\AppData\\Local\\nvim --depth 1 && nvim`,`# if the above path doesnt work, try any of these paths :

# for CMD
%LOCALAPPDATA%\\nvim 

C:\\Users\\%USERNAME%\\AppData\\Local\\nvim 

# for PowerShell
$ENV:LOCALAPPDATA\\nvim 

C:\\Users\\$ENV:USERNAME\\AppData\\Local\\nvim`],V=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[h,j]=x(C),$=i=>{const{cmd:t,os:o,icon:a}=i;return(()=>{const e=d(P),c=e.firstChild,l=c.nextSibling,[m,p]=s(l.nextSibling);return e.$$click=()=>{y(o),j(t)},u(c,a),n(e,o,m,p),D(()=>u(e,`!text-vsm ${R()==o?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),M(),e})()},I=()=>(()=>{const i=d(O),t=i.firstChild,o=t.firstChild,[a,e]=s(o.nextSibling),c=a.nextSibling,[l,m]=s(c.nextSibling),p=l.nextSibling,[S,f]=s(p.nextSibling),N=t.nextSibling,[E,A]=s(N.nextSibling);return n(t,g($,{os:"Linux / Macos",cmd:C,icon:"i-mingcute:hashtag-fill"}),a,e),n(t,g($,{os:"Windows",cmd:U,icon:"i-mdi:windows"}),l,m),n(t,g($,{os:"Docker",cmd:V,icon:"i-nonicons:docker-16"}),S,f),n(i,(()=>{const w=L(()=>typeof h()=="string");return()=>w()?(()=>{const r=d(b);return n(r,h),r})():h().map(r=>(()=>{const _=d(b);return n(_,r),_})())})(),E,A),i})();k(["click"]);export{I as O,j as a,V as d,y as s};
