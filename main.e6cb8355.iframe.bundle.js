(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,h,e){"use strict";e.r(h);var B={};e.r(B),e.d(B,"parameters",function(){return a}),e.d(B,"decorators",function(){return n});var re=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.array.filter.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),q=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),J=e("./node_modules/core-js/modules/es.object.define-properties.js"),H=e("./node_modules/core-js/modules/es.object.define-property.js"),z=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),S=e("./node_modules/core-js/modules/es.array.is-array.js"),R=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),T=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/core-js/modules/es.function.name.js"),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e("./node_modules/react/index.js"),L=e("./node_modules/react/jsx-runtime.js");function W(d,v){return O(d)||c(d,v)||f(d,v)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(d,v){if(!!d){if(typeof d=="string")return j(d,v);var b=Object.prototype.toString.call(d).slice(8,-1);if(b==="Object"&&d.constructor&&(b=d.constructor.name),b==="Map"||b==="Set")return Array.from(d);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return j(d,v)}}function j(d,v){(v==null||v>d.length)&&(v=d.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=d[b];return C}function c(d,v){var b=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(b!=null){var C=[],E=!0,p=!1,k,I;try{for(b=b.call(d);!(E=(k=b.next()).done)&&(C.push(k.value),!(v&&C.length===v));E=!0);}catch(D){p=!0,I=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(p)throw I}}return C}}function O(d){if(Array.isArray(d))return d}var l=Object(U.createContext)(null),s=function(){var v=Object(U.useContext)(l);if(!v)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return v},o=function(v){var b=v.colorScheme,C=v.toggleColorScheme,E=v.children,p=Object(U.useState)("init"),k=W(p,2),I=k[0],D=k[1];return Object(U.useEffect)(function(){D("update")},[]),Object(L.jsx)(l.Provider,{value:{colorScheme:b,toggleColorScheme:C},children:E},I)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var r=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",darkMode:{current:"light"}};function m(d){var v=Object(t.useDarkMode)()?"dark":"light";return Object(L.jsx)(o,{colorScheme:v,toggleColorScheme:function(){},children:Object(L.jsx)(r.a,{theme:{colorScheme:v},withGlobalStyles:!0,withNormalizeCSS:!0,children:d.children})})}m.displayName="ThemeWrapper";var n=[function(d){return Object(L.jsx)(m,{children:d()})}];function u(d,v){var b=Object.keys(d);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(d);v&&(C=C.filter(function(E){return Object.getOwnPropertyDescriptor(d,E).enumerable})),b.push.apply(b,C)}return b}function i(d){for(var v=1;v<arguments.length;v++){var b=arguments[v]!=null?arguments[v]:{};v%2?u(Object(b),!0).forEach(function(C){_(d,C,b[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(b)):u(Object(b)).forEach(function(C){Object.defineProperty(d,C,Object.getOwnPropertyDescriptor(b,C))})}return d}function _(d,v,b){return v in d?Object.defineProperty(d,v,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[v]=b,d}Object.keys(B).forEach(function(d){var v=B[d];switch(d){case"args":return Object(z.d)(v);case"argTypes":return Object(z.b)(v);case"decorators":return v.forEach(function(C){return Object(z.f)(C,!1)});case"loaders":return v.forEach(function(C){return Object(z.g)(C,!1)});case"parameters":return Object(z.h)(i({},v),!1);case"argTypesEnhancers":return v.forEach(function(C){return Object(z.c)(C)});case"argsEnhancers":return v.forEach(function(C){return Object(z.e)(C)});case"render":return Object(z.i)(v);case"globals":case"globalTypes":{var b={};return b[d]=v,Object(z.h)(b,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(d+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,h,e){"use strict";(function(B){var re=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,re.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],B,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,h,e){var B={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function re($){var Q=K($);return e(Q)}function K($){if(!e.o(B,$)){var Q=new Error("Cannot find module '"+$+"'");throw Q.code="MODULE_NOT_FOUND",Q}return B[$]}re.keys=function(){return Object.keys(B)},re.resolve=K,oe.exports=re,re.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return c}),e.d(h,"OverrideStyles",function(){return O});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./node_modules/react/index.js"),N=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),Z=e("./node_modules/core-js/modules/es.string.small.js"),J=e("./node_modules/core-js/modules/es.array.reduce.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),S=e("./packages/travelmakers-design-core/src/constants/index.ts"),R=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),X={xsmall:{height:S.a.xsmall,padding:"0 16px"},small:{height:S.a.small,padding:"0 16px"},medium:{height:S.a.medium,padding:"0 24px"},large:{height:S.a.large,padding:"0 24px"},xlarge:{height:S.a.xlarge,padding:"0 30px"}},T=function(s){return{xsmall:{fontWeight:"normal",fontSize:s.fontSizes.xsmall},small:{fontWeight:"normal",fontSize:s.fontSizes.xsmall},medium:{fontWeight:"normal",fontSize:s.fontSizes.small},large:{fontWeight:"bold",fontSize:s.fontSizes.medium},xlarge:{fontWeight:"bold",fontSize:s.fontSizes.xlarge}}},Y=Object.keys(X).reduce(function(l,s){return l[s]=X[s].height,l},{}),P=function(s){return{display:s?"block":"inline-block",width:s?"100%":"auto"}},A=Object(H.a)(function(l,s,o){var r,t,a,m,n,u=s.color,i=s.size,_=s.fullWidth,d=o("loading"),v=o("inner"),b=o("spinner"),C=u||l.primaryColor;return{loading:(r={ref:d,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},r["."+v]={opacity:0},r["."+b]={display:"flex"},r),solid:(t={backgroundColor:l.palettes[C][l.colorScheme==="light"?5:3],color:l.colorScheme==="light"?l.colors.white:l.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:l.palettes[C][l.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:l.palettes[C][l.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},t["&:disabled:not(."+d+")"]={backgroundColor:l.palettes.gray[2],color:Object(R.a)(l.colors.black,l.opacity.opacity3)},t),ghost:(a={backgroundColor:l.colors.transparent,border:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(R.a)(l.palettes[C][l.colorScheme==="light"?0:8],l.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(R.a)(l.palettes[C][l.colorScheme==="light"?1:7],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},a["&:disabled:not(."+d+")"]={color:Object(R.a)(l.palettes[C][1],l.opacity.opacity3),border:"1px solid "+Object(R.a)(l.palettes[C][1],l.opacity.opacity3)},a),"light-solid":(m={backgroundColor:Object(R.a)(l.colorScheme==="light"?l.colors.black:l.colors.white,l.opacity.opacity1),color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(R.a)(l.palettes.dark[l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(R.a)(l.palettes.dark[l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},m["&:disabled:not(."+d+")"]={backgroundColor:Object(R.a)(l.palettes.dark[l.colorScheme==="light"?4:1],l.opacity.opacity1),color:Object(R.a)(l.palettes[C][l.colorScheme==="light"?7:3],l.opacity.opacity3)},m),text:(n={backgroundColor:"transparent",color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(R.a)(l.palettes[C][l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(R.a)(l.palettes[C][l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},n["&:disabled:not(."+d+")"]={color:Object(R.a)(l.palettes[C][l.colorScheme==="light"?7:3],l.opacity.opacity3)},n),root:Object.assign({},X[i],P(_),Object(z.b)(l),T(l)[i],{borderRadius:l.radius.medium,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:v,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:b,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),x=e("./node_modules/react/jsx-runtime.js"),y=["children","component","size","color","variant","fullWidth","type","disabled","leftIcon","rightIcon","loading","spinnerProps","className","co","overrideStyles"];function U(l,s){if(l==null)return{};var o=L(l,s),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(t=0;t<a.length;t++)r=a[t],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(o[r]=l[r]))}return o}function L(l,s){if(l==null)return{};var o={},r=Object.keys(l),t,a;for(a=0;a<r.length;a++)t=r[a],!(s.indexOf(t)>=0)&&(o[t]=l[t]);return o}var W=Object(q.forwardRef)(function(l,s){var o,r=l.children,t=l.component,a=l.size,m=a===void 0?"medium":a,n=l.color,u=l.variant,i=u===void 0?"solid":u,_=l.fullWidth,d=_===void 0?!1:_,v=l.type,b=v===void 0?"button":v,C=l.disabled,E=C===void 0?!1:C,p=l.leftIcon,k=l.rightIcon,I=l.loading,D=I===void 0?!1:I,w=l.spinnerProps,V=l.className,te=l.co,ue=l.overrideStyles,ve=U(l,y),le=Object(Q.c)(),ne=n||le.primaryColor,ce=A({color:n,size:m,fullWidth:d},{overrideStyles:ue,name:"Button"}),_e=ce.classes,ge=ce.cx,ae=Object(x.jsx)(N.a,Object.assign({color:i==="solid"?le.colors.white:le.palettes[ne][6],size:S.a[m]/2},w));return Object(x.jsxs)(M.a,Object.assign({component:t||"button",ref:s,type:b,disabled:E||D,className:ge((o={},o[_e.loading]=D,o),_e.root,_e[i],V),co:te,onTouchStart:function(){}},ve,{children:[Object(x.jsxs)("div",{className:_e.inner,children:[p&&Object(x.jsx)("span",{className:ge(_e.icon,_e.leftIcon),children:p}),Object(x.jsx)("span",{className:_e.label,children:r}),k&&Object(x.jsx)("span",{className:ge(_e.icon,_e.rightIcon),children:k})]}),Object(x.jsx)("div",{className:_e.spinnerWrapper,children:ae})]}))});W.displayName="@travelmakers-design/core/Button";var g=`import { Button } from "../Button";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
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
      options: ["purple", "gray", "red", "blue", "orange", "green", "dark"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: "boolean" },
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
  return <Button {...props}>Button</Button>;
};

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        solid: {
          backgroundColor: "black",
          "&:not(:disabled):hover": {
            backgroundColor: "#222",
          },
          "&:not(:disabled):active": {
            backgroundColor: "#444",
          },
        },
      }}
    >
      Button
    </Button>
  );
};
`,f={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},OverrideStyles:{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}},j=h.default={parameters:{storySource:{source:`import { Button } from "../Button";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
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
      options: ["purple", "gray", "red", "blue", "orange", "green", "dark"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: "boolean" },
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
  return <Button {...props}>Button</Button>;
};

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        solid: {
          backgroundColor: "black",
          "&:not(:disabled):hover": {
            backgroundColor: "#222",
          },
          "&:not(:disabled):active": {
            backgroundColor: "#444",
          },
        },
      }}
    >
      Button
    </Button>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},"override-styles":{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}}}},title:"@travelmakers-design/core/Button",component:W,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green","dark"],control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},c=function(s){return Object(x.jsx)(W,Object.assign({},s,{children:"Button"}))};c.displayName="Default";var O=function(s){return Object(x.jsx)(W,Object.assign({},s,{overrideStyles:{solid:{backgroundColor:"black","&:not(:disabled):hover":{backgroundColor:"#222"},"&:not(:disabled):active":{backgroundColor:"#444"}}},children:"Button"}))};O.displayName="OverrideStyles"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(oe,h,e){"use strict";e.d(h,"a",function(){return x});var B=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),N=e("./packages/travelmakers-design-core/src/constants/index.ts"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/core-js/modules/es.string.small.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),S=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),R={xsmall:{width:N.a.xsmall,height:N.a.xsmall},small:{width:N.a.small,height:N.a.small},medium:{width:N.a.medium,height:N.a.medium},large:{width:N.a.large,height:N.a.large},xlarge:{width:N.a.xlarge,height:N.a.xlarge}},X={xsmall:8,small:8,medium:16,large:16,xlarge:24},T=Object(H.a)(function(y,U,L){var W,g,f,j,c,O=U.color,l=U.size,s=L("loading"),o=L("inner"),r=L("spinner"),t=O||y.primaryColor;return{loading:(W={ref:s,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},W["."+o]={opacity:0},W["."+r]={display:"flex"},W),solid:(g={backgroundColor:y.palettes[t][y.colorScheme==="light"?5:3],color:y.colorScheme==="light"?y.colors.white:y.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:y.palettes[t][y.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:y.palettes[t][y.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3]}}},g["&:disabled:not(."+s+")"]={backgroundColor:y.palettes.gray[2],color:Object(S.a)(y.colors.black,y.opacity.opacity3)},g),ghost:(f={backgroundColor:y.colors.transparent,border:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3],color:y.palettes[t][y.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(S.a)(y.palettes[t][y.colorScheme==="light"?0:8],y.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(S.a)(y.palettes[t][y.colorScheme==="light"?1:7],y.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3]}}},f["&:disabled:not(."+s+")"]={color:Object(S.a)(y.palettes[t][1],y.opacity.opacity3),border:"1px solid "+Object(S.a)(y.palettes[t][1],y.opacity.opacity3)},f),"light-solid":(j={backgroundColor:Object(S.a)(y.colorScheme==="light"?y.colors.black:y.colors.white,y.opacity.opacity1),color:y.palettes[t][y.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(S.a)(y.palettes.dark[y.colorScheme==="light"?8:1],y.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(S.a)(y.palettes.dark[y.colorScheme==="light"?7:2],y.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3]}}},j["&:disabled:not(."+s+")"]={backgroundColor:Object(S.a)(y.palettes.dark[y.colorScheme==="light"?4:1],y.opacity.opacity1),color:Object(S.a)(y.palettes[t][y.colorScheme==="light"?7:3],y.opacity.opacity3)},j),text:(c={backgroundColor:"transparent",color:y.palettes[t][y.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(S.a)(y.palettes[t][y.colorScheme==="light"?8:1],y.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(S.a)(y.palettes[t][y.colorScheme==="light"?7:2],y.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+y.palettes[t][y.colorScheme==="light"?5:3]}}},c["&:disabled:not(."+s+")"]={color:Object(S.a)(y.palettes[t][y.colorScheme==="light"?7:3],y.opacity.opacity3)},c),root:Object.assign({},R[l],Object(z.b)(y),{borderRadius:y.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:o,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:R[l].width-X[l],height:R[l].height-X[l]}},spinnerWrapper:{ref:r,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),Y=e("./node_modules/react/jsx-runtime.js"),P=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function A(y,U){if(y==null)return{};var L=M(y,U),W,g;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(y);for(g=0;g<f.length;g++)W=f[g],!(U.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,W)||(L[W]=y[W]))}return L}function M(y,U){if(y==null)return{};var L={},W=Object.keys(y),g,f;for(f=0;f<W.length;f++)g=W[f],!(U.indexOf(g)>=0)&&(L[g]=y[g]);return L}var x=Object(Q.forwardRef)(function(y,U){var L,W=y.children,g=y.component,f=y.size,j=f===void 0?"medium":f,c=y.color,O=y.variant,l=O===void 0?"solid":O,s=y.type,o=s===void 0?"button":s,r=y.disabled,t=r===void 0?!1:r,a=y.loading,m=a===void 0?!1:a,n=y.spinnerProps,u=y.className,i=y.co,_=y.overrideStyles,d=A(y,P),v=T({color:c,size:j},{overrideStyles:_,name:"Button"}),b=v.theme,C=v.classes,E=v.cx,p=c||b.primaryColor,k=Object(Y.jsx)(q.a,Object.assign({color:l==="solid"?b.colors.white:b.palettes[p][6],size:N.a[j]/2},n));return Object(Y.jsxs)(Z.a,Object.assign({component:g||"button",className:E((L={},L[C.loading]=m,L),C.root,C[l],u),type:o,disabled:t||m,ref:U,onTouchStart:function(){},co:i},d,{children:[Object(Y.jsx)("div",{className:C.inner,children:W}),Object(Y.jsx)("div",{className:C.spinnerWrapper,children:k})]}))});x.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Y});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),q=e("./node_modules/react/index.js"),N=e("./node_modules/react/jsx-runtime.js"),Z=function(A){return Object(N.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A,{children:Object(N.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};Z.displayName="CloseIcon",Z.displayName="@travelmakers-design/core/CloseIcon";var J=["size","color"];function H(P,A){if(P==null)return{};var M=z(P,A),x,y;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(P);for(y=0;y<U.length;y++)x=U[y],!(A.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,x)||(M[x]=P[x]))}return M}function z(P,A){if(P==null)return{};var M={},x=Object.keys(P),y,U;for(U=0;U<x.length;U++)y=x[U],!(A.indexOf(y)>=0)&&(M[y]=P[y]);return M}var S=Object(q.forwardRef)(function(P,A){var M=P.size,x=M===void 0?"medium":M,y=P.color,U=y===void 0?"gray":y,L=H(P,J);return Object(N.jsx)(Q.a,Object.assign({size:x,color:U,ref:A},L,{children:Object(N.jsx)(Z,{})}))});S.displayName="@travelmakers-design/core/CloseButton";var R=`import { CloseButton } from "../CloseButton";
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
`,X={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},T=h.default={parameters:{storySource:{source:`import { CloseButton } from "../CloseButton";
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}}}},title:"@travelmakers-design/core/CloseButton",component:S,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},Y=function(A){return Object(N.jsx)(S,Object.assign({},A))};Y.displayName="Default"},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return H});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(B),K=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),$=e("./node_modules/react/index.js"),Q=e.n($),q=e("./node_modules/react/jsx-runtime.js"),N=e.n(q),Z=`import { IconButton } from "../IconButton";
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
`,J={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};h.default={parameters:{storySource:{source:`import { IconButton } from "../IconButton";
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}}}},title:"@travelmakers-design/core/IconButton",component:K.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var H=function(S){var R=Object(q.jsx)("svg",{viewBox:"0 0 24 24",children:Object(q.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(q.jsx)(K.a,Object.assign({},S,{children:R}))};H.displayName="Default"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return E});var B=e("./node_modules/core-js/modules/es.array.map.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/core-js/modules/es.object.keys.js"),T=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),P=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=e("./node_modules/react/index.js"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),x=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y=Object(x.a)(function(p,k){var I=k.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:I?I in p.radius?p.radius[I]:I:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:p.colorScheme==="dark"?p.palettes.gray[2]:p.palettes.gray[8],backgroundColor:p.colorScheme==="dark"?p.palettes.gray[8]:p.palettes.gray[2],borderRadius:I?I in p.radius?p.radius[I]:I:0}}}),U=e("./node_modules/react/jsx-runtime.js"),L=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function W(p,k){return O(p)||c(p,k)||f(p,k)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(p,k){if(!!p){if(typeof p=="string")return j(p,k);var I=Object.prototype.toString.call(p).slice(8,-1);if(I==="Object"&&p.constructor&&(I=p.constructor.name),I==="Map"||I==="Set")return Array.from(p);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return j(p,k)}}function j(p,k){(k==null||k>p.length)&&(k=p.length);for(var I=0,D=new Array(k);I<k;I++)D[I]=p[I];return D}function c(p,k){var I=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(I!=null){var D=[],w=!0,V=!1,te,ue;try{for(I=I.call(p);!(w=(te=I.next()).done)&&(D.push(te.value),!(k&&D.length===k));w=!0);}catch(ve){V=!0,ue=ve}finally{try{!w&&I.return!=null&&I.return()}finally{if(V)throw ue}}return D}}function O(p){if(Array.isArray(p))return p}function l(p,k){if(p==null)return{};var I=s(p,k),D,w;if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(p);for(w=0;w<V.length;w++)D=V[w],!(k.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,D)||(I[D]=p[D]))}return I}function s(p,k){if(p==null)return{};var I={},D=Object.keys(p),w,V;for(V=0;V<D.length;V++)w=D[V],!(k.indexOf(w)>=0)&&(I[w]=p[w]);return I}var o=null,r="loadImage",t=function(k,I){k.forEach(function(D){D.isIntersecting&&(I.unobserve(D.target),D.target.dispatchEvent(new CustomEvent(r)))})},a=Object(A.forwardRef)(function(p,k){var I=p.lazy,D=p.threshold,w=D===void 0?.5:D,V=p.placeholder,te=p.src,ue=p.radius,ve=p.width,le=ve===void 0?"100%":ve,ne=p.height,ce=ne===void 0?"auto":ne,_e=p.alt,ge=p.fit,ae=p.style,G=p.className,se=p.co,me=p.overrideStyles,he=l(p,L),be=y({radius:ue},{overrideStyles:me,name:"Image"}),pe=be.classes,Ce=be.cx,De=Object(A.useState)(!1),Ae=W(De,2),Me=Ae[0],xe=Ae[1],Pe=Object(A.useState)(!1),Te=W(Pe,2),Re=Te[0],ee=Te[1],F=Object(A.useRef)(null),ie={width:le,height:ce,objectFit:ge};return Object(A.useImperativeHandle)(k,function(){return F.current}),Object(A.useEffect)(function(){if(!I){ee(!0);return}var de=function(){return ee(!0)},fe=F.current;return fe&&fe.addEventListener(r,de),function(){fe&&fe.removeEventListener(r,de)}},[I]),Object(A.useEffect)(function(){!I||(o=new IntersectionObserver(t,{threshold:w}),F.current&&o.observe(F.current))},[I,w]),Object(U.jsxs)(M.a,Object.assign({className:Ce(pe.root,G),co:se},he,{children:[Object(U.jsx)("img",{ref:F,src:te,alt:_e,className:pe.image,style:ie,onLoad:function(){return xe(!0)}}),(!Me||I&&!Re)&&V&&Object(U.jsx)("div",{className:pe.placeholder,title:_e,children:V})]}))});a.displayName="@travelmakers-design/core/Image";function m(p){return _(p)||i(p)||u(p)||n()}function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(p,k){if(!!p){if(typeof p=="string")return d(p,k);var I=Object.prototype.toString.call(p).slice(8,-1);if(I==="Object"&&p.constructor&&(I=p.constructor.name),I==="Map"||I==="Set")return Array.from(p);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return d(p,k)}}function i(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function _(p){if(Array.isArray(p))return d(p)}function d(p,k){(k==null||k>p.length)&&(k=p.length);for(var I=0,D=new Array(k);I<k;I++)D[I]=p[I];return D}var v=`import { Image } from "../Image";
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
`,b={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},C=h.default={parameters:{storySource:{source:`import { Image } from "../Image";
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
`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}}}},title:"@travelmakers-design/core/Image",component:a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},E=function(k){return Object(U.jsx)(U.Fragment,{children:m(new Array(10)).map(function(I,D){return Object(U.jsx)("div",{children:Object(U.jsx)(a,Object.assign({placeholder:Object(U.jsx)("div",{children:"Placeholder"})},k))},D)})})}},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W}),e.d(h,"WithIcon",function(){return g}),e.d(h,"WithRightSection",function(){return f}),e.d(h,"Textarea",function(){return j});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.string.small.js"),q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=e("./packages/travelmakers-design-core/src/constants/index.ts"),S=function(O,l){return O in l?l[O]:O},R={xsmall:12,small:14,medium:14,large:14,xlarge:16},X=Object(J.a)(function(c,O){var l=O.size,s=O.multiline,o=O.radius,r=O.invalid,t=c.palettes.red[c.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(H.b)(c),{height:s?"auto":S(l,z.a),WebkitTapHighlightColor:"transparent",lineHeight:s?c.lineHeight:S(l,z.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:S(l,R),width:"100%",color:c.colorScheme==="dark"?c.palettes.gray[0]:c.palettes.gray[9],display:"block",textAlign:"left",minHeight:S(l,z.a),paddingLeft:S(l,z.a)/3,paddingRight:S(l,z.a)/3,borderRadius:S(o,c.radius),border:"1px solid "+(c.colorScheme==="dark"?c.palettes.gray[6]:c.palettes.gray[2]),backgroundColor:c.colorScheme==="dark"?c.palettes.gray[8]:c.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+c.palettes[c.primaryColor][c.colorScheme==="dark"?3:5],borderColor:c.palettes[c.primaryColor][c.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:c.colorScheme==="dark"?c.palettes.gray[7]:c.palettes.gray[0],color:c.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:c.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(c.colorScheme==="dark",c.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:S(l,z.a)+"px !important"},invalid:{color:t+" !important",borderColor:t+" !important","&::placeholder":{opacity:1,color:t+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:c.colorScheme==="dark"?c.palettes.gray[7]:c.palettes.gray[0],color:c.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:c.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:S(l,z.a),color:r?c.palettes.red[c.colorScheme==="dark"?5:6]:c.colorScheme==="dark"?c.palettes.gray[1]:c.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),T=e("./node_modules/react/jsx-runtime.js"),Y=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function P(c,O){if(c==null)return{};var l=A(c,O),s,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);for(o=0;o<r.length;o++)s=r[o],!(O.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(l[s]=c[s]))}return l}function A(c,O){if(c==null)return{};var l={},s=Object.keys(c),o,r;for(r=0;r<s.length;r++)o=s[r],!(O.indexOf(o)>=0)&&(l[o]=c[o]);return l}var M=Object(N.forwardRef)(function(c,O){var l,s=c.component,o=c.size,r=o===void 0?"medium":o,t=c.radius,a=t===void 0?"medium":t,m=c.icon,n=c.rightSectionWidth,u=n===void 0?36:n,i=c.rightSection,_=c.rightSectionProps,d=_===void 0?{}:_,v=c.wrapperProps,b=c.invalid,C=b===void 0?!1:b,E=c.required,p=E===void 0?!1:E,k=c.disabled,I=k===void 0?!1:k,D=c.multiline,w=D===void 0?!1:D,V=c.className,te=c.style,ue=c.co,ve=c.overrideStyles,le=c.__staticSelector,ne=le===void 0?"Input":le,ce=P(c,Y),_e=Object(q.c)(),ge=X({radius:a,size:r,multiline:w,invalid:C},{overrideStyles:ve,name:ne}),ae=ge.classes,G=ge.cx,se=s||"input";return Object(T.jsxs)(Z.a,Object.assign({className:G(ae.wrapper,V),co:ue,style:te},v,{children:[m&&Object(T.jsx)("div",{className:ae.icon,children:m}),Object(T.jsx)(se,Object.assign({},ce,{ref:O,className:G(ae.input,(l={},l[ae.withIcon]=m,l[ae.invalid]=C,l[ae.disabled]=I,l)),required:p,disabled:I,style:{paddingRight:i?u:_e.spacing.small}})),i&&Object(T.jsx)("div",Object.assign({},d,{style:Object.assign({},d.style,{width:u}),className:G(ae.rightSection,d.className),children:i}))]}))});M.displayName="@travelmakers-design/core/Input";var x=`import { Input } from "../Input";
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
`,y={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},U=h.default={parameters:{storySource:{source:`import { Input } from "../Input";
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
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},"with-icon":{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},"with-right-section":{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}}}},title:"@travelmakers-design/core/Input",component:M,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},L=function(){return Object(T.jsx)("svg",{viewBox:"0 0 24 24",children:Object(T.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};L.displayName="Icon";var W=function(O){return Object(T.jsx)("div",{style:{width:400,padding:24},children:Object(T.jsx)(M,Object.assign({},O))})};W.displayName="Default";var g=function(O){return Object(T.jsx)("div",{style:{width:400,padding:24},children:Object(T.jsx)(M,Object.assign({icon:Object(T.jsx)(L,{})},O))})};g.displayName="WithIcon";var f=function(O){return Object(T.jsx)("div",{style:{width:400,padding:24},children:Object(T.jsx)(M,Object.assign({icon:Object(T.jsx)(L,{}),rightSectionWidth:50},O))})};f.displayName="WithRightSection";var j=function(O){return Object(T.jsx)("div",{style:{width:400,padding:24},children:Object(T.jsx)(M,Object.assign({component:"textarea",multiline:!0},O))})};j.displayName="Textarea"},"./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx":function(oe,h,e){"use strict";e.d(h,"a",function(){return X});var B=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Z=e("./packages/travelmakers-design-core/src/constants/index.ts"),J=Object(N.a)(function(T,Y){var P=Y.size,A=Y.color,M=A===void 0?T.colorScheme==="light"?T.palettes.gray[8]:T.colors.white:A in T.palettes?T.colorScheme==="light"?T.palettes[A][5]:T.palettes[A][3]:A in T.colors?T.colors[A]:A;return{root:{position:"relative",display:"inline-block",width:P in Z.a?Z.a[P]:P,height:P in Z.a?Z.a[P]:P,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:M},circle:{fill:M}}}}),H=e("./node_modules/react/jsx-runtime.js"),z=["size","color","className","co","overrideStyles"];function S(T,Y){if(T==null)return{};var P=R(T,Y),A,M;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(T);for(M=0;M<x.length;M++)A=x[M],!(Y.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,A)||(P[A]=T[A]))}return P}function R(T,Y){if(T==null)return{};var P={},A=Object.keys(T),M,x;for(x=0;x<A.length;x++)M=A[x],!(Y.indexOf(M)>=0)&&(P[M]=T[M]);return P}var X=Object(Q.forwardRef)(function(T,Y){var P=T.size,A=P===void 0?"medium":P,M=T.color,x=T.className,y=T.co,U=T.overrideStyles,L=S(T,z),W=J({size:A,color:M},{overrideStyles:U,name:"Spinner"}),g=W.classes,f=W.cx,j=Object(H.jsx)("i",{className:g.inner,children:Object(H.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(H.jsxs)("g",{transform:"translate(1 1)",children:[Object(H.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(H.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(H.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(H.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(H.jsx)(q.a,Object.assign({ref:Y,className:f(g.root,x),co:y},L,{children:j}))});X.displayName="@travelmakers-design/core/Spinner"},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return H});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(B),K=e("./node_modules/react/index.js"),$=e.n(K),Q=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),q=e("./node_modules/react/jsx-runtime.js"),N=e.n(q),Z=`import React from "react";
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
`,J={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/core/Spinner",component:Q.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var H=function(S){return Object(q.jsx)(Q.a,Object.assign({},S))};H.displayName="Default"},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,h,e){"use strict";e.d(h,"a",function(){return W});var B=e("./node_modules/core-js/modules/es.object.keys.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.array.map.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.object.assign.js"),S=e.n(z),R=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),T=e("./node_modules/react/index.js"),Y=e.n(T),P=e("./node_modules/react/jsx-runtime.js"),A=e.n(P),M=["component","className","style","co"];function x(g,f){if(g==null)return{};var j=y(g,f),c,O;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(g);for(O=0;O<l.length;O++)c=l[O],!(f.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,c)||(j[c]=g[c]))}return j}function y(g,f){if(g==null)return{};var j={},c=Object.keys(g),O,l;for(l=0;l<c.length;l++)O=c[l],!(f.indexOf(O)>=0)&&(j[O]=g[O]);return j}function U(g,f){return typeof g=="function"?g(f):g}function L(g,f){var j=Object(R.a)(),c=j.css,O=j.cx,l=Object(X.c)();return Array.isArray(g)?O(f,g.map(function(s){return c(U(s,l))})):O(f,c(U(g,l)))}var W=Object(T.forwardRef)(function(g,f){var j=g.component,c=g.className,O=g.style,l=g.co,s=x(g,M),o=j||"div";return Object(P.jsx)(o,Object.assign({ref:f,className:L(l,c),style:O},s))});W.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e.n(B),K=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),q=`import React from "react";
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
        backgroundColor: theme.palettes.purple[3],
      })}
    />
  );
};
`,N={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`import React from "react";
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
        backgroundColor: theme.palettes.purple[3],
      })}
    />
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/core/View",component:K.a};var Z=function(){return Object($.jsx)(K.a,{co:function(z){return{width:100,height:100,backgroundColor:z.palettes.purple[3]}}})};Z.displayName="Default"},"./packages/travelmakers-design-core/src/constants/index.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return B});var B={xsmall:24,small:32,medium:40,large:56,xlarge:64}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return l});var B=e("./node_modules/core-js/modules/es.string.replace.js"),re=e("./node_modules/core-js/modules/es.regexp.exec.js"),K=e("./node_modules/core-js/modules/es.number.is-nan.js"),$=e("./node_modules/core-js/modules/es.number.constructor.js"),Q=e("./node_modules/core-js/modules/es.parse-int.js"),q=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/core-js/modules/es.string.split.js"),Z=e("./node_modules/core-js/modules/es.string.starts-with.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function x(s,o){return g(s)||W(s,o)||U(s,o)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(s,o){if(!!s){if(typeof s=="string")return L(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(s,o)}}function L(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function W(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function g(s){if(Array.isArray(s))return s}function f(s){var o=s.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function j(s){var o=s.replace("#",""),r=parseInt(o,16),t=r>>16&255,a=r>>8&255,m=r&255;return{r:t,g:a,b:m,a:1}}function c(s){var o=s.replace(/[^0-9,.]/g,"").split(",").map(Number),r=x(o,4),t=r[0],a=r[1],m=r[2],n=r[3];return{r:t,g:a,b:m,a:n||1}}function O(s){return f(s)?j(s):s.startsWith("rgb")?c(s):{r:0,g:0,b:0,a:1}}var l=function(o,r){var t=O(o),a=t.r,m=t.g,n=t.b;return"rgba("+a+", "+m+", "+n+", "+r+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return Q});var B=e("./node_modules/core-js/modules/es.array.concat.js"),re=e.n(B),K=e("./node_modules/react/index.js"),$=e.n(K),Q=function(N){var Z=Object(K.useRef)(N);return Object(K.useEffect)(function(){Z.current=N},[N]),Object(K.useMemo)(function(){return function(){for(var J,H=arguments.length,z=new Array(H),S=0;S<H;S++)z[S]=arguments[S];return(J=Z.current)===null||J===void 0?void 0:J.call.apply(J,[Z].concat(z))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e.n(B),K=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useClickAway"};var Z=function(){var H=Object(K.a)(function(){alert("Click away from red box!")});return Object($.jsx)("div",{children:Object($.jsx)("div",{ref:H,style:{width:100,height:100,backgroundColor:"red"}})})};Z.displayName="Default"},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return l});var B=e("./node_modules/core-js/modules/es.array.slice.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.function.name.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.array.from.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.symbol.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(R),T=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.iterator.js"),A=e.n(P),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function f(s,o){var r=typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(!r){if(Array.isArray(s)||(r=j(s))||o&&s&&typeof s.length=="number"){r&&(s=r);var t=0,a=function(){};return{s:a,n:function(){return t>=s.length?{done:!0}:{done:!1,value:s[t++]}},e:function(_){throw _},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,n=!1,u;return{s:function(){r=r.call(s)},n:function(){var _=r.next();return m=_.done,_},e:function(_){n=!0,u=_},f:function(){try{!m&&r.return!=null&&r.return()}finally{if(n)throw u}}}}function j(s,o){if(!!s){if(typeof s=="string")return c(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(s,o)}}function c(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}var O=["mousedown","touchstart"],l=function(o){var r=Object(L.useRef)(),t=Object(g.a)(o);return Object(L.useEffect)(function(){var a=function(_){var d=r.current;d&&!d.contains(_.target)&&t(_)},m=f(O),n;try{for(m.s();!(n=m.n()).done;){var u=n.value;document.addEventListener(u,a)}}catch(i){m.e(i)}finally{m.f()}return function(){var i=f(O),_;try{for(i.s();!(_=i.n()).done;){var d=_.value;document.removeEventListener(d,a)}}catch(v){i.e(v)}finally{i.f()}}},[r.current]),r}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return s});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/web.timers.js");function X(o,r){return M(o)||A(o,r)||Y(o,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(o,r){if(!!o){if(typeof o=="string")return P(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(o,r)}}function P(o,r){(r==null||r>o.length)&&(r=o.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=o[t];return a}function A(o,r){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var a=[],m=!0,n=!1,u,i;try{for(t=t.call(o);!(m=(u=t.next()).done)&&(a.push(u.value),!(r&&a.length===r));m=!0);}catch(_){n=!0,i=_}finally{try{!m&&t.return!=null&&t.return()}finally{if(n)throw i}}return a}}function M(o){if(Array.isArray(o))return o}var x=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.timeout,a=t===void 0?2e3:t,m=Object(S.useState)(null),n=X(m,2),u=n[0],i=n[1],_=Object(S.useState)(!1),d=X(_,2),v=d[0],b=d[1],C=Object(S.useState)(null),E=X(C,2),p=E[0],k=E[1],I=function(te){clearTimeout(p),k(setTimeout(function(){return b(!1)},a)),b(te)},D=function(te){"clipboard"in navigator?navigator.clipboard.writeText(te).then(function(){return I(!0)}).catch(function(ue){return i(ue)}):i(new Error("useClipboard: navigator.clipboard is not supported"))},w=function(){b(!1),i(null),clearTimeout(p)};return{copy:D,reset:w,error:u,copied:v}},y=e("./node_modules/react/jsx-runtime.js");function U(o,r){return j(o)||f(o,r)||W(o,r)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(o,r){if(!!o){if(typeof o=="string")return g(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(o,r)}}function g(o,r){(r==null||r>o.length)&&(r=o.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=o[t];return a}function f(o,r){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var a=[],m=!0,n=!1,u,i;try{for(t=t.call(o);!(m=(u=t.next()).done)&&(a.push(u.value),!(r&&a.length===r));m=!0);}catch(_){n=!0,i=_}finally{try{!m&&t.return!=null&&t.return()}finally{if(n)throw i}}return a}}function j(o){if(Array.isArray(o))return o}var c=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},l=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useClipboard"},s=function(){var r=Object(S.useState)(""),t=U(r,2),a=t[0],m=t[1],n=x({timeout:3e3}),u=n.copy,i=n.copied;return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",onChange:function(d){return m(d.target.value)}}),Object(y.jsx)("button",{onClick:function(){return u(a)},children:"copy"}),Object(y.jsx)("span",{children:i&&"Copied!!"})]})};s.displayName="Default"},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),K=function(){return Object(re.a)("(prefers-color-scheme: dark)")?"dark":"light"},$=e("./node_modules/react/jsx-runtime.js"),Q=`import React from "react";
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
`,q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},N=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useColorScheme"},Z=function(){var H=K();return Object($.jsx)("div",{children:Object($.jsx)("div",{children:H})})};Z.displayName="Default"},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return o});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),X=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function T(r,t){return x(r)||M(r,t)||P(r,t)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(r,t){if(!!r){if(typeof r=="string")return A(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(r,t)}}function A(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function M(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function x(r){if(Array.isArray(r))return r}var y=function(t,a,m){var n=Object(X.a)(t,a),u=T(n,2),i=u[0],_=u[1];return Object(R.a)(i,m),_},U=e("./node_modules/react/jsx-runtime.js");function L(r,t){return c(r)||j(r,t)||g(r,t)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(r,t){if(!!r){if(typeof r=="string")return f(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(r,t)}}function f(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function j(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function c(r){if(Array.isArray(r))return r}var O=`import React, { useState } from "react";

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
`,l={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},s=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useDebounce"},o=function(){var t=Object(S.useState)(""),a=L(t,2),m=a[0],n=a[1],u=y(function(){alert("Updated!")},1e3,[m]);return Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text",onChange:function(_){return n(_.target.value)}}),Object(U.jsx)("button",{onClick:u,children:"Cancel"})]})};o.displayName="Default"},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e.n(B),K=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var Z=function(){var H=Object(K.a)();return Object($.jsxs)("div",{children:[Math.random(),Object($.jsx)("button",{onClick:H,children:"Update"})]})};Z.displayName="Default"},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return o});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L);function g(r,t){return l(r)||O(r,t)||j(r,t)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(r,t){if(!!r){if(typeof r=="string")return c(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(r,t)}}function c(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function O(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function l(r){if(Array.isArray(r))return r}var s=function(t){return(t+1)%1e6},o=function(){var t=Object(L.useReducer)(s,0),a=g(t,2),m=a[1];return m}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return i});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/es.string.split.js"),X=e("./node_modules/core-js/modules/es.regexp.exec.js"),T=e("./node_modules/core-js/modules/es.string.replace.js"),Y=e("./node_modules/core-js/modules/es.array.filter.js"),P=e("./node_modules/core-js/modules/es.regexp.to-string.js"),A=e("./node_modules/core-js/modules/es.date.to-string.js");function M(_,d){var v=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!v){if(Array.isArray(_)||(v=x(_))||d&&_&&typeof _.length=="number"){v&&(_=v);var b=0,C=function(){};return{s:C,n:function(){return b>=_.length?{done:!0}:{done:!1,value:_[b++]}},e:function(I){function D(w){return I.apply(this,arguments)}return D.toString=function(){return I.toString()},D}(function(I){throw I}),f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,p=!1,k;return{s:function(){v=v.call(_)},n:function(){var D=v.next();return E=D.done,D},e:function(I){function D(w){return I.apply(this,arguments)}return D.toString=function(){return I.toString()},D}(function(I){p=!0,k=I}),f:function(){try{!E&&v.return!=null&&v.return()}finally{if(p)throw k}}}}function x(_,d){if(!!_){if(typeof _=="string")return y(_,d);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return y(_,d)}}function y(_,d){(d==null||d>_.length)&&(d=_.length);for(var v=0,b=new Array(d);v<d;v++)b[v]=_[v];return b}var U={alt:1,ctrl:2,meta:4,shift:8},L={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},W={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},g=function(d){var v=d.key!==" "?d.key.toLowerCase():"space",b=0;return d.altKey&&(b+=U.alt),d.ctrlKey&&(b+=U.ctrl),d.metaKey&&(b+=U.meta),d.shiftKey&&(b+=U.shift),{modifiers:b,key:v}},f=function(d){var v=d.replace(/\s/g,"").toLowerCase().split("+"),b=0,C,E=M(v),p;try{for(E.s();!(p=E.n()).done;){var k=p.value;U[k]?b+=U[k]:U[W[k]]?b+=U[W[k]]:L[k]?(b+=U.shift,C=L[k]):W[k]?C=W[k]:C=k}}catch(I){E.e(I)}finally{E.f()}return{modifiers:b,key:C}},j=function(d,v){return d.modifiers===v.modifiers&&d.key===v.key},c=function(d){var v=Object(S.useMemo)(function(){return d.filter(function(D){return!D.global})},[d]),b=Object(S.useMemo)(function(){return d.filter(function(D){return D.global})},[d]),C=Object(S.useCallback)(function(D,w,V,te){var ue=M(D?b:v),ve;try{for(ue.s();!(ve=ue.n()).done;){var le=ve.value;if(j(f(le.combo),w)){var ne;(ne=le[V])===null||ne===void 0||ne.call(le,te)}}}catch(ce){ue.e(ce)}finally{ue.f()}},[v,b]),E=Object(S.useCallback)(function(D){C(!0,g(D),"onKeyDown",D)},[C]),p=Object(S.useCallback)(function(D){C(!0,g(D),"onKeyUp",D)},[C]),k=Object(S.useCallback)(function(D){C(!1,g(D.nativeEvent),"onKeyDown",D.nativeEvent)},[C]),I=Object(S.useCallback)(function(D){C(!1,g(D.nativeEvent),"onKeyUp",D.nativeEvent)},[C]);return Object(S.useEffect)(function(){return document.addEventListener("keydown",E),document.addEventListener("keyup",p),function(){document.removeEventListener("keydown",E),document.removeEventListener("keyup",p)}},[E,p]),{handleKeyDown:k,handleKeyUp:I}},O=e("./node_modules/react/jsx-runtime.js");function l(_,d){return a(_)||t(_,d)||o(_,d)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(_,d){if(!!_){if(typeof _=="string")return r(_,d);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return r(_,d)}}function r(_,d){(d==null||d>_.length)&&(d=_.length);for(var v=0,b=new Array(d);v<d;v++)b[v]=_[v];return b}function t(_,d){var v=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(v!=null){var b=[],C=!0,E=!1,p,k;try{for(v=v.call(_);!(C=(p=v.next()).done)&&(b.push(p.value),!(d&&b.length===d));C=!0);}catch(I){E=!0,k=I}finally{try{!C&&v.return!=null&&v.return()}finally{if(E)throw k}}return b}}function a(_){if(Array.isArray(_))return _}var m=`import React, { useRef, useState } from "react";

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
`,n={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},u=h.default={parameters:{storySource:{source:`import React, { useRef, useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}}}},title:"@travelmakers-design/hooks/useHotKey"},i=function(){var d=Object(S.useRef)(null),v=Object(S.useState)(""),b=l(v,2),C=b[0],E=b[1],p=c([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){d.current.select()}},{combo:"shift+r",onKeyUp:function(){E("")}}]),k=p.handleKeyDown,I=p.handleKeyUp;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{ref:d,type:"text",value:C,onChange:function(w){return E(w.target.value)},onKeyDown:k,onKeyUp:I})})};i.displayName="Default"},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return n});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),f=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),j=e("./node_modules/react/jsx-runtime.js"),c=e.n(j);function O(u,i){return t(u)||r(u,i)||s(u,i)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(u,i){if(!!u){if(typeof u=="string")return o(u,i);var _=Object.prototype.toString.call(u).slice(8,-1);if(_==="Object"&&u.constructor&&(_=u.constructor.name),_==="Map"||_==="Set")return Array.from(u);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return o(u,i)}}function o(u,i){(i==null||i>u.length)&&(i=u.length);for(var _=0,d=new Array(i);_<i;_++)d[_]=u[_];return d}function r(u,i){var _=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(_!=null){var d=[],v=!0,b=!1,C,E;try{for(_=_.call(u);!(v=(C=_.next()).done)&&(d.push(C.value),!(i&&d.length===i));v=!0);}catch(p){b=!0,E=p}finally{try{!v&&_.return!=null&&_.return()}finally{if(b)throw E}}return d}}function t(u){if(Array.isArray(u))return u}var a=`import React, { useEffect } from "react";

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
`,m={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};h.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}}}},title:"@travelmakers-design/hooks/useHover"};var n=function(){var i=Object(f.a)(),_=O(i,2),d=_[0],v=_[1],b=Object(g.a)();return Object(L.useEffect)(function(){b()},[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{ref:v,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+d]})})};n.displayName="Default"},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return s});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L);function g(o,r){return l(o)||O(o,r)||j(o,r)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(o,r){if(!!o){if(typeof o=="string")return c(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(o,r)}}function c(o,r){(r==null||r>o.length)&&(r=o.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=o[t];return a}function O(o,r){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var a=[],m=!0,n=!1,u,i;try{for(t=t.call(o);!(m=(u=t.next()).done)&&(a.push(u.value),!(r&&a.length===r));m=!0);}catch(_){n=!0,i=_}finally{try{!m&&t.return!=null&&t.return()}finally{if(n)throw i}}return a}}function l(o){if(Array.isArray(o))return o}var s=function(){var r=Object(L.useRef)(null),t=Object(L.useState)(!1),a=g(t,2),m=a[0],n=a[1],u=Object(L.useCallback)(function(){return n(!0)},[]),i=Object(L.useCallback)(function(){return n(!1)},[]);return Object(L.useEffect)(function(){var _=r.current;if(!!_)return _.addEventListener("mouseenter",u),_.addEventListener("mouseleave",i),function(){_.removeEventListener("mouseenter",u),_.removeEventListener("mouseleave",i)}},[r.current]),[m,r]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e.n(B),K=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useId"};var Z=function(){var H=Object(K.a)();return Object($.jsx)("div",{children:Object($.jsx)("div",{children:H})})};Z.displayName="Default"},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return o});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L);function g(r,t){return l(r)||O(r,t)||j(r,t)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(r,t){if(!!r){if(typeof r=="string")return c(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(r,t)}}function c(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function O(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function l(r){if(Array.isArray(r))return r}var s=0,o=function(t){var a=Object(L.useState)(t),m=g(a,2),n=m[0],u=m[1],i=t||n;return Object(L.useEffect)(function(){n==null&&(s+=1,u("tm-"+s))},[n]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return l});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),q=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js");function P(s,o){return U(s)||y(s,o)||M(s,o)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(s,o){if(!!s){if(typeof s=="string")return x(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(s,o)}}function x(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function y(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function U(s){if(Array.isArray(s))return s}var L=["keypress","mousemove","touchmove","click","scroll"],W={events:L,initialState:!0},g=function(o,r){var t=Object.assign({},W,r),a=t.events,m=t.initialState,n=Object(B.useState)(m),u=P(n,2),i=u[0],_=u[1],d=Object(B.useRef)();return Object(B.useEffect)(function(){var v=function(){_(!1),d.current&&window.clearTimeout(d.current),d.current=window.setTimeout(function(){_(!0)},o)};return a.forEach(function(b){return document.addEventListener(b,v)}),function(){a.forEach(function(b){return document.removeEventListener(b,v)})}},[o]),i},f=e("./node_modules/react/jsx-runtime.js"),j=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},O=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useIdle"},l=function(){var o=g(3e3);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:["Idle: ",""+o]})})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return l});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js");function R(s,o){return A(s)||P(s,o)||T(s,o)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(s,o){if(!!s){if(typeof s=="string")return Y(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(s,o)}}function Y(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function P(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function A(s){if(Array.isArray(s))return s}var M=function(o){var r=Object(S.useState)(null),t=R(r,2),a=t[0],m=t[1],n=Object(S.useRef)(),u=Object(S.useCallback)(function(i){if(n.current&&(n.current.disconnect(),n.current=null),i===null){m(null);return}n.current=new IntersectionObserver(function(_){var d=R(_,1),v=d[0];m(v)},o),n.current.observe(i)},[o==null?void 0:o.rootMargin,o==null?void 0:o.root,o==null?void 0:o.threshold]);return[u,a]},x=e("./node_modules/react/jsx-runtime.js");function y(s,o){return f(s)||g(s,o)||L(s,o)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(s,o){if(!!s){if(typeof s=="string")return W(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(s,o)}}function W(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function g(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function f(s){if(Array.isArray(s))return s}var j=`import React, { useRef } from "react";

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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},O=h.default={parameters:{storySource:{source:`import React, { useRef } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}}}},title:"@travelmakers-design/hooks/useIntersection"},l=function(){var o=Object(S.useRef)(null),r=M({root:o.current,threshold:.5}),t=y(r,2),a=t[0],m=t[1];return Object(x.jsx)("div",{ref:o,style:{width:300,height:300,overflowY:"scroll"},children:Object(x.jsx)("div",{style:{height:500},children:Object(x.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:m!=null&&m.isIntersecting?"green":"red"},children:m!=null&&m.isIntersecting?"Half visible":"Obscured"})})})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return g});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function X(f,j){return M(f)||A(f,j)||Y(f,j)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(f,j){if(!!f){if(typeof f=="string")return P(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return P(f,j)}}function P(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function A(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,s=!1,o,r;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(t){s=!0,r=t}finally{try{!l&&c.return!=null&&c.return()}finally{if(s)throw r}}return O}}function M(f){if(Array.isArray(f))return f}var x=function(j,c){var O=Object(R.a)(j,c),l=X(O,2),s=l[0],o=l[1];return Object(B.useEffect)(function(){return s(),o},[s,o]),o},y=e("./node_modules/react/jsx-runtime.js"),U=`import React from "react";
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
`,L={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},W=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@travelmakers-design/hooks/useInterval"},g=function(){var j=x(function(){alert("fire")},3e3);return Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:j,children:"clear"})})};g.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(n,u){return r(n)||o(n,u)||l(n,u)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(n,u){if(!!n){if(typeof n=="string")return s(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(n,u)}}function s(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function o(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function r(n){if(Array.isArray(n))return n}var t=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var m=function(){var u=Object(g.a)(function(){alert("fire")},3e3),i=c(u,2),_=i[0],d=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:_,children:"run"}),Object(f.jsx)("button",{onClick:d,children:"clear"})]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return q});var B=e("./node_modules/core-js/modules/web.timers.js"),re=e.n(B),K=e("./node_modules/react/index.js"),$=e.n(K),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(Z,J){var H=Object(K.useRef)(),z=Object(Q.a)(Z),S=Object(K.useCallback)(function(){H.current&&clearInterval(H.current),H.current=setInterval(function(){z()},J)},[J]),R=Object(K.useCallback)(function(){H.current&&clearInterval(H.current)},[]);return Object(K.useEffect)(function(){return R},[R]),[S,R]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=typeof document!="undefined"?S.useLayoutEffect:S.useEffect,X=e("./node_modules/react/jsx-runtime.js");function T(g,f){return x(g)||M(g,f)||P(g,f)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(g,f){if(!!g){if(typeof g=="string")return A(g,f);var j=Object.prototype.toString.call(g).slice(8,-1);if(j==="Object"&&g.constructor&&(j=g.constructor.name),j==="Map"||j==="Set")return Array.from(g);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return A(g,f)}}function A(g,f){(f==null||f>g.length)&&(f=g.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=g[j];return c}function M(g,f){var j=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,s,o;try{for(j=j.call(g);!(O=(s=j.next()).done)&&(c.push(s.value),!(f&&c.length===f));O=!0);}catch(r){l=!0,o=r}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function x(g){if(Array.isArray(g))return g}var y=`import React, { useState } from "react";

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
`,U={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},L=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},W=function(){var f=Object(S.useState)(!1),j=T(f,2),c=j[0],O=j[1];return R(function(){O(!0)},[]),Object(X.jsx)("div",{children:c&&"mounted"})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/core-js/modules/es.array.from.js");function R(g,f){return A(g)||P(g,f)||T(g,f)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(g,f){if(!!g){if(typeof g=="string")return Y(g,f);var j=Object.prototype.toString.call(g).slice(8,-1);if(j==="Object"&&g.constructor&&(j=g.constructor.name),j==="Map"||j==="Set")return Array.from(g);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Y(g,f)}}function Y(g,f){(f==null||f>g.length)&&(f=g.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=g[j];return c}function P(g,f){var j=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,s,o;try{for(j=j.call(g);!(O=(s=j.next()).done)&&(c.push(s.value),!(f&&c.length===f));O=!0);}catch(r){l=!0,o=r}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function A(g){if(Array.isArray(g))return g}var M=function(f){var j=Object(B.useState)(!1),c=R(j,2),O=c[0],l=c[1],s=Object(B.useCallback)(function(r){var t=r.key;t===f&&l(!0)},[f]),o=Object(B.useCallback)(function(r){var t=r.key;t===f&&l(!1)},[f]);return Object(B.useEffect)(function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",o)}},[s,o]),O},x=e("./node_modules/react/jsx-runtime.js"),y=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},L=h.default={parameters:{storySource:{source:`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useKeyPress"},W=function(){var f=M("r");return Object(x.jsx)("div",{children:f&&"r key pressed"})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return _});var B=e("./node_modules/core-js/modules/es.array.map.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.array.concat.js"),T=e("./node_modules/core-js/modules/es.array.filter.js"),Y=e("./node_modules/core-js/modules/es.array.includes.js"),P=e("./node_modules/core-js/modules/es.string.includes.js");function A(d){return y(d)||x(d)||W(d)||M()}function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(d){if(typeof Symbol!="undefined"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}function y(d){if(Array.isArray(d))return g(d)}function U(d,v){return j(d)||f(d,v)||W(d,v)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(d,v){if(!!d){if(typeof d=="string")return g(d,v);var b=Object.prototype.toString.call(d).slice(8,-1);if(b==="Object"&&d.constructor&&(b=d.constructor.name),b==="Map"||b==="Set")return Array.from(d);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return g(d,v)}}function g(d,v){(v==null||v>d.length)&&(v=d.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=d[b];return C}function f(d,v){var b=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(b!=null){var C=[],E=!0,p=!1,k,I;try{for(b=b.call(d);!(E=(k=b.next()).done)&&(C.push(k.value),!(v&&C.length===v));E=!0);}catch(D){p=!0,I=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(p)throw I}}return C}}function j(d){if(Array.isArray(d))return d}var c=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=Object(R.useState)(v),C=U(b,2),E=C[0],p=C[1],k=Object(R.useCallback)(function(){for(var le=arguments.length,ne=new Array(le),ce=0;ce<le;ce++)ne[ce]=arguments[ce];return p(function(_e){return[].concat(A(_e),ne)})},[]),I=Object(R.useCallback)(function(){for(var le=arguments.length,ne=new Array(le),ce=0;ce<le;ce++)ne[ce]=arguments[ce];return p(function(_e){return[].concat(ne,A(_e))})},[]),D=Object(R.useCallback)(function(le){for(var ne=arguments.length,ce=new Array(ne>1?ne-1:0),_e=1;_e<ne;_e++)ce[_e-1]=arguments[_e];return p(function(ge){return[].concat(A(ge.slice(0,le)),ce,A(ge.slice(le)))})},[]),w=Object(R.useCallback)(function(){for(var le=arguments.length,ne=new Array(le),ce=0;ce<le;ce++)ne[ce]=arguments[ce];return p(function(_e){return _e.filter(function(ge,ae){return!ne.includes(ae)})})},[]),V=Object(R.useCallback)(function(){var le=A(E),ne=le.pop();return p(le),ne},[E]),te=Object(R.useCallback)(function(){var le=A(E),ne=le.shift();return p(le),ne},[E]),ue=Object(R.useCallback)(function(le,ne){p(function(ce){var _e=A(ce);return _e[le]=ne,_e})},[]),ve={setState:p,append:k,prepend:I,insert:D,remove:w,pop:V,shift:te,setItem:ue};return[E,ve]},O=e("./node_modules/react/jsx-runtime.js");function l(d,v){return a(d)||t(d,v)||o(d,v)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(d,v){if(!!d){if(typeof d=="string")return r(d,v);var b=Object.prototype.toString.call(d).slice(8,-1);if(b==="Object"&&d.constructor&&(b=d.constructor.name),b==="Map"||b==="Set")return Array.from(d);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return r(d,v)}}function r(d,v){(v==null||v>d.length)&&(v=d.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=d[b];return C}function t(d,v){var b=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(b!=null){var C=[],E=!0,p=!1,k,I;try{for(b=b.call(d);!(E=(k=b.next()).done)&&(C.push(k.value),!(v&&C.length===v));E=!0);}catch(D){p=!0,I=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(p)throw I}}return C}}function a(d){if(Array.isArray(d))return d}var m=`import React from "react";
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
`,n={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},u=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}}}},title:"@travelmakers-design/hooks/useList"},i=5,_=function(){var v=c(["Item 1","Item 2","Item 3","Item 4","Item 5"]),b=l(v,2),C=b[0],E=b[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return E.append("Item "+ ++i)},children:"append"}),Object(O.jsx)("button",{onClick:function(){return E.pop()},children:"pop"}),Object(O.jsx)("button",{onClick:function(){return E.prepend("Item "+ ++i)},children:"prepend"}),Object(O.jsx)("button",{onClick:function(){return E.shift()},children:"shift"}),Object(O.jsx)("button",{onClick:function(){return E.setItem(3,"Updated")},children:"setItem 3 index"}),Object(O.jsx)("button",{onClick:function(){return E.remove(2,3)},children:"remove 2, 3 index"}),Object(O.jsx)("button",{onClick:function(){return E.insert(3,"Item "+ ++i)},children:"insert 3 index"})]}),Object(O.jsx)("ul",{children:C.map(function(p,k){return Object(O.jsx)("li",{children:p},k)})})]})};_.displayName="Default"},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return I});var B=e("./node_modules/core-js/modules/es.promise.js"),re=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),X=e("./node_modules/react/index.js"),T=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),Y=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),P=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),A=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),M=e("./node_modules/core-js/modules/es.object.define-property.js"),x=e("./node_modules/core-js/modules/es.object.create.js"),y=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),U=e("./node_modules/core-js/modules/es.array.for-each.js"),L=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),W=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),g=e("./node_modules/core-js/modules/es.array.reverse.js"),f=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function j(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */j=function(){return D};var D={},w=Object.prototype,V=w.hasOwnProperty,te=typeof Symbol=="function"?Symbol:{},ue=te.iterator||"@@iterator",ve=te.asyncIterator||"@@asyncIterator",le=te.toStringTag||"@@toStringTag";function ne(ee,F,ie){return Object.defineProperty(ee,F,{value:ie,enumerable:!0,configurable:!0,writable:!0}),ee[F]}try{ne({},"")}catch(ee){ne=function(ie,de,fe){return ie[de]=fe}}function ce(ee,F,ie,de){var fe=F&&F.prototype instanceof ae?F:ae,ye=Object.create(fe.prototype),Oe=new Pe(de||[]);return ye._invoke=function(ke,Ie,je){var Ee="suspendedStart";return function(Se,Ue){if(Ee==="executing")throw new Error("Generator is already running");if(Ee==="completed"){if(Se==="throw")throw Ue;return Re()}for(je.method=Se,je.arg=Ue;;){var We=je.delegate;if(We){var Be=Ae(We,je);if(Be){if(Be===ge)continue;return Be}}if(je.method==="next")je.sent=je._sent=je.arg;else if(je.method==="throw"){if(Ee==="suspendedStart")throw Ee="completed",je.arg;je.dispatchException(je.arg)}else je.method==="return"&&je.abrupt("return",je.arg);Ee="executing";var Le=_e(ke,Ie,je);if(Le.type==="normal"){if(Ee=je.done?"completed":"suspendedYield",Le.arg===ge)continue;return{value:Le.arg,done:je.done}}Le.type==="throw"&&(Ee="completed",je.method="throw",je.arg=Le.arg)}}}(ee,ie,Oe),ye}function _e(ee,F,ie){try{return{type:"normal",arg:ee.call(F,ie)}}catch(de){return{type:"throw",arg:de}}}D.wrap=ce;var ge={};function ae(){}function G(){}function se(){}var me={};ne(me,ue,function(){return this});var he=Object.getPrototypeOf,be=he&&he(he(Te([])));be&&be!==w&&V.call(be,ue)&&(me=be);var pe=se.prototype=ae.prototype=Object.create(me);function Ce(ee){["next","throw","return"].forEach(function(F){ne(ee,F,function(ie){return this._invoke(F,ie)})})}function De(ee,F){function ie(fe,ye,Oe,ke){var Ie=_e(ee[fe],ee,ye);if(Ie.type!=="throw"){var je=Ie.arg,Ee=je.value;return Ee&&typeof Ee=="object"&&V.call(Ee,"__await")?F.resolve(Ee.__await).then(function(Se){ie("next",Se,Oe,ke)},function(Se){ie("throw",Se,Oe,ke)}):F.resolve(Ee).then(function(Se){je.value=Se,Oe(je)},function(Se){return ie("throw",Se,Oe,ke)})}ke(Ie.arg)}var de;this._invoke=function(fe,ye){function Oe(){return new F(function(ke,Ie){ie(fe,ye,ke,Ie)})}return de=de?de.then(Oe,Oe):Oe()}}function Ae(ee,F){var ie=ee.iterator[F.method];if(ie===void 0){if(F.delegate=null,F.method==="throw"){if(ee.iterator.return&&(F.method="return",F.arg=void 0,Ae(ee,F),F.method==="throw"))return ge;F.method="throw",F.arg=new TypeError("The iterator does not provide a 'throw' method")}return ge}var de=_e(ie,ee.iterator,F.arg);if(de.type==="throw")return F.method="throw",F.arg=de.arg,F.delegate=null,ge;var fe=de.arg;return fe?fe.done?(F[ee.resultName]=fe.value,F.next=ee.nextLoc,F.method!=="return"&&(F.method="next",F.arg=void 0),F.delegate=null,ge):fe:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,ge)}function Me(ee){var F={tryLoc:ee[0]};1 in ee&&(F.catchLoc=ee[1]),2 in ee&&(F.finallyLoc=ee[2],F.afterLoc=ee[3]),this.tryEntries.push(F)}function xe(ee){var F=ee.completion||{};F.type="normal",delete F.arg,ee.completion=F}function Pe(ee){this.tryEntries=[{tryLoc:"root"}],ee.forEach(Me,this),this.reset(!0)}function Te(ee){if(ee){var F=ee[ue];if(F)return F.call(ee);if(typeof ee.next=="function")return ee;if(!isNaN(ee.length)){var ie=-1,de=function fe(){for(;++ie<ee.length;)if(V.call(ee,ie))return fe.value=ee[ie],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return de.next=de}}return{next:Re}}function Re(){return{value:void 0,done:!0}}return G.prototype=se,ne(pe,"constructor",se),ne(se,"constructor",G),G.displayName=ne(se,le,"GeneratorFunction"),D.isGeneratorFunction=function(ee){var F=typeof ee=="function"&&ee.constructor;return!!F&&(F===G||(F.displayName||F.name)==="GeneratorFunction")},D.mark=function(ee){return Object.setPrototypeOf?Object.setPrototypeOf(ee,se):(ee.__proto__=se,ne(ee,le,"GeneratorFunction")),ee.prototype=Object.create(pe),ee},D.awrap=function(ee){return{__await:ee}},Ce(De.prototype),ne(De.prototype,ve,function(){return this}),D.AsyncIterator=De,D.async=function(ee,F,ie,de,fe){fe===void 0&&(fe=Promise);var ye=new De(ce(ee,F,ie,de),fe);return D.isGeneratorFunction(F)?ye:ye.next().then(function(Oe){return Oe.done?Oe.value:ye.next()})},Ce(pe),ne(pe,le,"Generator"),ne(pe,ue,function(){return this}),ne(pe,"toString",function(){return"[object Generator]"}),D.keys=function(ee){var F=[];for(var ie in ee)F.push(ie);return F.reverse(),function de(){for(;F.length;){var fe=F.pop();if(fe in ee)return de.value=fe,de.done=!1,de}return de.done=!0,de}},D.values=Te,Pe.prototype={constructor:Pe,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(xe),!F)for(var ie in this)ie.charAt(0)==="t"&&V.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var ie=this;function de(je,Ee){return Oe.type="throw",Oe.arg=F,ie.next=je,Ee&&(ie.method="next",ie.arg=void 0),!!Ee}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ye=this.tryEntries[fe],Oe=ye.completion;if(ye.tryLoc==="root")return de("end");if(ye.tryLoc<=this.prev){var ke=V.call(ye,"catchLoc"),Ie=V.call(ye,"finallyLoc");if(ke&&Ie){if(this.prev<ye.catchLoc)return de(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return de(ye.finallyLoc)}else if(ke){if(this.prev<ye.catchLoc)return de(ye.catchLoc,!0)}else{if(!Ie)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return de(ye.finallyLoc)}}}},abrupt:function(F,ie){for(var de=this.tryEntries.length-1;de>=0;--de){var fe=this.tryEntries[de];if(fe.tryLoc<=this.prev&&V.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ye=fe;break}}ye&&(F==="break"||F==="continue")&&ye.tryLoc<=ie&&ie<=ye.finallyLoc&&(ye=null);var Oe=ye?ye.completion:{};return Oe.type=F,Oe.arg=ie,ye?(this.method="next",this.next=ye.finallyLoc,ge):this.complete(Oe)},complete:function(F,ie){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&ie&&(this.next=ie),ge},finish:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var de=this.tryEntries[ie];if(de.finallyLoc===F)return this.complete(de.completion,de.afterLoc),xe(de),ge}},catch:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var de=this.tryEntries[ie];if(de.tryLoc===F){var fe=de.completion;if(fe.type==="throw"){var ye=fe.arg;xe(de)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function(F,ie,de){return this.delegate={iterator:Te(F),resultName:ie,nextLoc:de},this.method==="next"&&(this.arg=void 0),ge}},D}function c(D,w,V,te,ue,ve,le){try{var ne=D[ve](le),ce=ne.value}catch(_e){V(_e);return}ne.done?w(ce):Promise.resolve(ce).then(te,ue)}function O(D){return function(){var w=this,V=arguments;return new Promise(function(te,ue){var ve=D.apply(w,V);function le(ce){c(ve,te,ue,le,ne,"next",ce)}function ne(ce){c(ve,te,ue,le,ne,"throw",ce)}le(void 0)})}}function l(D,w){return a(D)||t(D,w)||o(D,w)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(D,w){if(!!D){if(typeof D=="string")return r(D,w);var V=Object.prototype.toString.call(D).slice(8,-1);if(V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set")return Array.from(D);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return r(D,w)}}function r(D,w){(w==null||w>D.length)&&(w=D.length);for(var V=0,te=new Array(w);V<w;V++)te[V]=D[V];return te}function t(D,w){var V=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(V!=null){var te=[],ue=!0,ve=!1,le,ne;try{for(V=V.call(D);!(ue=(le=V.next()).done)&&(te.push(le.value),!(w&&te.length===w));ue=!0);}catch(ce){ve=!0,ne=ce}finally{try{!ue&&V.return!=null&&V.return()}finally{if(ve)throw ne}}return te}}function a(D){if(Array.isArray(D))return D}var m=function(w){var V=Object(X.useState)(!1),te=l(V,2),ue=te[0],ve=te[1],le=Object(f.a)(w),ne=Object(X.useCallback)(O(j().mark(function ce(){var _e,ge=arguments;return j().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return ve(!0),G.next=3,le.apply(void 0,ge);case 3:return _e=G.sent,ve(!1),G.abrupt("return",_e);case 6:case"end":return G.stop()}},ce)})),[w]);return[ue,ne]},n=e("./node_modules/react/jsx-runtime.js");function u(D,w){return b(D)||v(D,w)||_(D,w)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(D,w){if(!!D){if(typeof D=="string")return d(D,w);var V=Object.prototype.toString.call(D).slice(8,-1);if(V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set")return Array.from(D);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return d(D,w)}}function d(D,w){(w==null||w>D.length)&&(w=D.length);for(var V=0,te=new Array(w);V<w;V++)te[V]=D[V];return te}function v(D,w){var V=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(V!=null){var te=[],ue=!0,ve=!1,le,ne;try{for(V=V.call(D);!(ue=(le=V.next()).done)&&(te.push(le.value),!(w&&te.length===w));ue=!0);}catch(ce){ve=!0,ne=ce}finally{try{!ue&&V.return!=null&&V.return()}finally{if(ve)throw ne}}return te}}function b(D){if(Array.isArray(D))return D}var C=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},p=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useLoading"},k=function(w){return new Promise(function(V){return setTimeout(V,w)})},I=function(){var w=m(k),V=u(w,2),te=V[0],ue=V[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){return ue(2e3)},children:"Start"})}),Object(n.jsxs)("div",{children:["Loading: ",""+te]})]})};I.displayName="Default"},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var B=e("./node_modules/react/index.js"),re=e.n(B),K=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var Z=function(){var H=Object(K.a)("(min-width: 900px)");return Object($.jsx)("div",{children:Object($.jsxs)("div",{children:["(min-width: 900px) : ",H?"matches":"does not match"]})})};Z.displayName="Default"},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return r});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L);function g(t,a){return l(t)||O(t,a)||j(t,a)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,a){if(!!t){if(typeof t=="string")return c(t,a);var m=Object.prototype.toString.call(t).slice(8,-1);if(m==="Object"&&t.constructor&&(m=t.constructor.name),m==="Map"||m==="Set")return Array.from(t);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return c(t,a)}}function c(t,a){(a==null||a>t.length)&&(a=t.length);for(var m=0,n=new Array(a);m<a;m++)n[m]=t[m];return n}function O(t,a){var m=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(m!=null){var n=[],u=!0,i=!1,_,d;try{for(m=m.call(t);!(u=(_=m.next()).done)&&(n.push(_.value),!(a&&n.length===a));u=!0);}catch(v){i=!0,d=v}finally{try{!u&&m.return!=null&&m.return()}finally{if(i)throw d}}return n}}function l(t){if(Array.isArray(t))return t}function s(t,a){try{return t.addEventListener("change",a),function(){return t.removeEventListener("change",a)}}catch(m){return t.addListener(a),function(){return t.removeListener(a)}}}function o(t){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}var r=function(a){var m=Object(L.useState)(o(a)),n=g(m,2),u=n[0],i=n[1],_=Object(L.useRef)();return Object(L.useEffect)(function(){if("matchMedia"in window)return _.current=window.matchMedia(a),i(_.current.matches),s(_.current,function(d){return i(d.matches)})},[a]),u}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return s});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),X=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),T=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),P=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=function(r,t){typeof r=="function"?r(t):typeof r=="object"&&r!==null&&"current"in r&&(r.current=t)},M=function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return Object(S.useCallback)(function(m){t.forEach(function(n){return A(n,m)})},t)},x=function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return function(m){t.forEach(function(n){return A(n,m)})}},y=e("./node_modules/react/jsx-runtime.js");function U(o,r){return j(o)||f(o,r)||W(o,r)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(o,r){if(!!o){if(typeof o=="string")return g(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(o,r)}}function g(o,r){(r==null||r>o.length)&&(r=o.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=o[t];return a}function f(o,r){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var a=[],m=!0,n=!1,u,i;try{for(t=t.call(o);!(m=(u=t.next()).done)&&(a.push(u.value),!(r&&a.length===r));m=!0);}catch(_){n=!0,i=_}finally{try{!m&&t.return!=null&&t.return()}finally{if(n)throw i}}return a}}function j(o){if(Array.isArray(o))return o}var c=`import React, { useEffect } from "react";

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
`,O={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},l=h.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/hooks/useMergedRef"},s=function(){var r=Object(T.a)(),t=U(r,2),a=t[0],m=t[1],n=Object(R.a)(function(){return alert("click away")}),u=M(m,n),i=Object(X.a)();return Object(S.useEffect)(function(){i()},[]),Object(y.jsx)("div",{children:Object(y.jsx)("div",{ref:u,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};s.displayName="Default"},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return g});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/core-js/modules/es.array.from.js");function R(f,j){return A(f)||P(f,j)||T(f,j)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(f,j){if(!!f){if(typeof f=="string")return Y(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Y(f,j)}}function Y(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function P(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,s=!1,o,r;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(t){s=!0,r=t}finally{try{!l&&c.return!=null&&c.return()}finally{if(s)throw r}}return O}}function A(f){if(Array.isArray(f))return f}var M={angle:0,type:"landscape-primary"},x=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,c=Object(B.useState)(j),O=R(c,2),l=O[0],s=O[1];return Object(B.useEffect)(function(){var o=window.screen,r=!0,t=function(){if(r){var m=o,n=m.orientation;if(n){var u=n.angle,i=n.type;s({angle:u,type:i})}else window.orientation!==void 0?s({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):s(j)}};return window.addEventListener("orientationchange",t),t(),function(){r=!1,window.addEventListener("orientationchange",t)}},[]),l},y=e("./node_modules/react/jsx-runtime.js"),U=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,L={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},W=h.default={parameters:{storySource:{source:`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useOrientation"},g=function(){var j=x();return Object(y.jsx)("div",{children:JSON.stringify(j)})};g.displayName="Default"},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return J});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),K=function(){var z=window.navigator,S=z.userAgent,R=z.platform,X=["Macintosh","MacIntel","MacPPC","Mac68K"],T=["Win32","Win64","Windows","WinCE"],Y=["iPhone","iPad","iPod"],P="unknown";return X.indexOf(R)!==-1?P="macos":Y.indexOf(R)!==-1?P="ios":T.indexOf(R)!==-1?P="windows":/Android/.test(S)?P="android":!P&&/Linux/.test(R)&&(P="linux"),P},$=function(){return typeof window!="undefined"?K():"unknown"},Q=e("./node_modules/react/jsx-runtime.js"),q=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},Z=h.default={parameters:{storySource:{source:`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useOs"},J=function(){var z=$();return Object(Q.jsx)("div",{children:z})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=function(f){Object(S.useEffect)(function(){if(!!f){var j=function(O){O=O||window.event;var l=O.relatedTarget||O.toElement;(!l||l.nodeName==="HTML")&&f()};return document.addEventListener("mouseout",j),function(){document.removeEventListener("mouseout",j)}}},[])},X=e("./node_modules/react/jsx-runtime.js");function T(g,f){return x(g)||M(g,f)||P(g,f)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(g,f){if(!!g){if(typeof g=="string")return A(g,f);var j=Object.prototype.toString.call(g).slice(8,-1);if(j==="Object"&&g.constructor&&(j=g.constructor.name),j==="Map"||j==="Set")return Array.from(g);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return A(g,f)}}function A(g,f){(f==null||f>g.length)&&(f=g.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=g[j];return c}function M(g,f){var j=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,s,o;try{for(j=j.call(g);!(O=(s=j.next()).done)&&(c.push(s.value),!(f&&c.length===f));O=!0);}catch(r){l=!0,o=r}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function x(g){if(Array.isArray(g))return g}var y=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,U={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},L=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}}}},title:"@travelmakers-design/hooks/usePageLeave"},W=function(){var f=Object(S.useState)(0),j=T(f,2),c=j[0],O=j[1];return R(function(){return O(function(l){return l+1})}),Object(X.jsxs)("div",{children:["Page leave count: ",c]})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return O});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.array.concat.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js");function X(l){return P(l)||Y(l)||x(l)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function P(l){if(Array.isArray(l))return y(l)}function A(l,s){return L(l)||U(l,s)||x(l,s)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(l,s){if(!!l){if(typeof l=="string")return y(l,s);var o=Object.prototype.toString.call(l).slice(8,-1);if(o==="Object"&&l.constructor&&(o=l.constructor.name),o==="Map"||o==="Set")return Array.from(l);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return y(l,s)}}function y(l,s){(s==null||s>l.length)&&(s=l.length);for(var o=0,r=new Array(s);o<s;o++)r[o]=l[o];return r}function U(l,s){var o=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(o!=null){var r=[],t=!0,a=!1,m,n;try{for(o=o.call(l);!(t=(m=o.next()).done)&&(r.push(m.value),!(s&&r.length===s));t=!0);}catch(u){a=!0,n=u}finally{try{!t&&o.return!=null&&o.return()}finally{if(a)throw n}}return r}}function L(l){if(Array.isArray(l))return l}var W=function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=Object(B.useState)({state:o.slice(0,s),queue:o.slice(s)}),t=A(r,2),a=t[0],m=a.state,n=a.queue,u=t[1],i=function(){for(var b=arguments.length,C=new Array(b),E=0;E<b;E++)C[E]=arguments[E];return u(function(p){var k=[].concat(X(p.state),X(p.queue),C);return{state:k.slice(0,s),queue:k.slice(s)}})},_=function(b){return u(function(C){var E=b([].concat(X(C.state),X(C.queue)));return{state:E.slice(0,s),queue:E.slice(s)}})},d=function(){return u(function(b){return{state:b.state,queue:[]}})};return{state:m,queue:n,add:i,update:_,cleanQueue:d}},g=e("./node_modules/react/jsx-runtime.js"),f=`import React, { useState } from "react";

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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},c=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useQueue"},O=function(){var s=W(10,[1,2,3]),o=s.state,r=s.queue,t=s.add,a=s.update,m=s.cleanQueue;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:["state: ",o]}),Object(g.jsxs)("div",{children:["queue: ",r]}),Object(g.jsx)("button",{onClick:function(){return t(5)},children:"add 5"}),Object(g.jsx)("button",{onClick:function(){return a(function(u){return u})},children:"update"}),Object(g.jsx)("button",{onClick:m,children:"clear"})]})};O.displayName="Default"},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(n,u){return r(n)||o(n,u)||l(n,u)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(n,u){if(!!n){if(typeof n=="string")return s(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(n,u)}}function s(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function o(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function r(n){if(Array.isArray(n))return n}var t=`import React, { useEffect } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};h.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/hooks/useRafState"};var m=function(){var u=Object(g.a)({width:0,height:0}),i=c(u,2),_=i[0],d=i[1];return Object(L.useEffect)(function(){var v=function(){d({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}},[]),Object(f.jsx)("pre",{children:JSON.stringify(_,null,2)})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return s});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L);function g(o,r){return l(o)||O(o,r)||j(o,r)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(o,r){if(!!o){if(typeof o=="string")return c(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(o,r)}}function c(o,r){(r==null||r>o.length)&&(r=o.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=o[t];return a}function O(o,r){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var a=[],m=!0,n=!1,u,i;try{for(t=t.call(o);!(m=(u=t.next()).done)&&(a.push(u.value),!(r&&a.length===r));m=!0);}catch(_){n=!0,i=_}finally{try{!m&&t.return!=null&&t.return()}finally{if(n)throw i}}return a}}function l(o){if(Array.isArray(o))return o}var s=function(r){var t=Object(L.useRef)(0),a=Object(L.useState)(r),m=g(a,2),n=m[0],u=m[1],i=Object(L.useCallback)(function(_){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){u(_)})},[]);return[n,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return t});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function T(a,m){return x(a)||M(a,m)||P(a,m)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(a,m){if(!!a){if(typeof a=="string")return A(a,m);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(a,m)}}function A(a,m){(m==null||m>a.length)&&(m=a.length);for(var n=0,u=new Array(m);n<m;n++)u[n]=a[n];return u}function M(a,m){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var u=[],i=!0,_=!1,d,v;try{for(n=n.call(a);!(i=(d=n.next()).done)&&(u.push(d.value),!(m&&u.length===m));i=!0);}catch(b){_=!0,v=b}finally{try{!i&&n.return!=null&&n.return()}finally{if(_)throw v}}return u}}function x(a){if(Array.isArray(a))return a}var y={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},U=typeof window!="undefined",L=function(){var m=Object(S.useRef)(null),n=Object(X.a)(y),u=T(n,2),i=u[0],_=u[1],d=Object(S.useMemo)(function(){return U?new ResizeObserver(function(v){var b=v[0];b&&_(b.contentRect)}):null},[]);return Object(S.useEffect)(function(){return m.current&&d.observe(m.current),function(){d.disconnect()}},[m.current]),[m,i]},W=e("./node_modules/react/jsx-runtime.js");function g(a,m){return l(a)||O(a,m)||j(a,m)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a,m){if(!!a){if(typeof a=="string")return c(a,m);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(a,m)}}function c(a,m){(m==null||m>a.length)&&(m=a.length);for(var n=0,u=new Array(m);n<m;n++)u[n]=a[n];return u}function O(a,m){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var u=[],i=!0,_=!1,d,v;try{for(n=n.call(a);!(i=(d=n.next()).done)&&(u.push(d.value),!(m&&u.length===m));i=!0);}catch(b){_=!0,v=b}finally{try{!i&&n.return!=null&&n.return()}finally{if(_)throw v}}return u}}function l(a){if(Array.isArray(a))return a}var s=`import React, { useEffect } from "react";

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
`,o={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},r=h.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useResize"},t=function(){var m=L(),n=g(m,2),u=n[0],i=n[1],_=Object(R.a)();return Object(S.useEffect)(function(){_()},[]),Object(W.jsxs)("div",{children:[Object(W.jsx)("textarea",{ref:u,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(W.jsx)("div",{children:JSON.stringify(i)})]})};t.displayName="Default"},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/es.parse-int.js");function X(){var n=document.createElement("style");return n.type="text/css",n.setAttribute("tm-scroll-lock",""),n}function T(n){var u=document.head||document.getElementsByTagName("head")[0];u.appendChild(n)}function Y(n,u){n.styleSheet?n.styleSheet.cssText=u:n.appendChild(document.createTextNode(u))}function P(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var n=parseInt(window.getComputedStyle(document.body).paddingRight,10),u=window.innerWidth-document.documentElement.clientWidth;return n+u}var A=function(u){var i=u.disableBodyPadding,_=i?null:P(),d=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return d};function M(n,u){return W(n)||L(n,u)||y(n,u)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,u){if(!!n){if(typeof n=="string")return U(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return U(n,u)}}function U(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function L(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function W(n){if(Array.isArray(n))return n}var g=function(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(S.useState)(u||!1),d=M(_,2),v=d[0],b=d[1],C=Object(S.useRef)(0),E=i.disableBodyPadding,p=Object(S.useRef)(null),k=function(){C.current=window.scrollY;var w=A({disableBodyPadding:E}),V=X();Y(V,w),T(V),p.current=V},I=function(){!(p!=null&&p.current)||(p.current.parentNode.removeChild(p.current),p.current=null)};return Object(S.useEffect)(function(){return v?k():I(),I},[v]),Object(S.useEffect)(function(){u!==void 0&&b(u)},[u]),Object(S.useEffect)(function(){u===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&b(!0)},[b]),[v,b]},f=e("./node_modules/react/jsx-runtime.js");function j(n,u){return o(n)||s(n,u)||O(n,u)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(n,u){if(!!n){if(typeof n=="string")return l(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(n,u)}}function l(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function s(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function o(n){if(Array.isArray(n))return n}var r=`import React, { useState } from "react";

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
`,t={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useScrollLock"},m=function(){var u=Object(S.useState)(!1),i=j(u,2),_=i[0],d=i[1],v=g(_);return Object(f.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(f.jsx)("button",{onClick:function(){return d(function(C){return!C})},children:_?"Unlock":"Lock"}),v?"Scroll locked":"Scrollable"]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return g});var B=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function X(f,j){return M(f)||A(f,j)||Y(f,j)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(f,j){if(!!f){if(typeof f=="string")return P(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return P(f,j)}}function P(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function A(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,s=!1,o,r;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(t){s=!0,r=t}finally{try{!l&&c.return!=null&&c.return()}finally{if(s)throw r}}return O}}function M(f){if(Array.isArray(f))return f}var x=function(j,c){var O=Object(R.a)(j,c),l=X(O,2),s=l[0],o=l[1];return Object(B.useEffect)(function(){return s(),o},[s,o]),o},y=e("./node_modules/react/jsx-runtime.js"),U=`import React from "react";
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
`,L={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},W=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@travelmakers-design/hooks/useTimeout"},g=function(){var j=x(function(){alert("fire!")},2e3);return Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:j,children:"Clear"})})};g.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(n,u){return r(n)||o(n,u)||l(n,u)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(n,u){if(!!n){if(typeof n=="string")return s(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(n,u)}}function s(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function o(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function r(n){if(Array.isArray(n))return n}var t=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var m=function(){var u=Object(g.a)(function(){alert("fire!")},2e3),i=c(u,2),_=i[0],d=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:_,children:"Run"}),Object(f.jsx)("button",{onClick:d,children:"Clear"})]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return q});var B=e("./node_modules/core-js/modules/web.timers.js"),re=e.n(B),K=e("./node_modules/react/index.js"),$=e.n(K),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(Z,J){var H=Object(K.useRef)(),z=Object(Q.a)(Z),S=Object(K.useCallback)(function(){H.current&&clearTimeout(H.current),H.current=setTimeout(function(){z()},J)},[J]),R=Object(K.useCallback)(function(){H.current&&clearTimeout(H.current)},[]);return Object(K.useEffect)(function(){return R},[R]),[S,R]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return l});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js");function R(s,o){return A(s)||P(s,o)||T(s,o)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(s,o){if(!!s){if(typeof s=="string")return Y(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(s,o)}}function Y(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function P(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function A(s){if(Array.isArray(s))return s}var M=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=Object(S.useState)(o),t=R(r,2),a=t[0],m=t[1],n=Object(S.useCallback)(function(u){return m(function(i){return typeof u=="boolean"?u:!i})},[]);return[a,n]},x=e("./node_modules/react/jsx-runtime.js");function y(s,o){return f(s)||g(s,o)||L(s,o)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(s,o){if(!!s){if(typeof s=="string")return W(s,o);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(s,o)}}function W(s,o){(o==null||o>s.length)&&(o=s.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=s[r];return t}function g(s,o){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var t=[],a=!0,m=!1,n,u;try{for(r=r.call(s);!(a=(n=r.next()).done)&&(t.push(n.value),!(o&&t.length===o));a=!0);}catch(i){m=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw u}}return t}}function f(s){if(Array.isArray(s))return s}var j=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},O=h.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useToggle"},l=function(){var o=M(),r=y(o,2),t=r[0],a=r[1];return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:["current state: ",""+t]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(x.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(x.jsx)("button",{onClick:a,children:"toggle"})]})]})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return o});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/react/index.js"),R=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function X(r,t){return M(r)||A(r,t)||Y(r,t)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(r,t){if(!!r){if(typeof r=="string")return P(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(r,t)}}function P(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function A(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function M(r){if(Array.isArray(r))return r}var x=function(t){var a=t.value,m=t.defaultValue,n=t.finalValue,u=t.rule,i=t.onChange,_=t.onValueUpdate,d=u(a),v=Object(S.useRef)("initial"),b=u(m)?m:n,C=Object(S.useState)(b),E=X(C,2),p=E[0],k=E[1],I=d?a:p;!d&&v.current==="controlled"&&(I=n),v.current=d?"controlled":"uncontrolled";var D=v.current,w=function(te){typeof i=="function"&&i(te),D==="uncontrolled"&&k(te)};return Object(S.useEffect)(function(){D==="uncontrolled"&&k(I),typeof _=="function"&&_(I)},[D,I]),[I,w,v.current]},y=e("./node_modules/react/jsx-runtime.js");function U(r,t){return j(r)||f(r,t)||W(r,t)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(r,t){if(!!r){if(typeof r=="string")return g(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(r,t)}}function g(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,m=new Array(t);a<t;a++)m[a]=r[a];return m}function f(r,t){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var m=[],n=!0,u=!1,i,_;try{for(a=a.call(r);!(n=(i=a.next()).done)&&(m.push(i.value),!(t&&m.length===t));n=!0);}catch(d){u=!0,_=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(u)throw _}}return m}}function j(r){if(Array.isArray(r))return r}var c=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},l=h.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},s=function(t){var a=t.label,m=t.value,n=t.defaultValue,u=t.onChange,i=Object(R.a)(),_=x({value:m,defaultValue:n,finalValue:null,onChange:u,rule:function(E){return typeof E=="string"}}),d=U(_,2),v=d[0],b=d[1];return Object(y.jsxs)("div",{style:{padding:"1rem"},children:[Object(y.jsx)("label",{htmlFor:i,children:a}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{id:i,type:"text",value:v,onChange:function(E){return b(E.target.value)}})]})};s.displayName="CustomInput";var o=function(){var t=Object(S.useState)("controlled"),a=U(t,2),m=a[0],n=a[1];return Object(y.jsxs)("div",{style:{padding:20},children:[Object(y.jsx)(s,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(y.jsx)(s,{label:"Controlled",value:m,onChange:n}),Object(y.jsx)(s,{label:"Controlled (fixed value)",value:"fixed",onChange:n})]})};o.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var B=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(B),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Q),N=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(N),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(J),z=e("./node_modules/core-js/modules/es.string.iterator.js"),S=e.n(z),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(T),P=e("./node_modules/core-js/modules/es.array.slice.js"),A=e.n(P),M=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(M),y=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(y),L=e("./node_modules/react/index.js"),W=e.n(L),g=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(n,u){return r(n)||o(n,u)||l(n,u)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(n,u){if(!!n){if(typeof n=="string")return s(n,u);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(n,u)}}function s(n,u){(u==null||u>n.length)&&(u=n.length);for(var i=0,_=new Array(u);i<u;i++)_[i]=n[i];return _}function o(n,u){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var _=[],d=!0,v=!1,b,C;try{for(i=i.call(n);!(d=(b=i.next()).done)&&(_.push(b.value),!(u&&_.length===u));d=!0);}catch(E){v=!0,C=E}finally{try{!d&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function r(n){if(Array.isArray(n))return n}var t=`import React, { useEffect, useState } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};h.default={parameters:{storySource:{source:`import React, { useEffect, useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var m=function(){var u=Object(L.useState)(""),i=c(u,2),_=i[0],d=i[1];return Object(L.useEffect)(function(){console.log("useEffect:",_)},[_]),Object(g.a)(function(){console.log("useUpdateEffect:",_)},[_]),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"text",onChange:function(b){return d(b.target.value)}})})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return K});var B=e("./node_modules/react/index.js"),re=e.n(B),K=function(Q,q){var N=Object(B.useRef)(!0);Object(B.useEffect)(function(){if(!N.current)return Q();N.current=!1},q)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,h,e){"use strict";e.d(h,"c",function(){return R}),e.d(h,"d",function(){return X}),e.d(h,"b",function(){return T}),e.d(h,"a",function(){return P});var B=e("./node_modules/react/index.js"),re=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),K=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),$=e("./node_modules/react/jsx-runtime.js"),Q=function(M){var x=M.styles,y=R();return Object($.jsx)(K.a,{styles:Object(K.b)(x(y))})};Q.displayName="Global";var q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},N=function(){return Object($.jsx)(K.a,{styles:q})};N.displayName="NormalizeCSS";var Z=e("./node_modules/core-js/modules/es.array.reduce.js"),J=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.object.assign.js");function z(A,M){return M?Object.keys(A).reduce(function(x,y){if(y==="headings"&&M.headings){var U=M.headings?Object.keys(A.headings).reduce(function(L,W){return L[W]=Object.assign({},A.headings[W],M.headings[W]),L},{}):A.headings;return Object.assign({},x,{headings:Object.assign({},A.headings,M.headings,U)})}return x[y]=typeof M[y]=="object"?Object.assign({},A[y],M[y]):M[y]||A[y],x},{}):A}var S=Object(B.createContext)({theme:re.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function R(){var A;return((A=Object(B.useContext)(S))===null||A===void 0?void 0:A.theme)||re.a}function X(){var A;return((A=Object(B.useContext)(S))===null||A===void 0?void 0:A.styles)||{}}function T(){var A;return((A=Object(B.useContext)(S))===null||A===void 0?void 0:A.emotionOptions)||{key:"co",prepend:!0}}var Y=function(){return Object($.jsx)(Q,{styles:function(x){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:x.fontFamily,backgroundColor:x.colorScheme==="dark"?x.colors.black:x.colors.white,color:x.colorScheme==="dark"?x.palettes.gray[0]:x.palettes.gray[9],lineHeight:x.lineHeight,fontSizes:x.fontSizes.medium}}}})};Y.displayName="GlobalStyles";var P=function(M){var x=M.theme,y=M.styles,U=y===void 0?{}:y,L=M.emotionOptions,W=M.withNormalizeCSS,g=W===void 0?!1:W,f=M.withGlobalStyles,j=f===void 0?!1:f,c=M.children;return Object($.jsxs)(S.Provider,{value:{theme:z(re.a,x),styles:U,emotionOptions:L},children:[g&&Object($.jsx)(N,{}),j&&Object($.jsx)(Y,{}),c]})};P.displayName="TmProvider",P.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(oe,h,e){"use strict";e.d(h,"b",function(){return ce}),e.d(h,"a",function(){return ge});var B=e("./node_modules/core-js/modules/es.object.keys.js"),re={dark:["#EBEBEC","#C3C4C6","#9A9BA1","#71747C","#54575F","#474A52","#383B43","#2F3137","#23252A","#1A1B1F"],gray:["#FCFCFD","#F6F7F9","#E9EBF0","#D5DADF","#9BA3AE","#7D838F","#5D636D","#343942","#232830","#171B24"],purple:["#F6F2FF","#E8DAFF","#D4BBFF","#BE95FF","#A56EFF","#8A3FFC","#6929C4","#491D8B","#31135E","#200050"],blue:["#EDF5FF","#D0E2FF","#A6C8FF","#78A9FF","#4589FF","#0F62FE","#0043CE","#002D9C","#001D6C","#011754"],red:["#FFF1F1","#FFD7D9","#FFB3B8","#FF8389","#FA4D56","#DA1E28","#A2191F","#750E13","#570408","#420003"],orange:["#FFF9F2","#FADFC3","#F3C087","#F6A851","#ED8C23","#E07602","#A65701","#8B4901","#673401","#4A2700"],green:["#EFFFF4","#C9F4D8","#96E2B0","#68D08C","#3FB768","#24AD53","#1B803E","#0E5B28","#0C3F1D","#003412"]},K={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},$={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Q={tiny:11,xsmall:12,small:14,medium:16,large:18,xlarge:20},q={small:2,medium:4,large:8,round:9999,circular:"50%"},N={xsmall:4,small:8,medium:16,large:24,xlarge:40},Z={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},J={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},H={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},z={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},S=e("./node_modules/core-js/modules/es.object.assign.js"),R=function(G){for(var se="",me=1;me<G.length-1;me+=1)se+=G[me]+" "+me/(G.length-1)*100+"%, ";return G[0]+" 0%, "+se+G[G.length-1]+" 100%"},X=function(G){for(var se=arguments.length,me=new Array(se>1?se-1:0),he=1;he<se;he++)me[he-1]=arguments[he];return"linear-gradient("+G+"deg, "+R(me)+")"},T=function(){for(var G=arguments.length,se=new Array(G),me=0;me<G;me++)se[me]=arguments[me];return"radial-gradient(circle, "+R(se)+")"},Y=function(G){return typeof G.size=="number"?G.size:G.sizes[G.size]||G.size||G.sizes.medium},P=function(G){return function(se){return"@media (min-width: "+(Y({size:se,sizes:G.breakpoints})+1)+"px)"}},A=function(G){return function(se){return"@media (max-width: "+Y({size:se,sizes:G.breakpoints})+"px)"}},M=e("./node_modules/core-js/modules/es.string.replace.js"),x=e("./node_modules/core-js/modules/es.regexp.exec.js"),y=e("./node_modules/core-js/modules/es.number.is-nan.js"),U=e("./node_modules/core-js/modules/es.number.constructor.js"),L=e("./node_modules/core-js/modules/es.parse-int.js"),W=e("./node_modules/core-js/modules/es.array.map.js"),g=e("./node_modules/core-js/modules/es.string.split.js"),f=e("./node_modules/core-js/modules/es.string.starts-with.js"),j=e("./node_modules/core-js/modules/es.array.is-array.js"),c=e("./node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/core-js/modules/es.symbol.description.js"),l=e("./node_modules/core-js/modules/es.object.to-string.js"),s=e("./node_modules/core-js/modules/es.symbol.iterator.js"),o=e("./node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),a=e("./node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js");function u(ae,G){return b(ae)||v(ae,G)||_(ae,G)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(ae,G){if(!!ae){if(typeof ae=="string")return d(ae,G);var se=Object.prototype.toString.call(ae).slice(8,-1);if(se==="Object"&&ae.constructor&&(se=ae.constructor.name),se==="Map"||se==="Set")return Array.from(ae);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return d(ae,G)}}function d(ae,G){(G==null||G>ae.length)&&(G=ae.length);for(var se=0,me=new Array(G);se<G;se++)me[se]=ae[se];return me}function v(ae,G){var se=ae==null?null:typeof Symbol!="undefined"&&ae[Symbol.iterator]||ae["@@iterator"];if(se!=null){var me=[],he=!0,be=!1,pe,Ce;try{for(se=se.call(ae);!(he=(pe=se.next()).done)&&(me.push(pe.value),!(G&&me.length===G));he=!0);}catch(De){be=!0,Ce=De}finally{try{!he&&se.return!=null&&se.return()}finally{if(be)throw Ce}}return me}}function b(ae){if(Array.isArray(ae))return ae}var C=function(G){var se=G.replace("#","");return typeof se=="string"&&se.length===6&&!Number.isNaN(Number("0x"+se))},E=function(G){var se=G.replace("#",""),me=parseInt(se,16),he=me>>16&255,be=me>>8&255,pe=me&255;return{r:he,g:be,b:pe,a:1}},p=function(G){var se=G.replace(/[^0-9,.]/g,"").split(",").map(Number),me=u(se,4),he=me[0],be=me[1],pe=me[2],Ce=me[3];return{r:he,g:be,b:pe,a:Ce||1}},k=function(G){return C(G)?E(G):G.startsWith("rgb")?p(G):{r:0,g:0,b:0,a:1}},I=function(G,se){if(typeof G!="string"||se>1||se<0)return"rgba(0, 0, 0, 1)";var me=k(G),he=me.r,be=me.g,pe=me.b;return"rgba("+he+", "+be+", "+pe+", "+se+")"},D=function(G,se){var me=k(G),he=me.r,be=me.g,pe=me.b,Ce=me.a,De=1-se,Ae=function(xe){return Math.round(xe*De)};return"rgba("+Ae(he)+", "+Ae(be)+", "+Ae(pe)+", "+Ce+")"},w=function(G,se){var me=k(G),he=me.r,be=me.g,pe=me.b,Ce=me.a,De=function(Me){return Math.round(Me+(255-Me)*se)};return"rgba("+De(he)+", "+De(be)+", "+De(pe)+", "+Ce+")"},V=function(G){return G*8},te={linearGradient:X,radialGradient:T,smallerThan:A,largerThan:P,rgba:I,size:Y,darken:D,lighten:w,spacing:V},ue=function(G){return Object.assign({},G,{fn:{largerThan:te.largerThan(G),smallerThan:te.smallerThan(G),radialGradient:te.radialGradient,linearGradient:te.linearGradient,rgba:te.rgba,size:te.size,lighten:te.lighten,darken:te.darken,spacing:te.spacing}})},ve=Object.keys(re),le=Object.keys(K),ne=["xsmall","small","medium","large","xlarge"],ce=function(G){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:G.fontFamily||"sans-serif"}},_e={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"purple",colors:K,palettes:re,shadows:$,fontSizes:Q,radius:q,spacing:N,breakpoints:Z,headings:J,opacity:H,zIndex:z,extra:{}},ge=ue(_e)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return j});var B=e("./node_modules/core-js/modules/es.function.name.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),S=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.array.from.js");function P(c,O){return U(c)||y(c,O)||M(c,O)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(c,O){if(!!c){if(typeof c=="string")return x(c,O);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return x(c,O)}}function x(c,O){(O==null||O>c.length)&&(O=c.length);for(var l=0,s=new Array(O);l<O;l++)s[l]=c[l];return s}function y(c,O){var l=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var s=[],o=!0,r=!1,t,a;try{for(l=l.call(c);!(o=(t=l.next()).done)&&(s.push(t.value),!(O&&s.length===O));o=!0);}catch(m){r=!0,a=m}finally{try{!o&&l.return!=null&&l.return()}finally{if(r)throw a}}return s}}function U(c){if(Array.isArray(c))return c}function L(c){var O={};return Object.keys(c).forEach(function(l){var s=P(c[l],2),o=s[0],r=s[1];O[o]=r}),O}var W=e("./node_modules/core-js/modules/es.array.reduce.js");function g(c,O,l){return Object.keys(O).reduce(function(s,o){return s[o]=c(O[o],l?"tm-"+l+"-"+o:null),s},{})}var f=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function j(c){var O=typeof c=="function"?c:function(){return c};function l(s,o){var r=Object($.c)(),t=Object($.d)()[o==null?void 0:o.name],a=Object(f.a)(),m=a.css,n=a.cx,u=0;function i(E){return u+=1,"tm-ref_"+(E||"")+"_"+u}var _=O(r,s,i),d=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(r):(o==null?void 0:o.overrideStyles)||{},v=typeof t=="function"?t(r):t||{},b=typeof(o==null?void 0:o.co)=="function"?o.co(r):o==null?void 0:o.co,C=L(Object.keys(_).map(function(E){var p=n(m(_[E]),m(v[E]),m(d[E]),m(b));return[E,p]}));return{classes:g(n,C,o==null?void 0:o.name),cx:n,theme:r}}return l}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return C});var B=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/clsx/dist/clsx.m.js"),X=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),T=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),P=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./node_modules/react/index.js");function M(E){return L(E)||U(E)||y(E)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(E,p){if(!!E){if(typeof E=="string")return W(E,p);var k=Object.prototype.toString.call(E).slice(8,-1);if(k==="Object"&&E.constructor&&(k=E.constructor.name),k==="Map"||k==="Set")return Array.from(E);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return W(E,p)}}function U(E){if(typeof Symbol!="undefined"&&E[Symbol.iterator]!=null||E["@@iterator"]!=null)return Array.from(E)}function L(E){if(Array.isArray(E))return W(E)}function W(E,p){(p==null||p>E.length)&&(p=E.length);for(var k=0,I=new Array(p);k<p;k++)I[k]=E[k];return I}function g(E,p){var k=Object(A.useRef)();return(!k.current||p.length!==k.current.prevDeps.length||k.current.prevDeps.map(function(I,D){return I===p[D]}).indexOf(!1)>=0)&&(k.current={v:E(),prevDeps:M(p)}),k.current.v}var f=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),j=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),c=e("./node_modules/react/jsx-runtime.js"),O=function(){var E;function p(k){return E===void 0&&(E=Object(f.a)(k||{key:"co",prepend:!0})),E}return{getCache:p}}(),l=O.getCache,s=Object(A.createContext)(void 0);function o(){var E=Object(j.b)();return Object(A.useContext)(s)||l(E)}function r(E){var p=E.children,k=E.value;return Object(c.jsx)(s.Provider,{value:k,children:p})}r.displayName="CacheProvider";function t(E,p){return i(E)||u(E,p)||m(E,p)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(E,p){if(!!E){if(typeof E=="string")return n(E,p);var k=Object.prototype.toString.call(E).slice(8,-1);if(k==="Object"&&E.constructor&&(k=E.constructor.name),k==="Map"||k==="Set")return Array.from(E);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return n(E,p)}}function n(E,p){(p==null||p>E.length)&&(p=E.length);for(var k=0,I=new Array(p);k<p;k++)I[k]=E[k];return I}function u(E,p){var k=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(k!=null){var I=[],D=!0,w=!1,V,te;try{for(k=k.call(E);!(D=(V=k.next()).done)&&(I.push(V.value),!(p&&I.length===p));D=!0);}catch(ue){w=!0,te=ue}finally{try{!D&&k.return!=null&&k.return()}finally{if(w)throw te}}return I}}function i(E){if(Array.isArray(E))return E}var _="ref";function d(E){var p;if(E.length!==1)return{args:E,ref:p};var k=t(E,1),I=k[0];if(!(I instanceof Object))return{args:E,ref:p};if(!(_ in I))return{args:E,ref:p};p=I[_];var D=Object.assign({},I);return delete D[_],{args:[D],ref:p}}var v=function(){function E(k,I,D){var w=[],V=Object(T.a)(k,w,D);return w.length<2?D:V+I(w)}function p(k){var I=k.cache,D=function(){for(var te=arguments.length,ue=new Array(te),ve=0;ve<te;ve++)ue[ve]=arguments[ve];var le=d(ue),ne=le.ref,ce=le.args,_e=Object(X.a)(ce,I.registered);return Object(T.b)(I,_e,!1),I.key+"-"+_e.name+(ne===void 0?"":" "+ne)},w=function(){for(var te=arguments.length,ue=new Array(te),ve=0;ve<te;ve++)ue[ve]=arguments[ve];return E(I.registered,D,Object(R.a)(ue))};return{css:D,cx:w}}return{cssFactory:p}}(),b=v.cssFactory;function C(){var E=o();return g(function(){return b({cache:E})},[E])}},"./storybook-init-framework-entry.js":function(oe,h,e){"use strict";e.r(h);var B=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,h,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,h){}},[[0,4,5]]]);
