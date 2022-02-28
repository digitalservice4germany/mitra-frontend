var N=Object.defineProperty,W=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var K=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,B=(e,t)=>{for(var i in t||(t={}))j.call(t,i)&&K(e,i,t[i]);if(G)for(var i of G(t))q.call(t,i)&&K(e,i,t[i]);return e},P=(e,t)=>W(e,U(t));import{a6 as Z,o as p,c as f,m as w,j as v,F as x,x as D,n as C,Z as R,O as I,J as z,K as J,U as A,r as Q,L as X,l as k,t as T,T as Y,k as M,M as H,a7 as _,p as $,_ as ee,Q as te}from"./vendor.8502b632.js";import{R as ie}from"./button.esm.eee44a83.js";var se=Z(),E={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){(!t||t.length!==(e||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const i=this.isBoth(),n=this.isHorizontal(),l=this.first,{numToleratedItems:s}=this.calculateNumItems(),o=this.itemSize,a=this.getContentPosition(),r=(d=0,b)=>d<=b?0:d,y=(d,b,u)=>d*b+u,c=(d=0,b=0)=>this.scrollTo({left:d,top:b,behavior:t});if(i){const d={rows:r(e[0],s[0]),cols:r(e[1],s[1])};(d.rows!==l.rows||d.cols!==l.cols)&&(c(y(d.cols,o[1],a.left),y(d.rows,o[0],a.top)),this.first=d)}else{const d=r(e,s);d!==l&&(n?c(y(d,o,a.left),0):c(0,y(d,o,a.top)),this.first=d)}},scrollInView(e,t,i="auto"){if(t){const n=this.isBoth(),l=this.isHorizontal(),{first:s,viewport:o}=this.getRenderedRange(),a=(c=0,d=0)=>this.scrollTo({left:c,top:d,behavior:i}),r=t==="to-start",y=t==="to-end";if(r){if(n)o.first.rows-s.rows>e[0]?a(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-s.cols>e[1]&&a((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-s>e){const c=(o.first-1)*this.itemSize;l?a(c,0):a(0,c)}}else if(y){if(n)o.last.rows-s.rows<=e[0]+1?a(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-s.cols<=e[1]+1&&a((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-s<=e+1){const c=(o.first+1)*this.itemSize;l?a(c,0):a(0,c)}}}else this.scrollToIndex(e,i)},getRenderedRange(){const e=(n,l)=>Math.floor(n/(l||n));let t=this.first,i=0;if(this.element){const n=this.isBoth(),l=this.isHorizontal(),s=this.element.scrollTop,o=this.element.scrollLeft;n?(t={rows:e(s,this.itemSize[0]),cols:e(o,this.itemSize[1])},i={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(l?o:s,this.itemSize),i=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:i}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),i=this.itemSize,n=this.getContentPosition(),l=this.element?this.element.offsetWidth-n.left:0,s=this.element?this.element.offsetHeight-n.top:0,o=(c,d)=>Math.ceil(c/(d||c)),a=c=>Math.ceil(c/2),r=e?{rows:o(s,i[0]),cols:o(l,i[1])}:o(t?l:s,i),y=this.d_numToleratedItems||(e?[a(r.rows),a(r.cols)]:a(r));return{numItemsInViewport:r,numToleratedItems:y}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:i,numToleratedItems:n}=this.calculateNumItems(),l=(o,a,r,y)=>this.getLast(o+a+(o<r?2:3)*r,y),s=e?{rows:l(t.rows,i.rows,n[0]),cols:l(t.cols,i.cols,n[1],!0)}:l(t,i,n);this.last=s,this.numItemsInViewport=i,this.d_numToleratedItems=n,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:i.rows}).map(()=>Array.from({length:i.cols})):Array.from({length:i})),this.lazy&&this.$emit("lazy-load",{first:t,last:s})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),i=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),n=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),l=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:i,top:n,bottom:l,x:t+i,y:n+l}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),i=this.element.parentElement,n=this.scrollWidth||`${this.element.offsetWidth||i.offsetWidth}px`,l=this.scrollHeight||`${this.element.offsetHeight||i.offsetHeight}px`,s=(o,a)=>this.element.style[o]=a;e||t?(s("height",l),s("width",n)):s("height",l)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),i=this.isHorizontal(),n=this.getContentPosition(),l=(s,o,a,r=0)=>this.spacerStyle=P(B({},this.spacerStyle),{[`${s}`]:(o||[]).length*a+r+"px"});t?(l("height",e,this.itemSize[0],n.y),l("width",this.columns||e[1],this.itemSize[1],n.x)):i?l("width",this.columns||e,this.itemSize,n.x):l("height",e,this.itemSize,n.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),i=this.isHorizontal(),n=e?e.first:this.first,l=(o,a)=>o*a,s=(o=0,a=0)=>{this.contentStyle=P(B({},this.contentStyle),{transform:`translate3d(${o}px, ${a}px, 0)`})};if(t)s(l(n.cols,this.itemSize[1]),l(n.rows,this.itemSize[0]));else{const o=l(n,this.itemSize);i?s(o,0):s(0,o)}}},onScrollPositionChange(e){const t=e.target,i=this.isBoth(),n=this.isHorizontal(),l=this.getContentPosition(),s=(h,m)=>h?h>m?h-m:h:0,o=(h,m)=>Math.floor(h/(m||h)),a=(h,m,g,S,O,L)=>h<=O?O:L?g-S-O:m+O-1,r=(h,m,g,S,O,L,F)=>h<=L?0:Math.max(0,F?h<m?g:h-L:h>m?g:h-2*L),y=(h,m,g,S,O,L)=>{let F=m+S+2*O;return h>=O&&(F+=O+1),this.getLast(F,L)},c=s(t.scrollTop,l.top),d=s(t.scrollLeft,l.left);let b=0,u=this.last,V=!1;if(i){const h=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=d,g={rows:o(c,this.itemSize[0]),cols:o(d,this.itemSize[1])},S={rows:a(g.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:a(g.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};b={rows:r(g.rows,S.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:r(g.cols,S.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},u={rows:y(g.rows,b.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:y(g.cols,b.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},V=b.rows!==this.first.rows&&u.rows!==this.last.rows||b.cols!==this.first.cols&&u.cols!==this.last.cols,this.lastScrollPos={top:c,left:d}}else{const h=n?d:c,m=this.lastScrollPos<=h,g=o(h,this.itemSize),S=a(g,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);b=r(g,S,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),u=y(g,b,this.last,this.numItemsInViewport,this.d_numToleratedItems),V=b!==this.first&&u!==this.last,this.lastScrollPos=h}return{first:b,last:u,isRangeChanged:V}},onScrollChange(e){const{first:t,last:i,isRangeChanged:n}=this.onScrollPositionChange(e);if(n){const l={first:t,last:i};this.setContentPosition(l),this.first=t,this.last=i,this.$emit("scroll-index-change",l),this.lazy&&this.$emit("lazy-load",l)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,i=this.isBoth()?this.first.rows+e:this.first+e;return{index:i,count:t,first:i===0,last:i===t-1,even:i%2===0,odd:i%2!==0}},getLoaderOptions(e,t){let i=this.loaderArr.length;return B({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0},t)},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const le={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function ne(e,t,i,n,l,s){return i.disabled?(p(),f(x,{key:1},[w(e.$slots,"default"),w(e.$slots,"content",{items:i.items,rows:i.items,columns:s.loadedColumns})],64)):(p(),f("div",{key:0,ref:s.elementRef,class:s.containerClass,tabindex:0,style:i.style,onScroll:t[1]||(t[1]=(...o)=>s.onScroll&&s.onScroll(...o))},[w(e.$slots,"content",{styleClass:s.contentClass,items:s.loadedItems,getItemOptions:s.getOptions,loading:l.d_loading,getLoaderOptions:s.getLoaderOptions,itemSize:i.itemSize,rows:s.loadedRows,columns:s.loadedColumns,contentRef:s.contentRef,spacerStyle:l.spacerStyle,contentStyle:l.contentStyle,vertical:s.isVertical(),horizontal:s.isHorizontal(),both:s.isBoth()},()=>[v("div",{ref:s.contentRef,class:s.contentClass,style:l.contentStyle},[(p(!0),f(x,null,D(s.loadedItems,(o,a)=>w(e.$slots,"item",{key:a,item:o,options:s.getOptions(a)})),128))],6)]),i.showSpacer?(p(),f("div",{key:0,class:"p-virtualscroller-spacer",style:l.spacerStyle},null,4)):C("",!0),!i.loaderDisabled&&i.showLoader&&l.d_loading?(p(),f("div",{key:1,class:s.loaderClass},[e.$slots&&e.$slots.loader?(p(!0),f(x,{key:0},D(l.loaderArr,(o,a)=>w(e.$slots,"loader",{key:a,options:s.getLoaderOptions(a,s.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})),128)):(p(),f("i",le))],2)):C("",!0)],38))}function oe(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var re=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
`;oe(re);E.render=ne;var ae={name:"Dropdown",emits:["update:modelValue","before-show","before-hide","show","hide","change","filter","focus","blur"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:String,disabled:Boolean,dataKey:null,showClear:Boolean,inputId:String,tabindex:String,ariaLabelledBy:null,appendTo:{type:String,default:"body"},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},panelClass:null,loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},virtualScrollerOptions:{type:Object,default:null}},data(){return{focused:!1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0}},outsideClickListener:null,scrollHandler:null,resizeListener:null,searchTimeout:null,currentSearchChar:null,previousSearchChar:null,searchValue:null,overlay:null,itemsWrapper:null,virtualScroller:null,isModelValueChanged:!1,updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollValueInView(),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.itemsWrapper=null,this.overlay&&(R.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?I.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?I.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?I.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?I.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupRenderKey(e){return I.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return I.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return I.resolveFieldData(e,this.optionGroupChildren)},getSelectedOption(){let e=this.getSelectedOptionIndex();return e!==-1?this.optionGroupLabel?this.getOptionGroupChildren(this.visibleOptions[e.group])[e.option]:this.visibleOptions[e]:null},getSelectedOptionIndex(){if(this.modelValue!=null&&this.visibleOptions)if(this.optionGroupLabel)for(let e=0;e<this.visibleOptions.length;e++){let t=this.findOptionIndexInList(this.modelValue,this.getOptionGroupChildren(this.visibleOptions[e]));if(t!==-1)return{group:e,option:t}}else return this.findOptionIndexInList(this.modelValue,this.visibleOptions);return-1},findOptionIndexInList(e,t){for(let i=0;i<t.length;i++)if(I.equals(e,this.getOptionValue(t[i]),this.equalityKey))return i;return-1},isSelected(e){return I.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)},onKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break;default:this.search(e);break}},onFilterKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 13:case 27:this.overlayVisible=!1,e.preventDefault();break}},onDownKey(e){if(this.visibleOptions)if(!this.overlayVisible&&e.altKey)this.show();else{let t=this.visibleOptions&&this.visibleOptions.length>0?this.findNextOption(this.getSelectedOptionIndex()):null;t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},onUpKey(e){if(this.visibleOptions){let t=this.findPrevOption(this.getSelectedOptionIndex());t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},findNextOption(e){if(this.optionGroupLabel){let t=e===-1?0:e.group,i=e===-1?-1:e.option,n=this.findNextOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),i);return n||(t+1!==this.visibleOptions.length?this.findNextOption({group:t+1,option:-1}):null)}else return this.findNextOptionInList(this.visibleOptions,e)},findNextOptionInList(e,t){let i=t+1;if(i===e.length)return null;let n=e[i];return this.isOptionDisabled(n)?this.findNextOptionInList(i):n},findPrevOption(e){if(e===-1)return null;if(this.optionGroupLabel){let t=e.group,i=e.option,n=this.findPrevOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),i);return n||(t>0?this.findPrevOption({group:t-1,option:this.getOptionGroupChildren(this.visibleOptions[t-1]).length}):null)}else return this.findPrevOptionInList(this.visibleOptions,e)},findPrevOptionInList(e,t){let i=t-1;if(i<0)return null;let n=e[i];return this.isOptionDisabled(n)?this.findPrevOption(i):n},onClearClick(e){this.updateModel(e,null)},onClick(e){this.disabled||this.loading||z.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus())},onOptionSelect(e,t){let i=this.getOptionValue(t);this.updateModel(e,i),this.$refs.focusInput.focus(),setTimeout(()=>{this.hide()},200)},onEditableInput(e){this.$emit("update:modelValue",e.target.value)},onOverlayEnter(e){if(R.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollValueInView(),!this.virtualScrollerDisabled){const t=this.getSelectedOptionIndex();t!==-1&&setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(t)},0)}},onOverlayAfterEnter(){this.filter&&this.$refs.filterInput.focus(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.itemsWrapper=null,this.overlay=null},onOverlayAfterLeave(e){R.clear(e)},alignOverlay(){this.appendDisabled?z.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=z.getOuterWidth(this.$el)+"px",z.absolutePosition(this.overlay,this.$el))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new J(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!z.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},search(e){if(!this.visibleOptions)return;this.searchTimeout&&clearTimeout(this.searchTimeout);const t=e.key;if(this.previousSearchChar=this.currentSearchChar,this.currentSearchChar=t,this.previousSearchChar===this.currentSearchChar?this.searchValue=this.currentSearchChar:this.searchValue=this.searchValue?this.searchValue+t:t,this.searchValue){let i=this.getSelectedOptionIndex(),n=this.optionGroupLabel?this.searchOptionInGroup(i):this.searchOption(++i);n&&this.updateModel(e,this.getOptionValue(n))}this.searchTimeout=setTimeout(()=>{this.searchValue=null},250)},searchOption(e){let t;return this.searchValue&&(t=this.searchOptionInRange(e,this.visibleOptions.length),t||(t=this.searchOptionInRange(0,e))),t},searchOptionInRange(e,t){for(let i=e;i<t;i++){let n=this.visibleOptions[i];if(this.matchesSearchValue(n))return n}return null},searchOptionInGroup(e){let t=e===-1?{group:0,option:-1}:e;for(let i=t.group;i<this.visibleOptions.length;i++){let n=this.getOptionGroupChildren(this.visibleOptions[i]);for(let l=t.group===i?t.option+1:0;l<n.length;l++)if(this.matchesSearchValue(n[l]))return n[l]}for(let i=0;i<=t.group;i++){let n=this.getOptionGroupChildren(this.visibleOptions[i]);for(let l=0;l<(t.group===i?t.option:n.length);l++)if(this.matchesSearchValue(n[l]))return n[l]}return null},matchesSearchValue(e){return this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},onFilterChange(e){this.$emit("filter",{originalEvent:e,value:e.target.value})},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},overlayRef(e){this.overlay=e},itemsWrapperRef(e){this.itemsWrapper=e},virtualScrollerRef(e){this.virtualScroller=e},scrollValueInView(){if(this.overlay){let e=z.findSingle(this.overlay,"li.p-highlight");e&&e.scrollIntoView({block:"nearest",inline:"start"})}},onOverlayClick(e){se.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{visibleOptions(){if(this.filterValue)if(this.optionGroupLabel){let e=[];for(let t of this.options){let i=A.filter(this.getOptionGroupChildren(t),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(i&&i.length){let n=B({},t);n[this.optionGroupChildren]=i,e.push(n)}}return e}else return A.filter(this.options,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);else return this.options},containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible}]},labelClass(){return["p-dropdown-label p-inputtext",{"p-placeholder":this.label===this.placeholder,"p-dropdown-label-empty":!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},label(){let e=this.getSelectedOption();return e!==null?this.getOptionLabel(e):this.placeholder||"p-emptylabel"},editableInputValue(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.modelValue},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},appendDisabled(){return this.appendTo==="self"},virtualScrollerDisabled(){return!this.virtualScrollerOptions},appendTarget(){return this.appendDisabled?null:this.appendTo},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]}},directives:{ripple:ie},components:{VirtualScroller:E}};const he={class:"p-hidden-accessible"},de={key:0,class:"p-dropdown-header"},ce={class:"p-dropdown-filter-container"},ue=v("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),pe={class:"p-dropdown-item-group"},fe={key:2,class:"p-dropdown-empty-message"},me={key:3,class:"p-dropdown-empty-message"};function ge(e,t,i,n,l,s){const o=Q("VirtualScroller"),a=X("ripple");return p(),f("div",{ref:"container",class:s.containerClass,onClick:t[13]||(t[13]=r=>s.onClick(r))},[v("div",he,[v("input",{ref:"focusInput",type:"text",id:i.inputId,readonly:"",disabled:i.disabled,onFocus:t[1]||(t[1]=(...r)=>s.onFocus&&s.onFocus(...r)),onBlur:t[2]||(t[2]=(...r)=>s.onBlur&&s.onBlur(...r)),onKeydown:t[3]||(t[3]=(...r)=>s.onKeyDown&&s.onKeyDown(...r)),tabindex:i.tabindex,"aria-haspopup":"true","aria-expanded":l.overlayVisible,"aria-labelledby":i.ariaLabelledBy},null,40,["id","disabled","tabindex","aria-expanded","aria-labelledby"])]),i.editable?(p(),f("input",{key:0,type:"text",class:"p-dropdown-label p-inputtext",disabled:i.disabled,onFocus:t[4]||(t[4]=(...r)=>s.onFocus&&s.onFocus(...r)),onBlur:t[5]||(t[5]=(...r)=>s.onBlur&&s.onBlur(...r)),placeholder:i.placeholder,value:s.editableInputValue,onInput:t[6]||(t[6]=(...r)=>s.onEditableInput&&s.onEditableInput(...r)),"aria-haspopup":"listbox","aria-expanded":l.overlayVisible},null,40,["disabled","placeholder","value","aria-expanded"])):C("",!0),i.editable?C("",!0):(p(),f("span",{key:1,class:s.labelClass},[w(e.$slots,"value",{value:i.modelValue,placeholder:i.placeholder},()=>[k(T(s.label||"empty"),1)])],2)),i.showClear&&i.modelValue!=null?(p(),f("i",{key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[7]||(t[7]=r=>s.onClearClick(r))})):C("",!0),v("div",{class:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":l.overlayVisible},[w(e.$slots,"indicator",{},()=>[v("span",{class:s.dropdownIconClass},null,2)])],8,["aria-expanded"]),(p(),f(Y,{to:s.appendTarget,disabled:s.appendDisabled},[v(te,{name:"p-connected-overlay",onEnter:s.onOverlayEnter,onAfterEnter:s.onOverlayAfterEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},{default:M(()=>[l.overlayVisible?(p(),f("div",{key:0,ref:s.overlayRef,class:s.panelStyleClass,onClick:t[12]||(t[12]=(...r)=>s.onOverlayClick&&s.onOverlayClick(...r))},[w(e.$slots,"header",{value:i.modelValue,options:s.visibleOptions}),i.filter?(p(),f("div",de,[v("div",ce,[H(v("input",{type:"text",ref:"filterInput","onUpdate:modelValue":t[8]||(t[8]=r=>l.filterValue=r),onVnodeUpdated:t[9]||(t[9]=(...r)=>s.onFilterUpdated&&s.onFilterUpdated(...r)),autoComplete:"off",class:"p-dropdown-filter p-inputtext p-component",placeholder:i.filterPlaceholder,onKeydown:t[10]||(t[10]=(...r)=>s.onFilterKeyDown&&s.onFilterKeyDown(...r)),onInput:t[11]||(t[11]=(...r)=>s.onFilterChange&&s.onFilterChange(...r))},null,40,["placeholder"]),[[_,l.filterValue]]),ue])])):C("",!0),v("div",{ref:s.itemsWrapperRef,class:"p-dropdown-items-wrapper",style:{"max-height":s.virtualScrollerDisabled?i.scrollHeight:""}},[v(o,$({ref:s.virtualScrollerRef},i.virtualScrollerOptions,{items:s.visibleOptions,style:{height:i.scrollHeight},disabled:s.virtualScrollerDisabled}),ee({content:M(({styleClass:r,contentRef:y,items:c,getItemOptions:d,contentStyle:b})=>[v("ul",{ref:y,class:["p-dropdown-items",r],style:b,role:"listbox"},[i.optionGroupLabel?(p(!0),f(x,{key:1},D(c,(u,V)=>(p(),f(x,{key:s.getOptionGroupRenderKey(u)},[v("li",pe,[w(e.$slots,"optiongroup",{option:u,index:s.getOptionIndex(V,d)},()=>[k(T(s.getOptionGroupLabel(u)),1)])]),(p(!0),f(x,null,D(s.getOptionGroupChildren(u),(h,m)=>H((p(),f("li",{class:["p-dropdown-item",{"p-highlight":s.isSelected(h),"p-disabled":s.isOptionDisabled(h)}],key:s.getOptionRenderKey(h),onClick:g=>s.onOptionSelect(g,h),role:"option","aria-label":s.getOptionLabel(h),"aria-selected":s.isSelected(h)},[w(e.$slots,"option",{option:h,index:s.getOptionIndex(m,d)},()=>[k(T(s.getOptionLabel(h)),1)])],10,["onClick","aria-label","aria-selected"])),[[a]])),128))],64))),128)):(p(!0),f(x,{key:0},D(c,(u,V)=>H((p(),f("li",{class:["p-dropdown-item",{"p-highlight":s.isSelected(u),"p-disabled":s.isOptionDisabled(u)}],key:s.getOptionRenderKey(u),onClick:h=>s.onOptionSelect(h,u),role:"option","aria-label":s.getOptionLabel(u),"aria-selected":s.isSelected(u)},[w(e.$slots,"option",{option:u,index:s.getOptionIndex(V,d)},()=>[k(T(s.getOptionLabel(u)),1)])],10,["onClick","aria-label","aria-selected"])),[[a]])),128)),l.filterValue&&(!c||c&&c.length===0)?(p(),f("li",fe,[w(e.$slots,"emptyfilter",{},()=>[k(T(s.emptyFilterMessageText),1)])])):!i.options||i.options&&i.options.length===0?(p(),f("li",me,[w(e.$slots,"empty",{},()=>[k(T(s.emptyMessageText),1)])])):C("",!0)],6)]),_:2},[e.$slots.loader?{name:"loader",fn:M(({options:r})=>[w(e.$slots,"loader",{options:r})])}:void 0]),1040,["items","style","disabled"])],4),w(e.$slots,"footer",{value:i.modelValue,options:s.visibleOptions})],2)):C("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],2)}function be(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var ye=`
.p-dropdown {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-dropdown-trigger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    visibility: hidden;
}
input.p-dropdown-label  {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-fluid .p-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;be(ye);ae.render=ge;export{se as O,E as a,ae as s};