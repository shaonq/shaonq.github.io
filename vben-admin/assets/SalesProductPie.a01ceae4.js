import{a as r,v as u,a7 as l,o as m,j as s,z as d,m as c,bm as p,i as f}from"./index.86eef68f.js";import{C as h}from"./index.6ad1560d.js";import"./index.c55ba9b6.js";/* empty css              */import{u as g}from"./useECharts.0cb86dd8.js";import"./index.51e4afdb.js";import"./index.747e9e76.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./useRefs.898b9923.js";import"./PlusOutlined.665d11ea.js";const z=r({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=u(null),{setOptions:o}=g(a);return l(()=>t.loading,()=>{t.loading||o({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(i,n){return i.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,n)=>(m(),s(f(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:d(()=>[c("div",{ref_key:"chartRef",ref:a,style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};
