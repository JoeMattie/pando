"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5465],{72032:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(81648),s=n(45721),a=n(71397),o=n(61471),i="grid_cC7H";function l(e){return s.createElement("li",(0,a.a)({colSpan:2}),s.createElement(o.Z,e,e.children))}function p(e){const{figma:t,github:n}=e,{className:o,...p}=(0,a.g)({cols:12,gap:8});return s.createElement("ul",(0,r.Z)({className:`${o} ${i}`},p),n&&s.createElement(l,{href:n},"View on Github"),t&&s.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(45721),s=n(64965),a=n(4094),o=n(31026),i=n(6115);function l(e){const{href:t}=e,n=(0,s.g)({href:t}),l=(0,a.g)(n.iconOptions),p=t.includes("github")?o.Z:i.Z;return r.createElement("a",n.link,r.createElement(p,l),e.children)}},35285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(81648),s=(n(45721),n(70167)),a=n(72032);n(27505);const o={tags:["linear progress"],title:"Progress"},i=void 0,l={unversionedId:"reference/components/progress",id:"version-0.4.1/reference/components/progress",title:"Progress",description:"Used to display the progress status for a task that takes a long time or",source:"@site/versioned_docs/version-0.4.1/reference/components/progress.mdx",sourceDirName:"reference/components",slug:"/reference/components/progress",permalink:"/docs/reference/components/progress",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/progress.mdx",tags:[{label:"linear progress",permalink:"/docs/tags/linear-progress"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["linear progress"],title:"Progress"},sidebar:"reference",previous:{title:"Popover",permalink:"/docs/reference/components/popover"},next:{title:"Radio",permalink:"/docs/reference/components/radio"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Progress",id:"basic-progress",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Loading",id:"loading",level:3},{value:"Text",id:"text",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:c};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to display the progress status for a task that takes a long time or consists of several steps."),(0,s.kt)(a.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Progress",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getProgressProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProgressOptions {\n  ariaLabel: string\n  kind?: 'linear' | 'inset'\n  max?: number\n  min?: number\n  now?: number\n  size?: 'xs' | 's'\n}\n\ngetProgressProps(options?: ProgressOptions)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ProgressOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"Bar")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-progress"},"Basic Progress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicProgress() {\n  const progress = getProgressProps({\n    ariaLabel: 'default basic progress example',\n    now: 50,\n  })\n  const insetProgress = getProgressProps({\n    ariaLabel: 'inset basic progress example',\n    kind: 'inset',\n    now: 60,\n  })\n\n  return (\n    <div>\n      <div {...progress.wrapper} style={{ marginBottom: '1rem' }}>\n        <div {...progress.bar} />\n      </div>\n      <div {...insetProgress.wrapper}>\n        <div {...insetProgress.bar} />\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("h3",{id:"sizes"},"Sizes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicProgress() {\n  const progress = getProgressProps({\n    ariaLabel: 'default basic progress example',\n    now: 50,\n    size: 'xs',\n  })\n  const insetProgress = getProgressProps({\n    ariaLabel: 'inset basic progress example',\n    kind: 'inset',\n    now: 60,\n    size: 's',\n  })\n\n  return (\n    <div>\n      <div {...progress.wrapper} style={{ marginBottom: '1rem' }}>\n        <div {...progress.bar} />\n      </div>\n      <div {...insetProgress.wrapper}>\n        <div {...insetProgress.bar} />\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Circular Progress size rules."',title:'"Circular',Progress:!0,size:!0,'rules."':!0},"{\n  xs: 'Should only be used when the default size (s) is too large.',\n  s: 'Should be used in most, if not all cases.'\n}\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"getProgressProps(options?: ProgressOptions)\n")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options"),": An ariaLabel property that accepts a String value to add accessbility support to the elements. An optional kind property that accepts a String value of ",(0,s.kt)("inlineCode",{parentName:"li"},"'linear' | 'inset'")," to determine the animation of the SVG progress elements. Optional min, max, or now properties that accept a Number value to set the parameters for styling the progress amount. An optional size property that accepts a String value of ",(0,s.kt)("inlineCode",{parentName:"li"},"'xs' | 's'")," to determine the size styling of the Progress.")),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("p",null,"An Object matching the ",(0,s.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("h3",{id:"loading"},"Loading"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use Progress to display an update of information to a ",(0,s.kt)("strong",{parentName:"p"},"specific part of a previously loaded page"),", like a video."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use the Progress to show page load progress. Instead, use a Skeleton."),(0,s.kt)("h3",{id:"text"},"Text"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use text describing the progress in close proximity."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use text or other elements within the Progress."),(0,s.kt)("h3",{id:"sizing"},"Sizing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Progress."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,s.kt)("em",{parentName:"p"},"unless")," it is a ",(0,s.kt)("strong",{parentName:"p"},"last resort"),"."),(0,s.kt)("h2",{id:"accessbility"},"Accessbility"),(0,s.kt)("p",null,"The Pando Progress combined with semantic HTML allow the Progress to be fully accessible and screen-readable."))}g.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return c},g:function(){return p}});var r=n(1801),s=n(23909),a=n(31519);const o="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,a.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function p(e){const t=(0,s.g)(e);return{...(0,s.c)(t),...(0,r.c)(l,o,...t.classNames)}}function c(e){const t=(0,s.a)(e);return{...(0,s.b)(t),...(0,r.c)(`${l}-item`,i,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return a},b:function(){return i},c:function(){return o},g:function(){return s}});const r={6:.375,8:.5,12:.75,16:1,32:2};function s(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function a(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${r[e.gap]}rem`}}}function i(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);