(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const j={};function $e(t){j.context=t}function _t(){return{...j.context,id:`${j.context.id}${j.context.count++}-`,count:0}}const gt=(t,e)=>t===e,R=Symbol("solid-proxy"),ln=Symbol("solid-track"),ft=Symbol("solid-dev-component"),be={equals:gt};let In=zn;const z=1,ve=2,Dn={owned:null,cleanups:null,context:null,owner:null};var y=null;let B=null,v=null,P=null,C=null,Le=0;function Rn(t,e){const i=v,l=y,s=t.length===0,o=s?Dn:{owned:null,cleanups:null,context:null,owner:e===void 0?l:e},c=s?t:()=>t(()=>$(()=>xe(o)));y=o,v=null;try{return q(c,!0)}finally{v=i,y=l}}function L(t,e){e=e?Object.assign({},be,e):be;const i={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},l=s=>(typeof s=="function"&&(s=s(i.value)),Mn(i,s));return[Sn.bind(i),l]}function E(t,e,i){const l=He(t,e,!1,z);de(l)}function Be(t,e,i){In=Et;const l=He(t,e,!1,z);l.user=!0,C?C.push(l):de(l)}function b(t,e,i){i=i?Object.assign({},be,i):be;const l=He(t,e,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=i.equals||void 0,de(l),Sn.bind(l)}function bt(t){return q(t,!1)}function $(t){if(v===null)return t();const e=v;v=null;try{return t()}finally{v=e}}function Ue(t,e,i){const l=Array.isArray(t);let s,o=i&&i.defer;return c=>{let h;if(l){h=Array(t.length);for(let d=0;d<t.length;d++)h[d]=t[d]()}else h=t();if(o){o=!1;return}const u=$(()=>e(h,s,c));return s=h,u}}function $n(t){Be(()=>$(t))}function Te(t){return y===null||(y.cleanups===null?y.cleanups=[t]:y.cleanups.push(t)),t}function Cn(){return v}function vt(){return y}function wt(t,e){const i=y,l=v;y=t,v=null;try{return q(e,!0)}catch(s){We(s)}finally{y=i,v=l}}function yt(t){const e=v,i=y;return Promise.resolve().then(()=>{v=e,y=i;let l;return q(t,!1),v=y=null,l?l.done:void 0})}function Vn(t,e){const i=Symbol("context");return{id:i,Provider:At(i),defaultValue:t}}function Fe(t){let e;return(e=Bn(y,t.id))!==void 0?e:t.defaultValue}function Xe(t){const e=b(t),i=b(()=>Ce(e()));return i.toArray=()=>{const l=i();return Array.isArray(l)?l:l!=null?[l]:[]},i}function Sn(){const t=B;if(this.sources&&(this.state||t))if(this.state===z||t)de(this);else{const e=P;P=null,q(()=>ye(this),!1),P=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Mn(t,e,i){let l=t.value;return(!t.comparator||!t.comparator(l,e))&&(t.value=e,t.observers&&t.observers.length&&q(()=>{for(let s=0;s<t.observers.length;s+=1){const o=t.observers[s],c=B&&B.running;c&&B.disposed.has(o),(c&&!o.tState||!c&&!o.state)&&(o.pure?P.push(o):C.push(o),o.observers&&qn(o)),c||(o.state=z)}if(P.length>1e6)throw P=[],new Error},!1)),e}function de(t){if(!t.fn)return;xe(t);const e=y,i=v,l=Le;v=y=t,Nt(t,t.value,l),v=i,y=e}function Nt(t,e,i){let l;try{l=t.fn(e)}catch(s){return t.pure&&(t.state=z,t.owned&&t.owned.forEach(xe),t.owned=null),t.updatedAt=i+1,We(s)}(!t.updatedAt||t.updatedAt<=i)&&(t.updatedAt!=null&&"observers"in t?Mn(t,l):t.value=l,t.updatedAt=i)}function He(t,e,i,l=z,s){const o={fn:t,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:y,context:null,pure:i};return y===null||y!==Dn&&(y.owned?y.owned.push(o):y.owned=[o]),o}function we(t){const e=B;if(t.state===0||e)return;if(t.state===ve||e)return ye(t);if(t.suspense&&$(t.suspense.inFallback))return t.suspense.effects.push(t);const i=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Le);)(t.state||e)&&i.push(t);for(let l=i.length-1;l>=0;l--)if(t=i[l],t.state===z||e)de(t);else if(t.state===ve||e){const s=P;P=null,q(()=>ye(t,i[0]),!1),P=s}}function q(t,e){if(P)return t();let i=!1;e||(P=[]),C?i=!0:C=[],Le++;try{const l=t();return jt(i),l}catch(l){i||(C=null),P=null,We(l)}}function jt(t){if(P&&(zn(P),P=null),t)return;const e=C;C=null,e.length&&q(()=>In(e),!1)}function zn(t){for(let e=0;e<t.length;e++)we(t[e])}function Et(t){let e,i=0;for(e=0;e<t.length;e++){const l=t[e];l.user?t[i++]=l:we(l)}for(j.context&&$e(),e=0;e<i;e++)we(t[e])}function ye(t,e){const i=B;t.state=0;for(let l=0;l<t.sources.length;l+=1){const s=t.sources[l];s.sources&&(s.state===z||i?s!==e&&(!s.updatedAt||s.updatedAt<Le)&&we(s):(s.state===ve||i)&&ye(s,e))}}function qn(t){const e=B;for(let i=0;i<t.observers.length;i+=1){const l=t.observers[i];(!l.state||e)&&(l.state=ve,l.pure?P.push(l):C.push(l),l.observers&&qn(l))}}function xe(t){let e;if(t.sources)for(;t.sources.length;){const i=t.sources.pop(),l=t.sourceSlots.pop(),s=i.observers;if(s&&s.length){const o=s.pop(),c=i.observerSlots.pop();l<s.length&&(o.sourceSlots[c]=l,s[l]=o,i.observerSlots[l]=c)}}if(t.owned){for(e=0;e<t.owned.length;e++)xe(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function kt(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function We(t){throw t=kt(t),t}function Bn(t,e){return t?t.context&&t.context[e]!==void 0?t.context[e]:Bn(t.owner,e):void 0}function Ce(t){if(typeof t=="function"&&!t.length)return Ce(t());if(Array.isArray(t)){const e=[];for(let i=0;i<t.length;i++){const l=Ce(t[i]);Array.isArray(l)?e.push.apply(e,l):e.push(l)}return e}return t}function At(t,e){return function(l){let s;return E(()=>s=$(()=>(y.context={[t]:l.value},Xe(()=>l.children))),void 0),s}}let Lt=!1;function p(t,e){if(Lt&&j.context){const i=j.context;$e(_t());const l=$(()=>t(e||{}));return $e(i),l}return $(()=>t(e||{}))}function _e(){return!0}const Ve={get(t,e,i){return e===R?i:t.get(e)},has(t,e){return e===R?!0:t.has(e)},set:_e,deleteProperty:_e,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:_e,deleteProperty:_e}},ownKeys(t){return t.keys()}};function Ie(t){return(t=typeof t=="function"?t():t)?t:{}}function Ne(...t){let e=!1;for(let l=0;l<t.length;l++){const s=t[l];e=e||!!s&&R in s,t[l]=typeof s=="function"?(e=!0,b(s)):s}if(e)return new Proxy({get(l){for(let s=t.length-1;s>=0;s--){const o=Ie(t[s])[l];if(o!==void 0)return o}},has(l){for(let s=t.length-1;s>=0;s--)if(l in Ie(t[s]))return!0;return!1},keys(){const l=[];for(let s=0;s<t.length;s++)l.push(...Object.keys(Ie(t[s])));return[...new Set(l)]}},Ve);const i={};for(let l=t.length-1;l>=0;l--)if(t[l]){const s=Object.getOwnPropertyDescriptors(t[l]);for(const o in s)o in i||Object.defineProperty(i,o,{enumerable:!0,get(){for(let c=t.length-1;c>=0;c--){const h=(t[c]||{})[o];if(h!==void 0)return h}}})}return i}function Un(t,...e){const i=new Set(e.flat());if(R in t){const s=e.map(o=>new Proxy({get(c){return o.includes(c)?t[c]:void 0},has(c){return o.includes(c)&&c in t},keys(){return o.filter(c=>c in t)}},Ve));return s.push(new Proxy({get(o){return i.has(o)?void 0:t[o]},has(o){return i.has(o)?!1:o in t},keys(){return Object.keys(t).filter(o=>!i.has(o))}},Ve)),s}const l=Object.getOwnPropertyDescriptors(t);return e.push(Object.keys(l).filter(s=>!i.has(s))),e.map(s=>{const o={};for(let c=0;c<s.length;c++){const h=s[c];h in t&&Object.defineProperty(o,h,l[h]?l[h]:{get(){return t[h]},set(){return!0},enumerable:!0})}return o})}function Ge(t){let e=!1;const i=t.keyed,l=b(()=>t.when,void 0,{equals:(s,o)=>e?s===o:!s==!o});return b(()=>{const s=l();if(s){const o=t.children,c=typeof o=="function"&&o.length>0;return e=i||c,c?$(()=>o(s)):o}return t.fallback},void 0,void 0)}const Tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],xt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Tt]),Ot=new Set(["innerHTML","textContent","innerText","children"]),Pt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),sn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),It=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Dt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function $t(t,e,i){let l=i.length,s=e.length,o=l,c=0,h=0,u=e[s-1].nextSibling,d=null;for(;c<s||h<o;){if(e[c]===i[h]){c++,h++;continue}for(;e[s-1]===i[o-1];)s--,o--;if(s===c){const m=o<l?h?i[h-1].nextSibling:i[o-h]:u;for(;h<o;)t.insertBefore(i[h++],m)}else if(o===h)for(;c<s;)(!d||!d.has(e[c]))&&e[c].remove(),c++;else if(e[c]===i[o-1]&&i[h]===e[s-1]){const m=e[--s].nextSibling;t.insertBefore(i[h++],e[c++].nextSibling),t.insertBefore(i[--o],m),e[s]=i[o]}else{if(!d){d=new Map;let f=h;for(;f<o;)d.set(i[f],f++)}const m=d.get(e[c]);if(m!=null)if(h<m&&m<o){let f=c,A=1,x;for(;++f<s&&f<o&&!((x=d.get(e[f]))==null||x!==m+A);)A++;if(A>m-h){const k=e[c];for(;h<m;)t.insertBefore(i[h++],k)}else t.replaceChild(i[h++],e[c++])}else c++;else e[c++].remove()}}}const rn="_$DX_DELEGATE";function Ct(t,e,i,l={}){let s;return Rn(o=>{s=o,e===document?t():_(e,t(),e.firstChild?null:void 0,i)},l.owner),()=>{s(),e.textContent=""}}function g(t,e,i){const l=document.createElement("template");if(l.innerHTML=t,e&&l.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${l.innerHTML}

${t}. Is your HTML properly formed?`;let s=l.content.firstChild;return i&&(s=s.firstChild),s}function F(t,e=window.document){const i=e[rn]||(e[rn]=new Set);for(let l=0,s=t.length;l<s;l++){const o=t[l];i.has(o)||(i.add(o),e.addEventListener(o,Ft))}}function V(t,e,i){i==null?t.removeAttribute(e):t.setAttribute(e,i)}function Vt(t,e,i,l){l==null?t.removeAttributeNS(e,i):t.setAttributeNS(e,i,l)}function I(t,e){e==null?t.removeAttribute("class"):t.className=e}function St(t,e,i,l){if(l)Array.isArray(i)?(t[`$$${e}`]=i[0],t[`$$${e}Data`]=i[1]):t[`$$${e}`]=i;else if(Array.isArray(i)){const s=i[0];t.addEventListener(e,i[0]=o=>s.call(t,i[1],o))}else t.addEventListener(e,i)}function Mt(t,e,i={}){const l=Object.keys(e||{}),s=Object.keys(i);let o,c;for(o=0,c=s.length;o<c;o++){const h=s[o];!h||h==="undefined"||e[h]||(an(t,h,!1),delete i[h])}for(o=0,c=l.length;o<c;o++){const h=l[o],u=!!e[h];!h||h==="undefined"||i[h]===u||!u||(an(t,h,!0),i[h]=u)}return i}function zt(t,e,i){if(!e)return i?V(t,"style"):e;const l=t.style;if(typeof e=="string")return l.cssText=e;typeof i=="string"&&(l.cssText=i=void 0),i||(i={}),e||(e={});let s,o;for(o in i)e[o]==null&&l.removeProperty(o),delete i[o];for(o in e)s=e[o],s!==i[o]&&(l.setProperty(o,s),i[o]=s);return i}function Fn(t,e={},i,l){const s={};return l||E(()=>s.children=K(t,e.children,s.children)),E(()=>e.ref&&e.ref(t)),E(()=>qt(t,e,i,!0,s,!0)),s}function _(t,e,i,l){if(i!==void 0&&!l&&(l=[]),typeof e!="function")return K(t,e,l,i);E(s=>K(t,e(),s,i),l)}function qt(t,e,i,l,s={},o=!1){e||(e={});for(const c in s)if(!(c in e)){if(c==="children")continue;s[c]=on(t,c,null,s[c],i,o)}for(const c in e){if(c==="children"){l||K(t,e.children);continue}const h=e[c];s[c]=on(t,c,h,s[c],i,o)}}function Bt(t){let e,i;if(!j.context||!(e=j.registry.get(i=Xt()))){if(j.context&&console.warn("Unable to find DOM nodes for hydration key:",i),!t)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+i);return t.cloneNode(!0)}return j.completed&&j.completed.add(e),j.registry.delete(i),e}function Ut(t){return t.toLowerCase().replace(/-([a-z])/g,(e,i)=>i.toUpperCase())}function an(t,e,i){const l=e.trim().split(/\s+/);for(let s=0,o=l.length;s<o;s++)t.classList.toggle(l[s],i)}function on(t,e,i,l,s,o){let c,h,u;if(e==="style")return zt(t,i,l);if(e==="classList")return Mt(t,i,l);if(i===l)return l;if(e==="ref")o||i(t);else if(e.slice(0,3)==="on:"){const d=e.slice(3);l&&t.removeEventListener(d,l),i&&t.addEventListener(d,i)}else if(e.slice(0,10)==="oncapture:"){const d=e.slice(10);l&&t.removeEventListener(d,l,!0),i&&t.addEventListener(d,i,!0)}else if(e.slice(0,2)==="on"){const d=e.slice(2).toLowerCase(),m=It.has(d);if(!m&&l){const f=Array.isArray(l)?l[0]:l;t.removeEventListener(d,f)}(m||i)&&(St(t,d,i,m),m&&F([d]))}else if((u=Ot.has(e))||!s&&(sn[e]||(h=xt.has(e)))||(c=t.nodeName.includes("-")))e==="class"||e==="className"?I(t,i):c&&!h&&!u?t[Ut(e)]=i:t[sn[e]||e]=i;else{const d=s&&e.indexOf(":")>-1&&Rt[e.split(":")[0]];d?Vt(t,d,e,i):V(t,Pt[e]||e,i)}return i}function Ft(t){const e=`$$${t.type}`;let i=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==i&&Object.defineProperty(t,"target",{configurable:!0,value:i}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return i||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>{for(;l&&l.nodeType!==8&&l.nodeValue!=="pl-"+t;){let s=l.nextSibling;l.remove(),l=s}l&&l.remove()}));i;){const l=i[e];if(l&&!i.disabled){const s=i[`${e}Data`];if(s!==void 0?l.call(i,s,t):l.call(i,t),t.cancelBubble)return}i=i._$host||i.parentNode||i.host}}function K(t,e,i,l,s){for(j.context&&!i&&(i=[...t.childNodes]);typeof i=="function";)i=i();if(e===i)return i;const o=typeof e,c=l!==void 0;if(t=c&&i[0]&&i[0].parentNode||t,o==="string"||o==="number"){if(j.context)return i;if(o==="number"&&(e=e.toString()),c){let h=i[0];h&&h.nodeType===3?h.data=e:h=document.createTextNode(e),i=H(t,i,l,h)}else i!==""&&typeof i=="string"?i=t.firstChild.data=e:i=t.textContent=e}else if(e==null||o==="boolean"){if(j.context)return i;i=H(t,i,l)}else{if(o==="function")return E(()=>{let h=e();for(;typeof h=="function";)h=h();i=K(t,h,i,l)}),()=>i;if(Array.isArray(e)){const h=[],u=i&&Array.isArray(i);if(Se(h,e,i,s))return E(()=>i=K(t,h,i,l,!0)),()=>i;if(j.context){if(!h.length)return i;for(let d=0;d<h.length;d++)if(h[d].parentNode)return i=h}if(h.length===0){if(i=H(t,i,l),c)return i}else u?i.length===0?cn(t,h,l):$t(t,i,h):(i&&H(t),cn(t,h));i=h}else if(e instanceof Node){if(j.context&&e.parentNode)return i=c?[e]:e;if(Array.isArray(i)){if(c)return i=H(t,i,l,e);H(t,i,null,e)}else i==null||i===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);i=e}else console.warn("Unrecognized value. Skipped inserting",e)}return i}function Se(t,e,i,l){let s=!1;for(let o=0,c=e.length;o<c;o++){let h=e[o],u=i&&i[o];if(h instanceof Node)t.push(h);else if(!(h==null||h===!0||h===!1))if(Array.isArray(h))s=Se(t,h,u)||s;else if(typeof h=="function")if(l){for(;typeof h=="function";)h=h();s=Se(t,Array.isArray(h)?h:[h],Array.isArray(u)?u:[u])||s}else t.push(h),s=!0;else{const d=String(h);d==="<!>"?u&&u.nodeType===8&&t.push(u):u&&u.nodeType===3?(u.data=d,t.push(u)):t.push(document.createTextNode(d))}}return s}function cn(t,e,i=null){for(let l=0,s=e.length;l<s;l++)t.insertBefore(e[l],i)}function H(t,e,i,l){if(i===void 0)return t.textContent="";const s=l||document.createTextNode("");if(e.length){let o=!1;for(let c=e.length-1;c>=0;c--){const h=e[c];if(s!==h){const u=h.parentNode===t;!o&&!c?u?t.replaceChild(s,h):t.insertBefore(s,i):u&&h.remove()}else o=!0}}else t.insertBefore(s,i);return[s]}function Xt(){const t=j.context;return`${t.id}${t.count++}`}const Ht=!1,Wt="http://www.w3.org/2000/svg";function Gt(t,e=!1){return e?document.createElementNS(Wt,t):document.createElement(t)}function Yt(t){const[e,i]=Un(t,["component"]),l=b(()=>e.component);return b(()=>{const s=l();switch(typeof s){case"function":return Object.assign(s,{[ft]:!0}),$(()=>s(i));case"string":const o=Dt.has(s),c=j.context?Bt():Gt(s,o);return Fn(c,i,o),c}})}function Kt(t,e,i){return t.addEventListener(e,i),()=>t.removeEventListener(e,i)}function Zt([t,e],i,l){return[i?()=>i(t()):t,l?s=>e(l(s)):e]}function Jt(t){try{return document.querySelector(t)}catch{return null}}function Qt(t,e){const i=Jt(`#${t}`);i?i.scrollIntoView():e&&window.scrollTo(0,0)}function ei(t,e,i,l){let s=!1;const o=h=>typeof h=="string"?{value:h}:h,c=Zt(L(o(t()),{equals:(h,u)=>h.value===u.value}),void 0,h=>(!s&&e(h),h));return i&&Te(i((h=t())=>{s=!0,c[1](o(h)),s=!1})),{signal:c,utils:l}}function ni(t){if(t){if(Array.isArray(t))return{signal:t}}else return{signal:L({value:""})};return t}function ti(){return ei(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:t,replace:e,scroll:i,state:l})=>{e?window.history.replaceState(l,"",t):window.history.pushState(l,"",t),Qt(window.location.hash.slice(1),i)},t=>Kt(window,"popstate",()=>t()),{go:t=>window.history.go(t)})}function ii(){let t=new Set;function e(s){return t.add(s),()=>t.delete(s)}let i=!1;function l(s,o){if(i)return!(i=!1);const c={to:s,options:o,defaultPrevented:!1,preventDefault:()=>c.defaultPrevented=!0};for(const h of t)h.listener({...c,from:h.location,retry:u=>{u&&(i=!0),h.navigate(s,o)}});return!c.defaultPrevented}return{subscribe:e,confirm:l}}const li=/^(?:[a-z0-9]+:)?\/\//i,si=/^\/+|\/+$/g;function U(t,e=!1){const i=t.replace(si,"");return i?e||/^[?#]/.test(i)?i:"/"+i:""}function ge(t,e,i){if(li.test(e))return;const l=U(t),s=i&&U(i);let o="";return!s||e.startsWith("/")?o=l:s.toLowerCase().indexOf(l.toLowerCase())!==0?o=l+s:o=s,(o||"/")+U(e,!o)}function ri(t,e){if(t==null)throw new Error(e);return t}function Xn(t,e){return U(t).replace(/\/*(\*.*)?$/g,"")+U(e)}function ai(t){const e={};return t.searchParams.forEach((i,l)=>{e[l]=i}),e}function oi(t,e){const[i,l]=t.split("/*",2),s=i.split("/").filter(Boolean),o=s.length;return c=>{const h=c.split("/").filter(Boolean),u=h.length-o;if(u<0||u>0&&l===void 0&&!e)return null;const d={path:o?"":"/",params:{}};for(let m=0;m<o;m++){const f=s[m],A=h[m];if(f[0]===":")d.params[f.slice(1)]=A;else if(f.localeCompare(A,void 0,{sensitivity:"base"})!==0)return null;d.path+=`/${A}`}return l&&(d.params[l]=u?h.slice(-u).join("/"):""),d}}function ci(t){const[e,i]=t.pattern.split("/*",2),l=e.split("/").filter(Boolean);return l.reduce((s,o)=>s+(o.startsWith(":")?2:3),l.length-(i===void 0?0:1))}function Hn(t){const e=new Map,i=vt();return new Proxy({},{get(l,s){return e.has(s)||wt(i,()=>e.set(s,b(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function Wn(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let i=t.slice(0,e.index),l=t.slice(e.index+e[0].length);const s=[i,i+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(l);)s.push(i+=e[1]),l=l.slice(e[0].length);return Wn(l).reduce((o,c)=>[...o,...s.map(h=>h+c)],[])}const hi=100,Gn=Vn(),Oe=Vn(),Pe=()=>ri(Fe(Gn),"Make sure your app is wrapped in a <Router />");let ae;const Ye=()=>ae||Fe(Oe)||Pe().base,di=t=>{const e=Ye();return b(()=>e.resolvePath(t()))},ui=t=>{const e=Pe();return b(()=>{const i=t();return i!==void 0?e.renderPath(i):i})},Z=()=>Pe().location;function mi(t,e="",i){const{component:l,data:s,children:o}=t,c=!o||Array.isArray(o)&&!o.length,h={key:t,element:l?()=>p(l,{}):()=>{const{element:u}=t;return u===void 0&&i?p(i,{}):u},preload:t.component?l.preload:t.preload,data:s};return Yn(t.path).reduce((u,d)=>{for(const m of Wn(d)){const f=Xn(e,m),A=c?f:f.split("/*",1)[0];u.push({...h,originalPath:m,pattern:A,matcher:oi(A,!c)})}return u},[])}function pi(t,e=0){return{routes:t,score:ci(t[t.length-1])*1e4-e,matcher(i){const l=[];for(let s=t.length-1;s>=0;s--){const o=t[s],c=o.matcher(i);if(!c)return null;l.unshift({...c,route:o})}return l}}}function Yn(t){return Array.isArray(t)?t:[t]}function Kn(t,e="",i,l=[],s=[]){const o=Yn(t);for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const d=mi(u,e,i);for(const m of d){l.push(m);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)Kn(u.children,m.pattern,i,l,s);else{const A=pi([...l],s.length);s.push(A)}l.pop()}}}return l.length?s:s.sort((c,h)=>h.score-c.score)}function _i(t,e){for(let i=0,l=t.length;i<l;i++){const s=t[i].matcher(e);if(s)return s}return[]}function gi(t,e){const i=new URL("http://sar"),l=b(u=>{const d=t();try{return new URL(d,i)}catch{return console.error(`Invalid path ${d}`),u}},i,{equals:(u,d)=>u.href===d.href}),s=b(()=>l().pathname),o=b(()=>l().search,!0),c=b(()=>l().hash),h=b(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return c()},get state(){return e()},get key(){return h()},query:Hn(Ue(o,()=>ai(l())))}}function fi(t,e="",i,l){const{signal:[s,o],utils:c={}}=ni(t),h=c.parsePath||(N=>N),u=c.renderPath||(N=>N),d=c.beforeLeave||ii(),m=ge("",e),f=void 0;if(m===void 0)throw new Error(`${m} is not a valid base path`);m&&!s().value&&o({value:m,replace:!0,scroll:!1});const[A,x]=L(!1),k=async N=>{x(!0);try{await yt(N)}finally{x(!1)}},[J,Q]=L(s().value),[ee,ue]=L(s().state),en=gi(J,ee),ne=[],X={pattern:m,params:{},path:()=>m,outlet:()=>null,resolvePath(N){return ge(m,N)}};if(i)try{ae=X,X.data=i({data:void 0,params:{},location:en,navigate:tn(X)})}finally{ae=void 0}function nn(N,w,O){$(()=>{if(typeof w=="number"){w&&(c.go?d.confirm(w,O)&&c.go(w):console.warn("Router integration does not support relative routing"));return}const{replace:me,resolve:pe,scroll:S,state:te}={replace:!1,resolve:!0,scroll:!0,...O},M=pe?N.resolvePath(w):ge("",w);if(M===void 0)throw new Error(`Path '${w}' is not a routable path`);if(ne.length>=hi)throw new Error("Too many redirects");const ie=J();if((M!==ie||te!==ee())&&!Ht){if(d.confirm(M,O)){const pt=ne.push({value:ie,replace:me,scroll:S,state:ee()});k(()=>{Q(M),ue(te)}).then(()=>{ne.length===pt&&mt({value:M,state:te})})}}})}function tn(N){return N=N||Fe(Oe)||X,(w,O)=>nn(N,w,O)}function mt(N){const w=ne[0];w&&((N.value!==w.value||N.state!==w.state)&&o({...N,replace:w.replace,scroll:w.scroll}),ne.length=0)}E(()=>{const{value:N,state:w}=s();$(()=>{N!==J()&&k(()=>{Q(N),ue(w)})})});{let N=function(w){if(w.defaultPrevented||w.button!==0||w.metaKey||w.altKey||w.ctrlKey||w.shiftKey)return;const O=w.composedPath().find(ie=>ie instanceof Node&&ie.nodeName.toUpperCase()==="A");if(!O||!O.hasAttribute("link"))return;const me=O.href;if(O.target||!me&&!O.hasAttribute("state"))return;const pe=(O.getAttribute("rel")||"").split(/\s+/);if(O.hasAttribute("download")||pe&&pe.includes("external"))return;const S=new URL(me);if(S.origin!==window.location.origin||m&&S.pathname&&!S.pathname.toLowerCase().startsWith(m.toLowerCase()))return;const te=h(S.pathname+S.search+S.hash),M=O.getAttribute("state");w.preventDefault(),nn(X,te,{resolve:!1,replace:O.hasAttribute("replace"),scroll:!O.hasAttribute("noscroll"),state:M&&JSON.parse(M)})};var Us=N;F(["click"]),document.addEventListener("click",N),Te(()=>document.removeEventListener("click",N))}return{base:X,out:f,location:en,isRouting:A,renderPath:u,parsePath:h,navigatorFactory:tn,beforeLeave:d}}function bi(t,e,i,l){const{base:s,location:o,navigatorFactory:c}=t,{pattern:h,element:u,preload:d,data:m}=l().route,f=b(()=>l().path),A=Hn(()=>l().params);d&&d();const x={parent:e,pattern:h,get child(){return i()},path:f,params:A,data:e.data,outlet:u,resolvePath(k){return ge(s.path(),k,f())}};if(m)try{ae=x,x.data=m({data:e.data,params:A,location:o,navigate:c(x)})}finally{ae=void 0}return x}const vi=g("<a link></a>",2),wi=t=>{const{source:e,url:i,base:l,data:s,out:o}=t,c=e||ti(),h=fi(c,l,s);return p(Gn.Provider,{value:h,get children(){return t.children}})},yi=t=>{const e=Pe(),i=Ye(),l=Xe(()=>t.children),s=b(()=>Kn(l(),Xn(i.pattern,t.base||""),Zn)),o=b(()=>_i(s(),e.location.pathname));e.out&&e.out.matches.push(o().map(({route:d,path:m,params:f})=>({originalPath:d.originalPath,pattern:d.pattern,path:m,params:f})));const c=[];let h;const u=b(Ue(o,(d,m,f)=>{let A=m&&d.length===m.length;const x=[];for(let k=0,J=d.length;k<J;k++){const Q=m&&m[k],ee=d[k];f&&Q&&ee.route.key===Q.route.key?x[k]=f[k]:(A=!1,c[k]&&c[k](),Rn(ue=>{c[k]=ue,x[k]=bi(e,x[k-1]||i,()=>u()[k+1],()=>o()[k])}))}return c.splice(d.length).forEach(k=>k()),f&&A?f:(h=x[0],x)}));return p(Ge,{get when(){return u()&&h},children:d=>p(Oe.Provider,{value:d,get children(){return d.outlet()}})})},G=t=>{const e=Xe(()=>t.children);return Ne(t,{get children(){return e()}})},Zn=()=>{const t=Ye();return p(Ge,{get when(){return t.child},children:e=>p(Oe.Provider,{value:e,get children(){return e.outlet()}})})};function D(t){t=Ne({inactiveClass:"inactive",activeClass:"active"},t);const[,e]=Un(t,["href","state","class","activeClass","inactiveClass","end"]),i=di(()=>t.href),l=ui(i),s=Z(),o=b(()=>{const c=i();if(c===void 0)return!1;const h=U(c.split(/[?#]/,1)[0]).toLowerCase(),u=U(s.pathname).toLowerCase();return t.end?h===u:u.startsWith(h)});return(()=>{const c=vi.cloneNode(!0);return Fn(c,Ne(e,{get href(){return l()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!o(),[t.activeClass]:o(),...e.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),c})()}var Ni=t=>t[0]!==t[0].toLowerCase(),ji=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,hn=Object.create(null),Ei=/[A-Z]/g,ki=t=>hn[t]||(hn[t]=ji.test(t)?t:t.replace(Ei,e=>`-${e.toLowerCase()}`)),Ai=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,De={},Li=t=>t in De?De[t]:De[t]=Ai.test(t)&&!t.includes("-"),Ti=new Set(["mjx"]),xi=new RegExp(`(?:${[...Ti].join("|")})-.+`,"g"),dn=Object.create(null),Jn=t=>typeof t=="string"?dn[t]??(dn[t]=t.replace(xi,e=>e.replace(/-/g,"_"))):t,Me=(t,e)=>{let i={};for(let l of Object.keys(t))i[Oi(l,e)]=typeof t[l]=="object"&&!Array.isArray(t[l])?Me(t[l],e):Jn(t[l]);return i},T=t=>t.children,n=(t,e)=>typeof t=="function"?t.name==="Fragment"?T(e):t(Me(e)):p(Yt,Ne(Ni(t)?e:Me(e,t),{component:Jn(t)})),Oi=(t,e="")=>Li(e)?t=t==="xlinkHref"||t==="xlink:href"?"href":ki(t):t,a=n;const Pi=g('<button><div text-base=""></div></button>',4),Ii=g('<div grid="" gap-5=""><div class="[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3"></div><pre class="hljs"></pre></div>',6),[Di,Qn]=L("Linux / Macos"),et="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",Ri="git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",$i=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[Ci,Vi]=L(et),Re=t=>{const{cmd:e,os:i,icon:l}=t;return(()=>{const s=Pi.cloneNode(!0),o=s.firstChild;return s.$$click=()=>{Qn(i),Vi(e)},I(o,l),_(s,i,null),E(()=>I(s,`!text-vsm ${Di()==i?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),s})()},Si=()=>(()=>{const t=Ii.cloneNode(!0),e=t.firstChild,i=e.nextSibling;return _(e,p(Re,{os:"Linux / Macos",cmd:et,icon:"i-mingcute:hashtag-fill"}),null),_(e,p(Re,{os:"Windows",cmd:Ri,icon:"i-mdi:windows"}),null),_(e,p(Re,{os:"Docker",cmd:$i,icon:"i-nonicons:docker-16"}),null),_(i,Ci),t})();F(["click"]);function un(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",pre:"pre",span:"span"},t.components);return a(T,{children:[n(e.h2,{children:"Pre-requisites"}),`
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
`,n(Si,{}),`
`,n(e.h2,{children:"Update"}),`
`,n(e.p,{children:"To update NvChad run the following command :"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"NvChadUpdate"}),"."]}),`
`]}),`
`,n(e.h2,{children:"Uninstall"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-comment",children:"# linux/macos (unix)"}),`
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,n(e.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim

`,n(e.span,{className:"hljs-comment",children:"# windows"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data
`]})})]})}function Mi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(un,t)})):un(t)}function mn(t){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a"},t.components);return a(T,{children:[n(e.h2,{children:"If you're new to Neovim/Vim"}),`
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
`]})]})}function zi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(mn,t)})):mn(t)}function pn(t){const e=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3",p:"p",strong:"strong",ul:"ul",li:"li"},t.components);return a(T,{children:[n(e.h2,{children:"Comments"}),`
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
`]})})]})}function qi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(pn,t)})):pn(t)}function _n(t){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",br:"br",pre:"pre",span:"span",ul:"ul",li:"li",strong:"strong",img:"img",a:"a",blockquote:"blockquote"},t.components);return a(T,{children:[n(e.h2,{children:"How does NvChad work?"}),`
`,n(e.h3,{children:"Understanding the basics"}),`
`,a(e.p,{children:["Before getting into the this topic, first you should understand the ",n(e.code,{children:"vim.tbl_deep_extend"})," function which is used for merging tables and their values recursively.",n(e.br,{}),`
`,"The function ",n(e.code,{children:"vim.tbl_deep_extend"})," is normally used to merge 2 tables, and its syntax looks like this:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- table 1"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,n(e.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}

`,n(e.span,{className:"hljs-comment",children:"-- table 2"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}

`,n(e.span,{className:"hljs-comment",children:'-- "force" will overwrite equal values from the someone table over the person table'}),`
`,n(e.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",n(e.span,{className:"hljs-string",children:'"force"'}),`, person, someone)

`,n(e.span,{className:"hljs-comment",children:"-- result : "}),`
{
    name = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),", ",n(e.span,{className:"hljs-comment",children:"-- as you can see, name has been overwritten"}),`
    age = `,n(e.span,{className:"hljs-number",children:"19"}),`,
}
`]})}),`
`,n("br",{}),`
`,n(e.p,{children:"Its usage can even be used in more complex tables. As said, it works recursively, which means that it will apply the same behaviour for nested table values:"}),`
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
`,a(e.p,{children:["The resulting table will have merged each property from the tables, and the same for the ",n(e.code,{children:"skills"})," and ",n(e.code,{children:"distros_used"})," values:"]}),`
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

`,n(e.span,{className:"hljs-comment",children:"-- tbl_deep_extend function merges values recursively, but if there's an array (list), it won't merge the list tables. "}),`

`,n(e.span,{className:"hljs-comment",children:'-- Example: the first table has {"python", "java", "c++"} and the second table has {"js","lua"}. Now you might be wondering that it should merge it like this: '}),`
`,n(e.span,{className:"hljs-comment",children:'-- { "python", "java", "c++", "lua"}'}),`
`,n(e.span,{className:"hljs-comment",children:'-- But no! thats wrong, the result will be only {"js","lua"}'}),`
`]})}),`
`,n("br",{}),`
`,a(e.p,{children:["To sum up, ",n(e.code,{children:"tbl_deep_extend"})," merges dictonary tables recursively (i.e tables which have ",n(e.code,{children:"key/value"})," pair but not lists)."]}),`
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
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"init.lua"})," -"]})," runs everything"]}),`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"core/default_config"})," -"]})," returns a table for whole nvchad config"]}),`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"core/mappings"})," -"]})," default mappings"]}),`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"core/init"})," -"]})," globals, nvim options, commands, autocmds"]}),`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"core/utils"})," -"]})," helpful functions"]}),`
`,a(e.li,{children:["The custom dir will contain all the user configuration. ",n(e.code,{children:"chadrc.lua"})," and ",n(e.code,{children:"init.lua"})," in ",n(e.code,{children:"custom"})," are the main files."]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"/illustrations/config_nutshell.webp",alt:"GitHub Logo"})}),`
`,a(e.p,{children:["From now on, whenever we talk about paths, keep in mind that they're relative to the ",n(e.code,{children:"lua"})," folder in your ",n(e.code,{children:"nvim"})," config (by default it should be ",n(e.code,{children:"~/.config/nvim/"}),")."]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["To extend NvChad, the user should use 2 files in the custom dir (",n(e.code,{children:"chadrc.lua"})," and ",n(e.code,{children:"init.lua"}),"). It is not recommended to make changes outside the ",n(e.code,{children:"custom"})," dir. The main reason is because NvChad provides an utility that will auto-update by basically pulling the changes from git. Any other file outside the ",n(e.code,{children:"custom"})," dir will be treated as a change by ",n(e.code,{children:"git"}),", meaning that NvChad will not be able to fast-forward the pull."]}),`
`,a(e.li,{children:["The ",n(e.code,{children:"chadrc"})," file overrides the ",n(e.code,{children:"core/default_config.lua"})," file. In order to know what options can you change, make sure the check the ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua",children:n(e.code,{children:"default_config.lua"})})," file."]}),`
`]}),`
`,n(e.h2,{children:"Themes"}),`
`,a(e.p,{children:["You can see all the themes with the following keymap: ",n(e.code,{children:"<leader> + th"}),"."]}),`
`,a(e.blockquote,{children:[`
`,a(e.p,{children:["The ",n(e.code,{children:"leader"})," key is the ",n(e.code,{children:"<space>"})," in NvChad."]}),`
`]}),`
`,n(e.h2,{children:"Mappings"}),`
`,a(e.p,{children:["If you want to know all the keymaps, you can run the following comands in the nvim ",n(e.code,{children:"Cmd"}),":"]}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"Telescope keymaps"})}),`
`,n(e.li,{children:n(e.code,{children:"NvCheatsheet"})}),`
`]})]})}function Bi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(_n,t)})):_n(t)}function gn(t){const e=Object.assign({h2:"h2",p:"p",code:"code"},t.components);return a(T,{children:[n(e.h2,{children:"Override default options"}),`
`,a(e.p,{children:["In order to override default options, it is recommended to put the options in ",n(e.code,{children:"custom/init.lua"}),". New options can put in the same file as well. ",n(e.code,{children:"autocmds"})," and ",n(e.code,{children:"globals"})," can also be put inside ",n(e.code,{children:"custom/init.lua"})]}),`
`,n(e.h2,{children:"Snippets"}),`
`,a(e.p,{children:["NvChad uses ",n(e.code,{children:"luasnip"})," for snippets. In order to add custom snippets, you can pass the path to your snippets on: ",n(e.code,{children:'vim.g.luasnippets_path = "your snippets path"'})]})]})}function Ui(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(gn,t)})):gn(t)}function fn(t){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",span:"span"},t.components);return a(T,{children:[n(e.h2,{children:"Overview"}),`
`,a(e.p,{children:["NvChad uses ",n(e.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management. Basically, NvChad expects a user plugin table, which then gets merged with the default plugins table. You can find the table in: ",n(e.a,{href:"https://github.com/NvChad/NvChad/blob/v2.0/lua/plugins/init.lua",children:n(e.code,{children:"lua/plugins/init.lua"})}),"."]}),`
`,n(e.h2,{children:"Lazy loading"}),`
`,n(e.p,{children:"We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as its efficient in reducing startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!"}),`
`,n(e.h3,{children:"Tips"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"cmd"}),":"]})," If a plugin loads on commands, then use the ",n(e.code,{children:"cmd"})," spec. For example, the ",n(e.code,{children:"trouble.nvim"})," plugin opens when the command ",n(e.code,{children:"Trouble"})," is run. Therefore, we would write the word ",n(e.code,{children:"Trouble"})," in the ",n(e.code,{children:"cmd"})," spec of the ",n(e.code,{children:"trouble.nvim"})," plugin configuration."]}),`
`,a(e.li,{children:[a(e.strong,{children:[n(e.code,{children:"event"}),":"]})," Use this spec if you want to load a plugin on certain vim event (check ",n(e.code,{children:":h events"}),"). For example, the ",n(e.code,{children:"cmp.nvim"})," plugin is useful when we're in insert mode, so it is lazyload it at the ",n(e.code,{children:"InsertEnter"})," event."]}),`
`]}),`
`,a(e.p,{children:["There are more specs through which you could do lazy-loading like ",n(e.code,{children:"ft"}),", ",n(e.code,{children:"config"})," and ",n(e.code,{children:"keys"}),"."]}),`
`,n(e.h2,{children:"Managing custom plugins"}),`
`,a(e.p,{children:["All NvChad default plugins will have ",n(e.code,{children:"lazy = true"})," set. Therefore, if you want a plugin to be enabled on startup, change it to ",n(e.code,{children:"lazy = false"}),"."]}),`
`,n("br",{}),`
`,a(e.p,{children:["It is recommended that you avoid saving any files in the ",n(e.code,{children:"custom/plugins/*"})," directory. Our system utilizes the import feature provided by",n(e.code,{children:"lazy.nvim"}),", which imports all files in a directory and expects each file to return plugin tables. This behavior is undesirable for our purposes, so it is recommendeed to create a single file named ",n(e.code,{children:"custom/plugins.lua"}),". This file will be imported by ",n(e.code,{children:"lazy.nvim"}),", and no other files in the directory will be processed."]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom/chadrc.lua"}),`
M.plugins = `,n(e.span,{className:"hljs-string",children:'"custom.plugins"'}),`

