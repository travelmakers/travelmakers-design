(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,b,e){"use strict";e.r(b);var w={};e.r(w),e.d(w,"parameters",function(){return a}),e.d(w,"decorators",function(){return d});var K=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),z=e("./node_modules/core-js/modules/es.array.for-each.js"),V=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),J=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),H=e("./node_modules/core-js/modules/es.object.define-properties.js"),U=e("./node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),R=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),O=e("./node_modules/react/jsx-runtime.js");function E(i,y){return u(i)||s(i,y)||h(i,y)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(i,y){if(!!i){if(typeof i=="string")return f(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return f(i,y)}}function f(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function s(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],A=!0,g=!1,B,L;try{for(k=k.call(i);!(A=(B=k.next()).done)&&(j.push(B.value),!(y&&j.length===y));A=!0);}catch(I){g=!0,L=I}finally{try{!A&&k.return!=null&&k.return()}finally{if(g)throw L}}return j}}function u(i){if(Array.isArray(i))return i}var p=Object(C.createContext)(null),m=function(){var y=Object(C.useContext)(p);if(!y)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return y},r=function(y){var k=y.colorScheme,j=y.toggleColorScheme,A=y.children,g=Object(C.useState)("init"),B=E(g,2),L=B[0],I=B[1];return Object(C.useEffect)(function(){I("update")},[]),Object(O.jsx)(p.Provider,{value:{colorScheme:k,toggleColorScheme:j},children:A},L)};r.displayName="ColorSchemeProvider",r.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),n=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),o=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",docs:{theme:n.themes.light},darkMode:{current:"light"}};function v(i){var y=Object(o.useDarkMode)()?"dark":"light";return Object(O.jsx)(r,{colorScheme:y,toggleColorScheme:function(){},children:Object(O.jsx)(t.a,{theme:{colorScheme:y},withGlobalStyles:!0,withNormalizeCSS:!0,children:i.children})})}v.displayName="ThemeWrapper";var d=[function(i){return Object(O.jsx)(v,{children:i()})}];function l(i,y){var k=Object.keys(i);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);y&&(j=j.filter(function(A){return Object.getOwnPropertyDescriptor(i,A).enumerable})),k.push.apply(k,j)}return k}function c(i){for(var y=1;y<arguments.length;y++){var k=arguments[y]!=null?arguments[y]:{};y%2?l(Object(k),!0).forEach(function(j){_(i,j,k[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(k)):l(Object(k)).forEach(function(j){Object.defineProperty(i,j,Object.getOwnPropertyDescriptor(k,j))})}return i}function _(i,y,k){return y in i?Object.defineProperty(i,y,{value:k,enumerable:!0,configurable:!0,writable:!0}):i[y]=k,i}Object.keys(w).forEach(function(i){var y=w[i];switch(i){case"args":return Object(N.d)(y);case"argTypes":return Object(N.b)(y);case"decorators":return y.forEach(function(j){return Object(N.f)(j,!1)});case"loaders":return y.forEach(function(j){return Object(N.g)(j,!1)});case"parameters":return Object(N.h)(c({},y),!1);case"argTypesEnhancers":return y.forEach(function(j){return Object(N.c)(j)});case"argsEnhancers":return y.forEach(function(j){return Object(N.e)(j)});case"render":return Object(N.i)(y);case"globals":case"globalTypes":{var k={};return k[i]=y,Object(N.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(i+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,b,e){"use strict";(function(w){var K=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,K.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],w,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,b,e){var w={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function K(q){var Q=W(q);return e(Q)}function W(q){if(!e.o(w,q)){var Q=new Error("Cannot find module '"+q+"'");throw Q.code="MODULE_NOT_FOUND",Q}return w[q]}K.keys=function(){return Object.keys(w)},K.resolve=W,re.exports=K,K.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return s});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./node_modules/core-js/modules/es.array.reduce.js"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),X=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),R=e("./packages/travelmakers-design-core/src/constants/index.ts"),$=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),P={xsmall:{height:R.a.xsmall,padding:"0 24px"},small:{height:R.a.small,padding:"0 24px"},medium:{height:R.a.medium,padding:"0 24px"},large:{height:R.a.large,padding:"0 24px"}},ne=function(p){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:p.lineHeights.caption+"px",fontSize:p.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:p.lineHeights.b3+"px",fontSize:p.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:p.lineHeights.b2+"px",fontSize:p.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:p.lineHeights.h5+"px",fontSize:p.fontSizes.h5}}},Z=Object.keys(P).reduce(function(u,p){return u[p]=P[p].height,u},{}),M=function(p){return{display:p?"block":"inline-block",width:p?"100%":"auto"}},x=Object(N.a)(function(u,p,m){var r,t,n,o=p.variant,a=p.size,v=p.fullWidth,d=p.roundness,l=p.line,c=m("loading"),_=m("inner"),i=m("spinner"),y=o||u.colors.navy1;return{loading:(r={ref:c,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},r["."+_]={opacity:0},r["."+i]={display:"flex"},r),solid:(t={backgroundColor:u.palettes[y][u.colorScheme==="light",0],color:y==="white"?u.colors.navy1:u.colors.white,"&:not(:disabled):hover":{backgroundColor:u.palettes[y][u.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:u.palettes[y][u.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?u.radius.round:2,outline:"1px solid "+u.palettes[y][u.colorScheme==="light",0]}}},t["&:disabled:not(."+c+")"]={backgroundColor:u.colors.gray5,color:l?u.colors.black:u.colors.white},t),ghost:(n={backgroundColor:u.colors.transparent,border:"1px solid "+u.palettes[y][u.colorScheme==="light",0],color:y==="white"?u.colors.white:u.palettes[y][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?u.radius.round:2,outline:"1px solid "+u.palettes[y][u.colorScheme==="light",0]}}},n["&:disabled:not(."+c+")"]={color:Object($.a)(u.palettes[y][1],u.opacity.opacity3),border:"1px solid "+Object($.a)(u.palettes[y][1],u.opacity.opacity3)},n),root:Object.assign({},P[a],M(v),Object(X.b)(u),ne(u)[a],{borderRadius:d?u.radius.round:u.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:i,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),T=e("./node_modules/react/jsx-runtime.js"),D=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function C(u,p){if(u==null)return{};var m=O(u,p),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(u);for(t=0;t<n.length;t++)r=n[t],!(p.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,r)||(m[r]=u[r]))}return m}function O(u,p){if(u==null)return{};var m={},r=Object.keys(u),t,n;for(n=0;n<r.length;n++)t=r[n],!(p.indexOf(t)>=0)&&(m[t]=u[t]);return m}var E=Object(V.forwardRef)(function(u,p){var m=u.children,r=u.component,t=u.size,n=t===void 0?"medium":t,o=u.variant,a=u.line,v=u.roundness,d=v===void 0?!1:v,l=u.fullWidth,c=l===void 0?!1:l,_=u.type,i=_===void 0?"button":_,y=u.disabled,k=y===void 0?!1:y,j=u.leftIcon,A=u.rightIcon,g=u.className,B=u.co,L=u.overrideStyles,I=C(u,D),G=Object(z.c)(),F=x({variant:o,size:n,fullWidth:c,roundness:d,line:a},{overrideStyles:L,name:"Button"}),oe=F.classes,ie=F.cx;return Object(T.jsx)(J.a,Object.assign({component:r||"button",ref:p,type:i,disabled:k,className:ie(oe.root,oe[a?"ghost":"solid"],g),co:B,onTouchStart:function(){}},I,{children:Object(T.jsxs)("div",{className:oe.inner,children:[j&&Object(T.jsx)("span",{className:ie(oe.icon,oe.leftIcon),children:j}),Object(T.jsx)("span",{className:oe.label,children:m}),A&&Object(T.jsx)("span",{className:ie(oe.icon,oe.rightIcon),children:A})]})}))});E.displayName="@travelmakers-design/core/Button";var S=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},S=`import {
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
`,h={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}},f=b.default={title:"@travelmakers-design/core/Component/Button",component:E,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K.g,{}),Object(T.jsx)(K.f,{}),Object(T.jsx)(K.b,{}),Object(T.jsx)(K.d,{}),Object(T.jsx)(K.a,{story:K.c}),Object(T.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},s=function(p){return Object(T.jsx)("div",{style:{margin:"0 auto"},children:Object(T.jsx)(E,Object.assign({},p,{children:"Button"}))})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return x});var w=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./node_modules/core-js/modules/es.string.small.js"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),U=e("./packages/travelmakers-design-core/src/constants/index.ts"),N=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),X={xsmall:{width:U.a.xsmall,height:U.a.xsmall},small:{width:U.a.small,height:U.a.small},medium:{width:U.a.medium,height:U.a.medium},large:{width:U.a.large,height:U.a.large}},R={xsmall:8,small:8,medium:16,large:16},$=Object(J.a)(function(T,D,C){var O,E,S,h=D.variant,f=D.size,s=D.line,u=D.roundness,p=C("loading"),m=C("inner"),r=C("spinner"),t=h||T.colors.navy1;return{loading:(O={ref:p,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},O["."+m]={opacity:0},O["."+r]={display:"flex"},O),solid:(E={backgroundColor:T.palettes[t][T.colorScheme==="light",0],color:T.colorScheme==="light"?T.colors.white:T.colors.black,"&:not(:disabled):hover":{backgroundColor:T.palettes[t][T.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:T.palettes[t][T.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?T.radius.round:2,outline:"1px solid "+T.palettes[t][T.colorScheme==="light",0]}}},E["&:disabled:not(."+p+")"]={backgroundColor:T.colors.gray5,color:s?T.colors.black:T.colors.white},E),ghost:(S={backgroundColor:T.colors.transparent,border:"1px solid "+T.palettes[t][T.colorScheme==="light",0],color:T.palettes[t][T.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(N.a)(T.palettes[t][T.colorScheme==="light",0],T.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(N.a)(T.palettes[t][T.colorScheme==="light",1],T.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?T.radius.round:2,outline:"1px solid "+T.palettes[t][T.colorScheme==="light",0]}}},S["&:disabled:not(."+p+")"]={backgroundColor:T.colors.gray5,color:s?T.colors.black:T.colors.white},S),root:Object.assign({},X[f],Object(H.b)(T),{borderRadius:u?T.radius.round:T.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:m,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:X[f].width-R[f],height:X[f].height-R[f]}},spinnerWrapper:{ref:r,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),P=e("./node_modules/react/jsx-runtime.js"),ne=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function Z(T,D){if(T==null)return{};var C=M(T,D),O,E;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(T);for(E=0;E<S.length;E++)O=S[E],!(D.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,O)||(C[O]=T[O]))}return C}function M(T,D){if(T==null)return{};var C={},O=Object.keys(T),E,S;for(S=0;S<O.length;S++)E=O[S],!(D.indexOf(E)>=0)&&(C[E]=T[E]);return C}var x=Object(Q.forwardRef)(function(T,D){var C=T.children,O=T.component,E=T.size,S=E===void 0?"medium":E,h=T.variant,f=T.line,s=T.type,u=s===void 0?"button":s,p=T.disabled,m=p===void 0?!1:p,r=T.roundness,t=r===void 0?!1:r,n=T.className,o=T.co,a=T.overrideStyles,v=Z(T,ne),d=$({variant:h,size:S,line:f,roundness:t},{overrideStyles:a,name:"Button"}),l=d.classes,c=d.cx;return Object(P.jsx)(z.a,Object.assign({component:O||"button",className:c(l.root,l[f?"ghost":"solid"],n),type:u,disabled:m,ref:D,onTouchStart:function(){},co:o},v,{children:Object(P.jsx)("div",{className:l.inner,children:C})}))});x.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return Z});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),V=e("./node_modules/react/index.js"),J=e("./node_modules/react/jsx-runtime.js"),H=function(x){return Object(J.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x,{children:Object(J.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};H.displayName="CloseIcon",H.displayName="@travelmakers-design/core/CloseIcon";var U=["size","variant"];function N(M,x){if(M==null)return{};var T=X(M,x),D,C;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(M);for(C=0;C<O.length;C++)D=O[C],!(x.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,D)||(T[D]=M[D]))}return T}function X(M,x){if(M==null)return{};var T={},D=Object.keys(M),C,O;for(O=0;O<D.length;O++)C=D[O],!(x.indexOf(C)>=0)&&(T[C]=M[C]);return T}var R=Object(V.forwardRef)(function(M,x){var T=M.size,D=T===void 0?"medium":T,C=M.variant,O=C===void 0?"primary":C,E=N(M,U);return Object(J.jsx)(z.a,Object.assign({size:D,variant:O,ref:x},E,{children:Object(J.jsx)(H,{})}))});R.displayName="@travelmakers-design/core/CloseButton";var $=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":91},"endLoc":{"col":1,"line":93},"startBody":{"col":23,"line":91},"endBody":{"col":1,"line":93}}};
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},$=`import {
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
`,P={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},ne=b.default={title:"@travelmakers-design/core/Component/CloseButton",component:R,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { CloseButton } from \\"../CloseButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/CloseButton\\",\\n  component: CloseButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CloseButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":91},"endLoc":{"col":1,"line":93},"startBody":{"col":23,"line":91},"endBody":{"col":1,"line":93}}};
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(K.g,{}),Object(J.jsx)(K.f,{}),Object(J.jsx)(K.b,{}),Object(J.jsx)(K.d,{}),Object(J.jsx)(K.a,{story:K.c}),Object(J.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},Z=function(x){return Object(J.jsx)(R,Object.assign({},x))};Z.displayName="Default",Z.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},Z.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return N});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Q=e("./node_modules/react/index.js"),z=e.n(Q),V=e("./node_modules/react/jsx-runtime.js"),J=e.n(V),H=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":91},"endLoc":{"col":1,"line":102},"startBody":{"col":23,"line":91},"endBody":{"col":1,"line":102}}};
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},H=`import {
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
`,U={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};b.default={title:"@travelmakers-design/core/Component/IconButton",component:q.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconButton } from \\"../IconButton\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconButton\\",\\n  component: IconButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    line: {\\n      defaultValue: false,\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":91},"endLoc":{"col":1,"line":102},"startBody":{"col":23,"line":91},"endBody":{"col":1,"line":102}}};
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(W.g,{}),Object(V.jsx)(W.f,{}),Object(V.jsx)(W.b,{}),Object(V.jsx)(W.d,{}),Object(V.jsx)(W.a,{story:W.c}),Object(V.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var N=function(R){var $=Object(V.jsx)("svg",{viewBox:"0 0 24 24",children:Object(V.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(V.jsx)(q.a,Object.assign({},R,{children:$}))};N.displayName="Default",N.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},N.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return A});var w=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),P=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),M=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),x=e("./node_modules/react/index.js"),T=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),D=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),C=Object(D.a)(function(g,B){var L=B.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:L?L in g.radius?g.radius[L]:L:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(g.colorScheme==="dark",g.palettes.primary[0]),backgroundColor:(g.colorScheme==="dark",g.palettes.primary[0]),borderRadius:L?L in g.radius?g.radius[L]:L:0}}}),O=e("./node_modules/react/jsx-runtime.js"),E=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function S(g,B){return p(g)||u(g,B)||f(g,B)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(g,B){if(!!g){if(typeof g=="string")return s(g,B);var L=Object.prototype.toString.call(g).slice(8,-1);if(L==="Object"&&g.constructor&&(L=g.constructor.name),L==="Map"||L==="Set")return Array.from(g);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return s(g,B)}}function s(g,B){(B==null||B>g.length)&&(B=g.length);for(var L=0,I=new Array(B);L<B;L++)I[L]=g[L];return I}function u(g,B){var L=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(L!=null){var I=[],G=!0,F=!1,oe,ie;try{for(L=L.call(g);!(G=(oe=L.next()).done)&&(I.push(oe.value),!(B&&I.length===B));G=!0);}catch(ve){F=!0,ie=ve}finally{try{!G&&L.return!=null&&L.return()}finally{if(F)throw ie}}return I}}function p(g){if(Array.isArray(g))return g}function m(g,B){if(g==null)return{};var L=r(g,B),I,G;if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(g);for(G=0;G<F.length;G++)I=F[G],!(B.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,I)||(L[I]=g[I]))}return L}function r(g,B){if(g==null)return{};var L={},I=Object.keys(g),G,F;for(F=0;F<I.length;F++)G=I[F],!(B.indexOf(G)>=0)&&(L[G]=g[G]);return L}var t=null,n="loadImage",o=function(B,L){B.forEach(function(I){I.isIntersecting&&(L.unobserve(I.target),I.target.dispatchEvent(new CustomEvent(n)))})},a=Object(x.forwardRef)(function(g,B){var L=g.lazy,I=g.threshold,G=I===void 0?.5:I,F=g.placeholder,oe=g.src,ie=g.radius,ve=g.width,ce=ve===void 0?"100%":ve,ae=g.height,_e=ae===void 0?"auto":ae,pe=g.alt,je=g.fit,xe=g.style,he=g.className,De=g.co,le=g.overrideStyles,ee=m(g,E),se=C({radius:ie},{overrideStyles:le,name:"Image"}),ue=se.classes,be=se.cx,Te=Object(x.useState)(!1),ke=S(Te,2),Ie=ke[0],Ce=ke[1],Ae=Object(x.useState)(!1),Re=S(Ae,2),Pe=Re[0],te=Re[1],Y=Object(x.useRef)(null),de={width:ce,height:_e,objectFit:je};return Object(x.useImperativeHandle)(B,function(){return Y.current}),Object(x.useEffect)(function(){if(!L){te(!0);return}var me=function(){return te(!0)},fe=Y.current;return fe&&fe.addEventListener(n,me),function(){fe&&fe.removeEventListener(n,me)}},[L]),Object(x.useEffect)(function(){!L||(t=new IntersectionObserver(o,{threshold:G}),Y.current&&t.observe(Y.current))},[L,G]),Object(O.jsxs)(T.a,Object.assign({className:be(ue.root,he),co:De},ee,{children:[Object(O.jsx)("img",{ref:Y,src:oe,alt:pe,className:ue.image,style:de,onLoad:function(){return Ce(!0)}}),(!Ie||L&&!Pe)&&F&&Object(O.jsx)("div",{className:ue.placeholder,title:pe,children:F})]}))});a.displayName="@travelmakers-design/core/Image";function v(g){return _(g)||c(g)||l(g)||d()}function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(g,B){if(!!g){if(typeof g=="string")return i(g,B);var L=Object.prototype.toString.call(g).slice(8,-1);if(L==="Object"&&g.constructor&&(L=g.constructor.name),L==="Map"||L==="Set")return Array.from(g);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return i(g,B)}}function c(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function _(g){if(Array.isArray(g))return i(g)}function i(g,B){(B==null||B>g.length)&&(B=g.length);for(var L=0,I=new Array(B);L<B;L++)I[L]=g[L];return I}var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Image } from \\"../Image\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      description: \\"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      description:\\n        \\"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      description:\\n        \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":80},"endLoc":{"col":1,"line":90},"startBody":{"col":23,"line":80},"endBody":{"col":1,"line":90}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Image } from "../Image";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      description:
        "lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      description:
        "Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",
      options: ["cover", "fill", "contain"],
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
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,k={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},y=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Image } from "../Image";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      description:
        "lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      description:
        "Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",
      options: ["cover", "fill", "contain"],
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
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
`,k={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}},j=b.default={title:"@travelmakers-design/core/Component/Image",component:a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Image } from \\"../Image\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    radius: {\\n      defaultValue: \\"small\\",\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\", \\"round\\", \\"circular\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      description: \\"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    threshold: {\\n      defaultValue: 0.5,\\n      description:\\n        \\"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    fit: {\\n      defaultValue: \\"cover\\",\\n      description:\\n        \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"cover\\", \\"fill\\", \\"contain\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":80},"endLoc":{"col":1,"line":90},"startBody":{"col":23,"line":80},"endBody":{"col":1,"line":90}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Image } from "../Image";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      description:
        "lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      description:
        "Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",
      options: ["cover", "fill", "contain"],
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
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)($.g,{}),Object(O.jsx)($.f,{}),Object(O.jsx)($.b,{}),Object(O.jsx)($.d,{}),Object(O.jsx)($.a,{story:$.c}),Object(O.jsx)($.e,{})]})}}}},A=function(B){return Object(O.jsx)(O.Fragment,{children:v(new Array(10)).map(function(L,I){return Object(O.jsx)("div",{children:Object(O.jsx)(a,Object.assign({placeholder:Object(O.jsx)("div",{children:"Placeholder"})},B))},I)})})};A.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},A.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return E}),e.d(b,"WithIcon",function(){return S}),e.d(b,"WithRightSection",function(){return h}),e.d(b,"Textarea",function(){return f});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.string.small.js"),V=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),U=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),X=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),R={xsmall:12,small:14,medium:14,large:14,xlarge:16},$=Object(N.a)(function(s,u){var p=u.multiline,m=u.roundness,r=u.invalid,t=u.width,n=u.descriptionType,o=s.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(X.b)(s),{height:p?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:p?s.lineHeight:s.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:s.fontSizes.b2,width:t?t+"px":"100%",color:s.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:m?s.radius.round:2,border:"1px solid "+s.colors.gray5,backgroundColor:s.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:s.colors.gray1,color:s.colors.gray1},"&:disabled":{backgroundColor:s.colors.gray7,borderColor:s.colors.gray5,color:s.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:s.colors.gray3},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+o,"&::placeholder":{opacity:1}},disabled:{backgroundColor:s.colors.gray7,borderColor:s.colors.gray5,color:s.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:s.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),P=e("./node_modules/react/jsx-runtime.js"),ne=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function Z(s,u){if(s==null)return{};var p=M(s,u),m,r;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);for(r=0;r<t.length;r++)m=t[r],!(u.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,m)||(p[m]=s[m]))}return p}function M(s,u){if(s==null)return{};var p={},m=Object.keys(s),r,t;for(t=0;t<m.length;t++)r=m[t],!(u.indexOf(r)>=0)&&(p[r]=s[r]);return p}var x=Object(J.forwardRef)(function(s,u){var p,m,r=s.component,t=s.width,n=s.label,o=s.description,a=s.descriptionType,v=a===void 0?"description":a,d=s.icon,l=s.rightSectionWidth,c=l===void 0?48:l,_=s.rightSection,i=s.rightSectionProps,y=i===void 0?{}:i,k=s.wrapperProps,j=s.invalid,A=j===void 0?!1:j,g=s.required,B=g===void 0?!1:g,L=s.disabled,I=L===void 0?!1:L,G=s.multiline,F=G===void 0?!1:G,oe=s.roundness,ie=oe===void 0?!1:oe,ve=s.className,ce=s.style,ae=s.co,_e=s.overrideStyles,pe=s.__staticSelector,je=pe===void 0?"Input":pe,xe=Z(s,ne),he=Object(V.c)(),De=$({roundness:ie,multiline:F,invalid:A,width:t,descriptionType:v},{overrideStyles:_e,name:je}),le=De.classes,ee=De.cx,se=r||"input";return Object(P.jsxs)(U.a,{style:{width:t?t+"px":"100%"},children:[n&&Object(P.jsx)(H.a,{level:"b2",family:"Pretendard",color:he.colors.gray1,style:{marginBottom:4},children:n}),Object(P.jsxs)(U.a,Object.assign({className:ee(le.wrapper,ve),co:ae,style:ce},k,{children:[d&&Object(P.jsx)("div",{className:ee(le.icon,(p={},p[le.disabled]=I,p)),children:d}),Object(P.jsx)(se,Object.assign({},xe,{ref:u,className:ee(le.input,(m={},m[le.withIcon]=d,m[le.invalid]=A,m[le.disabled]=I,m)),required:B,disabled:I,style:{paddingRight:_?c:he.spacing.small}})),_&&Object(P.jsx)("div",Object.assign({},y,{style:Object.assign({},y.style,{paddingRight:32}),className:ee(le.rightSection,y.className),children:Object(P.jsx)(H.a,{level:"b2",family:"Pretendard",color:he.colors.green2,children:_})}))]})),o&&v==="description"?Object(P.jsx)(H.a,{level:"b3",family:"Pretendard",color:A?he.colors.red2:he.colors.navy3,style:{marginTop:4},children:o}):A&&Object(P.jsx)(H.a,{level:"b3",family:"Pretendard",color:v==="error"?he.colors.red2:v==="success"?he.colors.green3:he.colors.navy3,style:{marginTop:4},children:o})]})});x.displayName="@travelmakers-design/core/Input";var T=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    descriptionType: {\\n      defaultValue: \\"description\\",\\n      description: \\"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"description\\", \\"error\\", \\"success\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      description: \\"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    rightSection: {\\n      defaultValue: \\"\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return <Input {...props} />;\\n};\\n\\nexport const WithIcon = (props) => {\\n  return <Input icon={<Icon />} {...props} />;\\n};\\n\\nexport const WithRightSection = (props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return <Input icon={<Icon />} {...props} rightSection={withRight} />;\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":114},"endLoc":{"col":1,"line":116},"startBody":{"col":23,"line":114},"endBody":{"col":1,"line":116}},"WithIcon":{"startLoc":{"col":24,"line":118},"endLoc":{"col":1,"line":120},"startBody":{"col":24,"line":118},"endBody":{"col":1,"line":120}},"WithRightSection":{"startLoc":{"col":32,"line":122},"endLoc":{"col":1,"line":126},"startBody":{"col":32,"line":122},"endBody":{"col":1,"line":126}},"Textarea":{"startLoc":{"col":24,"line":128},"endLoc":{"col":1,"line":134},"startBody":{"col":24,"line":128},"endBody":{"col":1,"line":134}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
  component: Input,
  argTypes: {
    width: {
      defaultValue: 328,
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    label: {
      defaultValue: "\uB808\uC774\uBE14",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    descriptionType: {
      defaultValue: "description",
      description: "description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["description", "error", "success"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    placeholder: {
      defaultValue: "Placeholder",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roundness: {
      defaultValue: false,
      description: " true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    invalid: {
      defaultValue: false,
      description: "invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    rightSection: {
      defaultValue: "",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
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
  return <Input {...props} />;
};;

export const WithIcon = (props) => {
  return <Input icon={<Icon />} {...props} />;
};;

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return <Input icon={<Icon />} {...props} rightSection={withRight} />;
};;

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return <Input icon={<Icon />} {...props} />;\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return <Input icon={<Icon />} {...props} rightSection={withRight} />;\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}},WithIcon:{startLoc:{col:24,line:126},endLoc:{col:1,line:128},startBody:{col:24,line:126},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:134},startBody:{col:32,line:130},endBody:{col:1,line:134}},Textarea:{startLoc:{col:24,line:136},endLoc:{col:1,line:142},startBody:{col:24,line:136},endBody:{col:1,line:142}}},T=`import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
  component: Input,
  argTypes: {
    width: {
      defaultValue: 328,
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    label: {
      defaultValue: "\uB808\uC774\uBE14",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    descriptionType: {
      defaultValue: "description",
      description: "description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["description", "error", "success"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    placeholder: {
      defaultValue: "Placeholder",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roundness: {
      defaultValue: false,
      description: " true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    invalid: {
      defaultValue: false,
      description: "invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    rightSection: {
      defaultValue: "",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
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
  return <Input {...props} />;
};

export const WithIcon = (props) => {
  return <Input icon={<Icon />} {...props} />;
};

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return <Input icon={<Icon />} {...props} rightSection={withRight} />;
};

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
`,D={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:116},startBody:{col:23,line:114},endBody:{col:1,line:116}},WithIcon:{startLoc:{col:24,line:118},endLoc:{col:1,line:120},startBody:{col:24,line:118},endBody:{col:1,line:120}},WithRightSection:{startLoc:{col:32,line:122},endLoc:{col:1,line:126},startBody:{col:32,line:122},endBody:{col:1,line:126}},Textarea:{startLoc:{col:24,line:128},endLoc:{col:1,line:134},startBody:{col:24,line:128},endBody:{col:1,line:134}}},C=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    descriptionType: {\\n      defaultValue: \\"description\\",\\n      description: \\"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"description\\", \\"error\\", \\"success\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"Placeholder\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      description: \\"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    rightSection: {\\n      defaultValue: \\"\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return <Input {...props} />;\\n};\\n\\nexport const WithIcon = (props) => {\\n  return <Input icon={<Icon />} {...props} />;\\n};\\n\\nexport const WithRightSection = (props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return <Input icon={<Icon />} {...props} rightSection={withRight} />;\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":114},"endLoc":{"col":1,"line":116},"startBody":{"col":23,"line":114},"endBody":{"col":1,"line":116}},"WithIcon":{"startLoc":{"col":24,"line":118},"endLoc":{"col":1,"line":120},"startBody":{"col":24,"line":118},"endBody":{"col":1,"line":120}},"WithRightSection":{"startLoc":{"col":32,"line":122},"endLoc":{"col":1,"line":126},"startBody":{"col":32,"line":122},"endBody":{"col":1,"line":126}},"Textarea":{"startLoc":{"col":24,"line":128},"endLoc":{"col":1,"line":134},"startBody":{"col":24,"line":128},"endBody":{"col":1,"line":134}}};
    
