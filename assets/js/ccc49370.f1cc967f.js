"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1080],{29116:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(45721),o=n(88795),r=n(76059),l=n(25830),i=n(75117),c=n(71301),s=n(81899),m=n(81648),u=n(78676),d=n(57625);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:o,date:l,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:o,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:l}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(44667);function p(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:r}=(0,i.C)(),{nextItem:l,prevItem:m,frontMatter:u}=o,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(v.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(l||m)&&a.createElement(g,{nextItem:l,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},44667:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),o=n(45721),r=n(88795),l=n(28023),i="tableOfContents_Evlz";function c(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},o.createElement(l.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},28023:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(81648),o=n(45721),r=n(30450);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?o.createElement("ul",{className:r?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var g=o.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const v=(0,r.L)(),p=m??v.tableOfContents.minHeadingLevel,h=d??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return u((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[c,s,p,h])),o.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:c},f))}},5614:function(e,t,n){var a=n(45721),o=n(15406),r=n(99353),l=n(83063),i=n(32539),c=n(53566),s=n(47502),m=n(88480),u=n(74797),d=n(98465),g=n(33991),f=n(18281),v=n(96183),p=n(13872),h=n(78336),b=n(48378),E=n(95370),I=n(58786),L=n(84331),Z=n(57026),C=n(38321),H=n(75072),k=n(69662),x=n(44754),N=n(63877),_=n(81014),y=n(32148),T=n(34124),A=n(61327),P=n(24966),w=n(49751),O=n(15975),R=n(23752),S=n(89591),B=n(65823),M=n(62317),D=n(67317);const z={React:a,...a,...o,Admonition:r.Jm,AdmonitionHeading:r.LQ,AdmonitionText:r.t7,Avatar:l.q,Badge:i.C,Button:c.z,CircularProgress:s.D,ProgressBar:m.k,Skeleton:u.O,Table:d.iA,Caption:d.YS,THead:d.Et,TH:d.TH,TBody:d.XP,TR:d.TR,TD:d.TD,CalendarIcon:g.Z,CaretLeftIcon:f.Z,CaretRightIcon:v.Z,CheckIcon:p.Z,ChevronDownIcon:h.Z,ChevronRightIcon:b.Z,CloseIcon:E.Z,DangerDiamondIcon:I.Z,ExternalLinkIcon:L.Z,EyeIcon:Z.Z,EyeOffIcon:C.Z,HelpCircleIcon:H.Z,IndeterminateIcon:k.Z,InfoCircleIcon:x.Z,MenuIcon:N.Z,PersonIcon:_.Z,PlaceholderIcon:y.Z,SearchIcon:T.Z,StarIcon:A.Z,StarFilledIcon:P.Z,WarningTriangleFilledIcon:w.Z,useAutoFormatDate:O.y,useEscToClose:R.A,useIsIndeterminate:S.t,useMenuInteraction:B.P,useRovingTabIndex:M.X,useSubmenuInteraction:D.i};t.Z=z}}]);