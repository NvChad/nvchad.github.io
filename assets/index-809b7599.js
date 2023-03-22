(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();const j={};function $e(t){j.context=t}function _t(){return{...j.context,id:`${j.context.id}${j.context.count++}-`,count:0}}const gt=(t,e)=>t===e,R=Symbol("solid-proxy"),ln=Symbol("solid-track"),ft=Symbol("solid-dev-component"),be={equals:gt};let Dn=zn;const z=1,ve=2,In={owned:null,cleanups:null,context:null,owner:null};var y=null;let B=null,v=null,P=null,V=null,Le=0;function Rn(t,e){const l=v,i=y,s=t.length===0,c=s?In:{owned:null,cleanups:null,context:null,owner:e===void 0?i:e},o=s?t:()=>t(()=>$(()=>Te(c)));y=c,v=null;try{return q(o,!0)}finally{v=l,y=i}}function L(t,e){e=e?Object.assign({},be,e):be;const l={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(s=s(l.value)),Mn(l,s));return[Sn.bind(l),i]}function E(t,e,l){const i=He(t,e,!1,z);de(i)}function Be(t,e,l){Dn=Et;const i=He(t,e,!1,z);i.user=!0,V?V.push(i):de(i)}function b(t,e,l){l=l?Object.assign({},be,l):be;const i=He(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=l.equals||void 0,de(i),Sn.bind(i)}function bt(t){return q(t,!1)}function $(t){if(v===null)return t();const e=v;v=null;try{return t()}finally{v=e}}function Ue(t,e,l){const i=Array.isArray(t);let s,c=l&&l.defer;return o=>{let h;if(i){h=Array(t.length);for(let d=0;d<t.length;d++)h[d]=t[d]()}else h=t();if(c){c=!1;return}const u=$(()=>e(h,s,o));return s=h,u}}function $n(t){Be(()=>$(t))}function xe(t){return y===null||(y.cleanups===null?y.cleanups=[t]:y.cleanups.push(t)),t}function Vn(){return v}function vt(){return y}function wt(t,e){const l=y,i=v;y=t,v=null;try{return q(e,!0)}catch(s){We(s)}finally{y=l,v=i}}function yt(t){const e=v,l=y;return Promise.resolve().then(()=>{v=e,y=l;let i;return q(t,!1),v=y=null,i?i.done:void 0})}function Cn(t,e){const l=Symbol("context");return{id:l,Provider:At(l),defaultValue:t}}function Fe(t){let e;return(e=Bn(y,t.id))!==void 0?e:t.defaultValue}function Xe(t){const e=b(t),l=b(()=>Ve(e()));return l.toArray=()=>{const i=l();return Array.isArray(i)?i:i!=null?[i]:[]},l}function Sn(){const t=B;if(this.sources&&(this.state||t))if(this.state===z||t)de(this);else{const e=P;P=null,q(()=>ye(this),!1),P=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Mn(t,e,l){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&q(()=>{for(let s=0;s<t.observers.length;s+=1){const c=t.observers[s],o=B&&B.running;o&&B.disposed.has(c),(o&&!c.tState||!o&&!c.state)&&(c.pure?P.push(c):V.push(c),c.observers&&qn(c)),o||(c.state=z)}if(P.length>1e6)throw P=[],new Error},!1)),e}function de(t){if(!t.fn)return;Te(t);const e=y,l=v,i=Le;v=y=t,Nt(t,t.value,i),v=l,y=e}function Nt(t,e,l){let i;try{i=t.fn(e)}catch(s){return t.pure&&(t.state=z,t.owned&&t.owned.forEach(Te),t.owned=null),t.updatedAt=l+1,We(s)}(!t.updatedAt||t.updatedAt<=l)&&(t.updatedAt!=null&&"observers"in t?Mn(t,i):t.value=i,t.updatedAt=l)}function He(t,e,l,i=z,s){const c={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:y,context:null,pure:l};return y===null||y!==In&&(y.owned?y.owned.push(c):y.owned=[c]),c}function we(t){const e=B;if(t.state===0||e)return;if(t.state===ve||e)return ye(t);if(t.suspense&&$(t.suspense.inFallback))return t.suspense.effects.push(t);const l=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Le);)(t.state||e)&&l.push(t);for(let i=l.length-1;i>=0;i--)if(t=l[i],t.state===z||e)de(t);else if(t.state===ve||e){const s=P;P=null,q(()=>ye(t,l[0]),!1),P=s}}function q(t,e){if(P)return t();let l=!1;e||(P=[]),V?l=!0:V=[],Le++;try{const i=t();return jt(l),i}catch(i){l||(V=null),P=null,We(i)}}function jt(t){if(P&&(zn(P),P=null),t)return;const e=V;V=null,e.length&&q(()=>Dn(e),!1)}function zn(t){for(let e=0;e<t.length;e++)we(t[e])}function Et(t){let e,l=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[l++]=i:we(i)}for(j.context&&$e(),e=0;e<l;e++)we(t[e])}function ye(t,e){const l=B;t.state=0;for(let i=0;i<t.sources.length;i+=1){const s=t.sources[i];s.sources&&(s.state===z||l?s!==e&&(!s.updatedAt||s.updatedAt<Le)&&we(s):(s.state===ve||l)&&ye(s,e))}}function qn(t){const e=B;for(let l=0;l<t.observers.length;l+=1){const i=t.observers[l];(!i.state||e)&&(i.state=ve,i.pure?P.push(i):V.push(i),i.observers&&qn(i))}}function Te(t){let e;if(t.sources)for(;t.sources.length;){const l=t.sources.pop(),i=t.sourceSlots.pop(),s=l.observers;if(s&&s.length){const c=s.pop(),o=l.observerSlots.pop();i<s.length&&(c.sourceSlots[o]=i,s[i]=c,l.observerSlots[i]=o)}}if(t.owned){for(e=0;e<t.owned.length;e++)Te(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function kt(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function We(t){throw t=kt(t),t}function Bn(t,e){return t?t.context&&t.context[e]!==void 0?t.context[e]:Bn(t.owner,e):void 0}function Ve(t){if(typeof t=="function"&&!t.length)return Ve(t());if(Array.isArray(t)){const e=[];for(let l=0;l<t.length;l++){const i=Ve(t[l]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function At(t,e){return function(i){let s;return E(()=>s=$(()=>(y.context={[t]:i.value},Xe(()=>i.children))),void 0),s}}let Lt=!1;function m(t,e){if(Lt&&j.context){const l=j.context;$e(_t());const i=$(()=>t(e||{}));return $e(l),i}return $(()=>t(e||{}))}function _e(){return!0}const Ce={get(t,e,l){return e===R?l:t.get(e)},has(t,e){return e===R?!0:t.has(e)},set:_e,deleteProperty:_e,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:_e,deleteProperty:_e}},ownKeys(t){return t.keys()}};function De(t){return(t=typeof t=="function"?t():t)?t:{}}function Ne(...t){let e=!1;for(let i=0;i<t.length;i++){const s=t[i];e=e||!!s&&R in s,t[i]=typeof s=="function"?(e=!0,b(s)):s}if(e)return new Proxy({get(i){for(let s=t.length-1;s>=0;s--){const c=De(t[s])[i];if(c!==void 0)return c}},has(i){for(let s=t.length-1;s>=0;s--)if(i in De(t[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<t.length;s++)i.push(...Object.keys(De(t[s])));return[...new Set(i)]}},Ce);const l={};for(let i=t.length-1;i>=0;i--)if(t[i]){const s=Object.getOwnPropertyDescriptors(t[i]);for(const c in s)c in l||Object.defineProperty(l,c,{enumerable:!0,get(){for(let o=t.length-1;o>=0;o--){const h=(t[o]||{})[c];if(h!==void 0)return h}}})}return l}function Un(t,...e){const l=new Set(e.flat());if(R in t){const s=e.map(c=>new Proxy({get(o){return c.includes(o)?t[o]:void 0},has(o){return c.includes(o)&&o in t},keys(){return c.filter(o=>o in t)}},Ce));return s.push(new Proxy({get(c){return l.has(c)?void 0:t[c]},has(c){return l.has(c)?!1:c in t},keys(){return Object.keys(t).filter(c=>!l.has(c))}},Ce)),s}const i=Object.getOwnPropertyDescriptors(t);return e.push(Object.keys(i).filter(s=>!l.has(s))),e.map(s=>{const c={};for(let o=0;o<s.length;o++){const h=s[o];h in t&&Object.defineProperty(c,h,i[h]?i[h]:{get(){return t[h]},set(){return!0},enumerable:!0})}return c})}function Ge(t){let e=!1;const l=t.keyed,i=b(()=>t.when,void 0,{equals:(s,c)=>e?s===c:!s==!c});return b(()=>{const s=i();if(s){const c=t.children,o=typeof c=="function"&&c.length>0;return e=l||o,o?$(()=>c(s)):c}return t.fallback},void 0,void 0)}const xt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Tt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...xt]),Ot=new Set(["innerHTML","textContent","innerText","children"]),Pt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),sn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Dt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),It=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function $t(t,e,l){let i=l.length,s=e.length,c=i,o=0,h=0,u=e[s-1].nextSibling,d=null;for(;o<s||h<c;){if(e[o]===l[h]){o++,h++;continue}for(;e[s-1]===l[c-1];)s--,c--;if(s===o){const p=c<i?h?l[h-1].nextSibling:l[c-h]:u;for(;h<c;)t.insertBefore(l[h++],p)}else if(c===h)for(;o<s;)(!d||!d.has(e[o]))&&e[o].remove(),o++;else if(e[o]===l[c-1]&&l[h]===e[s-1]){const p=e[--s].nextSibling;t.insertBefore(l[h++],e[o++].nextSibling),t.insertBefore(l[--c],p),e[s]=l[c]}else{if(!d){d=new Map;let f=h;for(;f<c;)d.set(l[f],f++)}const p=d.get(e[o]);if(p!=null)if(h<p&&p<c){let f=o,A=1,T;for(;++f<s&&f<c&&!((T=d.get(e[f]))==null||T!==p+A);)A++;if(A>p-h){const k=e[o];for(;h<p;)t.insertBefore(l[h++],k)}else t.replaceChild(l[h++],e[o++])}else o++;else e[o++].remove()}}}const rn="_$DX_DELEGATE";function Vt(t,e,l,i={}){let s;return Rn(c=>{s=c,e===document?t():_(e,t(),e.firstChild?null:void 0,l)},i.owner),()=>{s(),e.textContent=""}}function g(t,e,l){const i=document.createElement("template");if(i.innerHTML=t,e&&i.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${t}. Is your HTML properly formed?`;let s=i.content.firstChild;return l&&(s=s.firstChild),s}function F(t,e=window.document){const l=e[rn]||(e[rn]=new Set);for(let i=0,s=t.length;i<s;i++){const c=t[i];l.has(c)||(l.add(c),e.addEventListener(c,Ft))}}function C(t,e,l){l==null?t.removeAttribute(e):t.setAttribute(e,l)}function Ct(t,e,l,i){i==null?t.removeAttributeNS(e,l):t.setAttributeNS(e,l,i)}function D(t,e){e==null?t.removeAttribute("class"):t.className=e}function St(t,e,l,i){if(i)Array.isArray(l)?(t[`$$${e}`]=l[0],t[`$$${e}Data`]=l[1]):t[`$$${e}`]=l;else if(Array.isArray(l)){const s=l[0];t.addEventListener(e,l[0]=c=>s.call(t,l[1],c))}else t.addEventListener(e,l)}function Mt(t,e,l={}){const i=Object.keys(e||{}),s=Object.keys(l);let c,o;for(c=0,o=s.length;c<o;c++){const h=s[c];!h||h==="undefined"||e[h]||(an(t,h,!1),delete l[h])}for(c=0,o=i.length;c<o;c++){const h=i[c],u=!!e[h];!h||h==="undefined"||l[h]===u||!u||(an(t,h,!0),l[h]=u)}return l}function zt(t,e,l){if(!e)return l?C(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof l=="string"&&(i.cssText=l=void 0),l||(l={}),e||(e={});let s,c;for(c in l)e[c]==null&&i.removeProperty(c),delete l[c];for(c in e)s=e[c],s!==l[c]&&(i.setProperty(c,s),l[c]=s);return l}function Fn(t,e={},l,i){const s={};return i||E(()=>s.children=K(t,e.children,s.children)),E(()=>e.ref&&e.ref(t)),E(()=>qt(t,e,l,!0,s,!0)),s}function _(t,e,l,i){if(l!==void 0&&!i&&(i=[]),typeof e!="function")return K(t,e,i,l);E(s=>K(t,e(),s,l),i)}function qt(t,e,l,i,s={},c=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=cn(t,o,null,s[o],l,c)}for(const o in e){if(o==="children"){i||K(t,e.children);continue}const h=e[o];s[o]=cn(t,o,h,s[o],l,c)}}function Bt(t){let e,l;if(!j.context||!(e=j.registry.get(l=Xt()))){if(j.context&&console.warn("Unable to find DOM nodes for hydration key:",l),!t)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+l);return t.cloneNode(!0)}return j.completed&&j.completed.add(e),j.registry.delete(l),e}function Ut(t){return t.toLowerCase().replace(/-([a-z])/g,(e,l)=>l.toUpperCase())}function an(t,e,l){const i=e.trim().split(/\s+/);for(let s=0,c=i.length;s<c;s++)t.classList.toggle(i[s],l)}function cn(t,e,l,i,s,c){let o,h,u;if(e==="style")return zt(t,l,i);if(e==="classList")return Mt(t,l,i);if(l===i)return i;if(e==="ref")c||l(t);else if(e.slice(0,3)==="on:"){const d=e.slice(3);i&&t.removeEventListener(d,i),l&&t.addEventListener(d,l)}else if(e.slice(0,10)==="oncapture:"){const d=e.slice(10);i&&t.removeEventListener(d,i,!0),l&&t.addEventListener(d,l,!0)}else if(e.slice(0,2)==="on"){const d=e.slice(2).toLowerCase(),p=Dt.has(d);if(!p&&i){const f=Array.isArray(i)?i[0]:i;t.removeEventListener(d,f)}(p||l)&&(St(t,d,l,p),p&&F([d]))}else if((u=Ot.has(e))||!s&&(sn[e]||(h=Tt.has(e)))||(o=t.nodeName.includes("-")))e==="class"||e==="className"?D(t,l):o&&!h&&!u?t[Ut(e)]=l:t[sn[e]||e]=l;else{const d=s&&e.indexOf(":")>-1&&Rt[e.split(":")[0]];d?Ct(t,d,e,l):C(t,Pt[e]||e,l)}return l}function Ft(t){const e=`$$${t.type}`;let l=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==l&&Object.defineProperty(t,"target",{configurable:!0,value:l}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return l||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+t;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));l;){const i=l[e];if(i&&!l.disabled){const s=l[`${e}Data`];if(s!==void 0?i.call(l,s,t):i.call(l,t),t.cancelBubble)return}l=l._$host||l.parentNode||l.host}}function K(t,e,l,i,s){for(j.context&&!l&&(l=[...t.childNodes]);typeof l=="function";)l=l();if(e===l)return l;const c=typeof e,o=i!==void 0;if(t=o&&l[0]&&l[0].parentNode||t,c==="string"||c==="number"){if(j.context)return l;if(c==="number"&&(e=e.toString()),o){let h=l[0];h&&h.nodeType===3?h.data=e:h=document.createTextNode(e),l=H(t,l,i,h)}else l!==""&&typeof l=="string"?l=t.firstChild.data=e:l=t.textContent=e}else if(e==null||c==="boolean"){if(j.context)return l;l=H(t,l,i)}else{if(c==="function")return E(()=>{let h=e();for(;typeof h=="function";)h=h();l=K(t,h,l,i)}),()=>l;if(Array.isArray(e)){const h=[],u=l&&Array.isArray(l);if(Se(h,e,l,s))return E(()=>l=K(t,h,l,i,!0)),()=>l;if(j.context){if(!h.length)return l;for(let d=0;d<h.length;d++)if(h[d].parentNode)return l=h}if(h.length===0){if(l=H(t,l,i),o)return l}else u?l.length===0?on(t,h,i):$t(t,l,h):(l&&H(t),on(t,h));l=h}else if(e instanceof Node){if(j.context&&e.parentNode)return l=o?[e]:e;if(Array.isArray(l)){if(o)return l=H(t,l,i,e);H(t,l,null,e)}else l==null||l===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);l=e}else console.warn("Unrecognized value. Skipped inserting",e)}return l}function Se(t,e,l,i){let s=!1;for(let c=0,o=e.length;c<o;c++){let h=e[c],u=l&&l[c];if(h instanceof Node)t.push(h);else if(!(h==null||h===!0||h===!1))if(Array.isArray(h))s=Se(t,h,u)||s;else if(typeof h=="function")if(i){for(;typeof h=="function";)h=h();s=Se(t,Array.isArray(h)?h:[h],Array.isArray(u)?u:[u])||s}else t.push(h),s=!0;else{const d=String(h);d==="<!>"?u&&u.nodeType===8&&t.push(u):u&&u.nodeType===3?(u.data=d,t.push(u)):t.push(document.createTextNode(d))}}return s}function on(t,e,l=null){for(let i=0,s=e.length;i<s;i++)t.insertBefore(e[i],l)}function H(t,e,l,i){if(l===void 0)return t.textContent="";const s=i||document.createTextNode("");if(e.length){let c=!1;for(let o=e.length-1;o>=0;o--){const h=e[o];if(s!==h){const u=h.parentNode===t;!c&&!o?u?t.replaceChild(s,h):t.insertBefore(s,l):u&&h.remove()}else c=!0}}else t.insertBefore(s,l);return[s]}function Xt(){const t=j.context;return`${t.id}${t.count++}`}const Ht=!1,Wt="http://www.w3.org/2000/svg";function Gt(t,e=!1){return e?document.createElementNS(Wt,t):document.createElement(t)}function Yt(t){const[e,l]=Un(t,["component"]),i=b(()=>e.component);return b(()=>{const s=i();switch(typeof s){case"function":return Object.assign(s,{[ft]:!0}),$(()=>s(l));case"string":const c=It.has(s),o=j.context?Bt():Gt(s,c);return Fn(o,l,c),o}})}function Kt(t,e,l){return t.addEventListener(e,l),()=>t.removeEventListener(e,l)}function Zt([t,e],l,i){return[l?()=>l(t()):t,i?s=>e(i(s)):e]}function Jt(t){try{return document.querySelector(t)}catch{return null}}function Qt(t,e){const l=Jt(`#${t}`);l?l.scrollIntoView():e&&window.scrollTo(0,0)}function el(t,e,l,i){let s=!1;const c=h=>typeof h=="string"?{value:h}:h,o=Zt(L(c(t()),{equals:(h,u)=>h.value===u.value}),void 0,h=>(!s&&e(h),h));return l&&xe(l((h=t())=>{s=!0,o[1](c(h)),s=!1})),{signal:o,utils:i}}function nl(t){if(t){if(Array.isArray(t))return{signal:t}}else return{signal:L({value:""})};return t}function tl(){return el(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:t,replace:e,scroll:l,state:i})=>{e?window.history.replaceState(i,"",t):window.history.pushState(i,"",t),Qt(window.location.hash.slice(1),l)},t=>Kt(window,"popstate",()=>t()),{go:t=>window.history.go(t)})}function ll(){let t=new Set;function e(s){return t.add(s),()=>t.delete(s)}let l=!1;function i(s,c){if(l)return!(l=!1);const o={to:s,options:c,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const h of t)h.listener({...o,from:h.location,retry:u=>{u&&(l=!0),h.navigate(s,c)}});return!o.defaultPrevented}return{subscribe:e,confirm:i}}const il=/^(?:[a-z0-9]+:)?\/\//i,sl=/^\/+|\/+$/g;function U(t,e=!1){const l=t.replace(sl,"");return l?e||/^[?#]/.test(l)?l:"/"+l:""}function ge(t,e,l){if(il.test(e))return;const i=U(t),s=l&&U(l);let c="";return!s||e.startsWith("/")?c=i:s.toLowerCase().indexOf(i.toLowerCase())!==0?c=i+s:c=s,(c||"/")+U(e,!c)}function rl(t,e){if(t==null)throw new Error(e);return t}function Xn(t,e){return U(t).replace(/\/*(\*.*)?$/g,"")+U(e)}function al(t){const e={};return t.searchParams.forEach((l,i)=>{e[i]=l}),e}function cl(t,e){const[l,i]=t.split("/*",2),s=l.split("/").filter(Boolean),c=s.length;return o=>{const h=o.split("/").filter(Boolean),u=h.length-c;if(u<0||u>0&&i===void 0&&!e)return null;const d={path:c?"":"/",params:{}};for(let p=0;p<c;p++){const f=s[p],A=h[p];if(f[0]===":")d.params[f.slice(1)]=A;else if(f.localeCompare(A,void 0,{sensitivity:"base"})!==0)return null;d.path+=`/${A}`}return i&&(d.params[i]=u?h.slice(-u).join("/"):""),d}}function ol(t){const[e,l]=t.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((s,c)=>s+(c.startsWith(":")?2:3),i.length-(l===void 0?0:1))}function Hn(t){const e=new Map,l=vt();return new Proxy({},{get(i,s){return e.has(s)||wt(l,()=>e.set(s,b(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function Wn(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let l=t.slice(0,e.index),i=t.slice(e.index+e[0].length);const s=[l,l+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)s.push(l+=e[1]),i=i.slice(e[0].length);return Wn(i).reduce((c,o)=>[...c,...s.map(h=>h+o)],[])}const hl=100,Gn=Cn(),Oe=Cn(),Pe=()=>rl(Fe(Gn),"Make sure your app is wrapped in a <Router />");let ae;const Ye=()=>ae||Fe(Oe)||Pe().base,dl=t=>{const e=Ye();return b(()=>e.resolvePath(t()))},ul=t=>{const e=Pe();return b(()=>{const l=t();return l!==void 0?e.renderPath(l):l})},Z=()=>Pe().location;function pl(t,e="",l){const{component:i,data:s,children:c}=t,o=!c||Array.isArray(c)&&!c.length,h={key:t,element:i?()=>m(i,{}):()=>{const{element:u}=t;return u===void 0&&l?m(l,{}):u},preload:t.component?i.preload:t.preload,data:s};return Yn(t.path).reduce((u,d)=>{for(const p of Wn(d)){const f=Xn(e,p),A=o?f:f.split("/*",1)[0];u.push({...h,originalPath:p,pattern:A,matcher:cl(A,!o)})}return u},[])}function ml(t,e=0){return{routes:t,score:ol(t[t.length-1])*1e4-e,matcher(l){const i=[];for(let s=t.length-1;s>=0;s--){const c=t[s],o=c.matcher(l);if(!o)return null;i.unshift({...o,route:c})}return i}}}function Yn(t){return Array.isArray(t)?t:[t]}function Kn(t,e="",l,i=[],s=[]){const c=Yn(t);for(let o=0,h=c.length;o<h;o++){const u=c[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const d=pl(u,e,l);for(const p of d){i.push(p);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)Kn(u.children,p.pattern,l,i,s);else{const A=ml([...i],s.length);s.push(A)}i.pop()}}}return i.length?s:s.sort((o,h)=>h.score-o.score)}function _l(t,e){for(let l=0,i=t.length;l<i;l++){const s=t[l].matcher(e);if(s)return s}return[]}function gl(t,e){const l=new URL("http://sar"),i=b(u=>{const d=t();try{return new URL(d,l)}catch{return console.error(`Invalid path ${d}`),u}},l,{equals:(u,d)=>u.href===d.href}),s=b(()=>i().pathname),c=b(()=>i().search,!0),o=b(()=>i().hash),h=b(()=>"");return{get pathname(){return s()},get search(){return c()},get hash(){return o()},get state(){return e()},get key(){return h()},query:Hn(Ue(c,()=>al(i())))}}function fl(t,e="",l,i){const{signal:[s,c],utils:o={}}=nl(t),h=o.parsePath||(N=>N),u=o.renderPath||(N=>N),d=o.beforeLeave||ll(),p=ge("",e),f=void 0;if(p===void 0)throw new Error(`${p} is not a valid base path`);p&&!s().value&&c({value:p,replace:!0,scroll:!1});const[A,T]=L(!1),k=async N=>{T(!0);try{await yt(N)}finally{T(!1)}},[J,Q]=L(s().value),[ee,ue]=L(s().state),en=gl(J,ee),ne=[],X={pattern:p,params:{},path:()=>p,outlet:()=>null,resolvePath(N){return ge(p,N)}};if(l)try{ae=X,X.data=l({data:void 0,params:{},location:en,navigate:tn(X)})}finally{ae=void 0}function nn(N,w,O){$(()=>{if(typeof w=="number"){w&&(o.go?d.confirm(w,O)&&o.go(w):console.warn("Router integration does not support relative routing"));return}const{replace:pe,resolve:me,scroll:S,state:te}={replace:!1,resolve:!0,scroll:!0,...O},M=me?N.resolvePath(w):ge("",w);if(M===void 0)throw new Error(`Path '${w}' is not a routable path`);if(ne.length>=hl)throw new Error("Too many redirects");const le=J();if((M!==le||te!==ee())&&!Ht){if(d.confirm(M,O)){const mt=ne.push({value:le,replace:pe,scroll:S,state:ee()});k(()=>{Q(M),ue(te)}).then(()=>{ne.length===mt&&pt({value:M,state:te})})}}})}function tn(N){return N=N||Fe(Oe)||X,(w,O)=>nn(N,w,O)}function pt(N){const w=ne[0];w&&((N.value!==w.value||N.state!==w.state)&&c({...N,replace:w.replace,scroll:w.scroll}),ne.length=0)}E(()=>{const{value:N,state:w}=s();$(()=>{N!==J()&&k(()=>{Q(N),ue(w)})})});{let N=function(w){if(w.defaultPrevented||w.button!==0||w.metaKey||w.altKey||w.ctrlKey||w.shiftKey)return;const O=w.composedPath().find(le=>le instanceof Node&&le.nodeName.toUpperCase()==="A");if(!O||!O.hasAttribute("link"))return;const pe=O.href;if(O.target||!pe&&!O.hasAttribute("state"))return;const me=(O.getAttribute("rel")||"").split(/\s+/);if(O.hasAttribute("download")||me&&me.includes("external"))return;const S=new URL(pe);if(S.origin!==window.location.origin||p&&S.pathname&&!S.pathname.toLowerCase().startsWith(p.toLowerCase()))return;const te=h(S.pathname+S.search+S.hash),M=O.getAttribute("state");w.preventDefault(),nn(X,te,{resolve:!1,replace:O.hasAttribute("replace"),scroll:!O.hasAttribute("noscroll"),state:M&&JSON.parse(M)})};var Us=N;F(["click"]),document.addEventListener("click",N),xe(()=>document.removeEventListener("click",N))}return{base:X,out:f,location:en,isRouting:A,renderPath:u,parsePath:h,navigatorFactory:tn,beforeLeave:d}}function bl(t,e,l,i){const{base:s,location:c,navigatorFactory:o}=t,{pattern:h,element:u,preload:d,data:p}=i().route,f=b(()=>i().path),A=Hn(()=>i().params);d&&d();const T={parent:e,pattern:h,get child(){return l()},path:f,params:A,data:e.data,outlet:u,resolvePath(k){return ge(s.path(),k,f())}};if(p)try{ae=T,T.data=p({data:e.data,params:A,location:c,navigate:o(T)})}finally{ae=void 0}return T}const vl=g("<a link></a>",2),wl=t=>{const{source:e,url:l,base:i,data:s,out:c}=t,o=e||tl(),h=fl(o,i,s);return m(Gn.Provider,{value:h,get children(){return t.children}})},yl=t=>{const e=Pe(),l=Ye(),i=Xe(()=>t.children),s=b(()=>Kn(i(),Xn(l.pattern,t.base||""),Zn)),c=b(()=>_l(s(),e.location.pathname));e.out&&e.out.matches.push(c().map(({route:d,path:p,params:f})=>({originalPath:d.originalPath,pattern:d.pattern,path:p,params:f})));const o=[];let h;const u=b(Ue(c,(d,p,f)=>{let A=p&&d.length===p.length;const T=[];for(let k=0,J=d.length;k<J;k++){const Q=p&&p[k],ee=d[k];f&&Q&&ee.route.key===Q.route.key?T[k]=f[k]:(A=!1,o[k]&&o[k](),Rn(ue=>{o[k]=ue,T[k]=bl(e,T[k-1]||l,()=>u()[k+1],()=>c()[k])}))}return o.splice(d.length).forEach(k=>k()),f&&A?f:(h=T[0],T)}));return m(Ge,{get when(){return u()&&h},children:d=>m(Oe.Provider,{value:d,get children(){return d.outlet()}})})},G=t=>{const e=Xe(()=>t.children);return Ne(t,{get children(){return e()}})},Zn=()=>{const t=Ye();return m(Ge,{get when(){return t.child},children:e=>m(Oe.Provider,{value:e,get children(){return e.outlet()}})})};function I(t){t=Ne({inactiveClass:"inactive",activeClass:"active"},t);const[,e]=Un(t,["href","state","class","activeClass","inactiveClass","end"]),l=dl(()=>t.href),i=ul(l),s=Z(),c=b(()=>{const o=l();if(o===void 0)return!1;const h=U(o.split(/[?#]/,1)[0]).toLowerCase(),u=U(s.pathname).toLowerCase();return t.end?h===u:u.startsWith(h)});return(()=>{const o=vl.cloneNode(!0);return Fn(o,Ne(e,{get href(){return i()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!c(),[t.activeClass]:c(),...e.classList}},get["aria-current"](){return c()?"page":void 0}}),!1,!1),o})()}var Nl=t=>t[0]!==t[0].toLowerCase(),jl=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,hn=Object.create(null),El=/[A-Z]/g,kl=t=>hn[t]||(hn[t]=jl.test(t)?t:t.replace(El,e=>`-${e.toLowerCase()}`)),Al=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,Ie={},Ll=t=>t in Ie?Ie[t]:Ie[t]=Al.test(t)&&!t.includes("-"),xl=new Set(["mjx"]),Tl=new RegExp(`(?:${[...xl].join("|")})-.+`,"g"),dn=Object.create(null),Jn=t=>typeof t=="string"?dn[t]??(dn[t]=t.replace(Tl,e=>e.replace(/-/g,"_"))):t,Me=(t,e)=>{let l={};for(let i of Object.keys(t))l[Ol(i,e)]=typeof t[i]=="object"&&!Array.isArray(t[i])?Me(t[i],e):Jn(t[i]);return l},x=t=>t.children,n=(t,e)=>typeof t=="function"?t.name==="Fragment"?x(e):t(Me(e)):m(Yt,Ne(Nl(t)?e:Me(e,t),{component:Jn(t)})),Ol=(t,e="")=>Ll(e)?t=t==="xlinkHref"||t==="xlink:href"?"href":kl(t):t,a=n;const Pl=g('<button><div text-base=""></div></button>',4),Dl=g('<div grid="" gap-5=""><div class="[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3"></div><pre class="hljs"></pre></div>',6),[Il,Qn]=L("Linux / Macos"),et="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",Rl="git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",$l=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[Vl,Cl]=L(et),Re=t=>{const{cmd:e,os:l,icon:i}=t;return(()=>{const s=Pl.cloneNode(!0),c=s.firstChild;return s.$$click=()=>{Qn(l),Cl(e)},D(c,i),_(s,l,null),E(()=>D(s,`!text-vsm ${Il()==l?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),s})()},Sl=()=>(()=>{const t=Dl.cloneNode(!0),e=t.firstChild,l=e.nextSibling;return _(e,m(Re,{os:"Linux / Macos",cmd:et,icon:"i-mingcute:hashtag-fill"}),null),_(e,m(Re,{os:"Windows",cmd:Rl,icon:"i-mdi:windows"}),null),_(e,m(Re,{os:"Docker",cmd:$l,icon:"i-nonicons:docker-16"}),null),_(l,Vl),t})();F(["click"]);function un(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",pre:"pre",span:"span"},t.components);return a(x,{children:[n(e.h2,{children:"Pre-requisites"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.8.0",children:"Neovim 0.8.3"}),"."]}),`
`,a(e.li,{children:[n(e.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," Set it in your terminal emulator.",`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Make sure the nerd font you set doesnt end with ",n("strong",{children:"Mono"})," to prevent small icons."]}),`
`,a(e.li,{children:[n("strong",{children:"Example : "})," Iosevka Nerd Font and not ",n("s",{children:"Iosevka Nerd Font Mono"})]}),`
`]}),`
`]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",n("strong",{children:"(OPTIONAL)"}),"."]}),`
`,a(e.li,{children:["GCC, Windows users must have ",n(e.a,{href:"http://mingw-w64.org/downloads",children:n(e.code,{children:"mingw"})})," installed and set on path."]}),`
`,n(e.li,{children:"Delete old neovim folder (check commands below)"}),`
`]}),`
`,n(e.h2,{children:"Install"}),`
`,n(Sl,{}),`
`,n(e.h2,{children:"Update"}),`
`,n(e.p,{children:"To update NvChad run the following command :"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"NvChadUpdate"}),"."]}),`
`]}),`
`,n(e.h2,{children:"Uninstall"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-comment",children:"# linux/macos (unix)"}),`
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.cache/nvim

`,n(e.span,{className:"hljs-comment",children:"# windows"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data
`]})})]})}function Ml(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(un,t)})):un(t)}function pn(t){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a"},t.components);return a(x,{children:[n(e.h2,{children:"If you're new to Neovim/Vim"}),`
`,n(e.p,{children:"We strongly encourage you to learn how to use Neovim/Vim. If you are totally new to Vim then you cannot use NvChad until you gain some basic knowledge about Vim's modes, default editor commands, globals, mappings etc."}),`
`,n(e.p,{children:"These are highly recommended and a must do for any new Vimmer:"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Vim tutor"}),`
`]}),`
`,n(e.h2,{children:"Learn lua"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Learning basic lua is highly recommended when configuring neovim config."}),`
`,n(e.li,{children:"It's a really simple & small language, would barely take 5-10 minutes if you're a programmer."}),`
`]}),`
`,n(e.h2,{children:"Nvim lua"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"You should know how to convert a vimscript code into lua for your config."}),`
`,a(e.li,{children:["Read the official ",n(e.a,{href:"https://neovim.io/doc/user/lua-guide.html#lua-guide",children:"documentation"})," for this."]}),`
`]}),`
`,n(e.h2,{children:"Read NvChad docs"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Read the docs in order ( follow the arrows below )."}),`
`]})]})}function zl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(pn,t)})):pn(t)}function mn(t){const e=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3",p:"p",strong:"strong",ul:"ul",li:"li"},t.components);return a(x,{children:[n(e.h2,{children:"Comments"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- comment"}),`
`,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"Hi"'}),") ",n(e.span,{className:"hljs-comment",children:"-- comment"}),`

`,n(e.span,{className:"hljs-comment",children:`--[[
 multi-line 
 comment
]]`}),`
`]})}),`
`,n(e.h2,{children:"Variables"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- Different types"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"})," x = ",n(e.span,{className:"hljs-number",children:"10"})," ",n(e.span,{className:"hljs-comment",children:"-- number"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," name = ",n(e.span,{className:"hljs-string",children:'"sid"'})," ",n(e.span,{className:"hljs-comment",children:"-- string"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(e.span,{className:"hljs-literal",children:"true"})," ",n(e.span,{className:"hljs-comment",children:"-- boolean"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," a = ",n(e.span,{className:"hljs-literal",children:"nil"})," ",n(e.span,{className:"hljs-comment",children:"--no value or invalid value"}),`

`,n(e.span,{className:"hljs-comment",children:"-- increment in numbers"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," n = ",n(e.span,{className:"hljs-number",children:"1"}),`
n = n + `,n(e.span,{className:"hljs-number",children:"1"}),`
`,n(e.span,{className:"hljs-built_in",children:"print"}),"(n) ",n(e.span,{className:"hljs-comment",children:"-- 2"}),`

`,n(e.span,{className:"hljs-comment",children:"-- strings"}),`
`,n(e.span,{className:"hljs-comment",children:"-- Concatenate strings"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," phrase = ",n(e.span,{className:"hljs-string",children:'"I am"'}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," name = ",n(e.span,{className:"hljs-string",children:'"Sid"'}),`

`,n(e.span,{className:"hljs-built_in",children:"print"}),"(phrase .. ",n(e.span,{className:"hljs-string",children:'" "'})," .. name) ",n(e.span,{className:"hljs-comment",children:"-- I am Sid"}),`
`,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"I am "'})," .. ",n(e.span,{className:"hljs-string",children:'"Sid"'}),`)
`]})}),`
`,n(e.h2,{children:"Comparison Operators"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[` == equality
 < less than
 > greater than
 <= less than `,n(e.span,{className:"hljs-keyword",children:"or"}),` equal to
 >= greater than `,n(e.span,{className:"hljs-keyword",children:"or"}),` equal to
 ~= inequality
