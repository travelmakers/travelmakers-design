(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(ne,v,e){"use strict";e.r(v);var K={};e.r(K),e.d(K,"parameters",function(){return L}),e.d(K,"decorators",function(){return R});var te=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),q=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),k=e("./node_modules/core-js/modules/es.object.define-properties.js"),$=e("./node_modules/core-js/modules/es.object.define-property.js"),H=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),I=e("./node_modules/react/index.js"),W=e("./node_modules/storybook-dark-mode/dist/index.js"),w=e("./node_modules/react/jsx-runtime.js"),L={layout:"fullscreen",darkMode:{current:"light"}};function Z(g){var S=Object(W.useDarkMode)()?"dark":"light";return Object(w.jsx)(void 0,{colorScheme:S,toggleColorScheme:function(){},children:Object(w.jsx)(void 0,{theme:{colorScheme:S},withGlobalStyles:!0,withNormalizeCSS:!0,children:g.children})})}Z.displayName="ThemeWrapper";var R=[function(g){return Object(w.jsx)(Z,{children:g()})}];function C(g,S){var x=Object.keys(g);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(g);S&&(U=U.filter(function(y){return Object.getOwnPropertyDescriptor(g,y).enumerable})),x.push.apply(x,U)}return x}function T(g){for(var S=1;S<arguments.length;S++){var x=arguments[S]!=null?arguments[S]:{};S%2?C(Object(x),!0).forEach(function(U){P(g,U,x[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(x)):C(Object(x)).forEach(function(U){Object.defineProperty(g,U,Object.getOwnPropertyDescriptor(x,U))})}return g}function P(g,S,x){return S in g?Object.defineProperty(g,S,{value:x,enumerable:!0,configurable:!0,writable:!0}):g[S]=x,g}Object.keys(K).forEach(function(g){var S=K[g];switch(g){case"args":return Object(H.d)(S);case"argTypes":return Object(H.b)(S);case"decorators":return S.forEach(function(U){return Object(H.f)(U,!1)});case"loaders":return S.forEach(function(U){return Object(H.g)(U,!1)});case"parameters":return Object(H.h)(T({},S),!1);case"argTypesEnhancers":return S.forEach(function(U){return Object(H.c)(U)});case"argsEnhancers":return S.forEach(function(U){return Object(H.e)(U)});case"render":return Object(H.i)(S);case"globals":case"globalTypes":{var x={};return x[g]=S,Object(H.h)(x,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(g+" was not supported :( !")}})},"./generated-stories-entry.js":function(ne,v,e){"use strict";(function(K){var te=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,te.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],K,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(ne))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(ne,v,e){var K={"./tm-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/tm-design-core/src/components/Button/stories/Button.stories.tsx","./tm-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/tm-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./tm-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/tm-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./tm-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/tm-design-core/src/components/Image/stories/Image.stories.tsx","./tm-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/tm-design-core/src/components/Input/stories/Input.stories.tsx","./tm-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/tm-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./tm-design-core/src/components/View/stories/View.stories.tsx":"./packages/tm-design-core/src/components/View/stories/View.stories.tsx","./tm-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/tm-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./tm-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/tm-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./tm-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/tm-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./tm-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/tm-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./tm-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/tm-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./tm-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/tm-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./tm-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/tm-design-hooks/src/useHover/stories/useHover.stories.tsx","./tm-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/tm-design-hooks/src/useId/stories/useId.stories.tsx","./tm-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/tm-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./tm-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/tm-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./tm-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/tm-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./tm-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/tm-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./tm-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/tm-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./tm-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/tm-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./tm-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/tm-design-hooks/src/useList/stories/useList.stories.tsx","./tm-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/tm-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./tm-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/tm-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./tm-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/tm-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./tm-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/tm-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./tm-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/tm-design-hooks/src/useOs/stories/useOs.stories.tsx","./tm-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/tm-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./tm-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/tm-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./tm-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/tm-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./tm-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/tm-design-hooks/src/useResize/stories/useResize.stories.tsx","./tm-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/tm-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./tm-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/tm-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./tm-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/tm-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./tm-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/tm-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./tm-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/tm-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./tm-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/tm-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function te(Q){var G=F(Q);return e(G)}function F(Q){if(!e.o(K,Q)){var G=new Error("Cannot find module '"+Q+"'");throw G.code="MODULE_NOT_FOUND",G}return K[Q]}te.keys=function(){return Object.keys(K)},te.resolve=F,ne.exports=te,te.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/tm-design-core/src/components/Button/stories/Button.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return u}),e.d(v,"OverrideStyles",function(){return h});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/tm-design-styles/src/theme/types/index.ts"),q=e("./node_modules/react/index.js"),z=e("./packages/tm-design-core/src/components/Spinner/Spinner.tsx"),X=e("./node_modules/core-js/modules/es.string.small.js"),k=e("./node_modules/core-js/modules/es.array.reduce.js"),$=e("./packages/tm-design-styles/src/tss/createStyles.ts"),H=e("./packages/tm-design-styles/src/theme/defaultTheme.ts"),I=e("./packages/tm-design-core/src/constants/index.ts"),W=e("./packages/tm-design-core/src/utils/addAlpha.ts"),w={xsmall:{height:I.a.xsmall,padding:"0 16px"},small:{height:I.a.small,padding:"0 16px"},medium:{height:I.a.medium,padding:"0 24px"},large:{height:I.a.large,padding:"0 24px"},xlarge:{height:I.a.xlarge,padding:"0 30px"}},L=function(r){return{xsmall:{fontWeight:"normal",fontSize:r.fontSizes.xsmall},small:{fontWeight:"normal",fontSize:r.fontSizes.xsmall},medium:{fontWeight:"normal",fontSize:r.fontSizes.small},large:{fontWeight:"bold",fontSize:r.fontSizes.medium},xlarge:{fontWeight:"bold",fontSize:r.fontSizes.xlarge}}},Z=Object.keys(w).reduce(function(l,r){return l[r]=w[r].height,l},{}),R=function(r){return{display:r?"block":"inline-block",width:r?"100%":"auto"}},C=Object($.a)(function(l,r,n){var t,o,a,c,s,d=r.color,i=r.size,_=r.fullWidth,f=n("loading"),b=n("inner"),D=n("spinner"),B=d||l.primaryColor;return{loading:(t={ref:f,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},t["."+b]={opacity:0},t["."+D]={display:"flex"},t),solid:(o={backgroundColor:l.palettes[B][l.colorScheme==="light"?5:3],color:l.colorScheme==="light"?l.colors.white:l.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:l.palettes[B][l.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:l.palettes[B][l.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3]}}},o["&:disabled:not(."+f+")"]={backgroundColor:l.palettes.gray[2],color:Object(W.a)(l.colors.black,l.opacity.opacity3)},o),ghost:(a={backgroundColor:l.colors.transparent,border:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3],color:l.palettes[B][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(l.palettes[B][l.colorScheme==="light"?0:8],l.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(l.palettes[B][l.colorScheme==="light"?1:7],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3]}}},a["&:disabled:not(."+f+")"]={color:Object(W.a)(l.palettes[B][1],l.opacity.opacity3),border:"1px solid "+Object(W.a)(l.palettes[B][1],l.opacity.opacity3)},a),"light-solid":(c={backgroundColor:Object(W.a)(l.colorScheme==="light"?l.colors.black:l.colors.white,l.opacity.opacity1),color:l.palettes[B][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(l.palettes.dark[l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(l.palettes.dark[l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3]}}},c["&:disabled:not(."+f+")"]={backgroundColor:Object(W.a)(l.palettes.dark[l.colorScheme==="light"?4:1],l.opacity.opacity1),color:Object(W.a)(l.palettes[B][l.colorScheme==="light"?7:3],l.opacity.opacity3)},c),text:(s={backgroundColor:"transparent",color:l.palettes[B][l.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(l.palettes[B][l.colorScheme==="light"?8:1],l.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(l.palettes[B][l.colorScheme==="light"?7:2],l.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+l.palettes[B][l.colorScheme==="light"?5:3]}}},s["&:disabled:not(."+f+")"]={color:Object(W.a)(l.palettes[B][l.colorScheme==="light"?7:3],l.opacity.opacity3)},s),root:Object.assign({},w[i],R(_),Object(H.b)(l),L(l)[i],{borderRadius:l.radius.medium,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:b,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:D,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),T=e("./packages/tm-design-core/src/components/View/View.tsx"),P=e("./node_modules/react/jsx-runtime.js"),g=["children","component","size","color","variant","fullWidth","type","disabled","leftIcon","rightIcon","loading","spinnerProps","className","co","overrideStyles"];function S(l,r){if(l==null)return{};var n=x(l,r),t,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,t)||(n[t]=l[t]))}return n}function x(l,r){if(l==null)return{};var n={},t=Object.keys(l),o,a;for(a=0;a<t.length;a++)o=t[a],!(r.indexOf(o)>=0)&&(n[o]=l[o]);return n}var U=Object(q.forwardRef)(function(l,r){var n,t=l.children,o=l.component,a=l.size,c=a===void 0?"medium":a,s=l.color,d=l.variant,i=d===void 0?"solid":d,_=l.fullWidth,f=_===void 0?!1:_,b=l.type,D=b===void 0?"button":b,B=l.disabled,O=B===void 0?!1:B,p=l.leftIcon,A=l.rightIcon,M=l.loading,E=M===void 0?!1:M,Y=l.spinnerProps,N=l.className,oe=l.co,de=l.overrideStyles,ge=S(l,g),le=Object(G.useCoTheme)(),se=s||le.primaryColor,ce=C({color:s,size:c,fullWidth:f},{overrideStyles:de,name:"Button"}),me=ce.classes,je=ce.cx,ae=Object(P.jsx)(z.a,Object.assign({color:i==="solid"?le.colors.white:le.palettes[se][6],size:I.a[c]/2},Y));return Object(P.jsxs)(T.a,Object.assign({component:o||"button",ref:r,type:D,disabled:O||E,className:je((n={},n[me.loading]=E,n),me.root,me[i],N),co:oe,onTouchStart:function(){}},ge,{children:[Object(P.jsxs)("div",{className:me.inner,children:[p&&Object(P.jsx)("span",{className:je(me.icon,me.leftIcon),children:p}),Object(P.jsx)("span",{className:me.label,children:t}),A&&Object(P.jsx)("span",{className:je(me.icon,me.rightIcon),children:A})]}),Object(P.jsx)("div",{className:me.spinnerWrapper,children:ae})]}))});U.displayName="@tm-design/core/Button";var y=`import { Button } from "../Button";
import React from "react";

export default {
  title: "@tm-design/core/Button",
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
`,m={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},OverrideStyles:{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}},j=v.default={parameters:{storySource:{source:`import { Button } from "../Button";
import React from "react";

export default {
  title: "@tm-design/core/Button",
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
`,locationsMap:{default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},"override-styles":{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}}}},title:"@tm-design/core/Button",component:U,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green","dark"],control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},u=function(r){return Object(P.jsx)(U,Object.assign({},r,{children:"Button"}))};u.displayName="Default";var h=function(r){return Object(P.jsx)(U,Object.assign({},r,{overrideStyles:{solid:{backgroundColor:"black","&:not(:disabled):hover":{backgroundColor:"#222"},"&:not(:disabled):active":{backgroundColor:"#444"}}},children:"Button"}))};h.displayName="OverrideStyles"},"./packages/tm-design-core/src/components/IconButton/IconButton.tsx":function(ne,v,e){"use strict";e.d(v,"a",function(){return P});var K=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),q=e("./packages/tm-design-core/src/components/Spinner/Spinner.tsx"),z=e("./packages/tm-design-core/src/constants/index.ts"),X=e("./packages/tm-design-core/src/components/View/View.tsx"),k=e("./node_modules/core-js/modules/es.string.small.js"),$=e("./packages/tm-design-styles/src/tss/createStyles.ts"),H=e("./packages/tm-design-styles/src/theme/defaultTheme.ts"),I=e("./packages/tm-design-core/src/utils/addAlpha.ts"),W={xsmall:{width:z.a.xsmall,height:z.a.xsmall},small:{width:z.a.small,height:z.a.small},medium:{width:z.a.medium,height:z.a.medium},large:{width:z.a.large,height:z.a.large},xlarge:{width:z.a.xlarge,height:z.a.xlarge}},w={xsmall:8,small:8,medium:16,large:16,xlarge:24},L=Object($.a)(function(g,S,x){var U,y,m,j,u,h=S.color,l=S.size,r=x("loading"),n=x("inner"),t=x("spinner"),o=h||g.primaryColor;return{loading:(U={ref:r,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},U["."+n]={opacity:0},U["."+t]={display:"flex"},U),solid:(y={backgroundColor:g.palettes[o][g.colorScheme==="light"?5:3],color:g.colorScheme==="light"?g.colors.white:g.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:g.palettes[o][g.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:g.palettes[o][g.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3]}}},y["&:disabled:not(."+r+")"]={backgroundColor:g.palettes.gray[2],color:Object(I.a)(g.colors.black,g.opacity.opacity3)},y),ghost:(m={backgroundColor:g.colors.transparent,border:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3],color:g.palettes[o][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(I.a)(g.palettes[o][g.colorScheme==="light"?0:8],g.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(I.a)(g.palettes[o][g.colorScheme==="light"?1:7],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3]}}},m["&:disabled:not(."+r+")"]={color:Object(I.a)(g.palettes[o][1],g.opacity.opacity3),border:"1px solid "+Object(I.a)(g.palettes[o][1],g.opacity.opacity3)},m),"light-solid":(j={backgroundColor:Object(I.a)(g.colorScheme==="light"?g.colors.black:g.colors.white,g.opacity.opacity1),color:g.palettes[o][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(I.a)(g.palettes.dark[g.colorScheme==="light"?8:1],g.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(I.a)(g.palettes.dark[g.colorScheme==="light"?7:2],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3]}}},j["&:disabled:not(."+r+")"]={backgroundColor:Object(I.a)(g.palettes.dark[g.colorScheme==="light"?4:1],g.opacity.opacity1),color:Object(I.a)(g.palettes[o][g.colorScheme==="light"?7:3],g.opacity.opacity3)},j),text:(u={backgroundColor:"transparent",color:g.palettes[o][g.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(I.a)(g.palettes[o][g.colorScheme==="light"?8:1],g.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(I.a)(g.palettes[o][g.colorScheme==="light"?7:2],g.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+g.palettes[o][g.colorScheme==="light"?5:3]}}},u["&:disabled:not(."+r+")"]={color:Object(I.a)(g.palettes[o][g.colorScheme==="light"?7:3],g.opacity.opacity3)},u),root:Object.assign({},W[l],Object(H.b)(g),{borderRadius:g.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:n,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:W[l].width-w[l],height:W[l].height-w[l]}},spinnerWrapper:{ref:t,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),Z=e("./node_modules/react/jsx-runtime.js"),R=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function C(g,S){if(g==null)return{};var x=T(g,S),U,y;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(g);for(y=0;y<m.length;y++)U=m[y],!(S.indexOf(U)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,U)||(x[U]=g[U]))}return x}function T(g,S){if(g==null)return{};var x={},U=Object.keys(g),y,m;for(m=0;m<U.length;m++)y=U[m],!(S.indexOf(y)>=0)&&(x[y]=g[y]);return x}var P=Object(G.forwardRef)(function(g,S){var x,U=g.children,y=g.component,m=g.size,j=m===void 0?"medium":m,u=g.color,h=g.variant,l=h===void 0?"solid":h,r=g.type,n=r===void 0?"button":r,t=g.disabled,o=t===void 0?!1:t,a=g.loading,c=a===void 0?!1:a,s=g.spinnerProps,d=g.className,i=g.co,_=g.overrideStyles,f=C(g,R),b=L({color:u,size:j},{overrideStyles:_,name:"Button"}),D=b.theme,B=b.classes,O=b.cx,p=u||D.primaryColor,A=Object(Z.jsx)(q.a,Object.assign({color:l==="solid"?D.colors.white:D.palettes[p][6],size:z.a[j]/2},s));return Object(Z.jsxs)(X.a,Object.assign({component:y||"button",className:O((x={},x[B.loading]=c,x),B.root,B[l],d),type:n,disabled:o||c,ref:S,onTouchStart:function(){},co:i},f,{children:[Object(Z.jsx)("div",{className:B.inner,children:U}),Object(Z.jsx)("div",{className:B.spinnerWrapper,children:A})]}))});P.displayName="@tm-design/core/IconButton"},"./packages/tm-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return Z});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/tm-design-core/src/components/IconButton/IconButton.tsx"),q=e("./node_modules/react/index.js"),z=e("./node_modules/react/jsx-runtime.js"),X=function(C){return Object(z.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C,{children:Object(z.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};X.displayName="CloseIcon",X.displayName="@tm-design/core/CloseIcon";var k=["size","color"];function $(R,C){if(R==null)return{};var T=H(R,C),P,g;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(R);for(g=0;g<S.length;g++)P=S[g],!(C.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,P)||(T[P]=R[P]))}return T}function H(R,C){if(R==null)return{};var T={},P=Object.keys(R),g,S;for(S=0;S<P.length;S++)g=P[S],!(C.indexOf(g)>=0)&&(T[g]=R[g]);return T}var I=Object(q.forwardRef)(function(R,C){var T=R.size,P=T===void 0?"medium":T,g=R.color,S=g===void 0?"gray":g,x=$(R,k);return Object(z.jsx)(G.a,Object.assign({size:P,color:S,ref:C},x,{children:Object(z.jsx)(X,{})}))});I.displayName="@tm-design/core/CloseButton";var W=`import { CloseButton } from "../CloseButton";
import React from "react";

export default {
  title: "@tm-design/core/CloseButton",
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
`,w={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},L=v.default={parameters:{storySource:{source:`import { CloseButton } from "../CloseButton";
import React from "react";

export default {
  title: "@tm-design/core/CloseButton",
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}}}},title:"@tm-design/core/CloseButton",component:I,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},Z=function(C){return Object(z.jsx)(I,Object.assign({},C))};Z.displayName="Default"},"./packages/tm-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return $});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e.n(K),F=e("./packages/tm-design-core/src/components/IconButton/IconButton.tsx"),Q=e("./node_modules/react/index.js"),G=e.n(Q),q=e("./node_modules/react/jsx-runtime.js"),z=e.n(q),X=`import { IconButton } from "../IconButton";
import React from "react";

export default {
  title: "@tm-design/core/IconButton",
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
`,k={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};v.default={parameters:{storySource:{source:`import { IconButton } from "../IconButton";
import React from "react";

export default {
  title: "@tm-design/core/IconButton",
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}}}},title:"@tm-design/core/IconButton",component:F.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var $=function(I){var W=Object(q.jsx)("svg",{viewBox:"0 0 24 24",children:Object(q.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(q.jsx)(F.a,Object.assign({},I,{children:W}))};$.displayName="Default"},"./packages/tm-design-core/src/components/Image/stories/Image.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return O});var K=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),k=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),L=e("./node_modules/core-js/modules/es.array.index-of.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),R=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),C=e("./node_modules/react/index.js"),T=e("./packages/tm-design-core/src/components/View/View.tsx"),P=e("./packages/tm-design-styles/src/tss/createStyles.ts"),g=Object(P.a)(function(p,A){var M=A.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:M?M in p.radius?p.radius[M]:M:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:p.colorScheme==="dark"?p.palettes.gray[2]:p.palettes.gray[8],backgroundColor:p.colorScheme==="dark"?p.palettes.gray[8]:p.palettes.gray[2],borderRadius:M?M in p.radius?p.radius[M]:M:0}}}),S=e("./node_modules/react/jsx-runtime.js"),x=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function U(p,A){return h(p)||u(p,A)||m(p,A)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(p,A){if(!!p){if(typeof p=="string")return j(p,A);var M=Object.prototype.toString.call(p).slice(8,-1);if(M==="Object"&&p.constructor&&(M=p.constructor.name),M==="Map"||M==="Set")return Array.from(p);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return j(p,A)}}function j(p,A){(A==null||A>p.length)&&(A=p.length);for(var M=0,E=new Array(A);M<A;M++)E[M]=p[M];return E}function u(p,A){var M=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(M!=null){var E=[],Y=!0,N=!1,oe,de;try{for(M=M.call(p);!(Y=(oe=M.next()).done)&&(E.push(oe.value),!(A&&E.length===A));Y=!0);}catch(ge){N=!0,de=ge}finally{try{!Y&&M.return!=null&&M.return()}finally{if(N)throw de}}return E}}function h(p){if(Array.isArray(p))return p}function l(p,A){if(p==null)return{};var M=r(p,A),E,Y;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(p);for(Y=0;Y<N.length;Y++)E=N[Y],!(A.indexOf(E)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,E)||(M[E]=p[E]))}return M}function r(p,A){if(p==null)return{};var M={},E=Object.keys(p),Y,N;for(N=0;N<E.length;N++)Y=E[N],!(A.indexOf(Y)>=0)&&(M[Y]=p[Y]);return M}var n=null,t="loadImage",o=function(A,M){A.forEach(function(E){E.isIntersecting&&(M.unobserve(E.target),E.target.dispatchEvent(new CustomEvent(t)))})},a=Object(C.forwardRef)(function(p,A){var M=p.lazy,E=p.threshold,Y=E===void 0?.5:E,N=p.placeholder,oe=p.src,de=p.radius,ge=p.width,le=ge===void 0?"100%":ge,se=p.height,ce=se===void 0?"auto":se,me=p.alt,je=p.fit,ae=p.style,J=p.className,re=p.co,_e=p.overrideStyles,pe=l(p,x),be=g({radius:de},{overrideStyles:_e,name:"Image"}),he=be.classes,Ce=be.cx,De=Object(C.useState)(!1),Ie=U(De,2),Se=Ie[0],Te=Ie[1],Le=Object(C.useState)(!1),Pe=U(Le,2),Re=Pe[0],ee=Pe[1],V=Object(C.useRef)(null),ie={width:le,height:ce,objectFit:je};return Object(C.useImperativeHandle)(A,function(){return V.current}),Object(C.useEffect)(function(){if(!M){ee(!0);return}var ue=function(){return ee(!0)},fe=V.current;return fe&&fe.addEventListener(t,ue),function(){fe&&fe.removeEventListener(t,ue)}},[M]),Object(C.useEffect)(function(){!M||(n=new IntersectionObserver(o,{threshold:Y}),V.current&&n.observe(V.current))},[M,Y]),Object(S.jsxs)(T.a,Object.assign({className:Ce(he.root,J),co:re},pe,{children:[Object(S.jsx)("img",{ref:V,src:oe,alt:me,className:he.image,style:ie,onLoad:function(){return Te(!0)}}),(!Se||M&&!Re)&&N&&Object(S.jsx)("div",{className:he.placeholder,title:me,children:N})]}))});a.displayName="@tm-design/core/Image";function c(p){return _(p)||i(p)||d(p)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(p,A){if(!!p){if(typeof p=="string")return f(p,A);var M=Object.prototype.toString.call(p).slice(8,-1);if(M==="Object"&&p.constructor&&(M=p.constructor.name),M==="Map"||M==="Set")return Array.from(p);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return f(p,A)}}function i(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function _(p){if(Array.isArray(p))return f(p)}function f(p,A){(A==null||A>p.length)&&(A=p.length);for(var M=0,E=new Array(A);M<A;M++)E[M]=p[M];return E}var b=`import { Image } from "../Image";
import React from "react";

export default {
  title: "@tm-design/core/Image",
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
`,D={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},B=v.default={parameters:{storySource:{source:`import { Image } from "../Image";
import React from "react";

export default {
  title: "@tm-design/core/Image",
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
`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}}}},title:"@tm-design/core/Image",component:a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},O=function(A){return Object(S.jsx)(S.Fragment,{children:c(new Array(10)).map(function(M,E){return Object(S.jsx)("div",{children:Object(S.jsx)(a,Object.assign({placeholder:Object(S.jsx)("div",{children:"Placeholder"})},A))},E)})})}},"./packages/tm-design-core/src/components/Input/stories/Input.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return U}),e.d(v,"WithIcon",function(){return y}),e.d(v,"WithRightSection",function(){return m}),e.d(v,"Textarea",function(){return j});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.string.small.js"),q=e("./packages/tm-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/react/index.js"),X=e("./packages/tm-design-core/src/components/View/View.tsx"),k=e("./packages/tm-design-styles/src/tss/createStyles.ts"),$=e("./packages/tm-design-styles/src/theme/defaultTheme.ts"),H=e("./packages/tm-design-core/src/constants/index.ts"),I=function(h,l){return h in l?l[h]:h},W={xsmall:12,small:14,medium:14,large:14,xlarge:16},w=Object(k.a)(function(u,h){var l=h.size,r=h.multiline,n=h.radius,t=h.invalid,o=u.palettes.red[u.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object($.b)(u),{height:r?"auto":I(l,H.a),WebkitTapHighlightColor:"transparent",lineHeight:r?u.lineHeight:I(l,H.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:I(l,W),width:"100%",color:u.colorScheme==="dark"?u.palettes.gray[0]:u.palettes.gray[9],display:"block",textAlign:"left",minHeight:I(l,H.a),paddingLeft:I(l,H.a)/3,paddingRight:I(l,H.a)/3,borderRadius:I(n,u.radius),border:"1px solid "+(u.colorScheme==="dark"?u.palettes.gray[6]:u.palettes.gray[2]),backgroundColor:u.colorScheme==="dark"?u.palettes.gray[8]:u.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+u.palettes[u.primaryColor][u.colorScheme==="dark"?3:5],borderColor:u.palettes[u.primaryColor][u.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:u.colorScheme==="dark"?u.palettes.gray[7]:u.palettes.gray[0],color:u.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:u.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(u.colorScheme==="dark",u.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:I(l,H.a)+"px !important"},invalid:{color:o+" !important",borderColor:o+" !important","&::placeholder":{opacity:1,color:o+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:u.colorScheme==="dark"?u.palettes.gray[7]:u.palettes.gray[0],color:u.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:u.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:I(l,H.a),color:t?u.palettes.red[u.colorScheme==="dark"?5:6]:u.colorScheme==="dark"?u.palettes.gray[1]:u.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),L=e("./node_modules/react/jsx-runtime.js"),Z=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function R(u,h){if(u==null)return{};var l=C(u,h),r,n;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(u);for(n=0;n<t.length;n++)r=t[n],!(h.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,r)||(l[r]=u[r]))}return l}function C(u,h){if(u==null)return{};var l={},r=Object.keys(u),n,t;for(t=0;t<r.length;t++)n=r[t],!(h.indexOf(n)>=0)&&(l[n]=u[n]);return l}var T=Object(z.forwardRef)(function(u,h){var l,r=u.component,n=u.size,t=n===void 0?"medium":n,o=u.radius,a=o===void 0?"medium":o,c=u.icon,s=u.rightSectionWidth,d=s===void 0?36:s,i=u.rightSection,_=u.rightSectionProps,f=_===void 0?{}:_,b=u.wrapperProps,D=u.invalid,B=D===void 0?!1:D,O=u.required,p=O===void 0?!1:O,A=u.disabled,M=A===void 0?!1:A,E=u.multiline,Y=E===void 0?!1:E,N=u.className,oe=u.style,de=u.co,ge=u.overrideStyles,le=u.__staticSelector,se=le===void 0?"Input":le,ce=R(u,Z),me=Object(q.b)(),je=w({radius:a,size:t,multiline:Y,invalid:B},{overrideStyles:ge,name:se}),ae=je.classes,J=je.cx,re=r||"input";return Object(L.jsxs)(X.a,Object.assign({className:J(ae.wrapper,N),co:de,style:oe},b,{children:[c&&Object(L.jsx)("div",{className:ae.icon,children:c}),Object(L.jsx)(re,Object.assign({},ce,{ref:h,className:J(ae.input,(l={},l[ae.withIcon]=c,l[ae.invalid]=B,l[ae.disabled]=M,l)),required:p,disabled:M,style:{paddingRight:i?d:me.spacing.small}})),i&&Object(L.jsx)("div",Object.assign({},f,{style:Object.assign({},f.style,{width:d}),className:J(ae.rightSection,f.className),children:i}))]}))});T.displayName="@tm-design/core/Input";var P=`import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@tm-design/core/Input",
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
`,g={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},Textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}},S=v.default={parameters:{storySource:{source:`import { Input } from "../Input";
import React from "react";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@tm-design/core/Input",
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
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},"with-icon":{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},"with-right-section":{startLoc:{col:32,line:59},endLoc:{col:1,line:76},startBody:{col:32,line:59},endBody:{col:1,line:76}},textarea:{startLoc:{col:24,line:78},endLoc:{col:1,line:84},startBody:{col:24,line:78},endBody:{col:1,line:84}}}}},title:"@tm-design/core/Input",component:T,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},x=function(){return Object(L.jsx)("svg",{viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};x.displayName="Icon";var U=function(h){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({},h))})};U.displayName="Default";var y=function(h){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({icon:Object(L.jsx)(x,{})},h))})};y.displayName="WithIcon";var m=function(h){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({icon:Object(L.jsx)(x,{}),rightSectionWidth:50},h))})};m.displayName="WithRightSection";var j=function(h){return Object(L.jsx)("div",{style:{width:400,padding:24},children:Object(L.jsx)(T,Object.assign({component:"textarea",multiline:!0},h))})};j.displayName="Textarea"},"./packages/tm-design-core/src/components/Spinner/Spinner.tsx":function(ne,v,e){"use strict";e.d(v,"a",function(){return w});var K=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),q=e("./packages/tm-design-core/src/components/View/View.tsx"),z=e("./packages/tm-design-styles/src/tss/createStyles.ts"),X=e("./packages/tm-design-core/src/constants/index.ts"),k=Object(z.a)(function(L,Z){var R=Z.size,C=Z.color,T=C===void 0?L.colorScheme==="light"?L.palettes.gray[8]:L.colors.white:C in L.palettes?L.colorScheme==="light"?L.palettes[C][5]:L.palettes[C][3]:C in L.colors?L.colors[C]:C;return{root:{position:"relative",display:"inline-block",width:R in X.a?X.a[R]:R,height:R in X.a?X.a[R]:R,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:T},circle:{fill:T}}}}),$=e("./node_modules/react/jsx-runtime.js"),H=["size","color","className","co","overrideStyles"];function I(L,Z){if(L==null)return{};var R=W(L,Z),C,T;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(L);for(T=0;T<P.length;T++)C=P[T],!(Z.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,C)||(R[C]=L[C]))}return R}function W(L,Z){if(L==null)return{};var R={},C=Object.keys(L),T,P;for(P=0;P<C.length;P++)T=C[P],!(Z.indexOf(T)>=0)&&(R[T]=L[T]);return R}var w=Object(G.forwardRef)(function(L,Z){var R=L.size,C=R===void 0?"medium":R,T=L.color,P=L.className,g=L.co,S=L.overrideStyles,x=I(L,H),U=k({size:C,color:T},{overrideStyles:S,name:"Spinner"}),y=U.classes,m=U.cx,j=Object($.jsx)("i",{className:y.inner,children:Object($.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object($.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object($.jsxs)("g",{transform:"translate(1 1)",children:[Object($.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object($.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object($.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object($.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object($.jsx)(q.a,Object.assign({ref:Z,className:m(y.root,P),co:g},x,{children:j}))});w.displayName="@tm-design/core/Spinner"},"./packages/tm-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return $});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e.n(K),F=e("./node_modules/react/index.js"),Q=e.n(F),G=e("./packages/tm-design-core/src/components/Spinner/Spinner.tsx"),q=e("./node_modules/react/jsx-runtime.js"),z=e.n(q),X=`import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@tm-design/core/Spinner",
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
`,k={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};v.default={parameters:{storySource:{source:`import React from "react";
import { Spinner } from "../Spinner";

export default {
  title: "@tm-design/core/Spinner",
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
`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@tm-design/core/Spinner",component:G.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var $=function(I){return Object(q.jsx)(G.a,Object.assign({},I))};$.displayName="Default"},"./packages/tm-design-core/src/components/View/View.tsx":function(ne,v,e){"use strict";e.d(v,"a",function(){return U});var K=e("./node_modules/core-js/modules/es.object.keys.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(H),W=e("./packages/tm-design-styles/src/tss/useCss.ts"),w=e("./packages/tm-design-styles/src/theme/TmProvider.tsx"),L=e("./node_modules/react/index.js"),Z=e.n(L),R=e("./node_modules/react/jsx-runtime.js"),C=e.n(R),T=["component","className","style","co"];function P(y,m){if(y==null)return{};var j=g(y,m),u,h;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(y);for(h=0;h<l.length;h++)u=l[h],!(m.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,u)||(j[u]=y[u]))}return j}function g(y,m){if(y==null)return{};var j={},u=Object.keys(y),h,l;for(l=0;l<u.length;l++)h=u[l],!(m.indexOf(h)>=0)&&(j[h]=y[h]);return j}function S(y,m){return typeof y=="function"?y(m):y}function x(y,m){var j=Object(W.a)(),u=j.css,h=j.cx,l=Object(w.b)();return Array.isArray(y)?h(m,y.map(function(r){return u(S(r,l))})):h(m,u(S(y,l)))}var U=Object(L.forwardRef)(function(y,m){var j=y.component,u=y.className,h=y.style,l=y.co,r=P(y,T),n=j||"div";return Object(R.jsx)(n,Object.assign({ref:m,className:x(l,u),style:h},r))});U.displayName="@tm-design/core/View"},"./packages/tm-design-core/src/components/View/stories/View.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e.n(K),F=e("./packages/tm-design-core/src/components/View/View.tsx"),Q=e("./node_modules/react/jsx-runtime.js"),G=e.n(Q),q=`import React from "react";
import { View } from "../View";

export default {
  title: "@tm-design/core/View",
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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};v.default={parameters:{storySource:{source:`import React from "react";
import { View } from "../View";

export default {
  title: "@tm-design/core/View",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}}}},title:"@tm-design/core/View",component:F.a};var X=function(){return Object(Q.jsx)(F.a,{co:function(H){return{width:100,height:100,backgroundColor:H.palettes.purple[3]}}})};X.displayName="Default"},"./packages/tm-design-core/src/constants/index.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return K});var K={xsmall:24,small:32,medium:40,large:56,xlarge:64}},"./packages/tm-design-core/src/utils/addAlpha.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return l});var K=e("./node_modules/core-js/modules/es.string.replace.js"),te=e("./node_modules/core-js/modules/es.regexp.exec.js"),F=e("./node_modules/core-js/modules/es.number.is-nan.js"),Q=e("./node_modules/core-js/modules/es.number.constructor.js"),G=e("./node_modules/core-js/modules/es.parse-int.js"),q=e("./node_modules/core-js/modules/es.array.map.js"),z=e("./node_modules/core-js/modules/es.string.split.js"),X=e("./node_modules/core-js/modules/es.string.starts-with.js"),k=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),I=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),T=e("./node_modules/core-js/modules/es.array.from.js");function P(r,n){return y(r)||U(r,n)||S(r,n)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(r,n){if(!!r){if(typeof r=="string")return x(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(r,n)}}function x(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function U(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function y(r){if(Array.isArray(r))return r}function m(r){var n=r.replace("#","");return typeof n=="string"&&n.length===6&&!Number.isNaN(Number("0x"+n))}function j(r){var n=r.replace("#",""),t=parseInt(n,16),o=t>>16&255,a=t>>8&255,c=t&255;return{r:o,g:a,b:c,a:1}}function u(r){var n=r.replace(/[^0-9,.]/g,"").split(",").map(Number),t=P(n,4),o=t[0],a=t[1],c=t[2],s=t[3];return{r:o,g:a,b:c,a:s||1}}function h(r){return m(r)?j(r):r.startsWith("rgb")?u(r):{r:0,g:0,b:0,a:1}}var l=function(n,t){var o=h(n),a=o.r,c=o.g,s=o.b;return"rgba("+a+", "+c+", "+s+", "+t+")"}},"./packages/tm-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return G});var K=e("./node_modules/core-js/modules/es.array.concat.js"),te=e.n(K),F=e("./node_modules/react/index.js"),Q=e.n(F),G=function(z){var X=Object(F.useRef)(z);return Object(F.useEffect)(function(){X.current=z},[z]),Object(F.useMemo)(function(){return function(){for(var k,$=arguments.length,H=new Array($),I=0;I<$;I++)H[I]=arguments[I];return(k=X.current)===null||k===void 0?void 0:k.call.apply(k,[X].concat(H))}},[])}},"./packages/tm-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e.n(K),F=e("./packages/tm-design-hooks/src/useClickAway/useClickAway.ts"),Q=e("./node_modules/react/jsx-runtime.js"),G=e.n(Q),q=`import React from "react";
import { useClickAway } from "../useClickAway";

export default {
  title: "@tm-design/hooks/useClickAway",
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useClickAway } from "../useClickAway";

export default {
  title: "@tm-design/hooks/useClickAway",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@tm-design/hooks/useClickAway"};var X=function(){var $=Object(F.a)(function(){alert("Click away from red box!")});return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{ref:$,style:{width:100,height:100,backgroundColor:"red"}})})};X.displayName="Default"},"./packages/tm-design-hooks/src/useClickAway/useClickAway.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return l});var K=e("./node_modules/core-js/modules/es.array.slice.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.function.name.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.array.from.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.symbol.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e.n(W),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),C=e.n(R),T=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.is-array.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useCallbackRef/useCallbackRef.ts");function m(r,n){var t=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=j(r))||n&&r&&typeof r.length=="number"){t&&(r=t);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(_){throw _},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,s=!1,d;return{s:function(){t=t.call(r)},n:function(){var _=t.next();return c=_.done,_},e:function(_){s=!0,d=_},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(s)throw d}}}}function j(r,n){if(!!r){if(typeof r=="string")return u(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(r,n)}}function u(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}var h=["mousedown","touchstart"],l=function(n){var t=Object(x.useRef)(),o=Object(y.a)(n);return Object(x.useEffect)(function(){var a=function(_){var f=t.current;f&&!f.contains(_.target)&&o(_)},c=m(h),s;try{for(c.s();!(s=c.n()).done;){var d=s.value;document.addEventListener(d,a)}}catch(i){c.e(i)}finally{c.f()}return function(){var i=m(h),_;try{for(i.s();!(_=i.n()).done;){var f=_.value;document.removeEventListener(f,a)}}catch(b){i.e(b)}finally{i.f()}}},[t.current]),t}},"./packages/tm-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return r});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js");function w(n,t){return T(n)||C(n,t)||Z(n,t)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(n,t){if(!!n){if(typeof n=="string")return R(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return R(n,t)}}function R(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function C(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],c=!0,s=!1,d,i;try{for(o=o.call(n);!(c=(d=o.next()).done)&&(a.push(d.value),!(t&&a.length===t));c=!0);}catch(_){s=!0,i=_}finally{try{!c&&o.return!=null&&o.return()}finally{if(s)throw i}}return a}}function T(n){if(Array.isArray(n))return n}var P=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.timeout,a=o===void 0?2e3:o,c=Object(I.useState)(null),s=w(c,2),d=s[0],i=s[1],_=Object(I.useState)(!1),f=w(_,2),b=f[0],D=f[1],B=Object(I.useState)(null),O=w(B,2),p=O[0],A=O[1],M=function(oe){clearTimeout(p),A(setTimeout(function(){return D(!1)},a)),D(oe)},E=function(oe){"clipboard"in navigator?navigator.clipboard.writeText(oe).then(function(){return M(!0)}).catch(function(de){return i(de)}):i(new Error("useClipboard: navigator.clipboard is not supported"))},Y=function(){D(!1),i(null),clearTimeout(p)};return{copy:E,reset:Y,error:d,copied:b}},g=e("./node_modules/react/jsx-runtime.js");function S(n,t){return j(n)||m(n,t)||U(n,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(n,t){if(!!n){if(typeof n=="string")return y(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return y(n,t)}}function y(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function m(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],c=!0,s=!1,d,i;try{for(o=o.call(n);!(c=(d=o.next()).done)&&(a.push(d.value),!(t&&a.length===t));c=!0);}catch(_){s=!0,i=_}finally{try{!c&&o.return!=null&&o.return()}finally{if(s)throw i}}return a}}function j(n){if(Array.isArray(n))return n}var u=`import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@tm-design/hooks/useClipboard",
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
`,h={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},l=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@tm-design/hooks/useClipboard",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}}}},title:"@tm-design/hooks/useClipboard"},r=function(){var t=Object(I.useState)(""),o=S(t,2),a=o[0],c=o[1],s=P({timeout:3e3}),d=s.copy,i=s.copied;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",onChange:function(f){return c(f.target.value)}}),Object(g.jsx)("button",{onClick:function(){return d(a)},children:"copy"}),Object(g.jsx)("span",{children:i&&"Copied!!"})]})};r.displayName="Default"},"./packages/tm-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e("./packages/tm-design-hooks/src/useMediaQuery/useMediaQuery.ts"),F=function(){return Object(te.a)("(prefers-color-scheme: dark)")?"dark":"light"},Q=e("./node_modules/react/jsx-runtime.js"),G=`import React from "react";
import { useColorScheme } from "../useColorScheme";