import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/Input",
  component: Input,
  argTypes: {
    width: {
      defaultValue: 328,
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    label: {
      defaultValue: "\uB808\uC774\uBE14",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    descriptionType: {
      defaultValue: "description",
      description: "description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["description", "error", "success"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    placeholder: {
      defaultValue: "Placeholder",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roundness: {
      defaultValue: false,
      description: " true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    invalid: {
      defaultValue: false,
      description: "invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    rightSection: {
      defaultValue: "",
      description: "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
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
  return <Input {...props} />;
};;

export const WithIcon = (props) => {
  return <Input icon={<Icon />} {...props} />;
};;

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return <Input icon={<Icon />} {...props} rightSection={withRight} />;
};;

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return <Input icon={<Icon />} {...props} />;\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return <Input icon={<Icon />} {...props} rightSection={withRight} />;\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}},"with-icon":{startLoc:{col:24,line:126},endLoc:{col:1,line:128},startBody:{col:24,line:126},endBody:{col:1,line:128}},"with-right-section":{startLoc:{col:32,line:130},endLoc:{col:1,line:134},startBody:{col:32,line:130},endBody:{col:1,line:134}},textarea:{startLoc:{col:24,line:136},endLoc:{col:1,line:142},startBody:{col:24,line:136},endBody:{col:1,line:142}}}}},title:"@travelmakers-design/core/Component/Input",component:x,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"Placeholder",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},O=function(){return Object(P.jsx)("svg",{viewBox:"0 0 24 24",children:Object(P.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};O.displayName="Icon";var E=function(u){return Object(P.jsx)(x,Object.assign({},u))};E.displayName="Default";var S=function(u){return Object(P.jsx)(x,Object.assign({icon:Object(P.jsx)(O,{})},u))};S.displayName="WithIcon";var h=function(u){var p="\uC778\uC99D\uC644\uB8CC";return Object(P.jsx)(x,Object.assign({icon:Object(P.jsx)(O,{})},u,{rightSection:p}))};h.displayName="WithRightSection";var f=function(u){return Object(P.jsx)("div",{style:{width:400,padding:24},children:Object(P.jsx)(x,Object.assign({component:"textarea",multiline:!0},u))})};f.displayName="Textarea",E.parameters=Object.assign({storySource:{source:`(props) => {
  return <Input {...props} />;
}`}},E.parameters),S.parameters=Object.assign({storySource:{source:`(props) => {
  return <Input icon={<Icon />} {...props} />;
}`}},S.parameters),h.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return <Input icon={<Icon />} {...props} rightSection={withRight} />;
}`}},h.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return M});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-core/src/constants/index.ts"),H=Object(V.a)(function(x,T){var D=T.size,C=T.color,O=C===void 0?x.colorScheme==="light"?x.colors.black:x.colors.white:C in x.palettes?(x.colorScheme==="light",x.palettes[C][0]):C in x.colors?x.colors[C]:C;return{root:{position:"relative",display:"inline-block",width:D in J.a?J.a[D]:D,height:D in J.a?J.a[D]:D,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:O},circle:{fill:O}}}}),U=e("./node_modules/react/jsx-runtime.js"),N=["size","color","className","co","overrideStyles"];function X(x,T){if(x==null)return{};var D=R(x,T),C,O;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(x);for(O=0;O<E.length;O++)C=E[O],!(T.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,C)||(D[C]=x[C]))}return D}function R(x,T){if(x==null)return{};var D={},C=Object.keys(x),O,E;for(E=0;E<C.length;E++)O=C[E],!(T.indexOf(O)>=0)&&(D[O]=x[O]);return D}var $=Object(K.forwardRef)(function(x,T){var D=x.size,C=D===void 0?"medium":D,O=x.color,E=x.className,S=x.co,h=x.overrideStyles,f=X(x,N),s=H({size:C,color:O},{overrideStyles:h,name:"Spinner"}),u=s.classes,p=s.cx,m=Object(U.jsx)("i",{className:u.inner,children:Object(U.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(U.jsxs)("g",{transform:"translate(1 1)",children:[Object(U.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(U.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(U.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(U.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(U.jsx)(z.a,Object.assign({ref:T,className:p(u.root,E),co:S},f,{children:m}))});$.displayName="@travelmakers-design/core/Spinner";var P=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":21},"endLoc":{"col":1,"line":23},"startBody":{"col":23,"line":21},"endBody":{"col":1,"line":23}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,ne={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},P=`import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
`,ne={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},Z=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Spinner } from \\"../Spinner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Spinner\\",\\n  component: Spinner,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"color\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Spinner {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":21},"endLoc":{"col":1,"line":23},"startBody":{"col":23,"line":21},"endBody":{"col":1,"line":23}}};
    
import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@travelmakers-design/core/Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["xsmall", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "color" },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:$,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},M=function(T){return Object(U.jsx)($,Object.assign({},T))};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},M.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return O});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),q=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),V=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),X=function(S){return{xsmall:{fontWeight:"normal",lineHeight:S.lineHeights.h6+"px",fontSize:S.fontSizes.h6},small:{fontWeight:"normal",lineHeight:S.lineHeights.h4+"px",fontSize:S.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:S.lineHeights.h2+"px",fontSize:S.fontSizes.h2},large:{fontWeight:"normal",lineHeight:S.lineHeights.h1+"px",fontSize:S.fontSizes.h1}}},R=function(S){return{display:S?"block":"inline-block",width:S?"100%":"auto"}},$=Object(U.a)(function(E,S,h){var f,s,u=S.color,p=S.size,m=S.fullWidth,r=S.family,t=S.underline,n=S.leftIcon,o=S.rightIcon,a=h("loading"),v=h("inner"),d=h("spinner"),l=u||E.colors.navy1;return{loading:(f={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},f["."+v]={opacity:0},f["."+d]={display:"flex"},f),solid:(s={color:l==="white"?E.colors.white:E.colors.navy1,"&:not(:disabled):hover":{color:l==="white"?E.colors.white:E.colors.navy1},"&:not(:disabled):active":{color:l==="white"?E.colors.gray6:E.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},s["&:disabled:not(."+a+")"]={color:E.colors.gray5},s),root:Object.assign({},R(m),Object(N.b)(E),X(E)[p],{fontFamily:""+r,borderRadius:E.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:t?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:v,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),P=e("./node_modules/react/jsx-runtime.js"),ne=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function Z(E,S){if(E==null)return{};var h=M(E,S),f,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(E);for(s=0;s<u.length;s++)f=u[s],!(S.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(E,f)||(h[f]=E[f]))}return h}function M(E,S){if(E==null)return{};var h={},f=Object.keys(E),s,u;for(u=0;u<f.length;u++)s=f[u],!(S.indexOf(s)>=0)&&(h[s]=E[s]);return h}var x=Object(W.forwardRef)(function(E,S){var h=E.children,f=E.component,s=E.family,u=s===void 0?"Pretendard":s,p=E.size,m=p===void 0?"medium":p,r=E.color,t=r===void 0?"navy":r,n=E.fullWidth,o=n===void 0?!1:n,a=E.type,v=a===void 0?"button":a,d=E.disabled,l=d===void 0?!1:d,c=E.underline,_=c===void 0?!1:c,i=E.leftIcon,y=E.rightIcon,k=E.className,j=E.co,A=E.overrideStyles,g=Z(E,ne),B=Object(V.c)(),L=$({color:t,size:m,fullWidth:o,family:u,underline:_,leftIcon:i,rightIcon:y},{overrideStyles:A,name:"Button"}),I=L.classes,G=L.cx;return Object(P.jsx)(J.a,Object.assign({component:f||"button",ref:S,type:v,disabled:l,className:G(I.root,I.solid,k),co:j,onTouchStart:function(){}},g,{children:Object(P.jsxs)("div",{className:I.inner,children:[i&&Object(P.jsxs)("span",{className:G(I.icon,I.leftIcon),children:[i,"\xA0"]}),Object(P.jsx)("span",{className:I.label,children:h}),y&&Object(P.jsxs)("span",{className:G(I.icon,I.rightIcon),children:["\xA0",y]})]})}))});x.displayName="@travelmakers-design/core/TextButton";var T=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { TextButton } from \\"../TextButton\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/TextButton\\",\\n  component: TextButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":122},"endLoc":{"col":1,"line":124},"startBody":{"col":23,"line":122},"endBody":{"col":1,"line":124}}};
    
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
import { TextButton } from "../TextButton";

export default {
  title: "@travelmakers-design/core/Component/TextButton",
  component: TextButton,
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
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  return <TextButton {...props}>Button</TextButton>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},T=`import {
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
import { TextButton } from "../TextButton";

export default {
  title: "@travelmakers-design/core/Component/TextButton",
  component: TextButton,
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
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  return <TextButton {...props}>Button</TextButton>;
};
`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},C=b.default={title:"@travelmakers-design/core/Component/TextButton",component:x,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { TextButton } from \\"../TextButton\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/TextButton\\",\\n  component: TextButton,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":122},"endLoc":{"col":1,"line":124},"startBody":{"col":23,"line":122},"endBody":{"col":1,"line":124}}};
    
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
import { TextButton } from "../TextButton";

export default {
  title: "@travelmakers-design/core/Component/TextButton",
  component: TextButton,
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
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
  return <TextButton {...props}>Button</TextButton>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(K.g,{}),Object(P.jsx)(K.f,{}),Object(P.jsx)(K.b,{}),Object(P.jsx)(K.d,{}),Object(P.jsx)(K.a,{story:K.c}),Object(P.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},O=function(S){return Object(P.jsx)(x,Object.assign({},S,{children:"Button"}))};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},O.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return T});var w=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.string.italics.js"),Q=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/core-js/modules/es.array.reduce.js"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N={h1:{},small:{},medium:{},large:{}},X=function(C){return{caption:{lineHeight:C.lineHeights.caption+"px",fontSize:C.fontSizes.caption},b3:{lineHeight:C.lineHeights.b3+"px",fontSize:C.fontSizes.b3},b2:{lineHeight:C.lineHeights.b2+"px",fontSize:C.fontSizes.b2},b1:{lineHeight:C.lineHeights.b1+"px",fontSize:C.fontSizes.b1},h6:{lineHeight:C.lineHeights.h6+"px",fontSize:C.fontSizes.h6},h5:{lineHeight:C.lineHeights.h5+"px",fontSize:C.fontSizes.h5},h4:{lineHeight:C.lineHeights.h4+"px",fontSize:C.fontSizes.h4},h3:{lineHeight:C.lineHeights.h3+"px",fontSize:C.fontSizes.h3},h2:{lineHeight:C.lineHeights.h2+"px",fontSize:C.fontSizes.h2},h1:{lineHeight:C.lineHeights.h1+"px",fontSize:C.fontSizes.h1}}},R=Object.keys(N).reduce(function(D,C){return D[C]=N[C].height,D},{}),$=function(C){return{display:"block",width:"100%"}},P=Object(U.a)(function(D,C,O){var E,S,h=C.family,f=C.level,s=C.textAlign,u=C.disabled,p=C.strong,m=C.italic,r=C.underline,t=C.color,n=C.mobile,o=C.tablet,a=O("loading"),v=O("inner"),d=O("spinner");return{loading:(E={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},E["."+v]={opacity:0},E["."+d]={display:"flex"},E),solid:{fontWeight:p?h==="Noto Serif KR"?600:700:400,fontStyle:m?"italic":"normal",textDecoration:r?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},N[f],$(),X(D)[f],(S={fontFamily:""+h,color:u?D.colors.gray5:t||D.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+s,WebkitAppearance:"none",outline:"none",border:"none"},S[""+D.media.mobile]=Object.assign({},X(D)[n]),S[""+D.media.tablet]=Object.assign({},X(D)[o]),S)),inner:{ref:v,height:"100%",overflow:"visible"},label:{height:"100%"}}}),ne=e("./node_modules/react/jsx-runtime.js"),Z=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function M(D,C){if(D==null)return{};var O=x(D,C),E,S;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(D);for(S=0;S<h.length;S++)E=h[S],!(C.indexOf(E)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,E)||(O[E]=D[E]))}return O}function x(D,C){if(D==null)return{};var O={},E=Object.keys(D),S,h;for(h=0;h<E.length;h++)S=E[h],!(C.indexOf(S)>=0)&&(O[S]=D[S]);return O}var T=Object(V.forwardRef)(function(D,C){var O=D.children,E=D.component,S=D.family,h=S===void 0?"Noto Serif KR":S,f=D.level,s=f===void 0?"h1":f,u=D.mobileLevel,p=D.tabletLevel,m=D.textAlign,r=m===void 0?"left":m,t=D.disabled,n=t===void 0?!1:t,o=D.strong,a=o===void 0?!1:o,v=D.italic,d=v===void 0?!1:v,l=D.underline,c=l===void 0?!1:l,_=D.color,i=D.className,y=D.co,k=D.overrideStyles,j=M(D,Z),A=Object(z.c)(),g=P({family:h,level:s,disabled:n,strong:a,italic:d,underline:c,textAlign:r,color:_,mobile:u,tablet:p},{overrideStyles:k,name:"span"}),B=g.classes,L=g.cx;return Object(ne.jsx)(J.a,Object.assign({component:E||"span",ref:C,type:"span",disabled:n,className:L(B.root,B.solid,i),co:y,onTouchStart:function(){}},j,{children:Object(ne.jsx)("div",{className:B.inner,children:Object(ne.jsx)("span",{className:B.label,children:O})})}))});T.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return N});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),q=e("./node_modules/react/index.js"),Q=e.n(q),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./node_modules/react/jsx-runtime.js"),J=e.n(V),H=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"h1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n};\\n";
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
      control: { type: "select" },
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
      control: { type: "select" },
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
      control: { type: "select" },
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},H=`import {
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
      control: { type: "select" },
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
      control: { type: "select" },
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
      control: { type: "select" },
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
`,U={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};b.default={title:"@travelmakers-design/core/General/Typography",component:z.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"h1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"b3\\",\\n        \\"b2\\",\\n        \\"b1\\",\\n        \\"h6\\",\\n        \\"h5\\",\\n        \\"h4\\",\\n        \\"h3\\",\\n        \\"h2\\",\\n        \\"h1\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n};\\n";
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
      control: { type: "select" },
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
      control: { type: "select" },
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
      control: { type: "select" },
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(W.g,{}),Object(V.jsx)(W.f,{}),Object(V.jsx)(W.b,{}),Object(V.jsx)(W.d,{}),Object(V.jsx)(W.a,{story:W.c}),Object(V.jsx)(W.e,{})]})}}}};var N=function(R){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(z.a,Object.assign({},R,{level:"h1",children:"h1. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"h2",children:"h2. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"h3",children:"h3. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"h4",children:"h4. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"h5",children:"h5. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"h6",children:"h6. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"b1",children:"b1. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"b2",children:"b2. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"b3",children:"b3. Travelmakers Design"})),Object(V.jsx)(z.a,Object.assign({},R,{level:"caption",children:"caption. Travelmakers Design"}))]})};N.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},N.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return E});var w=e("./node_modules/core-js/modules/es.object.keys.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.array.map.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.object.assign.js"),X=e.n(N),R=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),$=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),P=e("./node_modules/react/index.js"),ne=e.n(P),Z=e("./node_modules/react/jsx-runtime.js"),M=e.n(Z),x=["component","className","style","co"];function T(S,h){if(S==null)return{};var f=D(S,h),s,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(S);for(u=0;u<p.length;u++)s=p[u],!(h.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(S,s)||(f[s]=S[s]))}return f}function D(S,h){if(S==null)return{};var f={},s=Object.keys(S),u,p;for(p=0;p<s.length;p++)u=s[p],!(h.indexOf(u)>=0)&&(f[u]=S[u]);return f}function C(S,h){return typeof S=="function"?S(h):S}function O(S,h){var f=Object(R.a)(),s=f.css,u=f.cx,p=Object($.c)();return Array.isArray(S)?u(h,S.map(function(m){return s(C(m,p))})):u(h,s(C(S,p)))}var E=Object(P.forwardRef)(function(S,h){var f=S.component,s=S.className,u=S.style,p=S.co,m=T(S,x),r=f||"div";return Object(Z.jsx)(r,Object.assign({ref:h,className:O(p,s),style:u},m))});E.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/react/jsx-runtime.js"),V=e.n(z),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},J=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:Q.a};var U=function(){return Object(z.jsx)(Q.a,{co:function(R){return{width:100,height:100,backgroundColor:R.colors.gray3}}})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},U.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return w});var w={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return p});var w=e("./node_modules/core-js/modules/es.string.replace.js"),K=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),q=e("./node_modules/core-js/modules/es.number.constructor.js"),Q=e("./node_modules/core-js/modules/es.parse-int.js"),z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.string.split.js"),J=e("./node_modules/core-js/modules/es.string.starts-with.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/core-js/modules/es.array.from.js");function T(m,r){return S(m)||E(m,r)||C(m,r)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(m,r){if(!!m){if(typeof m=="string")return O(m,r);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(m,r)}}function O(m,r){(r==null||r>m.length)&&(r=m.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=m[t];return n}function E(m,r){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,d;try{for(t=t.call(m);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,d=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw d}}return n}}function S(m){if(Array.isArray(m))return m}function h(m){var r=m.replace("#","");return typeof r=="string"&&r.length===6&&!Number.isNaN(Number("0x"+r))}function f(m){var r=m.replace("#",""),t=parseInt(r,16),n=t>>16&255,o=t>>8&255,a=t&255;return{r:n,g:o,b:a,a:1}}function s(m){var r=m.replace(/[^0-9,.]/g,"").split(",").map(Number),t=T(r,4),n=t[0],o=t[1],a=t[2],v=t[3];return{r:n,g:o,b:a,a:v||1}}function u(m){return h(m)?f(m):m.startsWith("rgb")?s(m):{r:0,g:0,b:0,a:1}}var p=function(r,t){var n=u(r),o=n.r,a=n.g,v=n.b;return"rgba("+o+", "+a+", "+v+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Q});var w=e("./node_modules/core-js/modules/es.array.concat.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=function(V){var J=Object(W.useRef)(V);return Object(W.useEffect)(function(){J.current=V},[V]),Object(W.useMemo)(function(){return function(){for(var H,U=arguments.length,N=new Array(U),X=0;X<U;X++)N[X]=arguments[X];return(H=J.current)===null||H===void 0?void 0:H.call.apply(H,[J].concat(N))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),z=e("./node_modules/react/jsx-runtime.js"),V=e.n(z),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},J=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var U=function(){var X=Object(Q.a)(function(){alert("Click away from red box!")});return Object(z.jsx)("div",{children:Object(z.jsx)("div",{ref:X,style:{width:100,height:100,backgroundColor:"red"}})})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
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
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return p});var w=e("./node_modules/core-js/modules/es.array.slice.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.function.name.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.array.from.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.is-array.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O),S=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function h(m,r){var t=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!t){if(Array.isArray(m)||(t=f(m))||r&&m&&typeof m.length=="number"){t&&(m=t);var n=0,o=function(){};return{s:o,n:function(){return n>=m.length?{done:!0}:{done:!1,value:m[n++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,v=!1,d;return{s:function(){t=t.call(m)},n:function(){var c=t.next();return a=c.done,c},e:function(c){v=!0,d=c},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(v)throw d}}}}function f(m,r){if(!!m){if(typeof m=="string")return s(m,r);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(m,r)}}function s(m,r){(r==null||r>m.length)&&(r=m.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=m[t];return n}var u=["mousedown","touchstart"],p=function(r){var t=Object(O.useRef)(),n=Object(S.a)(r);return Object(O.useEffect)(function(){var o=function(c){var _=t.current;_&&!_.contains(c.target)&&n(c)},a=h(u),v;try{for(a.s();!(v=a.n()).done;){var d=v.value;document.addEventListener(d,o)}}catch(l){a.e(l)}finally{a.f()}return function(){var l=h(u),c;try{for(l.s();!(c=l.n()).done;){var _=c.value;document.removeEventListener(_,o)}}catch(i){l.e(i)}finally{l.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/web.timers.js");function P(t,n){return T(t)||x(t,n)||Z(t,n)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,n){if(!!t){if(typeof t=="string")return M(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return M(t,n)}}function M(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function x(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,d=!1,l,c;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(_){d=!0,c=_}finally{try{!v&&o.return!=null&&o.return()}finally{if(d)throw c}}return a}}function T(t){if(Array.isArray(t))return t}var D=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=n.timeout,a=o===void 0?2e3:o,v=Object(R.useState)(null),d=P(v,2),l=d[0],c=d[1],_=Object(R.useState)(!1),i=P(_,2),y=i[0],k=i[1],j=Object(R.useState)(null),A=P(j,2),g=A[0],B=A[1],L=function(oe){clearTimeout(g),B(setTimeout(function(){return k(!1)},a)),k(oe)},I=function(oe){"clipboard"in navigator?navigator.clipboard.writeText(oe).then(function(){return L(!0)}).catch(function(ie){return c(ie)}):c(new Error("useClipboard: navigator.clipboard is not supported"))},G=function(){k(!1),c(null),clearTimeout(g)};return{copy:I,reset:G,error:l,copied:y}},C=e("./node_modules/react/jsx-runtime.js");function O(t,n){return s(t)||f(t,n)||S(t,n)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t,n){if(!!t){if(typeof t=="string")return h(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return h(t,n)}}function h(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function f(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,d=!1,l,c;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(_){d=!0,c=_}finally{try{!v&&o.return!=null&&o.return()}finally{if(d)throw c}}return a}}function s(t){if(Array.isArray(t))return t}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},u=`import React, { useState } from "react";

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
`,p={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},m=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},r=function(){var n=Object(R.useState)(""),o=O(n,2),a=o[0],v=o[1],d=D({timeout:3e3}),l=d.copy,c=d.copied;return Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{type:"text",onChange:function(i){return v(i.target.value)}}),Object(C.jsx)("button",{onClick:function(){return l(a)},children:"copy"}),Object(C.jsx)("span",{children:c&&"Copied!!"})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return H});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),q=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},Q=e("./node_modules/react/jsx-runtime.js"),z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},z=`import React from "react";
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
`,V={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},J=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},H=function(){var N=q();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:N})})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},H.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),P=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ne(n,o){return D(n)||T(n,o)||M(n,o)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(n,o){if(!!n){if(typeof n=="string")return x(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(n,o)}}function x(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function T(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],d=!0,l=!1,c,_;try{for(a=a.call(n);!(d=(c=a.next()).done)&&(v.push(c.value),!(o&&v.length===o));d=!0);}catch(i){l=!0,_=i}finally{try{!d&&a.return!=null&&a.return()}finally{if(l)throw _}}return v}}function D(n){if(Array.isArray(n))return n}var C=function(o,a,v){var d=Object(P.a)(o,a),l=ne(d,2),c=l[0],_=l[1];return Object($.a)(c,v),_},O=e("./node_modules/react/jsx-runtime.js");function E(n,o){return u(n)||s(n,o)||h(n,o)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,o){if(!!n){if(typeof n=="string")return f(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(n,o)}}function f(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function s(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],d=!0,l=!1,c,_;try{for(a=a.call(n);!(d=(c=a.next()).done)&&(v.push(c.value),!(o&&v.length===o));d=!0);}catch(i){l=!0,_=i}finally{try{!d&&a.return!=null&&a.return()}finally{if(l)throw _}}return v}}function u(n){if(Array.isArray(n))return n}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},p=`import React, { useState } from "react";

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
`,m={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},r=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},t=function(){var o=Object(R.useState)(""),a=E(o,2),v=a[0],d=a[1],l=C(function(){alert("Updated!")},1e3,[v]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",onChange:function(_){return d(_.target.value)}}),Object(O.jsx)("button",{onClick:l,children:"Cancel"})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),z=e("./node_modules/react/jsx-runtime.js"),V=e.n(z),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},J=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var U=function(){var X=Object(Q.a)();return Object(z.jsxs)("div",{children:[Math.random(),Object(z.jsx)("button",{onClick:X,children:"Update"})]})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return r});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O);function S(t,n){return p(t)||u(t,n)||f(t,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,n){if(!!t){if(typeof t=="string")return s(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(t,n)}}function s(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function u(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,d=!1,l,c;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(_){d=!0,c=_}finally{try{!v&&o.return!=null&&o.return()}finally{if(d)throw c}}return a}}function p(t){if(Array.isArray(t))return t}var m=function(n){return(n+1)%1e6},r=function(){var n=Object(O.useReducer)(m,0),o=S(n,2),a=o[1];return a}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.string.split.js"),P=e("./node_modules/core-js/modules/es.regexp.exec.js"),ne=e("./node_modules/core-js/modules/es.string.replace.js"),Z=e("./node_modules/core-js/modules/es.array.filter.js"),M=e("./node_modules/core-js/modules/es.regexp.to-string.js"),x=e("./node_modules/core-js/modules/es.date.to-string.js");function T(_,i){var y=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!y){if(Array.isArray(_)||(y=D(_))||i&&_&&typeof _.length=="number"){y&&(_=y);var k=0,j=function(){};return{s:j,n:function(){return k>=_.length?{done:!0}:{done:!1,value:_[k++]}},e:function(L){function I(G){return L.apply(this,arguments)}return I.toString=function(){return L.toString()},I}(function(L){throw L}),f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A=!0,g=!1,B;return{s:function(){y=y.call(_)},n:function(){var I=y.next();return A=I.done,I},e:function(L){function I(G){return L.apply(this,arguments)}return I.toString=function(){return L.toString()},I}(function(L){g=!0,B=L}),f:function(){try{!A&&y.return!=null&&y.return()}finally{if(g)throw B}}}}function D(_,i){if(!!_){if(typeof _=="string")return C(_,i);var y=Object.prototype.toString.call(_).slice(8,-1);if(y==="Object"&&_.constructor&&(y=_.constructor.name),y==="Map"||y==="Set")return Array.from(_);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return C(_,i)}}function C(_,i){(i==null||i>_.length)&&(i=_.length);for(var y=0,k=new Array(i);y<i;y++)k[y]=_[y];return k}var O={alt:1,ctrl:2,meta:4,shift:8},E={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},S={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},h=function(i){var y=i.key!==" "?i.key.toLowerCase():"space",k=0;return i.altKey&&(k+=O.alt),i.ctrlKey&&(k+=O.ctrl),i.metaKey&&(k+=O.meta),i.shiftKey&&(k+=O.shift),{modifiers:k,key:y}},f=function(i){var y=i.replace(/\s/g,"").toLowerCase().split("+"),k=0,j,A=T(y),g;try{for(A.s();!(g=A.n()).done;){var B=g.value;O[B]?k+=O[B]:O[S[B]]?k+=O[S[B]]:E[B]?(k+=O.shift,j=E[B]):S[B]?j=S[B]:j=B}}catch(L){A.e(L)}finally{A.f()}return{modifiers:k,key:j}},s=function(i,y){return i.modifiers===y.modifiers&&i.key===y.key},u=function(i){var y=Object(R.useMemo)(function(){return i.filter(function(I){return!I.global})},[i]),k=Object(R.useMemo)(function(){return i.filter(function(I){return I.global})},[i]),j=Object(R.useCallback)(function(I,G,F,oe){var ie=T(I?k:y),ve;try{for(ie.s();!(ve=ie.n()).done;){var ce=ve.value;if(s(f(ce.combo),G)){var ae;(ae=ce[F])===null||ae===void 0||ae.call(ce,oe)}}}catch(_e){ie.e(_e)}finally{ie.f()}},[y,k]),A=Object(R.useCallback)(function(I){j(!0,h(I),"onKeyDown",I)},[j]),g=Object(R.useCallback)(function(I){j(!0,h(I),"onKeyUp",I)},[j]),B=Object(R.useCallback)(function(I){j(!1,h(I.nativeEvent),"onKeyDown",I.nativeEvent)},[j]),L=Object(R.useCallback)(function(I){j(!1,h(I.nativeEvent),"onKeyUp",I.nativeEvent)},[j]);return Object(R.useEffect)(function(){return document.addEventListener("keydown",A),document.addEventListener("keyup",g),function(){document.removeEventListener("keydown",A),document.removeEventListener("keyup",g)}},[A,g]),{handleKeyDown:B,handleKeyUp:L}},p=e("./node_modules/react/jsx-runtime.js");function m(_,i){return a(_)||o(_,i)||t(_,i)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(_,i){if(!!_){if(typeof _=="string")return n(_,i);var y=Object.prototype.toString.call(_).slice(8,-1);if(y==="Object"&&_.constructor&&(y=_.constructor.name),y==="Map"||y==="Set")return Array.from(_);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(_,i)}}function n(_,i){(i==null||i>_.length)&&(i=_.length);for(var y=0,k=new Array(i);y<i;y++)k[y]=_[y];return k}function o(_,i){var y=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(y!=null){var k=[],j=!0,A=!1,g,B;try{for(y=y.call(_);!(j=(g=y.next()).done)&&(k.push(g.value),!(i&&k.length===i));j=!0);}catch(L){A=!0,B=L}finally{try{!j&&y.return!=null&&y.return()}finally{if(A)throw B}}return k}}function a(_){if(Array.isArray(_))return _}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},v=`import React, { useRef, useState } from "react";

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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},l=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},c=function(){var i=Object(R.useRef)(null),y=Object(R.useState)(""),k=m(y,2),j=k[0],A=k[1],g=u([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){i.current.select()}},{combo:"shift+r",onKeyUp:function(){A("")}}]),B=g.handleKeyDown,L=g.handleKeyUp;return Object(p.jsx)("div",{children:Object(p.jsx)("input",{ref:i,type:"text",value:j,onChange:function(G){return A(G.target.value)},onKeyDown:B,onKeyUp:L})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return l});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),O=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(O),S=e("./node_modules/react/index.js"),h=e.n(S),f=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),s=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),u=e("./node_modules/react/jsx-runtime.js"),p=e.n(u);function m(c,_){return a(c)||o(c,_)||t(c,_)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(c,_){if(!!c){if(typeof c=="string")return n(c,_);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(c,_)}}function n(c,_){(_==null||_>c.length)&&(_=c.length);for(var i=0,y=new Array(_);i<_;i++)y[i]=c[i];return y}function o(c,_){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var y=[],k=!0,j=!1,A,g;try{for(i=i.call(c);!(k=(A=i.next()).done)&&(y.push(A.value),!(_&&y.length===_));k=!0);}catch(B){j=!0,g=B}finally{try{!k&&i.return!=null&&i.return()}finally{if(j)throw g}}return y}}function a(c){if(Array.isArray(c))return c}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},v=`import React, { useEffect } from "react";

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
`,d={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var l=function(){var _=Object(s.a)(),i=m(_,2),y=i[0],k=i[1],j=Object(f.a)();return Object(S.useEffect)(function(){j()},[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{ref:k,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+y]})})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`() => {
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
}`}},l.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return m});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O);function S(r,t){return p(r)||u(r,t)||f(r,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(r,t){if(!!r){if(typeof r=="string")return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}}function s(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function u(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function p(r){if(Array.isArray(r))return r}var m=function(){var t=Object(O.useRef)(null),n=Object(O.useState)(!1),o=S(n,2),a=o[0],v=o[1],d=Object(O.useCallback)(function(){return v(!0)},[]),l=Object(O.useCallback)(function(){return v(!1)},[]);return Object(O.useEffect)(function(){var c=t.current;if(!!c)return c.addEventListener("mouseenter",d),c.addEventListener("mouseleave",l),function(){c.removeEventListener("mouseenter",d),c.removeEventListener("mouseleave",l)}},[t.current]),[a,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),z=e("./node_modules/react/jsx-runtime.js"),V=e.n(z),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},J=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var U=function(){var X=Object(Q.a)();return Object(z.jsx)("div",{children:Object(z.jsx)("div",{children:X})})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return r});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O);function S(t,n){return p(t)||u(t,n)||f(t,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,n){if(!!t){if(typeof t=="string")return s(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(t,n)}}function s(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function u(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,d=!1,l,c;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(_){d=!0,c=_}finally{try{!v&&o.return!=null&&o.return()}finally{if(d)throw c}}return a}}function p(t){if(Array.isArray(t))return t}var m=0,r=function(n){var o=Object(O.useState)(n),a=S(o,2),v=a[0],d=a[1],l=n||v;return Object(O.useEffect)(function(){v==null&&(m+=1,d("tm-"+m))},[v]),l}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),q=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),P=e("./node_modules/core-js/modules/es.function.name.js"),ne=e("./node_modules/core-js/modules/es.array.from.js");function Z(m,r){return C(m)||D(m,r)||x(m,r)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(m,r){if(!!m){if(typeof m=="string")return T(m,r);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(m,r)}}function T(m,r){(r==null||r>m.length)&&(r=m.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=m[t];return n}function D(m,r){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,d;try{for(t=t.call(m);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,d=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw d}}return n}}function C(m){if(Array.isArray(m))return m}var O=["keypress","mousemove","touchmove","click","scroll"],E={events:O,initialState:!0},S=function(r,t){var n=Object.assign({},E,t),o=n.events,a=n.initialState,v=Object(K.useState)(a),d=Z(v,2),l=d[0],c=d[1],_=Object(K.useRef)();return Object(K.useEffect)(function(){var i=function(){c(!1),_.current&&window.clearTimeout(_.current),_.current=window.setTimeout(function(){c(!0)},r)};return o.forEach(function(y){return document.addEventListener(y,i)}),function(){o.forEach(function(y){return document.removeEventListener(y,i)})}},[r]),l},h=e("./node_modules/react/jsx-runtime.js"),f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},f=`import React from "react";
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
`,s={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},u=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},p=function(){var r=S(3e3);return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Idle: ",""+r]})})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js");function $(r,t){return x(r)||M(r,t)||ne(r,t)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(r,t){if(!!r){if(typeof r=="string")return Z(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(r,t)}}function Z(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function M(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function x(r){if(Array.isArray(r))return r}var T=function(t){var n=Object(R.useState)(null),o=$(n,2),a=o[0],v=o[1],d=Object(R.useRef)(),l=Object(R.useCallback)(function(c){if(d.current&&(d.current.disconnect(),d.current=null),c===null){v(null);return}d.current=new IntersectionObserver(function(_){var i=$(_,1),y=i[0];v(y)},t),d.current.observe(c)},[t==null?void 0:t.rootMargin,t==null?void 0:t.root,t==null?void 0:t.threshold]);return[l,a]},D=e("./node_modules/react/jsx-runtime.js");function C(r,t){return f(r)||h(r,t)||E(r,t)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(r,t){if(!!r){if(typeof r=="string")return S(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(r,t)}}function S(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function h(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function f(r){if(Array.isArray(r))return r}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},s=`import React, { useRef } from "react";

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
`,u={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},p=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},m=function(){var t=Object(R.useRef)(null),n=T({root:t.current,threshold:.5}),o=C(n,2),a=o[0],v=o[1];return Object(D.jsx)("div",{ref:t,style:{width:300,height:300,overflowY:"scroll"},children:Object(D.jsx)("div",{style:{height:500},children:Object(D.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:v!=null&&v.isIntersecting?"green":"red"},children:v!=null&&v.isIntersecting?"Half visible":"Obscured"})})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return h});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function P(f,s){return T(f)||x(f,s)||Z(f,s)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(f,s){if(!!f){if(typeof f=="string")return M(f,s);var u=Object.prototype.toString.call(f).slice(8,-1);if(u==="Object"&&f.constructor&&(u=f.constructor.name),u==="Map"||u==="Set")return Array.from(f);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return M(f,s)}}function M(f,s){(s==null||s>f.length)&&(s=f.length);for(var u=0,p=new Array(s);u<s;u++)p[u]=f[u];return p}function x(f,s){var u=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(u!=null){var p=[],m=!0,r=!1,t,n;try{for(u=u.call(f);!(m=(t=u.next()).done)&&(p.push(t.value),!(s&&p.length===s));m=!0);}catch(o){r=!0,n=o}finally{try{!m&&u.return!=null&&u.return()}finally{if(r)throw n}}return p}}function T(f){if(Array.isArray(f))return f}var D=function(s,u){var p=Object($.a)(s,u),m=P(p,2),r=m[0],t=m[1];return Object(K.useEffect)(function(){return r(),t},[r,t]),t},C=e("./node_modules/react/jsx-runtime.js"),O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},O=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},S=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},h=function(){var s=D(function(){alert("fire")},3e3);return Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:s,children:"clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),O=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(O),S=e("./node_modules/react/index.js"),h=e.n(S),f=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),s=e("./node_modules/react/jsx-runtime.js"),u=e.n(s);function p(l,c){return o(l)||n(l,c)||r(l,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,c){if(!!l){if(typeof l=="string")return t(l,c);var _=Object.prototype.toString.call(l).slice(8,-1);if(_==="Object"&&l.constructor&&(_=l.constructor.name),_==="Map"||_==="Set")return Array.from(l);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(l,c)}}function t(l,c){(c==null||c>l.length)&&(c=l.length);for(var _=0,i=new Array(c);_<c;_++)i[_]=l[_];return i}function n(l,c){var _=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(_!=null){var i=[],y=!0,k=!1,j,A;try{for(_=_.call(l);!(y=(j=_.next()).done)&&(i.push(j.value),!(c&&i.length===c));y=!0);}catch(g){k=!0,A=g}finally{try{!y&&_.return!=null&&_.return()}finally{if(k)throw A}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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
`,v={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var d=function(){var c=Object(f.a)(function(){alert("fire")},3e3),_=p(c,2),i=_[0],y=_[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:i,children:"run"}),Object(s.jsx)("button",{onClick:y,children:"clear"})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return z});var w=e("./node_modules/core-js/modules/web.timers.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),z=function(J,H){var U=Object(W.useRef)(),N=Object(Q.a)(J),X=Object(W.useCallback)(function(){U.current&&clearInterval(U.current),U.current=setInterval(function(){N()},H)},[H]),R=Object(W.useCallback)(function(){U.current&&clearInterval(U.current)},[]);return Object(W.useEffect)(function(){return R},[R]),[X,R]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return S});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=typeof document!="undefined"?R.useLayoutEffect:R.useEffect,P=e("./node_modules/react/jsx-runtime.js");function ne(h,f){return D(h)||T(h,f)||M(h,f)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(h,f){if(!!h){if(typeof h=="string")return x(h,f);var s=Object.prototype.toString.call(h).slice(8,-1);if(s==="Object"&&h.constructor&&(s=h.constructor.name),s==="Map"||s==="Set")return Array.from(h);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return x(h,f)}}function x(h,f){(f==null||f>h.length)&&(f=h.length);for(var s=0,u=new Array(f);s<f;s++)u[s]=h[s];return u}function T(h,f){var s=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(s!=null){var u=[],p=!0,m=!1,r,t;try{for(s=s.call(h);!(p=(r=s.next()).done)&&(u.push(r.value),!(f&&u.length===f));p=!0);}catch(n){m=!0,t=n}finally{try{!p&&s.return!=null&&s.return()}finally{if(m)throw t}}return u}}function D(h){if(Array.isArray(h))return h}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},C=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},E=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},S=function(){var f=Object(R.useState)(!1),s=ne(f,2),u=s[0],p=s[1];return $(function(){p(!0)},[]),Object(P.jsx)("div",{children:u&&"mounted"})};S.displayName="Default",S.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},S.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return S});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js");function $(h,f){return x(h)||M(h,f)||ne(h,f)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(h,f){if(!!h){if(typeof h=="string")return Z(h,f);var s=Object.prototype.toString.call(h).slice(8,-1);if(s==="Object"&&h.constructor&&(s=h.constructor.name),s==="Map"||s==="Set")return Array.from(h);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Z(h,f)}}function Z(h,f){(f==null||f>h.length)&&(f=h.length);for(var s=0,u=new Array(f);s<f;s++)u[s]=h[s];return u}function M(h,f){var s=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(s!=null){var u=[],p=!0,m=!1,r,t;try{for(s=s.call(h);!(p=(r=s.next()).done)&&(u.push(r.value),!(f&&u.length===f));p=!0);}catch(n){m=!0,t=n}finally{try{!p&&s.return!=null&&s.return()}finally{if(m)throw t}}return u}}function x(h){if(Array.isArray(h))return h}var T=function(f){var s=Object(K.useState)(!1),u=$(s,2),p=u[0],m=u[1],r=Object(K.useCallback)(function(n){var o=n.key;o===f&&m(!0)},[f]),t=Object(K.useCallback)(function(n){var o=n.key;o===f&&m(!1)},[f]);return Object(K.useEffect)(function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",t)}},[r,t]),p},D=e("./node_modules/react/jsx-runtime.js"),C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},C=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,O={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},E=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},S=function(){var f=T("r");return Object(D.jsx)("div",{children:f&&"r key pressed"})};S.displayName="Default",S.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},S.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var w=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./node_modules/react/index.js"),P=e("./node_modules/core-js/modules/es.array.concat.js"),ne=e("./node_modules/core-js/modules/es.array.filter.js"),Z=e("./node_modules/core-js/modules/es.array.includes.js"),M=e("./node_modules/core-js/modules/es.string.includes.js");function x(i){return C(i)||D(i)||S(i)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function C(i){if(Array.isArray(i))return h(i)}function O(i,y){return s(i)||f(i,y)||S(i,y)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(i,y){if(!!i){if(typeof i=="string")return h(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return h(i,y)}}function h(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function f(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],A=!0,g=!1,B,L;try{for(k=k.call(i);!(A=(B=k.next()).done)&&(j.push(B.value),!(y&&j.length===y));A=!0);}catch(I){g=!0,L=I}finally{try{!A&&k.return!=null&&k.return()}finally{if(g)throw L}}return j}}function s(i){if(Array.isArray(i))return i}var u=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=Object($.useState)(y),j=O(k,2),A=j[0],g=j[1],B=Object($.useCallback)(function(){for(var ce=arguments.length,ae=new Array(ce),_e=0;_e<ce;_e++)ae[_e]=arguments[_e];return g(function(pe){return[].concat(x(pe),ae)})},[]),L=Object($.useCallback)(function(){for(var ce=arguments.length,ae=new Array(ce),_e=0;_e<ce;_e++)ae[_e]=arguments[_e];return g(function(pe){return[].concat(ae,x(pe))})},[]),I=Object($.useCallback)(function(ce){for(var ae=arguments.length,_e=new Array(ae>1?ae-1:0),pe=1;pe<ae;pe++)_e[pe-1]=arguments[pe];return g(function(je){return[].concat(x(je.slice(0,ce)),_e,x(je.slice(ce)))})},[]),G=Object($.useCallback)(function(){for(var ce=arguments.length,ae=new Array(ce),_e=0;_e<ce;_e++)ae[_e]=arguments[_e];return g(function(pe){return pe.filter(function(je,xe){return!ae.includes(xe)})})},[]),F=Object($.useCallback)(function(){var ce=x(A),ae=ce.pop();return g(ce),ae},[A]),oe=Object($.useCallback)(function(){var ce=x(A),ae=ce.shift();return g(ce),ae},[A]),ie=Object($.useCallback)(function(ce,ae){g(function(_e){var pe=x(_e);return pe[ce]=ae,pe})},[]),ve={setState:g,append:B,prepend:L,insert:I,remove:G,pop:F,shift:oe,setItem:ie};return[A,ve]},p=e("./node_modules/react/jsx-runtime.js");function m(i,y){return a(i)||o(i,y)||t(i,y)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(i,y){if(!!i){if(typeof i=="string")return n(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(i,y)}}function n(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function o(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],A=!0,g=!1,B,L;try{for(k=k.call(i);!(A=(B=k.next()).done)&&(j.push(B.value),!(y&&j.length===y));A=!0);}catch(I){g=!0,L=I}finally{try{!A&&k.return!=null&&k.return()}finally{if(g)throw L}}return j}}function a(i){if(Array.isArray(i))return i}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},v=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},l=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},c=5,_=function(){var y=u(["Item 1","Item 2","Item 3","Item 4","Item 5"]),k=m(y,2),j=k[0],A=k[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return A.append("Item "+ ++c)},children:"append"}),Object(p.jsx)("button",{onClick:function(){return A.pop()},children:"pop"}),Object(p.jsx)("button",{onClick:function(){return A.prepend("Item "+ ++c)},children:"prepend"}),Object(p.jsx)("button",{onClick:function(){return A.shift()},children:"shift"}),Object(p.jsx)("button",{onClick:function(){return A.setItem(3,"Updated")},children:"setItem 3 index"}),Object(p.jsx)("button",{onClick:function(){return A.remove(2,3)},children:"remove 2, 3 index"}),Object(p.jsx)("button",{onClick:function(){return A.insert(3,"Item "+ ++c)},children:"insert 3 index"})]}),Object(p.jsx)("ul",{children:j.map(function(g,B){return Object(p.jsx)("li",{children:g},B)})})]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var w=e("./node_modules/core-js/modules/es.promise.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.from.js"),P=e("./node_modules/react/index.js"),ne=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),Z=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),M=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),x=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),T=e("./node_modules/core-js/modules/es.object.define-property.js"),D=e("./node_modules/core-js/modules/es.object.create.js"),C=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),O=e("./node_modules/core-js/modules/es.array.for-each.js"),E=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),S=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),h=e("./node_modules/core-js/modules/es.array.reverse.js"),f=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function s(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return I};var I={},G=Object.prototype,F=G.hasOwnProperty,oe=typeof Symbol=="function"?Symbol:{},ie=oe.iterator||"@@iterator",ve=oe.asyncIterator||"@@asyncIterator",ce=oe.toStringTag||"@@toStringTag";function ae(te,Y,de){return Object.defineProperty(te,Y,{value:de,enumerable:!0,configurable:!0,writable:!0}),te[Y]}try{ae({},"")}catch(te){ae=function(de,me,fe){return de[me]=fe}}function _e(te,Y,de,me){var fe=Y&&Y.prototype instanceof xe?Y:xe,ye=Object.create(fe.prototype),Oe=new Ae(me||[]);return ye._invoke=function(Ee,Le,ge){var Se="suspendedStart";return function(Me,Ve){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Me==="throw")throw Ve;return Pe()}for(ge.method=Me,ge.arg=Ve;;){var Ke=ge.delegate;if(Ke){var Ue=ke(Ke,ge);if(Ue){if(Ue===je)continue;return Ue}}if(ge.method==="next")ge.sent=ge._sent=ge.arg;else if(ge.method==="throw"){if(Se==="suspendedStart")throw Se="completed",ge.arg;ge.dispatchException(ge.arg)}else ge.method==="return"&&ge.abrupt("return",ge.arg);Se="executing";var Be=pe(Ee,Le,ge);if(Be.type==="normal"){if(Se=ge.done?"completed":"suspendedYield",Be.arg===je)continue;return{value:Be.arg,done:ge.done}}Be.type==="throw"&&(Se="completed",ge.method="throw",ge.arg=Be.arg)}}}(te,de,Oe),ye}function pe(te,Y,de){try{return{type:"normal",arg:te.call(Y,de)}}catch(me){return{type:"throw",arg:me}}}I.wrap=_e;var je={};function xe(){}function he(){}function De(){}var le={};ae(le,ie,function(){return this});var ee=Object.getPrototypeOf,se=ee&&ee(ee(Re([])));se&&se!==G&&F.call(se,ie)&&(le=se);var ue=De.prototype=xe.prototype=Object.create(le);function be(te){["next","throw","return"].forEach(function(Y){ae(te,Y,function(de){return this._invoke(Y,de)})})}function Te(te,Y){function de(fe,ye,Oe,Ee){var Le=pe(te[fe],te,ye);if(Le.type!=="throw"){var ge=Le.arg,Se=ge.value;return Se&&typeof Se=="object"&&F.call(Se,"__await")?Y.resolve(Se.__await).then(function(Me){de("next",Me,Oe,Ee)},function(Me){de("throw",Me,Oe,Ee)}):Y.resolve(Se).then(function(Me){ge.value=Me,Oe(ge)},function(Me){return de("throw",Me,Oe,Ee)})}Ee(Le.arg)}var me;this._invoke=function(fe,ye){function Oe(){return new Y(function(Ee,Le){de(fe,ye,Ee,Le)})}return me=me?me.then(Oe,Oe):Oe()}}function ke(te,Y){var de=te.iterator[Y.method];if(de===void 0){if(Y.delegate=null,Y.method==="throw"){if(te.iterator.return&&(Y.method="return",Y.arg=void 0,ke(te,Y),Y.method==="throw"))return je;Y.method="throw",Y.arg=new TypeError("The iterator does not provide a 'throw' method")}return je}var me=pe(de,te.iterator,Y.arg);if(me.type==="throw")return Y.method="throw",Y.arg=me.arg,Y.delegate=null,je;var fe=me.arg;return fe?fe.done?(Y[te.resultName]=fe.value,Y.next=te.nextLoc,Y.method!=="return"&&(Y.method="next",Y.arg=void 0),Y.delegate=null,je):fe:(Y.method="throw",Y.arg=new TypeError("iterator result is not an object"),Y.delegate=null,je)}function Ie(te){var Y={tryLoc:te[0]};1 in te&&(Y.catchLoc=te[1]),2 in te&&(Y.finallyLoc=te[2],Y.afterLoc=te[3]),this.tryEntries.push(Y)}function Ce(te){var Y=te.completion||{};Y.type="normal",delete Y.arg,te.completion=Y}function Ae(te){this.tryEntries=[{tryLoc:"root"}],te.forEach(Ie,this),this.reset(!0)}function Re(te){if(te){var Y=te[ie];if(Y)return Y.call(te);if(typeof te.next=="function")return te;if(!isNaN(te.length)){var de=-1,me=function fe(){for(;++de<te.length;)if(F.call(te,de))return fe.value=te[de],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return me.next=me}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return he.prototype=De,ae(ue,"constructor",De),ae(De,"constructor",he),he.displayName=ae(De,ce,"GeneratorFunction"),I.isGeneratorFunction=function(te){var Y=typeof te=="function"&&te.constructor;return!!Y&&(Y===he||(Y.displayName||Y.name)==="GeneratorFunction")},I.mark=function(te){return Object.setPrototypeOf?Object.setPrototypeOf(te,De):(te.__proto__=De,ae(te,ce,"GeneratorFunction")),te.prototype=Object.create(ue),te},I.awrap=function(te){return{__await:te}},be(Te.prototype),ae(Te.prototype,ve,function(){return this}),I.AsyncIterator=Te,I.async=function(te,Y,de,me,fe){fe===void 0&&(fe=Promise);var ye=new Te(_e(te,Y,de,me),fe);return I.isGeneratorFunction(Y)?ye:ye.next().then(function(Oe){return Oe.done?Oe.value:ye.next()})},be(ue),ae(ue,ce,"Generator"),ae(ue,ie,function(){return this}),ae(ue,"toString",function(){return"[object Generator]"}),I.keys=function(te){var Y=[];for(var de in te)Y.push(de);return Y.reverse(),function me(){for(;Y.length;){var fe=Y.pop();if(fe in te)return me.value=fe,me.done=!1,me}return me.done=!0,me}},I.values=Re,Ae.prototype={constructor:Ae,reset:function(Y){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ce),!Y)for(var de in this)de.charAt(0)==="t"&&F.call(this,de)&&!isNaN(+de.slice(1))&&(this[de]=void 0)},stop:function(){this.done=!0;var Y=this.tryEntries[0].completion;if(Y.type==="throw")throw Y.arg;return this.rval},dispatchException:function(Y){if(this.done)throw Y;var de=this;function me(ge,Se){return Oe.type="throw",Oe.arg=Y,de.next=ge,Se&&(de.method="next",de.arg=void 0),!!Se}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ye=this.tryEntries[fe],Oe=ye.completion;if(ye.tryLoc==="root")return me("end");if(ye.tryLoc<=this.prev){var Ee=F.call(ye,"catchLoc"),Le=F.call(ye,"finallyLoc");if(Ee&&Le){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}else if(Ee){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0)}else{if(!Le)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}}}},abrupt:function(Y,de){for(var me=this.tryEntries.length-1;me>=0;--me){var fe=this.tryEntries[me];if(fe.tryLoc<=this.prev&&F.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ye=fe;break}}ye&&(Y==="break"||Y==="continue")&&ye.tryLoc<=de&&de<=ye.finallyLoc&&(ye=null);var Oe=ye?ye.completion:{};return Oe.type=Y,Oe.arg=de,ye?(this.method="next",this.next=ye.finallyLoc,je):this.complete(Oe)},complete:function(Y,de){if(Y.type==="throw")throw Y.arg;return Y.type==="break"||Y.type==="continue"?this.next=Y.arg:Y.type==="return"?(this.rval=this.arg=Y.arg,this.method="return",this.next="end"):Y.type==="normal"&&de&&(this.next=de),je},finish:function(Y){for(var de=this.tryEntries.length-1;de>=0;--de){var me=this.tryEntries[de];if(me.finallyLoc===Y)return this.complete(me.completion,me.afterLoc),Ce(me),je}},catch:function(Y){for(var de=this.tryEntries.length-1;de>=0;--de){var me=this.tryEntries[de];if(me.tryLoc===Y){var fe=me.completion;if(fe.type==="throw"){var ye=fe.arg;Ce(me)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function(Y,de,me){return this.delegate={iterator:Re(Y),resultName:de,nextLoc:me},this.method==="next"&&(this.arg=void 0),je}},I}function u(I,G,F,oe,ie,ve,ce){try{var ae=I[ve](ce),_e=ae.value}catch(pe){F(pe);return}ae.done?G(_e):Promise.resolve(_e).then(oe,ie)}function p(I){return function(){var G=this,F=arguments;return new Promise(function(oe,ie){var ve=I.apply(G,F);function ce(_e){u(ve,oe,ie,ce,ae,"next",_e)}function ae(_e){u(ve,oe,ie,ce,ae,"throw",_e)}ce(void 0)})}}function m(I,G){return a(I)||o(I,G)||t(I,G)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(I,G){if(!!I){if(typeof I=="string")return n(I,G);var F=Object.prototype.toString.call(I).slice(8,-1);if(F==="Object"&&I.constructor&&(F=I.constructor.name),F==="Map"||F==="Set")return Array.from(I);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return n(I,G)}}function n(I,G){(G==null||G>I.length)&&(G=I.length);for(var F=0,oe=new Array(G);F<G;F++)oe[F]=I[F];return oe}function o(I,G){var F=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(F!=null){var oe=[],ie=!0,ve=!1,ce,ae;try{for(F=F.call(I);!(ie=(ce=F.next()).done)&&(oe.push(ce.value),!(G&&oe.length===G));ie=!0);}catch(_e){ve=!0,ae=_e}finally{try{!ie&&F.return!=null&&F.return()}finally{if(ve)throw ae}}return oe}}function a(I){if(Array.isArray(I))return I}var v=function(G){var F=Object(P.useState)(!1),oe=m(F,2),ie=oe[0],ve=oe[1],ce=Object(f.a)(G),ae=Object(P.useCallback)(p(s().mark(function _e(){var pe,je=arguments;return s().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return ve(!0),he.next=3,ce.apply(void 0,je);case 3:return pe=he.sent,ve(!1),he.abrupt("return",pe);case 6:case"end":return he.stop()}},_e)})),[G]);return[ie,ae]},d=e("./node_modules/react/jsx-runtime.js");function l(I,G){return k(I)||y(I,G)||_(I,G)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(I,G){if(!!I){if(typeof I=="string")return i(I,G);var F=Object.prototype.toString.call(I).slice(8,-1);if(F==="Object"&&I.constructor&&(F=I.constructor.name),F==="Map"||F==="Set")return Array.from(I);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return i(I,G)}}function i(I,G){(G==null||G>I.length)&&(G=I.length);for(var F=0,oe=new Array(G);F<G;F++)oe[F]=I[F];return oe}function y(I,G){var F=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(F!=null){var oe=[],ie=!0,ve=!1,ce,ae;try{for(F=F.call(I);!(ie=(ce=F.next()).done)&&(oe.push(ce.value),!(G&&oe.length===G));ie=!0);}catch(_e){ve=!0,ae=_e}finally{try{!ie&&F.return!=null&&F.return()}finally{if(ve)throw ae}}return oe}}function k(I){if(Array.isArray(I))return I}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},j=`import React from "react";
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
`,A={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},g=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},B=function(G){return new Promise(function(F){return setTimeout(F,G)})},L=function(){var G=v(B),F=l(G,2),oe=F[0],ie=F[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return ie(2e3)},children:"Start"})}),Object(d.jsxs)("div",{children:["Loading: ",""+oe]})]})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),z=e("./node_modules/react/jsx-runtime.js"),V=e.n(z),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},J=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var U=function(){var X=Object(Q.a)("(min-width: 900px)");return Object(z.jsx)("div",{children:Object(z.jsxs)("div",{children:["(min-width: 900px) : ",X?"matches":"does not match"]})})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return t});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O);function S(n,o){return p(n)||u(n,o)||f(n,o)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,o){if(!!n){if(typeof n=="string")return s(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(n,o)}}function s(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function u(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],d=!0,l=!1,c,_;try{for(a=a.call(n);!(d=(c=a.next()).done)&&(v.push(c.value),!(o&&v.length===o));d=!0);}catch(i){l=!0,_=i}finally{try{!d&&a.return!=null&&a.return()}finally{if(l)throw _}}return v}}function p(n){if(Array.isArray(n))return n}function m(n,o){try{return n.addEventListener("change",o),function(){return n.removeEventListener("change",o)}}catch(a){return n.addListener(o),function(){return n.removeListener(o)}}}function r(n){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(n).matches:!1}var t=function(o){var a=Object(O.useState)(r(o)),v=S(a,2),d=v[0],l=v[1],c=Object(O.useRef)();return Object(O.useEffect)(function(){if("matchMedia"in window)return c.current=window.matchMedia(o),l(c.current.matches),m(c.current,function(_){return l(_.matches)})},[o]),d}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),P=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),ne=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),M=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),x=function(n,o){typeof n=="function"?n(o):typeof n=="object"&&n!==null&&"current"in n&&(n.current=o)},T=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return Object(R.useCallback)(function(v){o.forEach(function(d){return x(d,v)})},o)},D=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return function(v){o.forEach(function(d){return x(d,v)})}},C=e("./node_modules/react/jsx-runtime.js");function O(t,n){return s(t)||f(t,n)||S(t,n)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t,n){if(!!t){if(typeof t=="string")return h(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return h(t,n)}}function h(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function f(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,d=!1,l,c;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(_){d=!0,c=_}finally{try{!v&&o.return!=null&&o.return()}finally{if(d)throw c}}return a}}function s(t){if(Array.isArray(t))return t}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},u=`import React, { useEffect } from "react";

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
`,p={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},m=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},r=function(){var n=Object(ne.a)(),o=O(n,2),a=o[0],v=o[1],d=Object($.a)(function(){return alert("click away")}),l=T(v,d),c=Object(P.a)();return Object(R.useEffect)(function(){c()},[]),Object(C.jsx)("div",{children:Object(C.jsx)("div",{ref:l,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return h});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js");function $(f,s){return x(f)||M(f,s)||ne(f,s)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(f,s){if(!!f){if(typeof f=="string")return Z(f,s);var u=Object.prototype.toString.call(f).slice(8,-1);if(u==="Object"&&f.constructor&&(u=f.constructor.name),u==="Map"||u==="Set")return Array.from(f);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Z(f,s)}}function Z(f,s){(s==null||s>f.length)&&(s=f.length);for(var u=0,p=new Array(s);u<s;u++)p[u]=f[u];return p}function M(f,s){var u=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(u!=null){var p=[],m=!0,r=!1,t,n;try{for(u=u.call(f);!(m=(t=u.next()).done)&&(p.push(t.value),!(s&&p.length===s));m=!0);}catch(o){r=!0,n=o}finally{try{!m&&u.return!=null&&u.return()}finally{if(r)throw n}}return p}}function x(f){if(Array.isArray(f))return f}var T={angle:0,type:"landscape-primary"},D=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T,u=Object(K.useState)(s),p=$(u,2),m=p[0],r=p[1];return Object(K.useEffect)(function(){var t=window.screen,n=!0,o=function(){if(n){var v=t,d=v.orientation;if(d){var l=d.angle,c=d.type;r({angle:l,type:c})}else window.orientation!==void 0?r({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):r(s)}};return window.addEventListener("orientationchange",o),o(),function(){n=!1,window.addEventListener("orientationchange",o)}},[]),m},C=e("./node_modules/react/jsx-runtime.js"),O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},O=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,E={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},S=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},h=function(){var s=D();return Object(C.jsx)("div",{children:JSON.stringify(s)})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),q=function(){var X=window.navigator,R=X.userAgent,$=X.platform,P=["Macintosh","MacIntel","MacPPC","Mac68K"],ne=["Win32","Win64","Windows","WinCE"],Z=["iPhone","iPad","iPod"],M="unknown";return P.indexOf($)!==-1?M="macos":Z.indexOf($)!==-1?M="ios":ne.indexOf($)!==-1?M="windows":/Android/.test(R)?M="android":!M&&/Linux/.test($)&&(M="linux"),M},Q=function(){return typeof window!="undefined"?q():"unknown"},z=e("./node_modules/react/jsx-runtime.js"),V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,J={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},V=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,J={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},H=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},U=function(){var X=Q();return Object(z.jsx)("div",{children:X})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return S});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=function(f){Object(R.useEffect)(function(){if(!!f){var s=function(p){p=p||window.event;var m=p.relatedTarget||p.toElement;(!m||m.nodeName==="HTML")&&f()};return document.addEventListener("mouseout",s),function(){document.removeEventListener("mouseout",s)}}},[])},P=e("./node_modules/react/jsx-runtime.js");function ne(h,f){return D(h)||T(h,f)||M(h,f)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(h,f){if(!!h){if(typeof h=="string")return x(h,f);var s=Object.prototype.toString.call(h).slice(8,-1);if(s==="Object"&&h.constructor&&(s=h.constructor.name),s==="Map"||s==="Set")return Array.from(h);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return x(h,f)}}function x(h,f){(f==null||f>h.length)&&(f=h.length);for(var s=0,u=new Array(f);s<f;s++)u[s]=h[s];return u}function T(h,f){var s=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(s!=null){var u=[],p=!0,m=!1,r,t;try{for(s=s.call(h);!(p=(r=s.next()).done)&&(u.push(r.value),!(f&&u.length===f));p=!0);}catch(n){m=!0,t=n}finally{try{!p&&s.return!=null&&s.return()}finally{if(m)throw t}}return u}}function D(h){if(Array.isArray(h))return h}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},C=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},E=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},S=function(){var f=Object(R.useState)(0),s=ne(f,2),u=s[0],p=s[1];return $(function(){return p(function(m){return m+1})}),Object(P.jsxs)("div",{children:["Page leave count: ",u]})};S.displayName="Default",S.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},S.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.array.concat.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.from.js");function P(m){return M(m)||Z(m)||D(m)||ne()}function ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function M(m){if(Array.isArray(m))return C(m)}function x(m,r){return E(m)||O(m,r)||D(m,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(m,r){if(!!m){if(typeof m=="string")return C(m,r);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(m,r)}}function C(m,r){(r==null||r>m.length)&&(r=m.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=m[t];return n}function O(m,r){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,d;try{for(t=t.call(m);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,d=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw d}}return n}}function E(m){if(Array.isArray(m))return m}var S=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=Object(K.useState)({state:t.slice(0,r),queue:t.slice(r)}),o=x(n,2),a=o[0],v=a.state,d=a.queue,l=o[1],c=function(){for(var k=arguments.length,j=new Array(k),A=0;A<k;A++)j[A]=arguments[A];return l(function(g){var B=[].concat(P(g.state),P(g.queue),j);return{state:B.slice(0,r),queue:B.slice(r)}})},_=function(k){return l(function(j){var A=k([].concat(P(j.state),P(j.queue)));return{state:A.slice(0,r),queue:A.slice(r)}})},i=function(){return l(function(k){return{state:k.state,queue:[]}})};return{state:v,queue:d,add:c,update:_,cleanQueue:i}},h=e("./node_modules/react/jsx-runtime.js"),f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},f=`import React, { useState } from "react";

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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},u=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},p=function(){var r=S(10,[1,2,3]),t=r.state,n=r.queue,o=r.add,a=r.update,v=r.cleanQueue;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["state: ",t]}),Object(h.jsxs)("div",{children:["queue: ",n]}),Object(h.jsx)("button",{onClick:function(){return o(5)},children:"add 5"}),Object(h.jsx)("button",{onClick:function(){return a(function(l){return l})},children:"update"}),Object(h.jsx)("button",{onClick:v,children:"clear"})]})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
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
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),O=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(O),S=e("./node_modules/react/index.js"),h=e.n(S),f=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),s=e("./node_modules/react/jsx-runtime.js"),u=e.n(s);function p(l,c){return o(l)||n(l,c)||r(l,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,c){if(!!l){if(typeof l=="string")return t(l,c);var _=Object.prototype.toString.call(l).slice(8,-1);if(_==="Object"&&l.constructor&&(_=l.constructor.name),_==="Map"||_==="Set")return Array.from(l);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(l,c)}}function t(l,c){(c==null||c>l.length)&&(c=l.length);for(var _=0,i=new Array(c);_<c;_++)i[_]=l[_];return i}function n(l,c){var _=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(_!=null){var i=[],y=!0,k=!1,j,A;try{for(_=_.call(l);!(y=(j=_.next()).done)&&(i.push(j.value),!(c&&i.length===c));y=!0);}catch(g){k=!0,A=g}finally{try{!y&&_.return!=null&&_.return()}finally{if(k)throw A}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},a=`import React, { useEffect } from "react";

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
`,v={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var d=function(){var c=Object(f.a)({width:0,height:0}),_=p(c,2),i=_[0],y=_[1];return Object(S.useEffect)(function(){var k=function(){y({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(s.jsx)("pre",{children:JSON.stringify(i,null,2)})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return m});var w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),O=e("./node_modules/react/index.js"),E=e.n(O);function S(r,t){return p(r)||u(r,t)||f(r,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(r,t){if(!!r){if(typeof r=="string")return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}}function s(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function u(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function p(r){if(Array.isArray(r))return r}var m=function(t){var n=Object(O.useRef)(0),o=Object(O.useState)(t),a=S(o,2),v=a[0],d=a[1],l=Object(O.useCallback)(function(c){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){d(c)})},[]);return[v,l]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),P=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ne(a,v){return D(a)||T(a,v)||M(a,v)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(a,v){if(!!a){if(typeof a=="string")return x(a,v);var d=Object.prototype.toString.call(a).slice(8,-1);if(d==="Object"&&a.constructor&&(d=a.constructor.name),d==="Map"||d==="Set")return Array.from(a);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return x(a,v)}}function x(a,v){(v==null||v>a.length)&&(v=a.length);for(var d=0,l=new Array(v);d<v;d++)l[d]=a[d];return l}function T(a,v){var d=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(d!=null){var l=[],c=!0,_=!1,i,y;try{for(d=d.call(a);!(c=(i=d.next()).done)&&(l.push(i.value),!(v&&l.length===v));c=!0);}catch(k){_=!0,y=k}finally{try{!c&&d.return!=null&&d.return()}finally{if(_)throw y}}return l}}function D(a){if(Array.isArray(a))return a}var C={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},O=typeof window!="undefined",E=function(){var v=Object(R.useRef)(null),d=Object(P.a)(C),l=ne(d,2),c=l[0],_=l[1],i=Object(R.useMemo)(function(){return O?new ResizeObserver(function(y){var k=y[0];k&&_(k.contentRect)}):null},[]);return Object(R.useEffect)(function(){return v.current&&i.observe(v.current),function(){i.disconnect()}},[v.current]),[v,c]},S=e("./node_modules/react/jsx-runtime.js");function h(a,v){return m(a)||p(a,v)||s(a,v)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(a,v){if(!!a){if(typeof a=="string")return u(a,v);var d=Object.prototype.toString.call(a).slice(8,-1);if(d==="Object"&&a.constructor&&(d=a.constructor.name),d==="Map"||d==="Set")return Array.from(a);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return u(a,v)}}function u(a,v){(v==null||v>a.length)&&(v=a.length);for(var d=0,l=new Array(v);d<v;d++)l[d]=a[d];return l}function p(a,v){var d=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(d!=null){var l=[],c=!0,_=!1,i,y;try{for(d=d.call(a);!(c=(i=d.next()).done)&&(l.push(i.value),!(v&&l.length===v));c=!0);}catch(k){_=!0,y=k}finally{try{!c&&d.return!=null&&d.return()}finally{if(_)throw y}}return l}}function m(a){if(Array.isArray(a))return a}var r=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,t={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},r=`import React, { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},o=function(){var v=E(),d=h(v,2),l=d[0],c=d[1],_=Object($.a)();return Object(R.useEffect)(function(){_()},[]),Object(S.jsxs)("div",{children:[Object(S.jsx)("textarea",{ref:l,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(S.jsx)("div",{children:JSON.stringify(c)})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return v});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.parse-int.js");function P(){var d=document.createElement("style");return d.type="text/css",d.setAttribute("tm-scroll-lock",""),d}function ne(d){var l=document.head||document.getElementsByTagName("head")[0];l.appendChild(d)}function Z(d,l){d.styleSheet?d.styleSheet.cssText=l:d.appendChild(document.createTextNode(l))}function M(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var d=parseInt(window.getComputedStyle(document.body).paddingRight,10),l=window.innerWidth-document.documentElement.clientWidth;return d+l}var x=function(l){var c=l.disableBodyPadding,_=c?null:M(),i=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return i};function T(d,l){return S(d)||E(d,l)||C(d,l)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(d,l){if(!!d){if(typeof d=="string")return O(d,l);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return O(d,l)}}function O(d,l){(l==null||l>d.length)&&(l=d.length);for(var c=0,_=new Array(l);c<l;c++)_[c]=d[c];return _}function E(d,l){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var _=[],i=!0,y=!1,k,j;try{for(c=c.call(d);!(i=(k=c.next()).done)&&(_.push(k.value),!(l&&_.length===l));i=!0);}catch(A){y=!0,j=A}finally{try{!i&&c.return!=null&&c.return()}finally{if(y)throw j}}return _}}function S(d){if(Array.isArray(d))return d}var h=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(R.useState)(l||!1),i=T(_,2),y=i[0],k=i[1],j=Object(R.useRef)(0),A=c.disableBodyPadding,g=Object(R.useRef)(null),B=function(){j.current=window.scrollY;var G=x({disableBodyPadding:A}),F=P();Z(F,G),ne(F),g.current=F},L=function(){!(g!=null&&g.current)||(g.current.parentNode.removeChild(g.current),g.current=null)};return Object(R.useEffect)(function(){return y?B():L(),L},[y]),Object(R.useEffect)(function(){l!==void 0&&k(l)},[l]),Object(R.useEffect)(function(){l===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&k(!0)},[k]),[y,k]},f=e("./node_modules/react/jsx-runtime.js");function s(d,l){return t(d)||r(d,l)||p(d,l)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(d,l){if(!!d){if(typeof d=="string")return m(d,l);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return m(d,l)}}function m(d,l){(l==null||l>d.length)&&(l=d.length);for(var c=0,_=new Array(l);c<l;c++)_[c]=d[c];return _}function r(d,l){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var _=[],i=!0,y=!1,k,j;try{for(c=c.call(d);!(i=(k=c.next()).done)&&(_.push(k.value),!(l&&_.length===l));i=!0);}catch(A){y=!0,j=A}finally{try{!i&&c.return!=null&&c.return()}finally{if(y)throw j}}return _}}function t(d){if(Array.isArray(d))return d}var n=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,o={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},n=`import React, { useState } from "react";

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
`,o={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},v=function(){var l=Object(R.useState)(!1),c=s(l,2),_=c[0],i=c[1],y=h(_);return Object(f.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(f.jsx)("button",{onClick:function(){return i(function(j){return!j})},children:_?"Unlock":"Lock"}),y?"Scroll locked":"Scrollable"]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
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
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return h});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function P(f,s){return T(f)||x(f,s)||Z(f,s)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(f,s){if(!!f){if(typeof f=="string")return M(f,s);var u=Object.prototype.toString.call(f).slice(8,-1);if(u==="Object"&&f.constructor&&(u=f.constructor.name),u==="Map"||u==="Set")return Array.from(f);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return M(f,s)}}function M(f,s){(s==null||s>f.length)&&(s=f.length);for(var u=0,p=new Array(s);u<s;u++)p[u]=f[u];return p}function x(f,s){var u=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(u!=null){var p=[],m=!0,r=!1,t,n;try{for(u=u.call(f);!(m=(t=u.next()).done)&&(p.push(t.value),!(s&&p.length===s));m=!0);}catch(o){r=!0,n=o}finally{try{!m&&u.return!=null&&u.return()}finally{if(r)throw n}}return p}}function T(f){if(Array.isArray(f))return f}var D=function(s,u){var p=Object($.a)(s,u),m=P(p,2),r=m[0],t=m[1];return Object(K.useEffect)(function(){return r(),t},[r,t]),t},C=e("./node_modules/react/jsx-runtime.js"),O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},O=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},S=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},h=function(){var s=D(function(){alert("fire!")},2e3);return Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:s,children:"Clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),O=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(O),S=e("./node_modules/react/index.js"),h=e.n(S),f=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),s=e("./node_modules/react/jsx-runtime.js"),u=e.n(s);function p(l,c){return o(l)||n(l,c)||r(l,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,c){if(!!l){if(typeof l=="string")return t(l,c);var _=Object.prototype.toString.call(l).slice(8,-1);if(_==="Object"&&l.constructor&&(_=l.constructor.name),_==="Map"||_==="Set")return Array.from(l);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(l,c)}}function t(l,c){(c==null||c>l.length)&&(c=l.length);for(var _=0,i=new Array(c);_<c;_++)i[_]=l[_];return i}function n(l,c){var _=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(_!=null){var i=[],y=!0,k=!1,j,A;try{for(_=_.call(l);!(y=(j=_.next()).done)&&(i.push(j.value),!(c&&i.length===c));y=!0);}catch(g){k=!0,A=g}finally{try{!y&&_.return!=null&&_.return()}finally{if(k)throw A}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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
`,v={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var d=function(){var c=Object(f.a)(function(){alert("fire!")},2e3),_=p(c,2),i=_[0],y=_[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:i,children:"Run"}),Object(s.jsx)("button",{onClick:y,children:"Clear"})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return z});var w=e("./node_modules/core-js/modules/web.timers.js"),K=e.n(w),W=e("./node_modules/react/index.js"),q=e.n(W),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),z=function(J,H){var U=Object(W.useRef)(),N=Object(Q.a)(J),X=Object(W.useCallback)(function(){U.current&&clearTimeout(U.current),U.current=setTimeout(function(){N()},H)},[H]),R=Object(W.useCallback)(function(){U.current&&clearTimeout(U.current)},[]);return Object(W.useEffect)(function(){return R},[R]),[X,R]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js");function $(r,t){return x(r)||M(r,t)||ne(r,t)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(r,t){if(!!r){if(typeof r=="string")return Z(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(r,t)}}function Z(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function M(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function x(r){if(Array.isArray(r))return r}var T=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=Object(R.useState)(t),o=$(n,2),a=o[0],v=o[1],d=Object(R.useCallback)(function(l){return v(function(c){return typeof l=="boolean"?l:!c})},[]);return[a,d]},D=e("./node_modules/react/jsx-runtime.js");function C(r,t){return f(r)||h(r,t)||E(r,t)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(r,t){if(!!r){if(typeof r=="string")return S(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(r,t)}}function S(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function h(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,d,l;try{for(n=n.call(r);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(c){v=!0,l=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function f(r){if(Array.isArray(r))return r}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},s=`import React from "react";
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
`,u={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},p=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},m=function(){var t=T(),n=C(t,2),o=n[0],a=n[1];return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:["current state: ",""+o]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(D.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(D.jsx)("button",{onClick:a,children:"toggle"})]})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return t});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function P(n,o){return T(n)||x(n,o)||Z(n,o)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(n,o){if(!!n){if(typeof n=="string")return M(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(n,o)}}function M(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function x(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],d=!0,l=!1,c,_;try{for(a=a.call(n);!(d=(c=a.next()).done)&&(v.push(c.value),!(o&&v.length===o));d=!0);}catch(i){l=!0,_=i}finally{try{!d&&a.return!=null&&a.return()}finally{if(l)throw _}}return v}}function T(n){if(Array.isArray(n))return n}var D=function(o){var a=o.value,v=o.defaultValue,d=o.finalValue,l=o.rule,c=o.onChange,_=o.onValueUpdate,i=l(a),y=Object(R.useRef)("initial"),k=l(v)?v:d,j=Object(R.useState)(k),A=P(j,2),g=A[0],B=A[1],L=i?a:g;!i&&y.current==="controlled"&&(L=d),y.current=i?"controlled":"uncontrolled";var I=y.current,G=function(oe){typeof c=="function"&&c(oe),I==="uncontrolled"&&B(oe)};return Object(R.useEffect)(function(){I==="uncontrolled"&&B(L),typeof _=="function"&&_(L)},[I,L]),[L,G,y.current]},C=e("./node_modules/react/jsx-runtime.js");function O(n,o){return s(n)||f(n,o)||S(n,o)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,o){if(!!n){if(typeof n=="string")return h(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(n,o)}}function h(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function f(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],d=!0,l=!1,c,_;try{for(a=a.call(n);!(d=(c=a.next()).done)&&(v.push(c.value),!(o&&v.length===o));d=!0);}catch(i){l=!0,_=i}finally{try{!d&&a.return!=null&&a.return()}finally{if(l)throw _}}return v}}function s(n){if(Array.isArray(n))return n}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},u=`import React, { useState } from "react";

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
`,p={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},m=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},r=function(o){var a=o.label,v=o.value,d=o.defaultValue,l=o.onChange,c=Object($.a)(),_=D({value:v,defaultValue:d,finalValue:null,onChange:l,rule:function(A){return typeof A=="string"}}),i=O(_,2),y=i[0],k=i[1];return Object(C.jsxs)("div",{style:{padding:"1rem"},children:[Object(C.jsx)("label",{htmlFor:c,children:a}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{id:c,type:"text",value:y,onChange:function(A){return k(A.target.value)}})]})};r.displayName="CustomInput";var t=function(){var o=Object(R.useState)("controlled"),a=O(o,2),v=a[0],d=a[1];return Object(C.jsxs)("div",{style:{padding:20},children:[Object(C.jsx)(r,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(C.jsx)(r,{label:"Controlled",value:v,onChange:d}),Object(C.jsx)(r,{label:"Controlled (fixed value)",value:"fixed",onChange:d})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(w),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(W),Q=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(Q),V=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(V),H=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(N),R=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(R),P=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(P),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(Z),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(x),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),O=e("./node_modules/core-js/modules/es.array.from.js"),E=e.n(O),S=e("./node_modules/react/index.js"),h=e.n(S),f=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),s=e("./node_modules/react/jsx-runtime.js"),u=e.n(s);function p(l,c){return o(l)||n(l,c)||r(l,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,c){if(!!l){if(typeof l=="string")return t(l,c);var _=Object.prototype.toString.call(l).slice(8,-1);if(_==="Object"&&l.constructor&&(_=l.constructor.name),_==="Map"||_==="Set")return Array.from(l);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(l,c)}}function t(l,c){(c==null||c>l.length)&&(c=l.length);for(var _=0,i=new Array(c);_<c;_++)i[_]=l[_];return i}function n(l,c){var _=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(_!=null){var i=[],y=!0,k=!1,j,A;try{for(_=_.call(l);!(y=(j=_.next()).done)&&(i.push(j.value),!(c&&i.length===c));y=!0);}catch(g){k=!0,A=g}finally{try{!y&&_.return!=null&&_.return()}finally{if(k)throw A}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},a=`import React, { useEffect, useState } from "react";

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
`,v={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var d=function(){var c=Object(S.useState)(""),_=p(c,2),i=_[0],y=_[1];return Object(S.useEffect)(function(){console.log("useEffect:",i)},[i]),Object(f.a)(function(){console.log("useUpdateEffect:",i)},[i]),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",onChange:function(j){return y(j.target.value)}})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return W});var w=e("./node_modules/react/index.js"),K=e.n(w),W=function(Q,z){var V=Object(w.useRef)(!0);Object(w.useEffect)(function(){if(!V.current)return Q();V.current=!1},z)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,b,e){"use strict";e.d(b,"c",function(){return R}),e.d(b,"d",function(){return $}),e.d(b,"b",function(){return P}),e.d(b,"a",function(){return Z});var w=e("./node_modules/react/index.js"),K=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),q=e("./node_modules/react/jsx-runtime.js"),Q=function(x){var T=x.styles,D=R();return Object(q.jsx)(W.a,{styles:Object(W.b)(T(D))})};Q.displayName="Global";var z={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},V=function(){return Object(q.jsx)(W.a,{styles:z})};V.displayName="NormalizeCSS";var J=e("./node_modules/core-js/modules/es.array.reduce.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/core-js/modules/es.object.assign.js");function N(M,x){return x?Object.keys(M).reduce(function(T,D){if(D==="headings"&&x.headings){var C=x.headings?Object.keys(M.headings).reduce(function(O,E){return O[E]=Object.assign({},M.headings[E],x.headings[E]),O},{}):M.headings;return Object.assign({},T,{headings:Object.assign({},M.headings,x.headings,C)})}return T[D]=typeof x[D]=="object"?Object.assign({},M[D],x[D]):x[D]||M[D],T},{}):M}var X=Object(w.createContext)({theme:K.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function R(){var M;return((M=Object(w.useContext)(X))===null||M===void 0?void 0:M.theme)||K.a}function $(){var M;return((M=Object(w.useContext)(X))===null||M===void 0?void 0:M.styles)||{}}function P(){var M;return((M=Object(w.useContext)(X))===null||M===void 0?void 0:M.emotionOptions)||{key:"co",prepend:!0}}var ne=function(){return Object(q.jsx)(Q,{styles:function(T){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:T.fontFamily,backgroundColor:T.colorScheme==="dark"?T.colors.black:T.colors.white,color:T.colorScheme==="dark"?T.colors.white:T.colors.black,lineHeight:T.lineHeight,fontSizes:T.fontSizes.b3}}}})};ne.displayName="GlobalStyles";var Z=function(x){var T=x.theme,D=x.styles,C=D===void 0?{}:D,O=x.emotionOptions,E=x.withNormalizeCSS,S=E===void 0?!1:E,h=x.withGlobalStyles,f=h===void 0?!1:h,s=x.children;return Object(q.jsxs)(X.Provider,{value:{theme:N(K.a,T),styles:C,emotionOptions:O},children:[S&&Object(q.jsx)(V,{}),f&&Object(q.jsx)(ne,{}),s]})};Z.displayName="TmProvider",Z.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,b,e){"use strict";e.d(b,"b",function(){return xe}),e.d(b,"a",function(){return De});var w=e("./node_modules/core-js/modules/es.object.keys.js"),K={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[K.navy1,K.navy1,K.navy2],secondary:[K.green2,K.green2,K.green1],tertiary:[K.white,K.white,K.gray6],red:[K.red2,K.red2,K.red1]},q={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Q={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},z={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},V={small:2,medium:4,large:8,round:100,circular:"50%"},J={xsmall:4,small:8,medium:16,large:24},H={xsmall:576,small:768,medium:1024,large:1408},U={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},N={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},X={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},R={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},$={mobile:"@media (max-width: "+R.mobile+"px)",tablet:"@media (max-width: "+R.tablet+"px)",desktop:"@media (max-width: "+R.desktop+"px)",largeDesktop:"@media (max-width: "+R.maxSize+"px)"},P=e("./node_modules/core-js/modules/es.object.assign.js"),ne=function(ee){for(var se="",ue=1;ue<ee.length-1;ue+=1)se+=ee[ue]+" "+ue/(ee.length-1)*100+"%, ";return ee[0]+" 0%, "+se+ee[ee.length-1]+" 100%"},Z=function(ee){for(var se=arguments.length,ue=new Array(se>1?se-1:0),be=1;be<se;be++)ue[be-1]=arguments[be];return"linear-gradient("+ee+"deg, "+ne(ue)+")"},M=function(){for(var ee=arguments.length,se=new Array(ee),ue=0;ue<ee;ue++)se[ue]=arguments[ue];return"radial-gradient(circle, "+ne(se)+")"},x=function(ee){return typeof ee.size=="number"?ee.size:ee.sizes[ee.size]||ee.size||ee.sizes.medium},T=function(ee){return function(se){return"@media (min-width: "+(x({size:se,sizes:ee.breakpoints})+1)+"px)"}},D=function(ee){return function(se){return"@media (max-width: "+x({size:se,sizes:ee.breakpoints})+"px)"}},C=e("./node_modules/core-js/modules/es.string.replace.js"),O=e("./node_modules/core-js/modules/es.regexp.exec.js"),E=e("./node_modules/core-js/modules/es.number.is-nan.js"),S=e("./node_modules/core-js/modules/es.number.constructor.js"),h=e("./node_modules/core-js/modules/es.parse-int.js"),f=e("./node_modules/core-js/modules/es.array.map.js"),s=e("./node_modules/core-js/modules/es.string.split.js"),u=e("./node_modules/core-js/modules/es.string.starts-with.js"),p=e("./node_modules/core-js/modules/es.array.is-array.js"),m=e("./node_modules/core-js/modules/es.symbol.js"),r=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),o=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),d=e("./node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function _(le,ee){return A(le)||j(le,ee)||y(le,ee)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(le,ee){if(!!le){if(typeof le=="string")return k(le,ee);var se=Object.prototype.toString.call(le).slice(8,-1);if(se==="Object"&&le.constructor&&(se=le.constructor.name),se==="Map"||se==="Set")return Array.from(le);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return k(le,ee)}}function k(le,ee){(ee==null||ee>le.length)&&(ee=le.length);for(var se=0,ue=new Array(ee);se<ee;se++)ue[se]=le[se];return ue}function j(le,ee){var se=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(se!=null){var ue=[],be=!0,Te=!1,ke,Ie;try{for(se=se.call(le);!(be=(ke=se.next()).done)&&(ue.push(ke.value),!(ee&&ue.length===ee));be=!0);}catch(Ce){Te=!0,Ie=Ce}finally{try{!be&&se.return!=null&&se.return()}finally{if(Te)throw Ie}}return ue}}function A(le){if(Array.isArray(le))return le}var g=function(ee){var se=ee.replace("#","");return typeof se=="string"&&se.length===6&&!Number.isNaN(Number("0x"+se))},B=function(ee){var se=ee.replace("#",""),ue=parseInt(se,16),be=ue>>16&255,Te=ue>>8&255,ke=ue&255;return{r:be,g:Te,b:ke,a:1}},L=function(ee){var se=ee.replace(/[^0-9,.]/g,"").split(",").map(Number),ue=_(se,4),be=ue[0],Te=ue[1],ke=ue[2],Ie=ue[3];return{r:be,g:Te,b:ke,a:Ie||1}},I=function(ee){return g(ee)?B(ee):ee.startsWith("rgb")?L(ee):{r:0,g:0,b:0,a:1}},G=function(ee,se){if(typeof ee!="string"||se>1||se<0)return"rgba(0, 0, 0, 1)";var ue=I(ee),be=ue.r,Te=ue.g,ke=ue.b;return"rgba("+be+", "+Te+", "+ke+", "+se+")"},F=function(ee,se){var ue=I(ee),be=ue.r,Te=ue.g,ke=ue.b,Ie=ue.a,Ce=1-se,Ae=function(Pe){return Math.round(Pe*Ce)};return"rgba("+Ae(be)+", "+Ae(Te)+", "+Ae(ke)+", "+Ie+")"},oe=function(ee,se){var ue=I(ee),be=ue.r,Te=ue.g,ke=ue.b,Ie=ue.a,Ce=function(Re){return Math.round(Re+(255-Re)*se)};return"rgba("+Ce(be)+", "+Ce(Te)+", "+Ce(ke)+", "+Ie+")"},ie=function(ee){return ee*8},ve={linearGradient:Z,radialGradient:M,smallerThan:D,largerThan:T,rgba:G,size:x,darken:F,lighten:oe,spacing:ie},ce=function(ee){return Object.assign({},ee,{fn:{largerThan:ve.largerThan(ee),smallerThan:ve.smallerThan(ee),radialGradient:ve.radialGradient,linearGradient:ve.linearGradient,rgba:ve.rgba,size:ve.size,lighten:ve.lighten,darken:ve.darken,spacing:ve.spacing}})},ae=Object.keys(W),_e=Object.keys(K),pe=["xsmall","small","medium","large"],je=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],xe=function(ee){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ee.fontFamily||"sans-serif"}},he={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:K.black,colors:K,palettes:W,shadows:q,fontSizes:Q,lineHeights:z,radius:V,spacing:J,breakpoints:H,headings:U,opacity:N,zIndex:X,extra:{},media:$},De=ce(he)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var w=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),U=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),ne=e("./node_modules/core-js/modules/es.array.from.js");function Z(s,u){return C(s)||D(s,u)||x(s,u)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(s,u){if(!!s){if(typeof s=="string")return T(s,u);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return T(s,u)}}function T(s,u){(u==null||u>s.length)&&(u=s.length);for(var p=0,m=new Array(u);p<u;p++)m[p]=s[p];return m}function D(s,u){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var m=[],r=!0,t=!1,n,o;try{for(p=p.call(s);!(r=(n=p.next()).done)&&(m.push(n.value),!(u&&m.length===u));r=!0);}catch(a){t=!0,o=a}finally{try{!r&&p.return!=null&&p.return()}finally{if(t)throw o}}return m}}function C(s){if(Array.isArray(s))return s}function O(s){var u={};return Object.keys(s).forEach(function(p){var m=Z(s[p],2),r=m[0],t=m[1];u[r]=t}),u}var E=e("./node_modules/core-js/modules/es.array.reduce.js");function S(s,u,p){return Object.keys(u).reduce(function(m,r){return m[r]=s(u[r],p?"tm-"+p+"-"+r:null),m},{})}var h=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function f(s){var u=typeof s=="function"?s:function(){return s};function p(m,r){var t=Object(q.c)(),n=Object(q.d)()[r==null?void 0:r.name],o=Object(h.a)(),a=o.css,v=o.cx,d=0;function l(j){return d+=1,"tm-ref_"+(j||"")+"_"+d}var c=u(t,m,l),_=typeof(r==null?void 0:r.overrideStyles)=="function"?r==null?void 0:r.overrideStyles(t):(r==null?void 0:r.overrideStyles)||{},i=typeof n=="function"?n(t):n||{},y=typeof(r==null?void 0:r.co)=="function"?r.co(t):r==null?void 0:r.co,k=O(Object.keys(c).map(function(j){var A=v(a(c[j]),a(i[j]),a(_[j]),a(y));return[j,A]}));return{classes:S(v,k,r==null?void 0:r.name),cx:v,theme:t}}return p}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return k});var w=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/clsx/dist/clsx.m.js"),$=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),P=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Z=e("./node_modules/core-js/modules/es.array.map.js"),M=e("./node_modules/react/index.js");function x(j){return O(j)||C(j)||D(j)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(j,A){if(!!j){if(typeof j=="string")return E(j,A);var g=Object.prototype.toString.call(j).slice(8,-1);if(g==="Object"&&j.constructor&&(g=j.constructor.name),g==="Map"||g==="Set")return Array.from(j);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return E(j,A)}}function C(j){if(typeof Symbol!="undefined"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}function O(j){if(Array.isArray(j))return E(j)}function E(j,A){(A==null||A>j.length)&&(A=j.length);for(var g=0,B=new Array(A);g<A;g++)B[g]=j[g];return B}function S(j,A){var g=Object(M.useRef)();return(!g.current||A.length!==g.current.prevDeps.length||g.current.prevDeps.map(function(B,L){return B===A[L]}).indexOf(!1)>=0)&&(g.current={v:j(),prevDeps:x(A)}),g.current.v}var h=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),s=e("./node_modules/react/jsx-runtime.js"),u=function(){var j;function A(g){return j===void 0&&(j=Object(h.a)(g||{key:"co",prepend:!0})),j}return{getCache:A}}(),p=u.getCache,m=Object(M.createContext)(void 0);function r(){var j=Object(f.b)();return Object(M.useContext)(m)||p(j)}function t(j){var A=j.children,g=j.value;return Object(s.jsx)(m.Provider,{value:g,children:A})}t.displayName="CacheProvider";function n(j,A){return l(j)||d(j,A)||a(j,A)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(j,A){if(!!j){if(typeof j=="string")return v(j,A);var g=Object.prototype.toString.call(j).slice(8,-1);if(g==="Object"&&j.constructor&&(g=j.constructor.name),g==="Map"||g==="Set")return Array.from(j);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return v(j,A)}}function v(j,A){(A==null||A>j.length)&&(A=j.length);for(var g=0,B=new Array(A);g<A;g++)B[g]=j[g];return B}function d(j,A){var g=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(g!=null){var B=[],L=!0,I=!1,G,F;try{for(g=g.call(j);!(L=(G=g.next()).done)&&(B.push(G.value),!(A&&B.length===A));L=!0);}catch(oe){I=!0,F=oe}finally{try{!L&&g.return!=null&&g.return()}finally{if(I)throw F}}return B}}function l(j){if(Array.isArray(j))return j}var c="ref";function _(j){var A;if(j.length!==1)return{args:j,ref:A};var g=n(j,1),B=g[0];if(!(B instanceof Object))return{args:j,ref:A};if(!(c in B))return{args:j,ref:A};A=B[c];var L=Object.assign({},B);return delete L[c],{args:[L],ref:A}}var i=function(){function j(g,B,L){var I=[],G=Object(P.a)(g,I,L);return I.length<2?L:G+B(I)}function A(g){var B=g.cache,L=function(){for(var F=arguments.length,oe=new Array(F),ie=0;ie<F;ie++)oe[ie]=arguments[ie];var ve=_(oe),ce=ve.ref,ae=ve.args,_e=Object($.a)(ae,B.registered);return Object(P.b)(B,_e,!1),B.key+"-"+_e.name+(ce===void 0?"":" "+ce)},I=function(){for(var F=arguments.length,oe=new Array(F),ie=0;ie<F;ie++)oe[ie]=arguments[ie];return j(B.registered,L,Object(R.a)(oe))};return{css:L,cx:I}}return{cssFactory:A}}(),y=i.cssFactory;function k(){var j=r();return S(function(){return y({cache:j})},[j])}},"./storybook-init-framework-entry.js":function(re,b,e){"use strict";e.r(b);var w=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,b){}},[[0,4,5]]]);
