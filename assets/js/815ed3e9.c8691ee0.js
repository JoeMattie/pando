"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6250],{72032:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),r=n(45721),i=n(71397),o=n(61471),l="grid_cC7H";function s(e){return r.createElement("li",(0,i.a)({colSpan:2}),r.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,i.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${o} ${l}`},c),n&&r.createElement(s,{href:n},"View on Github"),t&&r.createElement(s,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),r=n(64965),i=n(4094),o=n(31026),l=n(6115);function s(e){const{href:t}=e,n=(0,r.g)({href:t}),s=(0,i.g)(n.iconOptions),c=t.includes("github")?o.Z:l.Z;return a.createElement("a",n.link,a.createElement(c,s),e.children)}},88882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(81648),r=(n(45721),n(70167)),i=n(72032);n(27505);const o={tags:["field","forms"],title:"Textarea"},l=void 0,s={unversionedId:"reference/components/text-area",id:"reference/components/text-area",title:"Textarea",description:"Used to collect form field information in a multi-line input.",source:"@site/docs/reference/components/text-area.mdx",sourceDirName:"reference/components",slug:"/reference/components/text-area",permalink:"/docs/next/reference/components/text-area",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/text-area.mdx",tags:[{label:"field",permalink:"/docs/next/tags/field"},{label:"forms",permalink:"/docs/next/tags/forms"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field","forms"],title:"Textarea"},sidebar:"reference",previous:{title:"Tag",permalink:"/docs/next/reference/components/tag"},next:{title:"Text Link",permalink:"/docs/next/reference/components/text-link"}},c={},p=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to collect form field information in a multi-line input."),(0,r.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Textarea",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Form Control"),(0,r.kt)("li",{parentName:"ol"},"Label"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Message")),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTextareaProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { TextareaOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,r.kt)("h3",{id:"basic-example"},"Basic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Textarea() {\n  const formId = 'description'\n  const [description, setDescription] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Why did you give that answer?',\n  })\n  const textareaProps = getTextareaProps({\n    ...fieldOptions,\n    id: formId,\n    name: 'basic-form',\n    type: 'description',\n    value: description,\n  })\n\n  function handleChange(e) {\n    setDescription(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <textarea {...textareaProps} onChange={handleChange} />\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTextareaProps(options?: TextareaOptions): ReturnProps\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TextareaOptions {\n  classNames?: string[]\n  describedBy?: string\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  placeholder: string\n  readOnly?: boolean\n  required?: boolean\n  resize?: 'horizontal' | 'vertical' | 'none' | 'initial'\n  value: string\n}\n")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An Object matching the ",(0,r.kt)("a",{parentName:"li",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"li"},"className")," and a11y properties relevant to the control element including an unused class consisting of the naming pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"pando-textarea"),".")),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Textarea if you need to collect a multi-line response from a user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use an Input to collect a multi-line response from a user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Textarea API combined with semantic HTML allow the Textarea to be fully accessible and screen-readable."))}m.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return c}});var a=n(1801),r=n(23909),i=n(31519);const o="gridCSS-module_gridContainer__sQmao",l="gridCSS-module_gridItem__nVMyV";(0,i.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="pando-grid";function c(e){const t=(0,r.g)(e);return{...(0,r.c)(t),...(0,a.c)(s,o,...t.classNames)}}function p(e){const t=(0,r.a)(e);return{...(0,r.b)(t),...(0,a.c)(`${s}-item`,l,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return i},b:function(){return l},c:function(){return o},g:function(){return r}});const a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function i(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function l(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);