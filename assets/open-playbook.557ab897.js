import{N as h,s as b}from"./NavigateToHome.5ad7cbbb.js";import{i as c,p as f,n as k,o as r,j as y,h as l,k as o,w as i,u as x,F as j,l as w,c as N}from"./vendor.dbd82945.js";import{C as g,c as C,a as v}from"./provide.9e81a04e.js";import"./button.esm.f048048e.js";import"./index.36e9325b.js";const B={id:"open-playbook"},P=o("h2",{class:"font-bold mb-4"},"Neuen Vertrag erstellen",-1),V={for:"upload-playbook"},E=w("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),F={class:"mt-4"},R=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),T=c({setup(p){const a=C(),s=v(),u=async e=>{const t=e==null?void 0:e.files,m=await a.load(t instanceof Array?t[0]:t),n=g.fromPlaybook(m);s.save(n),await _.push(`/mitra-frontend/contract/${n.id}`)},d=f("Computer durchsuchen"),_=k();return(e,t)=>(r(),y(j,null,[l(h),o("main",B,[P,o("label",V,[E,o("div",F,[l(x(b),{title:"Playbook ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:u},{empty:i(()=>[S]),default:i(()=>[R]),_:1},8,["choose-label"])])])])],64))}}),I=c({setup(p){return(a,s)=>(r(),N(T))}});export{I as default};