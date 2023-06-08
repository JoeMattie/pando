"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{4867:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},71441:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},84140:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),s=n(32452),o=n(71999),r=n(71441),i=n(4867);function l(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?r.Z:i.Z;return a.createElement(s.h,e,a.createElement(l,n),e.children)}},60038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var a=n(81648),s=(n(45721),n(70167)),o=n(84140);const r={tags:["React","Tabs","Tab state","Tabs a11y"],title:"useTabs"},i=void 0,l={unversionedId:"reference/react-hooks/useTabs",id:"version-0.4.1/reference/react-hooks/useTabs",title:"useTabs",description:"A set of hooks for controlling state and Accessibility for Tab components.",source:"@site/versioned_docs/version-0.4.1/reference/react-hooks/useTabs.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useTabs",permalink:"/docs/reference/react-hooks/useTabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/react-hooks/useTabs.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Tabs",permalink:"/docs/tags/tabs"},{label:"Tab state",permalink:"/docs/tags/tab-state"},{label:"Tabs a11y",permalink:"/docs/tags/tabs-a-11-y"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["React","Tabs","Tab state","Tabs a11y"],title:"useTabs"},sidebar:"reference",previous:{title:"useSubmenuInteraction",permalink:"/docs/reference/react-hooks/useSubmenuInteraction"},next:{title:"useTheme",permalink:"/docs/reference/react-hooks/useTheme"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My Tabs functionality isn&#39;t working",id:"my-tabs-functionality-isnt-working",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"A set of hooks for controlling state and Accessibility for Tab components."),(0,s.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useTabs",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TabData {\n  id: string\n  label: string\n  children: {\n    id: string\n  }\n}\n\n<TabsProvider data={Array<TabData>}>\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("p",null,"The useTab set comes with four hooks and a context provider."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"TabsProvider"),": controls the context and data for all of the Tab-related hooks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"useTabList"),": custom hook for a component that displays the list of tabs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"useTab"),": custom hook for a component that displays a single tab"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"usePanelList"),": custom hook for a component that displays the list of panels"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"usePanel"),": custom hook for a component that displays a single panel")),(0,s.kt)("p",null,"Wrap your Tabs parent component in the ",(0,s.kt)("inlineCode",{parentName:"p"},"TabsProvider"),", then use all the hooks in each individual component at the top level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {11,22,33,44,52}",showLineNumbers:!0,"{11,22,33,44,52}":!0},"function TabsEl() {\n  return (\n    <div>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return <div {...data}>{data.id}</div>\n}\n\nfunction Tabs({ data }) {\n  return (\n    <TabsProvider data={data}>\n      <TabsEl />\n    </TabsProvider>\n  )\n}\n\nexport default memo(Tabs)\n")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"There are no parameters required for any of the Tabs hooks."),(0,s.kt)("p",null,"Each hook ",(0,s.kt)("strong",{parentName:"p"},"requires")," the context provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"TabsProvider")," component."),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("p",null,"Each hook returns an Object of properties that utilize the ",(0,s.kt)("inlineCode",{parentName:"p"},"TabsProvider")," context and are relevant to the specific component section of the Tabs Anatomy."),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("h3",{id:"my-tabs-functionality-isnt-working"},"My Tabs functionality isn't working"),(0,s.kt)("p",null,"Make sure you are building single-responsibility components to help reduce the risks of buggy behavior and help your project to scale."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Don\'t create a "single page" Tabs super component.'),(0,s.kt)("li",{parentName:"ol"},"Follow the ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/thinking-in-react.html#gatsby-focus-wrapper"},"Thinking in React")," guidelines."),(0,s.kt)("li",{parentName:"ol"},"Ensure your components are single responsibility so only one hook is called within each component.")))}d.isMDXComponent=!0}}]);