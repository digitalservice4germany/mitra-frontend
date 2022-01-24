import{r as u,o as f,c as _,a as l,b as h,d as v,e as y,P as E}from"./vendor.1c99488f.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const k="modulepreload",c={},P="/mitra-frontend/",i=function(a,n){return!n||n.length===0?a():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",d)})})).then(()=>a())},L=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>i(()=>import("./creator.1034373b.js"),["assets/creator.1034373b.js","assets/StartScreen.9b46eb8a.js","assets/CreateContractPanel.068a17e4.css","assets/CreateContractPanel.fbbd354a.js","assets/vendor.1c99488f.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>i(()=>import("./einkauf.36bddbc3.js"),["assets/einkauf.36bddbc3.js","assets/CreateContractPanel.fbbd354a.js","assets/CreateContractPanel.068a17e4.css","assets/vendor.1c99488f.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>i(()=>import("./index.2c737a16.js"),["assets/index.2c737a16.js","assets/StartScreen.9b46eb8a.js","assets/CreateContractPanel.068a17e4.css","assets/CreateContractPanel.fbbd354a.js","assets/vendor.1c99488f.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>i(()=>import("./_id_.5f0b0fe3.js"),["assets/_id_.5f0b0fe3.js","assets/_id_.7f84ac8c.css","assets/vendor.1c99488f.js","assets/button.esm.995ec638.js","assets/provide.25ae590a.js","assets/session.b6390bbe.js"]),props:!0},{name:"mitra-frontend-contract-new",path:"/mitra-frontend/contract/new",component:()=>i(()=>import("./new.5dfa8f33.js"),["assets/new.5dfa8f33.js","assets/vendor.1c99488f.js","assets/provide.25ae590a.js"]),props:!0},{name:"mitra-frontend-contract-open-playbook",path:"/mitra-frontend/contract/open-playbook",component:()=>i(()=>import("./open-playbook.f529e66c.js"),["assets/open-playbook.f529e66c.js","assets/NavigateToHome.34094cbc.js","assets/button.esm.995ec638.js","assets/vendor.1c99488f.js","assets/provide.25ae590a.js"]),props:!0},{name:"mitra-frontend-contract-open",path:"/mitra-frontend/contract/open",component:()=>i(()=>import("./open.118e574d.js"),["assets/open.118e574d.js","assets/NavigateToHome.34094cbc.js","assets/button.esm.995ec638.js","assets/vendor.1c99488f.js","assets/provide.25ae590a.js"]),props:!0},{name:"mitra-frontend-playbook-id",path:"/mitra-frontend/playbook/:id",component:()=>i(()=>import("./_id_.51b05a58.js"),["assets/_id_.51b05a58.js","assets/_id_.208263ad.css","assets/provide.25ae590a.js","assets/session.b6390bbe.js","assets/vendor.1c99488f.js"]),props:!0},{name:"mitra-frontend-playbook-new",path:"/mitra-frontend/playbook/new",component:()=>i(()=>import("./new.b876e44e.js"),["assets/new.b876e44e.js","assets/vendor.1c99488f.js","assets/provide.25ae590a.js"]),props:!0},{name:"mitra-frontend-playbook-open",path:"/mitra-frontend/playbook/open",component:()=>i(()=>import("./open.a8bdf6c6.js"),["assets/open.a8bdf6c6.js","assets/NavigateToHome.34094cbc.js","assets/button.esm.995ec638.js","assets/vendor.1c99488f.js","assets/provide.25ae590a.js"]),props:!0}];var O=(s,a)=>{const n=s.__vccOpts||s;for(const[r,e]of a)n[r]=e;return n};const A={};function R(s,a){const n=u("router-view");return f(),_(n)}var g=O(A,[["render",R]]);const p=l(g).use(h({history:v(),routes:L})).use(y()).use(E);p.directive("focus",{mounted(s){s.focus()}});p.mount("#app");export{O as _,i as a};
