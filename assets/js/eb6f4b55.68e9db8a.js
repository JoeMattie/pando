"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29946],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(60953),r=n(59005),i=(n(45721),n(70167)),l=["components"],o={tags:["design","next","previous","more"],title:"Pagination"},u=void 0,s={unversionedId:"design/components/pagination",id:"design/components/pagination",title:"Pagination",description:"Description",source:"@site/docs/design/components/pagination.md",sourceDirName:"design/components",slug:"/design/components/pagination",permalink:"/docs/next/design/components/pagination",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/components/pagination.md",tags:[{label:"design",permalink:"/docs/next/tags/design"},{label:"next",permalink:"/docs/next/tags/next"},{label:"previous",permalink:"/docs/next/tags/previous"},{label:"more",permalink:"/docs/next/tags/more"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["design","next","previous","more"],title:"Pagination"},sidebar:"design",previous:{title:"Modal",permalink:"/docs/next/design/components/modal"},next:{title:"Popover",permalink:"/docs/next/design/components/popover"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Navigate through large amounts of content."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("p",null,"(Basic)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Button (Show more)")))),(0,i.kt)("p",null,"Two Button"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Button (Previous)"),(0,i.kt)("li",{parentName:"ul"},"Button (Next)")))),(0,i.kt)("p",null,"(Pagination bar)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Count"),(0,i.kt)("li",{parentName:"ul"},"Select"),(0,i.kt)("li",{parentName:"ul"},"Buttons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Previous"),(0,i.kt)("li",{parentName:"ul"},"Next")))))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used to show more results on the same page"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Two button"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used to move between pages of content."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bar"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used to show a number of rows of the table at a time."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A general use of Pagination is when the number of returned results is greater than 25 items.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pagination should be placed at the bottom of the page, directly below the last result in a list of content.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Pagination bar can be placed directly above and/or below tabular content.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Buttons"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Buttons advance or go back 1 page at a time."),(0,i.kt)("li",{parentName:"ul"},"The leading button will be disabled until a user navigates past the first page in the set."),(0,i.kt)("li",{parentName:"ul"},"Once at the last page in the set, the trailing button will be disabled.")))),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not show the Pagination control if only 1 page (less than 25 results) is returned."),(0,i.kt)("li",{parentName:"ul"},"Do not use pagination patterns when utilizing lazy loading as the user scrolls.")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pagination should navigate to the previous and next set of items in a content set."),(0,i.kt)("li",{parentName:"ul"},"When using the Pagination Bar type, match the range of pages displayed (1-25) to the amount selected in the Select control (25 items).")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not put a space within the number range of pages, according to our Grammar & Mechanics rules.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The button components utilized within these patterns automatically handle all accessibility requirements.")))}d.isMDXComponent=!0}}]);