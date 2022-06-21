import{aw as $,a as v,cB as W,ay as c,o as S,j as T,z as o,n,B as r,E as I}from"./index.f3af519a.js";import{P as b}from"./index.26b292ac.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useSize.0170848e.js";import"./eagerComputed.fa7aa305.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";const y=v({components:{CollapseContainer:W,PageWrapper:b},setup(){const{createMessage:s,createConfirm:e,createSuccessModal:d,createInfoModal:u,createErrorModal:m,createWarningModal:f,notification:t}=I(),{info:l,success:i,warning:a,error:g}=s;function p(){s.loading("Loading...")}function C(E){e({iconType:E,title:"Tip",content:"content message..."})}function _(){d({title:"Tip",content:"content message..."})}function h(){m({title:"Tip",content:"content message..."})}function M(){f({title:"Tip",content:"content message..."})}function k(){u({title:"Tip",content:"content message..."})}function w(){t.success({message:"Tip",description:"content message..."})}return{infoMsg:l,successMsg:i,warningMsg:a,errorMsg:g,handleLoading:p,handleConfirm:C,handleSuccessModal:_,handleErrorModal:h,handleWarningModal:M,handleInfoModal:k,handleNotify:w}}}),B=r(" Info "),N=r(" Success "),L=r(" Warning "),P=r(" Error "),F=r(" Loading "),A=r(" Info "),D=r(" Warning "),V=r(" Success "),j=r(" Error "),z=r(" Info "),q=r(" Success "),G=r(" Error "),H=r(" Warning "),J=r(" Success ");function K(s,e,d,u,m,f){const t=c("a-button"),l=c("CollapseContainer"),i=c("PageWrapper");return S(),T(i,{title:"\u6D88\u606F\u793A\u4F8B"},{default:o(()=>[n(l,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:o(()=>[n(t,{onClick:e[0]||(e[0]=a=>s.infoMsg("Info message")),class:"mr-2"},{default:o(()=>[B]),_:1}),n(t,{onClick:e[1]||(e[1]=a=>s.successMsg("Success message")),class:"mr-2",color:"success"},{default:o(()=>[N]),_:1}),n(t,{onClick:e[2]||(e[2]=a=>s.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:o(()=>[L]),_:1}),n(t,{onClick:e[3]||(e[3]=a=>s.errorMsg("Error message")),class:"mr-2",color:"error"},{default:o(()=>[P]),_:1}),n(t,{onClick:s.handleLoading,class:"mr-2",type:"primary"},{default:o(()=>[F]),_:1},8,["onClick"])]),_:1}),n(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:o(()=>[n(t,{onClick:e[4]||(e[4]=a=>s.handleConfirm("info")),class:"mr-2"},{default:o(()=>[A]),_:1}),n(t,{onClick:e[5]||(e[5]=a=>s.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:o(()=>[D]),_:1}),n(t,{onClick:e[6]||(e[6]=a=>s.handleConfirm("success")),color:"success",class:"mr-2"},{default:o(()=>[V]),_:1}),n(t,{onClick:e[7]||(e[7]=a=>s.handleConfirm("error")),color:"error",class:"mr-2"},{default:o(()=>[j]),_:1})]),_:1}),n(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:o(()=>[n(t,{onClick:s.handleInfoModal,class:"mr-2"},{default:o(()=>[z]),_:1},8,["onClick"]),n(t,{onClick:s.handleSuccessModal,color:"success",class:"mr-2"},{default:o(()=>[q]),_:1},8,["onClick"]),n(t,{onClick:s.handleErrorModal,color:"error",class:"mr-2"},{default:o(()=>[G]),_:1},8,["onClick"]),n(t,{onClick:s.handleWarningModal,color:"warning",class:"mr-2"},{default:o(()=>[H]),_:1},8,["onClick"])]),_:1}),n(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification \u7528\u6CD5\u4E0E\u4E0A\u9762\u4E00\u81F4"},{default:o(()=>[n(t,{onClick:s.handleNotify,color:"success",class:"mr-2"},{default:o(()=>[J]),_:1},8,["onClick"])]),_:1})]),_:1})}var so=$(y,[["render",K]]);export{so as default};