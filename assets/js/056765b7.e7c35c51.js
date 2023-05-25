"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8146],{11175:function(e,n,t){t.d(n,{bZ:function(){return v},FB:function(){return P},T2:function(){return b},rq:function(){return w},qM:function(){return N},MJ:function(){return k},Y9:function(){return C},kw:function(){return D},io:function(){return E},QP:function(){return y}});var r=t(81648),o=t(45721),i=t(21501),a=t(36177),l=t(49640),s=t(4613),c=t(73106),u=t(25163),m=t(38653),d=t(10218),p=t(48566);function f(e){const{fieldOptions:n}=(0,c.N)(e),t=(0,p.T)({...n,...e}),{value:i,...a}=t.input;return o.createElement("div",t.inputWrapper,o.createElement("input",(0,r.Z)({},a,{value:i,onChange:e.onChange})),n.invalid&&o.createElement("span",t.invalidIconWrapper,o.createElement(d.Z,(0,s.L)(t.invalidIconOptions))))}function g(e){const{onClose:n,...t}=e,a=(0,o.useRef)(null),{focusGuard:s,...c}=(0,l.FZ)(t);return(0,i.A)(n),o.createElement("div",c.backdrop,o.createElement("div",s),o.createElement("div",(0,r.Z)({},c.wrapper,{ref:a,onClick:function(e){e.stopPropagation(),a.current===e.target&&n()}}),e.children),o.createElement("div",s))}function h(e,n){const{onClose:t,children:i,...s}=e,c=(0,l.bX)(),{ref:u,onKeyDown:m}=(0,a.P)(n);return o.createElement(g,(0,r.Z)({onClose:t},s),o.createElement("section",(0,r.Z)({},c,{ref:u,onKeyDown:m}),i))}const v=(0,o.memo)((0,o.forwardRef)(h));function k(e){const n=(0,l.qV)(e.kind);return o.createElement("header",n.header,"destructive"===e.kind&&o.createElement("span",n.iconWrapper,o.createElement(m.Z,(0,s.L)(n.iconOptions))),e.children)}function C(e){const n=(0,l.s1)(e.id);return o.createElement("h4",(0,r.Z)({"data-site-override":"clearMarginBottom"},n),e.children)}function b(e){const n=(0,l.id)(e.id);return o.createElement("div",n,e.children)}function y(e){return o.createElement("p",null,e.children)}function E(e){const n=(0,l.JW)(e.htmlFor);return o.createElement("label",n,e.children)}function D(e){const{onChange:n,...t}=e,{fieldOptions:i}=(0,c.N)({invalid:Boolean(e.value)&&e.value!==e.confirmKey}),a=(0,l._)({...i,...t});return o.createElement("div",a.inputWrapper,o.createElement(f,(0,r.Z)({},a.inputOptions,{onChange:n})))}function N(e){const n=(0,l.hA)();return o.createElement("footer",n,e.children)}function w(e){const n=(0,l.RX)();return o.createElement("span",n.button,o.createElement("button",(0,r.Z)({},(0,u._)(n.btnOptions).button,e),e.children))}function P(e){const{kind:n,...t}=e,i=(0,l.dn)(n);return o.createElement("button",(0,r.Z)({},(0,u._)(i.btnOptions).button,t),e.children)}},80940:function(e,n,t){var r=t(81648),o=t(45721),i=t(77674),a=t(25163),l=t(40736),s=t(11175);n.Z=function(){const e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1),c=(0,o.useCallback)((()=>{t(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a._)().button,{onClick:function(){t(!0)},ref:e}),"Confirm payment"),n&&(0,i.createPortal)(o.createElement(s.bZ,{bodyId:"non-destructiveAlert-body",headingId:"non-destructiveAlert-heading",id:"non-destructive-alert",onClose:c,ref:e},o.createElement(s.MJ,{kind:"non-destructive"},o.createElement(s.Y9,{id:"non-destructiveAlert-heading"},"Confirm payment")),o.createElement(s.T2,{id:"non-destructiveAlert-body"},o.createElement(s.QP,null,"Are you sure you want to make this payment?")),o.createElement(s.qM,null,o.createElement(s.rq,{onClick:c},"Cancel"),o.createElement(s.FB,{kind:"non-destructive"},"Confirm"))),document.body))}},61884:function(e,n,t){var r=t(81648),o=t(45721),i=t(77674),a=t(25163),l=t(40736),s=t(11175);n.Z=function(){const e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1),c=(0,o.useCallback)((()=>{t(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a._)({sentiment:"danger"}).button,{onClick:function(){t(!0)},ref:e}),"Delete channel"),n&&(0,i.createPortal)(o.createElement(s.bZ,{bodyId:"destructiveAlert-body",headingId:"destructiveAlert-heading",id:"destructive-alert",onClose:c,ref:e},o.createElement(s.MJ,{kind:"destructive"},o.createElement(s.Y9,{id:"destructiveAlert-heading"},"Delete channel?")),o.createElement(s.T2,{id:"destructiveAlert-body"},o.createElement(s.QP,null,"Are you sure you want to delete this channel? This action cannot be undone.")),o.createElement(s.qM,null,o.createElement(s.rq,{onClick:c},"Cancel"),o.createElement(s.FB,{kind:"destructive"},"Delete"))),document.body))}},40736:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function a(e){void 0===e&&(e=i);const n=e.type??i.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",a={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:o[n],style:a},e.children)}},15566:function(e,n,t){t.d(n,{dS:function(){return c},fK:function(){return s},C9:function(){return u},ZP:function(){return m}});var r=t(45721),o=t(84140),i="linkList_sLwJ",a="linkItem_ESvF";function l(e){return r.createElement("li",{className:a},r.createElement(o.Z,e,e.children))}function s(e){return r.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return r.createElement(l,{href:e.href},"View on Figma")}function u(e){return r.createElement("ul",{className:i},e.children)}function m(e){const{figma:n,github:t}=e;return r.createElement("ul",{className:i},t&&r.createElement(s,{href:t}),n&&r.createElement(c,{href:n}))}},45945:function(e,n,t){t(45721)},84140:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(45721),o=t(33398),i=t(4613),a=t(26296),l=t(25292);function s(e){const{href:n}=e,t=(0,i.L)({ariaHidden:!0,size:"s"}),s=n.includes("github")?a.Z:l.Z;return r.createElement(o.h,e,r.createElement(s,t),e.children)}},74910:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(81648),o=(t(45721),t(70167)),i=t(80940),a=t(61884),l=t(15566);t(45945);const s={tags:["dialog","user confirmation"],title:"Confirm Dialog"},c=void 0,u={unversionedId:"reference/components/confirm-dialog",id:"version-0.4.1/reference/components/confirm-dialog",title:"Confirm Dialog",description:"Used to interrupt the user with a mandatory confirmation or action.",source:"@site/versioned_docs/version-0.4.1/reference/components/confirm-dialog.mdx",sourceDirName:"reference/components",slug:"/reference/components/confirm-dialog",permalink:"/docs/reference/components/confirm-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/confirm-dialog.mdx",tags:[{label:"dialog",permalink:"/docs/tags/dialog"},{label:"user confirmation",permalink:"/docs/tags/user-confirmation"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["dialog","user confirmation"],title:"Confirm Dialog"},sidebar:"reference",previous:{title:"Circular Progress",permalink:"/docs/reference/components/circular-progress"},next:{title:"Field Messages",permalink:"/docs/reference/components/field-message"}},m={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Destructive",id:"destructive",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:d};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a mandatory confirmation or action."),(0,o.kt)(l.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/ConfirmDialog",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getConfirmDialogProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogOptions {\n  kind?: 'non-destructive' | 'destructive'\n  id: string\n  headerId: string\n  bodyId: string\n}\n\ngetConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Header"),(0,o.kt)("li",{parentName:"ol"},"Title"),(0,o.kt)("li",{parentName:"ol"},"Section"),(0,o.kt)("li",{parentName:"ol"},"Body"),(0,o.kt)("li",{parentName:"ol"},"Button Group"),(0,o.kt)("li",{parentName:"ol"},"Cancel Button"),(0,o.kt)("li",{parentName:"ol"},"Back Drop")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"non-destructive"},"Non-destructive"),(0,o.kt)("p",null,"Use a non-destructive Confirm Dialog when you need a confirmation that does not result in a destructive behavior."),(0,o.kt)(i.Z,{mdxType:"BasicConfirmDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Confirm Dialog Component."',showLineNumbers:!0,title:'"Confirm',Dialog:!0,'Component."':!0},"import { forwardRef, memo, useEffect, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport {\n  getButtonProps,\n  getConfirmDialogProps,\n  getIconProps,\n} from '@pluralsight/headless-styles'\nimport { DangerDiamondFilledIcon } from '@pluralsight/icons'\n\nfunction ConfirmDialogEl(props, triggerRef) {\n  const { onClose, ...confirmProps } = props\n  const wrapperRef = useRef(null)\n  const confirm = getConfirmDialogProps(confirmProps)\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n  const isDestructive = confirmProps.kind === 'destructive'\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...confirm.backdrop}>\n      <div {...confirm.focusGuard} />\n\n      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...confirm.header}>\n            {isDestructive && (\n              <span {...confirm.iconWrapper}>\n                <DangerDiamondFilledIcon\n                  {...getIconProps(confirm.iconOptions)}\n                />\n              </span>\n            )}\n            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n          </header>\n          <p {...confirm.confirmBody}>{props.body}</p>\n          <footer {...confirm.buttonGroup}>\n            <button\n              {...getButtonProps(confirm.cancelBtnOptions).button}\n              onClick={onClose}\n            >\n              Cancel\n            </button>\n            <button {...getButtonProps(confirm.agreeBtnOptions).button}>\n              {props.confirmText}\n            </button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...confirm.focusGuard} />\n    </div>\n  )\n}\n\nconst ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n\nexport default ConfirmDialog\n")),(0,o.kt)("h3",{id:"destructive"},"Destructive"),(0,o.kt)("p",null,"When you need a confirmation from a user that will result in a destructive action."),(0,o.kt)(a.Z,{mdxType:"DestructiveConfirmDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"getConfirmDialogProps({ kind: 'destructive' })\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can copy and paste the example from the ",(0,o.kt)("a",{parentName:"p",href:"#non-destructive"},"non-destructive section")," and pass ",(0,o.kt)("inlineCode",{parentName:"p"},'kind="destructive"')," to the component to get this same result.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": id, headerId, and bodyId properties that accept a String value to connect and setup Accessibility properties for all the elements used within the Confirm Dialog. An optional kind property that accepts a String value of ",(0,o.kt)("inlineCode",{parentName:"li"},"'non-destructive' | 'destructive'")," to determine the styling of the Confirm Dialog.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object matching the ",(0,o.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and ",(0,o.kt)("inlineCode",{parentName:"p"},"iconWrapper")," to use on the element wrapping the Icon. Likewise it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelBtnOptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"agreeBtnOptions")," to pass into the Button API as parameters. Last, an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"focusGuard")," property to spread on a leading and trailing element within the Dialog for focus protections."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("p",null,"Confirm dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,o.kt)("inlineCode",{parentName:"p"},"window.confirm()")," function."),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the Confirm Dialog when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the Modal when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," keep Confirm Dialog layout unaltered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Confirm Dialog."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Confirm Dialog, Button, and Icon APIs combined with semantic HTML allow the Confirm Dialog to be fully accessible and screen-readable."))}f.isMDXComponent=!0}}]);