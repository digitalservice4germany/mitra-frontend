import{a as b}from"./SideMenu.0028a7d5.js";import{u as k,P as h,d as y}from"./session.76a10e0f.js";import{f as C,_ as g,r as v,o as r,c as x,w as c,j as B,g as i,t as u,a3 as I,u as p}from"./vendor.4eaa413b.js";const P=["href","onClick"],S={key:1},j=C({props:{currentTitle:null,parentItems:null},setup(m){const l=m,d={to:`/mitra-frontend/${k().entryPoint}`,label:"Startseite"},f=g(()=>{const o=[];let s="/mitra-frontend";const a=(e,n)=>{let t=n;return e instanceof h&&(t+=`/playbook/${e.id}`),e instanceof y&&(t+=`/module/${e.id}`),t};return l.parentItems.map(e=>{s=a(e,s),o.push({label:e.title,disabled:!1,to:s})}),o.push({label:l.currentTitle,disabled:!0,to:""}),o});return(o,s)=>{const a=v("router-link");return r(),x(p(b),{home:d,model:p(f),class:"mb-4"},{item:c(({item:e})=>[B(a,{to:e.to,custom:""},{default:c(({href:n,navigate:t,isActive:_})=>[e.to?(r(),i("a",{key:0,href:n,class:I({"active-link":_}),onClick:t},u(e.label),11,P)):(r(),i("span",S,u(e.label),1))]),_:2},1032,["to"])]),_:1},8,["model"])}}});export{j as _};
