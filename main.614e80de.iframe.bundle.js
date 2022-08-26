(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,j,e){"use strict";e.r(j);var w={};e.r(w),e.d(w,"parameters",function(){return l}),e.d(w,"decorators",function(){return c});var P=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.array.filter.js"),Y=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),z=e("./node_modules/core-js/modules/es.object.define-properties.js"),M=e("./node_modules/core-js/modules/es.object.define-property.js"),V=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),oe=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),S=e("./node_modules/react/jsx-runtime.js");function U(u,v){return s(u)||a(u,v)||b(u,v)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(u,v){if(!!u){if(typeof u=="string")return p(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return p(u,v)}}function p(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,h=new Array(v);k<v;k++)h[k]=u[k];return h}function a(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var h=[],g=!0,C=!1,T,K;try{for(k=k.call(u);!(g=(T=k.next()).done)&&(h.push(T.value),!(v&&h.length===v));g=!0);}catch(I){C=!0,K=I}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return h}}function s(u){if(Array.isArray(u))return u}var f=Object(E.createContext)(null),m=function(){var v=Object(E.useContext)(f);if(!v)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return v},o=function(v){var k=v.colorScheme,h=v.toggleColorScheme,g=v.children,C=Object(E.useState)("init"),T=U(C,2),K=T[0],I=T[1];return Object(E.useEffect)(function(){I("update")},[]),Object(S.jsx)(f.Provider,{value:{colorScheme:k,toggleColorScheme:h},children:g},K)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),n=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),l={layout:"fullscreen",docs:{theme:n.themes.light},darkMode:{current:"light"}};function y(u){var v=Object(r.useDarkMode)()?"dark":"light";return Object(S.jsx)(o,{colorScheme:v,toggleColorScheme:function(){},children:Object(S.jsx)(t.a,{theme:{colorScheme:v},withGlobalStyles:!0,withNormalizeCSS:!0,children:u.children})})}y.displayName="ThemeWrapper";var c=[function(u){return Object(S.jsx)(y,{children:u()})}];function i(u,v){var k=Object.keys(u);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(u);v&&(h=h.filter(function(g){return Object.getOwnPropertyDescriptor(u,g).enumerable})),k.push.apply(k,h)}return k}function d(u){for(var v=1;v<arguments.length;v++){var k=arguments[v]!=null?arguments[v]:{};v%2?i(Object(k),!0).forEach(function(h){_(u,h,k[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(k)):i(Object(k)).forEach(function(h){Object.defineProperty(u,h,Object.getOwnPropertyDescriptor(k,h))})}return u}function _(u,v,k){return v in u?Object.defineProperty(u,v,{value:k,enumerable:!0,configurable:!0,writable:!0}):u[v]=k,u}Object.keys(w).forEach(function(u){var v=w[u];switch(u){case"args":return Object(V.d)(v);case"argTypes":return Object(V.b)(v);case"decorators":return v.forEach(function(h){return Object(V.f)(h,!1)});case"loaders":return v.forEach(function(h){return Object(V.g)(h,!1)});case"parameters":return Object(V.h)(d({},v),!1);case"argTypesEnhancers":return v.forEach(function(h){return Object(V.c)(h)});case"argsEnhancers":return v.forEach(function(h){return Object(V.e)(h)});case"render":return Object(V.i)(v);case"globals":case"globalTypes":{var k={};return k[u]=v,Object(V.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(u+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,j,e){"use strict";(function(w){var P=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,P.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],w,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,j,e){var w={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function P(ne){var Y=W(ne);return e(Y)}function W(ne){if(!e.o(w,ne)){var Y=new Error("Cannot find module '"+ne+"'");throw Y.code="MODULE_NOT_FOUND",Y}return w[ne]}P.keys=function(){return Object.keys(w)},P.resolve=W,re.exports=P,P.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return a});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),M=e("./node_modules/core-js/modules/es.array.reduce.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Q=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),G=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),B={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},oe=function(f){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.caption,fontSize:f.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b3,fontSize:f.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b2,fontSize:f.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5}}},$=Object.keys(B).reduce(function(s,f){return s[f]=B[f].height,s},{}),R=function(f){return{display:f?"block":"inline-block",width:f?"100%":"auto"}},D=Object(V.a)(function(s,f,m){var o,t,n,r=f.variant,l=f.size,y=f.fullWidth,c=f.roundness,i=f.line,d=m("loading"),_=m("inner"),u=m("spinner"),v=r||s.colors.navy1;return{loading:(o={ref:d,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+_]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[v][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[v][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},t["&:disabled:not(."+d+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.white:s.palettes[v][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},n["&:disabled:not(."+d+")"]={color:Object(G.a)(s.palettes[v][1],s.opacity.opacity3),border:"1px solid "+Object(G.a)(s.palettes[v][1],s.opacity.opacity3)},n),root:Object.assign({},B[l],R(y),Object(Q.b)(s),oe(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),O=e("./node_modules/react/jsx-runtime.js"),A=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function E(s,f){if(s==null)return{};var m=S(s,f),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(f.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(m[o]=s[o]))}return m}function S(s,f){if(s==null)return{};var m={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(f.indexOf(t)>=0)&&(m[t]=s[t]);return m}var U=Object(N.forwardRef)(function(s,f){var m=s.children,o=s.component,t=s.size,n=t===void 0?"medium":t,r=s.variant,l=s.line,y=s.roundness,c=y===void 0?!1:y,i=s.fullWidth,d=i===void 0?!1:i,_=s.type,u=_===void 0?"button":_,v=s.disabled,k=v===void 0?!1:v,h=s.leftIcon,g=s.rightIcon,C=s.className,T=s.co,K=s.overrideStyles,I=E(s,A),J=Object(X.c)(),H=D({variant:r,size:n,fullWidth:d,roundness:c,line:l},{overrideStyles:K,name:"Button"}),q=H.classes,ae=H.cx;return Object(O.jsx)(Z.a,Object.assign({component:o||"button",ref:f,type:u,disabled:k,className:ae(q.root,q[l?"ghost":"solid"],C),co:T,onTouchStart:function(){}},I,{children:Object(O.jsxs)("div",{className:q.inner,children:[h&&Object(O.jsx)("span",{className:ae(q.icon,q.leftIcon),children:h}),Object(O.jsx)("span",{className:q.label,children:m}),g&&Object(O.jsx)("span",{className:ae(q.icon,q.rightIcon),children:g})]})}))});U.displayName="@travelmakers-design/core/Button";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}},x=`import {
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
`,b={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},p=j.default={title:"@travelmakers-design/core/Button",component:U,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"button",description:"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["submit","button","reset"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P.g,{}),Object(O.jsx)(P.f,{}),Object(O.jsx)(P.b,{}),Object(O.jsx)(P.d,{}),Object(O.jsx)(P.a,{story:P.c}),Object(O.jsx)(P.e,{})]})}},actions:{handles:["click button"]}}},a=function(f){return Object(O.jsx)("div",{style:{margin:"0 auto"},children:Object(O.jsx)(U,Object.assign({},f,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,j,e){"use strict";e.d(j,"a",function(){return D});var w=e("./node_modules/core-js/modules/es.object.keys.js"),P=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./node_modules/core-js/modules/es.string.small.js"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/constants/index.ts"),V=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Q={xsmall:{width:M.a.xsmall,height:M.a.xsmall},small:{width:M.a.small,height:M.a.small},medium:{width:M.a.medium,height:M.a.medium},large:{width:M.a.large,height:M.a.large}},L={xsmall:8,small:8,medium:16,large:16,xlarge:24},G=Object(Z.a)(function(O,A,E){var S,U,x,b=A.variant,p=A.size,a=A.line,s=E("loading"),f=E("inner"),m=E("spinner"),o=b||O.colors.navy1;return{loading:(S={ref:s,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},S["."+f]={opacity:0},S["."+m]={display:"flex"},S),solid:(U={backgroundColor:O.palettes[o][O.colorScheme==="light",0],color:O.colorScheme==="light"?O.colors.white:O.colors.black,"&:not(:disabled):hover":{backgroundColor:O.palettes[o][O.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:O.palettes[o][O.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[o][O.colorScheme==="light",0]}}},U["&:disabled:not(."+s+")"]={backgroundColor:O.colors.gray5,color:a?O.colors.black:O.colors.white},U),ghost:(x={backgroundColor:O.colors.transparent,border:"1px solid "+O.palettes[o][O.colorScheme==="light",0],color:O.palettes[o][O.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(V.a)(O.palettes[o][O.colorScheme==="light",0],O.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(V.a)(O.palettes[o][O.colorScheme==="light",1],O.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[o][O.colorScheme==="light",0]}}},x["&:disabled:not(."+s+")"]={backgroundColor:O.colors.gray5,color:a?O.colors.black:O.colors.white},x),root:Object.assign({},Q[p],Object(z.b)(O),{borderRadius:O.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:f,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:Q[p].width-L[p],height:Q[p].height-L[p]}},spinnerWrapper:{ref:m,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),oe=["children","component","size","variant","line","type","disabled","className","co","overrideStyles"];function $(O,A){if(O==null)return{};var E=R(O,A),S,U;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(O);for(U=0;U<x.length;U++)S=x[U],!(A.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,S)||(E[S]=O[S]))}return E}function R(O,A){if(O==null)return{};var E={},S=Object.keys(O),U,x;for(x=0;x<S.length;x++)U=S[x],!(A.indexOf(U)>=0)&&(E[U]=O[U]);return E}var D=Object(Y.forwardRef)(function(O,A){var E=O.children,S=O.component,U=O.size,x=U===void 0?"medium":U,b=O.variant,p=O.line,a=O.type,s=a===void 0?"button":a,f=O.disabled,m=f===void 0?!1:f,o=O.className,t=O.co,n=O.overrideStyles,r=$(O,oe),l=G({variant:b,size:x,line:p},{overrideStyles:n,name:"Button"}),y=l.classes,c=l.cx;return Object(B.jsx)(X.a,Object.assign({component:S||"button",className:c(y.root,y[p?"ghost":"solid"],o),type:s,disabled:m,ref:A,onTouchStart:function(){},co:t},r,{children:Object(B.jsx)("div",{className:y.inner,children:E})}))});D.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return $});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),N=e("./node_modules/react/index.js"),Z=e("./node_modules/react/jsx-runtime.js"),z=function(D){return Object(Z.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D,{children:Object(Z.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};z.displayName="CloseIcon",z.displayName="@travelmakers-design/core/CloseIcon";var M=["size","variant"];function V(R,D){if(R==null)return{};var O=Q(R,D),A,E;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(R);for(E=0;E<S.length;E++)A=S[E],!(D.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,A)||(O[A]=R[A]))}return O}function Q(R,D){if(R==null)return{};var O={},A=Object.keys(R),E,S;for(S=0;S<A.length;S++)E=A[S],!(D.indexOf(E)>=0)&&(O[E]=R[E]);return O}var L=Object(N.forwardRef)(function(R,D){var O=R.size,A=O===void 0?"medium":O,E=R.variant,S=E===void 0?"primary":E,U=V(R,M);return Object(Z.jsx)(X.a,Object.assign({size:A,variant:S,ref:D},U,{children:Object(Z.jsx)(z,{})}))});L.displayName="@travelmakers-design/core/CloseButton";var G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":81},"endLoc":{"col":1,"line":83},"startBody":{"col":23,"line":81},"endBody":{"col":1,"line":83}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { CloseButton } from "../CloseButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
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
  return <CloseButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:89},endLoc:{col:1,line:91},startBody:{col:23,line:89},endBody:{col:1,line:91}}},G=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { CloseButton } from "../CloseButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
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
  return <CloseButton {...props} />;
};
`,B={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:83},startBody:{col:23,line:81},endBody:{col:1,line:83}}},oe=j.default={title:"@travelmakers-design/core/CloseButton",component:L,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":81},"endLoc":{"col":1,"line":83},"startBody":{"col":23,"line":81},"endBody":{"col":1,"line":83}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { CloseButton } from "../CloseButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/CloseButton",
  component: CloseButton,
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
  return <CloseButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:89},endLoc:{col:1,line:91},startBody:{col:23,line:89},endBody:{col:1,line:91}}}},docs:{page:function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(P.g,{}),Object(Z.jsx)(P.f,{}),Object(Z.jsx)(P.b,{}),Object(Z.jsx)(P.d,{}),Object(Z.jsx)(P.a,{story:P.c}),Object(Z.jsx)(P.e,{})]})}},actions:{handles:["click button"]}}},$=function(D){return Object(Z.jsx)(L,Object.assign({},D))};$.displayName="Default",$.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},$.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return V});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ne=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Y=e("./node_modules/react/index.js"),X=e.n(Y),N=e("./node_modules/react/jsx-runtime.js"),Z=e.n(N),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":81},"endLoc":{"col":1,"line":92},"startBody":{"col":23,"line":81},"endBody":{"col":1,"line":92}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconButton } from "../IconButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:89},endLoc:{col:1,line:100},startBody:{col:23,line:89},endBody:{col:1,line:100}}},z=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconButton } from "../IconButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
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
`,M={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:92},startBody:{col:23,line:81},endBody:{col:1,line:92}}};j.default={title:"@travelmakers-design/core/IconButton",component:ne.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":81},"endLoc":{"col":1,"line":92},"startBody":{"col":23,"line":81},"endBody":{"col":1,"line":92}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconButton } from "../IconButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/IconButton",
  component: IconButton,
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:89},endLoc:{col:1,line:100},startBody:{col:23,line:89},endBody:{col:1,line:100}}}},docs:{page:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(W.g,{}),Object(N.jsx)(W.f,{}),Object(N.jsx)(W.b,{}),Object(N.jsx)(W.d,{}),Object(N.jsx)(W.a,{story:W.c}),Object(N.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var V=function(L){var G=Object(N.jsx)("svg",{viewBox:"0 0 24 24",children:Object(N.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(N.jsx)(ne.a,Object.assign({},L,{children:G}))};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return h});var w=e("./node_modules/core-js/modules/es.array.map.js"),P=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),Q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/core-js/modules/es.array.index-of.js"),oe=e("./node_modules/core-js/modules/es.array.for-each.js"),$=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),R=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),O=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=Object(O.a)(function(g,C){var T=C.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:T?T in g.radius?g.radius[T]:T:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:g.colorScheme==="dark"?g.palettes.gray[2]:g.palettes.gray[8],backgroundColor:g.colorScheme==="dark"?g.palettes.gray[8]:g.palettes.gray[2],borderRadius:T?T in g.radius?g.radius[T]:T:0}}}),E=e("./node_modules/react/jsx-runtime.js"),S=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function U(g,C){return s(g)||a(g,C)||b(g,C)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(g,C){if(!!g){if(typeof g=="string")return p(g,C);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return p(g,C)}}function p(g,C){(C==null||C>g.length)&&(C=g.length);for(var T=0,K=new Array(C);T<C;T++)K[T]=g[T];return K}function a(g,C){var T=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(T!=null){var K=[],I=!0,J=!1,H,q;try{for(T=T.call(g);!(I=(H=T.next()).done)&&(K.push(H.value),!(C&&K.length===C));I=!0);}catch(ae){J=!0,q=ae}finally{try{!I&&T.return!=null&&T.return()}finally{if(J)throw q}}return K}}function s(g){if(Array.isArray(g))return g}function f(g,C){if(g==null)return{};var T=m(g,C),K,I;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(g);for(I=0;I<J.length;I++)K=J[I],!(C.indexOf(K)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,K)||(T[K]=g[K]))}return T}function m(g,C){if(g==null)return{};var T={},K=Object.keys(g),I,J;for(J=0;J<K.length;J++)I=K[J],!(C.indexOf(I)>=0)&&(T[I]=g[I]);return T}var o=null,t="loadImage",n=function(C,T){C.forEach(function(K){K.isIntersecting&&(T.unobserve(K.target),K.target.dispatchEvent(new CustomEvent(t)))})},r=Object(R.forwardRef)(function(g,C){var T=g.lazy,K=g.threshold,I=K===void 0?.5:K,J=g.placeholder,H=g.src,q=g.radius,ae=g.width,ye=ae===void 0?"100%":ae,de=g.height,le=de===void 0?"auto":de,_e=g.alt,pe=g.fit,ge=g.style,ue=g.className,ee=g.co,se=g.overrideStyles,me=f(g,S),je=A({radius:q},{overrideStyles:se,name:"Image"}),be=je.classes,Oe=je.cx,De=Object(R.useState)(!1),Se=U(De,2),xe=Se[0],Ae=Se[1],Le=Object(R.useState)(!1),Re=U(Le,2),Me=Re[0],Pe=Re[1],te=Object(R.useRef)(null),F={width:ye,height:le,objectFit:pe};return Object(R.useImperativeHandle)(C,function(){return te.current}),Object(R.useEffect)(function(){if(!T){Pe(!0);return}var ie=function(){return Pe(!0)},ce=te.current;return ce&&ce.addEventListener(t,ie),function(){ce&&ce.removeEventListener(t,ie)}},[T]),Object(R.useEffect)(function(){!T||(o=new IntersectionObserver(n,{threshold:I}),te.current&&o.observe(te.current))},[T,I]),Object(E.jsxs)(D.a,Object.assign({className:Oe(be.root,ue),co:ee},me,{children:[Object(E.jsx)("img",{ref:te,src:H,alt:_e,className:be.image,style:F,onLoad:function(){return Ae(!0)}}),(!xe||T&&!Me)&&J&&Object(E.jsx)("div",{className:be.placeholder,title:_e,children:J})]}))});r.displayName="@travelmakers-design/core/Image";function l(g){return d(g)||i(g)||c(g)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(g,C){if(!!g){if(typeof g=="string")return _(g,C);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return _(g,C)}}function i(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function d(g){if(Array.isArray(g))return _(g)}function _(g,C){(C==null||C>g.length)&&(C=g.length);for(var T=0,K=new Array(C);T<C;T++)K[T]=g[T];return K}var u=`
    
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
`,v={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},k=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}}}},title:"@travelmakers-design/core/Image",component:r,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},h=function(C){return Object(E.jsx)(E.Fragment,{children:l(new Array(10)).map(function(T,K){return Object(E.jsx)("div",{children:Object(E.jsx)(r,Object.assign({placeholder:Object(E.jsx)("div",{children:"Placeholder"})},C))},K)})})};h.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},h.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return U}),e.d(j,"WithIcon",function(){return x}),e.d(j,"WithRightSection",function(){return b}),e.d(j,"Textarea",function(){return p});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.string.small.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),M=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V=e("./packages/travelmakers-design-core/src/constants/index.ts"),Q=function(s,f){return s in f?f[s]:s},L={xsmall:12,small:14,medium:14,large:14,xlarge:16},G=Object(z.a)(function(a,s){var f=s.size,m=s.multiline,o=s.radius,t=s.invalid,n=a.palettes.red[a.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(M.b)(a),{height:m?"auto":Q(f,V.a),WebkitTapHighlightColor:"transparent",lineHeight:m?a.lineHeight:Q(f,V.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:Q(f,L),width:"100%",color:a.colorScheme==="dark"?a.palettes.gray[0]:a.palettes.gray[9],display:"block",textAlign:"left",minHeight:Q(f,V.a),paddingLeft:Q(f,V.a)/3,paddingRight:Q(f,V.a)/3,borderRadius:Q(o,a.radius),border:"1px solid "+(a.colorScheme==="dark"?a.palettes.gray[6]:a.palettes.gray[2]),backgroundColor:a.colorScheme==="dark"?a.palettes.gray[8]:a.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5],borderColor:a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(a.colorScheme==="dark",a.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:Q(f,V.a)+"px !important"},invalid:{color:n+" !important",borderColor:n+" !important","&::placeholder":{opacity:1,color:n+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:Q(f,V.a),color:t?a.palettes.red[a.colorScheme==="dark"?5:6]:a.colorScheme==="dark"?a.palettes.gray[1]:a.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),oe=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function $(a,s){if(a==null)return{};var f=R(a,s),m,o;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(o=0;o<t.length;o++)m=t[o],!(s.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,m)||(f[m]=a[m]))}return f}function R(a,s){if(a==null)return{};var f={},m=Object.keys(a),o,t;for(t=0;t<m.length;t++)o=m[t],!(s.indexOf(o)>=0)&&(f[o]=a[o]);return f}var D=Object(N.forwardRef)(function(a,s){var f,m=a.component,o=a.size,t=o===void 0?"medium":o,n=a.radius,r=n===void 0?"medium":n,l=a.icon,y=a.rightSectionWidth,c=y===void 0?36:y,i=a.rightSection,d=a.rightSectionProps,_=d===void 0?{}:d,u=a.wrapperProps,v=a.invalid,k=v===void 0?!1:v,h=a.required,g=h===void 0?!1:h,C=a.disabled,T=C===void 0?!1:C,K=a.multiline,I=K===void 0?!1:K,J=a.className,H=a.style,q=a.co,ae=a.overrideStyles,ye=a.__staticSelector,de=ye===void 0?"Input":ye,le=$(a,oe),_e=Object(X.c)(),pe=G({radius:r,size:t,multiline:I,invalid:k},{overrideStyles:ae,name:de}),ge=pe.classes,ue=pe.cx,ee=m||"input";return Object(B.jsxs)(Z.a,Object.assign({className:ue(ge.wrapper,J),co:q,style:H},u,{children:[l&&Object(B.jsx)("div",{className:ge.icon,children:l}),Object(B.jsx)(ee,Object.assign({},le,{ref:s,className:ue(ge.input,(f={},f[ge.withIcon]=l,f[ge.invalid]=k,f[ge.disabled]=T,f)),required:g,disabled:T,style:{paddingRight:i?c:_e.spacing.small}})),i&&Object(B.jsx)("div",Object.assign({},_,{style:Object.assign({},_.style,{width:c}),className:ue(ge.rightSection,_.className),children:i}))]}))});D.displayName="@travelmakers-design/core/Input";var O=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,A={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},WithIcon:{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},WithRightSection:{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},Textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}},O=`import { Input } from "../Input";
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
`,A={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},E=j.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},"with-icon":{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},"with-right-section":{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}}}},title:"@travelmakers-design/core/Input",component:D,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},S=function(){return Object(B.jsx)("svg",{viewBox:"0 0 24 24",children:Object(B.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};S.displayName="Icon";var U=function(s){return Object(B.jsx)("div",{style:{width:400,padding:24},children:Object(B.jsx)(D,Object.assign({},s))})};U.displayName="Default";var x=function(s){return Object(B.jsx)("div",{style:{width:400,padding:24},children:Object(B.jsx)(D,Object.assign({icon:Object(B.jsx)(S,{})},s))})};x.displayName="WithIcon";var b=function(s){return Object(B.jsx)("div",{style:{width:400,padding:24},children:Object(B.jsx)(D,Object.assign({icon:Object(B.jsx)(S,{}),rightSectionWidth:50},s))})};b.displayName="WithRightSection";var p=function(s){return Object(B.jsx)("div",{style:{width:400,padding:24},children:Object(B.jsx)(D,Object.assign({component:"textarea",multiline:!0},s))})};p.displayName="Textarea",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},U.parameters),x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return R});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Z=e("./packages/travelmakers-design-core/src/constants/index.ts"),z=Object(N.a)(function(D,O){var A=O.size,E=O.color,S=E===void 0?D.colorScheme==="light"?D.colors.black:D.colors.white:E in D.palettes?(D.colorScheme==="light",D.palettes[E][0]):E in D.colors?D.colors[E]:E;return{root:{position:"relative",display:"inline-block",width:A in Z.a?Z.a[A]:A,height:A in Z.a?Z.a[A]:A,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:S},circle:{fill:S}}}}),M=e("./node_modules/react/jsx-runtime.js"),V=["size","color","className","co","overrideStyles"];function Q(D,O){if(D==null)return{};var A=L(D,O),E,S;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(D);for(S=0;S<U.length;S++)E=U[S],!(O.indexOf(E)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,E)||(A[E]=D[E]))}return A}function L(D,O){if(D==null)return{};var A={},E=Object.keys(D),S,U;for(U=0;U<E.length;U++)S=E[U],!(O.indexOf(S)>=0)&&(A[S]=D[S]);return A}var G=Object(P.forwardRef)(function(D,O){var A=D.size,E=A===void 0?"medium":A,S=D.color,U=D.className,x=D.co,b=D.overrideStyles,p=Q(D,V),a=z({size:E,color:S},{overrideStyles:b,name:"Spinner"}),s=a.classes,f=a.cx,m=Object(M.jsx)("i",{className:s.inner,children:Object(M.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(M.jsxs)("g",{transform:"translate(1 1)",children:[Object(M.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(M.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(M.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(M.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(M.jsx)(X.a,Object.assign({ref:O,className:f(s.root,U),co:x},p,{children:m}))});G.displayName="@travelmakers-design/core/Spinner";var B=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,oe={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},B=`import React from "react";
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
`,oe={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},$=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/core/Spinner",component:G,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}},R=function(O){return Object(M.jsx)(G,Object.assign({},O))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return a});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),M=e("./node_modules/core-js/modules/es.array.reduce.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Q=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),G=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),B={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},oe=function(f){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.caption,fontSize:f.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b3,fontSize:f.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.b2,fontSize:f.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:f.lineHeights.h5,fontSize:f.fontSizes.h5}}},$=Object.keys(B).reduce(function(s,f){return s[f]=B[f].height,s},{}),R=function(f){return{display:f?"block":"inline-block",width:f?"100%":"auto"}},D=Object(V.a)(function(s,f,m){var o,t,n,r=f.variant,l=f.size,y=f.fullWidth,c=f.roundness,i=f.line,d=m("loading"),_=m("inner"),u=m("spinner"),v=r||s.colors.navy1;return{loading:(o={ref:d,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+_]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[v][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[v][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},t["&:disabled:not(."+d+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[v][s.colorScheme==="light",0],color:v==="white"?s.colors.white:s.palettes[v][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[v][s.colorScheme==="light",0]}}},n["&:disabled:not(."+d+")"]={color:Object(G.a)(s.palettes[v][1],s.opacity.opacity3),border:"1px solid "+Object(G.a)(s.palettes[v][1],s.opacity.opacity3)},n),root:Object.assign({},B[l],R(y),Object(Q.b)(s),oe(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),O=e("./node_modules/react/jsx-runtime.js"),A=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function E(s,f){if(s==null)return{};var m=S(s,f),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(f.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(m[o]=s[o]))}return m}function S(s,f){if(s==null)return{};var m={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(f.indexOf(t)>=0)&&(m[t]=s[t]);return m}var U=Object(N.forwardRef)(function(s,f){var m=s.children,o=s.component,t=s.size,n=t===void 0?"medium":t,r=s.variant,l=s.line,y=s.roundness,c=y===void 0?!1:y,i=s.fullWidth,d=i===void 0?!1:i,_=s.type,u=_===void 0?"button":_,v=s.disabled,k=v===void 0?!1:v,h=s.leftIcon,g=s.rightIcon,C=s.className,T=s.co,K=s.overrideStyles,I=E(s,A),J=Object(X.c)(),H=D({variant:r,size:n,fullWidth:d,roundness:c,line:l},{overrideStyles:K,name:"Button"}),q=H.classes,ae=H.cx;return Object(O.jsx)(Z.a,Object.assign({component:o||"button",ref:f,type:u,disabled:k,className:ae(q.root,q[l?"ghost":"solid"],C),co:T,onTouchStart:function(){}},I,{children:Object(O.jsxs)("div",{className:q.inner,children:[h&&Object(O.jsx)("span",{className:ae(q.icon,q.leftIcon),children:h}),Object(O.jsx)("span",{className:q.label,children:m}),g&&Object(O.jsx)("span",{className:ae(q.icon,q.rightIcon),children:g})]})}))});U.displayName="@travelmakers-design/core/TextButton";var x=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}},x=`import {
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
`,b={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},p=j.default={title:"@travelmakers-design/core/TextButton",component:U,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"button",description:"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["submit","button","reset"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:140},endLoc:{col:1,line:146},startBody:{col:23,line:140},endBody:{col:1,line:146}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P.g,{}),Object(O.jsx)(P.f,{}),Object(O.jsx)(P.b,{}),Object(O.jsx)(P.d,{}),Object(O.jsx)(P.a,{story:P.c}),Object(O.jsx)(P.e,{})]})}},actions:{handles:["click button"]}}},a=function(f){return Object(O.jsx)("div",{style:{margin:"0 auto"},children:Object(O.jsx)(U,Object.assign({},f,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,j,e){"use strict";e.d(j,"a",function(){return U});var w=e("./node_modules/core-js/modules/es.object.keys.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.array.map.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e.n(V),L=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./node_modules/react/index.js"),oe=e.n(B),$=e("./node_modules/react/jsx-runtime.js"),R=e.n($),D=["component","className","style","co"];function O(x,b){if(x==null)return{};var p=A(x,b),a,s;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(x);for(s=0;s<f.length;s++)a=f[s],!(b.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,a)||(p[a]=x[a]))}return p}function A(x,b){if(x==null)return{};var p={},a=Object.keys(x),s,f;for(f=0;f<a.length;f++)s=a[f],!(b.indexOf(s)>=0)&&(p[s]=x[s]);return p}function E(x,b){return typeof x=="function"?x(b):x}function S(x,b){var p=Object(L.a)(),a=p.css,s=p.cx,f=Object(G.c)();return Array.isArray(x)?s(b,x.map(function(m){return a(E(m,f))})):s(b,a(E(x,f)))}var U=Object(B.forwardRef)(function(x,b){var p=x.component,a=x.className,s=x.style,f=x.co,m=O(x,D),o=p||"div";return Object($.jsx)(o,Object.assign({ref:b,className:S(f,a),style:s},m))});U.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},Z=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/View",component:Y.a};var M=function(){return Object(X.jsx)(Y.a,{co:function(L){return{width:100,height:100,backgroundColor:L.colors.gray3}}})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},M.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return w});var w={xsmall:24,small:28,medium:40,large:48,xlarge:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return f});var w=e("./node_modules/core-js/modules/es.string.replace.js"),P=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),ne=e("./node_modules/core-js/modules/es.number.constructor.js"),Y=e("./node_modules/core-js/modules/es.parse-int.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/core-js/modules/es.string.split.js"),Z=e("./node_modules/core-js/modules/es.string.starts-with.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.from.js");function O(m,o){return x(m)||U(m,o)||E(m,o)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(m,o){if(!!m){if(typeof m=="string")return S(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(m,o)}}function S(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function U(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function x(m){if(Array.isArray(m))return m}function b(m){var o=m.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function p(m){var o=m.replace("#",""),t=parseInt(o,16),n=t>>16&255,r=t>>8&255,l=t&255;return{r:n,g:r,b:l,a:1}}function a(m){var o=m.replace(/[^0-9,.]/g,"").split(",").map(Number),t=O(o,4),n=t[0],r=t[1],l=t[2],y=t[3];return{r:n,g:r,b:l,a:y||1}}function s(m){return b(m)?p(m):m.startsWith("rgb")?a(m):{r:0,g:0,b:0,a:1}}var f=function(o,t){var n=s(o),r=n.r,l=n.g,y=n.b;return"rgba("+r+", "+l+", "+y+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return Y});var w=e("./node_modules/core-js/modules/es.array.concat.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=function(N){var Z=Object(W.useRef)(N);return Object(W.useEffect)(function(){Z.current=N},[N]),Object(W.useMemo)(function(){return function(){for(var z,M=arguments.length,V=new Array(M),Q=0;Q<M;Q++)V[Q]=arguments[Q];return(z=Z.current)===null||z===void 0?void 0:z.call.apply(z,[Z].concat(V))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},Z=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var M=function(){var Q=Object(Y.a)(function(){alert("Click away from red box!")});return Object(X.jsx)("div",{children:Object(X.jsx)("div",{ref:Q,style:{width:100,height:100,backgroundColor:"red"}})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
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
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return f});var w=e("./node_modules/core-js/modules/es.array.slice.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.object.to-string.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.function.name.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.array.from.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S),x=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function b(m,o){var t=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!t){if(Array.isArray(m)||(t=p(m))||o&&m&&typeof m.length=="number"){t&&(m=t);var n=0,r=function(){};return{s:r,n:function(){return n>=m.length?{done:!0}:{done:!1,value:m[n++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,y=!1,c;return{s:function(){t=t.call(m)},n:function(){var d=t.next();return l=d.done,d},e:function(d){y=!0,c=d},f:function(){try{!l&&t.return!=null&&t.return()}finally{if(y)throw c}}}}function p(m,o){if(!!m){if(typeof m=="string")return a(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(m,o)}}function a(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}var s=["mousedown","touchstart"],f=function(o){var t=Object(S.useRef)(),n=Object(x.a)(o);return Object(S.useEffect)(function(){var r=function(d){var _=t.current;_&&!_.contains(d.target)&&n(d)},l=b(s),y;try{for(l.s();!(y=l.n()).done;){var c=y.value;document.addEventListener(c,r)}}catch(i){l.e(i)}finally{l.f()}return function(){var i=b(s),d;try{for(i.s();!(d=i.n()).done;){var _=d.value;document.removeEventListener(_,r)}}catch(u){i.e(u)}finally{i.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return o});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/web.timers.js");function B(t,n){return O(t)||D(t,n)||$(t,n)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(t,n){if(!!t){if(typeof t=="string")return R(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,n)}}function R(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function D(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function O(t){if(Array.isArray(t))return t}var A=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.timeout,l=r===void 0?2e3:r,y=Object(L.useState)(null),c=B(y,2),i=c[0],d=c[1],_=Object(L.useState)(!1),u=B(_,2),v=u[0],k=u[1],h=Object(L.useState)(null),g=B(h,2),C=g[0],T=g[1],K=function(q){clearTimeout(C),T(setTimeout(function(){return k(!1)},l)),k(q)},I=function(q){"clipboard"in navigator?navigator.clipboard.writeText(q).then(function(){return K(!0)}).catch(function(ae){return d(ae)}):d(new Error("useClipboard: navigator.clipboard is not supported"))},J=function(){k(!1),d(null),clearTimeout(C)};return{copy:I,reset:J,error:i,copied:v}},E=e("./node_modules/react/jsx-runtime.js");function S(t,n){return a(t)||p(t,n)||x(t,n)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,n){if(!!t){if(typeof t=="string")return b(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,n)}}function b(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function p(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
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
`,f={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},m=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},o=function(){var n=Object(L.useState)(""),r=S(n,2),l=r[0],y=r[1],c=A({timeout:3e3}),i=c.copy,d=c.copied;return Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{type:"text",onChange:function(u){return y(u.target.value)}}),Object(E.jsx)("button",{onClick:function(){return i(l)},children:"copy"}),Object(E.jsx)("span",{children:d&&"Copied!!"})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return z});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),ne=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},Y=e("./node_modules/react/jsx-runtime.js"),X=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,N={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},X=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},Z=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},z=function(){var V=ne();return Object(Y.jsx)("div",{children:Object(Y.jsx)("div",{children:V})})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},z.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),B=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function oe(n,r){return A(n)||O(n,r)||R(n,r)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(n,r){if(!!n){if(typeof n=="string")return D(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return D(n,r)}}function D(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function O(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function A(n){if(Array.isArray(n))return n}var E=function(r,l,y){var c=Object(B.a)(r,l),i=oe(c,2),d=i[0],_=i[1];return Object(G.a)(d,y),_},S=e("./node_modules/react/jsx-runtime.js");function U(n,r){return s(n)||a(n,r)||b(n,r)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,r){if(!!n){if(typeof n=="string")return p(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return p(n,r)}}function p(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function a(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function s(n){if(Array.isArray(n))return n}var f=`
    
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
`,m={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},o=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},t=function(){var r=Object(L.useState)(""),l=U(r,2),y=l[0],c=l[1],i=E(function(){alert("Updated!")},1e3,[y]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"text",onChange:function(_){return c(_.target.value)}}),Object(S.jsx)("button",{onClick:i,children:"Cancel"})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},Z=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var M=function(){var Q=Object(Y.a)();return Object(X.jsxs)("div",{children:[Math.random(),Object(X.jsx)("button",{onClick:Q,children:"Update"})]})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return o});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S);function x(t,n){return f(t)||s(t,n)||p(t,n)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function f(t){if(Array.isArray(t))return t}var m=function(n){return(n+1)%1e6},o=function(){var n=Object(S.useReducer)(m,0),r=x(n,2),l=r[1];return l}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/es.string.split.js"),B=e("./node_modules/core-js/modules/es.regexp.exec.js"),oe=e("./node_modules/core-js/modules/es.string.replace.js"),$=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.regexp.to-string.js"),D=e("./node_modules/core-js/modules/es.date.to-string.js");function O(_,u){var v=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!v){if(Array.isArray(_)||(v=A(_))||u&&_&&typeof _.length=="number"){v&&(_=v);var k=0,h=function(){};return{s:h,n:function(){return k>=_.length?{done:!0}:{done:!1,value:_[k++]}},e:function(K){function I(J){return K.apply(this,arguments)}return I.toString=function(){return K.toString()},I}(function(K){throw K}),f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,C=!1,T;return{s:function(){v=v.call(_)},n:function(){var I=v.next();return g=I.done,I},e:function(K){function I(J){return K.apply(this,arguments)}return I.toString=function(){return K.toString()},I}(function(K){C=!0,T=K}),f:function(){try{!g&&v.return!=null&&v.return()}finally{if(C)throw T}}}}function A(_,u){if(!!_){if(typeof _=="string")return E(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return E(_,u)}}function E(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,k=new Array(u);v<u;v++)k[v]=_[v];return k}var S={alt:1,ctrl:2,meta:4,shift:8},U={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},x={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},b=function(u){var v=u.key!==" "?u.key.toLowerCase():"space",k=0;return u.altKey&&(k+=S.alt),u.ctrlKey&&(k+=S.ctrl),u.metaKey&&(k+=S.meta),u.shiftKey&&(k+=S.shift),{modifiers:k,key:v}},p=function(u){var v=u.replace(/\s/g,"").toLowerCase().split("+"),k=0,h,g=O(v),C;try{for(g.s();!(C=g.n()).done;){var T=C.value;S[T]?k+=S[T]:S[x[T]]?k+=S[x[T]]:U[T]?(k+=S.shift,h=U[T]):x[T]?h=x[T]:h=T}}catch(K){g.e(K)}finally{g.f()}return{modifiers:k,key:h}},a=function(u,v){return u.modifiers===v.modifiers&&u.key===v.key},s=function(u){var v=Object(L.useMemo)(function(){return u.filter(function(I){return!I.global})},[u]),k=Object(L.useMemo)(function(){return u.filter(function(I){return I.global})},[u]),h=Object(L.useCallback)(function(I,J,H,q){var ae=O(I?k:v),ye;try{for(ae.s();!(ye=ae.n()).done;){var de=ye.value;if(a(p(de.combo),J)){var le;(le=de[H])===null||le===void 0||le.call(de,q)}}}catch(_e){ae.e(_e)}finally{ae.f()}},[v,k]),g=Object(L.useCallback)(function(I){h(!0,b(I),"onKeyDown",I)},[h]),C=Object(L.useCallback)(function(I){h(!0,b(I),"onKeyUp",I)},[h]),T=Object(L.useCallback)(function(I){h(!1,b(I.nativeEvent),"onKeyDown",I.nativeEvent)},[h]),K=Object(L.useCallback)(function(I){h(!1,b(I.nativeEvent),"onKeyUp",I.nativeEvent)},[h]);return Object(L.useEffect)(function(){return document.addEventListener("keydown",g),document.addEventListener("keyup",C),function(){document.removeEventListener("keydown",g),document.removeEventListener("keyup",C)}},[g,C]),{handleKeyDown:T,handleKeyUp:K}},f=e("./node_modules/react/jsx-runtime.js");function m(_,u){return l(_)||r(_,u)||t(_,u)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(_,u){if(!!_){if(typeof _=="string")return n(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return n(_,u)}}function n(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,k=new Array(u);v<u;v++)k[v]=_[v];return k}function r(_,u){var v=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(v!=null){var k=[],h=!0,g=!1,C,T;try{for(v=v.call(_);!(h=(C=v.next()).done)&&(k.push(C.value),!(u&&k.length===u));h=!0);}catch(K){g=!0,T=K}finally{try{!h&&v.return!=null&&v.return()}finally{if(g)throw T}}return k}}function l(_){if(Array.isArray(_))return _}var y=`
    
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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},i=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},d=function(){var u=Object(L.useRef)(null),v=Object(L.useState)(""),k=m(v,2),h=k[0],g=k[1],C=s([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){u.current.select()}},{combo:"shift+r",onKeyUp:function(){g("")}}]),T=C.handleKeyDown,K=C.handleKeyUp;return Object(f.jsx)("div",{children:Object(f.jsx)("input",{ref:u,type:"text",value:h,onChange:function(J){return g(J.target.value)},onKeyDown:T,onKeyUp:K})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return i});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(A),S=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(S),x=e("./node_modules/react/index.js"),b=e.n(x),p=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),a=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),s=e("./node_modules/react/jsx-runtime.js"),f=e.n(s);function m(d,_){return l(d)||r(d,_)||t(d,_)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(d,_){if(!!d){if(typeof d=="string")return n(d,_);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return n(d,_)}}function n(d,_){(_==null||_>d.length)&&(_=d.length);for(var u=0,v=new Array(_);u<_;u++)v[u]=d[u];return v}function r(d,_){var u=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],k=!0,h=!1,g,C;try{for(u=u.call(d);!(k=(g=u.next()).done)&&(v.push(g.value),!(_&&v.length===_));k=!0);}catch(T){h=!0,C=T}finally{try{!k&&u.return!=null&&u.return()}finally{if(h)throw C}}return v}}function l(d){if(Array.isArray(d))return d}var y=`
    
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
`,c={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var i=function(){var _=Object(a.a)(),u=m(_,2),v=u[0],k=u[1],h=Object(p.a)();return Object(x.useEffect)(function(){h()},[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{ref:k,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+v]})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return m});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S);function x(o,t){return f(o)||s(o,t)||p(o,t)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function f(o){if(Array.isArray(o))return o}var m=function(){var t=Object(S.useRef)(null),n=Object(S.useState)(!1),r=x(n,2),l=r[0],y=r[1],c=Object(S.useCallback)(function(){return y(!0)},[]),i=Object(S.useCallback)(function(){return y(!1)},[]);return Object(S.useEffect)(function(){var d=t.current;if(!!d)return d.addEventListener("mouseenter",c),d.addEventListener("mouseleave",i),function(){d.removeEventListener("mouseenter",c),d.removeEventListener("mouseleave",i)}},[t.current]),[l,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Z=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var M=function(){var Q=Object(Y.a)();return Object(X.jsx)("div",{children:Object(X.jsx)("div",{children:Q})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return o});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S);function x(t,n){return f(t)||s(t,n)||p(t,n)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function f(t){if(Array.isArray(t))return t}var m=0,o=function(n){var r=Object(S.useState)(n),l=x(r,2),y=l[0],c=l[1],i=n||y;return Object(S.useEffect)(function(){y==null&&(m+=1,c("tm-"+m))},[y]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return f});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),ne=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e("./node_modules/core-js/modules/es.function.name.js"),oe=e("./node_modules/core-js/modules/es.array.from.js");function $(m,o){return E(m)||A(m,o)||D(m,o)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(m,o){if(!!m){if(typeof m=="string")return O(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(m,o)}}function O(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function A(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function E(m){if(Array.isArray(m))return m}var S=["keypress","mousemove","touchmove","click","scroll"],U={events:S,initialState:!0},x=function(o,t){var n=Object.assign({},U,t),r=n.events,l=n.initialState,y=Object(P.useState)(l),c=$(y,2),i=c[0],d=c[1],_=Object(P.useRef)();return Object(P.useEffect)(function(){var u=function(){d(!1),_.current&&window.clearTimeout(_.current),_.current=window.setTimeout(function(){d(!0)},o)};return r.forEach(function(v){return document.addEventListener(v,u)}),function(){r.forEach(function(v){return document.removeEventListener(v,u)})}},[o]),i},b=e("./node_modules/react/jsx-runtime.js"),p=`
    
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},s=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},f=function(){var o=x(3e3);return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:["Idle: ",""+o]})})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return m});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function G(o,t){return D(o)||R(o,t)||oe(o,t)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(o,t){if(!!o){if(typeof o=="string")return $(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(o,t)}}function $(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function R(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function D(o){if(Array.isArray(o))return o}var O=function(t){var n=Object(L.useState)(null),r=G(n,2),l=r[0],y=r[1],c=Object(L.useRef)(),i=Object(L.useCallback)(function(d){if(c.current&&(c.current.disconnect(),c.current=null),d===null){y(null);return}c.current=new IntersectionObserver(function(_){var u=G(_,1),v=u[0];y(v)},t),c.current.observe(d)},[t==null?void 0:t.rootMargin,t==null?void 0:t.root,t==null?void 0:t.threshold]);return[i,l]},A=e("./node_modules/react/jsx-runtime.js");function E(o,t){return p(o)||b(o,t)||U(o,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(o,t){if(!!o){if(typeof o=="string")return x(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(o,t)}}function x(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function b(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var a=`
    
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},f=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},m=function(){var t=Object(L.useRef)(null),n=O({root:t.current,threshold:.5}),r=E(n,2),l=r[0],y=r[1];return Object(A.jsx)("div",{ref:t,style:{width:300,height:300,overflowY:"scroll"},children:Object(A.jsx)("div",{style:{height:500},children:Object(A.jsx)("div",{ref:l,style:{marginTop:290,height:50,backgroundColor:y!=null&&y.isIntersecting?"green":"red"},children:y!=null&&y.isIntersecting?"Half visible":"Obscured"})})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return b});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function B(p,a){return O(p)||D(p,a)||$(p,a)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(p,a){if(!!p){if(typeof p=="string")return R(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return R(p,a)}}function R(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function D(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function O(p){if(Array.isArray(p))return p}var A=function(a,s){var f=Object(G.a)(a,s),m=B(f,2),o=m[0],t=m[1];return Object(P.useEffect)(function(){return o(),t},[o,t]),t},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},x=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},b=function(){var a=A(function(){alert("fire")},3e3);return Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:a,children:"clear"})})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(A),S=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(S),x=e("./node_modules/react/index.js"),b=e.n(x),p=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,h,g;try{for(_=_.call(i);!(v=(h=_.next()).done)&&(u.push(h.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};j.default={parameters:{storySource:{source:`
    
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return X});var w=e("./node_modules/core-js/modules/web.timers.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(Z,z){var M=Object(W.useRef)(),V=Object(Y.a)(Z),Q=Object(W.useCallback)(function(){M.current&&clearInterval(M.current),M.current=setInterval(function(){V()},z)},[z]),L=Object(W.useCallback)(function(){M.current&&clearInterval(M.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[Q,L]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=typeof document!="undefined"?L.useLayoutEffect:L.useEffect,B=e("./node_modules/react/jsx-runtime.js");function oe(b,p){return A(b)||O(b,p)||R(b,p)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(b,p){if(!!b){if(typeof b=="string")return D(b,p);var a=Object.prototype.toString.call(b).slice(8,-1);if(a==="Object"&&b.constructor&&(a=b.constructor.name),a==="Map"||a==="Set")return Array.from(b);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(b,p)}}function D(b,p){(p==null||p>b.length)&&(p=b.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=b[a];return s}function O(b,p){var a=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(b);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function A(b){if(Array.isArray(b))return b}var E=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},E=`import React, { useState } from "react";

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
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},U=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},x=function(){var p=Object(L.useState)(!1),a=oe(p,2),s=a[0],f=a[1];return G(function(){f(!0)},[]),Object(B.jsx)("div",{children:s&&"mounted"})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function G(b,p){return D(b)||R(b,p)||oe(b,p)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(b,p){if(!!b){if(typeof b=="string")return $(b,p);var a=Object.prototype.toString.call(b).slice(8,-1);if(a==="Object"&&b.constructor&&(a=b.constructor.name),a==="Map"||a==="Set")return Array.from(b);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $(b,p)}}function $(b,p){(p==null||p>b.length)&&(p=b.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=b[a];return s}function R(b,p){var a=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(b);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function D(b){if(Array.isArray(b))return b}var O=function(p){var a=Object(P.useState)(!1),s=G(a,2),f=s[0],m=s[1],o=Object(P.useCallback)(function(n){var r=n.key;r===p&&m(!0)},[p]),t=Object(P.useCallback)(function(n){var r=n.key;r===p&&m(!1)},[p]);return Object(P.useEffect)(function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",t)}},[o,t]),f},A=e("./node_modules/react/jsx-runtime.js"),E=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},E=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},U=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},x=function(){var p=O("r");return Object(A.jsx)("div",{children:p&&"r key pressed"})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return _});var w=e("./node_modules/core-js/modules/es.array.map.js"),P=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./node_modules/react/index.js"),B=e("./node_modules/core-js/modules/es.array.concat.js"),oe=e("./node_modules/core-js/modules/es.array.filter.js"),$=e("./node_modules/core-js/modules/es.array.includes.js"),R=e("./node_modules/core-js/modules/es.string.includes.js");function D(u){return E(u)||A(u)||x(u)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function E(u){if(Array.isArray(u))return b(u)}function S(u,v){return a(u)||p(u,v)||x(u,v)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,v){if(!!u){if(typeof u=="string")return b(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return b(u,v)}}function b(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,h=new Array(v);k<v;k++)h[k]=u[k];return h}function p(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var h=[],g=!0,C=!1,T,K;try{for(k=k.call(u);!(g=(T=k.next()).done)&&(h.push(T.value),!(v&&h.length===v));g=!0);}catch(I){C=!0,K=I}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return h}}function a(u){if(Array.isArray(u))return u}var s=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=Object(G.useState)(v),h=S(k,2),g=h[0],C=h[1],T=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return[].concat(D(pe),le)})},[]),K=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return[].concat(le,D(pe))})},[]),I=Object(G.useCallback)(function(de){for(var le=arguments.length,_e=new Array(le>1?le-1:0),pe=1;pe<le;pe++)_e[pe-1]=arguments[pe];return C(function(ge){return[].concat(D(ge.slice(0,de)),_e,D(ge.slice(de)))})},[]),J=Object(G.useCallback)(function(){for(var de=arguments.length,le=new Array(de),_e=0;_e<de;_e++)le[_e]=arguments[_e];return C(function(pe){return pe.filter(function(ge,ue){return!le.includes(ue)})})},[]),H=Object(G.useCallback)(function(){var de=D(g),le=de.pop();return C(de),le},[g]),q=Object(G.useCallback)(function(){var de=D(g),le=de.shift();return C(de),le},[g]),ae=Object(G.useCallback)(function(de,le){C(function(_e){var pe=D(_e);return pe[de]=le,pe})},[]),ye={setState:C,append:T,prepend:K,insert:I,remove:J,pop:H,shift:q,setItem:ae};return[g,ye]},f=e("./node_modules/react/jsx-runtime.js");function m(u,v){return l(u)||r(u,v)||t(u,v)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(u,v){if(!!u){if(typeof u=="string")return n(u,v);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(u,v)}}function n(u,v){(v==null||v>u.length)&&(v=u.length);for(var k=0,h=new Array(v);k<v;k++)h[k]=u[k];return h}function r(u,v){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var h=[],g=!0,C=!1,T,K;try{for(k=k.call(u);!(g=(T=k.next()).done)&&(h.push(T.value),!(v&&h.length===v));g=!0);}catch(I){C=!0,K=I}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw K}}return h}}function l(u){if(Array.isArray(u))return u}var y=`
    
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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},i=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},d=5,_=function(){var v=s(["Item 1","Item 2","Item 3","Item 4","Item 5"]),k=m(v,2),h=k[0],g=k[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return g.append("Item "+ ++d)},children:"append"}),Object(f.jsx)("button",{onClick:function(){return g.pop()},children:"pop"}),Object(f.jsx)("button",{onClick:function(){return g.prepend("Item "+ ++d)},children:"prepend"}),Object(f.jsx)("button",{onClick:function(){return g.shift()},children:"shift"}),Object(f.jsx)("button",{onClick:function(){return g.setItem(3,"Updated")},children:"setItem 3 index"}),Object(f.jsx)("button",{onClick:function(){return g.remove(2,3)},children:"remove 2, 3 index"}),Object(f.jsx)("button",{onClick:function(){return g.insert(3,"Item "+ ++d)},children:"insert 3 index"})]}),Object(f.jsx)("ul",{children:h.map(function(C,T){return Object(f.jsx)("li",{children:C},T)})})]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return K});var w=e("./node_modules/core-js/modules/es.promise.js"),P=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),ne=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/index.js"),oe=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),$=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),R=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),D=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),O=e("./node_modules/core-js/modules/es.object.define-property.js"),A=e("./node_modules/core-js/modules/es.object.create.js"),E=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),x=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),b=e("./node_modules/core-js/modules/es.array.reverse.js"),p=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return I};var I={},J=Object.prototype,H=J.hasOwnProperty,q=typeof Symbol=="function"?Symbol:{},ae=q.iterator||"@@iterator",ye=q.asyncIterator||"@@asyncIterator",de=q.toStringTag||"@@toStringTag";function le(te,F,ie){return Object.defineProperty(te,F,{value:ie,enumerable:!0,configurable:!0,writable:!0}),te[F]}try{le({},"")}catch(te){le=function(ie,ce,fe){return ie[ce]=fe}}function _e(te,F,ie,ce){var fe=F&&F.prototype instanceof ue?F:ue,ve=Object.create(fe.prototype),ke=new Re(ce||[]);return ve._invoke=function(Ie,Ee,he){var Ce="suspendedStart";return function(Te,We){if(Ce==="executing")throw new Error("Generator is already running");if(Ce==="completed"){if(Te==="throw")throw We;return Pe()}for(he.method=Te,he.arg=We;;){var Ke=he.delegate;if(Ke){var Ue=xe(Ke,he);if(Ue){if(Ue===ge)continue;return Ue}}if(he.method==="next")he.sent=he._sent=he.arg;else if(he.method==="throw"){if(Ce==="suspendedStart")throw Ce="completed",he.arg;he.dispatchException(he.arg)}else he.method==="return"&&he.abrupt("return",he.arg);Ce="executing";var Be=pe(Ie,Ee,he);if(Be.type==="normal"){if(Ce=he.done?"completed":"suspendedYield",Be.arg===ge)continue;return{value:Be.arg,done:he.done}}Be.type==="throw"&&(Ce="completed",he.method="throw",he.arg=Be.arg)}}}(te,ie,ke),ve}function pe(te,F,ie){try{return{type:"normal",arg:te.call(F,ie)}}catch(ce){return{type:"throw",arg:ce}}}I.wrap=_e;var ge={};function ue(){}function ee(){}function se(){}var me={};le(me,ae,function(){return this});var je=Object.getPrototypeOf,be=je&&je(je(Me([])));be&&be!==J&&H.call(be,ae)&&(me=be);var Oe=se.prototype=ue.prototype=Object.create(me);function De(te){["next","throw","return"].forEach(function(F){le(te,F,function(ie){return this._invoke(F,ie)})})}function Se(te,F){function ie(fe,ve,ke,Ie){var Ee=pe(te[fe],te,ve);if(Ee.type!=="throw"){var he=Ee.arg,Ce=he.value;return Ce&&typeof Ce=="object"&&H.call(Ce,"__await")?F.resolve(Ce.__await).then(function(Te){ie("next",Te,ke,Ie)},function(Te){ie("throw",Te,ke,Ie)}):F.resolve(Ce).then(function(Te){he.value=Te,ke(he)},function(Te){return ie("throw",Te,ke,Ie)})}Ie(Ee.arg)}var ce;this._invoke=function(fe,ve){function ke(){return new F(function(Ie,Ee){ie(fe,ve,Ie,Ee)})}return ce=ce?ce.then(ke,ke):ke()}}function xe(te,F){var ie=te.iterator[F.method];if(ie===void 0){if(F.delegate=null,F.method==="throw"){if(te.iterator.return&&(F.method="return",F.arg=void 0,xe(te,F),F.method==="throw"))return ge;F.method="throw",F.arg=new TypeError("The iterator does not provide a 'throw' method")}return ge}var ce=pe(ie,te.iterator,F.arg);if(ce.type==="throw")return F.method="throw",F.arg=ce.arg,F.delegate=null,ge;var fe=ce.arg;return fe?fe.done?(F[te.resultName]=fe.value,F.next=te.nextLoc,F.method!=="return"&&(F.method="next",F.arg=void 0),F.delegate=null,ge):fe:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,ge)}function Ae(te){var F={tryLoc:te[0]};1 in te&&(F.catchLoc=te[1]),2 in te&&(F.finallyLoc=te[2],F.afterLoc=te[3]),this.tryEntries.push(F)}function Le(te){var F=te.completion||{};F.type="normal",delete F.arg,te.completion=F}function Re(te){this.tryEntries=[{tryLoc:"root"}],te.forEach(Ae,this),this.reset(!0)}function Me(te){if(te){var F=te[ae];if(F)return F.call(te);if(typeof te.next=="function")return te;if(!isNaN(te.length)){var ie=-1,ce=function fe(){for(;++ie<te.length;)if(H.call(te,ie))return fe.value=te[ie],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return ce.next=ce}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return ee.prototype=se,le(Oe,"constructor",se),le(se,"constructor",ee),ee.displayName=le(se,de,"GeneratorFunction"),I.isGeneratorFunction=function(te){var F=typeof te=="function"&&te.constructor;return!!F&&(F===ee||(F.displayName||F.name)==="GeneratorFunction")},I.mark=function(te){return Object.setPrototypeOf?Object.setPrototypeOf(te,se):(te.__proto__=se,le(te,de,"GeneratorFunction")),te.prototype=Object.create(Oe),te},I.awrap=function(te){return{__await:te}},De(Se.prototype),le(Se.prototype,ye,function(){return this}),I.AsyncIterator=Se,I.async=function(te,F,ie,ce,fe){fe===void 0&&(fe=Promise);var ve=new Se(_e(te,F,ie,ce),fe);return I.isGeneratorFunction(F)?ve:ve.next().then(function(ke){return ke.done?ke.value:ve.next()})},De(Oe),le(Oe,de,"Generator"),le(Oe,ae,function(){return this}),le(Oe,"toString",function(){return"[object Generator]"}),I.keys=function(te){var F=[];for(var ie in te)F.push(ie);return F.reverse(),function ce(){for(;F.length;){var fe=F.pop();if(fe in te)return ce.value=fe,ce.done=!1,ce}return ce.done=!0,ce}},I.values=Me,Re.prototype={constructor:Re,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Le),!F)for(var ie in this)ie.charAt(0)==="t"&&H.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var ie=this;function ce(he,Ce){return ke.type="throw",ke.arg=F,ie.next=he,Ce&&(ie.method="next",ie.arg=void 0),!!Ce}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe],ke=ve.completion;if(ve.tryLoc==="root")return ce("end");if(ve.tryLoc<=this.prev){var Ie=H.call(ve,"catchLoc"),Ee=H.call(ve,"finallyLoc");if(Ie&&Ee){if(this.prev<ve.catchLoc)return ce(ve.catchLoc,!0);if(this.prev<ve.finallyLoc)return ce(ve.finallyLoc)}else if(Ie){if(this.prev<ve.catchLoc)return ce(ve.catchLoc,!0)}else{if(!Ee)throw new Error("try statement without catch or finally");if(this.prev<ve.finallyLoc)return ce(ve.finallyLoc)}}}},abrupt:function(F,ie){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var fe=this.tryEntries[ce];if(fe.tryLoc<=this.prev&&H.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ve=fe;break}}ve&&(F==="break"||F==="continue")&&ve.tryLoc<=ie&&ie<=ve.finallyLoc&&(ve=null);var ke=ve?ve.completion:{};return ke.type=F,ke.arg=ie,ve?(this.method="next",this.next=ve.finallyLoc,ge):this.complete(ke)},complete:function(F,ie){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&ie&&(this.next=ie),ge},finish:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.finallyLoc===F)return this.complete(ce.completion,ce.afterLoc),Le(ce),ge}},catch:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.tryLoc===F){var fe=ce.completion;if(fe.type==="throw"){var ve=fe.arg;Le(ce)}return ve}}throw new Error("illegal catch attempt")},delegateYield:function(F,ie,ce){return this.delegate={iterator:Me(F),resultName:ie,nextLoc:ce},this.method==="next"&&(this.arg=void 0),ge}},I}function s(I,J,H,q,ae,ye,de){try{var le=I[ye](de),_e=le.value}catch(pe){H(pe);return}le.done?J(_e):Promise.resolve(_e).then(q,ae)}function f(I){return function(){var J=this,H=arguments;return new Promise(function(q,ae){var ye=I.apply(J,H);function de(_e){s(ye,q,ae,de,le,"next",_e)}function le(_e){s(ye,q,ae,de,le,"throw",_e)}de(void 0)})}}function m(I,J){return l(I)||r(I,J)||t(I,J)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(I,J){if(!!I){if(typeof I=="string")return n(I,J);var H=Object.prototype.toString.call(I).slice(8,-1);if(H==="Object"&&I.constructor&&(H=I.constructor.name),H==="Map"||H==="Set")return Array.from(I);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return n(I,J)}}function n(I,J){(J==null||J>I.length)&&(J=I.length);for(var H=0,q=new Array(J);H<J;H++)q[H]=I[H];return q}function r(I,J){var H=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(H!=null){var q=[],ae=!0,ye=!1,de,le;try{for(H=H.call(I);!(ae=(de=H.next()).done)&&(q.push(de.value),!(J&&q.length===J));ae=!0);}catch(_e){ye=!0,le=_e}finally{try{!ae&&H.return!=null&&H.return()}finally{if(ye)throw le}}return q}}function l(I){if(Array.isArray(I))return I}var y=function(J){var H=Object(B.useState)(!1),q=m(H,2),ae=q[0],ye=q[1],de=Object(p.a)(J),le=Object(B.useCallback)(f(a().mark(function _e(){var pe,ge=arguments;return a().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ye(!0),ee.next=3,de.apply(void 0,ge);case 3:return pe=ee.sent,ye(!1),ee.abrupt("return",pe);case 6:case"end":return ee.stop()}},_e)})),[J]);return[ae,le]},c=e("./node_modules/react/jsx-runtime.js");function i(I,J){return k(I)||v(I,J)||_(I,J)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(I,J){if(!!I){if(typeof I=="string")return u(I,J);var H=Object.prototype.toString.call(I).slice(8,-1);if(H==="Object"&&I.constructor&&(H=I.constructor.name),H==="Map"||H==="Set")return Array.from(I);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return u(I,J)}}function u(I,J){(J==null||J>I.length)&&(J=I.length);for(var H=0,q=new Array(J);H<J;H++)q[H]=I[H];return q}function v(I,J){var H=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(H!=null){var q=[],ae=!0,ye=!1,de,le;try{for(H=H.call(I);!(ae=(de=H.next()).done)&&(q.push(de.value),!(J&&q.length===J));ae=!0);}catch(_e){ye=!0,le=_e}finally{try{!ae&&H.return!=null&&H.return()}finally{if(ye)throw le}}return q}}function k(I){if(Array.isArray(I))return I}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},h=`import React from "react";
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
`,g={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},C=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},T=function(J){return new Promise(function(H){return setTimeout(H,J)})},K=function(){var J=y(T),H=i(J,2),q=H[0],ae=H[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return ae(2e3)},children:"Start"})}),Object(c.jsxs)("div",{children:["Loading: ",""+q]})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Z=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var M=function(){var Q=Object(Y.a)("(min-width: 900px)");return Object(X.jsx)("div",{children:Object(X.jsxs)("div",{children:["(min-width: 900px) : ",Q?"matches":"does not match"]})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return t});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S);function x(n,r){return f(n)||s(n,r)||p(n,r)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,r){if(!!n){if(typeof n=="string")return a(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return a(n,r)}}function a(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function s(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function f(n){if(Array.isArray(n))return n}function m(n,r){try{return n.addEventListener("change",r),function(){return n.removeEventListener("change",r)}}catch(l){return n.addListener(r),function(){return n.removeListener(r)}}}function o(n){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(n).matches:!1}var t=function(r){var l=Object(S.useState)(o(r)),y=x(l,2),c=y[0],i=y[1],d=Object(S.useRef)();return Object(S.useEffect)(function(){if("matchMedia"in window)return d.current=window.matchMedia(r),i(d.current.matches),m(d.current,function(_){return i(_.matches)})},[r]),c}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return o});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),B=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),oe=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),$=e("./node_modules/core-js/modules/es.array.for-each.js"),R=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),D=function(n,r){typeof n=="function"?n(r):typeof n=="object"&&n!==null&&"current"in n&&(n.current=r)},O=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Object(L.useCallback)(function(y){r.forEach(function(c){return D(c,y)})},r)},A=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(y){r.forEach(function(c){return D(c,y)})}},E=e("./node_modules/react/jsx-runtime.js");function S(t,n){return a(t)||p(t,n)||x(t,n)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,n){if(!!t){if(typeof t=="string")return b(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,n)}}function b(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function p(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],y=!0,c=!1,i,d;try{for(r=r.call(t);!(y=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));y=!0);}catch(_){c=!0,d=_}finally{try{!y&&r.return!=null&&r.return()}finally{if(c)throw d}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
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
`,f={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},m=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},o=function(){var n=Object(oe.a)(),r=S(n,2),l=r[0],y=r[1],c=Object(G.a)(function(){return alert("click away")}),i=O(y,c),d=Object(B.a)();return Object(L.useEffect)(function(){d()},[]),Object(E.jsx)("div",{children:Object(E.jsx)("div",{ref:i,style:{width:100,height:100,backgroundColor:"red"},children:""+l})})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return b});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function G(p,a){return D(p)||R(p,a)||oe(p,a)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(p,a){if(!!p){if(typeof p=="string")return $(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return $(p,a)}}function $(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function R(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function D(p){if(Array.isArray(p))return p}var O={angle:0,type:"landscape-primary"},A=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:O,s=Object(P.useState)(a),f=G(s,2),m=f[0],o=f[1];return Object(P.useEffect)(function(){var t=window.screen,n=!0,r=function(){if(n){var y=t,c=y.orientation;if(c){var i=c.angle,d=c.type;o({angle:i,type:d})}else window.orientation!==void 0?o({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):o(a)}};return window.addEventListener("orientationchange",r),r(),function(){n=!1,window.addEventListener("orientationchange",r)}},[]),m},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},S=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},x=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},b=function(){var a=A();return Object(E.jsx)("div",{children:JSON.stringify(a)})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=function(){var Q=window.navigator,L=Q.userAgent,G=Q.platform,B=["Macintosh","MacIntel","MacPPC","Mac68K"],oe=["Win32","Win64","Windows","WinCE"],$=["iPhone","iPad","iPod"],R="unknown";return B.indexOf(G)!==-1?R="macos":$.indexOf(G)!==-1?R="ios":oe.indexOf(G)!==-1?R="windows":/Android/.test(L)?R="android":!R&&/Linux/.test(G)&&(R="linux"),R},Y=function(){return typeof window!="undefined"?ne():"unknown"},X=e("./node_modules/react/jsx-runtime.js"),N=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},N=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,Z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},z=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},M=function(){var Q=Y();return Object(X.jsx)("div",{children:Q})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=function(p){Object(L.useEffect)(function(){if(!!p){var a=function(f){f=f||window.event;var m=f.relatedTarget||f.toElement;(!m||m.nodeName==="HTML")&&p()};return document.addEventListener("mouseout",a),function(){document.removeEventListener("mouseout",a)}}},[])},B=e("./node_modules/react/jsx-runtime.js");function oe(b,p){return A(b)||O(b,p)||R(b,p)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(b,p){if(!!b){if(typeof b=="string")return D(b,p);var a=Object.prototype.toString.call(b).slice(8,-1);if(a==="Object"&&b.constructor&&(a=b.constructor.name),a==="Map"||a==="Set")return Array.from(b);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(b,p)}}function D(b,p){(p==null||p>b.length)&&(p=b.length);for(var a=0,s=new Array(p);a<p;a++)s[a]=b[a];return s}function O(b,p){var a=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(a!=null){var s=[],f=!0,m=!1,o,t;try{for(a=a.call(b);!(f=(o=a.next()).done)&&(s.push(o.value),!(p&&s.length===p));f=!0);}catch(n){m=!0,t=n}finally{try{!f&&a.return!=null&&a.return()}finally{if(m)throw t}}return s}}function A(b){if(Array.isArray(b))return b}var E=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},E=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},U=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},x=function(){var p=Object(L.useState)(0),a=oe(p,2),s=a[0],f=a[1];return G(function(){return f(function(m){return m+1})}),Object(B.jsxs)("div",{children:["Page leave count: ",s]})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return f});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),ne=e("./node_modules/core-js/modules/es.array.concat.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js");function B(m){return R(m)||$(m)||A(m)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function R(m){if(Array.isArray(m))return E(m)}function D(m,o){return U(m)||S(m,o)||A(m,o)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(m,o){if(!!m){if(typeof m=="string")return E(m,o);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(m,o)}}function E(m,o){(o==null||o>m.length)&&(o=m.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=m[t];return n}function S(m,o){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,y,c;try{for(t=t.call(m);!(r=(y=t.next()).done)&&(n.push(y.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function U(m){if(Array.isArray(m))return m}var x=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=Object(P.useState)({state:t.slice(0,o),queue:t.slice(o)}),r=D(n,2),l=r[0],y=l.state,c=l.queue,i=r[1],d=function(){for(var k=arguments.length,h=new Array(k),g=0;g<k;g++)h[g]=arguments[g];return i(function(C){var T=[].concat(B(C.state),B(C.queue),h);return{state:T.slice(0,o),queue:T.slice(o)}})},_=function(k){return i(function(h){var g=k([].concat(B(h.state),B(h.queue)));return{state:g.slice(0,o),queue:g.slice(o)}})},u=function(){return i(function(k){return{state:k.state,queue:[]}})};return{state:y,queue:c,add:d,update:_,cleanQueue:u}},b=e("./node_modules/react/jsx-runtime.js"),p=`
    
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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},s=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},f=function(){var o=x(10,[1,2,3]),t=o.state,n=o.queue,r=o.add,l=o.update,y=o.cleanQueue;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["state: ",t]}),Object(b.jsxs)("div",{children:["queue: ",n]}),Object(b.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(b.jsx)("button",{onClick:function(){return l(function(i){return i})},children:"update"}),Object(b.jsx)("button",{onClick:y,children:"clear"})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(A),S=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(S),x=e("./node_modules/react/index.js"),b=e.n(x),p=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,h,g;try{for(_=_.call(i);!(v=(h=_.next()).done)&&(u.push(h.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var c=function(){var d=Object(p.a)({width:0,height:0}),_=f(d,2),u=_[0],v=_[1];return Object(x.useEffect)(function(){var k=function(){v({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(a.jsx)("pre",{children:JSON.stringify(u,null,2)})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return m});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(A),S=e("./node_modules/react/index.js"),U=e.n(S);function x(o,t){return f(o)||s(o,t)||p(o,t)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function f(o){if(Array.isArray(o))return o}var m=function(t){var n=Object(S.useRef)(0),r=Object(S.useState)(t),l=x(r,2),y=l[0],c=l[1],i=Object(S.useCallback)(function(d){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){c(d)})},[]);return[y,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return r});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),B=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function oe(l,y){return A(l)||O(l,y)||R(l,y)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(l,y){if(!!l){if(typeof l=="string")return D(l,y);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return D(l,y)}}function D(l,y){(y==null||y>l.length)&&(y=l.length);for(var c=0,i=new Array(y);c<y;c++)i[c]=l[c];return i}function O(l,y){var c=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(c!=null){var i=[],d=!0,_=!1,u,v;try{for(c=c.call(l);!(d=(u=c.next()).done)&&(i.push(u.value),!(y&&i.length===y));d=!0);}catch(k){_=!0,v=k}finally{try{!d&&c.return!=null&&c.return()}finally{if(_)throw v}}return i}}function A(l){if(Array.isArray(l))return l}var E={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},S=typeof window!="undefined",U=function(){var y=Object(L.useRef)(null),c=Object(B.a)(E),i=oe(c,2),d=i[0],_=i[1],u=Object(L.useMemo)(function(){return S?new ResizeObserver(function(v){var k=v[0];k&&_(k.contentRect)}):null},[]);return Object(L.useEffect)(function(){return y.current&&u.observe(y.current),function(){u.disconnect()}},[y.current]),[y,d]},x=e("./node_modules/react/jsx-runtime.js");function b(l,y){return m(l)||f(l,y)||a(l,y)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
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
`,t={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},n=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var y=U(),c=b(y,2),i=c[0],d=c[1],_=Object(G.a)();return Object(L.useEffect)(function(){_()},[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("textarea",{ref:i,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(x.jsx)("div",{children:JSON.stringify(d)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return y});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./node_modules/core-js/modules/es.parse-int.js");function B(){var c=document.createElement("style");return c.type="text/css",c.setAttribute("tm-scroll-lock",""),c}function oe(c){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(c)}function $(c,i){c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}function R(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var c=parseInt(window.getComputedStyle(document.body).paddingRight,10),i=window.innerWidth-document.documentElement.clientWidth;return c+i}var D=function(i){var d=i.disableBodyPadding,_=d?null:R(),u=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return u};function O(c,i){return x(c)||U(c,i)||E(c,i)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(c,i){if(!!c){if(typeof c=="string")return S(c,i);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return S(c,i)}}function S(c,i){(i==null||i>c.length)&&(i=c.length);for(var d=0,_=new Array(i);d<i;d++)_[d]=c[d];return _}function U(c,i){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var _=[],u=!0,v=!1,k,h;try{for(d=d.call(c);!(u=(k=d.next()).done)&&(_.push(k.value),!(i&&_.length===i));u=!0);}catch(g){v=!0,h=g}finally{try{!u&&d.return!=null&&d.return()}finally{if(v)throw h}}return _}}function x(c){if(Array.isArray(c))return c}var b=function(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(L.useState)(i||!1),u=O(_,2),v=u[0],k=u[1],h=Object(L.useRef)(0),g=d.disableBodyPadding,C=Object(L.useRef)(null),T=function(){h.current=window.scrollY;var J=D({disableBodyPadding:g}),H=B();$(H,J),oe(H),C.current=H},K=function(){!(C!=null&&C.current)||(C.current.parentNode.removeChild(C.current),C.current=null)};return Object(L.useEffect)(function(){return v?T():K(),K},[v]),Object(L.useEffect)(function(){i!==void 0&&k(i)},[i]),Object(L.useEffect)(function(){i===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&k(!0)},[k]),[v,k]},p=e("./node_modules/react/jsx-runtime.js");function a(c,i){return t(c)||o(c,i)||f(c,i)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(c,i){if(!!c){if(typeof c=="string")return m(c,i);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return m(c,i)}}function m(c,i){(i==null||i>c.length)&&(i=c.length);for(var d=0,_=new Array(i);d<i;d++)_[d]=c[d];return _}function o(c,i){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var _=[],u=!0,v=!1,k,h;try{for(d=d.call(c);!(u=(k=d.next()).done)&&(_.push(k.value),!(i&&_.length===i));u=!0);}catch(g){v=!0,h=g}finally{try{!u&&d.return!=null&&d.return()}finally{if(v)throw h}}return _}}function t(c){if(Array.isArray(c))return c}var n=`
    
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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},l=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},y=function(){var i=Object(L.useState)(!1),d=a(i,2),_=d[0],u=d[1],v=b(_);return Object(p.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(p.jsx)("button",{onClick:function(){return u(function(h){return!h})},children:_?"Unlock":"Lock"}),v?"Scroll locked":"Scrollable"]})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`() => {
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
}`}},y.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return b});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),G=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function B(p,a){return O(p)||D(p,a)||$(p,a)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(p,a){if(!!p){if(typeof p=="string")return R(p,a);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return R(p,a)}}function R(p,a){(a==null||a>p.length)&&(a=p.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=p[s];return f}function D(p,a){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var f=[],m=!0,o=!1,t,n;try{for(s=s.call(p);!(m=(t=s.next()).done)&&(f.push(t.value),!(a&&f.length===a));m=!0);}catch(r){o=!0,n=r}finally{try{!m&&s.return!=null&&s.return()}finally{if(o)throw n}}return f}}function O(p){if(Array.isArray(p))return p}var A=function(a,s){var f=Object(G.a)(a,s),m=B(f,2),o=m[0],t=m[1];return Object(P.useEffect)(function(){return o(),t},[o,t]),t},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},x=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},b=function(){var a=A(function(){alert("fire!")},2e3);return Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:a,children:"Clear"})})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(A),S=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(S),x=e("./node_modules/react/index.js"),b=e.n(x),p=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,h,g;try{for(_=_.call(i);!(v=(h=_.next()).done)&&(u.push(h.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};j.default={parameters:{storySource:{source:`
    
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return X});var w=e("./node_modules/core-js/modules/web.timers.js"),P=e.n(w),W=e("./node_modules/react/index.js"),ne=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(Z,z){var M=Object(W.useRef)(),V=Object(Y.a)(Z),Q=Object(W.useCallback)(function(){M.current&&clearTimeout(M.current),M.current=setTimeout(function(){V()},z)},[z]),L=Object(W.useCallback)(function(){M.current&&clearTimeout(M.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[Q,L]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return m});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function G(o,t){return D(o)||R(o,t)||oe(o,t)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(o,t){if(!!o){if(typeof o=="string")return $(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(o,t)}}function $(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function R(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function D(o){if(Array.isArray(o))return o}var O=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=Object(L.useState)(t),r=G(n,2),l=r[0],y=r[1],c=Object(L.useCallback)(function(i){return y(function(d){return typeof i=="boolean"?i:!d})},[]);return[l,c]},A=e("./node_modules/react/jsx-runtime.js");function E(o,t){return p(o)||b(o,t)||U(o,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(o,t){if(!!o){if(typeof o=="string")return x(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(o,t)}}function x(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function b(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,y=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(d){y=!0,i=d}finally{try{!l&&n.return!=null&&n.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var a=`
    
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
`,s={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},f=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},m=function(){var t=O(),n=E(t,2),r=n[0],l=n[1];return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{children:["current state: ",""+r]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("button",{onClick:function(){return l(!0)},children:"setTrue"}),Object(A.jsx)("button",{onClick:function(){return l(!1)},children:"setFalse"}),Object(A.jsx)("button",{onClick:l,children:"toggle"})]})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function B(n,r){return O(n)||D(n,r)||$(n,r)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(n,r){if(!!n){if(typeof n=="string")return R(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return R(n,r)}}function R(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function D(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function O(n){if(Array.isArray(n))return n}var A=function(r){var l=r.value,y=r.defaultValue,c=r.finalValue,i=r.rule,d=r.onChange,_=r.onValueUpdate,u=i(l),v=Object(L.useRef)("initial"),k=i(y)?y:c,h=Object(L.useState)(k),g=B(h,2),C=g[0],T=g[1],K=u?l:C;!u&&v.current==="controlled"&&(K=c),v.current=u?"controlled":"uncontrolled";var I=v.current,J=function(q){typeof d=="function"&&d(q),I==="uncontrolled"&&T(q)};return Object(L.useEffect)(function(){I==="uncontrolled"&&T(K),typeof _=="function"&&_(K)},[I,K]),[K,J,v.current]},E=e("./node_modules/react/jsx-runtime.js");function S(n,r){return a(n)||p(n,r)||x(n,r)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(n,r){if(!!n){if(typeof n=="string")return b(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return b(n,r)}}function b(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,y=new Array(r);l<r;l++)y[l]=n[l];return y}function p(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var y=[],c=!0,i=!1,d,_;try{for(l=l.call(n);!(c=(d=l.next()).done)&&(y.push(d.value),!(r&&y.length===r));c=!0);}catch(u){i=!0,_=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw _}}return y}}function a(n){if(Array.isArray(n))return n}var s=`
    
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
`,f={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},m=j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},o=function(r){var l=r.label,y=r.value,c=r.defaultValue,i=r.onChange,d=Object(G.a)(),_=A({value:y,defaultValue:c,finalValue:null,onChange:i,rule:function(g){return typeof g=="string"}}),u=S(_,2),v=u[0],k=u[1];return Object(E.jsxs)("div",{style:{padding:"1rem"},children:[Object(E.jsx)("label",{htmlFor:d,children:l}),Object(E.jsx)("br",{}),Object(E.jsx)("input",{id:d,type:"text",value:v,onChange:function(g){return k(g.target.value)}})]})};o.displayName="CustomInput";var t=function(){var r=Object(L.useState)("controlled"),l=S(r,2),y=l[0],c=l[1];return Object(E.jsxs)("div",{style:{padding:20},children:[Object(E.jsx)(o,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(E.jsx)(o,{label:"Controlled",value:y,onChange:c}),Object(E.jsx)(o,{label:"Controlled (fixed value)",value:"fixed",onChange:c})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,j,e){"use strict";e.r(j),e.d(j,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(N),z=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(z),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e.n(V),L=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e.n(B),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n($),D=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(D),A=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(A),S=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(S),x=e("./node_modules/react/index.js"),b=e.n(x),p=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function f(i,d){return r(i)||n(i,d)||o(i,d)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,d){if(!!i){if(typeof i=="string")return t(i,d);var _=Object.prototype.toString.call(i).slice(8,-1);if(_==="Object"&&i.constructor&&(_=i.constructor.name),_==="Map"||_==="Set")return Array.from(i);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(i,d)}}function t(i,d){(d==null||d>i.length)&&(d=i.length);for(var _=0,u=new Array(d);_<d;_++)u[_]=i[_];return u}function n(i,d){var _=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(_!=null){var u=[],v=!0,k=!1,h,g;try{for(_=_.call(i);!(v=(h=_.next()).done)&&(u.push(h.value),!(d&&u.length===d));v=!0);}catch(C){k=!0,g=C}finally{try{!v&&_.return!=null&&_.return()}finally{if(k)throw g}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};j.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var c=function(){var d=Object(x.useState)(""),_=f(d,2),u=_[0],v=_[1];return Object(x.useEffect)(function(){console.log("useEffect:",u)},[u]),Object(p.a)(function(){console.log("useUpdateEffect:",u)},[u]),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",onChange:function(h){return v(h.target.value)}})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return W});var w=e("./node_modules/react/index.js"),P=e.n(w),W=function(Y,X){var N=Object(w.useRef)(!0);Object(w.useEffect)(function(){if(!N.current)return Y();N.current=!1},X)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,j,e){"use strict";e.d(j,"c",function(){return L}),e.d(j,"d",function(){return G}),e.d(j,"b",function(){return B}),e.d(j,"a",function(){return $});var w=e("./node_modules/react/index.js"),P=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ne=e("./node_modules/react/jsx-runtime.js"),Y=function(D){var O=D.styles,A=L();return Object(ne.jsx)(W.a,{styles:Object(W.b)(O(A))})};Y.displayName="Global";var X={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},N=function(){return Object(ne.jsx)(W.a,{styles:X})};N.displayName="NormalizeCSS";var Z=e("./node_modules/core-js/modules/es.array.reduce.js"),z=e("./node_modules/core-js/modules/es.object.keys.js"),M=e("./node_modules/core-js/modules/es.object.assign.js");function V(R,D){return D?Object.keys(R).reduce(function(O,A){if(A==="headings"&&D.headings){var E=D.headings?Object.keys(R.headings).reduce(function(S,U){return S[U]=Object.assign({},R.headings[U],D.headings[U]),S},{}):R.headings;return Object.assign({},O,{headings:Object.assign({},R.headings,D.headings,E)})}return O[A]=typeof D[A]=="object"?Object.assign({},R[A],D[A]):D[A]||R[A],O},{}):R}var Q=Object(w.createContext)({theme:P.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function L(){var R;return((R=Object(w.useContext)(Q))===null||R===void 0?void 0:R.theme)||P.a}function G(){var R;return((R=Object(w.useContext)(Q))===null||R===void 0?void 0:R.styles)||{}}function B(){var R;return((R=Object(w.useContext)(Q))===null||R===void 0?void 0:R.emotionOptions)||{key:"co",prepend:!0}}var oe=function(){return Object(ne.jsx)(Y,{styles:function(O){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:O.fontFamily,backgroundColor:O.colorScheme==="dark"?O.colors.black:O.colors.white,color:O.colorScheme==="dark"?O.colors.white:O.colors.black,lineHeight:O.lineHeight,fontSizes:O.fontSizes.b3}}}})};oe.displayName="GlobalStyles";var $=function(D){var O=D.theme,A=D.styles,E=A===void 0?{}:A,S=D.emotionOptions,U=D.withNormalizeCSS,x=U===void 0?!1:U,b=D.withGlobalStyles,p=b===void 0?!1:b,a=D.children;return Object(ne.jsxs)(Q.Provider,{value:{theme:V(P.a,O),styles:E,emotionOptions:S},children:[x&&Object(ne.jsx)(N,{}),p&&Object(ne.jsx)(oe,{}),a]})};$.displayName="TmProvider",$.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,j,e){"use strict";e.d(j,"b",function(){return _e}),e.d(j,"a",function(){return ge});var w=e("./node_modules/core-js/modules/es.object.keys.js"),P={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[P.navy1,P.navy1,P.navy2],secondary:[P.green2,P.green2,P.green1],tertiary:[P.white,P.white,P.gray6]},ne={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Y={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},X={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},N={small:2,medium:4,large:8,round:100,circular:"50%"},Z={xsmall:4,small:8,medium:16,large:24,xlarge:40},z={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},M={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},V={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},Q={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},L=e("./node_modules/core-js/modules/es.object.assign.js"),G=function(ee){for(var se="",me=1;me<ee.length-1;me+=1)se+=ee[me]+" "+me/(ee.length-1)*100+"%, ";return ee[0]+" 0%, "+se+ee[ee.length-1]+" 100%"},B=function(ee){for(var se=arguments.length,me=new Array(se>1?se-1:0),je=1;je<se;je++)me[je-1]=arguments[je];return"linear-gradient("+ee+"deg, "+G(me)+")"},oe=function(){for(var ee=arguments.length,se=new Array(ee),me=0;me<ee;me++)se[me]=arguments[me];return"radial-gradient(circle, "+G(se)+")"},$=function(ee){return typeof ee.size=="number"?ee.size:ee.sizes[ee.size]||ee.size||ee.sizes.medium},R=function(ee){return function(se){return"@media (min-width: "+($({size:se,sizes:ee.breakpoints})+1)+"px)"}},D=function(ee){return function(se){return"@media (max-width: "+$({size:se,sizes:ee.breakpoints})+"px)"}},O=e("./node_modules/core-js/modules/es.string.replace.js"),A=e("./node_modules/core-js/modules/es.regexp.exec.js"),E=e("./node_modules/core-js/modules/es.number.is-nan.js"),S=e("./node_modules/core-js/modules/es.number.constructor.js"),U=e("./node_modules/core-js/modules/es.parse-int.js"),x=e("./node_modules/core-js/modules/es.array.map.js"),b=e("./node_modules/core-js/modules/es.string.split.js"),p=e("./node_modules/core-js/modules/es.string.starts-with.js"),a=e("./node_modules/core-js/modules/es.array.is-array.js"),s=e("./node_modules/core-js/modules/es.symbol.js"),f=e("./node_modules/core-js/modules/es.symbol.description.js"),m=e("./node_modules/core-js/modules/es.object.to-string.js"),o=e("./node_modules/core-js/modules/es.symbol.iterator.js"),t=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),y=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function i(ue,ee){return k(ue)||v(ue,ee)||_(ue,ee)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(ue,ee){if(!!ue){if(typeof ue=="string")return u(ue,ee);var se=Object.prototype.toString.call(ue).slice(8,-1);if(se==="Object"&&ue.constructor&&(se=ue.constructor.name),se==="Map"||se==="Set")return Array.from(ue);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return u(ue,ee)}}function u(ue,ee){(ee==null||ee>ue.length)&&(ee=ue.length);for(var se=0,me=new Array(ee);se<ee;se++)me[se]=ue[se];return me}function v(ue,ee){var se=ue==null?null:typeof Symbol!="undefined"&&ue[Symbol.iterator]||ue["@@iterator"];if(se!=null){var me=[],je=!0,be=!1,Oe,De;try{for(se=se.call(ue);!(je=(Oe=se.next()).done)&&(me.push(Oe.value),!(ee&&me.length===ee));je=!0);}catch(Se){be=!0,De=Se}finally{try{!je&&se.return!=null&&se.return()}finally{if(be)throw De}}return me}}function k(ue){if(Array.isArray(ue))return ue}var h=function(ee){var se=ee.replace("#","");return typeof se=="string"&&se.length===6&&!Number.isNaN(Number("0x"+se))},g=function(ee){var se=ee.replace("#",""),me=parseInt(se,16),je=me>>16&255,be=me>>8&255,Oe=me&255;return{r:je,g:be,b:Oe,a:1}},C=function(ee){var se=ee.replace(/[^0-9,.]/g,"").split(",").map(Number),me=i(se,4),je=me[0],be=me[1],Oe=me[2],De=me[3];return{r:je,g:be,b:Oe,a:De||1}},T=function(ee){return h(ee)?g(ee):ee.startsWith("rgb")?C(ee):{r:0,g:0,b:0,a:1}},K=function(ee,se){if(typeof ee!="string"||se>1||se<0)return"rgba(0, 0, 0, 1)";var me=T(ee),je=me.r,be=me.g,Oe=me.b;return"rgba("+je+", "+be+", "+Oe+", "+se+")"},I=function(ee,se){var me=T(ee),je=me.r,be=me.g,Oe=me.b,De=me.a,Se=1-se,xe=function(Le){return Math.round(Le*Se)};return"rgba("+xe(je)+", "+xe(be)+", "+xe(Oe)+", "+De+")"},J=function(ee,se){var me=T(ee),je=me.r,be=me.g,Oe=me.b,De=me.a,Se=function(Ae){return Math.round(Ae+(255-Ae)*se)};return"rgba("+Se(je)+", "+Se(be)+", "+Se(Oe)+", "+De+")"},H=function(ee){return ee*8},q={linearGradient:B,radialGradient:oe,smallerThan:D,largerThan:R,rgba:K,size:$,darken:I,lighten:J,spacing:H},ae=function(ee){return Object.assign({},ee,{fn:{largerThan:q.largerThan(ee),smallerThan:q.smallerThan(ee),radialGradient:q.radialGradient,linearGradient:q.linearGradient,rgba:q.rgba,size:q.size,lighten:q.lighten,darken:q.darken,spacing:q.spacing}})},ye=Object.keys(W),de=Object.keys(P),le=["xsmall","small","medium","large","xlarge"],_e=function(ee){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ee.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:P.black,colors:P,palettes:W,shadows:ne,fontSizes:Y,lineHeights:X,radius:N,spacing:Z,breakpoints:z,headings:M,opacity:V,zIndex:Q,extra:{}},ge=ae(pe)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return p});var w=e("./node_modules/core-js/modules/es.function.name.js"),P=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),X=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),oe=e("./node_modules/core-js/modules/es.array.from.js");function $(a,s){return E(a)||A(a,s)||D(a,s)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(a,s){if(!!a){if(typeof a=="string")return O(a,s);var f=Object.prototype.toString.call(a).slice(8,-1);if(f==="Object"&&a.constructor&&(f=a.constructor.name),f==="Map"||f==="Set")return Array.from(a);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return O(a,s)}}function O(a,s){(s==null||s>a.length)&&(s=a.length);for(var f=0,m=new Array(s);f<s;f++)m[f]=a[f];return m}function A(a,s){var f=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(f!=null){var m=[],o=!0,t=!1,n,r;try{for(f=f.call(a);!(o=(n=f.next()).done)&&(m.push(n.value),!(s&&m.length===s));o=!0);}catch(l){t=!0,r=l}finally{try{!o&&f.return!=null&&f.return()}finally{if(t)throw r}}return m}}function E(a){if(Array.isArray(a))return a}function S(a){var s={};return Object.keys(a).forEach(function(f){var m=$(a[f],2),o=m[0],t=m[1];s[o]=t}),s}var U=e("./node_modules/core-js/modules/es.array.reduce.js");function x(a,s,f){return Object.keys(s).reduce(function(m,o){return m[o]=a(s[o],f?"tm-"+f+"-"+o:null),m},{})}var b=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function p(a){var s=typeof a=="function"?a:function(){return a};function f(m,o){var t=Object(ne.c)(),n=Object(ne.d)()[o==null?void 0:o.name],r=Object(b.a)(),l=r.css,y=r.cx,c=0;function i(h){return c+=1,"tm-ref_"+(h||"")+"_"+c}var d=s(t,m,i),_=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(t):(o==null?void 0:o.overrideStyles)||{},u=typeof n=="function"?n(t):n||{},v=typeof(o==null?void 0:o.co)=="function"?o.co(t):o==null?void 0:o.co,k=S(Object.keys(d).map(function(h){var g=y(l(d[h]),l(u[h]),l(_[h]),l(v));return[h,g]}));return{classes:x(y,k,o==null?void 0:o.name),cx:y,theme:t}}return f}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,j,e){"use strict";e.d(j,"a",function(){return k});var w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/clsx/dist/clsx.m.js"),G=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),B=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),oe=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./node_modules/react/index.js");function D(h){return S(h)||E(h)||A(h)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(h,g){if(!!h){if(typeof h=="string")return U(h,g);var C=Object.prototype.toString.call(h).slice(8,-1);if(C==="Object"&&h.constructor&&(C=h.constructor.name),C==="Map"||C==="Set")return Array.from(h);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return U(h,g)}}function E(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function S(h){if(Array.isArray(h))return U(h)}function U(h,g){(g==null||g>h.length)&&(g=h.length);for(var C=0,T=new Array(g);C<g;C++)T[C]=h[C];return T}function x(h,g){var C=Object(R.useRef)();return(!C.current||g.length!==C.current.prevDeps.length||C.current.prevDeps.map(function(T,K){return T===g[K]}).indexOf(!1)>=0)&&(C.current={v:h(),prevDeps:D(g)}),C.current.v}var b=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),p=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/react/jsx-runtime.js"),s=function(){var h;function g(C){return h===void 0&&(h=Object(b.a)(C||{key:"co",prepend:!0})),h}return{getCache:g}}(),f=s.getCache,m=Object(R.createContext)(void 0);function o(){var h=Object(p.b)();return Object(R.useContext)(m)||f(h)}function t(h){var g=h.children,C=h.value;return Object(a.jsx)(m.Provider,{value:C,children:g})}t.displayName="CacheProvider";function n(h,g){return i(h)||c(h,g)||l(h,g)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(h,g){if(!!h){if(typeof h=="string")return y(h,g);var C=Object.prototype.toString.call(h).slice(8,-1);if(C==="Object"&&h.constructor&&(C=h.constructor.name),C==="Map"||C==="Set")return Array.from(h);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return y(h,g)}}function y(h,g){(g==null||g>h.length)&&(g=h.length);for(var C=0,T=new Array(g);C<g;C++)T[C]=h[C];return T}function c(h,g){var C=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(C!=null){var T=[],K=!0,I=!1,J,H;try{for(C=C.call(h);!(K=(J=C.next()).done)&&(T.push(J.value),!(g&&T.length===g));K=!0);}catch(q){I=!0,H=q}finally{try{!K&&C.return!=null&&C.return()}finally{if(I)throw H}}return T}}function i(h){if(Array.isArray(h))return h}var d="ref";function _(h){var g;if(h.length!==1)return{args:h,ref:g};var C=n(h,1),T=C[0];if(!(T instanceof Object))return{args:h,ref:g};if(!(d in T))return{args:h,ref:g};g=T[d];var K=Object.assign({},T);return delete K[d],{args:[K],ref:g}}var u=function(){function h(C,T,K){var I=[],J=Object(B.a)(C,I,K);return I.length<2?K:J+T(I)}function g(C){var T=C.cache,K=function(){for(var H=arguments.length,q=new Array(H),ae=0;ae<H;ae++)q[ae]=arguments[ae];var ye=_(q),de=ye.ref,le=ye.args,_e=Object(G.a)(le,T.registered);return Object(B.b)(T,_e,!1),T.key+"-"+_e.name+(de===void 0?"":" "+de)},I=function(){for(var H=arguments.length,q=new Array(H),ae=0;ae<H;ae++)q[ae]=arguments[ae];return h(T.registered,K,Object(L.a)(q))};return{css:K,cx:I}}return{cssFactory:g}}(),v=u.cssFactory;function k(){var h=o();return x(function(){return v({cache:h})},[h])}},"./storybook-init-framework-entry.js":function(re,j,e){"use strict";e.r(j);var w=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,j,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,j){}},[[0,4,5]]]);
