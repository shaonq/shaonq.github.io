import{B as h}from"./TableImg.d18d1540.js";import{j as k}from"./BasicForm.9ae6f0bb.js";import{u as C}from"./useTable.0c82769c.js";import{a as w,aw as _,ay as r,o as E,h as B,n as u,z as c,B as D}from"./index.86eef68f.js";import"./index.2842a17a.js";import"./Checkbox.c7dd7014.js";import"./index.89defc1b.js";import"./index.d9f2152b.js";import"./eagerComputed.00133b77.js";import"./useForm.f8375991.js";import"./index.ac70f211.js";import"./index.129c4479.js";import"./index.73cf0445.js";import"./useSize.2bb03c7d.js";import"./useWindowSizeFn.b25e3a15.js";import"./useContentViewHeight.e3fc9fcb.js";import"./ArrowLeftOutlined.dd705577.js";import"./index.becdb7d3.js";import"./transButton.9e204124.js";import"./index.b74f8aee.js";import"./index.98ce3587.js";import"./index.599a76b5.js";import"./uuid.2b29000c.js";import"./index.1b0ff10b.js";import"./_baseIteratee.75a0c84d.js";import"./get.882a7763.js";import"./DeleteOutlined.d82f0bc9.js";import"./index.ab0b1bde.js";import"./useRefs.898b9923.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./index.3dbe0c2e.js";import"./FullscreenOutlined.bb1dcf18.js";import"./index.fdb21169.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a14d2294.js";import"./index.6baef58c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.9c18f052.js";import"./index.ad3c5ac8.js";/* empty css              *//* empty css              */import"./index.ecfe3789.js";import"./index.808aa408.js";import"./index.61eaa517.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";import"./index.d79a400b.js";import"./index.747e9e76.js";import"./uniqBy.7257ffe9.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],T=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=w({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:e}]=C({columns:g,showIndexColumn:!1,dataSource:T,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=e(),f=i.findIndex(b=>b.key===t.key);i.splice(f,1)}}function s(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){}function p(){const t=e(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:m,handleAdd:p,getDataSource:e,handleEditChange:d}}}),x=D(" \u65B0\u589E\u6210\u5458 ");function F(n,e,a,l,s,d){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return E(),B("div",null,[u(m,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:i})=>[u(p,{actions:n.createActions(o,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[x]),_:1},8,["onClick"])])}var Nt=_(N,[["render",F]]);export{Nt as default};
