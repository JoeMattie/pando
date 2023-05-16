"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3268],{70167:function(n,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var e=o(45721);function a(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function r(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.push.apply(o,e)}return o}function i(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function d(n,t){if(null==n)return{};var o,e,a=function(n,t){if(null==n)return{};var o,e,a={},r=Object.keys(n);for(e=0;e<r.length;e++)o=r[e],t.indexOf(o)>=0||(a[o]=n[o]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)o=r[e],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var l=e.createContext({}),u=function(n){var t=e.useContext(l),o=t;return n&&(o="function"==typeof n?n(t):i(i({},t),n)),o},c=function(n){var t=u(n.components);return e.createElement(l.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return e.createElement(e.Fragment,{},t)}},s=e.forwardRef((function(n,t){var o=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),s=u(o),f=a,b=s["".concat(l,".").concat(f)]||s[f]||p[f]||r;return o?e.createElement(b,i(i({ref:t},c),{},{components:o})):e.createElement(b,i({ref:t},c))}));function f(n,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=o.length,i=new Array(r);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=n,d.mdxType="string"==typeof n?n:a,i[1]=d;for(var u=2;u<r;u++)i[u]=o[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,o)}s.displayName="MDXCreateElement"},49751:function(n,t,o){const e=o(86521);t.Z=function(n){return(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"warning triangle filled icon",...n,children:(0,e.jsx)("path",{d:"M13 14.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5Zm0 3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1ZM1.434 20.25a.5.5 0 0 0 .433.75h20.266a.5.5 0 0 0 .433-.75L12.433 2.747a.5.5 0 0 0-.866 0L1.434 20.25Z"})})}},23752:function(n,t,o){o.d(t,{A:function(){return a}});var e=o(45721);function a(n){return(0,e.useEffect)((function(){function t(t){"Escape"===t.key&&(t.stopPropagation(),t.preventDefault(),n())}return window.addEventListener("keydown",t,!1),function(){window.removeEventListener("keydown",t,!1)}}),[n]),null}},94662:function(n,t,o){o.d(t,{a:function(){return f},b:function(){return m},c:function(){return _},d:function(){return v},e:function(){return p},f:function(){return s},g:function(){return u},h:function(){return g},i:function(){return b},j:function(){return c}});var e=o(68990),a=o(65214),r=o(39381),i=o(84676);function d(n){return{body:{id:n.bodyId},focusGuard:{"aria-hidden":!0,"data-focus-guard":!0,tabIndex:0},footer:{},heading:{id:n.headingId},section:{"aria-modal":!0,role:"document",tabIndex:-1},wrapper:(0,e._)({"data-focus-lock-disabled":!1,"aria-describedby":n.bodyId,id:n.id,role:"alertdialog",tabIndex:-1},(0,i.g)(n))}}(0,o(46884).s)(':root{--ps-backdrop:rgba(0,0,0,.65)}.light,html[data-theme=light]{--ps-backdrop:hsla(0,0%,100%,.65)}.pando_alertDialogBackdrop{background:var(--ps-backdrop);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1300}.pando_alertDialogFooter{display:flex;gap:1rem;justify-content:flex-end;margin-top:1.5rem}.pando_alertFocusGuard{height:0;left:1px;overflow:hidden;padding:0;position:fixed;top:1px;width:1px}.pando_alertDialogSection{-webkit-padding-end:1.5rem;-webkit-padding-start:1.5rem;-webkit-animation-delay:.1s;animation-delay:.1s;background:var(--ps-surface-weak);border-color:var(--ps-border-weak);border-radius:8px;border-style:solid;border-width:1px;box-shadow:0 10px 15px -3px rgba(0,0,0,.01),0 4px 6px -2px rgba(0,0,0,.05);color:var(--ps-text);display:flex;flex-direction:column;font-family:inherit;margin-bottom:3.75rem;margin-top:3.75rem;max-width:50ch;opacity:0;outline:2px solid transparent;outline-offset:2px;padding-bottom:1.5rem;padding-inline-end:1.5rem;padding-inline-start:1.5rem;position:relative;width:100%;z-index:1400}.pando_alertDialogWrapper{align-items:flex-start;display:flex;height:100dvh;justify-content:center;left:0;overflow:auto;position:fixed;top:0;width:100vw;z-index:1400}.pando_alertDialogHeader{align-items:center;display:flex;margin-bottom:1.5rem}.pando_alertDialogTitleIcon{-webkit-margin-end:.625rem;color:var(--ps-danger-border);line-height:normal;margin-inline-end:.625rem}@-webkit-keyframes fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes fadeInAnimation{0%{opacity:0}to{opacity:1}}.pando_alertDialogSection{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:fadeInAnimation;animation-name:fadeInAnimation;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes popInAnimation{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes popInAnimation{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.pando_alertDialogHeader{margin-top:2rem}.pando_alertDialogLabel{display:block;font-variation-settings:"wght" 500;font-weight:500;margin-top:1.2rem}.pando_alertDialogInputWrapper{margin-top:1rem}');var l="pando-alert";function u(n){var t=d(n);return{backdrop:(0,e._)({},(0,a.c)("".concat(l,"-backdrop"),"pando_alertDialogBackdrop")),focusGuard:(0,e._)((0,e._)({},t.focusGuard),(0,a.c)("".concat(l,"-focus-guard"),"pando_alertDialogFocusGuard")),wrapper:(0,e._)((0,e._)({},t.wrapper),(0,a.c)(l,"pando_alertDialogWrapper"))}}function c(){return(0,e._)((0,e._)({},d({}).section),(0,a.c)("".concat(l,"-section"),"pando_alertDialogSection"))}function p(n){var t=(0,r.a)({kind:n},{iconWrapper:(0,e._)({},(0,a.c)("".concat(l,"-icon"),"pando_alertDialogTitleIcon"))});return(0,e._)((0,e._)({},t),{},{header:(0,e._)({},(0,a.c)("".concat(l,"-header"),"pando_alertDialogHeader"))})}function s(n){return(0,e._)((0,e._)({},d({headingId:n}).heading),(0,a.c)("".concat(l,"-heading")))}function f(n){return(0,e._)((0,e._)({},d({bodyId:n}).body),(0,a.c)("".concat(l,"-body")))}function b(n){return(0,e._)({htmlFor:n},(0,a.c)("".concat(l,"-label"),"pando_alertDialogLabel"))}function g(n){return{inputOptions:(0,r.c)((0,e._)((0,e._)({},n),{},{size:"l",type:"text"})),inputWrapper:(0,e._)({},(0,a.c)("".concat(l,"-input-wrapper"),"pando_alertDialogInputWrapper"))}}function v(){return(0,e._)({},(0,a.c)("".concat(l,"-footer"),"pando_alertDialogFooter"))}function m(){return{btnOptions:(0,r.c)({usage:"outline"}),button:(0,e._)({},(0,a.c)("".concat(l,"-cancel")))}}function _(n){return{btnOptions:(0,r.c)({sentiment:"destructive"===n?"danger":"action"}),button:(0,e._)({},(0,a.c)("".concat(l,"-confirm")))}}},69702:function(n,t,o){o.d(t,{a:function(){return u},g:function(){return l}});var e=o(68990),a=o(65214),r=o(39381),i=o(93998);(0,o(46884).s)('.pando_filledButton:focus,.pando_outlineButton:focus,.pando_textButton:focus{box-shadow:none;outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.pando_filledButton:focus:not(:focus-visible),.pando_outlineButton:focus:not(:focus-visible),.pando_textButton:focus:not(:focus-visible){box-shadow:none;outline:none}.pando_filledButton:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]),.pando_outlineButton:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]),.pando_textButton:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]){cursor:not-allowed}.pando_filledButton,.pando_outlineButton,.pando_textButton{font-family:inherit}.pando_filledButton:is([aria-disabled=true],:disabled),.pando_outlineButton:is([aria-disabled=true],:disabled),.pando_textButton:is([aria-disabled=true],:disabled){opacity:.5}.pando_filledButton,.pando_outlineButton,.pando_textButton{align-items:center;-webkit-appearance:none;appearance:none;border:none;cursor:pointer;display:inline-flex;font-size:inherit;font-variation-settings:"wght" 600;font-weight:600;gap:.5rem;justify-content:center;line-height:0;outline:none;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:background-color .25s ease-in-out,color .25s ease-in-out,scale .15s ease-in-out;-webkit-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.pando_outlineButton{border-style:solid;border-width:2px}.pando_filledButton,.pando_outlineButton,.pando_textButton{border-radius:6px}.pando_actionButton{background-color:var(--ps-action-background);border-color:var(--ps-action-border);color:var(--ps-action-text)}.pando_defaultButton{background-color:var(--ps-background);border-color:var(--ps-border-strong);color:var(--ps-text)}.pando_dangerButton{background-color:var(--ps-danger-background);border-color:var(--ps-danger-border);color:var(--ps-danger-text-inverse)}.pando_mButton{-webkit-padding-end:1.125rem;-webkit-padding-start:1.125rem;font-size:.875rem;height:2rem;min-width:2.5rem;padding-inline-end:1.125rem;padding-inline-start:1.125rem}.pando_mButton:has(.pando-avatar){height:auto}.pando_lButton{-webkit-padding-end:2.156rem;-webkit-padding-start:2.156rem;height:3rem;min-width:2.5rem;padding-inline-end:2.156rem;padding-inline-start:2.156rem}.pando_lButton:has(.pando-avatar){height:auto}.pando_outlineButton,.pando_textButton{background-color:transparent;color:var(--ps-text)}.pando_textButton{text-decoration:underline}.pando_actionButton:hover:not(:disabled){background-color:var(--ps-action-background-hover)}.pando_defaultButton:hover:not(:disabled){background-color:var(--ps-background-hover)}.pando_dangerButton:hover:not(:disabled){background-color:var(--ps-danger-background-hover)}.pando_textButton:hover:not(:disabled){background-color:transparent;color:var(--ps-action-navigation-hover);scale:1.1;text-decoration:none}.pando_actionButton:active:not(:disabled){background-color:var(--ps-action-background-active)}:is(.pando_defaultButton,.pando_outlineButton):active:not(:disabled){background-color:var(--ps-background-active)}.pando_dangerButton:active:not(:disabled){background-color:var(--ps-danger-background-active)}.pando_textButton:active:not(:disabled){background-color:transparent;color:var(--ps-action-navigation-visited)}');var d="pando-btn";function l(n){var t=(0,i.g)(n),o=(0,i.a)(t),r=o.sentimentClass,l=o.sizeClass,u=o.usageClass;return(0,e._)({disabled:t.disabled},a.c.apply(void 0,[d,u,r,l].concat((0,e.e)(t.classNames))))}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"l";return(0,r.c)({ariaHidden:!0,size:(0,i.b)(n)})}},93998:function(n,t,o){function e(n){return"pando_".concat(n,"Button")}function a(n){return"m"===n?"s":"m"}function r(n){var t,o,e,a,r;return{classNames:null!==(t=null==n?void 0:n.classNames)&&void 0!==t?t:[],disabled:null!==(o=null==n?void 0:n.disabled)&&void 0!==o&&o,sentiment:null!==(e=null==n?void 0:n.sentiment)&&void 0!==e?e:"action",usage:null!==(a=null==n?void 0:n.usage)&&void 0!==a?a:"filled",size:null!==(r=null==n?void 0:n.size)&&void 0!==r?r:"l"}}function i(n){return{sentimentClass:e(n.sentiment),sizeClass:e(n.size),usageClass:e(n.usage)}}o.d(t,{a:function(){return i},b:function(){return a},g:function(){return r}})},78949:function(n,t,o){o.d(t,{g:function(){return d}});var e=o(68990),a=o(65214),r=o(16325);(0,o(46884).s)(".pando_colFormControl,.pando_rowFormControl{align-items:center;display:flex;gap:1rem;position:relative;width:100%}[disabled].pando_colFormControl,[disabled].pando_rowFormControl{opacity:.5}.pando_colFormControl{align-items:flex-start;flex-direction:column}");var i=["groupType","direction"];function d(n){var t=(0,r.g)(n),o=t.groupType,d=t.direction,l=(0,e.f)(t,i),u=(0,r.a)(d).directionClass,c={role:o};return{control:(0,e._)((0,e._)({},c),{},{disabled:l.disabled},(0,a.c)("pando-form-control",u)),fieldOptions:l}}},16325:function(n,t,o){function e(n){return{directionClass:"pando_".concat(n,"FormControl")}}function a(n){var t,o,e,a,r,i;return{direction:null!==(t=null==n?void 0:n.direction)&&void 0!==t?t:"row",disabled:null!==(o=null==n?void 0:n.disabled)&&void 0!==o&&o,groupType:null!==(e=null==n?void 0:n.groupType)&&void 0!==e?e:"group",invalid:null!==(a=null==n?void 0:n.invalid)&&void 0!==a&&a,readOnly:null!==(r=null==n?void 0:n.readOnly)&&void 0!==r&&r,required:null!==(i=null==n?void 0:n.required)&&void 0!==i&&i}}o.d(t,{a:function(){return e},g:function(){return a}})},24351:function(n,t,o){o.d(t,{a:function(){return l},g:function(){return d}});var e=o(68990),a=o(65214),r=o(66710);(0,o(46884).s)(".pando_gridContainer{display:grid;width:100%}.pando_gridItem{min-width:0}");var i="pando-grid";function d(n){var t=(0,r.g)(n),o=(0,r.c)(t);return(0,e._)((0,e._)({},o),a.c.apply(void 0,[i,"pando_gridContainer"].concat((0,e.e)(t.classNames))))}function l(n){var t=(0,r.a)(n),o=(0,r.b)(t);return(0,e._)((0,e._)({},o),a.c.apply(void 0,["".concat(i,"-item"),"pando_gridItem"].concat((0,e.e)(t.classNames))))}},66710:function(n,t,o){o.d(t,{a:function(){return r},b:function(){return d},c:function(){return i},g:function(){return a}});var e={6:.375,8:.5,12:.75,16:1,32:2};function a(n){var t,o,e,a;return{classNames:null!==(t=null==n?void 0:n.classNames)&&void 0!==t?t:[],cols:null!==(o=null==n?void 0:n.cols)&&void 0!==o?o:12,gap:null!==(e=null==n?void 0:n.gap)&&void 0!==e?e:16,rows:null!==(a=null==n?void 0:n.rows)&&void 0!==a?a:1}}function r(n){var t,o,e;return{classNames:null!==(t=null==n?void 0:n.classNames)&&void 0!==t?t:[],colSpan:null!==(o=null==n?void 0:n.colSpan)&&void 0!==o?o:12,rowSpan:null!==(e=null==n?void 0:n.rowSpan)&&void 0!==e?e:null}}function i(n){return{style:{gridTemplateRows:"repeat(".concat(n.rows,", 1fr)"),gridTemplateColumns:"repeat(".concat(n.cols,", 1fr)"),gap:"".concat(e[n.gap],"rem")}}}function d(n){var t=n.colSpan,o=n.rowSpan;return o?{style:{gridArea:"span ".concat(o," / span ").concat(t," / span ").concat(o," / span ").concat(t)}}:{style:{gridColumn:"span ".concat(t," / span ").concat(t)}}}},54304:function(n,t,o){o.d(t,{g:function(){return d}});var e=o(68990),a=o(65214),r=o(51961);(0,o(46884).s)(".pando_defaultInput:focus,.pando_iconInput:focus{box-shadow:none;outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.pando_defaultInput:focus:not(:focus-visible),.pando_iconInput:focus:not(:focus-visible){box-shadow:none;outline:none}.pando_defaultInput:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]),.pando_iconInput:is([aria-disabled=true],:disabled,[disabled],[data-readonly=true]){cursor:not-allowed}.pando_defaultInput:is([aria-disabled=true],:disabled),.pando_iconInput:is([aria-disabled=true],:disabled){opacity:.5}.pando_inputWrapper{margin-top:8px;position:relative;width:100%}.pando_defaultInput,.pando_iconInput{-webkit-padding-end:2.75rem;-webkit-appearance:none;appearance:none;background:inherit;-o-border-image:initial;border-image:initial;border-radius:6px;border-style:solid;border-width:1px;color:var(--ps-text-strong);font-family:inherit;min-width:0;outline:2px solid transparent;outline-offset:2px;padding-inline-end:2.75rem;position:relative;transition-duration:.15s;transition-property:box-shadow,opacity,-webkit-transform;transition-property:box-shadow,opacity,transform;transition-property:box-shadow,opacity,transform,-webkit-transform;width:100%}.pando_defaultInput::-webkit-input-placeholder,.pando_iconInput::-webkit-input-placeholder{color:var(--ps-text-weak);opacity:1}.pando_defaultInput::placeholder,.pando_iconInput::placeholder{color:var(--ps-text-weak);opacity:1}.pando_defaultInput:disabled,.pando_iconInput:disabled{background:var(--ps-background);border-color:var(--ps-background)}.pando_defaultInput:not(:disabled,[data-readonly=true]):hover,.pando_iconInput:not(:disabled,[data-readonly=true]):hover{box-shadow:var(--ps-border-strong) 0 0 0 1px}[data-invalid=true].pando_defaultInput,[data-invalid=true].pando_iconInput{border-color:var(--ps-danger-border);box-shadow:var(--ps-danger-border) 0 0 0 1px}.pando_defaultInput,.pando_iconInput{border-color:var(--ps-action-border)}.pando_defaultInput{-webkit-padding-start:1rem;padding-inline-start:1rem}.pando_mInputBase{font-size:.875rem;height:2rem}.pando_lInputBase{font-size:1rem;height:3rem}.pando_inputIcon,.pando_inputLeadingIcon{display:inline-block;line-height:0;pointer-events:none;position:absolute;right:.798rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:50}.pando_inputLeadingIcon{left:.798rem;right:auto}.pando_iconInput{-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}.pando_inputIcon[data-invalid=true]{color:var(--ps-danger-text-weak)}");var i="pando-input";function d(n){var t=(0,r.g)(n),o=(0,r.c)(t),d=o.baseSizeClass,l=o.kindClass,u=(0,r.a)(t),c=(0,r.b)(t,{iconWrapper:(0,e._)({},(0,a.c)("".concat(i,"-leading-icon"),"pando_inputLeadingIcon"))}),p=(0,r.d)(t,{invalidIconWrapper:(0,e._)({},(0,a.c)("".concat(i,"-icon"),"pando_inputIcon"))});return(0,e._)((0,e._)((0,e._)((0,e._)({},u),p),c),{},{input:(0,e._)((0,e._)({},u.input),(0,a.c)(i,l,d)),inputWrapper:(0,e._)((0,e._)({},u.inputWrapper),(0,a.c)("".concat(i,"-wrapper"),"pando_inputWrapper"))})}},51961:function(n,t,o){o.d(t,{a:function(){return s},b:function(){return p},c:function(){return l},d:function(){return c},g:function(){return d}});var e=o(68990),a=o(65214),r=o(39381),i={m:"s",l:"m"};function d(n){var t,o,a;return(0,e._)((0,e._)({},(0,r.d)(n)),{},{kind:null!==(t=null==n?void 0:n.kind)&&void 0!==t?t:"default",size:null!==(o=null==n?void 0:n.size)&&void 0!==o?o:"l",type:null!==(a=null==n?void 0:n.type)&&void 0!==a?a:"text"})}function l(n){var t=n.size;return{kindClass:"pando_".concat(n.kind,"Input"),baseSizeClass:"pando_".concat(t,"InputBase")}}function u(n){return{ariaHidden:!0,size:i[n]}}function c(n,t){var o=n.invalid;return o?{invalidIconOptions:(0,r.c)((0,e._)((0,e._)({},u(n.size)),null==t?void 0:t.invalidIconOptions)),invalidIconWrapper:(0,e._)((0,e.h)({},"data-invalid",o),null==t?void 0:t.invalidIconWrapper)}:{}}function p(n,t){return"icon"===n.kind?{iconOptions:(0,r.c)((0,e._)((0,e._)({},u(n.size)),null==t?void 0:t.iconOptions)),iconWrapper:(0,e._)({},null==t?void 0:t.iconWrapper)}:{}}function s(n){var t=n.describedBy,o=(0,a.d)(n),r=t&&(0,e.h)({},"aria-describedby",t);return{input:(0,e._)((0,e._)({id:n.id,name:n.name,placeholder:n.placeholder,type:n.type,value:n.value},o),r),inputWrapper:{}}}},74138:function(n,t,o){o.d(t,{c:function(){return d},g:function(){return i}});var e=o(68990),a=o(39381);function r(n){return/^https?:\/\//.test(n)}function i(n){var t;return{href:null!==(t=null==n?void 0:n.href)&&void 0!==t?t:""}}function d(n){var t=function(n){return r(n)?{rel:"noopener external",target:"_blank"}:{}}(n);return(0,e._)({link:(0,e._)({href:n},t)},r(n)&&{iconOptions:(0,a.c)({ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"})})}},62806:function(n,t,o){o.d(t,{g:function(){return l}});var e=o(68990),a=o(65214),r=o(74138),i=o(46884);const d="textLinkCSS-module_textLinkBase__P-zdY";function l(n){var t=(0,r.g)(n),o=(0,r.c)(t.href);return(0,e._)((0,e._)({},o),{},{link:(0,e._)((0,e._)({},o.link),(0,a.c)("ps-text-link",d))})}(0,i.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")},84676:function(n,t,o){function e(n){var t,o;return null!=n&&n.headingId?{"aria-labelledby":null!==(o=n.headingId)&&void 0!==o?o:""}:{"aria-label":null!==(t=n.ariaLabel)&&void 0!==t?t:""}}o.d(t,{g:function(){return e}})}}]);