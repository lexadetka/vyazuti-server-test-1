import{_ as a,f as s,o as l,c as r,a as c,w as i}from"./index-1b86e83b.js";const p={name:"Get",mounted(){this.login()},methods:{get(){s.get("http://localhost:8000/api/testAPI").then(t=>{console.log(t)})},login(){s.get("http://localhost:8000/sanctum/csrf-cookie").then(t=>{s.post("http://localhost:8000/login",{email:"user@mail.ru",password:"123"}).then(e=>{console.log(e)})})},getUsers(){s.get("http://localhost:8000/api/user").then(t=>{console.log(t)})}}};function g(t,e,h,d,u,o){return l(),r("div",null,[c("button",{class:"btn btn-danger",onClick:e[0]||(e[0]=i((...n)=>o.getUsers&&o.getUsers(...n),["prevent"]))}," Get Users ")])}const f=a(p,[["render",g]]);export{f as default};
