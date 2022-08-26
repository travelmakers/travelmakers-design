(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,b,e){"use strict";e.r(b);var N={};e.r(N),e.d(N,"parameters",function(){return l}),e.d(N,"decorators",function(){return c});var U=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.array.filter.js"),z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),F=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),ee=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),Q=e("./node_modules/core-js/modules/es.object.define-properties.js"),B=e("./node_modules/core-js/modules/es.object.define-property.js"),H=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js");function w(u,v){return s(u)||a(u,v)||O(u,v)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(u,v){if(!!u){if(typeof u=="string")return p(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return p(u,v)}}function p(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,j=new Array(v);k<v;k++)j[k]=u[k];return j}function a(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,E,K;try{for(k=k.call(u);!(g=(E=k.next()).done)&&(j.push(E.value),!(v&&j.length===v));g=!0);}catch(S){C=!0,K=S}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return j}}function s(u){if(Array.isArray(u))return u}var f=Object(R.createContext)(null),m=function(){var v=Object(R.useContext)(f);if(!v)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return v},o=function(v){var k=v.colorScheme,j=v.toggleColorScheme,g=v.children,C=Object(R.useState)("init"),E=w(C,2),K=E[0],S=E[1];return Object(R.useEffect)(function(){S("update")},[]),Object(A.jsx)(f.Provider,{value:{colorScheme:k,toggleColorScheme:j},children:g},K)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),n=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),l={layout:"fullscreen",docs:{theme:n.themes.light},darkMode:{current:"light"}};function y(u){var v=Object(r.useDarkMode)()?"dark":"light";return Object(A.jsx)(o,{colorScheme:v,toggleColorScheme:function(){},children:Object(A.jsx)(t.a,{theme:{colorScheme:v},withGlobalStyles:!0,withNormalizeCSS:!0,children:u.children})})}y.displayName="ThemeWrapper";var c=[function(u){return Object(A.jsx)(y,{children:u()})}];function i(u,v){var k=Object.keys(u);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(u);v&&(j=j.filter(function(g){return Object.getOwnPropertyDescriptor(u,g).enumerable})),k.push.apply(k,j)}return k}function d(u){for(var v=1;v<arguments.length;v++){var k=arguments[v]!=null?arguments[v]:{};v%2?i(Object(k),!0).forEach(function(j){_(u,j,k[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(k)):i(Object(k)).forEach(function(j){Object.defineProperty(u,j,Object.getOwnPropertyDescriptor(k,j))})}return u}function _(u,v,k){return v in u?Object.defineProperty(u,v,{value:k,enumerable:!0,configurable:!0,writable:!0}):u[v]=k,u}Object.keys(N).forEach(function(u){var v=N[u];switch(u){case"args":return Object(H.d)(v);case"argTypes":return Object(H.b)(v);case"decorators":return v.forEach(function(j){return Object(H.f)(j,!1)});case"loaders":return v.forEach(function(j){return Object(H.g)(j,!1)});case"parameters":return Object(H.h)(d({},v),!1);case"argTypesEnhancers":return v.forEach(function(j){return Object(H.c)(j)});case"argsEnhancers":return v.forEach(function(j){return Object(H.e)(j)});case"render":return Object(H.i)(v);case"globals":case"globalTypes":{var k={};return k[u]=v,Object(H.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(u+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,b,e){"use strict";(function(N){var U=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,U.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],N,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,b,e){var N={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function U(te){var z=V(te);return e(z)}function V(te){if(!e.o(N,te)){var z=new Error("Cannot find module '"+te+"'");throw z.code="MODULE_NOT_FOUND",z}return N[te]}U.keys=function(){return Object.keys(N)},U.resolve=V,re.exports=U,U.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return a});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./node_modules/react/index.js"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./node_modules/core-js/modules/es.array.reduce.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/constants/index.ts"),G=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),L={xsmall:{height:M.a.xsmall,padding:"0 24px"},small:{height:M.a.small,padding:"0 24px"},medium:{height:M.a.medium,padding:"0 24px"},large:{height:M.a.large,padding:"0 24px"}},X=function(f){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.caption,fontSize:f.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b3,fontSize:f.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b2,fontSize:f.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5}}},P=Object.keys(L).reduce(function(s,f){return s[f]=L[f].height,s},{}),I=function(f){return{display:f?"block":"inline-block",width:f?"100%":"auto"}},T=Object(H.a)(function(s,f,m){var o,t,n,r=f.variant,l=f.size,y=f.fullWidth,c=f.roundness,i=f.line,d=m("loading"),_=m("inner"),u=m("spinner"),v=r||s.colors.navy1;return{loading:(o={ref:d,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+_]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[v][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[v][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},t["&:disabled:not(."+d+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.white:s.palettes[v][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},n["&:disabled:not(."+d+")"]={color:Object(G.a)(s.palettes[v][1],s.opacity.opacity3),border:"1px solid "+Object(G.a)(s.palettes[v][1],s.opacity.opacity3)},n),root:Object.assign({},L[l],I(y),Object(W.b)(s),X(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),x=e("./node_modules/react/jsx-runtime.js"),h=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function R(s,f){if(s==null)return{};var m=A(s,f),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(f.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(m[o]=s[o]))}return m}function A(s,f){if(s==null)return{};var m={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(f.indexOf(t)>=0)&&(m[t]=s[t]);return m}var w=Object(F.forwardRef)(function(s,f){var m=s.children,o=s.component,t=s.size,n=t===void 0?"medium":t,r=s.variant,l=s.line,y=s.roundness,c=y===void 0?!1:y,i=s.fullWidth,d=i===void 0?!1:i,_=s.type,u=_===void 0?"button":_,v=s.disabled,k=v===void 0?!1:v,j=s.leftIcon,g=s.rightIcon,C=s.className,E=s.co,K=s.overrideStyles,S=R(s,h),J=Object(Z.c)(),$=T({variant:r,size:n,fullWidth:d,roundness:c,line:l},{overrideStyles:K,name:"Button"}),q=$.classes,ae=$.cx;return Object(x.jsx)(ee.a,Object.assign({component:o||"button",ref:f,type:u,disabled:k,className:ae(q.root,q[l?"ghost":"solid"],C),co:E,onTouchStart:function(){}},S,{children:Object(x.jsxs)("div",{className:q.inner,children:[j&&Object(x.jsx)("span",{className:ae(q.icon,q.leftIcon),children:j}),Object(x.jsx)("span",{className:q.label,children:m}),g&&Object(x.jsx)("span",{className:ae(q.icon,q.rightIcon),children:g})]})}))});w.displayName="@travelmakers-design/core/Button";var D=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":132},"endLoc":{"col":1,"line":138},"startBody":{"col":23,"line":132},"endBody":{"col":1,"line":138}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../Button";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}},D=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../Button";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};
`,O={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},p=b.default={title:"@travelmakers-design/core/Button",component:w,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"button",description:"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["submit","button","reset"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":132},"endLoc":{"col":1,"line":138},"startBody":{"col":23,"line":132},"endBody":{"col":1,"line":138}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../Button";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}}},docs:{page:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U.g,{}),Object(x.jsx)(U.f,{}),Object(x.jsx)(U.b,{}),Object(x.jsx)(U.d,{}),Object(x.jsx)(U.a,{story:U.c}),Object(x.jsx)(U.e,{})]})}},actions:{handles:["click button"]}}},a=function(f){return Object(x.jsx)("div",{style:{margin:"0 auto"},children:Object(x.jsx)(w,Object.assign({},f,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return x});var N=e("./node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),F=e("./packages/travelmakers-design-core/src/constants/index.ts"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),M={xsmall:{width:F.a.xsmall,height:F.a.xsmall},small:{width:F.a.small,height:F.a.small},medium:{width:F.a.medium,height:F.a.medium},large:{width:F.a.large,height:F.a.large},xlarge:{width:F.a.xlarge,height:F.a.xlarge}},G={xsmall:8,small:8,medium:16,large:16,xlarge:24},L=Object(B.a)(function(h,R,A){var w,D,O,p,a,s=R.color,f=R.size,m=A("loading"),o=A("inner"),t=A("spinner"),n=s||h.colors.navy1;return{loading:(w={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},w["."+o]={opacity:0},w["."+t]={display:"flex"},w),solid:(D={backgroundColor:h.palettes[n][h.colorScheme==="light"?5:3],color:h.colorScheme==="light"?h.colors.white:h.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:h.palettes[n][h.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:h.palettes[n][h.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3]}}},D["&:disabled:not(."+m+")"]={backgroundColor:h.palettes.gray[2],color:Object(W.a)(h.colors.black,h.opacity.opacity3)},D),ghost:(O={backgroundColor:h.colors.transparent,border:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3],color:h.palettes[n][h.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(h.palettes[n][h.colorScheme==="light"?0:8],h.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(h.palettes[n][h.colorScheme==="light"?1:7],h.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3]}}},O["&:disabled:not(."+m+")"]={color:Object(W.a)(h.palettes[n][1],h.opacity.opacity3),border:"1px solid "+Object(W.a)(h.palettes[n][1],h.opacity.opacity3)},O),"light-solid":(p={backgroundColor:Object(W.a)(h.colorScheme==="light"?h.colors.black:h.colors.white,h.opacity.opacity1),color:h.palettes[n][h.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(h.palettes.dark[h.colorScheme==="light"?8:1],h.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(h.palettes.dark[h.colorScheme==="light"?7:2],h.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3]}}},p["&:disabled:not(."+m+")"]={backgroundColor:Object(W.a)(h.palettes.dark[h.colorScheme==="light"?4:1],h.opacity.opacity1),color:Object(W.a)(h.palettes[n][h.colorScheme==="light"?7:3],h.opacity.opacity3)},p),text:(a={backgroundColor:"transparent",color:h.palettes[n][h.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(h.palettes[n][h.colorScheme==="light"?8:1],h.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(h.palettes[n][h.colorScheme==="light"?7:2],h.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+h.palettes[n][h.colorScheme==="light"?5:3]}}},a["&:disabled:not(."+m+")"]={color:Object(W.a)(h.palettes[n][h.colorScheme==="light"?7:3],h.opacity.opacity3)},a),root:Object.assign({},M[f],Object(H.b)(h),{borderRadius:h.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:o,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:M[f].width-G[f],height:M[f].height-G[f]}},spinnerWrapper:{ref:t,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),X=e("./node_modules/react/jsx-runtime.js"),P=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function I(h,R){if(h==null)return{};var A=T(h,R),w,D;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(h);for(D=0;D<O.length;D++)w=O[D],!(R.indexOf(w)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,w)||(A[w]=h[w]))}return A}function T(h,R){if(h==null)return{};var A={},w=Object.keys(h),D,O;for(O=0;O<w.length;O++)D=w[O],!(R.indexOf(D)>=0)&&(A[D]=h[D]);return A}var x=Object(z.forwardRef)(function(h,R){var A,w=h.children,D=h.component,O=h.size,p=O===void 0?"medium":O,a=h.color,s=h.variant,f=s===void 0?"solid":s,m=h.type,o=m===void 0?"button":m,t=h.disabled,n=t===void 0?!1:t,r=h.loading,l=r===void 0?!1:r,y=h.spinnerProps,c=h.className,i=h.co,d=h.overrideStyles,_=I(h,P),u=L({color:a,size:p},{overrideStyles:d,name:"Button"}),v=u.theme,k=u.classes,j=u.cx,g=a||v.colors.navy1,C=Object(X.jsx)(Z.a,Object.assign({color:f==="solid"?v.colors.white:v.palettes[g][6],size:F.a[p]/2},y));return Object(X.jsxs)(ee.a,Object.assign({component:D||"button",className:j((A={},A[k.loading]=l,A),k.root,k[f],c),type:o,disabled:n||l,ref:R,onTouchStart:function(){},co:i},_,{children:[Object(X.jsx)("div",{className:k.inner,children:w}),Object(X.jsx)("div",{className:k.spinnerWrapper,children:C})]}))});x.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return X});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Z=e("./node_modules/react/index.js"),F=e("./node_modules/react/jsx-runtime.js"),ee=function(I){return Object(F.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(F.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};ee.displayName="CloseIcon",ee.displayName="@travelmakers-design/core/CloseIcon";var Q=["size","color"];function B(P,I){if(P==null)return{};var T=H(P,I),x,h;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(P);for(h=0;h<R.length;h++)x=R[h],!(I.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,x)||(T[x]=P[x]))}return T}function H(P,I){if(P==null)return{};var T={},x=Object.keys(P),h,R;for(R=0;R<x.length;R++)h=x[R],!(I.indexOf(h)>=0)&&(T[h]=P[h]);return T}var W=Object(Z.forwardRef)(function(P,I){var T=P.size,x=T===void 0?"medium":T,h=P.color,R=h===void 0?"gray":h,A=B(P,Q);return Object(F.jsx)(z.a,Object.assign({size:x,color:R,ref:I},A,{children:Object(F.jsx)(ee,{})}))});W.displayName="@travelmakers-design/core/CloseButton";var M=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { CloseButton } from \\"../CloseButton\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      options: [\\"solid\\", \\"ghost\\", \\"light-solid\\", \\"text\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"purple\\",\\n      options: [\\"purple\\", \\"gray\\", \\"red\\", \\"blue\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":36},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":36}}};
    
import { CloseButton } from "../CloseButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,G={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}},M=`import { CloseButton } from "../CloseButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};
`,G={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},L=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { CloseButton } from \\"../CloseButton\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      options: [\\"solid\\", \\"ghost\\", \\"light-solid\\", \\"text\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"purple\\",\\n      options: [\\"purple\\", \\"gray\\", \\"red\\", \\"blue\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":36},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":36}}};
    
import { CloseButton } from "../CloseButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}}},title:"@travelmakers-design/core/CloseButton",component:W,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},X=function(I){return Object(F.jsx)(W,Object.assign({},I))};X.displayName="Default",X.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},X.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),te=e("./node_modules/react/index.js"),z=e.n(te),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { IconButton } from \\"../IconButton\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      options: [\\"solid\\", \\"ghost\\", \\"light-solid\\", \\"text\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"purple\\",\\n      options: [\\"purple\\", \\"gray\\", \\"red\\", \\"blue\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":45},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":45}}};
    
import { IconButton } from "../IconButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:53},startBody:{col:23,line:42},endBody:{col:1,line:53}}},ee=`import { IconButton } from "../IconButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
};
`,Q={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { IconButton } from \\"../IconButton\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      options: [\\"solid\\", \\"ghost\\", \\"light-solid\\", \\"text\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"purple\\",\\n      options: [\\"purple\\", \\"gray\\", \\"red\\", \\"blue\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":45},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":45}}};
    
import { IconButton } from "../IconButton";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue"],
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:53},startBody:{col:23,line:42},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/core/IconButton",component:V.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var B=function(W){var M=Object(Z.jsx)("svg",{viewBox:"0 0 24 24",children:Object(Z.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(Z.jsx)(V.a,Object.assign({},W,{children:M}))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var N=e("./node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.object.keys.js"),L=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),P=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/react/index.js"),T=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),x=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),h=Object(x.a)(function(g,C){var E=C.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:E?E in g.radius?g.radius[E]:E:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:g.colorScheme==="dark"?g.palettes.gray[2]:g.palettes.gray[8],backgroundColor:g.colorScheme==="dark"?g.palettes.gray[8]:g.palettes.gray[2],borderRadius:E?E in g.radius?g.radius[E]:E:0}}}),R=e("./node_modules/react/jsx-runtime.js"),A=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function w(g,C){return s(g)||a(g,C)||O(g,C)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(g,C){if(!!g){if(typeof g=="string")return p(g,C);var E=Object.prototype.toString.call(g).slice(8,-1);if(E==="Object"&&g.constructor&&(E=g.constructor.name),E==="Map"||E==="Set")return Array.from(g);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return p(g,C)}}function p(g,C){(C==null||C>g.length)&&(C=g.length);for(var E=0,K=new Array(C);E<C;E++)K[E]=g[E];return K}function a(g,C){var E=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(E!=null){var K=[],S=!0,J=!1,$,q;try{for(E=E.call(g);!(S=($=E.next()).done)&&(K.push($.value),!(C&&K.length===C));S=!0);}catch(ae){J=!0,q=ae}finally{try{!S&&E.return!=null&&E.return()}finally{if(J)throw q}}return K}}function s(g){if(Array.isArray(g))return g}function f(g,C){if(g==null)return{};var E=m(g,C),K,S;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(g);for(S=0;S<J.length;S++)K=J[S],!(C.indexOf(K)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,K)||(E[K]=g[K]))}return E}function m(g,C){if(g==null)return{};var E={},K=Object.keys(g),S,J;for(J=0;J<K.length;J++)S=K[J],!(C.indexOf(S)>=0)&&(E[S]=g[S]);return E}var o=null,t="loadImage",n=function(C,E){C.forEach(function(K){K.isIntersecting&&(E.unobserve(K.target),K.target.dispatchEvent(new CustomEvent(t)))})},r=Object(I.forwardRef)(function(g,C){var E=g.lazy,K=g.threshold,S=K===void 0?.5:K,J=g.placeholder,$=g.src,q=g.radius,ae=g.width,ye=ae===void 0?"100%":ae,de=g.height,le=de===void 0?"auto":de,_e=g.alt,pe=g.fit,ge=g.style,ue=g.className,ne=g.co,se=g.overrideStyles,me=f(g,A),je=h({radius:q},{overrideStyles:se,name:"Image"}),be=je.classes,Oe=je.cx,De=Object(I.useState)(!1),Se=w(De,2),Te=Se[0],Ae=Se[1],Le=Object(I.useState)(!1),Me=w(Le,2),Re=Me[0],Pe=Me[1],oe=Object(I.useRef)(null),Y={width:ye,height:le,objectFit:pe};return Object(I.useImperativeHandle)(C,function(){return oe.current}),Object(I.useEffect)(function(){if(!E){Pe(!0);return}var ie=function(){return Pe(!0)},ce=oe.current;return ce&&ce.addEventListener(t,ie),function(){ce&&ce.removeEventListener(t,ie)}},[E]),Object(I.useEffect)(function(){!E||(o=new IntersectionObserver(n,{threshold:S}),oe.current&&o.observe(oe.current))},[E,S]),Object(R.jsxs)(T.a,Object.assign({className:Oe(be.root,ue),co:ne},me,{children:[Object(R.jsx)("img",{ref:oe,src:$,alt:_e,className:be.image,style:Y,onLoad:function(){return Ae(!0)}}),(!Te||E&&!Re)&&J&&Object(R.jsx)("div",{className:be.placeholder,title:_e,children:J})]}))});r.displayName="@travelmakers-design/core/Image";function l(g){return d(g)||i(g)||c(g)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(g,C){if(!!g){if(typeof g=="string")return _(g,C);var E=Object.prototype.toString.call(g).slice(8,-1);if(E==="Object"&&g.constructor&&(E=g.constructor.name),E==="Map"||E==="Set")return Array.from(g);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return _(g,C)}}function i(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function d(g){if(Array.isArray(g))return _(g)}function _(g,C){(C==null||C>g.length)&&(C=g.length);for(var E=0,K=new Array(C);E<C;E++)K[E]=g[E];return K}var u=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Image } from \\"../Image\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":55},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":55}}};
    
import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}},u=`import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
`,v={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},k=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Image } from \\"../Image\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":55},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":55}}};
    
import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}}}},title:"@travelmakers-design/core/Image",component:r,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},j=function(C){return Object(R.jsx)(R.Fragment,{children:l(new Array(10)).map(function(E,K){return Object(R.jsx)("div",{children:Object(R.jsx)(r,Object.assign({placeholder:Object(R.jsx)("div",{children:"Placeholder"})},C))},K)})})};j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return w}),e.d(b,"WithIcon",function(){return D}),e.d(b,"WithRightSection",function(){return O}),e.d(b,"Textarea",function(){return p});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.string.small.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./node_modules/react/index.js"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),B=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),H=e("./packages/travelmakers-design-core/src/constants/index.ts"),W=function(s,f){return s in f?f[s]:s},M={xsmall:12,small:14,medium:14,large:14,xlarge:16},G=Object(Q.a)(function(a,s){var f=s.size,m=s.multiline,o=s.radius,t=s.invalid,n=a.palettes.red[a.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(B.b)(a),{height:m?"auto":W(f,H.a),WebkitTapHighlightColor:"transparent",lineHeight:m?a.lineHeight:W(f,H.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:W(f,M),width:"100%",color:a.colorScheme==="dark"?a.palettes.gray[0]:a.palettes.gray[9],display:"block",textAlign:"left",minHeight:W(f,H.a),paddingLeft:W(f,H.a)/3,paddingRight:W(f,H.a)/3,borderRadius:W(o,a.radius),border:"1px solid "+(a.colorScheme==="dark"?a.palettes.gray[6]:a.palettes.gray[2]),backgroundColor:a.colorScheme==="dark"?a.palettes.gray[8]:a.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5],borderColor:a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(a.colorScheme==="dark",a.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:W(f,H.a)+"px !important"},invalid:{color:n+" !important",borderColor:n+" !important","&::placeholder":{opacity:1,color:n+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:W(f,H.a),color:t?a.palettes.red[a.colorScheme==="dark"?5:6]:a.colorScheme==="dark"?a.palettes.gray[1]:a.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),L=e("./node_modules/react/jsx-runtime.js"),X=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function P(a,s){if(a==null)return{};var f=I(a,s),m,o;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(o=0;o<t.length;o++)m=t[o],!(s.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,m)||(f[m]=a[m]))}return f}function I(a,s){if(a==null)return{};var f={},m=Object.keys(a),o,t;for(t=0;t<m.length;t++)o=m[t],!(s.indexOf(o)>=0)&&(f[o]=a[o]);return f}var T=Object(F.forwardRef)(function(a,s){var f,m=a.component,o=a.size,t=o===void 0?"medium":o,n=a.radius,r=n===void 0?"medium":n,l=a.icon,y=a.rightSectionWidth,c=y===void 0?36:y,i=a.rightSection,d=a.rightSectionProps,_=d===void 0?{}:d,u=a.wrapperProps,v=a.invalid,k=v===void 0?!1:v,j=a.required,g=j===void 0?!1:j,C=a.disabled,E=C===void 0?!1:C,K=a.multiline,S=K===void 0?!1:K,J=a.className,$=a.style,q=a.co,ae=a.overrideStyles,ye=a.__staticSelector,de=ye===void 0?"Input":ye,le=P(a,X),_e=Object(Z.c)(),pe=G({radius:r,size:t,multiline:S,invalid:k},{overrideStyles:ae,name:de}),ge=pe.classes,ue=pe.cx,ne=m||"input";return Object(L.jsxs)(ee.a,Object.assign({className:ue(ge.wrapper,J),co:q,style:$},u,{children:[l&&Object(L.jsx)("div",{className:ge.icon,children:l}),Object(L.jsx)(ne,Object.assign({},le,{ref:s,className:ue(ge.input,(f={},f[ge.withIcon]=l,f[ge.invalid]=k,f[ge.disabled]=E,f)),required:g,disabled:E,style:{paddingRight:i?c:_e.spacing.small}})),i&&Object(L.jsx)("div",Object.assign({},_,{style:Object.assign({},_.style,{width:c}),className:ue(ge.rightSection,_.className),children:i}))]}))});T.displayName="@travelmakers-design/core/Input";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Input\\",\\n  component: Input,\\n  argTypes: {\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      control: { type: \\"text\\" },\\n    },\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}},"WithIcon":{"startLoc":{"col":24,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":24,"line":51},"endBody":{"col":1,"line":57}},"WithRightSection":{"startLoc":{"col":32,"line":59},"endLoc":{"col":1,"line":76},"startBody":{"col":32,"line":59},"endBody":{"col":1,"line":76}},"Textarea":{"startLoc":{"col":24,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":24,"line":78},"endBody":{"col":1,"line":84}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Input",
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: "Placeholder",
      control: { type: "text" },
    },
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    radius: {
      defaultValue: "medium",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    invalid: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};;

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};;

export const WithRightSection = (props) => {
  // const withTooltip = (
  //   <Tooltip label="Tutorial" placement="bottom">
  //     Info
  //   </Tooltip>
  // );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input
        icon={<Icon />}
        // rightSection={withTooltip}
        rightSectionWidth={50}
        {...props}
      />
    </div>
  );
};;

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,h={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},WithIcon:{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},WithRightSection:{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},Textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}},x=`import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Input",
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: "Placeholder",
      control: { type: "text" },
    },
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    radius: {
      defaultValue: "medium",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    invalid: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};

export const WithRightSection = (props) => {
  // const withTooltip = (
  //   <Tooltip label="Tutorial" placement="bottom">
  //     Info
  //   </Tooltip>
  // );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input
        icon={<Icon />}
        // rightSection={withTooltip}
        rightSectionWidth={50}
        {...props}
      />
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
`,h={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},R=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Input\\",\\n  component: Input,\\n  argTypes: {\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      control: { type: \\"text\\" },\\n    },\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}},"WithIcon":{"startLoc":{"col":24,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":24,"line":51},"endBody":{"col":1,"line":57}},"WithRightSection":{"startLoc":{"col":32,"line":59},"endLoc":{"col":1,"line":76},"startBody":{"col":32,"line":59},"endBody":{"col":1,"line":76}},"Textarea":{"startLoc":{"col":24,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":24,"line":78},"endBody":{"col":1,"line":84}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Input",
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: "Placeholder",
      control: { type: "text" },
    },
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    radius: {
      defaultValue: "medium",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    invalid: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};;

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};;

export const WithRightSection = (props) => {
  // const withTooltip = (
  //   <Tooltip label="Tutorial" placement="bottom">
  //     Info
  //   </Tooltip>
  // );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input
        icon={<Icon />}
        // rightSection={withTooltip}
        rightSectionWidth={50}
        {...props}
      />
    </div>
  );
};;

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},"with-icon":{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},"with-right-section":{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}}}},title:"@travelmakers-design/core/Input",component:T,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},A=function(){return Object(L.jsx)("svg",{viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};A.displayName="Icon";var w=function(s){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({},s))})};w.displayName="Default";var D=function(s){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({icon:Object(L.jsx)(A,{})},s))})};D.displayName="WithIcon";var O=function(s){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({icon:Object(L.jsx)(A,{}),rightSectionWidth:50},s))})};O.displayName="WithRightSection";var p=function(s){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({component:"textarea",multiline:!0},s))})};p.displayName="Textarea",w.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},w.parameters),D.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},D.parameters),O.parameters=Object.assign({storySource:{source:`(props) => {
  // const withTooltip = (
  //   <Tooltip label="Tutorial" placement="bottom">
  //     Info
  //   </Tooltip>
  // );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input
        icon={<Icon />}
        // rightSection={withTooltip}
        rightSectionWidth={50}
        {...props}
      />
    </div>
  );
}`}},O.parameters),p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return G});var N=e("./node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),ee=e("./packages/travelmakers-design-core/src/constants/index.ts"),Q=Object(F.a)(function(L,X){var P=X.size,I=X.color,T=I===void 0?L.colorScheme==="light"?L.colors.black:L.colors.white:I in L.palettes?(L.colorScheme==="light",L.palettes[I][0]):I in L.colors?L.colors[I]:I;return{root:{position:"relative",display:"inline-block",width:P in ee.a?ee.a[P]:P,height:P in ee.a?ee.a[P]:P,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:T},circle:{fill:T}}}}),B=e("./node_modules/react/jsx-runtime.js"),H=["size","color","className","co","overrideStyles"];function W(L,X){if(L==null)return{};var P=M(L,X),I,T;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(L);for(T=0;T<x.length;T++)I=x[T],!(X.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,I)||(P[I]=L[I]))}return P}function M(L,X){if(L==null)return{};var P={},I=Object.keys(L),T,x;for(x=0;x<I.length;x++)T=I[x],!(X.indexOf(T)>=0)&&(P[T]=L[T]);return P}var G=Object(z.forwardRef)(function(L,X){var P=L.size,I=P===void 0?"medium":P,T=L.color,x=L.className,h=L.co,R=L.overrideStyles,A=W(L,H),w=Q({size:I,color:T},{overrideStyles:R,name:"Spinner"}),D=w.classes,O=w.cx,p=Object(B.jsx)("i",{className:D.inner,children:Object(B.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(B.jsxs)("g",{transform:"translate(1 1)",children:[Object(B.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(B.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(B.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(B.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(B.jsx)(Z.a,Object.assign({ref:X,className:O(D.root,x),co:h},A,{children:p}))});G.displayName="@travelmakers-design/core/Spinner"},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":19},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":19},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},ee=`import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
`,Q={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":19},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":19},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/core/Spinner",component:z.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var B=function(W){return Object(Z.jsx)(z.a,Object.assign({},W))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return a});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./node_modules/react/index.js"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./node_modules/core-js/modules/es.array.reduce.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/constants/index.ts"),G=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),L={xsmall:{height:M.a.xsmall,padding:"0 24px"},small:{height:M.a.small,padding:"0 24px"},medium:{height:M.a.medium,padding:"0 24px"},large:{height:M.a.large,padding:"0 24px"}},X=function(f){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.caption,fontSize:f.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b3,fontSize:f.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b2,fontSize:f.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5}}},P=Object.keys(L).reduce(function(s,f){return s[f]=L[f].height,s},{}),I=function(f){return{display:f?"block":"inline-block",width:f?"100%":"auto"}},T=Object(H.a)(function(s,f,m){var o,t,n,r=f.variant,l=f.size,y=f.fullWidth,c=f.roundness,i=f.line,d=m("loading"),_=m("inner"),u=m("spinner"),v=r||s.colors.navy1;return{loading:(o={ref:d,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+_]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[v][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[v][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},t["&:disabled:not(."+d+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.white:s.palettes[v][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},n["&:disabled:not(."+d+")"]={color:Object(G.a)(s.palettes[v][1],s.opacity.opacity3),border:"1px solid "+Object(G.a)(s.palettes[v][1],s.opacity.opacity3)},n),root:Object.assign({},L[l],I(y),Object(W.b)(s),X(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),x=e("./node_modules/react/jsx-runtime.js"),h=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function R(s,f){if(s==null)return{};var m=A(s,f),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(f.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(m[o]=s[o]))}return m}function A(s,f){if(s==null)return{};var m={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(f.indexOf(t)>=0)&&(m[t]=s[t]);return m}var w=Object(F.forwardRef)(function(s,f){var m=s.children,o=s.component,t=s.size,n=t===void 0?"medium":t,r=s.variant,l=s.line,y=s.roundness,c=y===void 0?!1:y,i=s.fullWidth,d=i===void 0?!1:i,_=s.type,u=_===void 0?"button":_,v=s.disabled,k=v===void 0?!1:v,j=s.leftIcon,g=s.rightIcon,C=s.className,E=s.co,K=s.overrideStyles,S=R(s,h),J=Object(Z.c)(),$=T({variant:r,size:n,fullWidth:d,roundness:c,line:l},{overrideStyles:K,name:"Button"}),q=$.classes,ae=$.cx;return Object(x.jsx)(ee.a,Object.assign({component:o||"button",ref:f,type:u,disabled:k,className:ae(q.root,q[l?"ghost":"solid"],C),co:E,onTouchStart:function(){}},S,{children:Object(x.jsxs)("div",{className:q.inner,children:[j&&Object(x.jsx)("span",{className:ae(q.icon,q.leftIcon),children:j}),Object(x.jsx)("span",{className:q.label,children:m}),g&&Object(x.jsx)("span",{className:ae(q.icon,q.rightIcon),children:g})]})}))});w.displayName="@travelmakers-design/core/TextButton";var D=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../TextButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/TextButton\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":132},"endLoc":{"col":1,"line":138},"startBody":{"col":23,"line":132},"endBody":{"col":1,"line":138}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../TextButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/TextButton",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}},D=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../TextButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/TextButton",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};
`,O={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},p=b.default={title:"@travelmakers-design/core/TextButton",component:w,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"button",description:"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["submit","button","reset"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../TextButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/TextButton\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":132},"endLoc":{"col":1,"line":138},"startBody":{"col":23,"line":132},"endBody":{"col":1,"line":138}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../TextButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/TextButton",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    line: {
      defaultValue: false,
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}}},docs:{page:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U.g,{}),Object(x.jsx)(U.f,{}),Object(x.jsx)(U.b,{}),Object(x.jsx)(U.d,{}),Object(x.jsx)(U.a,{story:U.c}),Object(x.jsx)(U.e,{})]})}},actions:{handles:["click button"]}}},a=function(f){return Object(x.jsx)("div",{style:{margin:"0 auto"},children:Object(x.jsx)(w,Object.assign({},f,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return w});var N=e("./node_modules/core-js/modules/es.object.keys.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.array.map.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.object.assign.js"),W=e.n(H),M=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),L=e("./node_modules/react/index.js"),X=e.n(L),P=e("./node_modules/react/jsx-runtime.js"),I=e.n(P),T=["component","className","style","co"];function x(D,O){if(D==null)return{};var p=h(D,O),a,s;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(D);for(s=0;s<f.length;s++)a=f[s],!(O.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,a)||(p[a]=D[a]))}return p}function h(D,O){if(D==null)return{};var p={},a=Object.keys(D),s,f;for(f=0;f<a.length;f++)s=a[f],!(O.indexOf(s)>=0)&&(p[s]=D[s]);return p}function R(D,O){return typeof D=="function"?D(O):D}function A(D,O){var p=Object(M.a)(),a=p.css,s=p.cx,f=Object(G.c)();return Array.isArray(D)?s(O,D.map(function(m){return a(R(m,f))})):s(O,a(R(D,f)))}var w=Object(L.forwardRef)(function(D,O){var p=D.component,a=D.className,s=D.style,f=D.co,m=x(D,T),o=p||"div";return Object(P.jsx)(o,Object.assign({ref:O,className:A(f,a),style:s},m))});w.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design/core/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},ee=`import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design/core/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};
`,Q={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design/core/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/View",component:z.a};var B=function(){return Object(Z.jsx)(z.a,{co:function(M){return{width:100,height:100,backgroundColor:M.colors.gray3}}})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},B.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return N});var N={xsmall:24,small:28,medium:40,large:48,xlarge:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var N=e("./node_modules/core-js/modules/es.string.replace.js"),U=e("./node_modules/core-js/modules/es.regexp.exec.js"),V=e("./node_modules/core-js/modules/es.number.is-nan.js"),te=e("./node_modules/core-js/modules/es.number.constructor.js"),z=e("./node_modules/core-js/modules/es.parse-int.js"),Z=e("./node_modules/core-js/modules/es.array.map.js"),F=e("./node_modules/core-js/modules/es.string.split.js"),ee=e("./node_modules/core-js/modules/es.string.starts-with.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),W=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e("./node_modules/core-js/modules/es.function.name.js"),T=e("./node_modules/core-js/modules/es.array.from.js");function x(m,o){return D(m)||w(m,o)||R(m,o)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(m,o){if(!!m){if(typeof m=="string")return A(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(m,o)}}function A(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function w(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function D(m){if(Array.isArray(m))return m}function O(m){var o=m.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function p(m){var o=m.replace("#",""),t=parseInt(o,16),n=t>>16&255,r=t>>8&255,l=t&255;return{r:n,g:r,b:l,a:1}}function a(m){var o=m.replace(/[^0-9,.]/g,"").split(",").map(Number),t=x(o,4),n=t[0],r=t[1],l=t[2],y=t[3];return{r:n,g:r,b:l,a:y||1}}function s(m){return O(m)?p(m):m.startsWith("rgb")?a(m):{r:0,g:0,b:0,a:1}}var f=function(o,t){var n=s(o),r=n.r,l=n.g,y=n.b;return"rgba("+r+", "+l+", "+y+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return z});var N=e("./node_modules/core-js/modules/es.array.concat.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=function(F){var ee=Object(V.useRef)(F);return Object(V.useEffect)(function(){ee.current=F},[F]),Object(V.useMemo)(function(){return function(){for(var Q,B=arguments.length,H=new Array(B),W=0;W<B;W++)H[W]=arguments[W];return(Q=ee.current)===null||Q===void 0?void 0:Q.call.apply(Q,[ee].concat(H))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useClickAway } from \\"../useClickAway\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useClickAway\\",\\n};\\n\\nexport const Default = () => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useClickAway } from "../useClickAway";

export default {
  title: "@travelmakers-design/hooks/useClickAway",
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},ee=`import React from "react";
import { useClickAway } from "../useClickAway";

export default {
  title: "@travelmakers-design/hooks/useClickAway",
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
    </div>
  );
};
`,Q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useClickAway } from \\"../useClickAway\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useClickAway\\",\\n};\\n\\nexport const Default = () => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useClickAway } from "../useClickAway";

export default {
  title: "@travelmakers-design/hooks/useClickAway",
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var B=function(){var W=Object(z.a)(function(){alert("Click away from red box!")});return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{ref:W,style:{width:100,height:100,backgroundColor:"red"}})})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var N=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.function.name.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.array.from.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.is-array.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A),D=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function O(m,o){var t=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!t){if(Array.isArray(m)||(t=p(m))||o&&m&&typeof m.length=="number"){t&&(m=t);var n=0,r=function(){};return{s:r,n:function(){return n>=m.length?{done:!0}:{done:!1,value:m[n++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,y=!1,c;return{s:function(){t=t.call(m)},n:function(){var d=t.next();return l=d.done,d},e:function(d){y=!0,c=d},f:function(){try{!l&&t.return!=null&&t.return()}finally{if(y)throw c}}}}function p(m,o){if(!!m){if(typeof m=="string")return a(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(m,o)}}function a(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}var s=["mousedown","touchstart"],f=function(o){var t=Object(A.useRef)(),n=Object(D.a)(o);return Object(A.useEffect)(function(){var r=function(d){var _=t.current;_&&!_.contains(d.target)&&n(d)},l=O(s),y;try{for(l.s();!(y=l.n()).done;){var c=y.value;document.addEventListener(c,r)}}catch(i){l.e(i)}finally{l.f()}return function(){var i=O(s),d;try{for(i.s();!(d=i.n()).done;){var _=d.value;document.removeEventListener(_,r)}}catch(u){i.e(u)}finally{i.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/web.timers.js");function L(t,n){return x(t)||T(t,n)||P(t,n)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(t,n){if(!!t){if(typeof t=="string")return I(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,n)}}function I(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function T(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function x(t){if(Array.isArray(t))return t}var h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.timeout,l=r===void 0?2e3:r,y=Object(M.useState)(null),c=L(y,2),i=c[0],d=c[1],_=Object(M.useState)(!1),u=L(_,2),v=u[0],k=u[1],j=Object(M.useState)(null),g=L(j,2),C=g[0],E=g[1],K=function(q){clearTimeout(C),E(setTimeout(function(){return k(!1)},l)),k(q)},S=function(q){"clipboard"in navigator?navigator.clipboard.writeText(q).then(function(){return K(!0)}).catch(function(ae){return d(ae)}):d(new Error("useClipboard: navigator.clipboard is not supported"))},J=function(){k(!1),d(null),clearTimeout(C)};return{copy:S,reset:J,error:i,copied:v}},R=e("./node_modules/react/jsx-runtime.js");function A(t,n){return a(t)||p(t,n)||D(t,n)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,n){if(!!t){if(typeof t=="string")return O(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,n)}}function O(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function p(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useClipboard } from \\"../useClipboard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useClipboard\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":20},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":20}}};
    
import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},s=`import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},m=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useClipboard } from \\"../useClipboard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useClipboard\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":20},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":20}}};
    
import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},o=function(){var n=Object(M.useState)(""),r=A(n,2),l=r[0],y=r[1],c=h({timeout:3e3}),i=c.copy,d=c.copied;return Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:"text",onChange:function(u){return y(u.target.value)}}),Object(R.jsx)("button",{onClick:function(){return i(l)},children:"copy"}),Object(R.jsx)("span",{children:d&&"Copied!!"})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return Q});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),te=function(){return Object(V.a)("(prefers-color-scheme: dark)")?"dark":"light"},z=e("./node_modules/react/jsx-runtime.js"),Z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useColorScheme } from \\"../useColorScheme\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useColorScheme\\",\\n};\\n\\nexport const Default = () => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useColorScheme } from "../useColorScheme";

export default {
  title: "@travelmakers-design/hooks/useColorScheme",
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Z=`import React from "react";
import { useColorScheme } from "../useColorScheme";

export default {
  title: "@travelmakers-design/hooks/useColorScheme",
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
`,F={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},ee=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useColorScheme } from \\"../useColorScheme\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useColorScheme\\",\\n};\\n\\nexport const Default = () => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useColorScheme } from "../useColorScheme";

export default {
  title: "@travelmakers-design/hooks/useColorScheme",
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},Q=function(){var H=te();return Object(z.jsx)("div",{children:Object(z.jsx)("div",{children:H})})};Q.displayName="Default",Q.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},Q.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),L=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function X(n,r){return h(n)||x(n,r)||I(n,r)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(n,r){if(!!n){if(typeof n=="string")return T(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T(n,r)}}function T(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function x(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function h(n){if(Array.isArray(n))return n}var R=function(r,l,y){var c=Object(L.a)(r,l),i=X(c,2),d=i[0],_=i[1];return Object(G.a)(d,y),_},A=e("./node_modules/react/jsx-runtime.js");function w(n,r){return s(n)||a(n,r)||O(n,r)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(n,r){if(!!n){if(typeof n=="string")return p(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return p(n,r)}}function p(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function a(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function s(n){if(Array.isArray(n))return n}var f=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useDebounce } from \\"../useDebounce\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useDebounce\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},f=`import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};
`,m={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},o=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useDebounce } from \\"../useDebounce\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useDebounce\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},t=function(){var r=Object(M.useState)(""),l=w(r,2),y=l[0],c=l[1],i=R(function(){alert("Updated!")},1e3,[y]);return Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"text",onChange:function(_){return c(_.target.value)}}),Object(A.jsx)("button",{onClick:i,children:"Cancel"})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useForceUpdate } from \\"../useForceUpdate\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useForceUpdate\\",\\n};\\n\\nexport const Default = () => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":17}}};
    
import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},ee=`import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};
`,Q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useForceUpdate } from \\"../useForceUpdate\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useForceUpdate\\",\\n};\\n\\nexport const Default = () => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":17}}};
    
import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var B=function(){var W=Object(z.a)();return Object(Z.jsxs)("div",{children:[Math.random(),Object(Z.jsx)("button",{onClick:W,children:"Update"})]})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var N=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A);function D(t,n){return f(t)||s(t,n)||p(t,n)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function f(t){if(Array.isArray(t))return t}var m=function(n){return(n+1)%1e6},o=function(){var n=Object(A.useReducer)(m,0),r=D(n,2),l=r[1];return l}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/es.string.split.js"),L=e("./node_modules/core-js/modules/es.regexp.exec.js"),X=e("./node_modules/core-js/modules/es.string.replace.js"),P=e("./node_modules/core-js/modules/es.array.filter.js"),I=e("./node_modules/core-js/modules/es.regexp.to-string.js"),T=e("./node_modules/core-js/modules/es.date.to-string.js");function x(_,u){var v=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!v){if(Array.isArray(_)||(v=h(_))||u&&_&&typeof _.length=="number"){v&&(_=v);var k=0,j=function(){};return{s:j,n:function(){return k>=_.length?{done:!0}:{done:!1,value:_[k++]}},e:function(K){function S(J){return K.apply(this,arguments)}return S.toString=function(){return K.toString()},S}(function(K){throw K}),f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,C=!1,E;return{s:function(){v=v.call(_)},n:function(){var S=v.next();return g=S.done,S},e:function(K){function S(J){return K.apply(this,arguments)}return S.toString=function(){return K.toString()},S}(function(K){C=!0,E=K}),f:function(){try{!g&&v.return!=null&&v.return()}finally{if(C)throw E}}}}function h(_,u){if(!!_){if(typeof _=="string")return R(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return R(_,u)}}function R(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,k=new Array(u);v<u;v++)k[v]=_[v];return k}var A={alt:1,ctrl:2,meta:4,shift:8},w={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},D={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},O=function(u){var v=u.key!==" "?u.key.toLowerCase():"space",k=0;return u.altKey&&(k+=A.alt),u.ctrlKey&&(k+=A.ctrl),u.metaKey&&(k+=A.meta),u.shiftKey&&(k+=A.shift),{modifiers:k,key:v}},p=function(u){var v=u.replace(/\s/g,"").toLowerCase().split("+"),k=0,j,g=x(v),C;try{for(g.s();!(C=g.n()).done;){var E=C.value;A[E]?k+=A[E]:A[D[E]]?k+=A[D[E]]:w[E]?(k+=A.shift,j=w[E]):D[E]?j=D[E]:j=E}}catch(K){g.e(K)}finally{g.f()}return{modifiers:k,key:j}},a=function(u,v){return u.modifiers===v.modifiers&&u.key===v.key},s=function(u){var v=Object(M.useMemo)(function(){return u.filter(function(S){return!S.global})},[u]),k=Object(M.useMemo)(function(){return u.filter(function(S){return S.global})},[u]),j=Object(M.useCallback)(function(S,J,$,q){var ae=x(S?k:v),ye;try{for(ae.s();!(ye=ae.n()).done;){var de=ye.value;if(a(p(de.combo),J)){var le;(le=de[$])===null||le===void 0||le.call(de,q)}}}catch(_e){ae.e(_e)}finally{ae.f()}},[v,k]),g=Object(M.useCallback)(function(S){j(!0,O(S),"onKeyDown",S)},[j]),C=Object(M.useCallback)(function(S){j(!0,O(S),"onKeyUp",S)},[j]),E=Object(M.useCallback)(function(S){j(!1,O(S.nativeEvent),"onKeyDown",S.nativeEvent)},[j]),K=Object(M.useCallback)(function(S){j(!1,O(S.nativeEvent),"onKeyUp",S.nativeEvent)},[j]);return Object(M.useEffect)(function(){return document.addEventListener("keydown",g),document.addEventListener("keyup",C),function(){document.removeEventListener("keydown",g),document.removeEventListener("keyup",C)}},[g,C]),{handleKeyDown:E,handleKeyUp:K}},f=e("./node_modules/react/jsx-runtime.js");function m(_,u){return l(_)||r(_,u)||t(_,u)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(_,u){if(!!_){if(typeof _=="string")return n(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return n(_,u)}}function n(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,k=new Array(u);v<u;v++)k[v]=_[v];return k}function r(_,u){var v=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(v!=null){var k=[],j=!0,g=!1,C,E;try{for(v=v.call(_);!(j=(C=v.next()).done)&&(k.push(C.value),!(u&&k.length===u));j=!0);}catch(K){g=!0,E=K}finally{try{!j&&v.return!=null&&v.return()}finally{if(g)throw E}}return k}}function l(_){if(Array.isArray(_))return _}var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useRef, useState } from \\"react\\";\\n\\nimport { useHotKey } from \\"../useHotKey\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHotKey\\",\\n};\\n\\nexport const Default = () => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":46},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":46}}};
    
import React, { useRef, useState } from "react";

import { useHotKey } from "../useHotKey";

export default {
  title: "@travelmakers-design/hooks/useHotKey",
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: "ctrl+f",
      onKeyDown() {
        alert("Blocking find");
      },
    },
    {
      combo: "ctrl+l",
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: "shift+r",
      onKeyUp() {
        setValue("");
      },
    },
  ]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},y=`import React, { useRef, useState } from "react";

import { useHotKey } from "../useHotKey";

export default {
  title: "@travelmakers-design/hooks/useHotKey",
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: "ctrl+f",
      onKeyDown() {
        alert("Blocking find");
      },
    },
    {
      combo: "ctrl+l",
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: "shift+r",
      onKeyUp() {
        setValue("");
      },
    },
  ]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},i=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useRef, useState } from \\"react\\";\\n\\nimport { useHotKey } from \\"../useHotKey\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHotKey\\",\\n};\\n\\nexport const Default = () => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":46},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":46}}};
    
