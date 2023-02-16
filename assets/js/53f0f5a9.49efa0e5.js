"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91313],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(45721);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var o=n(81648),s=(n(45721),n(70167));const r={tags:["extending","themeing","MUI","chakra","styled-components"],title:"Components"},a=void 0,i={unversionedId:"development/headless-styles/customization/components",id:"version-0.4.1/development/headless-styles/customization/components",title:"Components",description:"Create a component library using the tools you already love.",source:"@site/versioned_docs/version-0.4.1/development/headless-styles/customization/components.mdx",sourceDirName:"development/headless-styles/customization",slug:"/development/headless-styles/customization/components",permalink:"/docs/development/headless-styles/customization/components",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/development/headless-styles/customization/components.mdx",tags:[{label:"extending",permalink:"/docs/tags/extending"},{label:"themeing",permalink:"/docs/tags/themeing"},{label:"MUI",permalink:"/docs/tags/mui"},{label:"chakra",permalink:"/docs/tags/chakra"},{label:"styled-components",permalink:"/docs/tags/styled-components"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["extending","themeing","MUI","chakra","styled-components"],title:"Components"},sidebar:"development",previous:{title:"Intro",permalink:"/docs/development/headless-styles/intro"},next:{title:"Admonition",permalink:"/docs/development/headless-styles/Admonition"}},l={},p=[{value:"Style Objects",id:"style-objects",level:2},{value:"CSS Properties",id:"css-properties",level:2},{value:"Custom Themes",id:"custom-themes",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Accessbility",id:"accessbility",level:3},{value:"Incompatibilities",id:"incompatibilities",level:3},{value:"Not a requirement",id:"not-a-requirement",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("strong",null,(0,s.kt)("p",{className:"page-subheadline",markdown:"1"},"Create a component library using the tools you already love.")),(0,s.kt)("p",null,"There's no reason to keep re-inventing the wheel. The reality is that there are hundreds of Component UI libraries that already exist and adding one more in the world isn't solving the right problem for design systems."),(0,s.kt)("p",null,"If you are a team that loves using component libraries but want to reap the benefits of the Pluralsight Design styling and accessbility, we provide mutliple ways to create or extend your favorite component library theme."),(0,s.kt)("h2",{id:"style-objects"},"Style Objects"),(0,s.kt)("p",null,"Out of the box, Headless Styles exports all of our CSS styles as Javascript Objects to make it as easy as possible to extend 3rd party component library's like ",(0,s.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/customization/theming/"},"MUI"),", ",(0,s.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Chakra"),", or whatever the next big library is (ask again next year \ud83d\ude1c)."),(0,s.kt)("p",null,"To use our style Objects, just import use the naming pattern ",(0,s.kt)("inlineCode",{parentName:"p"},"<component>Styles")," imported from the ",(0,s.kt)("inlineCode",{parentName:"p"},"/styles")," sub-path."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using style Objects to extend the Chakra theme" showLineNumbers {1,6,8}',title:'"Using',style:!0,Objects:!0,to:!0,extend:!0,the:!0,Chakra:!0,'theme"':!0,showLineNumbers:!0,"{1,6,8}":!0},"import { buttonStyles } from '@pluralsight/headless-styles/styles'\nimport { extendTheme } from '@chakra-ui/react'\n\nconst theme = {\n  button: {\n    baseStyles: buttonStyles.btnBase,\n    variants: {\n      text: buttonStyles.textButton,\n      ...\n    }\n  }\n}\n")),(0,s.kt)("p",null,"Most of the common UI libraries support this pattern, so you should be able to use this example whether you use MUI or X other UI component library."),(0,s.kt)("h2",{id:"css-properties"},"CSS Properties"),(0,s.kt)("p",null,"If you are using a library like ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")," or ",(0,s.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion")," to manage component composition, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"cssProps")," property shipped in our JS APIs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using cssProps to style a button with SC" showLineNumbers {1,5}',title:'"Using',cssProps:!0,to:!0,style:!0,a:!0,button:!0,with:!0,'SC"':!0,showLineNumbers:!0,"{1,5}":!0},"import { getJSButtonProps } from '@pluralsight/headless-styles'\nimport styled from 'styled-components'\n\nconst ActionButton = styled.button`\n  ${getJSButtonProps().button.cssProps}\n`\n")),(0,s.kt)("h2",{id:"custom-themes"},"Custom Themes"),(0,s.kt)("p",null,'Want to create a new theme or replace the default "dark" option we provide? Check out the ',(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/next/development/tokens/colors#custom-theming"},"Themeing Section")," in the Design Token docs."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Headless Styles relies on our ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/getting-started/installation#normalizecss"},"Normalize Setup"),' and uses the Design Token theme under the hood. This is why whether you use the JS API or our default CSS API, themeing automagically "just works".')),(0,s.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,s.kt)("p",null,'When combining Headless Styles with 3rd party Component UI libraries, you are choosing to "opt-out" of features built into the native API (think of it like a safe "ejecting" from the API).'),(0,s.kt)("h3",{id:"accessbility"},"Accessbility"),(0,s.kt)("p",null,"Opting out of our native API means you are choosing to bypass the guaranteed accessbility features Headless Styles provides in exchange of whichever UI library you choose to customize."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Most UI libraries ",(0,s.kt)("strong",{parentName:"p"},"are not as accessbile as our native library.")," We have an internal a11y team of people who are disabled to validate our a11y success. Most open-source libraries do not have this luxury.")),(0,s.kt)("h3",{id:"incompatibilities"},"Incompatibilities"),(0,s.kt)("p",null,"Another issue you might run across is a 3rd party library not being compatible with one of our components. This means each lib has their own unique components that by nature do not always translate to other libraries. Most of the time, this is on purpose to make the brand unique. Pluralsight is no different."),(0,s.kt)("p",null,"Some components you may have issues with are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Circular Progress"),(0,s.kt)("li",{parentName:"ul"},"Form Control elements")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you run into a component that does not translate to another library's API, we recommend you use our native API to build your own component.")),(0,s.kt)("h2",{id:"not-a-requirement"},"Not a requirement"),(0,s.kt)("p",null,"One of the biggest benefits to using Headless Styles native API is that you have full control over your components. This means, you ",(0,s.kt)("strong",{parentName:"p"},"do not need a 3rd party component library")," to use Headless Styles."),(0,s.kt)("p",null,"In fact, we encourage everyone to at least try out using the native API for a few months before adding in 3rd party UI library. You may be surprised at how easy and ",(0,s.kt)("strong",{parentName:"p"},"more flexible")," it is than using libraries like MUI, etc."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Most UI libraries outside of Headless Styles require at least 2-5 extra dependencies to manage ",(0,s.kt)("em",{parentName:"p"},"just to use it"),". Sticking with the native Headless Styles API will reduce this tech-debt that will be forced on your team over time."),(0,s.kt)("p",{parentName:"admonition"},"Less dependencies = faster user experience and less risk of security issues/bugs for your team. \ud83c\udf89")))}m.isMDXComponent=!0}}]);