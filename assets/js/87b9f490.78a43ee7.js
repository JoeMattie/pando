"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6774],{80087:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:r},e.children)}},72032:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(81648),a=n(45721),i=n(31825),r=n(61471),l="grid_cC7H";function s(e){return a.createElement("li",(0,i.a)({colSpan:2}),a.createElement(r.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:r,...c}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${r} ${l}`},c),n&&a.createElement(s,{href:n},"View on Github"),t&&a.createElement(s,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},81308:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(81648),a=n(45721),i=n(77674),r=n(75210),l=n(80087),s=n(55764),c=n(71806),u=n(54290),d=n(16613),p=n(23038),m=n(16602);function f(e,t){const{onClose:n,...i}=e,r=(0,u.g)(i);console.log(r);const{button:l,iconOptions:f}=(0,d.g)(r.cancelBtnOptions),g=(0,a.useRef)(null),{ref:h,onKeyDown:v}=(0,s.P)(t);return(0,c.A)(n),a.createElement("div",r.backdrop,a.createElement("div",r.focusGuard),a.createElement("div",(0,o.Z)({},r.wrapper,{ref:g,onClick:function(e){e.stopPropagation(),g.current===e.target&&n()}}),a.createElement("section",(0,o.Z)({},r.section,{ref:h,onKeyDown:v}),a.createElement("header",null,a.createElement("h6",r.heading,e.heading)),a.createElement("div",r.body,e.body),a.createElement("footer",r.buttonWrapper,a.createElement("button",(0,o.Z)({},l,{onClick:n}),a.createElement(m.Z,(0,p.g)(f)))))),a.createElement("div",r.focusGuard))}var g=(0,a.memo)((0,a.forwardRef)(f));function h(){return a.createElement("div",null,a.createElement("p",null,"Cillum aliquip enim exercitation consequat pariatur anim anim eiusmod enim. Do tempor dolore ullamco duis est tempor reprehenderit aute pariatur. Officia ex ullamco amet exercitation ea incididunt amet proident aliqua excepteur sint velit occaecat non. Proident id tempor dolore excepteur. Pariatur irure commodo occaecat consequat nulla aliquip officia reprehenderit velit. Mollit aliquip ex voluptate veniam veniam amet laborum duis magna nulla amet ex. Minim do ullamco culpa minim veniam sunt incididunt excepteur sit ipsum anim."),a.createElement("p",null,"Velit aliquip ea anim nulla aute est sunt elit velit id. Proident non in quis id nulla excepteur Lorem voluptate excepteur tempor velit pariatur deserunt. Sunt excepteur dolor consectetur veniam do tempor laboris ipsum velit."),a.createElement("p",null,"Voluptate esse et officia eiusmod ullamco ullamco aliquip sit proident adipisicing eiusmod. Consectetur quis tempor velit nulla magna aliquip Lorem laboris commodo. Commodo eiusmod consequat proident ex velit veniam elit dolor ea sint labore. Consequat consectetur labore esse do in voluptate esse culpa do veniam reprehenderit duis tempor. Sunt cillum enim quis veniam. Nostrud Lorem commodo nostrud veniam sit Lorem fugiat et quis do culpa cillum nisi."))}var v=function(){const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{n(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r.g)().button,{onClick:function(){n(!0)},ref:e}),"Open Modal"),t&&(0,i.createPortal)(a.createElement(g,{bodyId:"normalModal-body",body:a.createElement(h,null),heading:"More information about stuff",headingId:"normalModal-header",id:"normalModal",onClose:s,ref:e}),document.body))}},61471:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(45721),a=n(94697),i=n(23038),r=n(31026),l=n(6115);function s(e){const{href:t}=e,n=(0,a.g)({href:t}),s=(0,i.g)(n.iconOptions),c=t.includes("github")?r.Z:l.Z;return o.createElement("a",n.link,o.createElement(c,s),e.children)}},16156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(81648),a=(n(45721),n(70167)),i=n(81308),r=n(72032);n(27505);const l={tags:["dialog"],title:"Modal"},s=void 0,c={unversionedId:"reference/components/modal",id:"reference/components/modal",title:"Modal",description:"Used to focus the user's attention exclusively on information via a window",source:"@site/docs/reference/components/modal.mdx",sourceDirName:"reference/components",slug:"/reference/components/modal",permalink:"/docs/next/reference/components/modal",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/modal.mdx",tags:[{label:"dialog",permalink:"/docs/next/tags/dialog"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["dialog"],title:"Modal"},sidebar:"reference",previous:{title:"Menu",permalink:"/docs/next/reference/components/menu"},next:{title:"Pagination",permalink:"/docs/next/reference/components/pagination"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Modal",id:"basic-modal",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to focus the user's attention exclusively on information via a window that is overlaid on primary content."),(0,a.kt)(r.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Modal",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getModalProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ModalOptions {\n  ariaLabel?: string\n  bodyId: string\n  headingId?: string\n  id: string\n}\n\ngetModalProps(options?: ModalOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ModalOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Close Button"),(0,a.kt)("li",{parentName:"ol"},"Heading"),(0,a.kt)("li",{parentName:"ol"},"Body"),(0,a.kt)("li",{parentName:"ol"},"Button Group (optional)"),(0,a.kt)("li",{parentName:"ol"},"Backdrop")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-modal"},"Basic Modal"),(0,a.kt)(i.Z,{mdxType:"BasicModal"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Modal Component."',showLineNumbers:!0,title:'"Modal','Component."':!0},"import { forwardRef, memo, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport {\n  getIconButtonProps,\n  getIconProps,\n  getModalProps,\n} from '@pluralsight/headless-styles'\nimport { CloseIcon } from '@pluralsight/icons'\n\nfunction Modal(props, triggerRef) {\n  const { onClose, heading, children, ...modalProps } = props\n  const modal = getModalProps(modalProps)\n  const { button, iconOptions } = getIconButtonProps(modal.cancelBtnOptions)\n  const { ref, onKeyDown } = useFocusTrap(triggerRef)\n  const wrapperRef = useRef(null)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  return (\n    <div {...modal.backdrop}>\n      <div {...modal.focusGuard} />\n\n      <div {...modal.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...modal.section} ref={ref} onKeyDown={onKeyDown}>\n          {heading && (\n            <header>\n              <h6 {...modal.heading}>{heading}</h6>\n            </header>\n          )}\n          <div {...modal.body}>{children}</div>\n          <footer {...modal.buttonWrapper}>\n            <button {...button} onClick={onClose}>\n              <CloseIcon {...getIconProps(iconOptions)} />\n            </button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...modal.focusGuard} />\n    </div>\n  )\n}\n\nexport default memo(forwardRef(Modal))\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getModalProps(options?: ModalOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": An id, headingId, bodyId, and ariaLabel properties that accept a String value to connect and setup accessbility properties for all the elements used within the Modal.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and ",(0,a.kt)("inlineCode",{parentName:"p"},"iconWrapper")," to use on the element wrapping the Icon. Likewise it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelBtnOptions")," to pass into the Button API as parameters. Last, an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"focusGuard")," property to spread on a leading and trailing component within the Modal for focus protections."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("admonition",{title:"Modal vs. Confirm Dialog",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A Modal is intended for informational purposes where the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/confirm-dialog"},"ConfirmDialog")," is to specifically get an action-based confirmation from the user. There are accessbility differences between the two use cases.")),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Modal when you need the user to view addtional information within an internal view outside of the current page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Confirm Dialog ",(0,a.kt)("em",{parentName:"p"},"unless")," you need the user to confirm a decision."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Modal for providing more information about a context within a page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Modal for complex or large amounts of content, such as forms, multi-step processes, or entire page experiences."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," abuse the use of a Modal by using multiple times within a page or within a previous Modal."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Modal, Button, and Icon APIs combined with semantic HTML allow the Modal to be fully accessible and screen-readable."))}m.isMDXComponent=!0}}]);