"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{9216:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(348),r=a(3289),l=a(2238),c=a(1602),s=a(9119),i="sidebar_mNmB",m="sidebarItemTitle_mFWC",o="sidebarItemList_LY07",u="sidebarItem_C5Q3",g="sidebarItemLink_acYd",d="sidebarItemLinkActive_hlOf",b=a(7781);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var f=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,i=(0,n.Z)(e,f),m=t&&t.items.length>0;return r.createElement(c.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},5044:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(3289),r=a(9216),l=a(7012),c=a(1880);function s(e){var t=e.tags,a=e.sidebar,s=(0,c.MA)();return n.createElement(r.Z,{title:s,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,s),n.createElement(l.Z,{tags:Object.values(t)}))}},2017:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3289),r=a(2238),l=a(9119),c="tag_MUhH",s="tagRegular_q3EO",i="tagWithCount_Gc6l";function m(e){var t,a=e.permalink,m=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&n.createElement("span",null,o))}},7012:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(3289),r=a(2017),l=a(1880),c="tag_RvMJ";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,e))}))),n.createElement("hr",null))}function i(e){var t=e.tags,a=(0,l.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}}}]);