`]})}),`
`,n(e.h2,{children:"Conditional Statements"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- Number comparisons"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," age = ",n(e.span,{className:"hljs-number",children:"10"}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," age > ",n(e.span,{className:"hljs-number",children:"18"})," ",n(e.span,{className:"hljs-keyword",children:"then"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"over 18"'}),") ",n(e.span,{className:"hljs-comment",children:"-- this will not be executed"}),`
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- elseif and else"}),`
age = `,n(e.span,{className:"hljs-number",children:"20"}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," age > ",n(e.span,{className:"hljs-number",children:"18"})," ",n(e.span,{className:"hljs-keyword",children:"then"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"over 18"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"elseif"})," age == ",n(e.span,{className:"hljs-number",children:"18"})," ",n(e.span,{className:"hljs-keyword",children:"then"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"18 huh"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"else"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"kiddo"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- Boolean comparison"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(e.span,{className:"hljs-literal",children:"true"}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," isAlive ",n(e.span,{className:"hljs-keyword",children:"then"}),`
    `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"Be grateful!"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- String comparisons"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," name = ",n(e.span,{className:"hljs-string",children:'"sid"'}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," name ~= ",n(e.span,{className:"hljs-string",children:'"sid"'})," ",n(e.span,{className:"hljs-keyword",children:"then"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"not sid"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n(e.h3,{children:"Combining Statements"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"})," age = ",n(e.span,{className:"hljs-number",children:"22"}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," age == ",n(e.span,{className:"hljs-number",children:"10"})," ",n(e.span,{className:"hljs-keyword",children:"and"})," x > ",n(e.span,{className:"hljs-number",children:"0"})," ",n(e.span,{className:"hljs-keyword",children:"then"})," ",n(e.span,{className:"hljs-comment",children:"-- both should be true"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"kiddo!"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"elseif"})," x == ",n(e.span,{className:"hljs-number",children:"18"})," ",n(e.span,{className:"hljs-keyword",children:"or"})," x > ",n(e.span,{className:"hljs-number",children:"18"})," ",n(e.span,{className:"hljs-keyword",children:"then"})," ",n(e.span,{className:"hljs-comment",children:"-- 1 or more are true"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"over 18"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- result: over 18"}),`
