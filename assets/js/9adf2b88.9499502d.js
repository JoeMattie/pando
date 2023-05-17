"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{40736:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:o[t],style:r},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return d},fK:function(){return c},C9:function(){return u},ZP:function(){return p}});var a=n(81648),o=n(45721),i=n(98255),r=n(84140),l="grid_cC7H";function s(e){return o.createElement("li",(0,i.a)({colSpan:2}),o.createElement(r.Z,e,e.children))}function c(e){return o.createElement(s,{href:e.href},e.children??"View on Github")}function d(e){return o.createElement(s,{href:e.href},"View on Figma")}function u(e){const{className:t,...n}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,a.Z)({className:`${t} ${l}`},n),e.children)}function p(e){const{figma:t,github:n}=e,{className:r,...s}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,a.Z)({className:`${r} ${l}`},s),n&&o.createElement(c,{href:n}),t&&o.createElement(d,{href:t}))}},45945:function(e,t,n){n(45721)},92587:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(81648),o=n(45721),i=n(65452),r=n(38217),l=n(98255),s=n(40736),c=n(44657);function d(e){const{onClick:t,...n}=e,r=(0,c.g)(n),{value:l,...s}=(0,i.g)({...n,value:e.label}),{checked:d,...u}=r.input;return o.createElement("label",r.radioContainer,t&&o.createElement("input",(0,a.Z)({},u,{onChange:t,checked:d})),!t&&o.createElement("input",(0,a.Z)({},u,{defaultChecked:d})),o.createElement("span",r.radioControl),o.createElement("span",s,l))}function u(e){const{value:t,...n}=(0,i.g)(e);return o.createElement("label",(0,a.Z)({},n,{style:{display:"initial"}}),t)}function p(){const{control:e,fieldOptions:t}=(0,r.g)();return o.createElement("div",(0,a.Z)({},e,(0,l.a)({colSpan:6})),o.createElement(u,{htmlFor:"checked-example",value:"checked:"}),o.createElement(d,(0,a.Z)({},t,{checked:!0})))}function m(){const{control:e,fieldOptions:t}=(0,r.g)({disabled:!0});return o.createElement("div",(0,a.Z)({},e,(0,l.a)({colSpan:6})),o.createElement(u,{htmlFor:"disabled-example",value:"disabled:"}),o.createElement(d,t))}function f(){const{control:e,fieldOptions:t}=(0,r.g)({invalid:!0});return o.createElement("div",(0,a.Z)({},e,(0,l.a)({colSpan:6})),o.createElement(u,{htmlFor:"invalid-example",value:"invalid:"}),o.createElement(d,(0,a.Z)({},t,{checked:!0})))}function g(){const{control:e,fieldOptions:t}=(0,r.g)({readOnly:!0});return o.createElement("div",(0,a.Z)({},e,(0,l.a)({colSpan:6})),o.createElement(u,{htmlFor:"readOnly-example",value:"readOnly:"}),o.createElement(d,t))}function h(e){const{control:t,fieldOptions:n}=(0,r.g)({required:!0});return o.createElement("div",(0,a.Z)({},t,(0,l.a)({colSpan:6})),o.createElement(u,{htmlFor:"required-example",value:"required:"}),o.createElement(d,(0,a.Z)({},n,{checked:e.checked,onClick:e.onClick})))}var k=function(){const[e,t]=(0,o.useState)(!1);return o.createElement(s.Z,null,o.createElement("div",(0,a.Z)({"data-site-override":"initialTextAlign"},(0,l.g)({cols:12,gap:16})),o.createElement(p,null),o.createElement(m,null),o.createElement(f,null),o.createElement(g,null),o.createElement(h,{checked:e,onClick:function(e){t(e.target.checked)}})))}},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),o=n(10563),i=n(89297),r=n(88354),l=n(48481);function s(e){const{href:t}=e,n=(0,o.g)({href:t}),s=(0,i.g)(n.iconOptions),c=t.includes("github")?r.Z:l.Z;return a.createElement("a",n.link,a.createElement(c,s),e.children)}},4833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(81648),o=(n(45721),n(70167)),i=n(92587),r=n(15566);n(45945);const l={tags:["single-select","field","form"],title:"Radio"},s=void 0,c={unversionedId:"reference/components/radio",id:"version-0.4.1/reference/components/radio",title:"Radio",description:"Used when when only one choice may be selected from a series of options.",source:"@site/versioned_docs/version-0.4.1/reference/components/radio.mdx",sourceDirName:"reference/components",slug:"/reference/components/radio",permalink:"/docs/reference/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/radio.mdx",tags:[{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["single-select","field","form"],title:"Radio"},sidebar:"reference",previous:{title:"Progress",permalink:"/docs/reference/components/progress"},next:{title:"Select",permalink:"/docs/reference/components/select"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Radio",id:"basic-radio",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used when when only one choice may be selected from a series of options."),(0,o.kt)(r.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Radio",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getRadioProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RadioOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  value: string\n}\n\ngetRadioProps(options?: RadioOptions)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { RadioOptions } from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Control"),(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Label")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-radio"},"Basic Radio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Radio() {\n  const { control, fieldOptions } = getFormControlProps({\n    groupType: 'radiogroup',\n  })\n  const radioProps = getRadioProps({\n    ...fieldOptions,\n    checked: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    value: 'Basic Example',\n  })\n  const { checked, ...inputProps } = radioProps.input\n\n  return (\n    <div {...control}>\n      <label {...radioProps.radioContainer}>\n        <input {...inputProps} defaultChecked={checked} />\n        <span {...radioProps.radioControl} />\n        <span {...labelProps}>{value}</span>\n      </label>\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)(i.Z,{mdxType:"RadioStates"}),(0,o.kt)("admonition",{title:"Form field and state",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getRadioProps(options?: RadioOptions)\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Radio state. An id and optional name property that accept a String value which connected Accessibility properties from the label to the Radio. A checked property that accepts a Boolean value to determine the styling of the Radio state. A value property that accepts a String for form submission.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object matching the ",(0,o.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use multiple Radios in a vertical list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use multiple Radios in a single row."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Radio."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Radio inline without a Label."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Radio for giving users a group of options from which they can select a single item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Radio for showing/hiding content."),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Radio, and Icon APIs combined with semantic HTML allow the Radio to be fully accessible and screen-readable."))}m.isMDXComponent=!0}}]);