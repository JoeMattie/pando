"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7808],{72032:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),i=n(45721),r=n(31825),o=n(61471),s="grid_cC7H";function l(e){return i.createElement("li",(0,r.a)({colSpan:2}),i.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,r.g)({cols:12,gap:8});return i.createElement("ul",(0,a.Z)({className:`${o} ${s}`},c),n&&i.createElement(l,{href:n},"View on Github"),t&&i.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),i=n(94697),r=n(23038),o=n(31026),s=n(6115);function l(e){const{href:t}=e,n=(0,i.g)({href:t}),l=(0,r.g)(n.iconOptions),c=t.includes("github")?o.Z:s.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},69135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(81648),i=(n(45721),n(70167)),r=n(72032);n(27505);const o={tags:["breadcrumb","text button","link"],title:"Text Link"},s=void 0,l={unversionedId:"reference/components/text-link",id:"version-0.4.1/reference/components/text-link",title:"Text Link",description:"Used to navigate the user to a new page.",source:"@site/versioned_docs/version-0.4.1/reference/components/text-link.mdx",sourceDirName:"reference/components",slug:"/reference/components/text-link",permalink:"/docs/reference/components/text-link",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/text-link.mdx",tags:[{label:"breadcrumb",permalink:"/docs/tags/breadcrumb"},{label:"text button",permalink:"/docs/tags/text-button"},{label:"link",permalink:"/docs/tags/link"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["breadcrumb","text button","link"],title:"Text Link"},sidebar:"reference",previous:{title:"Textarea",permalink:"/docs/reference/components/text-area"},next:{title:"Tooltip",permalink:"/docs/reference/components/tooltip"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Links",id:"basic-links",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to navigate the user to a new page."),(0,i.kt)(r.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/TextLink",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTextLinkProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TextLinkOptions {\n  href: string\n}\n\ngetTextLinkProps(options?: TextLinkOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { TextLinkOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Link"),(0,i.kt)("li",{parentName:"ol"},"External Icon (optional)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-links"},"Basic Links"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicTextLinks() {\n  const gridItem = getGridItemProps({ colSpan: 2 })\n  const externalLink = getTextLinkProps({\n    href: 'https://github.com/pluralsight/pando',\n  })\n\n  return (\n    <div\n      data-site-override=\"alignGridCenter\"\n      {...getGridProps({ cols: 12, gap: 16 })}\n    >\n      <div {...gridItem}>\n        <a {...getTextLinkProps({ href: '#' }).link}>Local Text Link</a>\n      </div>\n\n      <div {...gridItem}>\n        <a {...externalLink.link}>\n          External Link\n          <ExternalLinkIcon {...getIconProps(externalLink.iconOptions)} />\n        </a>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getTextLinkProps(options?: TextLinkOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": A String value for the property href.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Text Link when you need to provide a way to navigate to a different page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Button to navigate the user to a different page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the ExternalLink Icon when you have a link that will navigate the user outside of your application/site."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," eliminate the ExternalLink Icon ",(0,i.kt)("em",{parentName:"p"},"unless")," the link uses a local path."),(0,i.kt)("h2",{id:"accessbility"},"Accessbility"),(0,i.kt)("p",null,"The Pando Text Link, and Icon APIs combined with semantic HTML allow the Text Link to be fully accessible and screen-readable."))}d.isMDXComponent=!0},31825:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return c}});var a=n(39112),i=n(58105),r=n(50114);const o="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="ps-grid";function c(e){const t=(0,i.g)(e);return{...(0,i.c)(t),...(0,a.c)(l,o)}}function p(e){const t=(0,i.a)(e);return{...(0,i.b)(t),...(0,a.c)("ps-grid-item",s)}}},58105:function(e,t,n){n.d(t,{a:function(){return r},b:function(){return s},c:function(){return o},g:function(){return i}});const a={6:.375,8:.5,12:.75,16:1,32:2};function i(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);