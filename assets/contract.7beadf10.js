import{H as c}from"./Header.4a1668fe.js";import{e as s,o as t,f as r,g as i,F as a,t as u,h as l,u as _}from"./vendor.657320d5.js";import"./index.f3b9a7f2.js";const d=s({props:{playbook:null},setup(e){return(n,p)=>(t(!0),r(a,null,i(e.playbook.steps,o=>(t(),r("div",{key:o},u(o),1))),128))}}),f={find:e=>(console.log(`Looking up Playbook with id ${e}`),{steps:["First","Second"]})};const b=s({setup(e){const n=f.find("test");return(p,o)=>(t(),r(a,null,[l(c),l(d,{playbook:_(n)},null,8,["playbook"])],64))}});export{b as default};
