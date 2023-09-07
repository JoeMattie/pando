"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1703],{38570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(70079);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(3262),a=(n(70079),n(38570));const l={tags:[],title:"Z-Index"},i=void 0,o={unversionedId:"reference/general/zIndex",id:"reference/general/zIndex",title:"Z-Index",description:"Pando uses a named map of values to provide consistent and predictable layering of elements along the z-axis based on the element's purpose.",source:"@site/docs/reference/general/zIndex.mdx",sourceDirName:"reference/general",slug:"/reference/general/zIndex",permalink:"/docs/reference/general/zIndex",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/general/zIndex.mdx",tags:[],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:[],title:"Z-Index"},sidebar:"reference",previous:{title:"Typography",permalink:"/docs/reference/general/typography"},next:{title:"ActionMenu",permalink:"/docs/reference/components/action-menu"}},p={},d=[{value:"Map",id:"map",level:2},{value:"Helper Functions",id:"helper-functions",level:2},{value:"Import",id:"import",level:3},{value:"getZindexKeys",id:"getzindexkeys",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getZindex",id:"getzindex",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],u={toc:d},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pando uses a named map of values to provide consistent and predictable layering of elements along the z-axis based on the element's purpose."),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("p",null,"Pando reserves the 1000-1999 range, plus 50 for non-important style values (borders, etc.). This gives your product the freedom to use the 100-999 range."),(0,a.kt)("p",null,"In the headless-styles package, we use a structured layering map to organize our ",(0,a.kt)("inlineCode",{parentName:"p"},"z-index")," values. Here is the map we use for our API:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hide"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auto"),(0,a.kt)("td",{parentName:"tr",align:null},"'auto'"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decorator"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"psuedo elements, etc. for borders or other")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dropdown"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sticky"),(0,a.kt)("td",{parentName:"tr",align:null},"1100"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"banner"),(0,a.kt)("td",{parentName:"tr",align:null},"1200"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overlay"),(0,a.kt)("td",{parentName:"tr",align:null},"1300"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modal"),(0,a.kt)("td",{parentName:"tr",align:null},"1400"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"popover"),(0,a.kt)("td",{parentName:"tr",align:null},"1500"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toast"),(0,a.kt)("td",{parentName:"tr",align:null},"1600"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tooltip"),(0,a.kt)("td",{parentName:"tr",align:null},"1700"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"helper-functions"},"Helper Functions"),(0,a.kt)("p",null,"Pando also provides some helpers for referencing the keys and values of the z-index map."),(0,a.kt)("h3",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getZindexKeys, getZindex } from '@pluralsight/headless-styles'\n")),(0,a.kt)("h3",{id:"getzindexkeys"},"getZindexKeys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function getZindexKeys(): ReturnType\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not accept any parameters."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An object consisting of keys and values matching the ",(0,a.kt)("em",{parentName:"li"},"keys")," of the ",(0,a.kt)("a",{parentName:"li",href:"#map"},"z-index map"),".")),(0,a.kt)("h3",{id:"getzindex"},"getZindex"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function getZindex(key: ZindexKey): number | string\n")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type ZindexKey = keyof ReturnType<typeof getZindexKeys>\n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The z-index value corresponding to the given key from the z-index map.")))}m.isMDXComponent=!0}}]);