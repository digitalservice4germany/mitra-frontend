import{_ as m,s as h}from"./NavigateToHome.edca1cf8.js";import{f as n,v as b,a1 as f,o as r,g as y,i,h as o,w as l,u as k,F as j,j as w,c as x}from"./vendor.d1ed8eac.js";import{d as g,c as v}from"./provide.4bac061d.js";import"./button.esm.beccdf6b.js";import"./session.89ad4730.js";import"./main.5038d445.js";const B={id:"open-playbook"},P=o("h2",{class:"font-bold mb-4"},"Playbook weiter bearbeiten",-1),N={for:"upload-playbook"},C=w("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),E={class:"mt-4"},F=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),V=n({setup(p){const s=g(),t=v(),d=async e=>{const a=e==null?void 0:e.files,c=await s.load(a instanceof Array?a[0]:a);t.save(c),await _.push(`/mitra-frontend/playbook/${c.id}`)},u=b("Computer durchsuchen"),_=f();return(e,a)=>(r(),y(j,null,[i(m),o("main",B,[P,o("label",N,[C,o("div",E,[i(k(h),{title:"Playbook ausw\xE4hlen","choose-label":u.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:d},{empty:l(()=>[S]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),H=n({setup(p){return(s,t)=>(r(),x(V))}});export{H as default};
