import{a as _}from"./SideMenu.dc186e6b.js";import{P as k,e as h}from"./provide.c657d617.js";import{u as y}from"./session.ab4c07a9.js";import{f as C,a0 as g,r as v,o as r,c as x,w as c,j as B,g as i,t as u,a8 as I,u as p}from"./vendor.0be2fb2e.js";const P=["href","onClick"],S={key:1},z=C({props:{currentTitle:null,parentItems:null},setup(m){const l=m,d={to:`/mitra-frontend/${y().entryPoint}`,label:"Startseite"},f=g(()=>{const o=[];let s="/mitra-frontend";const a=(e,n)=>{let t=n;return e instanceof k&&(t+=`/playbook/${e.id}`),e instanceof h&&(t+=`/module/${e.id}`),t};return l.parentItems.map(e=>{s=a(e,s),o.push({label:e.title,disabled:!1,to:s})}),o.push({label:l.currentTitle,disabled:!0,to:""}),o});return(o,s)=>{const a=v("router-link");return r(),x(p(_),{home:d,model:p(f),class:"mb-4"},{item:c(({item:e})=>[B(a,{to:e.to,custom:""},{default:c(({href:n,navigate:t,isActive:b})=>[e.to?(r(),i("a",{key:0,href:n,class:I({"active-link":b}),onClick:t},u(e.label),11,P)):(r(),i("span",S,u(e.label),1))]),_:2},1032,["to"])]),_:1},8,["model"])}}});export{z as _};