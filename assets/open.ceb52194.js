import{N as h,s as m}from"./NavigateToHome.ac9e0b9a.js";import{f as r,s as f,a1 as b,o as n,g,i,h as e,w as l,u as x,F as j,j as w,c as y}from"./vendor.4f77a301.js";import{b as N,m as V}from"./provide.07896cc7.js";import"./button.esm.464953b3.js";import"./index.bba3cde9.js";const k={id:"open-contract"},v=e("h2",{class:"font-bold mb-4"},"Vertrag bearbeiten",-1),B={for:"upload-contract"},C=w("W\xE4hlen Sie einen Vertrag von Ihrer Festplatte aus. "),E={class:"mt-4"},F=e("input",{id:"upload-contract",type:"file"},null,-1),R=e("p",null,"Datei in diesen Bereich ziehen.",-1),S=r({setup(u){const a=N(),s=V(),p=async t=>{const o=t==null?void 0:t.files,c=await a.load(o instanceof Array?o[0]:o);s.save(c),await _.push(`/mitra-frontend/contract/${c.id}`)},d=f("Computer durchsuchen"),_=b();return(t,o)=>(n(),g(j,null,[i(h),e("section",k,[v,e("label",B,[C,e("div",E,[i(x(m),{title:"Vertrag ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:p},{empty:l(()=>[R]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),D=r({setup(u){return(a,s)=>(n(),y(S))}});export{D as default};
