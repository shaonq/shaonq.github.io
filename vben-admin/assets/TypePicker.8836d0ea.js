import{aw as o,a as p,bk as s,b as c,ay as m,o as i,h as n,F as _,aB as u,q as a,j as l,z as v,m as r,f9 as f,fa as b}from"./index.86eef68f.js";const g=p({name:"MenuTypePicker",components:{Tooltip:s},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(f("data-v-119d0732"),e=e(),b(),e),k=["onClick"],y=h(()=>r("div",{class:"mix-sidebar"},null,-1)),x=[y];function w(e,C,$,T,z,B){const d=m("Tooltip");return i(),n("div",{class:a(e.prefixCls)},[(i(!0),n(_,null,u(e.menuTypeList||[],t=>(i(),l(d,{key:t.title,title:t.title,placement:"bottom"},{default:v(()=>[r("div",{onClick:I=>e.handler(t),class:a([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},x,10,k)]),_:2},1032,["title"]))),128))],2)}var F=o(g,[["render",w],["__scopeId","data-v-119d0732"]]);export{F as default};
