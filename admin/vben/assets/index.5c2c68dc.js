import{B as C}from"./TableImg.8168a049.js";import{j as T}from"./BasicForm.1e1ae441.js";import{u as S}from"./useTable.1efa4f78.js";import{g as w}from"./system.44e012d2.js";import{P as B}from"./index.26b292ac.js";import F from"./DeptTree.ab0cbccc.js";import{b as D}from"./index.79764867.js";import{A,c as I,s as M}from"./AccountModal.b154c751.js";import{aw as y,a as E,aZ as k,w as R,ay as e,o as P,j as V,z as i,n as r,B as W}from"./index.f3af519a.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./useForm.4747de5e.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.adb39650.js";import"./uuid.2b29000c.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./get.835de125.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./useSize.0170848e.js";import"./useWindowSizeFn.fab2207f.js";import"./index.fc2503ca.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6782318c.js";import"./FullscreenOutlined.827fad55.js";import"./index.1bece7c7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f26e2396.js";import"./index.faeddac2.js";/* empty css              *//* empty css              */import"./index.cc85a3e5.js";import"./index.1fd47641.js";import"./index.b675152a.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";import"./index.ef4d88c8.js";import"./useContextMenu.160816e9.js";const $=E({name:"AccountManagement",components:{BasicTable:C,PageWrapper:B,DeptTree:F,AccountModal:A,TableAction:T},setup(){const t=k(),[h,{openModal:a}]=D(),l=R({}),[g,{reload:s,updateTableDataRecord:c}]=S({title:"\u8D26\u53F7\u5217\u8868",api:w,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function p(){a(!0,{isUpdate:!1})}function m(o){a(!0,{record:o,isUpdate:!0})}function u(o){}function d({isUpdate:o,values:b}){if(o){const _=c(b.id,b)}else s()}function f(o=""){l.deptId=o,s()}function n(o){t("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:p,handleEdit:m,handleDelete:u,handleSuccess:d,handleSelect:f,handleView:n,searchInfo:l}}}),j=W("\u65B0\u589E\u8D26\u53F7");function v(t,h,a,l,g,s){const c=e("DeptTree"),p=e("a-button"),m=e("TableAction"),u=e("BasicTable"),d=e("AccountModal"),f=e("PageWrapper");return P(),V(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:i(()=>[r(c,{class:"w-1/4 xl:w-1/5",onSelect:t.handleSelect},null,8,["onSelect"]),r(u,{onRegister:t.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:t.searchInfo},{toolbar:i(()=>[r(p,{type:"primary",onClick:t.handleCreate},{default:i(()=>[j]),_:1},8,["onClick"])]),action:i(({record:n})=>[r(m,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:t.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:t.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:t.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),r(d,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Uo=y($,[["render",v]]);export{Uo as default};