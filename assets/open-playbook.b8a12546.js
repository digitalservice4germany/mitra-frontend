import{R as B,s as M}from"./button.esm.aade555f.js";import{o,c as r,e as v,f as m,t as c,g as p,h as d,i as L,w as f,j as b,v as U,T as N,D as x,r as w,k as S,F as g,l as C,m as _,n as D,p as j,q as h,u as A}from"./vendor.c6f07d2e.js";import{A as P}from"./AppHeader.d1b92ad8.js";import"./index.2adf7847.js";var E={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const V={key:0,class:"p-progressbar-label"},R={key:1,class:"p-progressbar-indeterminate-container"},O=d("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1);function W(e,t,s,a,n,i){return o(),r("div",{role:"progressbar",class:i.containerClass,"aria-valuemin":"0","aria-valuenow":s.value,"aria-valuemax":"100"},[i.determinate?(o(),r("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:i.progressStyle},[s.value!=null&&s.value!==0&&s.showValue?(o(),r("div",V,[v(e.$slots,"default",{},()=>[m(c(s.value+"%"),1)])])):p("",!0)],4)):p("",!0),i.indeterminate?(o(),r("div",R,[O])):p("",!0)],10,["aria-valuenow"])}function H(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var K=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
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
}
.p-progressbar-determinate .p-progressbar-label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
              animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
            animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
    left: -35%;
    right: 100%;
}
60% {
    left: 100%;
    right: -90%;
}
100% {
    left: 100%;
    right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
    left: -35%;
    right: 100%;
}
60% {
    left: 100%;
    right: -90%;
}
100% {
    left: 100%;
    right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
    left: -200%;
    right: 100%;
}
60% {
    left: 107%;
    right: -8%;
}
100% {
    left: 107%;
    right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
    left: -200%;
    right: 100%;
}
60% {
    left: 107%;
    right: -8%;
}
100% {
    left: 107%;
    right: -8%;
}
}
`;H(K);E.render=W;var I={name:"Message",emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||setTimeout(()=>{this.visible=!1},this.life)},methods:{close(e){this.visible=!1,this.$emit("close",e)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconClass(){return["p-message-icon pi",this.icon?this.icon:{"pi-info-circle":this.severity==="info","pi-check":this.severity==="success","pi-exclamation-triangle":this.severity==="warn","pi-times-circle":this.severity==="error"}]}},directives:{ripple:B}};const q={class:"p-message-wrapper"},G={class:"p-message-text"},X=d("i",{class:"p-message-close-icon pi pi-times"},null,-1);function Y(e,t,s,a,n,i){const u=L("ripple");return o(),r(N,{name:"p-message",appear:""},{default:f(()=>[b(d("div",{class:i.containerClass,role:"alert"},[d("div",q,[d("span",{class:i.iconClass},null,2),d("div",G,[v(e.$slots,"default")]),s.closable?b((o(),r("button",{key:0,class:"p-message-close p-link",onClick:t[1]||(t[1]=y=>i.close(y)),type:"button"},[X],512)),[[u]]):p("",!0)])],2),[[U,n.visible]])]),_:3})}function Z(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var J=`
.p-message-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-message-close {
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
.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}
.p-message-enter-from {
    opacity: 0;
}
.p-message-enter-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}
.p-message.p-message-leave-from {
    max-height: 1000px;
}
.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}
.p-message-leave-active {
    overflow: hidden;
    -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;
    transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;
}
.p-message-leave-active .p-message-close {
    display: none;
}
`;Z(J);I.render=Y;var z={name:"FileUpload",emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove"],props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},style:null,class:null},duplicateIEEvent:!1,data(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null}},methods:{onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];let t=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let s of t)this.isFileSelected(s)||this.validate(s)&&(this.isImage(s)&&(s.objectURL=window.URL.createObjectURL(s)),this.files.push(s));this.$emit("select",{originalEvent:e,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose(){this.$refs.fileInput.click()},upload(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files});else{let e=new XMLHttpRequest,t=new FormData;this.$emit("before-upload",{xhr:e,formData:t});for(let s of this.files)t.append(this.name,s,s.name);e.upload.addEventListener("progress",s=>{s.lengthComputable&&(this.progress=Math.round(s.loaded*100/s.total)),this.$emit("progress",{originalEvent:s,progress:this.progress})}),e.onreadystatechange=()=>{e.readyState===4&&(this.progress=0,e.status>=200&&e.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("upload",{xhr:e,files:this.files})):this.$emit("error",{xhr:e,files:this.files}),this.clear())},e.open("POST",this.url,!0),this.$emit("before-send",{xhr:e,formData:t}),e.withCredentials=this.withCredentials,e.send(t)}},clear(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},isFileSelected(e){if(this.files&&this.files.length){for(let t of this.files)if(t.name+t.type+t.size===e.name+e.type+e.size)return!0}return!1},isIE11(){return!!window.MSInputMethodContext&&!!document.documentMode},validate(e){return this.accept&&!this.isFileTypeValid(e)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",e.name).replace("{1}",this.accept)),!1):this.maxFileSize&&e.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",e.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid(e){let t=this.accept.split(",").map(s=>s.trim());for(let s of t)if(this.isWildcard(s)?this.getTypeClass(e.type)===this.getTypeClass(s):e.type==s||this.getFileExtension(e).toLowerCase()===s.toLowerCase())return!0;return!1},getTypeClass(e){return e.substring(0,e.indexOf("/"))},isWildcard(e){return e.indexOf("*")!==-1},getFileExtension(e){return"."+e.name.split(".").pop()},isImage(e){return/^image\//.test(e.type)},onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())},onDragOver(e){this.disabled||(x.addClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault())},onDragLeave(){this.disabled||x.removeClass(this.$refs.content,"p-fileupload-highlight")},onDrop(e){if(!this.disabled){x.removeClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();const t=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||t&&t.length===1)&&this.onFileSelect(e)}},onBasicUploaderClick(){this.hasFiles?this.upload():this.$refs.fileInput.click()},remove(e){this.clearInputElement();let t=this.files.splice(e,1)[0];this.files=[...this.files],this.$emit("remove",{file:t,files:this.files})},clearInputElement(){this.$refs.fileInput.value=""},clearIEInput(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize(e){if(e===0)return"0 B";let t=1e3,s=3,a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,n)).toFixed(s))+" "+a[n]},isFileLimitExceeded(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose(){this.messages=null}},computed:{isAdvanced(){return this.mode==="advanced"},isBasic(){return this.mode==="basic"},advancedChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-fileupload-choose-selected":this.hasFiles,"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonIconClass(){return["p-button-icon p-button-icon-left pi",{"pi-plus":!this.hasFiles||this.auto,"pi-upload":this.hasFiles&&!this.auto}]},basicChooseButtonLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(e=>e.name).join(", "):this.chooseButtonLabel},hasFiles(){return this.files&&this.files.length>0},chooseDisabled(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled(){return this.disabled||!this.hasFiles},chooseButtonLabel(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel(){return this.cancelLabel||this.$primevue.config.locale.cancel}},components:{FileUploadButton:M,FileUploadProgressBar:E,FileUploadMessage:I},directives:{ripple:B}};const Q={key:0,class:"p-fileupload p-fileupload-advanced p-component"},$={class:"p-fileupload-buttonbar"},ee=d("span",{class:"p-button-icon p-button-icon-left pi pi-fw pi-plus"},null,-1),te={class:"p-button-label"},ie={key:1,class:"p-fileupload-files"},se={class:"p-fileupload-filename"},le={key:2,class:"p-fileupload-empty"},ne={key:1,class:"p-fileupload p-fileupload-basic p-component"},ae={class:"p-button-label"};function oe(e,t,s,a,n,i){const u=w("FileUploadButton"),y=w("FileUploadProgressBar"),k=w("FileUploadMessage"),F=L("ripple");return i.isAdvanced?(o(),r("div",Q,[d("div",$,[b(d("span",{class:i.advancedChooseButtonClass,style:s.style,onClick:t[2]||(t[2]=(...l)=>i.choose&&i.choose(...l)),onKeydown:t[3]||(t[3]=S((...l)=>i.choose&&i.choose(...l),["enter"])),onFocus:t[4]||(t[4]=(...l)=>i.onFocus&&i.onFocus(...l)),onBlur:t[5]||(t[5]=(...l)=>i.onBlur&&i.onBlur(...l)),tabindex:"0"},[d("input",{ref:"fileInput",type:"file",onChange:t[1]||(t[1]=(...l)=>i.onFileSelect&&i.onFileSelect(...l)),multiple:s.multiple,accept:s.accept,disabled:i.chooseDisabled},null,40,["multiple","accept","disabled"]),ee,d("span",te,c(i.chooseButtonLabel),1)],38),[[F]]),s.showUploadButton?(o(),r(u,{key:0,label:i.uploadButtonLabel,icon:"pi pi-upload",onClick:i.upload,disabled:i.uploadDisabled},null,8,["label","onClick","disabled"])):p("",!0),s.showCancelButton?(o(),r(u,{key:1,label:i.cancelButtonLabel,icon:"pi pi-times",onClick:i.clear,disabled:i.cancelDisabled},null,8,["label","onClick","disabled"])):p("",!0)]),d("div",{ref:"content",class:"p-fileupload-content",onDragenter:t[6]||(t[6]=(...l)=>i.onDragEnter&&i.onDragEnter(...l)),onDragover:t[7]||(t[7]=(...l)=>i.onDragOver&&i.onDragOver(...l)),onDragleave:t[8]||(t[8]=(...l)=>i.onDragLeave&&i.onDragLeave(...l)),onDrop:t[9]||(t[9]=(...l)=>i.onDrop&&i.onDrop(...l))},[i.hasFiles?(o(),r(y,{key:0,value:n.progress},null,8,["value"])):p("",!0),(o(!0),r(g,null,C(n.messages,l=>(o(),r(k,{severity:"error",key:l,onClose:i.onMessageClose},{default:f(()=>[m(c(l),1)]),_:2},1032,["onClose"]))),128)),i.hasFiles?(o(),r("div",ie,[(o(!0),r(g,null,C(n.files,(l,T)=>(o(),r("div",{class:"p-fileupload-row",key:l.name+l.type+l.size},[d("div",null,[i.isImage(l)?(o(),r("img",{key:0,role:"presentation",alt:l.name,src:l.objectURL,width:s.previewWidth},null,8,["alt","src","width"])):p("",!0)]),d("div",se,c(l.name),1),d("div",null,c(i.formatSize(l.size)),1),d("div",null,[d(u,{type:"button",icon:"pi pi-times",onClick:ye=>i.remove(T)},null,8,["onClick"])])]))),128))])):p("",!0),e.$slots.empty&&!i.hasFiles?(o(),r("div",le,[v(e.$slots,"empty")])):p("",!0)],544)])):i.isBasic?(o(),r("div",ne,[(o(!0),r(g,null,C(n.messages,l=>(o(),r(k,{severity:"error",key:l,onClose:i.onMessageClose},{default:f(()=>[m(c(l),1)]),_:2},1032,["onClose"]))),128)),b(d("span",{class:i.basicChooseButtonClass,style:s.style,onMouseup:t[13]||(t[13]=(...l)=>i.onBasicUploaderClick&&i.onBasicUploaderClick(...l)),onKeydown:t[14]||(t[14]=S((...l)=>i.choose&&i.choose(...l),["enter"])),onFocus:t[15]||(t[15]=(...l)=>i.onFocus&&i.onFocus(...l)),onBlur:t[16]||(t[16]=(...l)=>i.onBlur&&i.onBlur(...l)),tabindex:"0"},[d("span",{class:i.basicChooseButtonIconClass},null,2),d("span",ae,c(i.basicChooseButtonLabel),1),i.hasFiles?p("",!0):(o(),r("input",{key:0,ref:"fileInput",type:"file",accept:s.accept,disabled:s.disabled,multiple:s.multiple,onChange:t[10]||(t[10]=(...l)=>i.onFileSelect&&i.onFileSelect(...l)),onFocus:t[11]||(t[11]=(...l)=>i.onFocus&&i.onFocus(...l)),onBlur:t[12]||(t[12]=(...l)=>i.onBlur&&i.onBlur(...l))},null,40,["accept","disabled","multiple"]))],38),[[F]])])):p("",!0)}function re(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var de=`
.p-fileupload-content {
    position: relative;
}
.p-fileupload-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-fileupload-row > div {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 25%;
}
.p-fileupload-row > div:last-child {
    text-align: right;
}
.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.p-button.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}
.p-button.p-fileupload-choose input[type=file] {
    display: none;
}
.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {
    display: none;
}
.p-fileupload-filename {
    word-break: break-all;
}
.p-fluid .p-fileupload .p-button {
    width: auto;
}
`;re(de);z.render=oe;const pe={id:"open-playbook"},ue=h("h2",{class:"font-bold mb-4"},"Neuen Vertrag erstellen",-1),ce={for:"upload-playbook"},he=m("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),fe={class:"mt-4"},me=h("input",{id:"upload-playbook",type:"file"},null,-1),be=h("p",null,"Datei in diesen Bereich ziehen.",-1),ge=_({setup(e){const t=D(""),s=D("Computer durchsuchen"),a=async n=>{let i=n==null?void 0:n.files[0];if(i){const u=new FileReader;u.onload=()=>{t.value=u.result},u.readAsText(i||new Blob)}};return(n,i)=>(o(),j(g,null,[d(P),h("section",pe,[ue,h("label",ce,[he,h("div",fe,[d(A(z),{title:"playbook-hochladen","choose-label":s.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:a},{empty:f(()=>[be]),default:f(()=>[me]),_:1},8,["choose-label"])])])])],64))}}),ke=_({setup(e){return(t,s)=>(o(),r(ge))}});export{ke as default};