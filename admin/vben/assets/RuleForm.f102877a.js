var f=(e,u,t)=>new Promise((m,s)=>{var d=o=>{try{i(t.next(o))}catch(l){s(l)}},r=o=>{try{i(t.throw(o))}catch(l){s(l)}},i=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,r);i((t=t.apply(e,u)).next())});import{B as _}from"./BasicForm.1e1ae441.js";import{u as b}from"./useForm.4747de5e.js";import{aw as g,a as A,cB as P,ay as B,o as E,j as h,z as n,m as k,n as p,E as v,B as c}from"./index.f3af519a.js";import{P as D}from"./index.26b292ac.js";import{i as V}from"./system.44e012d2.js";/* empty css              *//* empty css              */import"./index.fc2503ca.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.adb39650.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.cc85a3e5.js";import"./get.835de125.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./useSize.0170848e.js";import"./index.1fd47641.js";import"./index.79764867.js";import"./useWindowSizeFn.fab2207f.js";import"./FullscreenOutlined.827fad55.js";import"./index.b675152a.js";import"./index.1bece7c7.js";import"./uuid.2b29000c.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,u)=>f(void 0,null,function*(){return u?u==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,u){return new Promise((t,m)=>{V(u).then(()=>t()).catch(s=>{m(s.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],y=A({components:{BasicForm:_,CollapseContainer:P,PageWrapper:D},setup(){const{createMessage:e}=v(),[u,{validateFields:t,clearValidate:m,getFieldsValue:s,resetFields:d,setFieldsValue:r}]=b({labelWidth:120,schemas:C,actionColOptions:{span:24}});function i(){return f(this,null,function*(){try{const a=yield t()}catch(a){}})}function o(){return f(this,null,function*(){m()})}function l(){const a=s();e.success("values:"+JSON.stringify(a))}function F(){r({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:u,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:l,setFormValues:F,validateForm:i,resetValidate:o,resetFields:d}}}),q={class:"mb-4"},S=c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 "),w=c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F "),I=c(" \u83B7\u53D6\u8868\u5355\u503C "),N=c(" \u8BBE\u7F6E\u8868\u5355\u503C "),M=c(" \u91CD\u7F6E ");function R(e,u,t,m,s,d){const r=B("a-button"),i=B("BasicForm"),o=B("CollapseContainer"),l=B("PageWrapper");return E(),h(l,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[k("div",q,[p(r,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[S]),_:1},8,["onClick"]),p(r,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[w]),_:1},8,["onClick"]),p(r,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[I]),_:1},8,["onClick"]),p(r,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[N]),_:1},8,["onClick"]),p(r,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[M]),_:1},8,["onClick"])]),p(o,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(i,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ye=g(y,[["render",R]]);export{ye as default};