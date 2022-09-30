"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8186],{96122:function(e,r,t){const n=t(86521);r.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},14965:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(45721),s=t(86906),a=t(56225),o=(0,a.x)({now:32}),l=(0,a.x)({kind:"indeterminate"});function i(){return n.createElement(s.Z,null,n.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},n.createElement("div",o.containerProps,n.createElement("svg",o.svgBoxProps,n.createElement("circle",o.baseCircleProps),n.createElement("circle",o.nowCircleProps))),n.createElement("div",l.containerProps,n.createElement("svg",l.svgBoxProps,n.createElement("circle",l.baseCircleProps),n.createElement("circle",l.nowCircleProps)))))}},99275:function(e,r,t){t.d(r,{N:function(){return o},p:function(){return a}});var n=t(45721),s=t(48921);function a(){return n.createElement(s.Z,null,"const progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return n.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function CircularProgress(props) {\n  const progressProps = getCircularProgressProps(props)\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},92273:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(45721),s=t(86906),a=t(56225),o=(0,a.x)({now:32,size:"xs"}),l=(0,a.x)({now:50});function i(){return n.createElement(s.Z,null,n.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},n.createElement("div",o.containerProps,n.createElement("svg",o.svgBoxProps,n.createElement("circle",o.baseCircleProps),n.createElement("circle",o.nowCircleProps))),n.createElement("div",l.containerProps,n.createElement("svg",l.svgBoxProps,n.createElement("circle",l.baseCircleProps),n.createElement("circle",l.nowCircleProps)))))}},53736:function(e,r,t){t.d(r,{E:function(){return a},p:function(){return o}});var n=t(45721),s=t(48921);function a(){return n.createElement(s.Z,null,"const xsProgressProps = getCircularProgressProps({\n  now: 32,\n  size: 'xs'\n})\nconst progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...xsProgressProps.containerProps}>\n  <svg {...xsProgressProps.svgBoxProps}>\n    <circle {...xsProgressProps.baseCircleProps} />\n    <circle {...xsProgressProps.nowCircleProps} />\n  </svg>\n</div>\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return n.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function XSCircularProgress(props) {\n  const progressProps = getCircularProgressProps({...props, size: 'xs'})\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},19048:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(45721),s=t(86906),a=(0,t(56225).x)({kind:"indeterminate"});function o(){return n.createElement(s.Z,null,n.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto"}},n.createElement("div",a.containerProps,n.createElement("svg",a.svgBoxProps,n.createElement("circle",a.baseCircleProps),n.createElement("circle",a.nowCircleProps)))))}},6797:function(e,r,t){t.d(r,{K:function(){return a},k:function(){return o}});var n=t(45721),s=t(48921);function a(){return n.createElement(s.Z,null,"const loadingProps = getCircularProgressProps({ kind: 'indeterminate'})\n\n<div {...loadingProps.containerProps}>\n  <svg {...loadingProps.svgBoxProps}>\n    <circle {...loadingProps.baseCircleProps} />\n    <circle {...loadingProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return n.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function LoadingProgress(props) {\n  const loadingProps = getCircularProgressProps({...props, kind: 'indeterminate'})\n\n  return (\n    <div {...loadingProps.containerProps}>\n      <svg {...loadingProps.svgBoxProps}>\n        <circle {...loadingProps.baseCircleProps} />\n        <circle {...loadingProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},86906:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(45721),s="base_M3w8",a="column_mb9C base_M3w8",o={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function l(e){var r;void 0===e&&(e=o);var t=e.column?a:s;return n.createElement("div",{className:t,style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(r=e.textAlign)?r:"center"}},e.children)}},54288:function(e,r,t){t.d(r,{Z:function(){return I}});var n=t(60953),s=t(59005),a=t(45721),o=t(3676),l="button_sEkW",i="chakra_ow8e",c="chakraCircle_c8Xz",p="list_rMMG",u="listItem_bLPI",d="icon_nzIq",g="svelteBackground_c8BA",m="svelteOutline_tdvb",P=["className"],v=a.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},a.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=a.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),h=a.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),a.createElement("path",{className:g,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:v,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:a.createElement("svg",{"aria-hidden":"true",className:d+" "+i,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),a.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:a.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:h,id:"svelte",label:"View Svelte"}}},C={size:"m",usage:"text"};function b(e){var r=k.results[e.techId],t=(0,o.B)(C).button.className,n="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return a.createElement("a",{"aria-label":r.label,className:t+" "+l,href:n,name:r.label,rel:"noopener noreferrer",target:"_blank",title:r.label},e.children)}function x(e){var r=e.techId,t=Object.assign({},(0,o.B)(C)).button,i=t.className,c=(0,s.Z)(t,P);return a.createElement("button",(0,n.Z)({className:i+" "+l,onClick:e.onToggleShow,title:k.results[r].label},c),a.createElement(y,{tabId:r}))}function y(e){return k.results[e.tabId].icon}function w(e){var r=e.techId;return a.createElement("li",{className:u},"source"===r?a.createElement(x,{onToggleShow:e.onToggleShow,techId:r}):a.createElement(b,{techId:r,href:e.sandboxList[r]},a.createElement(y,{tabId:r})))}function B(e){return a.createElement("ul",{className:p},k.items.map((function(r){return a.createElement(w,{key:r,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:r})})))}function N(e){var r=(0,a.useState)(!1),t=r[0],n=r[1];return a.createElement("div",null,a.createElement(B,{onToggleShow:function(){n((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var I=(0,a.memo)(N)},35053:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(45721),s=t(28378),a=t(39549),o=t(24217),l=t(96122);function i(e){var r=e.href,t=(0,s.j)({href:r}),i=(0,a.L)(t.iconOptions),c=r.includes("github")?o.Z:l.Z;return n.createElement("a",t.link,n.createElement(c,i),e.children)}},92338:function(e,r,t){var n=t(45721),s=t(39549),a=t(22534),o=Object.assign({React:n},n,{getIconProps:s.L,PlaceholderIcon:a.Z});r.Z=o},54391:function(e,r,t){t.r(r),t.d(r,{assets:function(){return h},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return P},metadata:function(){return f},toc:function(){return k}});var n=t(60953),s=t(59005),a=(t(45721),t(70167)),o=t(14965),l=t(19048),i=t(92273),c=t(99275),p=t(6797),u=t(53736),d=t(35053),g=t(54288),m=["components"],P={tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},v=void 0,f={unversionedId:"development/headless-styles/CircularProgress",id:"version-0.1.0-alpha/development/headless-styles/CircularProgress",title:"Circular Progress",description:"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/CircularProgress.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/CircularProgress",permalink:"/docs/development/headless-styles/CircularProgress",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/CircularProgress.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Progress",permalink:"/docs/tags/progress"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},sidebar:"development",previous:{title:"Checkbox",permalink:"/docs/development/headless-styles/Checkbox"},next:{title:"Confirm Dialog",permalink:"/docs/development/headless-styles/ConfirmDialog"}},h={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Circular Progress",id:"basic-circular-progress",level:3},{value:"Indeterminate CircularProgress",id:"indeterminate-circularprogress",level:3},{value:"Circular Progress sizes",id:"circular-progress-sizes",level:3},{value:"MUI",id:"mui",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"CircularProgressOptions",id:"circularprogressoptions",level:3},{value:"CircularProgressA11yOptions",id:"circularprogressa11yoptions",level:3},{value:"Props",id:"props",level:2},{value:"A11yProps",id:"a11yprops",level:3},{value:"CircularProgressProps",id:"circularprogressprops",level:3},{value:"JSCircularProgressProps",id:"jscircularprogressprops",level:3}],C={toc:k};function b(e){var r=e.components,t=(0,s.Z)(e,m);return(0,a.kt)("wrapper",(0,n.Z)({},C,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Circular Progress ",(0,a.kt)("strong",{parentName:"p"},"should not be used for initial page loading"),". This API is meant for action-based responses that usually require a fetch call. For page loading, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Skeleton"},"Skeleton API"),".")),(0,a.kt)(d.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/CircularProgress",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCircularProgressProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determinate Progress: fills the ciruclar track with color as the indicator moves from 0 to 360 degrees."),(0,a.kt)("li",{parentName:"ul"},'Indeterminate progress: spins in a "loading" animation along the color track.')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-circular-progress"},"Basic Circular Progress"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," comes with two kinds to change the visual style of the progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"determinate")," (default), and ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate"),"."),(0,a.kt)(o.Z,{mdxType:"BasicCircularProgress"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(c.N,{mdxType:"BasicCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(c.p,{mdxType:"BasicCircularProgressPreview"})),(0,a.kt)("h3",{id:"indeterminate-circularprogress"},"Indeterminate CircularProgress"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate")," kind is to be used when replacing content during an action-based fetch call."),(0,a.kt)(l.Z,{mdxType:"IndeterminateCircularProgress"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(p.k,{mdxType:"IndeterminateCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(p.K,{mdxType:"IndeterminateCircularProgressPreview"})),(0,a.kt)("h3",{id:"circular-progress-sizes"},"Circular Progress sizes"),(0,a.kt)("p",null,"There are two sizes available for the circular-progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"xs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," (default)."),(0,a.kt)(i.Z,{mdxType:"CircularProgressSizes"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(u.p,{mdxType:"CircularProgressSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(u.E,{mdxType:"CircularProgressSizesPreview"})),(0,a.kt)("h3",{id:"mui"},"MUI"),(0,a.kt)("p",null,"The MUI library is incompatible with the Pluralsight Design Circular Progress due to the fundamental difference in how the component is built (they use a single ",(0,a.kt)("inlineCode",{parentName:"p"},"circle")," component and our design requires two. This is important for accessibility)."),(0,a.kt)("p",null,"If you use MUI, we recommend using our code examples displayed in each section."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," returns an ",(0,a.kt)("a",{parentName:"p",href:"#a11yprops"},"a11yProps"),' Object to spread over the "container" component.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress."),(0,a.kt)("li",{parentName:"ul"},"It uses ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"now")," value passed into the ",(0,a.kt)("a",{parentName:"li",href:"#circularprogressoptions"},"CircularProgressOptions")," to ensure the progress percent is visible to screen readers.")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kind"),": 'determinate', ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,a.kt)("td",{parentName:"tr",align:null},"Get main circular-progress styles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getJSCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API.")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"circularprogressoptions"},"CircularProgressOptions"),(0,a.kt)("p",null,"This interface is available as an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressOptions extends CircularProgressA11yOptions {\n  kind?: 'determinate' | 'indeterminate'\n  size?: 'xs' | 'm'\n  tech?: 'svelte'\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h3",{id:"circularprogressa11yoptions"},"CircularProgressA11yOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressA11yOptions {\n  max?: number\n  min?: number\n  now?: number\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"a11yprops"},"A11yProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface A11yProps {\n  'aria-valuemax': number\n  'aria-valuemin': number\n  'aria-valuenow': number\n  role: 'progressbar'\n}\n")),(0,a.kt)("h3",{id:"circularprogressprops"},"CircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProgressProps {\n  containerProps: {\n    a11yProps: A11yProps,\n    className: string\n  }\n  svgBoxProps: {\n    className: string,\n    viewBox: string\n  },\n  baseCircleProps: {\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,\n    className: string\n  },\n  nowCircleProps: {\n    className: string,\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,,\n    strokeDashoffset: string,\n    strokeDasharray: string\n  },\n  labelProps: {\n    className: string,\n    value: string\n  }\n}\n")),(0,a.kt)("h3",{id:"jscircularprogressprops"},"JSCircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSProgressProps {\n  containerProps: {\n    a11yProps: A11yProps\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n  }\n  svgBoxProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      viewBox: string\n    }\n  }\n  baseCircleProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      viewBox: string\n    }\n  }\n  nowCircleProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      strokeDashoffset: string\n      strokeDasharray: string\n      viewBox: string\n    }\n  }\n  labelProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    value: string\n  }\n}\n")))}b.isMDXComponent=!0},11851:function(e,r,t){t.r(r),r.default={btnBase:"btnBase_e54Q",actionButton:"actionButton_A0Wt",defaultButton:"defaultButton_rdzq",dangerButton:"dangerButton_qzbr",filledButton:"filledButton_OPV5 btnBase_e54Q",outlineButton:"outlineButton_TdbR btnBase_e54Q",textButton:"textButton_g2ot btnBase_e54Q",mButton:"mButton_MW9u",lButton:"lButton_vwv0"}},89249:function(e,r,t){t.r(r),r.default={base:"base_wZmx",box:"box_B_qV",circle:"circle_uhpu",circleNow:"circleNow_heuH",text:"text_cTXT",determinate:"determinate_hPPP box_B_qV",indeterminate:"indeterminate_frpy",spin:"spin_Vgj1",loading:"loading_HW69",mSize:"mSize_Fo03 box_B_qV",xsSize:"xsSize_N4M9 box_B_qV"}},85759:function(e,r,t){t.r(r),r.default={actionIconButton:"actionIconButton_U4s3",defaultIconButton:"defaultIconButton_rDIa",squareIconButton:"squareIconButton_atJH",roundIconButton:"roundIconButton_zNBJ",textIconButton:"textIconButton_wsk4",mIconButton:"mIconButton_xGkW",lIconButton:"lIconButton_gPXP"}},65976:function(e,r,t){t.r(r),r.default={textLinkBase:"textLinkBase_THqx"}},56225:function(e,r,t){r.x=void 0;const n=t(6495),s=t(91037),a=t(10311),o=n.__importDefault(t(89249)),l="ps-circular-progress";r.x=function(e){const{kind:r,size:t,tech:n,...i}=(0,a.getDefaultCircularProgressOptions)(e),c=(0,a.getA11yCircularProgressProps)(i,r),p=`${t}Size`,u=i.now,d=`${u}%`;return{containerProps:{...c,...(0,s.createClassProp)(n,{svelteClass:`${l} base`,defaultClass:`${l} ${o.default.base}`})},svgBoxProps:{...(0,s.createClassProp)(n,{svelteClass:`${l}-box box ${p} ${r}`,defaultClass:`${l}-box ${o.default[p]} ${o.default[r]}`}),viewBox:a.VIEWBOX},baseCircleProps:{...(0,a.getBaseCircleProps)(n),...(0,s.createClassProp)(n,{svelteClass:`${l}-base circle`,defaultClass:`${l}-base ${o.default.circle}`})},nowCircleProps:{...(0,a.getBaseCircleProps)(n),...(0,s.createClassProp)(n,{svelteClass:`${l}-now circleNow ${r}`,defaultClass:`${l}-now ${o.default.circleNow} ${o.default[r]}`}),...(0,a.getStrokeProps)(u,n)},labelProps:{...(0,s.createClassProp)(n,{svelteClass:`${l}-label text`,defaultClass:`${l}-label ${o.default.text}`}),value:d}}}},10311:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.getA11yCircularProgressProps=r.getDefaultCircularProgressOptions=r.getStrokeProps=r.getBaseCircleProps=r.VIEWBOX=void 0;const n=t(91037),s="progressbar",a="aria-valuemax",o="aria-valuemin",l="aria-valuenow",i="determinate",c=100,p=0,u=0,d="m",g="";r.VIEWBOX="0 0 100 100",r.getBaseCircleProps=function(e){return{cx:"50",cy:"50",r:"42",[(0,n.transformCasing)("strokeWidth",(0,n.getSyntaxType)(e))]:"12px"}},r.getStrokeProps=function(e,r){const t=function(e){const r=2.64*e;return`${r} ${264-r}`}(e);return{[(0,n.transformCasing)("strokeDashoffset",(0,n.getSyntaxType)(r))]:"66",[(0,n.transformCasing)("strokeDasharray",(0,n.getSyntaxType)(r))]:t}},r.getDefaultCircularProgressOptions=function(e){return{kind:e?.kind??i,max:e?.max??c,min:e?.min??p,now:e?.now??u,size:e?.size??d,tech:e?.tech??g}},r.getA11yCircularProgressProps=function(e,r){return"indeterminate"===r?{role:s}:{[a]:e?.max,[o]:e?.min,[l]:e?.now,role:s}}},3676:function(e,r,t){r.B=void 0;const n=t(6495),s=t(91037),a=t(62208),o=n.__importDefault(t(11851)),l=n.__importDefault(t(85759));r.B=function(e){const r=(0,a.getDefaultIconButtonOptions)(e),t=(0,a.createIconButtonProps)(r),{sentimentClass:n,sizeClass:i,usageClass:c}=(0,a.getIconButtonClasses)(r),{tech:p}=r;return{...t,button:{...t.button,...(0,s.createClassProp)(p,{defaultClass:`ps-icon-btn ${o.default.btnBase} ${l.default[c]} ${l.default[n]} ${l.default[i]}`,svelteClass:`ps-icon-btn btnBase ${c} ${n} ${i}`})}}}},62208:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.createIconButtonProps=r.getIconButtonClasses=r.getDefaultIconButtonOptions=void 0;const t="button with icon",n=!1,s="action",a="l",o="square",l="";function i(e){return e?`${e}IconButton`:""}r.getDefaultIconButtonOptions=function(e){return{ariaLabel:e?.ariaLabel??t,disabled:e?.disabled??n,sentiment:e?.sentiment??s,usage:e?.usage??o,size:e?.size??a,tech:e?.tech??l}},r.getIconButtonClasses=function(e){return{sentimentClass:i(e.sentiment),sizeClass:i(e.size),usageClass:i(e.usage)}},r.createIconButtonProps=function(e){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(r=e.size,"m"===r?"s":"m"),tech:e.tech},button:{"aria-label":e.ariaLabel,"data-disabled":e.disabled}};var r}},70706:function(e,r){function t(e){return/^https?:\/\//.test(e)}function n(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:r.textLinkIconSize,tech:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.createTextLinkProps=r.getDefaultTextLinkOptions=r.defaultTextLinkOptions=r.textLinkIconSize=void 0,r.textLinkIconSize="1em",r.defaultTextLinkOptions={href:"",tech:""},r.getDefaultTextLinkOptions=function(e){return{href:e?.href??r.defaultTextLinkOptions.href,tech:e?.tech??r.defaultTextLinkOptions.tech}},r.createTextLinkProps=function(e,r){const s=function(e){return t(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...s},...t(e)&&{iconOptions:n(r)}}}},28378:function(e,r,t){r.j=void 0;const n=t(6495),s=t(91037),a=t(70706),o=n.__importDefault(t(65976));r.j=function(e){const r=(0,a.getDefaultTextLinkOptions)(e),t=(0,a.createTextLinkProps)(r.href,r.tech);return{...t,link:{...t.link,...(0,s.createClassProp)(r.tech,{defaultClass:`ps-text-link ${o.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);