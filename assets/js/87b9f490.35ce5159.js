"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6774],{5098:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},34961:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},60967:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"close",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"M18.703 6 18 5.297a.5.5 0 0 0-.707 0L12 10.59 6.707 5.297a.5.5 0 0 0-.707 0L5.297 6a.5.5 0 0 0 0 .707L10.59 12l-5.293 5.293a.5.5 0 0 0 0 .707l.703.703a.5.5 0 0 0 .707 0L12 13.41l5.293 5.293a.5.5 0 0 0 .707 0l.703-.703a.5.5 0 0 0 0-.707L13.41 12l5.293-5.293a.5.5 0 0 0 0-.707Z"})})}},82682:function(e,t,n){n.d(t,{P:function(){return a}});var o=n(45721);function a(e,t){var n=function(e){var t;return{blockScroll:null===(t=null==e?void 0:e.blockScroll)||void 0===t||t}}(t),a=(0,o.useRef)(null),r=(0,o.useCallback)((function(){var e,t,n=null!==(e=null===(t=a.current)||void 0===t?void 0:t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))&&void 0!==e?e:[];return{firstItem:n[0],lastItem:n[n.length-1]}}),[a]),l=(0,o.useCallback)((function(e){var t=document.activeElement,n=r(),o=n.firstItem,a=n.lastItem;"Tab"===e.key&&(e.shiftKey?t===o&&(e.preventDefault(),a.focus()):t===a&&(e.preventDefault(),o.focus()))}),[r]),s=(0,o.useCallback)((function(){if(i(n.blockScroll),null!=a.current){var e=r().firstItem;document.activeElement!==e&&(null==e||e.focus())}}),[n.blockScroll,r]);return(0,o.useEffect)((function(){var t=null==e?void 0:e.current;return function(){i(!1),null==t||t.focus()}}),[e]),(0,o.useEffect)((function(){s()}),[s]),{ref:a,onKeyDown:l}}function i(e){e?document.body.setAttribute("data-modal-open","true"):document.body.removeAttribute("data-modal-open")}},40736:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:r},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return s},C9:function(){return u},ZP:function(){return d}});var o=n(45721),a=n(84140),i="linkList_sLwJ",r="linkItem_ESvF";function l(e){return o.createElement("li",{className:r},o.createElement(a.Z,e,e.children))}function s(e){return o.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return o.createElement(l,{href:e.href},"View on Figma")}function u(e){return o.createElement("ul",{className:i},e.children)}function d(e){const{figma:t,github:n}=e;return o.createElement("ul",{className:i},n&&o.createElement(s,{href:n}),t&&o.createElement(c,{href:t}))}},45945:function(e,t,n){n(45721)},97103:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(81648),a=n(45721),i=n(77674),r=n(96790),l=n(40736),s=n(82682),c=n(15281),u=n(8014),d=n(72833),m=n(83105),p=n(60967);function f(e,t){const{onClose:n,...i}=e,r=(0,u.I)(i);console.log(r);const{button:l,iconOptions:f}=(0,d.B)(r.cancelBtnOptions),g=(0,a.useRef)(null),{ref:h,onKeyDown:v}=(0,s.P)(t);return(0,c.A)(n),a.createElement("div",r.backdrop,a.createElement("div",r.focusGuard),a.createElement("div",(0,o.Z)({},r.wrapper,{ref:g,onClick:function(e){e.stopPropagation(),g.current===e.target&&n()}}),a.createElement("section",(0,o.Z)({},r.section,{ref:h,onKeyDown:v}),a.createElement("header",null,a.createElement("h6",r.heading,e.heading)),a.createElement("div",r.body,e.body),a.createElement("footer",r.buttonWrapper,a.createElement("button",(0,o.Z)({},l,{onClick:n}),a.createElement(p.Z,(0,m.L)(f)))))),a.createElement("div",r.focusGuard))}var g=(0,a.memo)((0,a.forwardRef)(f));function h(){return a.createElement("div",null,a.createElement("p",null,"Cillum aliquip enim exercitation consequat pariatur anim anim eiusmod enim. Do tempor dolore ullamco duis est tempor reprehenderit aute pariatur. Officia ex ullamco amet exercitation ea incididunt amet proident aliqua excepteur sint velit occaecat non. Proident id tempor dolore excepteur. Pariatur irure commodo occaecat consequat nulla aliquip officia reprehenderit velit. Mollit aliquip ex voluptate veniam veniam amet laborum duis magna nulla amet ex. Minim do ullamco culpa minim veniam sunt incididunt excepteur sit ipsum anim."),a.createElement("p",null,"Velit aliquip ea anim nulla aute est sunt elit velit id. Proident non in quis id nulla excepteur Lorem voluptate excepteur tempor velit pariatur deserunt. Sunt excepteur dolor consectetur veniam do tempor laboris ipsum velit."),a.createElement("p",null,"Voluptate esse et officia eiusmod ullamco ullamco aliquip sit proident adipisicing eiusmod. Consectetur quis tempor velit nulla magna aliquip Lorem laboris commodo. Commodo eiusmod consequat proident ex velit veniam elit dolor ea sint labore. Consequat consectetur labore esse do in voluptate esse culpa do veniam reprehenderit duis tempor. Sunt cillum enim quis veniam. Nostrud Lorem commodo nostrud veniam sit Lorem fugiat et quis do culpa cillum nisi."))}var v=function(){const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{n(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r._)().button,{onClick:function(){n(!0)},ref:e}),"Open Modal"),t&&(0,i.createPortal)(a.createElement(g,{bodyId:"normalModal-body",body:a.createElement(h,null),heading:"More information about stuff",headingId:"normalModal-header",id:"normalModal",onClose:s,ref:e}),document.body))}},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(45721),a=n(64112),i=n(83105),r=n(34961),l=n(5098);function s(e){const{href:t}=e,n=(0,i.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?r.Z:l.Z;return o.createElement(a.h,e,o.createElement(s,n),e.children)}},79861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(81648),a=(n(45721),n(70167)),i=n(97103),r=n(15566);n(45945);const l={tags:["dialog"],title:"Modal"},s=void 0,c={unversionedId:"reference/components/modal",id:"reference/components/modal",title:"Modal",description:"Used to focus the user's attention exclusively on information via a window",source:"@site/docs/reference/components/modal.mdx",sourceDirName:"reference/components",slug:"/reference/components/modal",permalink:"/docs/next/reference/components/modal",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/modal.mdx",tags:[{label:"dialog",permalink:"/docs/next/tags/dialog"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["dialog"],title:"Modal"},sidebar:"reference",previous:{title:"Menu",permalink:"/docs/next/reference/components/menu"},next:{title:"Pagination",permalink:"/docs/next/reference/components/pagination"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Modal",id:"basic-modal",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to focus the user's attention exclusively on information via a window that is overlaid on primary content."),(0,a.kt)(r.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Modal",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getModalProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ModalOptions {\n  ariaLabel?: string\n  bodyId: string\n  headingId?: string\n  id: string\n}\n\ngetModalProps(options?: ModalOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ModalOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Close Button"),(0,a.kt)("li",{parentName:"ol"},"Heading"),(0,a.kt)("li",{parentName:"ol"},"Body"),(0,a.kt)("li",{parentName:"ol"},"Button Group (optional)"),(0,a.kt)("li",{parentName:"ol"},"Backdrop")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-modal"},"Basic Modal"),(0,a.kt)(i.Z,{mdxType:"BasicModal"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Modal Component."',showLineNumbers:!0,title:'"Modal','Component."':!0},"import { forwardRef, memo, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport {\n  getIconButtonProps,\n  getIconProps,\n  getModalProps,\n} from '@pluralsight/headless-styles'\nimport { CloseIcon } from '@pluralsight/icons'\n\nfunction Modal(props, triggerRef) {\n  const { onClose, heading, children, ...modalProps } = props\n  const modal = getModalProps(modalProps)\n  const { button, iconOptions } = getIconButtonProps(modal.cancelBtnOptions)\n  const { ref, onKeyDown } = useFocusTrap(triggerRef)\n  const wrapperRef = useRef(null)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  return (\n    <div {...modal.backdrop}>\n      <div {...modal.focusGuard} />\n\n      <div {...modal.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...modal.section} ref={ref} onKeyDown={onKeyDown}>\n          {heading && (\n            <header>\n              <h6 {...modal.heading}>{heading}</h6>\n            </header>\n          )}\n          <div {...modal.body}>{children}</div>\n          <footer {...modal.buttonWrapper}>\n            <button {...button} onClick={onClose}>\n              <CloseIcon {...getIconProps(iconOptions)} />\n            </button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...modal.focusGuard} />\n    </div>\n  )\n}\n\nexport default memo(forwardRef(Modal))\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getModalProps(options?: ModalOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": An id, headingId, bodyId, and ariaLabel properties that accept a String value to connect and setup Accessibility properties for all the elements used within the Modal.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and ",(0,a.kt)("inlineCode",{parentName:"p"},"iconWrapper")," to use on the element wrapping the Icon. Likewise it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelBtnOptions")," to pass into the Button API as parameters. Last, an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"focusGuard")," property to spread on a leading and trailing component within the Modal for focus protections."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("admonition",{title:"Modal vs. Confirm Dialog",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A Modal is intended for informational purposes where the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/confirm-dialog"},"ConfirmDialog")," is to specifically get an action-based confirmation from the user. There are Accessibility differences between the two use cases.")),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Modal when you need the user to view addtional information within an internal view outside of the current page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Confirm Dialog ",(0,a.kt)("em",{parentName:"p"},"unless")," you need the user to confirm a decision."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Modal for providing more information about a context within a page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Modal for complex or large amounts of content, such as forms, multi-step processes, or entire page experiences."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," abuse the use of a Modal by using multiple times within a page or within a previous Modal."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Modal, Button, and Icon APIs combined with semantic HTML allow the Modal to be fully accessible and screen-readable."))}p.isMDXComponent=!0}}]);