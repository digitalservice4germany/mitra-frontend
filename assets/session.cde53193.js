import{m as r}from"./vendor.0c93a05d.js";import{C as n}from"./Contract.6e826346.js";const a=r("session",{state:()=>({cache:[new n("",[])],entryPoint:""}),actions:{rememberContract(t,e){this.cache=[t,e||t.path[0]]},rememberEntryPoint(t){this.entryPoint=t}},getters:{contract(t){return t.cache[0]},lastEditedStep(t){return t.cache[1]}}});export{a as u};
