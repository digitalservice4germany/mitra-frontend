import{_ as m,s as h}from"./NavigateToHome.34ac1806.js";import{f as r,p as b,a6 as f,o as c,g as y,i,h as o,w as l,u as k,F as j,j as w,c as x}from"./vendor.0c93a05d.js";import{d as g,c as B}from"./provide.dae7344d.js";import"./button.esm.163025b2.js";import"./session.03f25a3d.js";import"./main.e543d2a8.js";const P={id:"open-playbook"},v=o("h2",{class:"font-bold mb-4"},"Playbook weiter bearbeiten",-1),N={for:"upload-playbook"},C=w("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),E={class:"mt-4"},F=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),V=r({setup(p){const s=g(),t=B(),d=async e=>{const a=e==null?void 0:e.files,n=await s.load(a instanceof Array?a[0]:a);t.save(n),await _.push(`/mitra-frontend/playbook/${n.id}`)},u=b("Computer durchsuchen"),_=f();return(e,a)=>(c(),y(j,null,[i(m),o("main",P,[v,o("label",N,[C,o("div",E,[i(k(h),{title:"Playbook ausw\xE4hlen","choose-label":u.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:d},{empty:l(()=>[S]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),H=r({setup(p){return(s,t)=>(c(),x(V))}});export{H as default};