export default {
  title: "@tm-design/hooks/useColorScheme",
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
`,q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},z=v.default={parameters:{storySource:{source:`import React from "react";
import { useColorScheme } from "../useColorScheme";

export default {
  title: "@tm-design/hooks/useColorScheme",
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@tm-design/hooks/useColorScheme"},X=function(){var $=F();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:$})})};X.displayName="Default"},"./packages/tm-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return n});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./packages/tm-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),w=e("./packages/tm-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function L(t,o){return P(t)||T(t,o)||R(t,o)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(t,o){if(!!t){if(typeof t=="string")return C(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(t,o)}}function C(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function T(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function P(t){if(Array.isArray(t))return t}var g=function(o,a,c){var s=Object(w.a)(o,a),d=L(s,2),i=d[0],_=d[1];return Object(W.a)(i,c),_},S=e("./node_modules/react/jsx-runtime.js");function x(t,o){return u(t)||j(t,o)||y(t,o)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,o){if(!!t){if(typeof t=="string")return m(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(t,o)}}function m(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function j(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function u(t){if(Array.isArray(t))return t}var h=`import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@tm-design/hooks/useDebounce",
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
`,l={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},r=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@tm-design/hooks/useDebounce",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@tm-design/hooks/useDebounce"},n=function(){var o=Object(I.useState)(""),a=x(o,2),c=a[0],s=a[1],d=g(function(){alert("Updated!")},1e3,[c]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"text",onChange:function(_){return s(_.target.value)}}),Object(S.jsx)("button",{onClick:d,children:"Cancel"})]})};n.displayName="Default"},"./packages/tm-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e.n(K),F=e("./packages/tm-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Q=e("./node_modules/react/jsx-runtime.js"),G=e.n(Q),q=`import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@tm-design/hooks/useForceUpdate",
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@tm-design/hooks/useForceUpdate",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}}}},title:"@tm-design/hooks/useForceUpdate"};var X=function(){var $=Object(F.a)();return Object(Q.jsxs)("div",{children:[Math.random(),Object(Q.jsx)("button",{onClick:$,children:"Update"})]})};X.displayName="Default"},"./packages/tm-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x);function y(t,o){return l(t)||h(t,o)||j(t,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,o){if(!!t){if(typeof t=="string")return u(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(t,o)}}function u(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function h(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function l(t){if(Array.isArray(t))return t}var r=function(o){return(o+1)%1e6},n=function(){var o=Object(x.useReducer)(r,0),a=y(o,2),c=a[1];return c}},"./packages/tm-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return i});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.string.split.js"),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),L=e("./node_modules/core-js/modules/es.string.replace.js"),Z=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.regexp.to-string.js"),C=e("./node_modules/core-js/modules/es.date.to-string.js");function T(_,f){var b=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!b){if(Array.isArray(_)||(b=P(_))||f&&_&&typeof _.length=="number"){b&&(_=b);var D=0,B=function(){};return{s:B,n:function(){return D>=_.length?{done:!0}:{done:!1,value:_[D++]}},e:function(M){function E(Y){return M.apply(this,arguments)}return E.toString=function(){return M.toString()},E}(function(M){throw M}),f:B}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,p=!1,A;return{s:function(){b=b.call(_)},n:function(){var E=b.next();return O=E.done,E},e:function(M){function E(Y){return M.apply(this,arguments)}return E.toString=function(){return M.toString()},E}(function(M){p=!0,A=M}),f:function(){try{!O&&b.return!=null&&b.return()}finally{if(p)throw A}}}}function P(_,f){if(!!_){if(typeof _=="string")return g(_,f);var b=Object.prototype.toString.call(_).slice(8,-1);if(b==="Object"&&_.constructor&&(b=_.constructor.name),b==="Map"||b==="Set")return Array.from(_);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return g(_,f)}}function g(_,f){(f==null||f>_.length)&&(f=_.length);for(var b=0,D=new Array(f);b<f;b++)D[b]=_[b];return D}var S={alt:1,ctrl:2,meta:4,shift:8},x={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},U={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},y=function(f){var b=f.key!==" "?f.key.toLowerCase():"space",D=0;return f.altKey&&(D+=S.alt),f.ctrlKey&&(D+=S.ctrl),f.metaKey&&(D+=S.meta),f.shiftKey&&(D+=S.shift),{modifiers:D,key:b}},m=function(f){var b=f.replace(/\s/g,"").toLowerCase().split("+"),D=0,B,O=T(b),p;try{for(O.s();!(p=O.n()).done;){var A=p.value;S[A]?D+=S[A]:S[U[A]]?D+=S[U[A]]:x[A]?(D+=S.shift,B=x[A]):U[A]?B=U[A]:B=A}}catch(M){O.e(M)}finally{O.f()}return{modifiers:D,key:B}},j=function(f,b){return f.modifiers===b.modifiers&&f.key===b.key},u=function(f){var b=Object(I.useMemo)(function(){return f.filter(function(E){return!E.global})},[f]),D=Object(I.useMemo)(function(){return f.filter(function(E){return E.global})},[f]),B=Object(I.useCallback)(function(E,Y,N,oe){var de=T(E?D:b),ge;try{for(de.s();!(ge=de.n()).done;){var le=ge.value;if(j(m(le.combo),Y)){var se;(se=le[N])===null||se===void 0||se.call(le,oe)}}}catch(ce){de.e(ce)}finally{de.f()}},[b,D]),O=Object(I.useCallback)(function(E){B(!0,y(E),"onKeyDown",E)},[B]),p=Object(I.useCallback)(function(E){B(!0,y(E),"onKeyUp",E)},[B]),A=Object(I.useCallback)(function(E){B(!1,y(E.nativeEvent),"onKeyDown",E.nativeEvent)},[B]),M=Object(I.useCallback)(function(E){B(!1,y(E.nativeEvent),"onKeyUp",E.nativeEvent)},[B]);return Object(I.useEffect)(function(){return document.addEventListener("keydown",O),document.addEventListener("keyup",p),function(){document.removeEventListener("keydown",O),document.removeEventListener("keyup",p)}},[O,p]),{handleKeyDown:A,handleKeyUp:M}},h=e("./node_modules/react/jsx-runtime.js");function l(_,f){return a(_)||o(_,f)||n(_,f)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(_,f){if(!!_){if(typeof _=="string")return t(_,f);var b=Object.prototype.toString.call(_).slice(8,-1);if(b==="Object"&&_.constructor&&(b=_.constructor.name),b==="Map"||b==="Set")return Array.from(_);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return t(_,f)}}function t(_,f){(f==null||f>_.length)&&(f=_.length);for(var b=0,D=new Array(f);b<f;b++)D[b]=_[b];return D}function o(_,f){var b=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(b!=null){var D=[],B=!0,O=!1,p,A;try{for(b=b.call(_);!(B=(p=b.next()).done)&&(D.push(p.value),!(f&&D.length===f));B=!0);}catch(M){O=!0,A=M}finally{try{!B&&b.return!=null&&b.return()}finally{if(O)throw A}}return D}}function a(_){if(Array.isArray(_))return _}var c=`import React, { useRef, useState } from "react";

import { useHotKey } from "../useHotKey";

export default {
  title: "@tm-design/hooks/useHotKey",
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},d=v.default={parameters:{storySource:{source:`import React, { useRef, useState } from "react";

import { useHotKey } from "../useHotKey";

export default {
  title: "@tm-design/hooks/useHotKey",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}}}},title:"@tm-design/hooks/useHotKey"},i=function(){var f=Object(I.useRef)(null),b=Object(I.useState)(""),D=l(b,2),B=D[0],O=D[1],p=u([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){f.current.select()}},{combo:"shift+r",onKeyUp:function(){O("")}}]),A=p.handleKeyDown,M=p.handleKeyUp;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{ref:f,type:"text",value:B,onChange:function(Y){return O(Y.target.value)},onKeyDown:A,onKeyUp:M})})};i.displayName="Default"},"./packages/tm-design-hooks/src/useHover/stories/useHover.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return s});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useForceUpdate/useForceUpdate.ts"),m=e("./packages/tm-design-hooks/src/useHover/useHover.ts"),j=e("./node_modules/react/jsx-runtime.js"),u=e.n(j);function h(d,i){return o(d)||t(d,i)||r(d,i)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,i){if(!!d){if(typeof d=="string")return n(d,i);var _=Object.prototype.toString.call(d).slice(8,-1);if(_==="Object"&&d.constructor&&(_=d.constructor.name),_==="Map"||_==="Set")return Array.from(d);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return n(d,i)}}function n(d,i){(i==null||i>d.length)&&(i=d.length);for(var _=0,f=new Array(i);_<i;_++)f[_]=d[_];return f}function t(d,i){var _=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(_!=null){var f=[],b=!0,D=!1,B,O;try{for(_=_.call(d);!(b=(B=_.next()).done)&&(f.push(B.value),!(i&&f.length===i));b=!0);}catch(p){D=!0,O=p}finally{try{!b&&_.return!=null&&_.return()}finally{if(D)throw O}}return f}}function o(d){if(Array.isArray(d))return d}var a=`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../useHover";

export default {
  title: "@tm-design/hooks/useHover",
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
`,c={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};v.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../useHover";

export default {
  title: "@tm-design/hooks/useHover",
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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}}}},title:"@tm-design/hooks/useHover"};var s=function(){var i=Object(m.a)(),_=h(i,2),f=_[0],b=_[1],D=Object(y.a)();return Object(x.useEffect)(function(){D()},[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{ref:b,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+f]})})};s.displayName="Default"},"./packages/tm-design-hooks/src/useHover/useHover.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return r});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x);function y(n,t){return l(n)||h(n,t)||j(n,t)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n,t){if(!!n){if(typeof n=="string")return u(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(n,t)}}function u(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function h(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],c=!0,s=!1,d,i;try{for(o=o.call(n);!(c=(d=o.next()).done)&&(a.push(d.value),!(t&&a.length===t));c=!0);}catch(_){s=!0,i=_}finally{try{!c&&o.return!=null&&o.return()}finally{if(s)throw i}}return a}}function l(n){if(Array.isArray(n))return n}var r=function(){var t=Object(x.useRef)(null),o=Object(x.useState)(!1),a=y(o,2),c=a[0],s=a[1],d=Object(x.useCallback)(function(){return s(!0)},[]),i=Object(x.useCallback)(function(){return s(!1)},[]);return Object(x.useEffect)(function(){var _=t.current;if(!!_)return _.addEventListener("mouseenter",d),_.addEventListener("mouseleave",i),function(){_.removeEventListener("mouseenter",d),_.removeEventListener("mouseleave",i)}},[t.current]),[c,t]}},"./packages/tm-design-hooks/src/useId/stories/useId.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e.n(K),F=e("./packages/tm-design-hooks/src/useId/useId.ts"),Q=e("./node_modules/react/jsx-runtime.js"),G=e.n(Q),q=`import React from "react";
import { useId } from "../useId";

export default {
  title: "@tm-design/hooks/useId",
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useId } from "../useId";

export default {
  title: "@tm-design/hooks/useId",
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@tm-design/hooks/useId"};var X=function(){var $=Object(F.a)();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:$})})};X.displayName="Default"},"./packages/tm-design-hooks/src/useId/useId.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x);function y(t,o){return l(t)||h(t,o)||j(t,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,o){if(!!t){if(typeof t=="string")return u(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(t,o)}}function u(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function h(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function l(t){if(Array.isArray(t))return t}var r=0,n=function(o){var a=Object(x.useState)(o),c=y(a,2),s=c[0],d=c[1],i=o||s;return Object(x.useEffect)(function(){s==null&&(r+=1,d("tm-"+r))},[s]),i}},"./packages/tm-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return l});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),F=e("./node_modules/core-js/modules/web.timers.js"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),G=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),q=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),k=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js");function R(r,n){return S(r)||g(r,n)||T(r,n)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(r,n){if(!!r){if(typeof r=="string")return P(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(r,n)}}function P(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function g(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function S(r){if(Array.isArray(r))return r}var x=["keypress","mousemove","touchmove","click","scroll"],U={events:x,initialState:!0},y=function(n,t){var o=Object.assign({},U,t),a=o.events,c=o.initialState,s=Object(K.useState)(c),d=R(s,2),i=d[0],_=d[1],f=Object(K.useRef)();return Object(K.useEffect)(function(){var b=function(){_(!1),f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(function(){_(!0)},n)};return a.forEach(function(D){return document.addEventListener(D,b)}),function(){a.forEach(function(D){return document.removeEventListener(D,b)})}},[n]),i},m=e("./node_modules/react/jsx-runtime.js"),j=`import React from "react";
import { useIdle } from "../useIdle";

export default {
  title: "@tm-design/hooks/useIdle",
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};
`,u={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},h=v.default={parameters:{storySource:{source:`import React from "react";
import { useIdle } from "../useIdle";

export default {
  title: "@tm-design/hooks/useIdle",
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@tm-design/hooks/useIdle"},l=function(){var n=y(3e3);return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:["Idle: ",""+n]})})};l.displayName="Default"},"./packages/tm-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return l});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js");function W(r,n){return C(r)||R(r,n)||L(r,n)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(r,n){if(!!r){if(typeof r=="string")return Z(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(r,n)}}function Z(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function R(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function C(r){if(Array.isArray(r))return r}var T=function(n){var t=Object(I.useState)(null),o=W(t,2),a=o[0],c=o[1],s=Object(I.useRef)(),d=Object(I.useCallback)(function(i){if(s.current&&(s.current.disconnect(),s.current=null),i===null){c(null);return}s.current=new IntersectionObserver(function(_){var f=W(_,1),b=f[0];c(b)},n),s.current.observe(i)},[n==null?void 0:n.rootMargin,n==null?void 0:n.root,n==null?void 0:n.threshold]);return[d,a]},P=e("./node_modules/react/jsx-runtime.js");function g(r,n){return m(r)||y(r,n)||x(r,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(r,n){if(!!r){if(typeof r=="string")return U(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(r,n)}}function U(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function y(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function m(r){if(Array.isArray(r))return r}var j=`import React, { useRef } from "react";

import { useIntersection } from "../useIntersection";

export default {
  title: "@tm-design/hooks/useIntersection",
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
`,u={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},h=v.default={parameters:{storySource:{source:`import React, { useRef } from "react";

import { useIntersection } from "../useIntersection";

export default {
  title: "@tm-design/hooks/useIntersection",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}}}},title:"@tm-design/hooks/useIntersection"},l=function(){var n=Object(I.useRef)(null),t=T({root:n.current,threshold:.5}),o=g(t,2),a=o[0],c=o[1];return Object(P.jsx)("div",{ref:n,style:{width:300,height:300,overflowY:"scroll"},children:Object(P.jsx)("div",{style:{height:500},children:Object(P.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:c!=null&&c.isIntersecting?"green":"red"},children:c!=null&&c.isIntersecting?"Half visible":"Obscured"})})})};l.displayName="Default"},"./packages/tm-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return y});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./packages/tm-design-hooks/src/useIntervalFn/useIntervalFn.ts");function w(m,j){return T(m)||C(m,j)||Z(m,j)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(m,j){if(!!m){if(typeof m=="string")return R(m,j);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return R(m,j)}}function R(m,j){(j==null||j>m.length)&&(j=m.length);for(var u=0,h=new Array(j);u<j;u++)h[u]=m[u];return h}function C(m,j){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var h=[],l=!0,r=!1,n,t;try{for(u=u.call(m);!(l=(n=u.next()).done)&&(h.push(n.value),!(j&&h.length===j));l=!0);}catch(o){r=!0,t=o}finally{try{!l&&u.return!=null&&u.return()}finally{if(r)throw t}}return h}}function T(m){if(Array.isArray(m))return m}var P=function(j,u){var h=Object(W.a)(j,u),l=w(h,2),r=l[0],n=l[1];return Object(K.useEffect)(function(){return r(),n},[r,n]),n},g=e("./node_modules/react/jsx-runtime.js"),S=`import React from "react";
import { useInterval } from "../useInterval";

export default {
  title: "@tm-design/hooks/useInterval",
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},U=v.default={parameters:{storySource:{source:`import React from "react";
import { useInterval } from "../useInterval";

export default {
  title: "@tm-design/hooks/useInterval",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@tm-design/hooks/useInterval"},y=function(){var j=P(function(){alert("fire")},3e3);return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:j,children:"clear"})})};y.displayName="Default"},"./packages/tm-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useIntervalFn/useIntervalFn.ts"),m=e("./node_modules/react/jsx-runtime.js"),j=e.n(m);function u(s,d){return t(s)||n(s,d)||l(s,d)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return r(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(s,d)}}function r(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function n(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function t(s){if(Array.isArray(s))return s}var o=`import React from "react";
import { useIntervalFn } from "../useIntervalFn";

export default {
  title: "@tm-design/hooks/useIntervalFn",
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useIntervalFn } from "../useIntervalFn";

export default {
  title: "@tm-design/hooks/useIntervalFn",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@tm-design/hooks/useIntervalFn"};var c=function(){var d=Object(y.a)(function(){alert("fire")},3e3),i=u(d,2),_=i[0],f=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:_,children:"run"}),Object(m.jsx)("button",{onClick:f,children:"clear"})]})};c.displayName="Default"},"./packages/tm-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return q});var K=e("./node_modules/core-js/modules/web.timers.js"),te=e.n(K),F=e("./node_modules/react/index.js"),Q=e.n(F),G=e("./packages/tm-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(X,k){var $=Object(F.useRef)(),H=Object(G.a)(X),I=Object(F.useCallback)(function(){$.current&&clearInterval($.current),$.current=setInterval(function(){H()},k)},[k]),W=Object(F.useCallback)(function(){$.current&&clearInterval($.current)},[]);return Object(F.useEffect)(function(){return W},[W]),[I,W]}},"./packages/tm-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return U});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=typeof document!="undefined"?I.useLayoutEffect:I.useEffect,w=e("./node_modules/react/jsx-runtime.js");function L(y,m){return P(y)||T(y,m)||R(y,m)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(y,m){if(!!y){if(typeof y=="string")return C(y,m);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return C(y,m)}}function C(y,m){(m==null||m>y.length)&&(m=y.length);for(var j=0,u=new Array(m);j<m;j++)u[j]=y[j];return u}function T(y,m){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var u=[],h=!0,l=!1,r,n;try{for(j=j.call(y);!(h=(r=j.next()).done)&&(u.push(r.value),!(m&&u.length===m));h=!0);}catch(t){l=!0,n=t}finally{try{!h&&j.return!=null&&j.return()}finally{if(l)throw n}}return u}}function P(y){if(Array.isArray(y))return y}var g=`import React, { useState } from "react";

import { useIsomorphicEffect } from "../useIsomorphicEffect";

export default {
  title: "@tm-design/hooks/useIsomorphicEffect",
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
};
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},x=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useIsomorphicEffect } from "../useIsomorphicEffect";

export default {
  title: "@tm-design/hooks/useIsomorphicEffect",
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}}}},title:"@tm-design/hooks/useIsomorphicEffect"},U=function(){var m=Object(I.useState)(!1),j=L(m,2),u=j[0],h=j[1];return W(function(){h(!0)},[]),Object(w.jsx)("div",{children:u&&"mounted"})};U.displayName="Default"},"./packages/tm-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return U});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js");function W(y,m){return C(y)||R(y,m)||L(y,m)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(y,m){if(!!y){if(typeof y=="string")return Z(y,m);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Z(y,m)}}function Z(y,m){(m==null||m>y.length)&&(m=y.length);for(var j=0,u=new Array(m);j<m;j++)u[j]=y[j];return u}function R(y,m){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var u=[],h=!0,l=!1,r,n;try{for(j=j.call(y);!(h=(r=j.next()).done)&&(u.push(r.value),!(m&&u.length===m));h=!0);}catch(t){l=!0,n=t}finally{try{!h&&j.return!=null&&j.return()}finally{if(l)throw n}}return u}}function C(y){if(Array.isArray(y))return y}var T=function(m){var j=Object(K.useState)(!1),u=W(j,2),h=u[0],l=u[1],r=Object(K.useCallback)(function(t){var o=t.key;o===m&&l(!0)},[m]),n=Object(K.useCallback)(function(t){var o=t.key;o===m&&l(!1)},[m]);return Object(K.useEffect)(function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",n)}},[r,n]),h},P=e("./node_modules/react/jsx-runtime.js"),g=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@tm-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},x=v.default={parameters:{storySource:{source:`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@tm-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@tm-design/hooks/useKeyPress"},U=function(){var m=T("r");return Object(P.jsx)("div",{children:m&&"r key pressed"})};U.displayName="Default"},"./packages/tm-design-hooks/src/useList/stories/useList.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return _});var K=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.concat.js"),L=e("./node_modules/core-js/modules/es.array.filter.js"),Z=e("./node_modules/core-js/modules/es.array.includes.js"),R=e("./node_modules/core-js/modules/es.string.includes.js");function C(f){return g(f)||P(f)||U(f)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function g(f){if(Array.isArray(f))return y(f)}function S(f,b){return j(f)||m(f,b)||U(f,b)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(f,b){if(!!f){if(typeof f=="string")return y(f,b);var D=Object.prototype.toString.call(f).slice(8,-1);if(D==="Object"&&f.constructor&&(D=f.constructor.name),D==="Map"||D==="Set")return Array.from(f);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return y(f,b)}}function y(f,b){(b==null||b>f.length)&&(b=f.length);for(var D=0,B=new Array(b);D<b;D++)B[D]=f[D];return B}function m(f,b){var D=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(D!=null){var B=[],O=!0,p=!1,A,M;try{for(D=D.call(f);!(O=(A=D.next()).done)&&(B.push(A.value),!(b&&B.length===b));O=!0);}catch(E){p=!0,M=E}finally{try{!O&&D.return!=null&&D.return()}finally{if(p)throw M}}return B}}function j(f){if(Array.isArray(f))return f}var u=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],D=Object(W.useState)(b),B=S(D,2),O=B[0],p=B[1],A=Object(W.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return p(function(me){return[].concat(C(me),se)})},[]),M=Object(W.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return p(function(me){return[].concat(se,C(me))})},[]),E=Object(W.useCallback)(function(le){for(var se=arguments.length,ce=new Array(se>1?se-1:0),me=1;me<se;me++)ce[me-1]=arguments[me];return p(function(je){return[].concat(C(je.slice(0,le)),ce,C(je.slice(le)))})},[]),Y=Object(W.useCallback)(function(){for(var le=arguments.length,se=new Array(le),ce=0;ce<le;ce++)se[ce]=arguments[ce];return p(function(me){return me.filter(function(je,ae){return!se.includes(ae)})})},[]),N=Object(W.useCallback)(function(){var le=C(O),se=le.pop();return p(le),se},[O]),oe=Object(W.useCallback)(function(){var le=C(O),se=le.shift();return p(le),se},[O]),de=Object(W.useCallback)(function(le,se){p(function(ce){var me=C(ce);return me[le]=se,me})},[]),ge={setState:p,append:A,prepend:M,insert:E,remove:Y,pop:N,shift:oe,setItem:de};return[O,ge]},h=e("./node_modules/react/jsx-runtime.js");function l(f,b){return a(f)||o(f,b)||n(f,b)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(f,b){if(!!f){if(typeof f=="string")return t(f,b);var D=Object.prototype.toString.call(f).slice(8,-1);if(D==="Object"&&f.constructor&&(D=f.constructor.name),D==="Map"||D==="Set")return Array.from(f);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return t(f,b)}}function t(f,b){(b==null||b>f.length)&&(b=f.length);for(var D=0,B=new Array(b);D<b;D++)B[D]=f[D];return B}function o(f,b){var D=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(D!=null){var B=[],O=!0,p=!1,A,M;try{for(D=D.call(f);!(O=(A=D.next()).done)&&(B.push(A.value),!(b&&B.length===b));O=!0);}catch(E){p=!0,M=E}finally{try{!O&&D.return!=null&&D.return()}finally{if(p)throw M}}return B}}function a(f){if(Array.isArray(f))return f}var c=`import React from "react";
import { useList } from "../useList";

export default {
  title: "@tm-design/hooks/useList",
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
`,s={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},d=v.default={parameters:{storySource:{source:`import React from "react";
import { useList } from "../useList";

export default {
  title: "@tm-design/hooks/useList",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}}}},title:"@tm-design/hooks/useList"},i=5,_=function(){var b=u(["Item 1","Item 2","Item 3","Item 4","Item 5"]),D=l(b,2),B=D[0],O=D[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return O.append("Item "+ ++i)},children:"append"}),Object(h.jsx)("button",{onClick:function(){return O.pop()},children:"pop"}),Object(h.jsx)("button",{onClick:function(){return O.prepend("Item "+ ++i)},children:"prepend"}),Object(h.jsx)("button",{onClick:function(){return O.shift()},children:"shift"}),Object(h.jsx)("button",{onClick:function(){return O.setItem(3,"Updated")},children:"setItem 3 index"}),Object(h.jsx)("button",{onClick:function(){return O.remove(2,3)},children:"remove 2, 3 index"}),Object(h.jsx)("button",{onClick:function(){return O.insert(3,"Item "+ ++i)},children:"insert 3 index"})]}),Object(h.jsx)("ul",{children:B.map(function(p,A){return Object(h.jsx)("li",{children:p},A)})})]})};_.displayName="Default"},"./packages/tm-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return M});var K=e("./node_modules/core-js/modules/es.promise.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/web.timers.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),k=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),I=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),w=e("./node_modules/react/index.js"),L=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),Z=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),R=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),C=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),T=e("./node_modules/core-js/modules/es.object.define-property.js"),P=e("./node_modules/core-js/modules/es.object.create.js"),g=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),x=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),U=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),y=e("./node_modules/core-js/modules/es.array.reverse.js"),m=e("./packages/tm-design-hooks/src/useCallbackRef/useCallbackRef.ts");function j(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */j=function(){return E};var E={},Y=Object.prototype,N=Y.hasOwnProperty,oe=typeof Symbol=="function"?Symbol:{},de=oe.iterator||"@@iterator",ge=oe.asyncIterator||"@@asyncIterator",le=oe.toStringTag||"@@toStringTag";function se(ee,V,ie){return Object.defineProperty(ee,V,{value:ie,enumerable:!0,configurable:!0,writable:!0}),ee[V]}try{se({},"")}catch(ee){se=function(ie,ue,fe){return ie[ue]=fe}}function ce(ee,V,ie,ue){var fe=V&&V.prototype instanceof ae?V:ae,ye=Object.create(fe.prototype),Oe=new Le(ue||[]);return ye._invoke=function(Ae,Me,ve){var Ee="suspendedStart";return function(xe,We){if(Ee==="executing")throw new Error("Generator is already running");if(Ee==="completed"){if(xe==="throw")throw We;return Re()}for(ve.method=xe,ve.arg=We;;){var Ke=ve.delegate;if(Ke){var Be=Ie(Ke,ve);if(Be){if(Be===je)continue;return Be}}if(ve.method==="next")ve.sent=ve._sent=ve.arg;else if(ve.method==="throw"){if(Ee==="suspendedStart")throw Ee="completed",ve.arg;ve.dispatchException(ve.arg)}else ve.method==="return"&&ve.abrupt("return",ve.arg);Ee="executing";var Ue=me(Ae,Me,ve);if(Ue.type==="normal"){if(Ee=ve.done?"completed":"suspendedYield",Ue.arg===je)continue;return{value:Ue.arg,done:ve.done}}Ue.type==="throw"&&(Ee="completed",ve.method="throw",ve.arg=Ue.arg)}}}(ee,ie,Oe),ye}function me(ee,V,ie){try{return{type:"normal",arg:ee.call(V,ie)}}catch(ue){return{type:"throw",arg:ue}}}E.wrap=ce;var je={};function ae(){}function J(){}function re(){}var _e={};se(_e,de,function(){return this});var pe=Object.getPrototypeOf,be=pe&&pe(pe(Pe([])));be&&be!==Y&&N.call(be,de)&&(_e=be);var he=re.prototype=ae.prototype=Object.create(_e);function Ce(ee){["next","throw","return"].forEach(function(V){se(ee,V,function(ie){return this._invoke(V,ie)})})}function De(ee,V){function ie(fe,ye,Oe,Ae){var Me=me(ee[fe],ee,ye);if(Me.type!=="throw"){var ve=Me.arg,Ee=ve.value;return Ee&&typeof Ee=="object"&&N.call(Ee,"__await")?V.resolve(Ee.__await).then(function(xe){ie("next",xe,Oe,Ae)},function(xe){ie("throw",xe,Oe,Ae)}):V.resolve(Ee).then(function(xe){ve.value=xe,Oe(ve)},function(xe){return ie("throw",xe,Oe,Ae)})}Ae(Me.arg)}var ue;this._invoke=function(fe,ye){function Oe(){return new V(function(Ae,Me){ie(fe,ye,Ae,Me)})}return ue=ue?ue.then(Oe,Oe):Oe()}}function Ie(ee,V){var ie=ee.iterator[V.method];if(ie===void 0){if(V.delegate=null,V.method==="throw"){if(ee.iterator.return&&(V.method="return",V.arg=void 0,Ie(ee,V),V.method==="throw"))return je;V.method="throw",V.arg=new TypeError("The iterator does not provide a 'throw' method")}return je}var ue=me(ie,ee.iterator,V.arg);if(ue.type==="throw")return V.method="throw",V.arg=ue.arg,V.delegate=null,je;var fe=ue.arg;return fe?fe.done?(V[ee.resultName]=fe.value,V.next=ee.nextLoc,V.method!=="return"&&(V.method="next",V.arg=void 0),V.delegate=null,je):fe:(V.method="throw",V.arg=new TypeError("iterator result is not an object"),V.delegate=null,je)}function Se(ee){var V={tryLoc:ee[0]};1 in ee&&(V.catchLoc=ee[1]),2 in ee&&(V.finallyLoc=ee[2],V.afterLoc=ee[3]),this.tryEntries.push(V)}function Te(ee){var V=ee.completion||{};V.type="normal",delete V.arg,ee.completion=V}function Le(ee){this.tryEntries=[{tryLoc:"root"}],ee.forEach(Se,this),this.reset(!0)}function Pe(ee){if(ee){var V=ee[de];if(V)return V.call(ee);if(typeof ee.next=="function")return ee;if(!isNaN(ee.length)){var ie=-1,ue=function fe(){for(;++ie<ee.length;)if(N.call(ee,ie))return fe.value=ee[ie],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return ue.next=ue}}return{next:Re}}function Re(){return{value:void 0,done:!0}}return J.prototype=re,se(he,"constructor",re),se(re,"constructor",J),J.displayName=se(re,le,"GeneratorFunction"),E.isGeneratorFunction=function(ee){var V=typeof ee=="function"&&ee.constructor;return!!V&&(V===J||(V.displayName||V.name)==="GeneratorFunction")},E.mark=function(ee){return Object.setPrototypeOf?Object.setPrototypeOf(ee,re):(ee.__proto__=re,se(ee,le,"GeneratorFunction")),ee.prototype=Object.create(he),ee},E.awrap=function(ee){return{__await:ee}},Ce(De.prototype),se(De.prototype,ge,function(){return this}),E.AsyncIterator=De,E.async=function(ee,V,ie,ue,fe){fe===void 0&&(fe=Promise);var ye=new De(ce(ee,V,ie,ue),fe);return E.isGeneratorFunction(V)?ye:ye.next().then(function(Oe){return Oe.done?Oe.value:ye.next()})},Ce(he),se(he,le,"Generator"),se(he,de,function(){return this}),se(he,"toString",function(){return"[object Generator]"}),E.keys=function(ee){var V=[];for(var ie in ee)V.push(ie);return V.reverse(),function ue(){for(;V.length;){var fe=V.pop();if(fe in ee)return ue.value=fe,ue.done=!1,ue}return ue.done=!0,ue}},E.values=Pe,Le.prototype={constructor:Le,reset:function(V){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Te),!V)for(var ie in this)ie.charAt(0)==="t"&&N.call(this,ie)&&!isNaN(+ie.slice(1))&&(this[ie]=void 0)},stop:function(){this.done=!0;var V=this.tryEntries[0].completion;if(V.type==="throw")throw V.arg;return this.rval},dispatchException:function(V){if(this.done)throw V;var ie=this;function ue(ve,Ee){return Oe.type="throw",Oe.arg=V,ie.next=ve,Ee&&(ie.method="next",ie.arg=void 0),!!Ee}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ye=this.tryEntries[fe],Oe=ye.completion;if(ye.tryLoc==="root")return ue("end");if(ye.tryLoc<=this.prev){var Ae=N.call(ye,"catchLoc"),Me=N.call(ye,"finallyLoc");if(Ae&&Me){if(this.prev<ye.catchLoc)return ue(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return ue(ye.finallyLoc)}else if(Ae){if(this.prev<ye.catchLoc)return ue(ye.catchLoc,!0)}else{if(!Me)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return ue(ye.finallyLoc)}}}},abrupt:function(V,ie){for(var ue=this.tryEntries.length-1;ue>=0;--ue){var fe=this.tryEntries[ue];if(fe.tryLoc<=this.prev&&N.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ye=fe;break}}ye&&(V==="break"||V==="continue")&&ye.tryLoc<=ie&&ie<=ye.finallyLoc&&(ye=null);var Oe=ye?ye.completion:{};return Oe.type=V,Oe.arg=ie,ye?(this.method="next",this.next=ye.finallyLoc,je):this.complete(Oe)},complete:function(V,ie){if(V.type==="throw")throw V.arg;return V.type==="break"||V.type==="continue"?this.next=V.arg:V.type==="return"?(this.rval=this.arg=V.arg,this.method="return",this.next="end"):V.type==="normal"&&ie&&(this.next=ie),je},finish:function(V){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ue=this.tryEntries[ie];if(ue.finallyLoc===V)return this.complete(ue.completion,ue.afterLoc),Te(ue),je}},catch:function(V){for(var ie=this.tryEntries.length-1;ie>=0;--ie){var ue=this.tryEntries[ie];if(ue.tryLoc===V){var fe=ue.completion;if(fe.type==="throw"){var ye=fe.arg;Te(ue)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function(V,ie,ue){return this.delegate={iterator:Pe(V),resultName:ie,nextLoc:ue},this.method==="next"&&(this.arg=void 0),je}},E}function u(E,Y,N,oe,de,ge,le){try{var se=E[ge](le),ce=se.value}catch(me){N(me);return}se.done?Y(ce):Promise.resolve(ce).then(oe,de)}function h(E){return function(){var Y=this,N=arguments;return new Promise(function(oe,de){var ge=E.apply(Y,N);function le(ce){u(ge,oe,de,le,se,"next",ce)}function se(ce){u(ge,oe,de,le,se,"throw",ce)}le(void 0)})}}function l(E,Y){return a(E)||o(E,Y)||n(E,Y)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(E,Y){if(!!E){if(typeof E=="string")return t(E,Y);var N=Object.prototype.toString.call(E).slice(8,-1);if(N==="Object"&&E.constructor&&(N=E.constructor.name),N==="Map"||N==="Set")return Array.from(E);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return t(E,Y)}}function t(E,Y){(Y==null||Y>E.length)&&(Y=E.length);for(var N=0,oe=new Array(Y);N<Y;N++)oe[N]=E[N];return oe}function o(E,Y){var N=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(N!=null){var oe=[],de=!0,ge=!1,le,se;try{for(N=N.call(E);!(de=(le=N.next()).done)&&(oe.push(le.value),!(Y&&oe.length===Y));de=!0);}catch(ce){ge=!0,se=ce}finally{try{!de&&N.return!=null&&N.return()}finally{if(ge)throw se}}return oe}}function a(E){if(Array.isArray(E))return E}var c=function(Y){var N=Object(w.useState)(!1),oe=l(N,2),de=oe[0],ge=oe[1],le=Object(m.a)(Y),se=Object(w.useCallback)(h(j().mark(function ce(){var me,je=arguments;return j().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return ge(!0),J.next=3,le.apply(void 0,je);case 3:return me=J.sent,ge(!1),J.abrupt("return",me);case 6:case"end":return J.stop()}},ce)})),[Y]);return[de,se]},s=e("./node_modules/react/jsx-runtime.js");function d(E,Y){return D(E)||b(E,Y)||_(E,Y)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(E,Y){if(!!E){if(typeof E=="string")return f(E,Y);var N=Object.prototype.toString.call(E).slice(8,-1);if(N==="Object"&&E.constructor&&(N=E.constructor.name),N==="Map"||N==="Set")return Array.from(E);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return f(E,Y)}}function f(E,Y){(Y==null||Y>E.length)&&(Y=E.length);for(var N=0,oe=new Array(Y);N<Y;N++)oe[N]=E[N];return oe}function b(E,Y){var N=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(N!=null){var oe=[],de=!0,ge=!1,le,se;try{for(N=N.call(E);!(de=(le=N.next()).done)&&(oe.push(le.value),!(Y&&oe.length===Y));de=!0);}catch(ce){ge=!0,se=ce}finally{try{!de&&N.return!=null&&N.return()}finally{if(ge)throw se}}return oe}}function D(E){if(Array.isArray(E))return E}var B=`import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@tm-design/hooks/useLoading",
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
`,O={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},p=v.default={parameters:{storySource:{source:`import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@tm-design/hooks/useLoading",
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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}}}},title:"@tm-design/hooks/useLoading"},A=function(Y){return new Promise(function(N){return setTimeout(N,Y)})},M=function(){var Y=c(A),N=d(Y,2),oe=N[0],de=N[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return de(2e3)},children:"Start"})}),Object(s.jsxs)("div",{children:["Loading: ",""+oe]})]})};M.displayName="Default"},"./packages/tm-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return X});var K=e("./node_modules/react/index.js"),te=e.n(K),F=e("./packages/tm-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Q=e("./node_modules/react/jsx-runtime.js"),G=e.n(Q),q=`import React from "react";
import { useMediaQuery } from "../useMediaQuery";

export default {
  title: "@tm-design/hooks/useMediaQuery",
};

export const Default = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
};
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useMediaQuery } from "../useMediaQuery";

export default {
  title: "@tm-design/hooks/useMediaQuery",
};

export const Default = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@tm-design/hooks/useMediaQuery"};var X=function(){var $=Object(F.a)("(min-width: 900px)");return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:["(min-width: 900px) : ",$?"matches":"does not match"]})})};X.displayName="Default"},"./packages/tm-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x);function y(o,a){return l(o)||h(o,a)||j(o,a)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(o,a){if(!!o){if(typeof o=="string")return u(o,a);var c=Object.prototype.toString.call(o).slice(8,-1);if(c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set")return Array.from(o);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return u(o,a)}}function u(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,s=new Array(a);c<a;c++)s[c]=o[c];return s}function h(o,a){var c=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(c!=null){var s=[],d=!0,i=!1,_,f;try{for(c=c.call(o);!(d=(_=c.next()).done)&&(s.push(_.value),!(a&&s.length===a));d=!0);}catch(b){i=!0,f=b}finally{try{!d&&c.return!=null&&c.return()}finally{if(i)throw f}}return s}}function l(o){if(Array.isArray(o))return o}function r(o,a){try{return o.addEventListener("change",a),function(){return o.removeEventListener("change",a)}}catch(c){return o.addListener(a),function(){return o.removeListener(a)}}}function n(o){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(o).matches:!1}var t=function(a){var c=Object(x.useState)(n(a)),s=y(c,2),d=s[0],i=s[1],_=Object(x.useRef)();return Object(x.useEffect)(function(){if("matchMedia"in window)return _.current=window.matchMedia(a),i(_.current.matches),r(_.current,function(f){return i(f.matches)})},[a]),d}},"./packages/tm-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return r});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./packages/tm-design-hooks/src/useClickAway/useClickAway.ts"),w=e("./packages/tm-design-hooks/src/useForceUpdate/useForceUpdate.ts"),L=e("./packages/tm-design-hooks/src/useHover/useHover.ts"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),R=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),C=function(t,o){typeof t=="function"?t(o):typeof t=="object"&&t!==null&&"current"in t&&(t.current=o)},T=function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return Object(I.useCallback)(function(c){o.forEach(function(s){return C(s,c)})},o)},P=function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return function(c){o.forEach(function(s){return C(s,c)})}},g=e("./node_modules/react/jsx-runtime.js");function S(n,t){return j(n)||m(n,t)||U(n,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(n,t){if(!!n){if(typeof n=="string")return y(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return y(n,t)}}function y(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function m(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],c=!0,s=!1,d,i;try{for(o=o.call(n);!(c=(d=o.next()).done)&&(a.push(d.value),!(t&&a.length===t));c=!0);}catch(_){s=!0,i=_}finally{try{!c&&o.return!=null&&o.return()}finally{if(s)throw i}}return a}}function j(n){if(Array.isArray(n))return n}var u=`import React, { useEffect } from "react";

import { useClickAway } from "../../useClickAway";
import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../../useHover";
import { useMergedRef } from "../useMergedRef";

export default {
  title: "@tm-design/hooks/useMergedRef",
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
`,h={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},l=v.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

import { useClickAway } from "../../useClickAway";
import { useForceUpdate } from "../../useForceUpdate";
import { useHover } from "../../useHover";
import { useMergedRef } from "../useMergedRef";

export default {
  title: "@tm-design/hooks/useMergedRef",
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
`,locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}}}},title:"@tm-design/hooks/useMergedRef"},r=function(){var t=Object(L.a)(),o=S(t,2),a=o[0],c=o[1],s=Object(W.a)(function(){return alert("click away")}),d=T(c,s),i=Object(w.a)();return Object(I.useEffect)(function(){i()},[]),Object(g.jsx)("div",{children:Object(g.jsx)("div",{ref:d,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};r.displayName="Default"},"./packages/tm-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return y});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js");function W(m,j){return C(m)||R(m,j)||L(m,j)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(m,j){if(!!m){if(typeof m=="string")return Z(m,j);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Z(m,j)}}function Z(m,j){(j==null||j>m.length)&&(j=m.length);for(var u=0,h=new Array(j);u<j;u++)h[u]=m[u];return h}function R(m,j){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var h=[],l=!0,r=!1,n,t;try{for(u=u.call(m);!(l=(n=u.next()).done)&&(h.push(n.value),!(j&&h.length===j));l=!0);}catch(o){r=!0,t=o}finally{try{!l&&u.return!=null&&u.return()}finally{if(r)throw t}}return h}}function C(m){if(Array.isArray(m))return m}var T={angle:0,type:"landscape-primary"},P=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T,u=Object(K.useState)(j),h=W(u,2),l=h[0],r=h[1];return Object(K.useEffect)(function(){var n=window.screen,t=!0,o=function(){if(t){var c=n,s=c.orientation;if(s){var d=s.angle,i=s.type;r({angle:d,type:i})}else window.orientation!==void 0?r({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):r(j)}};return window.addEventListener("orientationchange",o),o(),function(){t=!1,window.addEventListener("orientationchange",o)}},[]),l},g=e("./node_modules/react/jsx-runtime.js"),S=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@tm-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},U=v.default={parameters:{storySource:{source:`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@tm-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@tm-design/hooks/useOrientation"},y=function(){var j=P();return Object(g.jsx)("div",{children:JSON.stringify(j)})};y.displayName="Default"},"./packages/tm-design-hooks/src/useOs/stories/useOs.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return k});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),F=function(){var H=window.navigator,I=H.userAgent,W=H.platform,w=["Macintosh","MacIntel","MacPPC","Mac68K"],L=["Win32","Win64","Windows","WinCE"],Z=["iPhone","iPad","iPod"],R="unknown";return w.indexOf(W)!==-1?R="macos":Z.indexOf(W)!==-1?R="ios":L.indexOf(W)!==-1?R="windows":/Android/.test(I)?R="android":!R&&/Linux/.test(W)&&(R="linux"),R},Q=function(){return typeof window!="undefined"?F():"unknown"},G=e("./node_modules/react/jsx-runtime.js"),q=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@tm-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},X=v.default={parameters:{storySource:{source:`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@tm-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@tm-design/hooks/useOs"},k=function(){var H=Q();return Object(G.jsx)("div",{children:H})};k.displayName="Default"},"./packages/tm-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return U});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=function(m){Object(I.useEffect)(function(){if(!!m){var j=function(h){h=h||window.event;var l=h.relatedTarget||h.toElement;(!l||l.nodeName==="HTML")&&m()};return document.addEventListener("mouseout",j),function(){document.removeEventListener("mouseout",j)}}},[])},w=e("./node_modules/react/jsx-runtime.js");function L(y,m){return P(y)||T(y,m)||R(y,m)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(y,m){if(!!y){if(typeof y=="string")return C(y,m);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return C(y,m)}}function C(y,m){(m==null||m>y.length)&&(m=y.length);for(var j=0,u=new Array(m);j<m;j++)u[j]=y[j];return u}function T(y,m){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var u=[],h=!0,l=!1,r,n;try{for(j=j.call(y);!(h=(r=j.next()).done)&&(u.push(r.value),!(m&&u.length===m));h=!0);}catch(t){l=!0,n=t}finally{try{!h&&j.return!=null&&j.return()}finally{if(l)throw n}}return u}}function P(y){if(Array.isArray(y))return y}var g=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@tm-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},x=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@tm-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}}}},title:"@tm-design/hooks/usePageLeave"},U=function(){var m=Object(I.useState)(0),j=L(m,2),u=j[0],h=j[1];return W(function(){return h(function(l){return l+1})}),Object(w.jsxs)("div",{children:["Page leave count: ",u]})};U.displayName="Default"},"./packages/tm-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return h});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.array.concat.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),k=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js");function w(l){return R(l)||Z(l)||P(l)||L()}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function R(l){if(Array.isArray(l))return g(l)}function C(l,r){return x(l)||S(l,r)||P(l,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(l,r){if(!!l){if(typeof l=="string")return g(l,r);var n=Object.prototype.toString.call(l).slice(8,-1);if(n==="Object"&&l.constructor&&(n=l.constructor.name),n==="Map"||n==="Set")return Array.from(l);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(l,r)}}function g(l,r){(r==null||r>l.length)&&(r=l.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=l[n];return t}function S(l,r){var n=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(n!=null){var t=[],o=!0,a=!1,c,s;try{for(n=n.call(l);!(o=(c=n.next()).done)&&(t.push(c.value),!(r&&t.length===r));o=!0);}catch(d){a=!0,s=d}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw s}}return t}}function x(l){if(Array.isArray(l))return l}var U=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(K.useState)({state:n.slice(0,r),queue:n.slice(r)}),o=C(t,2),a=o[0],c=a.state,s=a.queue,d=o[1],i=function(){for(var D=arguments.length,B=new Array(D),O=0;O<D;O++)B[O]=arguments[O];return d(function(p){var A=[].concat(w(p.state),w(p.queue),B);return{state:A.slice(0,r),queue:A.slice(r)}})},_=function(D){return d(function(B){var O=D([].concat(w(B.state),w(B.queue)));return{state:O.slice(0,r),queue:O.slice(r)}})},f=function(){return d(function(D){return{state:D.state,queue:[]}})};return{state:c,queue:s,add:i,update:_,cleanQueue:f}},y=e("./node_modules/react/jsx-runtime.js"),m=`import React, { useState } from "react";

import { useQueue } from "../useQueue";

export default {
  title: "@tm-design/hooks/useQueue",
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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},u=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useQueue } from "../useQueue";

export default {
  title: "@tm-design/hooks/useQueue",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@tm-design/hooks/useQueue"},h=function(){var r=U(10,[1,2,3]),n=r.state,t=r.queue,o=r.add,a=r.update,c=r.cleanQueue;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:["state: ",n]}),Object(y.jsxs)("div",{children:["queue: ",t]}),Object(y.jsx)("button",{onClick:function(){return o(5)},children:"add 5"}),Object(y.jsx)("button",{onClick:function(){return a(function(d){return d})},children:"update"}),Object(y.jsx)("button",{onClick:c,children:"clear"})]})};h.displayName="Default"},"./packages/tm-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useRafState/useRafState.ts"),m=e("./node_modules/react/jsx-runtime.js"),j=e.n(m);function u(s,d){return t(s)||n(s,d)||l(s,d)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return r(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(s,d)}}function r(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function n(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function t(s){if(Array.isArray(s))return s}var o=`import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@tm-design/hooks/useRafState",
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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};v.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@tm-design/hooks/useRafState",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}}}},title:"@tm-design/hooks/useRafState"};var c=function(){var d=Object(y.a)({width:0,height:0}),i=u(d,2),_=i[0],f=i[1];return Object(x.useEffect)(function(){var b=function(){f({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}},[]),Object(m.jsx)("pre",{children:JSON.stringify(_,null,2)})};c.displayName="Default"},"./packages/tm-design-hooks/src/useRafState/useRafState.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return r});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x);function y(n,t){return l(n)||h(n,t)||j(n,t)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n,t){if(!!n){if(typeof n=="string")return u(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(n,t)}}function u(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function h(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],c=!0,s=!1,d,i;try{for(o=o.call(n);!(c=(d=o.next()).done)&&(a.push(d.value),!(t&&a.length===t));c=!0);}catch(_){s=!0,i=_}finally{try{!c&&o.return!=null&&o.return()}finally{if(s)throw i}}return a}}function l(n){if(Array.isArray(n))return n}var r=function(t){var o=Object(x.useRef)(0),a=Object(x.useState)(t),c=y(a,2),s=c[0],d=c[1],i=Object(x.useCallback)(function(_){cancelAnimationFrame(o.current),o.current=requestAnimationFrame(function(){d(_)})},[]);return[s,i]}},"./packages/tm-design-hooks/src/useResize/stories/useResize.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return o});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./packages/tm-design-hooks/src/useForceUpdate/useForceUpdate.ts"),w=e("./packages/tm-design-hooks/src/useRafState/useRafState.ts");function L(a,c){return P(a)||T(a,c)||R(a,c)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(a,c){if(!!a){if(typeof a=="string")return C(a,c);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return C(a,c)}}function C(a,c){(c==null||c>a.length)&&(c=a.length);for(var s=0,d=new Array(c);s<c;s++)d[s]=a[s];return d}function T(a,c){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d=[],i=!0,_=!1,f,b;try{for(s=s.call(a);!(i=(f=s.next()).done)&&(d.push(f.value),!(c&&d.length===c));i=!0);}catch(D){_=!0,b=D}finally{try{!i&&s.return!=null&&s.return()}finally{if(_)throw b}}return d}}function P(a){if(Array.isArray(a))return a}var g={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},S=typeof window!="undefined",x=function(){var c=Object(I.useRef)(null),s=Object(w.a)(g),d=L(s,2),i=d[0],_=d[1],f=Object(I.useMemo)(function(){return S?new ResizeObserver(function(b){var D=b[0];D&&_(D.contentRect)}):null},[]);return Object(I.useEffect)(function(){return c.current&&f.observe(c.current),function(){f.disconnect()}},[c.current]),[c,i]},U=e("./node_modules/react/jsx-runtime.js");function y(a,c){return l(a)||h(a,c)||j(a,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a,c){if(!!a){if(typeof a=="string")return u(a,c);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(a,c)}}function u(a,c){(c==null||c>a.length)&&(c=a.length);for(var s=0,d=new Array(c);s<c;s++)d[s]=a[s];return d}function h(a,c){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d=[],i=!0,_=!1,f,b;try{for(s=s.call(a);!(i=(f=s.next()).done)&&(d.push(f.value),!(c&&d.length===c));i=!0);}catch(D){_=!0,b=D}finally{try{!i&&s.return!=null&&s.return()}finally{if(_)throw b}}return d}}function l(a){if(Array.isArray(a))return a}var r=`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@tm-design/hooks/useResize",
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
`,n={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},t=v.default={parameters:{storySource:{source:`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@tm-design/hooks/useResize",
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
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}}}},title:"@tm-design/hooks/useResize"},o=function(){var c=x(),s=y(c,2),d=s[0],i=s[1],_=Object(W.a)();return Object(I.useEffect)(function(){_()},[]),Object(U.jsxs)("div",{children:[Object(U.jsx)("textarea",{ref:d,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(U.jsx)("div",{children:JSON.stringify(i)})]})};o.displayName="Default"},"./packages/tm-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.parse-int.js");function w(){var s=document.createElement("style");return s.type="text/css",s.setAttribute("tm-scroll-lock",""),s}function L(s){var d=document.head||document.getElementsByTagName("head")[0];d.appendChild(s)}function Z(s,d){s.styleSheet?s.styleSheet.cssText=d:s.appendChild(document.createTextNode(d))}function R(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var s=parseInt(window.getComputedStyle(document.body).paddingRight,10),d=window.innerWidth-document.documentElement.clientWidth;return s+d}var C=function(d){var i=d.disableBodyPadding,_=i?null:R(),f=`body {
        --removed-scroll-width: `+_+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(_?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return f};function T(s,d){return U(s)||x(s,d)||g(s,d)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(s,d){if(!!s){if(typeof s=="string")return S(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return S(s,d)}}function S(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function x(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function U(s){if(Array.isArray(s))return s}var y=function(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},_=Object(I.useState)(d||!1),f=T(_,2),b=f[0],D=f[1],B=Object(I.useRef)(0),O=i.disableBodyPadding,p=Object(I.useRef)(null),A=function(){B.current=window.scrollY;var Y=C({disableBodyPadding:O}),N=w();Z(N,Y),L(N),p.current=N},M=function(){!(p!=null&&p.current)||(p.current.parentNode.removeChild(p.current),p.current=null)};return Object(I.useEffect)(function(){return b?A():M(),M},[b]),Object(I.useEffect)(function(){d!==void 0&&D(d)},[d]),Object(I.useEffect)(function(){d===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&D(!0)},[D]),[b,D]},m=e("./node_modules/react/jsx-runtime.js");function j(s,d){return n(s)||r(s,d)||h(s,d)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(s,d){if(!!s){if(typeof s=="string")return l(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(s,d)}}function l(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function r(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function n(s){if(Array.isArray(s))return s}var t=`import React, { useState } from "react";

import { useScrollLock } from "../useScrollLock";

export default {
  title: "@tm-design/hooks/useScrollLock",
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
`,o={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useScrollLock } from "../useScrollLock";

export default {
  title: "@tm-design/hooks/useScrollLock",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@tm-design/hooks/useScrollLock"},c=function(){var d=Object(I.useState)(!1),i=j(d,2),_=i[0],f=i[1],b=y(_);return Object(m.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(m.jsx)("button",{onClick:function(){return f(function(B){return!B})},children:_?"Unlock":"Lock"}),b?"Scroll locked":"Scrollable"]})};c.displayName="Default"},"./packages/tm-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return y});var K=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./packages/tm-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function w(m,j){return T(m)||C(m,j)||Z(m,j)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(m,j){if(!!m){if(typeof m=="string")return R(m,j);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return R(m,j)}}function R(m,j){(j==null||j>m.length)&&(j=m.length);for(var u=0,h=new Array(j);u<j;u++)h[u]=m[u];return h}function C(m,j){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var h=[],l=!0,r=!1,n,t;try{for(u=u.call(m);!(l=(n=u.next()).done)&&(h.push(n.value),!(j&&h.length===j));l=!0);}catch(o){r=!0,t=o}finally{try{!l&&u.return!=null&&u.return()}finally{if(r)throw t}}return h}}function T(m){if(Array.isArray(m))return m}var P=function(j,u){var h=Object(W.a)(j,u),l=w(h,2),r=l[0],n=l[1];return Object(K.useEffect)(function(){return r(),n},[r,n]),n},g=e("./node_modules/react/jsx-runtime.js"),S=`import React from "react";
import { useTimeout } from "../useTimeout";

export default {
  title: "@tm-design/hooks/useTimeout",
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},U=v.default={parameters:{storySource:{source:`import React from "react";
import { useTimeout } from "../useTimeout";

export default {
  title: "@tm-design/hooks/useTimeout",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@tm-design/hooks/useTimeout"},y=function(){var j=P(function(){alert("fire!")},2e3);return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:j,children:"Clear"})})};y.displayName="Default"},"./packages/tm-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),m=e("./node_modules/react/jsx-runtime.js"),j=e.n(m);function u(s,d){return t(s)||n(s,d)||l(s,d)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return r(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(s,d)}}function r(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function n(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function t(s){if(Array.isArray(s))return s}var o=`import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@tm-design/hooks/useTimeoutFn",
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};v.default={parameters:{storySource:{source:`import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@tm-design/hooks/useTimeoutFn",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@tm-design/hooks/useTimeoutFn"};var c=function(){var d=Object(y.a)(function(){alert("fire!")},2e3),i=u(d,2),_=i[0],f=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:_,children:"Run"}),Object(m.jsx)("button",{onClick:f,children:"Clear"})]})};c.displayName="Default"},"./packages/tm-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return q});var K=e("./node_modules/core-js/modules/web.timers.js"),te=e.n(K),F=e("./node_modules/react/index.js"),Q=e.n(F),G=e("./packages/tm-design-hooks/src/useCallbackRef/useCallbackRef.ts"),q=function(X,k){var $=Object(F.useRef)(),H=Object(G.a)(X),I=Object(F.useCallback)(function(){$.current&&clearTimeout($.current),$.current=setTimeout(function(){H()},k)},[k]),W=Object(F.useCallback)(function(){$.current&&clearTimeout($.current)},[]);return Object(F.useEffect)(function(){return W},[W]),[I,W]}},"./packages/tm-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return l});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js");function W(r,n){return C(r)||R(r,n)||L(r,n)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(r,n){if(!!r){if(typeof r=="string")return Z(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(r,n)}}function Z(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function R(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function C(r){if(Array.isArray(r))return r}var T=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(I.useState)(n),o=W(t,2),a=o[0],c=o[1],s=Object(I.useCallback)(function(d){return c(function(i){return typeof d=="boolean"?d:!i})},[]);return[a,s]},P=e("./node_modules/react/jsx-runtime.js");function g(r,n){return m(r)||y(r,n)||x(r,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(r,n){if(!!r){if(typeof r=="string")return U(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(r,n)}}function U(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function y(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,c=!1,s,d;try{for(t=t.call(r);!(a=(s=t.next()).done)&&(o.push(s.value),!(n&&o.length===n));a=!0);}catch(i){c=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw d}}return o}}function m(r){if(Array.isArray(r))return r}var j=`import React from "react";
import { useToggle } from "../useToggle";

export default {
  title: "@tm-design/hooks/useToggle",
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
`,u={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},h=v.default={parameters:{storySource:{source:`import React from "react";
import { useToggle } from "../useToggle";

export default {
  title: "@tm-design/hooks/useToggle",
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
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@tm-design/hooks/useToggle"},l=function(){var n=T(),t=g(n,2),o=t[0],a=t[1];return Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{children:["current state: ",""+o]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(P.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(P.jsx)("button",{onClick:a,children:"toggle"})]})]})};l.displayName="Default"},"./packages/tm-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return n});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/core-js/modules/es.array.slice.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),W=e("./packages/tm-design-hooks/src/useId/useId.ts");function w(t,o){return T(t)||C(t,o)||Z(t,o)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,o){if(!!t){if(typeof t=="string")return R(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(t,o)}}function R(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function C(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function T(t){if(Array.isArray(t))return t}var P=function(o){var a=o.value,c=o.defaultValue,s=o.finalValue,d=o.rule,i=o.onChange,_=o.onValueUpdate,f=d(a),b=Object(I.useRef)("initial"),D=d(c)?c:s,B=Object(I.useState)(D),O=w(B,2),p=O[0],A=O[1],M=f?a:p;!f&&b.current==="controlled"&&(M=s),b.current=f?"controlled":"uncontrolled";var E=b.current,Y=function(oe){typeof i=="function"&&i(oe),E==="uncontrolled"&&A(oe)};return Object(I.useEffect)(function(){E==="uncontrolled"&&A(M),typeof _=="function"&&_(M)},[E,M]),[M,Y,b.current]},g=e("./node_modules/react/jsx-runtime.js");function S(t,o){return j(t)||m(t,o)||U(t,o)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,o){if(!!t){if(typeof t=="string")return y(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(t,o)}}function y(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function m(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],s=!0,d=!1,i,_;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(c.push(i.value),!(o&&c.length===o));s=!0);}catch(f){d=!0,_=f}finally{try{!s&&a.return!=null&&a.return()}finally{if(d)throw _}}return c}}function j(t){if(Array.isArray(t))return t}var u=`import React, { useState } from "react";

import { useId } from "../../useId";
import { useUncontrolled } from "../useUncontrolled";

export default {
  title: "@tm-design/hooks/useUncontrolled",
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
`,h={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},l=v.default={parameters:{storySource:{source:`import React, { useState } from "react";

import { useId } from "../../useId";
import { useUncontrolled } from "../useUncontrolled";

export default {
  title: "@tm-design/hooks/useUncontrolled",
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
`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}}}},title:"@tm-design/hooks/useUncontrolled"},r=function(o){var a=o.label,c=o.value,s=o.defaultValue,d=o.onChange,i=Object(W.a)(),_=P({value:c,defaultValue:s,finalValue:null,onChange:d,rule:function(O){return typeof O=="string"}}),f=S(_,2),b=f[0],D=f[1];return Object(g.jsxs)("div",{style:{padding:"1rem"},children:[Object(g.jsx)("label",{htmlFor:i,children:a}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{id:i,type:"text",value:b,onChange:function(O){return D(O.target.value)}})]})};r.displayName="CustomInput";var n=function(){var o=Object(I.useState)("controlled"),a=S(o,2),c=a[0],s=a[1];return Object(g.jsxs)("div",{style:{padding:20},children:[Object(g.jsx)(r,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(g.jsx)(r,{label:"Controlled",value:c,onChange:s}),Object(g.jsx)(r,{label:"Controlled (fixed value)",value:"fixed",onChange:s})]})};n.displayName="Default"},"./packages/tm-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(ne,v,e){"use strict";e.r(v),e.d(v,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(K),F=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(F),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(G),z=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(z),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e.n(k),H=e("./node_modules/core-js/modules/es.string.iterator.js"),I=e.n(H),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e.n(W),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.slice.js"),C=e.n(R),T=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(T),g=e("./node_modules/core-js/modules/es.array.from.js"),S=e.n(g),x=e("./node_modules/react/index.js"),U=e.n(x),y=e("./packages/tm-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),m=e("./node_modules/react/jsx-runtime.js"),j=e.n(m);function u(s,d){return t(s)||n(s,d)||l(s,d)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,d){if(!!s){if(typeof s=="string")return r(s,d);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(s,d)}}function r(s,d){(d==null||d>s.length)&&(d=s.length);for(var i=0,_=new Array(d);i<d;i++)_[i]=s[i];return _}function n(s,d){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var _=[],f=!0,b=!1,D,B;try{for(i=i.call(s);!(f=(D=i.next()).done)&&(_.push(D.value),!(d&&_.length===d));f=!0);}catch(O){b=!0,B=O}finally{try{!f&&i.return!=null&&i.return()}finally{if(b)throw B}}return _}}function t(s){if(Array.isArray(s))return s}var o=`import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@tm-design/hooks/useUpdateEffect",
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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};v.default={parameters:{storySource:{source:`import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@tm-design/hooks/useUpdateEffect",
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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@tm-design/hooks/useUpdateEffect"};var c=function(){var d=Object(x.useState)(""),i=u(d,2),_=i[0],f=i[1];return Object(x.useEffect)(function(){console.log("useEffect:",_)},[_]),Object(y.a)(function(){console.log("useUpdateEffect:",_)},[_]),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",onChange:function(D){return f(D.target.value)}})})};c.displayName="Default"},"./packages/tm-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return F});var K=e("./node_modules/react/index.js"),te=e.n(K),F=function(G,q){var z=Object(K.useRef)(!0);Object(K.useEffect)(function(){if(!z.current)return G();z.current=!1},q)}},"./packages/tm-design-styles/src/theme/TmProvider.tsx":function(ne,v,e){"use strict";e.d(v,"b",function(){return W}),e.d(v,"c",function(){return w}),e.d(v,"a",function(){return L});var K=e("./node_modules/react/index.js"),te=e("./packages/tm-design-styles/src/theme/defaultTheme.ts"),F=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Q=e("./node_modules/react/jsx-runtime.js"),G=function(T){var P=T.styles,g=W();return Object(Q.jsx)(F.a,{styles:Object(F.b)(P(g))})};G.displayName="Global";var q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},z=function(){return Object(Q.jsx)(F.a,{styles:q})};z.displayName="NormalizeCSS";var X=e("./node_modules/core-js/modules/es.array.reduce.js"),k=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.object.assign.js");function H(C,T){return T?Object.keys(C).reduce(function(P,g){if(g==="headings"&&T.headings){var S=T.headings?Object.keys(C.headings).reduce(function(x,U){return x[U]=Object.assign({},C.headings[U],T.headings[U]),x},{}):C.headings;return Object.assign({},P,{headings:Object.assign({},C.headings,T.headings,S)})}return P[g]=typeof T[g]=="object"?Object.assign({},C[g],T[g]):T[g]||C[g],P},{}):C}var I=Object(K.createContext)({theme:te.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function W(){var C;return((C=Object(K.useContext)(I))===null||C===void 0?void 0:C.theme)||te.a}function w(){var C;return((C=Object(K.useContext)(I))===null||C===void 0?void 0:C.styles)||{}}function L(){var C;return((C=Object(K.useContext)(I))===null||C===void 0?void 0:C.emotionOptions)||{key:"co",prepend:!0}}var Z=function(){return Object(Q.jsx)(G,{styles:function(P){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:P.fontFamily,backgroundColor:P.colorScheme==="dark"?P.colors.black:P.colors.white,color:P.colorScheme==="dark"?P.palettes.gray[0]:P.palettes.gray[9],lineHeight:P.lineHeight,fontSizes:P.fontSizes.medium}}}})};Z.displayName="GlobalStyles";var R=function(T){var P=T.theme,g=T.styles,S=g===void 0?{}:g,x=T.emotionOptions,U=T.withNormalizeCSS,y=U===void 0?!1:U,m=T.withGlobalStyles,j=m===void 0?!1:m,u=T.children;return Object(Q.jsxs)(I.Provider,{value:{theme:H(te.a,P),styles:S,emotionOptions:x},children:[y&&Object(Q.jsx)(z,{}),j&&Object(Q.jsx)(Z,{}),u]})};R.displayName="TmProvider",R.displayName="@tm-design/styles/TmProvider"},"./packages/tm-design-styles/src/theme/defaultTheme.ts":function(ne,v,e){"use strict";e.d(v,"b",function(){return ce}),e.d(v,"a",function(){return je});var K=e("./node_modules/core-js/modules/es.object.keys.js"),te={dark:["#EBEBEC","#C3C4C6","#9A9BA1","#71747C","#54575F","#474A52","#383B43","#2F3137","#23252A","#1A1B1F"],gray:["#FCFCFD","#F6F7F9","#E9EBF0","#D5DADF","#9BA3AE","#7D838F","#5D636D","#343942","#232830","#171B24"],purple:["#F6F2FF","#E8DAFF","#D4BBFF","#BE95FF","#A56EFF","#8A3FFC","#6929C4","#491D8B","#31135E","#200050"],blue:["#EDF5FF","#D0E2FF","#A6C8FF","#78A9FF","#4589FF","#0F62FE","#0043CE","#002D9C","#001D6C","#011754"],red:["#FFF1F1","#FFD7D9","#FFB3B8","#FF8389","#FA4D56","#DA1E28","#A2191F","#750E13","#570408","#420003"],orange:["#FFF9F2","#FADFC3","#F3C087","#F6A851","#ED8C23","#E07602","#A65701","#8B4901","#673401","#4A2700"],green:["#EFFFF4","#C9F4D8","#96E2B0","#68D08C","#3FB768","#24AD53","#1B803E","#0E5B28","#0C3F1D","#003412"]},F={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},Q={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},G={tiny:11,xsmall:12,small:14,medium:16,large:18,xlarge:20},q={small:2,medium:4,large:8,round:9999,circular:"50%"},z={xsmall:4,small:8,medium:16,large:24,xlarge:40},X={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},k={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},$={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},H={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},I=e("./node_modules/core-js/modules/es.object.assign.js"),W=function(J){for(var re="",_e=1;_e<J.length-1;_e+=1)re+=J[_e]+" "+_e/(J.length-1)*100+"%, ";return J[0]+" 0%, "+re+J[J.length-1]+" 100%"},w=function(J){for(var re=arguments.length,_e=new Array(re>1?re-1:0),pe=1;pe<re;pe++)_e[pe-1]=arguments[pe];return"linear-gradient("+J+"deg, "+W(_e)+")"},L=function(){for(var J=arguments.length,re=new Array(J),_e=0;_e<J;_e++)re[_e]=arguments[_e];return"radial-gradient(circle, "+W(re)+")"},Z=function(J){return typeof J.size=="number"?J.size:J.sizes[J.size]||J.size||J.sizes.medium},R=function(J){return function(re){return"@media (min-width: "+(Z({size:re,sizes:J.breakpoints})+1)+"px)"}},C=function(J){return function(re){return"@media (max-width: "+Z({size:re,sizes:J.breakpoints})+"px)"}},T=e("./node_modules/core-js/modules/es.string.replace.js"),P=e("./node_modules/core-js/modules/es.regexp.exec.js"),g=e("./node_modules/core-js/modules/es.number.is-nan.js"),S=e("./node_modules/core-js/modules/es.number.constructor.js"),x=e("./node_modules/core-js/modules/es.parse-int.js"),U=e("./node_modules/core-js/modules/es.array.map.js"),y=e("./node_modules/core-js/modules/es.string.split.js"),m=e("./node_modules/core-js/modules/es.string.starts-with.js"),j=e("./node_modules/core-js/modules/es.array.is-array.js"),u=e("./node_modules/core-js/modules/es.symbol.js"),h=e("./node_modules/core-js/modules/es.symbol.description.js"),l=e("./node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/core-js/modules/es.symbol.iterator.js"),n=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e("./node_modules/core-js/modules/es.array.iterator.js"),o=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),a=e("./node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/core-js/modules/es.function.name.js"),s=e("./node_modules/core-js/modules/es.array.from.js");function d(ae,J){return D(ae)||b(ae,J)||_(ae,J)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(ae,J){if(!!ae){if(typeof ae=="string")return f(ae,J);var re=Object.prototype.toString.call(ae).slice(8,-1);if(re==="Object"&&ae.constructor&&(re=ae.constructor.name),re==="Map"||re==="Set")return Array.from(ae);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return f(ae,J)}}function f(ae,J){(J==null||J>ae.length)&&(J=ae.length);for(var re=0,_e=new Array(J);re<J;re++)_e[re]=ae[re];return _e}function b(ae,J){var re=ae==null?null:typeof Symbol!="undefined"&&ae[Symbol.iterator]||ae["@@iterator"];if(re!=null){var _e=[],pe=!0,be=!1,he,Ce;try{for(re=re.call(ae);!(pe=(he=re.next()).done)&&(_e.push(he.value),!(J&&_e.length===J));pe=!0);}catch(De){be=!0,Ce=De}finally{try{!pe&&re.return!=null&&re.return()}finally{if(be)throw Ce}}return _e}}function D(ae){if(Array.isArray(ae))return ae}var B=function(J){var re=J.replace("#","");return typeof re=="string"&&re.length===6&&!Number.isNaN(Number("0x"+re))},O=function(J){var re=J.replace("#",""),_e=parseInt(re,16),pe=_e>>16&255,be=_e>>8&255,he=_e&255;return{r:pe,g:be,b:he,a:1}},p=function(J){var re=J.replace(/[^0-9,.]/g,"").split(",").map(Number),_e=d(re,4),pe=_e[0],be=_e[1],he=_e[2],Ce=_e[3];return{r:pe,g:be,b:he,a:Ce||1}},A=function(J){return B(J)?O(J):J.startsWith("rgb")?p(J):{r:0,g:0,b:0,a:1}},M=function(J,re){if(typeof J!="string"||re>1||re<0)return"rgba(0, 0, 0, 1)";var _e=A(J),pe=_e.r,be=_e.g,he=_e.b;return"rgba("+pe+", "+be+", "+he+", "+re+")"},E=function(J,re){var _e=A(J),pe=_e.r,be=_e.g,he=_e.b,Ce=_e.a,De=1-re,Ie=function(Te){return Math.round(Te*De)};return"rgba("+Ie(pe)+", "+Ie(be)+", "+Ie(he)+", "+Ce+")"},Y=function(J,re){var _e=A(J),pe=_e.r,be=_e.g,he=_e.b,Ce=_e.a,De=function(Se){return Math.round(Se+(255-Se)*re)};return"rgba("+De(pe)+", "+De(be)+", "+De(he)+", "+Ce+")"},N=function(J){return J*8},oe={linearGradient:w,radialGradient:L,smallerThan:C,largerThan:R,rgba:M,size:Z,darken:E,lighten:Y,spacing:N},de=function(J){return Object.assign({},J,{fn:{largerThan:oe.largerThan(J),smallerThan:oe.smallerThan(J),radialGradient:oe.radialGradient,linearGradient:oe.linearGradient,rgba:oe.rgba,size:oe.size,lighten:oe.lighten,darken:oe.darken,spacing:oe.spacing}})},ge=Object.keys(te),le=Object.keys(F),se=["xsmall","small","medium","large","xlarge"],ce=function(J){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:J.fontFamily||"sans-serif"}},me={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"purple",colors:F,palettes:te,shadows:Q,fontSizes:G,radius:q,spacing:z,breakpoints:X,headings:k,opacity:$,zIndex:H,extra:{}},je=de(me)},"./packages/tm-design-styles/src/theme/types/index.ts":function(ne,v){},"./packages/tm-design-styles/src/tss/createStyles.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return j});var K=e("./node_modules/core-js/modules/es.function.name.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./packages/tm-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),I=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.array.from.js");function R(u,h){return S(u)||g(u,h)||T(u,h)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(u,h){if(!!u){if(typeof u=="string")return P(u,h);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return P(u,h)}}function P(u,h){(h==null||h>u.length)&&(h=u.length);for(var l=0,r=new Array(h);l<h;l++)r[l]=u[l];return r}function g(u,h){var l=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var r=[],n=!0,t=!1,o,a;try{for(l=l.call(u);!(n=(o=l.next()).done)&&(r.push(o.value),!(h&&r.length===h));n=!0);}catch(c){t=!0,a=c}finally{try{!n&&l.return!=null&&l.return()}finally{if(t)throw a}}return r}}function S(u){if(Array.isArray(u))return u}function x(u){var h={};return Object.keys(u).forEach(function(l){var r=R(u[l],2),n=r[0],t=r[1];h[n]=t}),h}var U=e("./node_modules/core-js/modules/es.array.reduce.js");function y(u,h,l){return Object.keys(h).reduce(function(r,n){return r[n]=u(h[n],l?"tm-"+l+"-"+n:null),r},{})}var m=e("./packages/tm-design-styles/src/tss/useCss.ts");function j(u){var h=typeof u=="function"?u:function(){return u};function l(r,n){var t=Object(Q.b)(),o=Object(Q.c)()[n==null?void 0:n.name],a=Object(m.a)(),c=a.css,s=a.cx,d=0;function i(O){return d+=1,"tm-ref_"+(O||"")+"_"+d}var _=h(t,r,i),f=typeof(n==null?void 0:n.overrideStyles)=="function"?n==null?void 0:n.overrideStyles(t):(n==null?void 0:n.overrideStyles)||{},b=typeof o=="function"?o(t):o||{},D=typeof(n==null?void 0:n.co)=="function"?n.co(t):n==null?void 0:n.co,B=x(Object.keys(_).map(function(O){var p=s(c(_[O]),c(b[O]),c(f[O]),c(D));return[O,p]}));return{classes:y(s,B,n==null?void 0:n.name),cx:s,theme:t}}return l}},"./packages/tm-design-styles/src/tss/useCss.ts":function(ne,v,e){"use strict";e.d(v,"a",function(){return B});var K=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./node_modules/core-js/modules/es.function.name.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),k=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/clsx/dist/clsx.m.js"),w=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),L=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),Z=e("./node_modules/core-js/modules/es.array.index-of.js"),R=e("./node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/react/index.js");function T(O){return x(O)||S(O)||g(O)||P()}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(O,p){if(!!O){if(typeof O=="string")return U(O,p);var A=Object.prototype.toString.call(O).slice(8,-1);if(A==="Object"&&O.constructor&&(A=O.constructor.name),A==="Map"||A==="Set")return Array.from(O);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return U(O,p)}}function S(O){if(typeof Symbol!="undefined"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}function x(O){if(Array.isArray(O))return U(O)}function U(O,p){(p==null||p>O.length)&&(p=O.length);for(var A=0,M=new Array(p);A<p;A++)M[A]=O[A];return M}function y(O,p){var A=Object(C.useRef)();return(!A.current||p.length!==A.current.prevDeps.length||A.current.prevDeps.map(function(M,E){return M===p[E]}).indexOf(!1)>=0)&&(A.current={v:O(),prevDeps:T(p)}),A.current.v}var m=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),j=e("./packages/tm-design-styles/src/theme/TmProvider.tsx"),u=e("./node_modules/react/jsx-runtime.js"),h=function(){var O;function p(A){return O===void 0&&(O=Object(m.a)(A||{key:"co",prepend:!0})),O}return{getCache:p}}(),l=h.getCache,r=Object(C.createContext)(void 0);function n(){var O=Object(j.a)();return Object(C.useContext)(r)||l(O)}function t(O){var p=O.children,A=O.value;return Object(u.jsx)(r.Provider,{value:A,children:p})}t.displayName="CacheProvider";function o(O,p){return i(O)||d(O,p)||c(O,p)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(O,p){if(!!O){if(typeof O=="string")return s(O,p);var A=Object.prototype.toString.call(O).slice(8,-1);if(A==="Object"&&O.constructor&&(A=O.constructor.name),A==="Map"||A==="Set")return Array.from(O);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return s(O,p)}}function s(O,p){(p==null||p>O.length)&&(p=O.length);for(var A=0,M=new Array(p);A<p;A++)M[A]=O[A];return M}function d(O,p){var A=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(A!=null){var M=[],E=!0,Y=!1,N,oe;try{for(A=A.call(O);!(E=(N=A.next()).done)&&(M.push(N.value),!(p&&M.length===p));E=!0);}catch(de){Y=!0,oe=de}finally{try{!E&&A.return!=null&&A.return()}finally{if(Y)throw oe}}return M}}function i(O){if(Array.isArray(O))return O}var _="ref";function f(O){var p;if(O.length!==1)return{args:O,ref:p};var A=o(O,1),M=A[0];if(!(M instanceof Object))return{args:O,ref:p};if(!(_ in M))return{args:O,ref:p};p=M[_];var E=Object.assign({},M);return delete E[_],{args:[E],ref:p}}var b=function(){function O(A,M,E){var Y=[],N=Object(L.a)(A,Y,E);return Y.length<2?E:N+M(Y)}function p(A){var M=A.cache,E=function(){for(var oe=arguments.length,de=new Array(oe),ge=0;ge<oe;ge++)de[ge]=arguments[ge];var le=f(de),se=le.ref,ce=le.args,me=Object(w.a)(ce,M.registered);return Object(L.b)(M,me,!1),M.key+"-"+me.name+(se===void 0?"":" "+se)},Y=function(){for(var oe=arguments.length,de=new Array(oe),ge=0;ge<oe;ge++)de[ge]=arguments[ge];return O(M.registered,E,Object(W.a)(de))};return{css:E,cx:Y}}return{cssFactory:p}}(),D=b.cssFactory;function B(){var O=n();return y(function(){return D({cache:O})},[O])}},"./storybook-init-framework-entry.js":function(ne,v,e){"use strict";e.r(v);var K=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(ne,v,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),ne.exports=e("./generated-stories-entry.js")},1:function(ne,v){}},[[0,4,5]]]);
