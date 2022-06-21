var x=Object.defineProperty,L=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var M=(e,a,r)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,_=(e,a)=>{for(var r in a||(a={}))V.call(a,r)&&M(e,r,a[r]);if(R)for(var r of R(a))z.call(a,r)&&M(e,r,a[r]);return e},C=(e,a)=>L(e,T(a));var P=(e,a,r)=>new Promise((p,d)=>{var h=i=>{try{m(r.next(i))}catch(s){d(s)}},f=i=>{try{m(r.throw(i))}catch(s){d(s)}},m=i=>i.done?p(i.value):Promise.resolve(i.value).then(h,f);m((r=r.apply(e,a)).next())});import{aw as G,a as O,b6 as j,aG as q,v as H,bd as Y,b as Z,bC as F,aZ as J,L as K,ay as B,o as g,h as w,n as Q,z as E,j as A,k as U,t as S,B as W,q as X,c as ee,bf as ae,by as te,bb as ne,eY as re,aH as oe}from"./index.86eef68f.js";import{B as D}from"./index.129c4479.js";const ce=O({name:"LayoutBreadcrumb",components:{Icon:j,[D.name]:D},props:{theme:q.oneOf(["dark","light"])},setup(){const e=H([]),{currentRoute:a}=Y(),{prefixCls:r}=Z("layout-breadcrumb"),{getShowBreadCrumbIcon:p}=F(),d=J(),{t:h}=ee();K(()=>P(this,null,function*(){var y,I,$;if(a.value.name===ae)return;const o=yield te(),t=a.value.matched,n=t==null?void 0:t[t.length-1];let c=a.value.path;n&&((y=n==null?void 0:n.meta)==null?void 0:y.currentActiveMenu)&&(c=n.meta.currentActiveMenu);const l=ne(o,c),b=o.filter(N=>N.path===l[0]),u=f(b,l);if(!u||u.length===0)return;const k=m(u);(I=a.value.meta)!=null&&I.currentActiveMenu&&k.push(C(_({},a.value),{name:(($=a.value.meta)==null?void 0:$.title)||a.value.name})),e.value=k}));function f(o,t){const n=[];return o.forEach(c=>{var l,b;t.includes(c.path)&&n.push(C(_({},c),{name:((l=c.meta)==null?void 0:l.title)||c.name})),(b=c.children)!=null&&b.length&&n.push(...f(c.children,t))}),n}function m(o){return re(o,t=>{const{meta:n,name:c}=t;if(!n)return!!c;const{title:l,hideBreadcrumb:b,hideMenu:u}=n;return!(!l||b||u)}).filter(t=>{var n;return!((n=t.meta)!=null&&n.hideBreadcrumb)})}function i(o,t,n){n==null||n.preventDefault();const{children:c,redirect:l,meta:b}=o;if((c==null?void 0:c.length)&&!l){n==null||n.stopPropagation();return}if(!(b!=null&&b.carryParam))if(l&&oe(l))d(l);else{let u="";t.length===1?u=t[0]:u=`${t.slice(1).pop()||""}`,u=/^\//.test(u)?u:`/${u}`,d(u)}}function s(o,t){return o.indexOf(t)!==o.length-1}function v(o){var t;return o.icon||((t=o.meta)==null?void 0:t.icon)}return{routes:e,t:h,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:p,handleClick:i,hasRedirect:s}}}),se={key:1};function ue(e,a,r,p,d,h){const f=B("Icon"),m=B("router-link"),i=B("a-breadcrumb");return g(),w("div",{class:X([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[Q(i,{routes:e.routes},{itemRender:E(({route:s,routes:v,paths:o})=>[e.getShowBreadCrumbIcon&&e.getIcon(s)?(g(),A(f,{key:0,icon:e.getIcon(s)},null,8,["icon"])):U("",!0),e.hasRedirect(v,s)?(g(),A(m,{key:2,to:"",onClick:t=>e.handleClick(s,o,t)},{default:E(()=>[W(S(e.t(s.name||s.meta.title)),1)]),_:2},1032,["onClick"])):(g(),w("span",se,S(e.t(s.name||s.meta.title)),1))]),_:1},8,["routes"])],2)}var me=G(ce,[["render",ue]]);export{me as default};
