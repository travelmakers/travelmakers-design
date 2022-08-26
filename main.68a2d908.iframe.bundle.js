(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,O,e){"use strict";e.r(O);var V={};e.r(V),e.d(V,"parameters",function(){return a}),e.d(V,"decorators",function(){return c});var w=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.array.filter.js"),z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),ee=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),$=e("./node_modules/core-js/modules/es.object.define-properties.js"),P=e("./node_modules/core-js/modules/es.object.define-property.js"),F=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e("./node_modules/core-js/modules/es.function.name.js"),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),T=e("./node_modules/react/jsx-runtime.js");function H(i,y){return h(i)||s(i,y)||b(i,y)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(i,y){if(!!i){if(typeof i=="string")return f(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return f(i,y)}}function f(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function s(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,S,U;try{for(k=k.call(i);!(g=(S=k.next()).done)&&(j.push(S.value),!(y&&j.length===y));g=!0);}catch(E){C=!0,U=E}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw U}}return j}}function h(i){if(Array.isArray(i))return i}var _=Object(M.createContext)(null),u=function(){var y=Object(M.useContext)(_);if(!y)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return y},r=function(y){var k=y.colorScheme,j=y.toggleColorScheme,g=y.children,C=Object(M.useState)("init"),S=H(C,2),U=S[0],E=S[1];return Object(M.useEffect)(function(){E("update")},[]),Object(T.jsx)(_.Provider,{value:{colorScheme:k,toggleColorScheme:j},children:g},U)};r.displayName="ColorSchemeProvider",r.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),n=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),o=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",docs:{theme:n.themes.light},darkMode:{current:"light"}};function v(i){var y=Object(o.useDarkMode)()?"dark":"light";return Object(T.jsx)(r,{colorScheme:y,toggleColorScheme:function(){},children:Object(T.jsx)(t.a,{theme:{colorScheme:y},withGlobalStyles:!0,withNormalizeCSS:!0,children:i.children})})}v.displayName="ThemeWrapper";var c=[function(i){return Object(T.jsx)(v,{children:i()})}];function l(i,y){var k=Object.keys(i);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);y&&(j=j.filter(function(g){return Object.getOwnPropertyDescriptor(i,g).enumerable})),k.push.apply(k,j)}return k}function d(i){for(var y=1;y<arguments.length;y++){var k=arguments[y]!=null?arguments[y]:{};y%2?l(Object(k),!0).forEach(function(j){m(i,j,k[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(k)):l(Object(k)).forEach(function(j){Object.defineProperty(i,j,Object.getOwnPropertyDescriptor(k,j))})}return i}function m(i,y,k){return y in i?Object.defineProperty(i,y,{value:k,enumerable:!0,configurable:!0,writable:!0}):i[y]=k,i}Object.keys(V).forEach(function(i){var y=V[i];switch(i){case"args":return Object(F.d)(y);case"argTypes":return Object(F.b)(y);case"decorators":return y.forEach(function(j){return Object(F.f)(j,!1)});case"loaders":return y.forEach(function(j){return Object(F.g)(j,!1)});case"parameters":return Object(F.h)(d({},y),!1);case"argTypesEnhancers":return y.forEach(function(j){return Object(F.c)(j)});case"argsEnhancers":return y.forEach(function(j){return Object(F.e)(j)});case"render":return Object(F.i)(y);case"globals":case"globalTypes":{var k={};return k[i]=y,Object(F.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(i+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,O,e){"use strict";(function(V){var w=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,w.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],V,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,O,e){var V={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function w(ne){var z=W(ne);return e(z)}function W(ne){if(!e.o(V,ne)){var z=new Error("Cannot find module '"+ne+"'");throw z.code="MODULE_NOT_FOUND",z}return V[ne]}w.keys=function(){return Object.keys(V)},w.resolve=W,oe.exports=w,w.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return h});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),ee=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),$=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),K=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),J=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),A={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"},xlarge:{height:L.a.xlarge,padding:"0 24px"}},X=function(u){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.caption,fontSize:u.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.b3,fontSize:u.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.b2,fontSize:u.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.h5,fontSize:u.fontSizes.h5},xlarge:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.h5,fontSize:u.fontSizes.h5}}},R=Object.keys(A).reduce(function(_,u){return _[u]=A[u].height,_},{}),I=function(u){return{display:u?"block":"inline-block",width:u?"100%":"auto"}},x=Object(F.a)(function(_,u,r){var t,n,o,a=u.color,v=u.size,c=u.fullWidth,l=u.radius,d=u.variant,m=r("loading"),i=r("inner"),y=r("spinner"),k=a||_.colors.navy1;return{loading:(t={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},t["."+i]={opacity:0},t["."+y]={display:"flex"},t),solid:(n={backgroundColor:_.palettes[k][_.colorScheme==="light",0],color:k==="white"?_.colors.navy1:_.colors.white,"&:not(:disabled):hover":{backgroundColor:_.palettes[k][_.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:_.palettes[k][_.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:l?_.radius.round:2,outline:"1px solid "+_.palettes[k][_.colorScheme==="light",0]}}},n["&:disabled:not(."+m+")"]={backgroundColor:_.colors.gray5,color:d==="solid"?_.colors.white:_.colors.black},n),ghost:(o={backgroundColor:_.colors.transparent,border:"1px solid "+_.palettes[k][_.colorScheme==="light",0],color:k==="white"?_.colors.white:_.palettes[k][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:l?_.radius.round:2,outline:"1px solid "+_.palettes[k][_.colorScheme==="light",0]}}},o["&:disabled:not(."+m+")"]={color:Object(J.a)(_.palettes[k][1],_.opacity.opacity3),border:"1px solid "+Object(J.a)(_.palettes[k][1],_.opacity.opacity3)},o),root:Object.assign({},A[v],I(c),Object(K.b)(_),X(_)[v],{borderRadius:l?_.radius.round:_.radius.small,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:i,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:y,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=["children","component","size","color","variant","radius","fullWidth","type","disabled","leftIcon","rightIcon","loading","spinnerProps","className","co","overrideStyles"];function T(_,u){if(_==null)return{};var r=H(_,u),t,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(_);for(n=0;n<o.length;n++)t=o[n],!(u.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,t)||(r[t]=_[t]))}return r}function H(_,u){if(_==null)return{};var r={},t=Object.keys(_),n,o;for(o=0;o<t.length;o++)n=t[o],!(u.indexOf(n)>=0)&&(r[n]=_[n]);return r}var D=Object(N.forwardRef)(function(_,u){var r,t=_.children,n=_.component,o=_.size,a=o===void 0?"medium":o,v=_.color,c=_.variant,l=c===void 0?"solid":c,d=_.radius,m=d===void 0?!1:d,i=_.fullWidth,y=i===void 0?!1:i,k=_.type,j=k===void 0?"button":k,g=_.disabled,C=g===void 0?!1:g,S=_.leftIcon,U=_.rightIcon,E=_.loading,G=E===void 0?!1:E,Q=_.spinnerProps,re=_.className,de=_.co,ge=_.overrideStyles,ue=T(_,M),se=Object(Z.c)(),me=v||se.colors.navy1,pe=x({color:v,size:a,fullWidth:y,radius:m,variant:l},{overrideStyles:ge,name:"Button"}),fe=pe.classes,le=pe.cx,q=Object(p.jsx)(ee.a,Object.assign({color:l==="solid"?se.colors.white:se.colors.black,size:L.a[a]/2},Q));return Object(p.jsxs)(B.a,Object.assign({component:n||"button",ref:u,type:j,disabled:C||G,className:le((r={},r[fe.loading]=G,r),fe.root,fe[l],re),co:de,onTouchStart:function(){}},ue,{children:[Object(p.jsxs)("div",{className:fe.inner,children:[S&&Object(p.jsx)("span",{className:le(fe.icon,fe.leftIcon),children:S}),Object(p.jsx)("span",{className:fe.label,children:t}),U&&Object(p.jsx)("span",{className:le(fe.icon,fe.rightIcon),children:U})]}),Object(p.jsx)("div",{className:fe.spinnerWrapper,children:q})]}))});D.displayName="@travelmakers-design/core/Button";var b=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"solid\\", \\"ghost\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"dark\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"dark\\", \\"green\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    spinnerProps: {\\n      defaultValue: \\"\\",\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4.\\",\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Button {...props}>Button</Button>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":147},"endLoc":{"col":1,"line":149},"startBody":{"col":23,"line":147},"endBody":{"col":1,"line":149}}};
    
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
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["solid", "ghost"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "dark",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["dark", "green", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    radius: {
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
    loading: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
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
    spinnerProps: {
      defaultValue: "",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4.",
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
  return <Button {...props}>Button</Button>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Button {...props}>Button</Button>;\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:155},endLoc:{col:1,line:157},startBody:{col:23,line:155},endBody:{col:1,line:157}}},b=`import {
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
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["solid", "ghost"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "dark",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["dark", "green", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    radius: {
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
    loading: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
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
    spinnerProps: {
      defaultValue: "",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4.",
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
  return <Button {...props}>Button</Button>;
};
`,f={Default:{startLoc:{col:23,line:147},endLoc:{col:1,line:149},startBody:{col:23,line:147},endBody:{col:1,line:149}}},s=O.default={title:"@travelmakers-design/core/Button",component:D,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large","xlarge"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"solid",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["solid","ghost"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"dark",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["dark","green","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},radius:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"button",description:"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["submit","button","reset"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},loading:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},spinnerProps:{defaultValue:"",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4."}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Button } from \\"../Button\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"medium\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"xsmall\\", \\"small\\", \\"medium\\", \\"large\\", \\"xlarge\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"solid\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"solid\\", \\"ghost\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"dark\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"dark\\", \\"green\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    radius: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"button\\",\\n      description: \\"button \uC694\uC18C\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"submit\\", \\"button\\", \\"reset\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    loading: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    spinnerProps: {\\n      defaultValue: \\"\\",\\n      description: \\"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4.\\",\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Button {...props}>Button</Button>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":147},"endLoc":{"col":1,"line":149},"startBody":{"col":23,"line":147},"endBody":{"col":1,"line":149}}};
    
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
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: ["solid", "ghost"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "dark",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["dark", "green", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    radius: {
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
    loading: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uB85C\uB529 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",
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
    spinnerProps: {
      defaultValue: "",
      description: "Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uB4E4\uC744 \uC624\uBC84\uB77C\uC774\uB4DC \uD569\uB2C8\uB2E4.",
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
  return <Button {...props}>Button</Button>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Button {...props}>Button</Button>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:155},endLoc:{col:1,line:157},startBody:{col:23,line:155},endBody:{col:1,line:157}}}},docs:{page:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w.g,{}),Object(p.jsx)(w.f,{}),Object(p.jsx)(w.b,{}),Object(p.jsx)(w.d,{}),Object(p.jsx)(w.a,{story:w.c}),Object(p.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}},h=function(u){return Object(p.jsx)(D,Object.assign({},u,{children:"Button"}))};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`(props) => {
  return <Button {...props}>Button</Button>;
}`}},h.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(oe,O,e){"use strict";e.d(O,"a",function(){return B});var V=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),N=e("./packages/travelmakers-design-core/src/constants/index.ts"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),$=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),K=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),L={xsmall:{width:N.a.xsmall,height:N.a.xsmall},small:{width:N.a.small,height:N.a.small},medium:{width:N.a.medium,height:N.a.medium},large:{width:N.a.large,height:N.a.large},xlarge:{width:N.a.xlarge,height:N.a.xlarge}},J={xsmall:8,small:8,medium:16,large:16,xlarge:24},A=Object(P.a)(function(p,M,T){var H,D,b,f,s,h=M.color,_=M.size,u=T("loading"),r=T("inner"),t=T("spinner"),n=h||p.colors.navy1;return{loading:(H={ref:u,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},H["."+r]={opacity:0},H["."+t]={display:"flex"},H),solid:(D={backgroundColor:p.palettes[n][p.colorScheme==="light"?5:3],color:p.colorScheme==="light"?p.colors.white:p.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:p.palettes[n][p.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:p.palettes[n][p.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3]}}},D["&:disabled:not(."+u+")"]={backgroundColor:p.palettes.gray[2],color:Object(K.a)(p.colors.black,p.opacity.opacity3)},D),ghost:(b={backgroundColor:p.colors.transparent,border:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3],color:p.palettes[n][p.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(K.a)(p.palettes[n][p.colorScheme==="light"?0:8],p.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(K.a)(p.palettes[n][p.colorScheme==="light"?1:7],p.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3]}}},b["&:disabled:not(."+u+")"]={color:Object(K.a)(p.palettes[n][1],p.opacity.opacity3),border:"1px solid "+Object(K.a)(p.palettes[n][1],p.opacity.opacity3)},b),"light-solid":(f={backgroundColor:Object(K.a)(p.colorScheme==="light"?p.colors.black:p.colors.white,p.opacity.opacity1),color:p.palettes[n][p.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(K.a)(p.palettes.dark[p.colorScheme==="light"?8:1],p.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(K.a)(p.palettes.dark[p.colorScheme==="light"?7:2],p.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3]}}},f["&:disabled:not(."+u+")"]={backgroundColor:Object(K.a)(p.palettes.dark[p.colorScheme==="light"?4:1],p.opacity.opacity1),color:Object(K.a)(p.palettes[n][p.colorScheme==="light"?7:3],p.opacity.opacity3)},f),text:(s={backgroundColor:"transparent",color:p.palettes[n][p.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(K.a)(p.palettes[n][p.colorScheme==="light"?8:1],p.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(K.a)(p.palettes[n][p.colorScheme==="light"?7:2],p.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+p.palettes[n][p.colorScheme==="light"?5:3]}}},s["&:disabled:not(."+u+")"]={color:Object(K.a)(p.palettes[n][p.colorScheme==="light"?7:3],p.opacity.opacity3)},s),root:Object.assign({},L[_],Object(F.b)(p),{borderRadius:p.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:r,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:L[_].width-J[_],height:L[_].height-J[_]}},spinnerWrapper:{ref:t,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),X=e("./node_modules/react/jsx-runtime.js"),R=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function I(p,M){if(p==null)return{};var T=x(p,M),H,D;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(p);for(D=0;D<b.length;D++)H=b[D],!(M.indexOf(H)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,H)||(T[H]=p[H]))}return T}function x(p,M){if(p==null)return{};var T={},H=Object.keys(p),D,b;for(b=0;b<H.length;b++)D=H[b],!(M.indexOf(D)>=0)&&(T[D]=p[D]);return T}var B=Object(z.forwardRef)(function(p,M){var T,H=p.children,D=p.component,b=p.size,f=b===void 0?"medium":b,s=p.color,h=p.variant,_=h===void 0?"solid":h,u=p.type,r=u===void 0?"button":u,t=p.disabled,n=t===void 0?!1:t,o=p.loading,a=o===void 0?!1:o,v=p.spinnerProps,c=p.className,l=p.co,d=p.overrideStyles,m=I(p,R),i=A({color:s,size:f},{overrideStyles:d,name:"Button"}),y=i.theme,k=i.classes,j=i.cx,g=s||y.colors.navy1,C=Object(X.jsx)(Z.a,Object.assign({color:_==="solid"?y.colors.white:y.palettes[g][6],size:N.a[f]/2},v));return Object(X.jsxs)(ee.a,Object.assign({component:D||"button",className:j((T={},T[k.loading]=a,T),k.root,k[_],c),type:r,disabled:n||a,ref:M,onTouchStart:function(){},co:l},m,{children:[Object(X.jsx)("div",{className:k.inner,children:H}),Object(X.jsx)("div",{className:k.spinnerWrapper,children:C})]}))});B.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return X});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Z=e("./node_modules/react/index.js"),N=e("./node_modules/react/jsx-runtime.js"),ee=function(I){return Object(N.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(N.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};ee.displayName="CloseIcon",ee.displayName="@travelmakers-design/core/CloseIcon";var $=["size","color"];function P(R,I){if(R==null)return{};var x=F(R,I),B,p;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(R);for(p=0;p<M.length;p++)B=M[p],!(I.indexOf(B)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,B)||(x[B]=R[B]))}return x}function F(R,I){if(R==null)return{};var x={},B=Object.keys(R),p,M;for(M=0;M<B.length;M++)p=B[M],!(I.indexOf(p)>=0)&&(x[p]=R[p]);return x}var K=Object(Z.forwardRef)(function(R,I){var x=R.size,B=x===void 0?"medium":x,p=R.color,M=p===void 0?"gray":p,T=P(R,$);return Object(N.jsx)(z.a,Object.assign({size:B,color:M,ref:I},T,{children:Object(N.jsx)(ee,{})}))});K.displayName="@travelmakers-design/core/CloseButton";var L=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,J={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}},L=`import { CloseButton } from "../CloseButton";
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
`,J={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},A=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}}},title:"@travelmakers-design/core/CloseButton",component:K,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},X=function(I){return Object(N.jsx)(K,Object.assign({},I))};X.displayName="Default",X.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},X.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),ne=e("./node_modules/react/index.js"),z=e.n(ne),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:53},startBody:{col:23,line:42},endBody:{col:1,line:53}}},ee=`import { IconButton } from "../IconButton";
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
`,$={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:53},startBody:{col:23,line:42},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/core/IconButton",component:W.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var P=function(K){var L=Object(Z.jsx)("svg",{viewBox:"0 0 24 24",children:Object(Z.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(Z.jsx)(W.a,Object.assign({},K,{children:L}))};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},P.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return j});var V=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.from.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.object.keys.js"),A=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),R=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=Object(B.a)(function(g,C){var S=C.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:S?S in g.radius?g.radius[S]:S:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:g.colorScheme==="dark"?g.palettes.gray[2]:g.palettes.gray[8],backgroundColor:g.colorScheme==="dark"?g.palettes.gray[8]:g.palettes.gray[2],borderRadius:S?S in g.radius?g.radius[S]:S:0}}}),M=e("./node_modules/react/jsx-runtime.js"),T=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function H(g,C){return h(g)||s(g,C)||b(g,C)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(g,C){if(!!g){if(typeof g=="string")return f(g,C);var S=Object.prototype.toString.call(g).slice(8,-1);if(S==="Object"&&g.constructor&&(S=g.constructor.name),S==="Map"||S==="Set")return Array.from(g);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return f(g,C)}}function f(g,C){(C==null||C>g.length)&&(C=g.length);for(var S=0,U=new Array(C);S<C;S++)U[S]=g[S];return U}function s(g,C){var S=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(S!=null){var U=[],E=!0,G=!1,Q,re;try{for(S=S.call(g);!(E=(Q=S.next()).done)&&(U.push(Q.value),!(C&&U.length===C));E=!0);}catch(de){G=!0,re=de}finally{try{!E&&S.return!=null&&S.return()}finally{if(G)throw re}}return U}}function h(g){if(Array.isArray(g))return g}function _(g,C){if(g==null)return{};var S=u(g,C),U,E;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(g);for(E=0;E<G.length;E++)U=G[E],!(C.indexOf(U)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,U)||(S[U]=g[U]))}return S}function u(g,C){if(g==null)return{};var S={},U=Object.keys(g),E,G;for(G=0;G<U.length;G++)E=U[G],!(C.indexOf(E)>=0)&&(S[E]=g[E]);return S}var r=null,t="loadImage",n=function(C,S){C.forEach(function(U){U.isIntersecting&&(S.unobserve(U.target),U.target.dispatchEvent(new CustomEvent(t)))})},o=Object(I.forwardRef)(function(g,C){var S=g.lazy,U=g.threshold,E=U===void 0?.5:U,G=g.placeholder,Q=g.src,re=g.radius,de=g.width,ge=de===void 0?"100%":de,ue=g.height,se=ue===void 0?"auto":ue,me=g.alt,pe=g.fit,fe=g.style,le=g.className,q=g.co,ae=g.overrideStyles,_e=_(g,T),je=p({radius:re},{overrideStyles:ae,name:"Image"}),be=je.classes,Oe=je.cx,De=Object(I.useState)(!1),Ee=H(De,2),Te=Ee[0],Ae=Ee[1],Le=Object(I.useState)(!1),Me=H(Le,2),Re=Me[0],Pe=Me[1],te=Object(I.useRef)(null),Y={width:ge,height:se,objectFit:pe};return Object(I.useImperativeHandle)(C,function(){return te.current}),Object(I.useEffect)(function(){if(!S){Pe(!0);return}var ie=function(){return Pe(!0)},ce=te.current;return ce&&ce.addEventListener(t,ie),function(){ce&&ce.removeEventListener(t,ie)}},[S]),Object(I.useEffect)(function(){!S||(r=new IntersectionObserver(n,{threshold:E}),te.current&&r.observe(te.current))},[S,E]),Object(M.jsxs)(x.a,Object.assign({className:Oe(be.root,le),co:q},_e,{children:[Object(M.jsx)("img",{ref:te,src:Q,alt:me,className:be.image,style:Y,onLoad:function(){return Ae(!0)}}),(!Te||S&&!Re)&&G&&Object(M.jsx)("div",{className:be.placeholder,title:me,children:G})]}))});o.displayName="@travelmakers-design/core/Image";function a(g){return d(g)||l(g)||c(g)||v()}function v(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(g,C){if(!!g){if(typeof g=="string")return m(g,C);var S=Object.prototype.toString.call(g).slice(8,-1);if(S==="Object"&&g.constructor&&(S=g.constructor.name),S==="Map"||S==="Set")return Array.from(g);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return m(g,C)}}function l(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function d(g){if(Array.isArray(g))return m(g)}function m(g,C){(C==null||C>g.length)&&(C=g.length);for(var S=0,U=new Array(C);S<C;S++)U[S]=g[S];return U}var i=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}},i=`import { Image } from "../Image";
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
`,y={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},k=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:63},startBody:{col:23,line:53},endBody:{col:1,line:63}}}}},title:"@travelmakers-design/core/Image",component:o,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},j=function(C){return Object(M.jsx)(M.Fragment,{children:a(new Array(10)).map(function(S,U){return Object(M.jsx)("div",{children:Object(M.jsx)(o,Object.assign({placeholder:Object(M.jsx)("div",{children:"Placeholder"})},C))},U)})})};j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return H}),e.d(O,"WithIcon",function(){return D}),e.d(O,"WithRightSection",function(){return b}),e.d(O,"Textarea",function(){return f});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.string.small.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),ee=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),$=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),P=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),F=e("./packages/travelmakers-design-core/src/constants/index.ts"),K=function(h,_){return h in _?_[h]:h},L={xsmall:12,small:14,medium:14,large:14,xlarge:16},J=Object($.a)(function(s,h){var _=h.size,u=h.multiline,r=h.radius,t=h.invalid,n=s.palettes.red[s.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(P.b)(s),{height:u?"auto":K(_,F.a),WebkitTapHighlightColor:"transparent",lineHeight:u?s.lineHeight:K(_,F.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:K(_,L),width:"100%",color:s.colorScheme==="dark"?s.palettes.gray[0]:s.palettes.gray[9],display:"block",textAlign:"left",minHeight:K(_,F.a),paddingLeft:K(_,F.a)/3,paddingRight:K(_,F.a)/3,borderRadius:K(r,s.radius),border:"1px solid "+(s.colorScheme==="dark"?s.palettes.gray[6]:s.palettes.gray[2]),backgroundColor:s.colorScheme==="dark"?s.palettes.gray[8]:s.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+s.palettes[s.colors.navy1][s.colorScheme==="dark"?3:5],borderColor:s.palettes[s.colors.navy1][s.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:s.colorScheme==="dark"?s.palettes.gray[7]:s.palettes.gray[0],color:s.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(s.colorScheme==="dark",s.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:K(_,F.a)+"px !important"},invalid:{color:n+" !important",borderColor:n+" !important","&::placeholder":{opacity:1,color:n+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:s.colorScheme==="dark"?s.palettes.gray[7]:s.palettes.gray[0],color:s.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:K(_,F.a),color:t?s.palettes.red[s.colorScheme==="dark"?5:6]:s.colorScheme==="dark"?s.palettes.gray[1]:s.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),X=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function R(s,h){if(s==null)return{};var _=I(s,h),u,r;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);for(r=0;r<t.length;r++)u=t[r],!(h.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,u)||(_[u]=s[u]))}return _}function I(s,h){if(s==null)return{};var _={},u=Object.keys(s),r,t;for(t=0;t<u.length;t++)r=u[t],!(h.indexOf(r)>=0)&&(_[r]=s[r]);return _}var x=Object(N.forwardRef)(function(s,h){var _,u=s.component,r=s.size,t=r===void 0?"medium":r,n=s.radius,o=n===void 0?"medium":n,a=s.icon,v=s.rightSectionWidth,c=v===void 0?36:v,l=s.rightSection,d=s.rightSectionProps,m=d===void 0?{}:d,i=s.wrapperProps,y=s.invalid,k=y===void 0?!1:y,j=s.required,g=j===void 0?!1:j,C=s.disabled,S=C===void 0?!1:C,U=s.multiline,E=U===void 0?!1:U,G=s.className,Q=s.style,re=s.co,de=s.overrideStyles,ge=s.__staticSelector,ue=ge===void 0?"Input":ge,se=R(s,X),me=Object(Z.c)(),pe=J({radius:o,size:t,multiline:E,invalid:k},{overrideStyles:de,name:ue}),fe=pe.classes,le=pe.cx,q=u||"input";return Object(A.jsxs)(ee.a,Object.assign({className:le(fe.wrapper,G),co:re,style:Q},i,{children:[a&&Object(A.jsx)("div",{className:fe.icon,children:a}),Object(A.jsx)(q,Object.assign({},se,{ref:h,className:le(fe.input,(_={},_[fe.withIcon]=a,_[fe.invalid]=k,_[fe.disabled]=S,_)),required:g,disabled:S,style:{paddingRight:l?c:me.spacing.small}})),l&&Object(A.jsx)("div",Object.assign({},m,{style:Object.assign({},m.style,{width:c}),className:le(fe.rightSection,m.className),children:l}))]}))});x.displayName="@travelmakers-design/core/Input";var B=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,p={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},WithIcon:{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},WithRightSection:{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},Textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}},B=`import { Input } from "../Input";
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
`,p={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},M=O.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ width: 400, padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}},"with-icon":{startLoc:{col:24,line:59},endLoc:{col:1,line:65},startBody:{col:24,line:59},endBody:{col:1,line:65}},"with-right-section":{startLoc:{col:32,line:67},endLoc:{col:1,line:84},startBody:{col:32,line:67},endBody:{col:1,line:84}},textarea:{startLoc:{col:24,line:86},endLoc:{col:1,line:92},startBody:{col:24,line:86},endBody:{col:1,line:92}}}}},title:"@travelmakers-design/core/Input",component:x,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},T=function(){return Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};T.displayName="Icon";var H=function(h){return Object(A.jsx)("div",{style:{width:400,padding:24},children:Object(A.jsx)(x,Object.assign({},h))})};H.displayName="Default";var D=function(h){return Object(A.jsx)("div",{style:{width:400,padding:24},children:Object(A.jsx)(x,Object.assign({icon:Object(A.jsx)(T,{})},h))})};D.displayName="WithIcon";var b=function(h){return Object(A.jsx)("div",{style:{width:400,padding:24},children:Object(A.jsx)(x,Object.assign({icon:Object(A.jsx)(T,{}),rightSectionWidth:50},h))})};b.displayName="WithRightSection";var f=function(h){return Object(A.jsx)("div",{style:{width:400,padding:24},children:Object(A.jsx)(x,Object.assign({component:"textarea",multiline:!0},h))})};f.displayName="Textarea",H.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},H.parameters),D.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},D.parameters),b.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},b.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx":function(oe,O,e){"use strict";e.d(O,"a",function(){return J});var V=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),ee=e("./packages/travelmakers-design-core/src/constants/index.ts"),$=Object(N.a)(function(A,X){var R=X.size,I=X.color,x=I===void 0?A.colorScheme==="light"?A.colors.black:A.colors.white:I in A.palettes?(A.colorScheme==="light",A.palettes[I][0]):I in A.colors?A.colors[I]:I;return{root:{position:"relative",display:"inline-block",width:R in ee.a?ee.a[R]:R,height:R in ee.a?ee.a[R]:R,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:x},circle:{fill:x}}}}),P=e("./node_modules/react/jsx-runtime.js"),F=["size","color","className","co","overrideStyles"];function K(A,X){if(A==null)return{};var R=L(A,X),I,x;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(A);for(x=0;x<B.length;x++)I=B[x],!(X.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(A,I)||(R[I]=A[I]))}return R}function L(A,X){if(A==null)return{};var R={},I=Object.keys(A),x,B;for(B=0;B<I.length;B++)x=I[B],!(X.indexOf(x)>=0)&&(R[x]=A[x]);return R}var J=Object(z.forwardRef)(function(A,X){var R=A.size,I=R===void 0?"medium":R,x=A.color,B=A.className,p=A.co,M=A.overrideStyles,T=K(A,F),H=$({size:I,color:x},{overrideStyles:M,name:"Spinner"}),D=H.classes,b=H.cx,f=Object(P.jsx)("i",{className:D.inner,children:Object(P.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(P.jsxs)("g",{transform:"translate(1 1)",children:[Object(P.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(P.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(P.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(P.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(P.jsx)(Z.a,Object.assign({ref:X,className:b(D.root,B),co:p},T,{children:f}))});J.displayName="@travelmakers-design/core/Spinner"},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},ee=`import React from "react";
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
`,$={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/core/Spinner",component:z.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var P=function(K){return Object(Z.jsx)(z.a,Object.assign({},K))};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},P.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,O,e){"use strict";e.d(O,"a",function(){return H});var V=e("./node_modules/core-js/modules/es.object.keys.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.array.map.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(F),L=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),X=e.n(A),R=e("./node_modules/react/jsx-runtime.js"),I=e.n(R),x=["component","className","style","co"];function B(D,b){if(D==null)return{};var f=p(D,b),s,h;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(D);for(h=0;h<_.length;h++)s=_[h],!(b.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,s)||(f[s]=D[s]))}return f}function p(D,b){if(D==null)return{};var f={},s=Object.keys(D),h,_;for(_=0;_<s.length;_++)h=s[_],!(b.indexOf(h)>=0)&&(f[h]=D[h]);return f}function M(D,b){return typeof D=="function"?D(b):D}function T(D,b){var f=Object(L.a)(),s=f.css,h=f.cx,_=Object(J.c)();return Array.isArray(D)?h(b,D.map(function(u){return s(M(u,_))})):h(b,s(M(D,_)))}var H=Object(A.forwardRef)(function(D,b){var f=D.component,s=D.className,h=D.style,_=D.co,u=B(D,x),r=f||"div";return Object(R.jsx)(r,Object.assign({ref:b,className:T(_,s),style:h},u))});H.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.palettes.dark[0],\\n      })}\\n    />\\n  );\\n};\\n";
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
        backgroundColor: theme.palettes.dark[0],
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.palettes.dark[0],\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},ee=`import React from "react";
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
        backgroundColor: theme.palettes.dark[0],
      })}
    />
  );
};
`,$={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};O.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.palettes.dark[0],\\n      })}\\n    />\\n  );\\n};\\n";
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
        backgroundColor: theme.palettes.dark[0],
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.palettes.dark[0],\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/View",component:z.a};var P=function(){return Object(Z.jsx)(z.a,{co:function(L){return{width:100,height:100,backgroundColor:L.palettes.dark[0]}}})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.palettes.dark[0],
      })}
    />
  );
}`}},P.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return V});var V={xsmall:24,small:28,medium:40,large:48,xlarge:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return _});var V=e("./node_modules/core-js/modules/es.string.replace.js"),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),ne=e("./node_modules/core-js/modules/es.number.constructor.js"),z=e("./node_modules/core-js/modules/es.parse-int.js"),Z=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/core-js/modules/es.string.split.js"),ee=e("./node_modules/core-js/modules/es.string.starts-with.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/core-js/modules/es.array.from.js");function B(u,r){return D(u)||H(u,r)||M(u,r)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(u,r){if(!!u){if(typeof u=="string")return T(u,r);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(u,r)}}function T(u,r){(r==null||r>u.length)&&(r=u.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=u[t];return n}function H(u,r){var t=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,c;try{for(t=t.call(u);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,c=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw c}}return n}}function D(u){if(Array.isArray(u))return u}function b(u){var r=u.replace("#","");return typeof r=="string"&&r.length===6&&!Number.isNaN(Number("0x"+r))}function f(u){var r=u.replace("#",""),t=parseInt(r,16),n=t>>16&255,o=t>>8&255,a=t&255;return{r:n,g:o,b:a,a:1}}function s(u){var r=u.replace(/[^0-9,.]/g,"").split(",").map(Number),t=B(r,4),n=t[0],o=t[1],a=t[2],v=t[3];return{r:n,g:o,b:a,a:v||1}}function h(u){return b(u)?f(u):u.startsWith("rgb")?s(u):{r:0,g:0,b:0,a:1}}var _=function(r,t){var n=h(r),o=n.r,a=n.g,v=n.b;return"rgba("+o+", "+a+", "+v+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return z});var V=e("./node_modules/core-js/modules/es.array.concat.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=function(N){var ee=Object(W.useRef)(N);return Object(W.useEffect)(function(){ee.current=N},[N]),Object(W.useMemo)(function(){return function(){for(var $,P=arguments.length,F=new Array(P),K=0;K<P;K++)F[K]=arguments[K];return($=ee.current)===null||$===void 0?void 0:$.call.apply($,[ee].concat(F))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},ee=`import React from "react";
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
`,$={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var P=function(){var K=Object(z.a)(function(){alert("Click away from red box!")});return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{ref:K,style:{width:100,height:100,backgroundColor:"red"}})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
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
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return _});var V=e("./node_modules/core-js/modules/es.array.slice.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.object.to-string.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.function.name.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.array.from.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T),D=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function b(u,r){var t=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!t){if(Array.isArray(u)||(t=f(u))||r&&u&&typeof u.length=="number"){t&&(u=t);var n=0,o=function(){};return{s:o,n:function(){return n>=u.length?{done:!0}:{done:!1,value:u[n++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,v=!1,c;return{s:function(){t=t.call(u)},n:function(){var d=t.next();return a=d.done,d},e:function(d){v=!0,c=d},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(v)throw c}}}}function f(u,r){if(!!u){if(typeof u=="string")return s(u,r);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(u,r)}}function s(u,r){(r==null||r>u.length)&&(r=u.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=u[t];return n}var h=["mousedown","touchstart"],_=function(r){var t=Object(T.useRef)(),n=Object(D.a)(r);return Object(T.useEffect)(function(){var o=function(d){var m=t.current;m&&!m.contains(d.target)&&n(d)},a=b(h),v;try{for(a.s();!(v=a.n()).done;){var c=v.value;document.addEventListener(c,o)}}catch(l){a.e(l)}finally{a.f()}return function(){var l=b(h),d;try{for(l.s();!(d=l.n()).done;){var m=d.value;document.removeEventListener(m,o)}}catch(i){l.e(i)}finally{l.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return r});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/web.timers.js");function A(t,n){return B(t)||x(t,n)||R(t,n)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(t,n){if(!!t){if(typeof t=="string")return I(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(t,n)}}function I(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function x(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,c=!1,l,d;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(m){c=!0,d=m}finally{try{!v&&o.return!=null&&o.return()}finally{if(c)throw d}}return a}}function B(t){if(Array.isArray(t))return t}var p=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=n.timeout,a=o===void 0?2e3:o,v=Object(L.useState)(null),c=A(v,2),l=c[0],d=c[1],m=Object(L.useState)(!1),i=A(m,2),y=i[0],k=i[1],j=Object(L.useState)(null),g=A(j,2),C=g[0],S=g[1],U=function(re){clearTimeout(C),S(setTimeout(function(){return k(!1)},a)),k(re)},E=function(re){"clipboard"in navigator?navigator.clipboard.writeText(re).then(function(){return U(!0)}).catch(function(de){return d(de)}):d(new Error("useClipboard: navigator.clipboard is not supported"))},G=function(){k(!1),d(null),clearTimeout(C)};return{copy:E,reset:G,error:l,copied:y}},M=e("./node_modules/react/jsx-runtime.js");function T(t,n){return s(t)||f(t,n)||D(t,n)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,n){if(!!t){if(typeof t=="string")return b(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(t,n)}}function b(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function f(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,c=!1,l,d;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(m){c=!0,d=m}finally{try{!v&&o.return!=null&&o.return()}finally{if(c)throw d}}return a}}function s(t){if(Array.isArray(t))return t}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},h=`import React, { useState } from "react";

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
`,_={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},u=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},r=function(){var n=Object(L.useState)(""),o=T(n,2),a=o[0],v=o[1],c=p({timeout:3e3}),l=c.copy,d=c.copied;return Object(M.jsxs)("div",{children:[Object(M.jsx)("input",{type:"text",onChange:function(i){return v(i.target.value)}}),Object(M.jsx)("button",{onClick:function(){return l(a)},children:"copy"}),Object(M.jsx)("span",{children:d&&"Copied!!"})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return $});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),ne=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},z=e("./node_modules/react/jsx-runtime.js"),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,N={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Z=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},ee=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},$=function(){var F=ne();return Object(z.jsx)("div",{children:Object(z.jsx)("div",{children:F})})};$.displayName="Default",$.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},$.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return t});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),A=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function X(n,o){return p(n)||B(n,o)||I(n,o)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(n,o){if(!!n){if(typeof n=="string")return x(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(n,o)}}function x(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function B(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],c=!0,l=!1,d,m;try{for(a=a.call(n);!(c=(d=a.next()).done)&&(v.push(d.value),!(o&&v.length===o));c=!0);}catch(i){l=!0,m=i}finally{try{!c&&a.return!=null&&a.return()}finally{if(l)throw m}}return v}}function p(n){if(Array.isArray(n))return n}var M=function(o,a,v){var c=Object(A.a)(o,a),l=X(c,2),d=l[0],m=l[1];return Object(J.a)(d,v),m},T=e("./node_modules/react/jsx-runtime.js");function H(n,o){return h(n)||s(n,o)||b(n,o)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,o){if(!!n){if(typeof n=="string")return f(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(n,o)}}function f(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function s(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],c=!0,l=!1,d,m;try{for(a=a.call(n);!(c=(d=a.next()).done)&&(v.push(d.value),!(o&&v.length===o));c=!0);}catch(i){l=!0,m=i}finally{try{!c&&a.return!=null&&a.return()}finally{if(l)throw m}}return v}}function h(n){if(Array.isArray(n))return n}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},_=`import React, { useState } from "react";

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
`,u={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},r=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},t=function(){var o=Object(L.useState)(""),a=H(o,2),v=a[0],c=a[1],l=M(function(){alert("Updated!")},1e3,[v]);return Object(T.jsxs)("div",{children:[Object(T.jsx)("input",{type:"text",onChange:function(m){return c(m.target.value)}}),Object(T.jsx)("button",{onClick:l,children:"Cancel"})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},ee=`import React from "react";
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
`,$={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var P=function(){var K=Object(z.a)();return Object(Z.jsxs)("div",{children:[Math.random(),Object(Z.jsx)("button",{onClick:K,children:"Update"})]})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return r});var V=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.function.name.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T);function D(t,n){return _(t)||h(t,n)||f(t,n)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,n){if(!!t){if(typeof t=="string")return s(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(t,n)}}function s(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function h(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,c=!1,l,d;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(m){c=!0,d=m}finally{try{!v&&o.return!=null&&o.return()}finally{if(c)throw d}}return a}}function _(t){if(Array.isArray(t))return t}var u=function(n){return(n+1)%1e6},r=function(){var n=Object(T.useReducer)(u,0),o=D(n,2),a=o[1];return a}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return d});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.string.split.js"),A=e("./node_modules/core-js/modules/es.regexp.exec.js"),X=e("./node_modules/core-js/modules/es.string.replace.js"),R=e("./node_modules/core-js/modules/es.array.filter.js"),I=e("./node_modules/core-js/modules/es.regexp.to-string.js"),x=e("./node_modules/core-js/modules/es.date.to-string.js");function B(m,i){var y=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!y){if(Array.isArray(m)||(y=p(m))||i&&m&&typeof m.length=="number"){y&&(m=y);var k=0,j=function(){};return{s:j,n:function(){return k>=m.length?{done:!0}:{done:!1,value:m[k++]}},e:function(U){function E(G){return U.apply(this,arguments)}return E.toString=function(){return U.toString()},E}(function(U){throw U}),f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,C=!1,S;return{s:function(){y=y.call(m)},n:function(){var E=y.next();return g=E.done,E},e:function(U){function E(G){return U.apply(this,arguments)}return E.toString=function(){return U.toString()},E}(function(U){C=!0,S=U}),f:function(){try{!g&&y.return!=null&&y.return()}finally{if(C)throw S}}}}function p(m,i){if(!!m){if(typeof m=="string")return M(m,i);var y=Object.prototype.toString.call(m).slice(8,-1);if(y==="Object"&&m.constructor&&(y=m.constructor.name),y==="Map"||y==="Set")return Array.from(m);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return M(m,i)}}function M(m,i){(i==null||i>m.length)&&(i=m.length);for(var y=0,k=new Array(i);y<i;y++)k[y]=m[y];return k}var T={alt:1,ctrl:2,meta:4,shift:8},H={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},D={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},b=function(i){var y=i.key!==" "?i.key.toLowerCase():"space",k=0;return i.altKey&&(k+=T.alt),i.ctrlKey&&(k+=T.ctrl),i.metaKey&&(k+=T.meta),i.shiftKey&&(k+=T.shift),{modifiers:k,key:y}},f=function(i){var y=i.replace(/\s/g,"").toLowerCase().split("+"),k=0,j,g=B(y),C;try{for(g.s();!(C=g.n()).done;){var S=C.value;T[S]?k+=T[S]:T[D[S]]?k+=T[D[S]]:H[S]?(k+=T.shift,j=H[S]):D[S]?j=D[S]:j=S}}catch(U){g.e(U)}finally{g.f()}return{modifiers:k,key:j}},s=function(i,y){return i.modifiers===y.modifiers&&i.key===y.key},h=function(i){var y=Object(L.useMemo)(function(){return i.filter(function(E){return!E.global})},[i]),k=Object(L.useMemo)(function(){return i.filter(function(E){return E.global})},[i]),j=Object(L.useCallback)(function(E,G,Q,re){var de=B(E?k:y),ge;try{for(de.s();!(ge=de.n()).done;){var ue=ge.value;if(s(f(ue.combo),G)){var se;(se=ue[Q])===null||se===void 0||se.call(ue,re)}}}catch(me){de.e(me)}finally{de.f()}},[y,k]),g=Object(L.useCallback)(function(E){j(!0,b(E),"onKeyDown",E)},[j]),C=Object(L.useCallback)(function(E){j(!0,b(E),"onKeyUp",E)},[j]),S=Object(L.useCallback)(function(E){j(!1,b(E.nativeEvent),"onKeyDown",E.nativeEvent)},[j]),U=Object(L.useCallback)(function(E){j(!1,b(E.nativeEvent),"onKeyUp",E.nativeEvent)},[j]);return Object(L.useEffect)(function(){return document.addEventListener("keydown",g),document.addEventListener("keyup",C),function(){document.removeEventListener("keydown",g),document.removeEventListener("keyup",C)}},[g,C]),{handleKeyDown:S,handleKeyUp:U}},_=e("./node_modules/react/jsx-runtime.js");function u(m,i){return a(m)||o(m,i)||t(m,i)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(m,i){if(!!m){if(typeof m=="string")return n(m,i);var y=Object.prototype.toString.call(m).slice(8,-1);if(y==="Object"&&m.constructor&&(y=m.constructor.name),y==="Map"||y==="Set")return Array.from(m);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(m,i)}}function n(m,i){(i==null||i>m.length)&&(i=m.length);for(var y=0,k=new Array(i);y<i;y++)k[y]=m[y];return k}function o(m,i){var y=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(y!=null){var k=[],j=!0,g=!1,C,S;try{for(y=y.call(m);!(j=(C=y.next()).done)&&(k.push(C.value),!(i&&k.length===i));j=!0);}catch(U){g=!0,S=U}finally{try{!j&&y.return!=null&&y.return()}finally{if(g)throw S}}return k}}function a(m){if(Array.isArray(m))return m}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},v=`import React, { useRef, useState } from "react";

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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},l=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},d=function(){var i=Object(L.useRef)(null),y=Object(L.useState)(""),k=u(y,2),j=k[0],g=k[1],C=h([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){i.current.select()}},{combo:"shift+r",onKeyUp:function(){g("")}}]),S=C.handleKeyDown,U=C.handleKeyUp;return Object(_.jsx)("div",{children:Object(_.jsx)("input",{ref:i,type:"text",value:j,onChange:function(G){return g(G.target.value)},onKeyDown:S,onKeyUp:U})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return l});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.function.name.js"),M=e.n(p),T=e("./node_modules/core-js/modules/es.array.from.js"),H=e.n(T),D=e("./node_modules/react/index.js"),b=e.n(D),f=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),s=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),h=e("./node_modules/react/jsx-runtime.js"),_=e.n(h);function u(d,m){return a(d)||o(d,m)||t(d,m)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(d,m){if(!!d){if(typeof d=="string")return n(d,m);var i=Object.prototype.toString.call(d).slice(8,-1);if(i==="Object"&&d.constructor&&(i=d.constructor.name),i==="Map"||i==="Set")return Array.from(d);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(d,m)}}function n(d,m){(m==null||m>d.length)&&(m=d.length);for(var i=0,y=new Array(m);i<m;i++)y[i]=d[i];return y}function o(d,m){var i=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(i!=null){var y=[],k=!0,j=!1,g,C;try{for(i=i.call(d);!(k=(g=i.next()).done)&&(y.push(g.value),!(m&&y.length===m));k=!0);}catch(S){j=!0,C=S}finally{try{!k&&i.return!=null&&i.return()}finally{if(j)throw C}}return y}}function a(d){if(Array.isArray(d))return d}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},v=`import React, { useEffect } from "react";

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
`,c={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var l=function(){var m=Object(s.a)(),i=u(m,2),y=i[0],k=i[1],j=Object(f.a)();return Object(D.useEffect)(function(){j()},[]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{ref:k,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+y]})})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`() => {
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
}`}},l.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return u});var V=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.function.name.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T);function D(r,t){return _(r)||h(r,t)||f(r,t)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(r,t){if(!!r){if(typeof r=="string")return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}}function s(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function h(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function _(r){if(Array.isArray(r))return r}var u=function(){var t=Object(T.useRef)(null),n=Object(T.useState)(!1),o=D(n,2),a=o[0],v=o[1],c=Object(T.useCallback)(function(){return v(!0)},[]),l=Object(T.useCallback)(function(){return v(!1)},[]);return Object(T.useEffect)(function(){var d=t.current;if(!!d)return d.addEventListener("mouseenter",c),d.addEventListener("mouseleave",l),function(){d.removeEventListener("mouseenter",c),d.removeEventListener("mouseleave",l)}},[t.current]),[a,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},ee=`import React from "react";
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
`,$={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var P=function(){var K=Object(z.a)();return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{children:K})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return r});var V=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.function.name.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T);function D(t,n){return _(t)||h(t,n)||f(t,n)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,n){if(!!t){if(typeof t=="string")return s(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(t,n)}}function s(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function h(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,c=!1,l,d;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(m){c=!0,d=m}finally{try{!v&&o.return!=null&&o.return()}finally{if(c)throw d}}return a}}function _(t){if(Array.isArray(t))return t}var u=0,r=function(n){var o=Object(T.useState)(n),a=D(o,2),v=a[0],c=a[1],l=n||v;return Object(T.useEffect)(function(){v==null&&(u+=1,c("tm-"+u))},[v]),l}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return _});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),ne=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.array.from.js");function R(u,r){return M(u)||p(u,r)||x(u,r)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,r){if(!!u){if(typeof u=="string")return B(u,r);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(u,r)}}function B(u,r){(r==null||r>u.length)&&(r=u.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=u[t];return n}function p(u,r){var t=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,c;try{for(t=t.call(u);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,c=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw c}}return n}}function M(u){if(Array.isArray(u))return u}var T=["keypress","mousemove","touchmove","click","scroll"],H={events:T,initialState:!0},D=function(r,t){var n=Object.assign({},H,t),o=n.events,a=n.initialState,v=Object(w.useState)(a),c=R(v,2),l=c[0],d=c[1],m=Object(w.useRef)();return Object(w.useEffect)(function(){var i=function(){d(!1),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(function(){d(!0)},r)};return o.forEach(function(y){return document.addEventListener(y,i)}),function(){o.forEach(function(y){return document.removeEventListener(y,i)})}},[r]),l},b=e("./node_modules/react/jsx-runtime.js"),f=`
    
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
`,s={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},h=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},_=function(){var r=D(3e3);return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:["Idle: ",""+r]})})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return u});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function J(r,t){return x(r)||I(r,t)||X(r,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(r,t){if(!!r){if(typeof r=="string")return R(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(r,t)}}function R(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function I(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function x(r){if(Array.isArray(r))return r}var B=function(t){var n=Object(L.useState)(null),o=J(n,2),a=o[0],v=o[1],c=Object(L.useRef)(),l=Object(L.useCallback)(function(d){if(c.current&&(c.current.disconnect(),c.current=null),d===null){v(null);return}c.current=new IntersectionObserver(function(m){var i=J(m,1),y=i[0];v(y)},t),c.current.observe(d)},[t==null?void 0:t.rootMargin,t==null?void 0:t.root,t==null?void 0:t.threshold]);return[l,a]},p=e("./node_modules/react/jsx-runtime.js");function M(r,t){return f(r)||b(r,t)||H(r,t)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(r,t){if(!!r){if(typeof r=="string")return D(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(r,t)}}function D(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function b(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function f(r){if(Array.isArray(r))return r}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},s=`import React, { useRef } from "react";

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
`,h={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},_=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},u=function(){var t=Object(L.useRef)(null),n=B({root:t.current,threshold:.5}),o=M(n,2),a=o[0],v=o[1];return Object(p.jsx)("div",{ref:t,style:{width:300,height:300,overflowY:"scroll"},children:Object(p.jsx)("div",{style:{height:500},children:Object(p.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:v!=null&&v.isIntersecting?"green":"red"},children:v!=null&&v.isIntersecting?"Half visible":"Obscured"})})})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return b});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function A(f,s){return B(f)||x(f,s)||R(f,s)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(f,s){if(!!f){if(typeof f=="string")return I(f,s);var h=Object.prototype.toString.call(f).slice(8,-1);if(h==="Object"&&f.constructor&&(h=f.constructor.name),h==="Map"||h==="Set")return Array.from(f);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return I(f,s)}}function I(f,s){(s==null||s>f.length)&&(s=f.length);for(var h=0,_=new Array(s);h<s;h++)_[h]=f[h];return _}function x(f,s){var h=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(h!=null){var _=[],u=!0,r=!1,t,n;try{for(h=h.call(f);!(u=(t=h.next()).done)&&(_.push(t.value),!(s&&_.length===s));u=!0);}catch(o){r=!0,n=o}finally{try{!u&&h.return!=null&&h.return()}finally{if(r)throw n}}return _}}function B(f){if(Array.isArray(f))return f}var p=function(s,h){var _=Object(J.a)(s,h),u=A(_,2),r=u[0],t=u[1];return Object(w.useEffect)(function(){return r(),t},[r,t]),t},M=e("./node_modules/react/jsx-runtime.js"),T=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},T=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},D=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},b=function(){var s=p(function(){alert("fire")},3e3);return Object(M.jsx)("div",{children:Object(M.jsx)("button",{onClick:s,children:"clear"})})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return c});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.function.name.js"),M=e.n(p),T=e("./node_modules/core-js/modules/es.array.from.js"),H=e.n(T),D=e("./node_modules/react/index.js"),b=e.n(D),f=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),s=e("./node_modules/react/jsx-runtime.js"),h=e.n(s);function _(l,d){return o(l)||n(l,d)||r(l,d)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,d){if(!!l){if(typeof l=="string")return t(l,d);var m=Object.prototype.toString.call(l).slice(8,-1);if(m==="Object"&&l.constructor&&(m=l.constructor.name),m==="Map"||m==="Set")return Array.from(l);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(l,d)}}function t(l,d){(d==null||d>l.length)&&(d=l.length);for(var m=0,i=new Array(d);m<d;m++)i[m]=l[m];return i}function n(l,d){var m=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(m!=null){var i=[],y=!0,k=!1,j,g;try{for(m=m.call(l);!(y=(j=m.next()).done)&&(i.push(j.value),!(d&&i.length===d));y=!0);}catch(C){k=!0,g=C}finally{try{!y&&m.return!=null&&m.return()}finally{if(k)throw g}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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
`,v={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var c=function(){var d=Object(f.a)(function(){alert("fire")},3e3),m=_(d,2),i=m[0],y=m[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:i,children:"run"}),Object(s.jsx)("button",{onClick:y,children:"clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return Z});var V=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(ee,$){var P=Object(W.useRef)(),F=Object(z.a)(ee),K=Object(W.useCallback)(function(){P.current&&clearInterval(P.current),P.current=setInterval(function(){F()},$)},[$]),L=Object(W.useCallback)(function(){P.current&&clearInterval(P.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[K,L]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return D});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=typeof document!="undefined"?L.useLayoutEffect:L.useEffect,A=e("./node_modules/react/jsx-runtime.js");function X(b,f){return p(b)||B(b,f)||I(b,f)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(b,f){if(!!b){if(typeof b=="string")return x(b,f);var s=Object.prototype.toString.call(b).slice(8,-1);if(s==="Object"&&b.constructor&&(s=b.constructor.name),s==="Map"||s==="Set")return Array.from(b);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return x(b,f)}}function x(b,f){(f==null||f>b.length)&&(f=b.length);for(var s=0,h=new Array(f);s<f;s++)h[s]=b[s];return h}function B(b,f){var s=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(s!=null){var h=[],_=!0,u=!1,r,t;try{for(s=s.call(b);!(_=(r=s.next()).done)&&(h.push(r.value),!(f&&h.length===f));_=!0);}catch(n){u=!0,t=n}finally{try{!_&&s.return!=null&&s.return()}finally{if(u)throw t}}return h}}function p(b){if(Array.isArray(b))return b}var M=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},M=`import React, { useState } from "react";

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
`,T={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},H=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},D=function(){var f=Object(L.useState)(!1),s=X(f,2),h=s[0],_=s[1];return J(function(){_(!0)},[]),Object(A.jsx)("div",{children:h&&"mounted"})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return D});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function J(b,f){return x(b)||I(b,f)||X(b,f)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(b,f){if(!!b){if(typeof b=="string")return R(b,f);var s=Object.prototype.toString.call(b).slice(8,-1);if(s==="Object"&&b.constructor&&(s=b.constructor.name),s==="Map"||s==="Set")return Array.from(b);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return R(b,f)}}function R(b,f){(f==null||f>b.length)&&(f=b.length);for(var s=0,h=new Array(f);s<f;s++)h[s]=b[s];return h}function I(b,f){var s=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(s!=null){var h=[],_=!0,u=!1,r,t;try{for(s=s.call(b);!(_=(r=s.next()).done)&&(h.push(r.value),!(f&&h.length===f));_=!0);}catch(n){u=!0,t=n}finally{try{!_&&s.return!=null&&s.return()}finally{if(u)throw t}}return h}}function x(b){if(Array.isArray(b))return b}var B=function(f){var s=Object(w.useState)(!1),h=J(s,2),_=h[0],u=h[1],r=Object(w.useCallback)(function(n){var o=n.key;o===f&&u(!0)},[f]),t=Object(w.useCallback)(function(n){var o=n.key;o===f&&u(!1)},[f]);return Object(w.useEffect)(function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",t)}},[r,t]),_},p=e("./node_modules/react/jsx-runtime.js"),M=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},M=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,T={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},H=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},D=function(){var f=B("r");return Object(p.jsx)("div",{children:f&&"r key pressed"})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return m});var V=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./node_modules/react/index.js"),A=e("./node_modules/core-js/modules/es.array.concat.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.array.includes.js"),I=e("./node_modules/core-js/modules/es.string.includes.js");function x(i){return M(i)||p(i)||D(i)||B()}function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function M(i){if(Array.isArray(i))return b(i)}function T(i,y){return s(i)||f(i,y)||D(i,y)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(i,y){if(!!i){if(typeof i=="string")return b(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return b(i,y)}}function b(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function f(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,S,U;try{for(k=k.call(i);!(g=(S=k.next()).done)&&(j.push(S.value),!(y&&j.length===y));g=!0);}catch(E){C=!0,U=E}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw U}}return j}}function s(i){if(Array.isArray(i))return i}var h=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=Object(J.useState)(y),j=T(k,2),g=j[0],C=j[1],S=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),me=0;me<ue;me++)se[me]=arguments[me];return C(function(pe){return[].concat(x(pe),se)})},[]),U=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),me=0;me<ue;me++)se[me]=arguments[me];return C(function(pe){return[].concat(se,x(pe))})},[]),E=Object(J.useCallback)(function(ue){for(var se=arguments.length,me=new Array(se>1?se-1:0),pe=1;pe<se;pe++)me[pe-1]=arguments[pe];return C(function(fe){return[].concat(x(fe.slice(0,ue)),me,x(fe.slice(ue)))})},[]),G=Object(J.useCallback)(function(){for(var ue=arguments.length,se=new Array(ue),me=0;me<ue;me++)se[me]=arguments[me];return C(function(pe){return pe.filter(function(fe,le){return!se.includes(le)})})},[]),Q=Object(J.useCallback)(function(){var ue=x(g),se=ue.pop();return C(ue),se},[g]),re=Object(J.useCallback)(function(){var ue=x(g),se=ue.shift();return C(ue),se},[g]),de=Object(J.useCallback)(function(ue,se){C(function(me){var pe=x(me);return pe[ue]=se,pe})},[]),ge={setState:C,append:S,prepend:U,insert:E,remove:G,pop:Q,shift:re,setItem:de};return[g,ge]},_=e("./node_modules/react/jsx-runtime.js");function u(i,y){return a(i)||o(i,y)||t(i,y)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(i,y){if(!!i){if(typeof i=="string")return n(i,y);var k=Object.prototype.toString.call(i).slice(8,-1);if(k==="Object"&&i.constructor&&(k=i.constructor.name),k==="Map"||k==="Set")return Array.from(i);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(i,y)}}function n(i,y){(y==null||y>i.length)&&(y=i.length);for(var k=0,j=new Array(y);k<y;k++)j[k]=i[k];return j}function o(i,y){var k=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(k!=null){var j=[],g=!0,C=!1,S,U;try{for(k=k.call(i);!(g=(S=k.next()).done)&&(j.push(S.value),!(y&&j.length===y));g=!0);}catch(E){C=!0,U=E}finally{try{!g&&k.return!=null&&k.return()}finally{if(C)throw U}}return j}}function a(i){if(Array.isArray(i))return i}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},v=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},l=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},d=5,m=function(){var y=h(["Item 1","Item 2","Item 3","Item 4","Item 5"]),k=u(y,2),j=k[0],g=k[1];return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{onClick:function(){return g.append("Item "+ ++d)},children:"append"}),Object(_.jsx)("button",{onClick:function(){return g.pop()},children:"pop"}),Object(_.jsx)("button",{onClick:function(){return g.prepend("Item "+ ++d)},children:"prepend"}),Object(_.jsx)("button",{onClick:function(){return g.shift()},children:"shift"}),Object(_.jsx)("button",{onClick:function(){return g.setItem(3,"Updated")},children:"setItem 3 index"}),Object(_.jsx)("button",{onClick:function(){return g.remove(2,3)},children:"remove 2, 3 index"}),Object(_.jsx)("button",{onClick:function(){return g.insert(3,"Item "+ ++d)},children:"insert 3 index"})]}),Object(_.jsx)("ul",{children:j.map(function(C,S){return Object(_.jsx)("li",{children:C},S)})})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return U});var V=e("./node_modules/core-js/modules/es.promise.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),ne=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),R=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),I=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),x=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),B=e("./node_modules/core-js/modules/es.object.define-property.js"),p=e("./node_modules/core-js/modules/es.object.create.js"),M=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),T=e("./node_modules/core-js/modules/es.array.for-each.js"),H=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),D=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),b=e("./node_modules/core-js/modules/es.array.reverse.js"),f=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function s(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return E};var E={},G=Object.prototype,Q=G.hasOwnProperty,re=typeof Symbol=="function"?Symbol:{},de=re.iterator||"@@iterator",ge=re.asyncIterator||"@@asyncIterator",ue=re.toStringTag||"@@toStringTag";function se(te,Y,ie){return Object.defineProperty(te,Y,{value:ie,enumerable:!0,configurable:!0,writable:!0}),te[Y]}try{se({},"")}catch(te){se=function(ie,ce,ve){return ie[ce]=ve}}function me(te,Y,ie,ce){var ve=Y&&Y.prototype instanceof le?Y:le,ye=Object.create(ve.prototype),ke=new Me(ce||[]);return ye._invoke=function(Se,Ie,he){var Ce="suspendedStart";return function(xe,Ke){if(Ce==="executing")throw new Error("Generator is already running");if(Ce==="completed"){if(xe==="throw")throw Ke;return Pe()}for(he.method=xe,he.arg=Ke;;){var We=he.delegate;if(We){var Ue=Te(We,he);if(Ue){if(Ue===fe)continue;return Ue}}if(he.method==="next")he.sent=he._sent=he.arg;else if(he.method==="throw"){if(Ce==="suspendedStart")throw Ce="completed",he.arg;he.dispatchException(he.arg)}else he.method==="return"&&he.abrupt("return",he.arg);Ce="executing";var Be=pe(Se,Ie,he);if(Be.type==="normal"){if(Ce=he.done?"completed":"suspendedYield",Be.arg===fe)continue;return{value:Be.arg,done:he.done}}Be.type==="throw"&&(Ce="completed",he.method="throw",he.arg=Be.arg)}}}(te,ie,ke),ye}function pe(te,Y,ie){try{return{type:"normal",arg:te.call(Y,ie)}}catch(ce){return{type:"throw",arg:ce}}}E.wrap=me;var fe={};function le(){}function q(){}function ae(){}var _e={};se(_e,de,function(){return this});var je=Object.getPrototypeOf,be=je&&je(je(Re([])));be&&be!==G&&Q.call(be,de)&&(_e=be);var Oe=ae.prototype=le.prototype=Object.create(_e);function De(te){["next","throw","return"].forEach(function(Y){se(te,Y,function(ie){return this._invoke(Y,ie)})})}function Ee(te,Y){function ie(ve,ye,ke,Se){var Ie=pe(te[ve],te,ye);if(Ie.type!=="throw"){var he=Ie.arg,Ce=he.value;return Ce&&typeof Ce=="object"&&Q.call(Ce,"__await")?Y.resolve(Ce.__await).then(function(xe){ie("next",xe,ke,Se)},function(xe){ie("throw",xe,ke,Se)}):Y.resolve(Ce).then(function(xe){he.value=xe,ke(he)},function(xe){return ie("throw",xe,ke,Se)})}Se(Ie.arg)}var ce;this._invoke=function(ve,ye){function ke(){return new Y(function(Se,Ie){ie(ve,ye,Se,Ie)})}return ce=ce?ce.then(ke,ke):ke()}}function Te(te,Y){var ie=te.iterator[Y.method];if(ie===void 0){if(Y.delegate=null,Y.method==="throw"){if(te.iterator.return&&(Y.method="return",Y.arg=void 0,Te(te,Y),Y.method==="throw"))return fe;Y.method="throw",Y.arg=new TypeError("The iterator does not provide a 'throw' method")}return fe}var ce=pe(ie,te.iterator,Y.arg);if(ce.type==="throw")return Y.method="throw",Y.arg=ce.arg,Y.delegate=null,fe;var ve=ce.arg;return ve?ve.done?(Y[te.resultName]=ve.value,Y.next=te.nextLoc,Y.method!=="return"&&(Y.method="next",Y.arg=void 0),Y.delegate=null,fe):ve:(Y.method="throw",Y.arg=new TypeError("iterator result is not an object"),Y.delegate=null,fe)}function Ae(te){var Y={tryLoc:te[0]};1 in te&&(Y.catchLoc=te[1]),2 in te&&(Y.finallyLoc=te[2],Y.afterLoc=te[3]),this.tryEntries.push(Y)}function Le(te){var Y=te.completion||{};Y.type="normal",delete Y.arg,te.completion=Y}function Me(te){this.tryEntries=[{tryLoc:"root"}],te.forEach(Ae,this),this.reset(!0)}function Re(te){if(te){var Y=te[de];if(Y)return Y.call(te);if(typeof te.next=="function")return te;if(!isNaN(te.length)){var ie=-1,ce=function ve(){for(;++ie<te.length;)if(Q.call(te,ie))return ve.value=te[ie],ve.done=!1,ve;return ve.value=void 0,ve.done=!0,ve};return ce.next=ce}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return q.prototype=ae,se(Oe,"constructor",ae),se(ae,"constructor",q),q.displayName=se(ae,ue,"GeneratorFunction"),E.isGeneratorFunction=function(te){var Y=typeof te=="function"&&te.constructor;return!!Y&&(Y===q||(Y.displayName||Y.name)==="GeneratorFunction")},E.mark=function(te){return Object.setPrototypeOf?Object.setPrototypeOf(te,ae):(te.__proto__=ae,se(te,ue,"GeneratorFunction")),te.prototype=Object.create(Oe),te},E.awrap=function(te){return{__await:te}},De(Ee.prototype),se(Ee.prototype,ge,function(){return this}),E.AsyncIterator=Ee,E.async=function(te,Y,ie,ce,ve){ve===void 0&&(ve=Promise);var ye=new Ee(me(te,Y,ie,ce),ve);return E.isGeneratorFunction(Y)?ye:ye.next().then(function(ke){return ke.done?ke.value:ye.next()})},De(Oe),se(Oe,ue,"Generator"),se(Oe,de,function(){return this}),se(Oe,"toString",function(){return"[object Generator]"}),E.keys=function(te){var Y=[];for(var ie in te)Y.push(ie);return Y.reverse(),function ce(){for(;Y.length;){var ve=Y.pop();if(ve in te)return ce.value=ve,ce.done=!1,ce}return ce.done=!0,ce}},E.values=Re,Me.prototype={constructor:Me,reset:function(Y){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Le),!Y)for(var ie in this)ie.charAt(0)==="t"&&Q.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var Y=this.tryEntries[0].completion;if(Y.type==="throw")throw Y.arg;return this.rval},dispatchException:function(Y){if(this.done)throw Y;var ie=this;function ce(he,Ce){return ke.type="throw",ke.arg=Y,ie.next=he,Ce&&(ie.method="next",ie.arg=void 0),!!Ce}for(var ve=this.tryEntries.length-1;ve>=0;--ve){var ye=this.tryEntries[ve],ke=ye.completion;if(ye.tryLoc==="root")return ce("end");if(ye.tryLoc<=this.prev){var Se=Q.call(ye,"catchLoc"),Ie=Q.call(ye,"finallyLoc");if(Se&&Ie){if(this.prev<ye.catchLoc)return ce(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return ce(ye.finallyLoc)}else if(Se){if(this.prev<ye.catchLoc)return ce(ye.catchLoc,!0)}else{if(!Ie)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return ce(ye.finallyLoc)}}}},abrupt:function(Y,ie){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var ve=this.tryEntries[ce];if(ve.tryLoc<=this.prev&&Q.call(ve,"finallyLoc")&&this.prev<ve.finallyLoc){var ye=ve;break}}ye&&(Y==="break"||Y==="continue")&&ye.tryLoc<=ie&&ie<=ye.finallyLoc&&(ye=null);var ke=ye?ye.completion:{};return ke.type=Y,ke.arg=ie,ye?(this.method="next",this.next=ye.finallyLoc,fe):this.complete(ke)},complete:function(Y,ie){if(Y.type==="throw")throw Y.arg;return Y.type==="break"||Y.type==="continue"?this.next=Y.arg:Y.type==="return"?(this.rval=this.arg=Y.arg,this.method="return",this.next="end"):Y.type==="normal"&&ie&&(this.next=ie),fe},finish:function(Y){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.finallyLoc===Y)return this.complete(ce.completion,ce.afterLoc),Le(ce),fe}},catch:function(Y){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ce=this.tryEntries[ie];if(ce.tryLoc===Y){var ve=ce.completion;if(ve.type==="throw"){var ye=ve.arg;Le(ce)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function(Y,ie,ce){return this.delegate={iterator:Re(Y),resultName:ie,nextLoc:ce},this.method==="next"&&(this.arg=void 0),fe}},E}function h(E,G,Q,re,de,ge,ue){try{var se=E[ge](ue),me=se.value}catch(pe){Q(pe);return}se.done?G(me):Promise.resolve(me).then(re,de)}function _(E){return function(){var G=this,Q=arguments;return new Promise(function(re,de){var ge=E.apply(G,Q);function ue(me){h(ge,re,de,ue,se,"next",me)}function se(me){h(ge,re,de,ue,se,"throw",me)}ue(void 0)})}}function u(E,G){return a(E)||o(E,G)||t(E,G)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(E,G){if(!!E){if(typeof E=="string")return n(E,G);var Q=Object.prototype.toString.call(E).slice(8,-1);if(Q==="Object"&&E.constructor&&(Q=E.constructor.name),Q==="Map"||Q==="Set")return Array.from(E);if(Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q))return n(E,G)}}function n(E,G){(G==null||G>E.length)&&(G=E.length);for(var Q=0,re=new Array(G);Q<G;Q++)re[Q]=E[Q];return re}function o(E,G){var Q=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(Q!=null){var re=[],de=!0,ge=!1,ue,se;try{for(Q=Q.call(E);!(de=(ue=Q.next()).done)&&(re.push(ue.value),!(G&&re.length===G));de=!0);}catch(me){ge=!0,se=me}finally{try{!de&&Q.return!=null&&Q.return()}finally{if(ge)throw se}}return re}}function a(E){if(Array.isArray(E))return E}var v=function(G){var Q=Object(A.useState)(!1),re=u(Q,2),de=re[0],ge=re[1],ue=Object(f.a)(G),se=Object(A.useCallback)(_(s().mark(function me(){var pe,fe=arguments;return s().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return ge(!0),q.next=3,ue.apply(void 0,fe);case 3:return pe=q.sent,ge(!1),q.abrupt("return",pe);case 6:case"end":return q.stop()}},me)})),[G]);return[de,se]},c=e("./node_modules/react/jsx-runtime.js");function l(E,G){return k(E)||y(E,G)||m(E,G)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(E,G){if(!!E){if(typeof E=="string")return i(E,G);var Q=Object.prototype.toString.call(E).slice(8,-1);if(Q==="Object"&&E.constructor&&(Q=E.constructor.name),Q==="Map"||Q==="Set")return Array.from(E);if(Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q))return i(E,G)}}function i(E,G){(G==null||G>E.length)&&(G=E.length);for(var Q=0,re=new Array(G);Q<G;Q++)re[Q]=E[Q];return re}function y(E,G){var Q=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(Q!=null){var re=[],de=!0,ge=!1,ue,se;try{for(Q=Q.call(E);!(de=(ue=Q.next()).done)&&(re.push(ue.value),!(G&&re.length===G));de=!0);}catch(me){ge=!0,se=me}finally{try{!de&&Q.return!=null&&Q.return()}finally{if(ge)throw se}}return re}}function k(E){if(Array.isArray(E))return E}var j=`
    
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
`,g={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},C=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},S=function(G){return new Promise(function(Q){return setTimeout(Q,G)})},U=function(){var G=v(S),Q=l(G,2),re=Q[0],de=Q[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return de(2e3)},children:"Start"})}),Object(c.jsxs)("div",{children:["Loading: ",""+re]})]})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Z=e("./node_modules/react/jsx-runtime.js"),N=e.n(Z),ee=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},ee=`import React from "react";
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
`,$={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var P=function(){var K=Object(z.a)("(min-width: 900px)");return Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{children:["(min-width: 900px) : ",K?"matches":"does not match"]})})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return t});var V=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.function.name.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T);function D(n,o){return _(n)||h(n,o)||f(n,o)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,o){if(!!n){if(typeof n=="string")return s(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(n,o)}}function s(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function h(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],c=!0,l=!1,d,m;try{for(a=a.call(n);!(c=(d=a.next()).done)&&(v.push(d.value),!(o&&v.length===o));c=!0);}catch(i){l=!0,m=i}finally{try{!c&&a.return!=null&&a.return()}finally{if(l)throw m}}return v}}function _(n){if(Array.isArray(n))return n}function u(n,o){try{return n.addEventListener("change",o),function(){return n.removeEventListener("change",o)}}catch(a){return n.addListener(o),function(){return n.removeListener(o)}}}function r(n){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(n).matches:!1}var t=function(o){var a=Object(T.useState)(r(o)),v=D(a,2),c=v[0],l=v[1],d=Object(T.useRef)();return Object(T.useEffect)(function(){if("matchMedia"in window)return d.current=window.matchMedia(o),l(d.current.matches),u(d.current,function(m){return l(m.matches)})},[o]),c}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return r});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),A=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),R=e("./node_modules/core-js/modules/es.array.for-each.js"),I=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),x=function(n,o){typeof n=="function"?n(o):typeof n=="object"&&n!==null&&"current"in n&&(n.current=o)},B=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return Object(L.useCallback)(function(v){o.forEach(function(c){return x(c,v)})},o)},p=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return function(v){o.forEach(function(c){return x(c,v)})}},M=e("./node_modules/react/jsx-runtime.js");function T(t,n){return s(t)||f(t,n)||D(t,n)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,n){if(!!t){if(typeof t=="string")return b(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(t,n)}}function b(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=t[o];return a}function f(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a=[],v=!0,c=!1,l,d;try{for(o=o.call(t);!(v=(l=o.next()).done)&&(a.push(l.value),!(n&&a.length===n));v=!0);}catch(m){c=!0,d=m}finally{try{!v&&o.return!=null&&o.return()}finally{if(c)throw d}}return a}}function s(t){if(Array.isArray(t))return t}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},h=`import React, { useEffect } from "react";

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
`,_={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},u=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},r=function(){var n=Object(X.a)(),o=T(n,2),a=o[0],v=o[1],c=Object(J.a)(function(){return alert("click away")}),l=B(v,c),d=Object(A.a)();return Object(L.useEffect)(function(){d()},[]),Object(M.jsx)("div",{children:Object(M.jsx)("div",{ref:l,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return b});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function J(f,s){return x(f)||I(f,s)||X(f,s)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(f,s){if(!!f){if(typeof f=="string")return R(f,s);var h=Object.prototype.toString.call(f).slice(8,-1);if(h==="Object"&&f.constructor&&(h=f.constructor.name),h==="Map"||h==="Set")return Array.from(f);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return R(f,s)}}function R(f,s){(s==null||s>f.length)&&(s=f.length);for(var h=0,_=new Array(s);h<s;h++)_[h]=f[h];return _}function I(f,s){var h=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(h!=null){var _=[],u=!0,r=!1,t,n;try{for(h=h.call(f);!(u=(t=h.next()).done)&&(_.push(t.value),!(s&&_.length===s));u=!0);}catch(o){r=!0,n=o}finally{try{!u&&h.return!=null&&h.return()}finally{if(r)throw n}}return _}}function x(f){if(Array.isArray(f))return f}var B={angle:0,type:"landscape-primary"},p=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:B,h=Object(w.useState)(s),_=J(h,2),u=_[0],r=_[1];return Object(w.useEffect)(function(){var t=window.screen,n=!0,o=function(){if(n){var v=t,c=v.orientation;if(c){var l=c.angle,d=c.type;r({angle:l,type:d})}else window.orientation!==void 0?r({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):r(s)}};return window.addEventListener("orientationchange",o),o(),function(){n=!1,window.addEventListener("orientationchange",o)}},[]),u},M=e("./node_modules/react/jsx-runtime.js"),T=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},T=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},D=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},b=function(){var s=p();return Object(M.jsx)("div",{children:JSON.stringify(s)})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return P});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),ne=function(){var K=window.navigator,L=K.userAgent,J=K.platform,A=["Macintosh","MacIntel","MacPPC","Mac68K"],X=["Win32","Win64","Windows","WinCE"],R=["iPhone","iPad","iPod"],I="unknown";return A.indexOf(J)!==-1?I="macos":R.indexOf(J)!==-1?I="ios":X.indexOf(J)!==-1?I="windows":/Android/.test(L)?I="android":!I&&/Linux/.test(J)&&(I="linux"),I},z=function(){return typeof window!="undefined"?ne():"unknown"},Z=e("./node_modules/react/jsx-runtime.js"),N=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},N=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},$=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},P=function(){var K=z();return Object(Z.jsx)("div",{children:K})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},P.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return D});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=function(f){Object(L.useEffect)(function(){if(!!f){var s=function(_){_=_||window.event;var u=_.relatedTarget||_.toElement;(!u||u.nodeName==="HTML")&&f()};return document.addEventListener("mouseout",s),function(){document.removeEventListener("mouseout",s)}}},[])},A=e("./node_modules/react/jsx-runtime.js");function X(b,f){return p(b)||B(b,f)||I(b,f)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(b,f){if(!!b){if(typeof b=="string")return x(b,f);var s=Object.prototype.toString.call(b).slice(8,-1);if(s==="Object"&&b.constructor&&(s=b.constructor.name),s==="Map"||s==="Set")return Array.from(b);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return x(b,f)}}function x(b,f){(f==null||f>b.length)&&(f=b.length);for(var s=0,h=new Array(f);s<f;s++)h[s]=b[s];return h}function B(b,f){var s=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(s!=null){var h=[],_=!0,u=!1,r,t;try{for(s=s.call(b);!(_=(r=s.next()).done)&&(h.push(r.value),!(f&&h.length===f));_=!0);}catch(n){u=!0,t=n}finally{try{!_&&s.return!=null&&s.return()}finally{if(u)throw t}}return h}}function p(b){if(Array.isArray(b))return b}var M=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},M=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,T={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},H=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},D=function(){var f=Object(L.useState)(0),s=X(f,2),h=s[0],_=s[1];return J(function(){return _(function(u){return u+1})}),Object(A.jsxs)("div",{children:["Page leave count: ",h]})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return _});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),ne=e("./node_modules/core-js/modules/es.array.concat.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js");function A(u){return I(u)||R(u)||p(u)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function I(u){if(Array.isArray(u))return M(u)}function x(u,r){return H(u)||T(u,r)||p(u,r)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(u,r){if(!!u){if(typeof u=="string")return M(u,r);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(u,r)}}function M(u,r){(r==null||r>u.length)&&(r=u.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=u[t];return n}function T(u,r){var t=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,v,c;try{for(t=t.call(u);!(o=(v=t.next()).done)&&(n.push(v.value),!(r&&n.length===r));o=!0);}catch(l){a=!0,c=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw c}}return n}}function H(u){if(Array.isArray(u))return u}var D=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=Object(w.useState)({state:t.slice(0,r),queue:t.slice(r)}),o=x(n,2),a=o[0],v=a.state,c=a.queue,l=o[1],d=function(){for(var k=arguments.length,j=new Array(k),g=0;g<k;g++)j[g]=arguments[g];return l(function(C){var S=[].concat(A(C.state),A(C.queue),j);return{state:S.slice(0,r),queue:S.slice(r)}})},m=function(k){return l(function(j){var g=k([].concat(A(j.state),A(j.queue)));return{state:g.slice(0,r),queue:g.slice(r)}})},i=function(){return l(function(k){return{state:k.state,queue:[]}})};return{state:v,queue:c,add:d,update:m,cleanQueue:i}},b=e("./node_modules/react/jsx-runtime.js"),f=`
    
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},h=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},_=function(){var r=D(10,[1,2,3]),t=r.state,n=r.queue,o=r.add,a=r.update,v=r.cleanQueue;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["state: ",t]}),Object(b.jsxs)("div",{children:["queue: ",n]}),Object(b.jsx)("button",{onClick:function(){return o(5)},children:"add 5"}),Object(b.jsx)("button",{onClick:function(){return a(function(l){return l})},children:"update"}),Object(b.jsx)("button",{onClick:v,children:"clear"})]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return c});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.function.name.js"),M=e.n(p),T=e("./node_modules/core-js/modules/es.array.from.js"),H=e.n(T),D=e("./node_modules/react/index.js"),b=e.n(D),f=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),s=e("./node_modules/react/jsx-runtime.js"),h=e.n(s);function _(l,d){return o(l)||n(l,d)||r(l,d)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,d){if(!!l){if(typeof l=="string")return t(l,d);var m=Object.prototype.toString.call(l).slice(8,-1);if(m==="Object"&&l.constructor&&(m=l.constructor.name),m==="Map"||m==="Set")return Array.from(l);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(l,d)}}function t(l,d){(d==null||d>l.length)&&(d=l.length);for(var m=0,i=new Array(d);m<d;m++)i[m]=l[m];return i}function n(l,d){var m=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(m!=null){var i=[],y=!0,k=!1,j,g;try{for(m=m.call(l);!(y=(j=m.next()).done)&&(i.push(j.value),!(d&&i.length===d));y=!0);}catch(C){k=!0,g=C}finally{try{!y&&m.return!=null&&m.return()}finally{if(k)throw g}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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
`,v={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var c=function(){var d=Object(f.a)({width:0,height:0}),m=_(d,2),i=m[0],y=m[1];return Object(D.useEffect)(function(){var k=function(){y({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(s.jsx)("pre",{children:JSON.stringify(i,null,2)})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return u});var V=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.function.name.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.array.from.js"),M=e.n(p),T=e("./node_modules/react/index.js"),H=e.n(T);function D(r,t){return _(r)||h(r,t)||f(r,t)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(r,t){if(!!r){if(typeof r=="string")return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}}function s(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function h(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function _(r){if(Array.isArray(r))return r}var u=function(t){var n=Object(T.useRef)(0),o=Object(T.useState)(t),a=D(o,2),v=a[0],c=a[1],l=Object(T.useCallback)(function(d){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){c(d)})},[]);return[v,l]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return o});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),A=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function X(a,v){return p(a)||B(a,v)||I(a,v)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(a,v){if(!!a){if(typeof a=="string")return x(a,v);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return x(a,v)}}function x(a,v){(v==null||v>a.length)&&(v=a.length);for(var c=0,l=new Array(v);c<v;c++)l[c]=a[c];return l}function B(a,v){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var l=[],d=!0,m=!1,i,y;try{for(c=c.call(a);!(d=(i=c.next()).done)&&(l.push(i.value),!(v&&l.length===v));d=!0);}catch(k){m=!0,y=k}finally{try{!d&&c.return!=null&&c.return()}finally{if(m)throw y}}return l}}function p(a){if(Array.isArray(a))return a}var M={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},T=typeof window!="undefined",H=function(){var v=Object(L.useRef)(null),c=Object(A.a)(M),l=X(c,2),d=l[0],m=l[1],i=Object(L.useMemo)(function(){return T?new ResizeObserver(function(y){var k=y[0];k&&m(k.contentRect)}):null},[]);return Object(L.useEffect)(function(){return v.current&&i.observe(v.current),function(){i.disconnect()}},[v.current]),[v,d]},D=e("./node_modules/react/jsx-runtime.js");function b(a,v){return u(a)||_(a,v)||s(a,v)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(a,v){if(!!a){if(typeof a=="string")return h(a,v);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return h(a,v)}}function h(a,v){(v==null||v>a.length)&&(v=a.length);for(var c=0,l=new Array(v);c<v;c++)l[c]=a[c];return l}function _(a,v){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var l=[],d=!0,m=!1,i,y;try{for(c=c.call(a);!(d=(i=c.next()).done)&&(l.push(i.value),!(v&&l.length===v));d=!0);}catch(k){m=!0,y=k}finally{try{!d&&c.return!=null&&c.return()}finally{if(m)throw y}}return l}}function u(a){if(Array.isArray(a))return a}var r=`
    
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
`,t={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},n=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},o=function(){var v=H(),c=b(v,2),l=c[0],d=c[1],m=Object(J.a)();return Object(L.useEffect)(function(){m()},[]),Object(D.jsxs)("div",{children:[Object(D.jsx)("textarea",{ref:l,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(D.jsx)("div",{children:JSON.stringify(d)})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return v});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.parse-int.js");function A(){var c=document.createElement("style");return c.type="text/css",c.setAttribute("tm-scroll-lock",""),c}function X(c){var l=document.head||document.getElementsByTagName("head")[0];l.appendChild(c)}function R(c,l){c.styleSheet?c.styleSheet.cssText=l:c.appendChild(document.createTextNode(l))}function I(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var c=parseInt(window.getComputedStyle(document.body).paddingRight,10),l=window.innerWidth-document.documentElement.clientWidth;return c+l}var x=function(l){var d=l.disableBodyPadding,m=d?null:I(),i=`body {
        --removed-scroll-width: `+m+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(m?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return i};function B(c,l){return D(c)||H(c,l)||M(c,l)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(c,l){if(!!c){if(typeof c=="string")return T(c,l);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return T(c,l)}}function T(c,l){(l==null||l>c.length)&&(l=c.length);for(var d=0,m=new Array(l);d<l;d++)m[d]=c[d];return m}function H(c,l){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var m=[],i=!0,y=!1,k,j;try{for(d=d.call(c);!(i=(k=d.next()).done)&&(m.push(k.value),!(l&&m.length===l));i=!0);}catch(g){y=!0,j=g}finally{try{!i&&d.return!=null&&d.return()}finally{if(y)throw j}}return m}}function D(c){if(Array.isArray(c))return c}var b=function(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},m=Object(L.useState)(l||!1),i=B(m,2),y=i[0],k=i[1],j=Object(L.useRef)(0),g=d.disableBodyPadding,C=Object(L.useRef)(null),S=function(){j.current=window.scrollY;var G=x({disableBodyPadding:g}),Q=A();R(Q,G),X(Q),C.current=Q},U=function(){!(C!=null&&C.current)||(C.current.parentNode.removeChild(C.current),C.current=null)};return Object(L.useEffect)(function(){return y?S():U(),U},[y]),Object(L.useEffect)(function(){l!==void 0&&k(l)},[l]),Object(L.useEffect)(function(){l===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&k(!0)},[k]),[y,k]},f=e("./node_modules/react/jsx-runtime.js");function s(c,l){return t(c)||r(c,l)||_(c,l)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(c,l){if(!!c){if(typeof c=="string")return u(c,l);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return u(c,l)}}function u(c,l){(l==null||l>c.length)&&(l=c.length);for(var d=0,m=new Array(l);d<l;d++)m[d]=c[d];return m}function r(c,l){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var m=[],i=!0,y=!1,k,j;try{for(d=d.call(c);!(i=(k=d.next()).done)&&(m.push(k.value),!(l&&m.length===l));i=!0);}catch(g){y=!0,j=g}finally{try{!i&&d.return!=null&&d.return()}finally{if(y)throw j}}return m}}function t(c){if(Array.isArray(c))return c}var n=`
    
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
`,o={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},v=function(){var l=Object(L.useState)(!1),d=s(l,2),m=d[0],i=d[1],y=b(m);return Object(f.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(f.jsx)("button",{onClick:function(){return i(function(j){return!j})},children:m?"Unlock":"Lock"}),y?"Scroll locked":"Scrollable"]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
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
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return b});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function A(f,s){return B(f)||x(f,s)||R(f,s)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(f,s){if(!!f){if(typeof f=="string")return I(f,s);var h=Object.prototype.toString.call(f).slice(8,-1);if(h==="Object"&&f.constructor&&(h=f.constructor.name),h==="Map"||h==="Set")return Array.from(f);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return I(f,s)}}function I(f,s){(s==null||s>f.length)&&(s=f.length);for(var h=0,_=new Array(s);h<s;h++)_[h]=f[h];return _}function x(f,s){var h=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(h!=null){var _=[],u=!0,r=!1,t,n;try{for(h=h.call(f);!(u=(t=h.next()).done)&&(_.push(t.value),!(s&&_.length===s));u=!0);}catch(o){r=!0,n=o}finally{try{!u&&h.return!=null&&h.return()}finally{if(r)throw n}}return _}}function B(f){if(Array.isArray(f))return f}var p=function(s,h){var _=Object(J.a)(s,h),u=A(_,2),r=u[0],t=u[1];return Object(w.useEffect)(function(){return r(),t},[r,t]),t},M=e("./node_modules/react/jsx-runtime.js"),T=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},T=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},D=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},b=function(){var s=p(function(){alert("fire!")},2e3);return Object(M.jsx)("div",{children:Object(M.jsx)("button",{onClick:s,children:"Clear"})})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return c});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.function.name.js"),M=e.n(p),T=e("./node_modules/core-js/modules/es.array.from.js"),H=e.n(T),D=e("./node_modules/react/index.js"),b=e.n(D),f=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),s=e("./node_modules/react/jsx-runtime.js"),h=e.n(s);function _(l,d){return o(l)||n(l,d)||r(l,d)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,d){if(!!l){if(typeof l=="string")return t(l,d);var m=Object.prototype.toString.call(l).slice(8,-1);if(m==="Object"&&l.constructor&&(m=l.constructor.name),m==="Map"||m==="Set")return Array.from(l);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(l,d)}}function t(l,d){(d==null||d>l.length)&&(d=l.length);for(var m=0,i=new Array(d);m<d;m++)i[m]=l[m];return i}function n(l,d){var m=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(m!=null){var i=[],y=!0,k=!1,j,g;try{for(m=m.call(l);!(y=(j=m.next()).done)&&(i.push(j.value),!(d&&i.length===d));y=!0);}catch(C){k=!0,g=C}finally{try{!y&&m.return!=null&&m.return()}finally{if(k)throw g}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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
`,v={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var c=function(){var d=Object(f.a)(function(){alert("fire!")},2e3),m=_(d,2),i=m[0],y=m[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:i,children:"Run"}),Object(s.jsx)("button",{onClick:y,children:"Clear"})]})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return Z});var V=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(V),W=e("./node_modules/react/index.js"),ne=e.n(W),z=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(ee,$){var P=Object(W.useRef)(),F=Object(z.a)(ee),K=Object(W.useCallback)(function(){P.current&&clearTimeout(P.current),P.current=setTimeout(function(){F()},$)},[$]),L=Object(W.useCallback)(function(){P.current&&clearTimeout(P.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[K,L]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return u});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function J(r,t){return x(r)||I(r,t)||X(r,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(r,t){if(!!r){if(typeof r=="string")return R(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(r,t)}}function R(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function I(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function x(r){if(Array.isArray(r))return r}var B=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=Object(L.useState)(t),o=J(n,2),a=o[0],v=o[1],c=Object(L.useCallback)(function(l){return v(function(d){return typeof l=="boolean"?l:!d})},[]);return[a,c]},p=e("./node_modules/react/jsx-runtime.js");function M(r,t){return f(r)||b(r,t)||H(r,t)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(r,t){if(!!r){if(typeof r=="string")return D(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(r,t)}}function D(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function b(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o=[],a=!0,v=!1,c,l;try{for(n=n.call(r);!(a=(c=n.next()).done)&&(o.push(c.value),!(t&&o.length===t));a=!0);}catch(d){v=!0,l=d}finally{try{!a&&n.return!=null&&n.return()}finally{if(v)throw l}}return o}}function f(r){if(Array.isArray(r))return r}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},s=`import React from "react";
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
`,h={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},_=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},u=function(){var t=B(),n=M(t,2),o=n[0],a=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["current state: ",""+o]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(p.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(p.jsx)("button",{onClick:a,children:"toggle"})]})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return t});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),ne=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function A(n,o){return B(n)||x(n,o)||R(n,o)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(n,o){if(!!n){if(typeof n=="string")return I(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(n,o)}}function I(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function x(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],c=!0,l=!1,d,m;try{for(a=a.call(n);!(c=(d=a.next()).done)&&(v.push(d.value),!(o&&v.length===o));c=!0);}catch(i){l=!0,m=i}finally{try{!c&&a.return!=null&&a.return()}finally{if(l)throw m}}return v}}function B(n){if(Array.isArray(n))return n}var p=function(o){var a=o.value,v=o.defaultValue,c=o.finalValue,l=o.rule,d=o.onChange,m=o.onValueUpdate,i=l(a),y=Object(L.useRef)("initial"),k=l(v)?v:c,j=Object(L.useState)(k),g=A(j,2),C=g[0],S=g[1],U=i?a:C;!i&&y.current==="controlled"&&(U=c),y.current=i?"controlled":"uncontrolled";var E=y.current,G=function(re){typeof d=="function"&&d(re),E==="uncontrolled"&&S(re)};return Object(L.useEffect)(function(){E==="uncontrolled"&&S(U),typeof m=="function"&&m(U)},[E,U]),[U,G,y.current]},M=e("./node_modules/react/jsx-runtime.js");function T(n,o){return s(n)||f(n,o)||D(n,o)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,o){if(!!n){if(typeof n=="string")return b(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,o)}}function b(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,v=new Array(o);a<o;a++)v[a]=n[a];return v}function f(n,o){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var v=[],c=!0,l=!1,d,m;try{for(a=a.call(n);!(c=(d=a.next()).done)&&(v.push(d.value),!(o&&v.length===o));c=!0);}catch(i){l=!0,m=i}finally{try{!c&&a.return!=null&&a.return()}finally{if(l)throw m}}return v}}function s(n){if(Array.isArray(n))return n}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},h=`import React, { useState } from "react";

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
`,_={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},u=O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},r=function(o){var a=o.label,v=o.value,c=o.defaultValue,l=o.onChange,d=Object(J.a)(),m=p({value:v,defaultValue:c,finalValue:null,onChange:l,rule:function(g){return typeof g=="string"}}),i=T(m,2),y=i[0],k=i[1];return Object(M.jsxs)("div",{style:{padding:"1rem"},children:[Object(M.jsx)("label",{htmlFor:d,children:a}),Object(M.jsx)("br",{}),Object(M.jsx)("input",{id:d,type:"text",value:y,onChange:function(g){return k(g.target.value)}})]})};r.displayName="CustomInput";var t=function(){var o=Object(L.useState)("controlled"),a=T(o,2),v=a[0],c=a[1];return Object(M.jsxs)("div",{style:{padding:20},children:[Object(M.jsx)(r,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(M.jsx)(r,{label:"Controlled",value:v,onChange:c}),Object(M.jsx)(r,{label:"Controlled (fixed value)",value:"fixed",onChange:c})]})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
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
}`}},t.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,O,e){"use strict";e.r(O),e.d(O,"Default",function(){return c});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(V),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e.n(W),z=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(z),N=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e.n(N),$=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e.n($),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(L),A=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(A),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e.n(R),x=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(x),p=e("./node_modules/core-js/modules/es.function.name.js"),M=e.n(p),T=e("./node_modules/core-js/modules/es.array.from.js"),H=e.n(T),D=e("./node_modules/react/index.js"),b=e.n(D),f=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),s=e("./node_modules/react/jsx-runtime.js"),h=e.n(s);function _(l,d){return o(l)||n(l,d)||r(l,d)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,d){if(!!l){if(typeof l=="string")return t(l,d);var m=Object.prototype.toString.call(l).slice(8,-1);if(m==="Object"&&l.constructor&&(m=l.constructor.name),m==="Map"||m==="Set")return Array.from(l);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(l,d)}}function t(l,d){(d==null||d>l.length)&&(d=l.length);for(var m=0,i=new Array(d);m<d;m++)i[m]=l[m];return i}function n(l,d){var m=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(m!=null){var i=[],y=!0,k=!1,j,g;try{for(m=m.call(l);!(y=(j=m.next()).done)&&(i.push(j.value),!(d&&i.length===d));y=!0);}catch(C){k=!0,g=C}finally{try{!y&&m.return!=null&&m.return()}finally{if(k)throw g}}return i}}function o(l){if(Array.isArray(l))return l}var a=`
    
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
`,v={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};O.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var c=function(){var d=Object(D.useState)(""),m=_(d,2),i=m[0],y=m[1];return Object(D.useEffect)(function(){console.log("useEffect:",i)},[i]),Object(f.a)(function(){console.log("useUpdateEffect:",i)},[i]),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",onChange:function(j){return y(j.target.value)}})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return W});var V=e("./node_modules/react/index.js"),w=e.n(V),W=function(z,Z){var N=Object(V.useRef)(!0);Object(V.useEffect)(function(){if(!N.current)return z();N.current=!1},Z)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,O,e){"use strict";e.d(O,"c",function(){return L}),e.d(O,"d",function(){return J}),e.d(O,"b",function(){return A}),e.d(O,"a",function(){return R});var V=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ne=e("./node_modules/react/jsx-runtime.js"),z=function(x){var B=x.styles,p=L();return Object(ne.jsx)(W.a,{styles:Object(W.b)(B(p))})};z.displayName="Global";var Z={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},N=function(){return Object(ne.jsx)(W.a,{styles:Z})};N.displayName="NormalizeCSS";var ee=e("./node_modules/core-js/modules/es.array.reduce.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),P=e("./node_modules/core-js/modules/es.object.assign.js");function F(I,x){return x?Object.keys(I).reduce(function(B,p){if(p==="headings"&&x.headings){var M=x.headings?Object.keys(I.headings).reduce(function(T,H){return T[H]=Object.assign({},I.headings[H],x.headings[H]),T},{}):I.headings;return Object.assign({},B,{headings:Object.assign({},I.headings,x.headings,M)})}return B[p]=typeof x[p]=="object"?Object.assign({},I[p],x[p]):x[p]||I[p],B},{}):I}var K=Object(V.createContext)({theme:w.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function L(){var I;return((I=Object(V.useContext)(K))===null||I===void 0?void 0:I.theme)||w.a}function J(){var I;return((I=Object(V.useContext)(K))===null||I===void 0?void 0:I.styles)||{}}function A(){var I;return((I=Object(V.useContext)(K))===null||I===void 0?void 0:I.emotionOptions)||{key:"co",prepend:!0}}var X=function(){return Object(ne.jsx)(z,{styles:function(B){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:B.fontFamily,backgroundColor:B.colorScheme==="dark"?B.colors.black:B.colors.white,color:B.colorScheme==="dark"?B.colors.white:B.colors.black,lineHeight:B.lineHeight,fontSizes:B.fontSizes.medium}}}})};X.displayName="GlobalStyles";var R=function(x){var B=x.theme,p=x.styles,M=p===void 0?{}:p,T=x.emotionOptions,H=x.withNormalizeCSS,D=H===void 0?!1:H,b=x.withGlobalStyles,f=b===void 0?!1:b,s=x.children;return Object(ne.jsxs)(K.Provider,{value:{theme:F(w.a,B),styles:M,emotionOptions:T},children:[D&&Object(ne.jsx)(N,{}),f&&Object(ne.jsx)(X,{}),s]})};R.displayName="TmProvider",R.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(oe,O,e){"use strict";e.d(O,"b",function(){return me}),e.d(O,"a",function(){return fe});var V=e("./node_modules/core-js/modules/es.object.keys.js"),w={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={dark:[w.navy1,w.navy1,w.navy2],white:[w.white,w.white,w.gray6],green:[w.green2,w.green2,w.green1]},ne={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},z={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Z={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},N={small:2,medium:4,large:8,round:100,circular:"50%"},ee={xsmall:4,small:8,medium:16,large:24,xlarge:40},$={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},P={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},F={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},K={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},L=e("./node_modules/core-js/modules/es.object.assign.js"),J=function(q){for(var ae="",_e=1;_e<q.length-1;_e+=1)ae+=q[_e]+" "+_e/(q.length-1)*100+"%, ";return q[0]+" 0%, "+ae+q[q.length-1]+" 100%"},A=function(q){for(var ae=arguments.length,_e=new Array(ae>1?ae-1:0),je=1;je<ae;je++)_e[je-1]=arguments[je];return"linear-gradient("+q+"deg, "+J(_e)+")"},X=function(){for(var q=arguments.length,ae=new Array(q),_e=0;_e<q;_e++)ae[_e]=arguments[_e];return"radial-gradient(circle, "+J(ae)+")"},R=function(q){return typeof q.size=="number"?q.size:q.sizes[q.size]||q.size||q.sizes.medium},I=function(q){return function(ae){return"@media (min-width: "+(R({size:ae,sizes:q.breakpoints})+1)+"px)"}},x=function(q){return function(ae){return"@media (max-width: "+R({size:ae,sizes:q.breakpoints})+"px)"}},B=e("./node_modules/core-js/modules/es.string.replace.js"),p=e("./node_modules/core-js/modules/es.regexp.exec.js"),M=e("./node_modules/core-js/modules/es.number.is-nan.js"),T=e("./node_modules/core-js/modules/es.number.constructor.js"),H=e("./node_modules/core-js/modules/es.parse-int.js"),D=e("./node_modules/core-js/modules/es.array.map.js"),b=e("./node_modules/core-js/modules/es.string.split.js"),f=e("./node_modules/core-js/modules/es.string.starts-with.js"),s=e("./node_modules/core-js/modules/es.array.is-array.js"),h=e("./node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/core-js/modules/es.symbol.description.js"),u=e("./node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/core-js/modules/es.symbol.iterator.js"),t=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e("./node_modules/core-js/modules/es.array.iterator.js"),o=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),a=e("./node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function l(le,q){return k(le)||y(le,q)||m(le,q)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(le,q){if(!!le){if(typeof le=="string")return i(le,q);var ae=Object.prototype.toString.call(le).slice(8,-1);if(ae==="Object"&&le.constructor&&(ae=le.constructor.name),ae==="Map"||ae==="Set")return Array.from(le);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return i(le,q)}}function i(le,q){(q==null||q>le.length)&&(q=le.length);for(var ae=0,_e=new Array(q);ae<q;ae++)_e[ae]=le[ae];return _e}function y(le,q){var ae=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ae!=null){var _e=[],je=!0,be=!1,Oe,De;try{for(ae=ae.call(le);!(je=(Oe=ae.next()).done)&&(_e.push(Oe.value),!(q&&_e.length===q));je=!0);}catch(Ee){be=!0,De=Ee}finally{try{!je&&ae.return!=null&&ae.return()}finally{if(be)throw De}}return _e}}function k(le){if(Array.isArray(le))return le}var j=function(q){var ae=q.replace("#","");return typeof ae=="string"&&ae.length===6&&!Number.isNaN(Number("0x"+ae))},g=function(q){var ae=q.replace("#",""),_e=parseInt(ae,16),je=_e>>16&255,be=_e>>8&255,Oe=_e&255;return{r:je,g:be,b:Oe,a:1}},C=function(q){var ae=q.replace(/[^0-9,.]/g,"").split(",").map(Number),_e=l(ae,4),je=_e[0],be=_e[1],Oe=_e[2],De=_e[3];return{r:je,g:be,b:Oe,a:De||1}},S=function(q){return j(q)?g(q):q.startsWith("rgb")?C(q):{r:0,g:0,b:0,a:1}},U=function(q,ae){if(typeof q!="string"||ae>1||ae<0)return"rgba(0, 0, 0, 1)";var _e=S(q),je=_e.r,be=_e.g,Oe=_e.b;return"rgba("+je+", "+be+", "+Oe+", "+ae+")"},E=function(q,ae){var _e=S(q),je=_e.r,be=_e.g,Oe=_e.b,De=_e.a,Ee=1-ae,Te=function(Le){return Math.round(Le*Ee)};return"rgba("+Te(je)+", "+Te(be)+", "+Te(Oe)+", "+De+")"},G=function(q,ae){var _e=S(q),je=_e.r,be=_e.g,Oe=_e.b,De=_e.a,Ee=function(Ae){return Math.round(Ae+(255-Ae)*ae)};return"rgba("+Ee(je)+", "+Ee(be)+", "+Ee(Oe)+", "+De+")"},Q=function(q){return q*8},re={linearGradient:A,radialGradient:X,smallerThan:x,largerThan:I,rgba:U,size:R,darken:E,lighten:G,spacing:Q},de=function(q){return Object.assign({},q,{fn:{largerThan:re.largerThan(q),smallerThan:re.smallerThan(q),radialGradient:re.radialGradient,linearGradient:re.linearGradient,rgba:re.rgba,size:re.size,lighten:re.lighten,darken:re.darken,spacing:re.spacing}})},ge=Object.keys(W),ue=Object.keys(w),se=["xsmall","small","medium","large","xlarge"],me=function(q){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:q.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:w.black,colors:w,palettes:W,shadows:ne,fontSizes:z,lineHeights:Z,radius:N,spacing:ee,breakpoints:$,headings:P,opacity:F,zIndex:K,extra:{}},fe=de(pe)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return f});var V=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),ne=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/core-js/modules/es.array.for-each.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.array.from.js");function R(s,h){return M(s)||p(s,h)||x(s,h)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(s,h){if(!!s){if(typeof s=="string")return B(s,h);var _=Object.prototype.toString.call(s).slice(8,-1);if(_==="Object"&&s.constructor&&(_=s.constructor.name),_==="Map"||_==="Set")return Array.from(s);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return B(s,h)}}function B(s,h){(h==null||h>s.length)&&(h=s.length);for(var _=0,u=new Array(h);_<h;_++)u[_]=s[_];return u}function p(s,h){var _=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(_!=null){var u=[],r=!0,t=!1,n,o;try{for(_=_.call(s);!(r=(n=_.next()).done)&&(u.push(n.value),!(h&&u.length===h));r=!0);}catch(a){t=!0,o=a}finally{try{!r&&_.return!=null&&_.return()}finally{if(t)throw o}}return u}}function M(s){if(Array.isArray(s))return s}function T(s){var h={};return Object.keys(s).forEach(function(_){var u=R(s[_],2),r=u[0],t=u[1];h[r]=t}),h}var H=e("./node_modules/core-js/modules/es.array.reduce.js");function D(s,h,_){return Object.keys(h).reduce(function(u,r){return u[r]=s(h[r],_?"tm-"+_+"-"+r:null),u},{})}var b=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function f(s){var h=typeof s=="function"?s:function(){return s};function _(u,r){var t=Object(ne.c)(),n=Object(ne.d)()[r==null?void 0:r.name],o=Object(b.a)(),a=o.css,v=o.cx,c=0;function l(j){return c+=1,"tm-ref_"+(j||"")+"_"+c}var d=h(t,u,l),m=typeof(r==null?void 0:r.overrideStyles)=="function"?r==null?void 0:r.overrideStyles(t):(r==null?void 0:r.overrideStyles)||{},i=typeof n=="function"?n(t):n||{},y=typeof(r==null?void 0:r.co)=="function"?r.co(t):r==null?void 0:r.co,k=T(Object.keys(d).map(function(j){var g=v(a(d[j]),a(i[j]),a(m[j]),a(y));return[j,g]}));return{classes:D(v,k,r==null?void 0:r.name),cx:v,theme:t}}return _}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,O,e){"use strict";e.d(O,"a",function(){return k});var V=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/clsx/dist/clsx.m.js"),J=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),A=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),R=e("./node_modules/core-js/modules/es.array.map.js"),I=e("./node_modules/react/index.js");function x(j){return T(j)||M(j)||p(j)||B()}function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(j,g){if(!!j){if(typeof j=="string")return H(j,g);var C=Object.prototype.toString.call(j).slice(8,-1);if(C==="Object"&&j.constructor&&(C=j.constructor.name),C==="Map"||C==="Set")return Array.from(j);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return H(j,g)}}function M(j){if(typeof Symbol!="undefined"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}function T(j){if(Array.isArray(j))return H(j)}function H(j,g){(g==null||g>j.length)&&(g=j.length);for(var C=0,S=new Array(g);C<g;C++)S[C]=j[C];return S}function D(j,g){var C=Object(I.useRef)();return(!C.current||g.length!==C.current.prevDeps.length||C.current.prevDeps.map(function(S,U){return S===g[U]}).indexOf(!1)>=0)&&(C.current={v:j(),prevDeps:x(g)}),C.current.v}var b=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),s=e("./node_modules/react/jsx-runtime.js"),h=function(){var j;function g(C){return j===void 0&&(j=Object(b.a)(C||{key:"co",prepend:!0})),j}return{getCache:g}}(),_=h.getCache,u=Object(I.createContext)(void 0);function r(){var j=Object(f.b)();return Object(I.useContext)(u)||_(j)}function t(j){var g=j.children,C=j.value;return Object(s.jsx)(u.Provider,{value:C,children:g})}t.displayName="CacheProvider";function n(j,g){return l(j)||c(j,g)||a(j,g)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(j,g){if(!!j){if(typeof j=="string")return v(j,g);var C=Object.prototype.toString.call(j).slice(8,-1);if(C==="Object"&&j.constructor&&(C=j.constructor.name),C==="Map"||C==="Set")return Array.from(j);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return v(j,g)}}function v(j,g){(g==null||g>j.length)&&(g=j.length);for(var C=0,S=new Array(g);C<g;C++)S[C]=j[C];return S}function c(j,g){var C=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(C!=null){var S=[],U=!0,E=!1,G,Q;try{for(C=C.call(j);!(U=(G=C.next()).done)&&(S.push(G.value),!(g&&S.length===g));U=!0);}catch(re){E=!0,Q=re}finally{try{!U&&C.return!=null&&C.return()}finally{if(E)throw Q}}return S}}function l(j){if(Array.isArray(j))return j}var d="ref";function m(j){var g;if(j.length!==1)return{args:j,ref:g};var C=n(j,1),S=C[0];if(!(S instanceof Object))return{args:j,ref:g};if(!(d in S))return{args:j,ref:g};g=S[d];var U=Object.assign({},S);return delete U[d],{args:[U],ref:g}}var i=function(){function j(C,S,U){var E=[],G=Object(A.a)(C,E,U);return E.length<2?U:G+S(E)}function g(C){var S=C.cache,U=function(){for(var Q=arguments.length,re=new Array(Q),de=0;de<Q;de++)re[de]=arguments[de];var ge=m(re),ue=ge.ref,se=ge.args,me=Object(J.a)(se,S.registered);return Object(A.b)(S,me,!1),S.key+"-"+me.name+(ue===void 0?"":" "+ue)},E=function(){for(var Q=arguments.length,re=new Array(Q),de=0;de<Q;de++)re[de]=arguments[de];return j(S.registered,U,Object(L.a)(re))};return{css:U,cx:E}}return{cssFactory:g}}(),y=i.cssFactory;function k(){var j=r();return D(function(){return y({cache:j})},[j])}},"./storybook-init-framework-entry.js":function(oe,O,e){"use strict";e.r(O);var V=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,O,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,O){}},[[0,4,5]]]);