import React, { useRef, useState } from "react";

import { useHotKey } from "../useHotKey";

export default {
  title: "@travelmakers-design/hooks/useHotKey",
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: "ctrl+f",
      onKeyDown() {
        alert("Blocking find");
      },
    },
    {
      combo: "ctrl+l",
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: "shift+r",
      onKeyUp() {
        setValue("");
      },
    },
  ]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},d=function(){var u=Object(M.useRef)(null),v=Object(M.useState)(""),k=m(v,2),j=k[0],g=k[1],C=s([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){u.current.select()}},{combo:"shift+r",onKeyUp:function(){g("")}}]),E=C.handleKeyDown,K=C.handleKeyUp;return Object(f.jsx)("div",{children:Object(f.jsx)("input",{ref:u,type:"text",value:j,onChange:function(J){return g(J.target.value)},onKeyDown:E,onKeyUp:K})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: "ctrl+f",
      onKeyDown() {
        alert("Blocking find");
      },
    },
    {
      combo: "ctrl+l",
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: "shift+r",
      onKeyUp() {
        setValue("");
      },
    },
  ]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(h),A=e("./node_modules/core-js/modules/es.array.from.js"),w=e.n(A),D=e("./node_modules/react/index.js"),O=e.n(D),p=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),a=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),s=e("./node_modules/react/jsx-runtime.js"),f=e.n(s);function m(d,_){return l(d)||r(d,_)||t(d,_)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(d,_){if(!!d){if(typeof d=="string")return n(d,_);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return n(d,_)}}function n(d,_){(_==null||_>d.length)&&(_=d.length);for(var u=0,v=new Array(_);u<_;u++)v[u]=d[u];return v}function r(d,_){var u=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],k=!0,j=!1,g,C;try{for(u=u.call(d);!(k=(g=u.next()).done)&&(v.push(g.value),!(_&&v.length===_));k=!0);}catch(E){j=!0,C=E}finally{try{!k&&u.return!=null&&u.return()}finally{if(j)throw C}}return v}}function l(d){if(Array.isArray(d))return d}var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useHover } from \\"../useHover\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHover\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":34},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":34}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../useHover";

