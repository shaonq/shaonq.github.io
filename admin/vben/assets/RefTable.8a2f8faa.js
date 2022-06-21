import{B as b}from"./TableImg.8168a049.js";import"./BasicForm.1e1ae441.js";import{getBasicColumns as p,getBasicShortColumns as E}from"./tableData.0a246808.js";import{aw as R,a as w,v as D,ay as f,o as S,h as A,m as d,n as u,z as i,B as n,E as T,i as y}from"./index.f3af519a.js";import{d as L}from"./table.58a92ef5.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./useForm.4747de5e.js";import"./index.26b292ac.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useSize.0170848e.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.adb39650.js";import"./uuid.2b29000c.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./get.835de125.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./index.79764867.js";import"./FullscreenOutlined.827fad55.js";import"./index.fc2503ca.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6782318c.js";import"./index.1bece7c7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f26e2396.js";import"./index.faeddac2.js";/* empty css              *//* empty css              */import"./index.cc85a3e5.js";import"./index.1fd47641.js";import"./index.b675152a.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";const K=w({components:{BasicTable:b},setup(){const o=D(null),{createMessage:s}=T();function t(){const m=y(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(E())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:L,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),v={class:"p-4"},P={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",v,[d("div",P,[u(e,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[$]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[M]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[N]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[V]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[z]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[I]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[H]),_:1},8,["onClick"])]),d("div",j,[u(e,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[q]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[G]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[J]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[O]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[Q]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Uo=R(K,[["render",U]]);export{Uo as default};