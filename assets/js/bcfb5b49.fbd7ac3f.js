"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4385],{7426:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(81648),a=n(45721),l=n(78949),r=n(26390),i=n(40736),c=n(70334),s=n(22383),u=n(69662),m=n(13872);function p(e){const{checked:t}=e,n=(0,c.g)(e.iconOptions);return t?"true"===e.indeterminate?a.createElement(u.Z,n):a.createElement(m.Z,n):null}function d(e){const{onClick:t}=e,{fieldOptions:n}=(0,l.g)({...e}),i=(0,s.g)({...n,...e}),{value:c,...u}=(0,r.g)({...e,value:e.label}),{checked:m,...d}=i.input;return a.createElement("label",i.checkboxContainer,t&&a.createElement("input",(0,o.Z)({},d,{checked:m,onChange:e.onClick})),!t&&a.createElement("input",(0,o.Z)({},d,{defaultChecked:m})),a.createElement("span",i.checkboxControl,a.createElement(p,{checked:m,iconOptions:i.iconOptions,indeterminate:i.input.indeterminate})),a.createElement("span",u,c))}const h={justifyContent:"space-between",width:"100%"};function k(){const{control:e,fieldOptions:t}=(0,l.g)(),{value:n,...i}=(0,r.g)({htmlFor:"checked-example",value:"checked:"});return a.createElement("div",(0,o.Z)({},e,{style:{...h}}),a.createElement("label",i,n),a.createElement(d,(0,o.Z)({},t,{checked:!0})))}function b(){const{control:e,fieldOptions:t}=(0,l.g)(),{value:n,...i}=(0,r.g)({htmlFor:"indeterminate-example",value:"indeterminate:"});return a.createElement("div",(0,o.Z)({},e,{style:{...h}}),a.createElement("label",i,n),a.createElement(d,(0,o.Z)({},t,{checked:!0,indeterminate:!0})))}function g(){const{control:e,fieldOptions:t}=(0,l.g)({disabled:!0}),{value:n,...i}=(0,r.g)({htmlFor:"disabled-exampled",value:"disabled:"});return a.createElement("div",(0,o.Z)({},e,{style:{...h}}),a.createElement("label",i,n),a.createElement(d,t))}function f(){const{control:e,fieldOptions:t}=(0,l.g)({invalid:!0}),{value:n,...i}=(0,r.g)({htmlFor:"invalid-exampled",value:"invalid:"});return a.createElement("div",(0,o.Z)({},e,{style:h}),a.createElement("label",i,n),a.createElement(d,(0,o.Z)({},t,{checked:!0})))}function v(){const{control:e,fieldOptions:t}=(0,l.g)({readOnly:!0}),{value:n,...i}=(0,r.g)({htmlFor:"readOnly-exampled",value:"readOnly:"});return a.createElement("div",(0,o.Z)({},e,{style:{...h}}),a.createElement("label",i,n),a.createElement(d,t))}function x(e){const{control:t,fieldOptions:n}=(0,l.g)({required:!0}),i=(0,r.g)({htmlFor:"required-exampled",value:""});return a.createElement("div",(0,o.Z)({},t,{style:{...h}}),a.createElement("label",i,"required:"),a.createElement(d,(0,o.Z)({},n,{checked:e.checked,onClick:e.onClick})))}var C=function(){const[e,t]=(0,a.useState)(!1);return a.createElement(i.Z,null,a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 5rem",width:"75%"}},a.createElement(k,null),a.createElement(g,null),a.createElement(f,null),a.createElement(v,null),a.createElement(x,{checked:e,onClick:function(e){t(e.target.checked)}}),a.createElement(b,null)))}},40736:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=l);const t=e.type??l.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:r},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return u},fK:function(){return s},C9:function(){return m},ZP:function(){return p}});var o=n(81648),a=n(45721),l=n(24351),r=n(84140),i="grid_cC7H";function c(e){return a.createElement("li",(0,l.a)({colSpan:2}),a.createElement(r.Z,e,e.children))}function s(e){return a.createElement(c,{href:e.href},e.children??"View on Github")}function u(e){return a.createElement(c,{href:e.href},"View on Figma")}function m(e){const{className:t,...n}=(0,l.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${t} ${i}`},n),e.children)}function p(e){const{figma:t,github:n}=e,{className:r,...c}=(0,l.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${r} ${i}`},c),n&&a.createElement(s,{href:n}),t&&a.createElement(u,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(45721),a=n(62806),l=n(70334),r=n(29878),i=n(60487);function c(e){const{href:t}=e,n=(0,a.g)({href:t}),c=(0,l.g)(n.iconOptions),s=t.includes("github")?r.Z:i.Z;return o.createElement("a",n.link,o.createElement(s,c),e.children)}},72753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var o=n(81648),a=(n(45721),n(70167)),l=n(7426),r=n(15566);n(45945);const i={tags:["multi-select","field","form"],title:"Checkbox"},c=void 0,s={unversionedId:"reference/components/checkbox",id:"version-0.4.1/reference/components/checkbox",title:"Checkbox",description:"Used when a user needs to select multiple values from options in a form.",source:"@site/versioned_docs/version-0.4.1/reference/components/checkbox.mdx",sourceDirName:"reference/components",slug:"/reference/components/checkbox",permalink:"/docs/reference/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/checkbox.mdx",tags:[{label:"multi-select",permalink:"/docs/tags/multi-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["multi-select","field","form"],title:"Checkbox"},sidebar:"reference",previous:{title:"Button",permalink:"/docs/reference/components/button"},next:{title:"Circular Progress",permalink:"/docs/reference/components/circular-progress"}},u={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used when a user needs to select multiple values from options in a form."),(0,a.kt)(r.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  value: string\n}\n\ngetCheckboxProps(options?: CheckboxOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { CheckboxOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Control"),(0,a.kt)("li",{parentName:"ol"},"Input"),(0,a.kt)("li",{parentName:"ol"},"Label")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicCheckbox() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const checkbox = getCheckboxProps({ ...fieldOptions, checked })\n  const { value, ...labelProps } = getFormLabelProps({\n    value: 'Sign up for something.',\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={handleChange} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <CheckIcon {...icon} />}\n      </span>\n      <span {...labelProps}>{value}</span>\n    </label>\n  )\n}\n")),(0,a.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function IndeterminateCheckbox() {\n  const { fieldOptions } = getFormControlProps()\n  const checkbox = getCheckboxProps({\n    ...fieldOptions,\n    indeterminate: true,\n    checked: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    value: 'Sign up for something.',\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={() => null} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <IndeterminateIcon {...icon} />}\n      </span>\n    </label>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="How to determine Indeterminate."',showLineNumbers:!0,title:'"How',to:!0,determine:!0,'Indeterminate."':!0},"const [checkboxOptions, setCheckboxOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst checkedItems = Object.keys(checkboxOptions).map((optionItem) => (\n  return checkboxOptions[optionItem]\n))\nconst allChecked = checkedItems.every(Boolean)\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked\n")),(0,a.kt)("h3",{id:"states"},"States"),(0,a.kt)(l.Z,{mdxType:"CheckboxStates"}),(0,a.kt)("admonition",{title:"Form field and state",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getCheckboxProps(options?: CheckboxOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Checkbox state. An id and optional name property that accept a String value which connect Accessibility properties from the label to the Checkbox. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Checkbox state. A value property that accepts a String for form submission.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"layout"},"Layout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use multiple Checkboxes in a vertical list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use multiple Checkboxes in a single row."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Checkbox."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox inline without a Label."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use a Checkbox for giving users an option to "opt-in" to a choice.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox for showing/hiding content."),(0,a.kt)("h3",{id:"interactions"},"Interactions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the indeterminate state for a parent option of a nested group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the indeterminate state for a single option within a group."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Checkbox, and Icon APIs combined with semantic HTML allow the Checkbox to be fully accessible and screen-readable."))}d.isMDXComponent=!0}}]);