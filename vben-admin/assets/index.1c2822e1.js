var d=(o,l,r)=>new Promise((m,n)=>{var c=t=>{try{e(r.next(t))}catch(a){n(a)}},u=t=>{try{e(r.throw(t))}catch(a){n(a)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.9ae6f0bb.js";import{u as b}from"./useForm.f8375991.js";import A from"./PersonTable.d389e6fc.js";import{P as F}from"./index.ac70f211.js";import{aw as g,a as v,v as C,ay as s,o as D,j as h,z as i,n as p,B as q}from"./index.86eef68f.js";import{C as _}from"./index.6ad1560d.js";import"./index.c55ba9b6.js";/* empty css              */import"./index.a9e8697e.js";/* empty css              */import"./index.fdb21169.js";import"./index.2842a17a.js";import"./Checkbox.c7dd7014.js";import"./index.89defc1b.js";import"./index.599a76b5.js";import"./index.b74f8aee.js";import"./index.98ce3587.js";import"./index.ecfe3789.js";import"./get.882a7763.js";import"./index.d9f2152b.js";import"./eagerComputed.00133b77.js";import"./index.1b0ff10b.js";import"./_baseIteratee.75a0c84d.js";import"./DeleteOutlined.d82f0bc9.js";import"./index.ab0b1bde.js";import"./useRefs.898b9923.js";import"./Form.34286d6d.js";import"./Col.9a163832.js";import"./useFlexGapSupport.c94aa233.js";import"./useSize.2bb03c7d.js";import"./index.808aa408.js";import"./index.3dbe0c2e.js";import"./useWindowSizeFn.b25e3a15.js";import"./FullscreenOutlined.bb1dcf18.js";import"./index.61eaa517.js";import"./index.6baef58c.js";import"./uuid.2b29000c.js";import"./download.26f7ced6.js";import"./base64Conver.08b9f4ec.js";import"./index.d79a400b.js";import"./index.747e9e76.js";import"./uniqBy.7257ffe9.js";import"./TableImg.d18d1540.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a14d2294.js";import"./fromPairs.84aabb58.js";import"./scrollTo.9c18f052.js";import"./index.ad3c5ac8.js";import"./useTable.0c82769c.js";import"./index.129c4479.js";import"./index.73cf0445.js";import"./useContentViewHeight.e3fc9fcb.js";import"./ArrowLeftOutlined.dd705577.js";import"./index.becdb7d3.js";import"./transButton.9e204124.js";import"./index.51e4afdb.js";import"./PlusOutlined.665d11ea.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:n}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),n()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}}),S=q(" \u63D0\u4EA4 ");function R(o,l,r,m,n,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),a=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(a,{type:"primary",onClick:o.submitAll},{default:i(()=>[S]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Wo=g(T,[["render",R],["__scopeId","data-v-6b59bc47"]]);export{Wo as default};
