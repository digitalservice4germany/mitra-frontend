import{o as a,c as o,p}from"./vendor.a9f217d4.js";var r={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function d(e,l,u,s,m,t){return a(),o("input",p({class:["p-inputtext p-component",{"p-filled":t.filled}],value:u.modelValue,onInput:l[1]||(l[1]=(...n)=>t.onInput&&t.onInput(...n))},e.$attrs),null,16,["value"])}r.render=d;export{r as s};