import{B as l,a as c}from"./index.3dbe0c2e.js";import{B as d}from"./BasicForm.9ae6f0bb.js";import{u}from"./useForm.f8375991.js";import{a as f,v as B,aw as g,al as h,ay as p,o as _,j as b,z as C,m as v,n as R,az as V}from"./index.86eef68f.js";import"./useWindowSizeFn.b25e3a15.js";import"./FullscreenOutlined.bb1dcf18.js";/* empty css              *//* empty css              */import"./index.fdb21169.js";import"./index.2842a17a.js";import"./Checkbox.c7dd7014.js";import"./index.89defc1b.js";import"./index.599a76b5.js";import"./index.b74f8aee.js";import"./index.98ce3587.js";import"./index.ecfe3789.js";import"./get.882a7763.js";import"./index.d9f2152b.js";import"./eagerComputed.00133b77.js";import"./index.1b0ff10b.js";import"./_baseIteratee.75a0c84d.js";import"./DeleteOutlined.d82f0bc9.js";import"./index.ab0b1bde.js";import"./useRefs.898b9923.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./useSize.2bb03c7d.js";import"./index.808aa408.js";import"./index.61eaa517.js";import"./index.6baef58c.js";import"./uuid.2b29000c.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";import"./index.d79a400b.js";import"./index.747e9e76.js";import"./uniqBy.7257ffe9.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),b(m,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[v("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var lo=g(F,[["render",D]]);export{lo as default};
