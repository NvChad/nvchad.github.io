const f={context:void 0,registry:void 0};function T(e){f.context=e}function Me(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const Ve=(e,t)=>e===t,X=Symbol("solid-proxy"),Pt=Symbol("solid-track"),W={equals:Ve};let R=null,Se=Te;const P=1,U=2,Ae={owned:null,cleanups:null,context:null,owner:null},ne={};var a=null;let u=null,De=null,y=null,A=null,x=null,z=0;function Ee(e,t){const n=y,s=a,i=e.length===0,r=t===void 0?s:t,l=i?Ae:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>E(()=>v(l)));a=l,y=null;try{return C(o,!0)}finally{y=n,a=s}}function k(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(u&&u.running&&u.sources.has(n)?i=i(n.tValue):i=i(n.value)),Pe(n,i));return[$e.bind(n),s]}function de(e,t,n){const s=G(e,t,!0,P);_(s)}function M(e,t,n){const s=G(e,t,!1,P);_(s)}function Ie(e,t,n){Se=Ke;const s=G(e,t,!1,P),i=V&&fe(V);i&&(s.suspense=i),(!n||!n.render)&&(s.user=!0),x?x.push(s):_(s)}function O(e,t,n){n=n?Object.assign({},W,n):W;const s=G(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,_(s),$e.bind(s)}function Fe(e){return e&&typeof e=="object"&&"then"in e}function He(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r=t||{}):(s=e,i=t,r=n||{});let l=null,o=ne,c=null,d=!1,h=!1,g="initialValue"in r,p=typeof s=="function"&&O(s);const S=new Set,[$,N]=(r.storage||k)(r.initialValue),[L,j]=k(void 0),[q,Z]=k(void 0,{equals:!1}),[ue,ce]=k(g?"ready":"unresolved");if(f.context){c=`${f.context.id}${f.context.count++}`;let w;r.ssrLoadFrom==="initial"?o=r.initialValue:f.load&&(w=f.load(c))&&(o=w)}function D(w,m,b,I){return l===w&&(l=null,I!==void 0&&(g=!0),(w===o||m===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(I,{value:m})),o=ne,u&&w&&d?(u.promises.delete(w),d=!1,C(()=>{u.running=!0,ae(m,b)},!1)):ae(m,b)),m}function ae(w,m){C(()=>{m===void 0&&N(()=>w),ce(m!==void 0?"errored":g?"ready":"unresolved"),j(m);for(const b of S.keys())b.decrement();S.clear()},!1)}function ee(){const w=V&&fe(V),m=$(),b=L();if(b!==void 0&&!l)throw b;return y&&!y.user&&w&&de(()=>{q(),l&&(w.resolved&&u&&d?u.promises.add(l):S.has(w)||(w.increment(),S.add(w)))}),m}function te(w=!0){if(w!==!1&&h)return;h=!1;const m=p?p():s;if(d=u&&u.running,m==null||m===!1){D(l,E($));return}u&&l&&u.promises.delete(l);const b=o!==ne?o:E(()=>i(m,{value:$(),refetching:w}));return Fe(b)?(l=b,"value"in b?(b.status==="success"?D(l,b.value,void 0,m):D(l,void 0,void 0,m),b):(h=!0,queueMicrotask(()=>h=!1),C(()=>{ce(g?"refreshing":"pending"),Z()},!1),b.then(I=>D(b,I,void 0,m),I=>D(b,void 0,ve(I),m)))):(D(l,b,void 0,m),b)}return Object.defineProperties(ee,{state:{get:()=>ue()},error:{get:()=>L()},loading:{get(){const w=ue();return w==="pending"||w==="refreshing"}},latest:{get(){if(!g)return ee();const w=L();if(w&&!l)throw w;return $()}}}),p?de(()=>te(!1)):te(!1),[ee,{refetch:te,mutate:N}]}function Tt(e){return C(e,!1)}function E(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Nt(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let d=0;d<e.length;d++)o[d]=e[d]()}else o=e();if(r){r=!1;return}const c=E(()=>t(o,i,l));return i=o,c}}function kt(e){Ie(()=>E(e))}function Oe(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function Be(e,t){R||(R=Symbol("error")),a=G(void 0,void 0,!0),a.context={...a.context,[R]:[t]},u&&u.running&&u.sources.add(a);try{return e()}catch(n){K(n)}finally{a=a.owner}}function vt(){return y}function _e(){return a}function Lt(e,t){const n=a,s=y;a=e,y=null;try{return C(t,!0)}catch(i){K(i)}finally{a=n,y=s}}function jt(e){if(u&&u.running)return e(),u.done;const t=y,n=a;return Promise.resolve().then(()=>{y=t,a=n;let s;return V&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),C(e,!1),y=a=null,s?s.done:void 0})}const[Mt,he]=k(!1);function qe(e){x.push.apply(x,e),e.length=0}function Ce(e,t){const n=Symbol("context");return{id:n,Provider:Ye(n),defaultValue:e}}function fe(e){return a&&a.context&&a.context[e.id]!==void 0?a.context[e.id]:e.defaultValue}function Re(e){const t=O(e),n=O(()=>ie(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let V;function Ue(){return V||(V=Ce())}function $e(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===P)_(this);else{const t=A;A=null,C(()=>Q(this),!1),A=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function Pe(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const i=u.running;(i||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=u&&u.running;l&&u.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?A.push(r):x.push(r),r.observers&&Ne(r)),l?r.tState=P:r.state=P)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function _(e){if(!e.fn)return;v(e);const t=z;ge(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{C(()=>{u&&(u.running=!0),y=a=e,ge(e,e.tValue,t),y=a=null},!1)})}function ge(e,t,n){let s;const i=a,r=y;y=a=e;try{s=e.fn(t)}catch(l){return e.pure&&(u&&u.running?(e.tState=P,e.tOwned&&e.tOwned.forEach(v),e.tOwned=void 0):(e.state=P,e.owned&&e.owned.forEach(v),e.owned=null)),e.updatedAt=n+1,K(l)}finally{y=r,a=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function G(e,t,n,s=P,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:n};return u&&u.running&&(r.state=0,r.tState=s),a===null||a!==Ae&&(u&&u.running&&a.pure?a.tOwned?a.tOwned.push(r):a.tOwned=[r]:a.owned?a.owned.push(r):a.owned=[r]),r}function J(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===U)return Q(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(u.disposed.has(i))return}if((t?e.tState:e.state)===P)_(e);else if((t?e.tState:e.state)===U){const i=A;A=null,C(()=>Q(e,n[0]),!1),A=i}}}function C(e,t){if(A)return e();let n=!1;t||(A=[]),x?n=!0:x=[],z++;try{const s=e();return Ge(n),s}catch(s){n||(x=null),A=null,K(s)}}function Ge(e){if(A&&(Te(A),A=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,i=u.disposed;x.push.apply(x,u.effects),t=u.resolve;for(const r of x)"tState"in r&&(r.state=r.tState),delete r.tState;u=null,C(()=>{for(const r of i)v(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let l=0,o=r.owned.length;l<o;l++)v(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}he(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,x),x=null,he(!0);return}}const n=x;x=null,n.length&&C(()=>Se(n),!1),t&&t()}function Te(e){for(let t=0;t<e.length;t++)J(e[t])}function Ke(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:J(s)}if(f.context){if(f.count){f.effects||(f.effects=[]),f.effects.push(...e.slice(0,n));return}else f.effects&&(e=[...f.effects,...e],n+=f.effects.length,delete f.effects);T()}for(t=0;t<n;t++)J(e[t])}function Q(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===P?i!==t&&(!i.updatedAt||i.updatedAt<z)&&J(i):r===U&&Q(i,t)}}}function Ne(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=U:s.state=U,s.pure?A.push(s):x.push(s),s.observers&&Ne(s))}}function v(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(u&&u.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)v(e.tOwned[t]);delete e.tOwned}ke(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)v(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function ke(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ke(e.owned[n])}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t,n){try{for(const s of t)s(e)}catch(s){K(s,n&&n.owner||null)}}function K(e,t=a){const n=R&&t&&t.context&&t.context[R],s=ve(e);if(!n)throw s;x?x.push({fn(){ye(s,n,t)},state:P}):ye(s,n,t)}function ie(e){if(typeof e=="function"&&!e.length)return ie(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ie(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ye(e,t){return function(s){let i;return M(()=>i=E(()=>(a.context={...a.context,[e]:s.value},Re(()=>s.children))),void 0),i}}let Le=!1;function Xe(){Le=!0}function We(e,t){if(Le&&f.context){const n=f.context;T(Me());const s=E(()=>e(t||{}));return T(n),s}return E(()=>e(t||{}))}function Y(){return!0}const re={get(e,t,n){return t===X?n:e.get(t)},has(e,t){return t===X?!0:e.has(t)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function Je(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Vt(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&X in o,e[l]=typeof o=="function"?(t=!0,O(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const c=se(e[o])[l];if(c!==void 0)return c}},has(l){for(let o=e.length-1;o>=0;o--)if(l in se(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(se(e[o])));return[...new Set(l)]}},re);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const c=Object.getOwnPropertyNames(o);for(let d=c.length-1;d>=0;d--){const h=c[d];if(h==="__proto__"||h==="constructor")continue;const g=Object.getOwnPropertyDescriptor(o,h);if(!s[h])s[h]=g.get?{enumerable:!0,configurable:!0,get:Je.bind(n[h]=[g.get.bind(o)])}:g.value!==void 0?g:void 0;else{const p=n[h];p&&(g.get?p.push(g.get.bind(o)):g.value!==void 0&&p.push(()=>g.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],c=s[o];c&&c.get?Object.defineProperty(i,o,c):i[o]=c?c.value:void 0}return i}function Qe(e,...t){if(X in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},re));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},re)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,c=0;for(const d of t)d.includes(i)&&(o=!0,l?s[c][i]=r.value:Object.defineProperty(s[c],i,r)),++c;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function Dt(e){let t,n;const s=i=>{const r=f.context;if(r){const[o,c]=k();f.count||(f.count=0),f.count++,(n||(n=e())).then(d=>{T(r),f.count--,c(()=>d.default),T()}),t=o}else if(!t){const[o]=He(()=>(n||(n=e())).then(c=>c.default));t=o}let l;return O(()=>(l=t())&&E(()=>{if(!r)return l(i);const o=f.context;T(r);const c=l(i);return T(o),c}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}let ze=0;function It(){const e=f.context;return e?`${e.id}${e.count++}`:`cl-${ze++}`}const Ze=e=>`Stale read from <${e}>.`;function Ft(e){const t=e.keyed,n=O(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return O(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?E(()=>i(t?s:()=>{if(!E(n))throw Ze("Show");return e.when})):i}return e.fallback},void 0,void 0)}let H;function Ht(){H&&[...H].forEach(e=>e())}function Bt(e){let t;f.context&&f.load&&(t=f.load(f.context.id+f.context.count));const[n,s]=k(t,void 0);return H||(H=new Set),H.add(s),Oe(()=>H.delete(s)),O(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?E(()=>r(i,()=>s())):r}return Be(()=>e.children,s)},void 0,void 0)}const et=Ce();function _t(e){let t=0,n,s,i,r,l;const[o,c]=k(!1),d=Ue(),h={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:o,effects:[],resolved:!1},g=_e();if(f.context&&f.load){const $=f.context.id+f.context.count;let N=f.load($);if(N&&(typeof N!="object"||N.status!=="success"?i=N:f.gather($)),i&&i!=="$$f"){const[L,j]=k(void 0,{equals:!1});r=L,i.then(()=>{if(f.done)return j();f.gather($),T(s),j(),T()},q=>{l=q,j()})}}const p=fe(et);p&&(n=p.register(h.inFallback));let S;return Oe(()=>S&&S()),We(d.Provider,{value:h,get children(){return O(()=>{if(l)throw l;if(s=f.context,r)return r(),r=void 0;s&&i==="$$f"&&T();const $=O(()=>e.children);return O(N=>{const L=h.inFallback(),{showContent:j=!0,showFallback:q=!0}=n?n():{};if((!L||i&&i!=="$$f")&&j)return h.resolved=!0,S&&S(),S=s=i=void 0,qe(h.effects),$();if(q)return S?N:Ee(Z=>(S=Z,s&&(T({id:s.id+"f",count:0}),s=void 0),e.fallback),g)})})}})}const tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],nt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...tt]),st=new Set(["innerHTML","textContent","innerText","children"]),it=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),rt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ot(e,t){const n=rt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const lt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ft=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ct(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,c=t[i-1].nextSibling,d=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const h=r<s?o?n[o-1].nextSibling:n[r-o]:c;for(;o<r;)e.insertBefore(n[o++],h)}else if(r===o)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],h),t[i]=n[r]}else{if(!d){d=new Map;let g=o;for(;g<r;)d.set(n[g],g++)}const h=d.get(t[l]);if(h!=null)if(o<h&&h<r){let g=l,p=1,S;for(;++g<i&&g<r&&!((S=d.get(t[g]))==null||S!==h+p);)p++;if(p>h-o){const $=t[l];for(;o<h;)e.insertBefore(n[o++],$)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const we="_$DX_DELEGATE";function at(e,t,n,s={}){let i;return Ee(r=>{i=r,t===document?e():bt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function qt(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>E(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function dt(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,je))}}function Rt(e,t,n){!f.context&&(e[t]=n)}function oe(e,t,n){f.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ht(e,t,n,s){f.context||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function gt(e,t){f.context||(t==null?e.removeAttribute("class"):e.className=t)}function yt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function wt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(me(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(me(e,o,!0),n[o]=c)}return n}function mt(e,t,n){if(!t)return n?oe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function pt(e,t={},n,s){const i={};return s||M(()=>i.children=B(e,t.children,i.children)),M(()=>t.ref&&t.ref(e)),M(()=>xt(e,t,n,!0,i,!0)),i}function bt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return B(e,t,s,n);M(i=>B(e,t(),i,n),s)}function xt(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=pe(e,l,null,i[l],n,r)}for(const l in t){if(l==="children"){s||B(e,t.children);continue}const o=t[l];i[l]=pe(e,l,o,i[l],n,r)}}function St(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=i=>globalThis._$HY.r[i],f.has=i=>i in globalThis._$HY.r,f.gather=i=>xe(t,i),f.registry=new Map,f.context={id:n.renderId||"",count:0},xe(t,n.renderId);const s=at(e,t,[...t.childNodes],n);return f.context=null,s}function At(e){let t,n;return!f.context||!(t=f.registry.get(n=Ot()))?e():(f.completed&&f.completed.add(t),f.registry.delete(n),t)}function Ut(e){let t=e,n=0,s=[];if(f.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Gt(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;je(s),t.shift()}}),f.events.queued=!0)}function Et(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function me(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function pe(e,t,n,s,i,r){let l,o,c,d,h;if(t==="style")return mt(e,n,s);if(t==="classList")return wt(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);s&&e.removeEventListener(g,s),n&&e.addEventListener(g,n)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);s&&e.removeEventListener(g,s,!0),n&&e.addEventListener(g,n,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),p=lt.has(g);if(!p&&s){const S=Array.isArray(s)?s[0]:s;e.removeEventListener(g,S)}(p||n)&&(yt(e,g,n,p),p&&dt([g]))}else if(t.slice(0,5)==="attr:")oe(e,t.slice(5),n);else if((h=t.slice(0,5)==="prop:")||(c=st.has(t))||!i&&((d=ot(t,e.tagName))||(o=nt.has(t)))||(l=e.nodeName.includes("-"))){if(h)t=t.slice(5),o=!0;else if(f.context)return n;t==="class"||t==="className"?gt(e,n):l&&!o&&!c?e[Et(t)]=n:e[d||t]=n}else{const g=i&&t.indexOf(":")>-1&&ut[t.split(":")[0]];g?ht(e,g,t,n):oe(e,it[t]||t,n)}return n}function je(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function B(e,t,n,s,i){if(f.context){!n&&(n=[...e.childNodes]);let o=[];for(let c=0;c<n.length;c++){const d=n[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():o.push(d)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(f.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=F(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(f.context)return n;n=F(e,n,s)}else{if(r==="function")return M(()=>{let o=t();for(;typeof o=="function";)o=o();n=B(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(le(o,t,n,i))return M(()=>n=B(e,o,n,s,!0)),()=>n;if(f.context){if(!o.length)return n;if(s===void 0)return[...e.childNodes];let d=o[0],h=[d];for(;(d=d.nextSibling)!==s;)h.push(d);return n=h}if(o.length===0){if(n=F(e,n,s),l)return n}else c?n.length===0?be(e,o,s):ct(e,n,o):(n&&F(e),be(e,o));n=o}else if(t.nodeType){if(f.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=F(e,n,s,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],c=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=le(e,o,c)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=le(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const h=String(o);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return i}function be(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function F(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const c=o.parentNode===e;!r&&!l?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function xe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!f.registry.has(r)&&f.registry.set(r,i)}}function Ot(){const e=f.context;return`${e.id}${e.count++}`}const Kt=()=>{},Yt=!1,Ct="http://www.w3.org/2000/svg";function $t(e,t=!1){return t?document.createElementNS(Ct,e):document.createElement(e)}const Xt=(...e)=>(Xe(),St(...e));function Wt(e){const[t,n]=Qe(e,["component"]),s=O(()=>t.component);return O(()=>{const i=s();switch(typeof i){case"function":return E(()=>i(n));case"string":const r=ft.has(i),l=f.context?At():$t(i,r);return pt(l,n,r),l}})}export{X as $,fe as A,_t as B,Xt as C,Rt as D,Bt as E,Qe as F,Pt as G,vt as H,Tt as I,Lt as J,Ht as K,jt as L,Yt as M,Kt as N,Wt as O,Ft as S,O as a,We as b,Re as c,Ee as d,k as e,Oe as f,_e as g,dt as h,kt as i,Ie as j,At as k,Ut as l,bt as m,M as n,Nt as o,gt as p,Vt as q,Gt as r,oe as s,qt as t,E as u,pt as v,Dt as w,Ce as x,f as y,It as z};