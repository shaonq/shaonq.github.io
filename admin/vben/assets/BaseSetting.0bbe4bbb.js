var l=(o,s,r)=>new Promise((c,i)=>{var d=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,t);a((r=r.apply(o,s)).next())});import{a as C,cB as g,C as h,s as B,N as F,f as A,aw as b,E as w,ay as p,o as I,j as S,z as u,n,m as _,f9 as y,fa as k,B as E}from"./index.f3af519a.js";/* empty css              */import{B as R}from"./BasicForm.1e1ae441.js";import{u as x}from"./useForm.4747de5e.js";import{a as N}from"./index.3beae2b1.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.b074e607.js";import{b as $}from"./data.08d7c751.js";import{u as M}from"./upload.7ced4e8d.js";import{R as T,C as j}from"./index.a033ce23.js";/* empty css              */import"./index.fc2503ca.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.adb39650.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.cc85a3e5.js";import"./get.835de125.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./useSize.0170848e.js";import"./index.1fd47641.js";import"./index.79764867.js";import"./useWindowSizeFn.fab2207f.js";import"./FullscreenOutlined.827fad55.js";import"./index.b675152a.js";import"./index.1bece7c7.js";import"./uuid.2b29000c.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./uniqBy.e095b0b8.js";import"./index.cb40c89e.js";import"./index.d994c877.js";const z=C({components:{BasicForm:R,CollapseContainer:g,Button:h,ARow:T,ACol:j,CropperAvatar:N},setup(){const{createMessage:o}=w(),s=B(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:$,showActionButtonGroup:!1});F(()=>l(this,null,function*(){const t=yield V();c(t)}));const i=A(()=>{const{avatar:t}=s.getUserInfo;return t||U});function d(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:M,updateAvatar:d,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),G=o=>(y("data-v-249137cb"),o=o(),k(),o),P={class:"change-avatar"},W=G(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1)),q=E(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");function D(o,s,r,c,i,d){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),v=p("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",P,[W,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[q]),_:1},8,["onClick"])]),_:1})}var To=b(z,[["render",D],["__scopeId","data-v-249137cb"]]);export{To as default};