export default {
  title: "@travelmakers-design/hooks/useHover",
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "inline-block",
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      >
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},y=`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../useHover";

export default {
  title: "@travelmakers-design/hooks/useHover",
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "inline-block",
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      >
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useHover } from \\"../useHover\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHover\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":34},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":34}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../useHover";

export default {
  title: "@travelmakers-design/hooks/useHover",
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "inline-block",
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      >
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var i=function(){var _=Object(a.a)(),u=m(_,2),v=u[0],k=u[1],j=Object(p.a)();return Object(D.useEffect)(function(){j()},[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{ref:k,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+v]})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "inline-block",
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      >
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return m});var N=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A);function D(o,t){return f(o)||s(o,t)||p(o,t)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function f(o){if(Array.isArray(o))return o}var m=function(){var t=Object(A.useRef)(null),n=Object(A.useState)(!1),r=D(n,2),l=r[0],y=r[1],c=Object(A.useCallback)(function(){return y(!0)},[]),i=Object(A.useCallback)(function(){return y(!1)},[]);return Object(A.useEffect)(function(){var d=t.current;if(!!d)return d.addEventListener("mouseenter",c),d.addEventListener("mouseleave",i),function(){d.removeEventListener("mouseenter",c),d.removeEventListener("mouseleave",i)}},[t.current]),[l,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useId } from \\"../useId\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useId\\",\\n};\\n\\nexport const Default = () => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useId } from "../useId";

export default {
  title: "@travelmakers-design/hooks/useId",
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},ee=`import React from "react";
import { useId } from "../useId";

