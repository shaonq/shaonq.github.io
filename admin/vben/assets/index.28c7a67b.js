import{aw as F,a as y,ay as t,o as E,j as A,z as p,n as r,B as a}from"./index.f3af519a.js";import{A as R}from"./index.b675152a.js";import{u as s}from"./index.15b0745a.js";import k from"./Drawer1.525444df.js";import B from"./Drawer2.00b8210b.js";import $ from"./Drawer3.0656d781.js";import h from"./Drawer4.008b40a4.js";import v from"./Drawer5.00c47172.js";import{P}from"./index.26b292ac.js";import"./index.5dbeaf96.js";import"./ArrowLeftOutlined.45c4071a.js";import"./BasicForm.1e1ae441.js";/* empty css              *//* empty css              */import"./index.fc2503ca.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.adb39650.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.cc85a3e5.js";import"./get.835de125.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./useSize.0170848e.js";import"./index.1fd47641.js";import"./index.79764867.js";import"./useWindowSizeFn.fab2207f.js";import"./FullscreenOutlined.827fad55.js";import"./index.1bece7c7.js";import"./uuid.2b29000c.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";import"./useForm.4747de5e.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useContentViewHeight.8c1cb1ae.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";const W=y({components:{Alert:R,PageWrapper:P,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:h,Drawer5:v},setup(){const[e,{openDrawer:o,setDrawerProps:u}]=s(),[g,{openDrawer:f}]=s(),[d,{openDrawer:n}]=s(),[i,{openDrawer:m}]=s(),[w,{openDrawer:D}]=s();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),u({loading:!0}),setTimeout(()=>{u({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:i,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}}),b=a(" \u6253\u5F00Drawer "),L=a(" \u6253\u5F00Drawer "),N=a(" \u6253\u5F00Drawer "),T=a(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E "),V=a(" \u6253\u5F00\u8BE6\u60C5Drawer ");function j(e,o,u,g,f,d){const n=t("Alert"),i=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),C=t("PageWrapper");return E(),A(C,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:p(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:p(()=>[b]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=_=>e.openDrawer2(!0))},{default:p(()=>[L]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=_=>e.openDrawer3(!0))},{default:p(()=>[N]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.send},{default:p(()=>[T]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=_=>e.openDrawer5(!0))},{default:p(()=>[V]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var Tr=F(W,[["render",j]]);export{Tr as default};
