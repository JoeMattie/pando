"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5750],{96122:function(t,e,n){const o=n(86521);e.Z=function(t){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},98923:function(t,e,n){const o=n(86521);e.Z=function(t){return(0,o.jsxs)("svg",{"aria-label":"download",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:[(0,o.jsx)("path",{d:"M13 3.5v9.086l1.94-1.94a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.707 0l-4-4a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L11 12.586V3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5Z"}),(0,o.jsx)("path",{d:"M3.5 15a.5.5 0 0 0-.5.5V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V19H5v-3.5a.5.5 0 0 0-.5-.5h-1Z"})]})}},97644:function(t,e,n){var o=n(45721),a=n(87937),s=n(86906),i=(0,a._)().button,l=(0,a._)({sentiment:"default"}).button,r=(0,a._)({sentiment:"danger"}).button;e.Z=function(){return o.createElement(s.Z,null,o.createElement("button",i,"action"),o.createElement("button",l,"default"),o.createElement("button",r,"danger"))}},96240:function(t,e,n){n.d(e,{K:function(){return i},d:function(){return s}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"<button {...getButtonProps().button}>action</button>\n<button {...getButtonProps({ sentiment: 'default' }).button}>default</button>\n<button {...getButtonProps({ sentiment: 'danger' }).button}>danger</button>")}function i(){return o.createElement(a.Z,null,"import { getButtonProps } from '@pluralsight/headless-styles';\n\nexport default function BasicButtons() {\n  return (\n    <div>\n      <button {...getButtonProps().button}>default</button>\n      <button {...getButtonProps({ sentiment: 'default' }).button}>default</button>\n      <button {...getButtonProps({ sentiment: 'danger' }).button}>danger</button>\n    </div>\n  );\n}")}},36579:function(t,e,n){var o=n(45721),a=n(87937),s=n(86906),i=(0,a._)({size:"m"}).button,l=(0,a._)().button;e.Z=function(){return o.createElement(s.Z,null,o.createElement("button",i,"medium"),o.createElement("button",l,"large"))}},30461:function(t,e,n){n.d(e,{A:function(){return s},v:function(){return i}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"<button {...getButtonProps({ size: 'm' }).button}>medium</button>\n<button {...getButtonProps({ size: 'l' }).button}>large</button>")}function i(){return o.createElement(a.Z,null,"import { getButtonProps } from '@pluralsight/headless-styles';\n\nexport default function ButtonsSizes() {\n  return (\n    <div>\n      <button {...getButtonProps({ size: 'm' }).button}>medium</button>\n      <button {...getButtonProps({ size: 'l' }).button}>large</button>\n    </div>\n  );\n}")}},7149:function(t,e,n){var o=n(45721),a=n(87937),s=n(86906),i=(0,a._)({usage:"outline"}).button,l=(0,a._)({usage:"text"}).button;e.Z=function(){return o.createElement(s.Z,null,o.createElement("button",i,"outline"),o.createElement("button",l,"text"))}},45308:function(t,e,n){n.d(e,{E:function(){return s},P:function(){return i}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"<button {...getButtonProps({ usage: 'outline' }).button}>outline</button>\n<button {...getButtonProps({ usage: 'text' }).button}>text</button>")}function i(){return o.createElement(a.Z,null,"import { getButtonProps } from '@pluralsight/headless-styles';\n\nexport default function ButtonUsages() {\n  return (\n    <div>\n      <button {...getButtonProps({ usage: 'outline' }).button}>outline</button>\n      <button {...getButtonProps({ usage: 'text' }).button}>text</button>\n    </div>\n  );\n}")}},98430:function(t,e,n){var o=n(59005),a=n(45721),s=n(87937),i=n(39549),l=n(98923),r=n(86906),u=["children"];function c(t){var e=t.children,n=(0,o.Z)(t,u),r=(0,s._)(n),c=r.button,d=r.iconOptions,p=(0,i.L)(d);return a.createElement("button",c,"start"===n.icon&&a.createElement(l.Z,p),e,"end"===n.icon&&a.createElement(l.Z,p))}e.Z=function(){return a.createElement(r.Z,null,a.createElement(c,{icon:"start"},"Icon at start"),a.createElement(c,{icon:"end"},"Icon at end"))}},32774:function(t,e,n){n.d(e,{T:function(){return s},v:function(){return i}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"const { button, iconOptions } = getButtonProps({\n  icon: 'start'\n})\n\n<button {...button}>\n  <PencilIcon {...getIconProps(iconOptions)} />\n  Edit\n</button>")}function i(){return o.createElement(a.Z,null,"import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { PencilIcon } from '@pluralsight/icons'\n\nexport default function EditButton(props) {\n  const { children, ...btnProps } = props\n  const { button, iconOptions } = getButtonProps({\n    ...btnProps,\n    icon: 'start'\n  })\n\n  return (\n    <button {...button}>\n      <PencilIcon {...getIconProps(iconOptions)} />\n      {props.children}\n    </button>\n  );\n}")}},86906:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(45721),a="base_M3w8",s="column_mb9C base_M3w8",i={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function l(t){var e;void 0===t&&(t=i);var n=t.column?s:a;return o.createElement("div",{className:n,style:{alignItems:t.alignItems,justifyContent:t.justifyContent,textAlign:null!=(e=t.textAlign)?e:"center"}},t.children)}},54288:function(t,e,n){n.d(e,{Z:function(){return I}});var o=n(60953),a=n(59005),s=n(45721),i=n(3676),l="button_sEkW",r="chakra_ow8e",u="chakraCircle_c8Xz",c="list_rMMG",d="listItem_bLPI",p="icon_nzIq",m="svelteBackground_c8BA",b="svelteOutline_tdvb",g=["className"],h=s.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 24 24"},s.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=s.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 1024 1024"},s.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=s.createElement("svg",{"aria-hidden":"true",className:""+p,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:b,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),s.createElement("path",{className:m,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var v={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:s.createElement("svg",{"aria-hidden":"true",className:p+" "+r,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},s.createElement("rect",{className:u,width:"582",height:"582",rx:"291"}),s.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:s.createElement("svg",{"aria-hidden":"true",className:p,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},B={size:"m",usage:"text"};function x(t){var e=v.results[t.techId],n=(0,i.B)(B).button.className,o="https://codesandbox.io/s/"+t.href+"?file=/src/App.tsx";return s.createElement("a",{"aria-label":e.label,className:n+" "+l,href:o,name:e.label,rel:"noopener noreferrer",target:"_blank",title:e.label},t.children)}function y(t){var e=t.techId,n=Object.assign({},(0,i.B)(B)).button,r=n.className,u=(0,a.Z)(n,g);return s.createElement("button",(0,o.Z)({className:r+" "+l,onClick:t.onToggleShow,title:v.results[e].label},u),s.createElement(N,{tabId:e}))}function N(t){return v.results[t.tabId].icon}function P(t){var e=t.techId;return s.createElement("li",{className:d},"source"===e?s.createElement(y,{onToggleShow:t.onToggleShow,techId:e}):s.createElement(x,{techId:e,href:t.sandboxList[e]},s.createElement(N,{tabId:e})))}function C(t){return s.createElement("ul",{className:c},v.items.map((function(e){return s.createElement(P,{key:e,onToggleShow:t.onToggleShow,sandboxList:t.sandboxList,techId:e})})))}function w(t){var e=(0,s.useState)(!1),n=e[0],o=e[1];return s.createElement("div",null,s.createElement(C,{onToggleShow:function(){o((function(t){return!t}))},sandboxList:t.sandboxList}),n?t.fullCode:t.children)}var I=(0,s.memo)(w)},35053:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(45721),a=n(28378),s=n(39549),i=n(24217),l=n(96122);function r(t){var e=t.href,n=(0,a.j)({href:e}),r=(0,s.L)(n.iconOptions),u=e.includes("github")?i.Z:l.Z;return o.createElement("a",n.link,o.createElement(u,r),t.children)}},92338:function(t,e,n){var o=n(45721),a=n(39549),s=n(22534),i=Object.assign({React:o},o,{getIconProps:a.L,PlaceholderIcon:s.Z});e.Z=i},15073:function(t,e,n){n.r(e),n.d(e,{assets:function(){return B},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return x}});var o=n(60953),a=n(59005),s=(n(45721),n(70167)),i=n(97644),l=n(36579),r=n(7149),u=n(98430),c=n(96240),d=n(45308),p=n(30461),m=n(32774),b=n(35053),g=n(54288),h=["components"],f={tags:["Development","Packages","Components","Headless Styles","Button"]},k=void 0,v={unversionedId:"development/headless-styles/Button",id:"version-0.1.0-alpha/development/headless-styles/Button",title:"Button",description:"The Button is used to perform an action or event, such as submitting a form, opening/closing a dialog, or using a cancel action.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/Button.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Button",permalink:"/docs/development/headless-styles/Button",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/Button.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Button",permalink:"/docs/tags/button"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Button"]},sidebar:"development",previous:{title:"Badge",permalink:"/docs/development/headless-styles/Badge"},next:{title:"Checkbox",permalink:"/docs/development/headless-styles/Checkbox"}},B={},x=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Button Sentiment",id:"button-sentiment",level:3},{value:"Button Usage",id:"button-usage",level:3},{value:"Button sizes",id:"button-sizes",level:3},{value:"Button with icon",id:"button-with-icon",level:3},{value:"Disabled Buttons",id:"disabled-buttons",level:3},{value:"Extending",id:"extending",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"ButtonOptions",id:"buttonoptions",level:3},{value:"Props",id:"props",level:2},{value:"ButtonProps",id:"buttonprops",level:3},{value:"JSButtonProps",id:"jsbuttonprops",level:3},{value:"Guides",id:"guides",level:2},{value:"Button size guide",id:"button-size-guide",level:3},{value:"Button color guide",id:"button-color-guide",level:3}],y={toc:x};function N(t){var e=t.components,n=(0,a.Z)(t,h);return(0,s.kt)("wrapper",(0,o.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Button is used to perform an action or event, such as submitting a form, opening/closing a dialog, or using a cancel action."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Buttons ",(0,s.kt)("strong",{parentName:"p"},"should not be used for inline text links or outbound links"),".\nThis API is meant for action-based click selections.\nFor displaying links, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/TextLink"},"Text Link API"),".")),(0,s.kt)(b.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Button",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getButtonProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"getButtonProps"),": The styles for any button (not links)")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"button-sentiment"},"Button Sentiment"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"getButtonProps")," comes with 3 sentiment options that correlate to our ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro#naming-convention"},"design-tokens")," to change the visual style of a button. You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"action")," (default), ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"danger"),"."),(0,s.kt)(i.Z,{mdxType:"BasicButton"}),(0,s.kt)(g.Z,{fullCode:(0,s.kt)(c.K,{mdxType:"BasicButtonFullPreview"}),sandboxList:{chakra:"basic-button-chakra-i02ytr",joy:"basic-buttons-mui-bnzx9l",styled:"basic-button-css-in-js-sc-mbrwzb",svelte:"basic-button-svelte-4qu65y"},mdxType:"LiveExampleTabs"},(0,s.kt)(c.d,{mdxType:"BasicButtonPreview"})),(0,s.kt)("h3",{id:"button-usage"},"Button Usage"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"getButtonProps")," comes with 2 usage options that correlate to our ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro#naming-convention"},"design-tokens")," to change the visual style of a button. You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"outline"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,s.kt)(r.Z,{mdxType:"ButtonUsage"}),(0,s.kt)(g.Z,{fullCode:(0,s.kt)(d.P,{mdxType:"ButtonUsageFullPreview"}),sandboxList:{chakra:"basic-button-chakra-i02ytr",joy:"basic-buttons-mui-bnzx9l",styled:"basic-button-css-in-js-sc-mbrwzb",svelte:"basic-button-svelte-4qu65y"},mdxType:"LiveExampleTabs"},(0,s.kt)(d.E,{mdxType:"ButtonUsagePreview"})),(0,s.kt)("h3",{id:"button-sizes"},"Button sizes"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," options to change the size of a button. The options are: ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"l")," (default)."),(0,s.kt)(l.Z,{mdxType:"ButtonSizes"}),(0,s.kt)(g.Z,{fullCode:(0,s.kt)(p.v,{mdxType:"ButtonSizesFullPreview"}),sandboxList:{chakra:"basic-button-chakra-i02ytr",joy:"basic-buttons-mui-bnzx9l",styled:"basic-button-css-in-js-sc-mbrwzb",svelte:"basic-button-svelte-4qu65y"},mdxType:"LiveExampleTabs"},(0,s.kt)(p.A,{mdxType:"ButtonSizesPreview"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We use the standard clothing size shorthand values for all ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," related options in any library we provide (i.e. xs-xxl).")),(0,s.kt)("h3",{id:"button-with-icon"},"Button with icon"),(0,s.kt)("p",null,"You can add icons to the start or end of a button using the ",(0,s.kt)("inlineCode",{parentName:"p"},"icon")," option and ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Icon"},"getIconProps")," helpers with an Icon from the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/icons/intro"},"Icons")," library."),(0,s.kt)(u.Z,{mdxType:"ButtonWithIcon"}),(0,s.kt)(g.Z,{fullCode:(0,s.kt)(m.v,{mdxType:"ButtonWithIconFullPreview"}),sandboxList:{chakra:"button-with-icon-chakra-2st397",joy:"button-with-icon-mui-lg9n42",styled:"button-with-icon-css-in-js-sc-x7lvu5",svelte:"button-with-icon-svelte-0p0jv0"},mdxType:"LiveExampleTabs"},(0,s.kt)(m.T,{mdxType:"ButtonWithIconPreview"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For buttons with ",(0,s.kt)("em",{parentName:"p"},"only")," an icon and no visible text, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/IconButton"},"Icon Button")," helper.")),(0,s.kt)("h3",{id:"disabled-buttons"},"Disabled Buttons"),(0,s.kt)("p",null,"If you need to display a disabled Button, just pass in the ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," option to the helper."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Disabled Button example"',title:'"Disabled',Button:!0,'example"':!0},"getButtonProps({ disabled: true })\n")),(0,s.kt)("h2",{id:"extending"},"Extending"),(0,s.kt)("p",null,"There are times you may need to make a slight adjustment to the button styles which is easy to do since we are giving you an Object."),(0,s.kt)("p",null,"Here is an example of using ",(0,s.kt)("inlineCode",{parentName:"p"},"styled-components")," to extend a button text color."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=page/Login/components/CustomButton.jsx",title:"page/Login/components/CustomButton.jsx"},"import styled from 'styled-components'\nimport { getJSButtonProps } from '@pluralsight/headless-styles'\n\nconst CustomButton = styled.button`\n  ${getJSButtonProps().button.cssProps}\n  color: '#bfbfbf'\n`\n\nexport default CustomButton\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"When combining ",(0,s.kt)("inlineCode",{parentName:"p"},"headless-styles")," with other libraries, please follow the guides in the example codesandboxes for the best experience. ",(0,s.kt)("strong",{parentName:"p"},"Some libraries require special support"),".")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getButtonProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#buttonoptions"},"ButtonOptions")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"sentiment"),": 'action', ",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"size"),": 'm', ",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"usage"),": 'filled'"),(0,s.kt)("td",{parentName:"tr",align:null},"Get main button styles.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getJSButtonProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#buttonoptions"},"ButtonOptions")),(0,s.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,s.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"buttonoptions"},"ButtonOptions"),(0,s.kt)("p",null,"This interface is available as an ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonOptions\n  extends DetailedHTMLProps<\n    ButtonHTMLAttributes<HTMLButtonElement>,\n    HTMLButtonElement\n  > {\n  disabled?: boolean\n  icon?: 'start' | 'end'\n  sentiment?: 'action' | 'default' | 'danger'\n  size?: 'm' | 'l'\n  usage?: 'filled' | 'outline' | 'text'\n  tech?: 'svelte'\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { ButtonOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("h3",{id:"buttonprops"},"ButtonProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    ['data-disabled']: boolean\n    className: string\n  }\n}\n")),(0,s.kt)("h3",{id:"jsbuttonprops"},"JSButtonProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    a11yProps: {\n      ['data-disabled']: boolean\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")),(0,s.kt)("h2",{id:"guides"},"Guides"),(0,s.kt)("h3",{id:"button-size-guide"},"Button size guide"),(0,s.kt)("p",null,"Button sizes are relative to the ",(0,s.kt)("inlineCode",{parentName:"p"},"padding")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"font-size")," styles. Here is an interface that gives the sizing guide. Variables are referenced from the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro"},(0,s.kt)("inlineCode",{parentName:"a"},"tokens"))," package."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonSizeGuide {\n  m: {\n    font-size: '0.875rem'\n    paddingInlineStart: '1.125rem'\n    paddingInlineEnd: '1.125rem'\n  }\n  l: {\n    fontSize: '2.75rem'\n    paddingInlineStart: '2.156rem'\n    paddingInlineEnd: '2.156rem'\n  }\n}\n")),(0,s.kt)("h3",{id:"button-color-guide"},"Button color guide"),(0,s.kt)("p",null,"Button colors are relative to the ",(0,s.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,s.kt)("inlineCode",{parentName:"p"},"sentiment")," to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro"},(0,s.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonColorGuide {\n  action: 'var(--ps-action-background)'\n  default: 'var(--ps-background)'\n  danger: 'var(--ps-danger-background)'\n}\n")))}N.isMDXComponent=!0},11851:function(t,e,n){n.r(e),e.default={btnBase:"btnBase_e54Q",actionButton:"actionButton_A0Wt",defaultButton:"defaultButton_rdzq",dangerButton:"dangerButton_qzbr",filledButton:"filledButton_OPV5 btnBase_e54Q",outlineButton:"outlineButton_TdbR btnBase_e54Q",textButton:"textButton_g2ot btnBase_e54Q",mButton:"mButton_MW9u",lButton:"lButton_vwv0"}},85759:function(t,e,n){n.r(e),e.default={actionIconButton:"actionIconButton_U4s3",defaultIconButton:"defaultIconButton_rDIa",squareIconButton:"squareIconButton_atJH",roundIconButton:"roundIconButton_zNBJ",textIconButton:"textIconButton_wsk4",mIconButton:"mIconButton_xGkW",lIconButton:"lIconButton_gPXP"}},65976:function(t,e,n){n.r(e),e.default={textLinkBase:"textLinkBase_THqx"}},87937:function(t,e,n){e._=void 0;const o=n(6495),a=n(91037),s=n(63720),i=o.__importDefault(n(11851));e._=function(t){const e=(0,s.getDefaultButtonOptions)(t),n=(0,s.createButtonProps)(e),{sentimentClass:o,sizeClass:l,usageClass:r}=(0,s.getButtonClasses)(e),{tech:u}=e;return{...n,button:{...n.button,...(0,a.createClassProp)(u,{defaultClass:`ps-btn ${i.default[r]} ${i.default[o]} ${i.default[l]}`,svelteClass:`ps-btn btnBase ${r} ${o} ${l}`})}}}},63720:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createButtonProps=e.getButtonClasses=e.getDefaultButtonOptions=void 0;const n=!1,o="",a="action",s="l",i="filled",l="";function r(t){return t?`${t}Button`:""}e.getDefaultButtonOptions=function(t){return{disabled:t?.disabled??n,icon:t?.icon??o,sentiment:t?.sentiment??a,usage:t?.usage??i,size:t?.size??s,tech:t?.tech??l}},e.getButtonClasses=function(t){return{sentimentClass:r(t.sentiment),sizeClass:r(t.size),usageClass:r(t.usage)}},e.createButtonProps=function(t){var e;return{...t.icon&&{iconOptions:{ariaHidden:!0,ariaLabel:"",size:(e=t.size,"m"===e?"s":"m"),tech:t.tech}},button:{"data-disabled":t.disabled}}}},3676:function(t,e,n){e.B=void 0;const o=n(6495),a=n(91037),s=n(62208),i=o.__importDefault(n(11851)),l=o.__importDefault(n(85759));e.B=function(t){const e=(0,s.getDefaultIconButtonOptions)(t),n=(0,s.createIconButtonProps)(e),{sentimentClass:o,sizeClass:r,usageClass:u}=(0,s.getIconButtonClasses)(e),{tech:c}=e;return{...n,button:{...n.button,...(0,a.createClassProp)(c,{defaultClass:`ps-icon-btn ${i.default.btnBase} ${l.default[u]} ${l.default[o]} ${l.default[r]}`,svelteClass:`ps-icon-btn btnBase ${u} ${o} ${r}`})}}}},62208:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createIconButtonProps=e.getIconButtonClasses=e.getDefaultIconButtonOptions=void 0;const n="button with icon",o=!1,a="action",s="l",i="square",l="";function r(t){return t?`${t}IconButton`:""}e.getDefaultIconButtonOptions=function(t){return{ariaLabel:t?.ariaLabel??n,disabled:t?.disabled??o,sentiment:t?.sentiment??a,usage:t?.usage??i,size:t?.size??s,tech:t?.tech??l}},e.getIconButtonClasses=function(t){return{sentimentClass:r(t.sentiment),sizeClass:r(t.size),usageClass:r(t.usage)}},e.createIconButtonProps=function(t){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(e=t.size,"m"===e?"s":"m"),tech:t.tech},button:{"aria-label":t.ariaLabel,"data-disabled":t.disabled}};var e}},70706:function(t,e){function n(t){return/^https?:\/\//.test(t)}function o(t){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:e.textLinkIconSize,tech:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.createTextLinkProps=e.getDefaultTextLinkOptions=e.defaultTextLinkOptions=e.textLinkIconSize=void 0,e.textLinkIconSize="1em",e.defaultTextLinkOptions={href:"",tech:""},e.getDefaultTextLinkOptions=function(t){return{href:t?.href??e.defaultTextLinkOptions.href,tech:t?.tech??e.defaultTextLinkOptions.tech}},e.createTextLinkProps=function(t,e){const a=function(t){return n(t)?{rel:"noopener external",target:"_blank"}:{}}(t);return{link:{href:t,...a},...n(t)&&{iconOptions:o(e)}}}},28378:function(t,e,n){e.j=void 0;const o=n(6495),a=n(91037),s=n(70706),i=o.__importDefault(n(65976));e.j=function(t){const e=(0,s.getDefaultTextLinkOptions)(t),n=(0,s.createTextLinkProps)(e.href,e.tech);return{...n,link:{...n.link,...(0,a.createClassProp)(e.tech,{defaultClass:`ps-text-link ${i.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);