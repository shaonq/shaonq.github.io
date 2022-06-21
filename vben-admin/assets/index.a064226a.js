import{aw as B,a as h,af as w,v as C,ay as r,o as y,j as _,z as a,n as u,aI as R,al as $,B as n}from"./index.86eef68f.js";import{A as T}from"./index.61eaa517.js";import{S as V}from"./index.808aa408.js";import{b as d}from"./index.3dbe0c2e.js";import k from"./Modal1.4753b40a.js";import D from"./Modal2.b4504c8a.js";import v from"./Modal3.d274ebb3.js";import b from"./Modal4.9e23ad0a.js";import{P}from"./index.ac70f211.js";import"./useFlexGapSupport.c94aa233.js";import"./useWindowSizeFn.b25e3a15.js";import"./FullscreenOutlined.bb1dcf18.js";import"./BasicForm.9ae6f0bb.js";/* empty css              *//* empty css              */import"./index.fdb21169.js";import"./index.2842a17a.js";import"./Checkbox.c7dd7014.js";import"./index.89defc1b.js";import"./index.599a76b5.js";import"./index.b74f8aee.js";import"./index.98ce3587.js";import"./index.ecfe3789.js";import"./get.882a7763.js";import"./index.d9f2152b.js";import"./eagerComputed.00133b77.js";import"./index.1b0ff10b.js";import"./_baseIteratee.75a0c84d.js";import"./DeleteOutlined.d82f0bc9.js";import"./index.ab0b1bde.js";import"./useRefs.898b9923.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useSize.2bb03c7d.js";import"./index.6baef58c.js";import"./uuid.2b29000c.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";import"./index.d79a400b.js";import"./index.747e9e76.js";import"./uniqBy.7257ffe9.js";import"./useForm.f8375991.js";import"./index.129c4479.js";import"./index.73cf0445.js";import"./useContentViewHeight.e3fc9fcb.js";import"./ArrowLeftOutlined.dd705577.js";import"./index.becdb7d3.js";import"./transButton.9e204124.js";const I=h({components:{Alert:T,Modal1:k,Modal2:D,Modal3:v,Modal4:b,PageWrapper:P,ASpace:V},setup(){const o=w(null),[e,{openModal:F}]=d(),[E,{openModal:M}]=d(),[g,{openModal:i}]=d(),[t,{openModal:p}]=d(),l=C(!1),m=C(null);function c(){p(!0,{data:"content",info:"Info"})}function A(){F(!0)}function f(s){switch(s){case 1:o.value=k;break;case 2:o.value=D;break;case 3:o.value=v;break;default:o.value=b;break}$(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:E,openModal2:M,register3:g,openModal3:i,register4:t,openModal4:p,modalVisible:l,userData:m,openTargetModal:f,send:c,currentModal:o,openModalLoading:A}}}),S=n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) "),W=n(" \u6253\u5F00\u5F39\u7A97 "),L=n(" \u6253\u5F00\u5F39\u7A97 "),N=n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E "),j=n(" \u6253\u5F00\u5F39\u7A971 "),z=n(" \u6253\u5F00\u5F39\u7A972 "),H=n(" \u6253\u5F00\u5F39\u7A973 "),U=n(" \u6253\u5F00\u5F39\u7A974 ");function q(o,e,F,E,M,g){const i=r("Alert"),t=r("a-button"),p=r("a-space"),l=r("Modal1"),m=r("Modal2"),c=r("Modal3"),A=r("Modal4"),f=r("PageWrapper");return y(),_(f,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:a(()=>[S]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:a(()=>[W]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:a(()=>[L]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:a(()=>[N]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(p,null,{default:a(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=s=>o.openTargetModal(1))},{default:a(()=>[j]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=s=>o.openTargetModal(2))},{default:a(()=>[z]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=s=>o.openTargetModal(3))},{default:a(()=>[H]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=s=>o.openTargetModal(4))},{default:a(()=>[U]),_:1})]),_:1}),(y(),_(R(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=s=>o.modalVisible=s),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(c,{onRegister:o.register3},null,8,["onRegister"]),u(A,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var jo=B(I,[["render",q]]);export{jo as default};