`,n(e.span,{className:"hljs-comment",children:"-- custom/plugins.lua"}),`
`,n(e.span,{className:"hljs-keyword",children:"return"}),` {
  `,n(e.span,{className:"hljs-comment",children:"-- Install plugin"}),`
  { `,n(e.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",n(e.span,{className:"hljs-literal",children:"false"}),` },

  `,n(e.span,{className:"hljs-comment",children:"-- You can use any plugin specification from lazy.nvim"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,n(e.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",n(e.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.configs.truezen"'}),`
    `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  }

  `,n(e.span,{className:"hljs-comment",children:"-- opts overrides all default plugin configurations"}),`
  {
    `,n(e.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,n(e.span,{className:"hljs-string",children:'"html"'}),", ",n(e.span,{className:"hljs-string",children:'"css"'}),", ",n(e.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },

  `,n(e.span,{className:"hljs-comment",children:"-- It is also possible to wrap opts with a function because it is required"}),`
  `,n(e.span,{className:"hljs-comment",children:"-- to load the cmp module. If it wasn't done, then the code would run on startup"}),`
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
`]})})]})}function Fi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(fn,t)})):fn(t)}function bn(t){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},t.components);return a(T,{children:[n(e.h2,{children:"Setup lsp server"}),`
`,a(e.p,{children:["Before starting, it is strongly recommended that you walk through the LSP configuration: ",a(e.a,{href:"https://github.com/neovim/nvim-lspconfig",children:[n(e.code,{children:"lspconfig"})," repository"]}),". Then check ",n(e.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's LSP server is present there. You can install LSP servers manually or through ",n(e.code,{children:"mason.nvim"})," (recommended option)."]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- In order to modify the `lspconfig` configuration:"}),`
{
  `,n(e.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.plugins.lspconfig"'}),`
   `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
},
`]})}),`
`,n("br",{}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom/configs/lspconfig.lua"}),`
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

`,n(e.span,{className:"hljs-comment",children:"-- Without the loop, you would have to manually set up each LSP "}),`
`,n(e.span,{className:"hljs-comment",children:"-- "}),`
`,n(e.span,{className:"hljs-comment",children:"-- lspconfig.html.setup {"}),`
`,n(e.span,{className:"hljs-comment",children:"--   on_attach = on_attach,"}),`
`,n(e.span,{className:"hljs-comment",children:"--   capabilities = capabilities,"}),`
`,n(e.span,{className:"hljs-comment",children:"-- }"}),`
`,n(e.span,{className:"hljs-comment",children:"--"}),`
`,n(e.span,{className:"hljs-comment",children:"-- lspconfig.cssls.setup {"}),`
`,n(e.span,{className:"hljs-comment",children:"--   on_attach = on_attach,"}),`
`,n(e.span,{className:"hljs-comment",children:"--   capabilities = capabilities,"}),`
`,n(e.span,{className:"hljs-comment",children:"-- }"}),`
`]})}),`
`,n(e.h2,{children:"Mason.nvim"}),`
`,a(e.p,{children:["The ",n(e.code,{children:"mason.nvim"})," plugin is used to install LSP servers, formatters, linters, and debug adapters. It's better to list all your required packages and put them into your Mason override config, so they are automatically installed when running ",n(e.code,{children:"MasonInstallAll"}),". You can find the exact name of the LSP packages using ",n(e.code,{children:":Mason"}),", that will open a window."]}),`
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
`,a(e.p,{children:["After modifying ",n(e.code,{children:"mason"}),"'s configuration, do:"]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Run ",n(e.code,{children:"nvim +MasonInstallAll"}),". This will install the listed binaries in the ",n(e.code,{children:"ensure_installed"})," table."]}),`
`]}),`
`,n(e.p,{children:"Once the binaries are installed, you will have to configure them to properly work with LSP. NvChad does not provide any language configuration aside from lua."})]})}function Xi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(bn,t)})):bn(t)}function vn(t){const e=Object.assign({h2:"h2",code:"code",p:"p",ul:"ul",li:"li",pre:"pre",span:"span",a:"a",strong:"strong"},t.components);return a(T,{children:[a(e.h2,{children:["Install ",n(e.code,{children:"null-ls.nvim"})]}),`
`,a(e.p,{children:["It is recommended that you install ",n(e.code,{children:"null-ls"})," due to its simplicity and ease to set up. With that, keep in mind that:"]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Dependencies are loaded after the original plugin (",n(e.code,{children:"lspconfig"})," in NvChad's case)."]}),`
`,a(e.li,{children:[n(e.code,{children:"null-ls"})," is loaded after ",n(e.code,{children:"lspconfig"})," as ",n(e.code,{children:"lspconfig"})," is lazy-loaded."]}),`
`]}),`
`,a(e.p,{children:["Here's a possible install configuration for ",n(e.code,{children:"null-ls"}),":"]}),`
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
`,a(e.p,{children:["Make sure to check ",a(e.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",children:[n(e.code,{children:"null-ls"})," builtins"]})," to get exact names for formatters, linters etc."]}),`
`,a(e.p,{children:["Here's an exmple configuration for ",n(e.code,{children:"null-ls"}),", following the NvChad file directory structure:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom/configs/null-ls.lua"}),`

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
`,a(e.p,{children:["Other things to take into account when configuring ",n(e.code,{children:"null-ls"})," for NvChad:"]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["This shortcut is defined for code formatting: ",n(e.code,{children:"<leader> + fm"}),"."]}),`
`,a(e.li,{children:["The linter, formatter or debugger that you will use in ",n(e.code,{children:"null-ls"})," configuration, has to be downloaded via ",n(e.code,{children:"mason"})," or system wide. ",n(e.strong,{children:"NvChad does ont come with any pre-installed linter, debugger nor formatter"}),"."]}),`
`,a(e.li,{children:["Make sure the LSP servers for the filetypes are active for the relevant ",n(e.code,{children:"null-ls"})," formatter and/or linter to work."]}),`
`]})]})}function Hi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(vn,t)})):vn(t)}function wn(t){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",strong:"strong"},t.components);return a(T,{children:[n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"The mapping configuration uses the nvim name shorcuts as:"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"<C>"}),": ",n("kbd",{children:"Ctrl"})]}),`
`,a(e.li,{children:[n(e.code,{children:"<leader>"})," = ",n("kbd",{children:"Space"})]}),`
`,a(e.li,{children:[n(e.code,{children:"<A>"})," = ",n("kbd",{children:"alt"})]}),`
`,a(e.li,{children:[n(e.code,{children:"<S>"})," = ",n("kbd",{children:"shift"})]}),`
`,a(e.li,{children:["The default mappings are defined in ",n(e.code,{children:"core.mappings"})," (`core/mappings.lua)."]}),`
`,a(e.li,{children:["Alternatively, you can use ",n(e.code,{children:"NvCheatsheet"})," or ",n(e.code,{children:"Telescope keymaps"})," to list all mappings."]}),`
`]}),`
`,n(e.h2,{children:"Mapping format"}),`
`,n(e.p,{children:"In order to list custom shortcuts in NvCheatsheet, make sure to use the following format"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- opts is an optional parameter"}),`
[`,n(e.span,{className:"hljs-string",children:'"keys"'}),"] = {",n(e.span,{className:"hljs-string",children:'"action"'}),", ",n(e.span,{className:"hljs-string",children:'"description"'}),`, opts = {}},

