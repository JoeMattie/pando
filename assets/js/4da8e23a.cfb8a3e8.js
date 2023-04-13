"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6975],{72032:function(e,o,t){t.d(o,{Z:function(){return l}});var n=t(81648),r=t(45721),i=t(31825),a=t(61471),p="grid_cC7H";function s(e){return r.createElement("li",(0,i.a)({colSpan:2}),r.createElement(a.Z,e,e.children))}function l(e){const{figma:o,github:t}=e,{className:a,...l}=(0,i.g)({cols:12,gap:8});return r.createElement("ul",(0,n.Z)({className:`${a} ${p}`},l),t&&r.createElement(s,{href:t},"View on Github"),o&&r.createElement(s,{href:o},"Figma Design"))}},27505:function(e,o,t){t(45721)},61471:function(e,o,t){t.d(o,{Z:function(){return s}});var n=t(45721),r=t(94697),i=t(23038),a=t(31026),p=t(6115);function s(e){const{href:o}=e,t=(0,r.g)({href:o}),s=(0,i.g)(t.iconOptions),l=o.includes("github")?a.Z:p.Z;return n.createElement("a",t.link,n.createElement(l,s),e.children)}},21006:function(e,o,t){t.r(o),t.d(o,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var n=t(81648),r=(t(45721),t(70167)),i=t(72032);t(27505);const a={tags:["Tooltip"],title:"Popover"},p=void 0,s={unversionedId:"reference/components/popover",id:"reference/components/popover",title:"Popover",description:"Used to display a small, non-modal dialog with brief, additional content",source:"@site/docs/reference/components/popover.mdx",sourceDirName:"reference/components",slug:"/reference/components/popover",permalink:"/docs/next/reference/components/popover",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/popover.mdx",tags:[{label:"Tooltip",permalink:"/docs/next/tags/tooltip"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Tooltip"],title:"Popover"},sidebar:"reference",previous:{title:"Pagination",permalink:"/docs/next/reference/components/pagination"},next:{title:"Progress",permalink:"/docs/next/reference/components/progress"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Popover",id:"basic-popover",level:3},{value:"Positions",id:"positions",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],d={toc:c};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to display a small, non-modal dialog with brief, additional content around a trigger."),(0,r.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Popover",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getPopoverProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PopoverOptions {\n  ariaLabel?: string\n  bodyId: string\n  headerId?: string\n  id: string\n  isExpanded?: boolean\n  position?:\n    | 'topStart'\n    | 'top'\n    | 'topEnd'\n    | 'rightStart'\n    | 'right'\n    | 'rightEnd'\n    | 'bottomStart'\n    | 'bottom'\n    | 'bottomEnd'\n    | 'leftStart'\n    | 'left'\n    | 'leftEnd'\n}\n\ngetPopoverProps(options?: PopoverOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { PopoverOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"Trigger"),(0,r.kt)("li",{parentName:"ol"},"Popover"),(0,r.kt)("li",{parentName:"ol"},"Header"),(0,r.kt)("li",{parentName:"ol"},"Body"),(0,r.kt)("li",{parentName:"ol"},"Close button"),(0,r.kt)("li",{parentName:"ol"},"Help Icon (optional)")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-popover"},"Basic Popover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicPopover() {\n  const [showHelpText, setShowHelpText] = useState(false)\n  const popoverProps = getPopoverProps({\n    bodyId: `popoverPositions-body`,\n    headerId: `popoverPositions-header`,\n    id: 'popoverPositions',\n    isExpanded: showHelpText,\n  })\n  const iconButtonProps = getIconButtonProps(popoverProps.closeButtonOptions)\n  const iconProps = getIconProps(iconButtonProps.iconOptions)\n\n  function handleTogglePopover() {\n    setShowHelpText((prev) => !prev)\n  }\n\n  function handleClosePopover() {\n    setShowHelpText(false)\n  }\n\n  return (\n    <div data-site-override=\"alignFlexCenter\">\n      <div {...popoverProps.wrapper}>\n        <button {...popoverProps.trigger} onClick={handleTogglePopover}>\n          <span>\n            <HelpCircleIcon {...getIconProps({ ariaHidden: true })} />\n          </span>\n          Click me\n        </button>\n\n        <section {...popoverProps.popover}>\n          <div {...popoverProps.content}>\n            <header {...popoverProps.header}>Popover heading</header>\n            <div {...popoverProps.body}>\n              Here is more information about that trigger you clicked.\n            </div>\n            <span {...popoverProps.closeButtonWrapper}>\n              <button {...iconButtonProps.button} onClick={handleClosePopover}>\n                <CloseIcon {...iconProps} />\n              </button>\n            </span>\n          </div>\n        </section>\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"positions"},"Positions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PopoverPositions() {\n  const popoverProps = getPopoverProps({\n    bodyId: `popoverPositions-body`,\n    headerId: `popoverPositions-header`,\n    id: 'popoverPositions',\n    isExpanded: true,\n    // Change this value to any of the Position options\n    position: 'bottom',\n  })\n  const iconButtonProps = getIconButtonProps(popoverProps.closeButtonOptions)\n  const iconProps = getIconProps(iconButtonProps.iconOptions)\n\n  return (\n    <div data-site-override=\"alignFlexCenter\">\n      <div {...popoverProps.wrapper}>\n        <button {...popoverProps.trigger}>Popover Trigger</button>\n\n        <section {...popoverProps.popover}>\n          <div {...popoverProps.content}>\n            <header {...popoverProps.header}>Popover heading</header>\n            <div {...popoverProps.body}>Lorem ipsum dolor sit amet</div>\n            <span {...popoverProps.closeButtonWrapper}>\n              <button {...iconButtonProps.button}>\n                <CloseIcon {...iconProps} />\n              </button>\n            </span>\n          </div>\n        </section>\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getPopoverProps(options?: PopoverOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": A String value for the properties ariaLabel, bodyId, headerId, and id which determine styling and a11y props for all Popover elements. A property of isExpanded that accepts a Boolean value which determines the Popover visibility state. A position property that takes a String value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<BoxModelPosition><''|Start|End>")," to determine the positioning styles for the Popover.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"closeButtonOPtions")," Object with to use as the parameters for the Icon Button API and an ",(0,r.kt)("inlineCode",{parentName:"p"},"iconOptions")," to pass into the Icon Button API for the trigger."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("admonition",{title:"Popover vs. Tooltip",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A Popover should be used when you need to provide more context to a user whereas a Tooltip displays a short description of only a few words (like the HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," attribute).")),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Popover to display non-essential information to help users that are not familiar with the interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," put essential information in a Popover."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," combine with the HelpCircle Icon when you want the user to have helper text about the UI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use any other Icon outside of the HelpCircle for Popover triggers."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep Popover body content restricted to only text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use actionable elements like Buttons inside a Popover. Instead use a Modal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Popover minimal and restricted to a single column."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," overload Popovers with content. Instead use a Modal."),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Popover, and Icon APIs combined with semantic HTML allow the Popover to be fully accessible and screen-readable."))}u.isMDXComponent=!0},31825:function(e,o,t){t.d(o,{a:function(){return c},g:function(){return l}});var n=t(39112),r=t(58105),i=t(50114);const a="gridCSS-module_gridContainer__sQmao",p="gridCSS-module_gridItem__nVMyV";(0,i.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="ps-grid";function l(e){const o=(0,r.g)(e);return{...(0,r.c)(o),...(0,n.c)(s,a)}}function c(e){const o=(0,r.a)(e);return{...(0,r.b)(o),...(0,n.c)("ps-grid-item",p)}}},58105:function(e,o,t){t.d(o,{a:function(){return i},b:function(){return p},c:function(){return a},g:function(){return r}});const n={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function i(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function a(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${n[e.gap]}rem`}}}function p(e){const{colSpan:o,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${o} / span ${t} / span ${o}`}}:{style:{gridColumn:`span ${o} / span ${o}`}}}}}]);