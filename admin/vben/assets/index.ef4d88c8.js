var $e=Object.defineProperty,Pe=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))me.call(t,a)&&ce(e,a,t[a]);if(se)for(var a of se(t))je.call(t,a)&&ce(e,a,t[a]);return e},ie=(e,t)=>Pe(e,Ue(t));var oe=(e,t,a)=>new Promise((y,_)=>{var b=k=>{try{p(a.next(k))}catch(C){_(C)}},r=k=>{try{p(a.throw(k))}catch(C){_(C)}},p=k=>k.done?y(k.value):Promise.resolve(k.value).then(b,r);p((a=a.apply(e,t)).next())});import{eJ as Re,eK as Ve,eL as He,eM as Ye,eN as Xe,eO as ze,ea as qe,eg as de,eP as Je,eQ as Ge,eR as We,eS as Ze,a as ve,v as Le,eT as Qe,c as et,f as I,a7 as P,o as M,h as m,i as c,aC as tt,k as $,j as G,z as j,B as ue,t as he,dI as nt,q as fe,n as A,eU as at,F as Z,aB as lt,cd as rt,aD as st,aE as ct,eV as it,b7 as ot,b6 as Q,bl as dt,cE as ut,bt as ht,eW as ft,bR as yt,ah as ee,eX as ye,w as pe,am as X,dm as pt,ao as gt,ax as W,eY as kt,eo as St,L as R,N as bt,eZ as xt,dF as Kt,cz as vt,b1 as Lt,x as ge,y as ke,bE as At,az as Ct,e7 as Se,e_ as _t,bq as be,cA as Et}from"./index.f3af519a.js";import{f as Tt}from"./fromPairs.84aabb58.js";import{b as wt}from"./index.5dae67a3.js";import{u as Bt}from"./useContextMenu.160816e9.js";import{g as Dt}from"./get.835de125.js";var Ft=200;function Nt(e,t,a,y){var _=-1,b=Ye,r=!0,p=e.length,k=[],C=t.length;if(!p)return k;a&&(t=Re(t,Ve(a))),y?(b=Xe,r=!1):t.length>=Ft&&(b=ze,r=!1,t=new He(t));e:for(;++_<p;){var S=e[_],o=a==null?S:a(S);if(S=y||S!==0?S:0,r&&o===o){for(var n=C;n--;)if(t[n]===o)continue e;k.push(S)}else b(t,o,y)||k.push(S)}return k}var Mt=qe(function(e,t){return de(e)?Nt(e,Je(t,1,de,!0)):[]}),It=Mt;function te(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,y)=>a+te(e,y),""):Object.keys(t).reduce((a,y)=>a+(t[y]?te(e,y):""),""):""}function Ot(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${te(t,a)}`)}function Ae(e){return[Ot(`${Ge}-${e}`)]}const xe=Symbol(),Ke=Symbol();function $t(e,t){if(!We(e)||!!e[Ke])return e;const{values:a,required:y,default:_,type:b,validator:r}=e,p=a||r?k=>{let C=!1,S=[];if(a&&(S=[...a,_],C||(C=S.includes(k))),r&&(C||(C=r(k))),!C&&S.length>0){const o=[...new Set(S)].map(n=>JSON.stringify(n)).join(", ");Ze(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${o}], got value ${JSON.stringify(k)}.`)}return C}:void 0;return{type:typeof b=="object"&&Object.getOwnPropertySymbols(b).includes(xe)?b[xe]:b,required:!!y,default:_,validator:p,[Ke]:!0}}const Pt=e=>Tt(Object.entries(e).map(([t,a])=>[t,$t(a,t)]));var T=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(T||{});const Ut=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],mt=Pt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1}}),jt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Rt=ve({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=e,y=Le(""),[_]=Ae("tree-header"),b=Qe(),{t:r}=et(),p=I(()=>{const n=b.headerTitle||a.title;return["mr-1","w-full",{["ml-5"]:n}]}),k=I(()=>{const{checkable:n}=a,s=[{label:r("component.tree.expandAll"),value:T.EXPAND_ALL},{label:r("component.tree.unExpandAll"),value:T.UN_EXPAND_ALL,divider:n}];return n?[{label:r("component.tree.selectAll"),value:T.SELECT_ALL},{label:r("component.tree.unSelectAll"),value:T.UN_SELECT_ALL,divider:n},...s,{label:r("component.tree.checkStrictly"),value:T.CHECK_STRICTLY},{label:r("component.tree.checkUnStrictly"),value:T.CHECK_UN_STRICTLY}]:s});function C(n){var i,d,h,u;const{key:s}=n;switch(s){case T.SELECT_ALL:(i=a.checkAll)==null||i.call(a,!0);break;case T.UN_SELECT_ALL:(d=a.checkAll)==null||d.call(a,!1);break;case T.EXPAND_ALL:(h=a.expandAll)==null||h.call(a,!0);break;case T.UN_EXPAND_ALL:(u=a.expandAll)==null||u.call(a,!1);break;case T.CHECK_STRICTLY:t("strictly-change",!1);break;case T.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function S(n){t("search",n)}const o=ht(S,200);return P(()=>y.value,n=>{o(n)}),P(()=>a.searchText,n=>{n!==y.value&&(y.value=n)}),(n,s)=>(M(),m("div",{class:fe([c(_)(),"flex px-2 py-1.5 items-center"])},[c(b).headerTitle?tt(n.$slots,"headerTitle",{key:0}):$("",!0),!c(b).headerTitle&&n.title?(M(),G(c(nt),{key:1,helpMessage:n.helpMessage},{default:j(()=>[ue(he(n.title),1)]),_:1},8,["helpMessage"])):$("",!0),n.search||n.toolbar?(M(),m("div",jt,[n.search?(M(),m("div",{key:0,class:fe(c(p))},[A(c(at),{placeholder:c(r)("common.searchText"),size:"small",allowClear:"",value:y.value,"onUpdate:value":s[0]||(s[0]=i=>y.value=i)},null,8,["placeholder","value"])],2)):$("",!0),n.toolbar?(M(),G(c(ut),{key:1,onClick:s[1]||(s[1]=dt(()=>{},["prevent"]))},{overlay:j(()=>[A(c(ot),{onClick:C},{default:j(()=>[(M(!0),m(Z,null,lt(c(k),i=>(M(),m(Z,{key:i.value},[A(c(rt),st(ct({key:i.value})),{default:j(()=>[ue(he(i.label),1)]),_:2},1040),i.divider?(M(),G(c(it),{key:0})):$("",!0)],64))),128))]),_:1})]),default:j(()=>[A(c(Q),{icon:"ion:ellipsis-vertical"})]),_:1})):$("",!0)])):$("",!0)],2))}}),Vt=({icon:e})=>e?ft(e)?yt(Q,{icon:e,class:"mr-1"}):Q:null;function Ht(e,t){function a(o){const n=[],s=o||c(e),{key:i,children:d}=c(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];n.push(u[i]);const g=u[d];g&&g.length&&n.push(...a(g))}return n}function y(o){const n=[],s=o||c(e),{key:i,children:d}=c(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];u.disabled!==!0&&u.selectable!==!1&&n.push(u[i]);const g=u[d];g&&g.length&&n.push(...y(g))}return n}function _(o,n){const s=[],i=n||c(e),{key:d,children:h}=c(t);if(!h||!d)return s;for(let u=0;u<i.length;u++){const g=i[u],E=g[h];o===g[d]?(s.push(g[d]),E&&E.length&&s.push(...a(E))):E&&E.length&&s.push(..._(o,E))}return s}function b(o,n,s){if(!o)return;const i=s||c(e),{key:d,children:h}=c(t);if(!(!h||!d))for(let u=0;u<i.length;u++){const g=i[u],E=g[h];if(g[d]===o){i[u]=O(O({},i[u]),n);break}else E&&E.length&&b(o,n,g[h])}}function r(o=1,n,s=1){if(!o)return[];const i=[],d=n||c(e)||[];for(let h=0;h<d.length;h++){const u=d[h],{key:g,children:E}=c(t),z=g?u[g]:"",U=E?u[E]:[];i.push(z),U&&U.length&&s<o&&(s+=1,i.push(...r(o,U,s)))}return i}function p({parentKey:o=null,node:n,push:s="push"}){const i=ee(c(e));if(!o){i[s](n),e.value=i;return}const{key:d,children:h}=c(t);!h||!d||(ye(i,u=>{if(u[d]===o)return u[h]=u[h]||[],u[h][s](n),!0}),e.value=i)}function k({parentKey:o=null,list:n,push:s="push"}){const i=ee(c(e));if(!(!n||n.length<1))if(o){const{key:d,children:h}=c(t);if(!h||!d)return;ye(i,u=>{if(u[d]===o){u[h]=u[h]||[];for(let g=0;g<n.length;g++)u[h][s](n[g]);return e.value=i,!0}})}else for(let d=0;d<n.length;d++)i[s](n[d])}function C(o,n){if(!o)return;const s=n||c(e),{key:i,children:d}=c(t);if(!(!d||!i))for(let h=0;h<s.length;h++){const u=s[h],g=u[d];if(u[i]===o){s.splice(h,1);break}else g&&g.length&&C(o,u[d])}}function S(o,n,s){return!o&&o!==0?null:((n||c(e)).forEach(d=>{if((s==null?void 0:s.key)||(s==null?void 0:s.key)===0)return s;if(d.key===o){s=d;return}d.children&&d.children.length&&(s=S(o,d.children,s))}),s||null)}return{deleteNodeByKey:C,insertNodeByKey:p,insertNodesByKey:k,filterByLevel:r,updateNodeByKey:b,getAllKeys:a,getChildrenKeys:_,getEnabledKeys:y,getSelectedNode:S}}function Yt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}var Zt=ve({name:"BasicTree",inheritAttrs:!1,props:mt,emits:Ut,setup(e,{attrs:t,slots:a,emit:y,expose:_}){const[b]=Ae("tree"),r=pe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=pe({startSearch:!1,searchText:"",searchData:[]}),k=Le([]),[C]=Bt(),S=I(()=>{const{fieldNames:l}=e;return O({children:"children",title:"title",key:"key"},l)}),o=I(()=>{let l=ie(O(O({blockNode:!0},t),e),{expandedKeys:r.expandedKeys,selectedKeys:r.selectedKeys,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,fieldNames:c(S),"onUpdate:expandedKeys":f=>{r.expandedKeys=f,y("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{r.selectedKeys=f,y("update:selectedKeys",f)},onCheck:(f,K)=>{let x=X(r.checkedKeys);if(pt(x)&&p.startSearch){const{key:L}=c(S);x=It(x,z(K.node.$attrs.node[L])),K.checked&&x.push(K.node.$attrs.node[L]),r.checkedKeys=x}else r.checkedKeys=f;const v=X(r.checkedKeys);y("update:value",v),y("check",v,K)},onRightClick:Ee});return gt(l,"treeData","class")}),n=I(()=>p.startSearch?p.searchData:c(k)),s=I(()=>!n.value||n.value.length===0),{deleteNodeByKey:i,insertNodeByKey:d,insertNodesByKey:h,filterByLevel:u,updateNodeByKey:g,getAllKeys:E,getChildrenKeys:z,getEnabledKeys:U,getSelectedNode:Ce}=Ht(k,S);function _e(l,f){return!f&&e.renderIcon&&W(e.renderIcon)?e.renderIcon(l):f}function Ee(K){return oe(this,arguments,function*({event:l,node:f}){var D;const{rightMenuList:x=[],beforeRightClick:v}=e;let L={event:l,items:[]};if(v&&W(v)){let w=yield v(f,l);Array.isArray(w)?L.items=w:Object.assign(L,w)}else L.items=x;!((D=L.items)!=null&&D.length)||(L.items=L.items.filter(w=>!w.hidden),C(L))})}function V(l){r.expandedKeys=l}function Te(){return r.expandedKeys}function ne(l){r.selectedKeys=l}function we(){return r.selectedKeys}function ae(l){r.checkedKeys=l}function Be(){return r.checkedKeys}function le(l){r.checkedKeys=l?U():[]}function q(l){r.expandedKeys=l?E():[]}function De(l){r.checkStrictly=l}P(()=>e.searchValue,l=>{l!==p.searchText&&(p.searchText=l)},{immediate:!0}),P(()=>e.treeData,l=>{l&&J(p.searchText)});function J(l){if(l!==p.searchText&&(p.searchText=l),y("update:searchValue",l),!l){p.startSearch=!1;return}const{filterFn:f,checkable:K,expandOnSearch:x,checkOnSearch:v,selectedOnSearch:L}=c(e);p.startSearch=!0;const{title:D,key:w}=c(S),F=[];if(p.searchData=kt(c(k),B=>{var H,Y;const N=f?f(l,B,c(S)):(Y=(H=B[D])==null?void 0:H.includes(l))!=null?Y:!1;return N&&F.push(B[w]),N},c(S)),x){const B=St(p.searchData).map(N=>N[w]);B&&B.length&&V(B)}v&&K&&F.length&&ae(F),L&&F.length&&ne(F)}function Fe(l,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!r.expandedKeys.includes(l))V([...r.expandedKeys,l]);else{const K=[...r.expandedKeys],x=K.findIndex(v=>v===l);x!==-1&&K.splice(x,1),V(K)}}R(()=>{k.value=e.treeData}),bt(()=>{const l=parseInt(e.defaultExpandLevel);l>0?r.expandedKeys=u(l):e.defaultExpandAll&&q(!0)}),R(()=>{r.expandedKeys=e.expandedKeys}),R(()=>{r.selectedKeys=e.selectedKeys}),R(()=>{r.checkedKeys=e.checkedKeys}),P(()=>e.value,()=>{r.checkedKeys=X(e.value||[])},{immediate:!0}),P(()=>r.checkedKeys,()=>{const l=X(r.checkedKeys);y("update:value",l),y("change",l)}),R(()=>{r.checkStrictly=e.checkStrictly});const Ne={setExpandedKeys:V,getExpandedKeys:Te,setSelectedKeys:ne,getSelectedKeys:we,setCheckedKeys:ae,getCheckedKeys:Be,insertNodeByKey:d,insertNodesByKey:h,deleteNodeByKey:i,updateNodeByKey:g,getSelectedNode:Ce,checkAll:le,expandAll:q,filterByLevel:l=>{r.expandedKeys=u(l)},setSearchValue:l=>{J(l)},getSearchValue:()=>p.searchText};function Me(l){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((K,x)=>{var L;let v=!0;return W(K.show)?v=(L=K.show)==null?void 0:L.call(K,l):be(K.show)&&(v=K.show),v?A("span",{key:x,class:b("action")},[K.render(l)]):null})}const Ie=I(()=>{const l=ee(n.value);return xt(l,(f,K)=>{var re;const x=p.searchText,{highlight:v}=c(e),{title:L,key:D,children:w}=c(S),F=_e(f,f.icon),B=Dt(f,L),N=x?B.indexOf(x):-1,H=p.startSearch&&!_t(x)&&v&&N!==-1,Y=`color: ${be(v)?"#f50":v}`,Oe=H?A("span",{class:(re=c(o))!=null&&re.blockNode?`${b("content")}`:""},[A("span",null,[B.substr(0,N)]),A("span",{style:Y},[x]),A("span",null,[B.substr(N+x.length)])]):B;return f[L]=A("span",{class:`${b("title")} pl-2`,onClick:Fe.bind(null,f[D],f[w])},[a!=null&&a.title?Et(a,"title",f):A(Z,null,[F&&A(Vt,{icon:F},null),Oe,A("span",{class:b("actions")},[Me(f)])])]),f}),l});return _(Ne),()=>{let l;const{title:f,helpMessage:K,toolbar:x,search:v,checkable:L}=e,D=f||x||v||a.headerTitle,w={height:"calc(100% - 38px)"};return A("div",{class:[b(),"h-full",t.class]},[D&&A(Rt,{checkable:L,checkAll:le,expandAll:q,title:f,search:v,toolbar:x,helpMessage:K,onStrictlyChange:De,onSearch:J,searchText:p.searchText},Yt(l=Kt(a))?l:{default:()=>[l]}),A(Lt,{spinning:c(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ge(A(At,{style:w},{default:()=>[A(wt,Ct(c(o),{showIcon:!1,treeData:Ie.value}),null)]}),[[ke,!c(s)]]),ge(A(Se,{image:Se.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ke,c(s)]])]})])}}});export{Zt as _};
