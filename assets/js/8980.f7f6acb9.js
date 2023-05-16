"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8980],{71301:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(45721),r=a(88795),l=a(41442),o=a(15977),s=a(50845),i=a(78676),c="sidebar_usi7",m="sidebarItemTitle_7ZCu",u="sidebarItemList_mmgS",d="sidebarItem__210",g="sidebarItemLink_e6UT",f="sidebarItemLinkActive_pDLV";function p(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,r.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title)))))))}var h=a(75634);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(p,{sidebar:t}):null}function P(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(l.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},81899:function(e,t,a){a.d(t,{Z:function(){return R}});var n=a(45721),r=a(88795),l=a(75117),o=a(10893);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s}=(0,l.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??r.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(50845),c="title_hx8L";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,l.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,r.Z)(c,t),itemProp:"headline"},o?m:n.createElement(i.Z,{itemProp:"url",to:s},m))}var u=a(78676),d=a(63881),g="container_Ir3H";function f(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,l.C)(),{date:o,formattedDate:s,readingTime:i}=a;return n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md",t)},n.createElement(p,{date:o,formattedDate:s}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(f,{readingTime:i})))}function b(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:l,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(b,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},l))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var P="authorCol_RfWL",_="imageOnlyAuthorRow_MCil",N="imageOnlyAuthorCol_Ad60";function C(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,l.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?_:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,r.Z)(!s&&"col col--6",s?N:P),key:t},n.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(C,null))}var k=a(17188),y=a(8094);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,l.C)();return n.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},n.createElement(y.Z,null,t))}var w=a(8403),M=a(4537),I=a(81648);function B(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(i.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(B,null))}var L="blogPostFooterDetailsFull_m6oP";function x(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&L)},m&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":c})},n.createElement(M.Z,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(w.Z,{editUrl:s})),c&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":m})},n.createElement(F,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,r.Z)(o,a)},n.createElement(Z,null),n.createElement(T,null,t),n.createElement(x,null))}},75117:function(e,t,a){a.d(t,{C:function(){return s},n:function(){return o}});var n=a(45721),r=a(96565);const l=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return n.createElement(l.Provider,{value:o},t)}function s(){const e=(0,n.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},63881:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(45721),r=a(20375);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}},25841:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[r]=e.split(/[#?]/),l="/"===r||r===n?r:(o=r,a?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,l)}},16425:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCausalChain=void 0,t.getErrorCausalChain=function e(t){return t.cause?[t,...e(t.cause)]:[t]}},17188:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCausalChain=t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="__blog-post-container";var r=a(25841);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(16425);Object.defineProperty(t,"getErrorCausalChain",{enumerable:!0,get:function(){return l.getErrorCausalChain}})}}]);