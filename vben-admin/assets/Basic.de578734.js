import{B}from"./TableImg.d18d1540.js";import"./BasicForm.9ae6f0bb.js";import{getBasicColumns as h,getBasicData as v}from"./tableData.0a246808.js";import{aw as b,a as A,v as e,ay as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.86eef68f.js";import"./index.2842a17a.js";import"./Checkbox.c7dd7014.js";import"./index.89defc1b.js";import"./index.d9f2152b.js";import"./eagerComputed.00133b77.js";import"./useForm.f8375991.js";import"./index.ac70f211.js";import"./index.129c4479.js";import"./index.73cf0445.js";import"./useSize.2bb03c7d.js";import"./useWindowSizeFn.b25e3a15.js";import"./useContentViewHeight.e3fc9fcb.js";import"./ArrowLeftOutlined.dd705577.js";import"./index.becdb7d3.js";import"./transButton.9e204124.js";import"./index.b74f8aee.js";import"./index.98ce3587.js";import"./index.599a76b5.js";import"./uuid.2b29000c.js";import"./index.1b0ff10b.js";import"./_baseIteratee.75a0c84d.js";import"./get.882a7763.js";import"./DeleteOutlined.d82f0bc9.js";import"./index.ab0b1bde.js";import"./useRefs.898b9923.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./index.3dbe0c2e.js";import"./FullscreenOutlined.bb1dcf18.js";import"./index.fdb21169.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a14d2294.js";import"./index.6baef58c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.9c18f052.js";import"./index.ad3c5ac8.js";/* empty css              *//* empty css              */import"./index.ecfe3789.js";import"./index.808aa408.js";import"./index.61eaa517.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";import"./index.d79a400b.js";import"./index.747e9e76.js";import"./uniqBy.7257ffe9.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:h(),data:v(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"},F=u(" \u5F00\u542Floading ");function R(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[F]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Fo=b(y,[["render",R]]);export{Fo as default};