export default {
  title: "@travelmakers-design/hooks/useId",
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
`,Q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useId } from \\"../useId\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useId\\",\\n};\\n\\nexport const Default = () => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useId } from "../useId";

export default {
  title: "@travelmakers-design/hooks/useId",
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var B=function(){var W=Object(z.a)();return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{children:W})})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var N=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A);function D(t,n){return f(t)||s(t,n)||p(t,n)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function f(t){if(Array.isArray(t))return t}var m=0,o=function(n){var r=Object(A.useState)(n),l=D(r,2),y=l[0],c=l[1],i=n||y;return Object(A.useEffect)(function(){y==null&&(m+=1,c("tm-"+m))},[y]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js");function P(m,o){return R(m)||h(m,o)||T(m,o)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(m,o){if(!!m){if(typeof m=="string")return x(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(m,o)}}function x(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function h(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function R(m){if(Array.isArray(m))return m}var A=["keypress","mousemove","touchmove","click","scroll"],w={events:A,initialState:!0},D=function(o,t){var n=Object.assign({},w,t),r=n.events,l=n.initialState,y=Object(U.useState)(l),c=P(y,2),i=c[0],d=c[1],_=Object(U.useRef)();return Object(U.useEffect)(function(){var u=function(){d(!1),_.current&&window.clearTimeout(_.current),_.current=window.setTimeout(function(){d(!0)},o)};return r.forEach(function(v){return document.addEventListener(v,u)}),function(){r.forEach(function(v){return document.removeEventListener(v,u)})}},[o]),i},O=e("./node_modules/react/jsx-runtime.js"),p=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useIdle } from \\"../useIdle\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIdle\\",\\n};\\n\\nexport const Default = () => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useIdle } from "../useIdle";

export default {
  title: "@travelmakers-design/hooks/useIdle",
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},p=`import React from "react";
import { useIdle } from "../useIdle";

export default {
  title: "@travelmakers-design/hooks/useIdle",
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},s=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useIdle } from \\"../useIdle\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIdle\\",\\n};\\n\\nexport const Default = () => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useIdle } from "../useIdle";

export default {
  title: "@travelmakers-design/hooks/useIdle",
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},f=function(){var o=D(3e3);return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:["Idle: ",""+o]})})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js");function G(o,t){return T(o)||I(o,t)||X(o,t)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(o,t){if(!!o){if(typeof o=="string")return P(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(o,t)}}function P(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function I(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function T(o){if(Array.isArray(o))return o}var x=function(t){var n=Object(M.useState)(null),r=G(n,2),l=r[0],y=r[1],c=Object(M.useRef)(),i=Object(M.useCallback)(function(d){if(c.current&&(c.current.disconnect(),c.current=null),d===null){y(null);return}c.current=new IntersectionObserver(function(_){var u=G(_,1),v=u[0];y(v)},t),c.current.observe(d)},[t==null?void 0:t.rootMargin,t==null?void 0:t.root,t==null?void 0:t.threshold]);return[i,l]},h=e("./node_modules/react/jsx-runtime.js");function R(o,t){return p(o)||O(o,t)||w(o,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(o,t){if(!!o){if(typeof o=="string")return D(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(o,t)}}function D(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function O(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var a=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useRef } from \\"react\\";\\n\\nimport { useIntersection } from \\"../useIntersection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIntersection\\",\\n};\\n\\nexport const Default = () => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":32},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":32}}};
    
import React, { useRef } from "react";

import { useIntersection } from "../useIntersection";

export default {
  title: "@travelmakers-design/hooks/useIntersection",
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: "scroll" }}>
      <div style={{ height: 500 }}>
        <div
          ref={ref}
          style={{
            marginTop: 290,
            height: 50,
            backgroundColor: observer?.isIntersecting ? "green" : "red",
          }}
        >
          {observer?.isIntersecting ? "Half visible" : "Obscured"}
        </div>
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},a=`import React, { useRef } from "react";

import { useIntersection } from "../useIntersection";

export default {
  title: "@travelmakers-design/hooks/useIntersection",
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: "scroll" }}>
      <div style={{ height: 500 }}>
        <div
          ref={ref}
          style={{
            marginTop: 290,
            height: 50,
            backgroundColor: observer?.isIntersecting ? "green" : "red",
          }}
        >
          {observer?.isIntersecting ? "Half visible" : "Obscured"}
        </div>
      </div>
    </div>
  );
};
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},f=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useRef } from \\"react\\";\\n\\nimport { useIntersection } from \\"../useIntersection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIntersection\\",\\n};\\n\\nexport const Default = () => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":32},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":32}}};
    
import React, { useRef } from "react";

import { useIntersection } from "../useIntersection";

export default {
  title: "@travelmakers-design/hooks/useIntersection",
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: "scroll" }}>
      <div style={{ height: 500 }}>
        <div
          ref={ref}
          style={{
            marginTop: 290,
            height: 50,
            backgroundColor: observer?.isIntersecting ? "green" : "red",
          }}
        >
          {observer?.isIntersecting ? "Half visible" : "Obscured"}
        </div>
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},m=function(){var t=Object(M.useRef)(null),n=x({root:t.current,threshold:.5}),r=R(n,2),l=r[0],y=r[1];return Object(h.jsx)("div",{ref:t,style:{width:300,height:300,overflowY:"scroll"},children:Object(h.jsx)("div",{style:{height:500},children:Object(h.jsx)("div",{ref:l,style:{marginTop:290,height:50,backgroundColor:y!=null&&y.isIntersecting?"green":"red"},children:y!=null&&y.isIntersecting?"Half visible":"Obscured"})})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: "scroll" }}>
      <div style={{ height: 500 }}>
        <div
          ref={ref}
          style={{
            marginTop: 290,
            height: 50,
            backgroundColor: observer?.isIntersecting ? "green" : "red",
          }}
        >
          {observer?.isIntersecting ? "Half visible" : "Obscured"}
        </div>
      </div>
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return O});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function L(p,a){return x(p)||T(p,a)||P(p,a)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(p,a){if(!!p){if(typeof p=="string")return I(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(p,a)}}function I(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function T(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function x(p){if(Array.isArray(p))return p}var h=function(a,s){var f=Object(G.a)(a,s),m=L(f,2),o=m[0],t=m[1];return Object(U.useEffect)(function(){return o(),t},[o,t]),t},R=e("./node_modules/react/jsx-runtime.js"),A=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useInterval } from \\"../useInterval\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useInterval\\",\\n};\\n\\nexport const Default = () => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
import React from "react";
import { useInterval } from "../useInterval";

export default {
  title: "@travelmakers-design/hooks/useInterval",
};

export const Default = () => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},A=`import React from "react";
import { useInterval } from "../useInterval";

export default {
  title: "@travelmakers-design/hooks/useInterval",
};

export const Default = () => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},D=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useInterval } from \\"../useInterval\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useInterval\\",\\n};\\n\\nexport const Default = () => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
import React from "react";
import { useInterval } from "../useInterval";

export default {
  title: "@travelmakers-design/hooks/useInterval",
};

