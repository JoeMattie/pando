"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8661],{96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},66381:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(59005),s=n(45721),l=n(30542),o=n(21700),i=["children","icon"];function r(e){var t=e.children,n=e.icon,r=(0,a.Z)(e,i),c=(0,l.q)(r),d=c.badge,u=c.iconWrapper,p=c.iconOptions;return s.createElement("span",d,n&&s.createElement("span",u,s.createElement(n,(0,o.L)(p))),t)}},18098:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),s=n(86906),l=n(22534),o=n(66381);function i(){return a.createElement(s.Z,null,a.createElement(o.Z,{icon:l.Z},"Default"),a.createElement(o.Z,{icon:l.Z,sentiment:"action"},"Action"),a.createElement(o.Z,{icon:l.Z,usage:"outline"},"Outline"))}},92630:function(e,t,n){n.d(t,{E:function(){return l},_:function(){return o}});var a=n(45721),s=n(48921);function l(){return a.createElement(s.Z,null,"const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n<span {....badge}>\n  <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>\n  Badge with Icon\n</span>")}function o(){return a.createElement(s.Z,null,"import { getBadgeProps, getIconProps } from '@pluralsight/headless-styles'\nimport { PlaceholderIcon } from '@pluralsight/icons'\n\nexport default function BadgeSize() {\n  const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n  return (\n    <span {....badge}>\n      <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>\n      Badge with Icon\n    </span>\n  );\n}")}},52286:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s=n(86906),l=n(66381);function o(){return a.createElement(s.Z,null,a.createElement(l.Z,{usage:"outline"},"S (Default)"),a.createElement(l.Z,{usage:"outline",size:"xs"},"XS"))}},54624:function(e,t,n){n.d(t,{X:function(){return l},i:function(){return o}});var a=n(45721),s=n(48921);function l(){return a.createElement(s.Z,null,"<span {...getBadgeProps().badge}>Default (s)</span>\n<span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>")}function o(){return a.createElement(s.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BadgeSize() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default (s)</span>\n      <span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>\n    </div>\n  );\n}")}},76995:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s=n(86906),l=n(66381);function o(){return a.createElement(s.Z,null,a.createElement(l.Z,null,"Filled (Default)"),a.createElement(l.Z,{usage:"outline"},"Outline"))}},52454:function(e,t,n){n.d(t,{k:function(){return l},s:function(){return o}});var a=n(45721),s=n(48921);function l(){return a.createElement(s.Z,null,"<span {...getBadgeProps().badge}>Default</span>\n<span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>")}function o(){return a.createElement(s.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BadgeUsage() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default</span>\n      <span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>\n    </div>\n  );\n}")}},8806:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s=n(86906),l=n(66381);function o(){return a.createElement(s.Z,null,a.createElement(l.Z,null,"Default"),a.createElement(l.Z,{sentiment:"action"},"Action"))}},2033:function(e,t,n){n.d(t,{A:function(){return o},J:function(){return l}});var a=n(45721),s=n(48921);function l(){return a.createElement(s.Z,null,"<span {...getBadgeProps().badge}>Default</span>\n<span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>")}function o(){return a.createElement(s.Z,null,"import { getBadgeProps } from '@pluralsight/headless-styles'\n\nexport default function BasicBadges() {\n  return (\n    <div>\n      <span {...getBadgeProps().badge}>Default</span>\n      <span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>\n    </div>\n  );\n}")}},86906:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),s="base_M3w8",l="column_mb9C base_M3w8",o={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function i(e){var t;void 0===e&&(e=o);var n=e.column?l:s;return a.createElement("div",{className:n,style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center"}},e.children)}},54288:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(60953),s=n(59005),l=n(45721),o=n(70765),i="button_sEkW",r="chakra_ow8e",c="chakraCircle_c8Xz",d="list_rMMG",u="listItem_bLPI",p="icon_nzIq",g="svelteBackground_c8BA",m="svelteOutline_tdvb",f=["className"],h=l.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 24 24"},l.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),b=l.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 1024 1024"},l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),B=l.createElement("svg",{"aria-hidden":"true",className:""+p,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),l.createElement("path",{className:g,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var v={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:b,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:l.createElement("svg",{"aria-hidden":"true",className:p+" "+r,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),l.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:l.createElement("svg",{"aria-hidden":"true",className:p,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:B,id:"svelte",label:"View Svelte"}}},k={size:"m",usage:"text"};function x(e){var t=v.results[e.techId],n=(0,o.B)(k).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return l.createElement("a",{"aria-label":t.label,className:n+" "+i,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function y(e){var t=e.techId,n=Object.assign({},(0,o.B)(k)).button,r=n.className,c=(0,s.Z)(n,f);return l.createElement("button",(0,a.Z)({className:r+" "+i,onClick:e.onToggleShow,title:v.results[t].label},c),l.createElement(P,{tabId:t}))}function P(e){return v.results[e.tabId].icon}function N(e){var t=e.techId;return l.createElement("li",{className:u},"source"===t?l.createElement(y,{onToggleShow:e.onToggleShow,techId:t}):l.createElement(x,{techId:t,href:e.sandboxList[t]},l.createElement(P,{tabId:t})))}function I(e){return l.createElement("ul",{className:d},v.items.map((function(t){return l.createElement(N,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function w(e){var t=(0,l.useState)(!1),n=t[0],a=t[1];return l.createElement("div",null,l.createElement(I,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var C=(0,l.memo)(w)},35053:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),s=n(37541),l=n(21700),o=n(24217),i=n(96122);function r(e){var t=e.href,n=(0,s.j)({href:t}),r=(0,l.L)(n.iconOptions),c=t.includes("github")?o.Z:i.Z;return a.createElement("a",n.link,a.createElement(c,r),e.children)}},92338:function(e,t,n){var a=n(45721),s=n(21700),l=n(22534),o=Object.assign({React:a},a,{getIconProps:s.L,PlaceholderIcon:l.Z});t.Z=o},95977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return B},default:function(){return P},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return x}});var a=n(60953),s=n(59005),l=(n(45721),n(70167)),o=n(8806),i=n(2033),r=n(76995),c=n(52454),d=n(52286),u=n(54624),p=n(18098),g=n(92630),m=n(35053),f=n(54288),h=["components"],b={tags:["Development","Packages","Components","Headless Styles","Badge"]},B=void 0,v={unversionedId:"development/headless-styles/Badge",id:"development/headless-styles/Badge",title:"Badge",description:"The Badge is used to highlight a category for quick recognition.",source:"@site/docs/development/headless-styles/Badge.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Badge",permalink:"/docs/next/development/headless-styles/Badge",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/Badge.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"Badge",permalink:"/docs/next/tags/badge"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Badge"]},sidebar:"development",previous:{title:"Avatar",permalink:"/docs/next/development/headless-styles/Avatar"},next:{title:"Button",permalink:"/docs/next/development/headless-styles/Button"}},k={},x=[{value:"Import",id:"import",level:2},{value:"Basic Badge",id:"basic-badge",level:2},{value:"Badge Usage Options",id:"badge-usage-options",level:2},{value:"Badge Sizes",id:"badge-sizes",level:2},{value:"Badge with icon",id:"badge-with-icon",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"BadgeOptions",id:"badgeoptions",level:3},{value:"Props",id:"props",level:2},{value:"BadgeProps",id:"badgeprops",level:3},{value:"JSBadgeProps",id:"jsbadgeprops",level:3},{value:"Guides",id:"guides",level:2},{value:"Badge color guide",id:"badge-color-guide",level:3}],y={toc:x};function P(e){var t=e.components,n=(0,s.Z)(e,h);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Badge is used to highlight a category for quick recognition."),(0,l.kt)(m.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Badge",mdxType:"ViewSourceLink"},"View source"),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getBadgeProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("h2",{id:"basic-badge"},"Basic Badge"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two sentiments: default (default) and action."),(0,l.kt)(o.Z,{mdxType:"BasicBadge"}),(0,l.kt)(f.Z,{fullCode:(0,l.kt)(i.A,{mdxType:"BasicBadgeFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,l.kt)(i.J,{mdxType:"BasicBadgePreview"})),(0,l.kt)("h2",{id:"badge-usage-options"},"Badge Usage Options"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two usage options: filled (default) and outline."),(0,l.kt)(r.Z,{mdxType:"BadgeUsage"}),(0,l.kt)(f.Z,{fullCode:(0,l.kt)(c.s,{mdxType:"BadgeUsageFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,l.kt)(c.k,{mdxType:"BadgeUsagePreview"})),(0,l.kt)("h2",{id:"badge-sizes"},"Badge Sizes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"getBadgeProps")," helper comes with two size options: xs and s (default)."),(0,l.kt)(d.Z,{mdxType:"BadgeSize"}),(0,l.kt)(f.Z,{fullCode:(0,l.kt)(u.i,{mdxType:"BadgeSizeFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,l.kt)(u.X,{mdxType:"BadgeSizePreview"})),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"iconOptions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"iconWrapper")," ",(0,l.kt)("a",{parentName:"p",href:"#badgeprops"},"props")," are only available for the ",(0,l.kt)("strong",{parentName:"p"},"small size")," option. This is to avoid displaying icons that are un-readable due to the sizing.")),(0,l.kt)("h2",{id:"badge-with-icon"},"Badge with icon"),(0,l.kt)("p",null,"To make the Badge more visual, we provide a set of ",(0,l.kt)("inlineCode",{parentName:"p"},"iconOptions")," that are returned from the helper."),(0,l.kt)(p.Z,{mdxType:"BadgeIcon"}),(0,l.kt)(f.Z,{fullCode:(0,l.kt)(g._,{mdxType:"BadgeIconFullPreview"}),sandboxList:{chakra:"basic-chakra-gns4x8",joy:"basic-mui-nbrcn0",styled:"basic-yp3h8b",svelte:"basic-svelte-03mp2y"},mdxType:"LiveExampleTabs"},(0,l.kt)(g.E,{mdxType:"BadgeIconPreview"})),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getBadgeProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#badgeoptions"},"BadgeOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sentiment"),": 'default'",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"usage:")," filled",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"size:")," 's'"),(0,l.kt)("td",{parentName:"tr",align:null},"Get badge styles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSBadgeProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#badgeoptions"},"BadgeOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API.")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"badgeoptions"},"BadgeOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeOptions {\n  sentiment?: 'default' | 'action'\n  usage?: 'filled' | 'outline'\n  size?: 'xs' | 's'\n  tech?: 'svelte'\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { BadgeOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"badgeprops"},"BadgeProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  badge: {\n    className: string\n  }\n  iconWrapper: {\n    className: string\n  }\n}\n")),(0,l.kt)("h3",{id:"jsbadgeprops"},"JSBadgeProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSBadgeProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  badge: {\n    cssProps: string\n    styles: Record<CSSProps, string>\n  }\n  iconWrapper: {\n    cssProps: string\n    styles: Record<CSSProps, string>\n  }\n}\n")),(0,l.kt)("h2",{id:"guides"},"Guides"),(0,l.kt)("h3",{id:"badge-color-guide"},"Badge color guide"),(0,l.kt)("p",null,"Badge colors are relative to the ",(0,l.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,l.kt)("inlineCode",{parentName:"p"},"sentiment")," to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro"},(0,l.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface BadgeColorGuide {\n  default: 'var(--ps-surface-medium)'\n  action: 'var(--ps-action-background)'\n  outline: 'transparent'\n}\n")))}P.isMDXComponent=!0},31623:function(e,t,n){n.r(t),t.default={baseBadge:"baseBadge_TI3z",badgeIcon:"badgeIcon_ZUIc",filledBadge:"filledBadge_llyW baseBadge_TI3z",outlineBadge:"outlineBadge_ZWaP",defaultBadge:"defaultBadge_XvA3 filledBadge_llyW baseBadge_TI3z",actionBadge:"actionBadge_wd28 filledBadge_llyW baseBadge_TI3z",xsBadge:"xsBadge_iAVS",sBadge:"sBadge_ci_F"}},794:function(e,t,n){n.r(t),t.default={btnBase:"btnBase_DtNf",actionButton:"actionButton_A85B",defaultButton:"defaultButton_MrN1",dangerButton:"dangerButton_NMiY",filledButton:"filledButton_Pk9Q btnBase_DtNf",outlineButton:"outlineButton_P8ge btnBase_DtNf",textButton:"textButton_cYmR btnBase_DtNf",mButton:"mButton_TBC_",lButton:"lButton_QMKP"}},57449:function(e,t,n){n.r(t),t.default={actionIconButton:"actionIconButton_MqnL",defaultIconButton:"defaultIconButton_L60t",squareIconButton:"squareIconButton_e0tt",roundIconButton:"roundIconButton_ZEKe",textIconButton:"textIconButton_O7fz",mIconButton:"mIconButton_cD64",lIconButton:"lIconButton_gzvP"}},26261:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_mmlQ"}},30542:function(e,t,n){t.q=void 0;const a=n(6495),s=n(17819),l=n(82930),o=a.__importDefault(n(31623));function i(e){return(0,l.canShowIcon)(e.size)?{iconWrapper:{...(0,s.createClassProp)(e.tech,{defaultClass:`ps-badge-icon ${o.default.badgeIcon}`,svelteClass:"ps-badge-icon badgeIcon"})}}:{}}t.q=function(e){const{tech:t,...n}=(0,l.getDefaultBadgeOptions)(e),a=(0,l.createBadgeProps)({...n,tech:t}),{sentimentClass:r,sizeClass:c,usageClass:d}=(0,l.createBadgeClasses)(n);return{...a,...i({...n,tech:t}),badge:{...a.badge,...(0,s.createClassProp)(t,{svelteClass:`ps-badge baseBadge ${r} ${c} ${d}`,defaultClass:`ps-badge ${o.default[r]} ${o.default[c]} ${o.default[d]}`})}}}},82930:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.canShowIcon=t.createBadgeProps=t.createBadgeClasses=t.getDefaultBadgeOptions=void 0;const n="default",a="filled",s="s",l="";function o(e){return"s"===e}t.getDefaultBadgeOptions=function(e){return{sentiment:e?.sentiment??n,usage:e?.usage??a,size:e?.size??s,tech:e?.tech??l}},t.createBadgeClasses=function(e){return{sentimentClass:`${e.sentiment}Badge`,sizeClass:`${e.size}Badge`,usageClass:`${e.usage}Badge`}},t.createBadgeProps=function(e){const t=function(e){return o(e.size)?{iconOptions:{ariaHidden:!0,ariaLabel:"",customSize:"0.75rem",tech:e.tech},iconWrapper:{}}:{}}(e);return{...t,badge:{}}},t.canShowIcon=o},70765:function(e,t,n){t.B=void 0;const a=n(6495),s=n(17819),l=n(82499),o=a.__importDefault(n(794)),i=a.__importDefault(n(57449));t.B=function(e){const t=(0,l.getDefaultIconButtonOptions)(e),n=(0,l.createIconButtonProps)(t),{sentimentClass:a,sizeClass:r,usageClass:c}=(0,l.getIconButtonClasses)(t),{tech:d}=t;return{...n,button:{...n.button,...(0,s.createClassProp)(d,{defaultClass:`ps-icon-btn ${o.default.btnBase} ${i.default[c]} ${i.default[a]} ${i.default[r]}`,svelteClass:`ps-icon-btn btnBase ${c} ${a} ${r}`})}}}},82499:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createIconButtonProps=t.getIconButtonClasses=t.getDefaultIconButtonOptions=void 0;const n="button with icon",a=!1,s="action",l="l",o="square",i="";function r(e){return e?`${e}IconButton`:""}t.getDefaultIconButtonOptions=function(e){return{ariaLabel:e?.ariaLabel??n,disabled:e?.disabled??a,sentiment:e?.sentiment??s,usage:e?.usage??o,size:e?.size??l,tech:e?.tech??i}},t.getIconButtonClasses=function(e){return{sentimentClass:r(e.sentiment),sizeClass:r(e.size),usageClass:r(e.usage)}},t.createIconButtonProps=function(e){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(t=e.size,"m"===t?"s":"m"),tech:e.tech},button:{"aria-label":e.ariaLabel,"data-disabled":e.disabled}};var t}},95256:function(e,t){function n(e){return/^https?:\/\//.test(e)}function a(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const s=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...s},...n(e)&&{iconOptions:a(t)}}}},37541:function(e,t,n){t.j=void 0;const a=n(6495),s=n(17819),l=n(95256),o=a.__importDefault(n(26261));t.j=function(e){const t=(0,l.getDefaultTextLinkOptions)(e),n=(0,l.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,s.createClassProp)(t.tech,{defaultClass:`ps-text-link ${o.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);