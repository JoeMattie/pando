"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40621],{61411:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},75362:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},2121:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"checkmark",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"m9.59 14.58-2.818-2.818a.5.5 0 0 0-.706 0l-.71.704a.5.5 0 0 0-.003.708h.002l3.881 3.882a.5.5 0 0 0 .707 0l9.293-9.292a.5.5 0 0 0 0-.708l-.703-.702a.5.5 0 0 0-.707 0L9.59 14.58Z"})})}},12:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"indeterminate icon",...e,children:(0,o.jsx)("path",{d:"M18.5 13h-13a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Z"})})}},88840:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a=n(79920),l=n(67235),c=n(30234);function r(){const{control:e}=(0,a.g)(),[t,n]=(0,o.useState)({email:!1,sms:!1});function r(e){const{target:t}=e;n((e=>({...e,[t.value]:t.checked})))}return o.createElement(l.Z,null,o.createElement("div",e,o.createElement(c.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",onClick:r,name:"contact",checked:t.email}),o.createElement(c.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",onClick:r,name:"contact",checked:t.sms}),o.createElement(c.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",onClick:r,name:"contact",checked:t.phone})))}},82678:function(e,t,n){n.d(t,{V:function(){return c},k:function(){return l}});var o=n(45721),a=n(27233);function l(){return o.createElement(a.Z,null,"const checkbox = getCheckboxProps()\nconst { value, ...labelProps } = getFormLabelProps()\nconst icon = getIconProps(checkbox.iconOptions)\n\n<label {...checkbox.checkboxContainer}>\n  <input {...checkbox.input} onChange={props.onClick} />\n  <span {...checkbox.checkboxControl}>\n    {checkbox.input.checked && <CheckIcon {...icon} />}\n  </span>\n  <span {...labelProps}>{value}</span>\n</label>")}function c(){return o.createElement(a.Z,null,"import {\n  getCheckboxProps,\n  getFormControlProps,\n  getIconProps,\n  getFormLabelProps,\n} from '@pluralsight/headless-styles'\nimport { CheckIcon } from '@pluralsight/icons'\n\nexport default function Checkbox(props) {\n  const { fieldOptions } = getFormControlProps({ ...props })\n  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...props,\n    value: props.label,\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={props.onClick} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <CheckIcon {...icon} />}\n      </span>\n      <span {...labelProps}>{value}</span>\n    </label>\n  )\n}")}},30234:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(81648),a=n(45721),l=n(98268),c=n(7461);var r=n(76411);const i="checkboxCSS-module_checkboxContainer__TJ7sq",s="checkboxCSS-module_checkboxInput__wuNe5",d="checkboxCSS-module_checkboxControl__UWcOY";(0,r.s)(".checkboxCSS-module_checkboxContainer__TJ7sq{align-items:center;cursor:pointer;display:inline-flex;position:relative;vertical-align:top}.checkboxCSS-module_checkboxInput__wuNe5{clip:rect(0,0,0,0);border:0;box-sizing:border-box;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.checkboxCSS-module_checkboxControl__UWcOY{-webkit-margin-end:.437rem;align-items:center;border-color:var(--ps-action-border);-o-border-image:initial;border-image:initial;border-radius:2px;border-style:solid;border-width:2px;color:var(--ps-action-text);display:inline-flex;flex-shrink:0;height:1.125rem;justify-content:center;margin-bottom:2px;margin-inline-end:.437rem;transition-duration:.15s;transition-property:background,background-color,border,box-shadow;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;width:1.125rem}.checkboxCSS-module_checkboxControl__UWcOY:not([disabled]):hover{background:var(--ps-background-hover);border-color:var(--ps-background-hover)}.checkboxCSS-module_checkboxInput__wuNe5:focus+.checkboxCSS-module_checkboxControl__UWcOY{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.checkboxCSS-module_checkboxInput__wuNe5:focus:not(:focus-visible)+.checkboxCSS-module_checkboxControl__UWcOY{box-shadow:none;outline:none}.checkboxCSS-module_checkboxContainer__TJ7sq[data-readonly=true],.checkboxCSS-module_checkboxContainer__TJ7sq[disabled]{cursor:not-allowed}.checkboxCSS-module_checkboxControl__UWcOY[data-checked=true]{background:var(--ps-action-background);border-color:var(--ps-action-background)}.checkboxCSS-module_checkboxControl__UWcOY[data-checked=true]:hover{background:var(--ps-action-background-hover);border-color:var(--ps-action-background-hover)}.checkboxCSS-module_checkboxControl__UWcOY[disabled]{background:var(--ps-background);border-color:var(--ps-background)}.checkboxCSS-module_checkboxControl__UWcOY[data-invalid=true]{background:var(--ps-danger-surface);border-color:var(--ps-danger-surface);color:var(--ps-danger-text)}.checkboxCSS-module_checkboxControl__UWcOY[data-invalid=true]:hover{background:var(--ps-danger-surface);border-color:var(--ps-danger-surface)}.checkboxCSS-module_checkboxControl__UWcOY[data-readonly=true]:hover{background-color:initial}");function m(e){const t=function(e){return{...(0,c.g)(e),indeterminate:(null==e?void 0:e.indeterminate)??!1}}(e),n=function(e){const t=(0,c.c)(e);return{iconOptions:{size:"s"},input:{...t.input,indeterminate:e.indeterminate.toString(),type:"checkbox"},checkboxContainer:{...t.container},checkboxControl:{...t.control}}}(t);return{...n,input:{...n.input,...(0,l.c)(`ps-checkbox-input ${s}`)},checkboxContainer:{...n.checkboxContainer,...(0,l.c)(`ps-checkbox-container ${i}`)},checkboxControl:{...n.checkboxControl,...(0,l.c)(`ps-checkbox-control ${d}`)}}}var u=n(65553),p=n(79920),h=n(77233),k=n(12),b=n(2121);function g(e){const{checked:t}=e,n=(0,u.g)(e.iconOptions);return t?"true"===e.indeterminate?a.createElement(k.Z,n):a.createElement(b.Z,n):null}function v(e){const{onClick:t}=e,{fieldOptions:n}=(0,p.g)({...e}),l=m({...n,...e}),{value:c,...r}=(0,h.g)({...e,value:e.label}),{checked:i,...s}=l.input;return a.createElement("label",l.checkboxContainer,t&&a.createElement("input",(0,o.Z)({},s,{checked:i,onChange:e.onClick})),!t&&a.createElement("input",(0,o.Z)({},s,{defaultChecked:i})),a.createElement("span",l.checkboxControl,a.createElement(g,{checked:i,iconOptions:l.iconOptions,indeterminate:l.input.indeterminate})),a.createElement("span",r,c))}},62655:function(e,t,n){var o=n(81648),a=n(45721),l=n(79920),c=n(77233),r=n(67235),i=n(30234);const s={justifyContent:"space-between",width:"100%"};function d(){const{control:e,fieldOptions:t}=(0,l.g)(),{value:n,...r}=(0,c.g)({htmlFor:"checked-example",value:"checked:"});return a.createElement("div",(0,o.Z)({},e,{style:{...s}}),a.createElement("label",r,n),a.createElement(i.Z,(0,o.Z)({},t,{checked:!0})))}function m(){const{control:e,fieldOptions:t}=(0,l.g)(),{value:n,...r}=(0,c.g)({htmlFor:"indeterminate-example",value:"indeterminate:"});return a.createElement("div",(0,o.Z)({},e,{style:{...s}}),a.createElement("label",r,n),a.createElement(i.Z,(0,o.Z)({},t,{checked:!0,indeterminate:!0})))}function u(){const{control:e,fieldOptions:t}=(0,l.g)({disabled:!0}),{value:n,...r}=(0,c.g)({htmlFor:"disabled-exampled",value:"disabled:"});return a.createElement("div",(0,o.Z)({},e,{style:{...s}}),a.createElement("label",r,n),a.createElement(i.Z,t))}function p(){const{control:e,fieldOptions:t}=(0,l.g)({invalid:!0}),{value:n,...r}=(0,c.g)({htmlFor:"invalid-exampled",value:"invalid:"});return a.createElement("div",(0,o.Z)({},e,{style:s}),a.createElement("label",r,n),a.createElement(i.Z,(0,o.Z)({},t,{checked:!0})))}function h(){const{control:e,fieldOptions:t}=(0,l.g)({readOnly:!0}),{value:n,...r}=(0,c.g)({htmlFor:"readOnly-exampled",value:"readOnly:"});return a.createElement("div",(0,o.Z)({},e,{style:{...s}}),a.createElement("label",r,n),a.createElement(i.Z,t))}function k(e){const{control:t,fieldOptions:n}=(0,l.g)({required:!0}),r=(0,c.g)({htmlFor:"required-exampled",value:""});return a.createElement("div",(0,o.Z)({},t,{style:{...s}}),a.createElement("label",r,"required:"),a.createElement(i.Z,(0,o.Z)({},n,{checked:e.checked,onClick:e.onClick})))}t.Z=function(){const[e,t]=(0,a.useState)(!1);return a.createElement(r.Z,null,a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 5rem",width:"75%"}},a.createElement(d,null),a.createElement(u,null),a.createElement(p,null),a.createElement(h,null),a.createElement(k,{checked:e,onClick:function(e){t(e.target.checked)}}),a.createElement(m,null)))}},51742:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a=n(67235),l=n(30234),c=n(89653);function r(){return o.createElement(a.Z,{textAlign:"initial"},o.createElement("ul",{className:c.Z.list},o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{value:"all-selected",id:"all-selected",label:"Select all",name:"select-all",indeterminate:!0,checked:!0}),o.createElement("ul",{className:c.Z.list},o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",name:"contact",checked:!1})),o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",name:"contact",checked:!1})),o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",name:"contact",checked:!0}))))))}},35626:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a=n(67235),l=n(30234),c=n(89653);function r(){return o.createElement(a.Z,{textAlign:"initial"},o.createElement("ul",{className:c.Z.list},o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{value:"all-selected",id:"all-selected",label:"Select all",name:"select-all",checked:!0}),o.createElement("ul",{className:c.Z.list},o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"email",value:"email",id:"email",label:"Email",name:"contact",checked:!0})),o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"sms",value:"sms",id:"sms",label:"SMS",name:"contact",checked:!0})),o.createElement("li",{className:c.Z.listItem},o.createElement(l.Z,{htmlFor:"phone",value:"phone",id:"phone",label:"Phone",name:"contact",checked:!0}))))))}},67235:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function c(e){void 0===e&&(e=l);const t=e.type??l.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",c={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:c},e.children)}},25302:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(81648),a=n(45721),l=n(37677),c="button_sEkW",r="chakra_ow8e",i="chakraCircle_c8Xz",s="list_rMMG",d="listItem_bLPI",m="icon_nzIq",u="svelteBackground_c8BA",p="svelteOutline_tdvb";const h=a.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 24 24"},a.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),k=a.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 1024 1024"},a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=a.createElement("svg",{"aria-hidden":"true",className:`${m}`,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:p,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),a.createElement("path",{className:u,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));const g={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:k,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:a.createElement("svg",{"aria-hidden":"true",className:`${m} ${r}`,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:i,width:"582",height:"582",rx:"291"}),a.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:a.createElement("svg",{"aria-hidden":"true",className:m,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}},v={size:"m",usage:"text"};function x(e){const t=g.results[e.techId],{className:n}=(0,l.g)(v).button,o=`https://codesandbox.io/s/${e.href}?file=/src/App.tsx`;return a.createElement("a",{"aria-label":t.label,className:`${n} ${c}`,href:o,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function f(e){const{techId:t}=e,{className:n,...r}={...(0,l.g)(v)}.button;return a.createElement("button",(0,o.Z)({className:`${n} ${c}`,onClick:e.onToggleShow,title:g.results[t].label},r),a.createElement(C,{tabId:t}))}function C(e){return g.results[e.tabId].icon}function y(e){const{techId:t}=e;return a.createElement("li",{className:d},"source"===t?a.createElement(f,{onToggleShow:e.onToggleShow,techId:t}):a.createElement(x,{techId:t,href:e.sandboxList[t]},a.createElement(C,{tabId:t})))}function S(e){return a.createElement("ul",{className:s},g.items.map((t=>a.createElement(y,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t}))))}function N(e){const[t,n]=(0,a.useState)(!1);return a.createElement("div",null,a.createElement(S,{onToggleShow:function(){n((e=>!e))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var w=(0,a.memo)(N)},69477:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(45721),a=n(41539),l=n(65553),c=n(61411),r=n(75362);function i(e){const{href:t}=e,n=(0,a.g)({href:t}),i=(0,l.g)(n.iconOptions),s=t.includes("github")?c.Z:r.Z;return o.createElement("a",n.link,o.createElement(s,i),e.children)}},12045:function(e,t,n){var o=n(45721),a=n(83052),l=n(79920),c=n(77233),r=n(49632),i=n(37677),s=n(65553),d=n(1579),m=n(72322),u=n(85914),p=n(15082),h=n(54067),k=n(80069),b=n(82979),g=n(74361),v=n(64388),x=n(17549),f=n(4863),C=n(77643),y=n(21556),S=n(71111),N=n(31942),w=n(5489);const E={React:o,...o,getButtonProps:a.g,getFormControlProps:l.g,getFormLabelProps:c.g,getGridProps:r.g,getGridItemProps:r.a,getIconButtonProps:i.g,getIconProps:s.g,getInputProps:d.g,getMenuProps:m.g,getMenuItemProps:m.a,getPaginationProps:u.g,getPopoverProps:p.g,getRadioProps:h.g,getSelectProps:k.g,getSelectOptionProps:k.a,getTagProps:b.g,CalendarIcon:g.Z,ChevronDownIcon:v.Z,ChevronRightIcon:x.Z,CloseIcon:f.Z,EyeIcon:C.Z,EyeOffIcon:y.Z,PlaceholderIcon:S.Z,WarningTriangleFilledIcon:N.Z,useAutoFormatDate:w.y0,useMenuInteraction:w.P8,useRovingTabIndex:w.XZ,useSubmenuInteraction:w.iL};t.Z=E},56043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return b}});var o=n(81648),a=(n(45721),n(70167)),l=n(88840),c=n(82678),r=n(51742),i=n(35626),s=n(62655),d=n(69477),m=n(25302);const u={tags:["forms","multi-action field"]},p=void 0,h={unversionedId:"development/headless-styles/Checkbox",id:"development/headless-styles/Checkbox",title:"Checkbox",description:"The getCheckboxProps helper is used when a user needs to select multiple values from options.",source:"@site/docs/development/headless-styles/Checkbox.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Checkbox",permalink:"/docs/next/development/headless-styles/Checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/development/headless-styles/Checkbox.mdx",tags:[{label:"forms",permalink:"/docs/next/tags/forms"},{label:"multi-action field",permalink:"/docs/next/tags/multi-action-field"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["forms","multi-action field"]},sidebar:"development",previous:{title:"Button",permalink:"/docs/next/development/headless-styles/Button"},next:{title:"Circular Progress",permalink:"/docs/next/development/headless-styles/CircularProgress"}},k={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"Select all checkbox list state",id:"select-all-checkbox-list-state",level:4},{value:"State depending behavior",id:"state-depending-behavior",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"CheckboxOptions",id:"checkboxoptions",level:3},{value:"FieldOptions",id:"fieldoptions",level:3},{value:"Props",id:"props",level:2},{value:"CheckboxProps",id:"checkboxprops",level:3},{value:"JSCheckboxProps",id:"jscheckboxprops",level:3}],g={toc:b};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getCheckboxProps")," helper is used when a user needs to select multiple values from options."),(0,a.kt)(d.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("p",null,"The Checkboxes must always be accompanied by a label (i.e. see ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/FormControl"},"getFormLabelProps"),")."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,a.kt)(l.Z,{mdxType:"BasicCheckbox"}),(0,a.kt)(m.Z,{fullCode:(0,a.kt)(c.V,{mdxType:"BasicCheckboxFullPreview"}),sandboxList:{chakra:"ps-react-chakra-w5cyts",joy:"basic-mui-evcjvj",styled:"sc-7f8dpo",svelte:"ps-svelte-pgwm8l"},mdxType:"LiveExampleTabs"},(0,a.kt)(c.k,{mdxType:"BasicCheckboxPreview"})),(0,a.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate")," option when you are displaying a list of items that indicate the user has selected ",(0,a.kt)("strong",{parentName:"p"},"some")," items in the list, but not all."),(0,a.kt)(r.Z,{mdxType:"IndeterminateCheckbox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [options, setOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst checkedItems = Object.keys(options).map((optionItem) => (\n  return options[optionItem]\n))\nconst allChecked = checkedItems.every(Boolean)\n// highlight-next-line\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Due to the nature of ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate")," not being an attribute for the native ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," tag, (only a CSS psuedo-selector: ",(0,a.kt)("inlineCode",{parentName:"p"},":indeterminate"),") the ",(0,a.kt)("inlineCode",{parentName:"p"},"input.indeterminate")," value returned from the checkbox helper is a ",(0,a.kt)("strong",{parentName:"p"},"boolean String"),".")),(0,a.kt)("h4",{id:"select-all-checkbox-list-state"},"Select all checkbox list state"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"checked")," option when you are displaying a list of items that indicate the user has selected ",(0,a.kt)("strong",{parentName:"p"},"all")," items in the list."),(0,a.kt)(i.Z,{mdxType:"SelectAllCheckbox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [options, setOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst checkedItems = Object.keys(options).map((optionItem) => (\n  return options[optionItem]\n))\n// highlight-next-line\nconst allChecked = checkedItems.every(Boolean)\nconst isIndeterminate = checkedItems.some(Boolean) && !allChecked\n")),(0,a.kt)("h3",{id:"state-depending-behavior"},"State depending behavior"),(0,a.kt)("p",null,"States like ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," have an impact on the usability of a Checkbox and on the styles, except for ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),". These values should come from the ",(0,a.kt)("inlineCode",{parentName:"p"},"getFormControlProps")," helper."),(0,a.kt)(s.Z,{mdxType:"CheckboxStates"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getCheckboxProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#checkboxoptions"},"CheckboxOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kind"),": 'strong'"),(0,a.kt)("td",{parentName:"tr",align:null},"Get checkbox styles for CSS usage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getJSCheckboxProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#checkboxoptions"},"CheckboxOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"checkboxoptions"},"CheckboxOptions"),(0,a.kt)("p",null,"This interface is available as an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxOptions extends FieldOptions {\n  checked: boolean\n  id: string\n  indeterminate?: boolean\n  name?: string\n  value: string\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { CheckboxOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h3",{id:"fieldoptions"},"FieldOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldOptions {\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"checkboxprops"},"CheckboxProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxProps {\n  iconOptions: {\n    size: 's'\n  }\n  input: {\n    'aria-disabled': boolean\n    'aria-invalid': boolean\n    checked: boolean\n    disabled: boolean\n    id: string\n    indeterminate: string\n    name: string\n    type: 'checkbox'\n    value: string\n    className: string\n  }\n  checkboxContainer: {\n    'data-checked': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    className: string\n    disabled: boolean\n  }\n  checkboxControl: {\n    'aria-hidden': true\n    'data-checked': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    className: string\n    disabled: boolean\n  }\n}\n")),(0,a.kt)("h3",{id:"jscheckboxprops"},"JSCheckboxProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSCheckboxProps {\n  iconOptions: {\n    size: 's'\n  }\n  input: {\n    a11yProps: {\n      'aria-disabled': boolean\n      'aria-invalid': boolean\n      checked: boolean\n      disabled: boolean\n      id: string\n      indeterminate: string\n      name: string\n      type: 'checkbox'\n      value: string\n      className: string\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  checkboxContainer: {\n    a11yProps: {\n      'data-checked': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n      disabled: boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  checkboxControl: {\n    a11yProps: {\n      'aria-hidden': true\n      'data-checked': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n      disabled: boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n}\n")))}v.isMDXComponent=!0},89653:function(e,t){t.Z={list:"list_q4Tv",listItem:"listItem_xz9e"}},41539:function(e,t,n){n.d(t,{g:function(){return i}});var o=n(98268);function a(e){return/^https?:\/\//.test(e)}function l(e){const t=function(e){return a(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...t},...a(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var c=n(76411);const r="textLinkCSS-module_textLinkBase__P-zdY";function i(e){const t=function(e){return{href:(null==e?void 0:e.href)??""}}(e),n=l(t.href);return{...n,link:{...n.link,...(0,o.c)(`ps-text-link ${r}`)}}}(0,c.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);