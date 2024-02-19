import{e as x,h as w,i as d,k as o,j as i,b as g,a as L,t as h,q as u,n as D,r as M}from"./web-20758ba6.js";var P=h("<button><div text-base></div><!$><!/>"),O=h("<div grid gap-5><div flex flex-wrap class=[&amp;_button]:p-3 gap-3><!$><!/><!$><!/><!$><!/></div><!$><!/>"),b=h("<pre class=hljs>");const[R,y]=x("Linux / Macos"),C="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",U=[`# if you're using Command Prompt(CMD) 

git clone https://github.com/NvChad/NvChad %USERPROFILE%\\AppData\\Local\\nvim --depth 1 && nvim`,`# if you're using PowerShell(pwsh) 

git clone https://github.com/NvChad/NvChad $ENV:USERPROFILE\\AppData\\Local\\nvim --depth 1 && nvim`,`# if the above path doesnt work, try any of these paths :

# for CMD
%LOCALAPPDATA%\\nvim 

C:\\Users\\%USERNAME%\\AppData\\Local\\nvim 

# for PowerShell
$ENV:LOCALAPPDATA\\nvim 

C:\\Users\\$ENV:USERNAME\\AppData\\Local\\nvim`],j=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[v,V]=x(C),$=n=>{const{cmd:e,os:a,icon:s}=n;return(()=>{var t=d(P),l=t.firstChild,r=l.nextSibling,[m,p]=o(r.nextSibling);return t.$$click=()=>{y(a),V(e)},u(l,s),i(t,a,m,p),D(()=>u(t,`!text-vsm ${R()==a?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),M(),t})()},I=()=>(()=>{var n=d(O),e=n.firstChild,a=e.firstChild,[s,t]=o(a.nextSibling),l=s.nextSibling,[r,m]=o(l.nextSibling),p=r.nextSibling,[S,f]=o(p.nextSibling),N=e.nextSibling,[E,A]=o(N.nextSibling);return i(e,g($,{os:"Linux / Macos",cmd:C,icon:"i-mingcute:hashtag-fill"}),s,t),i(e,g($,{os:"Windows",cmd:U,icon:"i-mdi:windows"}),r,m),i(e,g($,{os:"Docker",cmd:j,icon:"i-nonicons:docker-16"}),S,f),i(n,(()=>{var k=L(()=>typeof v()=="string");return()=>k()?(()=>{var c=d(b);return i(c,v),c})():v().map(c=>(()=>{var _=d(b);return i(_,c),_})())})(),E,A),n})();w(["click"]);export{I as O,V as a,j as d,y as s};
