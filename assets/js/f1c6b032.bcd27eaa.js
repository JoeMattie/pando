"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2815:function(e,t,n){var a=n(3289);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3154:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3289),r=n(2957),o=n(2238),i="tabItem_dJL3",s="tabItemActive_WCWk";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,g=(0,r.Z)(),v=g.tabGroupChoices,f=g.setTabGroupChoices,h=(0,a.useState)(p),y=h[0],b=h[1],k=a.Children.toArray(e.children),w=[];if(null!=d){var N=v[d];null!=N&&N!==y&&u.some((function(e){return e.value===N}))&&b(N)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=u[n].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1215:function(e,t,n){var a=(0,n(3289).createContext)(void 0);t.Z=a},2957:function(e,t,n){var a=n(3289),r=n(1215);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(753),r=n(1242),o=(n(3289),n(167)),i=n(3154),s=n(2815),l=["components"],c={sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},p={unversionedId:"development/getting-started/usage",id:"development/getting-started/usage",isDocsHomePage:!1,title:"Usage (Web)",description:"This is unreleased documentation for TVA components package.",source:"@site/docs/development/getting-started/usage.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/usage",permalink:"/tva/docs/development/getting-started/usage",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/usage.md",version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},sidebar:"development",previous:{title:"Installation",permalink:"/tva/docs/development/getting-started/installation"},next:{title:"Usage (Mobile)",permalink:"/tva/docs/development/getting-started/usage_mobile"}},u=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Globals",id:"globals",children:[{value:"Responsive meta tag",id:"responsive-meta-tag",children:[]}]},{value:"Typescript",id:"typescript",children:[]},{value:"Versioned Documentation",id:"versioned-documentation",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is ",(0,o.kt)("strong",{parentName:"p"},"unreleased")," documentation for TVA ",(0,o.kt)("strong",{parentName:"p"},"components")," package."))),(0,o.kt)("p",null,'TVA packages and "components" work in isolation. ',(0,o.kt)("strong",{parentName:"p"},"They are self-supporting"),", and will only inject the styles they need to display and don't rely on any global style-sheets such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/necolas/normalize.css/"},"normalize.css"),"."),(0,o.kt)("p",null,'You can use any of the packages/components as demonstrated in the documentation. Please refer to each "component\'s" ',(0,o.kt)("a",{parentName:"p",href:"../packages/components/button"},"page")," to see how they should be imported and used."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Here's a quick example using React to get you started, ",(0,o.kt)("strong",{parentName:"p"},"it's literally all you need"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import { getButtonProps } from '@pluralsight/tva-components\n\nfunction Button(props) {\n  const { children, ...btnProps } = props\n  const tvaBtnProps = getButtonProps()\n\n  return (\n    <button {...btnProps} {...tvaBtnProps}>\n      {children}\n    </button>\n  )\n}\n\n")),(0,o.kt)("p",null,"The above code shows that all you need is to import a helper function and that's it! TVA provides all the properties you need to cover styles and accessibility so you can own the rest for maximum flexibility."),(0,o.kt)("p",null,"This means you can use ",(0,o.kt)("strong",{parentName:"p"},"any framework")," or library of your choice (React, Svelte, Vue, MUI, Styled-Components, .etc)."),(0,o.kt)("h2",{id:"globals"},"Globals"),(0,o.kt)("p",null,"TVA usage experience can be improved with a handful of important globals that you'll need to be aware of."),(0,o.kt)("h3",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,o.kt)("p",null,'TVA is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up "components" as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your ',(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n')),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"TVA has a supported ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/tva")," package available for anyone who uses Typescript. All you need to do is install it as a ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependency"),". If you use ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/migration"},"Yarn berry"),", you can install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript"},"typescript plugin")," which will automatically install any supporting type delcaration packages you need for any dependency you add into your project!"),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @types/tva -D\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @types/tva -D\n")))),(0,o.kt)("h2",{id:"versioned-documentation"},"Versioned Documentation"),(0,o.kt)("p",null,"This documentation always reflects the latest stable version of TVA. You can find older versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle. Additionally, we release our ",(0,o.kt)("strong",{parentName:"p"},"next")," version documentation which has the \ud83d\udea7 emoji next to it."))}m.isMDXComponent=!0},2238:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);