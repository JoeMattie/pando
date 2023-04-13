"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4873],{72032:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(81648),a=n(45721),o=n(31825),l=n(61471),i="grid_cC7H";function s(e){return a.createElement("li",(0,o.a)({colSpan:2}),a.createElement(l.Z,e,e.children))}function p(e){const{figma:t,github:n}=e,{className:l,...p}=(0,o.g)({cols:12,gap:8});return a.createElement("ul",(0,r.Z)({className:`${l} ${i}`},p),n&&a.createElement(s,{href:n},"View on Github"),t&&a.createElement(s,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(45721),a=n(94697),o=n(23038),l=n(31026),i=n(6115);function s(e){const{href:t}=e,n=(0,a.g)({href:t}),s=(0,o.g)(n.iconOptions),p=t.includes("github")?l.Z:i.Z;return r.createElement("a",n.link,r.createElement(p,s),e.children)}},78855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(81648),a=(n(45721),n(70167)),o=n(72032);n(27505);const l={tags:["dialog","user confirmation","prompt"],title:"Alert Dialog"},i=void 0,s={unversionedId:"reference/components/alert",id:"reference/components/alert",title:"Alert Dialog",description:"A composable solution to create different Alert Dialog components.",source:"@site/docs/reference/components/alert.mdx",sourceDirName:"reference/components",slug:"/reference/components/alert",permalink:"/docs/next/reference/components/alert",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/alert.mdx",tags:[{label:"dialog",permalink:"/docs/next/tags/dialog"},{label:"user confirmation",permalink:"/docs/next/tags/user-confirmation"},{label:"prompt",permalink:"/docs/next/tags/prompt"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["dialog","user confirmation","prompt"],title:"Alert Dialog"},sidebar:"reference",previous:{title:"Admonition",permalink:"/docs/next/reference/components/admonition"},next:{title:"Avatar",permalink:"/docs/next/reference/components/avatar"}},p={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Alert Backdrop",id:"alert-backdrop",level:3},{value:"Alert",id:"alert",level:3},{value:"Alert Header",id:"alert-header",level:3},{value:"Alert Heading",id:"alert-heading",level:3},{value:"Alert Body",id:"alert-body",level:3},{value:"Alert Text",id:"alert-text",level:3},{value:"Alert Label",id:"alert-label",level:3},{value:"Alert Input",id:"alert-input",level:3},{value:"Alert Footer",id:"alert-footer",level:3},{value:"Alert Cancel Button",id:"alert-cancel-button",level:3},{value:"Alert Confirm Button",id:"alert-confirm-button",level:3},{value:"Reference",id:"reference",level:2},{value:"getAlertBackdropProps",id:"getalertbackdropprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAlertProps",id:"getalertprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getAlertHeaderProps",id:"getalertheaderprops",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getAlertHeadingProps",id:"getalertheadingprops",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getAlertBodyProps",id:"getalertbodyprops",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getAlertLabelProps",id:"getalertlabelprops",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getAlertInputProps",id:"getalertinputprops",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"getAlertFooterProps",id:"getalertfooterprops",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"getAlertCancelButtonProps",id:"getalertcancelbuttonprops",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"getAlertConfirmButtonProps",id:"getalertconfirmbuttonprops",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"A composable solution to create different Alert Dialog components."),(0,a.kt)(o.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Alert",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  getAlertBackdropProps,\n  getAlertBodyProps,\n  getAlertCancelButtonProps,\n  getAlertConfirmButtonProps,\n  getAlertFooterProps,\n  getAlertHeaderProps,\n  getAlertHeadingProps,\n  getAlertInputProps,\n  getAlertLabelProps,\n  getAlertProps,\n} from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { DialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container / Wrapper"),(0,a.kt)("li",{parentName:"ol"},"Header"),(0,a.kt)("li",{parentName:"ol"},"Heading"),(0,a.kt)("li",{parentName:"ol"},"Section"),(0,a.kt)("li",{parentName:"ol"},"Body"),(0,a.kt)("li",{parentName:"ol"},"Label (optional)"),(0,a.kt)("li",{parentName:"ol"},"Input (optional)"),(0,a.kt)("li",{parentName:"ol"},"Footer / Button Group"),(0,a.kt)("li",{parentName:"ol"},"Cancel Button"),(0,a.kt)("li",{parentName:"ol"},"Confirm Button"),(0,a.kt)("li",{parentName:"ol"},"Back Drop"),(0,a.kt)("li",{parentName:"ol"},"Focus Guards")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The Alert Dialog is a composable solution to create different Alert Dialog components like the Confirm Dialog and Prompt Dialog by combining the different parts of the Alert Dialog API."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/confirm-dialog"},"Confirm Dialog")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/components/prompt-dialog"},"Prompt Dialog")," for examples of how to use the Alert Dialog."),(0,a.kt)("h3",{id:"alert-backdrop"},"Alert Backdrop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertBackdrop component"',showLineNumbers:!0,title:'"AlertBackdrop','component"':!0},"export function AlertBackdrop(props) {\n  const { onClose, ...alertOptions } = props\n  const wrapperRef = useRef(null)\n  const { focusGuard, ...backdropProps } = getAlertBackdropProps(alertOptions)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  return (\n    <div {...backdropProps.backdrop}>\n      <div {...focusGuard} />\n      <div\n        {...backdropProps.wrapper}\n        ref={wrapperRef}\n        onClick={handleBackdropClick}\n      >\n        {props.children}\n      </div>\n      <div {...focusGuard} />\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"alert"},"Alert"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Alert component"',showLineNumbers:!0,title:'"Alert','component"':!0},"function AlertEl(props, triggerRef) {\n  const { onClose, children, ...alertBackdropOptions } = props\n  const alertProps = getAlertProps()\n  const { ref, onKeyDown } = useFocusTrap(triggerRef)\n\n  return (\n    <AlertBackdrop onClose={onClose} {...alertBackdropOptions}>\n      <section {...alertProps} ref={ref} onKeyDown={onKeyDown}>\n        {children}\n      </section>\n    </AlertBackdrop>\n  )\n}\n\nexport const Alert = memo(forwardRef(AlertEl))\n")),(0,a.kt)("h3",{id:"alert-header"},"Alert Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertHeader component"',showLineNumbers:!0,title:'"AlertHeader','component"':!0},"export function AlertHeader(props) {\n  const headerProps = getAlertHeaderProps(props.kind)\n\n  return (\n    <header {...headerProps.header}>\n      {props.kind === 'destructive' && (\n        <span {...headerProps.iconWrapper}>\n          <DangerDiamondFilledIcon {...getIconProps(headerProps.iconOptions)} />\n        </span>\n      )}\n      {props.children}\n    </header>\n  )\n}\n")),(0,a.kt)("h3",{id:"alert-heading"},"Alert Heading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertHeading component"',showLineNumbers:!0,title:'"AlertHeading','component"':!0},"export function AlertHeading(props) {\n  const heading = getAlertHeadingProps(props.id)\n  return <h4 {...heading}>{props.children}</h4>\n}\n")),(0,a.kt)("h3",{id:"alert-body"},"Alert Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertBody component"',showLineNumbers:!0,title:'"AlertBody','component"':!0},"export function AlertBody(props) {\n  const body = getAlertBodyProps(props.id)\n  return <div {...body}>{props.children}</div>\n}\n")),(0,a.kt)("h3",{id:"alert-text"},"Alert Text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertText component"',showLineNumbers:!0,title:'"AlertText','component"':!0},"export function AlertText(props) {\n  return <p>{props.children}</p>\n}\n")),(0,a.kt)("h3",{id:"alert-label"},"Alert Label"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertLabel component"',showLineNumbers:!0,title:'"AlertLabel','component"':!0},"export function AlertLabel(props) {\n  const label = getAlertLabelProps(props.htmlFor)\n  return <label {...label}>{props.children}</label>\n}\n")),(0,a.kt)("h3",{id:"alert-input"},"Alert Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertInput component"',showLineNumbers:!0,title:'"AlertInput','component"':!0},"export function AlertInput(props) {\n  const { onChange, ...inputOptions } = props\n  const { fieldOptions } = getFormControlProps({\n    invalid: Boolean(props.value) && props.value !== props.confirmKey,\n  })\n  const input = getAlertInputProps({\n    ...fieldOptions,\n    ...inputOptions,\n  })\n\n  return (\n    <div {...input.inputWrapper}>\n      <SingleInput {...input.inputOptions} onChange={onChange} />\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"alert-footer"},"Alert Footer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertFooter component"',showLineNumbers:!0,title:'"AlertFooter','component"':!0},"export function AlertFooter(props) {\n  const footer = getAlertFooterProps()\n  return <footer {...footer}>{props.children}</footer>\n}\n")),(0,a.kt)("h3",{id:"alert-cancel-button"},"Alert Cancel Button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertCancelButton component"',showLineNumbers:!0,title:'"AlertCancelButton','component"':!0},"export function AlertCancelButton(props) {\n  const { children, ...nativeBtnProps } = props\n  const btnProps = getAlertCancelButtonProps()\n\n  return (\n    <span {...btnProps.button}>\n      <button\n        {...getButtonProps(btnProps.btnOptions).button}\n        {...nativeBtnProps}\n      >\n        {children}\n      </button>\n    </span>\n  )\n}\n")),(0,a.kt)("h3",{id:"alert-confirm-button"},"Alert Confirm Button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="AlertConfirmButton component"',showLineNumbers:!0,title:'"AlertConfirmButton','component"':!0},"export function AlertActionButton(props) {\n  const { kind, ...nativeBtnProps } = props\n  const btnProps = getAlertConfirmButtonProps(kind)\n\n  return (\n    <button {...getButtonProps(btnProps.btnOptions).button} {...nativeBtnProps}>\n      {props.children}\n    </button>\n  )\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"getalertbackdropprops"},"getAlertBackdropProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertBackdropProps(options: DialogOptions): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface DialogOptions {\n  bodyId: string\n  headingId?: string\n  id: string\n}\n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the ",(0,a.kt)("a",{parentName:"li",href:"#anatomy"},"anatomy")," parts of the Alert Dialog containing the Backdrop, Focus Guards, and Wrapper."),(0,a.kt)("li",{parentName:"ol"},"A className list for each anatomy part (#1) which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-${anatomyPart}"),"."),(0,a.kt)("li",{parentName:"ol"},"A11y properties for each anatomy part (#1).")),(0,a.kt)("h3",{id:"getalertprops"},"getAlertProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertProps(): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"This function does not accept any parameters."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-section"),".")),(0,a.kt)("h3",{id:"getalertheaderprops"},"getAlertHeaderProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertHeaderProps(kind: ConfirmDialogKind): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type ConfirmDialogKind = 'non-destructive' | 'destructive'\n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing a header Property which is an Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-header"),"."),(0,a.kt)("li",{parentName:"ol"},"An optional iconOptions property which is an Object containing the preset options for the Icon API."),(0,a.kt)("li",{parentName:"ol"},"An optional iconWrapper Property which is an Object containing the className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-icon"),".")),(0,a.kt)("h3",{id:"getalertheadingprops"},"getAlertHeadingProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertHeadingProps(id: string): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("p",null,"This function accepts a string parameter which is the id of the heading element."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-heading"),".")),(0,a.kt)("h3",{id:"getalertbodyprops"},"getAlertBodyProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertBodyProps(id: string): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("p",null,"This function accepts a string parameter which is the id of the body element."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-body"),".")),(0,a.kt)("h3",{id:"getalertlabelprops"},"getAlertLabelProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertLabelProps(htmlFor: string): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("p",null,"This function accepts a string parameter which is the htmlFor of the label element."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-label"),".")),(0,a.kt)("h3",{id:"getalertinputprops"},"getAlertInputProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertInputProps(options: InputOptions): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./input#import"},"See InputOptions")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An inputOptions property containing the preset options for the Input API."),(0,a.kt)("li",{parentName:"ol"},"An inputWrapper properity containing an of the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-input-wrapper"),".")),(0,a.kt)("h3",{id:"getalertfooterprops"},"getAlertFooterProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertFooterProps(): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-7"},"Parameters"),(0,a.kt)("p",null,"This function does not accept any parameters."),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Object containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-footer"),".")),(0,a.kt)("h3",{id:"getalertcancelbuttonprops"},"getAlertCancelButtonProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertCancelButtonProps(): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-8"},"Parameters"),(0,a.kt)("p",null,"This function does not accept any parameters."),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A buttonOptions property containing the preset options for the Button API."),(0,a.kt)("li",{parentName:"ol"},"A button property containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-cancel"),".")),(0,a.kt)("h3",{id:"getalertconfirmbuttonprops"},"getAlertConfirmButtonProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getAlertConfirmButtonProps(kind: ConfirmDialogKind): ReturnProps\n")),(0,a.kt)("h4",{id:"parameters-9"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type ConfirmDialogKind = 'non-destructive' | 'destructive'\n")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A buttonOptions property containing the preset options for the Button API."),(0,a.kt)("li",{parentName:"ol"},"A button property containing the a11y properties and a className list which includes an unused class consisting of the naming pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"pando-alert-confirm"),".")),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"Alert dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed versions of any browser's native alert dialog functions."),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Alert Dialog parts to create any type of Alert Dialog you need."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use Alert Dialog parts to create a Modal."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," only use the Alert Dialog parts that are necessary for your Dialog."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional components outside of what is provided in the Alert Dialog."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Alert Dialog, Button, and Icon APIs combined with semantic HTML allow the Alert Dialog to be fully accessible and screen-readable."))}d.isMDXComponent=!0},31825:function(e,t,n){n.d(t,{a:function(){return u},g:function(){return p}});var r=n(39112),a=n(58105),o=n(50114);const l="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,o.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="ps-grid";function p(e){const t=(0,a.g)(e);return{...(0,a.c)(t),...(0,r.c)(s,l)}}function u(e){const t=(0,a.a)(e);return{...(0,a.b)(t),...(0,r.c)("ps-grid-item",i)}}},58105:function(e,t,n){n.d(t,{a:function(){return o},b:function(){return i},c:function(){return l},g:function(){return a}});const r={6:.375,8:.5,12:.75,16:1,32:2};function a(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function o(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function l(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${r[e.gap]}rem`}}}function i(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);