"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22746],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(81648),o=(n(45721),n(70167));const a={tags:["design","placeholder","structure","wireframe"],title:"Skeleton"},l=void 0,s={unversionedId:"design/components/skeleton",id:"version-0.4.1/design/components/skeleton",title:"Skeleton",description:"Description",source:"@site/versioned_docs/version-0.4.1/design/components/skeleton.md",sourceDirName:"design/components",slug:"/design/components/skeleton",permalink:"/docs/design/components/skeleton",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/design/components/skeleton.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"placeholder",permalink:"/docs/tags/placeholder"},{label:"structure",permalink:"/docs/tags/structure"},{label:"wireframe",permalink:"/docs/tags/wireframe"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["design","placeholder","structure","wireframe"],title:"Skeleton"},sidebar:"design",previous:{title:"Select",permalink:"/docs/design/components/select"},next:{title:"Switch",permalink:"/docs/design/components/switch"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Provides a low-fi representation of content as a loading state."),(0,o.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Circle"),(0,o.kt)("li",{parentName:"ol"},"Content")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use skeletons to represent content that has not yet loaded, to provide users with a feeling of faster rendering of the page."),(0,o.kt)("li",{parentName:"ul"},"Could be used for content descriptions, section introductions, images, and more."),(0,o.kt)("li",{parentName:"ul"},"Skeletons can also be used for some non-typographic content such as forms."),(0,o.kt)("li",{parentName:"ul"},"Match the number of lines (approximately) and content being replaced, to accurately represent the loading content."),(0,o.kt)("li",{parentName:"ul"},"Use Skeletons for dynamic content, not for static content that will not be loaded in."),(0,o.kt)("li",{parentName:"ul"},"Skeleton shapes should be resized and duplicated as needed to accurately represent the content they are replacing."),(0,o.kt)("li",{parentName:"ul"},"The color of the Skeleton elements can be replaced with a contextually appropriate value.")),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content:")," Use for blocks of content or lines of text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Circle:")," Use for imagery and larger blocks of content.")),(0,o.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do use Skeletons for dynamic text and content that will be replaced as the page loads."),(0,o.kt)("li",{parentName:"ul"},"Do not use Skeletons for static content, or use placeholder content for dynamic content."),(0,o.kt)("li",{parentName:"ul"},"Do not use Skeleton for in-progress operations, such as file transfers. Instead, use Progress.")))}p.isMDXComponent=!0}}]);