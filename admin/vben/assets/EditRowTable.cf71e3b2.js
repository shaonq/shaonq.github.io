var r=(i,u,o)=>new Promise((a,l)=>{var s=t=>{try{n(o.next(t))}catch(e){l(e)}},p=t=>{try{n(o.throw(t))}catch(e){l(e)}},n=t=>t.done?a(t.value):Promise.resolve(t.value).then(s,p);n((o=o.apply(i,u)).next())});import{B as f}from"./TableImg.8168a049.js";import{j as E}from"./BasicForm.1e1ae441.js";import{u as w}from"./useTable.1efa4f78.js";import{o as D,t as h}from"./tree.f3b084b7.js";import{d as B}from"./table.58a92ef5.js";import{aw as b,a as g,v as R,ay as c,o as v,h as A,n as C,z as x,ah as I,E as k}from"./index.f3af519a.js";import"./index.150cfd83.js";import"./Checkbox.2381c478.js";import"./index.bfbbff1c.js";import"./index.5dae67a3.js";import"./eagerComputed.fa7aa305.js";import"./useForm.4747de5e.js";import"./index.26b292ac.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useSize.0170848e.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";import"./index.d9e4606d.js";import"./index.454ece64.js";import"./index.adb39650.js";import"./uuid.2b29000c.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./get.835de125.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./useFlexGapSupport.6f688b78.js";import"./index.79764867.js";import"./FullscreenOutlined.827fad55.js";import"./index.fc2503ca.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6782318c.js";import"./index.1bece7c7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f26e2396.js";import"./index.faeddac2.js";/* empty css              *//* empty css              */import"./index.cc85a3e5.js";import"./index.1fd47641.js";import"./index.b675152a.js";import"./download.07c8f7a9.js";import"./base64Conver.08b9f4ec.js";import"./index.d03f77ae.js";import"./index.a033ce23.js";import"./uniqBy.e095b0b8.js";const T=[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>r(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:D,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:h,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100}],_=g({components:{BasicTable:f,TableAction:E},setup(){const{createMessage:i}=k(),u=R(""),[o]=w({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:B,columns:T,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function a(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function s(t){return r(this,null,function*(){var m,d;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(m=t.onValid)==null?void 0:m.call(t))try{const F=I(t.editValueRefs);(yield(d=t.onEdit)==null?void 0:d.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(F){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:a.bind(null,t)}]}function n({column:t,value:e,record:m}){t.dataIndex==="id"&&(m.editValueRefs.name4.value=`${e}`)}return{registerTable:o,handleEdit:a,createActions:p,onEditChange:n}}}),y={class:"p-4"};function M(i,u,o,a,l,s){const p=c("TableAction"),n=c("BasicTable");return v(),A("div",y,[C(n,{onRegister:i.registerTable,onEditChange:i.onEditChange},{action:x(({record:t,column:e})=>[C(p,{actions:i.createActions(t,e)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"])])}var St=b(_,[["render",M]]);export{St as default};