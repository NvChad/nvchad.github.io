import{ssr as r,ssrHydrationKey as a,ssrAttribute as s,escape as e,createComponent as n}from"solid-js/web";import{createSignal as u,Show as f}from"solid-js";import{A as g}from"./components-BSOh2_Bn.js";import{u as m}from"./routing-BRsGL1iy.js";const b=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install"],["Post Install","quickstart/post-install"],["Learn basic Lua","quickstart/learn-lua"]]},{label:["Custom config","i-mdi-cog"],items:[["Walkthrough","config/walkthrough"],["Snippets","config/snippets"],["Manage Plugins","config/plugins"],["Syntax highlighting","config/syntax"],["LSP Configuration","config/lsp"],["Format & Lint","config/format_lint"],["Mappings","config/mappings"],["UI Customization","config/nvchad_ui"],["Customize colors","config/theming"]]},["Features","features","i-tabler:server-cog"],["Api Functions","api","i-mdi:atom-variant"],["Contributing","contribute","i-mdi-github"],["Faq","faq","i-octicon:question-16"],["Credits","credits","i-line-md:heart"]];var p=["<div",' class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3 pl-5>',"</div>"],h=["<div",' class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium><div',"></div> <!--$-->",'<!--/--></div><div class="','">',"</div></button><!--$-->","<!--/--></div>"],d=["<div"," i-octicon:chevron-down-12></div>"],c=["<div"," i-octicon:chevron-right-12></div>"],v=["<aside","",'><div h-full flex flex-col gap-5 class="[&amp;_*]:text-base dark:text-slate-4">',"</div></aside>"],x=["<div","></div>"];const[k,S]=u(!1);function w(i){const t=i.labels.filter(l=>m().pathname==`/docs/${l[1]}`).length,[o,C]=u(t==1);return r(h,a(),s("class",e(i.BtnLabel[1],!0),!1),e(i.BtnLabel[0]),`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${o()?"dark:text-red-3":"dark:text-white-2"}`,o()?d[0]+a()+d[1]:c[0]+a()+c[1],e(n(f,{get when(){return o()},get children(){return r(p,a(),e(i.labels.map(l=>n(g,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return l[1]},get children(){return l[0]}}))))}})))}function q(){return r(v,a()+s("class",e(`h-fit xl:sticky z-10 xl:top-24 xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-xl w-full lt-xl:pb5`,!0),!1),s("hidden",!k(),!0),e(b.map(t=>t.label?n(w,{get BtnLabel(){return t.label},get labels(){return t.items}}):n(g,{get href(){return t[1]},class:"vertCentered",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[r(x,a()+s("class",e(t[2],!0),!1)),t[0]]}}))))}export{q as S,k as m,b as s};