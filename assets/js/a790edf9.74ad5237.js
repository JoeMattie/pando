"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88164],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9952:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),r=n(88795),o="tabItem_U_pG";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},8157:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(81648),r=n(45721),o=n(88795),s=n(79106),l=n(39977),i=n(5548),u=n(24734);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,p]=m({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??f;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var h=n(93046),g=n(99941),b="tabList_ZP7c",k="tabItem_qNjf";function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,h.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},81522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(81648),r=(n(45721),n(70167)),o=n(8157),s=n(9952);const l={sidebar_position:1,tags:["Development","Installation","Fonts","Normalize","Setup","Assets"],title:"Installation"},i=void 0,u={unversionedId:"development/getting-started/installation",id:"version-0.3.1-beta/development/getting-started/installation",title:"Installation",description:"Use Pluralsight's UI suite and get the best developer experience for your team.",source:"@site/versioned_docs/version-0.3.1-beta/development/getting-started/installation.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/installation",permalink:"/docs/development/getting-started/installation",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/development/getting-started/installation.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Installation",permalink:"/docs/tags/installation"},{label:"Fonts",permalink:"/docs/tags/fonts"},{label:"Normalize",permalink:"/docs/tags/normalize"},{label:"Setup",permalink:"/docs/tags/setup"},{label:"Assets",permalink:"/docs/tags/assets"}],version:"0.3.1-beta",lastUpdatedBy:"Casey Baggz",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Installation","Fonts","Normalize","Setup","Assets"],title:"Installation"},sidebar:"development",next:{title:"Usage",permalink:"/docs/development/getting-started/usage"}},p={},c=[{value:"Basic Use",id:"basic-use",level:2},{value:"Responsive meta tag",id:"responsive-meta-tag",level:2},{value:"PS TT Commons font",id:"ps-tt-commons-font",level:2},{value:"Normalize.css",id:"normalizecss",level:2},{value:"Using custom fonts",id:"using-custom-fonts",level:3},{value:"Module Support",id:"module-support",level:2},{value:"Typescript",id:"typescript",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("strong",null,(0,r.kt)("p",{className:"page-subheadline",markdown:"1"},"Use Pluralsight's UI suite and get the best developer experience for your team.")),(0,r.kt)("p",null,"Pluralsight Design is available as a set of multiple npm packages for web and our ",(0,r.kt)("inlineCode",{parentName:"p"},"design-tokens")," package is also compatable with iOS, Swift, Android, and Kotlin."),(0,r.kt)("p",null,"Each package has a different purpose in terms of flexibility. You will ",(0,r.kt)("em",{parentName:"p"},"rarely")," need all of them and probably only just one or two most."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maximum Flexibility:")," use ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/tokens/intro"},"Design Tokens"),", our foundational package that delivers our themes and is used internally in Headless-styles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Most Flexibility:")," use ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/headless-styles/intro"},"Headless Styles"),", our package which delivers component styles & accessibility helpers for ",(0,r.kt)("strong",{parentName:"li"},"any")," component or UI library combination."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum Flexibility:")," use the following packages that cater to a specific framework:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icons:")," our ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/icons/intro"},"Icons")," package delivers a broad range of icons for most common use cases (SVG, React, and Svelte)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React-utils:")," our ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/react-utils/use-focus-trap"},"React Utils")," package delivers custom hooks and helper functions specifically for the React library to help improve both the customer and devloper experience.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Design Tokens")," and ",(0,r.kt)("strong",{parentName:"p"},"Headless-styles")," require our Font and Normalize setup for the best experience (see below).")),(0,r.kt)("h2",{id:"basic-use"},"Basic Use"),(0,r.kt)("p",null,"For the entire kitchen sink up front, just install the Headless-styles and Icons packages."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,r.kt)("h2",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,r.kt)("p",null,"Pluralsight Design is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," element in your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n')),(0,r.kt)("h2",{id:"ps-tt-commons-font"},"PS TT Commons font"),(0,r.kt)("p",null,"Our packages were developed with PS TT Commons (Pluralsight brand font) in mind. For the best results, install via an HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," tag in your ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"\n/>\n')),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"fonts.css")," file declares both the ",(0,r.kt)("strong",{parentName:"p"},"brand and a code font"),". We are only preloading the brand font since it's the most common used font across all of our products and teams. This will help boost performance and prevent FOUC."),(0,r.kt)("p",null,"Additionally, each Headless-style helper uses a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide"},"variable font")," property to provide all weights programmatically. ",(0,r.kt)("strong",{parentName:"p"},"IE 11 does not support variable fonts"),", so any IE users will get the sans-serif fallback."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to add the font resources ",(0,r.kt)("strong",{parentName:"p"},"before")," ",(0,r.kt)("a",{parentName:"p",href:"#normalizecss"},"normalize.css")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," to prevent UI issues.")),(0,r.kt)("h2",{id:"normalizecss"},"Normalize.css"),(0,r.kt)("p",null,"Headless-styles and custom theming ",(0,r.kt)("strong",{parentName:"p"},"depend on our normalize.css")," file to be used in your project. This file adds our CSS resets, typography styles, design-tokens, and our themes."),(0,r.kt)("p",null,"To add the normalize file, simply copy and paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," content below into your ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," tag - ",(0,r.kt)("em",{parentName:"p"},"after")," the font sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"\n/>\n')),(0,r.kt)("h3",{id:"using-custom-fonts"},"Using custom fonts"),(0,r.kt)("p",null,"Not interested in using the PS TT Commons font? Simply leave out the ",(0,r.kt)("a",{parentName:"p",href:"#ps-tt-commons-font"},"font imports")," and instead use your own font declaration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of using a custom font"',title:'"Example',of:!0,using:!0,a:!0,custom:!0,'font"':!0},"html {\n  font-family: 'Some custom font', sans-serif;\n  font-feature-settings: 'tnum' on, 'lnum' on;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1.5;\n  text-size-adjust: 100%;\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All of our Headless Styles style functions use ",(0,r.kt)("inlineCode",{parentName:"p"},"font-family: inherit")," so it is important you do not leave out this step unless you prefer to use the default browser font family.")),(0,r.kt)("h2",{id:"module-support"},"Module Support"),(0,r.kt)("p",null,"All of our packages support both Tree-shaking via ES-Modules or CommonJS use cases. Additionally, we also provide both minified code for production environments and non-minified (with source-maps) for developer environments."),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"All of our packages are built using Typescript and include delcarations for enhanced IDE experiences."))}m.isMDXComponent=!0}}]);