import{v as r,N as i,bZ as f}from"./index.f3af519a.js";function p(a){const s=r(!1),o=r(!1),t=r(!1);let e;const n=new Promise((u,c)=>{i(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){s.value=!1,t.value=!0,o.value=!1,u("")},e.onerror=function(l){s.value=!1,t.value=!1,o.value=!0,c(l)},e.src=a.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:s,error:o,success:t,toPromise:()=>n}}export{p as u};