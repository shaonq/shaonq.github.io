import{P as F}from"./index.26b292ac.js";import{aw as A,a as I,cB as y,v as p,s as B,ay as s,o as n,j as E,z as i,n as r,m as u,h as c,k as l,t as h}from"./index.f3af519a.js";import{C as w,a as D}from"./index.3beae2b1.js";import{u as k}from"./upload.7ced4e8d.js";import{h as P}from"./header.d801b988.js";import"./index.72f2e871.js";import"./index.cb40c89e.js";import"./useSize.0170848e.js";import"./eagerComputed.fa7aa305.js";import"./useWindowSizeFn.fab2207f.js";import"./useContentViewHeight.8c1cb1ae.js";import"./ArrowLeftOutlined.45c4071a.js";import"./index.d994c877.js";import"./transButton.fb0ac265.js";import"./index.1fd47641.js";import"./useFlexGapSupport.6f688b78.js";import"./index.06e56265.js";import"./_baseIteratee.8ff76035.js";import"./get.835de125.js";import"./DeleteOutlined.7aa295af.js";import"./index.01f05d07.js";import"./useRefs.4dfaecc3.js";import"./Form.1d9cfb3b.js";import"./Col.c62c60d8.js";import"./index.79764867.js";import"./FullscreenOutlined.827fad55.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:F,CropperImage:w,CollapseContainer:y,CropperAvatar:D},setup(){var t;const e=p(""),m=p(""),d=p(""),C=p(""),f=B(),g=p(((t=f.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:a,imgInfo:v}){e.value=v,m.value=a}function o({imgBase64:a,imgInfo:v}){d.value=v,C.value=a}return{img:P,info:e,circleInfo:d,cropperImg:m,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:k}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},j={class:"cropper-container mr-10"},z=["src"],b={key:0};function q(e,m,d,C,f,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),a=s("PageWrapper");return n(),E(a,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:i(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:i(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:i(()=>[u("div",N,[u("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+h(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:i(()=>[u("div",U,[u("div",j,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,z)):l("",!0)]),e.circleImg?(n(),c("p",b,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+h(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var de=A($,[["render",q],["__scopeId","data-v-9d983438"]]);export{de as default};
