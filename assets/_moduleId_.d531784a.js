import{Z as N,J as g,r as O,L as R,o as r,c,w as m,F as z,s as W,M,j as u,t as T,m as I,N as J,Q as Z,p as Q,T as G,f as j,q as y,g as w,h as d,u as p,_ as A,k as B,a8 as ee,a7 as te}from"./vendor.0be2fb2e.js";import{R as ne,s as F}from"./button.esm.75cd8d93.js";import{s as K,b as $,_ as se}from"./SideMenu.dc186e6b.js";import{c as ie,T as U,d as le}from"./provide.c657d617.js";import{_ as ae}from"./Breadcrumb.1995f7ef.js";import"./session.ab4c07a9.js";import"./Contract.6e826346.js";import"./main.2ccca9b1.js";var H={name:"ContextMenuSub",emits:["leaf-click"],props:{model:{type:Array,default:null},root:{type:Boolean,default:!1},parentActive:{type:Boolean,default:!1},template:{type:Function,default:null},exact:{type:Boolean,default:!0}},watch:{parentActive(e){e||(this.activeItem=null)}},data(){return{activeItem:null}},methods:{onItemMouseEnter(e,t){if(this.disabled(t)){e.preventDefault();return}this.activeItem=t},onItemClick(e,t,i){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),t.items&&(this.activeItem&&t===this.activeItem?this.activeItem=null:this.activeItem=t),t.items||this.onLeafClick(),t.to&&i&&i(e)},onLeafClick(){this.activeItem=null,this.$emit("leaf-click")},onEnter(){this.position()},position(){const e=this.$refs.container.parentElement,t=g.getOffset(this.$refs.container.parentElement),i=g.getViewport(),l=this.$refs.container.offsetParent?this.$refs.container.offsetWidth:g.getHiddenElementOuterWidth(this.$refs.container),a=g.getOuterWidth(e.children[0]);this.$refs.container.style.top="0px",parseInt(t.left,10)+a+l>i.width-g.calculateScrollbarWidth()?this.$refs.container.style.left=-1*l+"px":this.$refs.container.style.left=a+"px"},getItemClass(e){return["p-menuitem",e.class,{"p-menuitem-active":this.activeItem===e}]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},computed:{containerClass(){return{"p-submenu-list":!this.root}}},directives:{ripple:ne}};const oe={class:"p-menuitem-text"},re={class:"p-menuitem-text"},ue={key:0,class:"p-submenu-icon pi pi-angle-right"};function ce(e,t,i,l,a,n){const o=O("router-link"),b=O("ContextMenuSub",!0),x=R("ripple");return r(),c(Z,{name:"p-contextmenusub",onEnter:n.onEnter},{default:m(()=>[(i.root?!0:i.parentActive)?(r(),c("ul",{key:0,ref:"container",class:n.containerClass,role:"menu"},[(r(!0),c(z,null,W(i.model,(s,C)=>(r(),c(z,{key:n.label(s)+C.toString()},[n.visible(s)&&!s.separator?(r(),c("li",{key:0,role:"none",class:n.getItemClass(s),style:s.style,onMouseenter:f=>n.onItemMouseEnter(f,s)},[i.template?(r(),c(J(i.template),{key:1,item:s},null,8,["item"])):(r(),c(z,{key:0},[s.to&&!n.disabled(s)?(r(),c(o,{key:0,to:s.to,custom:""},{default:m(({navigate:f,href:h,isActive:k,isExactActive:L})=>[M(u("a",{href:h,onClick:S=>n.onItemClick(S,s,f),class:n.linkClass(s,{isActive:k,isExactActive:L}),role:"menuitem"},[u("span",{class:["p-menuitem-icon",s.icon]},null,2),u("span",oe,T(n.label(s)),1)],10,["href","onClick"]),[[x]])]),_:2},1032,["to"])):M((r(),c("a",{key:1,href:s.url,class:n.linkClass(s),target:s.target,onClick:f=>n.onItemClick(f,s),"aria-haspopup":s.items!=null,"aria-expanded":s===a.activeItem,role:"menuitem",tabindex:n.disabled(s)?null:"0"},[u("span",{class:["p-menuitem-icon",s.icon]},null,2),u("span",re,T(n.label(s)),1),s.items?(r(),c("span",ue)):I("",!0)],10,["href","target","onClick","aria-haspopup","aria-expanded","tabindex"])),[[x]])],64)),n.visible(s)&&s.items?(r(),c(b,{model:s.items,key:n.label(s)+"_sub_",template:i.template,onLeafClick:n.onLeafClick,parentActive:s===a.activeItem,exact:i.exact},null,8,["model","template","onLeafClick","parentActive","exact"])):I("",!0)],46,["onMouseenter"])):I("",!0),n.visible(s)&&s.separator?(r(),c("li",{class:["p-menu-separator",s.class],style:s.style,key:"separator"+C.toString(),role:"separator"},null,6)):I("",!0)],64))),128))],2)):I("",!0)]),_:1},8,["onEnter"])}H.render=ce;var P={name:"ContextMenu",inheritAttrs:!1,props:{model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},exact:{type:Boolean,default:!0}},target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,data(){return{visible:!1}},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&N.clear(this.container),this.container=null},mounted(){this.global&&this.bindDocumentContextMenuListener()},methods:{itemClick(e){const t=e.item;t.command&&(t.command(e),e.originalEvent.preventDefault()),this.hide()},toggle(e){this.visible?this.hide():this.show(e)},onLeafClick(){this.hide()},show(e){this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide(){this.visible=!1},onEnter(e){this.position(),this.bindOutsideClickListener(),this.bindResizeListener(),this.autoZIndex&&N.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener()},onAfterLeave(e){this.autoZIndex&&N.clear(e)},position(){let e=this.pageX+1,t=this.pageY+1,i=this.container.offsetParent?this.container.offsetWidth:g.getHiddenElementOuterWidth(this.container),l=this.container.offsetParent?this.container.offsetHeight:g.getHiddenElementOuterHeight(this.container),a=g.getViewport();e+i-document.body.scrollLeft>a.width&&(e-=i),t+l-document.body.scrollTop>a.height&&(t-=l),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!e.ctrlKey&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener(){this.documentContextMenuListener||(this.documentContextMenuListener=e=>{this.show(e)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-contextmenu p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{ContextMenuSub:H}};function de(e,t,i,l,a,n){const o=O("ContextMenuSub");return r(),c(G,{to:i.appendTo},[u(Z,{name:"p-contextmenu",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:m(()=>[a.visible?(r(),c("div",Q({key:0,ref:n.containerRef,class:n.containerClass},e.$attrs),[u(o,{model:i.model,root:!0,onLeafClick:n.onLeafClick,template:e.$slots.item,exact:i.exact},null,8,["model","onLeafClick","template","exact"])],16)):I("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])],8,["to"])}function pe(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var me=`
.p-contextmenu {
    position: absolute;
}
.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
}
.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-contextmenu .p-menuitem-text {
    line-height: 1;
}
.p-contextmenu .p-menuitem {
    position: relative;
}
.p-contextmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-contextmenu-enter-from {
    opacity: 0;
}
.p-contextmenu-enter-active {
    -webkit-transition: opacity 250ms;
    transition: opacity 250ms;
}
`;pe(me);P.render=de;const he={open:""},fe={class:"text-lg relative"},ve={class:"edit"},be={class:"block text-lg"},xe=d("div",null,null,-1),ye=d("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," more_vert ",-1),ke=j({props:{step:null},emits:["addStep","duplicateStep","deleteStep","updateStep"],setup(e,{emit:t}){const i=e,l=y(i.step.prompt),a=y(),n=()=>{const h=i.step;h.prompt=l.value,a.value.close(),t("updateStep",h)},o=y(i.step.description),b=y(),x=()=>{const h=i.step;h.description=o.value,b.value.close(),t("updateStep",h)},s=y(),C=[{label:"Neue Frage",command:()=>t("addStep")},{label:"Frage duplizieren",command:()=>t("duplicateStep")},{label:"Frage l\xF6schen",command:()=>t("deleteStep")}],f=h=>{s.value.show(h)};return(h,k)=>{const L=R("focus");return r(),w("details",he,[d("summary",fe,[d("header",ve,[u(p($),{ref_key:"editTitle",ref:a,closable:!1},{display:m(()=>[d("h2",be,T(l.value),1)]),content:m(()=>[M(u(p(K),{modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=S=>l.value=S),class:"text-lg","aria-label":"Titel \xE4ndern",onKeyup:A(n,["enter"]),onBlur:n},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},512),xe,u(p($),{ref_key:"editDescription",ref:b,closable:!1,class:ee([o.value?"":"text-slate-400"])},{display:m(()=>[B(T(o.value||"Erkl\xE4rungstext (optional)"),1)]),content:m(()=>[M(u(p(K),{modelValue:o.value,"onUpdate:modelValue":k[1]||(k[1]=S=>o.value=S),class:"text-lg","aria-label":"Erkl\xE4rung \xE4ndern",onKeyup:A(x,["enter"]),onBlur:x},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},8,["class"]),u(p(F),{type:"button",class:"absolute top-0 right-0","aria-label":"menu","aria-haspopup":"menu",onContextmenu:f,onClick:f,onKeypress:A(f,["m"])},{default:m(()=>[ye]),_:1},8,["onKeypress"]),u(p(P),{ref_key:"menu",ref:s,model:C},null,512)])])])}}}),_e={class:"flex h-full"},ge={class:"flex-none"},Ce={class:"flex-1 px-8"},Le={class:"edit"},Se=d("p",null,[d("small",null,"Modul")],-1),Ie={class:"font-bold text-xl"},Ee=d("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," edit ",-1),we=B(" \xC4ndern "),Me=d("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," delete ",-1),Te=B(" Modul l\xF6schen "),De={class:"mt-16"},ze=d("h2",{class:"font-bold text-lg"},"Fragen",-1),Ae={key:0},Be=d("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," add ",-1),Fe=B(" Neue Frage "),Ve={key:2},Ne=j({props:{playbookId:null,moduleId:null},setup(e){const t=e,i=te(),l=ie(),a=le(),n=y(l.findById(t.playbookId)),o=y(n.value.findModuleById(t.moduleId)),b=y(o.value.title),x=y(),s=()=>{x.value.open()},C=()=>{o.value.title=b.value,x.value.close(),l.save(n.value)},f=()=>{a.save(n.value)},h=async v=>{await i.push(`/mitra-frontend/playbook/${n.value.id}/module/${v.id}/`)},k=async()=>{n.value.removeModule(o.value),l.save(n.value),await i.push(`/mitra-frontend/playbook/${n.value.id}/`)},L=v=>{v?o.value.addStep(new U("Neue Frage"),v):o.value.addStep(new U("Neue Frage")),l.save(n.value)},S=v=>{o.value.duplicateStep(v),l.save(n.value)},X=v=>{o.value.removeStep(v),l.save(n.value)},Y=(v,E)=>{const V=o.value.steps.indexOf(v);o.value.steps[V]=E,l.save(n.value)};return(v,E)=>{const V=R("focus");return r(),w("div",_e,[d("nav",ge,[u(se,{title:p(n).title,navigatable:p(n),onSave:f,onNavigate:h},null,8,["title","navigatable"])]),d("main",Ce,[d("header",Le,[u(ae,{"current-title":b.value,"parent-items":[p(n)]},null,8,["current-title","parent-items"]),Se,u(p($),{ref_key:"editTitle",ref:x,closable:!1},{display:m(()=>[d("h1",Ie,T(b.value),1)]),content:m(()=>[M(u(p(K),{modelValue:b.value,"onUpdate:modelValue":E[0]||(E[0]=_=>b.value=_),class:"mr-1","aria-label":"Titel \xE4ndern",onKeyup:A(C,["enter"]),onBlur:C},null,8,["modelValue","onKeyup"]),[[V]])]),_:1},512),u(p(F),{type:"button",class:"mx-2",onClick:s},{default:m(()=>[Ee,we]),_:1}),u(p(F),{type:"button",onClick:k},{default:m(()=>[Me,Te]),_:1})]),d("section",De,[ze,o.value.steps.length===0?(r(),w("p",Ae," F\xFCr dieses Modul wurden noch keine Fragen erstellt. ")):I("",!0),o.value.steps.length===0?(r(),c(p(F),{key:1,type:"button",class:"mt-8",onClick:E[1]||(E[1]=_=>L())},{default:m(()=>[Be,Fe]),_:1})):(r(),w("ol",Ve,[(r(!0),w(z,null,W(o.value.steps,(_,q)=>(r(),w("li",{key:_.id,class:"mt-4 border p-4 shadow-md"},[u(ke,{step:_,onAddStep:D=>L(q+1),onDeleteStep:D=>X(_),onDuplicateStep:D=>S(_),onUpdateStep:D=>Y(_,D)},null,8,["step","onAddStep","onDeleteStep","onDuplicateStep","onUpdateStep"])]))),128))]))])])])}}}),He=j({props:{playbookId:null,moduleId:null},setup(e){return(t,i)=>(r(),c(Ne,{key:e.moduleId,"playbook-id":e.playbookId,"module-id":e.moduleId},null,8,["playbook-id","module-id"]))}});export{He as default};