export const Default = () => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},O=function(){var a=h(function(){alert("fire")},3e3);return Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:a,children:"clear"})})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(h),A=e("./node_modules/core-js/modules/es.array.from.js"),w=e.n(A),D=e("./node_modules/react/index.js"),O=e.n(D),p=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,j,g;try{for(_=_.call(i);!(v=(j=_.next()).done)&&(u.push(j.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useIntervalFn } from \\"../useIntervalFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIntervalFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useIntervalFn } from "../useIntervalFn";

export default {
  title: "@travelmakers-design/hooks/useIntervalFn",
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},l=`import React from "react";
import { useIntervalFn } from "../useIntervalFn";

export default {
  title: "@travelmakers-design/hooks/useIntervalFn",
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useIntervalFn } from \\"../useIntervalFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIntervalFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useIntervalFn } from "../useIntervalFn";

export default {
  title: "@travelmakers-design/hooks/useIntervalFn",
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var c=function(){var d=Object(p.a)(function(){alert("fire")},3e3),_=f(d,2),u=_[0],v=_[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:u,children:"run"}),Object(a.jsx)("button",{onClick:v,children:"clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Z});var N=e("./node_modules/core-js/modules/web.timers.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(ee,Q){var B=Object(V.useRef)(),H=Object(z.a)(ee),W=Object(V.useCallback)(function(){B.current&&clearInterval(B.current),B.current=setInterval(function(){H()},Q)},[Q]),M=Object(V.useCallback)(function(){B.current&&clearInterval(B.current)},[]);return Object(V.useEffect)(function(){return M},[M]),[W,M]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return D});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=typeof document!="undefined"?M.useLayoutEffect:M.useEffect,L=e("./node_modules/react/jsx-runtime.js");function X(O,p){return h(O)||x(O,p)||I(O,p)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(O,p){if(!!O){if(typeof O=="string")return T(O,p);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(O,p)}}function T(O,p){(p==null||p>O.length)&&(p=O.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=O[a];return s}function x(O,p){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(O);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function h(O){if(Array.isArray(O))return O}var R=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useIsomorphicEffect } from \\"../useIsomorphicEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIsomorphicEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":16}}};
    
import React, { useState } from "react";

import { useIsomorphicEffect } from "../useIsomorphicEffect";

export default {
  title: "@travelmakers-design/hooks/useIsomorphicEffect",
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},R=`import React, { useState } from "react";

import { useIsomorphicEffect } from "../useIsomorphicEffect";

export default {
  title: "@travelmakers-design/hooks/useIsomorphicEffect",
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
};
`,A={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},w=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useIsomorphicEffect } from \\"../useIsomorphicEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useIsomorphicEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":16}}};
    
import React, { useState } from "react";

import { useIsomorphicEffect } from "../useIsomorphicEffect";

export default {
  title: "@travelmakers-design/hooks/useIsomorphicEffect",
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},D=function(){var p=Object(M.useState)(!1),a=X(p,2),s=a[0],f=a[1];return G(function(){f(!0)},[]),Object(L.jsx)("div",{children:s&&"mounted"})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return D});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function G(O,p){return T(O)||I(O,p)||X(O,p)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(O,p){if(!!O){if(typeof O=="string")return P(O,p);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(O,p)}}function P(O,p){(p==null||p>O.length)&&(p=O.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=O[a];return s}function I(O,p){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(O);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function T(O){if(Array.isArray(O))return O}var x=function(p){var a=Object(U.useState)(!1),s=G(a,2),f=s[0],m=s[1],o=Object(U.useCallback)(function(n){var r=n.key;r===p&&m(!0)},[p]),t=Object(U.useCallback)(function(n){var r=n.key;r===p&&m(!1)},[p]);return Object(U.useEffect)(function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",t)}},[o,t]),f},h=e("./node_modules/react/jsx-runtime.js"),R=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useKeyPress } from \\"../useKeyPress\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useKeyPress\\",\\n};\\n\\nexport const Default = () => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},R=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,A={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},w=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useKeyPress } from \\"../useKeyPress\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useKeyPress\\",\\n};\\n\\nexport const Default = () => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},D=function(){var p=x("r");return Object(h.jsx)("div",{children:p&&"r key pressed"})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var N=e("./node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./node_modules/react/index.js"),L=e("./node_modules/core-js/modules/es.array.concat.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),P=e("./node_modules/core-js/modules/es.array.includes.js"),I=e("./node_modules/core-js/modules/es.string.includes.js");function T(u){return R(u)||h(u)||D(u)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function R(u){if(Array.isArray(u))return O(u)}function A(u,v){return a(u)||p(u,v)||D(u,v)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(u,v){if(!!u){if(typeof u=="string")return O(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return O(u,v)}}function O(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,j=new Array(v);k<v;k++)j[k]=u[k];return j}function p(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,E,K;try{for(k=k.call(u);!(g=(E=k.next()).done)&&(j.push(E.value),!(v&&j.length===v));g=!0);}catch(S){C=!0,K=S}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return j}}function a(u){if(Array.isArray(u))return u}var s=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=Object(G.useState)(v),j=A(k,2),g=j[0],C=j[1],E=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return[].concat(T(pe),le)})},[]),K=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return[].concat(le,T(pe))})},[]),S=Object(G.useCallback)(function(de){for(var le=arguments.length,_e=new Array(le>1?le-1:0),pe=1;pe<le;pe++)_e[pe-1]=arguments[pe];return C(function(ge){return[].concat(T(ge.slice(0,de)),_e,T(ge.slice(de)))})},[]),J=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return pe.filter(function(ge,ue){return!le.includes(ue)})})},[]),$=Object(G.useCallback)(function(){var de=T(g),le=de.pop();return C(de),le},[g]),q=Object(G.useCallback)(function(){var de=T(g),le=de.shift();return C(de),le},[g]),ae=Object(G.useCallback)(function(de,le){C(function(_e){var pe=T(_e);return pe[de]=le,pe})},[]),ye={setState:C,append:E,prepend:K,insert:S,remove:J,pop:$,shift:q,setItem:ae};return[g,ye]},f=e("./node_modules/react/jsx-runtime.js");function m(u,v){return l(u)||r(u,v)||t(u,v)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(u,v){if(!!u){if(typeof u=="string")return n(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(u,v)}}function n(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,j=new Array(v);k<v;k++)j[k]=u[k];return j}function r(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,E,K;try{for(k=k.call(u);!(g=(E=k.next()).done)&&(j.push(E.value),!(v&&j.length===v));g=!0);}catch(S){C=!0,K=S}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return j}}function l(u){if(Array.isArray(u))return u}var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useList } from \\"../useList\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useList\\",\\n};\\n\\nlet count = 5;\\nexport const Default = () => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":45},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":45}}};
    
import React from "react";
import { useList } from "../useList";

export default {
  title: "@travelmakers-design/hooks/useList",
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>
          append
        </button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>
          prepend
        </button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, "Updated")}>
          setItem 3 index
        </button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>
          insert 3 index
        </button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},y=`import React from "react";
import { useList } from "../useList";

export default {
  title: "@travelmakers-design/hooks/useList",
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>
          append
        </button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>
          prepend
        </button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, "Updated")}>
          setItem 3 index
        </button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>
          insert 3 index
        </button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},i=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useList } from \\"../useList\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useList\\",\\n};\\n\\nlet count = 5;\\nexport const Default = () => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":45},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":45}}};
    
import React from "react";
import { useList } from "../useList";

export default {
  title: "@travelmakers-design/hooks/useList",
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>
          append
        </button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>
          prepend
        </button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, "Updated")}>
          setItem 3 index
        </button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>
          insert 3 index
        </button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},d=5,_=function(){var v=s(["Item 1","Item 2","Item 3","Item 4","Item 5"]),k=m(v,2),j=k[0],g=k[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return g.append("Item "+ ++d)},children:"append"}),Object(f.jsx)("button",{onClick:function(){return g.pop()},children:"pop"}),Object(f.jsx)("button",{onClick:function(){return g.prepend("Item "+ ++d)},children:"prepend"}),Object(f.jsx)("button",{onClick:function(){return g.shift()},children:"shift"}),Object(f.jsx)("button",{onClick:function(){return g.setItem(3,"Updated")},children:"setItem 3 index"}),Object(f.jsx)("button",{onClick:function(){return g.remove(2,3)},children:"remove 2, 3 index"}),Object(f.jsx)("button",{onClick:function(){return g.insert(3,"Item "+ ++d)},children:"insert 3 index"})]}),Object(f.jsx)("ul",{children:j.map(function(C,E){return Object(f.jsx)("li",{children:C},E)})})]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
  const [state, handlers] = useList([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>
          append
        </button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>
          prepend
        </button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, "Updated")}>
          setItem 3 index
        </button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>
          insert 3 index
        </button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var N=e("./node_modules/core-js/modules/es.promise.js"),U=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),P=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),I=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),T=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),x=e("./node_modules/core-js/modules/es.object.define-property.js"),h=e("./node_modules/core-js/modules/es.object.create.js"),R=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),A=e("./node_modules/core-js/modules/es.array.for-each.js"),w=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),D=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),O=e("./node_modules/core-js/modules/es.array.reverse.js"),p=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return S};var S={},J=Object.prototype,$=J.hasOwnProperty,q=typeof Symbol=="function"?Symbol:{},ae=q.iterator||"@@iterator",ye=q.asyncIterator||"@@asyncIterator",de=q.toStringTag||"@@toStringTag";function le(oe,Y,ie){return Object.defineProperty(oe,Y,{value:ie,enumerable:!0,configurable:!0,writable:!0}),oe[Y]}try{le({},"")}catch(oe){le=function(ie,ce,fe){return ie[ce]=fe}}function _e(oe,Y,ie,ce){var fe=Y&&Y.prototype instanceof ue?Y:ue,ve=Object.create(fe.prototype),ke=new Me(ce||[]);return ve._invoke=function(Ee,Ie,he){var Ce="suspendedStart";return function(xe,We){if(Ce==="executing")throw new Error("Generator is already running");if(Ce==="completed"){if(xe==="throw")throw We;return Pe()}for(he.method=xe,he.arg=We;;){var Ke=he.delegate;if(Ke){var Ue=Te(Ke,he);if(Ue){if(Ue===ge)continue;return Ue}}if(he.method==="next")he.sent=he._sent=he.arg;else if(he.method==="throw"){if(Ce==="suspendedStart")throw Ce="completed",he.arg;he.dispatchException(he.arg)}else he.method==="return"&&he.abrupt("return",he.arg);Ce="executing";var Be=pe(Ee,Ie,he);if(Be.type==="normal"){if(Ce=he.done?"completed":"suspendedYield",Be.arg===ge)continue;return{value:Be.arg,done:he.done}}Be.type==="throw"&&(Ce="completed",he.method="throw",he.arg=Be.arg)}}}(oe,ie,ke),ve}function pe(oe,Y,ie){try{return{type:"normal",arg:oe.call(Y,ie)}}catch(ce){return{type:"throw",arg:ce}}}S.wrap=_e;var ge={};function ue(){}function ne(){}function se(){}var me={};le(me,ae,function(){return this});var je=Object.getPrototypeOf,be=je&&je(je(Re([])));be&&be!==J&&$.call(be,ae)&&(me=be);var Oe=se.prototype=ue.prototype=Object.create(me);function De(oe){["next","throw","return"].forEach(function(Y){le(oe,Y,function(ie){return this._invoke(Y,ie)})})}function Se(oe,Y){function ie(fe,ve,ke,Ee){var Ie=pe(oe[fe],oe,ve);if(Ie.type!=="throw"){var he=Ie.arg,Ce=he.value;return Ce&&typeof Ce=="object"&&$.call(Ce,"__await")?Y.resolve(Ce.__await).then(function(xe){ie("next",xe,ke,Ee)},function(xe){ie("throw",xe,ke,Ee)}):Y.resolve(Ce).then(function(xe){he.value=xe,ke(he)},function(xe){return ie("throw",xe,ke,Ee)})}Ee(Ie.arg)}var ce;this._invoke=function(fe,ve){function ke(){return new Y(function(Ee,Ie){ie(fe,ve,Ee,Ie)})}return ce=ce?ce.then(ke,ke):ke()}}function Te(oe,Y){var ie=oe.iterator[Y.method];if(ie===void 0){if(Y.delegate=null,Y.method==="throw"){if(oe.iterator.return&&(Y.method="return",Y.arg=void 0,Te(oe,Y),Y.method==="throw"))return ge;Y.method="throw",Y.arg=new TypeError("The iterator does not provide a 'throw' method")}return ge}var ce=pe(ie,oe.iterator,Y.arg);if(ce.type==="throw")return Y.method="throw",Y.arg=ce.arg,Y.delegate=null,ge;var fe=ce.arg;return fe?fe.done?(Y[oe.resultName]=fe.value,Y.next=oe.nextLoc,Y.method!=="return"&&(Y.method="next",Y.arg=void 0),Y.delegate=null,ge):fe:(Y.method="throw",Y.arg=new TypeError("iterator result is not an object"),Y.delegate=null,ge)}function Ae(oe){var Y={tryLoc:oe[0]};1 in oe&&(Y.catchLoc=oe[1]),2 in oe&&(Y.finallyLoc=oe[2],Y.afterLoc=oe[3]),this.tryEntries.push(Y)}function Le(oe){var Y=oe.completion||{};Y.type="normal",delete Y.arg,oe.completion=Y}function Me(oe){this.tryEntries=[{tryLoc:"root"}],oe.forEach(Ae,this),this.reset(!0)}function Re(oe){if(oe){var Y=oe[ae];if(Y)return Y.call(oe);if(typeof oe.next=="function")return oe;if(!isNaN(oe.length)){var ie=-1,ce=function fe(){for(;++ie<oe.length;)if($.call(oe,ie))return fe.value=oe[ie],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return ce.next=ce}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return ne.prototype=se,le(Oe,"constructor",se),le(se,"constructor",ne),ne.displayName=le(se,de,"GeneratorFunction"),S.isGeneratorFunction=function(oe){var Y=typeof oe=="function"&&oe.constructor;return!!Y&&(Y===ne||(Y.displayName||Y.name)==="GeneratorFunction")},S.mark=function(oe){return Object.setPrototypeOf?Object.setPrototypeOf(oe,se):(oe.__proto__=se,le(oe,de,"GeneratorFunction")),oe.prototype=Object.create(Oe),oe},S.awrap=function(oe){return{__await:oe}},De(Se.prototype),le(Se.prototype,ye,function(){return this}),S.AsyncIterator=Se,S.async=function(oe,Y,ie,ce,fe){fe===void 0&&(fe=Promise);var ve=new Se(_e(oe,Y,ie,ce),fe);return S.isGeneratorFunction(Y)?ve:ve.next().then(function(ke){return ke.done?ke.value:ve.next()})},De(Oe),le(Oe,de,"Generator"),le(Oe,ae,function(){return this}),le(Oe,"toString",function(){return"[object Generator]"}),S.keys=function(oe){var Y=[];for(var ie in oe)Y.push(ie);return Y.reverse(),function ce(){for(;Y.length;){var fe=Y.pop();if(fe in oe)return ce.value=fe,ce.done=!1,ce}return ce.done=!0,ce}},S.values=Re,Me.prototype={constructor:Me,reset:function(Y){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Le),!Y)for(var ie in this)ie.charAt(0)==="t"&&$.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var Y=this.tryEntries[0].completion;if(Y.type==="throw")throw Y.arg;return this.rval},dispatchException:function(Y){if(this.done)throw Y;var ie=this;function ce(he,Ce){return ke.type="throw",ke.arg=Y,ie.next=he,Ce&&(ie.method="next",ie.arg=void 0),!!Ce}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe],ke=ve.completion;if(ve.tryLoc==="root")return ce("end");if(ve.tryLoc<=this.prev){var Ee=$.call(ve,"catchLoc"),Ie=$.call(ve,"finallyLoc");if(Ee&&Ie){if(this.prev<ve.catchLoc)return ce(ve.catchLoc,!0);if(this.prev<ve.finallyLoc)return ce(ve.finallyLoc)}else if(Ee){if(this.prev<ve.catchLoc)return ce(ve.catchLoc,!0)}else{if(!Ie)throw new Error("try statement without catch or finally");if(this.prev<ve.finallyLoc)return ce(ve.finallyLoc)}}}},abrupt:function(Y,ie){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var fe=this.tryEntries[ce];if(fe.tryLoc<=this.prev&&$.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ve=fe;break}}ve&&(Y==="break"||Y==="continue")&&ve.tryLoc<=ie&&ie<=ve.finallyLoc&&(ve=null);var ke=ve?ve.completion:{};return ke.type=Y,ke.arg=ie,ve?(this.method="next",this.next=ve.finallyLoc,ge):this.complete(ke)},complete:function(Y,ie){if(Y.type==="throw")throw Y.arg;return Y.type==="break"||Y.type==="continue"?this.next=Y.arg:Y.type==="return"?(this.rval=this.arg=Y.arg,this.method="return",this.next="end"):Y.type==="normal"&&ie&&(this.next=ie),ge},finish:function(Y){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.finallyLoc===Y)return this.complete(ce.completion,ce.afterLoc),Le(ce),ge}},catch:function(Y){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.tryLoc===Y){var fe=ce.completion;if(fe.type==="throw"){var ve=fe.arg;Le(ce)}return ve}}throw new Error("illegal catch attempt")},delegateYield:function(Y,ie,ce){return this.delegate={iterator:Re(Y),resultName:ie,nextLoc:ce},this.method==="next"&&(this.arg=void 0),ge}},S}function s(S,J,$,q,ae,ye,de){try{var le=S[ye](de),_e=le.value}catch(pe){$(pe);return}le.done?J(_e):Promise.resolve(_e).then(q,ae)}function f(S){return function(){var J=this,$=arguments;return new Promise(function(q,ae){var ye=S.apply(J,$);function de(_e){s(ye,q,ae,de,le,"next",_e)}function le(_e){s(ye,q,ae,de,le,"throw",_e)}de(void 0)})}}function m(S,J){return l(S)||r(S,J)||t(S,J)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(S,J){if(!!S){if(typeof S=="string")return n(S,J);var $=Object.prototype.toString.call(S).slice(8,-1);if($==="Object"&&S.constructor&&($=S.constructor.name),$==="Map"||$==="Set")return Array.from(S);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return n(S,J)}}function n(S,J){(J==null||J>S.length)&&(J=S.length);for(var $=0,q=new Array(J);$<J;$++)q[$]=S[$];return q}function r(S,J){var $=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if($!=null){var q=[],ae=!0,ye=!1,de,le;try{for($=$.call(S);!(ae=(de=$.next()).done)&&(q.push(de.value),!(J&&q.length===J));ae=!0);}catch(_e){ye=!0,le=_e}finally{try{!ae&&$.return!=null&&$.return()}finally{if(ye)throw le}}return q}}function l(S){if(Array.isArray(S))return S}var y=function(J){var $=Object(L.useState)(!1),q=m($,2),ae=q[0],ye=q[1],de=Object(p.a)(J),le=Object(L.useCallback)(f(a().mark(function _e(){var pe,ge=arguments;return a().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ye(!0),ne.next=3,de.apply(void 0,ge);case 3:return pe=ne.sent,ye(!1),ne.abrupt("return",pe);case 6:case"end":return ne.stop()}},_e)})),[J]);return[ae,le]},c=e("./node_modules/react/jsx-runtime.js");function i(S,J){return k(S)||v(S,J)||_(S,J)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(S,J){if(!!S){if(typeof S=="string")return u(S,J);var $=Object.prototype.toString.call(S).slice(8,-1);if($==="Object"&&S.constructor&&($=S.constructor.name),$==="Map"||$==="Set")return Array.from(S);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return u(S,J)}}function u(S,J){(J==null||J>S.length)&&(J=S.length);for(var $=0,q=new Array(J);$<J;$++)q[$]=S[$];return q}function v(S,J){var $=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if($!=null){var q=[],ae=!0,ye=!1,de,le;try{for($=$.call(S);!(ae=(de=$.next()).done)&&(q.push(de.value),!(J&&q.length===J));ae=!0);}catch(_e){ye=!0,le=_e}finally{try{!ae&&$.return!=null&&$.return()}finally{if(ye)throw le}}return q}}function k(S){if(Array.isArray(S))return S}var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useLoading } from \\"../useLoading\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useLoading\\",\\n};\\n\\nconst sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));\\n\\nexport const Default = () => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},j=`import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},C=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useLoading } from \\"../useLoading\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useLoading\\",\\n};\\n\\nconst sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));\\n\\nexport const Default = () => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},E=function(J){return new Promise(function($){return setTimeout($,J)})},K=function(){var J=y(E),$=i(J,2),q=$[0],ae=$[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return ae(2e3)},children:"Start"})}),Object(c.jsxs)("div",{children:["Loading: ",""+q]})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Z=e("./node_modules/react/jsx-runtime.js"),F=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useMediaQuery } from \\"../useMediaQuery\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useMediaQuery\\",\\n};\\n\\nexport const Default = () => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useMediaQuery } from "../useMediaQuery";

export default {
  title: "@travelmakers-design/hooks/useMediaQuery",
};

export const Default = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},ee=`import React from "react";
import { useMediaQuery } from "../useMediaQuery";

