import{_ as d}from"./index.b388db61.js";import{r as c,e as h,z as i,f as o,t as p,o as m}from"./vendor.c8610fdc.js";const a=JSON.stringify({ops:[{insert:"\u4F73\u4EBA"},{attributes:{header:1},insert:`
`},{attributes:{color:"#999999"},insert:"\xA0"},{attributes:{newLink:"#",color:"#999999"},insert:"\u3010\u4F5C\u8005\u3011"},{attributes:{newLink:"#",color:"#2673db"},insert:"\u675C\u752B\xA0"},{attributes:{color:"#999999"},insert:"\u3010\u671D\u4EE3\u3011"},{insert:`\u5510
\u7EDD\u4EE3\u6709\u4F73\u4EBA\uFF0C\u5E7D\u5C45\u5728\u7A7A\u8C37\u3002
\u81EA\u4E91\u826F\u5BB6\u5B50\uFF0C\u96F6\u843D\u4F9D\u8349\u6728\u3002
\u5173\u4E2D\u6614\u4E27\u4E71\uFF0C\u5144\u5F1F\u906D\u6740\u622E\u3002
\u5B98\u9AD8\u4F55\u8DB3\u8BBA\uFF0C\u4E0D\u5F97\u6536\u9AA8\u8089\u3002
\u4E16\u60C5\u6076\u8870\u6B47\uFF0C\u4E07\u4E8B\u968F\u8F6C\u70DB\u3002
\u592B\u5A7F\u8F7B\u8584\u513F\uFF0C\u65B0\u4EBA\u7F8E\u5982\u7389\u3002
\u5408\u660F\u5C1A\u77E5\u65F6\uFF0C\u9E33\u9E2F\u4E0D\u72EC\u5BBF\u3002
`},{attributes:{color:"#cc0000"},insert:"\u4F46\u89C1\u65B0\u4EBA\u7B11\uFF0C\u90A3\u95FB\u65E7\u4EBA\u54ED"},{insert:`\u3002
\u5728\u5C71\u6CC9\u6C34\u6E05\uFF0C\u51FA\u5C71\u6CC9\u6C34\u6D4A\u3002
\u4F8D\u5A62\u5356\u73E0\u56DE\uFF0C\u7275\u841D\u8865\u8305\u5C4B\u3002
\u6458\u82B1\u4E0D\u63D2\u53D1\uFF0C\u91C7\u67CF\u52A8\u76C8\u63AC\u3002
\u5929\u5BD2\u7FE0\u8896\u8584\uFF0C\u65E5\u66AE\u501A\u4FEE\u7AF9\u3002
`}]}),_={data(){return{defaultJsonString:a,html:a,handlers:{link:l=>{const e=this.$util;e.alert({extend:!0,title:"\u6DFB\u52A0\u94FE\u63A5",content:'<input class="u-input" placeholder="http(s)://"/>',success:(s,n)=>{e.dom.el("input",n).focus()},ok:{label:"\u786E\u8BA4",onclick:(s,n)=>{let t=e.dom.el("input",n.parentNode.parentNode).value;e.regexp.url.test(t)?(l(t),e.hideToast(s)):e.toast("\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u5730\u5740")}}})},image:l=>{const e=this.$util;e.alert({extend:!0,title:"\u6DFB\u52A0\u56FE\u7247",content:'<input class="u-input" placeholder="http(s)://"/>',success:(s,n)=>{e.dom.el("input",n).focus()},ok:{label:"\u786E\u8BA4",onclick:(s,n)=>{let t=e.dom.el("input",n.parentNode.parentNode).value;e.regexp.image.test(t)?(l(t),e.hideToast(s)):e.toast("\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u56FE\u7247\u5730\u5740")}}})}}}},methods:{onChange(l){this.html=l}}},f=o("div",{class:"u-quill-body"},[o("h1",null,"\u5BCC\u6587\u672C"),o("p",null,"\u8F7B\u91CF\u7EA7\u57FA\u7840\u5BCC\u6587\u672C\u7F16\u8F91\u5668")],-1),b={class:"u-quill-body"},g=o("h1",null,"\u6570\u636E",-1);function x(l,e,s,n,t,u){const r=c("u-quill");return m(),h("div",null,[f,i(r,{handlers:t.handlers,style:{"min-height":"282px","border-right-width":"0","border-left-width":"0"},type:"json",html:t.defaultJsonString,onChange:u.onChange},null,8,["handlers","html","onChange"]),i(r,{handlers:t.handlers,html:t.html,style:{border:"0"},type:"json",readonly:"readonly"},null,8,["handlers","html"]),o("div",b,[g,o("pre",null,p(t.html),1)])])}var k=d(_,[["render",x]]);export{k as default};
