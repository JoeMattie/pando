"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[333],{73277:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(70079);const o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){void 0===e&&(e=s);const t=e.type??s.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",i={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:o[t],style:i},e.children)}},58852:(e,t,n)=>{n.d(t,{dS:()=>l,fK:()=>r,C9:()=>u,ZP:()=>c});var a=n(70079),o=n(88660);const s={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function i(e){return a.createElement("li",{className:s.linkItem},a.createElement(o.Z,e,e.children))}function r(e){return a.createElement(i,{href:e.href},e.children??"View on Github")}function l(e){return a.createElement(i,{href:e.href},"View on Figma")}function u(e){return a.createElement("ul",{className:s.linkList},e.children)}function c(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:s.linkList},n&&a.createElement(r,{href:n}),t&&a.createElement(l,{href:t}))}},92587:(e,t,n)=>{n(70079)},88660:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(70079),o=n(40653),s=n(36720),i=n(20394),r=n(32042);function l(e){const{href:t}=e,n=(0,s.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?i.Z:r.Z;return a.createElement(o.TextLink,e,a.createElement(l,n),e.children)}},31324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>f});var a=n(3262),o=n(70079),s=n(38570),i=n(58852),r=n(40653),l=n(73277);function u(){const e=(0,r.useToast)();return o.createElement(r.Button,{onClick:function(){e.show({text:"Channel has been bookmarked."})}},"Show Toast")}function c(){return o.createElement(l.Z,null,o.createElement(r.ToastProvider,null,o.createElement(u,null)))}function p(){const e=(0,r.useToast)(),t=(0,r.useToast)(),n=(0,r.useToast)(),a=(0,r.useToast)();return o.createElement(r.Flex,{justify:"space-between"},o.createElement(r.Button,{usage:"outline",onClick:function(){e.show({sentiment:"info",text:"Channel has been bookmarked."})}},"Show Info"),o.createElement(r.Button,{onClick:function(){t.show({sentiment:"success",title:"Success",text:"Your profile has been updated."})}},"Show Success"),o.createElement(r.Button,{usage:"text",onClick:function(){n.show({sentiment:"warning",title:"Unstable Network",text:"Your connection was interrupted."})}},"Show Warning"),o.createElement(r.Button,{sentiment:"danger",onClick:function(){a.show({sentiment:"danger",text:"Channel has been archived.",onAction:()=>console.log("You clicked the undo button!")})}},"Show Danger"))}function m(){return o.createElement(l.Z,{justifyContent:"space-between"},o.createElement(r.ToastProvider,null,o.createElement(p,null)))}n(92587);const d={tags:["notification","message"],title:"Toast"},h=void 0,k={unversionedId:"reference/components/toast",id:"reference/components/toast",title:"Toast",description:"Used to interrupt the user with a short message in response to an action.",source:"@site/docs/reference/components/toast.mdx",sourceDirName:"reference/components",slug:"/reference/components/toast",permalink:"/docs/reference/components/toast",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/toast.mdx",tags:[{label:"notification",permalink:"/docs/tags/notification"},{label:"message",permalink:"/docs/tags/message"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["notification","message"],title:"Toast"},sidebar:"reference",previous:{title:"Text Link",permalink:"/docs/reference/components/text-link"},next:{title:"Toggle",permalink:"/docs/reference/components/toggle"}},g={},f=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Toast",id:"basic-toast",level:3},{value:"Toast Status",id:"toast-status",level:3},{value:"Toast with &quot;Undo&quot; Button",id:"toast-with-undo-button",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Ejected Toast",id:"2-ejected-toast",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"<code>ToastProvider</code>",id:"toastprovider",level:3},{value:"Paramters",id:"paramters",level:4},{value:"<code>useToast</code>",id:"usetoast",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessibility",id:"accessibility",level:2}],T={toc:f},N="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(N,(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a short message in response to an action."),(0,s.kt)(i.C9,{mdxType:"DocsLinkList"},(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Toast.tsx",mdxType:"DocsGithubLink"}),(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Toast/toastCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,s.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ToastProvider, useToast } from '@pluralsight/react'\n")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Wrapper"),(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"Icon"),(0,s.kt)("li",{parentName:"ol"},"Heading (optional)"),(0,s.kt)("li",{parentName:"ol"},"Text"),(0,s.kt)("li",{parentName:"ol"},"Action Button (optional)"),(0,s.kt)("li",{parentName:"ol"},"Close Button")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-toast"},"Basic Toast"),(0,s.kt)(c,{mdxType:"BasicToast"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { Button, ToastProvider, useToast } from '@pluralsight/react'\n\nfunction SomeFeatureSection() {\n  const toast = useToast()\n\n  function handleShowToast() {\n    toast.show({\n      text: 'Channel has been bookmarked.',\n    })\n  }\n\n  return <Button onClick={handleShowToast}>Show Toast</Button>\n}\n\nexport default function SomePage() {\n  return (\n    <ToastProvider>\n      <SomeFeatureSection />\n    </ToastProvider>\n  )\n}\n")),(0,s.kt)("h3",{id:"toast-status"},"Toast Status"),(0,s.kt)(m,{mdxType:"ToastStatus"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Info"),": Brings awareness to important information and sets expectations for the user."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Success"),": Provides the user with positive confirmation of a successfully performed action or series of steps."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Warning"),": Helps users avoid error situations and should communicate important or time-sensitive states of the system."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Danger"),": Alerts of a problem that has already occurred, as a result of user actions.")),(0,s.kt)("h3",{id:"toast-with-undo-button"},'Toast with "Undo" Button'),(0,s.kt)("p",null,'To display a "undo" button, pass in a ',(0,s.kt)("inlineCode",{parentName:"p"},"onAction")," callback function to the ",(0,s.kt)("inlineCode",{parentName:"p"},"useToast")," hook."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {6-8}",showLineNumbers:!0,"{6-8}":!0},"const toast = useToast()\n\nfunction handleShowToast() {\n  toast.show({\n    text: 'Channel has been bookmarked.',\n    onAction: () => {\n      // Undo the fetch request\n    },\n  })\n}\n")),(0,s.kt)("h3",{id:"customizing"},"Customizing"),(0,s.kt)("p",null,"There are 2 ways to customize the Toast component."),(0,s.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,s.kt)("p",null,"Each component layer of the Toast has a unused class name that can be utilized in your local CSS to customize the Toast at any level."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast"),": The element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-heading"),": The heading element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-section"),": The section element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-wrapper"),": The wrapper element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-icon-wrapper"),": The icon wrapper element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-close-icon-wrapper"),": The close button wrapper element of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-toast-button"),': The "undo" button element of the Toast.')),(0,s.kt)("h4",{id:"2-ejected-toast"},"2. Ejected Toast"),(0,s.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Toast however you prefer while keeping the accessibility behavior.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getToastContainerProps,\n  getToastHeadingProps,\n  getToastButtonProps,\n} from '@pluralsight/headless-styles'\n")),(0,s.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Toast/toastCSS.ts"},"Headless-styles documentation"),"."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("p",null,"Toasts are to be used to interrupt the user's task with a short, important, critical or warning message."),(0,s.kt)("h3",{id:"patterns"},"Patterns"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the Toast when there is an important short message to convey to the user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use the Toast when you convey a verbose message (larger than 50 characters)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," keep Toast layout unaltered."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Toast."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do"),' use a "undo" action button when the action is reversible.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't"),' use a "undo" action button when the action is irreversible.'),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Toast by using multiple times at once."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"toastprovider"},(0,s.kt)("inlineCode",{parentName:"h3"},"ToastProvider")),(0,s.kt)("admonition",{title:"pitfall",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ToastProvider")," should ",(0,s.kt)("strong",{parentName:"p"},"NOT")," be used at the top level of your application. It should be used at the top level of the feature that needs toasts for better performance.")),(0,s.kt)("h4",{id:"paramters"},"Paramters"),(0,s.kt)("p",null,"This component does not accept any parameters."),(0,s.kt)("h3",{id:"usetoast"},(0,s.kt)("inlineCode",{parentName:"h3"},"useToast")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ToastProps {\n  duration?: number\n  heading?: string\n  text: string\n  onAction?: () => void\n  sentiment?: 'info' | 'success' | 'warning' | 'danger'\n}\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"duration"),": The duration of the Toast in milliseconds. Defaults to 8000."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"heading"),": The heading of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"text"),": The text of the Toast."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"onAction"),': The callback function of the "undo" button of the Toast.'),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"sentiment"),': The sentiment of the Toast. Defaults to "info".')),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"The Pando Toast is fully accessible and screen-readable through the following features:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Toast is announced to the screen reader when it is shown."),(0,s.kt)("li",{parentName:"ol"},"The Toast is announced to the screen reader when it is dismissed."),(0,s.kt)("li",{parentName:"ol"},"The wrapper element of the Toast has a ",(0,s.kt)("inlineCode",{parentName:"li"},'role="alert"')," attribute."),(0,s.kt)("li",{parentName:"ol"},"The icons of the Toast have ",(0,s.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')," attributes.")))}b.isMDXComponent=!0}}]);