`]})}),`
`,n(e.p,{children:n(e.strong,{children:"Invert Value"})}),`
`,a(e.p,{children:["You can also invert a value with the ",n(e.strong,{children:"not"})," keyword:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(e.span,{className:"hljs-literal",children:"true"}),`

`,n(e.span,{className:"hljs-keyword",children:"if"})," ",n(e.span,{className:"hljs-keyword",children:"not"})," isAlive ",n(e.span,{className:"hljs-keyword",children:"then"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'" ye ded!"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n(e.h2,{children:"Functions"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"print_num"}),n(e.span,{className:"hljs-params",children:"(a)"})]}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),`(a)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-keyword",children:"or"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"})," print_num = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"(a)"})]}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),`(a)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

print_num(`,n(e.span,{className:"hljs-number",children:"5"}),") ",n(e.span,{className:"hljs-comment",children:"-- prints 5 "}),`

`,n(e.span,{className:"hljs-comment",children:"-- multiple parameters"}),`
`,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"sum"}),n(e.span,{className:"hljs-params",children:"(a, b)"})]}),`
  `,n(e.span,{className:"hljs-keyword",children:"return"}),` a + b
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n(e.h2,{children:"Scope"}),`
`,n(e.p,{children:"Variables have different scopes. Once the end of the scope is reached, the values in that scope are no longer accessible."}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"foo"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
  `,n(e.span,{className:"hljs-keyword",children:"local"})," n = ",n(e.span,{className:"hljs-number",children:"10"}),`
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-built_in",children:"print"}),"(n) ",n(e.span,{className:"hljs-comment",children:"-- nil , n isn't accessible outside foo()"}),`
`]})}),`
`,n(e.h2,{children:"Loops"}),`
`,n(e.p,{children:"Different ways to make a loop:"}),`
`,n(e.h3,{children:"While"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"})," i = ",n(e.span,{className:"hljs-number",children:"1"}),`

`,n(e.span,{className:"hljs-keyword",children:"while"})," i <= ",n(e.span,{className:"hljs-number",children:"3"})," ",n(e.span,{className:"hljs-keyword",children:"do"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"hi"'}),`)
   i = i + `,n(e.span,{className:"hljs-number",children:"1"}),`
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n(e.h3,{children:"For"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"for"})," i = ",n(e.span,{className:"hljs-number",children:"1"}),", ",n(e.span,{className:"hljs-number",children:"3"})," ",n(e.span,{className:"hljs-keyword",children:"do"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),"(",n(e.span,{className:"hljs-string",children:'"hi"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`,n(e.span,{className:"hljs-comment",children:'-- Both print "hi" 3 times'}),`
`]})}),`
`,n(e.h2,{children:"Tables"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Tables can be used to store complex data."}),`
`,n(e.li,{children:"Types of tables: arrays (lists) and dicts (key,value)"}),`
`]}),`
`,n(e.h3,{children:"Arrays"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:'Items within these can be accessed by "index".'}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"})," colors = { ",n(e.span,{className:"hljs-string",children:'"red"'}),", ",n(e.span,{className:"hljs-string",children:'"green"'}),", ",n(e.span,{className:"hljs-string",children:'"blue"'}),` }

`,n(e.span,{className:"hljs-built_in",children:"print"}),"(colors[",n(e.span,{className:"hljs-number",children:"1"}),"]) ",n(e.span,{className:"hljs-comment",children:"-- red"}),`

`,n(e.span,{className:"hljs-comment",children:"-- Different ways to loop through lists"}),`
`,n(e.span,{className:"hljs-comment",children:"-- #colors is the length of the table, #tablename is the syntax"}),`

`,n(e.span,{className:"hljs-keyword",children:"for"})," i = ",n(e.span,{className:"hljs-number",children:"1"}),", #colors ",n(e.span,{className:"hljs-keyword",children:"do"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),`(colors[i])
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- ipairs "}),`
`,n(e.span,{className:"hljs-keyword",children:"for"})," index, value ",n(e.span,{className:"hljs-keyword",children:"in"})," ",n(e.span,{className:"hljs-built_in",children:"ipairs"}),"(colors) ",n(e.span,{className:"hljs-keyword",children:"do"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),`(colors[index])
   `,n(e.span,{className:"hljs-comment",children:"-- or"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),`(value)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- If you dont use index or value here then you can replace it with _ "}),`
`,n(e.span,{className:"hljs-keyword",children:"for"})," _, value ",n(e.span,{className:"hljs-keyword",children:"in"})," ",n(e.span,{className:"hljs-built_in",children:"ipairs"}),"(colors) ",n(e.span,{className:"hljs-keyword",children:"do"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),`(value)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n(e.h3,{children:"Dictionaries"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"These contain keys and values:"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"}),` info = { 
   name = `,n(e.span,{className:"hljs-string",children:'"sid"'}),`,
   age = `,n(e.span,{className:"hljs-number",children:"20"}),`,
   isAlive = `,n(e.span,{className:"hljs-literal",children:"true"}),`
}

`,n(e.span,{className:"hljs-comment",children:"-- both print sid"}),`
`,n(e.span,{className:"hljs-built_in",children:"print"}),"(info[",n(e.span,{className:"hljs-string",children:'"name"'}),`])
`,n(e.span,{className:"hljs-built_in",children:"print"}),`(info.name)

`,n(e.span,{className:"hljs-comment",children:"-- Loop by pairs"}),`
`,n(e.span,{className:"hljs-keyword",children:"for"})," key, value ",n(e.span,{className:"hljs-keyword",children:"in"})," ",n(e.span,{className:"hljs-built_in",children:"pairs"}),"(info) ",n(e.span,{className:"hljs-keyword",children:"do"}),`
   `,n(e.span,{className:"hljs-built_in",children:"print"}),"(key .. ",n(e.span,{className:"hljs-string",children:'" "'})," .. ",n(e.span,{className:"hljs-built_in",children:"tostring"}),`(value))
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- prints name sid, age 20 etc"}),`
`]})}),`
`,n(e.h3,{children:n(e.strong,{children:"Nested Tables"})}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- Nested lists"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` data = {
    { `,n(e.span,{className:"hljs-string",children:'"sid"'}),", ",n(e.span,{className:"hljs-number",children:"20"}),` },
    { `,n(e.span,{className:"hljs-string",children:'"tim"'}),", ",n(e.span,{className:"hljs-number",children:"90"}),` },
}

`,n(e.span,{className:"hljs-keyword",children:"for"})," i = ",n(e.span,{className:"hljs-number",children:"1"}),", #data ",n(e.span,{className:"hljs-keyword",children:"do"}),`
  `,n(e.span,{className:"hljs-built_in",children:"print"}),"(data[i][",n(e.span,{className:"hljs-number",children:"1"}),"] .. ",n(e.span,{className:"hljs-string",children:'" is "'})," .. data[i][",n(e.span,{className:"hljs-number",children:"2"}),"] .. ",n(e.span,{className:"hljs-string",children:'" years old"'}),`)
`,n(e.span,{className:"hljs-keyword",children:"end"}),`

`,n(e.span,{className:"hljs-comment",children:"-- Nested dictionaries"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` data = {
    sid = { age = `,n(e.span,{className:"hljs-number",children:"20"}),` },
    tim = { age = `,n(e.span,{className:"hljs-number",children:"90"}),` },
}
`]})}),`
`,n(e.h2,{children:"Modules"}),`
`,n(e.p,{children:"Import code from other files"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"path"'}),`)

`,n(e.span,{className:"hljs-comment",children:"-- for example in ~/.config/nvim/lua , all dirs and files are accessable via require"}),`
`,n(e.span,{className:"hljs-comment",children:"-- Do know that all files in that lua folder are in path!"}),`
`,n(e.span,{className:"hljs-comment",children:"-- ~/.config/nvim/lua/custom "}),`
`,n(e.span,{className:"hljs-comment",children:"-- ~/.config/nvim/lua/custom/init.lua"}),`

 `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- both do the same thing"}),`
`]})})]})}function ql(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(mn,t)})):mn(t)}function _n(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",p:"p",strong:"strong",img:"img"},t.components);return a(x,{children:[n(e.h2,{children:"How does NvChad work?"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["To continue this topic, first you should understand ",n(e.code,{children:"vim.tbl_deep_extend"})," function which we use for merging tables and their values recursively."]}),`
`,a(e.li,{children:["We use ",n(e.code,{children:"vim.tbl_deep_extend"})," to merge 2 tables usually, the syntax looks like this :"]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- table 1"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}

`,n(e.span,{className:"hljs-comment",children:"-- table 2"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}

`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)

`,n(e.span,{className:"hljs-comment",children:'-- "force" will use values from someone table to override them on person table'}),`
`,n(e.span,{className:"hljs-comment",children:"-- result : "}),`

{
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Lets look at some complex tables :"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"python"'}),", ",n(e.span,{className:"hljs-string",children:'"java"'}),", ",n(e.span,{className:"hljs-string",children:'"c++"'}),`}

    distros_used = {
        ubuntu = `,n(e.span,{className:"hljs-string",children:'"5 years"'}),`,
        arch = `,n(e.span,{className:"hljs-string",children:'"10 minutes"'}),`,
        manjaro = `,n(e.span,{className:"hljs-string",children:'"10 years"'}),`,
    }
}

`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
    skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},

    distros_used = {
       ubuntu = `,n(e.span,{className:"hljs-string",children:'"1 month"'}),`,
       artix = `,n(e.span,{className:"hljs-string",children:'"2 years"'}),`
    }
}

`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)
`]})}),`
`,n("br",{}),`
`,n(e.p,{children:"And the result is :"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`{
   name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
   age = `,n(e.span,{className:"hljs-number",children:"19"}),`

   skills = {`,n(e.span,{className:"hljs-string",children:'"js"'}),", ",n(e.span,{className:"hljs-string",children:'"lua"'}),`},

   distros_used = {
       ubuntu = `,n(e.span,{className:"hljs-string",children:'"1 month"'}),`,
       arch = `,n(e.span,{className:"hljs-string",children:'"10 minutes"'}),`,
       manjaro = `,n(e.span,{className:"hljs-string",children:'"10 years"'}),`,
       artix = `,n(e.span,{className:"hljs-string",children:'"2 years"'}),`
   }
}

`,n(e.span,{className:"hljs-comment",children:"-- tbl_deep_extend function merges values recursively, but if there's an array ( list ) then it wont merge the the list tables. "}),`

`,n(e.span,{className:"hljs-comment",children:'-- Example : table 1 has  {"python", "java", "c++"} and table 2 has {"js","lua"}, now you might be wondering that it should merge it like this : '}),`

`,n(e.span,{className:"hljs-comment",children:'-- { "python", "java", "c++", "lua"} , But no! thats wrong, the result will be only {"js","lua"}.'}),`
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"tbl_deep_extend merges dicts tables recursively i.e tables which have key/value pair but not lists ( arrays )"}),`
`]}),`
`,n(e.h2,{children:"Config Structure"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`├── init.lua ( main init.lua )
│
├── lua
│   │
│   ├── core
│   │   ├── default_config.lua
│   │   ├── mappings.lua
│   │   ├── utils.lua 
│   │   └── init.lua  
│   │
│   ├── plugins
│   │    ├── init.lua 
│   │    └── configs
│   │        ├── cmp.lua
│   │        └── other configs
│   │  
│   │   USER CONFIG  
│   │  
│   ├── custom *
│   │   ├── chadrc.lua `,n(e.span,{className:"hljs-comment",children:"-- (overrides default_config)"}),`
│   │   ├── init.lua `,n(e.span,{className:"hljs-comment",children:"-- (runs in main init.lua file)"}),`
│   │   ├── more files, dirs
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.strong,{children:"init.lua -"})," runs everything"]}),`
`,a(e.li,{children:[n(e.strong,{children:"core/default_config -"})," returns a table for whole nvchad config"]}),`
`,a(e.li,{children:[n(e.strong,{children:"core/mappings -"})," default mappings"]}),`
`,a(e.li,{children:[n(e.strong,{children:"core/init -"})," globals, nvim options, commands, autocmds"]}),`
`,a(e.li,{children:[n(e.strong,{children:"core/utils -"})," helpful functions"]}),`
`,a(e.li,{children:["The custom dir contains all the user configurations, ",n(e.code,{children:"chadrc.lua"})," and ",n(e.code,{children:"init.lua"})," in ",n(e.code,{children:"custom dir"})," are the main files."]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/illustrations/config_nutshell.webp",alt:"GitHub Logo"})}),`
`,n(e.p,{children:"From now whenever we talk about paths, do know that they're relative to the lua folder in your nvim config."}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"To extend nvchad the user should use 2 files in the custom dir ( chadrc.lua and init.lua ). You shouldn't make changes outside the custom dir."}),`
`,a(e.li,{children:["The chadrc file is meant to override the ",n(e.code,{children:"core/default_config.lua"})," file so check it to know all the available options."]}),`
`]}),`
`,n(e.h2,{children:"Themes"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"<leader> + th"}),"   (",n(e.code,{children:"<leader>"})," is space key in our config)"]}),`
`]}),`
`,n(e.h2,{children:"Mappings"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"Telescope keymaps"})}),`
`,n(e.li,{children:n(e.code,{children:"NvCheatsheet"})}),`
`]})]})}function Bl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(_n,t)})):_n(t)}function gn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code"},t.components);return a(x,{children:[n(e.h2,{children:"Override default options"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Put the options in ",n(e.code,{children:"custom/init.lua"}),"."]}),`
`,n(e.li,{children:"New options can put in the same file as well."}),`
`]}),`
`,n(e.h2,{children:"Autocmds & Globals"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Load these in the ",n(e.code,{children:"custom/init.lua"})," file."]}),`
`]}),`
`,n(e.h2,{children:"Snippets"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"NvChad uses luasnip for snippets."}),`
`,n(e.li,{children:"For custom snippets you can add the below global."}),`
`,n(e.li,{children:n(e.code,{children:'vim.g.luasnippets_path = "your snippets path"'})}),`
`]})]})}function Ul(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(gn,t)})):gn(t)}function fn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},t.components);return a(x,{children:[n(e.h2,{children:"Overview"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["NvChad uses ",n(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management so its syntax is valid."]}),`
`,n(e.li,{children:"Basically NvChad expects a user plugin table, which then gets merged with the default plugins table."}),`
`]}),`
`,n(e.h2,{children:"Lazy loading"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins as well! As its efficient in reducing startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!"}),`
`]}),`
`,n(e.h3,{children:"Tips"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[`
`,a(e.p,{children:[n("strong",{children:" cmd : "})," If a plugin loads on commands then use the ",n(e.code,{children:"cmd"}),` spec, For ex: trouble.nvim plugin opens when we run "Trouble" command, so now I'd just write the word "Trouble" in the cmd spec of trouble.nvim plugin definition.`]}),`
`]}),`
`,a(e.li,{children:[`
`,a(e.p,{children:[n("strong",{children:" event : "}),` Use this spec if you want to load a plugin on certain vim event ( check :h events ). Cmp.nvim plugin is useful when we're in insert mode, so I lazyload it at "InsertEnter" event.`]}),`
`]}),`
`,a(e.li,{children:[`
`,a(e.p,{children:["There are more specs through which you could do lazyloading like ",n("strong",{children:" ft, cond, keys "}),"."]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Managing custom plugins"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"In NvChad (lazy = true) is set to all plugins, so if you want a plugin to be enabled on startup, do (lazy = false)"}),`
`,n(e.li,{children:"Some examples :"}),`
`]}),`
`,a(e.p,{children:[n(e.strong,{children:n(e.code,{children:"custom/chadrc.lua"})}),"  :"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:["M.plugins = ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Do know you shouldnt save anything in ",n(e.code,{children:"custom/plugins/"}),` dir. We're using the import feature provided by lazy.nvim so it'll import all the files in a dir and expect each file to return plugin tables etc which we dont want so we just create "custom/plugins.lua" file and then lazy will import only this file.`]}),`
`]}),`
`,n("br",{}),`
`,a(e.p,{children:[n(e.strong,{children:n(e.code,{children:"custom/plugins.lua"})})," :"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"return"}),` {

  `,n(e.span,{className:"hljs-comment",children:"-- Install plugin"}),`
  { `,n(e.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",n(e.span,{className:"hljs-literal",children:"false"}),` },

  `,n(e.span,{className:"hljs-comment",children:"-- Using more plugin specs like cmd etc"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,n(e.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",n(e.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.truezen"'}),`
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  }

  `,n(e.span,{className:"hljs-comment",children:"-- opts overrides default plugin config's option"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"css"'}),", ",n(e.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },

  `,n(e.span,{className:"hljs-comment",children:"-- Here we wrap opts with a function because its loading cmp module"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- If we didnt wrap with function then the code will run on startup"}),`
   {
    `,n(e.span,{className:"hljs-string",children:'"hrsh7th/nvim-cmp"'}),`,
    opts = `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-keyword",children:"local"})," cmp = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"cmp"'}),`

      `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
        mapping = {
          [`,n(e.span,{className:"hljs-string",children:'"<C-d>"'}),"] = cmp.mapping.scroll_docs(",n(e.span,{className:"hljs-number",children:"-8"}),`),
        },
      }
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
   },
}
`]})})]})}function Fl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(fn,t)})):fn(t)}function bn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span"},t.components);return a(x,{children:[n(e.h2,{children:"Setup lsp server"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Skim through ",n(e.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"lspconfig repo"})," to get a general overview of how the config works."]}),`
`,a(e.li,{children:["Then check ",n(e.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's lsp server is present there."]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- We are just modifying lspconfig's config spec"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins.lspconfig"'}),`
   `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
},
`]})}),`
`,n("br",{}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom.configs.lspconfig"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," on_attach = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).on_attach
`,n(e.span,{className:"hljs-keyword",children:"local"})," capabilities = ",n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).capabilities

`,n(e.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"lspconfig"'}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," servers = { ",n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"cssls"'}),", ",n(e.span,{className:"hljs-string",children:'"clangd"'}),`}

`,n(e.span,{className:"hljs-keyword",children:"for"})," _, lsp ",n(e.span,{className:"hljs-keyword",children:"in"})," ",n(e.span,{className:"hljs-built_in",children:"ipairs"}),"(servers) ",n(e.span,{className:"hljs-keyword",children:"do"}),`
  lspconfig[lsp].setup {
    on_attach = on_attach,
    capabilities = capabilities,
  }
`,n(e.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,n("br",{}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"--  Without the loop it would look like this "}),`

lspconfig.html.setup {
  on_attach = on_attach,
  capabilities = capabilities,
}

lspconfig.cssls.setup {
  on_attach = on_attach,
  capabilities = capabilities,
}
`]})}),`
`,n(e.h2,{children:"Mason.nvim"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"The Mason.nvim plugin is used to install lspservers, formatters, linters, and debug adapters."}),`
`,n(e.li,{children:"It's better to list all your required packages and put them into your Mason override config."}),`
`,a(e.li,{children:["Find the exact name of your packages from the ",n(e.code,{children:":Mason"})," window"]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[` {
   `,n(e.span,{className:"hljs-string",children:'"williamboman/mason.nvim"'}),`,
   opts = {
      ensure_installed = {
        `,n(e.span,{className:"hljs-string",children:'"lua-language-server"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"html-lsp"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"prettier"'}),`,
        `,n(e.span,{className:"hljs-string",children:'"stylua"'}),`
      },
    },
  }
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Reopen nvim & run the ",n(e.code,{children:":MasonInstallAll"})," command. This will install the listed binaries in the ",n(e.code,{children:"ensure_installed"})," table."]}),`
`,n(e.li,{children:"This only downloads the binaries. The lsp server/formatters won't run automatically. You need to configure a custom lspconfig and possibly some plugin like null-ls/neoformat etc for the formatters to work."}),`
`]})]})}function Xl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(bn,t)})):bn(t)}function vn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",a:"a",strong:"strong"},t.components);return a(x,{children:[n(e.h2,{children:"Install null-ls.nvim"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Dependencies load after the original plugin ( lspconfig in our case )."}),`
`,n(e.li,{children:"Null-ls is loaded after lspconfig as lspconfig is lazyloaded."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`{
  `,n(e.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,

   dependencies = {
     `,n(e.span,{className:"hljs-string",children:'"jose-elias-alvarez/null-ls.nvim"'}),`,
     `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
       `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.null-ls"'}),`
     `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
   },
 
   `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.lspconfig"'}),`
   `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
}
`]})}),`
`,n(e.h2,{children:"Null-ls config"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Check ",n(e.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",children:"null-ls builtins"})," to get exact names for formatters, linters etc."]}),`
`,n(e.li,{children:n(e.strong,{children:n(e.code,{children:"custom/configs/null-ls.lua"})})}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`
`,n(e.span,{className:"hljs-keyword",children:"local"})," null_ls = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"null-ls"'}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` formatting = null_ls.builtins.formatting
`,n(e.span,{className:"hljs-keyword",children:"local"}),` lint = null_ls.builtins.diagnostics

`,n(e.span,{className:"hljs-keyword",children:"local"}),` sources = {
   formatting.prettier,
   formatting.stylua,

   lint.shellcheck,
}

null_ls.setup {
   `,n(e.span,{className:"hljs-built_in",children:"debug"})," = ",n(e.span,{className:"hljs-literal",children:"true"}),`,
   sources = sources,
}
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Format code : ",n(e.code,{children:"<leader> + fm"})]}),`
`,n(e.li,{children:"linter/formatter/debugger listed in your null-ls config must be downloaded via mason or system wide."}),`
`,n(e.li,{children:"Make sure LSP server for your filetype is active for the relevant null-ls formatter / linter to work."}),`
`]})]})}function Hl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(vn,t)})):vn(t)}function wn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",strong:"strong"},t.components);return a(x,{children:[n(e.h2,{children:"Overview"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["C = ",n("kbd",{children:" Ctrl "})]}),`
`,a(e.li,{children:["leader = ",n("kbd",{children:" Space "})]}),`
`,a(e.li,{children:["A = ",n("kbd",{children:" alt "})]}),`
`,a(e.li,{children:["S = ",n("kbd",{children:" shift "})]}),`
`,a(e.li,{children:["Defaults are defined in ",n(e.code,{children:"core.mappings"}),"."]}),`
`,a(e.li,{children:[n(e.code,{children:"NvCheatsheet"})," or ",n(e.code,{children:"Telescope keymaps"})," to list all mappings."]}),`
`]}),`
`,n(e.h2,{children:"Mapping format"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"opts here is completely optional"}),`
`,n(e.li,{children:"Mapping description makes your keybind listed in NvCheatsheet window"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:["[",n(e.span,{className:"hljs-string",children:'"keys"'}),"] = {",n(e.span,{className:"hljs-string",children:'"action"'}),", ",n(e.span,{className:"hljs-string",children:'"description"'}),`, opts = {}},

