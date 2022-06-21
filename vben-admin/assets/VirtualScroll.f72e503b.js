import{a as C,v as R,w as T,f as c,i,a7 as k,N as B,al as I,cO as M,n as l,cA as P,aw as E,aF as L,ay as b,o as j,j as q,z as _,m as g,t as W,B as V}from"./index.86eef68f.js";import{D as z}from"./index.fdb21169.js";import{P as O}from"./index.ac70f211.js";import"./index.129c4479.js";import"./index.73cf0445.js";import"./useSize.2bb03c7d.js";import"./eagerComputed.00133b77.js";import"./useWindowSizeFn.b25e3a15.js";import"./useContentViewHeight.e3fc9fcb.js";import"./ArrowLeftOutlined.dd705577.js";import"./index.becdb7d3.js";import"./transButton.9e204124.js";const U={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function o(t,n="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${n}`}var G=C({name:"VirtualScroll",props:U,setup(t,{slots:n}){const u=R(null),a=T({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),d=c(()=>parseInt(t.itemHeight,10)),m=c(()=>Math.max(0,a.first-i(p))),f=c(()=>Math.min((t.items||[]).length,a.last+i(p))),v=c(()=>({height:o((t.items||[]).length*i(d))})),h=c(()=>{const e={},r=o(t.height),s=o(t.minHeight),y=o(t.minWidth),H=o(t.maxHeight),N=o(t.maxWidth),F=o(t.width);return r&&(e.height=r),s&&(e.minHeight=s),y&&(e.minWidth=y),H&&(e.maxHeight=H),N&&(e.maxWidth=N),F&&(e.width=F),e});k([()=>t.itemHeight,()=>t.height],()=>{S()});function x(e){const r=i(u);if(!r)return 0;const s=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(s/i(d))}function $(){return Math.floor(a.scrollTop/i(d))}function S(){const e=i(u);!e||(a.scrollTop=e.scrollTop,a.first=$(),a.last=x(a.first))}function A(){const{items:e=[]}=t;return e.slice(i(m),i(f)).map(D)}function D(e,r){r+=i(m);const s=o(r*i(d));return l("div",{class:`${w}__item`,style:{top:s},key:r},[P(n,"default",{index:r,item:e})])}return B(()=>{a.last=x(0),I(()=>{const e=i(u);!e||M({el:e,name:"scroll",listener:S,wait:0})})}),()=>l("div",{class:w,style:i(h),ref:u},[l("div",{class:`${w}__container`,style:i(v)},[A()])])}});var J=E(G,[["__scopeId","data-v-dd7becb6"]]);const K=L(J);const Q=(()=>{const t=[];for(let n=1;n<2e4;n++)t.push({title:"\u5217\u8868\u9879"+n});return t})(),X=C({components:{VScroll:K,Divider:z,PageWrapper:O},setup(){return{data:Q}}}),Y=V("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=V("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function at(t,n,u,a,p,d){const m=b("Divider"),f=b("VScroll"),v=b("PageWrapper");return j(),q(v,{class:"virtual-scroll-demo"},{default:_(()=>[l(m,null,{default:_(()=>[Y]),_:1}),g("div",Z,[l(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),l(m,null,{default:_(()=>[et]),_:1}),g("div",it,[l(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var pt=E(X,[["render",at],["__scopeId","data-v-002a1a68"]]);export{pt as default};
