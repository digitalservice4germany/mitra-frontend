import{o as r,c as i,f as l,g as p,h as o,i as m,r as f,j as b,k as t,w as a,u as _,l as u}from"./vendor.47c007f9.js";var c={name:"Card"};const y={class:"p-card p-component"},v={key:0,class:"p-card-header"},$={class:"p-card-body"},k={key:0,class:"p-card-title"},g={key:1,class:"p-card-subtitle"},C={class:"p-card-content"},N={key:2,class:"p-card-footer"};function V(e,d,h,s,n,L){return r(),i("div",y,[e.$slots.header?(r(),i("div",v,[l(e.$slots,"header")])):p("",!0),o("div",$,[e.$slots.title?(r(),i("div",k,[l(e.$slots,"title")])):p("",!0),e.$slots.subtitle?(r(),i("div",g,[l(e.$slots,"subtitle")])):p("",!0),o("div",C,[l(e.$slots,"content")]),e.$slots.footer?(r(),i("div",N,[l(e.$slots,"footer")])):p("",!0)])])}function x(e,d){d===void 0&&(d={});var h=d.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",h==="top"&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var B=`
.p-card-header img {
    width: 100%;
}
`;x(B);c.render=V;const w={id:"index",class:"grid grid-rows-2 justify-center"},E=t("h2",{class:"font-black mt-8 mb-2"},"Vertr\xE4ge",-1),S={class:"flex flex-row"},T=t("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"description",-1),j=u(" Vertrag bearbeiten "),P=t("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"cloud",-1),A=u(" Neuer EVB-IT Cloud Vertrag "),I=t("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"add",-1),z=u(" Neuer Vertrag aus lokaler Datei "),D=t("h2",{class:"font-black mt-8 mb-2"},"Playbooks",-1),q={class:"flex flex-row"},F=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"smart_display",-1),G=u(" Playbook bearbeiten "),H=t("span",{class:"material-icons-outlined","aria-hidden":"true"},"add",-1),J=u(" Neues Playbook "),K=m({setup(e){return(d,h)=>{const s=f("router-link");return r(),b("main",w,[t("section",null,[E,t("div",S,[o(_(c),null,{content:a(()=>[o(s,{to:"/mitra-frontend/open-contract",class:"block"},{default:a(()=>[T,j]),_:1})]),_:1}),o(_(c),null,{content:a(()=>[o(s,{to:"/mitra-frontend/contract/cloud-contract",class:"block"},{default:a(()=>[P,A]),_:1})]),_:1}),o(_(c),null,{content:a(()=>[o(s,{to:"/mitra-frontend/open-playbook",class:"block"},{default:a(()=>[I,z]),_:1})]),_:1})])]),t("section",null,[D,t("div",q,[o(_(c),{class:"p-disabled"},{content:a(()=>[F,G]),_:1}),o(_(c),{class:"p-disabled"},{content:a(()=>[H,J]),_:1})])])])}}}),O=m({setup(e){return(d,h)=>(r(),i(K))}});export{O as default};
