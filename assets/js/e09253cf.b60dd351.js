"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10363],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77907:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),o=n(88795),r="tabItem_C7m6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},98568:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),o=n(45721),r=n(88795),l=n(63631),i=n(99595),s=n(2825),u=n(13554),p="tabList_C4Ea",c="tabItem_W41a";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,y=e.groupId,g=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,S=(0,o.useState)(k),x=S[0],B=S[1],j=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var T=N[y];null!=T&&T!==x&&v.some((function(e){return e.value===T}))&&B(T)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==x&&(P(t),B(a),null!=y&&C(y,String(a)))},D=function(e){var t,n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var a,o=j.indexOf(e.currentTarget)+1;n=null!=(a=j[o])?a:j[0];break;case"ArrowLeft":var r,l=j.indexOf(e.currentTarget)-1;n=null!=(r=j[l])?r:j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onClick:O},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},8078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(60953),o=n(59005),r=(n(45721),n(70167)),l=n(98568),i=n(77907),s=["components"],u={tags:["Development","Getting Started","Migration","PSDS Classic"],title:"Migration"},p=void 0,c={unversionedId:"development/getting-started/migration",id:"version-0.1.0-alpha/development/getting-started/migration",title:"Migration",description:"Learn how to migrate from PSDS Classic.",source:"@site/versioned_docs/version-0.1.0-alpha/development/getting-started/migration.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/migration",permalink:"/docs/0.1.0-alpha/development/getting-started/migration",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/getting-started/migration.md",tags:[{label:"Development",permalink:"/docs/0.1.0-alpha/tags/development"},{label:"Getting Started",permalink:"/docs/0.1.0-alpha/tags/getting-started"},{label:"Migration",permalink:"/docs/0.1.0-alpha/tags/migration"},{label:"PSDS Classic",permalink:"/docs/0.1.0-alpha/tags/psds-classic"}],version:"0.1.0-alpha",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["Development","Getting Started","Migration","PSDS Classic"],title:"Migration"},sidebar:"development",previous:{title:"Support",permalink:"/docs/0.1.0-alpha/development/getting-started/support"},next:{title:"Intro",permalink:"/docs/0.1.0-alpha/development/tokens/intro"}},d={},m=[{value:"Why should you migrate?",id:"why-should-you-migrate",level:2},{value:"Step by step",id:"step-by-step",level:2},{value:"Step 0 - Add the setup",id:"step-0---add-the-setup",level:3},{value:"Step 1 - Installation",id:"step-1---installation",level:3},{value:"Step 2 - Create",id:"step-2---create",level:3},{value:"Step 2 - CSS-in-JS example",id:"step-2---css-in-js-example",level:3},{value:"Step 3 - Replace",id:"step-3---replace",level:3},{value:"Migrate slowly",id:"migrate-slowly",level:2},{value:"You do you",id:"you-do-you",level:2}],h={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("strong",null,(0,r.kt)("p",{className:"page-subheadline",markdown:"1"},"Learn how to migrate from ",(0,r.kt)("a",{href:"https://github.com/pluralsight/design-system",target:"_blank",rel:"noopener noreferrer"},"PSDS Classic"),".")),(0,r.kt)("p",null,"Any major release or new framework has its breaking changes and PD isn't an exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed below the recommended migrations steps, along with solutions for the most common problems you might face."),(0,r.kt)("h2",{id:"why-should-you-migrate"},"Why should you migrate?"),(0,r.kt)("p",null,"In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in it. ",(0,r.kt)("strong",{parentName:"p"},"Even if you don't plan to use the entire PD suite")," your projects will still get benefits from the upgrade."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences"),(0,r.kt)("li",{parentName:"ul"},"A renewed focus on performances and good practices (we plan on having a public dashboard soon)"),(0,r.kt)("li",{parentName:"ul"},"Improved user experience for various projects (scalable and framework agnostic)"),(0,r.kt)("li",{parentName:"ul"},"New capabilities (can work with any tech stack so you can pivot easier)")),(0,r.kt)("p",null,"And of course a very active development cycle."),(0,r.kt)("h2",{id:"step-by-step"},"Step by step"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate ",(0,r.kt)("strong",{parentName:"p"},"without introducing breaking changes"),".")),(0,r.kt)("p",null,"The biggest benefit of PD is that it ",(0,r.kt)("em",{parentName:"p"},"only owns styles and accessbility")," and ",(0,r.kt)("em",{parentName:"p"},"is not a component library")," which means you can scale or customize to whatever your situation may require."),(0,r.kt)("p",null,"Below we'll look at migrating the Button component which will be the same pattern you can use for all the PD use cases."),(0,r.kt)("h3",{id:"step-0---add-the-setup"},"Step 0 - Add the setup"),(0,r.kt)("p",null,"To make sure you get the intended visual result of Headless-styles, add (or replace) our font and normalize setup in your project HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"head"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Add required CSS Reset setup"',title:'"Add',required:!0,CSS:!0,Reset:!0,'setup"':!0},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://unpkg.com/@pluralsight/design-tokens/fonts.css"\n/>\n<link\n  rel="stylesheet"\n  href="https://unpkg.com/@pluralsight/design-tokens/build/normalize/normalize.css"\n/>\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We have changed our styling rules since Classic, so there may be some visual breaking changes you will need to update outside of this example (i.e. typography, etc.).")),(0,r.kt)("h3",{id:"step-1---installation"},"Step 1 - Installation"),(0,r.kt)("p",null,"In order to use PD, we need to get it into your project first. For most projects, you will only need to install the headless-styles and icons packages."),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,r.kt)("p",null,"All of our packages are lightweight because they don't rely on a laundry list of dependencies or required dependencies to install, so you don't have to worry about adding additional overhead to your bundle size."),(0,r.kt)("h3",{id:"step-2---create"},"Step 2 - Create"),(0,r.kt)("p",null,"Since Headless-styles is not a component library, you will create a new Button component in your project. This will allow you to have full control of your implementation while PD provides the styles and accessibility needs."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is considered a React/Component library best practice to create Button components with a ",(0,r.kt)("strong",{parentName:"p"},"specific purpose"),'. An example would be to create an "EditButton" or "PrimaryButton". This helps you to give it a single responsiblity and reduce the props. ',(0,r.kt)("strong",{parentName:"p"},"This design by nature will have less risk of bugs and code impact."))),(0,r.kt)("p",null,"In this example, we are creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelButton")," for your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/Buttons/CancelButton.tsx"',title:'"components/Buttons/CancelButton.tsx"'},"import { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\n\n// \ud83d\udca1 Keeping logic out of your components improves performance\nconst cancelBtnProps = getButtonProps({\n  sentiment: 'danger',\n})\n\nexport default function CancelButton(props: ButtonOptions) {\n  return (\n    <button {...props} {...cancelBtnProps.button}>\n      Cancel\n    </button>\n  )\n}\n")),(0,r.kt)("p",null,"Now, you can migrate all the Buttons that are used as cancel actions to use the newly created one. What's even better is now you have full control over the Button! \ud83c\udf89"),(0,r.kt)("p",null,"This approach allows you to have an easier and low risk migration path without forcing a tech-debt lump that must ship everything at once."),(0,r.kt)("h3",{id:"step-2---css-in-js-example"},"Step 2 - CSS-in-JS example"),(0,r.kt)("p",null,"If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled-components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/CancelButton.tsx"',title:'"components/CancelButton.tsx"'},"import styled from 'styled-components'\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\n\nconst CancelButton = styled.button`\n  ${(props: ButtonOptions) =>\n    getJSButtonProps({\n      sentiment: 'danger',\n      size: props.size ?? 'l',\n    }).button.cssProps},\n`\n\nexport default CancelButton\n")),(0,r.kt)("h3",{id:"step-3---replace"},"Step 3 - Replace"),(0,r.kt)("p",null,"Now that you have created your new component, depending on your migration strategy, you can search all for ",(0,r.kt)("inlineCode",{parentName:"p"},"appearance={Button.appearances.secondary}")," and update the code with your new ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelButton"),"."),(0,r.kt)("p",null,"If you follow the examples in this guide, your ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelButton")," will automatically accept all HTML Button properties which means that you will have a new Button API that is more flexible and easier to read/maintain for all developers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Old Button"',title:'"Old','Button"':!0},"import Button from '@pluralsight/ps-design-system-button'\n\n...\n\n<Button\n  appearance={Button.appearances.secondary}\n  onClick={handleCancel}\n>\n  Cancel\n</Button>\n")),(0,r.kt)("p",null,"Now becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New Button"',title:'"New','Button"':!0},"import CancelButton from 'components/CancelButton'\n\n...\n\n<CancelButton onClick={handleCancel} type=\"button\" />\n")),(0,r.kt)("h2",{id:"migrate-slowly"},"Migrate slowly"),(0,r.kt)("p",null,"At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration. Taking that route not only sucks the life from your team but also risks introducing bugs through natural human error of being overwhelmed by large PR's or rubber stamping."),(0,r.kt)("h2",{id:"you-do-you"},"You do you"),(0,r.kt)("p",null,"Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our packages but only ",(0,r.kt)("strong",{parentName:"p"},"your team")," knows what is best for your project."),(0,r.kt)("p",null,"When your team is preparing for your migration, use our examples as that - examples - and build your components for what makes the most sense in your project (for maintainability and scalability)."),(0,r.kt)("p",null,"We will always have you covered for styles and accessbility, but your team will be the ones maintaining your project which means you know the best path for creation."))}y.isMDXComponent=!0}}]);