(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,b,e){"use strict";e.r(b);var w={};e.r(w),e.d(w,"parameters",function(){return l}),e.d(w,"decorators",function(){return c});var M=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),H=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),z=e("./node_modules/core-js/modules/es.object.define-properties.js"),P=e("./node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),S=e("./node_modules/react/jsx-runtime.js");function V(u,y){return s(u)||a(u,y)||g(u,y)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(u,y){if(!!u){if(typeof u=="string")return _(u,y);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return _(u,y)}}function _(u,y){(y==null||y>u.length)&&(y=u.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=u[k];return j}function a(u,y){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],h=!0,T=!1,A,K;try{for(k=k.call(u);!(h=(A=k.next()).done)&&(j.push(A.value),!(y&&j.length===y));h=!0);}catch(D){T=!0,K=D}finally{try{!h&&k.return!=null&&k.return()}finally{if(T)throw K}}return j}}function s(u){if(Array.isArray(u))return u}var v=Object(E.createContext)(null),d=function(){var y=Object(E.useContext)(v);if(!y)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return y},o=function(y){var k=y.colorScheme,j=y.toggleColorScheme,h=y.children,T=Object(E.useState)("init"),A=V(T,2),K=A[0],D=A[1];return Object(E.useEffect)(function(){D("update")},[]),Object(S.jsx)(v.Provider,{value:{colorScheme:k,toggleColorScheme:j},children:h},K)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),n=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),l={layout:"fullscreen",docs:{theme:n.themes.light},darkMode:{current:"light"}};function p(u){var y=Object(r.useDarkMode)()?"dark":"light";return Object(S.jsx)(o,{colorScheme:y,toggleColorScheme:function(){},children:Object(S.jsx)(t.a,{theme:{colorScheme:y},withGlobalStyles:!0,withNormalizeCSS:!0,children:u.children})})}p.displayName="ThemeWrapper";var c=[function(u){return Object(S.jsx)(p,{children:u()})}];function i(u,y){var k=Object.keys(u);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(u);y&&(j=j.filter(function(h){return Object.getOwnPropertyDescriptor(u,h).enumerable})),k.push.apply(k,j)}return k}function m(u){for(var y=1;y<arguments.length;y++){var k=arguments[y]!=null?arguments[y]:{};y%2?i(Object(k),!0).forEach(function(j){f(u,j,k[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(k)):i(Object(k)).forEach(function(j){Object.defineProperty(u,j,Object.getOwnPropertyDescriptor(k,j))})}return u}function f(u,y,k){return y in u?Object.defineProperty(u,y,{value:k,enumerable:!0,configurable:!0,writable:!0}):u[y]=k,u}Object.keys(w).forEach(function(u){var y=w[u];switch(u){case"args":return Object(N.d)(y);case"argTypes":return Object(N.b)(y);case"decorators":return y.forEach(function(j){return Object(N.f)(j,!1)});case"loaders":return y.forEach(function(j){return Object(N.g)(j,!1)});case"parameters":return Object(N.h)(m({},y),!1);case"argTypesEnhancers":return y.forEach(function(j){return Object(N.c)(j)});case"argsEnhancers":return y.forEach(function(j){return Object(N.e)(j)});case"render":return Object(N.i)(y);case"globals":case"globalTypes":{var k={};return k[u]=y,Object(N.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(u+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,b,e){"use strict";(function(w){var M=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,M.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],w,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,b,e){var w={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function M(q){var Q=W(q);return e(Q)}function W(q){if(!e.o(w,q)){var Q=new Error("Cannot find module '"+q+"'");throw Q.code="MODULE_NOT_FOUND",Q}return w[q]}M.keys=function(){return Object.keys(w)},M.resolve=W,re.exports=M,M.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return a});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),J=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),U={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},ne=function(v){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.caption,fontSize:v.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b3,fontSize:v.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b2,fontSize:v.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5,fontSize:v.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5,fontSize:v.fontSizes.h5}}},B=Object.keys(U).reduce(function(s,v){return s[v]=U[v].height,s},{}),R=function(v){return{display:v?"block":"inline-block",width:v?"100%":"auto"}},C=Object(N.a)(function(s,v,d){var o,t,n,r=v.variant,l=v.size,p=v.fullWidth,c=v.roundness,i=v.line,m=d("loading"),f=d("inner"),u=d("spinner"),y=r||s.colors.navy1;return{loading:(o={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+f]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[y][s.colorScheme==="light",0],color:y==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[y][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[y][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[y][s.colorScheme==="light",0]}}},t["&:disabled:not(."+m+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[y][s.colorScheme==="light",0],color:y==="white"?s.colors.white:s.palettes[y][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[y][s.colorScheme==="light",0]}}},n["&:disabled:not(."+m+")"]={color:Object(J.a)(s.palettes[y][1],s.opacity.opacity3),border:"1px solid "+Object(J.a)(s.palettes[y][1],s.opacity.opacity3)},n),root:Object.assign({},U[l],R(p),Object(Y.b)(s),ne(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:f,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),O=e("./node_modules/react/jsx-runtime.js"),I=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function E(s,v){if(s==null)return{};var d=S(s,v),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(v.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(d[o]=s[o]))}return d}function S(s,v){if(s==null)return{};var d={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(v.indexOf(t)>=0)&&(d[t]=s[t]);return d}var V=Object(H.forwardRef)(function(s,v){var d=s.children,o=s.component,t=s.size,n=t===void 0?"medium":t,r=s.variant,l=s.line,p=s.roundness,c=p===void 0?!1:p,i=s.fullWidth,m=i===void 0?!1:i,f=s.type,u=f===void 0?"button":f,y=s.disabled,k=y===void 0?!1:y,j=s.leftIcon,h=s.rightIcon,T=s.className,A=s.co,K=s.overrideStyles,D=E(s,I),G=Object(X.c)(),F=C({variant:r,size:n,fullWidth:m,roundness:c,line:l},{overrideStyles:K,name:"Button"}),oe=F.classes,le=F.cx;return Object(O.jsx)(Z.a,Object.assign({component:o||"button",ref:v,type:u,disabled:k,className:le(oe.root,oe[l?"ghost":"solid"],T),co:A,onTouchStart:function(){}},D,{children:Object(O.jsxs)("div",{className:oe.inner,children:[j&&Object(O.jsx)("span",{className:le(oe.icon,oe.leftIcon),children:j}),Object(O.jsx)("span",{className:oe.label,children:d}),h&&Object(O.jsx)("span",{className:le(oe.icon,oe.rightIcon),children:h})]})}))});V.displayName="@travelmakers-design/core/Button";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":121},"endLoc":{"col":1,"line":127},"startBody":{"col":23,"line":121},"endBody":{"col":1,"line":127}}};
    
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
  title: "@travelmakers-design/core/Component/Button",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},x=`import {
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
  title: "@travelmakers-design/core/Component/Button",
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
`,g={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}},_=b.default={title:"@travelmakers-design/core/Component/Button",component:V,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":121},"endLoc":{"col":1,"line":127},"startBody":{"col":23,"line":121},"endBody":{"col":1,"line":127}}};
    
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
  title: "@travelmakers-design/core/Component/Button",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(M.g,{}),Object(O.jsx)(M.f,{}),Object(O.jsx)(M.b,{}),Object(O.jsx)(M.d,{}),Object(O.jsx)(M.a,{story:M.c}),Object(O.jsx)(M.e,{})]})}},actions:{handles:["click button"]}}},a=function(v){return Object(O.jsx)("div",{style:{margin:"0 auto"},children:Object(O.jsx)(V,Object.assign({},v,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return C});var w=e("./node_modules/core-js/modules/es.object.keys.js"),M=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/react/index.js"),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/core-js/modules/es.string.small.js"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),P=e("./packages/travelmakers-design-core/src/constants/index.ts"),N=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Y={xsmall:{width:P.a.xsmall,height:P.a.xsmall},small:{width:P.a.small,height:P.a.small},medium:{width:P.a.medium,height:P.a.medium},large:{width:P.a.large,height:P.a.large}},L={xsmall:8,small:8,medium:16,large:16,xlarge:24},J=Object(Z.a)(function(O,I,E){var S,V,x,g=I.variant,_=I.size,a=I.line,s=E("loading"),v=E("inner"),d=E("spinner"),o=g||O.colors.navy1;return{loading:(S={ref:s,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},S["."+v]={opacity:0},S["."+d]={display:"flex"},S),solid:(V={backgroundColor:O.palettes[o][O.colorScheme==="light",0],color:O.colorScheme==="light"?O.colors.white:O.colors.black,"&:not(:disabled):hover":{backgroundColor:O.palettes[o][O.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:O.palettes[o][O.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[o][O.colorScheme==="light",0]}}},V["&:disabled:not(."+s+")"]={backgroundColor:O.colors.gray5,color:a?O.colors.black:O.colors.white},V),ghost:(x={backgroundColor:O.colors.transparent,border:"1px solid "+O.palettes[o][O.colorScheme==="light",0],color:O.palettes[o][O.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(N.a)(O.palettes[o][O.colorScheme==="light",0],O.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(N.a)(O.palettes[o][O.colorScheme==="light",1],O.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[o][O.colorScheme==="light",0]}}},x["&:disabled:not(."+s+")"]={backgroundColor:O.colors.gray5,color:a?O.colors.black:O.colors.white},x),root:Object.assign({},Y[_],Object(z.b)(O),{borderRadius:O.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:v,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:Y[_].width-L[_],height:Y[_].height-L[_]}},spinnerWrapper:{ref:d,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),U=e("./node_modules/react/jsx-runtime.js"),ne=["children","component","size","variant","line","type","disabled","className","co","overrideStyles"];function B(O,I){if(O==null)return{};var E=R(O,I),S,V;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(O);for(V=0;V<x.length;V++)S=x[V],!(I.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,S)||(E[S]=O[S]))}return E}function R(O,I){if(O==null)return{};var E={},S=Object.keys(O),V,x;for(x=0;x<S.length;x++)V=S[x],!(I.indexOf(V)>=0)&&(E[V]=O[V]);return E}var C=Object(Q.forwardRef)(function(O,I){var E=O.children,S=O.component,V=O.size,x=V===void 0?"medium":V,g=O.variant,_=O.line,a=O.type,s=a===void 0?"button":a,v=O.disabled,d=v===void 0?!1:v,o=O.className,t=O.co,n=O.overrideStyles,r=B(O,ne),l=J({variant:g,size:x,line:_},{overrideStyles:n,name:"Button"}),p=l.classes,c=l.cx;return Object(U.jsx)(X.a,Object.assign({component:S||"button",className:c(p.root,p[_?"ghost":"solid"],o),type:s,disabled:d,ref:I,onTouchStart:function(){},co:t},r,{children:Object(U.jsx)("div",{className:p.inner,children:E})}))});C.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),H=e("./node_modules/react/index.js"),Z=e("./node_modules/react/jsx-runtime.js"),z=function(C){return Object(Z.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C,{children:Object(Z.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};z.displayName="CloseIcon",z.displayName="@travelmakers-design/core/CloseIcon";var P=["size","variant"];function N(R,C){if(R==null)return{};var O=Y(R,C),I,E;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(R);for(E=0;E<S.length;E++)I=S[E],!(C.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,I)||(O[I]=R[I]))}return O}function Y(R,C){if(R==null)return{};var O={},I=Object.keys(R),E,S;for(S=0;S<I.length;S++)E=I[S],!(C.indexOf(E)>=0)&&(O[E]=R[E]);return O}var L=Object(H.forwardRef)(function(R,C){var O=R.size,I=O===void 0?"medium":O,E=R.variant,S=E===void 0?"primary":E,V=N(R,P);return Object(Z.jsx)(X.a,Object.assign({size:I,variant:S,ref:C},V,{children:Object(Z.jsx)(z,{})}))});L.displayName="@travelmakers-design/core/CloseButton";var J=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
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
  title: "@travelmakers-design/core/Component/CloseButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:89},endLoc:{col:1,line:91},startBody:{col:23,line:89},endBody:{col:1,line:91}}},J=`import {
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
  title: "@travelmakers-design/core/Component/CloseButton",
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
`,U={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:83},startBody:{col:23,line:81},endBody:{col:1,line:83}}},ne=b.default={title:"@travelmakers-design/core/Component/CloseButton",component:L,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
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
  title: "@travelmakers-design/core/Component/CloseButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:89},endLoc:{col:1,line:91},startBody:{col:23,line:89},endBody:{col:1,line:91}}}},docs:{page:function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(M.g,{}),Object(Z.jsx)(M.f,{}),Object(Z.jsx)(M.b,{}),Object(Z.jsx)(M.d,{}),Object(Z.jsx)(M.a,{story:M.c}),Object(Z.jsx)(M.e,{})]})}},actions:{handles:["click button"]}}},B=function(C){return Object(Z.jsx)(L,Object.assign({},C))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return N});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Q=e("./node_modules/react/index.js"),X=e.n(Q),H=e("./node_modules/react/jsx-runtime.js"),Z=e.n(H),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
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
  title: "@travelmakers-design/core/Component/IconButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:89},endLoc:{col:1,line:100},startBody:{col:23,line:89},endBody:{col:1,line:100}}},z=`import {
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
  title: "@travelmakers-design/core/Component/IconButton",
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
`,P={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:92},startBody:{col:23,line:81},endBody:{col:1,line:92}}};b.default={title:"@travelmakers-design/core/Component/IconButton",component:q.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
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
  title: "@travelmakers-design/core/Component/IconButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:89},endLoc:{col:1,line:100},startBody:{col:23,line:89},endBody:{col:1,line:100}}}},docs:{page:function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(W.g,{}),Object(H.jsx)(W.f,{}),Object(H.jsx)(W.b,{}),Object(H.jsx)(W.d,{}),Object(H.jsx)(W.a,{story:W.c}),Object(H.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var N=function(L){var J=Object(H.jsx)("svg",{viewBox:"0 0 24 24",children:Object(H.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(H.jsx)(q.a,Object.assign({},L,{children:J}))};N.displayName="Default",N.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},N.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var w=e("./node_modules/core-js/modules/es.array.map.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),R=e("./node_modules/react/index.js"),C=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),O=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),I=Object(O.a)(function(h,T){var A=T.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:A?A in h.radius?h.radius[A]:A:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:h.colorScheme==="dark"?h.palettes.gray[2]:h.palettes.gray[8],backgroundColor:h.colorScheme==="dark"?h.palettes.gray[8]:h.palettes.gray[2],borderRadius:A?A in h.radius?h.radius[A]:A:0}}}),E=e("./node_modules/react/jsx-runtime.js"),S=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function V(h,T){return s(h)||a(h,T)||g(h,T)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(h,T){if(!!h){if(typeof h=="string")return _(h,T);var A=Object.prototype.toString.call(h).slice(8,-1);if(A==="Object"&&h.constructor&&(A=h.constructor.name),A==="Map"||A==="Set")return Array.from(h);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return _(h,T)}}function _(h,T){(T==null||T>h.length)&&(T=h.length);for(var A=0,K=new Array(T);A<T;A++)K[A]=h[A];return K}function a(h,T){var A=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(A!=null){var K=[],D=!0,G=!1,F,oe;try{for(A=A.call(h);!(D=(F=A.next()).done)&&(K.push(F.value),!(T&&K.length===T));D=!0);}catch(le){G=!0,oe=le}finally{try{!D&&A.return!=null&&A.return()}finally{if(G)throw oe}}return K}}function s(h){if(Array.isArray(h))return h}function v(h,T){if(h==null)return{};var A=d(h,T),K,D;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(h);for(D=0;D<G.length;D++)K=G[D],!(T.indexOf(K)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,K)||(A[K]=h[K]))}return A}function d(h,T){if(h==null)return{};var A={},K=Object.keys(h),D,G;for(G=0;G<K.length;G++)D=K[G],!(T.indexOf(D)>=0)&&(A[D]=h[D]);return A}var o=null,t="loadImage",n=function(T,A){T.forEach(function(K){K.isIntersecting&&(A.unobserve(K.target),K.target.dispatchEvent(new CustomEvent(t)))})},r=Object(R.forwardRef)(function(h,T){var A=h.lazy,K=h.threshold,D=K===void 0?.5:K,G=h.placeholder,F=h.src,oe=h.radius,le=h.width,fe=le===void 0?"100%":le,ue=h.height,se=ue===void 0?"auto":ue,ce=h.alt,pe=h.fit,ge=h.style,Ce=h.className,ke=h.co,Ee=h.overrideStyles,_e=v(h,S),te=I({radius:oe},{overrideStyles:Ee,name:"Image"}),ae=te.classes,de=te.cx,je=Object(R.useState)(!1),be=V(je,2),Te=be[0],Ie=be[1],De=Object(R.useState)(!1),xe=V(De,2),Me=xe[0],Pe=xe[1],ee=Object(R.useRef)(null),$={width:fe,height:se,objectFit:pe};return Object(R.useImperativeHandle)(T,function(){return ee.current}),Object(R.useEffect)(function(){if(!A){Pe(!0);return}var ie=function(){return Pe(!0)},me=ee.current;return me&&me.addEventListener(t,ie),function(){me&&me.removeEventListener(t,ie)}},[A]),Object(R.useEffect)(function(){!A||(o=new IntersectionObserver(n,{threshold:D}),ee.current&&o.observe(ee.current))},[A,D]),Object(E.jsxs)(C.a,Object.assign({className:de(ae.root,Ce),co:ke},_e,{children:[Object(E.jsx)("img",{ref:ee,src:F,alt:ce,className:ae.image,style:$,onLoad:function(){return Ie(!0)}}),(!Te||A&&!Me)&&G&&Object(E.jsx)("div",{className:ae.placeholder,title:ce,children:G})]}))});r.displayName="@travelmakers-design/core/Image";function l(h){return m(h)||i(h)||c(h)||p()}function p(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(h,T){if(!!h){if(typeof h=="string")return f(h,T);var A=Object.prototype.toString.call(h).slice(8,-1);if(A==="Object"&&h.constructor&&(A=h.constructor.name),A==="Map"||A==="Set")return Array.from(h);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return f(h,T)}}function i(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function m(h){if(Array.isArray(h))return f(h)}function f(h,T){(T==null||T>h.length)&&(T=h.length);for(var A=0,K=new Array(T);A<T;A++)K[A]=h[A];return K}var u=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Image } from \\"../Image\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":55},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":55}}};
    
import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}},u=`import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
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
`,y={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},k=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Image } from \\"../Image\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":55},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":55}}};
    
import { Image } from "../Image";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}}}},title:"@travelmakers-design/core/Component/Image",component:r,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},j=function(T){return Object(E.jsx)(E.Fragment,{children:l(new Array(10)).map(function(A,K){return Object(E.jsx)("div",{children:Object(E.jsx)(r,Object.assign({placeholder:Object(E.jsx)("div",{children:"Placeholder"})},T))},K)})})};j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return V}),e.d(b,"WithIcon",function(){return x}),e.d(b,"WithRightSection",function(){return g}),e.d(b,"Textarea",function(){return _});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.string.small.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),P=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),N=e("./packages/travelmakers-design-core/src/constants/index.ts"),Y=function(s,v){return s in v?v[s]:s},L={xsmall:12,small:14,medium:14,large:14,xlarge:16},J=Object(z.a)(function(a,s){var v=s.size,d=s.multiline,o=s.radius,t=s.invalid,n=a.palettes.red[a.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(P.b)(a),{height:d?"auto":Y(v,N.a),WebkitTapHighlightColor:"transparent",lineHeight:d?a.lineHeight:Y(v,N.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:Y(v,L),width:"100%",color:a.colorScheme==="dark"?a.palettes.gray[0]:a.palettes.gray[9],display:"block",textAlign:"left",minHeight:Y(v,N.a),paddingLeft:Y(v,N.a)/3,paddingRight:Y(v,N.a)/3,borderRadius:Y(o,a.radius),border:"1px solid "+(a.colorScheme==="dark"?a.palettes.gray[6]:a.palettes.gray[2]),backgroundColor:a.colorScheme==="dark"?a.palettes.gray[8]:a.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5],borderColor:a.palettes[a.colors.navy1][a.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(a.colorScheme==="dark",a.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:Y(v,N.a)+"px !important"},invalid:{color:n+" !important",borderColor:n+" !important","&::placeholder":{opacity:1,color:n+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:a.colorScheme==="dark"?a.palettes.gray[7]:a.palettes.gray[0],color:a.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:Y(v,N.a),color:t?a.palettes.red[a.colorScheme==="dark"?5:6]:a.colorScheme==="dark"?a.palettes.gray[1]:a.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),U=e("./node_modules/react/jsx-runtime.js"),ne=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function B(a,s){if(a==null)return{};var v=R(a,s),d,o;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(o=0;o<t.length;o++)d=t[o],!(s.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,d)||(v[d]=a[d]))}return v}function R(a,s){if(a==null)return{};var v={},d=Object.keys(a),o,t;for(t=0;t<d.length;t++)o=d[t],!(s.indexOf(o)>=0)&&(v[o]=a[o]);return v}var C=Object(H.forwardRef)(function(a,s){var v,d=a.component,o=a.size,t=o===void 0?"medium":o,n=a.radius,r=n===void 0?"medium":n,l=a.icon,p=a.rightSectionWidth,c=p===void 0?36:p,i=a.rightSection,m=a.rightSectionProps,f=m===void 0?{}:m,u=a.wrapperProps,y=a.invalid,k=y===void 0?!1:y,j=a.required,h=j===void 0?!1:j,T=a.disabled,A=T===void 0?!1:T,K=a.multiline,D=K===void 0?!1:K,G=a.className,F=a.style,oe=a.co,le=a.overrideStyles,fe=a.__staticSelector,ue=fe===void 0?"Input":fe,se=B(a,ne),ce=Object(X.c)(),pe=J({radius:r,size:t,multiline:D,invalid:k},{overrideStyles:le,name:ue}),ge=pe.classes,Ce=pe.cx,ke=d||"input";return Object(U.jsxs)(Z.a,Object.assign({className:Ce(ge.wrapper,G),co:oe,style:F},u,{children:[l&&Object(U.jsx)("div",{className:ge.icon,children:l}),Object(U.jsx)(ke,Object.assign({},se,{ref:s,className:Ce(ge.input,(v={},v[ge.withIcon]=l,v[ge.invalid]=k,v[ge.disabled]=A,v)),required:h,disabled:A,style:{paddingRight:i?c:ce.spacing.small}})),i&&Object(U.jsx)("div",Object.assign({},f,{style:Object.assign({},f.style,{width:c}),className:Ce(ge.rightSection,f.className),children:i}))]}))});C.displayName="@travelmakers-design/core/Input";var O=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      control: { type: \\"text\\" },\\n    },\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}},"WithIcon":{"startLoc":{"col":24,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":24,"line":51},"endBody":{"col":1,"line":57}},"WithRightSection":{"startLoc":{"col":32,"line":59},"endLoc":{"col":1,"line":76},"startBody":{"col":32,"line":59},"endBody":{"col":1,"line":76}},"Textarea":{"startLoc":{"col":24,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":24,"line":78},"endBody":{"col":1,"line":84}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,I={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},WithIcon:{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},WithRightSection:{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},Textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}},O=`import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
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
`,I={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},E=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      control: { type: \\"text\\" },\\n    },\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  // const withTooltip = (\\n  //   <Tooltip label=\\"Tutorial\\" placement=\\"bottom\\">\\n  //     Info\\n  //   </Tooltip>\\n  // );\\n\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input\\n        icon={<Icon />}\\n        // rightSection={withTooltip}\\n        rightSectionWidth={50}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}},"WithIcon":{"startLoc":{"col":24,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":24,"line":51},"endBody":{"col":1,"line":57}},"WithRightSection":{"startLoc":{"col":32,"line":59},"endLoc":{"col":1,"line":76},"startBody":{"col":32,"line":59},"endBody":{"col":1,"line":76}},"Textarea":{"startLoc":{"col":24,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":24,"line":78},"endBody":{"col":1,"line":84}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},"with-icon":{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},"with-right-section":{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}}}},title:"@travelmakers-design/core/Component/Input",component:C,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},S=function(){return Object(U.jsx)("svg",{viewBox:"0 0 24 24",children:Object(U.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};S.displayName="Icon";var V=function(s){return Object(U.jsx)("div",{style:{width:400,padding:24},children:Object(U.jsx)(C,Object.assign({},s))})};V.displayName="Default";var x=function(s){return Object(U.jsx)("div",{style:{width:400,padding:24},children:Object(U.jsx)(C,Object.assign({icon:Object(U.jsx)(S,{})},s))})};x.displayName="WithIcon";var g=function(s){return Object(U.jsx)("div",{style:{width:400,padding:24},children:Object(U.jsx)(C,Object.assign({icon:Object(U.jsx)(S,{}),rightSectionWidth:50},s))})};g.displayName="WithRightSection";var _=function(s){return Object(U.jsx)("div",{style:{width:400,padding:24},children:Object(U.jsx)(C,Object.assign({component:"textarea",multiline:!0},s))})};_.displayName="Textarea",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},V.parameters),x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},x.parameters),g.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},g.parameters),_.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},_.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return R});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Z=e("./packages/travelmakers-design-core/src/constants/index.ts"),z=Object(H.a)(function(C,O){var I=O.size,E=O.color,S=E===void 0?C.colorScheme==="light"?C.colors.black:C.colors.white:E in C.palettes?(C.colorScheme==="light",C.palettes[E][0]):E in C.colors?C.colors[E]:E;return{root:{position:"relative",display:"inline-block",width:I in Z.a?Z.a[I]:I,height:I in Z.a?Z.a[I]:I,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:S},circle:{fill:S}}}}),P=e("./node_modules/react/jsx-runtime.js"),N=["size","color","className","co","overrideStyles"];function Y(C,O){if(C==null)return{};var I=L(C,O),E,S;if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(C);for(S=0;S<V.length;S++)E=V[S],!(O.indexOf(E)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,E)||(I[E]=C[E]))}return I}function L(C,O){if(C==null)return{};var I={},E=Object.keys(C),S,V;for(V=0;V<E.length;V++)S=E[V],!(O.indexOf(S)>=0)&&(I[S]=C[S]);return I}var J=Object(M.forwardRef)(function(C,O){var I=C.size,E=I===void 0?"medium":I,S=C.color,V=C.className,x=C.co,g=C.overrideStyles,_=Y(C,N),a=z({size:E,color:S},{overrideStyles:g,name:"Spinner"}),s=a.classes,v=a.cx,d=Object(P.jsx)("i",{className:s.inner,children:Object(P.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(P.jsxs)("g",{transform:"translate(1 1)",children:[Object(P.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(P.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(P.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(P.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(P.jsx)(X.a,Object.assign({ref:O,className:v(s.root,V),co:x},_,{children:d}))});J.displayName="@travelmakers-design/core/Spinner";var U=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":19},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":19},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,ne={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},U=`import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
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
`,ne={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},B=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":19},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":19},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/core/Component/Spinner",component:J,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}},R=function(O){return Object(P.jsx)(J,Object.assign({},O))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return a});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),J=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),U={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},ne=function(v){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.caption,fontSize:v.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b3,fontSize:v.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b2,fontSize:v.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5,fontSize:v.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5,fontSize:v.fontSizes.h5}}},B=Object.keys(U).reduce(function(s,v){return s[v]=U[v].height,s},{}),R=function(v){return{display:v?"block":"inline-block",width:v?"100%":"auto"}},C=Object(N.a)(function(s,v,d){var o,t,n,r=v.variant,l=v.size,p=v.fullWidth,c=v.roundness,i=v.line,m=d("loading"),f=d("inner"),u=d("spinner"),y=r||s.colors.navy1;return{loading:(o={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+f]={opacity:0},o["."+u]={display:"flex"},o),solid:(t={backgroundColor:s.palettes[y][s.colorScheme==="light",0],color:y==="white"?s.colors.navy1:s.colors.white,"&:not(:disabled):hover":{backgroundColor:s.palettes[y][s.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:s.palettes[y][s.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[y][s.colorScheme==="light",0]}}},t["&:disabled:not(."+m+")"]={backgroundColor:s.colors.gray5,color:i?s.colors.black:s.colors.white},t),ghost:(n={backgroundColor:s.colors.transparent,border:"1px solid "+s.palettes[y][s.colorScheme==="light",0],color:y==="white"?s.colors.white:s.palettes[y][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:c?s.radius.round:2,outline:"1px solid "+s.palettes[y][s.colorScheme==="light",0]}}},n["&:disabled:not(."+m+")"]={color:Object(J.a)(s.palettes[y][1],s.opacity.opacity3),border:"1px solid "+Object(J.a)(s.palettes[y][1],s.opacity.opacity3)},n),root:Object.assign({},U[l],R(p),Object(Y.b)(s),ne(s)[l],{borderRadius:c?s.radius.round:s.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:f,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:u,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),O=e("./node_modules/react/jsx-runtime.js"),I=["children","component","family","size","variant","color","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function E(s,v){if(s==null)return{};var d=S(s,v),o,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(t=0;t<n.length;t++)o=n[t],!(v.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,o)||(d[o]=s[o]))}return d}function S(s,v){if(s==null)return{};var d={},o=Object.keys(s),t,n;for(n=0;n<o.length;n++)t=o[n],!(v.indexOf(t)>=0)&&(d[t]=s[t]);return d}var V=Object(H.forwardRef)(function(s,v){var d=s.children,o=s.component,t=s.family,n=t===void 0?"Noto Serif KR":t,r=s.size,l=r===void 0?"medium":r,p=s.variant,c=s.color,i=c===void 0?"navy":c,m=s.line,f=s.roundness,u=f===void 0?!1:f,y=s.fullWidth,k=y===void 0?!1:y,j=s.type,h=j===void 0?"button":j,T=s.disabled,A=T===void 0?!1:T,K=s.leftIcon,D=s.rightIcon,G=s.className,F=s.co,oe=s.overrideStyles,le=E(s,I),fe=Object(X.c)(),ue=C({variant:p,size:l,fullWidth:k,roundness:u,line:m},{overrideStyles:oe,name:"Button"}),se=ue.classes,ce=ue.cx;return Object(O.jsx)(Z.a,Object.assign({component:o||"button",ref:v,type:h,disabled:A,className:ce(se.root,se[m?"ghost":"solid"],G),co:F,onTouchStart:function(){}},le,{children:Object(O.jsxs)("div",{className:se.inner,children:[K&&Object(O.jsx)("span",{className:ce(se.icon,se.leftIcon),children:K}),Object(O.jsx)("span",{className:se.label,children:d}),D&&Object(O.jsx)("span",{className:ce(se.icon,se.rightIcon),children:D})]})}))});V.displayName="@travelmakers-design/core/TextButton";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../TextButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/TextButton\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":121},"endLoc":{"col":1,"line":127},"startBody":{"col":23,"line":121},"endBody":{"col":1,"line":127}}};
    
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
  title: "@travelmakers-design/core/Component/TextButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},x=`import {
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
  title: "@travelmakers-design/core/Component/TextButton",
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
`,g={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}},_=b.default={title:"@travelmakers-design/core/Component/TextButton",component:V,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../TextButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/TextButton\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":121},"endLoc":{"col":1,"line":127},"startBody":{"col":23,"line":121},"endBody":{"col":1,"line":127}}};
    
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
  title: "@travelmakers-design/core/Component/TextButton",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(M.g,{}),Object(O.jsx)(M.f,{}),Object(O.jsx)(M.b,{}),Object(O.jsx)(M.d,{}),Object(O.jsx)(M.a,{story:M.c}),Object(O.jsx)(M.e,{})]})}},actions:{handles:["click button"]}}},a=function(v){return Object(O.jsx)("div",{style:{margin:"0 auto"},children:Object(O.jsx)(V,Object.assign({},v,{children:"Button"}))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),q=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.string.italics.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y={h1:{},small:{},medium:{},large:{}},L=function(_){return{caption:{lineHeight:_.lineHeights.caption+"px",fontSize:_.fontSizes.caption},b3:{lineHeight:_.lineHeights.b3+"px",fontSize:_.fontSizes.b3},b2:{lineHeight:_.lineHeights.b2+"px",fontSize:_.fontSizes.b2},b1:{lineHeight:_.lineHeights.b1+"px",fontSize:_.fontSizes.b1},h6:{lineHeight:_.lineHeights.h6+"px",fontSize:_.fontSizes.h6},h5:{lineHeight:_.lineHeights.h5+"px",fontSize:_.fontSizes.h5},h4:{lineHeight:_.lineHeights.h4+"px",fontSize:_.fontSizes.h4},h3:{lineHeight:_.lineHeights.h3+"px",fontSize:_.fontSizes.h3},h2:{lineHeight:_.lineHeights.h2+"px",fontSize:_.fontSizes.h2},h1:{lineHeight:_.lineHeights.h1+"px",fontSize:_.fontSizes.h1}}},J=Object.keys(Y).reduce(function(g,_){return g[_]=Y[_].height,g},{}),U=function(_){return{display:"block",width:"100%"}},ne=Object(N.a)(function(g,_,a){var s,v,d=_.family,o=_.level,t=_.textAlign,n=_.disabled,r=_.strong,l=_.italic,p=_.underline,c=_.mobile,i=_.tablet,m=a("loading"),f=a("inner"),u=a("spinner");return{loading:(s={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},s["."+f]={opacity:0},s["."+u]={display:"flex"},s),solid:{fontWeight:r?d==="Noto Serif KR"?600:700:400,fontStyle:l?"italic":"normal",textDecoration:p?"underline":"none"},root:Object.assign({},Y[o],U(),L(g)[o],(v={fontFamily:""+d,color:n?g.colors.gray5:g.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+t,WebkitAppearance:"none",outline:"none",border:"none"},v[""+g.media.mobile]=Object.assign({},L(g)[c]),v[""+g.media.tablet]=Object.assign({},L(g)[i]),v)),inner:{ref:f,height:"100%",overflow:"visible"},label:{height:"100%"}}}),B=e("./node_modules/react/jsx-runtime.js"),R=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","className","co","overrideStyles"];function C(g,_){if(g==null)return{};var a=O(g,_),s,v;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(g);for(v=0;v<d.length;v++)s=d[v],!(_.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,s)||(a[s]=g[s]))}return a}function O(g,_){if(g==null)return{};var a={},s=Object.keys(g),v,d;for(d=0;d<s.length;d++)v=s[d],!(_.indexOf(v)>=0)&&(a[v]=g[v]);return a}var I=Object(W.forwardRef)(function(g,_){var a=g.children,s=g.component,v=g.family,d=v===void 0?"Noto Serif KR":v,o=g.level,t=o===void 0?"h1":o,n=g.mobileLevel,r=g.tabletLevel,l=g.textAlign,p=l===void 0?"left":l,c=g.disabled,i=c===void 0?!1:c,m=g.strong,f=m===void 0?!1:m,u=g.italic,y=u===void 0?!1:u,k=g.underline,j=k===void 0?!1:k,h=g.className,T=g.co,A=g.overrideStyles,K=C(g,R),D=Object(Z.c)(),G=ne({family:d,level:t,disabled:i,strong:f,italic:y,underline:j,textAlign:p,mobile:n,tablet:r},{overrideStyles:A,name:"span"}),F=G.classes,oe=G.cx;return Object(B.jsx)(z.a,Object.assign({component:s||"span",ref:_,type:"span",disabled:i,className:oe(F.root,F.solid,h),co:T,onTouchStart:function(){}},K,{children:Object(B.jsx)("div",{className:F.inner,children:Object(B.jsx)("span",{className:F.label,children:a})})}))});I.displayName="@travelmakers-design/core/Typography";var E=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"h1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":164},"endLoc":{"col":1,"line":199},"startBody":{"col":23,"line":164},"endBody":{"col":1,"line":199}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "h1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    family: {
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <Typography {...props} level={"h1"}>
        h1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h2"}>
        h2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h3"}>
        h3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h4"}>
        h4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h5"}>
        h5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h6"}>
        h6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b1"}>
        b1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b2"}>
        b2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b3"}>
        b3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},E=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "h1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    family: {
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <Typography {...props} level={"h1"}>
        h1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h2"}>
        h2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h3"}>
        h3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h4"}>
        h4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h5"}>
        h5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h6"}>
        h6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b1"}>
        b1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b2"}>
        b2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b3"}>
        b3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </>
  );
};
`,S={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}},V=b.default={title:"@travelmakers-design/core/General/Typography",component:I,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"h1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":164},"endLoc":{"col":1,"line":199},"startBody":{"col":23,"line":164},"endBody":{"col":1,"line":199}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "h1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    family: {
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <Typography {...props} level={"h1"}>
        h1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h2"}>
        h2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h3"}>
        h3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h4"}>
        h4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h5"}>
        h5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h6"}>
        h6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b1"}>
        b1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b2"}>
        b2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b3"}>
        b3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(M.g,{}),Object(B.jsx)(M.f,{}),Object(B.jsx)(M.b,{}),Object(B.jsx)(M.d,{}),Object(B.jsx)(M.a,{story:M.c}),Object(B.jsx)(M.e,{})]})}}}},x=function(_){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(I,Object.assign({},_,{level:"h1",children:"h1. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"h2",children:"h2. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"h3",children:"h3. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"h4",children:"h4. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"h5",children:"h5. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"h6",children:"h6. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"b1",children:"b1. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"b2",children:"b2. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"b3",children:"b3. Travelmakers Design"})),Object(B.jsx)(I,Object.assign({},_,{level:"caption",children:"caption. Travelmakers Design"}))]})};x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <Typography {...props} level={"h1"}>
        h1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h2"}>
        h2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h3"}>
        h3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h4"}>
        h4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h5"}>
        h5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h6"}>
        h6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b1"}>
        b1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b2"}>
        b2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b3"}>
        b3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return V});var w=e("./node_modules/core-js/modules/es.object.keys.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.array.map.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(N),L=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),U=e("./node_modules/react/index.js"),ne=e.n(U),B=e("./node_modules/react/jsx-runtime.js"),R=e.n(B),C=["component","className","style","co"];function O(x,g){if(x==null)return{};var _=I(x,g),a,s;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(x);for(s=0;s<v.length;s++)a=v[s],!(g.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,a)||(_[a]=x[a]))}return _}function I(x,g){if(x==null)return{};var _={},a=Object.keys(x),s,v;for(v=0;v<a.length;v++)s=a[v],!(g.indexOf(s)>=0)&&(_[s]=x[s]);return _}function E(x,g){return typeof x=="function"?x(g):x}function S(x,g){var _=Object(L.a)(),a=_.css,s=_.cx,v=Object(J.c)();return Array.isArray(x)?s(g,x.map(function(d){return a(E(d,v))})):s(g,a(E(x,v)))}var V=Object(U.forwardRef)(function(x,g){var _=x.component,a=x.className,s=x.style,v=x.co,d=O(x,C),o=_||"div";return Object(B.jsx)(o,Object.assign({ref:g,className:S(v,a),style:s},d))});V.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),X=e("./node_modules/react/jsx-runtime.js"),H=e.n(X),Z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design/core/General/View",
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
  title: "@travelmakers-design/core/General/View",
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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design/core/General/View",
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:Q.a};var P=function(){return Object(X.jsx)(Q.a,{co:function(L){return{width:100,height:100,backgroundColor:L.colors.gray3}}})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},P.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return w});var w={xsmall:24,small:28,medium:40,large:48,xlarge:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return v});var w=e("./node_modules/core-js/modules/es.string.replace.js"),M=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),q=e("./node_modules/core-js/modules/es.number.constructor.js"),Q=e("./node_modules/core-js/modules/es.parse-int.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.string.split.js"),Z=e("./node_modules/core-js/modules/es.string.starts-with.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.array.from.js");function O(d,o){return x(d)||V(d,o)||E(d,o)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(d,o){if(!!d){if(typeof d=="string")return S(d,o);var t=Object.prototype.toString.call(d).slice(8,-1);if(t==="Object"&&d.constructor&&(t=d.constructor.name),t==="Map"||t==="Set")return Array.from(d);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(d,o)}}function S(d,o){(o==null||o>d.length)&&(o=d.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=d[t];return n}function V(d,o){var t=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,p,c;try{for(t=t.call(d);!(r=(p=t.next()).done)&&(n.push(p.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function x(d){if(Array.isArray(d))return d}function g(d){var o=d.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function _(d){var o=d.replace("#",""),t=parseInt(o,16),n=t>>16&255,r=t>>8&255,l=t&255;return{r:n,g:r,b:l,a:1}}function a(d){var o=d.replace(/[^0-9,.]/g,"").split(",").map(Number),t=O(o,4),n=t[0],r=t[1],l=t[2],p=t[3];return{r:n,g:r,b:l,a:p||1}}function s(d){return g(d)?_(d):d.startsWith("rgb")?a(d):{r:0,g:0,b:0,a:1}}var v=function(o,t){var n=s(o),r=n.r,l=n.g,p=n.b;return"rgba("+r+", "+l+", "+p+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Q});var w=e("./node_modules/core-js/modules/es.array.concat.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=function(H){var Z=Object(W.useRef)(H);return Object(W.useEffect)(function(){Z.current=H},[H]),Object(W.useMemo)(function(){return function(){for(var z,P=arguments.length,N=new Array(P),Y=0;Y<P;Y++)N[Y]=arguments[Y];return(z=Z.current)===null||z===void 0?void 0:z.call.apply(z,[Z].concat(N))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),X=e("./node_modules/react/jsx-runtime.js"),H=e.n(X),Z=`
    
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var P=function(){var Y=Object(Q.a)(function(){alert("Click away from red box!")});return Object(X.jsx)("div",{children:Object(X.jsx)("div",{ref:Y,style:{width:100,height:100,backgroundColor:"red"}})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
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
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return v});var w=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.function.name.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.array.from.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S),x=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function g(d,o){var t=typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(!t){if(Array.isArray(d)||(t=_(d))||o&&d&&typeof d.length=="number"){t&&(d=t);var n=0,r=function(){};return{s:r,n:function(){return n>=d.length?{done:!0}:{done:!1,value:d[n++]}},e:function(m){throw m},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,p=!1,c;return{s:function(){t=t.call(d)},n:function(){var m=t.next();return l=m.done,m},e:function(m){p=!0,c=m},f:function(){try{!l&&t.return!=null&&t.return()}finally{if(p)throw c}}}}function _(d,o){if(!!d){if(typeof d=="string")return a(d,o);var t=Object.prototype.toString.call(d).slice(8,-1);if(t==="Object"&&d.constructor&&(t=d.constructor.name),t==="Map"||t==="Set")return Array.from(d);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(d,o)}}function a(d,o){(o==null||o>d.length)&&(o=d.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=d[t];return n}var s=["mousedown","touchstart"],v=function(o){var t=Object(S.useRef)(),n=Object(x.a)(o);return Object(S.useEffect)(function(){var r=function(m){var f=t.current;f&&!f.contains(m.target)&&n(m)},l=g(s),p;try{for(l.s();!(p=l.n()).done;){var c=p.value;document.addEventListener(c,r)}}catch(i){l.e(i)}finally{l.f()}return function(){var i=g(s),m;try{for(i.s();!(m=i.n()).done;){var f=m.value;document.removeEventListener(f,r)}}catch(u){i.e(u)}finally{i.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/web.timers.js");function U(t,n){return O(t)||C(t,n)||B(t,n)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(t,n){if(!!t){if(typeof t=="string")return R(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,n)}}function R(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function C(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],p=!0,c=!1,i,m;try{for(r=r.call(t);!(p=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));p=!0);}catch(f){c=!0,m=f}finally{try{!p&&r.return!=null&&r.return()}finally{if(c)throw m}}return l}}function O(t){if(Array.isArray(t))return t}var I=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.timeout,l=r===void 0?2e3:r,p=Object(L.useState)(null),c=U(p,2),i=c[0],m=c[1],f=Object(L.useState)(!1),u=U(f,2),y=u[0],k=u[1],j=Object(L.useState)(null),h=U(j,2),T=h[0],A=h[1],K=function(oe){clearTimeout(T),A(setTimeout(function(){return k(!1)},l)),k(oe)},D=function(oe){"clipboard"in navigator?navigator.clipboard.writeText(oe).then(function(){return K(!0)}).catch(function(le){return m(le)}):m(new Error("useClipboard: navigator.clipboard is not supported"))},G=function(){k(!1),m(null),clearTimeout(T)};return{copy:D,reset:G,error:i,copied:y}},E=e("./node_modules/react/jsx-runtime.js");function S(t,n){return a(t)||_(t,n)||x(t,n)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,n){if(!!t){if(typeof t=="string")return g(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,n)}}function g(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function _(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],p=!0,c=!1,i,m;try{for(r=r.call(t);!(p=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));p=!0);}catch(f){c=!0,m=f}finally{try{!p&&r.return!=null&&r.return()}finally{if(c)throw m}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},s=`import React, { useState } from "react";

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
`,v={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},d=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},o=function(){var n=Object(L.useState)(""),r=S(n,2),l=r[0],p=r[1],c=I({timeout:3e3}),i=c.copy,m=c.copied;return Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{type:"text",onChange:function(u){return p(u.target.value)}}),Object(E.jsx)("button",{onClick:function(){return i(l)},children:"copy"}),Object(E.jsx)("span",{children:m&&"Copied!!"})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return z});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),q=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},Q=e("./node_modules/react/jsx-runtime.js"),X=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},X=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},Z=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},z=function(){var N=q();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:N})})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},z.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),U=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ne(n,r){return I(n)||O(n,r)||R(n,r)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(n,r){if(!!n){if(typeof n=="string")return C(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return C(n,r)}}function C(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,p=new Array(r);l<r;l++)p[l]=n[l];return p}function O(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var p=[],c=!0,i=!1,m,f;try{for(l=l.call(n);!(c=(m=l.next()).done)&&(p.push(m.value),!(r&&p.length===r));c=!0);}catch(u){i=!0,f=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw f}}return p}}function I(n){if(Array.isArray(n))return n}var E=function(r,l,p){var c=Object(U.a)(r,l),i=ne(c,2),m=i[0],f=i[1];return Object(J.a)(m,p),f},S=e("./node_modules/react/jsx-runtime.js");function V(n,r){return s(n)||a(n,r)||g(n,r)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(n,r){if(!!n){if(typeof n=="string")return _(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return _(n,r)}}function _(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,p=new Array(r);l<r;l++)p[l]=n[l];return p}function a(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var p=[],c=!0,i=!1,m,f;try{for(l=l.call(n);!(c=(m=l.next()).done)&&(p.push(m.value),!(r&&p.length===r));c=!0);}catch(u){i=!0,f=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw f}}return p}}function s(n){if(Array.isArray(n))return n}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},v=`import React, { useState } from "react";

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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},o=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},t=function(){var r=Object(L.useState)(""),l=V(r,2),p=l[0],c=l[1],i=E(function(){alert("Updated!")},1e3,[p]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"text",onChange:function(f){return c(f.target.value)}}),Object(S.jsx)("button",{onClick:i,children:"Cancel"})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./node_modules/react/jsx-runtime.js"),H=e.n(X),Z=`
    
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var P=function(){var Y=Object(Q.a)();return Object(X.jsxs)("div",{children:[Math.random(),Object(X.jsx)("button",{onClick:Y,children:"Update"})]})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S);function x(t,n){return v(t)||s(t,n)||_(t,n)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],p=!0,c=!1,i,m;try{for(r=r.call(t);!(p=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));p=!0);}catch(f){c=!0,m=f}finally{try{!p&&r.return!=null&&r.return()}finally{if(c)throw m}}return l}}function v(t){if(Array.isArray(t))return t}var d=function(n){return(n+1)%1e6},o=function(){var n=Object(S.useReducer)(d,0),r=x(n,2),l=r[1];return l}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.string.split.js"),U=e("./node_modules/core-js/modules/es.regexp.exec.js"),ne=e("./node_modules/core-js/modules/es.string.replace.js"),B=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.regexp.to-string.js"),C=e("./node_modules/core-js/modules/es.date.to-string.js");function O(f,u){var y=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!y){if(Array.isArray(f)||(y=I(f))||u&&f&&typeof f.length=="number"){y&&(f=y);var k=0,j=function(){};return{s:j,n:function(){return k>=f.length?{done:!0}:{done:!1,value:f[k++]}},e:function(K){function D(G){return K.apply(this,arguments)}return D.toString=function(){return K.toString()},D}(function(K){throw K}),f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h=!0,T=!1,A;return{s:function(){y=y.call(f)},n:function(){var D=y.next();return h=D.done,D},e:function(K){function D(G){return K.apply(this,arguments)}return D.toString=function(){return K.toString()},D}(function(K){T=!0,A=K}),f:function(){try{!h&&y.return!=null&&y.return()}finally{if(T)throw A}}}}function I(f,u){if(!!f){if(typeof f=="string")return E(f,u);var y=Object.prototype.toString.call(f).slice(8,-1);if(y==="Object"&&f.constructor&&(y=f.constructor.name),y==="Map"||y==="Set")return Array.from(f);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return E(f,u)}}function E(f,u){(u==null||u>f.length)&&(u=f.length);for(var y=0,k=new Array(u);y<u;y++)k[y]=f[y];return k}var S={alt:1,ctrl:2,meta:4,shift:8},V={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},x={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},g=function(u){var y=u.key!==" "?u.key.toLowerCase():"space",k=0;return u.altKey&&(k+=S.alt),u.ctrlKey&&(k+=S.ctrl),u.metaKey&&(k+=S.meta),u.shiftKey&&(k+=S.shift),{modifiers:k,key:y}},_=function(u){var y=u.replace(/\s/g,"").toLowerCase().split("+"),k=0,j,h=O(y),T;try{for(h.s();!(T=h.n()).done;){var A=T.value;S[A]?k+=S[A]:S[x[A]]?k+=S[x[A]]:V[A]?(k+=S.shift,j=V[A]):x[A]?j=x[A]:j=A}}catch(K){h.e(K)}finally{h.f()}return{modifiers:k,key:j}},a=function(u,y){return u.modifiers===y.modifiers&&u.key===y.key},s=function(u){var y=Object(L.useMemo)(function(){return u.filter(function(D){return!D.global})},[u]),k=Object(L.useMemo)(function(){return u.filter(function(D){return D.global})},[u]),j=Object(L.useCallback)(function(D,G,F,oe){var le=O(D?k:y),fe;try{for(le.s();!(fe=le.n()).done;){var ue=fe.value;if(a(_(ue.combo),G)){var se;(se=ue[F])===null||se===void 0||se.call(ue,oe)}}}catch(ce){le.e(ce)}finally{le.f()}},[y,k]),h=Object(L.useCallback)(function(D){j(!0,g(D),"onKeyDown",D)},[j]),T=Object(L.useCallback)(function(D){j(!0,g(D),"onKeyUp",D)},[j]),A=Object(L.useCallback)(function(D){j(!1,g(D.nativeEvent),"onKeyDown",D.nativeEvent)},[j]),K=Object(L.useCallback)(function(D){j(!1,g(D.nativeEvent),"onKeyUp",D.nativeEvent)},[j]);return Object(L.useEffect)(function(){return document.addEventListener("keydown",h),document.addEventListener("keyup",T),function(){document.removeEventListener("keydown",h),document.removeEventListener("keyup",T)}},[h,T]),{handleKeyDown:A,handleKeyUp:K}},v=e("./node_modules/react/jsx-runtime.js");function d(f,u){return l(f)||r(f,u)||t(f,u)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(f,u){if(!!f){if(typeof f=="string")return n(f,u);var y=Object.prototype.toString.call(f).slice(8,-1);if(y==="Object"&&f.constructor&&(y=f.constructor.name),y==="Map"||y==="Set")return Array.from(f);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(f,u)}}function n(f,u){(u==null||u>f.length)&&(u=f.length);for(var y=0,k=new Array(u);y<u;y++)k[y]=f[y];return k}function r(f,u){var y=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(y!=null){var k=[],j=!0,h=!1,T,A;try{for(y=y.call(f);!(j=(T=y.next()).done)&&(k.push(T.value),!(u&&k.length===u));j=!0);}catch(K){h=!0,A=K}finally{try{!j&&y.return!=null&&y.return()}finally{if(h)throw A}}return k}}function l(f){if(Array.isArray(f))return f}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},p=`import React, { useRef, useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},m=function(){var u=Object(L.useRef)(null),y=Object(L.useState)(""),k=d(y,2),j=k[0],h=k[1],T=s([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){u.current.select()}},{combo:"shift+r",onKeyUp:function(){h("")}}]),A=T.handleKeyDown,K=T.handleKeyUp;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{ref:u,type:"text",value:j,onChange:function(G){return h(G.target.value)},onKeyDown:A,onKeyUp:K})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(I),S=e("./node_modules/core-js/modules/es.array.from.js"),V=e.n(S),x=e("./node_modules/react/index.js"),g=e.n(x),_=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),a=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),s=e("./node_modules/react/jsx-runtime.js"),v=e.n(s);function d(m,f){return l(m)||r(m,f)||t(m,f)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(m,f){if(!!m){if(typeof m=="string")return n(m,f);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return n(m,f)}}function n(m,f){(f==null||f>m.length)&&(f=m.length);for(var u=0,y=new Array(f);u<f;u++)y[u]=m[u];return y}function r(m,f){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var y=[],k=!0,j=!1,h,T;try{for(u=u.call(m);!(k=(h=u.next()).done)&&(y.push(h.value),!(f&&y.length===f));k=!0);}catch(A){j=!0,T=A}finally{try{!k&&u.return!=null&&u.return()}finally{if(j)throw T}}return y}}function l(m){if(Array.isArray(m))return m}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},p=`import React, { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var i=function(){var f=Object(a.a)(),u=d(f,2),y=u[0],k=u[1],j=Object(_.a)();return Object(x.useEffect)(function(){j()},[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{ref:k,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+y]})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return d});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S);function x(o,t){return v(o)||s(o,t)||_(o,t)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function v(o){if(Array.isArray(o))return o}var d=function(){var t=Object(S.useRef)(null),n=Object(S.useState)(!1),r=x(n,2),l=r[0],p=r[1],c=Object(S.useCallback)(function(){return p(!0)},[]),i=Object(S.useCallback)(function(){return p(!1)},[]);return Object(S.useEffect)(function(){var m=t.current;if(!!m)return m.addEventListener("mouseenter",c),m.addEventListener("mouseleave",i),function(){m.removeEventListener("mouseenter",c),m.removeEventListener("mouseleave",i)}},[t.current]),[l,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),X=e("./node_modules/react/jsx-runtime.js"),H=e.n(X),Z=`
    
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var P=function(){var Y=Object(Q.a)();return Object(X.jsx)("div",{children:Object(X.jsx)("div",{children:Y})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S);function x(t,n){return v(t)||s(t,n)||_(t,n)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,n){if(!!t){if(typeof t=="string")return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}}function a(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function s(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],p=!0,c=!1,i,m;try{for(r=r.call(t);!(p=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));p=!0);}catch(f){c=!0,m=f}finally{try{!p&&r.return!=null&&r.return()}finally{if(c)throw m}}return l}}function v(t){if(Array.isArray(t))return t}var d=0,o=function(n){var r=Object(S.useState)(n),l=x(r,2),p=l[0],c=l[1],i=n||p;return Object(S.useEffect)(function(){p==null&&(d+=1,c("tm-"+d))},[p]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return v});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),q=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),ne=e("./node_modules/core-js/modules/es.array.from.js");function B(d,o){return E(d)||I(d,o)||C(d,o)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(d,o){if(!!d){if(typeof d=="string")return O(d,o);var t=Object.prototype.toString.call(d).slice(8,-1);if(t==="Object"&&d.constructor&&(t=d.constructor.name),t==="Map"||t==="Set")return Array.from(d);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(d,o)}}function O(d,o){(o==null||o>d.length)&&(o=d.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=d[t];return n}function I(d,o){var t=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,p,c;try{for(t=t.call(d);!(r=(p=t.next()).done)&&(n.push(p.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function E(d){if(Array.isArray(d))return d}var S=["keypress","mousemove","touchmove","click","scroll"],V={events:S,initialState:!0},x=function(o,t){var n=Object.assign({},V,t),r=n.events,l=n.initialState,p=Object(M.useState)(l),c=B(p,2),i=c[0],m=c[1],f=Object(M.useRef)();return Object(M.useEffect)(function(){var u=function(){m(!1),f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(function(){m(!0)},o)};return r.forEach(function(y){return document.addEventListener(y,u)}),function(){r.forEach(function(y){return document.removeEventListener(y,u)})}},[o]),i},g=e("./node_modules/react/jsx-runtime.js"),_=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},_=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},v=function(){var o=x(3e3);return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:["Idle: ",""+o]})})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function J(o,t){return C(o)||R(o,t)||ne(o,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(o,t){if(!!o){if(typeof o=="string")return B(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(o,t)}}function B(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function R(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function C(o){if(Array.isArray(o))return o}var O=function(t){var n=Object(L.useState)(null),r=J(n,2),l=r[0],p=r[1],c=Object(L.useRef)(),i=Object(L.useCallback)(function(m){if(c.current&&(c.current.disconnect(),c.current=null),m===null){p(null);return}c.current=new IntersectionObserver(function(f){var u=J(f,1),y=u[0];p(y)},t),c.current.observe(m)},[t==null?void 0:t.rootMargin,t==null?void 0:t.root,t==null?void 0:t.threshold]);return[i,l]},I=e("./node_modules/react/jsx-runtime.js");function E(o,t){return _(o)||g(o,t)||V(o,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(o,t){if(!!o){if(typeof o=="string")return x(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(o,t)}}function x(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function g(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function _(o){if(Array.isArray(o))return o}var a=`
    
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},v=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},d=function(){var t=Object(L.useRef)(null),n=O({root:t.current,threshold:.5}),r=E(n,2),l=r[0],p=r[1];return Object(I.jsx)("div",{ref:t,style:{width:300,height:300,overflowY:"scroll"},children:Object(I.jsx)("div",{style:{height:500},children:Object(I.jsx)("div",{ref:l,style:{marginTop:290,height:50,backgroundColor:p!=null&&p.isIntersecting?"green":"red"},children:p!=null&&p.isIntersecting?"Half visible":"Obscured"})})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function U(_,a){return O(_)||C(_,a)||B(_,a)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(_,a){if(!!_){if(typeof _=="string")return R(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return R(_,a)}}function R(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,v=new Array(a);s<a;s++)v[s]=_[s];return v}function C(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var v=[],d=!0,o=!1,t,n;try{for(s=s.call(_);!(d=(t=s.next()).done)&&(v.push(t.value),!(a&&v.length===a));d=!0);}catch(r){o=!0,n=r}finally{try{!d&&s.return!=null&&s.return()}finally{if(o)throw n}}return v}}function O(_){if(Array.isArray(_))return _}var I=function(a,s){var v=Object(J.a)(a,s),d=U(v,2),o=d[0],t=d[1];return Object(M.useEffect)(function(){return o(),t},[o,t]),t},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,V={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},g=function(){var a=I(function(){alert("fire")},3e3);return Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:a,children:"clear"})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(I),S=e("./node_modules/core-js/modules/es.array.from.js"),V=e.n(S),x=e("./node_modules/react/index.js"),g=e.n(x),_=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function v(i,m){return r(i)||n(i,m)||o(i,m)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,m){if(!!i){if(typeof i=="string")return t(i,m);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return t(i,m)}}function t(i,m){(m==null||m>i.length)&&(m=i.length);for(var f=0,u=new Array(m);f<m;f++)u[f]=i[f];return u}function n(i,m){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var u=[],y=!0,k=!1,j,h;try{for(f=f.call(i);!(y=(j=f.next()).done)&&(u.push(j.value),!(m&&u.length===m));y=!0);}catch(T){k=!0,h=T}finally{try{!y&&f.return!=null&&f.return()}finally{if(k)throw h}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},l=`import React from "react";
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
`,p={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var c=function(){var m=Object(_.a)(function(){alert("fire")},3e3),f=v(m,2),u=f[0],y=f[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:u,children:"run"}),Object(a.jsx)("button",{onClick:y,children:"clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return X});var w=e("./node_modules/core-js/modules/web.timers.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(Z,z){var P=Object(W.useRef)(),N=Object(Q.a)(Z),Y=Object(W.useCallback)(function(){P.current&&clearInterval(P.current),P.current=setInterval(function(){N()},z)},[z]),L=Object(W.useCallback)(function(){P.current&&clearInterval(P.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[Y,L]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=typeof document!="undefined"?L.useLayoutEffect:L.useEffect,U=e("./node_modules/react/jsx-runtime.js");function ne(g,_){return I(g)||O(g,_)||R(g,_)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(g,_){if(!!g){if(typeof g=="string")return C(g,_);var a=Object.prototype.toString.call(g).slice(8,-1);if(a==="Object"&&g.constructor&&(a=g.constructor.name),a==="Map"||a==="Set")return Array.from(g);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(g,_)}}function C(g,_){(_==null||_>g.length)&&(_=g.length);for(var a=0,s=new Array(_);a<_;a++)s[a]=g[a];return s}function O(g,_){var a=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(a!=null){var s=[],v=!0,d=!1,o,t;try{for(a=a.call(g);!(v=(o=a.next()).done)&&(s.push(o.value),!(_&&s.length===_));v=!0);}catch(n){d=!0,t=n}finally{try{!v&&a.return!=null&&a.return()}finally{if(d)throw t}}return s}}function I(g){if(Array.isArray(g))return g}var E=`
    
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
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},V=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},x=function(){var _=Object(L.useState)(!1),a=ne(_,2),s=a[0],v=a[1];return J(function(){v(!0)},[]),Object(U.jsx)("div",{children:s&&"mounted"})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function J(g,_){return C(g)||R(g,_)||ne(g,_)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(g,_){if(!!g){if(typeof g=="string")return B(g,_);var a=Object.prototype.toString.call(g).slice(8,-1);if(a==="Object"&&g.constructor&&(a=g.constructor.name),a==="Map"||a==="Set")return Array.from(g);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(g,_)}}function B(g,_){(_==null||_>g.length)&&(_=g.length);for(var a=0,s=new Array(_);a<_;a++)s[a]=g[a];return s}function R(g,_){var a=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(a!=null){var s=[],v=!0,d=!1,o,t;try{for(a=a.call(g);!(v=(o=a.next()).done)&&(s.push(o.value),!(_&&s.length===_));v=!0);}catch(n){d=!0,t=n}finally{try{!v&&a.return!=null&&a.return()}finally{if(d)throw t}}return s}}function C(g){if(Array.isArray(g))return g}var O=function(_){var a=Object(M.useState)(!1),s=J(a,2),v=s[0],d=s[1],o=Object(M.useCallback)(function(n){var r=n.key;r===_&&d(!0)},[_]),t=Object(M.useCallback)(function(n){var r=n.key;r===_&&d(!1)},[_]);return Object(M.useEffect)(function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",t)}},[o,t]),v},I=e("./node_modules/react/jsx-runtime.js"),E=`
    
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
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},V=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},x=function(){var _=O("r");return Object(I.jsx)("div",{children:_&&"r key pressed"})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var w=e("./node_modules/core-js/modules/es.array.map.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./node_modules/react/index.js"),U=e("./node_modules/core-js/modules/es.array.concat.js"),ne=e("./node_modules/core-js/modules/es.array.filter.js"),B=e("./node_modules/core-js/modules/es.array.includes.js"),R=e("./node_modules/core-js/modules/es.string.includes.js");function C(u){return E(u)||I(u)||x(u)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function E(u){if(Array.isArray(u))return g(u)}function S(u,y){return a(u)||_(u,y)||x(u,y)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,y){if(!!u){if(typeof u=="string")return g(u,y);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return g(u,y)}}function g(u,y){(y==null||y>u.length)&&(y=u.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=u[k];return j}function _(u,y){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],h=!0,T=!1,A,K;try{for(k=k.call(u);!(h=(A=k.next()).done)&&(j.push(A.value),!(y&&j.length===y));h=!0);}catch(D){T=!0,K=D}finally{try{!h&&k.return!=null&&k.return()}finally{if(T)throw K}}return j}}function a(u){if(Array.isArray(u))return u}var s=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=Object(J.useState)(y),j=S(k,2),h=j[0],T=j[1],A=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),ce=0;ce<ue;ce++)se[ce]=arguments[ce];return T(function(pe){return[].concat(C(pe),se)})},[]),K=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),ce=0;ce<ue;ce++)se[ce]=arguments[ce];return T(function(pe){return[].concat(se,C(pe))})},[]),D=Object(J.useCallback)(function(ue){for(var se=arguments.length,ce=new Array(se>1?se-1:0),pe=1;pe<se;pe++)ce[pe-1]=arguments[pe];return T(function(ge){return[].concat(C(ge.slice(0,ue)),ce,C(ge.slice(ue)))})},[]),G=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),ce=0;ce<ue;ce++)se[ce]=arguments[ce];return T(function(pe){return pe.filter(function(ge,Ce){return!se.includes(Ce)})})},[]),F=Object(J.useCallback)(function(){var ue=C(h),se=ue.pop();return T(ue),se},[h]),oe=Object(J.useCallback)(function(){var ue=C(h),se=ue.shift();return T(ue),se},[h]),le=Object(J.useCallback)(function(ue,se){T(function(ce){var pe=C(ce);return pe[ue]=se,pe})},[]),fe={setState:T,append:A,prepend:K,insert:D,remove:G,pop:F,shift:oe,setItem:le};return[h,fe]},v=e("./node_modules/react/jsx-runtime.js");function d(u,y){return l(u)||r(u,y)||t(u,y)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(u,y){if(!!u){if(typeof u=="string")return n(u,y);var k=Object.prototype.toString.call(u).slice(8,-1);if(k==="Object"&&u.constructor&&(k=u.constructor.name),k==="Map"||k==="Set")return Array.from(u);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(u,y)}}function n(u,y){(y==null||y>u.length)&&(y=u.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=u[k];return j}function r(u,y){var k=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(k!=null){var j=[],h=!0,T=!1,A,K;try{for(k=k.call(u);!(h=(A=k.next()).done)&&(j.push(A.value),!(y&&j.length===y));h=!0);}catch(D){T=!0,K=D}finally{try{!h&&k.return!=null&&k.return()}finally{if(T)throw K}}return j}}function l(u){if(Array.isArray(u))return u}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},p=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},m=5,f=function(){var y=s(["Item 1","Item 2","Item 3","Item 4","Item 5"]),k=d(y,2),j=k[0],h=k[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return h.append("Item "+ ++m)},children:"append"}),Object(v.jsx)("button",{onClick:function(){return h.pop()},children:"pop"}),Object(v.jsx)("button",{onClick:function(){return h.prepend("Item "+ ++m)},children:"prepend"}),Object(v.jsx)("button",{onClick:function(){return h.shift()},children:"shift"}),Object(v.jsx)("button",{onClick:function(){return h.setItem(3,"Updated")},children:"setItem 3 index"}),Object(v.jsx)("button",{onClick:function(){return h.remove(2,3)},children:"remove 2, 3 index"}),Object(v.jsx)("button",{onClick:function(){return h.insert(3,"Item "+ ++m)},children:"insert 3 index"})]}),Object(v.jsx)("ul",{children:j.map(function(T,A){return Object(v.jsx)("li",{children:T},A)})})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var w=e("./node_modules/core-js/modules/es.promise.js"),M=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),U=e("./node_modules/react/index.js"),ne=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),B=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),R=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),C=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),O=e("./node_modules/core-js/modules/es.object.define-property.js"),I=e("./node_modules/core-js/modules/es.object.create.js"),E=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),V=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),x=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),g=e("./node_modules/core-js/modules/es.array.reverse.js"),_=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return D};var D={},G=Object.prototype,F=G.hasOwnProperty,oe=typeof Symbol=="function"?Symbol:{},le=oe.iterator||"@@iterator",fe=oe.asyncIterator||"@@asyncIterator",ue=oe.toStringTag||"@@toStringTag";function se(ee,$,ie){return Object.defineProperty(ee,$,{value:ie,enumerable:!0,configurable:!0,writable:!0}),ee[$]}try{se({},"")}catch(ee){se=function(ie,me,ve){return ie[me]=ve}}function ce(ee,$,ie,me){var ve=$&&$.prototype instanceof Ce?$:Ce,ye=Object.create(ve.prototype),Oe=new xe(me||[]);return ye._invoke=function(Ae,Le,he){var Se="suspendedStart";return function(Re,Ve){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Re==="throw")throw Ve;return Pe()}for(he.method=Re,he.arg=Ve;;){var Ke=he.delegate;if(Ke){var Ue=Te(Ke,he);if(Ue){if(Ue===ge)continue;return Ue}}if(he.method==="next")he.sent=he._sent=he.arg;else if(he.method==="throw"){if(Se==="suspendedStart")throw Se="completed",he.arg;he.dispatchException(he.arg)}else he.method==="return"&&he.abrupt("return",he.arg);Se="executing";var Be=pe(Ae,Le,he);if(Be.type==="normal"){if(Se=he.done?"completed":"suspendedYield",Be.arg===ge)continue;return{value:Be.arg,done:he.done}}Be.type==="throw"&&(Se="completed",he.method="throw",he.arg=Be.arg)}}}(ee,ie,Oe),ye}function pe(ee,$,ie){try{return{type:"normal",arg:ee.call($,ie)}}catch(me){return{type:"throw",arg:me}}}D.wrap=ce;var ge={};function Ce(){}function ke(){}function Ee(){}var _e={};se(_e,le,function(){return this});var te=Object.getPrototypeOf,ae=te&&te(te(Me([])));ae&&ae!==G&&F.call(ae,le)&&(_e=ae);var de=Ee.prototype=Ce.prototype=Object.create(_e);function je(ee){["next","throw","return"].forEach(function($){se(ee,$,function(ie){return this._invoke($,ie)})})}function be(ee,$){function ie(ve,ye,Oe,Ae){var Le=pe(ee[ve],ee,ye);if(Le.type!=="throw"){var he=Le.arg,Se=he.value;return Se&&typeof Se=="object"&&F.call(Se,"__await")?$.resolve(Se.__await).then(function(Re){ie("next",Re,Oe,Ae)},function(Re){ie("throw",Re,Oe,Ae)}):$.resolve(Se).then(function(Re){he.value=Re,Oe(he)},function(Re){return ie("throw",Re,Oe,Ae)})}Ae(Le.arg)}var me;this._invoke=function(ve,ye){function Oe(){return new $(function(Ae,Le){ie(ve,ye,Ae,Le)})}return me=me?me.then(Oe,Oe):Oe()}}function Te(ee,$){var ie=ee.iterator[$.method];if(ie===void 0){if($.delegate=null,$.method==="throw"){if(ee.iterator.return&&($.method="return",$.arg=void 0,Te(ee,$),$.method==="throw"))return ge;$.method="throw",$.arg=new TypeError("The iterator does not provide a 'throw' method")}return ge}var me=pe(ie,ee.iterator,$.arg);if(me.type==="throw")return $.method="throw",$.arg=me.arg,$.delegate=null,ge;var ve=me.arg;return ve?ve.done?($[ee.resultName]=ve.value,$.next=ee.nextLoc,$.method!=="return"&&($.method="next",$.arg=void 0),$.delegate=null,ge):ve:($.method="throw",$.arg=new TypeError("iterator result is not an object"),$.delegate=null,ge)}function Ie(ee){var $={tryLoc:ee[0]};1 in ee&&($.catchLoc=ee[1]),2 in ee&&($.finallyLoc=ee[2],$.afterLoc=ee[3]),this.tryEntries.push($)}function De(ee){var $=ee.completion||{};$.type="normal",delete $.arg,ee.completion=$}function xe(ee){this.tryEntries=[{tryLoc:"root"}],ee.forEach(Ie,this),this.reset(!0)}function Me(ee){if(ee){var $=ee[le];if($)return $.call(ee);if(typeof ee.next=="function")return ee;if(!isNaN(ee.length)){var ie=-1,me=function ve(){for(;++ie<ee.length;)if(F.call(ee,ie))return ve.value=ee[ie],ve.done=!1,ve;return ve.value=void 0,ve.done=!0,ve};return me.next=me}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return ke.prototype=Ee,se(de,"constructor",Ee),se(Ee,"constructor",ke),ke.displayName=se(Ee,ue,"GeneratorFunction"),D.isGeneratorFunction=function(ee){var $=typeof ee=="function"&&ee.constructor;return!!$&&($===ke||($.displayName||$.name)==="GeneratorFunction")},D.mark=function(ee){return Object.setPrototypeOf?Object.setPrototypeOf(ee,Ee):(ee.__proto__=Ee,se(ee,ue,"GeneratorFunction")),ee.prototype=Object.create(de),ee},D.awrap=function(ee){return{__await:ee}},je(be.prototype),se(be.prototype,fe,function(){return this}),D.AsyncIterator=be,D.async=function(ee,$,ie,me,ve){ve===void 0&&(ve=Promise);var ye=new be(ce(ee,$,ie,me),ve);return D.isGeneratorFunction($)?ye:ye.next().then(function(Oe){return Oe.done?Oe.value:ye.next()})},je(de),se(de,ue,"Generator"),se(de,le,function(){return this}),se(de,"toString",function(){return"[object Generator]"}),D.keys=function(ee){var $=[];for(var ie in ee)$.push(ie);return $.reverse(),function me(){for(;$.length;){var ve=$.pop();if(ve in ee)return me.value=ve,me.done=!1,me}return me.done=!0,me}},D.values=Me,xe.prototype={constructor:xe,reset:function($){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(De),!$)for(var ie in this)ie.charAt(0)==="t"&&F.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var $=this.tryEntries[0].completion;if($.type==="throw")throw $.arg;return this.rval},dispatchException:function($){if(this.done)throw $;var ie=this;function me(he,Se){return Oe.type="throw",Oe.arg=$,ie.next=he,Se&&(ie.method="next",ie.arg=void 0),!!Se}for(var ve=this.tryEntries.length-1;ve>=0;--ve){var ye=this.tryEntries[ve],Oe=ye.completion;if(ye.tryLoc==="root")return me("end");if(ye.tryLoc<=this.prev){var Ae=F.call(ye,"catchLoc"),Le=F.call(ye,"finallyLoc");if(Ae&&Le){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}else if(Ae){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0)}else{if(!Le)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}}}},abrupt:function($,ie){for(var me=this.tryEntries.length-1;me>=0;--me){var ve=this.tryEntries[me];if(ve.tryLoc<=this.prev&&F.call(ve,"finallyLoc")&&this.prev<ve.finallyLoc){var ye=ve;break}}ye&&($==="break"||$==="continue")&&ye.tryLoc<=ie&&ie<=ye.finallyLoc&&(ye=null);var Oe=ye?ye.completion:{};return Oe.type=$,Oe.arg=ie,ye?(this.method="next",this.next=ye.finallyLoc,ge):this.complete(Oe)},complete:function($,ie){if($.type==="throw")throw $.arg;return $.type==="break"||$.type==="continue"?this.next=$.arg:$.type==="return"?(this.rval=this.arg=$.arg,this.method="return",this.next="end"):$.type==="normal"&&ie&&(this.next=ie),ge},finish:function($){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var me=this.tryEntries[ie];if(me.finallyLoc===$)return this.complete(me.completion,me.afterLoc),De(me),ge}},catch:function($){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var me=this.tryEntries[ie];if(me.tryLoc===$){var ve=me.completion;if(ve.type==="throw"){var ye=ve.arg;De(me)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function($,ie,me){return this.delegate={iterator:Me($),resultName:ie,nextLoc:me},this.method==="next"&&(this.arg=void 0),ge}},D}function s(D,G,F,oe,le,fe,ue){try{var se=D[fe](ue),ce=se.value}catch(pe){F(pe);return}se.done?G(ce):Promise.resolve(ce).then(oe,le)}function v(D){return function(){var G=this,F=arguments;return new Promise(function(oe,le){var fe=D.apply(G,F);function ue(ce){s(fe,oe,le,ue,se,"next",ce)}function se(ce){s(fe,oe,le,ue,se,"throw",ce)}ue(void 0)})}}function d(D,G){return l(D)||r(D,G)||t(D,G)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(D,G){if(!!D){if(typeof D=="string")return n(D,G);var F=Object.prototype.toString.call(D).slice(8,-1);if(F==="Object"&&D.constructor&&(F=D.constructor.name),F==="Map"||F==="Set")return Array.from(D);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return n(D,G)}}function n(D,G){(G==null||G>D.length)&&(G=D.length);for(var F=0,oe=new Array(G);F<G;F++)oe[F]=D[F];return oe}function r(D,G){var F=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(F!=null){var oe=[],le=!0,fe=!1,ue,se;try{for(F=F.call(D);!(le=(ue=F.next()).done)&&(oe.push(ue.value),!(G&&oe.length===G));le=!0);}catch(ce){fe=!0,se=ce}finally{try{!le&&F.return!=null&&F.return()}finally{if(fe)throw se}}return oe}}function l(D){if(Array.isArray(D))return D}var p=function(G){var F=Object(U.useState)(!1),oe=d(F,2),le=oe[0],fe=oe[1],ue=Object(_.a)(G),se=Object(U.useCallback)(v(a().mark(function ce(){var pe,ge=arguments;return a().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:return fe(!0),ke.next=3,ue.apply(void 0,ge);case 3:return pe=ke.sent,fe(!1),ke.abrupt("return",pe);case 6:case"end":return ke.stop()}},ce)})),[G]);return[le,se]},c=e("./node_modules/react/jsx-runtime.js");function i(D,G){return k(D)||y(D,G)||f(D,G)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(D,G){if(!!D){if(typeof D=="string")return u(D,G);var F=Object.prototype.toString.call(D).slice(8,-1);if(F==="Object"&&D.constructor&&(F=D.constructor.name),F==="Map"||F==="Set")return Array.from(D);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return u(D,G)}}function u(D,G){(G==null||G>D.length)&&(G=D.length);for(var F=0,oe=new Array(G);F<G;F++)oe[F]=D[F];return oe}function y(D,G){var F=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(F!=null){var oe=[],le=!0,fe=!1,ue,se;try{for(F=F.call(D);!(le=(ue=F.next()).done)&&(oe.push(ue.value),!(G&&oe.length===G));le=!0);}catch(ce){fe=!0,se=ce}finally{try{!le&&F.return!=null&&F.return()}finally{if(fe)throw se}}return oe}}function k(D){if(Array.isArray(D))return D}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},j=`import React from "react";
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
`,h={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},T=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},A=function(G){return new Promise(function(F){return setTimeout(F,G)})},K=function(){var G=p(A),F=i(G,2),oe=F[0],le=F[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return le(2e3)},children:"Start"})}),Object(c.jsxs)("div",{children:["Loading: ",""+oe]})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),X=e("./node_modules/react/jsx-runtime.js"),H=e.n(X),Z=`
    
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var P=function(){var Y=Object(Q.a)("(min-width: 900px)");return Object(X.jsx)("div",{children:Object(X.jsxs)("div",{children:["(min-width: 900px) : ",Y?"matches":"does not match"]})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return t});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S);function x(n,r){return v(n)||s(n,r)||_(n,r)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,r){if(!!n){if(typeof n=="string")return a(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return a(n,r)}}function a(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,p=new Array(r);l<r;l++)p[l]=n[l];return p}function s(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var p=[],c=!0,i=!1,m,f;try{for(l=l.call(n);!(c=(m=l.next()).done)&&(p.push(m.value),!(r&&p.length===r));c=!0);}catch(u){i=!0,f=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw f}}return p}}function v(n){if(Array.isArray(n))return n}function d(n,r){try{return n.addEventListener("change",r),function(){return n.removeEventListener("change",r)}}catch(l){return n.addListener(r),function(){return n.removeListener(r)}}}function o(n){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(n).matches:!1}var t=function(r){var l=Object(S.useState)(o(r)),p=x(l,2),c=p[0],i=p[1],m=Object(S.useRef)();return Object(S.useEffect)(function(){if("matchMedia"in window)return m.current=window.matchMedia(r),i(m.current.matches),d(m.current,function(f){return i(f.matches)})},[r]),c}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),U=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),ne=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),B=e("./node_modules/core-js/modules/es.array.for-each.js"),R=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),C=function(n,r){typeof n=="function"?n(r):typeof n=="object"&&n!==null&&"current"in n&&(n.current=r)},O=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Object(L.useCallback)(function(p){r.forEach(function(c){return C(c,p)})},r)},I=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(p){r.forEach(function(c){return C(c,p)})}},E=e("./node_modules/react/jsx-runtime.js");function S(t,n){return a(t)||_(t,n)||x(t,n)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,n){if(!!t){if(typeof t=="string")return g(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,n)}}function g(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=t[r];return l}function _(t,n){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l=[],p=!0,c=!1,i,m;try{for(r=r.call(t);!(p=(i=r.next()).done)&&(l.push(i.value),!(n&&l.length===n));p=!0);}catch(f){c=!0,m=f}finally{try{!p&&r.return!=null&&r.return()}finally{if(c)throw m}}return l}}function a(t){if(Array.isArray(t))return t}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},s=`import React, { useEffect } from "react";

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
`,v={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},d=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},o=function(){var n=Object(ne.a)(),r=S(n,2),l=r[0],p=r[1],c=Object(J.a)(function(){return alert("click away")}),i=O(p,c),m=Object(U.a)();return Object(L.useEffect)(function(){m()},[]),Object(E.jsx)("div",{children:Object(E.jsx)("div",{ref:i,style:{width:100,height:100,backgroundColor:"red"},children:""+l})})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function J(_,a){return C(_)||R(_,a)||ne(_,a)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(_,a){if(!!_){if(typeof _=="string")return B(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return B(_,a)}}function B(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,v=new Array(a);s<a;s++)v[s]=_[s];return v}function R(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var v=[],d=!0,o=!1,t,n;try{for(s=s.call(_);!(d=(t=s.next()).done)&&(v.push(t.value),!(a&&v.length===a));d=!0);}catch(r){o=!0,n=r}finally{try{!d&&s.return!=null&&s.return()}finally{if(o)throw n}}return v}}function C(_){if(Array.isArray(_))return _}var O={angle:0,type:"landscape-primary"},I=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:O,s=Object(M.useState)(a),v=J(s,2),d=v[0],o=v[1];return Object(M.useEffect)(function(){var t=window.screen,n=!0,r=function(){if(n){var p=t,c=p.orientation;if(c){var i=c.angle,m=c.type;o({angle:i,type:m})}else window.orientation!==void 0?o({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):o(a)}};return window.addEventListener("orientationchange",r),r(),function(){n=!1,window.addEventListener("orientationchange",r)}},[]),d},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},S=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,V={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},g=function(){var a=I();return Object(E.jsx)("div",{children:JSON.stringify(a)})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return P});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=function(){var Y=window.navigator,L=Y.userAgent,J=Y.platform,U=["Macintosh","MacIntel","MacPPC","Mac68K"],ne=["Win32","Win64","Windows","WinCE"],B=["iPhone","iPad","iPod"],R="unknown";return U.indexOf(J)!==-1?R="macos":B.indexOf(J)!==-1?R="ios":ne.indexOf(J)!==-1?R="windows":/Android/.test(L)?R="android":!R&&/Linux/.test(J)&&(R="linux"),R},Q=function(){return typeof window!="undefined"?q():"unknown"},X=e("./node_modules/react/jsx-runtime.js"),H=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},H=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,Z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},z=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},P=function(){var Y=Q();return Object(X.jsx)("div",{children:Y})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=function(_){Object(L.useEffect)(function(){if(!!_){var a=function(v){v=v||window.event;var d=v.relatedTarget||v.toElement;(!d||d.nodeName==="HTML")&&_()};return document.addEventListener("mouseout",a),function(){document.removeEventListener("mouseout",a)}}},[])},U=e("./node_modules/react/jsx-runtime.js");function ne(g,_){return I(g)||O(g,_)||R(g,_)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(g,_){if(!!g){if(typeof g=="string")return C(g,_);var a=Object.prototype.toString.call(g).slice(8,-1);if(a==="Object"&&g.constructor&&(a=g.constructor.name),a==="Map"||a==="Set")return Array.from(g);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(g,_)}}function C(g,_){(_==null||_>g.length)&&(_=g.length);for(var a=0,s=new Array(_);a<_;a++)s[a]=g[a];return s}function O(g,_){var a=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(a!=null){var s=[],v=!0,d=!1,o,t;try{for(a=a.call(g);!(v=(o=a.next()).done)&&(s.push(o.value),!(_&&s.length===_));v=!0);}catch(n){d=!0,t=n}finally{try{!v&&a.return!=null&&a.return()}finally{if(d)throw t}}return s}}function I(g){if(Array.isArray(g))return g}var E=`
    
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
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},V=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},x=function(){var _=Object(L.useState)(0),a=ne(_,2),s=a[0],v=a[1];return J(function(){return v(function(d){return d+1})}),Object(U.jsxs)("div",{children:["Page leave count: ",s]})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return v});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.array.concat.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js");function U(d){return R(d)||B(d)||I(d)||ne()}function ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(d){if(typeof Symbol!="undefined"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}function R(d){if(Array.isArray(d))return E(d)}function C(d,o){return V(d)||S(d,o)||I(d,o)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(d,o){if(!!d){if(typeof d=="string")return E(d,o);var t=Object.prototype.toString.call(d).slice(8,-1);if(t==="Object"&&d.constructor&&(t=d.constructor.name),t==="Map"||t==="Set")return Array.from(d);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(d,o)}}function E(d,o){(o==null||o>d.length)&&(o=d.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=d[t];return n}function S(d,o){var t=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(t!=null){var n=[],r=!0,l=!1,p,c;try{for(t=t.call(d);!(r=(p=t.next()).done)&&(n.push(p.value),!(o&&n.length===o));r=!0);}catch(i){l=!0,c=i}finally{try{!r&&t.return!=null&&t.return()}finally{if(l)throw c}}return n}}function V(d){if(Array.isArray(d))return d}var x=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=Object(M.useState)({state:t.slice(0,o),queue:t.slice(o)}),r=C(n,2),l=r[0],p=l.state,c=l.queue,i=r[1],m=function(){for(var k=arguments.length,j=new Array(k),h=0;h<k;h++)j[h]=arguments[h];return i(function(T){var A=[].concat(U(T.state),U(T.queue),j);return{state:A.slice(0,o),queue:A.slice(o)}})},f=function(k){return i(function(j){var h=k([].concat(U(j.state),U(j.queue)));return{state:h.slice(0,o),queue:h.slice(o)}})},u=function(){return i(function(k){return{state:k.state,queue:[]}})};return{state:p,queue:c,add:m,update:f,cleanQueue:u}},g=e("./node_modules/react/jsx-runtime.js"),_=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},_=`import React, { useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},v=function(){var o=x(10,[1,2,3]),t=o.state,n=o.queue,r=o.add,l=o.update,p=o.cleanQueue;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:["state: ",t]}),Object(g.jsxs)("div",{children:["queue: ",n]}),Object(g.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(g.jsx)("button",{onClick:function(){return l(function(i){return i})},children:"update"}),Object(g.jsx)("button",{onClick:p,children:"clear"})]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
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
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(I),S=e("./node_modules/core-js/modules/es.array.from.js"),V=e.n(S),x=e("./node_modules/react/index.js"),g=e.n(x),_=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function v(i,m){return r(i)||n(i,m)||o(i,m)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,m){if(!!i){if(typeof i=="string")return t(i,m);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return t(i,m)}}function t(i,m){(m==null||m>i.length)&&(m=i.length);for(var f=0,u=new Array(m);f<m;f++)u[f]=i[f];return u}function n(i,m){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var u=[],y=!0,k=!1,j,h;try{for(f=f.call(i);!(y=(j=f.next()).done)&&(u.push(j.value),!(m&&u.length===m));y=!0);}catch(T){k=!0,h=T}finally{try{!y&&f.return!=null&&f.return()}finally{if(k)throw h}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},l=`import React, { useEffect } from "react";

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
`,p={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var c=function(){var m=Object(_.a)({width:0,height:0}),f=v(m,2),u=f[0],y=f[1];return Object(x.useEffect)(function(){var k=function(){y({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(a.jsx)("pre",{children:JSON.stringify(u,null,2)})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return d});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/es.array.slice.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.function.name.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(I),S=e("./node_modules/react/index.js"),V=e.n(S);function x(o,t){return v(o)||s(o,t)||_(o,t)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(o,t){if(!!o){if(typeof o=="string")return a(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(o,t)}}function a(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function s(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function v(o){if(Array.isArray(o))return o}var d=function(t){var n=Object(S.useRef)(0),r=Object(S.useState)(t),l=x(r,2),p=l[0],c=l[1],i=Object(S.useCallback)(function(m){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){c(m)})},[]);return[p,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),U=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ne(l,p){return I(l)||O(l,p)||R(l,p)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(l,p){if(!!l){if(typeof l=="string")return C(l,p);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return C(l,p)}}function C(l,p){(p==null||p>l.length)&&(p=l.length);for(var c=0,i=new Array(p);c<p;c++)i[c]=l[c];return i}function O(l,p){var c=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(c!=null){var i=[],m=!0,f=!1,u,y;try{for(c=c.call(l);!(m=(u=c.next()).done)&&(i.push(u.value),!(p&&i.length===p));m=!0);}catch(k){f=!0,y=k}finally{try{!m&&c.return!=null&&c.return()}finally{if(f)throw y}}return i}}function I(l){if(Array.isArray(l))return l}var E={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},S=typeof window!="undefined",V=function(){var p=Object(L.useRef)(null),c=Object(U.a)(E),i=ne(c,2),m=i[0],f=i[1],u=Object(L.useMemo)(function(){return S?new ResizeObserver(function(y){var k=y[0];k&&f(k.contentRect)}):null},[]);return Object(L.useEffect)(function(){return p.current&&u.observe(p.current),function(){u.disconnect()}},[p.current]),[p,m]},x=e("./node_modules/react/jsx-runtime.js");function g(l,p){return d(l)||v(l,p)||a(l,p)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(l,p){if(!!l){if(typeof l=="string")return s(l,p);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return s(l,p)}}function s(l,p){(p==null||p>l.length)&&(p=l.length);for(var c=0,i=new Array(p);c<p;c++)i[c]=l[c];return i}function v(l,p){var c=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(c!=null){var i=[],m=!0,f=!1,u,y;try{for(c=c.call(l);!(m=(u=c.next()).done)&&(i.push(u.value),!(p&&i.length===p));m=!0);}catch(k){f=!0,y=k}finally{try{!m&&c.return!=null&&c.return()}finally{if(f)throw y}}return i}}function d(l){if(Array.isArray(l))return l}var o=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var p=V(),c=g(p,2),i=c[0],m=c[1],f=Object(J.a)();return Object(L.useEffect)(function(){f()},[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("textarea",{ref:i,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(x.jsx)("div",{children:JSON.stringify(m)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.parse-int.js");function U(){var c=document.createElement("style");return c.type="text/css",c.setAttribute("tm-scroll-lock",""),c}function ne(c){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(c)}function B(c,i){c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}function R(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var c=parseInt(window.getComputedStyle(document.body).paddingRight,10),i=window.innerWidth-document.documentElement.clientWidth;return c+i}var C=function(i){var m=i.disableBodyPadding,f=m?null:R(),u=`body {
        --removed-scroll-width: `+f+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(f?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return u};function O(c,i){return x(c)||V(c,i)||E(c,i)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(c,i){if(!!c){if(typeof c=="string")return S(c,i);var m=Object.prototype.toString.call(c).slice(8,-1);if(m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set")return Array.from(c);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return S(c,i)}}function S(c,i){(i==null||i>c.length)&&(i=c.length);for(var m=0,f=new Array(i);m<i;m++)f[m]=c[m];return f}function V(c,i){var m=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var f=[],u=!0,y=!1,k,j;try{for(m=m.call(c);!(u=(k=m.next()).done)&&(f.push(k.value),!(i&&f.length===i));u=!0);}catch(h){y=!0,j=h}finally{try{!u&&m.return!=null&&m.return()}finally{if(y)throw j}}return f}}function x(c){if(Array.isArray(c))return c}var g=function(i){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},f=Object(L.useState)(i||!1),u=O(f,2),y=u[0],k=u[1],j=Object(L.useRef)(0),h=m.disableBodyPadding,T=Object(L.useRef)(null),A=function(){j.current=window.scrollY;var G=C({disableBodyPadding:h}),F=U();B(F,G),ne(F),T.current=F},K=function(){!(T!=null&&T.current)||(T.current.parentNode.removeChild(T.current),T.current=null)};return Object(L.useEffect)(function(){return y?A():K(),K},[y]),Object(L.useEffect)(function(){i!==void 0&&k(i)},[i]),Object(L.useEffect)(function(){i===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&k(!0)},[k]),[y,k]},_=e("./node_modules/react/jsx-runtime.js");function a(c,i){return t(c)||o(c,i)||v(c,i)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(c,i){if(!!c){if(typeof c=="string")return d(c,i);var m=Object.prototype.toString.call(c).slice(8,-1);if(m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set")return Array.from(c);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return d(c,i)}}function d(c,i){(i==null||i>c.length)&&(i=c.length);for(var m=0,f=new Array(i);m<i;m++)f[m]=c[m];return f}function o(c,i){var m=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var f=[],u=!0,y=!1,k,j;try{for(m=m.call(c);!(u=(k=m.next()).done)&&(f.push(k.value),!(i&&f.length===i));u=!0);}catch(h){y=!0,j=h}finally{try{!u&&m.return!=null&&m.return()}finally{if(y)throw j}}return f}}function t(c){if(Array.isArray(c))return c}var n=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},p=function(){var i=Object(L.useState)(!1),m=a(i,2),f=m[0],u=m[1],y=g(f);return Object(_.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(_.jsx)("button",{onClick:function(){return u(function(j){return!j})},children:f?"Unlock":"Lock"}),y?"Scroll locked":"Scrollable"]})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
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
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function U(_,a){return O(_)||C(_,a)||B(_,a)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(_,a){if(!!_){if(typeof _=="string")return R(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return R(_,a)}}function R(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,v=new Array(a);s<a;s++)v[s]=_[s];return v}function C(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var v=[],d=!0,o=!1,t,n;try{for(s=s.call(_);!(d=(t=s.next()).done)&&(v.push(t.value),!(a&&v.length===a));d=!0);}catch(r){o=!0,n=r}finally{try{!d&&s.return!=null&&s.return()}finally{if(o)throw n}}return v}}function O(_){if(Array.isArray(_))return _}var I=function(a,s){var v=Object(J.a)(a,s),d=U(v,2),o=d[0],t=d[1];return Object(M.useEffect)(function(){return o(),t},[o,t]),t},E=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,V={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},g=function(){var a=I(function(){alert("fire!")},2e3);return Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:a,children:"Clear"})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(I),S=e("./node_modules/core-js/modules/es.array.from.js"),V=e.n(S),x=e("./node_modules/react/index.js"),g=e.n(x),_=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function v(i,m){return r(i)||n(i,m)||o(i,m)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,m){if(!!i){if(typeof i=="string")return t(i,m);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return t(i,m)}}function t(i,m){(m==null||m>i.length)&&(m=i.length);for(var f=0,u=new Array(m);f<m;f++)u[f]=i[f];return u}function n(i,m){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var u=[],y=!0,k=!1,j,h;try{for(f=f.call(i);!(y=(j=f.next()).done)&&(u.push(j.value),!(m&&u.length===m));y=!0);}catch(T){k=!0,h=T}finally{try{!y&&f.return!=null&&f.return()}finally{if(k)throw h}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},l=`import React from "react";
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
`,p={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var c=function(){var m=Object(_.a)(function(){alert("fire!")},2e3),f=v(m,2),u=f[0],y=f[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:u,children:"Run"}),Object(a.jsx)("button",{onClick:y,children:"Clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return X});var w=e("./node_modules/core-js/modules/web.timers.js"),M=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(Z,z){var P=Object(W.useRef)(),N=Object(Q.a)(Z),Y=Object(W.useCallback)(function(){P.current&&clearTimeout(P.current),P.current=setTimeout(function(){N()},z)},[z]),L=Object(W.useCallback)(function(){P.current&&clearTimeout(P.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[Y,L]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function J(o,t){return C(o)||R(o,t)||ne(o,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(o,t){if(!!o){if(typeof o=="string")return B(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(o,t)}}function B(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function R(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function C(o){if(Array.isArray(o))return o}var O=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=Object(L.useState)(t),r=J(n,2),l=r[0],p=r[1],c=Object(L.useCallback)(function(i){return p(function(m){return typeof i=="boolean"?i:!m})},[]);return[l,c]},I=e("./node_modules/react/jsx-runtime.js");function E(o,t){return _(o)||g(o,t)||V(o,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(o,t){if(!!o){if(typeof o=="string")return x(o,t);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(o,t)}}function x(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=o[n];return r}function g(o,t){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var r=[],l=!0,p=!1,c,i;try{for(n=n.call(o);!(l=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));l=!0);}catch(m){p=!0,i=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(p)throw i}}return r}}function _(o){if(Array.isArray(o))return o}var a=`
    
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
`,s={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},v=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},d=function(){var t=O(),n=E(t,2),r=n[0],l=n[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:["current state: ",""+r]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(){return l(!0)},children:"setTrue"}),Object(I.jsx)("button",{onClick:function(){return l(!1)},children:"setFalse"}),Object(I.jsx)("button",{onClick:l,children:"toggle"})]})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function U(n,r){return O(n)||C(n,r)||B(n,r)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(n,r){if(!!n){if(typeof n=="string")return R(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return R(n,r)}}function R(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,p=new Array(r);l<r;l++)p[l]=n[l];return p}function C(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var p=[],c=!0,i=!1,m,f;try{for(l=l.call(n);!(c=(m=l.next()).done)&&(p.push(m.value),!(r&&p.length===r));c=!0);}catch(u){i=!0,f=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw f}}return p}}function O(n){if(Array.isArray(n))return n}var I=function(r){var l=r.value,p=r.defaultValue,c=r.finalValue,i=r.rule,m=r.onChange,f=r.onValueUpdate,u=i(l),y=Object(L.useRef)("initial"),k=i(p)?p:c,j=Object(L.useState)(k),h=U(j,2),T=h[0],A=h[1],K=u?l:T;!u&&y.current==="controlled"&&(K=c),y.current=u?"controlled":"uncontrolled";var D=y.current,G=function(oe){typeof m=="function"&&m(oe),D==="uncontrolled"&&A(oe)};return Object(L.useEffect)(function(){D==="uncontrolled"&&A(K),typeof f=="function"&&f(K)},[D,K]),[K,G,y.current]},E=e("./node_modules/react/jsx-runtime.js");function S(n,r){return a(n)||_(n,r)||x(n,r)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(n,r){if(!!n){if(typeof n=="string")return g(n,r);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return g(n,r)}}function g(n,r){(r==null||r>n.length)&&(r=n.length);for(var l=0,p=new Array(r);l<r;l++)p[l]=n[l];return p}function _(n,r){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var p=[],c=!0,i=!1,m,f;try{for(l=l.call(n);!(c=(m=l.next()).done)&&(p.push(m.value),!(r&&p.length===r));c=!0);}catch(u){i=!0,f=u}finally{try{!c&&l.return!=null&&l.return()}finally{if(i)throw f}}return p}}function a(n){if(Array.isArray(n))return n}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},s=`import React, { useState } from "react";

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
`,v={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},d=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},o=function(r){var l=r.label,p=r.value,c=r.defaultValue,i=r.onChange,m=Object(J.a)(),f=I({value:p,defaultValue:c,finalValue:null,onChange:i,rule:function(h){return typeof h=="string"}}),u=S(f,2),y=u[0],k=u[1];return Object(E.jsxs)("div",{style:{padding:"1rem"},children:[Object(E.jsx)("label",{htmlFor:m,children:l}),Object(E.jsx)("br",{}),Object(E.jsx)("input",{id:m,type:"text",value:y,onChange:function(h){return k(h.target.value)}})]})};o.displayName="CustomInput";var t=function(){var r=Object(L.useState)("controlled"),l=S(r,2),p=l[0],c=l[1];return Object(E.jsxs)("div",{style:{padding:20},children:[Object(E.jsx)(o,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(E.jsx)(o,{label:"Controlled",value:p,onChange:c}),Object(E.jsx)(o,{label:"Controlled (fixed value)",value:"fixed",onChange:c})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(H),z=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(N),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),U=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(U),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e.n(B),C=e("./node_modules/core-js/modules/es.array.slice.js"),O=e.n(C),I=e("./node_modules/core-js/modules/es.function.name.js"),E=e.n(I),S=e("./node_modules/core-js/modules/es.array.from.js"),V=e.n(S),x=e("./node_modules/react/index.js"),g=e.n(x),_=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function v(i,m){return r(i)||n(i,m)||o(i,m)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,m){if(!!i){if(typeof i=="string")return t(i,m);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return t(i,m)}}function t(i,m){(m==null||m>i.length)&&(m=i.length);for(var f=0,u=new Array(m);f<m;f++)u[f]=i[f];return u}function n(i,m){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var u=[],y=!0,k=!1,j,h;try{for(f=f.call(i);!(y=(j=f.next()).done)&&(u.push(j.value),!(m&&u.length===m));y=!0);}catch(T){k=!0,h=T}finally{try{!y&&f.return!=null&&f.return()}finally{if(k)throw h}}return u}}function r(i){if(Array.isArray(i))return i}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},l=`import React, { useEffect, useState } from "react";

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
`,p={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var c=function(){var m=Object(x.useState)(""),f=v(m,2),u=f[0],y=f[1];return Object(x.useEffect)(function(){console.log("useEffect:",u)},[u]),Object(_.a)(function(){console.log("useUpdateEffect:",u)},[u]),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",onChange:function(j){return y(j.target.value)}})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return W});var w=e("./node_modules/react/index.js"),M=e.n(w),W=function(Q,X){var H=Object(w.useRef)(!0);Object(w.useEffect)(function(){if(!H.current)return Q();H.current=!1},X)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,b,e){"use strict";e.d(b,"c",function(){return L}),e.d(b,"d",function(){return J}),e.d(b,"b",function(){return U}),e.d(b,"a",function(){return B});var w=e("./node_modules/react/index.js"),M=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),q=e("./node_modules/react/jsx-runtime.js"),Q=function(C){var O=C.styles,I=L();return Object(q.jsx)(W.a,{styles:Object(W.b)(O(I))})};Q.displayName="Global";var X={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},H=function(){return Object(q.jsx)(W.a,{styles:X})};H.displayName="NormalizeCSS";var Z=e("./node_modules/core-js/modules/es.array.reduce.js"),z=e("./node_modules/core-js/modules/es.object.keys.js"),P=e("./node_modules/core-js/modules/es.object.assign.js");function N(R,C){return C?Object.keys(R).reduce(function(O,I){if(I==="headings"&&C.headings){var E=C.headings?Object.keys(R.headings).reduce(function(S,V){return S[V]=Object.assign({},R.headings[V],C.headings[V]),S},{}):R.headings;return Object.assign({},O,{headings:Object.assign({},R.headings,C.headings,E)})}return O[I]=typeof C[I]=="object"?Object.assign({},R[I],C[I]):C[I]||R[I],O},{}):R}var Y=Object(w.createContext)({theme:M.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function L(){var R;return((R=Object(w.useContext)(Y))===null||R===void 0?void 0:R.theme)||M.a}function J(){var R;return((R=Object(w.useContext)(Y))===null||R===void 0?void 0:R.styles)||{}}function U(){var R;return((R=Object(w.useContext)(Y))===null||R===void 0?void 0:R.emotionOptions)||{key:"co",prepend:!0}}var ne=function(){return Object(q.jsx)(Q,{styles:function(O){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:O.fontFamily,backgroundColor:O.colorScheme==="dark"?O.colors.black:O.colors.white,color:O.colorScheme==="dark"?O.colors.white:O.colors.black,lineHeight:O.lineHeight,fontSizes:O.fontSizes.b3}}}})};ne.displayName="GlobalStyles";var B=function(C){var O=C.theme,I=C.styles,E=I===void 0?{}:I,S=C.emotionOptions,V=C.withNormalizeCSS,x=V===void 0?!1:V,g=C.withGlobalStyles,_=g===void 0?!1:g,a=C.children;return Object(q.jsxs)(Y.Provider,{value:{theme:N(M.a,O),styles:E,emotionOptions:S},children:[x&&Object(q.jsx)(H,{}),_&&Object(q.jsx)(ne,{}),a]})};B.displayName="TmProvider",B.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,b,e){"use strict";e.d(b,"b",function(){return Ce}),e.d(b,"a",function(){return Ee});var w=e("./node_modules/core-js/modules/es.object.keys.js"),M={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[M.navy1,M.navy1,M.navy2],secondary:[M.green2,M.green2,M.green1],tertiary:[M.white,M.white,M.gray6]},q={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Q={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},X={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},H={small:2,medium:4,large:8,round:100,circular:"50%"},Z={xsmall:4,small:8,medium:16,large:24},z={xsmall:576,small:768,medium:1024,large:1408},P={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},N={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},Y={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},L={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},J={mobile:"@media (max-width: "+L.mobile+"px)",tablet:"@media (max-width: "+L.tablet+"px)",desktop:"@media (max-width: "+L.desktop+"px)",largeDesktop:"@media (max-width: "+L.maxSize+"px)"},U=e("./node_modules/core-js/modules/es.object.assign.js"),ne=function(te){for(var ae="",de=1;de<te.length-1;de+=1)ae+=te[de]+" "+de/(te.length-1)*100+"%, ";return te[0]+" 0%, "+ae+te[te.length-1]+" 100%"},B=function(te){for(var ae=arguments.length,de=new Array(ae>1?ae-1:0),je=1;je<ae;je++)de[je-1]=arguments[je];return"linear-gradient("+te+"deg, "+ne(de)+")"},R=function(){for(var te=arguments.length,ae=new Array(te),de=0;de<te;de++)ae[de]=arguments[de];return"radial-gradient(circle, "+ne(ae)+")"},C=function(te){return typeof te.size=="number"?te.size:te.sizes[te.size]||te.size||te.sizes.medium},O=function(te){return function(ae){return"@media (min-width: "+(C({size:ae,sizes:te.breakpoints})+1)+"px)"}},I=function(te){return function(ae){return"@media (max-width: "+C({size:ae,sizes:te.breakpoints})+"px)"}},E=e("./node_modules/core-js/modules/es.string.replace.js"),S=e("./node_modules/core-js/modules/es.regexp.exec.js"),V=e("./node_modules/core-js/modules/es.number.is-nan.js"),x=e("./node_modules/core-js/modules/es.number.constructor.js"),g=e("./node_modules/core-js/modules/es.parse-int.js"),_=e("./node_modules/core-js/modules/es.array.map.js"),a=e("./node_modules/core-js/modules/es.string.split.js"),s=e("./node_modules/core-js/modules/es.string.starts-with.js"),v=e("./node_modules/core-js/modules/es.array.is-array.js"),d=e("./node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),r=e("./node_modules/core-js/modules/es.string.iterator.js"),l=e("./node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),m=e("./node_modules/core-js/modules/es.array.from.js");function f(_e,te){return h(_e)||j(_e,te)||y(_e,te)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(_e,te){if(!!_e){if(typeof _e=="string")return k(_e,te);var ae=Object.prototype.toString.call(_e).slice(8,-1);if(ae==="Object"&&_e.constructor&&(ae=_e.constructor.name),ae==="Map"||ae==="Set")return Array.from(_e);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return k(_e,te)}}function k(_e,te){(te==null||te>_e.length)&&(te=_e.length);for(var ae=0,de=new Array(te);ae<te;ae++)de[ae]=_e[ae];return de}function j(_e,te){var ae=_e==null?null:typeof Symbol!="undefined"&&_e[Symbol.iterator]||_e["@@iterator"];if(ae!=null){var de=[],je=!0,be=!1,Te,Ie;try{for(ae=ae.call(_e);!(je=(Te=ae.next()).done)&&(de.push(Te.value),!(te&&de.length===te));je=!0);}catch(De){be=!0,Ie=De}finally{try{!je&&ae.return!=null&&ae.return()}finally{if(be)throw Ie}}return de}}function h(_e){if(Array.isArray(_e))return _e}var T=function(te){var ae=te.replace("#","");return typeof ae=="string"&&ae.length===6&&!Number.isNaN(Number("0x"+ae))},A=function(te){var ae=te.replace("#",""),de=parseInt(ae,16),je=de>>16&255,be=de>>8&255,Te=de&255;return{r:je,g:be,b:Te,a:1}},K=function(te){var ae=te.replace(/[^0-9,.]/g,"").split(",").map(Number),de=f(ae,4),je=de[0],be=de[1],Te=de[2],Ie=de[3];return{r:je,g:be,b:Te,a:Ie||1}},D=function(te){return T(te)?A(te):te.startsWith("rgb")?K(te):{r:0,g:0,b:0,a:1}},G=function(te,ae){if(typeof te!="string"||ae>1||ae<0)return"rgba(0, 0, 0, 1)";var de=D(te),je=de.r,be=de.g,Te=de.b;return"rgba("+je+", "+be+", "+Te+", "+ae+")"},F=function(te,ae){var de=D(te),je=de.r,be=de.g,Te=de.b,Ie=de.a,De=1-ae,xe=function(Pe){return Math.round(Pe*De)};return"rgba("+xe(je)+", "+xe(be)+", "+xe(Te)+", "+Ie+")"},oe=function(te,ae){var de=D(te),je=de.r,be=de.g,Te=de.b,Ie=de.a,De=function(Me){return Math.round(Me+(255-Me)*ae)};return"rgba("+De(je)+", "+De(be)+", "+De(Te)+", "+Ie+")"},le=function(te){return te*8},fe={linearGradient:B,radialGradient:R,smallerThan:I,largerThan:O,rgba:G,size:C,darken:F,lighten:oe,spacing:le},ue=function(te){return Object.assign({},te,{fn:{largerThan:fe.largerThan(te),smallerThan:fe.smallerThan(te),radialGradient:fe.radialGradient,linearGradient:fe.linearGradient,rgba:fe.rgba,size:fe.size,lighten:fe.lighten,darken:fe.darken,spacing:fe.spacing}})},se=Object.keys(W),ce=Object.keys(M),pe=["xsmall","small","medium","large"],ge=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],Ce=function(te){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:te.fontFamily||"sans-serif"}},ke={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:M.black,colors:M,palettes:W,shadows:q,fontSizes:Q,lineHeights:X,radius:H,spacing:Z,breakpoints:z,headings:P,opacity:N,zIndex:Y,extra:{},media:J},Ee=ue(ke)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return _});var w=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),X=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),ne=e("./node_modules/core-js/modules/es.array.from.js");function B(a,s){return E(a)||I(a,s)||C(a,s)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(a,s){if(!!a){if(typeof a=="string")return O(a,s);var v=Object.prototype.toString.call(a).slice(8,-1);if(v==="Object"&&a.constructor&&(v=a.constructor.name),v==="Map"||v==="Set")return Array.from(a);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return O(a,s)}}function O(a,s){(s==null||s>a.length)&&(s=a.length);for(var v=0,d=new Array(s);v<s;v++)d[v]=a[v];return d}function I(a,s){var v=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(v!=null){var d=[],o=!0,t=!1,n,r;try{for(v=v.call(a);!(o=(n=v.next()).done)&&(d.push(n.value),!(s&&d.length===s));o=!0);}catch(l){t=!0,r=l}finally{try{!o&&v.return!=null&&v.return()}finally{if(t)throw r}}return d}}function E(a){if(Array.isArray(a))return a}function S(a){var s={};return Object.keys(a).forEach(function(v){var d=B(a[v],2),o=d[0],t=d[1];s[o]=t}),s}var V=e("./node_modules/core-js/modules/es.array.reduce.js");function x(a,s,v){return Object.keys(s).reduce(function(d,o){return d[o]=a(s[o],v?"tm-"+v+"-"+o:null),d},{})}var g=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function _(a){var s=typeof a=="function"?a:function(){return a};function v(d,o){var t=Object(q.c)(),n=Object(q.d)()[o==null?void 0:o.name],r=Object(g.a)(),l=r.css,p=r.cx,c=0;function i(j){return c+=1,"tm-ref_"+(j||"")+"_"+c}var m=s(t,d,i),f=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(t):(o==null?void 0:o.overrideStyles)||{},u=typeof n=="function"?n(t):n||{},y=typeof(o==null?void 0:o.co)=="function"?o.co(t):o==null?void 0:o.co,k=S(Object.keys(m).map(function(j){var h=p(l(m[j]),l(u[j]),l(f[j]),l(y));return[j,h]}));return{classes:x(p,k,o==null?void 0:o.name),cx:p,theme:t}}return v}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return k});var w=e("./node_modules/core-js/modules/es.object.assign.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/clsx/dist/clsx.m.js"),J=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),U=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),B=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./node_modules/react/index.js");function C(j){return S(j)||E(j)||I(j)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(j,h){if(!!j){if(typeof j=="string")return V(j,h);var T=Object.prototype.toString.call(j).slice(8,-1);if(T==="Object"&&j.constructor&&(T=j.constructor.name),T==="Map"||T==="Set")return Array.from(j);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return V(j,h)}}function E(j){if(typeof Symbol!="undefined"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}function S(j){if(Array.isArray(j))return V(j)}function V(j,h){(h==null||h>j.length)&&(h=j.length);for(var T=0,A=new Array(h);T<h;T++)A[T]=j[T];return A}function x(j,h){var T=Object(R.useRef)();return(!T.current||h.length!==T.current.prevDeps.length||T.current.prevDeps.map(function(A,K){return A===h[K]}).indexOf(!1)>=0)&&(T.current={v:j(),prevDeps:C(h)}),T.current.v}var g=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),_=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/react/jsx-runtime.js"),s=function(){var j;function h(T){return j===void 0&&(j=Object(g.a)(T||{key:"co",prepend:!0})),j}return{getCache:h}}(),v=s.getCache,d=Object(R.createContext)(void 0);function o(){var j=Object(_.b)();return Object(R.useContext)(d)||v(j)}function t(j){var h=j.children,T=j.value;return Object(a.jsx)(d.Provider,{value:T,children:h})}t.displayName="CacheProvider";function n(j,h){return i(j)||c(j,h)||l(j,h)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(j,h){if(!!j){if(typeof j=="string")return p(j,h);var T=Object.prototype.toString.call(j).slice(8,-1);if(T==="Object"&&j.constructor&&(T=j.constructor.name),T==="Map"||T==="Set")return Array.from(j);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return p(j,h)}}function p(j,h){(h==null||h>j.length)&&(h=j.length);for(var T=0,A=new Array(h);T<h;T++)A[T]=j[T];return A}function c(j,h){var T=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(T!=null){var A=[],K=!0,D=!1,G,F;try{for(T=T.call(j);!(K=(G=T.next()).done)&&(A.push(G.value),!(h&&A.length===h));K=!0);}catch(oe){D=!0,F=oe}finally{try{!K&&T.return!=null&&T.return()}finally{if(D)throw F}}return A}}function i(j){if(Array.isArray(j))return j}var m="ref";function f(j){var h;if(j.length!==1)return{args:j,ref:h};var T=n(j,1),A=T[0];if(!(A instanceof Object))return{args:j,ref:h};if(!(m in A))return{args:j,ref:h};h=A[m];var K=Object.assign({},A);return delete K[m],{args:[K],ref:h}}var u=function(){function j(T,A,K){var D=[],G=Object(U.a)(T,D,K);return D.length<2?K:G+A(D)}function h(T){var A=T.cache,K=function(){for(var F=arguments.length,oe=new Array(F),le=0;le<F;le++)oe[le]=arguments[le];var fe=f(oe),ue=fe.ref,se=fe.args,ce=Object(J.a)(se,A.registered);return Object(U.b)(A,ce,!1),A.key+"-"+ce.name+(ue===void 0?"":" "+ue)},D=function(){for(var F=arguments.length,oe=new Array(F),le=0;le<F;le++)oe[le]=arguments[le];return j(A.registered,K,Object(L.a)(oe))};return{css:K,cx:D}}return{cssFactory:h}}(),y=u.cssFactory;function k(){var j=o();return x(function(){return y({cache:j})},[j])}},"./storybook-init-framework-entry.js":function(re,b,e){"use strict";e.r(b);var w=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,b){}},[[0,4,5]]]);
