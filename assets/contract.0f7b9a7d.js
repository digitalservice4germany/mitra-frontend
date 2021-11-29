var me=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&N(e,n,t[n]);if(U)for(var n of U(t))he.call(t,n)&&N(e,n,t[n]);return e};var x=(e,t,n)=>(N(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as R,w as E,o as s,c as r,f as A,g as m,h as c,t as y,m as q,i as B,j as I,k as fe,l as be,n as j,p as C,u as v,U as H,r as P,F as D,q as G,s as S,v as W,x as J,T,y as Q,Z as O,z as xe,A as ye,B as ve}from"./vendor.3a5fdff0.js";import{_ as $}from"./index.3c792d35.js";var K,ke=new Uint8Array(16);function we(){if(!K&&(K=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(ke)}var Ce=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Se(e){return typeof e=="string"&&Ce.test(e)}var g=[];for(var X=0;X<256;++X)g.push((X+256).toString(16).substr(1));function _e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!Se(n))throw TypeError("Stringified UUID is invalid");return n}function Ie(e,t,n){e=e||{};var l=e.random||(e.rng||we)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return _e(l)}const Le=e=>e instanceof M;class M{constructor(){x(this,"id");this.id=Ie()}equals(t){return t==null||t==null?!1:this===t?!0:Le(t)?this.id===t.id:!1}}class V extends M{constructor(t,n=0,l=0){super();x(this,"title");x(this,"playbook");x(this,"currentModuleId");x(this,"currentStepId");x(this,"answers");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=l,this.answers=new Map}static fromPlaybook(t){return new V(t)}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.id)}updateCurrentStepAnswer(t){var n,l;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.id,t):this.answers.set((l=this.getCurrentStep())==null?void 0:l.id,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function Ee(e){e.addEventListener("mousedown",ee)}function De(e){e.removeEventListener("mousedown",ee)}function Me(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",te)}function ze(e){let t=ne(e);t&&(De(e),t.removeEventListener("animationend",te),t.remove())}function ee(e){let t=e.currentTarget,n=ne(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let l=p.getOffset(t),o=e.pageX-l.left+document.body.scrollTop-p.getWidth(n)/2,i=e.pageY-l.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=i+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function te(e){p.removeClass(e.currentTarget,"p-ink-active")}function ne(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ie={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Me(e),Ee(e))},unmounted(e){ze(e)}};var z={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ie}};const Ae={class:"p-button-label"};function Be(e,t,n,l,o,i){const d=R("ripple");return E((s(),r("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[A(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),r("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(s(),r("span",{key:1,class:i.iconClass},null,2)):m("",!0),c("span",Ae,y(n.label||"\xA0"),1),n.badge?(s(),r("span",{key:2,class:i.badgeStyleClass},y(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}z.render=Be;var F={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Pe(e,t,n,l,o,i){return s(),r("input",q({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>i.onInput&&i.onInput(...d))},e.$attrs),null,16,["value"])}F.render=Pe;const Te={class:"contract-step"},Ke={class:"question-block"},Ve={class:"answer-block"},Ne={class:"step-navigation"},Re=B({props:{contract:null},setup(e){const t=e,n=I(t.contract.currentStepId),l=I(),o=I(),i=I(),d=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.prevStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()},u=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.nextStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()};function a(){return()=>{l.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return fe(a()),be(a()),(h,f)=>{var _,w,b;return s(),j("section",{key:n.value},[C("h3",null,y((_=l.value)==null?void 0:_.text),1),C("div",Te,[C("div",Ke,y((w=o.value)==null?void 0:w.text),1),C("div",Ve,[c(v(F),{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=L=>i.value=L),class:"answer-input-text",title:(b=o.value)==null?void 0:b.text,type:"text"},null,8,["modelValue","title"])]),C("div",Ne,[t.contract.hasPrev()?(s(),r(v(z),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:d})):m("",!0),t.contract.hasNext()?(s(),r(v(z),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:u})):m("",!0)])])])}}});var je=$(Re,[["__scopeId","data-v-2ecef54f"]]),ae={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const He={class:"p-submenu-list",role:"tree"},Oe={class:"p-menuitem-text"},Xe={class:"p-menuitem-text"},Fe={class:"p-toggleable-content"};function Ye(e,t,n,l,o,i){const d=P("router-link"),u=P("PanelMenuSub",!0);return s(),r("ul",He,[(s(!0),r(D,null,G(n.model,(a,h)=>(s(),r(D,{key:i.label(a)+h.toString()},[i.visible(a)&&!a.separator?(s(),r("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(s(),r(W(n.template),{key:1,item:a},null,8,["item"])):(s(),r(D,{key:0},[a.to&&!i.disabled(a)?(s(),r(d,{key:0,to:a.to,custom:""},{default:S(({navigate:f,href:_,isActive:w,isExactActive:b})=>[c("a",{href:_,class:i.linkClass(a,{isRouterActive:w,isExactActive:b}),onClick:L=>i.onItemClick(L,a,f),role:"treeitem","aria-expanded":i.isActive(a)},[c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",Oe,y(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:f=>i.onItemClick(f,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(s(),r("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",Xe,y(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(T,{name:"p-toggleable-content"},{default:S(()=>[E(c("div",Fe,[i.visible(a)&&a.items?(s(),r(u,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=f=>e.$emit("item-toggle",f)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[J,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(s(),r("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+h.toString()},null,6)):m("",!0)],64))),128))])}ae.render=Ye;var le={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=Z({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:ae},computed:{ariaId(){return H()}}};const Ue={class:"p-panelmenu p-component"},Ze={class:"p-menuitem-text"},qe={class:"p-menuitem-text"},Ge={key:0,class:"p-panelmenu-content"};function We(e,t,n,l,o,i){const d=P("router-link"),u=P("PanelMenuSub");return s(),r("div",Ue,[(s(!0),r(D,null,G(n.model,(a,h)=>(s(),r(D,{key:i.label(a)+"_"+h},[i.visible(a)?(s(),r("div",{key:0,class:i.getPanelClass(a),style:a.style},[c("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(s(),r(W(e.$slots.item),{key:1,item:a},null,8,["item"])):(s(),r(D,{key:0},[a.to&&!i.disabled(a)?(s(),r(d,{key:0,to:a.to,custom:""},{default:S(({navigate:f,href:_,isActive:w,isExactActive:b})=>[c("a",{href:_,class:i.getHeaderLinkClass(a,{isActive:w,isExactActive:b}),onClick:L=>i.onItemClick(L,a,f),role:"treeitem"},[a.icon?(s(),r("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",Ze,y(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:f=>i.onItemClick(f,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(s(),r("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(s(),r("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",qe,y(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(T,{name:"p-toggleable-content"},{default:S(()=>[E(c("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(s(),r("div",Ge,[c(u,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[J,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Je(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Qe=`
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
`;Je(Qe);le.render=We;const $e=B({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((i=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:i.map((d,u)=>({label:`${u+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return Q(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,u)=>{const a=d.querySelector(".p-toggleable-content");(a==null?void 0:a.id)&&(a.id+=`_${u+1}`);const h=d.querySelector(".p-panelmenu-header-link");(h==null?void 0:h.id)?(h.id+=`_${u+1}`,a==null||a.setAttribute("aria-labelledby",h.id)):a==null||a.removeAttribute("aria-labelledby")})}),(i,d)=>(s(),j("nav",null,[c(v(le),{model:o.value,class:"w-70"},null,8,["model"])]))}});class se extends M{constructor(){super();x(this,"modules");this.modules=[]}addModules(...t){this.modules.push(...t)}}class Y extends M{constructor(t){super();x(this,"text");x(this,"steps");this.text=t,this.steps=[]}addSteps(...t){this.steps.push(...t)}}class et extends M{constructor(t,n){super();x(this,"text");x(this,"answer");this.text=t,this.answer=n}getText(){return this.text}getAnswer(){return this.answer}}class k extends et{constructor(t){super(t,{})}}const tt=new k("Schritt 1.1"),nt=new k("Schritt 1.2"),it=new k("Schritt 1.3"),at=new k("Schritt 2.1"),lt=new k("Schritt 2.2"),st=new k("Schritt 2.3"),ot=new k("Schritt 3.1"),rt=new k("Schritt 3.2"),dt=new k("Schritt 3.3"),ct=new k("Schritt 3.4"),oe=new Y("Rubrum"),re=new Y("Gegenstand und Bestandteile des Vertrags"),de=new Y("Gegenstand der Leistungen");oe.addSteps(tt,nt,it);re.addSteps(at,lt,st);de.addSteps(ot,rt,dt,ct);const ce=new se;ce.addModules(oe,re,de);const ut={load(){return ce},save(){}};function pt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function mt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const gt={load(){return new V(new se)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:pt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await mt(t,JSON.stringify(e))}}},ht=()=>ut,ft=()=>gt;var ue={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&O.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&O.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&O.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),l=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),d=i.left+l,u=i.top+o,a=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return H()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return H()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ie}};const bt={class:"p-dialog-header-icons"},xt=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),yt={key:1,class:"p-dialog-footer"};function vt(e,t,n,l,o,i){const d=R("ripple");return s(),r(ye,{to:i.appendTarget,disabled:i.appendDisabled},[o.containerVisible?(s(),r("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...u)=>i.onMaskClick&&i.onMaskClick(...u))},[c(T,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:S(()=>[n.visible?(s(),r("div",q({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>i.initDrag&&i.initDrag(...u))},[A(e.$slots,"header",{},()=>[n.header?(s(),r("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},y(n.header),9,["id"])):m("",!0)]),c("div",bt,[n.maximizable?E((s(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>i.maximize&&i.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:i.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?E((s(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>i.close&&i.close(...u)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[xt],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:i.contentStyleClass,style:n.contentStyle},[A(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),r("div",yt,[A(e.$slots,"footer",{},()=>[xe(y(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function kt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var wt=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: .75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;kt(wt);ue.render=vt;const Ct={class:"flex"},St={class:"flex-col"},_t={class:"flex-col p-8"},It=B({setup(e){const t=ht(),n=ft(),l=V.fromPlaybook(t.load()),o="Unbenannter Vertrag",i=I(o),d=I(o),u=I(!1),a=()=>{d.value=i.value,u.value=!0},h=()=>{u.value=!1,i.value=d.value,l.title=d.value},f=w=>{const b=w.target;b==null||b.select()},_=async()=>{await n.save(l)};return Q(a),(w,b)=>{const L=R("focus");return s(),j("div",Ct,[C("div",St,[c($e,{modules:v(l).getModules,onSave:_},null,8,["modules"])]),C("div",_t,[c(v(ue),{id:"dialog-contract-title",visible:u.value,modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:S(()=>[c(v(z),{label:"OK",icon:"pi pi-check",onClick:h})]),default:S(()=>[E(c(v(F),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=pe=>d.value=pe),title:"Titel des Vertrags",type:"text",onFocus:f,onKeyup:ve(h,["enter"])},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},8,["visible"]),C("section",null,[c(v(z),{class:"p-button-link",onClick:a},{default:S(()=>[C("span",null,y(i.value),1)]),_:1})]),c(T,{name:"fade",mode:"out-in"},{default:S(()=>[c(je,{contract:v(l)},null,8,["contract"])]),_:1})])])}}});var Lt=$(It,[["__scopeId","data-v-7ea534b4"]]);const zt=B({setup(e){return(t,n)=>(s(),r(Lt))}});export{zt as default};
