import{a as F,H as O,v as P,K as _,J as R,_ as S,b$ as I,R as B,S as b,n as u,T as g,G}from"./index.f3af519a.js";import{V as T}from"./Checkbox.2381c478.js";var U=globalThis&&globalThis.__rest||function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(i[r[n]]=t[r[n]]);return i},V=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:G.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},$=F({name:"ARadio",props:V(),setup:function(e,i){var r=i.emit,n=i.expose,f=i.slots,h=O(),s=P(),c=_("radioGroupContext",void 0),w=R("radio",e),p=w.prefixCls,x=w.direction,v=function(){s.value.focus()},k=function(){s.value.blur()};n({focus:v,blur:k});var m=function(a){var l=a.target.checked;r("update:checked",l),r("update:value",l),r("change",a),h.onFieldChange()},y=function(a){r("change",a),c&&c.onRadioChange&&c.onRadioChange(a)};return function(){var o,a=c;e.prefixCls;var l=e.id,C=l===void 0?h.id.value:l,z=U(e,["prefixCls","id"]),d=S({prefixCls:p.value,id:C},I(z,["onUpdate:checked","onUpdate:value"]));a?(d.name=a.props.name,d.onChange=y,d.checked=e.value===a.stateValue.value,d.disabled=e.disabled||a.props.disabled):d.onChange=m;var j=B((o={},b(o,"".concat(p.value,"-wrapper"),!0),b(o,"".concat(p.value,"-wrapper-checked"),d.checked),b(o,"".concat(p.value,"-wrapper-disabled"),d.disabled),b(o,"".concat(p.value,"-wrapper-rtl"),x.value==="rtl"),o));return u("label",{class:j},[u(T,g(g({},d),{},{type:"radio",ref:s}),null),f.default&&u("span",null,[f.default()])])}}});export{$ as R,V as r};
