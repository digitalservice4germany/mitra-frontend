import{_ as f,s as m}from"./NavigateToHome.89aa936a.js";import{f as r,p as h,a6 as b,o as c,g as y,i,h as o,w as l,u as k,F as j,j as w,c as x}from"./vendor.080d7534.js";import{d as g,c as B}from"./provide.8e3eeacf.js";import"./button.esm.a9f2ef5f.js";import"./session.29bf2303.js";import"./main.25f58d58.js";const P={id:"open-playbook"},v=o("h2",{class:"font-bold mb-4"},"Playbook weiter bearbeiten",-1),N={for:"upload-playbook"},C=w("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),E={class:"mt-4"},F=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),V=r({setup(p){const s=g(),t=B(),u=async e=>{const a=e==null?void 0:e.files,n=await s.load(a instanceof Array?a[0]:a);t.save(n),await _.push(`/mitra-frontend/playbook/${n.id}`)},d=h("Computer durchsuchen"),_=b();return(e,a)=>(c(),y(j,null,[i(f),o("main",P,[v,o("label",N,[C,o("div",E,[i(k(m),{title:"Playbook ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:u},{empty:l(()=>[S]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),H=r({setup(p){return(s,t)=>(c(),x(V))}});export{H as default};
