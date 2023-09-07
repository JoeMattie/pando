"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3113],{58852:(e,a,t)=>{t.d(a,{dS:()=>o,fK:()=>l,C9:()=>m,ZP:()=>d});var n=t(70079),r=t(88660);const s={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function i(e){return n.createElement("li",{className:s.linkItem},n.createElement(r.Z,e,e.children))}function l(e){return n.createElement(i,{href:e.href},e.children??"View on Github")}function o(e){return n.createElement(i,{href:e.href},"View on Figma")}function m(e){return n.createElement("ul",{className:s.linkList},e.children)}function d(e){const{figma:a,github:t}=e;return n.createElement("ul",{className:s.linkList},t&&n.createElement(l,{href:t}),a&&n.createElement(o,{href:a}))}},92587:(e,a,t)=>{t(70079)},88660:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(70079),r=t(40653),s=t(36720),i=t(20394),l=t(32042);function o(e){const{href:a}=e,t=(0,s.L)({ariaHidden:!0,size:"s"}),o=a.includes("github")?i.Z:l.Z;return n.createElement(r.TextLink,e,n.createElement(o,t),e.children)}},22467:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(3262),r=(t(70079),t(38570)),s=t(58852);t(92587);const i={tags:["field","forms","error messages"],title:"Field Messages"},l=void 0,o={unversionedId:"reference/components/field-message",id:"reference/components/field-message",title:"Field Messages",description:"Used to display a helper text message for a form field.",source:"@site/docs/reference/components/field-message.mdx",sourceDirName:"reference/components",slug:"/reference/components/field-message",permalink:"/docs/reference/components/field-message",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/field-message.mdx",tags:[{label:"field",permalink:"/docs/tags/field"},{label:"forms",permalink:"/docs/tags/forms"},{label:"error messages",permalink:"/docs/tags/error-messages"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field","forms","error messages"],title:"Field Messages"},sidebar:"reference",previous:{title:"Confirm Dialog",permalink:"/docs/reference/components/confirm-dialog"},next:{title:"Fieldset",permalink:"/docs/reference/components/fieldset"}},m={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Helper Message",id:"helper-message",level:3},{value:"Error Message",id:"error-message",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:d},c="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to display a helper text message for a form field."),(0,r.kt)(s.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/FieldMessage",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FieldMessage, ErrorMessage } from '@pluralsight/react'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Form Control"),(0,r.kt)("li",{parentName:"ol"},"Label"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Message")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,r.kt)("h3",{id:"helper-message"},"Helper Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function EmailField() {\n  const [email, setEmail] = useState(\'\')\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <FormControlProvider required={true}>\n      <Label htmlFor="email">Email</Label>\n      <Input\n        describedBy="email:error"\n        id="email"\n        name="email"\n        onChange={handleChange}\n        placeholder="email@example.com"\n        value={email}\n      />\n      <FieldMessage id="email:help">\n        Enter the email you want associated with your account.\n      </FieldMessage>\n      <ErrorMessage id="email:error">\n        An email address is required.\n      </ErrorMessage>\n    </FormControlProvider>\n  )\n}\n')),(0,r.kt)("h3",{id:"error-message"},"Error Message"),(0,r.kt)("admonition",{title:"Easy to understand invalid states",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To display an invalid state that is easy to understand for the user, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldOptions")," to your ",(0,r.kt)("strong",{parentName:"p"},"Error Message")," component and add a WarningTriangleFilled ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/general/icons"},"Icon"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ErrorEmailField() {\n  const [email, setEmail] = useState(\'\')\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <FormControlProvider required={true} invalid={!email}>\n      <Label htmlFor="email">Email</Label>\n      <Input\n        describedBy="email:error"\n        id="email"\n        name="email"\n        onChange={handleChange}\n        placeholder="email@example.com"\n        value={email}\n      />\n      <FieldMessage id="email:help">\n        Enter the email you want associated with your account.\n      </FieldMessage>\n      <ErrorMessage id="email:error">\n        Please provide an email address.\n      </ErrorMessage>\n    </FormControlProvider>\n  )\n}\n')),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Field Message on all form field to help provide context where necessary."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use the Error Message unless there is a field that has an invalid state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Error Message on all form fields that are invalid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," eliminate the Error Message from an invalid form field, the Error Message is required to help provide visual context and a11y."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldMessageOptions {\n  id: string\n  message: string\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"id: string")," - A unique id for the Field Message."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string")," - The message content to display.")),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Field & Error Message APIs combined with semantic HTML allow the Field & Error Messages to be fully accessible and screen-readable."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," prop is passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-describedby")," prop on the Input component.")))}g.isMDXComponent=!0}}]);