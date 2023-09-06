"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9165],{38570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(70079);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(3262),r=(n(70079),n(38570));const i={sidebar_position:1,tags:["concepts","developer experience","design patterns"],title:"Quick Start"},s=void 0,o={unversionedId:"learn/get-started/quick-start/index",id:"learn/get-started/quick-start/index",title:"Quick Start",description:"Welcome to the Pando documentation! This page will give you an introduction, from a design and developer experience, to the majority of the Pando concepts that you will use on a daily basis.",source:"@site/docs/learn/get-started/quick-start/index.mdx",sourceDirName:"learn/get-started/quick-start",slug:"/learn/get-started/quick-start/",permalink:"/docs/learn/get-started/quick-start/",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/get-started/quick-start/index.mdx",tags:[{label:"concepts",permalink:"/docs/tags/concepts"},{label:"developer experience",permalink:"/docs/tags/developer-experience"},{label:"design patterns",permalink:"/docs/tags/design-patterns"}],version:"current",lastUpdatedBy:"Abhishek Deb",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["concepts","developer experience","design patterns"],title:"Quick Start"},sidebar:"learn",previous:{title:"Using the Figma UI Kit",permalink:"/docs/learn/get-started/installation/using-figma-kit"},next:{title:"Tutorial: StarRating Component",permalink:"/docs/learn/get-started/quick-start/tutorial-star-rating"}},l={},c=[{value:"Using Themes",id:"using-themes",level:2},{value:"Adding styles and Accessibility",id:"adding-styles-and-accessibility",level:2},{value:"Using Icons",id:"using-icons",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Pando documentation! This page will give you an introduction, from a design and developer experience, to the majority of the Pando concepts that you will use on a daily basis."),(0,r.kt)("admonition",{title:"You will learn",type:"note"},(0,r.kt)("ul",{className:"ul-list"},(0,r.kt)("li",{className:"ul-list-item"},"How to use themes"),(0,r.kt)("li",{className:"ul-list-item"},"How to add styling and Accessibility via Headless-styles"),(0,r.kt)("li",{className:"ul-list-item"},"Using Icons"),(0,r.kt)("li",{className:"ul-list-item"},"How to add advanced logic with React Utils"))),(0,r.kt)("h2",{id:"using-themes"},"Using Themes"),(0,r.kt)("p",null,"Pando ships with theme support using design-tokens that utilize a semantic naming convention. This means that our themes are created to scale and be easily used for both the design and developer experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only required property\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "action", "info", "success", "warning", "danger"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage (required)"),' - "background", "border", "navigation", "surface", "text"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", "inverse"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "visited"')),(0,r.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example of some of the tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of tokens (not actual values)"',title:'"Example',of:!0,tokens:!0,"(not":!0,actual:!0,'values)"':!0},":root {\n  --ps-border-weak: #000;\n  --ps-text: #000;\n  --ps-action-text: #fff;\n  --ps-action-background-hover: #fff1;\n}\n")),(0,r.kt)("h2",{id:"adding-styles-and-accessibility"},"Adding styles and Accessibility"),(0,r.kt)("p",null,"In Pando, our React library is responsible for styling components and making sure they are accessbile. We do this by using our Headless-styles library of Javascript helper functions that deliver the component props you need."),(0,r.kt)("p",null,"It looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ButtonExample() {\n  return <Button sentiment="action">Action</Button>\n}\n')),(0,r.kt)("p",null,"This approach allows Pando to increase the performance of your application by relying on the use of Semantic HTML and plain JSX."),(0,r.kt)("h2",{id:"using-icons"},"Using Icons"),(0,r.kt)("p",null,"Icons help enhance our pages and features. Our Icons library was created to provide icons for different solutions, including: React, Svelte, and SVG icons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function IconButtonExample() {\n  return <IconButton icon={PlaceholderIcon} />\n}\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you know the basics of using Pando, check out a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/get-started/quick-start/tutorial-star-rating"},"Tutorial")," to put them into practice."))}d.isMDXComponent=!0}}]);