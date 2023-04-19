!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(t="undefined"!=typeof globalThis?globalThis:t||self).DemoPreloader=a()}(this,(function(){"use strict";function t(){}const a=t=>t;function e(t){return t()}function i(){return Object.create(null)}function n(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,a){return t!=t?a==a:t!==a||t&&"object"==typeof t||"function"==typeof t}const d="undefined"!=typeof window;let r=d?()=>window.performance.now():()=>Date.now(),l=d?t=>requestAnimationFrame(t):t;const c=new Set;function h(t){c.forEach((a=>{a.c(t)||(c.delete(a),a.f())})),0!==c.size&&l(h)}function u(t,a){t.appendChild(a)}function f(t){if(!t)return document;const a=t.getRootNode?t.getRootNode():t.ownerDocument;return a&&a.host?a:t.ownerDocument}function p(t){const a=g("style");return function(t,a){u(t.head||t,a),a.sheet}(f(t),a),a.sheet}function m(t,a,e){t.insertBefore(a,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function _(t,a,e,i){return t.addEventListener(a,e,i),()=>t.removeEventListener(a,e,i)}function $(t,a,e){null==e?t.removeAttribute(a):t.getAttribute(a)!==e&&t.setAttribute(a,e)}function b(t,a,e,i){null===e?t.style.removeProperty(a):t.style.setProperty(a,e,i?"important":"")}function k(t){const a={};for(const e of t)a[e.name]=e.value;return a}const M=new Map;let x,C=0;function T(t,a,e,i,n,s,o,d=0){const r=16.666/i;let l="{\n";for(let t=0;t<=1;t+=r){const i=a+(e-a)*s(t);l+=100*t+`%{${o(i,1-i)}}\n`}const c=l+`100% {${o(e,1-e)}}\n}`,h=`__svelte_${function(t){let a=5381,e=t.length;for(;e--;)a=(a<<5)-a^t.charCodeAt(e);return a>>>0}(c)}_${d}`,u=f(t),{stylesheet:m,rules:w}=M.get(u)||function(t,a){const e={stylesheet:p(a),rules:{}};return M.set(t,e),e}(u,t);w[h]||(w[h]=!0,m.insertRule(`@keyframes ${h} ${c}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${i}ms linear ${n}ms 1 both`,C+=1,h}function E(t,a){const e=(t.style.animation||"").split(", "),i=e.filter(a?t=>t.indexOf(a)<0:t=>-1===t.indexOf("__svelte")),n=e.length-i.length;n&&(t.style.animation=i.join(", "),C-=n,C||l((()=>{C||(M.forEach((t=>{const{ownerNode:a}=t.stylesheet;a&&w(a)})),M.clear())})))}function A(t){x=t}function P(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const S=[],L=[],N=[],B=[],D=Promise.resolve();let H=!1;function W(){H||(H=!0,D.then(j))}function Z(t){N.push(t)}const I=new Set;let V,F=0;function j(){const t=x;do{for(;F<S.length;){const t=S[F];F++,A(t),q(t.$$)}for(A(null),S.length=0,F=0;L.length;)L.pop()();for(let t=0;t<N.length;t+=1){const a=N[t];I.has(a)||(I.add(a),a())}N.length=0}while(S.length);for(;B.length;)B.pop()();H=!1,I.clear(),A(t)}function q(t){if(null!==t.fragment){t.update(),n(t.before_update);const a=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,a),t.after_update.forEach(Z)}}function O(t,a,e){t.dispatchEvent(function(t,a,{bubbles:e=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e,i,a),n}(`${a?"intro":"outro"}${e}`))}const R=new Set;let z;function G(t,a){t&&t.i&&(R.delete(t),t.i(a))}function J(t,a,e,i){if(t&&t.o){if(R.has(t))return;R.add(t),z.c.push((()=>{R.delete(t),i&&(e&&t.d(1),i())})),t.o(a)}else i&&i()}const X={duration:0};function Y(e,i,o,d){const u={direction:"both"};let f=i(e,o,u),p=d?0:1,m=null,w=null,g=null;function v(){g&&E(e,g)}function y(t,a){const e=t.b-p;return a*=Math.abs(e),{a:p,b:t.b,d:e,duration:a,start:t.start,end:t.start+a,group:t.group}}function _(i){const{delay:s=0,duration:o=300,easing:d=a,tick:u=t,css:_}=f||X,$={start:r()+s,b:i};i||($.group=z,z.r+=1),m||w?w=$:(_&&(v(),g=T(e,p,i,o,s,d,_)),i&&u(0,1),m=y($,o),Z((()=>O(e,i,"start"))),function(t){let a;0===c.size&&l(h),new Promise((e=>{c.add(a={c:t,f:e})}))}((t=>{if(w&&t>w.start&&(m=y(w,o),w=null,O(e,m.b,"start"),_&&(v(),g=T(e,p,m.b,m.duration,0,d,f.css))),m)if(t>=m.end)u(p=m.b,1-p),O(e,m.b,"end"),w||(m.b?v():--m.group.r||n(m.group.c)),m=null;else if(t>=m.start){const a=t-m.start;p=m.a+m.d*d(a/m.duration),u(p,1-p)}return!(!m&&!w)})))}return{run(t){s(f)?(V||(V=Promise.resolve(),V.then((()=>{V=null}))),V).then((()=>{f=f(u),_(t)})):_(t)},end(){v(),m=w=null}}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Q(a,o,d,r,l,c,h,u=[-1]){const f=x;A(a);const p=a.$$={fragment:null,ctx:[],props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:o.target||f.$$.root};h&&h(p.root);let m=!1;if(p.ctx=d?d(a,o.props||{},((t,e,...i)=>{const n=i.length?i[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=n)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](n),m&&function(t,a){-1===t.$$.dirty[0]&&(S.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[a/31|0]|=1<<a%31}(a,t)),e})):[],p.update(),m=!0,n(p.before_update),p.fragment=!!r&&r(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(w)}else p.fragment&&p.fragment.c();o.intro&&G(a.$$.fragment),function(t,a,i,o){const{fragment:d,after_update:r}=t.$$;d&&d.m(a,i),o||Z((()=>{const a=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...a):n(a),t.$$.on_mount=[]})),r.forEach(Z)}(a,o.target,o.anchor,o.customElement),j()}A(f)}let U;function tt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function at(t,{delay:a=0,duration:e=400,easing:i=tt,amount:n=5,opacity:s=0}={}){const o=getComputedStyle(t),d=+o.opacity,r="none"===o.filter?"":o.filter,l=d*(1-s);return{delay:a,duration:e,easing:i,css:(t,a)=>`opacity: ${d-l*a}; filter: ${r} blur(${a*n}px);`}}function et(t){const a=document.querySelector(t);a&&a.remove()}function it(){delete window?._vmv_$s0,delete window?._vmv_$s1}function nt(){[...document.querySelectorAll("script, style")].forEach((t=>{const a=t?.dataset;if(a)for(const[e]of Object.entries(a))(e.includes("vmvJ")||e.includes("vmvS"))&&t.remove()}))}function st(){!function(t="vmv-preloader"){et(t)}(),it(),nt()}"function"==typeof HTMLElement&&(U=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,a,e){this[t]=e}disconnectedCallback(){n(this.$$.on_disconnect)}$destroy(){!function(t,a){const e=t.$$;null!==e.fragment&&(n(e.on_destroy),e.fragment&&e.fragment.d(a),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(a,e){if(!s(e))return t;const i=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var a;this.$$set&&(a=t,0!==Object.keys(a).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class ot{constructor(t){this.mobile=window.matchMedia("(max-width:767px)"),this.tablet=window.matchMedia("(min-width:768px) and (max-width: 1023px)"),this.desktop=window.matchMedia("(min-width:1024px) and (max-width: 1399px)"),this.wide_desktop=window.matchMedia("(min-width:1400px)"),this.w1=null,this.w2=null,this.w3=null,this.w4=null,this.initWidth(t)}initWidth(t){this.w1=0===Number(t?._$w1)?80:Number(t._$w1),this.w2=0===Number(t?._$w2)?this.w1:Number(t._$w2),this.w3=0===Number(t?._$w3)?this.w2:Number(t._$w3),this.w4=0===Number(t?._$w4)?this.w3:Number(t._$w4)}getWidthCorrection(){switch(!0){case this.mobile.matches:return this.w1;case this.tablet.matches:return this.w2;case this.desktop.matches:return this.w3;case this.wide_desktop.matches:return this.w4}}}class dt{constructor(t){this.isSessionView="session"===t?.typeShow,this.isDemoView=t?.isDemoView,this.prefix=t?.prefix||"vmv_PredL",this.storage=this.isSessionView?window.sessionStorage:window.localStorage}clear(){const t=Object.assign({},this.storage);for(let a in t)a.includes(this.prefix)&&this.storage.removeItem(a);document.cookie.split(";").forEach((t=>{t.includes(this.prefix)&&(document.cookie=`${t}; max-age=-1;`)}))}setValue(t){this.isDemoView||(this.clear(),this.storage.setItem(`${this.prefix}_${t}`,"done"),this.isSessionView||(document.cookie=`${this.prefix}_${t}=done; max-age=31104000; path=/`))}}class rt{constructor(t){this.logic=t._$logicView,this.fallBackTime=t._$maxDuration,this.fallBackTimer=null,this.waitingTime=t._$durationWaiting,this.waitingTimer=null,this.needEndCycle=t._$needEndCycle,this.waitingAnimation=null,this.hideFunction=null,this.runImmediately=!0,this.animationCycleDone=!1,this.init(),this.manualHideActivated=!1}forceClear(){this.hideFunction&&(this.fallBackTimer&&clearTimeout(this.fallBackTimer),this.waitingTimer&&clearTimeout(this.waitingTimer),this.hideFunction())}init(){"pageLoad"===this.logic&&(this.runImmediately=!1,window.onload=()=>{this.runImmediately=!0,console.log("page load"),this.hide&&this.animationCycleDone&&this.hide(),this.hide&&!this.needEndCycle&&this.forceClear()});const t="pageLoad"===this.logic?this.waitingTime:this.fallBackTime;this.fallBackTimer=setTimeout((()=>{console.log("hide preloader"),this.runImmediately=!0,this.hide()}),1e3*t),"manual"===this.logic&&window.addEventListener("vmvPreloaderHide",(()=>{this.needEndCycle?(this.manualHideActivated=!0,this.hide()):this.forceClear()}),!0),window.addEventListener("vmvPreloaderHideForce",(()=>this.forceClear()),!0)}hide(){this.fallBackTimer&&clearTimeout(this.fallBackTimer),this.waitingTimer&&clearTimeout(this.waitingTimer),this.runImmediately&&this.animationCycleDone&&this.hideFunction()}_runWaitingAnimation(){this.waitingAnimation&&this.waitingAnimation()}setHideAction(t){this.hideFunction=t}baseAnimationEnded(t){this.animationCycleDone=!0,this.waitingAnimation=t||null,"delayAfterCycle"===this.logic&&(this.waitingTimer=setTimeout((()=>{this.hide()}),1e3*this.waitingTime)),"manual"===this.logic&&(this._runWaitingAnimation(),this.manualHideActivated&&this.hide()),"delayAfterCyclePulse"===this.logic&&(this._runWaitingAnimation(),this.waitingTimer=setTimeout((()=>{this.hide()}),1e3*this.waitingTime)),"oneCycle"===this.logic&&this.hide(),"pageLoad"===this.logic&&this.hide()}}const{window:lt}=K;function ct(t){let a,e,i,n,s,o,d,r,l,c,h,f,p,k,M,x,C,T,E,A,P,S,L,N,B,D,H,W,I,V,F,j,q,O,R,z,G,J,X,K,Q,U,tt,et,it,nt,st,ot,dt,rt,lt,ct,ht,ut,ft,pt,mt,wt,gt,vt,yt,_t,$t,bt,kt,Mt,xt,Ct,Tt,Et,At,Pt,St,Lt,Nt,Bt,Dt,Ht,Wt,Zt,It,Vt,Ft,jt,qt,Ot,Rt,zt,Gt,Jt,Xt,Yt,Kt,Qt,Ut,ta,aa,ea,ia,na,sa;return{c(){a=g("div"),e=g("div"),i=g("div"),n=v("svg"),s=v("g"),o=v("g"),d=v("g"),r=v("path"),l=v("path"),c=v("path"),h=v("path"),f=v("path"),p=v("g"),k=v("path"),M=v("path"),x=v("path"),C=v("path"),T=v("g"),E=v("path"),A=v("path"),P=v("path"),S=v("path"),L=v("g"),N=v("g"),B=v("path"),D=v("path"),H=v("path"),W=v("g"),I=v("path"),V=v("g"),F=v("path"),j=v("g"),q=v("path"),O=v("path"),R=v("g"),z=v("path"),G=v("g"),J=v("g"),X=v("path"),K=v("g"),Q=v("path"),U=v("g"),tt=v("path"),et=v("path"),it=v("path"),nt=v("path"),st=v("g"),ot=v("path"),dt=v("path"),rt=v("path"),lt=v("path"),ct=v("g"),ht=v("path"),ut=v("path"),ft=v("path"),pt=v("path"),mt=v("g"),wt=v("g"),gt=v("path"),vt=v("path"),yt=v("path"),_t=v("g"),$t=v("path"),bt=v("g"),kt=v("g"),Mt=v("path"),xt=v("path"),Ct=v("g"),Tt=v("clipPath"),Et=v("path"),At=v("clipPath"),Pt=v("path"),St=v("clipPath"),Lt=v("path"),Nt=v("clipPath"),Bt=v("path"),Dt=v("clipPath"),Ht=v("path"),Wt=v("clipPath"),Zt=v("path"),It=v("clipPath"),Vt=v("path"),Ft=v("clipPath"),jt=v("path"),qt=v("clipPath"),Ot=v("path"),Rt=v("clipPath"),zt=v("path"),Gt=v("clipPath"),Jt=v("path"),Xt=v("clipPath"),Yt=v("path"),Kt=v("clipPath"),Qt=v("path"),Ut=v("path"),ta=y(" "),aa=g("div"),aa.innerHTML='<div class="vmv_pulse__item vmv_pulse__item-1"></div> \n          <div class="vmv_pulse__item vmv_pulse__item-2"></div>',$(r,"stroke-width","20"),$(r,"d","M5.175 67.605c4.692 7.227 7.651 18.96 8.877 35.2 1.226 16.24 1.226 46.501 0 90.785L9.604 310.677"),$(r,"clip-path","url(#s-8927)"),$(r,"data-off","245"),$(r,"data-draw","0.245"),$(r,"data-delay","0"),$(l,"stroke-width","9"),$(l,"d","M14.881 315.78c2.031-8.37 3.758-22.719 5.18-43.044 1.423-20.326 3.535-60.818 6.336-121.477 6.108-89.39 13.528-137.916 22.26-145.576"),$(l,"clip-path","url(#s-8927)"),$(l,"data-off","314"),$(l,"data-draw","0.314"),$(l,"data-delay","0.245"),$(c,"stroke-width","13"),$(c,"d","M55.144 5.683c3.98 2.934 5.676 24.543 5.086 64.828-.714 24.93-.332 51.376 1.147 79.34 1.48 27.964 2.622 48.042 3.43 60.234"),$(c,"clip-path","url(#s-8927)"),$(c,"data-off","206"),$(c,"data-draw","0.206"),$(c,"data-delay","0.5589999999999999"),$(h,"stroke-width","9"),$(h,"d","M69.916 210.085c1.947.414 5.332-11.132 10.153-34.638 7.233-35.26 3.246-51.014 16.006-92.748 12.759-41.733 17.072-57.124 27.845-61.398"),$(h,"clip-path","url(#s-8927)"),$(h,"data-off","200"),$(h,"data-draw","0.2"),$(h,"data-delay","0.7649999999999999"),$(f,"stroke-width","14"),$(f,"d","M128.367 21.301c5.473 1.95 7.27 13.857 5.39 35.72-1.124 13.067-.513 38.451-1.352 70.853-.376 14.544-1.408 39.86-3.093 75.946-.075 16.71-.075 28.224 0 34.544.119 10.057.188 17.18.772 23.427 1.136 12.135 4.214 28.47 9.236 49.005"),$(f,"clip-path","url(#s-8927)"),$(f,"data-off","293"),$(f,"data-draw","0.293"),$(f,"data-delay","0.9649999999999999"),$(d,"class","fill-1"),$(k,"stroke-width","8"),$(k,"d","M16.742 33.538c2.976 1.19 5.758.919 8.346-.814 2.588-1.732 5.618-4.58 9.088-8.546"),$(k,"clip-path","url(#s-5794)"),$(k,"data-off","22"),$(k,"data-draw","0.044"),$(k,"data-delay","1.2579999999999998"),$(M,"stroke-width","13"),$(M,"d","M37.838 19.124c2.276-5.627 2.438-10.157.483-13.592"),$(M,"clip-path","url(#s-5794)"),$(M,"data-off","15"),$(M,"data-draw","0.03"),$(M,"data-delay","1.3019999999999998"),$(x,"stroke-width","13"),$(x,"d","M30.56 3.122c-8.295 7.15-14.483 14.767-18.564 22.85C8.649 32.6 5.502 44.64 6.204 53.628c.582 7.456 0 10.09 8.662 19.41"),$(x,"clip-path","url(#s-5794)"),$(x,"data-off","81"),$(x,"data-draw","0.162"),$(x,"data-delay","1.3319999999999999"),$(C,"stroke-width","7"),$(C,"d","M21.212 75.225c5.762 1.152 13.021-1.696 21.778-8.545 8.757-6.848 17.094-15.556 25.012-26.123l9.45-11.739"),$(C,"clip-path","url(#s-5794)"),$(C,"data-off","76"),$(C,"data-draw","0.152"),$(C,"data-delay","1.4939999999999998"),$(p,"transform","translate(148 165)"),$(p,"class","fill-1"),$(E,"stroke-width","14"),$(E,"d","M8.18 5.5c2.253 1.402 3.413 4.658 3.48 9.769.099 7.398-6.097 49.543-6.292 59.823-.398 20.932-.398 27.342 0 19.23"),$(E,"clip-path","url(#s-6238)"),$(E,"data-off","98"),$(E,"data-draw","0.196"),$(E,"data-delay","1.6459999999999997"),$(A,"stroke-width","9"),$(A,"d","M9.045 96.43c4.597-20.652 7.845-34.732 9.746-42.24 5.131-20.268 9.037-31.35 13.3-31.845"),$(A,"clip-path","url(#s-6238)"),$(A,"data-off","79"),$(A,"data-draw","0.158"),$(A,"data-delay","1.8419999999999996"),$(P,"stroke-width","13"),$(P,"d","m36.645 23.124 15.429 16.394"),$(P,"clip-path","url(#s-6238)"),$(P,"data-off","23"),$(P,"data-draw","0.046"),$(P,"data-delay","1.9999999999999996"),$(S,"stroke-width","7"),$(S,"d","M54.964 41.408c2.013 2.407 5.609 3.2 10.79 2.378 5.18-.823 8.991-2.542 11.434-5.16"),$(S,"clip-path","url(#s-6238)"),$(S,"data-off","25"),$(S,"data-draw","0.05"),$(S,"data-delay","2.0459999999999994"),$(T,"transform","translate(217 156)"),$(T,"class","fill-1"),$(B,"stroke-width","14"),$(B,"d","M19.32 20.275c1.43 5.524 2.144 9.907 2.144 13.152 0 4.866-22.55 101.443-15.27 109.947"),$(B,"clip-path","url(#s-0213)"),$(B,"data-off","126"),$(B,"data-draw","0.126"),$(B,"data-delay","2.095999999999999"),$(D,"stroke-width","9"),$(D,"d","M12.045 144.5c4.552-4.966 7.691-9.626 9.419-13.98 1.368-3.449 7.614-20.7 13.197-40.809 4.993-17.981 9.125-38.28 14.1-52.518 7.027-20.108 12.354-31.305 15.98-33.59"),$(D,"clip-path","url(#s-0213)"),$(D,"data-off","152"),$(D,"data-draw","0.152"),$(D,"data-delay","2.221999999999999"),$(H,"stroke-width","14"),$(H,"d","M71.531 5.175c5.27 8.472 8.315 20.723 9.134 36.754.82 16.03 1.486 29.561 2 40.59"),$(H,"clip-path","url(#s-0213)"),$(H,"data-off","79"),$(H,"data-draw","0.079"),$(H,"data-delay","2.373999999999999"),$(I,"stroke-width","14"),$(I,"d","M75.174 2.768c-.259 42.263-1.57 72.1-3.933 89.513-4.308 31.736-10.488 52.142-15.328 72.184-13.234 54.805-52.9 66.077-50.027-6.645 1.916-48.48 17.642-95.174 47.177-140.08"),$(I,"clip-path","url(#s-2144)"),$(I,"data-off","431"),$(I,"data-draw","0.431"),$(I,"data-delay","2.4529999999999994"),$(W,"transform","translate(7.713 81.047)"),$(F,"stroke-width","9"),$(F,"d","M4.284 43.784c2.459-5.794 8.892-12.846 19.3-21.158 10.41-8.31 21.074-15.288 31.995-20.931"),$(F,"clip-path","url(#s-4643)"),$(F,"data-off","68"),$(F,"data-draw","0.068"),$(F,"data-delay","2.8839999999999995"),$(V,"transform","translate(59.513 49.473)"),$(L,"transform","translate(281.748 145.394)"),$(L,"class","fill-1"),$(q,"stroke-width","9"),$(q,"d","M13.877 185.54c7.809-12.812 14.415-25.803 19.818-38.972 5.404-13.17 11.616-34.033 18.636-62.59"),$(q,"clip-path","url(#s-4438)"),$(q,"data-off","110"),$(q,"data-draw","0.11"),$(q,"data-delay","2.9519999999999995"),$(O,"stroke-width","14"),$(O,"d","M52.331 83.977C60.855 31.326 58.745 5 46 5 33.255 5 20.707 43.832 8.356 121.496c-2.646 50.339-2.646 84.07 0 101.195 3.969 25.687 12.93 28.946 20.107 28.946s15.083-5.96 29.971-28.946C68.36 207.366 77.548 187.402 86 162.799"),$(O,"clip-path","url(#s-4438)"),$(O,"data-off","460"),$(O,"data-draw","0.46"),$(O,"data-delay","3.0619999999999994"),$(j,"transform","translate(394 24.804)"),$(j,"class","fill-1"),$(z,"stroke-width","15"),$(z,"d","M92 153.512c22.793-28.924 33.103-56.823 30.931-83.696-3.257-40.31-11.165-61.766-45.1-66.292-33.934-4.526-66.35 37.608-70.971 75.19-3.08 25.055 13.7 55.916 50.344 92.582 48.216 37.075 70.817 68.825 67.804 95.251-4.519 39.639-35.278 37.402-50.672 41.048-15.394 3.645-46.696-6.547-51.21-28.89-3.01-14.896.566-26.703 10.725-35.42"),$(z,"clip-path","url(#s-2590)"),$(z,"data-off","700"),$(z,"data-draw","0.7"),$(z,"data-delay","3.5219999999999994"),$(R,"transform","translate(398.752 324.289)"),$(R,"class","fill-2"),$(X,"stroke-width","14"),$(X,"d","M21.963 4.458c7.01 1.798 9.22 16.437 6.628 43.92-2.592 27.481-9.929 77.289-22.01 149.422-3.447 39.477 1.136 59.941 13.75 61.394 12.615 1.453 29.716-30.105 51.305-94.674"),$(X,"clip-path","url(#s-7614)"),$(X,"data-off","377"),$(X,"data-draw","0.377"),$(X,"data-delay","4.2219999999999995"),$(J,"transform","translate(63.31)"),$(Q,"stroke-width","8"),$(Q,"d","M3.564 28.19c33.604-11.302 61.575-18.073 83.91-20.314a8301.176 8301.176 0 0 1 60.99-5.912"),$(Q,"clip-path","url(#s-0940)"),$(Q,"data-off","148"),$(Q,"data-draw","0.148"),$(Q,"data-delay","4.598999999999999"),$(K,"transform","translate(0 69.592)"),$(G,"transform","translate(462.576 341.944)"),$(G,"class","fill-2"),$(tt,"stroke-width","14"),$(tt,"d","M8.18 5.5c2.253 1.402 3.413 4.658 3.48 9.769.099 7.398-6.097 49.543-6.292 59.823-.398 20.932-.398 27.342 0 19.23"),$(tt,"clip-path","url(#s-6238)"),$(tt,"data-off","98"),$(tt,"data-draw","0.196"),$(tt,"data-delay","4.746999999999999"),$(et,"stroke-width","9"),$(et,"d","M9.045 96.43c4.597-20.652 7.845-34.732 9.746-42.24 5.131-20.268 9.037-31.35 13.3-31.845"),$(et,"clip-path","url(#s-6238)"),$(et,"data-off","79"),$(et,"data-draw","0.158"),$(et,"data-delay","4.942999999999999"),$(it,"stroke-width","13"),$(it,"d","m36.645 23.124 15.429 16.394"),$(it,"clip-path","url(#s-6238)"),$(it,"data-off","23"),$(it,"data-draw","0.046"),$(it,"data-delay","5.100999999999999"),$(nt,"stroke-width","7"),$(nt,"d","M54.964 41.408c2.013 2.407 5.609 3.2 10.79 2.378 5.18-.823 8.991-2.542 11.434-5.16"),$(nt,"clip-path","url(#s-6238)"),$(nt,"data-off","25"),$(nt,"data-draw","0.05"),$(nt,"data-delay","5.146999999999999"),$(U,"transform","translate(592.78 465.901)"),$(U,"class","fill-2"),$(ot,"stroke-width","8"),$(ot,"d","M16.742 33.538c2.976 1.19 5.758.919 8.346-.814 2.588-1.732 5.618-4.58 9.088-8.546"),$(ot,"clip-path","url(#s-5794)"),$(ot,"data-off","22"),$(ot,"data-draw","0.044"),$(ot,"data-delay","5.196999999999999"),$(dt,"stroke-width","13"),$(dt,"d","M37.838 19.124c2.276-5.627 2.438-10.157.483-13.592"),$(dt,"clip-path","url(#s-5794)"),$(dt,"data-off","15"),$(dt,"data-draw","0.03"),$(dt,"data-delay","5.240999999999999"),$(rt,"stroke-width","13"),$(rt,"d","M30.56 3.122c-8.295 7.15-14.483 14.767-18.564 22.85C8.649 32.6 5.502 44.64 6.204 53.628c.582 7.456 0 10.09 8.662 19.41"),$(rt,"clip-path","url(#s-5794)"),$(rt,"data-off","81"),$(rt,"data-draw","0.162"),$(rt,"data-delay","5.270999999999999"),$(lt,"stroke-width","7"),$(lt,"d","M21.212 75.225c5.762 1.152 13.021-1.696 21.778-8.545 8.757-6.848 17.094-15.556 25.012-26.123l9.45-11.739"),$(lt,"clip-path","url(#s-5794)"),$(lt,"data-off","76"),$(lt,"data-draw","0.152"),$(lt,"data-delay","5.432999999999999"),$(st,"transform","translate(662.837 474.81)"),$(st,"class","fill-2"),$(ht,"stroke-width","8"),$(ht,"d","M16.742 33.538c2.976 1.19 5.758.919 8.346-.814 2.588-1.732 5.618-4.58 9.088-8.546"),$(ht,"clip-path","url(#s-5794)"),$(ht,"data-off","22"),$(ht,"data-draw","0.044"),$(ht,"data-delay","5.584999999999999"),$(ut,"stroke-width","13"),$(ut,"d","M37.838 19.124c2.276-5.627 2.438-10.157.483-13.592"),$(ut,"clip-path","url(#s-5794)"),$(ut,"data-off","15"),$(ut,"data-draw","0.03"),$(ut,"data-delay","5.628999999999999"),$(ft,"stroke-width","13"),$(ft,"d","M30.56 3.122c-8.295 7.15-14.483 14.767-18.564 22.85C8.649 32.6 5.502 44.64 6.204 53.628c.582 7.456 0 10.09 8.662 19.41"),$(ft,"clip-path","url(#s-5794)"),$(ft,"data-off","81"),$(ft,"data-draw","0.162"),$(ft,"data-delay","5.658999999999999"),$(pt,"stroke-width","7"),$(pt,"d","M21.212 75.225c5.762 1.152 13.021-1.696 21.778-8.545 8.757-6.848 17.094-15.556 25.012-26.123l9.45-11.739"),$(pt,"clip-path","url(#s-5794)"),$(pt,"data-off","76"),$(pt,"data-draw","0.152"),$(pt,"data-delay","5.820999999999999"),$(ct,"transform","translate(731.284 475.047)"),$(ct,"class","fill-2"),$(gt,"stroke-width","13"),$(gt,"d","M6.182 13.531c4.173 4.865 6.654 10.547 7.442 17.047 2.55 21.03.609 53.274 0 64.472-1.179 21.683-2.826 49.341-4.941 82.975-.737 18.897-1.106 32.158-1.106 39.785 0 7.627.369 15.563 1.106 23.807"),$(gt,"clip-path","url(#s-5214)"),$(gt,"data-off","231"),$(gt,"data-draw","0.231"),$(gt,"data-delay","5.972999999999999"),$(vt,"stroke-width","9"),$(vt,"d","M13.018 238.065 23.75 100.539c2.969-33.923 6.527-57.648 10.674-71.175C38.57 15.836 45.078 6.736 53.943 2.063"),$(vt,"clip-path","url(#s-5214)"),$(vt,"data-off","245"),$(vt,"data-draw","0.245"),$(vt,"data-delay","6.203999999999999"),$(yt,"stroke-width","13"),$(yt,"d","M59.031 6.726c5.374 6.265 8.282 15.424 8.723 27.479.663 18.081-.658 32.259-9.63 54.667-5.98 14.939-11.07 23.557-15.269 25.855"),$(yt,"clip-path","url(#s-5214)"),$(yt,"data-off","116"),$(yt,"data-draw","0.116"),$(yt,"data-delay","6.448999999999999"),$($t,"stroke-width","12"),$($t,"d","M9.276 68.569c-2.488.335-3.732-3.058-3.732-10.18 0-4.476 1.104-12.333 6.48-21.929 3.177-5.672 7.406-12.014 20.843-22.692 8.958-7.119 20.69-11.15 35.197-12.094"),$($t,"clip-path","url(#s-8540)"),$($t,"data-off","104"),$($t,"data-draw","0.104"),$($t,"data-delay","6.564999999999999"),$(_t,"transform","translate(28.347 45.772)"),$(mt,"transform","translate(795.271 454.85)"),$(mt,"class","fill-2"),$(Mt,"stroke-width","11"),$(Mt,"d","M67.647 23.217C65.021 9.898 57.396 2.5 44.773 1.024 25.838-1.19 7.426 9.575 5.195 31.554c-2.23 21.978 11.517 34.952 31.002 53.968 12.99 12.677 23.67 22.779 32.04 30.305"),$(Mt,"clip-path","url(#s-8816)"),$(Mt,"data-off","200"),$(Mt,"data-draw","0.2"),$(Mt,"data-delay","6.668999999999999"),$(xt,"stroke-width","11"),$(xt,"d","M78.324 23.268c4.85-12.66 12.214-21.122 23.86-22.598 17.47-2.215 36.818 10.899 38.876 32.877 2.058 21.979-13.794 32.583-31.77 51.599-11.986 12.677-23.886 19.075-30.966 31.737"),$(xt,"class","last-path"),$(xt,"clip-path","url(#s-8816)"),$(xt,"data-off","199"),$(xt,"data-draw","0.199"),$(xt,"data-delay","6.868999999999999"),$(kt,"class","pulse"),$(bt,"transform","translate(614.43 199.402)"),$(bt,"class","fill-3"),$(Et,"d","M66.112 213.465c-7.016 0-9.346-43.778-9.898-50.117-4.462-73.23 1.951-170.462-7.198-152.152-2.799 6.002-4.998 12.604-6.598 19.807C26.313 99.493 25.694 307.926 18.724 314.9c-1.132 4.532-9.872 8.681-10.647.15C.86 235.61 28.718 106.022.13 63.113c-1.878-1.88 17.275-19.397 23.094 33.01.759 7.599.907 11.846 1.5 23.109 2.413-26.561 4.75-74.675 16.195-104.736 3.31-11.587 20.863-28.459 23.994 6.002 2.165 22.384.303 88.583 3.3 156.053 1.968 41.378 2.695 24.63 6.298 6.603C81.636 139.658 91.684 64.54 114.4 25.9c4.96-8.825 18.559-15.713 23.993.6 7.104 28.433-13.956 254.906 6.599 286.898.287.574-6.778 10.866-13.197-8.403-10.02-35.092-9.864-86.099-7.798-130.544 5.922-133.339 10.029-177.596-9.598-135.047-37.013 92.591-25.867 181.538-48.287 174.06Z"),$(Tt,"id","s-8927"),$(Pt,"d","M16 29.634c.084 1.72 1.907 2.735 3.485 2.735 5.736 0 14.691-12.805 14.691-20.96 0-3.096-1.304-5.53-2.143-5.53-.228 0-2.844 2.229-5.33 4.996C21.832 16.294 19.03 23.108 16 29.634m-.9 35.7c9.937 15.9 22.288 5.107 44.1-18.75 12.45-13.617 13.366-18.197 17.4-19.35.977-.49 3.9-.528 3.9.9-2.63 7.89-23.5 29.596-31.8 37.5C25.363 86.713-1.862 79.983.1 51.534.483 33.54 11.036 8.34 28.3 1.434c5.896-2.948 16.524-1.586 17.4 6.3 0 5.858-5.483 18.036-14.7 24-8.412 6.409-15.609 4.5-16.2 4.5-.6 0-.9.2-.9.6-2.374 9.495-2.85 19.59 1.2 28.5"),$(At,"id","s-5794"),$(Lt,"d","M10.195 101.816c-1.686 1.446-3.97 1.443-6.176 1.139-2.722-.376-3.534-.5-3.91-10.894-1.042-28.895 5.68-54.318 5.68-74.695 0-15.902-4.14-13.258-4.14-14.508 0-1.752 12.164-7.144 14.936 3.945 2.876 11.505-2.1 44.122-2.1 48.6 1.96-4.901 1.774-9.985 9.9-30.3 2.152-4.227 6.22-7.54 13.1-6.647 8.016 1.064 10.927 9.634 19.3 19.847 4.546 5.545 9.546 2.43 15.7.153 5.3-1.96 10.602-1.187 5.9 1.947-12.345 7.407-26.041 8.576-35.7-2.1-4.022-4.022-8.2-12.847-9.3-12.6-7.712 1.73-18.076 71.728-23.19 76.113Z"),$(St,"id","s-6238"),$(Bt,"d","M61.266 14.186c4.385-9.647 6.272-10.913 9.9 3.6 3.689 16.968 5.266 43.578 5.3 53.141 0 .102.4 13.044.4 13.145l-.006 2.481c.466-.1.029-.159 11.827-.4-.03-4.965-.084-9.12-.11-12.296 0-.1.176-.002-.022-10.965-.183-10.285-2.75-39.915-7.04-51.556-5.69-15.444-20.792-15.593-28.05 2.55-9.693 22.081-9.967 33.471-25.8 87.3-2 6.8-4.3 13.6-6.9 20.4-9.33 23.326-11.784 26.288-7.2-8.1 1.522-11.41 3.926-26.205 6.15-37.5 3.103-15.75 7.35-36.493 7.35-50.25 0-14.326-10.525-10.924-13.8-7.65-.537 1.076-1.642 2.4.9 2.4 2.766 0-.034 21.792-.6 24.9-12.313 68.24-21.974 108.24-2.4 102.9 20.773-5.539 31.33-92.805 50.1-134.1Z"),$(Nt,"id","s-0213"),$(Ht,"d","M33.752 199.839c-14.487 20.283-20.786-6.259-21.6-20.1-2.02-25.261 2.704-54.314 9.3-78.9 5.656-20.2 11.843-39.188 21-57.9 5.103-10.206 10.803-19.806 15.642-27.159-2.018-1.062-4.259-1.974-6.295-3.383C18.06 58.009-1.963 133.221.152 177.639c2.402 50.44 39.346 50.456 59.4-7.2C81.26 109.262 81.228 31.602 80.933 0c-4.154 1.14-7.675 4.177-11.787 5.443-.116 49.974-2.769 103.468-17.694 154.046-3.708 12.564-10.145 29.648-17.7 40.35Z"),$(Dt,"id","s-2144"),$(Zt,"d","M48.253 2.514c-6.076 3.038-13.982 7.65-19.2 12 0-1.044-.034-2.385-.102-3.958-.034-.806-.079-1.678-.13-2.598-3.791 1.403-9.43 6.636-11.95 9.308.023.709.041 1.383.054 2.01.072 3.424.01 5.556-.172 5.738C10.855 30.458 5.262 36.858 0 43.972c2.036 1.409 4.277 2.32 6.295 3.383 5.566-8.457 9.993-13.941 11.058-13.941 0 1.199-.003 2.4-.006 3.604 4.112-1.266 7.633-4.303 11.787-5.443-.038-4.108-.081-7.447-.081-9.861 0-.4.2-.8.6-1.2 8.256-6.518 13.833-11.524 22.8-15.6 2.738-1.297 8.947-3.718 6.6-4.5-4.08-.816-3.443-.575-10.8 2.1Z"),$(Wt,"id","s-4643"),$(Vt,"d","M44.596 8.852c-24.14 28.969-32.7 133.59-32.7 171.3 10.39-10.391 43.394-88.733 41.85-148.95-.198-7.73-4.001-28.234-9.15-22.35m-12.6 3c14.53-21.236 34.743-15.33 30.3 29.1-2.956 56.17-31.369 133.002-49.8 148.8-.103 0-.535 84.954 29.7 50.4 13.354-17.463 27.101-47.867 35.7-68.1 1.628-5.97 9.783-6.067 7.2-.9-14.781 34.06-37.583 95.49-67.5 81.6C2.798 246.586.309 208.056.046 192.002c-.735-44.855 7.227-145.537 31.95-180.15"),$(It,"id","s-4438"),$(jt,"d","M92.288 155.425c-5.856-1.673-2.34-1.462 1.65-6.45 14.655-18.319 32.698-73.587 16.35-117.6-26.982-72.643-153.863 24.428-66.75 118.8 22.536 24.414 75.739 62.96 85.65 99.3 12.829 47.039-42.14 66.276-75.15 60.45-22.154-3.909-38.748-17.757-37.2-40.2.856-12.273 6.297-23.397 12-29.1 5.094-4.31 11.795-1.295 10.2.3-21.2 21.199-11.912 67.153 31.2 65.1 17.977-.981 32.624-9.037 40.5-18.75 37.984-46.846-58.462-107.572-90.9-149.4C8.972 123.863.64 105.427.038 86.125c-1.121-33.618 22.922-66.296 52.65-80.25 23.4-10.984 52.332-7.184 64.95 16.65 25.83 48.791-5.504 138.57-25.35 132.9"),$(Ft,"id","s-2590"),$(Ot,"d","M52.848 206.942c-3.71 10.665-10.646 27.811-16.8 37.35-14.907 23.106-22.216 13.957-23.7-13.5-1.453-26.882 3.15-57.14 6.9-82.65 3.776-25.675 1.443-10.877 10.784-68 .057-.348.92-6.944.926-7.066.126-2.207 1.388-4.908 3.59-36.834.451-9.026.442-24.317-3.6-32.4-2.916-5.832-15.016-4.684-12.1 1.148 3 6 5.124 22.823 3.4 42.652L19.29 74.57c-.007.063.101.016-.966 6.211-.166.963-1.43 8.573-11.075 68.711-2.458 14.898-4.98 33.69-6.15 48.9-1.653 21.486-4.244 63.804 16.05 64.65 7.147.265 14.552-2.713 20.1-9.45 12.82-15.566 17.221-27.512 37.8-89.25 1.592-6.366-3.014-4.99-4.2-4.2-4.792 4.193-3.78 11.253-18 46.8Z"),$(qt,"id","s-7614"),$(zt,"d","M95.182 4.75c-.8 0-1.1-.3-.9-.9 0-.555.072-1.054.21-1.914-3.835.721-7.756 1.018-11.656 1.105l-.254 2.31c-.2.8-.7 1.2-1.5 1.2-26.104 3.434-56.165 8.83-80.1 19.8-1.2.6-1.3 1.2-.3 1.8 2.8 2.4 6.2 2.9 10.2 1.5 39.162-15.063 70.698-18.594 70.8-18.6 0 0-.006.003-.321 1.921 3.949-.349 7.867-.992 11.815-1.264l.206-1.258c0-.8.4-1.3 1.2-1.5 39.982-4.91 28.5-2.629 56.4-6.3 2.429 0 1.624-3.257-6.15-2.55-28.681 2.607-16.221 1.131-49.65 4.65Z"),$(Rt,"id","s-0940"),$(Jt,"d","M73.53 48.615c.153-3.51.895-9.833-.026-19.963-2.647-18.53-10.678-32.708-24.3-27.6-14.807 5.15-20.74 34.002-23.1 49.5-2.387 12.89-3.259 22.385-6 46.5 0-8.643 5.99-83.042-10.8-86.4-7.466-1.866-10.763 2.7-8.7 2.7 15.303 9.182 5.007 117.741 2.7 156.3-1.286 19.943-2.733 48.475-1.2 68.4.62 3.918-.083 10.577 9 8.1 3.62-1.809 4.86-10.043 5.4-14.1 2.88-21.589 2.475-17.475 5.4-55.5l5.1-69.9c1.8-23.99 5.525-57.105 12.6-80.1 5.057-19.504 15.473-30.037 20.1-6.9 1.997 9.984 2.805 20.411.966 34.892-.154 1.212.242.33-1.947 12.867-1.33 7.626-8.277 31.086-17.319 43.141-.222.223-.438.27-.64.19-.283 2.64-1.623 5.28-2.028 7.92 20.081.72 31.46-43.508 33.504-60.075.39-3.154.88-5.005 1.274-9.533.012-.14.01-.287.016-.439Z"),$(Gt,"id","s-5214"),$(Yt,"d","M66.554 0c-12.825 0-20.6 3.9-21.45 3.9 0-.534.028-1.158.07-1.879.025-.441.056-.92.089-1.435-2.231.322-4.54.462-6.554 1.432-2.094 1.008-3.894 2.363-6.03 3.159a141.014 141.014 0 0 1-.475 4.123c0 .4-.2.8-.6 1.2-12.97 7.781-22.342 19.134-27.45 31.35-3.238 7.744-7.522 26.262.15 29.55 2.758 1.273 5.375 1.702 7.853 1.453.022-.003.042-.008.064-.01.009-2.483.066-5.225.363-7.826a.49.49 0 0 1-.25-.042c-2.521-1.18-2.65-25.056 18.07-45.775.156 0 .188.418.106 1.179-.046.429-.132.98-.25 1.615 2.207-1.325 4.188-3.014 6.618-3.967 2.262-.888 4.437-1.911 6.644-2.894.077-.51.148-1.004.212-1.477.064-.472.12-.924.17-1.356.449-4.495 7.776-6.071 12.15-7.2 4.824-1.245 6.875-1.229 15.15-2.1 2.29 0 6.568-3-4.65-3"),$(Xt,"id","s-8540"),$(Qt,"d","M141.947 18.989C131.872 1.952 105.427-4.989 89.686 3.846 77.357 10.76 73.913 19.614 73 23.129c-.913-3.515-4.357-12.367-16.686-19.283-15.74-8.834-42.186-1.893-52.26 15.143-10.075 17.037-.63 42.276 20.148 59.313C44.974 95.332 64.802 104.5 73 119c-.044-.379-1.889-6.272-11.649-14.828-10.074-8.834-35.26-29.656-41.557-38.49-6.296-8.834-17-27.763-4.407-48.586 0 0 10.074-14.512 27.075-14.512 16.226 0 26.143 9.774 30.292 21.636.088.233.17.473.245.713.076-.24.158-.48.246-.713 4.15-11.863 14.067-21.636 30.293-21.636 17 0 27.075 14.512 27.075 14.512 12.593 20.823 1.889 39.752-4.408 48.586-6.296 8.833-31.483 29.656-41.557 38.49C74.888 112.728 73.044 118.622 73 119c8.199-14.5 28.027-23.668 48.798-40.698 20.78-17.037 30.224-42.276 20.15-59.313Z"),$(Kt,"id","s-8816"),$(Ct,"id","SignatureMask"),$(o,"id","Signature"),$(o,"transform","rotate(-12 331.615 80.36)"),$(o,"stroke-linecap","round"),$(o,"stroke","none"),$(o,"stroke-width","0"),$(o,"fill","none"),$(Ut,"class","vmv-pulse-run"),$(Ut,"d",""),$(s,"fill-rule","evenodd"),$(s,"fill","none"),$(s,"class","vmv__svg-glyphs"),$(n,"class","vmv__svg"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 970 595"),$(aa,"class","vmv_pulse"),$(i,"class","vmv__box-in"),$(e,"class","vmv__box"+("radial"===t[22]?"vmv__box--radial":"vmv__box--linear")+(t[24]?"vmv__box--image":"")),$(a,"class","vmv"),b(a,"--box-width",t[2]+"vw"),b(a,"--stroke1",t[10]),b(a,"--stroke2",t[11]),b(a,"--stroke3",t[12]),b(a,"--stroke4",t[13]),b(a,"--stroke5",t[14]),b(a,"--stroke6",t[15]),b(a,"--stroke7",t[16]),b(a,"--stroke8",t[17]),b(a,"--shadow",t[18]),b(a,"--tim",t[9]),b(a,"--bg",t[19]),b(a,"--bg-gradient-direction",t[23]),b(a,"--bg-stop1",t[20]),b(a,"--bg-stop2",t[21]),b(a,"--bg-image","url("+t[24]+")"),b(a,"--pulse-width",t[4]+"vw"),b(a,"--shadow-blur",t[5]+"vw"),b(a,"--pulse-border-width",t[7]+"vw"),b(a,"--shadow-pulse-blur",t[6]+"vw"),b(a,"--pulse-bottom",t[25]+"%"||0),b(a,"--pulse-left",t[26]+"%"||0)},m(w,g){m(w,a,g),u(a,e),u(e,i),u(i,n),u(n,s),u(s,o),u(o,d),u(d,r),u(d,l),u(d,c),u(d,h),u(d,f),u(o,p),u(p,k),u(p,M),u(p,x),u(p,C),u(o,T),u(T,E),u(T,A),u(T,P),u(T,S),u(o,L),u(L,N),u(N,B),u(N,D),u(N,H),u(L,W),u(W,I),u(L,V),u(V,F),u(o,j),u(j,q),u(j,O),u(o,R),u(R,z),u(o,G),u(G,J),u(J,X),u(G,K),u(K,Q),u(o,U),u(U,tt),u(U,et),u(U,it),u(U,nt),u(o,st),u(st,ot),u(st,dt),u(st,rt),u(st,lt),u(o,ct),u(ct,ht),u(ct,ut),u(ct,ft),u(ct,pt),u(o,mt),u(mt,wt),u(wt,gt),u(wt,vt),u(wt,yt),u(mt,_t),u(_t,$t),u(o,bt),u(bt,kt),u(kt,Mt),u(kt,xt),u(o,Ct),u(Ct,Tt),u(Tt,Et),u(Ct,At),u(At,Pt),u(Ct,St),u(St,Lt),u(Ct,Nt),u(Nt,Bt),u(Ct,Dt),u(Dt,Ht),u(Ct,Wt),u(Wt,Zt),u(Ct,It),u(It,Vt),u(Ct,Ft),u(Ft,jt),u(Ct,qt),u(qt,Ot),u(Ct,Rt),u(Rt,zt),u(Ct,Gt),u(Gt,Jt),u(Ct,Xt),u(Xt,Yt),u(Ct,Kt),u(Kt,Qt),u(s,Ut),u(i,ta),u(i,aa),t[29](aa),t[30](i),t[31](a),ia=!0,na||(sa=_(a,"outroend",t[27]),na=!0)},p(t,e){(!ia||4&e[0])&&b(a,"--box-width",t[2]+"vw"),(!ia||16&e[0])&&b(a,"--pulse-width",t[4]+"vw"),(!ia||32&e[0])&&b(a,"--shadow-blur",t[5]+"vw"),(!ia||128&e[0])&&b(a,"--pulse-border-width",t[7]+"vw"),(!ia||64&e[0])&&b(a,"--shadow-pulse-blur",t[6]+"vw")},i(t){ia||(Z((()=>{ea||(ea=Y(a,at,{duration:500,amount:100},!0)),ea.run(1)})),ia=!0)},o(t){ea||(ea=Y(a,at,{duration:500,amount:100},!1)),ea.run(0),ia=!1},d(e){e&&w(a),t[29](null),t[30](null),t[31](null),e&&ea&&ea.end(),na=!1,sa()}}}function ht(a){let e,i,s,o,d=a[8]&&ct(a);return{c(){d&&d.c(),e=y(""),this.c=t},m(t,n){d&&d.m(t,n),m(t,e,n),i=!0,s||(o=_(lt,"resize",a[28]),s=!0)},p(t,a){t[8]?d?(d.p(t,a),256&a[0]&&G(d,1)):(d=ct(t),d.c(),G(d,1),d.m(e.parentNode,e)):d&&(z={r:0,c:[],p:z},J(d,1,1,(()=>{d=null})),z.r||n(z.c),z=z.p)},i(t){i||(G(d),i=!0)},o(t){J(d),i=!1},d(t){d&&d.d(t),t&&w(e),s=!1,o()}}}function ut(t,a,e){let i,n,s,o,d,r,l,c,h=!0,u=!1;const f=window._vmv_$s1,p=document.getElementById("_vmv_fade"),{_$pulseElWidth:m,_$uniqCorrectSpeedAnimation:w,_$speedRatio:g,_$fill1:v,_$fill2:y,_$fill3:_,_$fill4:$,_$fill5:b,_$fill6:k,_$fill7:M,_$fill8:x,_$shadow:C,_$htmlPreloader:T,_$preloaderWidth:E,_$preloaderHeight:A,_$pulseElement:S,_$cssPreloader:N,_$bg:B,_$bgStop1:H,_$bgStop2:Z,_$bgGradientType:I,_$bgGradientDirection:V,_$bgImage:F,_$timeStamp:j,pulseBottom:q,pulseLeft:O,cssBox:R,htmlBox:z}=window._vmv_$s1,G=new dt(f),J=new rt(f);J.setHideAction((()=>{e(8,h=!1)})),P((async()=>{await(W(),D),function(){if(u)return;p.style.opacity="0",p.addEventListener("transitionend",(function(t){i.classList.add("active"),function(t="#_vmv_fade"){et(t),et("style[data-vmv-s0]")}()}));i.querySelector("path.last-path").addEventListener("transitionend",(function(t){console.log("animation end"),function(){if(u)return;J.baseAnimationEnded(Y)}()})),K()}()}));const X=new ot(f);function Y(){u||(S?i.querySelector(S).classList.add("vmv-pulse-run"):(e(3,o.style.display="block",o),e(3,o.style.opacity="1",o)))}function K(){if(u)return;const t=X.getWidthCorrection();e(4,d=t/100*m),e(2,s=S?t:t-2*d),console.log(X),e(5,r=s/100),e(6,l=d/50),e(7,c=d/50)}const Q=function(t,a,e){let i;return function(){let n=this,s=arguments;clearTimeout(i),i=setTimeout((function(){i=null,e||t.apply(n,s)}),a),e&&!i&&t.apply(n,s)}}(K,50);return[i,n,s,o,d,r,l,c,h,g,v,y,_,$,b,k,M,x,C,B,H,Z,I,V,F,q,O,function(){G.setValue(j),u=!0,st()},function(){Q()},function(t){L[t?"unshift":"push"]((()=>{o=t,e(3,o)}))},function(t){L[t?"unshift":"push"]((()=>{n=t,e(1,n)}))},function(t){L[t?"unshift":"push"]((()=>{i=t,e(0,i)}))}]}class ft extends U{constructor(t){super(),this.shadowRoot.innerHTML="<style>.vmv{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:2147483637;background-color:var(--bg);overflow:hidden}.vmv__box-in{position:relative;width:var(--box-width)}.vmv__svg{width:100%;max-width:none;will-change:contents;overflow:visible;filter:drop-shadow(0 0 var(--shadow-blur) var(--shadow));transform:translateZ(2111221em);padding:10px 0}.fill-1{stroke:var(--stroke1)}.fill-2{stroke:var(--stroke2)}.fill-3{stroke:var(--stroke3)}.vmv_pulse{display:none;opacity:0;position:absolute;bottom:var(--pulse-bottom);left:var(--pulse-left);width:var(--pulse-width);height:var(--pulse-width)}.vmv_pulse__item{width:0;position:absolute;border-radius:50%;border:var(--pulse-border-width) solid var(--stroke4);top:50%;left:50%;transform:translateX(-50%) translateY(-50%);filter:drop-shadow(0 0 var(--shadow-pulse-blur) var(--shadow))}.vmv_pulse__item-1{animation:pulse 1.5s ease infinite 0s}.vmv_pulse__item-2{animation:pulse 1.5s ease infinite .4s}.vmv_pulse__item:before{content:'';display:block;padding-top:100%}@keyframes pulse{0%{width:0;opacity:0}30%{opacity:1}100%{width:100%;opacity:0}}@keyframes pulse2{0%,20%{transform:scale(1)}30%{transform:scale(1.1)}50%{transform:scale(1)}60%{transform:scale(1.1)}100%,70%{transform:scale(1)}}.vmv-pulse-run{transform-origin:12% 12%;animation:pulse2 1s infinite}.vmv__svg-glyphs path{transition-timing-function:linear!important}.vmv.active .vmv__svg-glyphs path{stroke-dashoffset:0}</style>",Q(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},ut,ht,o,{},null,[-1,-1]),t&&t.target&&m(t.target,this,t.anchor)}}return customElements.define("vmv-preloader",ft),function(){if("undefined"==typeof window)return!1;window._vmv_$s0.isActive||(nt(),it())}(),ft}));
