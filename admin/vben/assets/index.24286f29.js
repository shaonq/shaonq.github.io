import{a as _,aG as v,v as t,b,f as x,i as e,o as w,h as y,n as H,z,m as S,q as c,bm as l,b1 as k,aw as R}from"./index.f3af519a.js";import{u as C}from"./useWindowSizeFn.fab2207f.js";import{a as B}from"./useContentViewHeight.8c1cb1ae.js";const L=["src"],$=_({__name:"index",props:{frameSrc:v.string.def("")},setup(p){const i=t(!0),m=t(50),s=t(window.innerHeight),o=t(),{headerHeightRef:g}=B(),{prefixCls:r}=b("iframe-page");C(d,150,{immediate:!0});const f=x(()=>({height:`${e(s)}px`}));function d(){const n=e(o);if(!n)return;const a=g.value;m.value=a,s.value=window.innerHeight-a;const u=document.documentElement.clientHeight-a;n.style.height=`${u}px`}function h(){i.value=!1,d()}return(n,a)=>(w(),y("div",{class:c(e(r)),style:l(e(f))},[H(e(k),{spinning:i.value,size:"large",style:l(e(f))},{default:z(()=>[S("iframe",{src:p.frameSrc,class:c(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:h},null,42,L)]),_:1},8,["spinning","style"])],6))}});var V=R($,[["__scopeId","data-v-179381bf"]]);export{V as default};
