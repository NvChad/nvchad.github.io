import{ssr as o,ssrHydrationKey as e,escape as t,createComponent as i,ssrAttribute as l}from"solid-js/web";import{createSignal as d}from"solid-js";var h=["<button",' class="','"><div'," text-base></div><!--$-->","<!--/--></button>"],v=["<div",' grid gap-5><div flex flex-wrap class="[&amp;_button]:p-3" gap-3><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></div><!--$-->","<!--/--></div>"],r=["<pre",' class="hljs">',"</pre>"];const[g,w]=d("Linux / Macos"),m="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",u=[`# if you're using Command Prompt(CMD) 

git clone https://github.com/NvChad/NvChad %USERPROFILE%\\AppData\\Local\\nvim --depth 1 && nvim`,`# if you're using PowerShell(pwsh) 

git clone https://github.com/NvChad/NvChad $ENV:USERPROFILE\\AppData\\Local\\nvim --depth 1 && nvim`,`# if the above path doesnt work, try any of these paths :

# for CMD
%LOCALAPPDATA%\\nvim 

C:\\Users\\%USERNAME%\\AppData\\Local\\nvim 

# for PowerShell
$ENV:LOCALAPPDATA\\nvim 

C:\\Users\\$ENV:USERNAME\\AppData\\Local\\nvim`],b=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[a,N]=d(m),n=s=>{const{cmd:C,os:c,icon:p}=s;return o(h,e(),`!text-vsm ${g()==c?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`,l("class",t(p,!0),!1),t(c))},L=()=>o(v,e(),t(i(n,{os:"Linux / Macos",cmd:m,icon:"i-mingcute:hashtag-fill"})),t(i(n,{os:"Windows",cmd:u,icon:"i-mdi:windows"})),t(i(n,{os:"Docker",cmd:b,icon:"i-nonicons:docker-16"})),typeof a()=="string"?o(r,e(),t(a())):t(a().map(s=>o(r,e(),t(s)))));export{L as O,N as a,b as d,w as s};
