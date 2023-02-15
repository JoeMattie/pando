"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8709],{70167:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var s=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),u=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||r;return a?s.createElement(g,o(o({ref:t},p),{},{components:a})):s.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9952:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(45721),n=a(88795),r="tabItem_U_pG";function o(e){let{children:t,hidden:a,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},8157:function(e,t,a){a.d(t,{Z:function(){return T}});var s=a(81648),n=a(45721),r=a(88795),o=a(79106),i=a(39977),c=a(5548),u=a(24734);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:n}}=e;return{value:t,label:a,attributes:s,default:n}}))}function l(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=l(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,p]=m({queryString:a,groupId:s}),[g,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),f=(()=>{const e=c??g;return d({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),v(e)}),[p,v,r]),tabValues:r}}var v=a(93046),f=a(99941),k="tabList_ZP7c",h="tabItem_qNjf";function N(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,v.o5)(),l=e=>{const t=e.currentTarget,a=u.indexOf(t),s=c[a].value;s!==o&&(p(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:l},i,{className:(0,r.Z)("tabs__item",h,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:s}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function b(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",k)},n.createElement(N,(0,s.Z)({},e,t)),n.createElement(x,(0,s.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return n.createElement(b,(0,s.Z)({key:String(t)},e))}},33023:function(e,t,a){a.d(t,{Z:function(){return he}});var s={};a.r(s),a.d(s,{psActionBackground:function(){return o},psActionBackgroundActive:function(){return c},psActionBackgroundHover:function(){return i},psActionBackgroundWeak:function(){return u},psActionBackgroundWeakActive:function(){return l},psActionBackgroundWeakHover:function(){return p},psActionBorder:function(){return d},psActionBorderFocus:function(){return m},psActionNavigation:function(){return g},psActionNavigationHover:function(){return v},psActionNavigationVisited:function(){return f},psActionText:function(){return k},psActionTextInverse:function(){return x},psActionTextMedium:function(){return N},psActionTextWeak:function(){return h},psBackground:function(){return I},psBackgroundActive:function(){return W},psBackgroundHover:function(){return C},psBorder:function(){return $},psBorderStrong:function(){return E},psBorderWeak:function(){return F},psDangerBackground:function(){return b},psDangerBackgroundActive:function(){return S},psDangerBackgroundHover:function(){return T},psDangerBorder:function(){return y},psDangerSurface:function(){return w},psDangerText:function(){return B},psDangerTextInverse:function(){return D},psDangerTextMedium:function(){return j},psDangerTextWeak:function(){return A},psInfoBorder:function(){return L},psInfoSurface:function(){return J},psInfoText:function(){return U},psInfoTextMedium:function(){return R},psInfoTextWeak:function(){return X},psSuccessBorder:function(){return Y},psSuccessSurface:function(){return K},psSuccessText:function(){return Q},psSuccessTextMedium:function(){return te},psSuccessTextWeak:function(){return ee},psSurface:function(){return M},psSurfaceInverse:function(){return H},psSurfaceMedium:function(){return V},psSurfaceStrong:function(){return Z},psSurfaceWeak:function(){return O},psText:function(){return P},psTextInverse:function(){return G},psTextMedium:function(){return q},psTextStrong:function(){return z},psTextWeak:function(){return _},psWarningBorder:function(){return ae},psWarningSurface:function(){return se},psWarningText:function(){return ne},psWarningTextMedium:function(){return oe},psWarningTextWeak:function(){return re}});var n=a(81648),r=a(45721);const o="var(--ps-action-background)",i="var(--ps-action-background-hover)",c="var(--ps-action-background-active)",u="var(--ps-action-background-weak)",p="var(--ps-action-background-weak-hover)",l="var(--ps-action-background-weak-active)",d="var(--ps-action-border)",m="var(--ps-action-border-focus)",g="var(--ps-action-navigation)",v="var(--ps-action-navigation-hover)",f="var(--ps-action-navigation-visited)",k="var(--ps-action-text)",h="var(--ps-action-text-weak)",N="var(--ps-action-text-medium)",x="var(--ps-action-text-inverse)",b="var(--ps-danger-background)",T="var(--ps-danger-background-hover)",S="var(--ps-danger-background-active)",y="var(--ps-danger-border)",w="var(--ps-danger-surface)",B="var(--ps-danger-text)",A="var(--ps-danger-text-weak)",j="var(--ps-danger-text-medium)",D="var(--ps-danger-text-inverse)",I="var(--ps-background)",C="var(--ps-background-hover)",W="var(--ps-background-active)",$="var(--ps-border)",F="var(--ps-border-weak)",E="var(--ps-border-strong)",M="var(--ps-surface)",O="var(--ps-surface-weak)",V="var(--ps-surface-medium)",Z="var(--ps-surface-strong)",H="var(--ps-surface-inverse)",P="var(--ps-text)",_="var(--ps-text-weak)",q="var(--ps-text-medium)",z="var(--ps-text-strong)",G="var(--ps-text-inverse)",L="var(--ps-info-border)",J="var(--ps-info-surface)",U="var(--ps-info-text)",X="var(--ps-info-text-weak)",R="var(--ps-info-text-medium)",Y="var(--ps-success-border)",K="var(--ps-success-surface)",Q="var(--ps-success-text)",ee="var(--ps-success-text-weak)",te="var(--ps-success-text-medium)",ae="var(--ps-warning-border)",se="var(--ps-warning-surface)",ne="var(--ps-warning-text)",re="var(--ps-warning-text-weak)",oe="var(--ps-warning-text-medium)";var ie=a(28614),ce="colorGroup_AYpI",ue="labelcontainer_EC1G",pe="label_LGml",le="list_zgT8",de="item_kpsV",me="swab_SijF",ge="syntax_C4sE";function ve(e){return r.createElement("p",{className:pe},e.children)}function fe(e){const t=ie.X[e.sentiment],a=Object.keys(t);return r.createElement("section",{className:ce},r.createElement("ul",{className:le},a.map((e=>r.createElement(ke,(0,n.Z)({},t[e],{key:t[e].id}))))))}function ke(e){return r.createElement("li",{className:de},r.createElement("div",{className:me,style:{backgroundColor:s[e.jsName]}}),r.createElement("div",{className:ue},r.createElement(ve,null,r.createElement("span",{className:ge},"CSS:")," ",e.cssName),r.createElement(ve,null,r.createElement("span",{className:ge},"SASS:")," ",e.sassName),r.createElement(ve,null,r.createElement("span",{className:ge},"JS:")," ",e.jsName)))}var he=function(e){return r.createElement("div",null,r.createElement(fe,{sentiment:e.sentiment}))}},63274:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var s=a(81648),n=(a(45721),a(70167)),r=a(8157),o=a(9952),i=a(28614),c=a(33023);const u={tags:["Tokens","Themes"],title:"Colors"},p=void 0,l={unversionedId:"development/tokens/colors",id:"development/tokens/colors",title:"Colors",description:"Installation",source:"@site/docs/development/tokens/colors.mdx",sourceDirName:"development/tokens",slug:"/development/tokens/colors",permalink:"/docs/next/development/tokens/colors",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/development/tokens/colors.mdx",tags:[{label:"Tokens",permalink:"/docs/next/tags/tokens"},{label:"Themes",permalink:"/docs/next/tags/themes"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Tokens","Themes"],title:"Colors"},sidebar:"development",previous:{title:"Intro",permalink:"/docs/next/development/tokens/intro"},next:{title:"Intro",permalink:"/docs/next/development/headless-styles/intro"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"List of tokens",id:"list-of-tokens",level:2},{value:"Default",id:"default",level:3},{value:"Action",id:"action",level:3},{value:"Info",id:"info",level:3},{value:"Success",id:"success",level:3},{value:"Warning",id:"warning",level:3},{value:"Danger",id:"danger",level:3},{value:"Themes",id:"themes",level:2},{value:"Custom Theming",id:"custom-theming",level:2},{value:"CSS custom theming",id:"css-custom-theming",level:3},{value:"JS custom theming",id:"js-custom-theming",level:3},{value:"A note on custom tokens in CSS",id:"a-note-on-custom-tokens-in-css",level:2},{value:"SCSS tokens",id:"scss-tokens",level:3}],g={toc:m};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"headless-styles")," package uses the ",(0,n.kt)("strong",{parentName:"p"},"design-tokens")," package internall for both CSS or JS APIs. This means ",(0,n.kt)("strong",{parentName:"p"},"you do not need to install this package")," if you are using headless-styles.")),(0,n.kt)("h2",{id:"list-of-tokens"},"List of tokens"),(0,n.kt)("p",null,"These are the tokens we provide (i.e. a theme). Our ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup")," comes with three themes: ",(0,n.kt)("strong",{parentName:"p"},"light"),", ",(0,n.kt)("strong",{parentName:"p"},"dark"),", and ",(0,n.kt)("strong",{parentName:"p"},"system"),". For every theme, we overwrite the values shown in this list so the token names are the same for all themes."),(0,n.kt)("p",null,"The tokens are presented by ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro#naming-convention"},"sentiment"),"."),(0,n.kt)("h3",{id:"default"},"Default"),(0,n.kt)(c.Z,{sentiment:i.s[2],mdxType:"TokensColorMap"}),(0,n.kt)("h3",{id:"action"},"Action"),(0,n.kt)(c.Z,{sentiment:i.s[0],mdxType:"TokensColorMap"}),(0,n.kt)("h3",{id:"info"},"Info"),(0,n.kt)(c.Z,{sentiment:i.s[3],mdxType:"TokensColorMap"}),(0,n.kt)("h3",{id:"success"},"Success"),(0,n.kt)(c.Z,{sentiment:i.s[4],mdxType:"TokensColorMap"}),(0,n.kt)("h3",{id:"warning"},"Warning"),(0,n.kt)(c.Z,{sentiment:i.s[5],mdxType:"TokensColorMap"}),(0,n.kt)("h3",{id:"danger"},"Danger"),(0,n.kt)(c.Z,{sentiment:i.s[1],mdxType:"TokensColorMap"}),(0,n.kt)("h2",{id:"themes"},"Themes"),(0,n.kt)("p",null,"The design-tokens package comes with three themes: ",(0,n.kt)("strong",{parentName:"p"},"dark (default)"),", ",(0,n.kt)("strong",{parentName:"p"},"light"),", and ",(0,n.kt)("strong",{parentName:"p"},"system"),"."),(0,n.kt)("p",null,'This website uses the "dark" and "light" themes.'),(0,n.kt)("p",null,"Themes are controlled by using an attribute on the ",(0,n.kt)("inlineCode",{parentName:"p"},"html")," tag of ",(0,n.kt)("inlineCode",{parentName:"p"},"data-theme")," for a full page takeover (what we do on this site), or a CSS class of the ",(0,n.kt)("inlineCode",{parentName:"p"},"pando-<theme name>"),' (i.e. "light", "dark") for component level control.'),(0,n.kt)("p",null,"If no theme is set, the default token values that you will receive will be for the dark theme."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Data-theme attribute example"',title:'"Data-theme',attribute:!0,'example"':!0},'<html data-theme="dark"></html>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Class level example"',title:'"Class',level:!0,'example"':!0},'<SomeParent>\n  {/* only this component will be light-mode */}\n  <SomeChild className="pando-light" />\n</SomeParent>\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Themes ",(0,n.kt)("strong",{parentName:"p"},"depend on the normalize.css")," file to be used in your project. Check out our ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"getting started")," docs to learn how to add the normalize.css file to your project.")),(0,n.kt)("h2",{id:"custom-theming"},"Custom Theming"),(0,n.kt)("p",null,"Our semantic-token system allows for easily customizing the themes. Instead of adding new tokens, simply overwrite the tokens we provide in the list above. We default the ",(0,n.kt)("inlineCode",{parentName:"p"},":root"),' to use dark mode and only overwrite for any theme outside of that (i.e. "light", etc.).'),(0,n.kt)("h3",{id:"css-custom-theming"},"CSS custom theming"),(0,n.kt)("p",null,"In CSS all you need to do is to overwrite ",(0,n.kt)("a",{parentName:"p",href:"#list-of-tokens"},"the tokens")," you want to update in the ",(0,n.kt)("inlineCode",{parentName:"p"},":root")," CSS selector in your project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},":root {\n  --ps-text: #fff;\n}\n")),(0,n.kt)("p",null,'To create your own light theme, you will need to do the exact same thing, except target our "light" selectors.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},"html[data-theme='light'],\n.pando-light {\n  --ps-text: #000;\n}\n")),(0,n.kt)("h3",{id:"js-custom-theming"},"JS custom theming"),(0,n.kt)("p",null,"Due to the nature of our CSS-in-JS design in ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/intro"},"headless-styles"),", you can extend our components to use whichever custom theme solution you prefer with your chosen library (i.e. styled-components, emotion, etc.)."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Button#extending"},"Button example")," for more details."),(0,n.kt)("h2",{id:"a-note-on-custom-tokens-in-css"},"A note on custom tokens in CSS"),(0,n.kt)("p",null,"Because we limit tokens to our semantic color theme (which should provide you with anything you will more than likely ever need), your team may feel the need to extend and add additional variables to your project. In this scenario, for performance reasons, ",(0,n.kt)("strong",{parentName:"p"},"you should use static variables when you need a color/value not in the list"),". Once you pass 60 CSS tokens, additional tokens will start to negatively impact the performance of page loads."),(0,n.kt)("p",null,"There is enough data on the web now that proves it is more performant to use static values than repeat CSS properties."),(0,n.kt)("p",null,"This means that doing this..."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: 1rem;\n")),(0,n.kt)("p",null,"Is much more performant than doing this 100 times in your code-base:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: var(--padding-top);\n")),(0,n.kt)("p",null,"This is exactly why we limit our tokens at 60 in quantity and only using color values."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If your team would like to define a large number of tokens to make your code seem more valuable, ",(0,n.kt)("strong",{parentName:"p"},"we highly recommend the use of SCSS in your project which will produce the most performant outcome in this scenario."))),(0,n.kt)("h3",{id:"scss-tokens"},"SCSS tokens"),(0,n.kt)("p",null,"SCSS tokens differ from CSS variables in that they are pre-processed out of existence and into your code base. This means that when you use SCSS, there are no tokens that are stored in browser memory. This is a ",(0,n.kt)("strong",{parentName:"p"},"huge")," benefit because you can essentially create as many tokens as you want with ",(0,n.kt)("strong",{parentName:"p"},"no negative side effects to performance.")))}v.isMDXComponent=!0},28614:function(e){e.exports=JSON.parse('{"s":["action","danger","default","info","success","warning"],"X":{"action":{"psActionBackground":{"id":"psActionBackground","cssName":"--ps-action-background","sassName":"$ps-action-background","jsName":"psActionBackground","value":"#4A33D1"},"psActionBackgroundHover":{"id":"psActionBackgroundHover","cssName":"--ps-action-background-hover","sassName":"$ps-action-background-hover","jsName":"psActionBackgroundHover","value":"#3C28B1"},"psActionBackgroundActive":{"id":"psActionBackgroundActive","cssName":"--ps-action-background-active","sassName":"$ps-action-background-active","jsName":"psActionBackgroundActive","value":"#30208D"},"psActionBackgroundWeak":{"id":"psActionBackgroundWeak","cssName":"--ps-action-background-weak","sassName":"$ps-action-background-weak","jsName":"psActionBackgroundWeak","value":"#24186A"},"psActionBackgroundWeakHover":{"id":"psActionBackgroundWeakHover","cssName":"--ps-action-background-weak-hover","sassName":"$ps-action-background-weak-hover","jsName":"psActionBackgroundWeakHover","value":"#30208D"},"psActionBackgroundWeakActive":{"id":"psActionBackgroundWeakActive","cssName":"--ps-action-background-weak-active","sassName":"$ps-action-background-weak-active","jsName":"psActionBackgroundWeakActive","value":"#24186A"},"psActionBorder":{"id":"psActionBorder","cssName":"--ps-action-border","sassName":"$ps-action-border","jsName":"psActionBorder","value":"#6855D9"},"psActionBorderFocus":{"id":"psActionBorderFocus","cssName":"--ps-action-border-focus","sassName":"$ps-action-border-focus","jsName":"psActionBorderFocus","value":"#3895FF"},"psActionNavigation":{"id":"psActionNavigation","cssName":"--ps-action-navigation","sassName":"$ps-action-navigation","jsName":"psActionNavigation","value":"#3895FF"},"psActionNavigationHover":{"id":"psActionNavigationHover","cssName":"--ps-action-navigation-hover","sassName":"$ps-action-navigation-hover","jsName":"psActionNavigationHover","value":"#3895FF"},"psActionNavigationVisited":{"id":"psActionNavigationVisited","cssName":"--ps-action-navigation-visited","sassName":"$ps-action-navigation-visited","jsName":"psActionNavigationVisited","value":"#B17DD4"},"psActionText":{"id":"psActionText","cssName":"--ps-action-text","sassName":"$ps-action-text","jsName":"psActionText","value":"#E1DDF7"},"psActionTextWeak":{"id":"psActionTextWeak","cssName":"--ps-action-text-weak","sassName":"$ps-action-text-weak","jsName":"psActionTextWeak","value":"#A499E8"},"psActionTextMedium":{"id":"psActionTextMedium","cssName":"--ps-action-text-medium","sassName":"$ps-action-text-medium","jsName":"psActionTextMedium","value":"#8677E0"},"psActionTextInverse":{"id":"psActionTextInverse","cssName":"--ps-action-text-inverse","sassName":"$ps-action-text-inverse","jsName":"psActionTextInverse","value":"#E1DDF7"}},"danger":{"psDangerBackground":{"id":"psDangerBackground","cssName":"--ps-danger-background","sassName":"$ps-danger-background","jsName":"psDangerBackground","value":"#B9004B"},"psDangerBackgroundHover":{"id":"psDangerBackgroundHover","cssName":"--ps-danger-background-hover","sassName":"$ps-danger-background-hover","jsName":"psDangerBackgroundHover","value":"#8B0038"},"psDangerBackgroundActive":{"id":"psDangerBackgroundActive","cssName":"--ps-danger-background-active","sassName":"$ps-danger-background-active","jsName":"psDangerBackgroundActive","value":"#5C0026"},"psDangerBorder":{"id":"psDangerBorder","cssName":"--ps-danger-border","sassName":"$ps-danger-border","jsName":"psDangerBorder","value":"#FF1675"},"psDangerSurface":{"id":"psDangerSurface","cssName":"--ps-danger-surface","sassName":"$ps-danger-surface","jsName":"psDangerSurface","value":"#5C0026"},"psDangerText":{"id":"psDangerText","cssName":"--ps-danger-text","sassName":"$ps-danger-text","jsName":"psDangerText","value":"#FFF0F6"},"psDangerTextWeak":{"id":"psDangerTextWeak","cssName":"--ps-danger-text-weak","sassName":"$ps-danger-text-weak","jsName":"psDangerTextWeak","value":"#FFA2C8"},"psDangerTextMedium":{"id":"psDangerTextMedium","cssName":"--ps-danger-text-medium","sassName":"$ps-danger-text-medium","jsName":"psDangerTextMedium","value":"#FF73AC"},"psDangerTextInverse":{"id":"psDangerTextInverse","cssName":"--ps-danger-text-inverse","sassName":"$ps-danger-text-inverse","jsName":"psDangerTextInverse","value":"#FFF0F6"}},"default":{"psBackground":{"id":"psBackground","cssName":"--ps-background","sassName":"$ps-background","jsName":"psBackground","value":"#393B6B"},"psBackgroundHover":{"id":"psBackgroundHover","cssName":"--ps-background-hover","sassName":"$ps-background-hover","jsName":"psBackgroundHover","value":"#404376"},"psBackgroundActive":{"id":"psBackgroundActive","cssName":"--ps-background-active","sassName":"$ps-background-active","jsName":"psBackgroundActive","value":"#2D2D55"},"psBorder":{"id":"psBorder","cssName":"--ps-border","sassName":"$ps-border","jsName":"psBorder","value":"#404376"},"psBorderWeak":{"id":"psBorderWeak","cssName":"--ps-border-weak","sassName":"$ps-border-weak","jsName":"psBorderWeak","value":"#2D2D55"},"psBorderStrong":{"id":"psBorderStrong","cssName":"--ps-border-strong","sassName":"$ps-border-strong","jsName":"psBorderStrong","value":"#585FA2"},"psSurface":{"id":"psSurface","cssName":"--ps-surface","sassName":"$ps-surface","jsName":"psSurface","value":"#130F25"},"psSurfaceWeak":{"id":"psSurfaceWeak","cssName":"--ps-surface-weak","sassName":"$ps-surface-weak","jsName":"psSurfaceWeak","value":"#1B1834"},"psSurfaceMedium":{"id":"psSurfaceMedium","cssName":"--ps-surface-medium","sassName":"$ps-surface-medium","jsName":"psSurfaceMedium","value":"#242145"},"psSurfaceStrong":{"id":"psSurfaceStrong","cssName":"--ps-surface-strong","sassName":"$ps-surface-strong","jsName":"psSurfaceStrong","value":"#2A2753"},"psSurfaceInverse":{"id":"psSurfaceInverse","cssName":"--ps-surface-inverse","sassName":"$ps-surface-inverse","jsName":"psSurfaceInverse","value":"#F3F3F8"},"psText":{"id":"psText","cssName":"--ps-text","sassName":"$ps-text","jsName":"psText","value":"#D1D2E6"},"psTextWeak":{"id":"psTextWeak","cssName":"--ps-text-weak","sassName":"$ps-text-weak","jsName":"psTextWeak","value":"#8B90C1"},"psTextMedium":{"id":"psTextMedium","cssName":"--ps-text-medium","sassName":"$ps-text-medium","jsName":"psTextMedium","value":"#A5AACF"},"psTextStrong":{"id":"psTextStrong","cssName":"--ps-text-strong","sassName":"$ps-text-strong","jsName":"psTextStrong","value":"#F3F3F8"},"psTextInverse":{"id":"psTextInverse","cssName":"--ps-text-inverse","sassName":"$ps-text-inverse","jsName":"psTextInverse","value":"#130F25"}},"info":{"psInfoBorder":{"id":"psInfoBorder","cssName":"--ps-info-border","sassName":"$ps-info-border","jsName":"psInfoBorder","value":"#00A3FF"},"psInfoSurface":{"id":"psInfoSurface","cssName":"--ps-info-surface","sassName":"$ps-info-surface","jsName":"psInfoSurface","value":"#003655"},"psInfoText":{"id":"psInfoText","cssName":"--ps-info-text","sassName":"$ps-info-text","jsName":"psInfoText","value":"#D5F0FF"},"psInfoTextWeak":{"id":"psInfoTextWeak","cssName":"--ps-info-text-weak","sassName":"$ps-info-text-weak","jsName":"psInfoTextWeak","value":"#80D1FF"},"psInfoTextMedium":{"id":"psInfoTextMedium","cssName":"--ps-info-text-medium","sassName":"$ps-info-text-medium","jsName":"psInfoTextMedium","value":"#2BB2FF"}},"success":{"psSuccessBorder":{"id":"psSuccessBorder","cssName":"--ps-success-border","sassName":"$ps-success-border","jsName":"psSuccessBorder","value":"#02E088"},"psSuccessSurface":{"id":"psSuccessSurface","cssName":"--ps-success-surface","sassName":"$ps-success-surface","jsName":"psSuccessSurface","value":"#014B2D"},"psSuccessText":{"id":"psSuccessText","cssName":"--ps-success-text","sassName":"$ps-success-text","jsName":"psSuccessText","value":"#D0FFEC"},"psSuccessTextWeak":{"id":"psSuccessTextWeak","cssName":"--ps-success-text-weak","sassName":"$ps-success-text-weak","jsName":"psSuccessTextWeak","value":"#43FDB4"},"psSuccessTextMedium":{"id":"psSuccessTextMedium","cssName":"--ps-success-text-medium","sassName":"$ps-success-text-medium","jsName":"psSuccessTextMedium","value":"#02BB71"}},"warning":{"psWarningBorder":{"id":"psWarningBorder","cssName":"--ps-warning-border","sassName":"$ps-warning-border","jsName":"psWarningBorder","value":"#FFBA0D"},"psWarningSurface":{"id":"psWarningSurface","cssName":"--ps-warning-surface","sassName":"$ps-warning-surface","jsName":"psWarningSurface","value":"#6B4C00"},"psWarningText":{"id":"psWarningText","cssName":"--ps-warning-text","sassName":"$ps-warning-text","jsName":"psWarningText","value":"#FFF6E0"},"psWarningTextWeak":{"id":"psWarningTextWeak","cssName":"--ps-warning-text-weak","sassName":"$ps-warning-text-weak","jsName":"psWarningTextWeak","value":"#FFE4A1"},"psWarningTextMedium":{"id":"psWarningTextMedium","cssName":"--ps-warning-text-medium","sassName":"$ps-warning-text-medium","jsName":"psWarningTextMedium","value":"#FFD262"}}}}')}}]);