export default {
  title: "@travelmakers-design/hooks/useMediaQuery",
};

export const Default = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
};
`,Q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useMediaQuery } from \\"../useMediaQuery\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useMediaQuery\\",\\n};\\n\\nexport const Default = () => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":16},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":16}}};
    
import React from "react";
import { useMediaQuery } from "../useMediaQuery";

export default {
  title: "@travelmakers-design/hooks/useMediaQuery",
};

export const Default = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var B=function(){var W=Object(z.a)("(min-width: 900px)");return Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{children:["(min-width: 900px) : ",W?"matches":"does not match"]})})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return t});var N=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A);function D(n,r){return f(n)||s(n,r)||p(n,r)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,r){if(!!n){if(typeof n=="string")return a(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return a(n,r)}}function a(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function s(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function f(n){if(Array.isArray(n))return n}function m(n,r){try{return n.addEventListener("change",r),function(){return n.removeEventListener("change",r)}}catch(l){return n.addListener(r),function(){return n.removeListener(r)}}}function o(n){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(n).matches:!1}var t=function(r){var l=Object(A.useState)(o(r)),y=D(l,2),c=y[0],i=y[1],d=Object(A.useRef)();return Object(A.useEffect)(function(){if("matchMedia"in window)return d.current=window.matchMedia(r),i(d.current.matches),m(d.current,function(_){return i(_.matches)})},[r]),c}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),L=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),P=e("./node_modules/core-js/modules/es.array.for-each.js"),I=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),T=function(n,r){typeof n=="function"?n(r):typeof n=="object"&&n!==null&&"current"in n&&(n.current=r)},x=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Object(M.useCallback)(function(y){r.forEach(function(c){return T(c,y)})},r)},h=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(y){r.forEach(function(c){return T(c,y)})}},R=e("./node_modules/react/jsx-runtime.js");function A(t,n){return a(t)||p(t,n)||D(t,n)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,n){if(!!t){if(typeof t=="string")return O(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,n)}}function O(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function p(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useClickAway } from \\"../../useClickAway\\";\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useHover } from \\"../../useHover\\";\\nimport { useMergedRef } from \\"../useMergedRef\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useMergedRef\\",\\n};\\n\\nexport const Default = () => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":12},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":12},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useClickAway } from "../../useClickAway";
import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../../useHover";
import { useMergedRef } from "../useMergedRef";

export default {
  title: "@travelmakers-design/hooks/useMergedRef",
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert("click away"));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      >{\`\${hovered}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},s=`import React, { useEffect } from "react";

import { useClickAway } from "../../useClickAway";
import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../../useHover";
import { useMergedRef } from "../useMergedRef";

export default {
  title: "@travelmakers-design/hooks/useMergedRef",
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert("click away"));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      >{\`\${hovered}\`}</div>
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},m=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useClickAway } from \\"../../useClickAway\\";\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useHover } from \\"../../useHover\\";\\nimport { useMergedRef } from \\"../useMergedRef\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useMergedRef\\",\\n};\\n\\nexport const Default = () => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":12},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":12},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useClickAway } from "../../useClickAway";
import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../../useHover";
import { useMergedRef } from "../useMergedRef";

export default {
  title: "@travelmakers-design/hooks/useMergedRef",
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert("click away"));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      >{\`\${hovered}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},o=function(){var n=Object(X.a)(),r=A(n,2),l=r[0],y=r[1],c=Object(G.a)(function(){return alert("click away")}),i=x(y,c),d=Object(L.a)();return Object(M.useEffect)(function(){d()},[]),Object(R.jsx)("div",{children:Object(R.jsx)("div",{ref:i,style:{width:100,height:100,backgroundColor:"red"},children:""+l})})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert("click away"));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      >{\`\${hovered}\`}</div>
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return O});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function G(p,a){return T(p)||I(p,a)||X(p,a)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(p,a){if(!!p){if(typeof p=="string")return P(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return P(p,a)}}function P(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function I(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function T(p){if(Array.isArray(p))return p}var x={angle:0,type:"landscape-primary"},h=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,s=Object(U.useState)(a),f=G(s,2),m=f[0],o=f[1];return Object(U.useEffect)(function(){var t=window.screen,n=!0,r=function(){if(n){var y=t,c=y.orientation;if(c){var i=c.angle,d=c.type;o({angle:i,type:d})}else window.orientation!==void 0?o({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):o(a)}};return window.addEventListener("orientationchange",r),r(),function(){n=!1,window.addEventListener("orientationchange",r)}},[]),m},R=e("./node_modules/react/jsx-runtime.js"),A=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useOrientation } from \\"../useOrientation\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useOrientation\\",\\n};\\n\\nexport const Default = () => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},A=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},D=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useOrientation } from \\"../useOrientation\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useOrientation\\",\\n};\\n\\nexport const Default = () => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},O=function(){var a=h();return Object(R.jsx)("div",{children:JSON.stringify(a)})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),te=function(){var W=window.navigator,M=W.userAgent,G=W.platform,L=["Macintosh","MacIntel","MacPPC","Mac68K"],X=["Win32","Win64","Windows","WinCE"],P=["iPhone","iPad","iPod"],I="unknown";return L.indexOf(G)!==-1?I="macos":P.indexOf(G)!==-1?I="ios":X.indexOf(G)!==-1?I="windows":/Android/.test(M)?I="android":!I&&/Linux/.test(G)&&(I="linux"),I},z=function(){return typeof window!="undefined"?te():"unknown"},Z=e("./node_modules/react/jsx-runtime.js"),F=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useOs } from \\"../useOs\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useOs\\",\\n};\\n\\nexport const Default = () => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},F=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},Q=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useOs } from \\"../useOs\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useOs\\",\\n};\\n\\nexport const Default = () => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},B=function(){var W=z();return Object(Z.jsx)("div",{children:W})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return D});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=function(p){Object(M.useEffect)(function(){if(!!p){var a=function(f){f=f||window.event;var m=f.relatedTarget||f.toElement;(!m||m.nodeName==="HTML")&&p()};return document.addEventListener("mouseout",a),function(){document.removeEventListener("mouseout",a)}}},[])},L=e("./node_modules/react/jsx-runtime.js");function X(O,p){return h(O)||x(O,p)||I(O,p)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(O,p){if(!!O){if(typeof O=="string")return T(O,p);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(O,p)}}function T(O,p){(p==null||p>O.length)&&(p=O.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=O[a];return s}function x(O,p){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(O);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function h(O){if(Array.isArray(O))return O}var R=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { usePageLeave } from \\"../usePageLeave\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/usePageLeave\\",\\n};\\n\\nexport const Default = () => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":14},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":14}}};
    
import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},R=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,A={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},w=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { usePageLeave } from \\"../usePageLeave\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/usePageLeave\\",\\n};\\n\\nexport const Default = () => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":14},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":14}}};
    
import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},D=function(){var p=Object(M.useState)(0),a=X(p,2),s=a[0],f=a[1];return G(function(){return f(function(m){return m+1})}),Object(L.jsxs)("div",{children:["Page leave count: ",s]})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),te=e("./node_modules/core-js/modules/es.array.concat.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js");function L(m){return I(m)||P(m)||h(m)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function I(m){if(Array.isArray(m))return R(m)}function T(m,o){return w(m)||A(m,o)||h(m,o)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(m,o){if(!!m){if(typeof m=="string")return R(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(m,o)}}function R(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function A(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function w(m){if(Array.isArray(m))return m}var D=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=Object(U.useState)({state:t.slice(0,o),queue:t.slice(o)}),r=T(n,2),l=r[0],y=l.state,c=l.queue,i=r[1],d=function(){for(var k=arguments.length,j=new Array(k),g=0;g<k;g++)j[g]=arguments[g];return i(function(C){var E=[].concat(L(C.state),L(C.queue),j);return{state:E.slice(0,o),queue:E.slice(o)}})},_=function(k){return i(function(j){var g=k([].concat(L(j.state),L(j.queue)));return{state:g.slice(0,o),queue:g.slice(o)}})},u=function(){return i(function(k){return{state:k.state,queue:[]}})};return{state:y,queue:c,add:d,update:_,cleanQueue:u}},O=e("./node_modules/react/jsx-runtime.js"),p=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useQueue } from \\"../useQueue\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useQueue\\",\\n};\\n\\nexport const Default = () => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":21}}};
    
import React, { useState } from "react";

import { useQueue } from "../useQueue";

export default {
  title: "@travelmakers-design/hooks/useQueue",
};

export const Default = () => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},p=`import React, { useState } from "react";

import { useQueue } from "../useQueue";

export default {
  title: "@travelmakers-design/hooks/useQueue",
};

export const Default = () => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
};
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},s=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useQueue } from \\"../useQueue\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useQueue\\",\\n};\\n\\nexport const Default = () => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":21}}};
    
import React, { useState } from "react";

import { useQueue } from "../useQueue";

export default {
  title: "@travelmakers-design/hooks/useQueue",
};

