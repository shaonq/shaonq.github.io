import{aw as o,a as r,cT as l,b as p,f as m,ay as d,o as c,h as u,m as f,t as g,n as b,az as v,q as _}from"./index.f3af519a.js";import{b as y}from"./index.6a22f5fb.js";import"./index.15b0745a.js";import"./index.5dbeaf96.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.fc2503ca.js";import"./index.5272e831.js";import"./FullscreenOutlined.827fad55.js";import"./index.24286f29.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./uniqBy.e095b0b8.js";import"./_baseIteratee.8ff76035.js";import"./get.835de125.js";import"./index.4f994e09.js";import"./useRefs.4dfaecc3.js";import"./PlusOutlined.2890e80e.js";import"./RedoOutlined.6782318c.js";import"./index.77c9753a.js";import"./lock.2dedf5fc.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const i=d("Select");return c(),u("div",{class:_(e.prefixCls)},[f("span",null,g(e.title),1),b(i,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var K=o(C,[["render",S],["__scopeId","data-v-6707e46b"]]);export{K as default};