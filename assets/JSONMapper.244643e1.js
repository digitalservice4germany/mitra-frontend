var Q=Object.defineProperty;var F=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(t,e,r)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))Z.call(e,r)&&k(t,r,e[r]);if(F)for(var r of F(e))B.call(e,r)&&k(t,r,e[r]);return t};var u=(t,e,r)=>(k(t,typeof e!="symbol"?e+"":e,r),r),G=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var d=(t,e,r)=>(G(t,e,"read from private field"),r?r.call(t):e.get(t)),I=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},p=(t,e,r,s)=>(G(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r);var K={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.prototype.hasOwnProperty;t.is=function(r,s){return r===s?r!==0||s!==0||1/r===1/s:r!==r&&s!==s},t.shallowEqual=function(r,s,n){if(r===s)return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),V=Object.keys(s);if(a.length!==V.length)return!1;for(var X=n&&typeof n.customEqual=="function"?n.customEqual:t.is,$=0;$<a.length;$++){var A=a[$];if(!e.call(s,A)||!X(r[A],s[A]))return!1}return!0}})(K);class _{equals(e){return e==null?!1:K.shallowEqual(this,e)}}class E{constructor(e,r){this.text=e,this.path=r}clone(){return new E(this.text,this.path.map(e=>e.clone()))}}class m extends _{constructor(e){super();this.value=e,this.value=e}setValue(e){this.value=e}}class l extends m{constructor(e=""){super(e)}clone(){return new l(this.value)}toString(){return this.value}}class j extends m{constructor(e=""){super(e)}clone(){return new l(this.value)}toString(){return this.value}}class w extends m{constructor(e,r=-1){super(r);this.choices=e}clone(){return new w(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.choices[this.value]}toString(){var e;return`${((e=this.selected)==null?void 0:e.text)||""}`}}class f extends m{constructor(e,r=[]){super(r);this.choices=e,this.value=r}clone(){return new f(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.value.sort().reduce((e,r)=>[...e,this.choices[r]],[])}toString(){return`${this.selected.map(e=>e.text).join(", ")}`}}class R extends m{constructor(e){super(e)}clone(){return new R(this.value)}toString(){return JSON.stringify(this.value)}}var y,ee=new Uint8Array(16);function te(){if(!y&&(y=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(ee)}var re=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function se(t){return typeof t=="string"&&re.test(t)}var i=[];for(var U=0;U<256;++U)i.push((U+256).toString(16).substr(1));function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase();if(!se(r))throw TypeError("Stringified UUID is invalid");return r}function ie(t,e,r){t=t||{};var s=t.random||(t.rng||te)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=s[n];return e}return ne(s)}const ae=t=>t instanceof v;class v{constructor(e=ie()){this.id=e,this.id=e}equals(e){return e==null?!1:this===e?!0:ae(e)?this.id===e.id:!1}}function H(t,e){return t.findIndex(r=>r.equals(e))}var o;const N=class extends v{constructor(e="Unbenannter Vertrag",r,s){super(s);I(this,o,void 0);this.title=e,this.modules=r,p(this,o,{createdAt:new Date}),Object.defineProperty(this,"metadata",{get:()=>d(this,o)})}static fromPlaybook(e){const r=e.modules.map(s=>s.clone());return new N(void 0,r)}get path(){return Object.freeze(this.modules.flatMap(e=>e.path))}nextStepInPathAt(e){return this.path[H(this.path,e)+1]}previousStepInPathAt(e){return this.path[H(this.path,e)-1]}getModuleFor(e){return this.modules.find(r=>r.path.find(s=>s.equals(e)))}updateMetadata(e){return p(this,o,h(h({},d(this,o)),e)),this}};let L=N;o=new WeakMap;const D=t=>{const e=[t],{selected:r}=t;return[r!=null?r:[]].flat().flatMap(s=>s.path).forEach(s=>e.push(...D(s))),Object.freeze(e)};class g extends v{constructor(e,r,s,n){super(n);this.prompt=e,this.answer=r,this.description=s;for(const a of["type"]){const V=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this),a);Object.defineProperty(this,a,Object.assign(V,{enumerable:!0}))}}get path(){return Object.freeze([this])}print(){return this.answer.toString()}}const Y=class extends g{constructor(e,{answer:r=new l,produce:s="${answer}",description:n,id:a}={}){super(e,r,n,a);u(this,"produce");this.produce=s}get type(){return Y.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new Y(this.prompt,{answer:new l(this.answer.value),produce:this.produce,description:this.description})}};let P=Y;u(P,"TYPE","TextAnswerStep");const b=class extends g{constructor(e,{answer:r=new j,produce:s="${answer}",description:n,id:a}={}){super(e,r,n,a);u(this,"produce");this.produce=s}get type(){return b.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new b(this.prompt,{answer:new j(this.answer.value),produce:this.produce,description:this.description})}};let x=b;u(x,"TYPE","RichTextAnswerStep");const M=class extends g{constructor(e,{answer:r=new w([]),description:s,id:n}={}){super(e,r,s,n)}get type(){return M.TYPE}get path(){return D(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new M(this.prompt,{answer:new w(this.choices.map(e=>e.clone()),this.answer.value),description:this.description})}};let S=M;u(S,"TYPE","SingleChoiceAnswerStep");const q=class extends g{constructor(e,{answer:r=new f([]),description:s,id:n}={}){super(e,r,s,n)}get type(){return q.TYPE}get path(){return D(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new q(this.prompt,{answer:new f(this.choices.map(e=>e.clone()),this.answer.value),description:this.description})}};let O=q;u(O,"TYPE","MultipleChoiceAnswerStep");const C=class extends g{constructor(e,r,{produce:s="${answer}",description:n,id:a}={}){super(e,r,n,a);u(this,"produce");this.produce=s}get type(){return C.TYPE}clone(){return new C(this.prompt,new R(this.answer.value),{produce:this.produce,description:this.description})}updateCell(e,r,s){this.answer.value[e][r]=s}};let T=C;u(T,"TYPE","SheetAnswerStep");class J extends v{constructor(e="Unbenanntes Modul",r=[],s){super(s);this.title=e,this.steps=r}get path(){return Object.freeze(this.steps.flatMap(e=>e.path))}clone(){return new J(this.title,this.steps.map(e=>e.clone()))}addStep(e,r){r||(r=this.steps.length),this.steps.splice(r,0,e)}duplicateStep(e){if(!this.steps.includes(e))throw new Error("step not in module");const r=e.clone();r.prompt=`Kopie von ${e.prompt}`,this.addStep(r,this.steps.indexOf(e)+1)}removeStep(e){this.steps=this.steps.filter(r=>r!==e)}}var c;class ue extends v{constructor(e="Unbenanntes Playbook",r=[],s){super(s);I(this,c,void 0);this.title=e,this.modules=r,p(this,c,{createdAt:new Date}),Object.defineProperty(this,"metadata",{get:()=>d(this,c)})}updateMetadata(e){return p(this,c,h(h({},d(this,c)),e)),this}addModules(...e){this.modules.push(...e)}removeModule(e){this.modules=this.modules.filter(r=>!r.equals(e))}findModuleById(e){const r=this.modules.find(s=>s.id===e);if(r===void 0)throw new Error("Module not found");return r}}c=new WeakMap;function z(t){if(t.type===P.TYPE){const e=t.answer;return new P(t.prompt,{answer:new l(e.value),produce:t.produce,description:t.description,id:t.id})}if(t.type===x.TYPE){const e=t.answer;return new x(t.prompt,{answer:new j(e.value),produce:t.produce,description:t.description,id:t.id})}if(t.type===S.TYPE){const e=t.answer;return new S(t.prompt,{answer:new w(e.choices.map(r=>new E(r.text,r.path.map(z))),e.value),description:t.description,id:t.id})}if(t.type===O.TYPE){const e=t.answer;return new O(t.prompt,{answer:new f(e.choices.map(r=>new E(r.text,r.path.map(z))),e.value),description:t.description,id:t.id})}if(t.type===T.TYPE){const e=t.answer;return new T(t.prompt,new R(e.value),{produce:t.produce,description:t.description,id:t.id})}throw console.error("Step type unknown, cannot deserialize JSON",t),new Error("Step type unknown")}function W(t){return new J(t.title,t.steps.map(z),t.id)}function ce({contract:t}){return new L(t.title,t.modules.map(W),t.id)}function le({playbook:t}){return new ue(t.title,t.modules.map(W),t.id)}export{m as A,L as C,O as M,ue as P,x as R,g as S,P as T,S as a,T as b,ce as c,le as d,J as e};
