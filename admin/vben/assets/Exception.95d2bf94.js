import{a as v,aX as e,v as N,aY as O,aZ as R,a_ as S,b as A,f as T,i as s,a$ as d,n as r,C as h,c as G}from"./index.f3af519a.js";import{R as k}from"./index.7d6544f2.js";var C="/admin/vben/assets/no-data.f7e550cc.svg",P="/admin/vben/assets/net-error.61b7e6df.svg",w=v({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=N(new Map),{query:m}=O(),i=R(),c=S(),{t}=G(),{prefixCls:_}=A("app-exception-page"),f=T(()=>{const{status:l}=m,{status:u}=n;return Number(l)||u}),g=T(()=>s(a).get(s(f))),p=t("sys.exception.backLogin"),o=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?p:o,handler:()=>n.full?i(d.BASE_LOGIN):i()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?p:o,handler:()=>n.full?i(d.BASE_LOGIN):i()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:o,handler:()=>i()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:P}),()=>{const{title:l,subTitle:u,btnText:b,icon:x,handler:E,status:y}=s(g)||{};return r(k,{class:_,status:y,title:n.title||l,"sub-title":n.subTitle||u},{extra:()=>b&&r(h,{type:"primary",onClick:E},{default:()=>b}),icon:()=>x?r("img",{src:x},null):null})}}});export{w as default};