"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29514,56164],{59883:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var a=n(45721),l=n(88795),r=n(71336),o=n(85988),i=n(85614),c=n(66406),s=n(6305),d=n(42145),m=n(55020),u=n(61995),b=n(93046),p=n(84143);var h="backToTopButton_kiRx",E="backToTopButtonShow_a10S";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(r.current?r.current=!1:a>=o?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var v=n(79106),g=n(29711),k=n(66264),C=n(2113),_=n(81648);function S(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var I="collapseSidebarButton_ESgp",N="collapseSidebarButtonIcon_DCS9";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(S,{className:N}))}var x=n(47234),T=n(86343);const y=Symbol("EmptyContext"),w=a.createContext(y);function L(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(w.Provider,{value:r},t)}var A=n(16208),M=n(97699),H=n(84577),B=n(99941);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,r),g=(0,M.Mg)(h,r),{collapsed:C,setCollapsed:S}=(0,A.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(w);if(e===y)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!C),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:v,collapsed:C,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(H.Z,(0,_.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{n?.(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(q,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:i+1})))}var D=n(77237),R=n(48201),V="menuExternalLink_rDRE";function W(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,r),E=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(H.Z,(0,_.Z)({className:(0,l.Z)("menu__link",!E&&V,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(R.Z,null)))}var z="menuHtmlItem_EaaP";function O(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[z,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function Y(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,_.Z)({item:t},n));case"html":return a.createElement(O,(0,_.Z)({item:t},n));default:return a.createElement(W,(0,_.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(L,null,t.map(((e,t)=>a.createElement(Y,(0,_.Z)({key:t,item:e,index:t},n)))))}var q=(0,a.memo)(j),U="menu_SpVc",G="menuWithAnnouncementBar_ZiEc";function J(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",U,i&&G,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}var K="sidebar_gMHS",Q="sidebarWithHideableNavbar_RuWf",X="sidebarHidden_DpHp",$="sidebarLogo_jjK0";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)(K,i&&Q,o&&X)},i&&a.createElement(C.Z,{tabIndex:-1,className:$}),a.createElement(J,{path:t,sidebar:n}),c&&a.createElement(Z,{onClick:r}))}var te=a.memo(ee),ne=n(21094),ae=n(95525);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}var oe=a.memo(re);function ie(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}var ce="expandButton_koOk",se="expandButtonIcon_j6vJ";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:se}))}var me={docSidebarContainer:"docSidebarContainer_hgyb",docSidebarContainerHidden:"docSidebarContainerHidden_LJ2C",sidebarViewport:"sidebarViewport_FVSG"};function ue(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,v.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&s(!0)}},a.createElement(ue,null,a.createElement("div",{className:(0,l.Z)(me.sidebarViewport,c&&me.sidebarViewportHidden)},a.createElement(ie,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(de,{toggleSidebar:d}))))}var pe={docMainContainer:"docMainContainer_Oq2z",docMainContainerEnhanced:"docMainContainerEnhanced_HOiM",docItemWrapperEnhanced:"docItemWrapperEnhanced_nrPY"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}var Ee="docPage_CgB6",fe="docsWrapper_rMN0";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:fe},a.createElement(f,null),a.createElement("div",{className:Ee},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var ge=n(56164),ke=n(79750);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function _e(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(ge.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ve,null,i)))))}},56164:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(45721),l=n(61995),r=n(71336),o=n(55020);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6305:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return o}});var a=n(45721),l=n(86343);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);