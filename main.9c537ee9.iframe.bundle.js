(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,p,e){"use strict";e.r(p);var R={};e.r(R),e.d(R,"parameters",function(){return a}),e.d(R,"decorators",function(){return s});var te=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.array.filter.js"),Y=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),q=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),J=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),X=e("./node_modules/core-js/modules/es.object.define-properties.js"),H=e("./node_modules/core-js/modules/es.object.define-property.js"),z=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),k=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/index.js"),U=e("./node_modules/react/jsx-runtime.js");function W(u,v){return O(u)||c(u,v)||f(u,v)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(u,v){if(!!u){if(typeof u=="string")return j(u,v);var b=Object.prototype.toString.call(u).slice(8,-1);if(b==="Object"&&u.constructor&&(b=u.constructor.name),b==="Map"||b==="Set")return Array.from(u);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return j(u,v)}}function j(u,v){(v==null||v>u.length)&&(v=u.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=u[b];return C}function c(u,v){var b=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(b!=null){var C=[],E=!0,h=!1,A,S;try{for(b=b.call(u);!(E=(A=b.next()).done)&&(C.push(A.value),!(v&&C.length===v));E=!0);}catch(D){h=!0,S=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(h)throw S}}return C}}function O(u){if(Array.isArray(u))return u}var l=Object(B.createContext)(null),n=function(){var v=Object(B.useContext)(l);if(!v)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return v},o=function(v){var b=v.colorScheme,C=v.toggleColorScheme,E=v.children,h=Object(B.useState)("init"),A=W(h,2),S=A[0],D=A[1];return Object(B.useEffect)(function(){D("update")},[]),Object(U.jsx)(l.Provider,{value:{colorScheme:b,toggleColorScheme:C},children:E},S)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var t=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",darkMode:{current:"light"}};function m(u){var v=Object(r.useDarkMode)()?"dark":"light";return Object(U.jsx)(o,{colorScheme:v,toggleColorScheme:function(){},children:Object(U.jsx)(t.a,{theme:{colorScheme:v},withGlobalStyles:!0,withNormalizeCSS:!0,children:u.children})})}m.displayName="ThemeWrapper";var s=[function(u){return Object(U.jsx)(m,{children:u()})}];function d(u,v){var b=Object.keys(u);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(u);v&&(C=C.filter(function(E){return Object.getOwnPropertyDescriptor(u,E).enumerable})),b.push.apply(b,C)}return b}function i(u){for(var v=1;v<arguments.length;v++){var b=arguments[v]!=null?arguments[v]:{};v%2?d(Object(b),!0).forEach(function(C){_(u,C,b[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(C){Object.defineProperty(u,C,Object.getOwnPropertyDescriptor(b,C))})}return u}function _(u,v,b){return v in u?Object.defineProperty(u,v,{value:b,enumerable:!0,configurable:!0,writable:!0}):u[v]=b,u}Object.keys(R).forEach(function(u){var v=R[u];switch(u){case"args":return Object(z.d)(v);case"argTypes":return Object(z.b)(v);case"decorators":return v.forEach(function(C){return Object(z.f)(C,!1)});case"loaders":return v.forEach(function(C){return Object(z.g)(C,!1)});case"parameters":return Object(z.h)(i({},v),!1);case"argTypesEnhancers":return v.forEach(function(C){return Object(z.c)(C)});case"argsEnhancers":return v.forEach(function(C){return Object(z.e)(C)});case"render":return Object(z.i)(v);case"globals":case"globalTypes":{var b={};return b[u]=v,Object(z.h)(b,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(u+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,p,e){"use strict";(function(R){var te=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,te.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],R,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,p,e){var R={"./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function te($){var Y=K($);return e(Y)}function K($){if(!e.o(R,$)){var Y=new Error("Cannot find module '"+$+"'");throw Y.code="MODULE_NOT_FOUND",Y}return R[$]}te.keys=function(){return Object.keys(R)},te.resolve=K,oe.exports=te,te.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return c}),e.d(p,"OverrideStyles",function(){return O});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./node_modules/react/index.js"),N=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),J=e("./node_modules/core-js/modules/es.string.small.js"),X=e("./node_modules/core-js/modules/es.array.reduce.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/constants/index.ts"),k=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),w={xsmall:{height:M.a.xsmall,padding:"0 16px"},small:{height:M.a.small,padding:"0 16px"},medium:{height:M.a.medium,padding:"0 24px"},large:{height:M.a.large,padding:"0 24px"},xlarge:{height:M.a.xlarge,padding:"0 30px"}},P=function(n){return{xsmall:{fontWeight:"normal",fontSize:n.fontSizes.xsmall},small:{fontWeight:"normal",fontSize:n.fontSizes.xsmall},medium:{fontWeight:"normal",fontSize:n.fontSizes.small},large:{fontWeight:"bold",fontSize:n.fontSizes.medium},xlarge:{fontWeight:"bold",fontSize:n.fontSizes.xlarge}}},G=Object.keys(w).reduce(function(l,n){return l[n]=w[n].height,l},{}),L=function(n){return{display:n?"block":"inline-block",width:n?"100%":"auto"}},I=Object(H.a)(function(l,n,o){var t,r,a,m,s,d=n.color,i=n.size,_=n.fullWidth,u=o("loading"),v=o("inner"),b=o("spinner"),C=d||l.primaryColor;return{loading:(t={ref:u,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},t["."+v]={opacity:0},t["."+b]={display:"flex"},t),solid:(r={backgroundColor:l.palettes[C][l.colorScheme==="light"?5:3],color:l.colorScheme==="light"?l.colors.white:l.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:l.palettes[C][l.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:l.palettes[C][l.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},r["&:disabled:not(."+u+")"]={backgroundColor:l.palettes.gray[2],color:Object(k.a)(l.colors.black,l.opacity.opacity3)},r),ghost:(a={backgroundColor:l.colors.transparent,border:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(k.a)(l.palettes[C][l.colorScheme==="light"?0:8],l.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(k.a)(l.palettes[C][l.colorScheme==="light"?1:7],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},a["&:disabled:not(."+u+")"]={color:Object(k.a)(l.palettes[C][1],l.opacity.opacity3),border:"1px solid "+Object(k.a)(l.palettes[C][1],l.opacity.opacity3)},a),"light-solid":(m={backgroundColor:Object(k.a)(l.colorScheme==="light"?l.colors.black:l.colors.white,l.opacity.opacity1),color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(k.a)(l.palettes.dark[l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(k.a)(l.palettes.dark[l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},m["&:disabled:not(."+u+")"]={backgroundColor:Object(k.a)(l.palettes.dark[l.colorScheme==="light"?4:1],l.opacity.opacity1),color:Object(k.a)(l.palettes[C][l.colorScheme==="light"?7:3],l.opacity.opacity3)},m),text:(s={backgroundColor:"transparent",color:l.palettes[C][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(k.a)(l.palettes[C][l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(k.a)(l.palettes[C][l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[C][l.colorScheme==="light"?5:3]}}},s["&:disabled:not(."+u+")"]={color:Object(k.a)(l.palettes[C][l.colorScheme==="light"?7:3],l.opacity.opacity3)},s),root:Object.assign({},w[i],L(_),Object(z.b)(l),P(l)[i],{borderRadius:l.radius.medium,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:v,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:b,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),T=e("./node_modules/react/jsx-runtime.js"),g=["children","component","size","color","variant","fullWidth","type","disabled","leftIcon","rightIcon","loading","spinnerProps","className","co","overrideStyles"];function B(l,n){if(l==null)return{};var o=U(l,n),t,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,t)||(o[t]=l[t]))}return o}function U(l,n){if(l==null)return{};var o={},t=Object.keys(l),r,a;for(a=0;a<t.length;a++)r=t[a],!(n.indexOf(r)>=0)&&(o[r]=l[r]);return o}var W=Object(q.forwardRef)(function(l,n){var o,t=l.children,r=l.component,a=l.size,m=a===void 0?"medium":a,s=l.color,d=l.variant,i=d===void 0?"solid":d,_=l.fullWidth,u=_===void 0?!1:_,v=l.type,b=v===void 0?"button":v,C=l.disabled,E=C===void 0?!1:C,h=l.leftIcon,A=l.rightIcon,S=l.loading,D=S===void 0?!1:S,Q=l.spinnerProps,V=l.className,re=l.co,de=l.overrideStyles,ve=B(l,g),le=Object(Y.c)(),se=s||le.primaryColor,ce=I({color:s,size:m,fullWidth:u},{overrideStyles:de,name:"Button"}),_e=ce.classes,ye=ce.cx,ae=Object(T.jsx)(N.a,Object.assign({color:i==="solid"?le.colors.white:le.palettes[se][6],size:M.a[m]/2},Q));return Object(T.jsxs)(x.a,Object.assign({component:r||"button",ref:n,type:b,disabled:E||D,className:ye((o={},o[_e.loading]=D,o),_e.root,_e[i],V),co:re,onTouchStart:function(){}},ve,{children:[Object(T.jsxs)("div",{className:_e.inner,children:[h&&Object(T.jsx)("span",{className:ye(_e.icon,_e.leftIcon),children:h}),Object(T.jsx)("span",{className:_e.label,children:t}),A&&Object(T.jsx)("span",{className:ye(_e.icon,_e.rightIcon),children:A})]}),Object(T.jsx)("div",{className:_e.spinnerWrapper,children:ae})]}))});W.displayName="@travelmakers-design/core/Button";var y=`import { Button } from "../Button";
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
`,f={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},OverrideStyles:{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}},j=p.default={parameters:{storySource:{source:`import { Button } from "../Button";
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
`,locationsMap:{default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},"override-styles":{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}}}},title:"@travelmakers-design/core/Button",component:W,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green","dark"],control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},c=function(n){return Object(T.jsx)(W,Object.assign({},n,{children:"Button"}))};c.displayName="Default";var O=function(n){return Object(T.jsx)(W,Object.assign({},n,{overrideStyles:{solid:{backgroundColor:"black","&:not(:disabled):hover":{backgroundColor:"#222"},"&:not(:disabled):active":{backgroundColor:"#444"}}},children:"Button"}))};O.displayName="OverrideStyles"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(oe,p,e){"use strict";e.d(p,"a",function(){return T});var R=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),N=e("./packages/travelmakers-design-core/src/constants/index.ts"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),X=e("./node_modules/core-js/modules/es.string.small.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),k={xsmall:{width:N.a.xsmall,height:N.a.xsmall},small:{width:N.a.small,height:N.a.small},medium:{width:N.a.medium,height:N.a.medium},large:{width:N.a.large,height:N.a.large},xlarge:{width:N.a.xlarge,height:N.a.xlarge}},w={xsmall:8,small:8,medium:16,large:16,xlarge:24},P=Object(H.a)(function(g,B,U){var W,y,f,j,c,O=B.color,l=B.size,n=U("loading"),o=U("inner"),t=U("spinner"),r=O||g.primaryColor;return{loading:(W={ref:n,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},W["."+o]={opacity:0},W["."+t]={display:"flex"},W),solid:(y={backgroundColor:g.palettes[r][g.colorScheme==="light"?5:3],color:g.colorScheme==="light"?g.colors.white:g.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:g.palettes[r][g.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:g.palettes[r][g.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3]}}},y["&:disabled:not(."+n+")"]={backgroundColor:g.palettes.gray[2],color:Object(M.a)(g.colors.black,g.opacity.opacity3)},y),ghost:(f={backgroundColor:g.colors.transparent,border:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3],color:g.palettes[r][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(M.a)(g.palettes[r][g.colorScheme==="light"?0:8],g.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(M.a)(g.palettes[r][g.colorScheme==="light"?1:7],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3]}}},f["&:disabled:not(."+n+")"]={color:Object(M.a)(g.palettes[r][1],g.opacity.opacity3),border:"1px solid "+Object(M.a)(g.palettes[r][1],g.opacity.opacity3)},f),"light-solid":(j={backgroundColor:Object(M.a)(g.colorScheme==="light"?g.colors.black:g.colors.white,g.opacity.opacity1),color:g.palettes[r][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(M.a)(g.palettes.dark[g.colorScheme==="light"?8:1],g.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(M.a)(g.palettes.dark[g.colorScheme==="light"?7:2],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3]}}},j["&:disabled:not(."+n+")"]={backgroundColor:Object(M.a)(g.palettes.dark[g.colorScheme==="light"?4:1],g.opacity.opacity1),color:Object(M.a)(g.palettes[r][g.colorScheme==="light"?7:3],g.opacity.opacity3)},j),text:(c={backgroundColor:"transparent",color:g.palettes[r][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(M.a)(g.palettes[r][g.colorScheme==="light"?8:1],g.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(M.a)(g.palettes[r][g.colorScheme==="light"?7:2],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+g.palettes[r][g.colorScheme==="light"?5:3]}}},c["&:disabled:not(."+n+")"]={color:Object(M.a)(g.palettes[r][g.colorScheme==="light"?7:3],g.opacity.opacity3)},c),root:Object.assign({},k[l],Object(z.b)(g),{borderRadius:g.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:o,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:k[l].width-w[l],height:k[l].height-w[l]}},spinnerWrapper:{ref:t,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),G=e("./node_modules/react/jsx-runtime.js"),L=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function I(g,B){if(g==null)return{};var U=x(g,B),W,y;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(g);for(y=0;y<f.length;y++)W=f[y],!(B.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,W)||(U[W]=g[W]))}return U}function x(g,B){if(g==null)return{};var U={},W=Object.keys(g),y,f;for(f=0;f<W.length;f++)y=W[f],!(B.indexOf(y)>=0)&&(U[y]=g[y]);return U}var T=Object(Y.forwardRef)(function(g,B){var U,W=g.children,y=g.component,f=g.size,j=f===void 0?"medium":f,c=g.color,O=g.variant,l=O===void 0?"solid":O,n=g.type,o=n===void 0?"button":n,t=g.disabled,r=t===void 0?!1:t,a=g.loading,m=a===void 0?!1:a,s=g.spinnerProps,d=g.className,i=g.co,_=g.overrideStyles,u=I(g,L),v=P({color:c,size:j},{overrideStyles:_,name:"Button"}),b=v.theme,C=v.classes,E=v.cx,h=c||b.primaryColor,A=Object(G.jsx)(q.a,Object.assign({color:l==="solid"?b.colors.white:b.palettes[h][6],size:N.a[j]/2},s));return Object(G.jsxs)(J.a,Object.assign({component:y||"button",className:E((U={},U[C.loading]=m,U),C.root,C[l],d),type:o,disabled:r||m,ref:B,onTouchStart:function(){},co:i},u,{children:[Object(G.jsx)("div",{className:C.inner,children:W}),Object(G.jsx)("div",{className:C.spinnerWrapper,children:A})]}))});T.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),q=e("./node_modules/react/index.js"),N=e("./node_modules/react/jsx-runtime.js"),J=function(I){return Object(N.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(N.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};J.displayName="CloseIcon",J.displayName="@travelmakers-design/core/CloseIcon";var X=["size","color"];function H(L,I){if(L==null)return{};var x=z(L,I),T,g;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(L);for(g=0;g<B.length;g++)T=B[g],!(I.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,T)||(x[T]=L[T]))}return x}function z(L,I){if(L==null)return{};var x={},T=Object.keys(L),g,B;for(B=0;B<T.length;B++)g=T[B],!(I.indexOf(g)>=0)&&(x[g]=L[g]);return x}var M=Object(q.forwardRef)(function(L,I){var x=L.size,T=x===void 0?"medium":x,g=L.color,B=g===void 0?"gray":g,U=H(L,X);return Object(N.jsx)(Y.a,Object.assign({size:T,color:B,ref:I},U,{children:Object(N.jsx)(J,{})}))});M.displayName="@travelmakers-design/core/CloseButton";var k=`import { CloseButton } from "../CloseButton";
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
`,w={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},P=p.default={parameters:{storySource:{source:`import { CloseButton } from "../CloseButton";
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}}}},title:"@travelmakers-design/core/CloseButton",component:M,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},G=function(I){return Object(N.jsx)(M,Object.assign({},I))};G.displayName="Default"},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return H});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e.n(R),K=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),$=e("./node_modules/react/index.js"),Y=e.n($),q=e("./node_modules/react/jsx-runtime.js"),N=e.n(q),J=`import { IconButton } from "../IconButton";
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
`,X={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};p.default={parameters:{storySource:{source:`import { IconButton } from "../IconButton";
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}}}},title:"@travelmakers-design/core/IconButton",component:K.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var H=function(M){var k=Object(q.jsx)("svg",{viewBox:"0 0 24 24",children:Object(q.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(q.jsx)(K.a,Object.assign({},M,{children:k}))};H.displayName="Default"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return E});var R=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),k=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),P=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),L=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),T=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),g=Object(T.a)(function(h,A){var S=A.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:S?S in h.radius?h.radius[S]:S:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:h.colorScheme==="dark"?h.palettes.gray[2]:h.palettes.gray[8],backgroundColor:h.colorScheme==="dark"?h.palettes.gray[8]:h.palettes.gray[2],borderRadius:S?S in h.radius?h.radius[S]:S:0}}}),B=e("./node_modules/react/jsx-runtime.js"),U=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function W(h,A){return O(h)||c(h,A)||f(h,A)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(h,A){if(!!h){if(typeof h=="string")return j(h,A);var S=Object.prototype.toString.call(h).slice(8,-1);if(S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set")return Array.from(h);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return j(h,A)}}function j(h,A){(A==null||A>h.length)&&(A=h.length);for(var S=0,D=new Array(A);S<A;S++)D[S]=h[S];return D}function c(h,A){var S=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(S!=null){var D=[],Q=!0,V=!1,re,de;try{for(S=S.call(h);!(Q=(re=S.next()).done)&&(D.push(re.value),!(A&&D.length===A));Q=!0);}catch(ve){V=!0,de=ve}finally{try{!Q&&S.return!=null&&S.return()}finally{if(V)throw de}}return D}}function O(h){if(Array.isArray(h))return h}function l(h,A){if(h==null)return{};var S=n(h,A),D,Q;if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(h);for(Q=0;Q<V.length;Q++)D=V[Q],!(A.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,D)||(S[D]=h[D]))}return S}function n(h,A){if(h==null)return{};var S={},D=Object.keys(h),Q,V;for(V=0;V<D.length;V++)Q=D[V],!(A.indexOf(Q)>=0)&&(S[Q]=h[Q]);return S}var o=null,t="loadImage",r=function(A,S){A.forEach(function(D){D.isIntersecting&&(S.unobserve(D.target),D.target.dispatchEvent(new CustomEvent(t)))})},a=Object(I.forwardRef)(function(h,A){var S=h.lazy,D=h.threshold,Q=D===void 0?.5:D,V=h.placeholder,re=h.src,de=h.radius,ve=h.width,le=ve===void 0?"100%":ve,se=h.height,ce=se===void 0?"auto":se,_e=h.alt,ye=h.fit,ae=h.style,Z=h.className,ne=h.co,me=h.overrideStyles,pe=l(h,U),be=g({radius:de},{overrideStyles:me,name:"Image"}),he=be.classes,Ce=be.cx,De=Object(I.useState)(!1),Ie=W(De,2),xe=Ie[0],Te=Ie[1],Le=Object(I.useState)(!1),Pe=W(Le,2),ke=Pe[0],ee=Pe[1],F=Object(I.useRef)(null),ie={width:le,height:ce,objectFit:ye};return Object(I.useImperativeHandle)(A,function(){return F.current}),Object(I.useEffect)(function(){if(!S){ee(!0);return}var ue=function(){return ee(!0)},fe=F.current;return fe&&fe.addEventListener(t,ue),function(){fe&&fe.removeEventListener(t,ue)}},[S]),Object(I.useEffect)(function(){!S||(o=new IntersectionObserver(r,{threshold:Q}),F.current&&o.observe(F.current))},[S,Q]),Object(B.jsxs)(x.a,Object.assign({className:Ce(he.root,Z),co:ne},pe,{children:[Object(B.jsx)("img",{ref:F,src:re,alt:_e,className:he.image,style:ie,onLoad:function(){return Te(!0)}}),(!xe||S&&!ke)&&V&&Object(B.jsx)("div",{className:he.placeholder,title:_e,children:V})]}))});a.displayName="@travelmakers-design/core/Image";function m(h){return _(h)||i(h)||d(h)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(h,A){if(!!h){if(typeof h=="string")return u(h,A);var S=Object.prototype.toString.call(h).slice(8,-1);if(S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set")return Array.from(h);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return u(h,A)}}function i(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function _(h){if(Array.isArray(h))return u(h)}function u(h,A){(A==null||A>h.length)&&(A=h.length);for(var S=0,D=new Array(A);S<A;S++)D[S]=h[S];return D}var v=`import { Image } from "../Image";
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
`,b={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},C=p.default={parameters:{storySource:{source:`import { Image } from "../Image";
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
`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}}}},title:"@travelmakers-design/core/Image",component:a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},E=function(A){return Object(B.jsx)(B.Fragment,{children:m(new Array(10)).map(function(S,D){return Object(B.jsx)("div",{children:Object(B.jsx)(a,Object.assign({placeholder:Object(B.jsx)("div",{children:"Placeholder"})},A))},D)})})}},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return W}),e.d(p,"WithIcon",function(){return y}),e.d(p,"WithRightSection",function(){return f}),e.d(p,"Textarea",function(){return j});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.string.small.js"),q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),N=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),X=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=e("./packages/travelmakers-design-core/src/constants/index.ts"),M=function(O,l){return O in l?l[O]:O},k={xsmall:12,small:14,medium:14,large:14,xlarge:16},w=Object(X.a)(function(c,O){var l=O.size,n=O.multiline,o=O.radius,t=O.invalid,r=c.palettes.red[c.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(H.b)(c),{height:n?"auto":M(l,z.a),WebkitTapHighlightColor:"transparent",lineHeight:n?c.lineHeight:M(l,z.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:M(l,k),width:"100%",color:c.colorScheme==="dark"?c.palettes.gray[0]:c.palettes.gray[9],display:"block",textAlign:"left",minHeight:M(l,z.a),paddingLeft:M(l,z.a)/3,paddingRight:M(l,z.a)/3,borderRadius:M(o,c.radius),border:"1px solid "+(c.colorScheme==="dark"?c.palettes.gray[6]:c.palettes.gray[2]),backgroundColor:c.colorScheme==="dark"?c.palettes.gray[8]:c.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+c.palettes[c.primaryColor][c.colorScheme==="dark"?3:5],borderColor:c.palettes[c.primaryColor][c.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:c.colorScheme==="dark"?c.palettes.gray[7]:c.palettes.gray[0],color:c.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:c.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(c.colorScheme==="dark",c.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:M(l,z.a)+"px !important"},invalid:{color:r+" !important",borderColor:r+" !important","&::placeholder":{opacity:1,color:r+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:c.colorScheme==="dark"?c.palettes.gray[7]:c.palettes.gray[0],color:c.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:c.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:M(l,z.a),color:t?c.palettes.red[c.colorScheme==="dark"?5:6]:c.colorScheme==="dark"?c.palettes.gray[1]:c.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),P=e("./node_modules/react/jsx-runtime.js"),G=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function L(c,O){if(c==null)return{};var l=I(c,O),n,o;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);for(o=0;o<t.length;o++)n=t[o],!(O.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,n)||(l[n]=c[n]))}return l}function I(c,O){if(c==null)return{};var l={},n=Object.keys(c),o,t;for(t=0;t<n.length;t++)o=n[t],!(O.indexOf(o)>=0)&&(l[o]=c[o]);return l}var x=Object(N.forwardRef)(function(c,O){var l,n=c.component,o=c.size,t=o===void 0?"medium":o,r=c.radius,a=r===void 0?"medium":r,m=c.icon,s=c.rightSectionWidth,d=s===void 0?36:s,i=c.rightSection,_=c.rightSectionProps,u=_===void 0?{}:_,v=c.wrapperProps,b=c.invalid,C=b===void 0?!1:b,E=c.required,h=E===void 0?!1:E,A=c.disabled,S=A===void 0?!1:A,D=c.multiline,Q=D===void 0?!1:D,V=c.className,re=c.style,de=c.co,ve=c.overrideStyles,le=c.__staticSelector,se=le===void 0?"Input":le,ce=L(c,G),_e=Object(q.c)(),ye=w({radius:a,size:t,multiline:Q,invalid:C},{overrideStyles:ve,name:se}),ae=ye.classes,Z=ye.cx,ne=n||"input";return Object(P.jsxs)(J.a,Object.assign({className:Z(ae.wrapper,V),co:de,style:re},v,{children:[m&&Object(P.jsx)("div",{className:ae.icon,children:m}),Object(P.jsx)(ne,Object.assign({},ce,{ref:O,className:Z(ae.input,(l={},l[ae.withIcon]=m,l[ae.invalid]=C,l[ae.disabled]=S,l)),required:h,disabled:S,style:{paddingRight:i?d:_e.spacing.small}})),i&&Object(P.jsx)("div",Object.assign({},u,{style:Object.assign({},u.style,{width:d}),className:Z(ae.rightSection,u.className),children:i}))]}))});x.displayName="@travelmakers-design/core/Input";var T=`import { Input } from "../Input";
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
`,g={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},B=p.default={parameters:{storySource:{source:`import { Input } from "../Input";
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
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},"with-icon":{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},"with-right-section":{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}}}},title:"@travelmakers-design/core/Input",component:x,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},U=function(){return Object(P.jsx)("svg",{viewBox:"0 0 24 24",children:Object(P.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};U.displayName="Icon";var W=function(O){return Object(P.jsx)("div",{style:{width:400,padding:24},children:Object(P.jsx)(x,Object.assign({},O))})};W.displayName="Default";var y=function(O){return Object(P.jsx)("div",{style:{width:400,padding:24},children:Object(P.jsx)(x,Object.assign({icon:Object(P.jsx)(U,{})},O))})};y.displayName="WithIcon";var f=function(O){return Object(P.jsx)("div",{style:{width:400,padding:24},children:Object(P.jsx)(x,Object.assign({icon:Object(P.jsx)(U,{}),rightSectionWidth:50},O))})};f.displayName="WithRightSection";var j=function(O){return Object(P.jsx)("div",{style:{width:400,padding:24},children:Object(P.jsx)(x,Object.assign({component:"textarea",multiline:!0},O))})};j.displayName="Textarea"},"./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx":function(oe,p,e){"use strict";e.d(p,"a",function(){return w});var R=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-core/src/constants/index.ts"),X=Object(N.a)(function(P,G){var L=G.size,I=G.color,x=I===void 0?P.colorScheme==="light"?P.palettes.gray[8]:P.colors.white:I in P.palettes?P.colorScheme==="light"?P.palettes[I][5]:P.palettes[I][3]:I in P.colors?P.colors[I]:I;return{root:{position:"relative",display:"inline-block",width:L in J.a?J.a[L]:L,height:L in J.a?J.a[L]:L,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:x},circle:{fill:x}}}}),H=e("./node_modules/react/jsx-runtime.js"),z=["size","color","className","co","overrideStyles"];function M(P,G){if(P==null)return{};var L=k(P,G),I,x;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(P);for(x=0;x<T.length;x++)I=T[x],!(G.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,I)||(L[I]=P[I]))}return L}function k(P,G){if(P==null)return{};var L={},I=Object.keys(P),x,T;for(T=0;T<I.length;T++)x=I[T],!(G.indexOf(x)>=0)&&(L[x]=P[x]);return L}var w=Object(Y.forwardRef)(function(P,G){var L=P.size,I=L===void 0?"medium":L,x=P.color,T=P.className,g=P.co,B=P.overrideStyles,U=M(P,z),W=X({size:I,color:x},{overrideStyles:B,name:"Spinner"}),y=W.classes,f=W.cx,j=Object(H.jsx)("i",{className:y.inner,children:Object(H.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(H.jsxs)("g",{transform:"translate(1 1)",children:[Object(H.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(H.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(H.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(H.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(H.jsx)(q.a,Object.assign({ref:G,className:f(y.root,T),co:g},U,{children:j}))});w.displayName="@travelmakers-design/core/Spinner"},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return H});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e.n(R),K=e("./node_modules/react/index.js"),$=e.n(K),Y=e("./packages/travelmakers-design-core/src/components/Spinner/Spinner.tsx"),q=e("./node_modules/react/jsx-runtime.js"),N=e.n(q),J=`import React from "react";
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
`,X={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/core/Spinner",component:Y.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var H=function(M){return Object(q.jsx)(Y.a,Object.assign({},M))};H.displayName="Default"},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,p,e){"use strict";e.d(p,"a",function(){return W});var R=e("./node_modules/core-js/modules/es.object.keys.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.array.map.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(z),k=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),w=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),P=e("./node_modules/react/index.js"),G=e.n(P),L=e("./node_modules/react/jsx-runtime.js"),I=e.n(L),x=["component","className","style","co"];function T(y,f){if(y==null)return{};var j=g(y,f),c,O;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(y);for(O=0;O<l.length;O++)c=l[O],!(f.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,c)||(j[c]=y[c]))}return j}function g(y,f){if(y==null)return{};var j={},c=Object.keys(y),O,l;for(l=0;l<c.length;l++)O=c[l],!(f.indexOf(O)>=0)&&(j[O]=y[O]);return j}function B(y,f){return typeof y=="function"?y(f):y}function U(y,f){var j=Object(k.a)(),c=j.css,O=j.cx,l=Object(w.c)();return Array.isArray(y)?O(f,y.map(function(n){return c(B(n,l))})):O(f,c(B(y,l)))}var W=Object(P.forwardRef)(function(y,f){var j=y.component,c=y.className,O=y.style,l=y.co,n=T(y,x),o=j||"div";return Object(L.jsx)(o,Object.assign({ref:f,className:U(l,c),style:O},n))});W.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e.n(R),K=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),$=e("./node_modules/react/jsx-runtime.js"),Y=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/core/View",component:K.a};var J=function(){return Object($.jsx)(K.a,{co:function(z){return{width:100,height:100,backgroundColor:z.palettes.purple[3]}}})};J.displayName="Default"},"./packages/travelmakers-design-core/src/constants/index.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return R});var R={xsmall:24,small:32,medium:40,large:56,xlarge:64}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return l});var R=e("./node_modules/core-js/modules/es.string.replace.js"),te=e("./node_modules/core-js/modules/es.regexp.exec.js"),K=e("./node_modules/core-js/modules/es.number.is-nan.js"),$=e("./node_modules/core-js/modules/es.number.constructor.js"),Y=e("./node_modules/core-js/modules/es.parse-int.js"),q=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/core-js/modules/es.string.split.js"),J=e("./node_modules/core-js/modules/es.string.starts-with.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/core-js/modules/es.object.to-string.js"),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/core-js/modules/es.array.from.js");function T(n,o){return y(n)||W(n,o)||B(n,o)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(n,o){if(!!n){if(typeof n=="string")return U(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(n,o)}}function U(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function W(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function y(n){if(Array.isArray(n))return n}function f(n){var o=n.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function j(n){var o=n.replace("#",""),t=parseInt(o,16),r=t>>16&255,a=t>>8&255,m=t&255;return{r,g:a,b:m,a:1}}function c(n){var o=n.replace(/[^0-9,.]/g,"").split(",").map(Number),t=T(o,4),r=t[0],a=t[1],m=t[2],s=t[3];return{r,g:a,b:m,a:s||1}}function O(n){return f(n)?j(n):n.startsWith("rgb")?c(n):{r:0,g:0,b:0,a:1}}var l=function(o,t){var r=O(o),a=r.r,m=r.g,s=r.b;return"rgba("+a+", "+m+", "+s+", "+t+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return Y});var R=e("./node_modules/core-js/modules/es.array.concat.js"),te=e.n(R),K=e("./node_modules/react/index.js"),$=e.n(K),Y=function(N){var J=Object(K.useRef)(N);return Object(K.useEffect)(function(){J.current=N},[N]),Object(K.useMemo)(function(){return function(){for(var X,H=arguments.length,z=new Array(H),M=0;M<H;M++)z[M]=arguments[M];return(X=J.current)===null||X===void 0?void 0:X.call.apply(X,[J].concat(z))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e.n(R),K=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),$=e("./node_modules/react/jsx-runtime.js"),Y=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useClickAway"};var J=function(){var H=Object(K.a)(function(){alert("Click away from red box!")});return Object($.jsx)("div",{children:Object($.jsx)("div",{ref:H,style:{width:100,height:100,backgroundColor:"red"}})})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return l});var R=e("./node_modules/core-js/modules/es.array.slice.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.function.name.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.array.from.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.symbol.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e.n(k),P=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.iterator.js"),I=e.n(L),x=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function f(n,o){var t=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=j(n))||o&&n&&typeof n.length=="number"){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(_){throw _},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,s=!1,d;return{s:function(){t=t.call(n)},n:function(){var _=t.next();return m=_.done,_},e:function(_){s=!0,d=_},f:function(){try{!m&&t.return!=null&&t.return()}finally{if(s)throw d}}}}function j(n,o){if(!!n){if(typeof n=="string")return c(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,o)}}function c(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}var O=["mousedown","touchstart"],l=function(o){var t=Object(U.useRef)(),r=Object(y.a)(o);return Object(U.useEffect)(function(){var a=function(_){var u=t.current;u&&!u.contains(_.target)&&r(_)},m=f(O),s;try{for(m.s();!(s=m.n()).done;){var d=s.value;document.addEventListener(d,a)}}catch(i){m.e(i)}finally{m.f()}return function(){var i=f(O),_;try{for(i.s();!(_=i.n()).done;){var u=_.value;document.removeEventListener(u,a)}}catch(v){i.e(v)}finally{i.f()}}},[t.current]),t}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return n});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./node_modules/core-js/modules/web.timers.js");function w(o,t){return x(o)||I(o,t)||G(o,t)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(o,t){if(!!o){if(typeof o=="string")return L(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(o,t)}}function L(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=o[r];return a}function I(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var a=[],m=!0,s=!1,d,i;try{for(r=r.call(o);!(m=(d=r.next()).done)&&(a.push(d.value),!(t&&a.length===t));m=!0);}catch(_){s=!0,i=_}finally{try{!m&&r.return!=null&&r.return()}finally{if(s)throw i}}return a}}function x(o){if(Array.isArray(o))return o}var T=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.timeout,a=r===void 0?2e3:r,m=Object(M.useState)(null),s=w(m,2),d=s[0],i=s[1],_=Object(M.useState)(!1),u=w(_,2),v=u[0],b=u[1],C=Object(M.useState)(null),E=w(C,2),h=E[0],A=E[1],S=function(re){clearTimeout(h),A(setTimeout(function(){return b(!1)},a)),b(re)},D=function(re){"clipboard"in navigator?navigator.clipboard.writeText(re).then(function(){return S(!0)}).catch(function(de){return i(de)}):i(new Error("useClipboard: navigator.clipboard is not supported"))},Q=function(){b(!1),i(null),clearTimeout(h)};return{copy:D,reset:Q,error:d,copied:v}},g=e("./node_modules/react/jsx-runtime.js");function B(o,t){return j(o)||f(o,t)||W(o,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(o,t){if(!!o){if(typeof o=="string")return y(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(o,t)}}function y(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=o[r];return a}function f(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var a=[],m=!0,s=!1,d,i;try{for(r=r.call(o);!(m=(d=r.next()).done)&&(a.push(d.value),!(t&&a.length===t));m=!0);}catch(_){s=!0,i=_}finally{try{!m&&r.return!=null&&r.return()}finally{if(s)throw i}}return a}}function j(o){if(Array.isArray(o))return o}var c=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},l=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useClipboard"},n=function(){var t=Object(M.useState)(""),r=B(t,2),a=r[0],m=r[1],s=T({timeout:3e3}),d=s.copy,i=s.copied;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",onChange:function(u){return m(u.target.value)}}),Object(g.jsx)("button",{onClick:function(){return d(a)},children:"copy"}),Object(g.jsx)("span",{children:i&&"Copied!!"})]})};n.displayName="Default"},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),K=function(){return Object(te.a)("(prefers-color-scheme: dark)")?"dark":"light"},$=e("./node_modules/react/jsx-runtime.js"),Y=`import React from "react";
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
`,q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},N=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useColorScheme"},J=function(){var H=K();return Object($.jsx)("div",{children:Object($.jsx)("div",{children:H})})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return o});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),w=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function P(t,r){return T(t)||x(t,r)||L(t,r)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(t,r){if(!!t){if(typeof t=="string")return I(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(t,r)}}function I(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function x(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function T(t){if(Array.isArray(t))return t}var g=function(r,a,m){var s=Object(w.a)(r,a),d=P(s,2),i=d[0],_=d[1];return Object(k.a)(i,m),_},B=e("./node_modules/react/jsx-runtime.js");function U(t,r){return c(t)||j(t,r)||y(t,r)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,r){if(!!t){if(typeof t=="string")return f(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(t,r)}}function f(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function j(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function c(t){if(Array.isArray(t))return t}var O=`import React, { useState } from "react";

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
`,l={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},n=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useDebounce"},o=function(){var r=Object(M.useState)(""),a=U(r,2),m=a[0],s=a[1],d=g(function(){alert("Updated!")},1e3,[m]);return Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{type:"text",onChange:function(_){return s(_.target.value)}}),Object(B.jsx)("button",{onClick:d,children:"Cancel"})]})};o.displayName="Default"},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e.n(R),K=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),$=e("./node_modules/react/jsx-runtime.js"),Y=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var J=function(){var H=Object(K.a)();return Object($.jsxs)("div",{children:[Math.random(),Object($.jsx)("button",{onClick:H,children:"Update"})]})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return o});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U);function y(t,r){return l(t)||O(t,r)||j(t,r)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,r){if(!!t){if(typeof t=="string")return c(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,r)}}function c(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function O(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function l(t){if(Array.isArray(t))return t}var n=function(r){return(r+1)%1e6},o=function(){var r=Object(U.useReducer)(n,0),a=y(r,2),m=a[1];return m}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return i});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./node_modules/core-js/modules/es.string.split.js"),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),P=e("./node_modules/core-js/modules/es.string.replace.js"),G=e("./node_modules/core-js/modules/es.array.filter.js"),L=e("./node_modules/core-js/modules/es.regexp.to-string.js"),I=e("./node_modules/core-js/modules/es.date.to-string.js");function x(_,u){var v=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!v){if(Array.isArray(_)||(v=T(_))||u&&_&&typeof _.length=="number"){v&&(_=v);var b=0,C=function(){};return{s:C,n:function(){return b>=_.length?{done:!0}:{done:!1,value:_[b++]}},e:function(S){function D(Q){return S.apply(this,arguments)}return D.toString=function(){return S.toString()},D}(function(S){throw S}),f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,h=!1,A;return{s:function(){v=v.call(_)},n:function(){var D=v.next();return E=D.done,D},e:function(S){function D(Q){return S.apply(this,arguments)}return D.toString=function(){return S.toString()},D}(function(S){h=!0,A=S}),f:function(){try{!E&&v.return!=null&&v.return()}finally{if(h)throw A}}}}function T(_,u){if(!!_){if(typeof _=="string")return g(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return g(_,u)}}function g(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,b=new Array(u);v<u;v++)b[v]=_[v];return b}var B={alt:1,ctrl:2,meta:4,shift:8},U={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},W={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},y=function(u){var v=u.key!==" "?u.key.toLowerCase():"space",b=0;return u.altKey&&(b+=B.alt),u.ctrlKey&&(b+=B.ctrl),u.metaKey&&(b+=B.meta),u.shiftKey&&(b+=B.shift),{modifiers:b,key:v}},f=function(u){var v=u.replace(/\s/g,"").toLowerCase().split("+"),b=0,C,E=x(v),h;try{for(E.s();!(h=E.n()).done;){var A=h.value;B[A]?b+=B[A]:B[W[A]]?b+=B[W[A]]:U[A]?(b+=B.shift,C=U[A]):W[A]?C=W[A]:C=A}}catch(S){E.e(S)}finally{E.f()}return{modifiers:b,key:C}},j=function(u,v){return u.modifiers===v.modifiers&&u.key===v.key},c=function(u){var v=Object(M.useMemo)(function(){return u.filter(function(D){return!D.global})},[u]),b=Object(M.useMemo)(function(){return u.filter(function(D){return D.global})},[u]),C=Object(M.useCallback)(function(D,Q,V,re){var de=x(D?b:v),ve;try{for(de.s();!(ve=de.n()).done;){var le=ve.value;if(j(f(le.combo),Q)){var se;(se=le[V])===null||se===void 0||se.call(le,re)}}}catch(ce){de.e(ce)}finally{de.f()}},[v,b]),E=Object(M.useCallback)(function(D){C(!0,y(D),"onKeyDown",D)},[C]),h=Object(M.useCallback)(function(D){C(!0,y(D),"onKeyUp",D)},[C]),A=Object(M.useCallback)(function(D){C(!1,y(D.nativeEvent),"onKeyDown",D.nativeEvent)},[C]),S=Object(M.useCallback)(function(D){C(!1,y(D.nativeEvent),"onKeyUp",D.nativeEvent)},[C]);return Object(M.useEffect)(function(){return document.addEventListener("keydown",E),document.addEventListener("keyup",h),function(){document.removeEventListener("keydown",E),document.removeEventListener("keyup",h)}},[E,h]),{handleKeyDown:A,handleKeyUp:S}},O=e("./node_modules/react/jsx-runtime.js");function l(_,u){return a(_)||r(_,u)||o(_,u)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(_,u){if(!!_){if(typeof _=="string")return t(_,u);var v=Object.prototype.toString.call(_).slice(8,-1);if(v==="Object"&&_.constructor&&(v=_.constructor.name),v==="Map"||v==="Set")return Array.from(_);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return t(_,u)}}function t(_,u){(u==null||u>_.length)&&(u=_.length);for(var v=0,b=new Array(u);v<u;v++)b[v]=_[v];return b}function r(_,u){var v=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(v!=null){var b=[],C=!0,E=!1,h,A;try{for(v=v.call(_);!(C=(h=v.next()).done)&&(b.push(h.value),!(u&&b.length===u));C=!0);}catch(S){E=!0,A=S}finally{try{!C&&v.return!=null&&v.return()}finally{if(E)throw A}}return b}}function a(_){if(Array.isArray(_))return _}var m=`import React, { useRef, useState } from "react";

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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},d=p.default={parameters:{storySource:{source:`import React, { useRef, useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}}}},title:"@travelmakers-design/hooks/useHotKey"},i=function(){var u=Object(M.useRef)(null),v=Object(M.useState)(""),b=l(v,2),C=b[0],E=b[1],h=c([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){u.current.select()}},{combo:"shift+r",onKeyUp:function(){E("")}}]),A=h.handleKeyDown,S=h.handleKeyUp;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{ref:u,type:"text",value:C,onChange:function(Q){return E(Q.target.value)},onKeyDown:A,onKeyUp:S})})};i.displayName="Default"},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return s});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),f=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),j=e("./node_modules/react/jsx-runtime.js"),c=e.n(j);function O(d,i){return r(d)||t(d,i)||n(d,i)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(d,i){if(!!d){if(typeof d=="string")return o(d,i);var _=Object.prototype.toString.call(d).slice(8,-1);if(_==="Object"&&d.constructor&&(_=d.constructor.name),_==="Map"||_==="Set")return Array.from(d);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return o(d,i)}}function o(d,i){(i==null||i>d.length)&&(i=d.length);for(var _=0,u=new Array(i);_<i;_++)u[_]=d[_];return u}function t(d,i){var _=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(_!=null){var u=[],v=!0,b=!1,C,E;try{for(_=_.call(d);!(v=(C=_.next()).done)&&(u.push(C.value),!(i&&u.length===i));v=!0);}catch(h){b=!0,E=h}finally{try{!v&&_.return!=null&&_.return()}finally{if(b)throw E}}return u}}function r(d){if(Array.isArray(d))return d}var a=`import React, { useEffect } from "react";

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
`,m={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};p.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}}}},title:"@travelmakers-design/hooks/useHover"};var s=function(){var i=Object(f.a)(),_=O(i,2),u=_[0],v=_[1],b=Object(y.a)();return Object(U.useEffect)(function(){b()},[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{ref:v,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+u]})})};s.displayName="Default"},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return n});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U);function y(o,t){return l(o)||O(o,t)||j(o,t)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(o,t){if(!!o){if(typeof o=="string")return c(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(o,t)}}function c(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=o[r];return a}function O(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var a=[],m=!0,s=!1,d,i;try{for(r=r.call(o);!(m=(d=r.next()).done)&&(a.push(d.value),!(t&&a.length===t));m=!0);}catch(_){s=!0,i=_}finally{try{!m&&r.return!=null&&r.return()}finally{if(s)throw i}}return a}}function l(o){if(Array.isArray(o))return o}var n=function(){var t=Object(U.useRef)(null),r=Object(U.useState)(!1),a=y(r,2),m=a[0],s=a[1],d=Object(U.useCallback)(function(){return s(!0)},[]),i=Object(U.useCallback)(function(){return s(!1)},[]);return Object(U.useEffect)(function(){var _=t.current;if(!!_)return _.addEventListener("mouseenter",d),_.addEventListener("mouseleave",i),function(){_.removeEventListener("mouseenter",d),_.removeEventListener("mouseleave",i)}},[t.current]),[m,t]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e.n(R),K=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),$=e("./node_modules/react/jsx-runtime.js"),Y=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useId"};var J=function(){var H=Object(K.a)();return Object($.jsx)("div",{children:Object($.jsx)("div",{children:H})})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return o});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U);function y(t,r){return l(t)||O(t,r)||j(t,r)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,r){if(!!t){if(typeof t=="string")return c(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,r)}}function c(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function O(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function l(t){if(Array.isArray(t))return t}var n=0,o=function(r){var a=Object(U.useState)(r),m=y(a,2),s=m[0],d=m[1],i=r||s;return Object(U.useEffect)(function(){s==null&&(n+=1,d("tm-"+n))},[s]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return l});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),q=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),P=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js");function L(n,o){return B(n)||g(n,o)||x(n,o)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(n,o){if(!!n){if(typeof n=="string")return T(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(n,o)}}function T(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function g(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function B(n){if(Array.isArray(n))return n}var U=["keypress","mousemove","touchmove","click","scroll"],W={events:U,initialState:!0},y=function(o,t){var r=Object.assign({},W,t),a=r.events,m=r.initialState,s=Object(R.useState)(m),d=L(s,2),i=d[0],_=d[1],u=Object(R.useRef)();return Object(R.useEffect)(function(){var v=function(){_(!1),u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(function(){_(!0)},o)};return a.forEach(function(b){return document.addEventListener(b,v)}),function(){a.forEach(function(b){return document.removeEventListener(b,v)})}},[o]),i},f=e("./node_modules/react/jsx-runtime.js"),j=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},O=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useIdle"},l=function(){var o=y(3e3);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:["Idle: ",""+o]})})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return l});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js");function k(n,o){return I(n)||L(n,o)||P(n,o)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(n,o){if(!!n){if(typeof n=="string")return G(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(n,o)}}function G(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function L(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function I(n){if(Array.isArray(n))return n}var x=function(o){var t=Object(M.useState)(null),r=k(t,2),a=r[0],m=r[1],s=Object(M.useRef)(),d=Object(M.useCallback)(function(i){if(s.current&&(s.current.disconnect(),s.current=null),i===null){m(null);return}s.current=new IntersectionObserver(function(_){var u=k(_,1),v=u[0];m(v)},o),s.current.observe(i)},[o==null?void 0:o.rootMargin,o==null?void 0:o.root,o==null?void 0:o.threshold]);return[d,a]},T=e("./node_modules/react/jsx-runtime.js");function g(n,o){return f(n)||y(n,o)||U(n,o)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(n,o){if(!!n){if(typeof n=="string")return W(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return W(n,o)}}function W(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function y(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function f(n){if(Array.isArray(n))return n}var j=`import React, { useRef } from "react";

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
`,c={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},O=p.default={parameters:{storySource:{source:`import React, { useRef } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}}}},title:"@travelmakers-design/hooks/useIntersection"},l=function(){var o=Object(M.useRef)(null),t=x({root:o.current,threshold:.5}),r=g(t,2),a=r[0],m=r[1];return Object(T.jsx)("div",{ref:o,style:{width:300,height:300,overflowY:"scroll"},children:Object(T.jsx)("div",{style:{height:500},children:Object(T.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:m!=null&&m.isIntersecting?"green":"red"},children:m!=null&&m.isIntersecting?"Half visible":"Obscured"})})})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return y});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function w(f,j){return x(f)||I(f,j)||G(f,j)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(f,j){if(!!f){if(typeof f=="string")return L(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return L(f,j)}}function L(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function I(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,n=!1,o,t;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(r){n=!0,t=r}finally{try{!l&&c.return!=null&&c.return()}finally{if(n)throw t}}return O}}function x(f){if(Array.isArray(f))return f}var T=function(j,c){var O=Object(k.a)(j,c),l=w(O,2),n=l[0],o=l[1];return Object(R.useEffect)(function(){return n(),o},[n,o]),o},g=e("./node_modules/react/jsx-runtime.js"),B=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},W=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@travelmakers-design/hooks/useInterval"},y=function(){var j=T(function(){alert("fire")},3e3);return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:j,children:"clear"})})};y.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return m});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(s,d){return t(s)||o(s,d)||l(s,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return n(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(s,d)}}function n(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function o(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function t(s){if(Array.isArray(s))return s}var r=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var m=function(){var d=Object(y.a)(function(){alert("fire")},3e3),i=c(d,2),_=i[0],u=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:_,children:"run"}),Object(f.jsx)("button",{onClick:u,children:"clear"})]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return q});var R=e("./node_modules/core-js/modules/web.timers.js"),te=e.n(R),K=e("./node_modules/react/index.js"),$=e.n(K),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(J,X){var H=Object(K.useRef)(),z=Object(Y.a)(J),M=Object(K.useCallback)(function(){H.current&&clearInterval(H.current),H.current=setInterval(function(){z()},X)},[X]),k=Object(K.useCallback)(function(){H.current&&clearInterval(H.current)},[]);return Object(K.useEffect)(function(){return k},[k]),[M,k]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return W});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=typeof document!="undefined"?M.useLayoutEffect:M.useEffect,w=e("./node_modules/react/jsx-runtime.js");function P(y,f){return T(y)||x(y,f)||L(y,f)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(y,f){if(!!y){if(typeof y=="string")return I(y,f);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return I(y,f)}}function I(y,f){(f==null||f>y.length)&&(f=y.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=y[j];return c}function x(y,f){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,n,o;try{for(j=j.call(y);!(O=(n=j.next()).done)&&(c.push(n.value),!(f&&c.length===f));O=!0);}catch(t){l=!0,o=t}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function T(y){if(Array.isArray(y))return y}var g=`import React, { useState } from "react";

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
`,B={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},U=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},W=function(){var f=Object(M.useState)(!1),j=P(f,2),c=j[0],O=j[1];return k(function(){O(!0)},[]),Object(w.jsx)("div",{children:c&&"mounted"})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return W});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function k(y,f){return I(y)||L(y,f)||P(y,f)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(y,f){if(!!y){if(typeof y=="string")return G(y,f);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return G(y,f)}}function G(y,f){(f==null||f>y.length)&&(f=y.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=y[j];return c}function L(y,f){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,n,o;try{for(j=j.call(y);!(O=(n=j.next()).done)&&(c.push(n.value),!(f&&c.length===f));O=!0);}catch(t){l=!0,o=t}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function I(y){if(Array.isArray(y))return y}var x=function(f){var j=Object(R.useState)(!1),c=k(j,2),O=c[0],l=c[1],n=Object(R.useCallback)(function(t){var r=t.key;r===f&&l(!0)},[f]),o=Object(R.useCallback)(function(t){var r=t.key;r===f&&l(!1)},[f]);return Object(R.useEffect)(function(){return window.addEventListener("keydown",n),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",n),window.removeEventListener("keyup",o)}},[n,o]),O},T=e("./node_modules/react/jsx-runtime.js"),g=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,B={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},U=p.default={parameters:{storySource:{source:`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useKeyPress"},W=function(){var f=x("r");return Object(T.jsx)("div",{children:f&&"r key pressed"})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return _});var R=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.concat.js"),P=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.array.includes.js"),L=e("./node_modules/core-js/modules/es.string.includes.js");function I(u){return g(u)||T(u)||W(u)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function g(u){if(Array.isArray(u))return y(u)}function B(u,v){return j(u)||f(u,v)||W(u,v)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(u,v){if(!!u){if(typeof u=="string")return y(u,v);var b=Object.prototype.toString.call(u).slice(8,-1);if(b==="Object"&&u.constructor&&(b=u.constructor.name),b==="Map"||b==="Set")return Array.from(u);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return y(u,v)}}function y(u,v){(v==null||v>u.length)&&(v=u.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=u[b];return C}function f(u,v){var b=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(b!=null){var C=[],E=!0,h=!1,A,S;try{for(b=b.call(u);!(E=(A=b.next()).done)&&(C.push(A.value),!(v&&C.length===v));E=!0);}catch(D){h=!0,S=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(h)throw S}}return C}}function j(u){if(Array.isArray(u))return u}var c=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=Object(k.useState)(v),C=B(b,2),E=C[0],h=C[1],A=Object(k.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return h(function(_e){return[].concat(I(_e),se)})},[]),S=Object(k.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return h(function(_e){return[].concat(se,I(_e))})},[]),D=Object(k.useCallback)(function(le){for(var se=arguments.length,ce=new Array(se>1?se-1:0),_e=1;_e<se;_e++)ce[_e-1]=arguments[_e];return h(function(ye){return[].concat(I(ye.slice(0,le)),ce,I(ye.slice(le)))})},[]),Q=Object(k.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return h(function(_e){return _e.filter(function(ye,ae){return!se.includes(ae)})})},[]),V=Object(k.useCallback)(function(){var le=I(E),se=le.pop();return h(le),se},[E]),re=Object(k.useCallback)(function(){var le=I(E),se=le.shift();return h(le),se},[E]),de=Object(k.useCallback)(function(le,se){h(function(ce){var _e=I(ce);return _e[le]=se,_e})},[]),ve={setState:h,append:A,prepend:S,insert:D,remove:Q,pop:V,shift:re,setItem:de};return[E,ve]},O=e("./node_modules/react/jsx-runtime.js");function l(u,v){return a(u)||r(u,v)||o(u,v)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(u,v){if(!!u){if(typeof u=="string")return t(u,v);var b=Object.prototype.toString.call(u).slice(8,-1);if(b==="Object"&&u.constructor&&(b=u.constructor.name),b==="Map"||b==="Set")return Array.from(u);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return t(u,v)}}function t(u,v){(v==null||v>u.length)&&(v=u.length);for(var b=0,C=new Array(v);b<v;b++)C[b]=u[b];return C}function r(u,v){var b=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(b!=null){var C=[],E=!0,h=!1,A,S;try{for(b=b.call(u);!(E=(A=b.next()).done)&&(C.push(A.value),!(v&&C.length===v));E=!0);}catch(D){h=!0,S=D}finally{try{!E&&b.return!=null&&b.return()}finally{if(h)throw S}}return C}}function a(u){if(Array.isArray(u))return u}var m=`import React from "react";
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},d=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}}}},title:"@travelmakers-design/hooks/useList"},i=5,_=function(){var v=c(["Item 1","Item 2","Item 3","Item 4","Item 5"]),b=l(v,2),C=b[0],E=b[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return E.append("Item "+ ++i)},children:"append"}),Object(O.jsx)("button",{onClick:function(){return E.pop()},children:"pop"}),Object(O.jsx)("button",{onClick:function(){return E.prepend("Item "+ ++i)},children:"prepend"}),Object(O.jsx)("button",{onClick:function(){return E.shift()},children:"shift"}),Object(O.jsx)("button",{onClick:function(){return E.setItem(3,"Updated")},children:"setItem 3 index"}),Object(O.jsx)("button",{onClick:function(){return E.remove(2,3)},children:"remove 2, 3 index"}),Object(O.jsx)("button",{onClick:function(){return E.insert(3,"Item "+ ++i)},children:"insert 3 index"})]}),Object(O.jsx)("ul",{children:C.map(function(h,A){return Object(O.jsx)("li",{children:h},A)})})]})};_.displayName="Default"},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return S});var R=e("./node_modules/core-js/modules/es.promise.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/core-js/modules/es.array.from.js"),w=e("./node_modules/react/index.js"),P=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),G=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),L=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),I=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),x=e("./node_modules/core-js/modules/es.object.define-property.js"),T=e("./node_modules/core-js/modules/es.object.create.js"),g=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),B=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),W=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),y=e("./node_modules/core-js/modules/es.array.reverse.js"),f=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function j(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */j=function(){return D};var D={},Q=Object.prototype,V=Q.hasOwnProperty,re=typeof Symbol=="function"?Symbol:{},de=re.iterator||"@@iterator",ve=re.asyncIterator||"@@asyncIterator",le=re.toStringTag||"@@toStringTag";function se(ee,F,ie){return Object.defineProperty(ee,F,{value:ie,enumerable:!0,configurable:!0,writable:!0}),ee[F]}try{se({},"")}catch(ee){se=function(ie,ue,fe){return ie[ue]=fe}}function ce(ee,F,ie,ue){var fe=F&&F.prototype instanceof ae?F:ae,ge=Object.create(fe.prototype),Oe=new Le(ue||[]);return ge._invoke=function(Ae,Se,je){var Ee="suspendedStart";return function(Me,Be){if(Ee==="executing")throw new Error("Generator is already running");if(Ee==="completed"){if(Me==="throw")throw Be;return ke()}for(je.method=Me,je.arg=Be;;){var We=je.delegate;if(We){var Re=Ie(We,je);if(Re){if(Re===ye)continue;return Re}}if(je.method==="next")je.sent=je._sent=je.arg;else if(je.method==="throw"){if(Ee==="suspendedStart")throw Ee="completed",je.arg;je.dispatchException(je.arg)}else je.method==="return"&&je.abrupt("return",je.arg);Ee="executing";var Ue=_e(Ae,Se,je);if(Ue.type==="normal"){if(Ee=je.done?"completed":"suspendedYield",Ue.arg===ye)continue;return{value:Ue.arg,done:je.done}}Ue.type==="throw"&&(Ee="completed",je.method="throw",je.arg=Ue.arg)}}}(ee,ie,Oe),ge}function _e(ee,F,ie){try{return{type:"normal",arg:ee.call(F,ie)}}catch(ue){return{type:"throw",arg:ue}}}D.wrap=ce;var ye={};function ae(){}function Z(){}function ne(){}var me={};se(me,de,function(){return this});var pe=Object.getPrototypeOf,be=pe&&pe(pe(Pe([])));be&&be!==Q&&V.call(be,de)&&(me=be);var he=ne.prototype=ae.prototype=Object.create(me);function Ce(ee){["next","throw","return"].forEach(function(F){se(ee,F,function(ie){return this._invoke(F,ie)})})}function De(ee,F){function ie(fe,ge,Oe,Ae){var Se=_e(ee[fe],ee,ge);if(Se.type!=="throw"){var je=Se.arg,Ee=je.value;return Ee&&typeof Ee=="object"&&V.call(Ee,"__await")?F.resolve(Ee.__await).then(function(Me){ie("next",Me,Oe,Ae)},function(Me){ie("throw",Me,Oe,Ae)}):F.resolve(Ee).then(function(Me){je.value=Me,Oe(je)},function(Me){return ie("throw",Me,Oe,Ae)})}Ae(Se.arg)}var ue;this._invoke=function(fe,ge){function Oe(){return new F(function(Ae,Se){ie(fe,ge,Ae,Se)})}return ue=ue?ue.then(Oe,Oe):Oe()}}function Ie(ee,F){var ie=ee.iterator[F.method];if(ie===void 0){if(F.delegate=null,F.method==="throw"){if(ee.iterator.return&&(F.method="return",F.arg=void 0,Ie(ee,F),F.method==="throw"))return ye;F.method="throw",F.arg=new TypeError("The iterator does not provide a 'throw' method")}return ye}var ue=_e(ie,ee.iterator,F.arg);if(ue.type==="throw")return F.method="throw",F.arg=ue.arg,F.delegate=null,ye;var fe=ue.arg;return fe?fe.done?(F[ee.resultName]=fe.value,F.next=ee.nextLoc,F.method!=="return"&&(F.method="next",F.arg=void 0),F.delegate=null,ye):fe:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,ye)}function xe(ee){var F={tryLoc:ee[0]};1 in ee&&(F.catchLoc=ee[1]),2 in ee&&(F.finallyLoc=ee[2],F.afterLoc=ee[3]),this.tryEntries.push(F)}function Te(ee){var F=ee.completion||{};F.type="normal",delete F.arg,ee.completion=F}function Le(ee){this.tryEntries=[{tryLoc:"root"}],ee.forEach(xe,this),this.reset(!0)}function Pe(ee){if(ee){var F=ee[de];if(F)return F.call(ee);if(typeof ee.next=="function")return ee;if(!isNaN(ee.length)){var ie=-1,ue=function fe(){for(;++ie<ee.length;)if(V.call(ee,ie))return fe.value=ee[ie],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return ue.next=ue}}return{next:ke}}function ke(){return{value:void 0,done:!0}}return Z.prototype=ne,se(he,"constructor",ne),se(ne,"constructor",Z),Z.displayName=se(ne,le,"GeneratorFunction"),D.isGeneratorFunction=function(ee){var F=typeof ee=="function"&&ee.constructor;return!!F&&(F===Z||(F.displayName||F.name)==="GeneratorFunction")},D.mark=function(ee){return Object.setPrototypeOf?Object.setPrototypeOf(ee,ne):(ee.__proto__=ne,se(ee,le,"GeneratorFunction")),ee.prototype=Object.create(he),ee},D.awrap=function(ee){return{__await:ee}},Ce(De.prototype),se(De.prototype,ve,function(){return this}),D.AsyncIterator=De,D.async=function(ee,F,ie,ue,fe){fe===void 0&&(fe=Promise);var ge=new De(ce(ee,F,ie,ue),fe);return D.isGeneratorFunction(F)?ge:ge.next().then(function(Oe){return Oe.done?Oe.value:ge.next()})},Ce(he),se(he,le,"Generator"),se(he,de,function(){return this}),se(he,"toString",function(){return"[object Generator]"}),D.keys=function(ee){var F=[];for(var ie in ee)F.push(ie);return F.reverse(),function ue(){for(;F.length;){var fe=F.pop();if(fe in ee)return ue.value=fe,ue.done=!1,ue}return ue.done=!0,ue}},D.values=Pe,Le.prototype={constructor:Le,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Te),!F)for(var ie in this)ie.charAt(0)==="t"&&V.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var ie=this;function ue(je,Ee){return Oe.type="throw",Oe.arg=F,ie.next=je,Ee&&(ie.method="next",ie.arg=void 0),!!Ee}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ge=this.tryEntries[fe],Oe=ge.completion;if(ge.tryLoc==="root")return ue("end");if(ge.tryLoc<=this.prev){var Ae=V.call(ge,"catchLoc"),Se=V.call(ge,"finallyLoc");if(Ae&&Se){if(this.prev<ge.catchLoc)return ue(ge.catchLoc,!0);if(this.prev<ge.finallyLoc)return ue(ge.finallyLoc)}else if(Ae){if(this.prev<ge.catchLoc)return ue(ge.catchLoc,!0)}else{if(!Se)throw new Error("try statement without catch or finally");if(this.prev<ge.finallyLoc)return ue(ge.finallyLoc)}}}},abrupt:function(F,ie){for(var ue=this.tryEntries.length-1;ue>=0;--ue){var fe=this.tryEntries[ue];if(fe.tryLoc<=this.prev&&V.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ge=fe;break}}ge&&(F==="break"||F==="continue")&&ge.tryLoc<=ie&&ie<=ge.finallyLoc&&(ge=null);var Oe=ge?ge.completion:{};return Oe.type=F,Oe.arg=ie,ge?(this.method="next",this.next=ge.finallyLoc,ye):this.complete(Oe)},complete:function(F,ie){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&ie&&(this.next=ie),ye},finish:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ue=this.tryEntries[ie];if(ue.finallyLoc===F)return this.complete(ue.completion,ue.afterLoc),Te(ue),ye}},catch:function(F){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ue=this.tryEntries[ie];if(ue.tryLoc===F){var fe=ue.completion;if(fe.type==="throw"){var ge=fe.arg;Te(ue)}return ge}}throw new Error("illegal catch attempt")},delegateYield:function(F,ie,ue){return this.delegate={iterator:Pe(F),resultName:ie,nextLoc:ue},this.method==="next"&&(this.arg=void 0),ye}},D}function c(D,Q,V,re,de,ve,le){try{var se=D[ve](le),ce=se.value}catch(_e){V(_e);return}se.done?Q(ce):Promise.resolve(ce).then(re,de)}function O(D){return function(){var Q=this,V=arguments;return new Promise(function(re,de){var ve=D.apply(Q,V);function le(ce){c(ve,re,de,le,se,"next",ce)}function se(ce){c(ve,re,de,le,se,"throw",ce)}le(void 0)})}}function l(D,Q){return a(D)||r(D,Q)||o(D,Q)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(D,Q){if(!!D){if(typeof D=="string")return t(D,Q);var V=Object.prototype.toString.call(D).slice(8,-1);if(V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set")return Array.from(D);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return t(D,Q)}}function t(D,Q){(Q==null||Q>D.length)&&(Q=D.length);for(var V=0,re=new Array(Q);V<Q;V++)re[V]=D[V];return re}function r(D,Q){var V=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(V!=null){var re=[],de=!0,ve=!1,le,se;try{for(V=V.call(D);!(de=(le=V.next()).done)&&(re.push(le.value),!(Q&&re.length===Q));de=!0);}catch(ce){ve=!0,se=ce}finally{try{!de&&V.return!=null&&V.return()}finally{if(ve)throw se}}return re}}function a(D){if(Array.isArray(D))return D}var m=function(Q){var V=Object(w.useState)(!1),re=l(V,2),de=re[0],ve=re[1],le=Object(f.a)(Q),se=Object(w.useCallback)(O(j().mark(function ce(){var _e,ye=arguments;return j().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return ve(!0),Z.next=3,le.apply(void 0,ye);case 3:return _e=Z.sent,ve(!1),Z.abrupt("return",_e);case 6:case"end":return Z.stop()}},ce)})),[Q]);return[de,se]},s=e("./node_modules/react/jsx-runtime.js");function d(D,Q){return b(D)||v(D,Q)||_(D,Q)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(D,Q){if(!!D){if(typeof D=="string")return u(D,Q);var V=Object.prototype.toString.call(D).slice(8,-1);if(V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set")return Array.from(D);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return u(D,Q)}}function u(D,Q){(Q==null||Q>D.length)&&(Q=D.length);for(var V=0,re=new Array(Q);V<Q;V++)re[V]=D[V];return re}function v(D,Q){var V=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(V!=null){var re=[],de=!0,ve=!1,le,se;try{for(V=V.call(D);!(de=(le=V.next()).done)&&(re.push(le.value),!(Q&&re.length===Q));de=!0);}catch(ce){ve=!0,se=ce}finally{try{!de&&V.return!=null&&V.return()}finally{if(ve)throw se}}return re}}function b(D){if(Array.isArray(D))return D}var C=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},h=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useLoading"},A=function(Q){return new Promise(function(V){return setTimeout(V,Q)})},S=function(){var Q=m(A),V=d(Q,2),re=V[0],de=V[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return de(2e3)},children:"Start"})}),Object(s.jsxs)("div",{children:["Loading: ",""+re]})]})};S.displayName="Default"},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return J});var R=e("./node_modules/react/index.js"),te=e.n(R),K=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),$=e("./node_modules/react/jsx-runtime.js"),Y=e.n($),q=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var J=function(){var H=Object(K.a)("(min-width: 900px)");return Object($.jsx)("div",{children:Object($.jsxs)("div",{children:["(min-width: 900px) : ",H?"matches":"does not match"]})})};J.displayName="Default"},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return t});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U);function y(r,a){return l(r)||O(r,a)||j(r,a)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(r,a){if(!!r){if(typeof r=="string")return c(r,a);var m=Object.prototype.toString.call(r).slice(8,-1);if(m==="Object"&&r.constructor&&(m=r.constructor.name),m==="Map"||m==="Set")return Array.from(r);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return c(r,a)}}function c(r,a){(a==null||a>r.length)&&(a=r.length);for(var m=0,s=new Array(a);m<a;m++)s[m]=r[m];return s}function O(r,a){var m=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(m!=null){var s=[],d=!0,i=!1,_,u;try{for(m=m.call(r);!(d=(_=m.next()).done)&&(s.push(_.value),!(a&&s.length===a));d=!0);}catch(v){i=!0,u=v}finally{try{!d&&m.return!=null&&m.return()}finally{if(i)throw u}}return s}}function l(r){if(Array.isArray(r))return r}function n(r,a){try{return r.addEventListener("change",a),function(){return r.removeEventListener("change",a)}}catch(m){return r.addListener(a),function(){return r.removeListener(a)}}}function o(r){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(r).matches:!1}var t=function(a){var m=Object(U.useState)(o(a)),s=y(m,2),d=s[0],i=s[1],_=Object(U.useRef)();return Object(U.useEffect)(function(){if("matchMedia"in window)return _.current=window.matchMedia(a),i(_.current.matches),n(_.current,function(u){return i(u.matches)})},[a]),d}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return n});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),w=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),P=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),L=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=function(t,r){typeof t=="function"?t(r):typeof t=="object"&&t!==null&&"current"in t&&(t.current=r)},x=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return Object(M.useCallback)(function(m){r.forEach(function(s){return I(s,m)})},r)},T=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(m){r.forEach(function(s){return I(s,m)})}},g=e("./node_modules/react/jsx-runtime.js");function B(o,t){return j(o)||f(o,t)||W(o,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(o,t){if(!!o){if(typeof o=="string")return y(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(o,t)}}function y(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=o[r];return a}function f(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var a=[],m=!0,s=!1,d,i;try{for(r=r.call(o);!(m=(d=r.next()).done)&&(a.push(d.value),!(t&&a.length===t));m=!0);}catch(_){s=!0,i=_}finally{try{!m&&r.return!=null&&r.return()}finally{if(s)throw i}}return a}}function j(o){if(Array.isArray(o))return o}var c=`import React, { useEffect } from "react";

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
`,O={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},l=p.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/hooks/useMergedRef"},n=function(){var t=Object(P.a)(),r=B(t,2),a=r[0],m=r[1],s=Object(k.a)(function(){return alert("click away")}),d=x(m,s),i=Object(w.a)();return Object(M.useEffect)(function(){i()},[]),Object(g.jsx)("div",{children:Object(g.jsx)("div",{ref:d,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};n.displayName="Default"},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return y});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function k(f,j){return I(f)||L(f,j)||P(f,j)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(f,j){if(!!f){if(typeof f=="string")return G(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return G(f,j)}}function G(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function L(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,n=!1,o,t;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(r){n=!0,t=r}finally{try{!l&&c.return!=null&&c.return()}finally{if(n)throw t}}return O}}function I(f){if(Array.isArray(f))return f}var x={angle:0,type:"landscape-primary"},T=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,c=Object(R.useState)(j),O=k(c,2),l=O[0],n=O[1];return Object(R.useEffect)(function(){var o=window.screen,t=!0,r=function(){if(t){var m=o,s=m.orientation;if(s){var d=s.angle,i=s.type;n({angle:d,type:i})}else window.orientation!==void 0?n({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):n(j)}};return window.addEventListener("orientationchange",r),r(),function(){t=!1,window.addEventListener("orientationchange",r)}},[]),l},g=e("./node_modules/react/jsx-runtime.js"),B=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},W=p.default={parameters:{storySource:{source:`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useOrientation"},y=function(){var j=T();return Object(g.jsx)("div",{children:JSON.stringify(j)})};y.displayName="Default"},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return X});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),K=function(){var z=window.navigator,M=z.userAgent,k=z.platform,w=["Macintosh","MacIntel","MacPPC","Mac68K"],P=["Win32","Win64","Windows","WinCE"],G=["iPhone","iPad","iPod"],L="unknown";return w.indexOf(k)!==-1?L="macos":G.indexOf(k)!==-1?L="ios":P.indexOf(k)!==-1?L="windows":/Android/.test(M)?L="android":!L&&/Linux/.test(k)&&(L="linux"),L},$=function(){return typeof window!="undefined"?K():"unknown"},Y=e("./node_modules/react/jsx-runtime.js"),q=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,N={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},J=p.default={parameters:{storySource:{source:`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@travelmakers-design/hooks/useOs"},X=function(){var z=$();return Object(Y.jsx)("div",{children:z})};X.displayName="Default"},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return W});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=function(f){Object(M.useEffect)(function(){if(!!f){var j=function(O){O=O||window.event;var l=O.relatedTarget||O.toElement;(!l||l.nodeName==="HTML")&&f()};return document.addEventListener("mouseout",j),function(){document.removeEventListener("mouseout",j)}}},[])},w=e("./node_modules/react/jsx-runtime.js");function P(y,f){return T(y)||x(y,f)||L(y,f)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(y,f){if(!!y){if(typeof y=="string")return I(y,f);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return I(y,f)}}function I(y,f){(f==null||f>y.length)&&(f=y.length);for(var j=0,c=new Array(f);j<f;j++)c[j]=y[j];return c}function x(y,f){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var c=[],O=!0,l=!1,n,o;try{for(j=j.call(y);!(O=(n=j.next()).done)&&(c.push(n.value),!(f&&c.length===f));O=!0);}catch(t){l=!0,o=t}finally{try{!O&&j.return!=null&&j.return()}finally{if(l)throw o}}return c}}function T(y){if(Array.isArray(y))return y}var g=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,B={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},U=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}}}},title:"@travelmakers-design/hooks/usePageLeave"},W=function(){var f=Object(M.useState)(0),j=P(f,2),c=j[0],O=j[1];return k(function(){return O(function(l){return l+1})}),Object(w.jsxs)("div",{children:["Page leave count: ",c]})};W.displayName="Default"},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return O});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.array.concat.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/core-js/modules/es.array.from.js");function w(l){return L(l)||G(l)||T(l)||P()}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function L(l){if(Array.isArray(l))return g(l)}function I(l,n){return U(l)||B(l,n)||T(l,n)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(l,n){if(!!l){if(typeof l=="string")return g(l,n);var o=Object.prototype.toString.call(l).slice(8,-1);if(o==="Object"&&l.constructor&&(o=l.constructor.name),o==="Map"||o==="Set")return Array.from(l);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return g(l,n)}}function g(l,n){(n==null||n>l.length)&&(n=l.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=l[o];return t}function B(l,n){var o=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(o!=null){var t=[],r=!0,a=!1,m,s;try{for(o=o.call(l);!(r=(m=o.next()).done)&&(t.push(m.value),!(n&&t.length===n));r=!0);}catch(d){a=!0,s=d}finally{try{!r&&o.return!=null&&o.return()}finally{if(a)throw s}}return t}}function U(l){if(Array.isArray(l))return l}var W=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(R.useState)({state:o.slice(0,n),queue:o.slice(n)}),r=I(t,2),a=r[0],m=a.state,s=a.queue,d=r[1],i=function(){for(var b=arguments.length,C=new Array(b),E=0;E<b;E++)C[E]=arguments[E];return d(function(h){var A=[].concat(w(h.state),w(h.queue),C);return{state:A.slice(0,n),queue:A.slice(n)}})},_=function(b){return d(function(C){var E=b([].concat(w(C.state),w(C.queue)));return{state:E.slice(0,n),queue:E.slice(n)}})},u=function(){return d(function(b){return{state:b.state,queue:[]}})};return{state:m,queue:s,add:i,update:_,cleanQueue:u}},y=e("./node_modules/react/jsx-runtime.js"),f=`import React, { useState } from "react";

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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},c=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useQueue"},O=function(){var n=W(10,[1,2,3]),o=n.state,t=n.queue,r=n.add,a=n.update,m=n.cleanQueue;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:["state: ",o]}),Object(y.jsxs)("div",{children:["queue: ",t]}),Object(y.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(y.jsx)("button",{onClick:function(){return a(function(d){return d})},children:"update"}),Object(y.jsx)("button",{onClick:m,children:"clear"})]})};O.displayName="Default"},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return m});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(s,d){return t(s)||o(s,d)||l(s,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return n(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(s,d)}}function n(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function o(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function t(s){if(Array.isArray(s))return s}var r=`import React, { useEffect } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};p.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/hooks/useRafState"};var m=function(){var d=Object(y.a)({width:0,height:0}),i=c(d,2),_=i[0],u=i[1];return Object(U.useEffect)(function(){var v=function(){u({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}},[]),Object(f.jsx)("pre",{children:JSON.stringify(_,null,2)})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return n});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U);function y(o,t){return l(o)||O(o,t)||j(o,t)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(o,t){if(!!o){if(typeof o=="string")return c(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(o,t)}}function c(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=o[r];return a}function O(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var a=[],m=!0,s=!1,d,i;try{for(r=r.call(o);!(m=(d=r.next()).done)&&(a.push(d.value),!(t&&a.length===t));m=!0);}catch(_){s=!0,i=_}finally{try{!m&&r.return!=null&&r.return()}finally{if(s)throw i}}return a}}function l(o){if(Array.isArray(o))return o}var n=function(t){var r=Object(U.useRef)(0),a=Object(U.useState)(t),m=y(a,2),s=m[0],d=m[1],i=Object(U.useCallback)(function(_){cancelAnimationFrame(r.current),r.current=requestAnimationFrame(function(){d(_)})},[]);return[s,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return r});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),w=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function P(a,m){return T(a)||x(a,m)||L(a,m)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(a,m){if(!!a){if(typeof a=="string")return I(a,m);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(a,m)}}function I(a,m){(m==null||m>a.length)&&(m=a.length);for(var s=0,d=new Array(m);s<m;s++)d[s]=a[s];return d}function x(a,m){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d=[],i=!0,_=!1,u,v;try{for(s=s.call(a);!(i=(u=s.next()).done)&&(d.push(u.value),!(m&&d.length===m));i=!0);}catch(b){_=!0,v=b}finally{try{!i&&s.return!=null&&s.return()}finally{if(_)throw v}}return d}}function T(a){if(Array.isArray(a))return a}var g={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},B=typeof window!="undefined",U=function(){var m=Object(M.useRef)(null),s=Object(w.a)(g),d=P(s,2),i=d[0],_=d[1],u=Object(M.useMemo)(function(){return B?new ResizeObserver(function(v){var b=v[0];b&&_(b.contentRect)}):null},[]);return Object(M.useEffect)(function(){return m.current&&u.observe(m.current),function(){u.disconnect()}},[m.current]),[m,i]},W=e("./node_modules/react/jsx-runtime.js");function y(a,m){return l(a)||O(a,m)||j(a,m)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a,m){if(!!a){if(typeof a=="string")return c(a,m);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(a,m)}}function c(a,m){(m==null||m>a.length)&&(m=a.length);for(var s=0,d=new Array(m);s<m;s++)d[s]=a[s];return d}function O(a,m){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d=[],i=!0,_=!1,u,v;try{for(s=s.call(a);!(i=(u=s.next()).done)&&(d.push(u.value),!(m&&d.length===m));i=!0);}catch(b){_=!0,v=b}finally{try{!i&&s.return!=null&&s.return()}finally{if(_)throw v}}return d}}function l(a){if(Array.isArray(a))return a}var n=`import React, { useEffect } from "react";

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
`,o={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},t=p.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var m=U(),s=y(m,2),d=s[0],i=s[1],_=Object(k.a)();return Object(M.useEffect)(function(){_()},[]),Object(W.jsxs)("div",{children:[Object(W.jsx)("textarea",{ref:d,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(W.jsx)("div",{children:JSON.stringify(i)})]})};r.displayName="Default"},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return m});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./node_modules/core-js/modules/es.parse-int.js");function w(){var s=document.createElement("style");return s.type="text/css",s.setAttribute("tm-scroll-lock",""),s}function P(s){var d=document.head||document.getElementsByTagName("head")[0];d.appendChild(s)}function G(s,d){s.styleSheet?s.styleSheet.cssText=d:s.appendChild(document.createTextNode(d))}function L(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var s=parseInt(window.getComputedStyle(document.body).paddingRight,10),d=window.innerWidth-document.documentElement.clientWidth;return s+d}var I=function(d){var i=d.disableBodyPadding,_=i?null:L(),u=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return u};function x(s,d){return W(s)||U(s,d)||g(s,d)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(s,d){if(!!s){if(typeof s=="string")return B(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return B(s,d)}}function B(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function U(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function W(s){if(Array.isArray(s))return s}var y=function(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(M.useState)(d||!1),u=x(_,2),v=u[0],b=u[1],C=Object(M.useRef)(0),E=i.disableBodyPadding,h=Object(M.useRef)(null),A=function(){C.current=window.scrollY;var Q=I({disableBodyPadding:E}),V=w();G(V,Q),P(V),h.current=V},S=function(){!(h!=null&&h.current)||(h.current.parentNode.removeChild(h.current),h.current=null)};return Object(M.useEffect)(function(){return v?A():S(),S},[v]),Object(M.useEffect)(function(){d!==void 0&&b(d)},[d]),Object(M.useEffect)(function(){d===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&b(!0)},[b]),[v,b]},f=e("./node_modules/react/jsx-runtime.js");function j(s,d){return o(s)||n(s,d)||O(s,d)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(s,d){if(!!s){if(typeof s=="string")return l(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(s,d)}}function l(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function n(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function o(s){if(Array.isArray(s))return s}var t=`import React, { useState } from "react";

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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useScrollLock"},m=function(){var d=Object(M.useState)(!1),i=j(d,2),_=i[0],u=i[1],v=y(_);return Object(f.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(f.jsx)("button",{onClick:function(){return u(function(C){return!C})},children:_?"Unlock":"Lock"}),v?"Scroll locked":"Scrollable"]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return y});var R=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function w(f,j){return x(f)||I(f,j)||G(f,j)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(f,j){if(!!f){if(typeof f=="string")return L(f,j);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return L(f,j)}}function L(f,j){(j==null||j>f.length)&&(j=f.length);for(var c=0,O=new Array(j);c<j;c++)O[c]=f[c];return O}function I(f,j){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var O=[],l=!0,n=!1,o,t;try{for(c=c.call(f);!(l=(o=c.next()).done)&&(O.push(o.value),!(j&&O.length===j));l=!0);}catch(r){n=!0,t=r}finally{try{!l&&c.return!=null&&c.return()}finally{if(n)throw t}}return O}}function x(f){if(Array.isArray(f))return f}var T=function(j,c){var O=Object(k.a)(j,c),l=w(O,2),n=l[0],o=l[1];return Object(R.useEffect)(function(){return n(),o},[n,o]),o},g=e("./node_modules/react/jsx-runtime.js"),B=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},W=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@travelmakers-design/hooks/useTimeout"},y=function(){var j=T(function(){alert("fire!")},2e3);return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:j,children:"Clear"})})};y.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return m});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(s,d){return t(s)||o(s,d)||l(s,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return n(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(s,d)}}function n(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function o(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function t(s){if(Array.isArray(s))return s}var r=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var m=function(){var d=Object(y.a)(function(){alert("fire!")},2e3),i=c(d,2),_=i[0],u=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:_,children:"Run"}),Object(f.jsx)("button",{onClick:u,children:"Clear"})]})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return q});var R=e("./node_modules/core-js/modules/web.timers.js"),te=e.n(R),K=e("./node_modules/react/index.js"),$=e.n(K),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(J,X){var H=Object(K.useRef)(),z=Object(Y.a)(J),M=Object(K.useCallback)(function(){H.current&&clearTimeout(H.current),H.current=setTimeout(function(){z()},X)},[X]),k=Object(K.useCallback)(function(){H.current&&clearTimeout(H.current)},[]);return Object(K.useEffect)(function(){return k},[k]),[M,k]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return l});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js");function k(n,o){return I(n)||L(n,o)||P(n,o)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(n,o){if(!!n){if(typeof n=="string")return G(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(n,o)}}function G(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function L(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function I(n){if(Array.isArray(n))return n}var x=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(M.useState)(o),r=k(t,2),a=r[0],m=r[1],s=Object(M.useCallback)(function(d){return m(function(i){return typeof d=="boolean"?d:!i})},[]);return[a,s]},T=e("./node_modules/react/jsx-runtime.js");function g(n,o){return f(n)||y(n,o)||U(n,o)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(n,o){if(!!n){if(typeof n=="string")return W(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return W(n,o)}}function W(n,o){(o==null||o>n.length)&&(o=n.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=n[t];return r}function y(n,o){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,m=!1,s,d;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(o&&r.length===o));a=!0);}catch(i){m=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(m)throw d}}return r}}function f(n){if(Array.isArray(n))return n}var j=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},O=p.default={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@travelmakers-design/hooks/useToggle"},l=function(){var o=x(),t=g(o,2),r=t[0],a=t[1];return Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:["current state: ",""+r]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(T.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(T.jsx)("button",{onClick:a,children:"toggle"})]})]})};l.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return o});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/react/index.js"),k=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function w(t,r){return x(t)||I(t,r)||G(t,r)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,r){if(!!t){if(typeof t=="string")return L(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(t,r)}}function L(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function I(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function x(t){if(Array.isArray(t))return t}var T=function(r){var a=r.value,m=r.defaultValue,s=r.finalValue,d=r.rule,i=r.onChange,_=r.onValueUpdate,u=d(a),v=Object(M.useRef)("initial"),b=d(m)?m:s,C=Object(M.useState)(b),E=w(C,2),h=E[0],A=E[1],S=u?a:h;!u&&v.current==="controlled"&&(S=s),v.current=u?"controlled":"uncontrolled";var D=v.current,Q=function(re){typeof i=="function"&&i(re),D==="uncontrolled"&&A(re)};return Object(M.useEffect)(function(){D==="uncontrolled"&&A(S),typeof _=="function"&&_(S)},[D,S]),[S,Q,v.current]},g=e("./node_modules/react/jsx-runtime.js");function B(t,r){return j(t)||f(t,r)||W(t,r)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(t,r){if(!!t){if(typeof t=="string")return y(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(t,r)}}function y(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,m=new Array(r);a<r;a++)m[a]=t[a];return m}function f(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var m=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(m.push(i.value),!(r&&m.length===r));s=!0);}catch(u){d=!0,_=u}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return m}}function j(t){if(Array.isArray(t))return t}var c=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},l=p.default={parameters:{storySource:{source:`import React, { useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},n=function(r){var a=r.label,m=r.value,s=r.defaultValue,d=r.onChange,i=Object(k.a)(),_=T({value:m,defaultValue:s,finalValue:null,onChange:d,rule:function(E){return typeof E=="string"}}),u=B(_,2),v=u[0],b=u[1];return Object(g.jsxs)("div",{style:{padding:"1rem"},children:[Object(g.jsx)("label",{htmlFor:i,children:a}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{id:i,type:"text",value:v,onChange:function(E){return b(E.target.value)}})]})};n.displayName="CustomInput";var o=function(){var r=Object(M.useState)("controlled"),a=B(r,2),m=a[0],s=a[1];return Object(g.jsxs)("div",{style:{padding:20},children:[Object(g.jsx)(n,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(g.jsx)(n,{label:"Controlled",value:m,onChange:s}),Object(g.jsx)(n,{label:"Controlled (fixed value)",value:"fixed",onChange:s})]})};o.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return m});var R=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(R),K=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(K),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(Y),N=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(N),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e.n(X),z=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(z),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(k),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e.n(P),L=e("./node_modules/core-js/modules/es.array.slice.js"),I=e.n(L),x=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(x),g=e("./node_modules/core-js/modules/es.array.from.js"),B=e.n(g),U=e("./node_modules/react/index.js"),W=e.n(U),y=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function c(s,d){return t(s)||o(s,d)||l(s,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return n(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(s,d)}}function n(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function o(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],u=!0,v=!1,b,C;try{for(i=i.call(s);!(u=(b=i.next()).done)&&(_.push(b.value),!(d&&_.length===d));u=!0);}catch(E){v=!0,C=E}finally{try{!u&&i.return!=null&&i.return()}finally{if(v)throw C}}return _}}function t(s){if(Array.isArray(s))return s}var r=`import React, { useEffect, useState } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};p.default={parameters:{storySource:{source:`import React, { useEffect, useState } from "react";

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var m=function(){var d=Object(U.useState)(""),i=c(d,2),_=i[0],u=i[1];return Object(U.useEffect)(function(){console.log("useEffect:",_)},[_]),Object(y.a)(function(){console.log("useUpdateEffect:",_)},[_]),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"text",onChange:function(b){return u(b.target.value)}})})};m.displayName="Default"},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return K});var R=e("./node_modules/react/index.js"),te=e.n(R),K=function(Y,q){var N=Object(R.useRef)(!0);Object(R.useEffect)(function(){if(!N.current)return Y();N.current=!1},q)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,p,e){"use strict";e.d(p,"c",function(){return k}),e.d(p,"d",function(){return w}),e.d(p,"b",function(){return P}),e.d(p,"a",function(){return L});var R=e("./node_modules/react/index.js"),te=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),K=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),$=e("./node_modules/react/jsx-runtime.js"),Y=function(x){var T=x.styles,g=k();return Object($.jsx)(K.a,{styles:Object(K.b)(T(g))})};Y.displayName="Global";var q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},N=function(){return Object($.jsx)(K.a,{styles:q})};N.displayName="NormalizeCSS";var J=e("./node_modules/core-js/modules/es.array.reduce.js"),X=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.object.assign.js");function z(I,x){return x?Object.keys(I).reduce(function(T,g){if(g==="headings"&&x.headings){var B=x.headings?Object.keys(I.headings).reduce(function(U,W){return U[W]=Object.assign({},I.headings[W],x.headings[W]),U},{}):I.headings;return Object.assign({},T,{headings:Object.assign({},I.headings,x.headings,B)})}return T[g]=typeof x[g]=="object"?Object.assign({},I[g],x[g]):x[g]||I[g],T},{}):I}var M=Object(R.createContext)({theme:te.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function k(){var I;return((I=Object(R.useContext)(M))===null||I===void 0?void 0:I.theme)||te.a}function w(){var I;return((I=Object(R.useContext)(M))===null||I===void 0?void 0:I.styles)||{}}function P(){var I;return((I=Object(R.useContext)(M))===null||I===void 0?void 0:I.emotionOptions)||{key:"co",prepend:!0}}var G=function(){return Object($.jsx)(Y,{styles:function(T){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:T.fontFamily,backgroundColor:T.colorScheme==="dark"?T.colors.black:T.colors.white,color:T.colorScheme==="dark"?T.palettes.gray[0]:T.palettes.gray[9],lineHeight:T.lineHeight,fontSizes:T.fontSizes.medium}}}})};G.displayName="GlobalStyles";var L=function(x){var T=x.theme,g=x.styles,B=g===void 0?{}:g,U=x.emotionOptions,W=x.withNormalizeCSS,y=W===void 0?!1:W,f=x.withGlobalStyles,j=f===void 0?!1:f,c=x.children;return Object($.jsxs)(M.Provider,{value:{theme:z(te.a,T),styles:B,emotionOptions:U},children:[y&&Object($.jsx)(N,{}),j&&Object($.jsx)(G,{}),c]})};L.displayName="TmProvider",L.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(oe,p,e){"use strict";e.d(p,"b",function(){return ce}),e.d(p,"a",function(){return ye});var R=e("./node_modules/core-js/modules/es.object.keys.js"),te={dark:["#EBEBEC","#C3C4C6","#9A9BA1","#71747C","#54575F","#474A52","#383B43","#2F3137","#23252A","#1A1B1F"],gray:["#FCFCFD","#F6F7F9","#E9EBF0","#D5DADF","#9BA3AE","#7D838F","#5D636D","#343942","#232830","#171B24"],purple:["#F6F2FF","#E8DAFF","#D4BBFF","#BE95FF","#A56EFF","#8A3FFC","#6929C4","#491D8B","#31135E","#200050"],blue:["#EDF5FF","#D0E2FF","#A6C8FF","#78A9FF","#4589FF","#0F62FE","#0043CE","#002D9C","#001D6C","#011754"],red:["#FFF1F1","#FFD7D9","#FFB3B8","#FF8389","#FA4D56","#DA1E28","#A2191F","#750E13","#570408","#420003"],orange:["#FFF9F2","#FADFC3","#F3C087","#F6A851","#ED8C23","#E07602","#A65701","#8B4901","#673401","#4A2700"],green:["#EFFFF4","#C9F4D8","#96E2B0","#68D08C","#3FB768","#24AD53","#1B803E","#0E5B28","#0C3F1D","#003412"]},K={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},$={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Y={tiny:11,xsmall:12,small:14,medium:16,large:18,xlarge:20},q={small:2,medium:4,large:8,round:9999,circular:"50%"},N={xsmall:4,small:8,medium:16,large:24,xlarge:40},J={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},X={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},H={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},z={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},M=e("./node_modules/core-js/modules/es.object.assign.js"),k=function(Z){for(var ne="",me=1;me<Z.length-1;me+=1)ne+=Z[me]+" "+me/(Z.length-1)*100+"%, ";return Z[0]+" 0%, "+ne+Z[Z.length-1]+" 100%"},w=function(Z){for(var ne=arguments.length,me=new Array(ne>1?ne-1:0),pe=1;pe<ne;pe++)me[pe-1]=arguments[pe];return"linear-gradient("+Z+"deg, "+k(me)+")"},P=function(){for(var Z=arguments.length,ne=new Array(Z),me=0;me<Z;me++)ne[me]=arguments[me];return"radial-gradient(circle, "+k(ne)+")"},G=function(Z){return typeof Z.size=="number"?Z.size:Z.sizes[Z.size]||Z.size||Z.sizes.medium},L=function(Z){return function(ne){return"@media (min-width: "+(G({size:ne,sizes:Z.breakpoints})+1)+"px)"}},I=function(Z){return function(ne){return"@media (max-width: "+G({size:ne,sizes:Z.breakpoints})+"px)"}},x=e("./node_modules/core-js/modules/es.string.replace.js"),T=e("./node_modules/core-js/modules/es.regexp.exec.js"),g=e("./node_modules/core-js/modules/es.number.is-nan.js"),B=e("./node_modules/core-js/modules/es.number.constructor.js"),U=e("./node_modules/core-js/modules/es.parse-int.js"),W=e("./node_modules/core-js/modules/es.array.map.js"),y=e("./node_modules/core-js/modules/es.string.split.js"),f=e("./node_modules/core-js/modules/es.string.starts-with.js"),j=e("./node_modules/core-js/modules/es.array.is-array.js"),c=e("./node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/core-js/modules/es.symbol.description.js"),l=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),o=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),a=e("./node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/core-js/modules/es.function.name.js"),s=e("./node_modules/core-js/modules/es.array.from.js");function d(ae,Z){return b(ae)||v(ae,Z)||_(ae,Z)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(ae,Z){if(!!ae){if(typeof ae=="string")return u(ae,Z);var ne=Object.prototype.toString.call(ae).slice(8,-1);if(ne==="Object"&&ae.constructor&&(ne=ae.constructor.name),ne==="Map"||ne==="Set")return Array.from(ae);if(ne==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ne))return u(ae,Z)}}function u(ae,Z){(Z==null||Z>ae.length)&&(Z=ae.length);for(var ne=0,me=new Array(Z);ne<Z;ne++)me[ne]=ae[ne];return me}function v(ae,Z){var ne=ae==null?null:typeof Symbol!="undefined"&&ae[Symbol.iterator]||ae["@@iterator"];if(ne!=null){var me=[],pe=!0,be=!1,he,Ce;try{for(ne=ne.call(ae);!(pe=(he=ne.next()).done)&&(me.push(he.value),!(Z&&me.length===Z));pe=!0);}catch(De){be=!0,Ce=De}finally{try{!pe&&ne.return!=null&&ne.return()}finally{if(be)throw Ce}}return me}}function b(ae){if(Array.isArray(ae))return ae}var C=function(Z){var ne=Z.replace("#","");return typeof ne=="string"&&ne.length===6&&!Number.isNaN(Number("0x"+ne))},E=function(Z){var ne=Z.replace("#",""),me=parseInt(ne,16),pe=me>>16&255,be=me>>8&255,he=me&255;return{r:pe,g:be,b:he,a:1}},h=function(Z){var ne=Z.replace(/[^0-9,.]/g,"").split(",").map(Number),me=d(ne,4),pe=me[0],be=me[1],he=me[2],Ce=me[3];return{r:pe,g:be,b:he,a:Ce||1}},A=function(Z){return C(Z)?E(Z):Z.startsWith("rgb")?h(Z):{r:0,g:0,b:0,a:1}},S=function(Z,ne){if(typeof Z!="string"||ne>1||ne<0)return"rgba(0, 0, 0, 1)";var me=A(Z),pe=me.r,be=me.g,he=me.b;return"rgba("+pe+", "+be+", "+he+", "+ne+")"},D=function(Z,ne){var me=A(Z),pe=me.r,be=me.g,he=me.b,Ce=me.a,De=1-ne,Ie=function(Te){return Math.round(Te*De)};return"rgba("+Ie(pe)+", "+Ie(be)+", "+Ie(he)+", "+Ce+")"},Q=function(Z,ne){var me=A(Z),pe=me.r,be=me.g,he=me.b,Ce=me.a,De=function(xe){return Math.round(xe+(255-xe)*ne)};return"rgba("+De(pe)+", "+De(be)+", "+De(he)+", "+Ce+")"},V=function(Z){return Z*8},re={linearGradient:w,radialGradient:P,smallerThan:I,largerThan:L,rgba:S,size:G,darken:D,lighten:Q,spacing:V},de=function(Z){return Object.assign({},Z,{fn:{largerThan:re.largerThan(Z),smallerThan:re.smallerThan(Z),radialGradient:re.radialGradient,linearGradient:re.linearGradient,rgba:re.rgba,size:re.size,lighten:re.lighten,darken:re.darken,spacing:re.spacing}})},ve=Object.keys(te),le=Object.keys(K),se=["xsmall","small","medium","large","xlarge"],ce=function(Z){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:Z.fontFamily||"sans-serif"}},_e={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"purple",colors:K,palettes:te,shadows:$,fontSizes:Y,radius:q,spacing:N,breakpoints:J,headings:X,opacity:H,zIndex:z,extra:{}},ye=de(_e)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return j});var R=e("./node_modules/core-js/modules/es.function.name.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),k=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.array.from.js");function L(c,O){return B(c)||g(c,O)||x(c,O)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(c,O){if(!!c){if(typeof c=="string")return T(c,O);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T(c,O)}}function T(c,O){(O==null||O>c.length)&&(O=c.length);for(var l=0,n=new Array(O);l<O;l++)n[l]=c[l];return n}function g(c,O){var l=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var n=[],o=!0,t=!1,r,a;try{for(l=l.call(c);!(o=(r=l.next()).done)&&(n.push(r.value),!(O&&n.length===O));o=!0);}catch(m){t=!0,a=m}finally{try{!o&&l.return!=null&&l.return()}finally{if(t)throw a}}return n}}function B(c){if(Array.isArray(c))return c}function U(c){var O={};return Object.keys(c).forEach(function(l){var n=L(c[l],2),o=n[0],t=n[1];O[o]=t}),O}var W=e("./node_modules/core-js/modules/es.array.reduce.js");function y(c,O,l){return Object.keys(O).reduce(function(n,o){return n[o]=c(O[o],l?"tm-"+l+"-"+o:null),n},{})}var f=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function j(c){var O=typeof c=="function"?c:function(){return c};function l(n,o){var t=Object($.c)(),r=Object($.d)()[o==null?void 0:o.name],a=Object(f.a)(),m=a.css,s=a.cx,d=0;function i(E){return d+=1,"tm-ref_"+(E||"")+"_"+d}var _=O(t,n,i),u=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(t):(o==null?void 0:o.overrideStyles)||{},v=typeof r=="function"?r(t):r||{},b=typeof(o==null?void 0:o.co)=="function"?o.co(t):o==null?void 0:o.co,C=U(Object.keys(_).map(function(E){var h=s(m(_[E]),m(v[E]),m(u[E]),m(b));return[E,h]}));return{classes:y(s,C,o==null?void 0:o.name),cx:s,theme:t}}return l}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,p,e){"use strict";e.d(p,"a",function(){return C});var R=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./node_modules/clsx/dist/clsx.m.js"),w=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),P=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),G=e("./node_modules/core-js/modules/es.array.index-of.js"),L=e("./node_modules/core-js/modules/es.array.map.js"),I=e("./node_modules/react/index.js");function x(E){return U(E)||B(E)||g(E)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(E,h){if(!!E){if(typeof E=="string")return W(E,h);var A=Object.prototype.toString.call(E).slice(8,-1);if(A==="Object"&&E.constructor&&(A=E.constructor.name),A==="Map"||A==="Set")return Array.from(E);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return W(E,h)}}function B(E){if(typeof Symbol!="undefined"&&E[Symbol.iterator]!=null||E["@@iterator"]!=null)return Array.from(E)}function U(E){if(Array.isArray(E))return W(E)}function W(E,h){(h==null||h>E.length)&&(h=E.length);for(var A=0,S=new Array(h);A<h;A++)S[A]=E[A];return S}function y(E,h){var A=Object(I.useRef)();return(!A.current||h.length!==A.current.prevDeps.length||A.current.prevDeps.map(function(S,D){return S===h[D]}).indexOf(!1)>=0)&&(A.current={v:E(),prevDeps:x(h)}),A.current.v}var f=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),j=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),c=e("./node_modules/react/jsx-runtime.js"),O=function(){var E;function h(A){return E===void 0&&(E=Object(f.a)(A||{key:"co",prepend:!0})),E}return{getCache:h}}(),l=O.getCache,n=Object(I.createContext)(void 0);function o(){var E=Object(j.b)();return Object(I.useContext)(n)||l(E)}function t(E){var h=E.children,A=E.value;return Object(c.jsx)(n.Provider,{value:A,children:h})}t.displayName="CacheProvider";function r(E,h){return i(E)||d(E,h)||m(E,h)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(E,h){if(!!E){if(typeof E=="string")return s(E,h);var A=Object.prototype.toString.call(E).slice(8,-1);if(A==="Object"&&E.constructor&&(A=E.constructor.name),A==="Map"||A==="Set")return Array.from(E);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return s(E,h)}}function s(E,h){(h==null||h>E.length)&&(h=E.length);for(var A=0,S=new Array(h);A<h;A++)S[A]=E[A];return S}function d(E,h){var A=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(A!=null){var S=[],D=!0,Q=!1,V,re;try{for(A=A.call(E);!(D=(V=A.next()).done)&&(S.push(V.value),!(h&&S.length===h));D=!0);}catch(de){Q=!0,re=de}finally{try{!D&&A.return!=null&&A.return()}finally{if(Q)throw re}}return S}}function i(E){if(Array.isArray(E))return E}var _="ref";function u(E){var h;if(E.length!==1)return{args:E,ref:h};var A=r(E,1),S=A[0];if(!(S instanceof Object))return{args:E,ref:h};if(!(_ in S))return{args:E,ref:h};h=S[_];var D=Object.assign({},S);return delete D[_],{args:[D],ref:h}}var v=function(){function E(A,S,D){var Q=[],V=Object(P.a)(A,Q,D);return Q.length<2?D:V+S(Q)}function h(A){var S=A.cache,D=function(){for(var re=arguments.length,de=new Array(re),ve=0;ve<re;ve++)de[ve]=arguments[ve];var le=u(de),se=le.ref,ce=le.args,_e=Object(w.a)(ce,S.registered);return Object(P.b)(S,_e,!1),S.key+"-"+_e.name+(se===void 0?"":" "+se)},Q=function(){for(var re=arguments.length,de=new Array(re),ve=0;ve<re;ve++)de[ve]=arguments[ve];return E(S.registered,D,Object(k.a)(de))};return{css:D,cx:Q}}return{cssFactory:h}}(),b=v.cssFactory;function C(){var E=o();return y(function(){return b({cache:E})},[E])}},"./storybook-init-framework-entry.js":function(oe,p,e){"use strict";e.r(p);var R=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,p,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,p){}},[[0,4,5]]]);