[`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> NvimTreeToggle <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Toggle nvimtree"'}),`},
[`,n(e.span,{className:"hljs-string",children:'"<leader>ff"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),"},  ",n(e.span,{className:"hljs-comment",children:"-- can : instead of <cmd> "}),`

`,n(e.span,{className:"hljs-comment",children:"-- opts can have : buffer, silent, noremap, nowait etc"}),`
`,n(e.span,{className:"hljs-comment",children:"-- all standard key binding opts are supported. "}),`
[`,n(e.span,{className:"hljs-string",children:'";"'}),"] = { ",n(e.span,{className:"hljs-string",children:'":"'}),", ",n(e.span,{className:"hljs-string",children:'"enter cmdline"'}),", opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` } },

[`,n(e.span,{className:"hljs-string",children:'"<leader>tt"'}),`] = {
  `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
     `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  `,n(e.span,{className:"hljs-string",children:'"toggle transparency"'}),`,
},
`]})}),`
`,n(e.h2,{children:"Add new mappings"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"This is the mappings structure of core.mappings and your custom mappings."}),`
`,a(e.li,{children:["You need to put your mappings into ",n(e.code,{children:"modes"})," like n, v, i, t, etc."]}),`
`,n(e.li,{children:"n = normal, i = insert and so on."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:["M.mappings = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.mappings"'})," ",n(e.span,{className:"hljs-comment",children:"-- chadrc file"}),`
`]})}),`
`,n("div",{"pb-2":""}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.strong,{children:n(e.code,{children:"custom/mappings.lua"})})}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

`,n(e.span,{className:"hljs-comment",children:"-- add this table only when you want to disable default keys"}),`
M.disabled = {
  n = {
      [`,n(e.span,{className:"hljs-string",children:'"<leader>h"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`,
      [`,n(e.span,{className:"hljs-string",children:'"<C-a>"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`
  }
}

M.abc = {
  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
     [`,n(e.span,{className:"hljs-string",children:'"<C-s>"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope Files <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope Files"'}),`} 
  }

  i = {
     [`,n(e.span,{className:"hljs-string",children:'"jk"'}),"] = { ",n(e.span,{className:"hljs-string",children:'"<ESC>"'}),", ",n(e.span,{className:"hljs-string",children:'"escape insert mode"'})," , opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` }},
    `,n(e.span,{className:"hljs-comment",children:"-- more keys!"}),`
  }
}

M.xyz = {
  `,n(e.span,{className:"hljs-comment",children:"-- stuff"}),`
}

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Be sure to maintain a table structure similar to core.mappings."}),`
`,n(e.li,{children:"Mappings will be automatically loaded. You don't need to load them manually."}),`
`]}),`
`,n(e.h2,{children:"Manually load mappings"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- your mappings table"}),`
M.someplugin = {
  plugin = `,n(e.span,{className:"hljs-literal",children:"true"}),`,

  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
  }
}

