"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9622],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(60953),r=n(59005),i=(n(45721),n(70167)),l=["components"],o={tags:["design","link","label","category"],title:"Tag"},s=void 0,c={unversionedId:"design/components/tag",id:"design/components/tag",title:"Tag",description:"Description",source:"@site/docs/design/components/tag.md",sourceDirName:"design/components",slug:"/design/components/tag",permalink:"/docs/next/design/components/tag",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/components/tag.md",tags:[{label:"design",permalink:"/docs/next/tags/design"},{label:"link",permalink:"/docs/next/tags/link"},{label:"label",permalink:"/docs/next/tags/label"},{label:"category",permalink:"/docs/next/tags/category"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["design","link","label","category"],title:"Tag"},sidebar:"design",previous:{title:"Tabs",permalink:"/docs/next/design/components/tabs"},next:{title:"Tooltip",permalink:"/docs/next/design/components/tooltip"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Dos and don\u2019ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Behavior",id:"behavior",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A label for definition, categorization, and navigation."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Icon (optional)"),(0,i.kt)("li",{parentName:"ul"},"Label")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tags are meant for supplementary and categorical reference."),(0,i.kt)("li",{parentName:"ul"},"Lists of Tags should be presented directly below the content they represent, as the last element in that content group."),(0,i.kt)("li",{parentName:"ul"},"Display tags as horizontal lists, wrapping to new lines if needed.")),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The default tag acts as a hyperlink to another page containing a list of all similarly tagged content."))),(0,i.kt)("li",{parentName:"ul"},"No-link",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No-link tags can be used when only categorizing a piece of content and linking behavior is either not applicable or not intended.")))),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M (default)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the default size in most cases."))),(0,i.kt)("li",{parentName:"ul"},"S",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use small whenever space is at a premium, e.g. inside of a small card or in a sidebar.")))),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don\u2019ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use only icons or emoji within Tags.")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tags, while providing value, do add more visual noise. Use them in moderation, trying to keep to no more than 3 rows of tags in any configuration."),(0,i.kt)("li",{parentName:"ul"},"Tags can be thought of as alternate search words. What other terms or categories does this particular piece of content fall into or reference?")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tags should use sentence casing."),(0,i.kt)("li",{parentName:"ul"},"Tag labels will not wrap, so longer tags will move to a new line if needed."),(0,i.kt)("li",{parentName:"ul"},"Keep tag labels under 30 characters.")),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tags adopt the same text styles, states, and behaviors as Text Links.")))}m.isMDXComponent=!0}}]);