[`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> NvimTreeToggle <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Toggle nvimtree"'}),`},
`,n(e.span,{className:"hljs-comment",children:"-- In this case : equals <cmd>"}),`
[`,n(e.span,{className:"hljs-string",children:'"<leader>ff"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`},   

`,n(e.span,{className:"hljs-comment",children:"-- opts can have the props: buffer, silent, noremap, nowait and so on."}),`
`,n(e.span,{className:"hljs-comment",children:"-- All standard key binding opts are supported. "}),`
[`,n(e.span,{className:"hljs-string",children:'";"'}),"] = { ",n(e.span,{className:"hljs-string",children:'":"'}),", ",n(e.span,{className:"hljs-string",children:'"enter cmdline"'}),", opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` } },

`,n(e.span,{className:"hljs-comment",children:"-- For a more complex keymap"}),`
[`,n(e.span,{className:"hljs-string",children:'"<leader>tt"'}),`] = {
  `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}),`
     `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
  `,n(e.span,{className:"hljs-string",children:'"toggle transparency"'}),`,
},
`]})}),`
`,n(e.h2,{children:"Add new mappings"}),`
`,a(e.p,{children:["In order to add or customize the mappings, make sure that you follow the expected file structure for NvChad. The default mappings are loaded from ",n(e.code,{children:"core.mappings"}),", and it is recommended that you place your mappings inside ",n(e.code,{children:"custom.mappings"}),". Remember that the mappings ",n(e.strong,{children:"must"})," have a vim mode: ",n(e.code,{children:"n"})," (for normal), ",n(e.code,{children:"v"})," (for visual), ",n(e.code,{children:"i"})," (for insert) and so on."]}),`
`,a(e.p,{children:["Inside your ",n(e.code,{children:"chadrc"})," file, make sure you add:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom/chadrc.lua"}),`
M.mappings = `,n(e.span,{className:"hljs-built_in",children:"require"})," ",n(e.span,{className:"hljs-string",children:'"custom.mappings"'}),`
`,n(e.span,{className:"hljs-comment",children:"-- You can change the file location, as long as you update the previous line accordingly"}),`
`]})}),`
`,a(e.p,{children:["Then, in your ",n(e.code,{children:"custom.mappings"})," configuration, add the wanted mappings:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- custom/mappings.lua"}),`
`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

`,n(e.span,{className:"hljs-comment",children:"-- In order to disable a default keymap, use"}),`
M.disabled = {
  n = {
      [`,n(e.span,{className:"hljs-string",children:'"<leader>h"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`,
      [`,n(e.span,{className:"hljs-string",children:'"<C-a>"'}),"] = ",n(e.span,{className:"hljs-string",children:'""'}),`
  }
}

`,n(e.span,{className:"hljs-comment",children:"-- Your custom mappings"}),`
M.abc = {
  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
     [`,n(e.span,{className:"hljs-string",children:'"<C-s>"'}),"] = {",n(e.span,{className:"hljs-string",children:'":Telescope Files <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope Files"'}),`} 
  }

  i = {
     [`,n(e.span,{className:"hljs-string",children:'"jk"'}),"] = { ",n(e.span,{className:"hljs-string",children:'"<ESC>"'}),", ",n(e.span,{className:"hljs-string",children:'"escape insert mode"'})," , opts = { nowait = ",n(e.span,{className:"hljs-literal",children:"true"}),` }},
    `,n(e.span,{className:"hljs-comment",children:"-- ..."}),`
  }
}

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,n("br",{}),`
`,n(e.p,{children:"A couple of recommendations:"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Be sure to maintain a table structure similar to the one in ",n(e.code,{children:"core.mappings"}),"."]}),`
`,n(e.li,{children:"Mappings will be automatically loaded. You don't need to load them manually!"}),`
`]}),`
`,n(e.h2,{children:"Manually load mappings"}),`
`,n(e.p,{children:"Even though it is not required, you can manually load your mappings with:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.some_plugin_name = {
  plugin = `,n(e.span,{className:"hljs-literal",children:"true"}),", ",n(e.span,{className:"hljs-comment",children:"-- <- Important!"}),`

  n = {
     [`,n(e.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",n(e.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",n(e.span,{className:"hljs-string",children:'"Telescope"'}),`}
  }
}

`,n(e.span,{className:"hljs-comment",children:"-- Now to load it "}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"core.utils"'}),").load_mappings(",n(e.span,{className:"hljs-string",children:'"someplugin"'}),`)
`]})})]})}function Wi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(wn,t)})):wn(t)}function yn(t){const e=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",span:"span",h3:"h3"},t.components);return a(T,{children:[n(e.h2,{children:"Statusline & tabufline"}),`
`,a(e.p,{children:["We use our own ",n(e.a,{href:"https://github.com/NvChad/ui",children:"plugin"})," for ",n(e.code,{children:"statusline"})," and ",n(e.code,{children:"tabufline"}),". The default config is (keep in mind that every plugin's default config is just a table):"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
  `,n(e.span,{className:"hljs-comment",children:"-- ...other options"}),`

  statusline = {
    theme = `,n(e.span,{className:"hljs-string",children:'"default"'}),", ",n(e.span,{className:"hljs-comment",children:"-- default/vscode/vscode_colored/minimal"}),`

    `,n(e.span,{className:"hljs-comment",children:'-- default/round/block/arrow (separators work only for "default" statusline theme;'}),`
    `,n(e.span,{className:"hljs-comment",children:"-- round and block will work for the minimal theme only)"}),`
    separator_style = `,n(e.span,{className:"hljs-string",children:'"default"'}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  tabufline = {
    lazyload = `,n(e.span,{className:"hljs-literal",children:"true"}),`,
    overriden_modules = `,n(e.span,{className:"hljs-literal",children:"nil"}),`,
  },

  `,n(e.span,{className:"hljs-comment",children:"-- ...other options"}),`
}
`]})}),`
`,a(e.h3,{children:["Override ",n(e.code,{children:"statusline"})," modules"]}),`
`,n(e.p,{children:"It is also possible to override the plugin's configuration:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
  statusline = {
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
}
`]})}),`
`,n("br",{}),`
`,a(e.p,{children:["It is recommended to check the list of modules in ",a(e.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/statusline/modules.lua",children:["our ",n(e.code,{children:"statusline"})," modules file"]}),'. In the above code, you can see that we want to print "bruh" next to the mode module, in the statusline. In order to add highlight group to your text, do:']}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-string",children:'"#BruhHl%"'})," .. ",n(e.span,{className:"hljs-string",children:'" bruh "'})," ",n(e.span,{className:"hljs-comment",children:"-- the highlight group here is BruhHl"}),`
`]})}),`
`,a(e.h3,{children:["Override ",n(e.code,{children:"tabufline"})," modules"]}),`
`,a(e.p,{children:["The configuration for overriding ",n(e.code,{children:"tabufline"})," is the same as in ",n(e.code,{children:"statusline"}),":"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
  tabufline = {
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
}
`]})}),`
`,n("br",{}),`
`,a(e.p,{children:["Again, check the list of modules in ",n(e.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/tabufline/modules.lua",children:"our tabufline modules file"}),"."]})]})}function Gi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(yn,t)})):yn(t)}function Nn(t){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",h3:"h3",blockquote:"blockquote",a:"a"},t.components);return a(T,{children:[n(e.h2,{children:"Override default highlight groups"}),`
`,n(e.p,{children:"It is possible to overwrite the highlighting groups for the selected theme:"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Make sure you use a valid highlight group"}),`
`,a(e.li,{children:["Check your theme colors in this dir: ",n(e.code,{children:"~/.local/share/nvim/lazy/base46/lua/base46/integrations"})]}),`
`]}),`
`,n("br",{}),`
`,n(e.p,{children:'When modifying the custom highlight groups in your theme file, such as "onedark.lua", it is important to note that only the variables from "base_30" can be used for this purpose. Although hex colors can also be used in the "fg/bg" field, it is recommended to utilize the variable names (e.g. "blue", "darker_black", "one_bg", etc.) from your theme file as they will provide a better aesthetic. This way, there is no need to manually input the hex colors.'}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
   hl_override = {
      Pmenu = { bg = `,n(e.span,{className:"hljs-string",children:'"white"'}),` },
      `,n(e.span,{className:"hljs-comment",children:'-- Pmenu = { bg = "#ffffff" }, this works too'}),`

      MyHighlightGroup = { `,n(e.span,{className:"hljs-comment",children:"-- custom highlights are also allowed"}),`
         fg = `,n(e.span,{className:"hljs-string",children:'"red"'}),`,
         bg = `,n(e.span,{className:"hljs-string",children:'"darker_black"'}),`
      }
   },
}
`]})}),`
`,a(e.p,{children:["In order to add custom highlights, thee same method can be used as above. However, instead of using ",n(e.code,{children:"hl_override"}),", you have to use the ",n(e.code,{children:"hl_add"})," field in chadrc."]}),`
`,n(e.h2,{children:"Customize themes"}),`
`,n(e.p,{children:"If you just want to customize an already existing theme, you can change the following configuration:"}),`
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
`,a(e.blockquote,{children:[`
`,n(e.p,{children:"(WARNING: Do this at your own risk because you might not be able to make nvchad themes like siduck.)"}),`
`]}),`
`,n(e.p,{children:"Keep in mind that:"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Default themes can be found in our ",n(e.a,{href:"https://github.com/NvChad/base46",children:n(e.code,{children:"base46"})})," repository."]}),`
`]}),`
`,n(e.p,{children:"Here is the default structure for NvChad themes:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- place the file in custom/themes/<theme-name>.lua"}),`
`,n(e.span,{className:"hljs-comment",children:"-- for example: custom/themes/siduck.lua"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

M.base_30 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my colors"}),`
}

M.base_16 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my base16 colors"}),`
}

