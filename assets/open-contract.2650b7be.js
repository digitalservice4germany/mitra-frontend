import{N as h,s as m}from"./NavigateToHome.7a2494c9.js";import{i as r,p as f,n as b,o as n,j as g,h as i,k as t,w as l,u as x,F as j,l as w,c as k}from"./vendor.a535f0a4.js";import{b as y,a as N}from"./provide.3d80c7bd.js";import"./button.esm.ae89b5d9.js";import"./index.40224081.js";const V={id:"open-contract"},v=t("h2",{class:"font-bold mb-4"},"Vertrag bearbeiten",-1),B={for:"upload-contract"},C=w("W\xE4hlen Sie einen Vertrag von Ihrer Festplatte aus. "),E={class:"mt-4"},F=t("input",{id:"upload-contract",type:"file"},null,-1),R=t("p",null,"Datei in diesen Bereich ziehen.",-1),S=r({setup(u){const a=y(),s=N(),d=async e=>{const o=e==null?void 0:e.files,c=await a.load(o instanceof Array?o[0]:o);s.save(c),await _.push(`/mitra-frontend/contract/${c.id}`)},p=f("Computer durchsuchen"),_=b();return(e,o)=>(n(),g(j,null,[i(h),t("section",V,[v,t("label",B,[C,t("div",E,[i(x(m),{title:"Vertrag ausw\xE4hlen","choose-label":p.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:d},{empty:l(()=>[R]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),D=r({setup(u){return(a,s)=>(n(),k(S))}});export{D as default};