`,n(e.span,{className:"hljs-comment",children:"-- Now to load it "}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"core.utils"'}),").load_mappings(",n(e.span,{className:"hljs-string",children:'"someplugin"'}),`)
`]})})]})}function Wl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(wn,t)})):wn(t)}function yn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",h3:"h3"},t.components);return a(x,{children:[n(e.h2,{children:"Statusline & tabufline"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["We use our own ",n(e.a,{href:"https://github.com/NvChad/ui",children:"plugin"})," for statusline & tabufline and it has some options."]}),`
`,n(e.li,{children:"The default config: (You must know that every plugin's default config is just a table)."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
  ... some options

  statusline = {
    theme = `,n(e.span,{className:"hljs-string",children:'"default"'}),", ",n(e.span,{className:"hljs-comment",children:"-- default/vscode/vscode_colored/minimal"}),`

    `,n(e.span,{className:"hljs-comment",children:"-- default/round/block/arrow separators work only for default statusline theme"}),`
    `,n(e.span,{className:"hljs-comment",children:"-- round and block will work for minimal theme only"}),`
    separator_style = `,n(e.span,{className:"hljs-string",children:'"default"'}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  tabufline = {
    lazyload = `,n(e.span,{className:"hljs-literal",children:"true"}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  ... some options
}
`]})}),`
`,n(e.h3,{children:"Override statusline modules"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Add this in your plugin overrides section:"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`statusline = {
  overriden_modules = `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
    `,n(e.span,{className:"hljs-keyword",children:"local"})," st_modules = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"nvchad_ui.statusline.default"'}),`
    `,n(e.span,{className:"hljs-comment",children:"-- this is just default table of statusline modules"}),`

    `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
      mode = `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
        `,n(e.span,{className:"hljs-keyword",children:"return"})," st_modules.mode() .. ",n(e.span,{className:"hljs-string",children:'" bruh "'}),`
      `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
    }
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
},

`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["First, check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/statusline/modules.lua",children:"our statusline modules file"}),"."]}),`
`,n(e.li,{children:'In the above code, you can see that we wanted to print "bruh" next to the mode module in the statusline.'}),`
`,n(e.li,{children:"To add highlight group to your text"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-string",children:'"#BruhHl%"'})," .. ",n(e.span,{className:"hljs-string",children:'" bruh "'}),`
`,n(e.span,{className:"hljs-comment",children:"-- so the highlight group here is BruhHl"}),`
`]})}),`
`,n(e.h3,{children:"Override tabufline modules"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Overriding tabufline modules is the same as statusline"}),`
`,n(e.li,{children:"This example is for overriding the modules in tabufline:"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`tabufline = {
   overriden_modules = `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
     `,n(e.span,{className:"hljs-keyword",children:"local"})," modules = ",n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline.modules"'}),`

     `,n(e.span,{className:"hljs-keyword",children:"return"}),` {
       buttons = `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
         `,n(e.span,{className:"hljs-keyword",children:"return"})," modules.buttons() .. ",n(e.span,{className:"hljs-string",children:'" my button "'}),`
       `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
       `,n(e.span,{className:"hljs-comment",children:'-- or buttons = "" , this will disable the buttons'}),`
     }
   `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
 },
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["First, check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/tabufline/modules.lua",children:"our tabufline modules file"}),"."]}),`
`]})]})}function Gl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(yn,t)})):yn(t)}function Nn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",h3:"h3",p:"p"},t.components);return a(x,{children:[n(e.h2,{children:"Override default highlight groups"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Make sure you use a valid highlight group!"}),`
`,n(e.li,{children:"Check your theme colors in this dir:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-shell",children:`~/.local/share/nvim/lazy/base46/lua/base46/integrations
`})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"In your theme file, for instance onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups."}),`
`,n(e.li,{children:"You can even use hex colors in the fg/bg field, but it's preferable to use variable names (for instance: blue, darker_black, one_bg, etc.) from your theme file as these will look better."}),`
`,n(e.li,{children:"No need to write hex colors manually!"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
   hl_override = {
      Pmenu = { bg = `,n(e.span,{className:"hljs-string",children:'"white"'}),` },
      `,n(e.span,{className:"hljs-comment",children:'-- Pmenu = { bg = "#ffffff" }, this works too'}),`


      MyHighlightGroup = {
         fg = `,n(e.span,{className:"hljs-string",children:'"red"'}),`,
         bg = `,n(e.span,{className:"hljs-string",children:'"darker_black"'}),`
      }
   },
}
`]})}),`
`,n(e.h3,{children:"Add new highlight groups"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["The same method can be used as above, but instead of ",n(e.code,{children:"hl_override"}),", you add in ",n(e.code,{children:"hl_add"})," field in chadrc."]}),`
`]}),`
`,n(e.h2,{children:"Customize themes"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["You can edit theme colors from the ",n(e.code,{children:"changed_themes"})," table"]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {

   changed_themes = {
      onedark = {
         base_16 = {
            base00 = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
         base_30 = {
            red = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
            white = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
      },

      nord = {
         `,n(e.span,{className:"hljs-comment",children:"-- and so on!"}),`
      },
   },
}
`]})}),`
`,n(e.h3,{children:"Local themes"}),`
`,n(e.p,{children:"(WARNING: Do this at your own risk because you might not be able to make nvchad themes like siduck.)"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Default themes are in our base46 repo's themes dir."}),`
`,n(e.li,{children:"Any nvchad theme structure looks like this:"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- theme file is custom/themes/siduck.lua"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

M.base_30 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my colors"}),`
}

M.base_16 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my base16 colors"}),`
}

vim.opt.bg = `,n(e.span,{className:"hljs-string",children:'"dark"'})," ",n(e.span,{className:"hljs-comment",children:"-- or light "}),`
`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Make sure to use the exact variable names!"}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
   theme = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}
`]})})]})}function Yl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Nn,t)})):Nn(t)}function jn(t){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",h4:"h4",p:"p",img:"img",code:"code",a:"a"},t.components);return a(x,{children:[n(e.h1,{children:"Inbuilt features"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["NvChad is built upon its personal plugins and many general neovim plugins, below are the features that are provided by nvchad plugins ",n(e.strong,{children:"( our ui plugin, base46, extensions, nvterm, nvim-colorizer )"})]}),`
`]}),`
`,n(e.h2,{children:"Base46"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Base46 is NvChad's highlight performant theming plugin and has many ported themes ( around 57+ )."}),`
`]}),`
`,n(e.h4,{children:"How it works?"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Gets highlight groups"}),`
`,n(e.li,{children:"Do some computations i.e check for overriden highlight groups, new highlight groups, theme overrides, custom user themes etc."}),`
`,n(e.li,{children:"Now base46 compiles all of that into bytecode."}),`
`,n(e.li,{children:"Integration files aren't loaded by default, for example highlight group for telescope, nvimtree etc are put into different files."}),`
`,n(e.li,{children:"highlight groups are lazyloaded i.e you load them when needed"}),`
`,n(e.li,{children:n(e.strong,{children:'example : dofile(vim.g.base46_cache .. "treesitter")'})}),`
`,n(e.li,{children:"In the below video you can see that the chadrc file's ( user config ) UI related options reload on the fly"}),`
`]}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/xytzreFq_us",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen"})}),`
`,n(e.h2,{children:"Theme switcher"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"We build a theme switcher with telescope.nvim which reloads theme on the fly using base46 plugin."}),`
`]}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/wt7IX8ojMrs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,n(e.h2,{children:"Statusline"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"We have our own statusline module ( our UI Plugin ) which has 4 statusline styles"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/features/statuslines.webp",alt:"nvchad statusline"})}),`
`,n(e.h2,{children:"Tabufline"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"NvChad's tabufline module ( from UI Plugin ) is a mix of tabline & bufferline."}),`
`,n(e.li,{children:"It manages buffers & tabs, buttons in it are clickable"}),`
`,n(e.li,{children:"Each tab will have its own set of buffers stored and the tabufline will show those only."}),`
`,n(e.li,{children:"Think it like workspaces on Linux/Windows where windows stay in their own workspaces, but in vim buffers from all tabs will be shown in every tab!"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/features/tabufline.webp",alt:"tabufline1"})}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/V_9iJ96U_k8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,n(e.h2,{children:"Nvterm"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"NvChad's terminal plugin to toggle and run commands in neovim terminal buffer"}),`
`,n(e.li,{children:"Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers."}),`
`]}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/3DysWI_6YpQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,n(e.h2,{children:"Dashboard"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,a(e.li,{children:["Command to run it ",n(e.code,{children:"NvDash"}),`, its disabled on startup, check the default_config.lua for its syntax and override it from chadrc.
`,n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})]}),`
`]}),`
`,n(e.h2,{children:"NvCheatsheet"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}),`
`]}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/IljDD4cjgKc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,n(e.h1,{children:"General neovim plugins"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"These plugins aren't related to nvchad, we just tweak theme a bit and theme the UI related ones."}),`
`]}),`
`,n(e.h2,{children:"Telescope.nvim"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/nvim-telescope/telescope.nvim",children:"Telescope.nvim"})," is a highly extendable fuzzy finder over lists. Built on the latest awesome features from neovim core. Telescope is centered around modularity, allowing for easy customization."]}),`
`,n(e.li,{children:"Below are 2 styles of telescope in nvchad ( bordered and borderless )"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/features/telescope.webp",alt:"telescope"})}),`
`,n(e.h2,{children:"Nvim-tree.lua"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/kyazdani42/nvim-tree.lua",children:n(e.code,{children:"nvim-tree.lua"})})," is a file explorer tree for Neovim written in Lua."]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})}),`
`,n(e.h2,{children:"Nvim-cmp"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["[",n(e.code,{children:"nvim-cmp"}),"](A completion plugin for neovim coded in Lua.) is a completion plugin for neovim coded in Lua."]}),`
`,n(e.li,{children:"Below are some cmp styles in nvchad"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Note that thats just the cmp look in everblush theme, there are more 57 themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"}),`
`]}),`
`,n(e.h2,{children:"Auto-completion & LSP"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/neovim/nvim-lspconfig",children:n(e.code,{children:"nvim-lspconfig"})})," is used along with cmp for completion and ",n(e.a,{href:"https://github.com/L3MON4D3/LuaSnip",children:n(e.code,{children:"luasnip"})}),"  + ",n(e.a,{href:"https://github.com/rafamadriz/friendly-snippets",children:n(e.code,{children:"friendly-snippets"})})," for snippet completion!"]}),`
`]}),`
`,n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/oMzMDXA-VO0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,n("br",{}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/folke/lazy.nvim",children:n(e.code,{children:"lazy.nvim"})})," - A modern plugin manager for Neovim"]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/folke/lazy.nvim",children:n(e.code,{children:"whichkey.nvim"})})," - Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing."]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/NvChad/nvim-colorizer.lua",children:n(e.code,{children:"nvim-colorizer.lua"})})," - Fastest Neovim colorizer, hex colors, hsl codes and much more."]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",children:n(e.code,{children:"nvim-treesitter"})})," - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/lukas-reineke/indent-blankline.nvim",children:n(e.code,{children:"blankline"})})," - Indent guides for Neovim i.e indentline plugin."]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/lewis6991/gitsigns.nvim",children:n(e.code,{children:"gitsigns.nvim"})})," - Git integration for buffers"]}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/windwp/nvim-autopairs",children:n(e.code,{children:"nvim-autopairs"})})}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/numToStr/Comment.nvim",children:n(e.code,{children:"comment.nvim"})})," - Commenting plugin"]}),`
`,a(e.li,{children:[n(e.a,{href:"https://github.com/williamboman/mason.nvim",children:n(e.code,{children:"mason.nvim"})})," - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."]}),`
`]})]})}function Kl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(jn,t)})):jn(t)}function En(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},t.components);return a(x,{children:[n(e.h1,{children:"# NvChad API"}),`
`,n(e.p,{children:"These are list of some functions which are provided by nvchad plugins that aren't included in the config. You can make commands & mappings out of them."}),`
`,n(e.h2,{children:"Tbufpick"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Used for picking buffers by entering the numbers previewed on them after running this module."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).tbufpick()
`]})}),`
`,n(e.h2,{children:"Arrange buffer"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Used for arranging buffers left/right in the tabufline."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- move buffer right"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"1"}),`)

`,n(e.span,{className:"hljs-comment",children:"-- move buffer left"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"-1"}),`)
`]})}),`
`,n(e.h2,{children:"Toggle transparency"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Used to toggle transparency, make sure that you have transparency option set in your chadrc."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
`]})}),`
`,n(e.h2,{children:"Toggle themes"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Used to toggle between 2 themes, make sure that you have ",n(e.code,{children:"theme_toggle"})," option set in your chadrc."]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_themes()
`]})}),`
`,n(e.h2,{children:"Close all buffers"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Used to close all the buffers in current tab. ( the close icon in tabufline handles this )."}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).closeAllbufs()
`]})})]})}function Zl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(En,t)})):En(t)}function kn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",a:"a"},t.components);return a(x,{children:[n(e.h2,{children:"Basic debugging"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["You can check the health of Neovim with the ",n(e.code,{children:"checkhealth"})," command."]}),`
`,n(e.li,{children:"Make sure you dont have syntax errors in your custom config files"}),`
`,n(e.li,{children:"By default in NvChad sumneko lua LSP is enabled so it'll look for syntax errors etc for you."}),`
`]}),`
`,n(e.h2,{children:"Before logging an issue"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/NvChad/NvChad/issues?q=is%3Aissue",children:"Search the GitHub issue list"})}),`
`,a(e.li,{children:["Then ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/new/choose",children:"log an issue, be sure to provide all prompted information"})]}),`
`,n(e.li,{children:"If it's a plugin issue, then make sure you're familiar with the lazy loading of default NvChad plugins as that plugin might depend on the default plugin which is lazy loaded."}),`
`]})]})}function Jl(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(kn,t)})):kn(t)}function An(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},t.components);return a(x,{children:[n(e.h2,{children:"Things to know before contributing"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[`
`,n(e.p,{children:"When making a PR (pull request), please be very descriptive about what you've done."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"We are open to all PRs, but may decline some for a myriad of reasons. Don't be discouraged, though! We're still open to discussion."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"PR's are always welcome; however, NvChad aims to be less bloated. So PR's regarding an existing plugin's enhancement and creating new features with existing plugins itself (without adding a new plugin), bug fixes, and corrections are more encouraged."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"NvChad won't keep adding more and more features (like adding new plugins) as requested if they feel unneeded and aren't usable by the majority. If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such PR's are welcome."}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Format your PR with StyLua"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Check the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/main/.stylua.toml",children:"StyLua config"})]}),`
`]}),`
`,n(e.h2,{children:"Other ways to contribute"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Help other nvchad users on github discussions, issues, our discord/matrix server, telegram group."}),`
`]})]})}function Ql(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(An,t)})):An(t)}function Ln(t){const e=Object.assign({p:"p",ul:"ul",li:"li",a:"a",strong:"strong"},t.components);return a(x,{children:[n(e.p,{children:"The NvChad team would love to acknowledge many projects which made this possible."}),`
`,n(e.p,{children:"Thank you!"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[`
`,a(e.p,{children:[n(e.a,{href:"https://github.com/vim/vim",children:"Vim"})," & ",n(e.a,{href:"https://github.com/neovim/neovim",children:"NeoVim"})]}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"Plugin maintainers."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"Other NeoVim configurations which inspired @siduck to create NvChad:"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/LunarVim/LunarVim",children:"LunarVim"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/SpaceVim/SpaceVim",children:"SpaceVim"})}),`
`]}),`
`]}),`
`,a(e.li,{children:[`
`,a(e.p,{children:["Thanks to ",n(e.a,{href:"https://t.me/ufoludek",children:"ufoludek"}),' for making fun of me when I (@siduck) was using "codeblocks" ( 3 years ago ). I got to know from him that vim could do the same thing which got me interested in vim.']}),`
`]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Some people who helped me a lot :"})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/elianiva",children:"elianava"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/ii14",children:"ii14"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/max397574",children:"max397574"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/lucario387",children:"lucario"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/tamton-aquib",children:"tamton-aquib"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/vhyrro",children:"vhyrro"})}),`
`]})]})}function ei(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ln,t)})):Ln(t)}const Ke=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install",Ml],["Post Install","quickstart/post-install",zl],["Learn basic Lua","quickstart/learn-lua",ql]]},{label:["Custom config","i-mdi-cog"],items:[["Walkthrough","config/walkthrough",Bl],["Options","config/options",Ul],["Manage Plugins","config/plugins",Fl],["LSP Configuration","config/Lsp",Xl],["Format & Lint","config/format_lint",Hl],["Mappings","config/mappings",Wl],["UI Customization","config/nvchad_ui",Gl],["Customize colors","config/theming",Yl]]},["Features","features","i-tabler:server-cog",Kl],["Api Functions","api","i-mdi:atom-variant",Zl],["Debug config","debugging-config","i-ri-bug-line",Jl],["Contributing","contribute","i-mdi-github",Ql],["Credits","credits","i-line-md:heart",ei]],ni=g('<div class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3="" pl-5=""></div>',2),ti=g('<div class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium=""><div></div> </div><div></div></button></div>',10),li=g('<div i-octicon-chevron-down-12=""></div>',2),ii=g('<div i-octicon-chevron-right-12=""></div>',2),si=g(`<div class="h-fit  xl:sticky z-10 top-0  xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none pt-0 p-7 xl:p-0"><div h-full="" flex="" flex-col="" gap-5="" class="[&amp;_*]:text-base dark:text-slate-4"></div></div>`,4),ri=g("<div></div>",2);function ai(t){const e=t.labels.filter(s=>Z().pathname==`/docs/${s[1]}`).length,[l,i]=L(e==1);return(()=>{const s=ti.cloneNode(!0),c=s.firstChild,o=c.firstChild,h=o.firstChild;h.nextSibling;const u=o.nextSibling;return c.$$click=()=>i(!l()),_(o,()=>t.BtnLabel[0],null),_(u,(()=>{const d=b(()=>!!l());return()=>d()?li.cloneNode(!0):ii.cloneNode(!0)})()),_(s,m(Ge,{get when(){return l()},get children(){const d=ni.cloneNode(!0);return _(d,()=>t.labels.map(p=>m(I,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return p[1]},get children(){return p[0]}}))),d}}),null),E(d=>{const p=t.BtnLabel[1],f=`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${l()?"dark:text-red-3":"dark:text-white-2"}`;return p!==d._v$&&D(h,d._v$=p),f!==d._v$2&&D(u,d._v$2=f),d},{_v$:void 0,_v$2:void 0}),s})()}function ci(){return(()=>{const t=si.cloneNode(!0),e=t.firstChild;return _(e,()=>Ke.map(l=>l.label?m(ai,{get BtnLabel(){return l.label},get labels(){return l.items}}):m(I,{get href(){return l[1]},vertCentered:"",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[(()=>{const i=ri.cloneNode(!0);return E(()=>D(i,l[2])),i})(),b(()=>l[0])]}}))),E(()=>t.hidden=!ke()),t})()}F(["click"]);const oi=g('<div flex="" justify-between=""></div>',2),hi=g('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-left-bold=""></div></button>',4),xn=g("<div></div>",2),di=g('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-right-bold=""></div></button>',4);let se=[];Ke.forEach(t=>{Array.isArray(t)?se.push(t):t.items.forEach(e=>{se.push(e)})});function W(t,e){let l="",i=Z().pathname.replace(/^\/docs\//,"");return se.forEach((s,c)=>{i==s[1]&&se[c+t]&&(l=se[c+t][e?1:0])}),l}const ui=()=>(()=>{const t=oi.cloneNode(!0);return _(t,(()=>{const e=b(()=>!!W(-1));return()=>e()?m(I,{get href(){return W(-1,!0)},get children(){const l=hi.cloneNode(!0);return l.firstChild,_(l,()=>W(-1),null),l}}):xn.cloneNode(!0)})(),null),_(t,(()=>{const e=b(()=>!!W(1));return()=>e()?m(I,{get href(){return W(1,!0)},get children(){const l=di.cloneNode(!0),i=l.firstChild;return _(l,()=>W(1),i),l}}):xn.cloneNode(!0)})(),null),t})();const pi=t=>{(document.getElementById(t)?.querySelectorAll("pre")).forEach(function(i){const s=document.createElement("button");s.classList="copyBtn",s.ariaLabel="copy button";const c=document.createElement("div");c.classList="i-uil:clipboard",s.appendChild(c),s.addEventListener("click",function(){const o=s.querySelector("div");o.classList="i-line-md:confirm-circle clickedCopyBtn";const h=i.textContent;navigator.clipboard.writeText(h),setTimeout(()=>{o.classList="i-uil:clipboard"},3e3)}),i.appendChild(s)})},ze=Symbol("store-raw"),ce=Symbol("store-node"),mi=Symbol("store-name");function nt(t,e){let l=t[R];if(!l&&(Object.defineProperty(t,R,{value:l=new Proxy(t,fi)}),!Array.isArray(t))){const i=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let c=0,o=i.length;c<o;c++){const h=i[c];s[h].get&&Object.defineProperty(t,h,{enumerable:s[h].enumerable,get:s[h].get.bind(l)})}}return l}function je(t){let e;return t!=null&&typeof t=="object"&&(t[R]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function oe(t,e=new Set){let l,i,s,c;if(l=t!=null&&t[ze])return l;if(!je(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,h=t.length;o<h;o++)s=t[o],(i=oe(s,e))!==s&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const o=Object.keys(t),h=Object.getOwnPropertyDescriptors(t);for(let u=0,d=o.length;u<d;u++)c=o[u],!h[c].get&&(s=t[c],(i=oe(s,e))!==s&&(t[c]=i))}return t}function Ze(t){let e=t[ce];return e||Object.defineProperty(t,ce,{value:e={}}),e}function qe(t,e,l){return t[e]||(t[e]=lt(l))}function _i(t,e){const l=Reflect.getOwnPropertyDescriptor(t,e);return!l||l.get||!l.configurable||e===R||e===ce||e===mi||(delete l.value,delete l.writable,l.get=()=>t[R][e]),l}function tt(t){if(Vn()){const e=Ze(t);(e._||(e._=lt()))()}}function gi(t){return tt(t),Reflect.ownKeys(t)}function lt(t){const[e,l]=L(t,{equals:!1,internal:!0});return e.$=l,e}const fi={get(t,e,l){if(e===ze)return t;if(e===R)return l;if(e===ln)return tt(t),l;const i=Ze(t),s=i.hasOwnProperty(e);let c=s?i[e]():t[e];if(e===ce||e==="__proto__")return c;if(!s){const o=Object.getOwnPropertyDescriptor(t,e);Vn()&&(typeof c!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(c=qe(i,e,c)())}return je(c)?nt(c):c},has(t,e){return e===ze||e===R||e===ln||e===ce||e==="__proto__"?!0:(this.get(t,e,t),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:gi,getOwnPropertyDescriptor:_i};function Ee(t,e,l,i=!1){if(!i&&t[e]===l)return;const s=t[e],c=t.length;l===void 0?delete t[e]:t[e]=l;let o=Ze(t),h;(h=qe(o,e,s))&&h.$(()=>l),Array.isArray(t)&&t.length!==c&&(h=qe(o,"length",c))&&h.$(t.length),(h=o._)&&h.$()}function it(t,e){const l=Object.keys(e);for(let i=0;i<l.length;i+=1){const s=l[i];Ee(t,s,e[s])}}function bi(t,e){if(typeof e=="function"&&(e=e(t)),e=oe(e),Array.isArray(e)){if(t===e)return;let l=0,i=e.length;for(;l<i;l++){const s=e[l];t[l]!==s&&Ee(t,l,s)}Ee(t,"length",i)}else it(t,e)}function ie(t,e,l=[]){let i,s=t;if(e.length>1){i=e.shift();const o=typeof i,h=Array.isArray(t);if(Array.isArray(i)){for(let u=0;u<i.length;u++)ie(t,[i[u]].concat(e),l);return}else if(h&&o==="function"){for(let u=0;u<t.length;u++)i(t[u],u)&&ie(t,[u].concat(e),l);return}else if(h&&o==="object"){const{from:u=0,to:d=t.length-1,by:p=1}=i;for(let f=u;f<=d;f+=p)ie(t,[f].concat(e),l);return}else if(e.length>1){ie(t[i],e,[i].concat(l));return}s=t[i],l=[i].concat(l)}let c=e[0];typeof c=="function"&&(c=c(s,l),c===s)||i===void 0&&c==null||(c=oe(c),i===void 0||je(s)&&je(c)&&!Array.isArray(c)?it(s,c):Ee(t,i,c))}function vi(...[t,e]){const l=oe(t||{}),i=Array.isArray(l),s=nt(l);function c(...o){bt(()=>{i&&o.length===1?bi(l,o[0]):ie(l,o)})}return[s,c]}function wi(t){const e=t.getBoundingClientRect();return!!(e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth))}const[yi,st]=L(""),[Je,Ni]=vi([]),Y=t=>{let l=document.getElementById(t)?.querySelectorAll("h2,h3");for(let i=0;i<l.length;i++)if(wi(l[i])){st(l[i].innerText);break}},rt=()=>{const e=document.getElementById("DocContent")?.querySelectorAll("h2, h3"),l=[];e?.forEach(i=>{i.id=i.innerText.replaceAll(/[ .&]/g,"_"),l.push([i.localName,i.innerText])}),Ni(l)},at=()=>{const t=location.hash;if(t[0]==="#"){const e=t.substring(1);document.getElementById(e).scrollIntoView()}},ji=g('<div class="top-0 sticky my-5 xl:grid xl:h-[calc(100vh-11rem)]"><div class="h-fit grid"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full" m="t-[-2rem]" xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text="slate-5"></div></div></div>',10);function Ei(t){let e=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${yi()==t[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return t[0]=="h3"?`pl-10 ${e}`:`${e}`}function ct(){const[t,e]=L(!1);return(()=>{const l=ji.cloneNode(!0),i=l.firstChild,s=i.firstChild,c=s.nextSibling;return s.$$click=()=>e(!t()),_(c,()=>Je.map(o=>m(I,{get href(){return`${Z().pathname}#${o[1].replaceAll(/[ .&]/g,"_")}`},get class(){return Ei(o)},onclick:()=>st(o[1]),get children(){return o[1]}}))),E(()=>D(c,`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${t()?"":"hidden"}`)),l})()}F(["click"]);const ki=g('<div grid="" class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto my-8 px-4"><div class="xl:blur-none"><div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div xl-px-10=""><div id="DocContent" w-full=""></div></div></div></div></div>',10),[ke,Ai]=L(!1);function Li(){return $n(()=>window.addEventListener("scroll",()=>Y("DocContent"))),xe(()=>window.removeEventListener("scroll",()=>Y("DocContent"))),Be(Ue(()=>Z().pathname,()=>{setTimeout(()=>{pi("DocContent"),rt(),Y("DocContent"),at()},50)})),(()=>{const t=ki.cloneNode(!0),e=t.firstChild,l=e.firstChild,i=l.firstChild,s=i.firstChild;return _(t,m(ci,{}),e),_(s,m(Zn,{})),_(i,m(ui,{}),null),_(l,(()=>{const c=b(()=>Je.length>1);return()=>c()&&m(ct,{})})(),null),E(()=>C(e,"blur",ke()?"sm":"")),t})()}const xi=g('<img src="/logo.svg" alt="nvchad logo" w="26px" h="26px">',1),Ti=g('<div grid="" md-flex="" gap-5=""><div text="slate-7 dark:slate-4"></div></div>',4),Oi=g('<button xl="hidden" dark-bg-blue-3="" dark-text-black="">Docs</button>',2),Pi=g('<div i-ic-round-close=""></div>',2),Di=g('<div i-carbon-side-panel-close-filled=""></div>',2),Ii=g('<button aria-label="theme toggler"><div text-base=""></div></button>',4),Ri=g("<div></div>",2),$i=g('<button id="searchbar" class="vertCentered text-base w-fit p-2 px-3 rounded-lg" bg="slate-1 dark:dark-3" text="slate-6"><div i-ion-search=""></div>Search<div border="1 solid slate-6 dark:dark-4" p="1 x-2" class="ml-3 text-slate-7 dark:text-slate-4 text-sm rounded-lg">Ctrl + k</div></button>',6),Vi=g(`<div border="0 b solid slate-2 dark:dark-4"><nav class="sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white-1 dark:bg-dark-2 
                text-lg font-medium  p-4 py-3 max-w-[1700px] mx-auto"><div md="flex gap-3 mx-auto" class="grid justify-between w-full gap-5"></div><div class="vertCentered h-fit md:!hidden"><button class="p-2 text-xl rounded-lg"><div i-material-symbols-menu-rounded=""></div></button></div></nav></div>`,12),[Qe,Ci]=L(!1);function Si(){return(()=>{const t=Ti.cloneNode(!0),e=t.firstChild;return _(t,m(I,{href:"/",class:"vertCentered !gap-3 font-bold text-grey-4 dark:text-white-2",get children(){return[xi.cloneNode(!0),"NvChad"]}}),e),_(e,m(I,{href:"/docs/quickstart/install",children:"Docs"}),null),_(e,m(I,{href:"/docs/features",children:"Features"}),null),_(e,m(I,{href:"/themes",children:"Themes"}),null),_(e,m(I,{href:"/news",children:"News"}),null),E(()=>D(e,`grid md:vertCentered md:!gap-5 gap-5 ${Qe()?"":"hidden"}`)),t})()}function ot(){return Z().pathname.includes("docs")&&(()=>{const t=Oi.cloneNode(!0),e=t.firstChild;return t.$$click=()=>Ai(!ke()),_(t,(()=>{const l=b(()=>!!ke());return()=>l()?Pi.cloneNode(!0):Di.cloneNode(!0)})(),e),t})()}const ht=t=>{const[e,l]=L(localStorage&&localStorage.theme?localStorage.theme:"light");return(()=>{const i=Ii.cloneNode(!0),s=i.firstChild;return i.$$click=()=>{l(e()=="light"?"dark":"light");const c=document.querySelector("html");c.className=localStorage.theme=e()},E(c=>{const o=`shadow-lg ${t.display} text-xl p-2 bg-slate-8 text-white-1 dark:bg-dark-3 rounded-full`,h=e()=="light"?"i-line-md:sun-rising-twotone-loop":"i-ph-moon-stars-bold";return o!==c._v$&&D(i,c._v$=o),h!==c._v$2&&D(s,c._v$2=h),c},{_v$:void 0,_v$2:void 0}),i})()};function Mi(){const t=[["i-ph:chat-teardrop-text text-3xl","#community","nvchad discussions"],["i-bi:github  ","https://github.com/NvChad/NvChad","Github repo"]];return(()=>{const e=Ri.cloneNode(!0);return _(e,m(ot,{}),null),_(e,m(zi,{}),null),_(e,()=>t.map(l=>m(I,{text:"slate-8 dark:slate-4",get href(){return l[1]},get["aria-label"](){return l[2]},get class(){return l[0]},get children(){return l[0]}})),null),_(e,m(ht,{display:"hidden md:vertCentered"}),null),E(()=>D(e,`md:vertCentered !gap-5 text-2xl ${Qe()?"vertCentered":"hidden"}`)),e})()}function zi(){return(()=>{const t=$i.cloneNode(!0);return t.$$click=()=>{alert("This is WIP!")},t})()}function qi(){return(()=>{const t=Vi.cloneNode(!0),e=t.firstChild,l=e.firstChild,i=l.nextSibling,s=i.firstChild;return _(l,m(Si,{}),null),_(l,m(Mi,{}),null),_(i,m(ht,{}),s),_(i,m(ot,{}),s),s.$$click=()=>Ci(!Qe()),t})()}F(["click"]);const Bi=g('<div class="i-grommet-icons-install-option"></div>',2),Ui=g('<div class="i-mdi-docker"></div>',2),Fi=g('<div class="mx-auto flex gap-3 text-sm md:text-lg text-white-2 [&amp;_a]:shadow-xl"></div>',2),Xi=g('<div text-slate-8="" grid="" text-center="" mx-auto="" mb-10=""><h1 mb-0="">Enhance your Neovim workflow</h1><p font-medium="" text-base="" md-text-xl="">Blazing fast Neovim config providing solid defaults and a beautiful UI</p></div>',6),Hi=g('<div class="grid shadow-md p-10 pb-15 pt-0 justify-center rounded-none bg-gradient-to-r from-blue-3 to-blue-5 dark:bg-gradient-to-r dark:from-red-4  dark:to-violet-4"><div><img src="/banner.webp" alt="NvChad screenshot" class="rounded-lg md:rounded-xl max-w-[90vw] 2xl:max-w-[1700px] softshadow m-auto"></div></div>',5);function Wi(){const t="vertCentered bg-onedark w-fit p-3 px-4 rounded-full";return(()=>{const e=Fi.cloneNode(!0);return _(e,m(I,{href:"/docs/quickstart/install",class:t,get children(){return[Bi.cloneNode(!0)," Install"]}}),null),_(e,m(I,{href:"/docs/quickstart/install",class:t,onclick:()=>Qn("Docker"),get children(){return[Ui.cloneNode(!0)," Docker"]}}),null),e})()}function Gi(){return(()=>{const t=Xi.cloneNode(!0);return t.firstChild.nextSibling,_(t,m(Wi,{}),null),t})()}function Yi(){return(()=>{const t=Hi.cloneNode(!0),e=t.firstChild;return _(t,m(Gi,{}),e),t})()}const Ki=g('<div class="grid gap-5 text-center justify-center rounded-2xl p-10 h-fit"><div w-fit="" bg-dark-3="" text-white-1="" rounded-full="" mx-auto="" shadow-md=""><div text="5xl xl:7xl" m-5=""></div></div><div grid=""><h2 mb-2="" whitespace-nowrap=""></h2><p text-lg="" dark-text-slate-4=""></p></div></div>',12),Zi=g('<section max="w-[1700px]" m-auto="" grid="" justify-center="" text-center="" my-20="" px-5=""><div grid="" md-grid-cols-2="" lg-grid-cols-3=""></div></section>',4),Ji=[{title:"Fast by default",icon:"i-fluent:rocket-20-regular text-yellow-2",description:` 
        Blazing fast startup time as plugins are lazy loaded wherever possible;
        modules will load only when needed.
    `},{title:"Beautiful UI",icon:"i-circum:palette",description:` 
        NvChad provides a pretty UI while still embracing the CLI; UI plugins
        are themed with visual elegance.
    `},{title:"Highly customizable",icon:"i-ion:cog-sharp text-emerald-3",description:` 
        Default plugins, UI, configuration can easily be disabled or overriden
        via the chadrc file.
    `},{title:"Update mechanism",icon:"i-line-md:downloading-loop",description:` 
        Update mechanism via git to stay up to date with the latest changes
        while preserving user configuration.
    `},{title:"Powered by Lua",icon:"i-file-icons:lua text-blue-3",description:` 
        Configuration is written in Lua which integrates well with the Neovim
        lua api & lua plugins.
      `},{title:"Prettiest themes",icon:"i-ph:paint-brush-broad text-red-3",description:` 
        57 inbuilt beautifully ported & custom themes! All the theme colors are
        overridable via user config.
        `},{title:"Lightweight",icon:"i-ph:feather text-purple-3",description:`
        The config is around 1.3k LOC & 60% of it is just plugin configs &
        mappings. We try to keep the codebase as simple as possible.
      `},{title:"Inbuilt UI Plugins",icon:"i-lucide:package text-orange-3",description:`
          NvChad manages its own theme plugin and UI modules like statusline, bufferline, dashboard into its own UI plugins.
    `},{title:"Ease of Use",icon:"i-octicon:smiley-16 text-green-3",description:`
      NvChad provides custom configuration to be simple and autocompletion for them. All you do is overriding tables!
    `}];function Qi(t){const{details:e}=t;return(()=>{const l=Ki.cloneNode(!0),i=l.firstChild,s=i.firstChild,c=i.nextSibling,o=c.firstChild,h=o.nextSibling;return _(o,()=>e.title),_(h,()=>e.description),E(()=>D(s,`${e.icon}`)),l})()}function es(){return(()=>{const t=Zi.cloneNode(!0),e=t.firstChild;return _(e,()=>Ji.map((l,i)=>m(Qi,{key:i,details:l}))),t})()}const ns=g('<div grid="" gap-0="" id="community"><h3 text-start="" font-normal="">Communities</h3><div flex="" gap-5="" bg="dark-4 dark:dark-3" p="3 x-4"></div></div>',6),ts=g('<a capitalize vertcentered=""><div text-2xl="" rounded-none=""></div></a>',4),ls=g('<div bg="dark-2 dark:dark-1" text-white-1="" rounded-none=""><div p-10="" grid="" gap-10="" max="w-[1700px]" mx-auto="" text-center=""><div class="grid gap-10 mx-auto md:mx-0 md:flex md:justify-between"><div grid="" text-start=""><p text-lg="">Powered by Github pages</p><div flex="" vertcentered="" justify-center="" bg="dark-4 dark:dark-3" p="3 x-4"><div i-logos-solidjs-icon=""></div> Solidjs + <div i-simple-icons-unocss="" rounded-none=""></div> Unocss</div></div></div><div grid="" gap-5="" h-fit="" py-10="" rounded-none="" border="0 t-2 solid dark-4"><div mx-auto="" capitalize vertcentered="" text-2xl="" font-semibold=""><img src="/logo.svg" alt="nvchad logo" w="33px" h="33px">NvChad</div><span dark-text-white-2="">Copyright © 2023 Siduck™</span></div></div></div>',23),is=[["github discussions","i-mdi:github","https://github.com/NvChad/NvChad/discussions"],["discord server","i-ic:baseline-discord text-indigo-4","https://discord.com/invite/gADmkJb9Fb"],["youtube channel","i-ph:youtube-logo-fill text-red-4","https://www.youtube.com/@siduck_og"],["telegram group","i-uil:telegram text-sky-3","https://t.me/nvchad_tg"],["matrix space","i-cib:matrix text-emerald-3","https://matrix.to/#/#nvchad:matrix.org"]];function ss(){return(()=>{const t=ns.cloneNode(!0),e=t.firstChild,l=e.nextSibling;return _(l,()=>is.map(i=>(()=>{const s=ts.cloneNode(!0),c=s.firstChild;return E(o=>{const h=i[2],u=i[0],d=i[1];return h!==o._v$&&C(s,"href",o._v$=h),u!==o._v$2&&C(s,"aria-label",o._v$2=u),d!==o._v$3&&D(c,o._v$3=d),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})())),t})()}function rs(){return(()=>{const t=ls.cloneNode(!0),e=t.firstChild,l=e.firstChild;return l.firstChild,_(l,m(ss,{}),null),t})()}function as(){return[m(Yi,{}),m(es,{}),m(rs,{})]}let fe=[];Ke.forEach(t=>{t.label?fe=[...fe,...t.items]:fe.push(t)});function cs(){return b(()=>fe.map(t=>m(G,{get path(){return t[1]},get component(){return typeof t[2]!="string"?t[2]:t[3]}})))}const os="modulepreload",hs=function(t){return"/"+t},Tn={},r=function(e,l,i){if(!l||l.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(l.map(c=>{if(c=hs(c),c in Tn)return;Tn[c]=!0;const o=c.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!i)for(let p=s.length-1;p>=0;p--){const f=s[p];if(f.href===c&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":os,o||(d.as="script",d.crossOrigin=""),d.href=c,document.head.appendChild(d),o)return new Promise((p,f)=>{d.addEventListener("load",p),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},ds=g('<div flex="" justify-between="" gap-2=""><div flex="" flex-wrap="" gap-3=""></div><div flex="" h-fit=""><button bg="white-1" border="solid 1 blue-3 dark:dark-4 r-0" rounded-r-none=""><div i-ri-layout-grid-line="" rounded-none=""></div> Grid</button><button class="rounded-l-none text-slate-7 dark:text-blue-4" bg="blue-2 dark:dark-4"><div></div></button></div></div>',14),us=g('<button class="gap-2 justify-start capitalize px-3"><div></div> </button>',4),ps=g('<div i-bi-toggle2-on="" text-xl=""></div>',2),ms=g('<div i-bi-toggle2-off="" text-xl=""></div>',2),_s=g("<div></div>",2),gs=g('<div softshadow="" grid="" relative=""><img loading="lazy" rounded="lg" shadow-b-md width="2560" height="1440"><div font-medium="" capitalize="" p="2 x-3"></div></div>',5),fs=g('<div top-0="" left-0="" sticky=""><button class="px-3 my-6 mx-auto bg-red-4 text-white-1 dark:text-red-3"><div i-ion-close=""></div>Close</button><img class="z-[9999] rounded-lg softShadow h-auto w-full"></div>',7),bs=g('<div class="max-w-[1700px] mx-auto"></div>',2),vs=g('<div grid="" class="gap-5 my-6" p="x-4 2xl:0"></div>',2),he=[{lang:"python",icon:"i-mdi:language-python",images:Object.assign({"../../public/themes/python/aquarium.webp":()=>r(()=>import("./aquarium-74dedd13.js"),[]),"../../public/themes/python/ashes.webp":()=>r(()=>import("./ashes-a4a707ae.js"),[]),"../../public/themes/python/ayu_dark.webp":()=>r(()=>import("./ayu_dark-f0506b50.js"),[]),"../../public/themes/python/ayu_light.webp":()=>r(()=>import("./ayu_light-c28eabec.js"),[]),"../../public/themes/python/bearded-arc.webp":()=>r(()=>import("./bearded-arc-ea55d46d.js"),[]),"../../public/themes/python/blossom_light.webp":()=>r(()=>import("./blossom_light-84695b66.js"),[]),"../../public/themes/python/catppuccin.webp":()=>r(()=>import("./catppuccin-fc3c962e.js"),[]),"../../public/themes/python/chadracula.webp":()=>r(()=>import("./chadracula-c6492268.js"),[]),"../../public/themes/python/chadtain.webp":()=>r(()=>import("./chadtain-9f308266.js"),[]),"../../public/themes/python/chocolate.webp":()=>r(()=>import("./chocolate-a4733bc9.js"),[]),"../../public/themes/python/dark_horizon.webp":()=>r(()=>import("./dark_horizon-7ed05867.js"),[]),"../../public/themes/python/decay.webp":()=>r(()=>import("./decay-269eeca6.js"),[]),"../../public/themes/python/doomchad.webp":()=>r(()=>import("./doomchad-222e3e27.js"),[]),"../../public/themes/python/everblush.webp":()=>r(()=>import("./everblush-7a3b982c.js"),[]),"../../public/themes/python/everforest.webp":()=>r(()=>import("./everforest-23778990.js"),[]),"../../public/themes/python/everforest_light.webp":()=>r(()=>import("./everforest_light-db5c9ee2.js"),[]),"../../public/themes/python/falcon.webp":()=>r(()=>import("./falcon-cd8384fd.js"),[]),"../../public/themes/python/gatekeeper.webp":()=>r(()=>import("./gatekeeper-3bb1f088.js"),[]),"../../public/themes/python/github_dark.webp":()=>r(()=>import("./github_dark-c7b48faf.js"),[]),"../../public/themes/python/github_light.webp":()=>r(()=>import("./github_light-0441e37f.js"),[]),"../../public/themes/python/gruvbox.webp":()=>r(()=>import("./gruvbox-e3e694fb.js"),[]),"../../public/themes/python/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-31f1a30e.js"),[]),"../../public/themes/python/gruvchad.webp":()=>r(()=>import("./gruvchad-56210f57.js"),[]),"../../public/themes/python/jellybeans.webp":()=>r(()=>import("./jellybeans-0ac9e9d3.js"),[]),"../../public/themes/python/kanagawa.webp":()=>r(()=>import("./kanagawa-b9e2a166.js"),[]),"../../public/themes/python/melange.webp":()=>r(()=>import("./melange-fec0dd06.js"),[]),"../../public/themes/python/monekai.webp":()=>r(()=>import("./monekai-73e7c5cb.js"),[]),"../../public/themes/python/monochrome.webp":()=>r(()=>import("./monochrome-7451e9fb.js"),[]),"../../public/themes/python/mountain.webp":()=>r(()=>import("./mountain-2e792d74.js"),[]),"../../public/themes/python/nightfox.webp":()=>r(()=>import("./nightfox-bad2979e.js"),[]),"../../public/themes/python/nightlamp.webp":()=>r(()=>import("./nightlamp-afddfad2.js"),[]),"../../public/themes/python/nightowl.webp":()=>r(()=>import("./nightowl-812e880c.js"),[]),"../../public/themes/python/nord.webp":()=>r(()=>import("./nord-28ddb6d1.js"),[]),"../../public/themes/python/oceanic-light.webp":()=>r(()=>import("./oceanic-light-8b40f883.js"),[]),"../../public/themes/python/oceanic-next.webp":()=>r(()=>import("./oceanic-next-59e96a72.js"),[]),"../../public/themes/python/one_light.webp":()=>r(()=>import("./one_light-92e9415f.js"),[]),"../../public/themes/python/onedark.webp":()=>r(()=>import("./onedark-5e745895.js"),[]),"../../public/themes/python/onenord.webp":()=>r(()=>import("./onenord-4f830304.js"),[]),"../../public/themes/python/onenord_light.webp":()=>r(()=>import("./onenord_light-1ad500f6.js"),[]),"../../public/themes/python/oxocarbon.webp":()=>r(()=>import("./oxocarbon-4699c8c7.js"),[]),"../../public/themes/python/palenight.webp":()=>r(()=>import("./palenight-b540d812.js"),[]),"../../public/themes/python/pastelDark.webp":()=>r(()=>import("./pastelDark-86799382.js"),[]),"../../public/themes/python/pastelbeans.webp":()=>r(()=>import("./pastelbeans-46f65e6a.js"),[]),"../../public/themes/python/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-6e5a9033.js"),[]),"../../public/themes/python/penumbra_light.webp":()=>r(()=>import("./penumbra_light-909386c1.js"),[]),"../../public/themes/python/radium.webp":()=>r(()=>import("./radium-049d0c3e.js"),[]),"../../public/themes/python/rosepine.webp":()=>r(()=>import("./rosepine-205964b3.js"),[]),"../../public/themes/python/rxyhn.webp":()=>r(()=>import("./rxyhn-64b637c9.js"),[]),"../../public/themes/python/solarized_dark.webp":()=>r(()=>import("./solarized_dark-b40edc59.js"),[]),"../../public/themes/python/sweetpastel.webp":()=>r(()=>import("./sweetpastel-d9dd21ad.js"),[]),"../../public/themes/python/tokyodark.webp":()=>r(()=>import("./tokyodark-9321c9ad.js"),[]),"../../public/themes/python/tokyonight.webp":()=>r(()=>import("./tokyonight-5478939b.js"),[]),"../../public/themes/python/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-4c5069dd.js"),[]),"../../public/themes/python/tundra.webp":()=>r(()=>import("./tundra-3f6dbea0.js"),[]),"../../public/themes/python/vscode_dark.webp":()=>r(()=>import("./vscode_dark-d7e0dca4.js"),[]),"../../public/themes/python/wombat.webp":()=>r(()=>import("./wombat-5296ed0f.js"),[]),"../../public/themes/python/yoru.webp":()=>r(()=>import("./yoru-7a959406.js"),[])})},{lang:"javascript",icon:"i-skill-icons:javascript",images:Object.assign({"../../public/themes/javascript/aquarium.webp":()=>r(()=>import("./aquarium-4b7ded2b.js"),[]),"../../public/themes/javascript/ashes.webp":()=>r(()=>import("./ashes-5616f808.js"),[]),"../../public/themes/javascript/ayu_dark.webp":()=>r(()=>import("./ayu_dark-d96dde39.js"),[]),"../../public/themes/javascript/ayu_light.webp":()=>r(()=>import("./ayu_light-8184137d.js"),[]),"../../public/themes/javascript/bearded-arc.webp":()=>r(()=>import("./bearded-arc-b85fdd2a.js"),[]),"../../public/themes/javascript/blossom_light.webp":()=>r(()=>import("./blossom_light-0cc7096b.js"),[]),"../../public/themes/javascript/catppuccin.webp":()=>r(()=>import("./catppuccin-6dbbf92f.js"),[]),"../../public/themes/javascript/chadracula.webp":()=>r(()=>import("./chadracula-b06dc0df.js"),[]),"../../public/themes/javascript/chadtain.webp":()=>r(()=>import("./chadtain-6e85474c.js"),[]),"../../public/themes/javascript/chocolate.webp":()=>r(()=>import("./chocolate-11dab7a8.js"),[]),"../../public/themes/javascript/dark_horizon.webp":()=>r(()=>import("./dark_horizon-6ecfa109.js"),[]),"../../public/themes/javascript/decay.webp":()=>r(()=>import("./decay-8ce13829.js"),[]),"../../public/themes/javascript/doomchad.webp":()=>r(()=>import("./doomchad-758b2cbf.js"),[]),"../../public/themes/javascript/everblush.webp":()=>r(()=>import("./everblush-0e9644a0.js"),[]),"../../public/themes/javascript/everforest.webp":()=>r(()=>import("./everforest-f0d61a78.js"),[]),"../../public/themes/javascript/everforest_light.webp":()=>r(()=>import("./everforest_light-948f0361.js"),[]),"../../public/themes/javascript/falcon.webp":()=>r(()=>import("./falcon-be09118c.js"),[]),"../../public/themes/javascript/gatekeeper.webp":()=>r(()=>import("./gatekeeper-c085b211.js"),[]),"../../public/themes/javascript/github_dark.webp":()=>r(()=>import("./github_dark-4268e315.js"),[]),"../../public/themes/javascript/github_light.webp":()=>r(()=>import("./github_light-d282f7a5.js"),[]),"../../public/themes/javascript/gruvbox.webp":()=>r(()=>import("./gruvbox-035c5621.js"),[]),"../../public/themes/javascript/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-9dfe81ef.js"),[]),"../../public/themes/javascript/gruvchad.webp":()=>r(()=>import("./gruvchad-027ba1d0.js"),[]),"../../public/themes/javascript/jellybeans.webp":()=>r(()=>import("./jellybeans-d8e55c0c.js"),[]),"../../public/themes/javascript/kanagawa.webp":()=>r(()=>import("./kanagawa-be0542a4.js"),[]),"../../public/themes/javascript/melange.webp":()=>r(()=>import("./melange-6c46e3af.js"),[]),"../../public/themes/javascript/monekai.webp":()=>r(()=>import("./monekai-454fd898.js"),[]),"../../public/themes/javascript/monochrome.webp":()=>r(()=>import("./monochrome-1e0424a5.js"),[]),"../../public/themes/javascript/mountain.webp":()=>r(()=>import("./mountain-eb325224.js"),[]),"../../public/themes/javascript/nightfox.webp":()=>r(()=>import("./nightfox-6ab044b8.js"),[]),"../../public/themes/javascript/nightlamp.webp":()=>r(()=>import("./nightlamp-53ae3410.js"),[]),"../../public/themes/javascript/nightowl.webp":()=>r(()=>import("./nightowl-306b6922.js"),[]),"../../public/themes/javascript/nord.webp":()=>r(()=>import("./nord-62133c00.js"),[]),"../../public/themes/javascript/oceanic-light.webp":()=>r(()=>import("./oceanic-light-d98c9309.js"),[]),"../../public/themes/javascript/oceanic-next.webp":()=>r(()=>import("./oceanic-next-943a6018.js"),[]),"../../public/themes/javascript/one_light.webp":()=>r(()=>import("./one_light-d1b9c6e7.js"),[]),"../../public/themes/javascript/onedark.webp":()=>r(()=>import("./onedark-3b595fe2.js"),[]),"../../public/themes/javascript/onenord.webp":()=>r(()=>import("./onenord-f6116a9b.js"),[]),"../../public/themes/javascript/onenord_light.webp":()=>r(()=>import("./onenord_light-51fac2af.js"),[]),"../../public/themes/javascript/oxocarbon.webp":()=>r(()=>import("./oxocarbon-3767eaca.js"),[]),"../../public/themes/javascript/palenight.webp":()=>r(()=>import("./palenight-c548f792.js"),[]),"../../public/themes/javascript/pastelDark.webp":()=>r(()=>import("./pastelDark-6a2d75c0.js"),[]),"../../public/themes/javascript/pastelbeans.webp":()=>r(()=>import("./pastelbeans-ab88b5ec.js"),[]),"../../public/themes/javascript/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-c26fd7fe.js"),[]),"../../public/themes/javascript/penumbra_light.webp":()=>r(()=>import("./penumbra_light-48613b06.js"),[]),"../../public/themes/javascript/radium.webp":()=>r(()=>import("./radium-00eb39c4.js"),[]),"../../public/themes/javascript/rosepine.webp":()=>r(()=>import("./rosepine-c24896cc.js"),[]),"../../public/themes/javascript/rxyhn.webp":()=>r(()=>import("./rxyhn-8b8659d9.js"),[]),"../../public/themes/javascript/solarized_dark.webp":()=>r(()=>import("./solarized_dark-8fc5d170.js"),[]),"../../public/themes/javascript/sweetpastel.webp":()=>r(()=>import("./sweetpastel-afafef6b.js"),[]),"../../public/themes/javascript/tokyodark.webp":()=>r(()=>import("./tokyodark-dd19b8fa.js"),[]),"../../public/themes/javascript/tokyonight.webp":()=>r(()=>import("./tokyonight-737b12c7.js"),[]),"../../public/themes/javascript/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-a0686b5d.js"),[]),"../../public/themes/javascript/tundra.webp":()=>r(()=>import("./tundra-dc3c6747.js"),[]),"../../public/themes/javascript/vscode_dark.webp":()=>r(()=>import("./vscode_dark-d1d335d8.js"),[]),"../../public/themes/javascript/wombat.webp":()=>r(()=>import("./wombat-dbaf52b8.js"),[]),"../../public/themes/javascript/yoru.webp":()=>r(()=>import("./yoru-f43ca1f8.js"),[])})},{lang:"haskell",icon:"i-logos:haskell-icon",images:Object.assign({"../../public/themes/haskell/aquarium.webp":()=>r(()=>import("./aquarium-7ef6ad5d.js"),[]),"../../public/themes/haskell/ashes.webp":()=>r(()=>import("./ashes-7115b8c1.js"),[]),"../../public/themes/haskell/ayu_dark.webp":()=>r(()=>import("./ayu_dark-288a8a6b.js"),[]),"../../public/themes/haskell/ayu_light.webp":()=>r(()=>import("./ayu_light-2defdf6e.js"),[]),"../../public/themes/haskell/bearded-arc.webp":()=>r(()=>import("./bearded-arc-fbc1d8df.js"),[]),"../../public/themes/haskell/blossom_light.webp":()=>r(()=>import("./blossom_light-8580ab2e.js"),[]),"../../public/themes/haskell/catppuccin.webp":()=>r(()=>import("./catppuccin-6f21c967.js"),[]),"../../public/themes/haskell/chadracula.webp":()=>r(()=>import("./chadracula-7e04c6ff.js"),[]),"../../public/themes/haskell/chadtain.webp":()=>r(()=>import("./chadtain-b6242b79.js"),[]),"../../public/themes/haskell/chocolate.webp":()=>r(()=>import("./chocolate-a63ca3e9.js"),[]),"../../public/themes/haskell/dark_horizon.webp":()=>r(()=>import("./dark_horizon-ee14c26b.js"),[]),"../../public/themes/haskell/decay.webp":()=>r(()=>import("./decay-b8f3c33a.js"),[]),"../../public/themes/haskell/doomchad.webp":()=>r(()=>import("./doomchad-6a685f1d.js"),[]),"../../public/themes/haskell/everblush.webp":()=>r(()=>import("./everblush-48272693.js"),[]),"../../public/themes/haskell/everforest.webp":()=>r(()=>import("./everforest-22f0aa61.js"),[]),"../../public/themes/haskell/everforest_light.webp":()=>r(()=>import("./everforest_light-4871ff92.js"),[]),"../../public/themes/haskell/falcon.webp":()=>r(()=>import("./falcon-1f08f98d.js"),[]),"../../public/themes/haskell/gatekeeper.webp":()=>r(()=>import("./gatekeeper-4568dda4.js"),[]),"../../public/themes/haskell/github_dark.webp":()=>r(()=>import("./github_dark-3b7bf2ec.js"),[]),"../../public/themes/haskell/github_light.webp":()=>r(()=>import("./github_light-8b9de068.js"),[]),"../../public/themes/haskell/gruvbox.webp":()=>r(()=>import("./gruvbox-a0006b37.js"),[]),"../../public/themes/haskell/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-3decf187.js"),[]),"../../public/themes/haskell/gruvchad.webp":()=>r(()=>import("./gruvchad-b8c53bff.js"),[]),"../../public/themes/haskell/jellybeans.webp":()=>r(()=>import("./jellybeans-3047d2e2.js"),[]),"../../public/themes/haskell/kanagawa.webp":()=>r(()=>import("./kanagawa-31314ab7.js"),[]),"../../public/themes/haskell/melange.webp":()=>r(()=>import("./melange-579482fb.js"),[]),"../../public/themes/haskell/monekai.webp":()=>r(()=>import("./monekai-28d01266.js"),[]),"../../public/themes/haskell/monochrome.webp":()=>r(()=>import("./monochrome-3e44c85c.js"),[]),"../../public/themes/haskell/mountain.webp":()=>r(()=>import("./mountain-23d4425c.js"),[]),"../../public/themes/haskell/nightfox.webp":()=>r(()=>import("./nightfox-12105ff8.js"),[]),"../../public/themes/haskell/nightlamp.webp":()=>r(()=>import("./nightlamp-d8ef912f.js"),[]),"../../public/themes/haskell/nightowl.webp":()=>r(()=>import("./nightowl-6bb3bcc7.js"),[]),"../../public/themes/haskell/nord.webp":()=>r(()=>import("./nord-e3001f62.js"),[]),"../../public/themes/haskell/oceanic-light.webp":()=>r(()=>import("./oceanic-light-97db3f14.js"),[]),"../../public/themes/haskell/oceanic-next.webp":()=>r(()=>import("./oceanic-next-95f97e0c.js"),[]),"../../public/themes/haskell/one_light.webp":()=>r(()=>import("./one_light-1282ece6.js"),[]),"../../public/themes/haskell/onedark.webp":()=>r(()=>import("./onedark-098d4746.js"),[]),"../../public/themes/haskell/onenord.webp":()=>r(()=>import("./onenord-315639c9.js"),[]),"../../public/themes/haskell/onenord_light.webp":()=>r(()=>import("./onenord_light-fe8ce406.js"),[]),"../../public/themes/haskell/oxocarbon.webp":()=>r(()=>import("./oxocarbon-a14ce70a.js"),[]),"../../public/themes/haskell/palenight.webp":()=>r(()=>import("./palenight-62a55c54.js"),[]),"../../public/themes/haskell/pastelDark.webp":()=>r(()=>import("./pastelDark-cc41f5e9.js"),[]),"../../public/themes/haskell/pastelbeans.webp":()=>r(()=>import("./pastelbeans-63c4cfb1.js"),[]),"../../public/themes/haskell/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-937444ed.js"),[]),"../../public/themes/haskell/penumbra_light.webp":()=>r(()=>import("./penumbra_light-a6a4ed90.js"),[]),"../../public/themes/haskell/radium.webp":()=>r(()=>import("./radium-756d7625.js"),[]),"../../public/themes/haskell/rosepine.webp":()=>r(()=>import("./rosepine-2d479977.js"),[]),"../../public/themes/haskell/rxyhn.webp":()=>r(()=>import("./rxyhn-e464412c.js"),[]),"../../public/themes/haskell/solarized_dark.webp":()=>r(()=>import("./solarized_dark-14046b1b.js"),[]),"../../public/themes/haskell/sweetpastel.webp":()=>r(()=>import("./sweetpastel-5a6985c7.js"),[]),"../../public/themes/haskell/tokyodark.webp":()=>r(()=>import("./tokyodark-99f04006.js"),[]),"../../public/themes/haskell/tokyonight.webp":()=>r(()=>import("./tokyonight-26165f6b.js"),[]),"../../public/themes/haskell/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-58ee613f.js"),[]),"../../public/themes/haskell/tundra.webp":()=>r(()=>import("./tundra-9b8f7ed1.js"),[]),"../../public/themes/haskell/vscode_dark.webp":()=>r(()=>import("./vscode_dark-c7820de5.js"),[]),"../../public/themes/haskell/wombat.webp":()=>r(()=>import("./wombat-76842c86.js"),[]),"../../public/themes/haskell/yoru.webp":()=>r(()=>import("./yoru-512ac34f.js"),[])})},{lang:"c",icon:"i-logos:c-plusplus",images:Object.assign({"../../public/themes/c/aquarium.webp":()=>r(()=>import("./aquarium-673fc1a5.js"),[]),"../../public/themes/c/ashes.webp":()=>r(()=>import("./ashes-0f66c4b5.js"),[]),"../../public/themes/c/ayu_dark.webp":()=>r(()=>import("./ayu_dark-57d91970.js"),[]),"../../public/themes/c/ayu_light.webp":()=>r(()=>import("./ayu_light-a2408ead.js"),[]),"../../public/themes/c/bearded-arc.webp":()=>r(()=>import("./bearded-arc-a551bd9e.js"),[]),"../../public/themes/c/blossom_light.webp":()=>r(()=>import("./blossom_light-cfce2046.js"),[]),"../../public/themes/c/catppuccin.webp":()=>r(()=>import("./catppuccin-e008f172.js"),[]),"../../public/themes/c/chadracula.webp":()=>r(()=>import("./chadracula-c1986b0d.js"),[]),"../../public/themes/c/chadtain.webp":()=>r(()=>import("./chadtain-d4cb0d5e.js"),[]),"../../public/themes/c/chocolate.webp":()=>r(()=>import("./chocolate-ed698b0c.js"),[]),"../../public/themes/c/dark_horizon.webp":()=>r(()=>import("./dark_horizon-4b193d74.js"),[]),"../../public/themes/c/decay.webp":()=>r(()=>import("./decay-7747315b.js"),[]),"../../public/themes/c/doomchad.webp":()=>r(()=>import("./doomchad-869d22fb.js"),[]),"../../public/themes/c/everblush.webp":()=>r(()=>import("./everblush-bc0d8929.js"),[]),"../../public/themes/c/everforest.webp":()=>r(()=>import("./everforest-42e3b464.js"),[]),"../../public/themes/c/everforest_light.webp":()=>r(()=>import("./everforest_light-6df01089.js"),[]),"../../public/themes/c/falcon.webp":()=>r(()=>import("./falcon-dee23268.js"),[]),"../../public/themes/c/gatekeeper.webp":()=>r(()=>import("./gatekeeper-d0a47c2d.js"),[]),"../../public/themes/c/github_dark.webp":()=>r(()=>import("./github_dark-5c77b59c.js"),[]),"../../public/themes/c/github_light.webp":()=>r(()=>import("./github_light-d56c47fb.js"),[]),"../../public/themes/c/gruvbox.webp":()=>r(()=>import("./gruvbox-34133ba4.js"),[]),"../../public/themes/c/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-d111d414.js"),[]),"../../public/themes/c/gruvchad.webp":()=>r(()=>import("./gruvchad-9b94427c.js"),[]),"../../public/themes/c/jellybeans.webp":()=>r(()=>import("./jellybeans-b8ef9df0.js"),[]),"../../public/themes/c/kanagawa.webp":()=>r(()=>import("./kanagawa-b3e16494.js"),[]),"../../public/themes/c/melange.webp":()=>r(()=>import("./melange-7b041f0f.js"),[]),"../../public/themes/c/monekai.webp":()=>r(()=>import("./monekai-711d4996.js"),[]),"../../public/themes/c/monochrome.webp":()=>r(()=>import("./monochrome-cbc08b3f.js"),[]),"../../public/themes/c/mountain.webp":()=>r(()=>import("./mountain-76fc3822.js"),[]),"../../public/themes/c/nightfox.webp":()=>r(()=>import("./nightfox-c7d22fbf.js"),[]),"../../public/themes/c/nightlamp.webp":()=>r(()=>import("./nightlamp-03447d56.js"),[]),"../../public/themes/c/nightowl.webp":()=>r(()=>import("./nightowl-1bb8ad69.js"),[]),"../../public/themes/c/nord.webp":()=>r(()=>import("./nord-50c3235a.js"),[]),"../../public/themes/c/oceanic-light.webp":()=>r(()=>import("./oceanic-light-66b43b27.js"),[]),"../../public/themes/c/oceanic-next.webp":()=>r(()=>import("./oceanic-next-70e82c50.js"),[]),"../../public/themes/c/one_light.webp":()=>r(()=>import("./one_light-d2ff5360.js"),[]),"../../public/themes/c/onedark.webp":()=>r(()=>import("./onedark-c3d247a4.js"),[]),"../../public/themes/c/onenord.webp":()=>r(()=>import("./onenord-54136902.js"),[]),"../../public/themes/c/onenord_light.webp":()=>r(()=>import("./onenord_light-c6df4c62.js"),[]),"../../public/themes/c/oxocarbon.webp":()=>r(()=>import("./oxocarbon-c76cea3f.js"),[]),"../../public/themes/c/palenight.webp":()=>r(()=>import("./palenight-4881bada.js"),[]),"../../public/themes/c/pastelDark.webp":()=>r(()=>import("./pastelDark-7d5654c2.js"),[]),"../../public/themes/c/pastelbeans.webp":()=>r(()=>import("./pastelbeans-1cb89af6.js"),[]),"../../public/themes/c/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-47c26cfd.js"),[]),"../../public/themes/c/penumbra_light.webp":()=>r(()=>import("./penumbra_light-90b0493b.js"),[]),"../../public/themes/c/radium.webp":()=>r(()=>import("./radium-700e85ea.js"),[]),"../../public/themes/c/rosepine.webp":()=>r(()=>import("./rosepine-89c63629.js"),[]),"../../public/themes/c/rxyhn.webp":()=>r(()=>import("./rxyhn-a79ca07f.js"),[]),"../../public/themes/c/solarized_dark.webp":()=>r(()=>import("./solarized_dark-d308446c.js"),[]),"../../public/themes/c/sweetpastel.webp":()=>r(()=>import("./sweetpastel-748868ea.js"),[]),"../../public/themes/c/tokyodark.webp":()=>r(()=>import("./tokyodark-bf92a975.js"),[]),"../../public/themes/c/tokyonight.webp":()=>r(()=>import("./tokyonight-2e708b30.js"),[]),"../../public/themes/c/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-d35da3aa.js"),[]),"../../public/themes/c/tundra.webp":()=>r(()=>import("./tundra-3b6a9aa1.js"),[]),"../../public/themes/c/vscode_dark.webp":()=>r(()=>import("./vscode_dark-9f441afd.js"),[]),"../../public/themes/c/wombat.webp":()=>r(()=>import("./wombat-dd894b02.js"),[]),"../../public/themes/c/yoru.webp":()=>r(()=>import("./yoru-177e352b.js"),[])})},{lang:"lua",icon:"i-logos:lua dark:i-skill-icons:lua-light",images:Object.assign({"../../public/themes/lua/aquarium.webp":()=>r(()=>import("./aquarium-dc9843c4.js"),[]),"../../public/themes/lua/ashes.webp":()=>r(()=>import("./ashes-abde8286.js"),[]),"../../public/themes/lua/ayu_dark.webp":()=>r(()=>import("./ayu_dark-6f9e218e.js"),[]),"../../public/themes/lua/ayu_light.webp":()=>r(()=>import("./ayu_light-7769a34b.js"),[]),"../../public/themes/lua/bearded-arc.webp":()=>r(()=>import("./bearded-arc-cb958592.js"),[]),"../../public/themes/lua/blossom_light.webp":()=>r(()=>import("./blossom_light-aab17382.js"),[]),"../../public/themes/lua/catppuccin.webp":()=>r(()=>import("./catppuccin-fc5074f0.js"),[]),"../../public/themes/lua/chadracula.webp":()=>r(()=>import("./chadracula-32e94b45.js"),[]),"../../public/themes/lua/chadtain.webp":()=>r(()=>import("./chadtain-58dfb808.js"),[]),"../../public/themes/lua/chocolate.webp":()=>r(()=>import("./chocolate-31df96db.js"),[]),"../../public/themes/lua/dark_horizon.webp":()=>r(()=>import("./dark_horizon-c9f79ccd.js"),[]),"../../public/themes/lua/decay.webp":()=>r(()=>import("./decay-200c3c26.js"),[]),"../../public/themes/lua/doomchad.webp":()=>r(()=>import("./doomchad-8f29924e.js"),[]),"../../public/themes/lua/everblush.webp":()=>r(()=>import("./everblush-cb65ae7e.js"),[]),"../../public/themes/lua/everforest.webp":()=>r(()=>import("./everforest-89bbadd2.js"),[]),"../../public/themes/lua/everforest_light.webp":()=>r(()=>import("./everforest_light-b21bd3ea.js"),[]),"../../public/themes/lua/falcon.webp":()=>r(()=>import("./falcon-61ca7eda.js"),[]),"../../public/themes/lua/gatekeeper.webp":()=>r(()=>import("./gatekeeper-2e519267.js"),[]),"../../public/themes/lua/github_dark.webp":()=>r(()=>import("./github_dark-e2112e45.js"),[]),"../../public/themes/lua/github_light.webp":()=>r(()=>import("./github_light-13976044.js"),[]),"../../public/themes/lua/gruvbox.webp":()=>r(()=>import("./gruvbox-c0a8f87e.js"),[]),"../../public/themes/lua/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-99f23ded.js"),[]),"../../public/themes/lua/gruvchad.webp":()=>r(()=>import("./gruvchad-b57784a0.js"),[]),"../../public/themes/lua/jellybeans.webp":()=>r(()=>import("./jellybeans-70019865.js"),[]),"../../public/themes/lua/kanagawa.webp":()=>r(()=>import("./kanagawa-9d5918f0.js"),[]),"../../public/themes/lua/melange.webp":()=>r(()=>import("./melange-fb3bc9be.js"),[]),"../../public/themes/lua/monekai.webp":()=>r(()=>import("./monekai-fe25c816.js"),[]),"../../public/themes/lua/monochrome.webp":()=>r(()=>import("./monochrome-0ebcacad.js"),[]),"../../public/themes/lua/mountain.webp":()=>r(()=>import("./mountain-7fa3d6f5.js"),[]),"../../public/themes/lua/nightfox.webp":()=>r(()=>import("./nightfox-1442f96e.js"),[]),"../../public/themes/lua/nightlamp.webp":()=>r(()=>import("./nightlamp-dba63257.js"),[]),"../../public/themes/lua/nightowl.webp":()=>r(()=>import("./nightowl-d1596a28.js"),[]),"../../public/themes/lua/nord.webp":()=>r(()=>import("./nord-3ec05804.js"),[]),"../../public/themes/lua/oceanic-light.webp":()=>r(()=>import("./oceanic-light-da75e90d.js"),[]),"../../public/themes/lua/oceanic-next.webp":()=>r(()=>import("./oceanic-next-c72f20e0.js"),[]),"../../public/themes/lua/one_light.webp":()=>r(()=>import("./one_light-7d005c09.js"),[]),"../../public/themes/lua/onedark.webp":()=>r(()=>import("./onedark-2a81cfdf.js"),[]),"../../public/themes/lua/onenord.webp":()=>r(()=>import("./onenord-8a5260d2.js"),[]),"../../public/themes/lua/onenord_light.webp":()=>r(()=>import("./onenord_light-f2a2b8e9.js"),[]),"../../public/themes/lua/oxocarbon.webp":()=>r(()=>import("./oxocarbon-a3324aa7.js"),[]),"../../public/themes/lua/palenight.webp":()=>r(()=>import("./palenight-e70f2e0c.js"),[]),"../../public/themes/lua/pastelDark.webp":()=>r(()=>import("./pastelDark-aa9bfafe.js"),[]),"../../public/themes/lua/pastelbeans.webp":()=>r(()=>import("./pastelbeans-9d0be9fa.js"),[]),"../../public/themes/lua/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-177cbe1d.js"),[]),"../../public/themes/lua/penumbra_light.webp":()=>r(()=>import("./penumbra_light-56fcc841.js"),[]),"../../public/themes/lua/radium.webp":()=>r(()=>import("./radium-c3c65602.js"),[]),"../../public/themes/lua/rosepine.webp":()=>r(()=>import("./rosepine-1bf3b3f3.js"),[]),"../../public/themes/lua/rxyhn.webp":()=>r(()=>import("./rxyhn-57365902.js"),[]),"../../public/themes/lua/solarized_dark.webp":()=>r(()=>import("./solarized_dark-07124bb6.js"),[]),"../../public/themes/lua/sweetpastel.webp":()=>r(()=>import("./sweetpastel-f30032c4.js"),[]),"../../public/themes/lua/tokyodark.webp":()=>r(()=>import("./tokyodark-b368d34b.js"),[]),"../../public/themes/lua/tokyonight.webp":()=>r(()=>import("./tokyonight-000adece.js"),[]),"../../public/themes/lua/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-24f87ed4.js"),[]),"../../public/themes/lua/tundra.webp":()=>r(()=>import("./tundra-d5ce75ba.js"),[]),"../../public/themes/lua/vscode_dark.webp":()=>r(()=>import("./vscode_dark-1379179e.js"),[]),"../../public/themes/lua/wombat.webp":()=>r(()=>import("./wombat-df3bd21f.js"),[]),"../../public/themes/lua/yoru.webp":()=>r(()=>import("./yoru-bb8398ea.js"),[])})}];he.map((t,e)=>{const l=t.images;let i=[];Object.keys(l).map(s=>{i.push(s.replace("../../public",""))}),he[e].images=i});const[ws,ys]=L("python"),[Ns,js]=L(he[0].images),[Ae,dt]=L(!0),[Es,ks]=L(""),[re,As]=L(!0);function Ls(){return(()=>{const t=ds.cloneNode(!0),e=t.firstChild,l=e.nextSibling,i=l.firstChild,s=i.nextSibling,c=s.firstChild;return _(e,()=>he.map(o=>(()=>{const h=us.cloneNode(!0),u=h.firstChild;return u.nextSibling,h.$$click=()=>{ys(o.lang);const d=he.find(p=>p.lang===o.lang)?.images;js(d)},_(h,()=>o.lang,null),E(d=>{const p=ws()==o.lang?"2 solid blue-5":"",f=o.icon;return p!==d._v$&&C(h,"border",d._v$=p),f!==d._v$2&&D(u,d._v$2=f),d},{_v$:void 0,_v$2:void 0}),h})())),s.$$click=()=>As(!re()),_(c,(()=>{const o=b(()=>!!re());return()=>o()&&ps.cloneNode(!0)})(),null),_(c,(()=>{const o=b(()=>!re());return()=>o()&&ms.cloneNode(!0)})(),null),t})()}function xs(){return(()=>{const t=_s.cloneNode(!0);return _(t,()=>Ns().map(e=>{const i=(e?.split("/").pop()).split(".")[0],s=i.includes("light")?"light":"dark",c=re()?"top-0 right-0 rounded-br-none rounded-tl-none":"bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-none",o=s=="dark"?"bg-white-1 text-dark-3":" bg-dark-4 text-white-1";return(()=>{const h=gs.cloneNode(!0),u=h.firstChild,d=u.nextSibling;return u.$$click=()=>{ks(e),dt(!Ae())},C(u,"src",e),D(d,`absolute vertCentered justify-between ${c} ${o}`),_(d,i),h})()})),E(()=>D(t,`grid gap-6 [&_*]:max-w-[100%] [&_*]:h-auto ${re()?"lg:grid-cols-3 2xl:grid-cols-4":""}`)),t})()}function Ts(){return(()=>{const t=fs.cloneNode(!0),e=t.firstChild,l=e.nextSibling;return e.$$click=()=>dt(!Ae()),E(()=>C(l,"src",Es())),t})()}function Os(){return(()=>{const t=bs.cloneNode(!0);return _(t,(()=>{const e=b(()=>!Ae());return()=>e()&&m(Ts,{})})(),null),_(t,(()=>{const e=b(()=>!!Ae());return()=>e()&&(()=>{const l=vs.cloneNode(!0);return _(l,m(Ls,{}),null),_(l,m(xs,{}),null),l})()})(),null),t})()}F(["click"]);function On(t){const e=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",a:"a"},t.components);return a("div",{id:"DocContent",class:"news",children:[n(e.h1,{children:"# Announcing NvChad v2.0"}),n(e.p,{children:n(e.img,{src:"/news/v2.0.webp",alt:"v2.0 poster"})}),a("div",{"my-10":"",children:[n(e.h2,{children:"Changelog"}),n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`
## Added

- Lazy.nvim `,n(e.span,{className:"hljs-built_in",children:"package"}),` manager
- NvDash ( dashboard `,n(e.span,{className:"hljs-built_in",children:"module"}),` )
- Multiple statusline themes : vscode, vscode_colored, minimal. 
- Some cmp styles : flat_light, flat_dark, atom, atom_colored
- NvCheatsheet, a mappings cheatsheet with `,n(e.span,{className:"hljs-number",children:"2"}),` themes ( grid & simple )
- Ported `,n(e.span,{className:"hljs-number",children:"13"}),` new themes to base46 
- Made base46 generate compiled cache of highlight groups.
- Make some chadrc ui options auto-reloadable.
- Added types `,n(e.span,{className:"hljs-keyword",children:"for"}),` chadrc options.


## Changed 

- Made nvchad_ui options overridable from chadrc itself.
- Refactored our telescope extensions, made them more minimal.
- override_opts is renamed to opts ( cuz lazy.nvim handles it now )
- M.plugins `,n(e.span,{className:"hljs-keyword",children:"in"})," chadrc now expects only a ",n(e.span,{className:"hljs-built_in",children:"string"}),`


## Removed

- Alpha.nvim dashboard plugin
- Packer.nvim `,n(e.span,{className:"hljs-built_in",children:"package"}),` manager
- Impatient.nvim as lazy.nvim handles cache part too.

`]})})]}),a(e.p,{children:["NvChad ",n(e.code,{children:"v2.0"}),", a new release is now available, after all these months! From this release onwards, NvChad will take care about stability & exciting featuers at the same time."]}),a(e.p,{children:["Meaning that each release ",n(e.strong,{children:"( version like v3.0 v4.0 etc )"})," will be maintained in their own separate branches.  New versions will release based on new features, bug fixes will still be done in older versions of NvChad."]}),n(e.p,{children:"So Whats new in this release?"}),n(e.h2,{children:"Using lazy.nvim"}),a(e.ul,{children:[`
`,n(e.li,{children:"Lazy.nvim is used as the package manager, replacing packer so obviously it has minor syntax changes."}),`
`]}),n(e.h2,{children:"Cachifying base46"}),a(e.ul,{children:[`
`,a(e.li,{children:[`
`,n(e.p,{children:"Before base46 used to do some sort of computations like checking for user define highlight groups, highlight groups overrides, theme specific overrides i.e if user has changed colors in specific themes etc and then it would generate a final list of all highlight groups -> then load them."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"Now it base46 does all the computations beforehand ( when its compile module runs ) and then generates highlight group files in the form of bytecode which is faster to run."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"Now you can live-reload some parts of the UI table in chadrc."}),`
`]}),`
`]}),n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/xytzreFq_us",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen"})}),n("br",{}),a(e.ul,{children:[`
`,a(e.li,{children:["13 New themes have been added so now we in total have around 57 ~ themes! Check the ",n(e.a,{href:"/themes",children:n(e.code,{children:"theme page"})})," for more details"]}),`
`]}),n(e.h2,{children:"NvDash"}),a(e.ul,{children:[`
`,n(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`,a(e.li,{children:[n("u",{children:"NvDash"})," is the command"]}),`
`]}),n(e.p,{children:n(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}),n(e.h2,{children:"New cmp styles"}),a(e.ul,{children:[`
`,n(e.li,{children:"Now we have around 4-5 cmp styles, you can remove their icons, cmp_kind text directly from chadrc itself now."}),`
`]}),n(e.p,{children:n(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}),n(e.h2,{children:"Statusline themes"}),a(e.ul,{children:[`
`,n(e.li,{children:"3 new statusline themes have been added! ( the first one is the default )"}),`
`]}),n(e.p,{children:n(e.img,{src:"/features/statuslines.webp",alt:"nvchad statusline"})}),n(e.h2,{children:"NvCheatsheet"}),a(e.ul,{children:[`
`,n(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,n(e.li,{children:"It will list both default & user keys and their descriptions."}),`
`,n(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`,a(e.li,{children:["Command to toggle it : ",n(e.code,{children:"NvCheatsheet"})," and mapping ",n(e.code,{children:"leader + ch"})]}),`
`]}),n(e.p,{children:n(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}),n("div",{class:"iframe-container",children:n("iframe",{src:"https://www.youtube.com/embed/IljDD4cjgKc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),n(e.h2,{children:"Chadrc completion"}),n(e.p,{children:n(e.img,{src:"/features/chadrc_types.webp",alt:"chadrc types"})}),a(e.ul,{children:[`
`,n(e.li,{children:"Big thanks to @Lucario387 for adding types to chadrc options. This will get you autocompletions for all nvchad options in the chadrc file!"}),`
`]}),n(e.h2,{children:"Example_config"}),a(e.ul,{children:[`
`,a(e.li,{children:["To have a custom config quickstart, you can check the ",n(e.a,{href:"https://github.com/NvChad/example_config/",children:"example_config"}),". If you want something featureful, check its ",n(e.code,{children:"v2.0_featureful"})," branch."]}),`
`]}),n(e.h2,{children:"Notice To v1.0 users"}),n(e.p,{children:"As there's lazy.nvim being used in this release so this might be a breaking change for you, but dont worry, you can still use old nvchad version and slowly migrate to v2.0."}),a(e.ul,{children:[`
`,a(e.li,{children:["Migration changes are mentioned in this ",n(e.a,{href:"/news/v2.0_migration",children:"section"}),"."]}),`
`]})]})}function Ps(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(On,t)})):On(t)}function Pn(t){const e=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",h2:"h2",code:"code",strong:"strong",pre:"pre",span:"span",a:"a"},t.components);return a("div",{id:"DocContent",class:"news",children:[n(e.h1,{children:"# Breaking changes in v2.0"}),n(e.p,{children:n(e.img,{src:"/news/v2.0_migration.svg",alt:"v2.0 poster"})}),a(e.ul,{children:[`
`,a(e.li,{children:[`
`,n(e.p,{children:"Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old nvchad."}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"To use v2.0 , you have to delete all old neovim dirs ( backup custom dir ) and then re-install nvchad again"}),`
`]}),`
`]}),n(e.h2,{children:"Lazy.nvim"}),a(e.ul,{children:[`
`,n(e.li,{children:"This release uses lazy.nvim instead of packer.nvim for plugin management."}),`
`,a(e.li,{children:["The ",n(e.code,{children:"M.plugins"})," variable in chadrc expects a string now instead of table."]}),`
`,a(e.li,{children:["The string should be path of your file which returns a table, example : ",n("u",{children:n(e.strong,{children:"custom/plugins.lua"})})]}),`
`]}),n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"--  before "}),`
M.plugins = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"--  now"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]})}),n("br",{}),a(e.ul,{children:[`
`,a(e.li,{children:[`
`,n(e.p,{children:'Rename your custom plugins dir to something else, like configs etc. It shouldnt be "plugins" ( as per our example )  and update the path in your custom plugins table.'}),`
`]}),`
`,a(e.li,{children:[`
`,n(e.p,{children:"Also old plugin syntax has some slight changes now ( as per lazy.nvim's syntax )"}),`
`]}),`
`]}),n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- before"}),`
[`,n(e.span,{className:"hljs-string",children:'"some plugin"'}),` ] = { options } 
 
`,n(e.span,{className:"hljs-comment",children:"-- now"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"some plugin"'}),`,
   options
}
`]})}),n("br",{}),a(e.ul,{children:[`
`,a(e.li,{children:["Check ",n(e.a,{href:"https://github.com/folke/lazy.nvim#examples",children:"lazy.nvim docs"})," to know how it works & its syntax."]}),`
`]}),n(e.h2,{children:"Override opts"}),a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"override_opts"})," which was used to overridin default plugin configs is now ",n(e.code,{children:"opts"})]}),`
`]}),n(e.h2,{children:"NvChad ui options"}),a(e.ul,{children:[`
`,n(e.li,{children:"These options can now be directly changed from chadrc file"}),`
`]}),n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- before "}),`
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
`]})}),n(e.h2,{children:"Removed Alpha-nvim"}),a(e.ul,{children:[`
`,n(e.li,{children:"Its replaced by our own dashboard module which has a simple config & is lightweight."}),`
`,a(e.li,{children:["Check the NvDash config in the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",children:"default_config file"})]}),`
`]}),n(e.h2,{children:"Removed commands & mappings"}),a(e.p,{children:["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ",n(e.a,{href:"http://nvchad.com/#/docs/api",children:"api functions docs"}),"."]}),n(e.p,{children:n(e.strong,{children:"Removed commands"})}),a(e.ul,{children:[`
`,n(e.li,{children:"Tbufpick , TbufLeft, TbufRight"}),`
`]}),n(e.p,{children:n(e.strong,{children:"Removed mappings"})}),a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"\\"})," ( to trigger tbufpick)."]}),`
`,a(e.li,{children:[n(e.code,{children:"leader + tt"})," ( for toggling themes )"]}),`
`]})]})}function Ds(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Pn,t)})):Pn(t)}const ut=[{heading:"NvChad v2.0 released!",details:"This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",component:m(Ps,{}),link:"/news/v2.0",cover:"v2.0.webp"},{heading:"Breaking changes in v2.0",details:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",component:m(Ds,{}),link:"/news/v2.0_migration",cover:"v2.0_migration.svg"}],Is=g('<div p="5 xl:10" class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div id="newsContent"></div></div>',4);function Rs(t){const{component:e}=t;return $n(()=>{const i=document.getElementById("newsContent")?.querySelectorAll("img");i&&i.forEach((s,c)=>{c!=0&&s.setAttribute("loading","lazy")}),window.addEventListener("scroll",()=>Y("newsContent"))}),xe(()=>window.removeEventListener("scroll",()=>Y("newsContent"))),Be(()=>{setTimeout(()=>{rt(),Y("newsContent"),at()},50)}),(()=>{const l=Is.cloneNode(!0),i=l.firstChild;return _(i,e),_(l,(()=>{const s=b(()=>Je.length>1);return()=>s()&&m(ct,{})})(),null),l})()}function $s(){return b(()=>ut.map(t=>m(G,{get path(){return t.link},get element(){return m(Rs,{get component(){return t.component}})}})))}const Vs=g('<div m="y-5 xl:y-10 x-auto" px-3="" max="w-[1700px]"><div grid="" gap-5="" class="md:grid-cols-2 2xl:grid-cols-3"></div></div>',4),Cs=g('<button bg-blue-6="" text-white-1="" dark-bg-blue-3="" dark-text-dark-1="" px-5="">read more</button>',2),Ss=g('<div border="slate 0 dark:dark-4 solid" class="shadow-xl flex flex-col  gap-4 items-start" bg="dark:dark-3"><img w-full="" rounded-t-lg="" loading="lazy"><div h-full="" flex="" flex-col="" gap-10="" justify-between="" p-10="" pt-5=""><div><h2 class="m-0" pb-5=""></h2><p text-lg="" class="m-0 p-0"></p></div></div></div>',11);function Ms(){return(()=>{const t=Vs.cloneNode(!0),e=t.firstChild;return _(e,()=>ut.map(l=>(()=>{const i=Ss.cloneNode(!0),s=i.firstChild,c=s.nextSibling,o=c.firstChild,h=o.firstChild,u=h.nextSibling;return _(h,()=>l.heading),_(u,()=>l.details),_(c,m(I,{get href(){return l.link},get children(){return Cs.cloneNode(!0)}}),null),E(()=>C(s,"src",`/news/${l.cover}`)),i})())),t})()}function zs(){return[m(qi,{}),m(yl,{get children(){return[m(G,{path:"/",component:as}),m(G,{path:"/docs",component:Li,get children(){return m(cs,{})}}),m(G,{path:"/themes",component:Os}),m(G,{path:"/news",component:Ms}),m($s,{})]}})]}const qs=document.getElementById("app"),Bs=document.querySelector("html");Bs.className=localStorage.theme||"light";Vt(()=>m(wl,{get children(){return m(zs,{})}}),qs);
