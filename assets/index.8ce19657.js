import{r as u,o as f,c as _,a as l,b as h,d as v,e as y,P as E}from"./vendor.cd6d337b.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const k="modulepreload",s={},P="/mitra-frontend/",i=function(a,n){return!n||n.length===0?a():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in s)return;s[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",d)})})).then(()=>a())},L=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>i(()=>import("./creator.7821c7db.js"),["assets/creator.7821c7db.js","assets/StartScreen.658e14d1.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.315d55ad.js","assets/vendor.cd6d337b.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>i(()=>import("./einkauf.09b8ebc4.js"),["assets/einkauf.09b8ebc4.js","assets/CreateContractPanel.315d55ad.js","assets/StartScreen.772e6936.css","assets/vendor.cd6d337b.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>i(()=>import("./index.3fae5939.js"),["assets/index.3fae5939.js","assets/StartScreen.658e14d1.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.315d55ad.js","assets/vendor.cd6d337b.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>i(()=>import("./_id_.f007682f.js"),["assets/_id_.f007682f.js","assets/_id_.d47a396b.css","assets/vendor.cd6d337b.js","assets/button.esm.68560b71.js","assets/provide.a618e4e8.js"]),props:!0},{name:"mitra-frontend-contract-new",path:"/mitra-frontend/contract/new",component:()=>i(()=>import("./new.a3828a1f.js"),["assets/new.a3828a1f.js","assets/vendor.cd6d337b.js","assets/provide.a618e4e8.js"]),props:!0},{name:"mitra-frontend-contract-open-playbook",path:"/mitra-frontend/contract/open-playbook",component:()=>i(()=>import("./open-playbook.87b6c6e8.js"),["assets/open-playbook.87b6c6e8.js","assets/NavigateToHome.48dcd585.js","assets/button.esm.68560b71.js","assets/vendor.cd6d337b.js","assets/provide.a618e4e8.js"]),props:!0},{name:"mitra-frontend-contract-open",path:"/mitra-frontend/contract/open",component:()=>i(()=>import("./open.643733ca.js"),["assets/open.643733ca.js","assets/NavigateToHome.48dcd585.js","assets/button.esm.68560b71.js","assets/vendor.cd6d337b.js","assets/provide.a618e4e8.js"]),props:!0},{name:"mitra-frontend-playbook-id",path:"/mitra-frontend/playbook/:id",component:()=>i(()=>import("./_id_.7c2dfc08.js"),["assets/_id_.7c2dfc08.js","assets/provide.a618e4e8.js","assets/vendor.cd6d337b.js"]),props:!0},{name:"mitra-frontend-playbook-new",path:"/mitra-frontend/playbook/new",component:()=>i(()=>import("./new.15c1e148.js"),["assets/new.15c1e148.js","assets/vendor.cd6d337b.js","assets/provide.a618e4e8.js"]),props:!0},{name:"mitra-frontend-playbook-open",path:"/mitra-frontend/playbook/open",component:()=>i(()=>import("./open.0bf98e98.js"),["assets/open.0bf98e98.js","assets/NavigateToHome.48dcd585.js","assets/button.esm.68560b71.js","assets/vendor.cd6d337b.js","assets/provide.a618e4e8.js"]),props:!0}];var O=(c,a)=>{const n=c.__vccOpts||c;for(const[r,e]of a)n[r]=e;return n};const A={};function R(c,a){const n=u("router-view");return f(),_(n)}var g=O(A,[["render",R]]);const p=l(g).use(h({history:v(),routes:L})).use(y()).use(E);p.directive("focus",{mounted(c){c.focus()}});p.mount("#app");export{O as _,i as a};