M.`,n(e.span,{className:"hljs-built_in",children:"type"})," = ",n(e.span,{className:"hljs-string",children:'"dark"'})," ",n(e.span,{className:"hljs-comment",children:"-- this is required or your theme will break on loading!"}),`

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,n("br",{}),`
`,n(e.p,{children:"Finally, you just need to use the same name as the file!"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`M.ui = {
   theme = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}
`]})})]})}function Yi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Nn,t)})):Nn(t)}function jn(t){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",h4:"h4",p:"p",img:"img",code:"code",a:"a"},t.components);return a(T,{children:[n(e.h1,{children:"Inbuilt features"}),`
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
`]})]})}function Ki(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(jn,t)})):jn(t)}function En(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},t.components);return a(T,{children:[n(e.h1,{children:"# NvChad API"}),`
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
`]})})]})}function Zi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(En,t)})):En(t)}function kn(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",a:"a"},t.components);return a(T,{children:[n(e.h2,{children:"Basic debugging"}),`
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
`]})]})}function Ji(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(kn,t)})):kn(t)}function An(t){const e=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},t.components);return a(T,{children:[n(e.h2,{children:"Things to know before contributing"}),`
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
`]})]})}function Qi(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(An,t)})):An(t)}function Ln(t){const e=Object.assign({p:"p",ul:"ul",li:"li",a:"a",strong:"strong"},t.components);return a(T,{children:[n(e.p,{children:"The NvChad team would love to acknowledge many projects which made this possible."}),`
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
`]})]})}function el(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ln,t)})):Ln(t)}const Ke=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install",Mi],["Post Install","quickstart/post-install",zi],["Learn basic Lua","quickstart/learn-lua",qi]]},{label:["Custom config","i-mdi-cog"],items:[["Walkthrough","config/walkthrough",Bi],["Options","config/options",Ui],["Manage Plugins","config/plugins",Fi],["LSP Configuration","config/Lsp",Xi],["Format & Lint","config/format_lint",Hi],["Mappings","config/mappings",Wi],["UI Customization","config/nvchad_ui",Gi],["Customize colors","config/theming",Yi]]},["Features","features","i-tabler:server-cog",Ki],["Api Functions","api","i-mdi:atom-variant",Zi],["Debug config","debugging-config","i-ri-bug-line",Ji],["Contributing","contribute","i-mdi-github",Qi],["Credits","credits","i-line-md:heart",el]],nl=g('<div class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3="" pl-5=""></div>',2),tl=g('<div class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium=""><div></div> </div><div></div></button></div>',10),il=g('<div i-octicon-chevron-down-12=""></div>',2),ll=g('<div i-octicon-chevron-right-12=""></div>',2),sl=g(`<div class="h-fit  xl:sticky z-10 top-0  xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none pt-0 p-7 xl:p-0"><div h-full="" flex="" flex-col="" gap-5="" class="[&amp;_*]:text-base dark:text-slate-4"></div></div>`,4),rl=g("<div></div>",2);function al(t){const e=t.labels.filter(s=>Z().pathname==`/docs/${s[1]}`).length,[i,l]=L(e==1);return(()=>{const s=tl.cloneNode(!0),o=s.firstChild,c=o.firstChild,h=c.firstChild;h.nextSibling;const u=c.nextSibling;return o.$$click=()=>l(!i()),_(c,()=>t.BtnLabel[0],null),_(u,(()=>{const d=b(()=>!!i());return()=>d()?il.cloneNode(!0):ll.cloneNode(!0)})()),_(s,p(Ge,{get when(){return i()},get children(){const d=nl.cloneNode(!0);return _(d,()=>t.labels.map(m=>p(D,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return m[1]},get children(){return m[0]}}))),d}}),null),E(d=>{const m=t.BtnLabel[1],f=`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${i()?"dark:text-red-3":"dark:text-white-2"}`;return m!==d._v$&&I(h,d._v$=m),f!==d._v$2&&I(u,d._v$2=f),d},{_v$:void 0,_v$2:void 0}),s})()}function ol(){return(()=>{const t=sl.cloneNode(!0),e=t.firstChild;return _(e,()=>Ke.map(i=>i.label?p(al,{get BtnLabel(){return i.label},get labels(){return i.items}}):p(D,{get href(){return i[1]},vertCentered:"",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[(()=>{const l=rl.cloneNode(!0);return E(()=>I(l,i[2])),l})(),b(()=>i[0])]}}))),E(()=>t.hidden=!ke()),t})()}F(["click"]);const cl=g('<div flex="" justify-between=""></div>',2),hl=g('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-left-bold=""></div></button>',4),Tn=g("<div></div>",2),dl=g('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-right-bold=""></div></button>',4);let se=[];Ke.forEach(t=>{Array.isArray(t)?se.push(t):t.items.forEach(e=>{se.push(e)})});function W(t,e){let i="",l=Z().pathname.replace(/^\/docs\//,"");return se.forEach((s,o)=>{l==s[1]&&se[o+t]&&(i=se[o+t][e?1:0])}),i}const ul=()=>(()=>{const t=cl.cloneNode(!0);return _(t,(()=>{const e=b(()=>!!W(-1));return()=>e()?p(D,{get href(){return W(-1,!0)},get children(){const i=hl.cloneNode(!0);return i.firstChild,_(i,()=>W(-1),null),i}}):Tn.cloneNode(!0)})(),null),_(t,(()=>{const e=b(()=>!!W(1));return()=>e()?p(D,{get href(){return W(1,!0)},get children(){const i=dl.cloneNode(!0),l=i.firstChild;return _(i,()=>W(1),l),i}}):Tn.cloneNode(!0)})(),null),t})();const ml=t=>{(document.getElementById(t)?.querySelectorAll("pre")).forEach(function(l){const s=document.createElement("button");s.classList="copyBtn",s.ariaLabel="copy button";const o=document.createElement("div");o.classList="i-uil:clipboard",s.appendChild(o),s.addEventListener("click",function(){const c=s.querySelector("div");c.classList="i-line-md:confirm-circle clickedCopyBtn";const h=l.textContent;navigator.clipboard.writeText(h),setTimeout(()=>{c.classList="i-uil:clipboard"},3e3)}),l.appendChild(s)})},ze=Symbol("store-raw"),oe=Symbol("store-node"),pl=Symbol("store-name");function nt(t,e){let i=t[R];if(!i&&(Object.defineProperty(t,R,{value:i=new Proxy(t,fl)}),!Array.isArray(t))){const l=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let o=0,c=l.length;o<c;o++){const h=l[o];s[h].get&&Object.defineProperty(t,h,{enumerable:s[h].enumerable,get:s[h].get.bind(i)})}}return i}function je(t){let e;return t!=null&&typeof t=="object"&&(t[R]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function ce(t,e=new Set){let i,l,s,o;if(i=t!=null&&t[ze])return i;if(!je(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let c=0,h=t.length;c<h;c++)s=t[c],(l=ce(s,e))!==s&&(t[c]=l)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const c=Object.keys(t),h=Object.getOwnPropertyDescriptors(t);for(let u=0,d=c.length;u<d;u++)o=c[u],!h[o].get&&(s=t[o],(l=ce(s,e))!==s&&(t[o]=l))}return t}function Ze(t){let e=t[oe];return e||Object.defineProperty(t,oe,{value:e={}}),e}function qe(t,e,i){return t[e]||(t[e]=it(i))}function _l(t,e){const i=Reflect.getOwnPropertyDescriptor(t,e);return!i||i.get||!i.configurable||e===R||e===oe||e===pl||(delete i.value,delete i.writable,i.get=()=>t[R][e]),i}function tt(t){if(Cn()){const e=Ze(t);(e._||(e._=it()))()}}function gl(t){return tt(t),Reflect.ownKeys(t)}function it(t){const[e,i]=L(t,{equals:!1,internal:!0});return e.$=i,e}const fl={get(t,e,i){if(e===ze)return t;if(e===R)return i;if(e===ln)return tt(t),i;const l=Ze(t),s=l.hasOwnProperty(e);let o=s?l[e]():t[e];if(e===oe||e==="__proto__")return o;if(!s){const c=Object.getOwnPropertyDescriptor(t,e);Cn()&&(typeof o!="function"||t.hasOwnProperty(e))&&!(c&&c.get)&&(o=qe(l,e,o)())}return je(o)?nt(o):o},has(t,e){return e===ze||e===R||e===ln||e===oe||e==="__proto__"?!0:(this.get(t,e,t),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:gl,getOwnPropertyDescriptor:_l};function Ee(t,e,i,l=!1){if(!l&&t[e]===i)return;const s=t[e],o=t.length;i===void 0?delete t[e]:t[e]=i;let c=Ze(t),h;(h=qe(c,e,s))&&h.$(()=>i),Array.isArray(t)&&t.length!==o&&(h=qe(c,"length",o))&&h.$(t.length),(h=c._)&&h.$()}function lt(t,e){const i=Object.keys(e);for(let l=0;l<i.length;l+=1){const s=i[l];Ee(t,s,e[s])}}function bl(t,e){if(typeof e=="function"&&(e=e(t)),e=ce(e),Array.isArray(e)){if(t===e)return;let i=0,l=e.length;for(;i<l;i++){const s=e[i];t[i]!==s&&Ee(t,i,s)}Ee(t,"length",l)}else lt(t,e)}function le(t,e,i=[]){let l,s=t;if(e.length>1){l=e.shift();const c=typeof l,h=Array.isArray(t);if(Array.isArray(l)){for(let u=0;u<l.length;u++)le(t,[l[u]].concat(e),i);return}else if(h&&c==="function"){for(let u=0;u<t.length;u++)l(t[u],u)&&le(t,[u].concat(e),i);return}else if(h&&c==="object"){const{from:u=0,to:d=t.length-1,by:m=1}=l;for(let f=u;f<=d;f+=m)le(t,[f].concat(e),i);return}else if(e.length>1){le(t[l],e,[l].concat(i));return}s=t[l],i=[l].concat(i)}let o=e[0];typeof o=="function"&&(o=o(s,i),o===s)||l===void 0&&o==null||(o=ce(o),l===void 0||je(s)&&je(o)&&!Array.isArray(o)?lt(s,o):Ee(t,l,o))}function vl(...[t,e]){const i=ce(t||{}),l=Array.isArray(i),s=nt(i);function o(...c){bt(()=>{l&&c.length===1?bl(i,c[0]):le(i,c)})}return[s,o]}function wl(t){const e=t.getBoundingClientRect();return!!(e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth))}const[yl,st]=L(""),[Je,Nl]=vl([]),Y=t=>{let i=document.getElementById(t)?.querySelectorAll("h2,h3");for(let l=0;l<i.length;l++)if(wl(i[l])){st(i[l].innerText);break}},rt=()=>{const e=document.getElementById("DocContent")?.querySelectorAll("h2, h3"),i=[];e?.forEach(l=>{l.id=l.innerText.replaceAll(/[ .&]/g,"_"),i.push([l.localName,l.innerText])}),Nl(i)},at=()=>{const t=location.hash;if(t[0]==="#"){const e=t.substring(1);document.getElementById(e).scrollIntoView()}},jl=g('<div class="top-0 sticky my-5 xl:grid xl:h-[calc(100vh-11rem)]"><div class="h-fit grid"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full" m="t-[-2rem]" xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text="slate-5"></div></div></div>',10);function El(t){let e=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${yl()==t[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return t[0]=="h3"?`pl-10 ${e}`:`${e}`}function ot(){const[t,e]=L(!1);return(()=>{const i=jl.cloneNode(!0),l=i.firstChild,s=l.firstChild,o=s.nextSibling;return s.$$click=()=>e(!t()),_(o,()=>Je.map(c=>p(D,{get href(){return`${Z().pathname}#${c[1].replaceAll(/[ .&]/g,"_")}`},get class(){return El(c)},onclick:()=>st(c[1]),get children(){return c[1]}}))),E(()=>I(o,`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${t()?"":"hidden"}`)),i})()}F(["click"]);const kl=g('<div grid="" class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto my-8 px-4"><div class="xl:blur-none"><div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div xl-px-10=""><div id="DocContent" w-full=""></div></div></div></div></div>',10),[ke,Al]=L(!1);function Ll(){return $n(()=>window.addEventListener("scroll",()=>Y("DocContent"))),Te(()=>window.removeEventListener("scroll",()=>Y("DocContent"))),Be(Ue(()=>Z().pathname,()=>{setTimeout(()=>{ml("DocContent"),rt(),Y("DocContent"),at()},50)})),(()=>{const t=kl.cloneNode(!0),e=t.firstChild,i=e.firstChild,l=i.firstChild,s=l.firstChild;return _(t,p(ol,{}),e),_(s,p(Zn,{})),_(l,p(ul,{}),null),_(i,(()=>{const o=b(()=>Je.length>1);return()=>o()&&p(ot,{})})(),null),E(()=>V(e,"blur",ke()?"sm":"")),t})()}const Tl=g('<img src="/logo.svg" alt="nvchad logo" w="26px" h="26px">',1),xl=g('<div grid="" md-flex="" gap-5=""><div text="slate-7 dark:slate-4"></div></div>',4),Ol=g('<button xl="hidden" dark-bg-blue-3="" dark-text-black="">Docs</button>',2),Pl=g('<div i-ic-round-close=""></div>',2),Il=g('<div i-carbon-side-panel-close-filled=""></div>',2),Dl=g('<button aria-label="theme toggler"><div text-base=""></div></button>',4),Rl=g("<div></div>",2),$l=g('<button id="searchbar" class="vertCentered text-base w-fit p-2 px-3 rounded-lg" bg="slate-1 dark:dark-3" text="slate-6"><div i-ion-search=""></div>Search<div border="1 solid slate-6 dark:dark-4" p="1 x-2" class="ml-3 text-slate-7 dark:text-slate-4 text-sm rounded-lg">Ctrl + k</div></button>',6),Cl=g(`<div border="0 b solid slate-2 dark:dark-4"><nav class="sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white-1 dark:bg-dark-2 
                text-lg font-medium  p-4 py-3 max-w-[1700px] mx-auto"><div md="flex gap-3 mx-auto" class="grid justify-between w-full gap-5"></div><div class="vertCentered h-fit md:!hidden"><button class="p-2 text-xl rounded-lg"><div i-material-symbols-menu-rounded=""></div></button></div></nav></div>`,12),[Qe,Vl]=L(!1);function Sl(){return(()=>{const t=xl.cloneNode(!0),e=t.firstChild;return _(t,p(D,{href:"/",class:"vertCentered !gap-3 font-bold text-grey-4 dark:text-white-2",get children(){return[Tl.cloneNode(!0),"NvChad"]}}),e),_(e,p(D,{href:"/docs/quickstart/install",children:"Docs"}),null),_(e,p(D,{href:"/docs/features",children:"Features"}),null),_(e,p(D,{href:"/themes",children:"Themes"}),null),_(e,p(D,{href:"/news",children:"News"}),null),E(()=>I(e,`grid md:vertCentered md:!gap-5 gap-5 ${Qe()?"":"hidden"}`)),t})()}function ct(){return Z().pathname.includes("docs")&&(()=>{const t=Ol.cloneNode(!0),e=t.firstChild;return t.$$click=()=>Al(!ke()),_(t,(()=>{const i=b(()=>!!ke());return()=>i()?Pl.cloneNode(!0):Il.cloneNode(!0)})(),e),t})()}const ht=t=>{const[e,i]=L(localStorage&&localStorage.theme?localStorage.theme:"light");return(()=>{const l=Dl.cloneNode(!0),s=l.firstChild;return l.$$click=()=>{i(e()=="light"?"dark":"light");const o=document.querySelector("html");o.className=localStorage.theme=e()},E(o=>{const c=`shadow-lg ${t.display} text-xl p-2 bg-slate-8 text-white-1 dark:bg-dark-3 rounded-full`,h=e()=="light"?"i-line-md:sun-rising-twotone-loop":"i-ph-moon-stars-bold";return c!==o._v$&&I(l,o._v$=c),h!==o._v$2&&I(s,o._v$2=h),o},{_v$:void 0,_v$2:void 0}),l})()};function Ml(){const t=[["i-ph:chat-teardrop-text text-3xl","#community","nvchad discussions"],["i-bi:github  ","https://github.com/NvChad/NvChad","Github repo"]];return(()=>{const e=Rl.cloneNode(!0);return _(e,p(ct,{}),null),_(e,p(zl,{}),null),_(e,()=>t.map(i=>p(D,{text:"slate-8 dark:slate-4",get href(){return i[1]},get["aria-label"](){return i[2]},get class(){return i[0]},get children(){return i[0]}})),null),_(e,p(ht,{display:"hidden md:vertCentered"}),null),E(()=>I(e,`md:vertCentered !gap-5 text-2xl ${Qe()?"vertCentered":"hidden"}`)),e})()}function zl(){return(()=>{const t=$l.cloneNode(!0);return t.$$click=()=>{alert("This is WIP!")},t})()}function ql(){return(()=>{const t=Cl.cloneNode(!0),e=t.firstChild,i=e.firstChild,l=i.nextSibling,s=l.firstChild;return _(i,p(Sl,{}),null),_(i,p(Ml,{}),null),_(l,p(ht,{}),s),_(l,p(ct,{}),s),s.$$click=()=>Vl(!Qe()),t})()}F(["click"]);const Bl=g('<div class="i-grommet-icons-install-option"></div>',2),Ul=g('<div class="i-mdi-docker"></div>',2),Fl=g('<div class="mx-auto flex gap-3 text-sm md:text-lg text-white-2 [&amp;_a]:shadow-xl"></div>',2),Xl=g('<div text-slate-8="" grid="" text-center="" mx-auto="" mb-10=""><h1 mb-0="">Enhance your Neovim workflow</h1><p font-medium="" text-base="" md-text-xl="">Blazing fast Neovim config providing solid defaults and a beautiful UI</p></div>',6),Hl=g('<div class="grid shadow-md p-10 pb-15 pt-0 justify-center rounded-none bg-gradient-to-r from-blue-3 to-blue-5 dark:bg-gradient-to-r dark:from-red-4  dark:to-violet-4"><div><img src="/banner.webp" alt="NvChad screenshot" class="rounded-lg md:rounded-xl max-w-[90vw] 2xl:max-w-[1700px] softshadow m-auto"></div></div>',5);function Wl(){const t="vertCentered bg-onedark w-fit p-3 px-4 rounded-full";return(()=>{const e=Fl.cloneNode(!0);return _(e,p(D,{href:"/docs/quickstart/install",class:t,get children(){return[Bl.cloneNode(!0)," Install"]}}),null),_(e,p(D,{href:"/docs/quickstart/install",class:t,onclick:()=>Qn("Docker"),get children(){return[Ul.cloneNode(!0)," Docker"]}}),null),e})()}function Gl(){return(()=>{const t=Xl.cloneNode(!0);return t.firstChild.nextSibling,_(t,p(Wl,{}),null),t})()}function Yl(){return(()=>{const t=Hl.cloneNode(!0),e=t.firstChild;return _(t,p(Gl,{}),e),t})()}const Kl=g('<div class="grid gap-5 text-center justify-center rounded-2xl p-10 h-fit"><div w-fit="" bg-dark-3="" text-white-1="" rounded-full="" mx-auto="" shadow-md=""><div text="5xl xl:7xl" m-5=""></div></div><div grid=""><h2 mb-2="" whitespace-nowrap=""></h2><p text-lg="" dark-text-slate-4=""></p></div></div>',12),Zl=g('<section max="w-[1700px]" m-auto="" grid="" justify-center="" text-center="" my-20="" px-5=""><div grid="" md-grid-cols-2="" lg-grid-cols-3=""></div></section>',4),Jl=[{title:"Fast by default",icon:"i-fluent:rocket-20-regular text-yellow-2",description:` 
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
    `}];function Ql(t){const{details:e}=t;return(()=>{const i=Kl.cloneNode(!0),l=i.firstChild,s=l.firstChild,o=l.nextSibling,c=o.firstChild,h=c.nextSibling;return _(c,()=>e.title),_(h,()=>e.description),E(()=>I(s,`${e.icon}`)),i})()}function es(){return(()=>{const t=Zl.cloneNode(!0),e=t.firstChild;return _(e,()=>Jl.map((i,l)=>p(Ql,{key:l,details:i}))),t})()}const ns=g('<div grid="" gap-0="" id="community"><h3 text-start="" font-normal="">Communities</h3><div flex="" gap-5="" bg="dark-4 dark:dark-3" p="3 x-4"></div></div>',6),ts=g('<a capitalize vertcentered=""><div text-2xl="" rounded-none=""></div></a>',4),is=g('<div bg="dark-2 dark:dark-1" text-white-1="" rounded-none=""><div p-10="" grid="" gap-10="" max="w-[1700px]" mx-auto="" text-center=""><div class="grid gap-10 mx-auto md:mx-0 md:flex md:justify-between"><div grid="" text-start=""><p text-lg="">Powered by Github pages</p><div flex="" vertcentered="" justify-center="" bg="dark-4 dark:dark-3" p="3 x-4"><div i-logos-solidjs-icon=""></div> Solidjs + <div i-simple-icons-unocss="" rounded-none=""></div> Unocss</div></div></div><div grid="" gap-5="" h-fit="" py-10="" rounded-none="" border="0 t-2 solid dark-4"><div mx-auto="" capitalize vertcentered="" text-2xl="" font-semibold=""><img src="/logo.svg" alt="nvchad logo" w="33px" h="33px">NvChad</div><span dark-text-white-2="">Copyright © 2023 Siduck™</span></div></div></div>',23),ls=[["github discussions","i-mdi:github","https://github.com/NvChad/NvChad/discussions"],["discord server","i-ic:baseline-discord text-indigo-4","https://discord.com/invite/gADmkJb9Fb"],["youtube channel","i-ph:youtube-logo-fill text-red-4","https://www.youtube.com/@siduck_og"],["telegram group","i-uil:telegram text-sky-3","https://t.me/nvchad_tg"],["matrix space","i-cib:matrix text-emerald-3","https://matrix.to/#/#nvchad:matrix.org"]];function ss(){return(()=>{const t=ns.cloneNode(!0),e=t.firstChild,i=e.nextSibling;return _(i,()=>ls.map(l=>(()=>{const s=ts.cloneNode(!0),o=s.firstChild;return E(c=>{const h=l[2],u=l[0],d=l[1];return h!==c._v$&&V(s,"href",c._v$=h),u!==c._v$2&&V(s,"aria-label",c._v$2=u),d!==c._v$3&&I(o,c._v$3=d),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})())),t})()}function rs(){return(()=>{const t=is.cloneNode(!0),e=t.firstChild,i=e.firstChild;return i.firstChild,_(i,p(ss,{}),null),t})()}function as(){return[p(Yl,{}),p(es,{}),p(rs,{})]}let fe=[];Ke.forEach(t=>{t.label?fe=[...fe,...t.items]:fe.push(t)});function os(){return b(()=>fe.map(t=>p(G,{get path(){return t[1]},get component(){return typeof t[2]!="string"?t[2]:t[3]}})))}const cs="modulepreload",hs=function(t){return"/"+t},xn={},r=function(e,i,l){if(!i||i.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=hs(o),o in xn)return;xn[o]=!0;const c=o.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!l)for(let m=s.length-1;m>=0;m--){const f=s[m];if(f.href===o&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":cs,c||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),c)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},ds=g('<div flex="" justify-between="" gap-2=""><div flex="" flex-wrap="" gap-3=""></div><div flex="" h-fit=""><button bg="white-1" border="solid 1 blue-3 dark:dark-4 r-0" rounded-r-none=""><div i-ri-layout-grid-line="" rounded-none=""></div> Grid</button><button class="rounded-l-none text-slate-7 dark:text-blue-4" bg="blue-2 dark:dark-4"><div></div></button></div></div>',14),us=g('<button class="gap-2 justify-start capitalize px-3"><div></div> </button>',4),ms=g('<div i-bi-toggle2-on="" text-xl=""></div>',2),ps=g('<div i-bi-toggle2-off="" text-xl=""></div>',2),_s=g("<div></div>",2),gs=g('<div softshadow="" grid="" relative=""><img loading="lazy" rounded="lg" shadow-b-md width="2560" height="1440"><div font-medium="" capitalize="" p="2 x-3"></div></div>',5),fs=g('<div top-0="" left-0="" sticky=""><button class="px-3 my-6 mx-auto bg-red-4 text-white-1 dark:text-red-3"><div i-ion-close=""></div>Close</button><img class="z-[9999] rounded-lg softShadow h-auto w-full"></div>',7),bs=g('<div class="max-w-[1700px] mx-auto"></div>',2),vs=g('<div grid="" class="gap-5 my-6" p="x-4 2xl:0"></div>',2),he=[{lang:"python",icon:"i-mdi:language-python",images:Object.assign({"../../public/themes/python/aquarium.webp":()=>r(()=>import("./aquarium-74dedd13.js"),[]),"../../public/themes/python/ashes.webp":()=>r(()=>import("./ashes-a4a707ae.js"),[]),"../../public/themes/python/ayu_dark.webp":()=>r(()=>import("./ayu_dark-f0506b50.js"),[]),"../../public/themes/python/ayu_light.webp":()=>r(()=>import("./ayu_light-c28eabec.js"),[]),"../../public/themes/python/bearded-arc.webp":()=>r(()=>import("./bearded-arc-ea55d46d.js"),[]),"../../public/themes/python/blossom_light.webp":()=>r(()=>import("./blossom_light-84695b66.js"),[]),"../../public/themes/python/catppuccin.webp":()=>r(()=>import("./catppuccin-fc3c962e.js"),[]),"../../public/themes/python/chadracula.webp":()=>r(()=>import("./chadracula-c6492268.js"),[]),"../../public/themes/python/chadtain.webp":()=>r(()=>import("./chadtain-9f308266.js"),[]),"../../public/themes/python/chocolate.webp":()=>r(()=>import("./chocolate-a4733bc9.js"),[]),"../../public/themes/python/dark_horizon.webp":()=>r(()=>import("./dark_horizon-7ed05867.js"),[]),"../../public/themes/python/decay.webp":()=>r(()=>import("./decay-269eeca6.js"),[]),"../../public/themes/python/doomchad.webp":()=>r(()=>import("./doomchad-222e3e27.js"),[]),"../../public/themes/python/everblush.webp":()=>r(()=>import("./everblush-7a3b982c.js"),[]),"../../public/themes/python/everforest.webp":()=>r(()=>import("./everforest-23778990.js"),[]),"../../public/themes/python/everforest_light.webp":()=>r(()=>import("./everforest_light-db5c9ee2.js"),[]),"../../public/themes/python/falcon.webp":()=>r(()=>import("./falcon-cd8384fd.js"),[]),"../../public/themes/python/gatekeeper.webp":()=>r(()=>import("./gatekeeper-3bb1f088.js"),[]),"../../public/themes/python/github_dark.webp":()=>r(()=>import("./github_dark-c7b48faf.js"),[]),"../../public/themes/python/github_light.webp":()=>r(()=>import("./github_light-0441e37f.js"),[]),"../../public/themes/python/gruvbox.webp":()=>r(()=>import("./gruvbox-e3e694fb.js"),[]),"../../public/themes/python/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-31f1a30e.js"),[]),"../../public/themes/python/gruvchad.webp":()=>r(()=>import("./gruvchad-56210f57.js"),[]),"../../public/themes/python/jellybeans.webp":()=>r(()=>import("./jellybeans-0ac9e9d3.js"),[]),"../../public/themes/python/kanagawa.webp":()=>r(()=>import("./kanagawa-b9e2a166.js"),[]),"../../public/themes/python/melange.webp":()=>r(()=>import("./melange-fec0dd06.js"),[]),"../../public/themes/python/monekai.webp":()=>r(()=>import("./monekai-73e7c5cb.js"),[]),"../../public/themes/python/monochrome.webp":()=>r(()=>import("./monochrome-7451e9fb.js"),[]),"../../public/themes/python/mountain.webp":()=>r(()=>import("./mountain-2e792d74.js"),[]),"../../public/themes/python/nightfox.webp":()=>r(()=>import("./nightfox-bad2979e.js"),[]),"../../public/themes/python/nightlamp.webp":()=>r(()=>import("./nightlamp-afddfad2.js"),[]),"../../public/themes/python/nightowl.webp":()=>r(()=>import("./nightowl-812e880c.js"),[]),"../../public/themes/python/nord.webp":()=>r(()=>import("./nord-28ddb6d1.js"),[]),"../../public/themes/python/oceanic-light.webp":()=>r(()=>import("./oceanic-light-8b40f883.js"),[]),"../../public/themes/python/oceanic-next.webp":()=>r(()=>import("./oceanic-next-59e96a72.js"),[]),"../../public/themes/python/one_light.webp":()=>r(()=>import("./one_light-92e9415f.js"),[]),"../../public/themes/python/onedark.webp":()=>r(()=>import("./onedark-5e745895.js"),[]),"../../public/themes/python/onenord.webp":()=>r(()=>import("./onenord-4f830304.js"),[]),"../../public/themes/python/onenord_light.webp":()=>r(()=>import("./onenord_light-1ad500f6.js"),[]),"../../public/themes/python/oxocarbon.webp":()=>r(()=>import("./oxocarbon-4699c8c7.js"),[]),"../../public/themes/python/palenight.webp":()=>r(()=>import("./palenight-b540d812.js"),[]),"../../public/themes/python/pastelDark.webp":()=>r(()=>import("./pastelDark-86799382.js"),[]),"../../public/themes/python/pastelbeans.webp":()=>r(()=>import("./pastelbeans-46f65e6a.js"),[]),"../../public/themes/python/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-6e5a9033.js"),[]),"../../public/themes/python/penumbra_light.webp":()=>r(()=>import("./penumbra_light-909386c1.js"),[]),"../../public/themes/python/radium.webp":()=>r(()=>import("./radium-049d0c3e.js"),[]),"../../public/themes/python/rosepine.webp":()=>r(()=>import("./rosepine-205964b3.js"),[]),"../../public/themes/python/rxyhn.webp":()=>r(()=>import("./rxyhn-64b637c9.js"),[]),"../../public/themes/python/solarized_dark.webp":()=>r(()=>import("./solarized_dark-b40edc59.js"),[]),"../../public/themes/python/sweetpastel.webp":()=>r(()=>import("./sweetpastel-d9dd21ad.js"),[]),"../../public/themes/python/tokyodark.webp":()=>r(()=>import("./tokyodark-9321c9ad.js"),[]),"../../public/themes/python/tokyonight.webp":()=>r(()=>import("./tokyonight-5478939b.js"),[]),"../../public/themes/python/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-4c5069dd.js"),[]),"../../public/themes/python/tundra.webp":()=>r(()=>import("./tundra-3f6dbea0.js"),[]),"../../public/themes/python/vscode_dark.webp":()=>r(()=>import("./vscode_dark-d7e0dca4.js"),[]),"../../public/themes/python/wombat.webp":()=>r(()=>import("./wombat-5296ed0f.js"),[]),"../../public/themes/python/yoru.webp":()=>r(()=>import("./yoru-7a959406.js"),[])})},{lang:"javascript",icon:"i-skill-icons:javascript",images:Object.assign({"../../public/themes/javascript/aquarium.webp":()=>r(()=>import("./aquarium-4b7ded2b.js"),[]),"../../public/themes/javascript/ashes.webp":()=>r(()=>import("./ashes-5616f808.js"),[]),"../../public/themes/javascript/ayu_dark.webp":()=>r(()=>import("./ayu_dark-d96dde39.js"),[]),"../../public/themes/javascript/ayu_light.webp":()=>r(()=>import("./ayu_light-8184137d.js"),[]),"../../public/themes/javascript/bearded-arc.webp":()=>r(()=>import("./bearded-arc-b85fdd2a.js"),[]),"../../public/themes/javascript/blossom_light.webp":()=>r(()=>import("./blossom_light-0cc7096b.js"),[]),"../../public/themes/javascript/catppuccin.webp":()=>r(()=>import("./catppuccin-6dbbf92f.js"),[]),"../../public/themes/javascript/chadracula.webp":()=>r(()=>import("./chadracula-b06dc0df.js"),[]),"../../public/themes/javascript/chadtain.webp":()=>r(()=>import("./chadtain-6e85474c.js"),[]),"../../public/themes/javascript/chocolate.webp":()=>r(()=>import("./chocolate-11dab7a8.js"),[]),"../../public/themes/javascript/dark_horizon.webp":()=>r(()=>import("./dark_horizon-6ecfa109.js"),[]),"../../public/themes/javascript/decay.webp":()=>r(()=>import("./decay-8ce13829.js"),[]),"../../public/themes/javascript/doomchad.webp":()=>r(()=>import("./doomchad-758b2cbf.js"),[]),"../../public/themes/javascript/everblush.webp":()=>r(()=>import("./everblush-0e9644a0.js"),[]),"../../public/themes/javascript/everforest.webp":()=>r(()=>import("./everforest-f0d61a78.js"),[]),"../../public/themes/javascript/everforest_light.webp":()=>r(()=>import("./everforest_light-948f0361.js"),[]),"../../public/themes/javascript/falcon.webp":()=>r(()=>import("./falcon-be09118c.js"),[]),"../../public/themes/javascript/gatekeeper.webp":()=>r(()=>import("./gatekeeper-c085b211.js"),[]),"../../public/themes/javascript/github_dark.webp":()=>r(()=>import("./github_dark-4268e315.js"),[]),"../../public/themes/javascript/github_light.webp":()=>r(()=>import("./github_light-d282f7a5.js"),[]),"../../public/themes/javascript/gruvbox.webp":()=>r(()=>import("./gruvbox-035c5621.js"),[]),"../../public/themes/javascript/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-9dfe81ef.js"),[]),"../../public/themes/javascript/gruvchad.webp":()=>r(()=>import("./gruvchad-027ba1d0.js"),[]),"../../public/themes/javascript/jellybeans.webp":()=>r(()=>import("./jellybeans-d8e55c0c.js"),[]),"../../public/themes/javascript/kanagawa.webp":()=>r(()=>import("./kanagawa-be0542a4.js"),[]),"../../public/themes/javascript/melange.webp":()=>r(()=>import("./melange-6c46e3af.js"),[]),"../../public/themes/javascript/monekai.webp":()=>r(()=>import("./monekai-454fd898.js"),[]),"../../public/themes/javascript/monochrome.webp":()=>r(()=>import("./monochrome-1e0424a5.js"),[]),"../../public/themes/javascript/mountain.webp":()=>r(()=>import("./mountain-eb325224.js"),[]),"../../public/themes/javascript/nightfox.webp":()=>r(()=>import("./nightfox-6ab044b8.js"),[]),"../../public/themes/javascript/nightlamp.webp":()=>r(()=>import("./nightlamp-53ae3410.js"),[]),"../../public/themes/javascript/nightowl.webp":()=>r(()=>import("./nightowl-306b6922.js"),[]),"../../public/themes/javascript/nord.webp":()=>r(()=>import("./nord-62133c00.js"),[]),"../../public/themes/javascript/oceanic-light.webp":()=>r(()=>import("./oceanic-light-d98c9309.js"),[]),"../../public/themes/javascript/oceanic-next.webp":()=>r(()=>import("./oceanic-next-943a6018.js"),[]),"../../public/themes/javascript/one_light.webp":()=>r(()=>import("./one_light-d1b9c6e7.js"),[]),"../../public/themes/javascript/onedark.webp":()=>r(()=>import("./onedark-3b595fe2.js"),[]),"../../public/themes/javascript/onenord.webp":()=>r(()=>import("./onenord-f6116a9b.js"),[]),"../../public/themes/javascript/onenord_light.webp":()=>r(()=>import("./onenord_light-51fac2af.js"),[]),"../../public/themes/javascript/oxocarbon.webp":()=>r(()=>import("./oxocarbon-3767eaca.js"),[]),"../../public/themes/javascript/palenight.webp":()=>r(()=>import("./palenight-c548f792.js"),[]),"../../public/themes/javascript/pastelDark.webp":()=>r(()=>import("./pastelDark-6a2d75c0.js"),[]),"../../public/themes/javascript/pastelbeans.webp":()=>r(()=>import("./pastelbeans-ab88b5ec.js"),[]),"../../public/themes/javascript/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-c26fd7fe.js"),[]),"../../public/themes/javascript/penumbra_light.webp":()=>r(()=>import("./penumbra_light-48613b06.js"),[]),"../../public/themes/javascript/radium.webp":()=>r(()=>import("./radium-00eb39c4.js"),[]),"../../public/themes/javascript/rosepine.webp":()=>r(()=>import("./rosepine-c24896cc.js"),[]),"../../public/themes/javascript/rxyhn.webp":()=>r(()=>import("./rxyhn-8b8659d9.js"),[]),"../../public/themes/javascript/solarized_dark.webp":()=>r(()=>import("./solarized_dark-8fc5d170.js"),[]),"../../public/themes/javascript/sweetpastel.webp":()=>r(()=>import("./sweetpastel-afafef6b.js"),[]),"../../public/themes/javascript/tokyodark.webp":()=>r(()=>import("./tokyodark-dd19b8fa.js"),[]),"../../public/themes/javascript/tokyonight.webp":()=>r(()=>import("./tokyonight-737b12c7.js"),[]),"../../public/themes/javascript/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-a0686b5d.js"),[]),"../../public/themes/javascript/tundra.webp":()=>r(()=>import("./tundra-dc3c6747.js"),[]),"../../public/themes/javascript/vscode_dark.webp":()=>r(()=>import("./vscode_dark-d1d335d8.js"),[]),"../../public/themes/javascript/wombat.webp":()=>r(()=>import("./wombat-dbaf52b8.js"),[]),"../../public/themes/javascript/yoru.webp":()=>r(()=>import("./yoru-f43ca1f8.js"),[])})},{lang:"haskell",icon:"i-logos:haskell-icon",images:Object.assign({"../../public/themes/haskell/aquarium.webp":()=>r(()=>import("./aquarium-7ef6ad5d.js"),[]),"../../public/themes/haskell/ashes.webp":()=>r(()=>import("./ashes-7115b8c1.js"),[]),"../../public/themes/haskell/ayu_dark.webp":()=>r(()=>import("./ayu_dark-288a8a6b.js"),[]),"../../public/themes/haskell/ayu_light.webp":()=>r(()=>import("./ayu_light-2defdf6e.js"),[]),"../../public/themes/haskell/bearded-arc.webp":()=>r(()=>import("./bearded-arc-fbc1d8df.js"),[]),"../../public/themes/haskell/blossom_light.webp":()=>r(()=>import("./blossom_light-8580ab2e.js"),[]),"../../public/themes/haskell/catppuccin.webp":()=>r(()=>import("./catppuccin-6f21c967.js"),[]),"../../public/themes/haskell/chadracula.webp":()=>r(()=>import("./chadracula-7e04c6ff.js"),[]),"../../public/themes/haskell/chadtain.webp":()=>r(()=>import("./chadtain-b6242b79.js"),[]),"../../public/themes/haskell/chocolate.webp":()=>r(()=>import("./chocolate-a63ca3e9.js"),[]),"../../public/themes/haskell/dark_horizon.webp":()=>r(()=>import("./dark_horizon-ee14c26b.js"),[]),"../../public/themes/haskell/decay.webp":()=>r(()=>import("./decay-b8f3c33a.js"),[]),"../../public/themes/haskell/doomchad.webp":()=>r(()=>import("./doomchad-6a685f1d.js"),[]),"../../public/themes/haskell/everblush.webp":()=>r(()=>import("./everblush-48272693.js"),[]),"../../public/themes/haskell/everforest.webp":()=>r(()=>import("./everforest-22f0aa61.js"),[]),"../../public/themes/haskell/everforest_light.webp":()=>r(()=>import("./everforest_light-4871ff92.js"),[]),"../../public/themes/haskell/falcon.webp":()=>r(()=>import("./falcon-1f08f98d.js"),[]),"../../public/themes/haskell/gatekeeper.webp":()=>r(()=>import("./gatekeeper-4568dda4.js"),[]),"../../public/themes/haskell/github_dark.webp":()=>r(()=>import("./github_dark-3b7bf2ec.js"),[]),"../../public/themes/haskell/github_light.webp":()=>r(()=>import("./github_light-8b9de068.js"),[]),"../../public/themes/haskell/gruvbox.webp":()=>r(()=>import("./gruvbox-a0006b37.js"),[]),"../../public/themes/haskell/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-3decf187.js"),[]),"../../public/themes/haskell/gruvchad.webp":()=>r(()=>import("./gruvchad-b8c53bff.js"),[]),"../../public/themes/haskell/jellybeans.webp":()=>r(()=>import("./jellybeans-3047d2e2.js"),[]),"../../public/themes/haskell/kanagawa.webp":()=>r(()=>import("./kanagawa-31314ab7.js"),[]),"../../public/themes/haskell/melange.webp":()=>r(()=>import("./melange-579482fb.js"),[]),"../../public/themes/haskell/monekai.webp":()=>r(()=>import("./monekai-28d01266.js"),[]),"../../public/themes/haskell/monochrome.webp":()=>r(()=>import("./monochrome-3e44c85c.js"),[]),"../../public/themes/haskell/mountain.webp":()=>r(()=>import("./mountain-23d4425c.js"),[]),"../../public/themes/haskell/nightfox.webp":()=>r(()=>import("./nightfox-12105ff8.js"),[]),"../../public/themes/haskell/nightlamp.webp":()=>r(()=>import("./nightlamp-d8ef912f.js"),[]),"../../public/themes/haskell/nightowl.webp":()=>r(()=>import("./nightowl-6bb3bcc7.js"),[]),"../../public/themes/haskell/nord.webp":()=>r(()=>import("./nord-e3001f62.js"),[]),"../../public/themes/haskell/oceanic-light.webp":()=>r(()=>import("./oceanic-light-97db3f14.js"),[]),"../../public/themes/haskell/oceanic-next.webp":()=>r(()=>import("./oceanic-next-95f97e0c.js"),[]),"../../public/themes/haskell/one_light.webp":()=>r(()=>import("./one_light-1282ece6.js"),[]),"../../public/themes/haskell/onedark.webp":()=>r(()=>import("./onedark-098d4746.js"),[]),"../../public/themes/haskell/onenord.webp":()=>r(()=>import("./onenord-315639c9.js"),[]),"../../public/themes/haskell/onenord_light.webp":()=>r(()=>import("./onenord_light-fe8ce406.js"),[]),"../../public/themes/haskell/oxocarbon.webp":()=>r(()=>import("./oxocarbon-a14ce70a.js"),[]),"../../public/themes/haskell/palenight.webp":()=>r(()=>import("./palenight-62a55c54.js"),[]),"../../public/themes/haskell/pastelDark.webp":()=>r(()=>import("./pastelDark-cc41f5e9.js"),[]),"../../public/themes/haskell/pastelbeans.webp":()=>r(()=>import("./pastelbeans-63c4cfb1.js"),[]),"../../public/themes/haskell/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-937444ed.js"),[]),"../../public/themes/haskell/penumbra_light.webp":()=>r(()=>import("./penumbra_light-a6a4ed90.js"),[]),"../../public/themes/haskell/radium.webp":()=>r(()=>import("./radium-756d7625.js"),[]),"../../public/themes/haskell/rosepine.webp":()=>r(()=>import("./rosepine-2d479977.js"),[]),"../../public/themes/haskell/rxyhn.webp":()=>r(()=>import("./rxyhn-e464412c.js"),[]),"../../public/themes/haskell/solarized_dark.webp":()=>r(()=>import("./solarized_dark-14046b1b.js"),[]),"../../public/themes/haskell/sweetpastel.webp":()=>r(()=>import("./sweetpastel-5a6985c7.js"),[]),"../../public/themes/haskell/tokyodark.webp":()=>r(()=>import("./tokyodark-99f04006.js"),[]),"../../public/themes/haskell/tokyonight.webp":()=>r(()=>import("./tokyonight-26165f6b.js"),[]),"../../public/themes/haskell/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-58ee613f.js"),[]),"../../public/themes/haskell/tundra.webp":()=>r(()=>import("./tundra-9b8f7ed1.js"),[]),"../../public/themes/haskell/vscode_dark.webp":()=>r(()=>import("./vscode_dark-c7820de5.js"),[]),"../../public/themes/haskell/wombat.webp":()=>r(()=>import("./wombat-76842c86.js"),[]),"../../public/themes/haskell/yoru.webp":()=>r(()=>import("./yoru-512ac34f.js"),[])})},{lang:"c",icon:"i-logos:c-plusplus",images:Object.assign({"../../public/themes/c/aquarium.webp":()=>r(()=>import("./aquarium-673fc1a5.js"),[]),"../../public/themes/c/ashes.webp":()=>r(()=>import("./ashes-0f66c4b5.js"),[]),"../../public/themes/c/ayu_dark.webp":()=>r(()=>import("./ayu_dark-57d91970.js"),[]),"../../public/themes/c/ayu_light.webp":()=>r(()=>import("./ayu_light-a2408ead.js"),[]),"../../public/themes/c/bearded-arc.webp":()=>r(()=>import("./bearded-arc-a551bd9e.js"),[]),"../../public/themes/c/blossom_light.webp":()=>r(()=>import("./blossom_light-cfce2046.js"),[]),"../../public/themes/c/catppuccin.webp":()=>r(()=>import("./catppuccin-e008f172.js"),[]),"../../public/themes/c/chadracula.webp":()=>r(()=>import("./chadracula-c1986b0d.js"),[]),"../../public/themes/c/chadtain.webp":()=>r(()=>import("./chadtain-d4cb0d5e.js"),[]),"../../public/themes/c/chocolate.webp":()=>r(()=>import("./chocolate-ed698b0c.js"),[]),"../../public/themes/c/dark_horizon.webp":()=>r(()=>import("./dark_horizon-4b193d74.js"),[]),"../../public/themes/c/decay.webp":()=>r(()=>import("./decay-7747315b.js"),[]),"../../public/themes/c/doomchad.webp":()=>r(()=>import("./doomchad-869d22fb.js"),[]),"../../public/themes/c/everblush.webp":()=>r(()=>import("./everblush-bc0d8929.js"),[]),"../../public/themes/c/everforest.webp":()=>r(()=>import("./everforest-42e3b464.js"),[]),"../../public/themes/c/everforest_light.webp":()=>r(()=>import("./everforest_light-6df01089.js"),[]),"../../public/themes/c/falcon.webp":()=>r(()=>import("./falcon-dee23268.js"),[]),"../../public/themes/c/gatekeeper.webp":()=>r(()=>import("./gatekeeper-d0a47c2d.js"),[]),"../../public/themes/c/github_dark.webp":()=>r(()=>import("./github_dark-5c77b59c.js"),[]),"../../public/themes/c/github_light.webp":()=>r(()=>import("./github_light-d56c47fb.js"),[]),"../../public/themes/c/gruvbox.webp":()=>r(()=>import("./gruvbox-34133ba4.js"),[]),"../../public/themes/c/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-d111d414.js"),[]),"../../public/themes/c/gruvchad.webp":()=>r(()=>import("./gruvchad-9b94427c.js"),[]),"../../public/themes/c/jellybeans.webp":()=>r(()=>import("./jellybeans-b8ef9df0.js"),[]),"../../public/themes/c/kanagawa.webp":()=>r(()=>import("./kanagawa-b3e16494.js"),[]),"../../public/themes/c/melange.webp":()=>r(()=>import("./melange-7b041f0f.js"),[]),"../../public/themes/c/monekai.webp":()=>r(()=>import("./monekai-711d4996.js"),[]),"../../public/themes/c/monochrome.webp":()=>r(()=>import("./monochrome-cbc08b3f.js"),[]),"../../public/themes/c/mountain.webp":()=>r(()=>import("./mountain-76fc3822.js"),[]),"../../public/themes/c/nightfox.webp":()=>r(()=>import("./nightfox-c7d22fbf.js"),[]),"../../public/themes/c/nightlamp.webp":()=>r(()=>import("./nightlamp-03447d56.js"),[]),"../../public/themes/c/nightowl.webp":()=>r(()=>import("./nightowl-1bb8ad69.js"),[]),"../../public/themes/c/nord.webp":()=>r(()=>import("./nord-50c3235a.js"),[]),"../../public/themes/c/oceanic-light.webp":()=>r(()=>import("./oceanic-light-66b43b27.js"),[]),"../../public/themes/c/oceanic-next.webp":()=>r(()=>import("./oceanic-next-70e82c50.js"),[]),"../../public/themes/c/one_light.webp":()=>r(()=>import("./one_light-d2ff5360.js"),[]),"../../public/themes/c/onedark.webp":()=>r(()=>import("./onedark-c3d247a4.js"),[]),"../../public/themes/c/onenord.webp":()=>r(()=>import("./onenord-54136902.js"),[]),"../../public/themes/c/onenord_light.webp":()=>r(()=>import("./onenord_light-c6df4c62.js"),[]),"../../public/themes/c/oxocarbon.webp":()=>r(()=>import("./oxocarbon-c76cea3f.js"),[]),"../../public/themes/c/palenight.webp":()=>r(()=>import("./palenight-4881bada.js"),[]),"../../public/themes/c/pastelDark.webp":()=>r(()=>import("./pastelDark-7d5654c2.js"),[]),"../../public/themes/c/pastelbeans.webp":()=>r(()=>import("./pastelbeans-1cb89af6.js"),[]),"../../public/themes/c/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-47c26cfd.js"),[]),"../../public/themes/c/penumbra_light.webp":()=>r(()=>import("./penumbra_light-90b0493b.js"),[]),"../../public/themes/c/radium.webp":()=>r(()=>import("./radium-700e85ea.js"),[]),"../../public/themes/c/rosepine.webp":()=>r(()=>import("./rosepine-89c63629.js"),[]),"../../public/themes/c/rxyhn.webp":()=>r(()=>import("./rxyhn-a79ca07f.js"),[]),"../../public/themes/c/solarized_dark.webp":()=>r(()=>import("./solarized_dark-d308446c.js"),[]),"../../public/themes/c/sweetpastel.webp":()=>r(()=>import("./sweetpastel-748868ea.js"),[]),"../../public/themes/c/tokyodark.webp":()=>r(()=>import("./tokyodark-bf92a975.js"),[]),"../../public/themes/c/tokyonight.webp":()=>r(()=>import("./tokyonight-2e708b30.js"),[]),"../../public/themes/c/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-d35da3aa.js"),[]),"../../public/themes/c/tundra.webp":()=>r(()=>import("./tundra-3b6a9aa1.js"),[]),"../../public/themes/c/vscode_dark.webp":()=>r(()=>import("./vscode_dark-9f441afd.js"),[]),"../../public/themes/c/wombat.webp":()=>r(()=>import("./wombat-dd894b02.js"),[]),"../../public/themes/c/yoru.webp":()=>r(()=>import("./yoru-177e352b.js"),[])})},{lang:"lua",icon:"i-logos:lua dark:i-skill-icons:lua-light",images:Object.assign({"../../public/themes/lua/aquarium.webp":()=>r(()=>import("./aquarium-dc9843c4.js"),[]),"../../public/themes/lua/ashes.webp":()=>r(()=>import("./ashes-abde8286.js"),[]),"../../public/themes/lua/ayu_dark.webp":()=>r(()=>import("./ayu_dark-6f9e218e.js"),[]),"../../public/themes/lua/ayu_light.webp":()=>r(()=>import("./ayu_light-7769a34b.js"),[]),"../../public/themes/lua/bearded-arc.webp":()=>r(()=>import("./bearded-arc-cb958592.js"),[]),"../../public/themes/lua/blossom_light.webp":()=>r(()=>import("./blossom_light-aab17382.js"),[]),"../../public/themes/lua/catppuccin.webp":()=>r(()=>import("./catppuccin-fc5074f0.js"),[]),"../../public/themes/lua/chadracula.webp":()=>r(()=>import("./chadracula-32e94b45.js"),[]),"../../public/themes/lua/chadtain.webp":()=>r(()=>import("./chadtain-58dfb808.js"),[]),"../../public/themes/lua/chocolate.webp":()=>r(()=>import("./chocolate-31df96db.js"),[]),"../../public/themes/lua/dark_horizon.webp":()=>r(()=>import("./dark_horizon-c9f79ccd.js"),[]),"../../public/themes/lua/decay.webp":()=>r(()=>import("./decay-200c3c26.js"),[]),"../../public/themes/lua/doomchad.webp":()=>r(()=>import("./doomchad-8f29924e.js"),[]),"../../public/themes/lua/everblush.webp":()=>r(()=>import("./everblush-cb65ae7e.js"),[]),"../../public/themes/lua/everforest.webp":()=>r(()=>import("./everforest-89bbadd2.js"),[]),"../../public/themes/lua/everforest_light.webp":()=>r(()=>import("./everforest_light-b21bd3ea.js"),[]),"../../public/themes/lua/falcon.webp":()=>r(()=>import("./falcon-61ca7eda.js"),[]),"../../public/themes/lua/gatekeeper.webp":()=>r(()=>import("./gatekeeper-2e519267.js"),[]),"../../public/themes/lua/github_dark.webp":()=>r(()=>import("./github_dark-e2112e45.js"),[]),"../../public/themes/lua/github_light.webp":()=>r(()=>import("./github_light-13976044.js"),[]),"../../public/themes/lua/gruvbox.webp":()=>r(()=>import("./gruvbox-c0a8f87e.js"),[]),"../../public/themes/lua/gruvbox_light.webp":()=>r(()=>import("./gruvbox_light-99f23ded.js"),[]),"../../public/themes/lua/gruvchad.webp":()=>r(()=>import("./gruvchad-b57784a0.js"),[]),"../../public/themes/lua/jellybeans.webp":()=>r(()=>import("./jellybeans-70019865.js"),[]),"../../public/themes/lua/kanagawa.webp":()=>r(()=>import("./kanagawa-9d5918f0.js"),[]),"../../public/themes/lua/melange.webp":()=>r(()=>import("./melange-fb3bc9be.js"),[]),"../../public/themes/lua/monekai.webp":()=>r(()=>import("./monekai-fe25c816.js"),[]),"../../public/themes/lua/monochrome.webp":()=>r(()=>import("./monochrome-0ebcacad.js"),[]),"../../public/themes/lua/mountain.webp":()=>r(()=>import("./mountain-7fa3d6f5.js"),[]),"../../public/themes/lua/nightfox.webp":()=>r(()=>import("./nightfox-1442f96e.js"),[]),"../../public/themes/lua/nightlamp.webp":()=>r(()=>import("./nightlamp-dba63257.js"),[]),"../../public/themes/lua/nightowl.webp":()=>r(()=>import("./nightowl-d1596a28.js"),[]),"../../public/themes/lua/nord.webp":()=>r(()=>import("./nord-3ec05804.js"),[]),"../../public/themes/lua/oceanic-light.webp":()=>r(()=>import("./oceanic-light-da75e90d.js"),[]),"../../public/themes/lua/oceanic-next.webp":()=>r(()=>import("./oceanic-next-c72f20e0.js"),[]),"../../public/themes/lua/one_light.webp":()=>r(()=>import("./one_light-7d005c09.js"),[]),"../../public/themes/lua/onedark.webp":()=>r(()=>import("./onedark-2a81cfdf.js"),[]),"../../public/themes/lua/onenord.webp":()=>r(()=>import("./onenord-8a5260d2.js"),[]),"../../public/themes/lua/onenord_light.webp":()=>r(()=>import("./onenord_light-f2a2b8e9.js"),[]),"../../public/themes/lua/oxocarbon.webp":()=>r(()=>import("./oxocarbon-a3324aa7.js"),[]),"../../public/themes/lua/palenight.webp":()=>r(()=>import("./palenight-e70f2e0c.js"),[]),"../../public/themes/lua/pastelDark.webp":()=>r(()=>import("./pastelDark-aa9bfafe.js"),[]),"../../public/themes/lua/pastelbeans.webp":()=>r(()=>import("./pastelbeans-9d0be9fa.js"),[]),"../../public/themes/lua/penumbra_dark.webp":()=>r(()=>import("./penumbra_dark-177cbe1d.js"),[]),"../../public/themes/lua/penumbra_light.webp":()=>r(()=>import("./penumbra_light-56fcc841.js"),[]),"../../public/themes/lua/radium.webp":()=>r(()=>import("./radium-c3c65602.js"),[]),"../../public/themes/lua/rosepine.webp":()=>r(()=>import("./rosepine-1bf3b3f3.js"),[]),"../../public/themes/lua/rxyhn.webp":()=>r(()=>import("./rxyhn-57365902.js"),[]),"../../public/themes/lua/solarized_dark.webp":()=>r(()=>import("./solarized_dark-07124bb6.js"),[]),"../../public/themes/lua/sweetpastel.webp":()=>r(()=>import("./sweetpastel-f30032c4.js"),[]),"../../public/themes/lua/tokyodark.webp":()=>r(()=>import("./tokyodark-b368d34b.js"),[]),"../../public/themes/lua/tokyonight.webp":()=>r(()=>import("./tokyonight-000adece.js"),[]),"../../public/themes/lua/tomorrow_night.webp":()=>r(()=>import("./tomorrow_night-24f87ed4.js"),[]),"../../public/themes/lua/tundra.webp":()=>r(()=>import("./tundra-d5ce75ba.js"),[]),"../../public/themes/lua/vscode_dark.webp":()=>r(()=>import("./vscode_dark-1379179e.js"),[]),"../../public/themes/lua/wombat.webp":()=>r(()=>import("./wombat-df3bd21f.js"),[]),"../../public/themes/lua/yoru.webp":()=>r(()=>import("./yoru-bb8398ea.js"),[])})}];he.map((t,e)=>{const i=t.images;let l=[];Object.keys(i).map(s=>{l.push(s.replace("../../public",""))}),he[e].images=l});const[ws,ys]=L("python"),[Ns,js]=L(he[0].images),[Ae,dt]=L(!0),[Es,ks]=L(""),[re,As]=L(!0);function Ls(){return(()=>{const t=ds.cloneNode(!0),e=t.firstChild,i=e.nextSibling,l=i.firstChild,s=l.nextSibling,o=s.firstChild;return _(e,()=>he.map(c=>(()=>{const h=us.cloneNode(!0),u=h.firstChild;return u.nextSibling,h.$$click=()=>{ys(c.lang);const d=he.find(m=>m.lang===c.lang)?.images;js(d)},_(h,()=>c.lang,null),E(d=>{const m=ws()==c.lang?"2 solid blue-5":"",f=c.icon;return m!==d._v$&&V(h,"border",d._v$=m),f!==d._v$2&&I(u,d._v$2=f),d},{_v$:void 0,_v$2:void 0}),h})())),s.$$click=()=>As(!re()),_(o,(()=>{const c=b(()=>!!re());return()=>c()&&ms.cloneNode(!0)})(),null),_(o,(()=>{const c=b(()=>!re());return()=>c()&&ps.cloneNode(!0)})(),null),t})()}function Ts(){return(()=>{const t=_s.cloneNode(!0);return _(t,()=>Ns().map(e=>{const l=(e?.split("/").pop()).split(".")[0],s=l.includes("light")?"light":"dark",o=re()?"top-0 right-0 rounded-br-none rounded-tl-none":"bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-none",c=s=="dark"?"bg-white-1 text-dark-3":" bg-dark-4 text-white-1";return(()=>{const h=gs.cloneNode(!0),u=h.firstChild,d=u.nextSibling;return u.$$click=()=>{ks(e),dt(!Ae())},V(u,"src",e),I(d,`absolute vertCentered justify-between ${o} ${c}`),_(d,l),h})()})),E(()=>I(t,`grid gap-6 [&_*]:max-w-[100%] [&_*]:h-auto ${re()?"lg:grid-cols-3 2xl:grid-cols-4":""}`)),t})()}function xs(){return(()=>{const t=fs.cloneNode(!0),e=t.firstChild,i=e.nextSibling;return e.$$click=()=>dt(!Ae()),E(()=>V(i,"src",Es())),t})()}function Os(){return(()=>{const t=bs.cloneNode(!0);return _(t,(()=>{const e=b(()=>!Ae());return()=>e()&&p(xs,{})})(),null),_(t,(()=>{const e=b(()=>!!Ae());return()=>e()&&(()=>{const i=vs.cloneNode(!0);return _(i,p(Ls,{}),null),_(i,p(Ts,{}),null),i})()})(),null),t})()}F(["click"]);function On(t){const e=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",a:"a"},t.components);return a("div",{id:"DocContent",class:"news",children:[n(e.h1,{children:"# Announcing NvChad v2.0"}),n(e.p,{children:n(e.img,{src:"/news/v2.0.webp",alt:"v2.0 poster"})}),a("div",{"my-10":"",children:[n(e.h2,{children:"Changelog"}),n(e.pre,{children:a(e.code,{className:"hljs language-lua",children:[`
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
`]})]})}function Is(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Pn,t)})):Pn(t)}const ut=[{heading:"NvChad v2.0 released!",details:"This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",component:p(Ps,{}),link:"/news/v2.0",cover:"v2.0.webp"},{heading:"Breaking changes in v2.0",details:"NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",component:p(Is,{}),link:"/news/v2.0_migration",cover:"v2.0_migration.svg"}],Ds=g('<div p="5 xl:10" class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div id="newsContent"></div></div>',4);function Rs(t){const{component:e}=t;return $n(()=>{const l=document.getElementById("newsContent")?.querySelectorAll("img");l&&l.forEach((s,o)=>{o!=0&&s.setAttribute("loading","lazy")}),window.addEventListener("scroll",()=>Y("newsContent"))}),Te(()=>window.removeEventListener("scroll",()=>Y("newsContent"))),Be(()=>{setTimeout(()=>{rt(),Y("newsContent"),at()},50)}),(()=>{const i=Ds.cloneNode(!0),l=i.firstChild;return _(l,e),_(i,(()=>{const s=b(()=>Je.length>1);return()=>s()&&p(ot,{})})(),null),i})()}function $s(){return b(()=>ut.map(t=>p(G,{get path(){return t.link},get element(){return p(Rs,{get component(){return t.component}})}})))}const Cs=g('<div m="y-5 xl:y-10 x-auto" px-3="" max="w-[1700px]"><div grid="" gap-5="" class="md:grid-cols-2 2xl:grid-cols-3"></div></div>',4),Vs=g('<button bg-blue-6="" text-white-1="" dark-bg-blue-3="" dark-text-dark-1="" px-5="">read more</button>',2),Ss=g('<div border="slate 0 dark:dark-4 solid" class="shadow-xl flex flex-col  gap-4 items-start" bg="dark:dark-3"><img w-full="" rounded-t-lg="" loading="lazy"><div h-full="" flex="" flex-col="" gap-10="" justify-between="" p-10="" pt-5=""><div><h2 class="m-0" pb-5=""></h2><p text-lg="" class="m-0 p-0"></p></div></div></div>',11);function Ms(){return(()=>{const t=Cs.cloneNode(!0),e=t.firstChild;return _(e,()=>ut.map(i=>(()=>{const l=Ss.cloneNode(!0),s=l.firstChild,o=s.nextSibling,c=o.firstChild,h=c.firstChild,u=h.nextSibling;return _(h,()=>i.heading),_(u,()=>i.details),_(o,p(D,{get href(){return i.link},get children(){return Vs.cloneNode(!0)}}),null),E(()=>V(s,"src",`/news/${i.cover}`)),l})())),t})()}function zs(){return[p(ql,{}),p(yi,{get children(){return[p(G,{path:"/",component:as}),p(G,{path:"/docs",component:Ll,get children(){return p(os,{})}}),p(G,{path:"/themes",component:Os}),p(G,{path:"/news",component:Ms}),p($s,{})]}})]}const qs=document.getElementById("app"),Bs=document.querySelector("html");Bs.className=localStorage.theme||"light";Ct(()=>p(wi,{get children(){return p(zs,{})}}),qs);
