"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610],{53066:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(31065),o=n(22888);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(o.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&a.createElement(o.Z,{permalink:l,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},64638:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(86313),o=n(6822);function l(e){let{items:t,component:n=o.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},95117:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(45721),r=n(88795),o=n(31065),l=n(58991),i=n(30909),s=n(74988),c=n(69316),g=n(49257),u=n(53066),m=n(7690),d=n(64638);function p(e){const t=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const n=p(t);return a.createElement(a.Fragment,null,a.createElement(i.d,{title:n}),a.createElement(m.Z,{tag:"blog_tags_posts"}))}function Z(e){let{tag:t,items:n,sidebar:r,listMetadata:l}=e;const i=p(t);return a.createElement(g.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,i),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(d.Z,{items:n}),a.createElement(u.Z,{metadata:l}))}function I(e){return a.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(Z,e))}},12565:function(e,t,n){var a=n(45721),r=n(22210),o=n(23278),l=n(82930),i=n(34327),s=n(66009),c=n(85830),g=n(78975),u=n(3334),m=n(75835),d=n(27442),p=n(93384),h=n(49217),Z=n(74995),I=n(99041),b=n(42841),E=n(2418),f=n(99023),v=n(69923),k=n(64586),w=n(89725),C=n(39081),P=n(57363),T=n(20008),A=n(85986),x=n(62444),N=n(92178),y=n(65599),F=n(15975),L=n(23752),D=n(89591),R=n(65823),M=n(62317),S=n(67317);const _={React:a,...a,...r,Admonition:o.Jm,AdmonitionHeading:o.LQ,AdmonitionText:o.t7,Avatar:l.q,Badge:i.C,Button:s.z,CircularProgress:c.D,CalendarIcon:g.Z,CaretLeftIcon:u.Z,CaretRightIcon:m.Z,CheckIcon:d.Z,ChevronDownIcon:p.Z,ChevronRightIcon:h.Z,CloseIcon:Z.Z,DangerDiamondIcon:I.Z,ExternalLinkIcon:b.Z,EyeIcon:E.Z,EyeOffIcon:f.Z,HelpCircleIcon:v.Z,IndeterminateIcon:k.Z,InfoCircleIcon:w.Z,MenuIcon:C.Z,PersonIcon:P.Z,PlaceholderIcon:T.Z,SearchIcon:A.Z,StarIcon:x.Z,StarFilledIcon:N.Z,WarningTriangleFilledIcon:y.Z,useAutoFormatDate:F.y,useEscToClose:L.A,useIsIndeterminate:D.t,useMenuInteraction:R.P,useRovingTabIndex:M.X,useSubmenuInteraction:S.i};t.Z=_}}]);