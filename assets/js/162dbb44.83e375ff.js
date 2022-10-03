"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5961],{96122:function(t,e,n){const o=n(86521);e.Z=function(t){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},82777:function(t,e,n){const o=n(86521);e.Z=function(t){return(0,o.jsx)("svg",{"aria-label":"menu",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 11.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5ZM2.5 17h18.98a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm0-12h18.977a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"})})}},86906:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(45721),a="base_M3w8",s="column_mb9C base_M3w8",i={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function l(t){var e;void 0===t&&(t=i);var n=t.column?s:a;return o.createElement("div",{className:n,style:{alignItems:t.alignItems,justifyContent:t.justifyContent,textAlign:null!=(e=t.textAlign)?e:"center"}},t.children)}},44474:function(t,e,n){var o=n(60953),a=n(59005),s=n(45721),i=n(70765),l=n(21700),r=n(82777),u=n(86906),c=["onClick"];function p(t){var e=t.onClick,n=(0,a.Z)(t,c),u=(0,i.B)(n),p=u.button,d=u.iconOptions;return s.createElement("button",(0,o.Z)({},p,{onClick:e}),s.createElement(r.Z,(0,l.L)(d)))}e.Z=function(){return s.createElement(u.Z,null,s.createElement(p,{arialLabel:"Action icon button"}),s.createElement(p,{ariaLabel:"Default icon button",sentiment:"default"}))}},82883:function(t,e,n){n.d(e,{g:function(){return i},y:function(){return s}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Toggle menu',\n  //highlight-next-line\n  sentiment: 'action'\n})\n\n<button {...button}>\n  <MenuIcon {...getIconProps(iconOptions)} />\n</button>")}function i(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { MenuIcon } from '@pluralsight/icons'\n\nexport default function MenuButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps(btnOptions)\n\n  return (\n    <button {...button} onClick={onClick}>\n      <MenuIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},37135:function(t,e,n){var o=n(59005),a=n(45721),s=n(70765),i=n(21700),l=n(22534),r=n(86906),u=["icon"];function c(t){var e=t.icon,n=(0,o.Z)(t,u),l=(0,s.B)(n),r=l.button,c=l.iconOptions,p=e;return a.createElement("button",r,a.createElement(p,(0,i.L)(c)))}e.Z=function(){return a.createElement(r.Z,null,a.createElement(c,{ariaLabel:"medium icon button",icon:l.Z,size:"m"}),a.createElement(c,{ariaLabel:"medium icon button",icon:l.Z,size:"m",usage:"round"}),a.createElement(c,{ariaLabel:"medium icon button",icon:l.Z,size:"m",usage:"text"}),a.createElement(c,{ariaLabel:"large icon button",icon:l.Z,size:"l"}),a.createElement(c,{ariaLabel:"large icon button",icon:l.Z,size:"l",usage:"round"}),a.createElement(c,{ariaLabel:"large icon button",icon:l.Z,size:"l",usage:"text"}))}},11177:function(t,e,n){n.d(e,{J:function(){return i},e:function(){return s}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Go to next page',\n  //highlight-next-line\n  size: 'l'\n})\n\n<button {...button}>\n  <PlaceholderIcon {...getIconProps(iconOptions)} />\n</button>")}function i(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { ChevronRightIcon } from '@pluralsight/icons'\n\nexport default function NextButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps(btnOptions)\n\n  return (\n    <button {...button} onClick={onClick}>\n      <ChevronRightIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},26480:function(t,e,n){var o=n(60953),a=n(59005),s=n(45721),i=n(70765),l=n(21700),r=n(82777),u=n(86906),c=["onClick"];function p(t){var e=t.onClick,n=(0,a.Z)(t,c),u=(0,i.B)(n),p=u.button,d=u.iconOptions;return s.createElement("button",(0,o.Z)({},p,{onClick:e}),s.createElement(r.Z,(0,l.L)(d)))}e.Z=function(){return s.createElement(u.Z,null,s.createElement(p,{arialLabel:"Action icon button",usage:"square"}),s.createElement(p,{ariaLabel:"Default icon button",usage:"round"}),s.createElement(p,{ariaLabel:"Default icon button",usage:"text"}))}},44287:function(t,e,n){n.d(e,{P:function(){return i},k:function(){return s}});var o=n(45721),a=n(48921);function s(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Toggle menu',\n  //highlight-next-line\n  usage: 'square',\n})\n\n<button {...button}>\n  <MenuIcon {...getIconProps(iconOptions)} />\n</button>")}function i(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { MenuIcon } from '@pluralsight/icons'\n\nexport default function SquareMenuButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps({\n    ...btnOptions,\n    usage: 'square',\n  })\n\n  return (\n    <button {...button} onClick={onClick}>\n      <MenuIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},54288:function(t,e,n){n.d(e,{Z:function(){return P}});var o=n(60953),a=n(59005),s=n(45721),i=n(70765),l="button_sEkW",r="chakra_ow8e",u="chakraCircle_c8Xz",c="list_rMMG",p="listItem_bLPI",d="icon_nzIq",m="svelteBackground_c8BA",g="svelteOutline_tdvb",b=["className"],h=s.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},s.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=s.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},s.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=s.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:g,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),s.createElement("path",{className:m,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var v={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:s.createElement("svg",{"aria-hidden":"true",className:d+" "+r,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},s.createElement("rect",{className:u,width:"582",height:"582",rx:"291"}),s.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:s.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},B={size:"m",usage:"text"};function I(t){var e=v.results[t.techId],n=(0,i.B)(B).button.className,o="https://codesandbox.io/s/"+t.href+"?file=/src/App.tsx";return s.createElement("a",{"aria-label":e.label,className:n+" "+l,href:o,name:e.label,rel:"noopener noreferrer",target:"_blank",title:e.label},t.children)}function x(t){var e=t.techId,n=Object.assign({},(0,i.B)(B)).button,r=n.className,u=(0,a.Z)(n,b);return s.createElement("button",(0,o.Z)({className:r+" "+l,onClick:t.onToggleShow,title:v.results[e].label},u),s.createElement(y,{tabId:e}))}function y(t){return v.results[t.tabId].icon}function N(t){var e=t.techId;return s.createElement("li",{className:p},"source"===e?s.createElement(x,{onToggleShow:t.onToggleShow,techId:e}):s.createElement(I,{techId:e,href:t.sandboxList[e]},s.createElement(y,{tabId:e})))}function C(t){return s.createElement("ul",{className:c},v.items.map((function(e){return s.createElement(N,{key:e,onToggleShow:t.onToggleShow,sandboxList:t.sandboxList,techId:e})})))}function L(t){var e=(0,s.useState)(!1),n=e[0],o=e[1];return s.createElement("div",null,s.createElement(C,{onToggleShow:function(){o((function(t){return!t}))},sandboxList:t.sandboxList}),n?t.fullCode:t.children)}var P=(0,s.memo)(L)},35053:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(45721),a=n(37541),s=n(21700),i=n(24217),l=n(96122);function r(t){var e=t.href,n=(0,a.j)({href:e}),r=(0,s.L)(n.iconOptions),u=e.includes("github")?i.Z:l.Z;return o.createElement("a",n.link,o.createElement(u,r),t.children)}},92338:function(t,e,n){var o=n(45721),a=n(21700),s=n(22534),i=Object.assign({React:o},o,{getIconProps:a.L,PlaceholderIcon:s.Z});e.Z=i},820:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return h},default:function(){return I},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return v}});var o=n(60953),a=n(59005),s=(n(45721),n(70167)),i=n(44474),l=n(26480),r=n(37135),u=n(82883),c=n(44287),p=n(11177),d=n(35053),m=n(54288),g=["components"],b={tags:["Development","Packages","Components","Headless Styles","Button","Icon","Icon Button"]},h=void 0,f={unversionedId:"development/headless-styles/IconButton",id:"development/headless-styles/IconButton",title:"IconButton",description:"The Icon Button is used to perform an action or event, such as submitting a form, opening a dialog, or using a cancel action.",source:"@site/docs/development/headless-styles/IconButton.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/IconButton",permalink:"/docs/next/development/headless-styles/IconButton",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/IconButton.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"Button",permalink:"/docs/next/tags/button"},{label:"Icon",permalink:"/docs/next/tags/icon"},{label:"Icon Button",permalink:"/docs/next/tags/icon-button"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Button","Icon","Icon Button"]},sidebar:"development",previous:{title:"Icon",permalink:"/docs/next/development/headless-styles/Icon"},next:{title:"Input",permalink:"/docs/next/development/headless-styles/Input"}},k={},v=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Icon Button Sentiments",id:"icon-button-sentiments",level:3},{value:"Icon Button Usage",id:"icon-button-usage",level:3},{value:"Icon Button sizes",id:"icon-button-sizes",level:3},{value:"Disabled Buttons",id:"disabled-buttons",level:3},{value:"Extending",id:"extending",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"IconButtonOptions",id:"iconbuttonoptions",level:3},{value:"Props",id:"props",level:2},{value:"IconButtonProps",id:"iconbuttonprops",level:3},{value:"JSIconButtonProps",id:"jsiconbuttonprops",level:3},{value:"Guides",id:"guides",level:2},{value:"Icon Button size guide",id:"icon-button-size-guide",level:3},{value:"Button color guide",id:"button-color-guide",level:3}],B={toc:v};function I(t){var e=t.components,n=(0,a.Z)(t,g);return(0,s.kt)("wrapper",(0,o.Z)({},B,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Icon Button is used to perform an action or event, such as submitting a form, opening a dialog, or using a cancel action."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Buttons ",(0,s.kt)("strong",{parentName:"p"},"should not be used for inline text links or outbound links"),".\nThis API is meant for action-based click selections.\nFor displaying links, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/TextLink"},"Text Link API"),".")),(0,s.kt)(d.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/IconButton",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getIconButtonProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"getIconButtonProps"),": The styles for any button that only displays an icon")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"icon-button-sentiments"},"Icon Button Sentiments"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"getIconButtonProps")," comes with two sentiment options to change the visual style of an icon button. You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"action")," (default), and ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,s.kt)(i.Z,{mdxType:"BasicIconButton"}),(0,s.kt)(m.Z,{fullCode:(0,s.kt)(u.g,{mdxType:"BasicIconButtonFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,s.kt)(u.y,{mdxType:"BasicIconButtonPreview"})),(0,s.kt)("h3",{id:"icon-button-usage"},"Icon Button Usage"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"getIconButtonProps")," comes with three usage options to change the visual style of an icon button. You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"square")," (default), 'round', and ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,s.kt)(l.Z,{mdxType:"IconButtonUsage"}),(0,s.kt)(m.Z,{fullCode:(0,s.kt)(c.P,{mdxType:"IconButtonUsageFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,s.kt)(c.k,{mdxType:"IconButtonUsagePreview"})),(0,s.kt)("h3",{id:"icon-button-sizes"},"Icon Button sizes"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," options to change the size of an icon button. The options are: ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"l")," (default)."),(0,s.kt)(r.Z,{mdxType:"IconButtonSizes"}),(0,s.kt)(m.Z,{fullCode:(0,s.kt)(p.J,{mdxType:"IconButtonSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,s.kt)(p.e,{mdxType:"IconButtonSizesPreview"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We use the standard clothing size shorthand values for all ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," related options in any library we provide (i.e. xs-xxl).")),(0,s.kt)("h3",{id:"disabled-buttons"},"Disabled Buttons"),(0,s.kt)("p",null,"If you need to display a disabled Button, just pass in the ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," option to the helper."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Disabled Button example"',title:'"Disabled',Button:!0,'example"':!0},"getIconButtonProps({ disabled: true })\n")),(0,s.kt)("h2",{id:"extending"},"Extending"),(0,s.kt)("p",null,"There are times you may need to make a slight adjustment to the icon button styles, which is easy to do since we are giving you an Object."),(0,s.kt)("p",null,"Here is an example of using ",(0,s.kt)("inlineCode",{parentName:"p"},"styled-components")," to extend an icon button text color."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=page/Login/components/CustomMenuButton.jsx",title:"page/Login/components/CustomMenuButton.jsx"},"import styled from 'styled-components'\nimport {\n  getJSIconButtonProps,\n  getIconProps,\n} from '@pluralsight/headless-styles'\n\nconst { button, iconOptions } = getJSIconButtonProps({\n  ariaLabel: 'Icon button',\n})\n\nconst CustomButton = styled.button`\n  ${button.cssProps}\n  color: '#bfbfbf'\n`\n\nconst CustomMenuIcon = styled(MenuIcon)`\n  ${getIconProps(iconOptions).cssProps}\n`\n\nexport default function CustomMenuButton(props) {\n  return (\n    <CustomButton {...props}>\n      <CustomMenuIcon />\n    </CustomButton>\n  )\n}\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"When combining ",(0,s.kt)("inlineCode",{parentName:"p"},"headless-styles")," with other libraries, please follow the guides in the example codesandboxes for the best experience. ",(0,s.kt)("strong",{parentName:"p"},"Some libraries require special support"),".")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getIconButtonProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#iconbuttonoptions"},"IconButtonOptions")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"sentiment"),": 'action', ",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"size"),": 'l', ",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"usage"),": 'square'"),(0,s.kt)("td",{parentName:"tr",align:null},"Get main icon button styles.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getJSIconButtonProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#iconbuttonoptions"},"IconButtonOptions")),(0,s.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,s.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"iconbuttonoptions"},"IconButtonOptions"),(0,s.kt)("p",null,"This interface is available as an ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonOptions {\n  ariaLabel: string\n  disabled?: boolean\n  sentiment?: 'action' | 'default'\n  usage?: 'square' | 'round' | 'text'\n  size?: 'm' | 'l'\n  tech?: '' | 'svelte'\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { IconButtonOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("h3",{id:"iconbuttonprops"},"IconButtonProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    'aria-label': string\n    'data-disabled': boolean\n    className: string\n    type: 'button'\n  }\n}\n")),(0,s.kt)("h3",{id:"jsiconbuttonprops"},"JSIconButtonProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSIconButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    a11yProps: {\n      'aria-label': string\n      'data-disabled': boolean\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")),(0,s.kt)("h2",{id:"guides"},"Guides"),(0,s.kt)("h3",{id:"icon-button-size-guide"},"Icon Button size guide"),(0,s.kt)("p",null,"Icon Button sizes correlate directly to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/icons/intro"},"Icon library")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface IconButtonSizeGuide {\n  m: 's'\n  l: 'm'\n}\n")),(0,s.kt)("h3",{id:"button-color-guide"},"Button color guide"),(0,s.kt)("p",null,"Button colors are relative to the ",(0,s.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,s.kt)("inlineCode",{parentName:"p"},"sentiment")," to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro"},(0,s.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonColorGuide {\n  action: 'var(--ps-action-background)'\n  default: 'var(--ps-background)'\n  danger: 'var(--ps-danger-background)'\n}\n")))}I.isMDXComponent=!0},794:function(t,e,n){n.r(e),e.default={btnBase:"btnBase_DtNf",actionButton:"actionButton_A85B",defaultButton:"defaultButton_MrN1",dangerButton:"dangerButton_NMiY",filledButton:"filledButton_Pk9Q btnBase_DtNf",outlineButton:"outlineButton_P8ge btnBase_DtNf",textButton:"textButton_cYmR btnBase_DtNf",mButton:"mButton_TBC_",lButton:"lButton_QMKP"}},57449:function(t,e,n){n.r(e),e.default={actionIconButton:"actionIconButton_MqnL",defaultIconButton:"defaultIconButton_L60t",squareIconButton:"squareIconButton_e0tt",roundIconButton:"roundIconButton_ZEKe",textIconButton:"textIconButton_O7fz",mIconButton:"mIconButton_cD64",lIconButton:"lIconButton_gzvP"}},26261:function(t,e,n){n.r(e),e.default={textLinkBase:"textLinkBase_mmlQ"}},70765:function(t,e,n){e.B=void 0;const o=n(6495),a=n(17819),s=n(82499),i=o.__importDefault(n(794)),l=o.__importDefault(n(57449));e.B=function(t){const e=(0,s.getDefaultIconButtonOptions)(t),n=(0,s.createIconButtonProps)(e),{sentimentClass:o,sizeClass:r,usageClass:u}=(0,s.getIconButtonClasses)(e),{tech:c}=e;return{...n,button:{...n.button,...(0,a.createClassProp)(c,{defaultClass:`ps-icon-btn ${i.default.btnBase} ${l.default[u]} ${l.default[o]} ${l.default[r]}`,svelteClass:`ps-icon-btn btnBase ${u} ${o} ${r}`})}}}},82499:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createIconButtonProps=e.getIconButtonClasses=e.getDefaultIconButtonOptions=void 0;const n="button with icon",o=!1,a="action",s="l",i="square",l="";function r(t){return t?`${t}IconButton`:""}e.getDefaultIconButtonOptions=function(t){return{ariaLabel:t?.ariaLabel??n,disabled:t?.disabled??o,sentiment:t?.sentiment??a,usage:t?.usage??i,size:t?.size??s,tech:t?.tech??l}},e.getIconButtonClasses=function(t){return{sentimentClass:r(t.sentiment),sizeClass:r(t.size),usageClass:r(t.usage)}},e.createIconButtonProps=function(t){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(e=t.size,"m"===e?"s":"m"),tech:t.tech},button:{"aria-label":t.ariaLabel,"data-disabled":t.disabled}};var e}},95256:function(t,e){function n(t){return/^https?:\/\//.test(t)}function o(t){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:e.textLinkIconSize,tech:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.createTextLinkProps=e.getDefaultTextLinkOptions=e.defaultTextLinkOptions=e.textLinkIconSize=void 0,e.textLinkIconSize="1em",e.defaultTextLinkOptions={href:"",tech:""},e.getDefaultTextLinkOptions=function(t){return{href:t?.href??e.defaultTextLinkOptions.href,tech:t?.tech??e.defaultTextLinkOptions.tech}},e.createTextLinkProps=function(t,e){const a=function(t){return n(t)?{rel:"noopener external",target:"_blank"}:{}}(t);return{link:{href:t,...a},...n(t)&&{iconOptions:o(e)}}}},37541:function(t,e,n){e.j=void 0;const o=n(6495),a=n(17819),s=n(95256),i=o.__importDefault(n(26261));e.j=function(t){const e=(0,s.getDefaultTextLinkOptions)(t),n=(0,s.createTextLinkProps)(e.href,e.tech);return{...n,link:{...n.link,...(0,a.createClassProp)(e.tech,{defaultClass:`ps-text-link ${i.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);