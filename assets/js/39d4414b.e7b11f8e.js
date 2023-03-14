"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1840],{70167:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(45721);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),o=u(a),k=l,N=o["".concat(p,".").concat(k)]||o[k]||s[k]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},99085:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var n=a(81648),l=(a(45721),a(70167));const r={tags:["PSDS Classic"],title:"Migrating from Classic"},i=void 0,d={unversionedId:"learn/learn-pando/migration",id:"learn/learn-pando/migration",title:"Migrating from Classic",description:"Coming from our Classic system? Pando is completely different. This means Pando is not and will never be a 1:1 mirror to Classic.",source:"@site/docs/learn/learn-pando/migration.mdx",sourceDirName:"learn/learn-pando",slug:"/learn/learn-pando/migration",permalink:"/docs/next/learn/learn-pando/migration",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/migration.mdx",tags:[{label:"PSDS Classic",permalink:"/docs/next/tags/psds-classic"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["PSDS Classic"],title:"Migrating from Classic"},sidebar:"learn",previous:{title:"Page Loading",permalink:"/docs/next/learn/learn-pando/design-patterns/page-loading"},next:{title:"Using with Next 13",permalink:"/docs/next/learn/learn-pando/next13"}},p={},u=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Layout",id:"layout",level:3},{value:"Text",id:"text",level:3},{value:"Navigation",id:"navigation",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Content Display",id:"content-display",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Utilities",id:"utilities",level:3}],m={toc:u};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Coming from our Classic system? Pando is completely different. This means Pando ",(0,l.kt)("strong",{parentName:"p"},"is not and will never be a 1:1 mirror to Classic"),"."),(0,l.kt)("p",null,"Classic was never built for a multi-product company and did not scale well. Pando resolves both of those issues."),(0,l.kt)("admonition",{title:"Need a migration walk-through?",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you are looking for a walk-through approach of migrating to Pando from Classic, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/add-to-website"},"Add Pando to a Website")," page.")),(0,l.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,l.kt)("p",null,"Here is a list of some breaking changes in Pando from Classic:"),(0,l.kt)("h3",{id:"layout"},"Layout"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Grid API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Aside"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Grid API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equal Col."),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Grid API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Page Heading"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Page Width"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heading"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")))),(0,l.kt)("h3",{id:"navigation"},"Navigation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action Menu"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"Menu API, useMenuInteraction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Breadcrumb"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag API, TextLink API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Drawer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global Nav"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"Menu API, useMenuInteraction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Steps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tabs (H)"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"Tabs API, useTabs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tabs (V)"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"Tabs API, useTabs")))),(0,l.kt)("h3",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Button"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Button API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date Picker"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"Input API, useAutoFormatDate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Select API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Form Control, Label, Field Error & Message API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Semantic HTML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi Select"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Radio"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Search Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Input API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Switch"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Switch API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tags Input"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Textarea"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Textarea API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Input API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Typeahead"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Toggle"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Tabs API, useTabs")))),(0,l.kt)("h3",{id:"content-display"},"Content Display"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Avatar API, usePreloadedImage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Card"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Well"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Semantic HTML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Icons, Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Icon API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Note"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Row"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Grid API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Table API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag API")))),(0,l.kt)("h3",{id:"feedback"},"Feedback"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Badge"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Badge API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Banner"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Admonition API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dialog"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Confirm Dialog, Modal API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Empty State"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error Pages"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Circular Progress"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Circular Progress API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linear Progress"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Progress API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Star Rating"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"In Tutorials")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip API")))),(0,l.kt)("h3",{id:"utilities"},"Utilities"),(0,l.kt)("admonition",{title:"Pitfall",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Pando does not support motion or spacing tokens. There are enough studies that prove token usage of these properties depreciates performance when loading web experiences.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Classic API"),(0,l.kt)("th",{parentName:"tr",align:null},"Pando Equivalent"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Normalize"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into the CSS setup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Screen Reader Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Headless-styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Built into CSS setup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scrollable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme"),(0,l.kt)("td",{parentName:"tr",align:null},"HS, React-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS setup, useTheme")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Feature Flags"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus Manager"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nav Cookie Banner"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);