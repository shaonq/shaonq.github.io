import{_ as L}from"./index.39de13af.js";/* empty css              *//* empty css              */import{d as E,e as c,aJ as D,A as C,aC as A,aF as o,aG as a,E as x,aL as F,aM as w,u as m,aD as M,D as H,bg as R,bt as J,bj as O,bk as z,bh as P,bi as N,b5 as W,bn as Z,bp as K,B as Q,b6 as U}from"./arco.634a02a4.js";/* empty css              *//* empty css              */import{q as X,u as Y,a as tt,b as at,c as et}from"./visualization.39adbd45.js";/* empty css              */import{u as B}from"./chart-option.e1e440ae.js";import{u as q}from"./loading.a603a303.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./chart.a55f755a.js";import"./vue.8bc1e739.js";const ot={class:"content-wrap"},nt={class:"content"},rt={class:"desc"},lt={class:"chart"},st=E({__name:"chain-item",props:{title:{type:String,default:""},quota:{type:String,default:""},chartType:{type:String,default:""},cardStyle:{type:Object,default:()=>({})}},setup(g){const l=g,s=()=>{const p=c([]),{chartOption:_}=B(()=>({grid:{left:0,right:0,top:10,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis"},series:{name:"total",data:p,type:"bar",barWidth:7,itemStyle:{borderRadius:2}}}));return{data:p,chartOption:_}},d=()=>{const p=c([[],[]]),{chartOption:_}=B(()=>({grid:{left:0,right:0,top:10,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis"},series:[{name:"2001",data:p.value[0],type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#165DFF",width:3}},{name:"2002",data:p.value[1],type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#6AA1FF",width:3,type:"dashed"}}]}));return{data:p,chartOption:_}},r=()=>{const p=c([]),{chartOption:_}=B(()=>({grid:{left:0,right:0,top:0,bottom:0},legend:{show:!0,top:"center",right:"0",orient:"vertical",icon:"circle",itemWidth:6,itemHeight:6,textStyle:{color:"#4E5969"}},tooltip:{show:!0},series:[{name:"\u603B\u8BA1",type:"pie",radius:["50%","70%"],label:{show:!1},data:p}]}));return{data:p,chartOption:_}},{loading:n,setLoading:u}=q(!0),{chartOption:f,data:h}=d(),{chartOption:S,data:e}=s(),{chartOption:t,data:i}=r(),b=c({count:0,growth:0,chartData:[]}),v=c({});return(async p=>{try{const{data:_}=await X(p);b.value=_;const{chartData:$}=_;l.chartType==="bar"?($.forEach((y,T)=>{e.value.push({value:y.y,itemStyle:{color:T%2?"#2CAB40":"#86DF6C"}})}),v.value=S.value):l.chartType==="line"?($.forEach(y=>{y.name==="2021"?h.value[0].push(y.y):h.value[1].push(y.y)}),v.value=f.value):($.forEach(y=>{i.value.push(y)}),v.value=t.value)}catch{}finally{u(!1)}})({quota:l.quota}),(p,_)=>{const $=R,y=J,T=D("icon-arrow-rise"),V=D("Chart"),j=O,G=z;return C(),A(G,{loading:m(n),style:{width:"100%"}},{default:o(()=>[a(j,{bordered:!1,style:H(g.cardStyle)},{default:o(()=>[x("div",ot,[x("div",nt,[a($,{title:g.title,value:b.value.count,"value-from":0,animation:"","show-group-separator":""},null,8,["title","value"]),x("div",rt,[a(y,{type:"secondary",class:"label"},{default:o(()=>[F(w(p.$t("dataAnalysis.card.yesterday")),1)]),_:1}),a(y,{type:"danger"},{default:o(()=>[F(w(b.value.growth)+" ",1),a(T)]),_:1})])]),x("div",lt,[m(n)?M("",!0):(C(),A(V,{key:0,option:v.value},null,8,["option"]))])])]),_:1},8,["style"])]),_:1},8,["loading"])}}});var k=L(st,[["__scopeId","data-v-35479a84"]]);const it=E({__name:"public-opinion",setup(g){const{isDark:l}=Y();return(s,d)=>{const r=P,n=N,u=O;return C(),A(u,{class:"general-card",title:s.$t("dataAnalysis.title.publicOpinion"),"header-style":{paddingBottom:"12px"}},{default:o(()=>[a(n,{cols:24,"col-gap":12,"row-gap":12},{default:o(()=>[a(r,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:o(()=>[a(k,{title:s.$t("dataAnalysis.card.title.allVisitors"),quota:"visitors","chart-type":"line","card-style":{background:m(l)?"linear-gradient(180deg, #284991 0%, #122B62 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"}},null,8,["title","card-style"])]),_:1}),a(r,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:o(()=>[a(k,{title:s.$t("dataAnalysis.card.title.contentPublished"),quota:"published","chart-type":"bar","card-style":{background:m(l)?" linear-gradient(180deg, #3D492E 0%, #263827 100%)":"linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)"}},null,8,["title","card-style"])]),_:1}),a(r,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:o(()=>[a(k,{title:s.$t("dataAnalysis.card.title.totalComment"),quota:"comment","chart-type":"line","card-style":{background:m(l)?"linear-gradient(180deg, #294B94 0%, #0F275C 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"}},null,8,["title","card-style"])]),_:1}),a(r,{span:{xs:12,sm:12,md:12,lg:12,xl:6,xxl:6}},{default:o(()=>[a(k,{title:s.$t("dataAnalysis.card.title.totalShare"),quota:"share","chart-type":"pie","card-style":{background:m(l)?"linear-gradient(180deg, #312565 0%, #201936 100%)":"linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)"}},null,8,["title","card-style"])]),_:1})]),_:1})]),_:1},8,["title"])}}});const ct=E({__name:"content-period-analysis",setup(g){const l=e=>e.map(t=>`<div class="content-panel">
        <p>
          <span style="background-color: ${t.color}" class="tooltip-item-icon"></span>
          <span>${t.seriesName}</span>
        </p>
        <span class="tooltip-value">
        ${t.value}%
        </span>
      </div>`).join(""),{loading:s,setLoading:d}=q(!0),r=c([]),n=c([]),u=c([]),f=c([]),{chartOption:h}=B(e=>({grid:{left:"40",right:0,top:"20",bottom:"100"},legend:{bottom:0,icon:"circle",textStyle:{color:"#4E5969"}},xAxis:{type:"category",data:r.value,boundaryGap:!1,axisLine:{lineStyle:{color:e?"#3f3f3f":"#A9AEB8"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{color:"#86909C"},interval(t){return!(t===0||t===r.value.length-1)}},axisLabel:{color:"#86909C",formatter(t,i){return i===0||i===r.value.length-1?"":`${t}`}}},yAxis:{type:"value",axisLabel:{color:"#86909C",formatter:"{value}%"},splitLine:{lineStyle:{color:e?"#3F3F3F":"#E5E6EB"}}},tooltip:{show:!0,trigger:"axis",formatter(t){const[i]=t;return`<div>
            <p class="tooltip-title">${i.axisValueLabel}</p>
            ${l(t)}
          </div>`},className:"echarts-tooltip-diy"},series:[{name:"\u7EAF\u6587\u672C",data:n.value,type:"line",smooth:!0,showSymbol:!1,color:e?"#3D72F6":"#246EFF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E0E3FF"}}},{name:"\u56FE\u6587\u7C7B",data:u.value,type:"line",smooth:!0,showSymbol:!1,color:e?"#A079DC":"#00B2FF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E2F2FF"}}},{name:"\u89C6\u9891\u7C7B",data:f.value,type:"line",smooth:!0,showSymbol:!1,color:e?"#6CAAF5":"#81E2FF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#D9F6FF"}}}],dataZoom:[{bottom:40,type:"slider",left:40,right:14,height:14,borderColor:"transparent",handleIcon:"image://http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/1ee5a8c6142b2bcf47d2a9f084096447.svg~tplv-49unhts6dw-image.image",handleSize:"20",handleStyle:{shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:4},brushSelect:!1,backgroundColor:e?"#313132":"#F2F3F5"},{type:"inside",start:0,end:100,zoomOnMouseWheel:!1}]}));return(async()=>{d(!0);try{const{data:e}=await tt();r.value=e.xAxis,e.data.forEach(t=>{t.name==="\u7EAF\u6587\u672C"?n.value=t.value:t.name==="\u56FE\u6587\u7C7B"&&(u.value=t.value),f.value=t.value})}catch{}finally{d(!1)}})(),(e,t)=>{const i=D("Chart"),b=O,v=z;return C(),A(v,{loading:m(s),style:{width:"100%"}},{default:o(()=>[a(b,{class:"general-card","header-style":{paddingBottom:"16px"}},{title:o(()=>[F(w(e.$t("dataAnalysis.contentPeriodAnalysis")),1)]),default:o(()=>[a(i,{style:{width:"100%",height:"370px"},option:m(h)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}});var dt=L(ct,[["__scopeId","data-v-94ed1fce"]]);const ut=E({__name:"content-publish-ratio",setup(g){const l=e=>e.map(t=>`<div class="content-panel">
    <p>
      <span style="background-color: ${t.color}" class="tooltip-item-icon"></span>
      <span>
      ${t.seriesName}
      </span>
    </p>
    <span class="tooltip-value">
      ${Number(t.value).toLocaleString()}
    </span>
  </div>`).join(""),{loading:s,setLoading:d}=q(!0),r=c([]),n=c([]),u=c([]),f=c([]),{chartOption:h}=B(e=>({grid:{left:"4%",right:0,top:"20",bottom:"60"},legend:{bottom:0,icon:"circle",textStyle:{color:"#4E5969"}},xAxis:{type:"category",data:r.value,axisLine:{lineStyle:{color:e?"#3f3f3f":"#A9AEB8"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{color:"#86909C"}},axisLabel:{color:"#86909C"}},yAxis:{type:"value",axisLabel:{color:"#86909C",formatter(t,i){return i===0?`${t}`:`${t/1e3}k`}},splitLine:{lineStyle:{color:e?"#3F3F3F":"#E5E6EB"}}},tooltip:{show:!0,trigger:"axis",formatter(t){const[i]=t;return`<div>
            <p class="tooltip-title">${i.axisValueLabel}</p>
            ${l(t)}
          </div>`},className:"echarts-tooltip-diy"},series:[{name:"\u7EAF\u6587\u672C",data:n.value,stack:"one",type:"bar",barWidth:16,color:e?"#4A7FF7":"#246EFF"},{name:"\u56FE\u6587\u7C7B",data:u.value,stack:"one",type:"bar",color:e?"#085FEF":"#00B2FF"},{name:"\u89C6\u9891\u7C7B",data:f.value,stack:"one",type:"bar",color:e?"#01349F":"#81E2FF",itemStyle:{borderRadius:2}}]}));return(async()=>{d(!0);try{const{data:e}=await at();r.value=e[0].x,e.forEach(t=>{t.name==="\u7EAF\u6587\u672C"?n.value=t.y:t.name==="\u56FE\u6587\u7C7B"&&(u.value=t.y),f.value=t.y})}catch{}finally{d(!1)}})(),(e,t)=>{const i=W,b=D("Chart"),v=O,I=z;return C(),A(I,{loading:m(s),style:{width:"100%"}},{default:o(()=>[a(v,{class:"general-card","header-style":{paddingBottom:"14px"}},{title:o(()=>[F(w(e.$t("dataAnalysis.contentPublishRatio")),1)]),extra:o(()=>[a(i,null,{default:o(()=>[F(w(e.$t("workplace.viewMore")),1)]),_:1})]),default:o(()=>[a(b,{style:{width:"100%",height:"347px"},option:m(h)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}});const pt=E({__name:"popular-author",setup(g){const{loading:l,setLoading:s}=q(),d=c({list:[]});return(async()=>{try{s(!0);const{data:n}=await et();d.value=n}catch{}finally{s(!1)}})(),(n,u)=>{const f=W,h=Z,S=K,e=O,t=z;return C(),A(t,{loading:m(l),style:{width:"100%"}},{default:o(()=>[a(e,{class:"general-card","header-style":{paddingBottom:"14px"}},{title:o(()=>[F(w(n.$t("dataAnalysis.popularAuthor")),1)]),extra:o(()=>[a(f,null,{default:o(()=>[F(w(n.$t("workplace.viewMore")),1)]),_:1})]),default:o(()=>[a(S,{data:d.value.list,pagination:!1,bordered:!1,style:{"margin-bottom":"20px"},scroll:{x:"100%",y:"350px"}},{columns:o(()=>[a(h,{title:n.$t("dataAnalysis.popularAuthor.column.ranking"),"data-index":"ranking"},null,8,["title"]),a(h,{title:n.$t("dataAnalysis.popularAuthor.column.author"),"data-index":"author"},null,8,["title"]),a(h,{title:n.$t("dataAnalysis.popularAuthor.column.content"),"data-index":"contentCount",sortable:{sortDirections:["ascend","descend"]}},null,8,["title"]),a(h,{title:n.$t("dataAnalysis.popularAuthor.column.click"),"data-index":"clickCount",sortable:{sortDirections:["ascend","descend"]}},null,8,["title"])]),_:1},8,["data"])]),_:1})]),_:1},8,["loading"])}}});var ht=L(pt,[["__scopeId","data-v-3708da3b"]]);const mt={class:"container"},_t={class:"space-unit"},yt={name:"DataAnalysis"},ft=E({...yt,setup(g){return(l,s)=>{const d=D("Breadcrumb"),r=P,n=N,u=U;return C(),Q("div",mt,[a(d,{items:["menu.visualization","menu.visualization.dataAnalysis"]},null,8,["items"]),a(u,{direction:"vertical",size:12,fill:""},{default:o(()=>[a(u,{direction:"vertical",size:16,fill:""},{default:o(()=>[x("div",_t,[a(it)]),x("div",null,[a(n,{cols:24,"col-gap":16,"row-gap":16},{default:o(()=>[a(r,{span:{xs:24,sm:24,md:24,lg:24,xl:16,xxl:16}},{default:o(()=>[a(ut)]),_:1}),a(r,{span:{xs:24,sm:24,md:24,lg:24,xl:8,xxl:8}},{default:o(()=>[a(ht)]),_:1})]),_:1})]),x("div",null,[a(dt)])]),_:1})]),_:1})])}}});var It=L(ft,[["__scopeId","data-v-5f6ace54"]]);export{It as default};
