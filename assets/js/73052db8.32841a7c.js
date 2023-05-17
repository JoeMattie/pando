"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71],{40736:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){void 0===e&&(e=s);const t=e.type??s.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",i={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:r[t],style:i},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return p},fK:function(){return c},C9:function(){return u},ZP:function(){return d}});var a=n(81648),r=n(45721),s=n(98255),i=n(84140),o="grid_cC7H";function l(e){return r.createElement("li",(0,s.a)({colSpan:2}),r.createElement(i.Z,e,e.children))}function c(e){return r.createElement(l,{href:e.href},e.children??"View on Github")}function p(e){return r.createElement(l,{href:e.href},"View on Figma")}function u(e){const{className:t,...n}=(0,s.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${t} ${o}`},n),e.children)}function d(e){const{figma:t,github:n}=e,{className:i,...l}=(0,s.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${i} ${o}`},l),n&&r.createElement(c,{href:n}),t&&r.createElement(p,{href:t}))}},45945:function(e,t,n){n(45721)},74156:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(81648),r=n(45721),s=n(28891),i=n(55785),o=n(88923),l=n(40736),c=[{id:"1",label:"Tab 1",children:{id:"1:panel"}},{id:"2",label:"Tab 2",children:{id:"2:panel"}},{id:"3",label:"Tab 3",children:{id:"3:panel"}},{id:"4",label:"Tab 4",children:{id:"4:panel"}}];const p=(0,s.g)();function u(){return r.createElement("div",p.wrapper,r.createElement(d,null),r.createElement(b,null))}function d(){const{onKeyDown:e,tabList:t}=(0,i.hp)();return r.createElement("div",(0,a.Z)({},p.tabList,{onKeyDown:e}),t.map((e=>r.createElement(m,{id:e,key:e}))))}function m(e){const{tabs:t,...n}=(0,i.xD)(),s=t[e.id];return r.createElement("button",(0,a.Z)({},p.tab,n,s),s.label)}function b(){const e=(0,i.IT)();return r.createElement("div",p.panelWrapper,e.panelList.map((e=>r.createElement(f,{id:e,key:e}))))}function f(e){const{panels:t}=(0,i.uR)(),n=t[e.id];return r.createElement("div",(0,a.Z)({},p.tabPanel,n),n.id," Content")}var g=function(){return r.createElement(l.Z,null,r.createElement(o.X,{data:c},r.createElement(u,null)))}},84140:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(10563),s=n(89297),i=n(88354),o=n(48481);function l(e){const{href:t}=e,n=(0,r.g)({href:t}),l=(0,s.g)(n.iconOptions),c=t.includes("github")?i.Z:o.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},1037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(81648),r=(n(45721),n(70167)),s=n(74156),i=n(15566);n(45945);const o={tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},l=void 0,c={unversionedId:"reference/components/tabs",id:"version-0.4.1/reference/components/tabs",title:"Tabs",description:"Used to alternate between content views within the same context.",source:"@site/versioned_docs/version-0.4.1/reference/components/tabs.mdx",sourceDirName:"reference/components",slug:"/reference/components/tabs",permalink:"/docs/reference/components/tabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/tabs.mdx",tags:[{label:"vertical tabs",permalink:"/docs/tags/vertical-tabs"},{label:"horizontal tabs",permalink:"/docs/tags/horizontal-tabs"},{label:"view toggle",permalink:"/docs/tags/view-toggle"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},sidebar:"reference",previous:{title:"Table",permalink:"/docs/reference/components/table"},next:{title:"Tag",permalink:"/docs/reference/components/tag"}},p={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to alternate between content views within the same context."),(0,r.kt)(i.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tabs",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTabsProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps(options?: TabsOptions)\n")),(0,r.kt)("admonition",{title:"Use with the tabs hook",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This API controls only the styling. To add functionality to your Tabs components, combine it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/react-hooks/useTabs"},"useTabs hook family"),".")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"List"),(0,r.kt)("li",{parentName:"ol"},"Tab"),(0,r.kt)("li",{parentName:"ol"},"Panel Container"),(0,r.kt)("li",{parentName:"ol"},"Panel")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,r.kt)(s.Z,{mdxType:"BasicTabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Tabs family components."',showLineNumbers:!0,title:'"Tabs',family:!0,'components."':!0},"import { getTabsProps } from '@pluralsight/headless-styles'\nimport {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\nimport data from './tabs.data'\n\nconst tabStyles = getTabsProps()\n\nfunction Tabs() {\n  return (\n    <div {...tabStyles.wrapper}>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tabStyles.tab} {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div {...tabStyles.panelWrapper}>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return (\n    <div {...tabStyles.tabPanel} {...data}>\n      {data.id} Content\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <TabsProvider data={data}>\n      <Tabs />\n    </TabsProvider>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps()\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"There are no parameters required for this component."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use Tabs when you need to display different content relative to the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use Tabs to navigate to different areas of a page or app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs restricted to a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use present multiple rows of Tabs."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," restrict the use of Tabs to once per page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Tabs within the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs located on top of the panel content it is displaying."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," position the Tabs or realign them outside of the default top-left positioning."),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Tabs API combined with semantic HTML allow the Tabs to be fully accessible and screen-readable."))}m.isMDXComponent=!0}}]);