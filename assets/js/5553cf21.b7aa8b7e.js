"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99209],{61411:function(e,a,t){const n=t(86521);a.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},75362:function(e,a,t){const n=t(86521);a.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},81593:function(e,a,t){const n=t(86521);a.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4Zm2 0c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2ZM4.5 20a.5.5 0 0 1-.5-.5V19c0-3.533 3.29-6 8-6s8 2.467 8 6v.5a.5.5 0 0 1-.5.5h-15Zm13.342-2H6.159c.598-1.808 2.834-3 5.842-3 3.008 0 5.243 1.192 5.841 3Z"})})}},96596:function(e,a,t){var n=t(45721),r=t(98260),l=t(67235);function s(e){const a=(0,r.g)({label:e.label,sentiment:"default",size:e.size});return n.createElement("span",a.wrapper,n.createElement("span",a.label,e.size))}a.Z=function(){return n.createElement(l.Z,null,n.createElement(s,{size:"xs"}),n.createElement(s,{size:"s"}),n.createElement(s,{size:"m"}),n.createElement(s,{size:"l"}),n.createElement(s,{size:"xl"}))}},45323:function(e,a,t){t.d(a,{K:function(){return l},m:function(){return s}});var n=t(45721),r=t(27233);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'extra large avatar',\n  size: 'xl'\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>xl</span>\n</span>")}function s(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label\n    sentiment: props.sentiment,\n    // highlight-next-line\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},13215:function(e,a,t){var n=t(45721),r=t(98260),l=t(65553),s=t(81593),o=t(67235);function i(e){const a=(0,r.g)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",a.wrapper,n.createElement(s.Z,(0,l.g)(a.iconOptions)))}function p(e){const a=(0,r.g)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",a.wrapper,n.createElement("span",a.label,a.label.value))}a.Z=function(){return n.createElement(o.Z,null,n.createElement(p,{sentiment:"default",label:"default avatar"}),n.createElement(i,{sentiment:"default",label:"default icon avatar"}),n.createElement(p,{sentiment:"action",label:"action avatar"}),n.createElement(i,{sentiment:"action",label:"action icon avatar"}))}},55630:function(e,a,t){t.d(a,{W:function(){return s},v:function(){return l}});var n=t(45721),r=t(27233);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'Pluralsight avatar'\n  sentiment: 'default',\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>{avatar.label.value}</span>\n</span>")}function s(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label,\n    // highlight-next-line\n    sentiment: props.sentiment,\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},67235:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function s(e){void 0===e&&(e=l);const a=e.type??l.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",s={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return n.createElement("div",{className:r[a],style:s},e.children)}},25302:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(81648),r=t(45721),l=t(37677),s="button_sEkW",o="chakra_ow8e",i="chakraCircle_c8Xz",p="list_rMMG",c="listItem_bLPI",u="icon_nzIq",d="svelteBackground_c8BA",v="svelteOutline_tdvb";const m=r.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 24 24"},r.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),g=r.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 1024 1024"},r.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),h=r.createElement("svg",{"aria-hidden":"true",className:`${u}`,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:v,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),r.createElement("path",{className:d,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));const f={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:m,id:"source",href:"",label:"Show full source"},styled:{icon:g,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:r.createElement("svg",{"aria-hidden":"true",className:`${u} ${o}`,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{className:i,width:"582",height:"582",rx:"291"}),r.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:r.createElement("svg",{"aria-hidden":"true",className:u,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:h,id:"svelte",label:"View Svelte"}}},b={size:"m",usage:"text"};function k(e){const a=f.results[e.techId],{className:t}=(0,l.g)(b).button,n=`https://codesandbox.io/s/${e.href}?file=/src/App.tsx`;return r.createElement("a",{"aria-label":a.label,className:`${t} ${s}`,href:n,name:a.label,rel:"noopener noreferrer",target:"_blank",title:a.label},e.children)}function _(e){const{techId:a}=e,{className:t,...o}={...(0,l.g)(b)}.button;return r.createElement("button",(0,n.Z)({className:`${t} ${s}`,onClick:e.onToggleShow,title:f.results[a].label},o),r.createElement(A,{tabId:a}))}function A(e){return f.results[e.tabId].icon}function S(e){const{techId:a}=e;return r.createElement("li",{className:c},"source"===a?r.createElement(_,{onToggleShow:e.onToggleShow,techId:a}):r.createElement(k,{techId:a,href:e.sandboxList[a]},r.createElement(A,{tabId:a})))}function x(e){return r.createElement("ul",{className:p},f.items.map((a=>r.createElement(S,{key:a,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:a}))))}function C(e){const[a,t]=(0,r.useState)(!1);return r.createElement("div",null,r.createElement(x,{onToggleShow:function(){t((e=>!e))},sandboxList:e.sandboxList}),a?e.fullCode:e.children)}var w=(0,r.memo)(C)},69477:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(45721),r=t(41539),l=t(65553),s=t(61411),o=t(75362);function i(e){const{href:a}=e,t=(0,r.g)({href:a}),i=(0,l.g)(t.iconOptions),p=a.includes("github")?s.Z:o.Z;return n.createElement("a",t.link,n.createElement(p,i),e.children)}},12045:function(e,a,t){var n=t(45721),r=t(83052),l=t(79920),s=t(77233),o=t(49632),i=t(37677),p=t(65553),c=t(1579),u=t(72322),d=t(85914),v=t(15082),m=t(54067),g=t(80069),h=t(82979),f=t(74361),b=t(64388),k=t(17549),_=t(4863),A=t(77643),S=t(21556),x=t(71111),C=t(78398),w=t(31942),y=t(61586),P=t(1263),N=t(7315),L=t(61700);const z={React:n,...n,getButtonProps:r.g,getFormControlProps:l.g,getFormLabelProps:s.g,getGridProps:o.g,getGridItemProps:o.a,getIconButtonProps:i.g,getIconProps:p.g,getInputProps:c.g,getMenuProps:u.g,getMenuItemProps:u.a,getPaginationProps:d.g,getPopoverProps:v.g,getRadioProps:m.g,getSelectProps:g.g,getSelectOptionProps:g.a,getTagProps:h.g,CalendarIcon:f.Z,ChevronDownIcon:b.Z,ChevronRightIcon:k.Z,CloseIcon:_.Z,EyeIcon:A.Z,EyeOffIcon:S.Z,PlaceholderIcon:x.Z,SearchIcon:C.Z,WarningTriangleFilledIcon:w.Z,useAutoFormatDate:y.y,useMenuInteraction:P.P,useRovingTabIndex:N.X,useSubmenuInteraction:L.i};a.Z=z},78811:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return v},toc:function(){return g}});var n=t(81648),r=(t(45721),t(70167)),l=t(13215),s=t(55630),o=t(96596),i=t(45323),p=t(69477),c=t(25302);const u={tags:["images","gravatar","pre-loading","lazy-loading"]},d=void 0,v={unversionedId:"development/headless-styles/Avatar",id:"version-0.4.1/development/headless-styles/Avatar",title:"Avatar",description:"The Avatar is used to represent a user and is designed to display",source:"@site/versioned_docs/version-0.4.1/development/headless-styles/Avatar.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Avatar",permalink:"/docs/development/headless-styles/Avatar",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/development/headless-styles/Avatar.mdx",tags:[{label:"images",permalink:"/docs/tags/images"},{label:"gravatar",permalink:"/docs/tags/gravatar"},{label:"pre-loading",permalink:"/docs/tags/pre-loading"},{label:"lazy-loading",permalink:"/docs/tags/lazy-loading"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["images","gravatar","pre-loading","lazy-loading"]},sidebar:"development",previous:{title:"Admonition",permalink:"/docs/development/headless-styles/Admonition"},next:{title:"Badge",permalink:"/docs/development/headless-styles/Badge"}},m={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Avatar Kinds (fallback only)",id:"avatar-kinds-fallback-only",level:3},{value:"Avatar Sizes",id:"avatar-sizes",level:3},{value:"Avatar Content",id:"avatar-content",level:3},{value:"Image (preferred)",id:"image-preferred",level:4},{value:"Initials (fallback)",id:"initials-fallback",level:4},{value:"Icon (last resort)",id:"icon-last-resort",level:4},{value:"PreloadImage Hook",id:"preloadimage-hook",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"AvatarOptions",id:"avataroptions",level:3},{value:"Props",id:"props",level:2},{value:"AvatarProps",id:"avatarprops",level:3},{value:"JSAvatarProps",id:"jsavatarprops",level:3}],h={toc:g};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Avatar is used to represent a user and is designed to display\na profile image, initials, or fallback icon."),(0,r.kt)(p.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Avatar",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getAvatarProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"avatar-kinds-fallback-only"},"Avatar Kinds (fallback only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getAvatarProps")," helper has two kinds to change the visual color of the avatar fallback that directly correlate to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/tokens/intro#naming-convention"},"design-tokens"),". You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using Avatars, make sure there is a purpose behind the fallback colors you are choosing. ",(0,r.kt)("a",{parentName:"p",href:"#avatar-content"},"Follow our guide")," to learn how to display avatars for the best user experience.")),(0,r.kt)(l.Z,{mdxType:"BasicAvatar"}),(0,r.kt)(c.Z,{fullCode:(0,r.kt)(s.W,{mdxType:"BasicAvatarFullPreview"}),sandboxList:{chakra:"basic-avatar-react-chakra-tvxvqs",joy:"basic-avatar-mui-uv5bks",styled:"basic-avatar-css-in-js-sc-jb5imx",svelte:"basic-avatar-svelte-t60wvw"},mdxType:"LiveExampleTabs"},(0,r.kt)(s.v,{mdxType:"BasicAvatarPreview"})),(0,r.kt)("h3",{id:"avatar-sizes"},"Avatar Sizes"),(0,r.kt)("p",null,"To change the size of an Avatar, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," option.\nThe options are: ",(0,r.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," (default), ",(0,r.kt)("inlineCode",{parentName:"p"},"l"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"xl"),"."),(0,r.kt)(o.Z,{mdxType:"AvatarSizes"}),(0,r.kt)(c.Z,{fullCode:(0,r.kt)(i.m,{mdxType:"AvatarSizesFullPreview"}),sandboxList:{chakra:"basic-avatar-react-chakra-tvxvqs",joy:"basic-avatar-mui-uv5bks",styled:"basic-avatar-css-in-js-sc-jb5imx",svelte:"basic-avatar-svelte-t60wvw"},mdxType:"LiveExampleTabs"},(0,r.kt)(i.K,{mdxType:"AvatarSizesPreview"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We use the standard clothing size shorthand values for all ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," related options in any library we provide (i.e. xs-xxl).")),(0,r.kt)("h3",{id:"avatar-content"},"Avatar Content"),(0,r.kt)("p",null,"The DS Avatars have three different states to display to the user. Each state has a different purpose for usage and should follow the guides below."),(0,r.kt)("h4",{id:"image-preferred"},"Image (preferred)"),(0,r.kt)("p",null,"A profile image should be used for all Avatars no matter the context (i.e. person, platform, etc.). This will give the best visual experience for the user and should be used over all other options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: 'Harry Potter',\n  src: 'http://harrypotter.com/avatar'\n})\n\n<span {...avatarProps.wrapper}>\n  <img {...avatarProps.image} />\n</span>\n")),(0,r.kt)("h4",{id:"initials-fallback"},"Initials (fallback)"),(0,r.kt)("p",null,"In the absence of an image, the avatar's initials (up to 2 characters) should be displayed. ",(0,r.kt)("strong",{parentName:"p"},"This is not ideal")," but allows the user to still quickly put the dots together of who the avatar is meant to represent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: 'Harry Potter',\n  src: ''\n})\n\n<span {...avatarProps.wrapper}>\n  <div {...avatarProps.label}>{avatarProps.label.value}</div>\n</span>\n")),(0,r.kt)("h4",{id:"icon-last-resort"},"Icon (last resort)"),(0,r.kt)("p",null,"If neither the image nor initials are available, display an icon\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"iconOptions")," from the ",(0,r.kt)("a",{parentName:"p",href:"#avatar-props"},"AvatarProps")," Object to represent a person."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Although this option exists, ",(0,r.kt)("strong",{parentName:"p"},"it is not recommended to be used")," as it provides a vague user experience. If you have to use this option, you need to update your API to require a name for each user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: '',\n  src: ''\n})\n\n<span {...avatarProps.wrapper}>\n  <PersonIcon {...getIconProps(avatarProps.iconOptions)} />\n</span>\n")),(0,r.kt)("h2",{id:"preloadimage-hook"},"PreloadImage Hook"),(0,r.kt)("p",null,"For the best user-experience overall, combine this helper with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-preloaded-img"},"Preloaded Image Hook"),", React ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," component, and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Skeleton"},"Skeleton API"),"."),(0,r.kt)("p",null,"You can even add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," that will display the initials or icon avatar if the links crash. Using this approach will provide the best user experience while allowing React to manage the image state. \u26a1"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/ps-react-forked-5429oc?file=/src/App.js"},"VIEW LIVE EXAMPLE")," \ud83d\udc40"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Fallback() {\n  return <div {...getSkeletonProps({ kind: 'circle' })} />\n}\n\nfunction Image(props) {\n  const { imgData, ...avatarProps } = props\n  const avatarProps = getAvatarProps(avatarProps)\n  const img = imgData.read()\n\n  return (\n    <span {...avatarProps.wrapper}>\n      <img {...avatarProps.image} {...img} />\n    </span>\n  )\n}\n\nfunction Avatar() {\n  const resource = usePreloadedImg({\n    alt: 'random image',\n    src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80',\n  })\n\n  return (\n    <AvatarErrorBoundary>\n      <div>\n        {resource && (\n          <Suspense fallback={<Fallback />}>\n            <Image alt=\"test image\" imgData={resource.img} />\n          </Suspense>\n        )}\n        {!resource && null}\n      </div>\n    </AvatarErrorBoundary>\n  )\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getAvatarProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#avataroptions"},"AvatarOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"kind: 'neutral'",(0,r.kt)("br",null),"size: 'm'"),(0,r.kt)("td",{parentName:"tr",align:null},"Get avatar container and image element props (CSS), and options for icon API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getJSAvatarProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#avataroptions"},"AvatarOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,r.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"avataroptions"},"AvatarOptions"),(0,r.kt)("p",null,"This interface is available as an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AvatarOptions {\n  label: string\n  sentiment?: 'default' | 'strong'\n  size?: 'xs' | 's' | 'm' | 'l' | 'xl'\n  src: string\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { AvatarOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"avatarprops"},"AvatarProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AvatarProps {\n  iconOptions: {\n    ariaHidden: true\n    ariaLabel: string\n    customSize: string\n    tech: string\n  }\n  wrapper: {\n    className: string\n  }\n  image: {\n    alt: string\n    className: string\n    src: string\n  }\n  label: {\n    'aria-label': string\n    className: string\n    value: string\n  }\n}\n")),(0,r.kt)("h3",{id:"jsavatarprops"},"JSAvatarProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSAvatarProps {\n  iconOptions: {\n    ariaHidden: true\n    ariaLabel: string\n    customSize: string\n  }\n  wrapper: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  image: {\n    a11yProps: {\n      alt: string\n      src: string\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  label: {\n    a11yProps: {\n      'aria-label': string\n      value: string\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")))}f.isMDXComponent=!0},98260:function(e,a,t){t.d(a,{g:function(){return p}});var n=t(98268);const r={xs:"1.5rem",s:"2.5rem",m:"4rem",l:"6rem",xl:"8rem"};function l(e){return(null==e?void 0:e.slice(0,1))??""}function s(e){const{label:a}=e,t=function(e){const{firstLetter:a,lastLetter:t}=e;return t?`${a}${t}`:a}(function(e){const a=e.split(" ");return{word:e,firstLetter:l(a[0]),lastLetter:l(a[1])}}(a));return{iconOptions:{ariaLabel:a,ariaHidden:!0,customSize:r[e.size]},wrapper:{},label:{"aria-label":a,value:t},image:{alt:a,src:e.src}}}var o=t(76411);const i={baseAvatar:"avatarCSS-module_baseAvatar__iACyF",avatarImage:"avatarCSS-module_avatarImage__m6-v3",defaultAvatar:"avatarCSS-module_defaultAvatar__TvnZY avatarCSS-module_baseAvatar__iACyF",actionAvatar:"avatarCSS-module_actionAvatar__Jp-pC avatarCSS-module_baseAvatar__iACyF",avatarLabel:"avatarCSS-module_avatarLabel__-pNWR",xsAvatar:"avatarCSS-module_xsAvatar__MQHMM",xsAvatarLabel:"avatarCSS-module_xsAvatarLabel__WYctp",sAvatar:"avatarCSS-module_sAvatar__F4HXz",sAvatarLabel:"avatarCSS-module_sAvatarLabel__SOfuP",mAvatar:"avatarCSS-module_mAvatar__ewtSe",mAvatarLabel:"avatarCSS-module_mAvatarLabel__MpG5M",lAvatar:"avatarCSS-module_lAvatar__lN8Nr",lAvatarLabel:"avatarCSS-module_lAvatarLabel__t39kP",xlAvatar:"avatarCSS-module_xlAvatar__NyOHW",xlAvatarLabel:"avatarCSS-module_xlAvatarLabel__rdn9u"};(0,o.s)('.avatarCSS-module_baseAvatar__iACyF{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;aspect-ratio:1/1;background-color:transparent;border:none;border-radius:50%;display:inline-flex;justify-content:center;overflow:hidden;padding:0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.avatarCSS-module_avatarImage__m6-v3{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}.avatarCSS-module_defaultAvatar__TvnZY{background-color:var(--ps-background);color:var(--ps-text-medium)}.avatarCSS-module_actionAvatar__Jp-pC{background-color:var(--ps-action-background);color:var(--ps-action-text)}.avatarCSS-module_avatarLabel__-pNWR{font-variation-settings:"wght" 500;font-weight:500;text-transform:uppercase}.avatarCSS-module_xsAvatar__MQHMM{height:2rem;width:2rem}.avatarCSS-module_xsAvatarLabel__WYctp{font-size:.875rem;line-height:0}.avatarCSS-module_sAvatar__F4HXz{height:3rem;width:3rem}.avatarCSS-module_sAvatarLabel__SOfuP{font-size:1.25rem}.avatarCSS-module_mAvatar__ewtSe{height:5rem;width:5rem}.avatarCSS-module_mAvatarLabel__MpG5M{font-size:2.25rem}.avatarCSS-module_lAvatar__lN8Nr{height:7.5rem;width:7.5rem}.avatarCSS-module_lAvatarLabel__t39kP{font-size:3rem}.avatarCSS-module_xlAvatar__NyOHW{height:10rem;width:10rem}.avatarCSS-module_xlAvatarLabel__rdn9u{font-size:3.75rem}a[href].avatarCSS-module_baseAvatar__iACyF:hover,button.avatarCSS-module_baseAvatar__iACyF:hover{cursor:pointer}.avatarCSS-module_baseAvatar__iACyF:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.avatarCSS-module_baseAvatar__iACyF:focus:not(:focus-visible){box-shadow:none;outline:none}');function p(e){const a=function(e){return{label:(null==e?void 0:e.label)??"",sentiment:(null==e?void 0:e.sentiment)??"default",size:(null==e?void 0:e.size)??"m",src:(null==e?void 0:e.src)??""}}(e),{labelClass:t,sentimentClass:r,sizeClass:l}=(o=a.sentiment,{labelClass:`${p=a.size}AvatarLabel`,sentimentClass:`${o}Avatar`,sizeClass:`${p}Avatar`});var o,p;const c=s(a);return{...c,wrapper:{...c.wrapper,...(0,n.c)(`ps-avatar ${i[r]} ${i[l]}`)},image:{...c.image,...(0,n.c)(`ps-avatar-image ${i.avatarImage}`)},label:{...c.label,...(0,n.c)(`ps-avatar-label ${i.avatarLabel} ${i[t]}`)}}}},41539:function(e,a,t){t.d(a,{g:function(){return i}});var n=t(98268);function r(e){return/^https?:\/\//.test(e)}function l(e){const a=function(e){return r(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...a},...r(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var s=t(76411);const o="textLinkCSS-module_textLinkBase__P-zdY";function i(e){const a=function(e){return{href:(null==e?void 0:e.href)??""}}(e),t=l(a.href);return{...t,link:{...t.link,...(0,n.c)(`ps-text-link ${o}`)}}}(0,s.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);