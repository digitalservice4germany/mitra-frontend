var L=Object.defineProperty,U=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(e,t,a)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,S=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&E(e,a,t[a]);if(P)for(var a of P(t))V.call(t,a)&&E(e,a,t[a]);return e},M=(e,t)=>U(e,F(t));import{c as q,d as G}from"./provide.25ae590a.js";import{u as T}from"./session.b6390bbe.js";import{U as J,r as f,o as s,c as i,F as m,v as A,w as k,i as r,t as v,l as b,M as B,p as N,a2 as H,T as j,f as K,s as O,u as g,g as w,h}from"./vendor.1c99488f.js";import"./index.b978f990.js";var D={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Q={class:"p-submenu-list",role:"tree"},W={class:"p-menuitem-text"},X={class:"p-menuitem-text"},Y={class:"p-toggleable-content"};function Z(e,t,a,d,o,l){const y=f("router-link"),p=f("PanelMenuSub",!0);return s(),i("ul",Q,[(s(!0),i(m,null,A(a.model,(n,c)=>(s(),i(m,{key:l.label(n)+c.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(B(a.template),{key:1,item:n},null,8,["item"])):(s(),i(m,{key:0},[n.to&&!l.disabled(n)?(s(),i(y,{key:0,to:n.to,custom:""},{default:k(({navigate:u,href:x,isActive:_,isExactActive:I})=>[r("a",{href:x,class:l.linkClass(n,{isRouterActive:_,isExactActive:I}),onClick:C=>l.onItemClick(C,n,u),role:"treeitem","aria-expanded":l.isActive(n)},[r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",W,v(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:u=>l.onItemClick(u,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):b("",!0),r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",X,v(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(j,{name:"p-toggleable-content"},{default:k(()=>[N(r("div",Y,[l.visible(n)&&n.items?(s(),i(p,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=u=>e.$emit("item-toggle",u)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):b("",!0)],512),[[H,l.isActive(n)]])]),_:2},1024)],6)):b("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+c.toString()},null,6)):b("",!0)],64))),128))])}D.render=Z;var z={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=S({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:D},computed:{ariaId(){return J()}}};const $={class:"p-panelmenu p-component"},ee={class:"p-menuitem-text"},ne={class:"p-menuitem-text"},te={key:0,class:"p-panelmenu-content"};function le(e,t,a,d,o,l){const y=f("router-link"),p=f("PanelMenuSub");return s(),i("div",$,[(s(!0),i(m,null,A(a.model,(n,c)=>(s(),i(m,{key:l.label(n)+"_"+c},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[r("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(B(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(m,{key:0},[n.to&&!l.disabled(n)?(s(),i(y,{key:0,to:n.to,custom:""},{default:k(({navigate:u,href:x,isActive:_,isExactActive:I})=>[r("a",{href:x,class:l.getHeaderLinkClass(n,{isActive:_,isExactActive:I}),onClick:C=>l.onItemClick(C,n,u),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):b("",!0),r("span",ee,v(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:u=>l.onItemClick(u,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+c,"aria-controls":l.ariaId+"_content_"+c},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):b("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):b("",!0),r("span",ne,v(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(j,{name:"p-toggleable-content"},{default:k(()=>[N(r("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+c,"aria-labelledby":l.ariaId+"_header_"+c},[n.items?(s(),i("div",te,[r(p,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):b("",!0)],8,["id","aria-labelledby"]),[[H,l.isActive(n)]])]),_:2},1024)],6)):b("",!0)],64))),128))])}function ae(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var se=`
.p-panelmenu .p-panelmenu-header-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-link:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
    text-decoration: none;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;ae(se);z.render=le;const ie=K({props:{playbook:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,d=T(),o=(p,n)=>n.path.find(c=>c.equals(d.cache.get(a.playbook.id)))?M(S({},p),{class:"font-bold"}):p,l=p=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{key:"1",label:a.playbook.title||"Unbenanntes Playbook",items:p.map((n,c)=>o({label:`${c+1}. ${n.text}`,command:()=>t("navigate",n.path[0])},n))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];d.$subscribe(()=>{y.value=l(a.playbook.modules)});const y=O(l(a.playbook.modules));return(p,n)=>(s(),i(g(z),{model:y.value,"expanded-keys":{"1":!0},class:"w-70"},null,8,["model"]))}}),re={class:"flex h-full"},ce={class:"flex-none"},de={class:"flex-1 p-8"},oe=K({props:{id:null},setup(e){const t=e,a=T(),d=G(),l=q().findById(t.id),y=()=>{d.save(l)},p=n=>{a.rememberCurrentStep(l,n)};return(n,c)=>(s(),w(m,null,[h("header",null,[h("h1",null,v(g(l).title||"Unbenanntes Playbook"),1)]),h("div",re,[h("nav",ce,[r(ie,{playbook:g(l),onSave:y,onNavigate:p},null,8,["playbook"])]),h("main",de,[h("section",null,[h("ol",null,[(s(!0),w(m,null,A(g(l).modules,u=>(s(),w("li",{key:u.id},v(u.text),1))),128))])])])])],64))}}),he=K({props:{id:null},setup(e){return(t,a)=>(s(),i(oe,{id:e.id},null,8,["id"]))}});export{he as default};
