var d=(e,u,o)=>new Promise((p,r)=>{var m=t=>{try{i(o.next(t))}catch(a){r(a)}},s=t=>{try{i(o.throw(t))}catch(a){r(a)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(m,s);i((o=o.apply(e,u)).next())});import{P as _}from"./index.26b292ac.js";import{B as F}from"./BasicForm.1e1ae441.js";import{u as h}from"./useForm.4747de5e.js";import{aw as w,a as C,ay as n,o as E,j as g,z as c,m as f,n as l,B}from"./index.f3af519a.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useSize.0170848e.js";import"./eagerComputed.fa7aa305.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";/* empty css              *//* empty css              */import"./index.fc2503ca.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.adb39650.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.cc85a3e5.js";import"./get.835de125.js";import"./index.5dae67a3.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./index.1fd47641.js";import"./index.79764867.js";import"./FullscreenOutlined.827fad55.js";import"./index.b675152a.js";import"./index.1bece7c7.js";import"./uuid.2b29000c.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(u,o)=>o?o!==e.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],A=C({name:"ChangePassword",components:{BasicForm:F,PageWrapper:_},setup(){const[e,{validate:u,resetFields:o}]=h({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function p(){return d(this,null,function*(){try{const r=yield u(),{passwordOld:m,passwordNew:s}=r}catch(r){}})}return{register:e,resetFields:o,handleSubmit:p}}}),b={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},v=B(" \u91CD\u7F6E "),D=B(" \u786E\u8BA4 ");function k(e,u,o,p,r,m){const s=n("BasicForm"),i=n("a-button"),t=n("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",b,[l(s,{onRegister:e.register},null,8,["onRegister"]),f("div",y,[l(i,{onClick:e.resetFields},{default:c(()=>[v]),_:1},8,["onClick"]),l(i,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:c(()=>[D]),_:1},8,["onClick"])])])]),_:1})}var go=w(A,[["render",k]]);export{go as default};