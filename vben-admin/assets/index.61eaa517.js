import{U as M,ak as R,a as U,G as c,J as G,v as x,c4 as m,R as J,S as l,n as o,c5 as Q,$ as W,ci as X,dR as Y,x as q,y as K,T as F,dQ as Z,ab as ee,dU as ae,ad as te,ac as ne,dV as oe,dW as re,dX as le,dY as ie}from"./index.86eef68f.js";var ce={success:ee,info:ae,error:te,warning:ne},se={success:oe,info:re,error:le,warning:ie},de=R("success","info","warning","error"),fe=function(){return{type:c.oneOf(de),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ue=U({name:"AAlert",inheritAttrs:!1,props:fe(),setup:function(a,u){var i=u.slots,P=u.emit,b=u.attrs,S=u.expose,C=G("alert",a),B=C.prefixCls,H=C.direction,s=x(!1),w=x(!1),I=x(),L=function(n){n.preventDefault();var r=I.value;r.style.height="".concat(r.offsetHeight,"px"),r.style.height="".concat(r.offsetHeight,"px"),s.value=!0,P("close",n)},k=function(){var n;s.value=!1,w.value=!0,(n=a.afterClose)===null||n===void 0||n.call(a)};S({animationEnd:k});var N=x({});return function(){var t,n,r=a.banner,z=a.closeIcon,T=z===void 0?(n=i.closeIcon)===null||n===void 0?void 0:n.call(i):z,h=a.closable,d=a.type,f=a.showIcon,y=m(i,a,"closeText"),p=m(i,a,"description"),A=m(i,a,"message"),g=m(i,a,"icon");f=r&&f===void 0?!0:f,d=r&&d===void 0?"warning":d||"info";var _=(p?se:ce)[d]||null;y&&(h=!0);var e=B.value,V=J(e,(t={},l(t,"".concat(e,"-").concat(d),!0),l(t,"".concat(e,"-closing"),s.value),l(t,"".concat(e,"-with-description"),!!p),l(t,"".concat(e,"-no-icon"),!f),l(t,"".concat(e,"-banner"),!!r),l(t,"".concat(e,"-closable"),h),l(t,"".concat(e,"-rtl"),H.value==="rtl"),t)),j=h?o("button",{type:"button",onClick:L,class:"".concat(e,"-close-icon"),tabindex:0},[y?o("span",{class:"".concat(e,"-close-text")},[y]):T===void 0?o(Q,null,null):T]):null,$=g&&(W(g)?X(g,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[g]))||o(_,{class:"".concat(e,"-icon")},null),D=Y("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:k,onBeforeLeave:function(v){v.style.maxHeight="".concat(v.offsetHeight,"px")},onLeave:function(v){v.style.maxHeight="0px"}});return w.value?null:o(Z,D,{default:function(){return[q(o("div",F(F({role:"alert"},b),{},{style:[b.style,N.value],class:[b.class,V],"data-show":!s.value,ref:I}),[f?$:null,o("div",{class:"".concat(e,"-content")},[A?o("div",{class:"".concat(e,"-message")},[A]):null,p?o("div",{class:"".concat(e,"-description")},[p]):null]),j]),[[K,!s.value]])]}})}}}),ge=M(ue);export{ge as A};
