"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8304],{58852:(e,t,n)=>{n.d(t,{dS:()=>r,fK:()=>l,C9:()=>m,ZP:()=>d});var o=n(70079),i=n(88660);const a={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function s(e){return o.createElement("li",{className:a.linkItem},o.createElement(i.Z,e,e.children))}function l(e){return o.createElement(s,{href:e.href},e.children??"View on Github")}function r(e){return o.createElement(s,{href:e.href},"View on Figma")}function m(e){return o.createElement("ul",{className:a.linkList},e.children)}function d(e){const{figma:t,github:n}=e;return o.createElement("ul",{className:a.linkList},n&&o.createElement(l,{href:n}),t&&o.createElement(r,{href:t}))}},92587:(e,t,n)=>{n(70079)},88660:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(70079),i=n(40653),a=n(36720),s=n(20394),l=n(32042);function r(e){const{href:t}=e,n=(0,a.L)({ariaHidden:!0,size:"s"}),r=t.includes("github")?s.Z:l.Z;return o.createElement(i.TextLink,e,o.createElement(r,n),e.children)}},26057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(3262),i=(n(70079),n(38570)),a=n(58852);n(92587);const s={tags:["Banner","Page Message"],title:"Admonition"},l=void 0,r={unversionedId:"reference/components/admonition",id:"reference/components/admonition",title:"Admonition",description:"Used to communicate a state that affects a system, feature, or page.",source:"@site/docs/reference/components/admonition.mdx",sourceDirName:"reference/components",slug:"/reference/components/admonition",permalink:"/docs/reference/components/admonition",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/admonition.mdx",tags:[{label:"Banner",permalink:"/docs/tags/banner"},{label:"Page Message",permalink:"/docs/tags/page-message"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Banner","Page Message"],title:"Admonition"},sidebar:"reference",previous:{title:"ActionMenu",permalink:"/docs/reference/components/action-menu"},next:{title:"Avatar",permalink:"/docs/reference/components/avatar"}},m={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Admonition",id:"basic-admonition",level:3},{value:"Admonition Status",id:"admonition-status",level:3},{value:"Closable Admonition",id:"closable-admonition",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Admonition",id:"3-ejected-admonition",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Placement",id:"placement",level:3},{value:"Status Icons",id:"status-icons",level:3},{value:"Close Button",id:"close-button",level:3},{value:"API",id:"api",level:2},{value:"<code>Admonition: FC&lt;AdmonitionProps&gt;</code>",id:"admonition-fcadmonitionprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>AdmonitionHeading: FC&lt;AdmonitionHeadingProps&gt;</code>",id:"admonitionheading-fcadmonitionheadingprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>AdmonitionText: FC&lt;AdmonitionTextProps&gt;</code>",id:"admonitiontext-fcadmonitiontextprops",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Status Icons",id:"status-icons-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to communicate a state that affects a system, feature, or page."),(0,i.kt)(a.C9,{mdxType:"DocsLinkList"},(0,i.kt)(a.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Admonition.tsx",mdxType:"DocsGithubLink"}),(0,i.kt)(a.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Admonition/admonitionCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,i.kt)(a.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Admonition,\n  AdmonitionHeading,\n  AdmonitionText,\n} from '@pluralsight/react'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Status icon"),(0,i.kt)("li",{parentName:"ol"},"Heading"),(0,i.kt)("li",{parentName:"ol"},"Text"),(0,i.kt)("li",{parentName:"ol"},"Close button (optional)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-admonition"},"Basic Admonition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  return (\n    <Admonition sentiment="info">\n      <AdmonitionHeading>Note</AdmonitionHeading>\n      <AdmonitionText>\n        This is a basic admonition. It can be used to communicate a state that\n        affects a system, feature, or page.\n      </AdmonitionText>\n    </Admonition>\n  )\n}\n')),(0,i.kt)("h3",{id:"admonition-status"},"Admonition Status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function StatusesExample() {\n  return (\n    <div>\n      <Admonition sentiment="info">\n        <AdmonitionHeading>Note</AdmonitionHeading>\n        <AdmonitionText>\n          This is a info admonition. It can be used to communicate a state that\n          affects a system, feature, or page.\n        </AdmonitionText>\n      </Admonition>\n\n      <br />\n      <Admonition sentiment="success">\n        <AdmonitionHeading>Tip</AdmonitionHeading>\n        <AdmonitionText>\n          This is a success admonition. It can be used to communicate a tip or\n          any other type of static information.\n        </AdmonitionText>\n      </Admonition>\n\n      <br />\n      <Admonition sentiment="warning">\n        <AdmonitionHeading>Card Expiring Soon</AdmonitionHeading>\n        <AdmonitionText>\n          This is a warning admonition. It can be used to communicate a state\n          that affects a system, feature, or page.\n        </AdmonitionText>\n      </Admonition>\n\n      <br />\n      <Admonition sentiment="danger">\n        <AdmonitionHeading>Missing Payment</AdmonitionHeading>\n        <AdmonitionText>\n          This is a danger admonition. It can be used to communicate a state\n          that affects a system, feature, or page.\n        </AdmonitionText>\n      </Admonition>\n    </div>\n  )\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Info"),": Brings awareness to important information and sets expectations for the user."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Success"),": Provides the user with positive or helpful information for understanding a feature."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Warning"),": Helps users avoid error situations and should communicate important or time-sensitive states of the system."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Danger"),": Alerts of a problem that has already occurred that negatively affects the user experience.")),(0,i.kt)("h3",{id:"closable-admonition"},"Closable Admonition"),(0,i.kt)("p",null,"To make an Admonition closable, pass a function to the ",(0,i.kt)("inlineCode",{parentName:"p"},"onClose")," prop of the Admonition component. This function will be called when the user clicks the close button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ClosableAdmontionExample() {\n  function handleClose(e) {\n    console.log('close', e)\n  }\n\n  return (\n    <Admonition sentiment=\"info\" onClose={handleClose}>\n      <AdmonitionHeading>Note</AdmonitionHeading>\n      <AdmonitionText>\n        All Pando React components are built using Typescript.\n      </AdmonitionText>\n    </Admonition>\n  )\n}\n")),(0,i.kt)("h3",{id:"customizing"},"Customizing"),(0,i.kt)("p",null,"There are 3 ways to customize the Admonition component."),(0,i.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,i.kt)("p",null,"Each component layer of the Admontion has a unused class name that can be utilized in your local CSS to customize the Admonition at any level."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-admonition"),": The container of the Admonition."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-admonition-icon"),": The container of the status icon."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-admonition-text-container"),": The container of the text."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-admonition-heading"),": The heading element."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-admonition-text"),": The text element."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-icon-btn"),": The close button.")),(0,i.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,i.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,i.kt)("p",null,"You can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," prop to the Admonition components to customize the Admonition at the container, heading, or text level. This is useful if your project uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Admonition." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Admonition."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomAdmonition(props) {\n  return (\n    <Admonition className={customStyles.container} {...props}>\n      <AdmonitionHeading className={customStyles.heading}>\n        Note\n      </AdmonitionHeading>\n      <AdmonitionText className={customStyles.text}>\n        This is a basic admonition. It can be used to communicate a state that\n        affects a system, feature, or page.\n      </AdmonitionText>\n    </Admonition>\n  )\n}\n")),(0,i.kt)("h4",{id:"3-ejected-admonition"},"3. Ejected Admonition"),(0,i.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Admonition however you prefer while keeping the accessibility behavior.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getAdmonitionProps,\n  getAdmonitionHeadingProps,\n  getAdmonitionTextProps,\n  getAdmonitionIconProps,\n  getAdmonitionCloseButtonProps,\n  getIconProps,\n  getIconButtonProps,\n} from '@pluralsight/headless-styles'\n")),(0,i.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Admonition/admonitionCSS.ts"},"Headless-styles documentation"),"."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"placement"},"Placement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," place at the top of the current content area, to capture the attention of users or be read as quickly as possible."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," place in the middle of a content area."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," place at the beginning of a form."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," place in the middle or end of a form."),(0,i.kt)("h3",{id:"status-icons"},"Status Icons"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Icons we provide in the ",(0,i.kt)("a",{parentName:"p",href:"#admonition-status"},"status")," section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use Icons outside of the examples we provide in the ",(0,i.kt)("a",{parentName:"p",href:"#admonition-status"},"status")," section."),(0,i.kt)("h3",{id:"close-button"},"Close Button"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," include the Close button when the Admonition is communicating a real-time response or status to the user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use the Close button when the Admonition is static, warning, or informative messages."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"admonition-fcadmonitionprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"Admonition: FC<AdmonitionProps>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AdmonitionProps extends HTMLAttributes<HTMLDivElement> {\n  sentiment: 'info' | 'success' | 'warning' | 'danger'\n  onClose?: MouseEventHandler<HTMLButtonElement>\n}\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Any props that can be passed to a ",(0,i.kt)("inlineCode",{parentName:"li"},"div")," element."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"onClose"),": A function that will be called when the user clicks the close button. This is also used to ",(0,i.kt)("strong",{parentName:"li"},"display")," the close button.")),(0,i.kt)("h3",{id:"admonitionheading-fcadmonitionheadingprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"AdmonitionHeading: FC<AdmonitionHeadingProps>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement>\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any props that can be passed to a ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," element.")),(0,i.kt)("h3",{id:"admonitiontext-fcadmonitiontextprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"AdmonitionText: FC<AdmonitionTextProps>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type AdmonitionTextProps = HTMLAttributes<HTMLParagraphElement>\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any props that can be passed to a ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," element.")),(0,i.kt)("h3",{id:"status-icons-1"},"Status Icons"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Icons that are used for each status."',title:'"Icons',that:!0,are:!0,used:!0,for:!0,each:!0,'status."':!0},"const AdmonitionIconMap = {\n  info: 'InfoCircleIcon',\n  success: 'CheckCircleIcon',\n  warning: 'WarningTriangleIcon',\n  danger: 'DangerDiamondIcon',\n}\n")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando Admonition is fully accessible and screen-readable through the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Admonition is a ",(0,i.kt)("inlineCode",{parentName:"li"},"div")," element with a ",(0,i.kt)("inlineCode",{parentName:"li"},"role"),' of "region".'),(0,i.kt)("li",{parentName:"ol"},"Admonition Status Icon has an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-hidden"),' attribute of "true".'),(0,i.kt)("li",{parentName:"ol"},"Admonition Close Button has an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label"),' attribute of "Close admonition".'),(0,i.kt)("li",{parentName:"ol"},"Admonition Button Icon has an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-hidden"),' attribute of "true" and a ',(0,i.kt)("inlineCode",{parentName:"li"},"role"),' of "img".')))}u.isMDXComponent=!0}}]);