export const Default = () => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},f=function(){var o=D(10,[1,2,3]),t=o.state,n=o.queue,r=o.add,l=o.update,y=o.cleanQueue;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:["state: ",t]}),Object(O.jsxs)("div",{children:["queue: ",n]}),Object(O.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(O.jsx)("button",{onClick:function(){return l(function(i){return i})},children:"update"}),Object(O.jsx)("button",{onClick:y,children:"clear"})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(h),A=e("./node_modules/core-js/modules/es.array.from.js"),w=e.n(A),D=e("./node_modules/react/index.js"),O=e.n(D),p=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,j,g;try{for(_=_.call(i);!(v=(j=_.next()).done)&&(u.push(j.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},l=`import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var c=function(){var d=Object(p.a)({width:0,height:0}),_=f(d,2),u=_[0],v=_[1];return Object(D.useEffect)(function(){var k=function(){v({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(a.jsx)("pre",{children:JSON.stringify(u,null,2)})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return m});var N=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.array.from.js"),R=e.n(h),A=e("./node_modules/react/index.js"),w=e.n(A);function D(o,t){return f(o)||s(o,t)||p(o,t)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function f(o){if(Array.isArray(o))return o}var m=function(t){var n=Object(A.useRef)(0),r=Object(A.useState)(t),l=D(r,2),y=l[0],c=l[1],i=Object(A.useCallback)(function(d){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){c(d)})},[]);return[y,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),L=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function X(l,y){return h(l)||x(l,y)||I(l,y)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(l,y){if(!!l){if(typeof l=="string")return T(l,y);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return T(l,y)}}function T(l,y){(y==null||y>l.length)&&(y=l.length);for(var c=0,i=new Array(y);c<y;c++)i[c]=l[c];return i}function x(l,y){var c=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(c!=null){var i=[],d=!0,_=!1,u,v;try{for(c=c.call(l);!(d=(u=c.next()).done)&&(i.push(u.value),!(y&&i.length===y));d=!0);}catch(k){_=!0,v=k}finally{try{!d&&c.return!=null&&c.return()}finally{if(_)throw v}}return i}}function h(l){if(Array.isArray(l))return l}var R={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},A=typeof window!="undefined",w=function(){var y=Object(M.useRef)(null),c=Object(L.a)(R),i=X(c,2),d=i[0],_=i[1],u=Object(M.useMemo)(function(){return A?new ResizeObserver(function(v){var k=v[0];k&&_(k.contentRect)}):null},[]);return Object(M.useEffect)(function(){return y.current&&u.observe(y.current),function(){u.disconnect()}},[y.current]),[y,d]},D=e("./node_modules/react/jsx-runtime.js");function O(l,y){return m(l)||f(l,y)||a(l,y)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(l,y){if(!!l){if(typeof l=="string")return s(l,y);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return s(l,y)}}function s(l,y){(y==null||y>l.length)&&(y=l.length);for(var c=0,i=new Array(y);c<y;c++)i[c]=l[c];return i}function f(l,y){var c=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(c!=null){var i=[],d=!0,_=!1,u,v;try{for(c=c.call(l);!(d=(u=c.next()).done)&&(i.push(u.value),!(y&&i.length===y));d=!0);}catch(k){_=!0,v=k}finally{try{!d&&c.return!=null&&c.return()}finally{if(_)throw v}}return i}}function m(l){if(Array.isArray(l))return l}var o=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useResize } from \\"../useResize\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useResize\\",\\n};\\n\\nexport const Default = () => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":33}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,t={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},o=`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};
`,t={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},n=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useResize } from \\"../useResize\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useResize\\",\\n};\\n\\nexport const Default = () => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":33}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var y=w(),c=O(y,2),i=c[0],d=c[1],_=Object(G.a)();return Object(M.useEffect)(function(){_()},[]),Object(D.jsxs)("div",{children:[Object(D.jsx)("textarea",{ref:i,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(D.jsx)("div",{children:JSON.stringify(d)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return y});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/es.parse-int.js");function L(){var c=document.createElement("style");return c.type="text/css",c.setAttribute("tm-scroll-lock",""),c}function X(c){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(c)}function P(c,i){c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}function I(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var c=parseInt(window.getComputedStyle(document.body).paddingRight,10),i=window.innerWidth-document.documentElement.clientWidth;return c+i}var T=function(i){var d=i.disableBodyPadding,_=d?null:I(),u=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return u};function x(c,i){return D(c)||w(c,i)||R(c,i)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(c,i){if(!!c){if(typeof c=="string")return A(c,i);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return A(c,i)}}function A(c,i){(i==null||i>c.length)&&(i=c.length);for(var d=0,_=new Array(i);d<i;d++)_[d]=c[d];return _}function w(c,i){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var _=[],u=!0,v=!1,k,j;try{for(d=d.call(c);!(u=(k=d.next()).done)&&(_.push(k.value),!(i&&_.length===i));u=!0);}catch(g){v=!0,j=g}finally{try{!u&&d.return!=null&&d.return()}finally{if(v)throw j}}return _}}function D(c){if(Array.isArray(c))return c}var O=function(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(M.useState)(i||!1),u=x(_,2),v=u[0],k=u[1],j=Object(M.useRef)(0),g=d.disableBodyPadding,C=Object(M.useRef)(null),E=function(){j.current=window.scrollY;var J=T({disableBodyPadding:g}),$=L();P($,J),X($),C.current=$},K=function(){!(C!=null&&C.current)||(C.current.parentNode.removeChild(C.current),C.current=null)};return Object(M.useEffect)(function(){return v?E():K(),K},[v]),Object(M.useEffect)(function(){i!==void 0&&k(i)},[i]),Object(M.useEffect)(function(){i===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&k(!0)},[k]),[v,k]},p=e("./node_modules/react/jsx-runtime.js");function a(c,i){return t(c)||o(c,i)||f(c,i)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(c,i){if(!!c){if(typeof c=="string")return m(c,i);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return m(c,i)}}function m(c,i){(i==null||i>c.length)&&(i=c.length);for(var d=0,_=new Array(i);d<i;d++)_[d]=c[d];return _}function o(c,i){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var _=[],u=!0,v=!1,k,j;try{for(d=d.call(c);!(u=(k=d.next()).done)&&(_.push(k.value),!(i&&_.length===i));u=!0);}catch(g){v=!0,j=g}finally{try{!u&&d.return!=null&&d.return()}finally{if(v)throw j}}return _}}function t(c){if(Array.isArray(c))return c}var n=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useScrollLock } from \\"../useScrollLock\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useScrollLock\\",\\n};\\n\\nexport const Default = () => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":21}}};
    
import React, { useState } from "react";

import { useScrollLock } from "../useScrollLock";

export default {
  title: "@travelmakers-design/hooks/useScrollLock",
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>
        {lock ? "Unlock" : "Lock"}
      </button>
      {scrollLocked ? "Scroll locked" : "Scrollable"}
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},n=`import React, { useState } from "react";

import { useScrollLock } from "../useScrollLock";

export default {
  title: "@travelmakers-design/hooks/useScrollLock",
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>
        {lock ? "Unlock" : "Lock"}
      </button>
      {scrollLocked ? "Scroll locked" : "Scrollable"}
    </div>
  );
};
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},l=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useScrollLock } from \\"../useScrollLock\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useScrollLock\\",\\n};\\n\\nexport const Default = () => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":21}}};
    
import React, { useState } from "react";

import { useScrollLock } from "../useScrollLock";

export default {
  title: "@travelmakers-design/hooks/useScrollLock",
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>
        {lock ? "Unlock" : "Lock"}
      </button>
      {scrollLocked ? "Scroll locked" : "Scrollable"}
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},y=function(){var i=Object(M.useState)(!1),d=a(i,2),_=d[0],u=d[1],v=O(_);return Object(p.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(p.jsx)("button",{onClick:function(){return u(function(j){return!j})},children:_?"Unlock":"Lock"}),v?"Scroll locked":"Scrollable"]})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`() => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>
        {lock ? "Unlock" : "Lock"}
      </button>
      {scrollLocked ? "Scroll locked" : "Scrollable"}
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return O});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/react/index.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function L(p,a){return x(p)||T(p,a)||P(p,a)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(p,a){if(!!p){if(typeof p=="string")return I(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(p,a)}}function I(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function T(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function x(p){if(Array.isArray(p))return p}var h=function(a,s){var f=Object(G.a)(a,s),m=L(f,2),o=m[0],t=m[1];return Object(U.useEffect)(function(){return o(),t},[o,t]),t},R=e("./node_modules/react/jsx-runtime.js"),A=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeout } from \\"../useTimeout\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useTimeout\\",\\n};\\n\\nexport const Default = () => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
import React from "react";
import { useTimeout } from "../useTimeout";

export default {
  title: "@travelmakers-design/hooks/useTimeout",
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},A=`import React from "react";
import { useTimeout } from "../useTimeout";

export default {
  title: "@travelmakers-design/hooks/useTimeout",
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},D=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeout } from \\"../useTimeout\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useTimeout\\",\\n};\\n\\nexport const Default = () => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
import React from "react";
import { useTimeout } from "../useTimeout";

