"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8146],{52729:function(e,n,t){const r=t(86521);n.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"danger diamond filled icon",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.293 21.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9ZM12.5 14a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1Zm0 3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"})})}},93577:function(e,n,t){t.d(n,{P:function(){return o}});var r=t(45721);function o(e,n){var t=function(e){var n;return{blockScroll:null===(n=null==e?void 0:e.blockScroll)||void 0===n||n}}(n),o=(0,r.useRef)(null),a=(0,r.useCallback)((function(){var e,n,t=null!==(e=null===(n=o.current)||void 0===n?void 0:n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))&&void 0!==e?e:[];return{firstItem:t[0],lastItem:t[t.length-1]}}),[o]),l=(0,r.useCallback)((function(e){var n=document.activeElement,t=a(),r=t.firstItem,o=t.lastItem;"Tab"===e.key&&(e.shiftKey?n===r&&(e.preventDefault(),o.focus()):n===o&&(e.preventDefault(),r.focus()))}),[a]),c=(0,r.useCallback)((function(){if(i(t.blockScroll),null!=o.current){var e=a().firstItem;document.activeElement!==e&&(null==e||e.focus())}}),[t.blockScroll,a]);return(0,r.useEffect)((function(){var n=null==e?void 0:e.current;return function(){i(!1),null==n||n.focus()}}),[e]),(0,r.useEffect)((function(){c()}),[c]),{ref:o,onKeyDown:l}}function i(e){e?document.body.setAttribute("data-modal-open","true"):document.body.removeAttribute("data-modal-open")}},25233:function(e,n,t){t.d(n,{bZ:function(){return v},FB:function(){return Z},T2:function(){return C},rq:function(){return N},qM:function(){return w},MJ:function(){return k},Y9:function(){return b},kw:function(){return D},io:function(){return E},QP:function(){return y}});var r=t(81648),o=t(45721),i=t(23752),a=t(93577),l=t(9166),c=t(4094),s=t(51362),u=t(76881),d=t(52729),m=t(77085),p=t(47274);function f(e){const{fieldOptions:n}=(0,s.g)(e),t=(0,p.g)({...n,...e}),{value:i,...a}=t.input;return o.createElement("div",t.inputWrapper,o.createElement("input",(0,r.Z)({},a,{value:i,onChange:e.onChange})),n.invalid&&o.createElement("span",t.invalidIconWrapper,o.createElement(m.Z,(0,c.g)(t.invalidIconOptions))))}function g(e){const{onClose:n,...t}=e,a=(0,o.useRef)(null),{focusGuard:c,...s}=(0,l.g)(t);return(0,i.A)(n),o.createElement("div",s.backdrop,o.createElement("div",c),o.createElement("div",(0,r.Z)({},s.wrapper,{ref:a,onClick:function(e){e.stopPropagation(),a.current===e.target&&n()}}),e.children),o.createElement("div",c))}function h(e,n){const{onClose:t,children:i,...c}=e,s=(0,l.j)(),{ref:u,onKeyDown:d}=(0,a.P)(n);return o.createElement(g,(0,r.Z)({onClose:t},c),o.createElement("section",(0,r.Z)({},s,{ref:u,onKeyDown:d}),i))}const v=(0,o.memo)((0,o.forwardRef)(h));function k(e){const n=(0,l.e)(e.kind);return o.createElement("header",n.header,"destructive"===e.kind&&o.createElement("span",n.iconWrapper,o.createElement(d.Z,(0,c.g)(n.iconOptions))),e.children)}function b(e){const n=(0,l.f)(e.id);return o.createElement("h4",(0,r.Z)({"data-site-override":"clearMarginBottom"},n),e.children)}function C(e){const n=(0,l.a)(e.id);return o.createElement("div",n,e.children)}function y(e){return o.createElement("p",null,e.children)}function E(e){const n=(0,l.i)(e.htmlFor);return o.createElement("label",n,e.children)}function D(e){const{onChange:n,...t}=e,{fieldOptions:i}=(0,s.g)({invalid:Boolean(e.value)&&e.value!==e.confirmKey}),a=(0,l.h)({...i,...t});return o.createElement("div",a.inputWrapper,o.createElement(f,(0,r.Z)({},a.inputOptions,{onChange:n})))}function w(e){const n=(0,l.d)();return o.createElement("footer",n,e.children)}function N(e){const n=(0,l.b)();return o.createElement("span",n.button,o.createElement("button",(0,r.Z)({},(0,u.g)(n.btnOptions).button,e),e.children))}function Z(e){const{kind:n,...t}=e,i=(0,l.c)(n);return o.createElement("button",(0,r.Z)({},(0,u.g)(i.btnOptions).button,t),e.children)}},1025:function(e,n,t){var r=t(81648),o=t(45721),i=t(77674),a=t(76881),l=t(80087),c=t(25233);n.Z=function(){const e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1),s=(0,o.useCallback)((()=>{t(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a.g)().button,{onClick:function(){t(!0)},ref:e}),"Confirm payment"),n&&(0,i.createPortal)(o.createElement(c.bZ,{bodyId:"non-destructiveAlert-body",headingId:"non-destructiveAlert-heading",id:"non-destructive-alert",onClose:s,ref:e},o.createElement(c.MJ,{kind:"non-destructive"},o.createElement(c.Y9,{id:"non-destructiveAlert-heading"},"Confirm payment")),o.createElement(c.T2,{id:"non-destructiveAlert-body"},o.createElement(c.QP,null,"Are you sure you want to make this payment?")),o.createElement(c.qM,null,o.createElement(c.rq,{onClick:s},"Cancel"),o.createElement(c.FB,{kind:"non-destructive"},"Confirm"))),document.body))}},81963:function(e,n,t){var r=t(81648),o=t(45721),i=t(77674),a=t(76881),l=t(80087),c=t(25233);n.Z=function(){const e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1),s=(0,o.useCallback)((()=>{t(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a.g)({sentiment:"danger"}).button,{onClick:function(){t(!0)},ref:e}),"Delete channel"),n&&(0,i.createPortal)(o.createElement(c.bZ,{bodyId:"destructiveAlert-body",headingId:"destructiveAlert-heading",id:"destructive-alert",onClose:s,ref:e},o.createElement(c.MJ,{kind:"destructive"},o.createElement(c.Y9,{id:"destructiveAlert-heading"},"Delete channel?")),o.createElement(c.T2,{id:"destructiveAlert-body"},o.createElement(c.QP,null,"Are you sure you want to delete this channel? This action cannot be undone.")),o.createElement(c.qM,null,o.createElement(c.rq,{onClick:s},"Cancel"),o.createElement(c.FB,{kind:"destructive"},"Delete"))),document.body))}},80087:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function a(e){void 0===e&&(e=i);const n=e.type??i.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",a={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:o[n],style:a},e.children)}},72032:function(e,n,t){t.d(n,{dS:function(){return u},fK:function(){return s},C9:function(){return d},ZP:function(){return m}});var r=t(81648),o=t(45721),i=t(71397),a=t(61471),l="grid_cC7H";function c(e){return o.createElement("li",(0,i.a)({colSpan:2}),o.createElement(a.Z,e,e.children))}function s(e){return o.createElement(c,{href:e.href},e.children??"View on Github")}function u(e){return o.createElement(c,{href:e.href},"View on Figma")}function d(e){const{className:n,...t}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,r.Z)({className:`${n} ${l}`},t),e.children)}function m(e){const{figma:n,github:t}=e,{className:a,...c}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,r.Z)({className:`${a} ${l}`},c),t&&o.createElement(s,{href:t}),n&&o.createElement(u,{href:n}))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(45721),o=t(64965),i=t(4094),a=t(31026),l=t(6115);function c(e){const{href:n}=e,t=(0,o.g)({href:n}),c=(0,i.g)(t.iconOptions),s=n.includes("github")?a.Z:l.Z;return r.createElement("a",t.link,r.createElement(s,c),e.children)}},22439:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=t(81648),o=(t(45721),t(70167)),i=t(1025),a=t(81963),l=t(72032);t(27505);const c={tags:["dialog","user confirmation"],title:"Confirm Dialog"},s=void 0,u={unversionedId:"reference/components/confirm-dialog",id:"version-0.4.1/reference/components/confirm-dialog",title:"Confirm Dialog",description:"Used to interrupt the user with a mandatory confirmation or action.",source:"@site/versioned_docs/version-0.4.1/reference/components/confirm-dialog.mdx",sourceDirName:"reference/components",slug:"/reference/components/confirm-dialog",permalink:"/docs/reference/components/confirm-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/confirm-dialog.mdx",tags:[{label:"dialog",permalink:"/docs/tags/dialog"},{label:"user confirmation",permalink:"/docs/tags/user-confirmation"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["dialog","user confirmation"],title:"Confirm Dialog"},sidebar:"reference",previous:{title:"Circular Progress",permalink:"/docs/reference/components/circular-progress"},next:{title:"Field Messages",permalink:"/docs/reference/components/field-message"}},d={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Destructive",id:"destructive",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:m};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a mandatory confirmation or action."),(0,o.kt)(l.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/ConfirmDialog",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getConfirmDialogProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogOptions {\n  kind?: 'non-destructive' | 'destructive'\n  id: string\n  headerId: string\n  bodyId: string\n}\n\ngetConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Header"),(0,o.kt)("li",{parentName:"ol"},"Title"),(0,o.kt)("li",{parentName:"ol"},"Section"),(0,o.kt)("li",{parentName:"ol"},"Body"),(0,o.kt)("li",{parentName:"ol"},"Button Group"),(0,o.kt)("li",{parentName:"ol"},"Cancel Button"),(0,o.kt)("li",{parentName:"ol"},"Back Drop")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"non-destructive"},"Non-destructive"),(0,o.kt)("p",null,"Use a non-destructive Confirm Dialog when you need a confirmation that does not result in a destructive behavior."),(0,o.kt)(i.Z,{mdxType:"BasicConfirmDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Confirm Dialog Component."',showLineNumbers:!0,title:'"Confirm',Dialog:!0,'Component."':!0},"import { forwardRef, memo, useEffect, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport {\n  getButtonProps,\n  getConfirmDialogProps,\n  getIconProps,\n} from '@pluralsight/headless-styles'\nimport { DangerDiamondFilledIcon } from '@pluralsight/icons'\n\nfunction ConfirmDialogEl(props, triggerRef) {\n  const { onClose, ...confirmProps } = props\n  const wrapperRef = useRef(null)\n  const confirm = getConfirmDialogProps(confirmProps)\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n  const isDestructive = confirmProps.kind === 'destructive'\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...confirm.backdrop}>\n      <div {...confirm.focusGuard} />\n\n      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...confirm.header}>\n            {isDestructive && (\n              <span {...confirm.iconWrapper}>\n                <DangerDiamondFilledIcon\n                  {...getIconProps(confirm.iconOptions)}\n                />\n              </span>\n            )}\n            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n          </header>\n          <p {...confirm.confirmBody}>{props.body}</p>\n          <footer {...confirm.buttonGroup}>\n            <button\n              {...getButtonProps(confirm.cancelBtnOptions).button}\n              onClick={onClose}\n            >\n              Cancel\n            </button>\n            <button {...getButtonProps(confirm.agreeBtnOptions).button}>\n              {props.confirmText}\n            </button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...confirm.focusGuard} />\n    </div>\n  )\n}\n\nconst ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n\nexport default ConfirmDialog\n")),(0,o.kt)("h3",{id:"destructive"},"Destructive"),(0,o.kt)("p",null,"When you need a confirmation from a user that will result in a destructive action."),(0,o.kt)(a.Z,{mdxType:"DestructiveConfirmDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"getConfirmDialogProps({ kind: 'destructive' })\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can copy and paste the example from the ",(0,o.kt)("a",{parentName:"p",href:"#non-destructive"},"non-destructive section")," and pass ",(0,o.kt)("inlineCode",{parentName:"p"},'kind="destructive"')," to the component to get this same result.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": id, headerId, and bodyId properties that accept a String value to connect and setup accessbility properties for all the elements used within the Confirm Dialog. An optional kind property that accepts a String value of ",(0,o.kt)("inlineCode",{parentName:"li"},"'non-destructive' | 'destructive'")," to determine the styling of the Confirm Dialog.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object matching the ",(0,o.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and ",(0,o.kt)("inlineCode",{parentName:"p"},"iconWrapper")," to use on the element wrapping the Icon. Likewise it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelBtnOptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"agreeBtnOptions")," to pass into the Button API as parameters. Last, an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"focusGuard")," property to spread on a leading and trailing element within the Dialog for focus protections."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("p",null,"Confirm dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,o.kt)("inlineCode",{parentName:"p"},"window.confirm()")," function."),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the Confirm Dialog when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the Modal when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," keep Confirm Dialog layout unaltered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Confirm Dialog."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,o.kt)("h2",{id:"accessbility"},"Accessbility"),(0,o.kt)("p",null,"The Pando Confirm Dialog, Button, and Icon APIs combined with semantic HTML allow the Confirm Dialog to be fully accessible and screen-readable."))}f.isMDXComponent=!0}}]);