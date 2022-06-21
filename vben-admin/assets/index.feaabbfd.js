import{ca as B,X as z,n as m,r as R,U as H,a as $,J as N,v as U,w as M,a7 as q,al as k,N as W,cu as X,f3 as J,M as Q,_ as C,S as w,dR as G,x as Y,y as Z,T as D,dQ as K,de as tt,aw as et,bs as E,bC as nt,fs as rt,b as ot,f as L,ay as b,o as h,h as at,j as y,k as O,q as it,F as st,i as x,bK as I}from"./index.86eef68f.js";import{c as V,u as ct}from"./index.b2763a64.js";import lt from"./SessionTimeoutLogin.8eb1c8fa.js";import{s as ut,g as pt}from"./scrollTo.9c18f052.js";import"./FullscreenOutlined.bb1dcf18.js";import"./index.1f920db6.js";import"./useWindowSizeFn.b25e3a15.js";import"./useContentViewHeight.e3fc9fcb.js";import"./uniqBy.7257ffe9.js";import"./_baseIteratee.75a0c84d.js";import"./get.882a7763.js";import"./index.6e24dab7.js";import"./index.c55ba9b6.js";import"./useRefs.898b9923.js";import"./PlusOutlined.665d11ea.js";import"./RedoOutlined.a14d2294.js";import"./index.51e4afdb.js";import"./lock.9c08aa0f.js";import"./Login.28a86e80.js";import"./LoginForm.0f07f865.js";import"./index.89defc1b.js";import"./Checkbox.c7dd7014.js";/* empty css              *//* empty css              */import"./index.fdb21169.js";import"./LoginFormTitle.20152b58.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./useSize.2bb03c7d.js";import"./GithubFilled.31bc6bed.js";import"./WechatFilled.f75ed5f2.js";import"./index.747e9e76.js";import"./ForgetPasswordForm.50fc3de3.js";import"./index.ecfe3789.js";import"./RegisterForm.f738708a.js";import"./index.d79a400b.js";import"./MobileForm.8b62bb5a.js";import"./QrCodeForm.0a89935f.js";import"./index.eba92bd9.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";function mt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,z(s))}},r=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=B(n(c))}};return r.cancel=function(){return B.cancel(t)},r}var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=dt;function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ft(e,o,n[o])})}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(t,n){var r=F({},t,n.attrs);return m(R,F({},r,{icon:gt}),null)};P.displayName="VerticalAlignTopOutlined";P.inheritAttrs=!1;var vt=P,bt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ht=$({name:"ABackTop",inheritAttrs:!1,props:bt(),setup:function(t,n){var r=n.slots,o=n.attrs,s=n.emit,c=N("back-top",t),a=c.prefixCls,g=c.direction,l=U(),f=M({visible:!1,scrollEvent:null}),A=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},j=function(u){var p=t.target,d=p===void 0?A:p,v=t.duration;ut(0,{getContainer:d,duration:v}),s("click",u)},T=mt(function(i){var u=t.visibilityHeight,p=pt(i.target,!0);f.visible=p>u}),_=function(){var u=t.target,p=u||A,d=p();f.scrollEvent=tt(d,"scroll",function(v){T(v)}),T({target:d})},S=function(){f.scrollEvent&&f.scrollEvent.remove(),T.cancel()};return q(function(){return t.target},function(){S(),k(function(){_()})}),W(function(){k(function(){_()})}),X(function(){k(function(){_()})}),J(function(){S()}),Q(function(){S()}),function(){var i,u,p=m("div",{class:"".concat(a.value,"-content")},[m("div",{class:"".concat(a.value,"-icon")},[m(vt,null,null)])]),d=C(C({},o),{onClick:j,class:(i={},w(i,"".concat(a.value),!0),w(i,"".concat(o.class),o.class),w(i,"".concat(a.value,"-rtl"),g.value==="rtl"),i)}),v=G("fade");return m(K,v,{default:function(){return[Y(m("div",D(D({},d),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||p]),[[Z,f.visible]])]}})}}}),xt=H(ht);const Tt=$({name:"LayoutFeatures",components:{BackTop:xt,LayoutLockPage:V(()=>E(()=>import("./index.97636c6b.js"),["assets/index.97636c6b.js","assets/index.86eef68f.js","assets/index.af8b0bc7.css","assets/LockPage.7b49f1b5.js","assets/LockPage.03697618.css","assets/lock.9c08aa0f.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>E(()=>import("./index.c83d1845.js").then(function(e){return e.i}),["assets/index.c83d1845.js","assets/index.4fcc0aeb.js","assets/index.5c7227e9.css","assets/index.86eef68f.js","assets/index.af8b0bc7.css","assets/index.6e24dab7.js","assets/index.464798c8.css","assets/ArrowLeftOutlined.dd705577.js","assets/index.fdb21169.js","assets/index.3a3c1369.css","assets/index.b2763a64.js","assets/index.9564b130.css","assets/FullscreenOutlined.bb1dcf18.js","assets/index.1f920db6.js","assets/index.55076fdd.css","assets/useWindowSizeFn.b25e3a15.js","assets/useContentViewHeight.e3fc9fcb.js","assets/uniqBy.7257ffe9.js","assets/_baseIteratee.75a0c84d.js","assets/get.882a7763.js","assets/index.c55ba9b6.js","assets/index.a2831ae3.css","assets/useRefs.898b9923.js","assets/PlusOutlined.665d11ea.js","assets/RedoOutlined.a14d2294.js","assets/index.51e4afdb.js","assets/lock.9c08aa0f.js"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=nt(),o=rt(),{prefixCls:s}=ot("setting-drawer-feature"),{getShowHeader:c}=ct(),a=L(()=>o.getSessionTimeout),g=L(()=>{if(!x(t))return!1;const l=x(n);return l===I.AUTO?!x(c)||x(r):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:a}}});function _t(e,t,n,r,o,s){const c=b("LayoutLockPage"),a=b("BackTop"),g=b("SettingDrawer"),l=b("SessionTimeoutLogin");return h(),at(st,null,[m(c),e.getUseOpenBackTop?(h(),y(a,{key:0,target:e.getTarget},null,8,["target"])):O("",!0),e.getIsFixedSettingDrawer?(h(),y(g,{key:1,class:it(e.prefixCls)},null,8,["class"])):O("",!0),e.getIsSessionTimeout?(h(),y(l,{key:2})):O("",!0)],64)}var pe=et(Tt,[["render",_t]]);export{pe as default};
