import{ca as s}from"./index.f3af519a.js";function f(n){return n!=null&&n===n.window}function T(n,o){var r;if(typeof window=="undefined")return 0;var i=o?"scrollTop":"scrollLeft",e=0;return f(n)?e=n[o?"pageYOffset":"pageXOffset"]:n instanceof Document?e=n.documentElement[i]:n&&(e=n[i]),n&&!f(n)&&typeof e!="number"&&(e=(r=(n.ownerDocument||n).documentElement)===null||r===void 0?void 0:r[i]),e}function D(n,o,r,i){var e=r-o;return n/=i/2,n<1?e/2*n*n*n+o:e/2*((n-=2)*n*n+2)+o}function O(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=o.getContainer,i=r===void 0?function(){return window}:r,e=o.callback,l=o.duration,u=l===void 0?450:l,t=i(),m=T(t,!0),d=Date.now(),p=function v(){var w=Date.now(),a=w-d,c=D(a>u?u:a,m,n,u);f(t)?t.scrollTo(window.pageXOffset,c):t instanceof HTMLDocument||t.constructor.name==="HTMLDocument"?t.documentElement.scrollTop=c:t.scrollTop=c,a<u?s(v):typeof e=="function"&&e()};s(p)}export{T as g,O as s};
