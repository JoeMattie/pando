"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{1903:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(6087),l=t(348),r=t(3289),i=t(2238),c=t(7781),s=t(1880),o="anchorWithStickyNavbar_U1xn",m="anchorWithHideOnScrollNavbar_NiNX",u=["as","id"],d=["as"];function f(e){var n,t=e.as,d=e.id,f=(0,l.Z)(e,u),v=(0,s.LU)().navbar.hideOnScroll;return d?r.createElement(t,(0,a.Z)({},f,{className:(0,i.Z)("anchor",(n={},n[m]=v,n[o]=!v,n)),id:d}),f.children,r.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,f)}function v(e){var n=e.as,t=(0,l.Z)(e,d);return"h1"===n?r.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children):r.createElement(f,(0,a.Z)({as:n},t))}},3853:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(6087),l=t(348),r=t(3289),i=t(1510),c=t(9119),s=t(6354),o=t(1903),m=t(2238),u=t(1880),d="details_ERZd";function f(e){var n=Object.assign({},e);return r.createElement(u.PO,(0,a.Z)({},n,{className:(0,m.Z)("alert alert--info",d,n.className)}))}var v=["mdxType","originalType"];var h={head:function(e){var n=r.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,v));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||r.isValidElement(e)&&n.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var n;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),l=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(f,(0,a.Z)({},e,{summary:t}),l)},h1:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h6"},e))}}},9568:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(3289),l=t(2238),r=t(1602),i=t(167),c=t(3853),s=t(1649),o=t(1880),m="mdxPageWrapper_jBrk";function u(e){var n=e.content,t=n.metadata,u=t.title,d=t.description,f=t.permalink,v=t.frontMatter,h=v.wrapperClassName,p=v.hide_table_of_contents;return a.createElement(r.Z,{title:u,description:d,permalink:f,wrapperClassName:null!=h?h:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!p&&"col--8")},a.createElement(i.Zo,{components:c.Z},a.createElement(n,null))),!p&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})))))}},1649:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(6087),l=t(348),r=t(3289),i=t(2238),c=t(1210),s="tableOfContents_rABB",o=["className"];function m(e){var n=e.className,t=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",n)},r.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},1210:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(6087),l=t(348),r=t(3289),i=t(1880),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function o(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,v=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,c),Z=(0,i.LU)(),g=null!=v?v:Z.tableOfContents.minHeadingLevel,E=null!=h?h:Z.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:n,minHeadingLevel:g,maxHeadingLevel:E}),k=(0,r.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:g,maxHeadingLevel:E}}),[u,f,g,E]);return(0,i.Si)(k),r.createElement(s,(0,a.Z)({toc:N,className:o,linkClassName:u},p))}}}]);