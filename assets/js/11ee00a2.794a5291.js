"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8694],{72032:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(81648),i=t(45721),o=t(31825),r=t(61471),l="grid_cC7H";function s(e){return i.createElement("li",(0,o.a)({colSpan:2}),i.createElement(r.Z,e,e.children))}function p(e){const{figma:n,github:t}=e,{className:r,...p}=(0,o.g)({cols:12,gap:8});return i.createElement("ul",(0,a.Z)({className:`${r} ${l}`},p),t&&i.createElement(s,{href:t},"View on Github"),n&&i.createElement(s,{href:n},"Figma Design"))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(45721),i=t(94697),o=t(23038),r=t(31026),l=t(6115);function s(e){const{href:n}=e,t=(0,i.g)({href:n}),s=(0,o.g)(t.iconOptions),p=n.includes("github")?r.Z:l.Z;return a.createElement("a",t.link,a.createElement(p,s),e.children)}},59520:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var a=t(81648),i=(t(45721),t(70167)),o=t(72032);t(27505);const r={tags:["field","search","date picker","password"],title:"Input"},l=void 0,s={unversionedId:"reference/components/input",id:"version-0.4.1/reference/components/input",title:"Input",description:"Used to collect form field information.",source:"@site/versioned_docs/version-0.4.1/reference/components/input.mdx",sourceDirName:"reference/components",slug:"/reference/components/input",permalink:"/docs/reference/components/input",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/input.mdx",tags:[{label:"field",permalink:"/docs/tags/field"},{label:"search",permalink:"/docs/tags/search"},{label:"date picker",permalink:"/docs/tags/date-picker"},{label:"password",permalink:"/docs/tags/password"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field","search","date picker","password"],title:"Input"},sidebar:"reference",previous:{title:"Icon",permalink:"/docs/reference/components/icon"},next:{title:"Menu",permalink:"/docs/reference/components/menu"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Valid Example",id:"valid-example",level:3},{value:"Invalid Example",id:"invalid-example",level:3},{value:"Date Picker",id:"date-picker",level:3},{value:"What about <code>type=&quot;date&quot;</code>?",id:"what-about-typedate",level:4},{value:"Password Input",id:"password-input",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to collect form field information."),(0,i.kt)(o.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Input",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getInputProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InputOptions {\n  describedBy?: string\n  disabled?: boolean\n  kind?: 'default' | 'icon'\n  id: string\n  invalid?: boolean\n  name: string\n  placeholder: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 'm' | 'l'\n  type: 'text' | 'email' | 'password' | 'tel' | 'url'\n  value: string\n}\n\ngetInputProps(options?: InputOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { InputOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Form Control"),(0,i.kt)("li",{parentName:"ol"},"Label"),(0,i.kt)("li",{parentName:"ol"},"Input"),(0,i.kt)("li",{parentName:"ol"},"Message")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,i.kt)("h3",{id:"valid-example"},"Valid Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicFormControl() {\n  const formId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"invalid-example"},"Invalid Example"),(0,i.kt)("admonition",{title:"Easy to understand invalid states",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To display an invalid state that is easy to understand for the user, pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldOptions")," to your Error Message component and add a WarningTriangleFilled ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/general/icons"},"Icon"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ErrorEmailField() {\n  const fieldId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    invalid: true,\n    required: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: fieldId,\n    value: 'Email alerts',\n  })\n  const error = getErrorMessageProps({\n    ...fieldOptions,\n    id: 'fieldId',\n    message: 'Please enter your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: `${error.container.id},${error.id}`,\n    id: fieldId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n        {fieldOptions.invalid && (\n          <span {...inputProps.invalidIconWrapper}>\n            <WarningTriangleFilledIcon\n              {...getIconProps(inputProps.invalidIconOptions)}\n            />\n          </span>\n        )}\n      </div>\n      {fieldOptions.invalid && (\n        <div {...error.container}>\n          <small {...error.message}>{error.message.value}</small>\n        </div>\n      )}\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"date-picker"},"Date Picker"),(0,i.kt)("p",null,"When you need to collect a ",(0,i.kt)("strong",{parentName:"p"},"known date"),", combine the input helper with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/react-hooks/useAutoFormatDate"},"useAutoFormatDate")," custom hook."),(0,i.kt)("admonition",{title:"Calendar Pickers are not accessible",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Calendar Pickers should only be used when the UX requires choosing a date that is ",(0,i.kt)("strong",{parentName:"p"},"unknown")," to the user."),(0,i.kt)("p",{parentName:"admonition"},"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://adrianroselli.com/2019/07/maybe-you-dont-need-a-date-picker.html"},"Maybe You Don't Need a Date Picker")," article for more information.")),(0,i.kt)("h4",{id:"what-about-typedate"},"What about ",(0,i.kt)("inlineCode",{parentName:"h4"},'type="date"'),"?"),(0,i.kt)("p",null,"Contrary to the rest of the HTML element APIs, the ",(0,i.kt)("inlineCode",{parentName:"p"},'type="date"')," option for an input is ",(0,i.kt)("strong",{parentName:"p"},"not accessible"),". This is a known issue in the community and forces fully accessible applications to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," value instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DateInput(props) {\n  const formatOptions = useAutoFormatDate()\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: props.id || 'date',\n    kind: 'icon',\n    name: props.name || 'user_date',\n    placeholder: formatOptions.placeholder,\n    value: formatOptions.value,\n  })\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <span {...inputProps.iconWrapper}>\n        <CalendarIcon {...getIconProps(inputProps.iconOptions)} />\n      </span>\n      <input {...inputProps.input} onChange={formatOptions.onChange} />\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"password-input"},"Password Input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PasswordInput() {\n  const [show, setShow] = useState(false)\n  const [password, setPassword] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'password',\n    name: 'user_password',\n    placeholder: 'Basic input',\n    type: show ? 'text' : 'password',\n    value: password,\n  })\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: show ? 'Hide password' : 'Show password',\n    usage: 'text',\n  })\n  const btnStyle = {\n    position: 'absolute',\n    right: '0.3rem',\n    top: '0',\n    zIndex: '100',\n  }\n\n  function handleChange(e) {\n    setPassword(e.target.value)\n  }\n\n  function handleToggleShow() {\n    setShow((prev) => !prev)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <input {...inputProps.input} onChange={handleChange} />\n      <button {...button} style={btnStyle} onClick={handleToggleShow}>\n        <span {...getIconProps(iconOptions)}>\n          {show ? <EyeIcon /> : <EyeOffIcon />}\n        </span>\n      </button>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function InputSizes() {\n  const { fieldOptions } = getFormControlProps()\n  const mInputProps = getInputProps({\n    ...fieldOptions,\n    id: 'm-example',\n    name: 'm-example',\n    placeholder: 'Medium input',\n    value: '',\n    size: 'm',\n  })\n  const lInputProps = getInputProps({\n    ...fieldOptions,\n    id: 'l-example',\n    name: 'l-example',\n    placeholder: 'Large input',\n    value: '',\n    size: 'l',\n  })\n\n  return (\n    <div>\n      <div {...mInputProps.inputWrapper}>\n        <input {...mInputProps.input} onChange={() => {}} />\n      </div>\n      <div {...lInputProps.inputWrapper}>\n        <input {...lInputProps.input} onChange={() => {}} />\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Input size rules."',title:'"Input',size:!0,'rules."':!0},"{\n  m: 'Use in condensed areas where the default size is too large.',\n  l: 'Should be used in most, if not all cases.'\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getInputProps(options?: InputOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": A boolean value for the properties of disabled, invalid, readOnly, and required which manage the state of the field. A String value for properties describedBy, id, name, placeholder, and value which create a11y properties for the Input. A property kind that accepts a String value ",(0,i.kt)("inlineCode",{parentName:"li"},"'default' | 'icon'")," to determine the styling rules for the input within the context of adding an Icon within the field. A property of type that accepts a String value of ",(0,i.kt)("inlineCode",{parentName:"li"},"'text' | 'email' | 'password' | 'tel' | 'url'")," that sets the type property for the Input. A size property that accepts a String value of ",(0,i.kt)("inlineCode",{parentName:"li"},"'m' | 'l'")," to determine the size styling for the Input.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the control element. Additionally, it returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"iconOptions")," property that can be passed into the Icon API, an ",(0,i.kt)("inlineCode",{parentName:"p"},"iconWrapper")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidIconWrapper")," to be placed on the container elements of the leading and invalid state Icon, respectively."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"patterns"},"Patterns"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the WarningTriangleFilled Icon for all invalid input fields."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use any other Icon to represent an invalid input field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,i.kt)("h2",{id:"accessbility"},"Accessbility"),(0,i.kt)("p",null,"The Pando Input and Icon APIs combined with semantic HTML allow the Input to be fully accessible and screen-readable."))}c.isMDXComponent=!0},31825:function(e,n,t){t.d(n,{a:function(){return d},g:function(){return p}});var a=t(39112),i=t(58105),o=t(50114);const r="gridCSS-module_gridContainer__sQmao",l="gridCSS-module_gridItem__nVMyV";(0,o.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="ps-grid";function p(e){const n=(0,i.g)(e);return{...(0,i.c)(n),...(0,a.c)(s,r)}}function d(e){const n=(0,i.a)(e);return{...(0,i.b)(n),...(0,a.c)("ps-grid-item",l)}}},58105:function(e,n,t){t.d(n,{a:function(){return o},b:function(){return l},c:function(){return r},g:function(){return i}});const a={6:.375,8:.5,12:.75,16:1,32:2};function i(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function o(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function r(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function l(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);