export default {
  title: "@travelmakers-design/hooks/useTimeout",
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},O=function(){var a=h(function(){alert("fire!")},2e3);return Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:a,children:"Clear"})})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(h),A=e("./node_modules/core-js/modules/es.array.from.js"),w=e.n(A),D=e("./node_modules/react/index.js"),O=e.n(D),p=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,j,g;try{for(_=_.call(i);!(v=(j=_.next()).done)&&(u.push(j.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeoutFn } from \\"../useTimeoutFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useTimeoutFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},l=`import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeoutFn } from \\"../useTimeoutFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useTimeoutFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var c=function(){var d=Object(p.a)(function(){alert("fire!")},2e3),_=f(d,2),u=_[0],v=_[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:u,children:"Run"}),Object(a.jsx)("button",{onClick:v,children:"Clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Z});var N=e("./node_modules/core-js/modules/web.timers.js"),U=e.n(N),V=e("./node_modules/react/index.js"),te=e.n(V),z=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(ee,Q){var B=Object(V.useRef)(),H=Object(z.a)(ee),W=Object(V.useCallback)(function(){B.current&&clearTimeout(B.current),B.current=setTimeout(function(){H()},Q)},[Q]),M=Object(V.useCallback)(function(){B.current&&clearTimeout(B.current)},[]);return Object(V.useEffect)(function(){return M},[M]),[W,M]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js");function G(o,t){return T(o)||I(o,t)||X(o,t)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(o,t){if(!!o){if(typeof o=="string")return P(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(o,t)}}function P(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function I(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function T(o){if(Array.isArray(o))return o}var x=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=Object(M.useState)(t),r=G(n,2),l=r[0],y=r[1],c=Object(M.useCallback)(function(i){return y(function(d){return typeof i=="boolean"?i:!d})},[]);return[l,c]},h=e("./node_modules/react/jsx-runtime.js");function R(o,t){return p(o)||O(o,t)||w(o,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(o,t){if(!!o){if(typeof o=="string")return D(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(o,t)}}function D(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function O(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var a=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useToggle } from \\"../useToggle\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useToggle\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useToggle } from "../useToggle";

export default {
  title: "@travelmakers-design/hooks/useToggle",
};

export const Default = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},a=`import React from "react";
import { useToggle } from "../useToggle";

export default {
  title: "@travelmakers-design/hooks/useToggle",
};

export const Default = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
};
`,s={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},f=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useToggle } from \\"../useToggle\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useToggle\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useToggle } from "../useToggle";

export default {
  title: "@travelmakers-design/hooks/useToggle",
};

export const Default = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},m=function(){var t=x(),n=R(t,2),r=n[0],l=n[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["current state: ",""+r]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return l(!0)},children:"setTrue"}),Object(h.jsx)("button",{onClick:function(){return l(!1)},children:"setFalse"}),Object(h.jsx)("button",{onClick:l,children:"toggle"})]})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function L(n,r){return x(n)||T(n,r)||P(n,r)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(n,r){if(!!n){if(typeof n=="string")return I(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return I(n,r)}}function I(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function T(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function x(n){if(Array.isArray(n))return n}var h=function(r){var l=r.value,y=r.defaultValue,c=r.finalValue,i=r.rule,d=r.onChange,_=r.onValueUpdate,u=i(l),v=Object(M.useRef)("initial"),k=i(y)?y:c,j=Object(M.useState)(k),g=L(j,2),C=g[0],E=g[1],K=u?l:C;!u&&v.current==="controlled"&&(K=c),v.current=u?"controlled":"uncontrolled";var S=v.current,J=function(q){typeof d=="function"&&d(q),S==="uncontrolled"&&E(q)};return Object(M.useEffect)(function(){S==="uncontrolled"&&E(K),typeof _=="function"&&_(K)},[S,K]),[K,J,v.current]},R=e("./node_modules/react/jsx-runtime.js");function A(n,r){return a(n)||p(n,r)||D(n,r)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,r){if(!!n){if(typeof n=="string")return O(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return O(n,r)}}function O(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function p(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function a(n){if(Array.isArray(n))return n}var s=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useId } from \\"../../useId\\";\\nimport { useUncontrolled } from \\"../useUncontrolled\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useUncontrolled\\",\\n};\\n\\ninterface CustomInputProps {\\n  label: string;\\n  value?: string;\\n  defaultValue?: string;\\n  onChange?: (nextValue: string) => void;\\n}\\n\\nconst CustomInput = ({\\n  label,\\n  value,\\n  defaultValue,\\n  onChange,\\n}: CustomInputProps) => {\\n  const id = useId();\\n  const [_value, handleChange] = useUncontrolled({\\n    value,\\n    defaultValue,\\n    finalValue: null,\\n    onChange,\\n    rule: (val) => typeof val === \\"string\\",\\n  });\\n\\n  return (\\n    <div style={{ padding: \\"1rem\\" }}>\\n      <label htmlFor={id}>{label}</label>\\n      <br />\\n      <input\\n        id={id}\\n        type=\\"text\\"\\n        value={_value}\\n        onChange={(e) => handleChange(e.target.value)}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Default = () => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":46},"endLoc":{"col":1,"line":64},"startBody":{"col":23,"line":46},"endBody":{"col":1,"line":64}}};
    
import React, { useState } from "react";

import { useId } from "../../useId";
import { useUncontrolled } from "../useUncontrolled";

export default {
  title: "@travelmakers-design/hooks/useUncontrolled",
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({
  label,
  value,
  defaultValue,
  onChange,
}: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === "string",
  });

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type="text"
        value={_value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState("controlled");

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput
        label="Controlled"
        value={controlledValue}
        onChange={setControlledValue}
      />
      <CustomInput
        label="Controlled (fixed value)"
        value="fixed"
        onChange={setControlledValue}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},s=`import React, { useState } from "react";

import { useId } from "../../useId";
import { useUncontrolled } from "../useUncontrolled";

export default {
  title: "@travelmakers-design/hooks/useUncontrolled",
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({
  label,
  value,
  defaultValue,
  onChange,
}: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === "string",
  });

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type="text"
        value={_value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState("controlled");

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput
        label="Controlled"
        value={controlledValue}
        onChange={setControlledValue}
      />
      <CustomInput
        label="Controlled (fixed value)"
        value="fixed"
        onChange={setControlledValue}
      />
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},m=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useId } from \\"../../useId\\";\\nimport { useUncontrolled } from \\"../useUncontrolled\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useUncontrolled\\",\\n};\\n\\ninterface CustomInputProps {\\n  label: string;\\n  value?: string;\\n  defaultValue?: string;\\n  onChange?: (nextValue: string) => void;\\n}\\n\\nconst CustomInput = ({\\n  label,\\n  value,\\n  defaultValue,\\n  onChange,\\n}: CustomInputProps) => {\\n  const id = useId();\\n  const [_value, handleChange] = useUncontrolled({\\n    value,\\n    defaultValue,\\n    finalValue: null,\\n    onChange,\\n    rule: (val) => typeof val === \\"string\\",\\n  });\\n\\n  return (\\n    <div style={{ padding: \\"1rem\\" }}>\\n      <label htmlFor={id}>{label}</label>\\n      <br />\\n      <input\\n        id={id}\\n        type=\\"text\\"\\n        value={_value}\\n        onChange={(e) => handleChange(e.target.value)}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Default = () => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":46},"endLoc":{"col":1,"line":64},"startBody":{"col":23,"line":46},"endBody":{"col":1,"line":64}}};
    
import React, { useState } from "react";

import { useId } from "../../useId";
import { useUncontrolled } from "../useUncontrolled";

export default {
  title: "@travelmakers-design/hooks/useUncontrolled",
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({
  label,
  value,
  defaultValue,
  onChange,
}: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === "string",
  });

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type="text"
        value={_value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState("controlled");

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput
        label="Controlled"
        value={controlledValue}
        onChange={setControlledValue}
      />
      <CustomInput
        label="Controlled (fixed value)"
        value="fixed"
        onChange={setControlledValue}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},o=function(r){var l=r.label,y=r.value,c=r.defaultValue,i=r.onChange,d=Object(G.a)(),_=h({value:y,defaultValue:c,finalValue:null,onChange:i,rule:function(g){return typeof g=="string"}}),u=A(_,2),v=u[0],k=u[1];return Object(R.jsxs)("div",{style:{padding:"1rem"},children:[Object(R.jsx)("label",{htmlFor:d,children:l}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{id:d,type:"text",value:v,onChange:function(g){return k(g.target.value)}})]})};o.displayName="CustomInput";var t=function(){var r=Object(M.useState)("controlled"),l=A(r,2),y=l[0],c=l[1];return Object(R.jsxs)("div",{style:{padding:20},children:[Object(R.jsx)(o,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(R.jsx)(o,{label:"Controlled",value:y,onChange:c}),Object(R.jsx)(o,{label:"Controlled (fixed value)",value:"fixed",onChange:c})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
  const [controlledValue, setControlledValue] = useState("controlled");

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput
        label="Controlled"
        value={controlledValue}
        onChange={setControlledValue}
      />
      <CustomInput
        label="Controlled (fixed value)"
        value="fixed"
        onChange={setControlledValue}
      />
    </div>
  );
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e.n(N),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(V),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),F=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(F),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(H),M=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(M),L=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(L),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(P),T=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(T),h=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(h),A=e("./node_modules/core-js/modules/es.array.from.js"),w=e.n(A),D=e("./node_modules/react/index.js"),O=e.n(D),p=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,j,g;try{for(_=_.call(i);!(v=(j=_.next()).done)&&(u.push(j.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect, useState } from \\"react\\";\\n\\nimport { useUpdateEffect } from \\"../useUpdateEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useUpdateEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},l=`import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect, useState } from \\"react\\";\\n\\nimport { useUpdateEffect } from \\"../useUpdateEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useUpdateEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var c=function(){var d=Object(D.useState)(""),_=f(d,2),u=_[0],v=_[1];return Object(D.useEffect)(function(){console.log("useEffect:",u)},[u]),Object(p.a)(function(){console.log("useUpdateEffect:",u)},[u]),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",onChange:function(j){return v(j.target.value)}})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return V});var N=e("./node_modules/react/index.js"),U=e.n(N),V=function(z,Z){var F=Object(N.useRef)(!0);Object(N.useEffect)(function(){if(!F.current)return z();F.current=!1},Z)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,b,e){"use strict";e.d(b,"c",function(){return M}),e.d(b,"d",function(){return G}),e.d(b,"b",function(){return L}),e.d(b,"a",function(){return P});var N=e("./node_modules/react/index.js"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),te=e("./node_modules/react/jsx-runtime.js"),z=function(T){var x=T.styles,h=M();return Object(te.jsx)(V.a,{styles:Object(V.b)(x(h))})};z.displayName="Global";var Z={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},F=function(){return Object(te.jsx)(V.a,{styles:Z})};F.displayName="NormalizeCSS";var ee=e("./node_modules/core-js/modules/es.array.reduce.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/core-js/modules/es.object.assign.js");function H(I,T){return T?Object.keys(I).reduce(function(x,h){if(h==="headings"&&T.headings){var R=T.headings?Object.keys(I.headings).reduce(function(A,w){return A[w]=Object.assign({},I.headings[w],T.headings[w]),A},{}):I.headings;return Object.assign({},x,{headings:Object.assign({},I.headings,T.headings,R)})}return x[h]=typeof T[h]=="object"?Object.assign({},I[h],T[h]):T[h]||I[h],x},{}):I}var W=Object(N.createContext)({theme:U.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function M(){var I;return((I=Object(N.useContext)(W))===null||I===void 0?void 0:I.theme)||U.a}function G(){var I;return((I=Object(N.useContext)(W))===null||I===void 0?void 0:I.styles)||{}}function L(){var I;return((I=Object(N.useContext)(W))===null||I===void 0?void 0:I.emotionOptions)||{key:"co",prepend:!0}}var X=function(){return Object(te.jsx)(z,{styles:function(x){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:x.fontFamily,backgroundColor:x.colorScheme==="dark"?x.colors.black:x.colors.white,color:x.colorScheme==="dark"?x.colors.white:x.colors.black,lineHeight:x.lineHeight,fontSizes:x.fontSizes.b3}}}})};X.displayName="GlobalStyles";var P=function(T){var x=T.theme,h=T.styles,R=h===void 0?{}:h,A=T.emotionOptions,w=T.withNormalizeCSS,D=w===void 0?!1:w,O=T.withGlobalStyles,p=O===void 0?!1:O,a=T.children;return Object(te.jsxs)(W.Provider,{value:{theme:H(U.a,x),styles:R,emotionOptions:A},children:[D&&Object(te.jsx)(F,{}),p&&Object(te.jsx)(X,{}),a]})};P.displayName="TmProvider",P.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,b,e){"use strict";e.d(b,"b",function(){return _e}),e.d(b,"a",function(){return ge});var N=e("./node_modules/core-js/modules/es.object.keys.js"),U={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},V={primary:[U.navy1,U.navy1,U.navy2],secondary:[U.green2,U.green2,U.green1],tertiary:[U.white,U.white,U.gray6]},te={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},z={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Z={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},F={small:2,medium:4,large:8,round:100,circular:"50%"},ee={xsmall:4,small:8,medium:16,large:24,xlarge:40},Q={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},B={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},H={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},W={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},M=e("./node_modules/core-js/modules/es.object.assign.js"),G=function(ne){for(var se="",me=1;me<ne.length-1;me+=1)se+=ne[me]+" "+me/(ne.length-1)*100+"%, ";return ne[0]+" 0%, "+se+ne[ne.length-1]+" 100%"},L=function(ne){for(var se=arguments.length,me=new Array(se>1?se-1:0),je=1;je<se;je++)me[je-1]=arguments[je];return"linear-gradient("+ne+"deg, "+G(me)+")"},X=function(){for(var ne=arguments.length,se=new Array(ne),me=0;me<ne;me++)se[me]=arguments[me];return"radial-gradient(circle, "+G(se)+")"},P=function(ne){return typeof ne.size=="number"?ne.size:ne.sizes[ne.size]||ne.size||ne.sizes.medium},I=function(ne){return function(se){return"@media (min-width: "+(P({size:se,sizes:ne.breakpoints})+1)+"px)"}},T=function(ne){return function(se){return"@media (max-width: "+P({size:se,sizes:ne.breakpoints})+"px)"}},x=e("./node_modules/core-js/modules/es.string.replace.js"),h=e("./node_modules/core-js/modules/es.regexp.exec.js"),R=e("./node_modules/core-js/modules/es.number.is-nan.js"),A=e("./node_modules/core-js/modules/es.number.constructor.js"),w=e("./node_modules/core-js/modules/es.parse-int.js"),D=e("./node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/core-js/modules/es.string.split.js"),p=e("./node_modules/core-js/modules/es.string.starts-with.js"),a=e("./node_modules/core-js/modules/es.array.is-array.js"),s=e("./node_modules/core-js/modules/es.symbol.js"),f=e("./node_modules/core-js/modules/es.symbol.description.js"),m=e("./node_modules/core-js/modules/es.object.to-string.js"),o=e("./node_modules/core-js/modules/es.symbol.iterator.js"),t=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),y=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function i(ue,ne){return k(ue)||v(ue,ne)||_(ue,ne)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(ue,ne){if(!!ue){if(typeof ue=="string")return u(ue,ne);var se=Object.prototype.toString.call(ue).slice(8,-1);if(se==="Object"&&ue.constructor&&(se=ue.constructor.name),se==="Map"||se==="Set")return Array.from(ue);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return u(ue,ne)}}function u(ue,ne){(ne==null||ne>ue.length)&&(ne=ue.length);for(var se=0,me=new Array(ne);se<ne;se++)me[se]=ue[se];return me}function v(ue,ne){var se=ue==null?null:typeof Symbol!="undefined"&&ue[Symbol.iterator]||ue["@@iterator"];if(se!=null){var me=[],je=!0,be=!1,Oe,De;try{for(se=se.call(ue);!(je=(Oe=se.next()).done)&&(me.push(Oe.value),!(ne&&me.length===ne));je=!0);}catch(Se){be=!0,De=Se}finally{try{!je&&se.return!=null&&se.return()}finally{if(be)throw De}}return me}}function k(ue){if(Array.isArray(ue))return ue}var j=function(ne){var se=ne.replace("#","");return typeof se=="string"&&se.length===6&&!Number.isNaN(Number("0x"+se))},g=function(ne){var se=ne.replace("#",""),me=parseInt(se,16),je=me>>16&255,be=me>>8&255,Oe=me&255;return{r:je,g:be,b:Oe,a:1}},C=function(ne){var se=ne.replace(/[^0-9,.]/g,"").split(",").map(Number),me=i(se,4),je=me[0],be=me[1],Oe=me[2],De=me[3];return{r:je,g:be,b:Oe,a:De||1}},E=function(ne){return j(ne)?g(ne):ne.startsWith("rgb")?C(ne):{r:0,g:0,b:0,a:1}},K=function(ne,se){if(typeof ne!="string"||se>1||se<0)return"rgba(0, 0, 0, 1)";var me=E(ne),je=me.r,be=me.g,Oe=me.b;return"rgba("+je+", "+be+", "+Oe+", "+se+")"},S=function(ne,se){var me=E(ne),je=me.r,be=me.g,Oe=me.b,De=me.a,Se=1-se,Te=function(Le){return Math.round(Le*Se)};return"rgba("+Te(je)+", "+Te(be)+", "+Te(Oe)+", "+De+")"},J=function(ne,se){var me=E(ne),je=me.r,be=me.g,Oe=me.b,De=me.a,Se=function(Ae){return Math.round(Ae+(255-Ae)*se)};return"rgba("+Se(je)+", "+Se(be)+", "+Se(Oe)+", "+De+")"},$=function(ne){return ne*8},q={linearGradient:L,radialGradient:X,smallerThan:T,largerThan:I,rgba:K,size:P,darken:S,lighten:J,spacing:$},ae=function(ne){return Object.assign({},ne,{fn:{largerThan:q.largerThan(ne),smallerThan:q.smallerThan(ne),radialGradient:q.radialGradient,linearGradient:q.linearGradient,rgba:q.rgba,size:q.size,lighten:q.lighten,darken:q.darken,spacing:q.spacing}})},ye=Object.keys(V),de=Object.keys(U),le=["xsmall","small","medium","large","xlarge"],_e=function(ne){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ne.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:U.black,colors:U,palettes:V,shadows:te,fontSizes:z,lineHeights:Z,radius:F,spacing:ee,breakpoints:Q,headings:B,opacity:H,zIndex:W,extra:{}},ge=ae(pe)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return p});var N=e("./node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/core-js/modules/es.array.for-each.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.array.from.js");function P(a,s){return R(a)||h(a,s)||T(a,s)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(a,s){if(!!a){if(typeof a=="string")return x(a,s);var f=Object.prototype.toString.call(a).slice(8,-1);if(f==="Object"&&a.constructor&&(f=a.constructor.name),f==="Map"||f==="Set")return Array.from(a);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return x(a,s)}}function x(a,s){(s==null||s>a.length)&&(s=a.length);for(var f=0,m=new Array(s);f<s;f++)m[f]=a[f];return m}function h(a,s){var f=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(f!=null){var m=[],o=!0,t=!1,n,r;try{for(f=f.call(a);!(o=(n=f.next()).done)&&(m.push(n.value),!(s&&m.length===s));o=!0);}catch(l){t=!0,r=l}finally{try{!o&&f.return!=null&&f.return()}finally{if(t)throw r}}return m}}function R(a){if(Array.isArray(a))return a}function A(a){var s={};return Object.keys(a).forEach(function(f){var m=P(a[f],2),o=m[0],t=m[1];s[o]=t}),s}var w=e("./node_modules/core-js/modules/es.array.reduce.js");function D(a,s,f){return Object.keys(s).reduce(function(m,o){return m[o]=a(s[o],f?"tm-"+f+"-"+o:null),m},{})}var O=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function p(a){var s=typeof a=="function"?a:function(){return a};function f(m,o){var t=Object(te.c)(),n=Object(te.d)()[o==null?void 0:o.name],r=Object(O.a)(),l=r.css,y=r.cx,c=0;function i(j){return c+=1,"tm-ref_"+(j||"")+"_"+c}var d=s(t,m,i),_=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(t):(o==null?void 0:o.overrideStyles)||{},u=typeof n=="function"?n(t):n||{},v=typeof(o==null?void 0:o.co)=="function"?o.co(t):o==null?void 0:o.co,k=A(Object.keys(d).map(function(j){var g=y(l(d[j]),l(u[j]),l(_[j]),l(v));return[j,g]}));return{classes:D(y,k,o==null?void 0:o.name),cx:y,theme:t}}return f}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return k});var N=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/clsx/dist/clsx.m.js"),G=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),L=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),P=e("./node_modules/core-js/modules/es.array.map.js"),I=e("./node_modules/react/index.js");function T(j){return A(j)||R(j)||h(j)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(j,g){if(!!j){if(typeof j=="string")return w(j,g);var C=Object.prototype.toString.call(j).slice(8,-1);if(C==="Object"&&j.constructor&&(C=j.constructor.name),C==="Map"||C==="Set")return Array.from(j);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return w(j,g)}}function R(j){if(typeof Symbol!="undefined"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}function A(j){if(Array.isArray(j))return w(j)}function w(j,g){(g==null||g>j.length)&&(g=j.length);for(var C=0,E=new Array(g);C<g;C++)E[C]=j[C];return E}function D(j,g){var C=Object(I.useRef)();return(!C.current||g.length!==C.current.prevDeps.length||C.current.prevDeps.map(function(E,K){return E===g[K]}).indexOf(!1)>=0)&&(C.current={v:j(),prevDeps:T(g)}),C.current.v}var O=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),p=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/react/jsx-runtime.js"),s=function(){var j;function g(C){return j===void 0&&(j=Object(O.a)(C||{key:"co",prepend:!0})),j}return{getCache:g}}(),f=s.getCache,m=Object(I.createContext)(void 0);function o(){var j=Object(p.b)();return Object(I.useContext)(m)||f(j)}function t(j){var g=j.children,C=j.value;return Object(a.jsx)(m.Provider,{value:C,children:g})}t.displayName="CacheProvider";function n(j,g){return i(j)||c(j,g)||l(j,g)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(j,g){if(!!j){if(typeof j=="string")return y(j,g);var C=Object.prototype.toString.call(j).slice(8,-1);if(C==="Object"&&j.constructor&&(C=j.constructor.name),C==="Map"||C==="Set")return Array.from(j);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return y(j,g)}}function y(j,g){(g==null||g>j.length)&&(g=j.length);for(var C=0,E=new Array(g);C<g;C++)E[C]=j[C];return E}function c(j,g){var C=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(C!=null){var E=[],K=!0,S=!1,J,$;try{for(C=C.call(j);!(K=(J=C.next()).done)&&(E.push(J.value),!(g&&E.length===g));K=!0);}catch(q){S=!0,$=q}finally{try{!K&&C.return!=null&&C.return()}finally{if(S)throw $}}return E}}function i(j){if(Array.isArray(j))return j}var d="ref";function _(j){var g;if(j.length!==1)return{args:j,ref:g};var C=n(j,1),E=C[0];if(!(E instanceof Object))return{args:j,ref:g};if(!(d in E))return{args:j,ref:g};g=E[d];var K=Object.assign({},E);return delete K[d],{args:[K],ref:g}}var u=function(){function j(C,E,K){var S=[],J=Object(L.a)(C,S,K);return S.length<2?K:J+E(S)}function g(C){var E=C.cache,K=function(){for(var $=arguments.length,q=new Array($),ae=0;ae<$;ae++)q[ae]=arguments[ae];var ye=_(q),de=ye.ref,le=ye.args,_e=Object(G.a)(le,E.registered);return Object(L.b)(E,_e,!1),E.key+"-"+_e.name+(de===void 0?"":" "+de)},S=function(){for(var $=arguments.length,q=new Array($),ae=0;ae<$;ae++)q[ae]=arguments[ae];return j(E.registered,K,Object(M.a)(q))};return{css:K,cx:S}}return{cssFactory:g}}(),v=u.cssFactory;function k(){var j=o();return D(function(){return v({cache:j})},[j])}},"./storybook-init-framework-entry.js":function(re,b,e){"use strict";e.r(b);var N=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,b){}},[[0,4,5]]]);
