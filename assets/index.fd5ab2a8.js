import{o as a,c,f as u,g as p,h as s,r as f,n as m,p as t,s as d,z as l,i as $,u as h,F as b}from"./vendor.3a5fdff0.js";import{_ as v}from"./index.3c3552ec.js";var _={name:"Card"};const y={class:"p-card p-component"},k={key:0,class:"p-card-header"},g={class:"p-card-body"},x={key:0,class:"p-card-title"},C={key:1,class:"p-card-subtitle"},N={class:"p-card-content"},V={key:2,class:"p-card-footer"};function B(e,r,i,o,n,Y){return a(),c("div",y,[e.$slots.header?(a(),c("div",k,[u(e.$slots,"header")])):p("",!0),s("div",g,[e.$slots.title?(a(),c("div",x,[u(e.$slots,"title")])):p("",!0),e.$slots.subtitle?(a(),c("div",C,[u(e.$slots,"subtitle")])):p("",!0),s("div",N,[u(e.$slots,"content")]),e.$slots.footer?(a(),c("div",V,[u(e.$slots,"footer")])):p("",!0)])])}function w(e,r){r===void 0&&(r={});var i=r.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var E=`
.p-card-header img {
    width: 100%;
}
`;w(E);_.render=B;const S={},T={class:"py-4 text-xl"},j={class:"font-black"},A=l("Mitra");function P(e,r){const i=f("router-link");return a(),m("header",T,[t("h1",j,[s(i,{to:"/mitra-frontend/"},{default:d(()=>[A]),_:1})])])}var z=v(S,[["render",P]]);const F={id:"index",class:"grid grid-rows-2 justify-center"},I=t("h2",{class:"font-black mt-8 mb-2"},"Vertr\xE4ge",-1),D={class:"flex flex-row"},H=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"description",-1),M=l(" Vertrag bearbeiten "),q=t("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"cloud",-1),G=l(" Neuer EVB-IT Cloud Vertrag "),J=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"add",-1),K=l(" Neuer Vertrag aus lokaler Datei "),L=t("h2",{class:"font-black mt-8 mb-2"},"Playbooks",-1),O={class:"flex flex-row"},Q=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"smart_display",-1),R=l(" Playbook bearbeiten "),U=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"add",-1),W=l(" Neues Playbook "),X=$({setup(e){return(r,i)=>{const o=f("router-link");return a(),m(b,null,[s(z),t("main",F,[t("section",null,[I,t("div",D,[s(h(_),{class:"p-disabled"},{content:d(()=>[H,M]),_:1}),s(h(_),null,{content:d(()=>[s(o,{to:"/mitra-frontend/contract",class:"block"},{default:d(()=>[q,G]),_:1})]),_:1}),s(h(_),{class:"p-disabled"},{content:d(()=>[J,K]),_:1})])]),t("section",null,[L,t("div",O,[s(h(_),{class:"p-disabled"},{content:d(()=>[Q,R]),_:1}),s(h(_),{class:"p-disabled"},{content:d(()=>[U,W]),_:1})])])])],64)}}}),te=$({setup(e){return(r,i)=>(a(),c(X))}});export{te as default};