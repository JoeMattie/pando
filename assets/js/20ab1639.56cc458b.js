"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81945],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var i=n(81648),o=(n(45721),n(70167));const r={tags:["confirmation","modal","error","message"],title:"Confirm Dialog"},a=void 0,l={unversionedId:"design/components/confirm-dialog",id:"design/components/confirm-dialog",title:"Confirm Dialog",description:"Description",source:"@site/docs/design/components/confirm-dialog.md",sourceDirName:"design/components",slug:"/design/components/confirm-dialog",permalink:"/docs/next/design/components/confirm-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/design/components/confirm-dialog.md",tags:[{label:"confirmation",permalink:"/docs/next/tags/confirmation"},{label:"modal",permalink:"/docs/next/tags/modal"},{label:"error",permalink:"/docs/next/tags/error"},{label:"message",permalink:"/docs/next/tags/message"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["confirmation","modal","error","message"],title:"Confirm Dialog"},sidebar:"design",previous:{title:"Checkbox",permalink:"/docs/next/design/components/checkbox"},next:{title:"Form Control",permalink:"/docs/next/design/components/form-control"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Kinds",id:"kinds",level:3},{value:"Dos and don\u2019ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"Figma usage",id:"figma-usage",level:2},{value:"Feedback on this component",id:"feedback-on-this-component",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to interrupt the user with a mandatory confirmation or action."),(0,o.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Container",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Header",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Title - A descriptive explanation of what action is required."),(0,o.kt)("li",{parentName:"ul"},"Body - A lengthier description of the reasons or ramifications of performing this action."))),(0,o.kt)("li",{parentName:"ul"},"Footer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Actions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cancel - Cancels the action and closes the dialog."),(0,o.kt)("li",{parentName:"ul"},"Primary action - Performs the action and closes the dialog.")))))))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Confirm dialogs are to be used to interrupt the user\u2019s task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,o.kt)("inlineCode",{parentName:"p"},"window.confirm()")," function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A pointer action outside of the dialog (on the 'backdrop') will close the dialog."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Esc")," key will close the dialog.")),(0,o.kt)("h3",{id:"kinds"},"Kinds"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Non-destructive"),(0,o.kt)("li",{parentName:"ul"},"Destructive",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For times you want to confirm an action that is potentially destructive or irreversable, e.g. removing a user, deleting data, etc.")))),(0,o.kt)("h3",{id:"dos-and-donts"},"Dos and don\u2019ts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do always use the danger sentiment option for the trigger Button when using the destructive Confirm Dialog."),(0,o.kt)("li",{parentName:"ul"},"Do not use Confirm Dialogs for any task other than their intended purpose as defined above. For all other tasks, use a Modal with custom content."),(0,o.kt)("li",{parentName:"ul"},"Do not add additional buttons to this pattern. Instead, utilize custom Modal content for interactions requiring multiple action options."),(0,o.kt)("li",{parentName:"ul"},"Do not use for non-critical information or warnings. Instead, use an inline Admonition.")),(0,o.kt)("h3",{id:"best-practices"},"Best practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Confirm Dialogs are potentially invasive and interrupt the user experience, and should be used sparingly.")),(0,o.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,o.kt)("h3",{id:"microcopy"},"Microcopy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use sentence case for the dialog title.")),(0,o.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prioritize descriptive keywords in dialog titles."),(0,o.kt)("li",{parentName:"ul"},"Dialog descriptions should contain content that is both descriptive and concise."),(0,o.kt)("li",{parentName:"ul"},"The primary action label should mirror terms used in the dialog title, e.g. a dialog with a title of \u201cYou are about to delete this row\u201d should use an action button with the label of \u201cDelete\u201d")),(0,o.kt)("h2",{id:"figma-usage"},"Figma usage"),(0,o.kt)("h2",{id:"feedback-on-this-component"},"Feedback on this component"))}d.isMDXComponent=!0}}]);