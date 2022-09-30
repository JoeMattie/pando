"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},42242:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),r=n(88795),o="tabItem_kWFq";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},99862:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),r=n(45721),o=n(88795),s=n(76190),l=n(15043),i=n(8873),u=n(11113),p="tabList_LErV",c="tabItem_NVZ2";function d(e){var t,n,s=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,S=w.setTabGroupChoices,N=(0,r.useState)(b),C=N[0],T=N[1],j=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=x[f];null!=O&&O!==C&&y.some((function(e){return e.value===O}))&&T(O)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==C&&(I(t),T(a),null!=f&&S(f,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var o,s=j.indexOf(e.currentTarget)-1;n=null!=(o=j[s])?o:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},35053:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),r=n(28378),o=n(39549),s=n(24217),l=n(96122);function i(e){var t=e.href,n=(0,r.j)({href:t}),i=(0,o.L)(n.iconOptions),u=t.includes("github")?s.Z:l.Z;return a.createElement("a",n.link,a.createElement(u,i),e.children)}},48991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var a=n(60953),r=n(59005),o=(n(45721),n(70167)),s=n(99862),l=n(42242),i=n(35053),u=["components"],p={sidebar_position:1,tags:["Development","Packages","Components","Headless Styles"],title:"Intro"},c=void 0,d={unversionedId:"development/headless-styles/intro",id:"version-0.1.0-alpha/development/headless-styles/intro",title:"Intro",description:"Install Pluralsight's headless UI framework that works with any library or",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/intro.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/intro",permalink:"/docs/development/headless-styles/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/intro.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Components","Headless Styles"],title:"Intro"},sidebar:"development",previous:{title:"Colors",permalink:"/docs/development/tokens/colors"},next:{title:"Admonition",permalink:"/docs/development/headless-styles/Admonition"}},m={},h=[{value:"npm",id:"npm",level:2},{value:"Headless design",id:"headless-design",level:2},{value:"Examples",id:"examples",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"CSS &amp; CSS-in-JS",id:"css--css-in-js",level:2},{value:"Themeing",id:"themeing",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"CSS-in-JS",id:"css-in-js",level:3},{value:"Chakra UI",id:"chakra-ui",level:3},{value:"Recommendation",id:"recommendation",level:2},{value:"z-index values",id:"z-index-values",level:2}],f={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("strong",null,(0,o.kt)("p",{className:"page-subheadline",markdown:"1"},"Install Pluralsight's headless UI framework that works with any library or tech stack.")),(0,o.kt)(i.Z,{href:"https://www.npmjs.com/package/@pluralsight/headless-styles",mdxType:"ViewSourceLink"},"@pluralsight/headless-styles"),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"To use Headless Styles install the package with your preferred manager."),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some component examples use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/icons/intro"},"Icons")," package. Not all components require icons, so we do not include it in the above install recommendation.")),(0,o.kt)("h2",{id:"headless-design"},"Headless design"),(0,o.kt)("p",null,"The Headless Styles library is a component-less tool that allows you to obtain all the styles needed for components without dictating a tech-stack for your team to use. This means that you can theoretically use any combination of technology (i.e. React, Svelte, MUI, etc.) and the library should still work successfully for your team."),(0,o.kt)("p",null,"Having said that, it will always be impossible to cover every single use case so if your team comes across an instance where the styles are not matching the doc examples, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+"},"file a bug report")," so we can make sure that use case is covered."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"For each component, we provide mutliple examples using the most popular libraries. Out of the box, we provide examples for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"styled-components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mui.com/"},"MUI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://svelte.dev/"},"Svelte"))),(0,o.kt)("p",null,"If there is an additional library you would like to see provided in the examples, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/polls"},"start a poll")," and if it receives enough support, we will be happy to add it in. \ud83d\ude04"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Headless Styles relies upon the use of our ",(0,o.kt)("strong",{parentName:"p"},"fonts and normalize setup"),". Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/getting-started/installation"},"installation guide")," for more information.")),(0,o.kt)("h2",{id:"css--css-in-js"},"CSS & CSS-in-JS"),(0,o.kt)("p",null,"Each of our Headless Styles components will deliver APIs for both CSS and CSS-in-JS use cases. Both APIs also come with some requirements for your project that you should be aware of for the most success."),(0,o.kt)("h3",{id:"themeing"},"Themeing"),(0,o.kt)("p",null,"Internally, we use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro"},"Design Tokens")," to control all the colors presented. Our suite comes with ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/tokens/colors#themes"},"multiple themes")," that work natively for ",(0,o.kt)("strong",{parentName:"p"},"CSS environments")," and ",(0,o.kt)("strong",{parentName:"p"},"JS environments")," when combined with our ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/getting-started/installation#normalize-css"},"normalize setup")),(0,o.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,o.kt)("p",null,"For the CSS APIs, we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," which allow us to deliver the best experience regarding performance and scalability. Most tools come with CSS module support baked in (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),")."),(0,o.kt)("p",null,"If you are using a bundler with a custom config via ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," (or any other), you will need to make sure you add a ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/css-loader/#modules"},"loader")," which should be available for any tool you are using."),(0,o.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,o.kt)("p",null,'Our CSS-in-JS APIs source a generated style Object we create internally which delivers the "dark" theme by default. If you want to use a custom theme, please see our ',(0,o.kt)("a",{parentName:"p",href:"/docs/development/tokens/colors#js-custom-theming"},"theme customization")," in the Tokens docs."),(0,o.kt)("p",null,'The easiest solution is to just extend this library with whatever tool you prefer to use (i.e. React, styled-components, etc.) by following each components "extending" section example.'),(0,o.kt)("h3",{id:"chakra-ui"},"Chakra UI"),(0,o.kt)("p",null,"We prefer not to cater to frameworks (which is the reason we designed this package the way we have). However, Chakra does provide a way for us to deliver ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/theming/component-style"},"style objects")," to overwrite their UI while not having to add it as a dependency to ours. \ud83d\udca5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Because of this, all of our "components" will return Chakra style objects instead of using a prop-getter function.')),(0,o.kt)("p",null,"If you use Chakra, please be mindful of this and all the examples we provide (which should work in your favor)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="How to use with Chakra"',title:'"How',to:!0,use:!0,with:!0,'Chakra"':!0},"import { theme } from '@chakra-ui/react'\nimport { chakraPSTheme } from '@pluralsight/headless-styles'\n\nconst theme = extendTheme(chakraPSTheme)\n")),(0,o.kt)("p",null,"Once you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," you can use Chakra-UI components and the ones our Web UI Kit supports will automatically be styled for you!"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some components (like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Skeleton"},"Skeleton"),") will require some additional configuration setup to the theme config (see the Chakra example) due to the nature of Chakra being tightly coupled with Emotion.")),(0,o.kt)("h2",{id:"recommendation"},"Recommendation"),(0,o.kt)("p",null,"Our recommendation for the best user experience is to ",(0,o.kt)("strong",{parentName:"p"},"stay 3rd-party free")," and just stick with your Native library (i.e. React, Svelte, etc.) which will yield the best experience of our library."),(0,o.kt)("p",null,"Having said that, we know people are very passionate about UI libraries and believe they must be used in a project. Whatever your decision is, Headless-Styles aims to work with as many libraries as possible - there just may be a little extra work you will have to put in, whether updating ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," or customizing for CSS animations."),(0,o.kt)("p",null,"This is due to our decision to stay as light-weight as possible and not require any additional requirements for you to use our project (i.e. you will not have to install any other package to use any of our libraries)."),(0,o.kt)("h2",{id:"z-index-values"},"z-index values"),(0,o.kt)("p",null,"In the headless-styles package, we use a structured layering map to organize our ",(0,o.kt)("inlineCode",{parentName:"p"},"z-index")," values. Here is the map we use for our API."),(0,o.kt)("p",null,"For our map, we use the following strategy of reserving the 1k range values for our API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"50")," value for non-important style values (borders, etc.). This gives your product the freedom to use the 100-999 range which is more than enough for 99% of scenarios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CSS z-index values"',title:'"CSS',"z-index":!0,'values"':!0},"const zIndexMap = {\n  hide: -1,\n  auto: 'auto',\n  base: 0,\n  decorator: 50, // psuedo elements, etc. for borders or other\n  dropdown: 1000,\n  sticky: 1100,\n  banner: 1200,\n  overlay: 1300,\n  modal: 1400,\n  popover: 1500,\n  toast: 1600,\n  tooltip: 1700,\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend staying in the 100-999 range for your team's projects when using our suite. This will allow your code-base to scale better and reduce risks of UI bugs throughout the lifetime of the project.")))}v.isMDXComponent=!0},65976:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_THqx"}},70706:function(e,t){function n(e){return/^https?:\/\//.test(e)}function a(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const r=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...r},...n(e)&&{iconOptions:a(t)}}}},28378:function(e,t,n){t.j=void 0;const a=n(6495),r=n(91037),o=n(70706),s=a.__importDefault(n(65976));t.j=function(e){const t=(0,o.getDefaultTextLinkOptions)(e),n=(0,o.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,r.createClassProp)(t.tech,{defaultClass:`ps-text-link ${s.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);