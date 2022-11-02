(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,S,e){"use strict";e.r(S);var $={};e.r($),e.d($,"parameters",function(){return u}),e.d($,"decorators",function(){return d});var K=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),J=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),w=e("./node_modules/core-js/modules/es.object.define-properties.js"),M=e("./node_modules/core-js/modules/es.object.define-property.js"),z=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e("./node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e("./node_modules/react/index.js"),y=e("./node_modules/react/jsx-runtime.js");function l(o,v){return O(o)||a(o,v)||h(o,v)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(o,v){if(!!o){if(typeof o=="string")return f(o,v);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return f(o,v)}}function f(o,v){(v==null||v>o.length)&&(v=o.length);for(var T=0,C=new Array(v);T<v;T++)C[T]=o[T];return C}function a(o,v){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,N,V;try{for(T=T.call(o);!(R=(N=T.next()).done)&&(C.push(N.value),!(v&&C.length===v));R=!0);}catch(P){k=!0,V=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw V}}return C}}function O(o){if(Array.isArray(o))return o}var I=Object(p.createContext)(null),g=function(){var v=Object(p.useContext)(I);if(!v)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return v},s=function(v){var T=v.colorScheme,C=v.toggleColorScheme,R=v.children,k=Object(p.useState)("init"),N=l(k,2),V=N[0],P=N[1];return Object(p.useEffect)(function(){P("update")},[]),Object(y.jsx)(I.Provider,{value:{colorScheme:T,toggleColorScheme:C},children:R},V)};s.displayName="ColorSchemeProvider",s.displayName="@travelmakers-design/styles/ColorSchemeProvider";var n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),u={layout:"fullscreen",docs:{theme:t.themes.light},darkMode:{current:"light"}};function x(o){var v=Object(r.useDarkMode)()?"dark":"light";return Object(y.jsx)(s,{colorScheme:v,toggleColorScheme:function(){},children:Object(y.jsx)(n.a,{theme:{colorScheme:v},withGlobalStyles:!0,withNormalizeCSS:!0,children:o.children})})}x.displayName="ThemeWrapper";var d=[function(o){return Object(y.jsx)(x,{children:o()})}];function c(o,v){var T=Object.keys(o);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(o);v&&(C=C.filter(function(R){return Object.getOwnPropertyDescriptor(o,R).enumerable})),T.push.apply(T,C)}return T}function m(o){for(var v=1;v<arguments.length;v++){var T=arguments[v]!=null?arguments[v]:{};v%2?c(Object(T),!0).forEach(function(C){i(o,C,T[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(T)):c(Object(T)).forEach(function(C){Object.defineProperty(o,C,Object.getOwnPropertyDescriptor(T,C))})}return o}function i(o,v,T){return v in o?Object.defineProperty(o,v,{value:T,enumerable:!0,configurable:!0,writable:!0}):o[v]=T,o}Object.keys($).forEach(function(o){var v=$[o];switch(o){case"args":return Object(z.d)(v);case"argTypes":return Object(z.b)(v);case"decorators":return v.forEach(function(C){return Object(z.f)(C,!1)});case"loaders":return v.forEach(function(C){return Object(z.g)(C,!1)});case"parameters":return Object(z.h)(m({},v),!1);case"argTypesEnhancers":return v.forEach(function(C){return Object(z.c)(C)});case"argsEnhancers":return v.forEach(function(C){return Object(z.e)(C)});case"render":return Object(z.i)(v);case"globals":case"globalTypes":{var T={};return T[o]=v,Object(z.h)(T,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,S,e){"use strict";(function($){var K=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,K.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],$,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,S,e){var $={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx","./travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx","./travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function K(te){var G=W(te);return e(G)}function W(te){if(!e.o($,te)){var G=new Error("Cannot find module '"+te+"'");throw G.code="MODULE_NOT_FOUND",G}return $[te]}K.keys=function(){return Object.keys($)},K.resolve=W,oe.exports=K,K.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js"),q=function(t){return Object(A.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[Object(A.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(A.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]}))};q.displayName="AccordionCheck",q.displayName="@travelmakers-design/core/AccordionCheck";var X=function(t){return Object(A.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},t,{children:Object(A.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};X.displayName="AccordionIcon",X.displayName="@travelmakers-design/core/AccordionIcon";var U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),D=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),j=Object(U.a)(function(n,t){var r,u,x,d,c,m,i,o=t.open;return{container:Object.assign({},Object(D.b)(n),(r={display:"flex",flexDirection:"column",width:"100%",backgroundColor:n.colors.white,marginBottom:"4px"},r["&:last-child"]={marginBottom:0},r)),row:(u={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},u[""+n.media.desktop]={padding:"12px 16px 12px 16px"},u),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:n.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(x={display:"block",width:"100%",fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",fontWeight:"bold",color:n.colors.navy1},x[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px",fontWeight:"400"},x),icon:(d={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},d[""+n.media.mobile]={width:"24px",height:"24px"},d),content:(c={padding:"0 24px 14px 24px"},c[""+n.media.desktop]={padding:"0 16px 12px 16px"},c),divider:(m={width:"100%",height:"1px",backgroundColor:n.colors.navy1,marginBottom:"14px"},m[""+n.media.desktop]={marginBottom:"11px"},m),answerText:{display:"flex",lineHeight:"1.5"},answer:(i={fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",color:n.colors.navy1,width:"100%"},i[""+n.media.desktop]={marginTop:"3px"},i[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px"},i)}});function b(n,t){return h(n)||_(n,t)||y(n,t)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,t){if(!!n){if(typeof n=="string")return l(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(n,t)}}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function _(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function h(n){if(Array.isArray(n))return n}var f=Object(Z.forwardRef)(function(n,t){var r=n.component,u=n.type,x=u===void 0?"Default":u,d=n.data,c=n.className,m=n.containerStyle,i=n.iconStyle,o=n.overrideStyles,v=n.__staticSelector,T=v===void 0?"div":v,C=Object(Z.useState)(Array.from({length:d.length},function(ae,ue){return!1})),R=b(C,2),k=R[0],N=R[1],V=r||"div",P=j({open:k},{overrideStyles:o,name:"div"}),F=P.classes,H=P.cx;return Object(A.jsx)("div",{className:H(m),children:d==null?void 0:d.map(function(ae,ue){return Object(A.jsxs)(V,{ref:t,className:H(F.container,c),children:[Object(A.jsxs)("div",{className:H(F.row),onClick:function(){return N(function(me){return me==null?void 0:me.map(function(L,ee){return ue===ee?!L:L})})},children:[Object(A.jsxs)("div",{className:H(F.titleWrap),children:[x==="Number"&&Object(A.jsxs)("span",{className:H(F.titleIndex),children:[ue+1,"."]}),x==="Checkbox"&&Object(A.jsx)("div",{style:{marginRight:8},children:Object(A.jsx)(q,{})}),Object(A.jsx)("span",{className:H(F.title),children:ae.question})]}),Object(A.jsx)(X,{className:H(F.icon),style:Object.assign({transform:"rotate("+(k[ue]?180:0)+"deg)"},i)})]}),k[ue]&&Object(A.jsxs)("div",{className:H(F.content),children:[Object(A.jsx)("div",{className:H(F.divider)}),Object(A.jsx)("div",{className:H(F.answerText),children:Object(A.jsx)("span",{className:H(F.answer),dangerouslySetInnerHTML:{__html:ae==null?void 0:ae.answer}})})]})]},"accordion-"+ue)})})});f.displayName="@travelmakers-design/core/Accordion";var a=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Accordion } from \\"../Accordion\\";\\nimport React from \\"react\\";\\n\\nconst accordionData = [\\n  {\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n    answer: \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\",\\n  },\\n  {\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n    answer: \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\",\\n  },\\n];\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"Default\\",\\n      description: \\"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Default\\", \\"Number\\", \\"Checkbox\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    data: {\\n      defaultValue: accordionData,\\n      description: \\"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: typeof accordionData,\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    containerStyle: {\\n      description: \\"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: {},\\n      type: { name: \\"style\\", required: false },\\n      table: {\\n        type: {\\n          summary: \\"StyleProp\\",\\n          detail: null,\\n        },\\n        defaultValue: { summary: \\"\\" },\\n      },\\n      control: {\\n        type: \\"object\\",\\n      },\\n    },\\n    iconStyle: {\\n      description: \\"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: {},\\n      type: { name: \\"style\\", required: false },\\n      table: {\\n        type: {\\n          summary: \\"StyleProp\\",\\n          detail: null,\\n        },\\n        defaultValue: { summary: \\"\\" },\\n      },\\n      control: {\\n        type: \\"object\\",\\n      },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":73},"endLoc":{"col":1,"line":79},"startBody":{"col":23,"line":73},"endBody":{"col":1,"line":79}}};
    
import { Accordion } from "../Accordion";
import React from "react";

const accordionData = [
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
];

export default {
  title: "@travelmakers-design/core/Component/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      defaultValue: "Default",
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",
      options: ["Default", "Number", "Checkbox"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    data: {
      defaultValue: accordionData,
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: typeof accordionData,
        },
      },
      control: { type: "array" },
    },
    containerStyle: {
      description: "Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
    iconStyle: {
      description: "Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},a=`import { Accordion } from "../Accordion";
import React from "react";

const accordionData = [
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
];

export default {
  title: "@travelmakers-design/core/Component/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      defaultValue: "Default",
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",
      options: ["Default", "Number", "Checkbox"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    data: {
      defaultValue: accordionData,
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: typeof accordionData,
        },
      },
      control: { type: "array" },
    },
    containerStyle: {
      description: "Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
    iconStyle: {
      description: "Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
};
`,O={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},I=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],g=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Accordion } from \\"../Accordion\\";\\nimport React from \\"react\\";\\n\\nconst accordionData = [\\n  {\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n    answer: \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\",\\n  },\\n  {\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n    answer: \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\",\\n  },\\n];\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"Default\\",\\n      description: \\"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Default\\", \\"Number\\", \\"Checkbox\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    data: {\\n      defaultValue: accordionData,\\n      description: \\"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: typeof accordionData,\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    containerStyle: {\\n      description: \\"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: {},\\n      type: { name: \\"style\\", required: false },\\n      table: {\\n        type: {\\n          summary: \\"StyleProp\\",\\n          detail: null,\\n        },\\n        defaultValue: { summary: \\"\\" },\\n      },\\n      control: {\\n        type: \\"object\\",\\n      },\\n    },\\n    iconStyle: {\\n      description: \\"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: {},\\n      type: { name: \\"style\\", required: false },\\n      table: {\\n        type: {\\n          summary: \\"StyleProp\\",\\n          detail: null,\\n        },\\n        defaultValue: { summary: \\"\\" },\\n      },\\n      control: {\\n        type: \\"object\\",\\n      },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":73},"endLoc":{"col":1,"line":79},"startBody":{"col":23,"line":73},"endBody":{"col":1,"line":79}}};
    
import { Accordion } from "../Accordion";
import React from "react";

const accordionData = [
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
  {
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
    answer: "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.",
  },
];

export default {
  title: "@travelmakers-design/core/Component/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      defaultValue: "Default",
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",
      options: ["Default", "Number", "Checkbox"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    data: {
      defaultValue: accordionData,
      description: "Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: typeof accordionData,
        },
      },
      control: { type: "array" },
    },
    containerStyle: {
      description: "Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
    iconStyle: {
      description: "Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:f,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:I,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof I}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},s=function(t){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(f,Object.assign({},t))})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return j}),e.d(S,"TextType",function(){return b}),e.d(S,"NumberType",function(){return p});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/react/index.js"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),w=function(l,_){return{small:{fontFamily:"Pretendard",fontWeight:_==="text"?"bold":"normal",lineHeight:l.lineHeights.caption+"px",fontSize:l.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:_==="text"?"bold":"normal",lineHeight:l.lineHeights.b3+"px",fontSize:l.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:_==="text"?"bold":"normal",lineHeight:l.lineHeights.b2+"px",fontSize:l.fontSizes.b2}}},M=function(l,_){return{small:{padding:_==="text"?"0px 4px":"0px 8px"},medium:{padding:_==="text"?"0px 5px":"0px 8px"},large:{padding:_==="text"?"1px 7px":"0px 8px"}}},z=Object(B.a)(function(y,l){var _=l.size,h=l.type;return{container:Object.assign({},Object(J.b)(y),w(y,h)[_],M(y,h)[_],{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:y.colors.white,borderRadius:h==="text"?"6px":y.radius.round,backgroundColor:y.colors.red2})}}),Y=e("./node_modules/react/jsx-runtime.js"),E=["component","size","type","children","className","overrideStyles","__staticSelector"];function Z(y,l){if(y==null)return{};var _=A(y,l),h,f;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(y);for(f=0;f<a.length;f++)h=a[f],!(l.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,h)||(_[h]=y[h]))}return _}function A(y,l){if(y==null)return{};var _={},h=Object.keys(y),f,a;for(a=0;a<h.length;a++)f=h[a],!(l.indexOf(f)>=0)&&(_[f]=y[f]);return _}var q=Object(Q.forwardRef)(function(y,l){var _=y.component,h=y.size,f=h===void 0?"small":h,a=y.type,O=a===void 0?"text":a,I=y.children,g=y.className,s=y.overrideStyles,n=y.__staticSelector,t=n===void 0?"span":n,r=Z(y,E),u=_||"span",x=z({size:f,type:O},{overrideStyles:s,name:"span"}),d=x.classes,c=x.cx;return Object(Y.jsx)(u,Object.assign({ref:l,className:c(d.container,g)},r,{children:I}))});q.displayName="@travelmakers-design/core/Badge";var X=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Badge } from \\"../Badge\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Badge\\",\\n  component: Badge,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"text\\",\\n      description: \\"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"text\\", \\"number\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props}>N</Badge>\\n    </div>\\n  );\\n};\\n\\nexport const TextType = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props} type=\\"text\\" size=\\"small\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"text\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        N\\n      </Badge>\\n      <Badge {...props} type=\\"text\\" size=\\"large\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n    </div>\\n  );\\n};\\n\\nexport const NumberType = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":61},"endLoc":{"col":1,"line":67},"startBody":{"col":23,"line":61},"endBody":{"col":1,"line":67}},"TextType":{"startLoc":{"col":24,"line":69},"endLoc":{"col":1,"line":88},"startBody":{"col":24,"line":69},"endBody":{"col":1,"line":88}},"NumberType":{"startLoc":{"col":26,"line":90},"endLoc":{"col":1,"line":119},"startBody":{"col":26,"line":90},"endBody":{"col":1,"line":119}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Badge } from "../Badge";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Badge",
  component: Badge,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "number"],
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
};;

export const TextType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props} type="text" size="small" style={{ marginRight: "4px" }}>
        N
      </Badge>
      <Badge
        {...props}
        type="text"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        N
      </Badge>
      <Badge {...props} type="text" size="large" style={{ marginRight: "4px" }}>
        N
      </Badge>
    </div>
  );
};;

export const NumberType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge
        {...props}
        type="number"
        size="small"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="large"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props}>N</Badge>\\n    </div>\\n  );\\n}" }, ...Default.parameters };
TextType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props} type=\\"text\\" size=\\"small\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"text\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        N\\n      </Badge>\\n      <Badge {...props} type=\\"text\\" size=\\"large\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...TextType.parameters };
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,U={Default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},TextType:{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},NumberType:{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}},X=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Badge } from "../Badge";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Badge",
  component: Badge,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "number"],
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
};

export const TextType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props} type="text" size="small" style={{ marginRight: "4px" }}>
        N
      </Badge>
      <Badge
        {...props}
        type="text"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        N
      </Badge>
      <Badge {...props} type="text" size="large" style={{ marginRight: "4px" }}>
        N
      </Badge>
    </div>
  );
};

export const NumberType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge
        {...props}
        type="number"
        size="small"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="large"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
    </div>
  );
};
`,U={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}},TextType:{startLoc:{col:24,line:69},endLoc:{col:1,line:88},startBody:{col:24,line:69},endBody:{col:1,line:88}},NumberType:{startLoc:{col:26,line:90},endLoc:{col:1,line:119},startBody:{col:26,line:90},endBody:{col:1,line:119}}},D=S.default={title:"@travelmakers-design/core/Component/Badge",component:q,argTypes:{size:{defaultValue:"small",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",options:["text","number"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Badge } from \\"../Badge\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Badge\\",\\n  component: Badge,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"text\\",\\n      description: \\"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"text\\", \\"number\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props}>N</Badge>\\n    </div>\\n  );\\n};\\n\\nexport const TextType = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props} type=\\"text\\" size=\\"small\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"text\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        N\\n      </Badge>\\n      <Badge {...props} type=\\"text\\" size=\\"large\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n    </div>\\n  );\\n};\\n\\nexport const NumberType = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":61},"endLoc":{"col":1,"line":67},"startBody":{"col":23,"line":61},"endBody":{"col":1,"line":67}},"TextType":{"startLoc":{"col":24,"line":69},"endLoc":{"col":1,"line":88},"startBody":{"col":24,"line":69},"endBody":{"col":1,"line":88}},"NumberType":{"startLoc":{"col":26,"line":90},"endLoc":{"col":1,"line":119},"startBody":{"col":26,"line":90},"endBody":{"col":1,"line":119}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Badge } from "../Badge";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Badge",
  component: Badge,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "number"],
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
};;

export const TextType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props} type="text" size="small" style={{ marginRight: "4px" }}>
        N
      </Badge>
      <Badge
        {...props}
        type="text"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        N
      </Badge>
      <Badge {...props} type="text" size="large" style={{ marginRight: "4px" }}>
        N
      </Badge>
    </div>
  );
};;

export const NumberType = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge
        {...props}
        type="number"
        size="small"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="large"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props}>N</Badge>\\n    </div>\\n  );\\n}" }, ...Default.parameters };
TextType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge {...props} type=\\"text\\" size=\\"small\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"text\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        N\\n      </Badge>\\n      <Badge {...props} type=\\"text\\" size=\\"large\\" style={{ marginRight: \\"4px\\" }}>\\n        N\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...TextType.parameters };
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,locationsMap:{default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},"text-type":{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},"number-type":{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}}},docs:{page:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(K.g,{}),Object(Y.jsx)(K.f,{}),Object(Y.jsx)(K.b,{}),Object(Y.jsx)(K.d,{}),Object(Y.jsx)(K.a,{story:K.c}),Object(Y.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},j=function(l){return Object(Y.jsx)("div",{style:{padding:24,display:"flex"},children:Object(Y.jsx)(q,Object.assign({},l,{children:"N"}))})};j.displayName="Default";var b=function(l){return Object(Y.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(Y.jsx)(q,Object.assign({},l,{type:"text",size:"small",style:{marginRight:"4px"},children:"N"})),Object(Y.jsx)(q,Object.assign({},l,{type:"text",size:"medium",style:{marginRight:"4px"},children:"N"})),Object(Y.jsx)(q,Object.assign({},l,{type:"text",size:"large",style:{marginRight:"4px"},children:"N"}))]})};b.displayName="TextType";var p=function(l){return Object(Y.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(Y.jsx)(q,Object.assign({},l,{type:"number",size:"small",style:{marginRight:"4px"},children:"1"})),Object(Y.jsx)(q,Object.assign({},l,{type:"number",size:"medium",style:{marginRight:"4px"},children:"1"})),Object(Y.jsx)(q,Object.assign({},l,{type:"number",size:"large",style:{marginRight:"4px"},children:"1"}))]})};p.displayName="NumberType",j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
}`}},j.parameters),b.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props} type="text" size="small" style={{ marginRight: "4px" }}>
        N
      </Badge>
      <Badge
        {...props}
        type="text"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        N
      </Badge>
      <Badge {...props} type="text" size="large" style={{ marginRight: "4px" }}>
        N
      </Badge>
    </div>
  );
}`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge
        {...props}
        type="number"
        size="small"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="medium"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
      <Badge
        {...props}
        type="number"
        size="large"
        style={{ marginRight: "4px" }}
      >
        1
      </Badge>
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json":function(oe){oe.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json":function(oe){oe.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"},{"key":"MARKETING","label":"\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758(\uC120\uD0DD)","content":"1. \uAD11\uACE0\uC131 \uC815\uBCF4\uC758 \uC774\uC6A9 \uBAA9\uC801\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC \uAE30\uD68C \uC81C\uACF5, \uC2E0\uADDC \uC18C\uC2DD \uC548\uB0B4 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778 \uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uC11C\uBE44\uC2A4 \uD654\uBA74, \uC804\uD654, e-mail, \uD734\uB300\uD3F0 \uBB38\uC790(SMS, LMS, MMS), \uC6B0\uD3B8\uBB3C, \uC571 \uD478\uC2DC, \uCE74\uCE74\uC624 \uCC44\uB110 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC5D0\uAC8C \uC81C\uACF5\uB420 \uC218 \uC788\uC73C\uBA70, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC9C4\uD589 \uC0AC\uD56D, \uC608\uC57D \uD655\uC778 \uB4F1 \uC758\uBB34\uC801\uC73C\uB85C \uC548\uB0B4\uB418\uC5B4\uC57C \uD558\uB294 \uC815\uBCF4\uC131 \uB0B4\uC6A9\uC740 \uC218\uC2E0 \uB3D9\uC758 \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C \uC81C\uACF5\uB429\uB2C8\uB2E4.\\n\\n2. \uBBF8\uB3D9\uC758 \uC2DC \uBD88\uC774\uC775 \uC0AC\uD56D\\n\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uACBD\uC6B0 \uC2E0\uADDC \uD638\uD154 \uC624\uD508 \uC18C\uC2DD, \uD504\uB85C\uBAA8\uC158 \uD2B9\uAC00 \uC18C\uC2DD, \uACE0\uAC1D \uB300\uC0C1 \uC774\uBCA4\uD2B8 \uC18C\uC2DD \uB4F1 \uD61C\uD0DD \uC0AC\uD56D \uC801\uC6A9\uC774 \uBD88\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C22\uC870 \uC81C5\uD56D\uC5D0 \uC758\uD574 \uC120\uD0DD \uC815\uBCF4 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uB3D9\uC758 \uAC70\uBD80\uD558\uC2DC\uB354\uB77C\uB3C4 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uACF5\uACE0\uC77C\uC790 : 2020.11.15\\n\uC2DC\uD589\uC77C\uC790 : 2020.11.16"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return me});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Z=e("./node_modules/core-js/modules/es.object.keys.js"),A=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.object.values.js"),U=e("./node_modules/core-js/modules/es.array.reduce.js"),D=e("./node_modules/core-js/modules/es.array.includes.js"),j=e("./node_modules/core-js/modules/es.string.includes.js"),b=e("./node_modules/core-js/modules/es.array.map.js"),p=e("./node_modules/react/index.js"),y=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),l=e("./node_modules/react/jsx-runtime.js"),_=function(ee){return Object(l.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(l.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(l.jsx)("circle",{fill:"#30373F",cx:"12",cy:"12",r:"12"}),Object(l.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m7.405 10.84 3.296 4.185 6.304-6.4"})]})}))};_.displayName="IcChecked",_.displayName="@travelmakers-design/core/IcChecked";var h=function(ee){return Object(l.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},ee,{children:Object(l.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(l.jsx)("g",{children:Object(l.jsx)("g",{children:Object(l.jsxs)("g",{transform:"translate(-73 -67) translate(7 67) translate(66)",children:[Object(l.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#C1A485"}),Object(l.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M9.256 13.55L13.376 18.781 21.256 10.781"})]})})})})}))};h.displayName="IcCheckSelectedBeige",h.displayName="@travelmakers-design/core/IcCheckSelectedBeige";var f=function(ee){return Object(l.jsx)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(l.jsx)("path",{d:"M2.423 5.587 9 12.573l6.577-6.986",stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})}))};f.displayName="IcDropDown",f.displayName="@travelmakers-design/core/IcDropDown";var a=function(ee){return Object(l.jsx)("svg",Object.assign({width:"9",height:"15",viewBox:"0 0 9 15",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(l.jsx)("path",{d:"m.5 14.31 7-7-7-7",stroke:"#FFF","stroke-width":"2",fill:"none","fill-rule":"evenodd"})}))};a.displayName="IcDropDownWhite",a.displayName="@travelmakers-design/core/IcDropDownWhite";var O=function(ee){return Object(l.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(l.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(l.jsx)("circle",{fill:"#D7D7D7",cx:"10",cy:"10",r:"10"}),Object(l.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m6.17 9.033 2.748 3.488 5.253-5.333"})]})}))};O.displayName="IcUnCheck",O.displayName="@travelmakers-design/core/IcUnCheck";var I=e("./node_modules/core-js/modules/es.string.small.js"),g=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),n=function(ee,re){if(re>1){var pe,be;return be={},be["&:first-of-type"]=(pe={padding:"10px 16px",backgroundColor:ee.colors.gray6},pe["& > img"]={width:"16px",height:"16px",marginRight:"8px"},pe["& > span"]={fontWeight:"700"},pe),be}else return{}},t=Object(g.a)(function(L,ee){var re,pe,be,he,je,le=ee.length,se=ee.popup;return{container:Object.assign({},Object(s.b)(L),{display:"block",width:"100%",border:"solid 1px #d7d7d7",borderRadius:L.radius.small}),option:Object.assign((re={display:"flex",alignItems:"center",width:"100%",padding:"12px 16px",borderBottom:"solid 1px #d7d7d7",backgroundColor:"white",cursor:"pointer"},re["&:last-child"]={borderBottom:0},re[".transparent-agreement"]={backgroundColor:"transparent"},re),n(L,le)),optionIcon:{width:"16px",height:"16px",marginRight:"12px",cursor:"pointer"},moreIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",cursor:"pointer"},labelContainer:{display:"flex",width:"100%",justifyContent:"space-between",cursor:"pointer"},label:(pe={fontSize:"12px",color:L.colors.navy1,lineHeight:"20px",wordBreak:"keep-all"},pe[".transparent-agreement &"]={color:L.colors.white},pe),moteIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",marginLeft:"auto",cursor:"pointer"},modalContentText:(je={display:"block",width:"100%",maxHeight:"100%",lineHeight:"1.5",whiteSpace:"pre-wrap",color:"${colors.navy}",overflowY:"auto",paddingBottom:"16px"},je[""+L.media.desktop]={fontSize:"12px",padding:"12px 20px"},je["&.Agreement"]=(he={height:"calc(100% - 44px)"},he["@media screen and (min-width: 768px)"]=(be={height:"calc(100% - 104px)"},be["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},be),he),je)}}),r=["component","transparent","options","value","defaultSelect","setValue","containerStyle","popup","children","className","overrideStyles","__staticSelector"];function u(L,ee){return i(L)||m(L,ee)||d(L,ee)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(L,ee){if(!!L){if(typeof L=="string")return c(L,ee);var re=Object.prototype.toString.call(L).slice(8,-1);if(re==="Object"&&L.constructor&&(re=L.constructor.name),re==="Map"||re==="Set")return Array.from(L);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return c(L,ee)}}function c(L,ee){(ee==null||ee>L.length)&&(ee=L.length);for(var re=0,pe=new Array(ee);re<ee;re++)pe[re]=L[re];return pe}function m(L,ee){var re=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(re!=null){var pe=[],be=!0,he=!1,je,le;try{for(re=re.call(L);!(be=(je=re.next()).done)&&(pe.push(je.value),!(ee&&pe.length===ee));be=!0);}catch(se){he=!0,le=se}finally{try{!be&&re.return!=null&&re.return()}finally{if(he)throw le}}return pe}}function i(L){if(Array.isArray(L))return L}function o(L,ee){if(L==null)return{};var re=v(L,ee),pe,be;if(Object.getOwnPropertySymbols){var he=Object.getOwnPropertySymbols(L);for(be=0;be<he.length;be++)pe=he[be],!(ee.indexOf(pe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,pe)||(re[pe]=L[pe]))}return re}function v(L,ee){if(L==null)return{};var re={},pe=Object.keys(L),be,he;for(he=0;he<pe.length;he++)be=pe[he],!(ee.indexOf(be)>=0)&&(re[be]=L[be]);return re}var T=Object(p.forwardRef)(function(L,ee){var re=L.component,pe=L.transparent,be=pe===void 0?!1:pe,he=L.options,je=he===void 0?[]:he,le=L.value,se=L.defaultSelect,ye=se===void 0?null:se,ie=L.setValue,Oe=L.containerStyle,ke=Oe===void 0?{}:Oe,Ie=L.popup,Re=Ie===void 0?!1:Ie,Pe=L.children,Be=L.className,Le=L.overrideStyles,Ve=L.__staticSelector,de=Ve===void 0?"div":Ve,ne=o(L,r),fe=re||"div",ve=t({},{overrideStyles:Le,name:"div"}),ce=ve.classes,_e=ve.cx,Te=Object(p.useState)(null),Ee=u(Te,2),De=Ee[0],xe=Ee[1],Se=Object(p.useState)(!1),Ae=u(Se,2),we=Ae[0],He=Ae[1],We=Object(p.useMemo)(function(){if(le)return Object.values(le).filter(function(Ce){return!!Ce}).length===je.length},[le,je.length]);Object(p.useEffect)(function(){ie==null||ie(je.reduce(function(Ce,Ue){return ye!==null&&ye.includes(Ue.key)?Ce[Ue.key]=!0:Ce[Ue.key]=!1,Ce},{}))},[]);var Ke=function(){var Ue={};je.map(function(Ye){return Ue[Ye.key]=!We}),ie==null||ie(Ue)},ze=function(Ue){xe(Ue),He(!0)},Fe=function(){He(!1)},$e=function(Ue){ie==null||ie(function(Ye){var Me;return Object.assign({},Ye,(Me={},Me[Ue.key]=!0,Me))}),He(!1)};return Object(l.jsxs)(fe,Object.assign({ref:ee,className:_e(ce.container,be&&"transparent-agreement",Be),style:ke},ne,{children:[je.length>1&&Object(l.jsxs)("div",{className:_e(ce.option),onClick:function(){return Ke()},children:[We?be?Object(l.jsx)(h,{className:_e(ce.optionIcon)}):Object(l.jsx)(_,{className:_e(ce.optionIcon)}):Object(l.jsx)(O,{className:_e(ce.optionIcon)}),Object(l.jsx)("span",{className:_e(ce.label),children:"\uC804\uCCB4 \uB3D9\uC758"})]}),je.map(function(Ce,Ue){return Object(l.jsxs)("div",{className:_e(ce.option),children:[le!=null&&le[Ce.key]?be?Object(l.jsx)(h,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}):Object(l.jsx)(_,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}):Object(l.jsx)(O,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}),Object(l.jsxs)("div",{className:_e(ce.labelContainer),onClick:function(){return ze(Ce)},children:[Object(l.jsx)("span",{className:_e(ce.label),children:Ce.label}),be?Object(l.jsx)(a,{className:_e(ce.moreIcon),style:{transform:"rotate(0)"}}):Object(l.jsx)(f,{className:_e(ce.moreIcon),style:{transform:"rotate(-90deg)"}})]})]},"option-"+Ce.key)}),De&&we&&Object(l.jsx)(y.a,{open:we,onClose:Fe,modalPopup:Re,ModalContainerClassName:"max-h",handleAgree:function(){return $e(De)},title:De==null?void 0:De.label,backIcon:!0,children:De==null?void 0:De.content})]}))});T.displayName="@travelmakers-design/core/BottomSheet";function C(L,ee){return P(L)||V(L,ee)||k(L,ee)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(L,ee){if(!!L){if(typeof L=="string")return N(L,ee);var re=Object.prototype.toString.call(L).slice(8,-1);if(re==="Object"&&L.constructor&&(re=L.constructor.name),re==="Map"||re==="Set")return Array.from(L);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return N(L,ee)}}function N(L,ee){(ee==null||ee>L.length)&&(ee=L.length);for(var re=0,pe=new Array(ee);re<ee;re++)pe[re]=L[re];return pe}function V(L,ee){var re=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(re!=null){var pe=[],be=!0,he=!1,je,le;try{for(re=re.call(L);!(be=(je=re.next()).done)&&(pe.push(je.value),!(ee&&pe.length===ee));be=!0);}catch(se){he=!0,le=se}finally{try{!be&&re.return!=null&&re.return()}finally{if(he)throw le}}return pe}}function P(L){if(Array.isArray(L))return L}var F=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nconst EssentialAgreement = require(\\"../json/essential-agreement.json\\");\\nconst RegisterAgreement = require(\\"../json/register-agreement.json\\");\\n\\nimport { BottomSheet } from \\"../BottomSheet\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React, { useState } from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/BottomSheet\\",\\n  component: BottomSheet,\\n  argTypes: {\\n    popup: {\\n      defaultValue: false,\\n      description: \\"\uD31D\uC5C5 \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    options: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":59},"endLoc":{"col":1,"line":72},"startBody":{"col":23,"line":59},"endBody":{"col":1,"line":72}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

const EssentialAgreement = require("../json/essential-agreement.json");
const RegisterAgreement = require("../json/register-agreement.json");

import { BottomSheet } from "../BottomSheet";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

export default {
  title: "@travelmakers-design/core/Component/BottomSheet",
  component: BottomSheet,
  argTypes: {
    popup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    options: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",
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
  },
} as Meta;

export const Default = (props) => {
  const [agree, setAgree] = useState<any>({});
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <BottomSheet
        {...props}
        options={RegisterAgreement}
        value={agree}
        setValue={setAgree}
        popup={true}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}},F=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

const EssentialAgreement = require("../json/essential-agreement.json");
const RegisterAgreement = require("../json/register-agreement.json");

import { BottomSheet } from "../BottomSheet";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

export default {
  title: "@travelmakers-design/core/Component/BottomSheet",
  component: BottomSheet,
  argTypes: {
    popup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    options: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",
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
  },
} as Meta;

export const Default = (props) => {
  const [agree, setAgree] = useState<any>({});
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <BottomSheet
        {...props}
        options={RegisterAgreement}
        value={agree}
        setValue={setAgree}
        popup={true}
      />
    </div>
  );
};
`,H={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:72},startBody:{col:23,line:59},endBody:{col:1,line:72}}},ae=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json"),ue=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json"),ge=S.default={title:"@travelmakers-design/core/Component/BottomSheet",component:T,argTypes:{popup:{defaultValue:!1,description:"\uD31D\uC5C5 \uC5EC\uBD80",table:{type:{summary:"boolean"}},control:{type:"boolean"}},options:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nconst EssentialAgreement = require(\\"../json/essential-agreement.json\\");\\nconst RegisterAgreement = require(\\"../json/register-agreement.json\\");\\n\\nimport { BottomSheet } from \\"../BottomSheet\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React, { useState } from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/BottomSheet\\",\\n  component: BottomSheet,\\n  argTypes: {\\n    popup: {\\n      defaultValue: false,\\n      description: \\"\uD31D\uC5C5 \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    options: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":59},"endLoc":{"col":1,"line":72},"startBody":{"col":23,"line":59},"endBody":{"col":1,"line":72}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

const EssentialAgreement = require("../json/essential-agreement.json");
const RegisterAgreement = require("../json/register-agreement.json");

import { BottomSheet } from "../BottomSheet";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

export default {
  title: "@travelmakers-design/core/Component/BottomSheet",
  component: BottomSheet,
  argTypes: {
    popup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    options: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",
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
  },
} as Meta;

export const Default = (props) => {
  const [agree, setAgree] = useState<any>({});
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <BottomSheet
        {...props}
        options={RegisterAgreement}
        value={agree}
        setValue={setAgree}
        popup={true}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}}},docs:{page:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E.g,{}),Object(l.jsx)(E.f,{}),Object(l.jsx)(E.b,{}),Object(l.jsx)(E.d,{}),Object(l.jsx)(E.a,{story:E.c}),Object(l.jsx)(E.e,{})]})}}}},me=function(ee){var re=Object(p.useState)({}),pe=C(re,2),be=pe[0],he=pe[1];return Object(l.jsx)("div",{style:{padding:24,display:"flex"},children:Object(l.jsx)(T,Object.assign({},ee,{options:ue,value:be,setValue:he,popup:!0}))})};me.displayName="Default",me.parameters=Object.assign({storySource:{source:`(props) => {
  const [agree, setAgree] = useState<any>({});
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <BottomSheet
        {...props}
        options={RegisterAgreement}
        value={agree}
        setValue={setAgree}
        popup={true}
      />
    </div>
  );
}`}},me.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return y});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Q=e("./node_modules/react/index.js"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/core-js/modules/es.string.small.js"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),Y=e("./packages/travelmakers-design-core/src/constants/index.ts"),E=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Z={xsmall:{height:Y.a.xsmall,padding:"0 24px"},small:{height:Y.a.small,padding:"0 24px"},medium:{height:Y.a.medium,padding:"0 24px"},large:{height:Y.a.large,padding:"0 24px"}},A=function(_){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.caption+"px",fontSize:_.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.b3+"px",fontSize:_.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.b2+"px",fontSize:_.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.h5+"px",fontSize:_.fontSizes.h5}}},q=Object.keys(Z).reduce(function(l,_){return l[_]=Z[_].height,l},{}),X=function(_){return{display:_?"block":"inline-block",width:_?"100%":"auto"}},U=Object(M.a)(function(l,_,h){var f,a,O,I=_.variant,g=_.size,s=_.fullWidth,n=_.roundness,t=_.line,r=h("loading"),u=h("inner"),x=h("spinner"),d=I||l.colors.navy1;return{loading:(f={ref:r,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},f["."+u]={opacity:0},f["."+x]={display:"flex"},f),solid:(a={backgroundColor:l.palettes[d][l.colorScheme==="light",0],color:d==="white"?l.colors.navy1:l.colors.white,"&:not(:disabled):hover":{backgroundColor:l.palettes[d][l.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:l.palettes[d][l.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:n?l.radius.round:2,outline:"1px solid "+l.palettes[d][l.colorScheme==="light",0]}}},a["&:disabled:not(."+r+")"]={backgroundColor:l.colors.gray5,color:t?l.colors.black:l.colors.white},a),ghost:(O={backgroundColor:l.colors.transparent,border:"1px solid "+l.palettes[d][l.colorScheme==="light",0],color:d==="white"?l.colors.white:l.palettes[d][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:n?l.radius.round:2,outline:"1px solid "+l.palettes[d][l.colorScheme==="light",0]}}},O["&:disabled:not(."+r+")"]={color:Object(E.a)(l.palettes[d][1],l.opacity.opacity3),border:"1px solid "+Object(E.a)(l.palettes[d][1],l.opacity.opacity3)},O),root:Object.assign({},Z[g],X(s),Object(z.b)(l),A(l)[g],{borderRadius:n?l.radius.round:l.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:u,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:x,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),D=e("./node_modules/react/jsx-runtime.js"),j=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function b(l,_){if(l==null)return{};var h=p(l,_),f,a;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(a=0;a<O.length;a++)f=O[a],!(_.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,f)||(h[f]=l[f]))}return h}function p(l,_){if(l==null)return{};var h={},f=Object.keys(l),a,O;for(O=0;O<f.length;O++)a=f[O],!(_.indexOf(a)>=0)&&(h[a]=l[a]);return h}var y=Object(Q.forwardRef)(function(l,_){var h=l.children,f=l.component,a=l.size,O=a===void 0?"medium":a,I=l.variant,g=I===void 0?"primary":I,s=l.line,n=s===void 0?!1:s,t=l.roundness,r=t===void 0?!1:t,u=l.fullWidth,x=u===void 0?!1:u,d=l.type,c=d===void 0?"button":d,m=l.disabled,i=m===void 0?!1:m,o=l.leftIcon,v=o===void 0?"":o,T=l.rightIcon,C=T===void 0?"":T,R=l.className,k=l.co,N=l.overrideStyles,V=b(l,j),P=Object(G.c)(),F=U({variant:g,size:O,fullWidth:x,roundness:r,line:n},{overrideStyles:N,name:"Button"}),H=F.classes,ae=F.cx;return Object(D.jsx)(B.a,Object.assign({component:f||"button",ref:_,type:c,disabled:i,className:ae(H.root,H[n?"ghost":"solid"],R),co:k,onTouchStart:function(){}},V,{children:Object(D.jsxs)("div",{className:H.inner,children:[v&&Object(D.jsx)("span",{className:ae(H.icon,H.leftIcon),children:v}),Object(D.jsx)("span",{className:H.label,children:h}),C&&Object(D.jsx)("span",{className:ae(H.icon,H.rightIcon),children:C})]})}))});y.displayName="@travelmakers-design/core/Button"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),G=e("./node_modules/react/index.js"),Q=e.n(G),B=e("./node_modules/react/jsx-runtime.js"),J=e.n(B),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},w=`import {
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
`,M={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}};S.default={title:"@travelmakers-design/core/Component/Button",component:te.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(W.g,{}),Object(B.jsx)(W.f,{}),Object(B.jsx)(W.b,{}),Object(B.jsx)(W.d,{}),Object(B.jsx)(W.a,{story:W.c}),Object(B.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var z=function(E){return Object(B.jsx)("div",{style:{margin:"0 auto"},children:Object(B.jsx)(te.a,Object.assign({},E,{children:"Button"}))})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return D});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=Object(J.a)(function(j,b){var p=b.type,y=p===void 0?"default":p;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px 24px",gap:"8px",backgroundColor:""+j.colors.gray6},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",padding:0,gap:"8px"},title:{color:y==="default"?j.colors.green2:j.colors.red2,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:j.fontSizes.b2,lineHeight:j.lineHeights.b2+"px"},content:{color:j.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:j.fontSizes.b2,lineHeight:j.lineHeights.b2+"px"}}}),M=e("./node_modules/react/jsx-runtime.js"),z=function(b){var p=b.color;return Object(M.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(M.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z",fill:p!=null?p:"#0D5E49"}),Object(M.jsx)("rect",{x:"0.5",y:"0.5",width:"13",height:"13",rx:"6.5",stroke:p!=null?p:"#0D5E49"})]})};z.displayName="CalloutAlertIcon",z.displayName="@travelmakers-design/core/CalloutAlertIcon";var Y=["type","title","content","color","className","co","overrideStyles"];function E(j,b){if(j==null)return{};var p=Z(j,b),y,l;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(j);for(l=0;l<_.length;l++)y=_[l],!(b.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(j,y)||(p[y]=j[y]))}return p}function Z(j,b){if(j==null)return{};var p={},y=Object.keys(j),l,_;for(_=0;_<y.length;_++)l=y[_],!(b.indexOf(l)>=0)&&(p[l]=j[l]);return p}var A=Object(K.forwardRef)(function(j,b){var p=j.type,y=p===void 0?"default":p,l=j.title,_=j.content,h=j.color,f=j.className,a=j.co,O=j.overrideStyles,I=E(j,Y),g=Object(Q.c)(),s=w({type:y},{overrideStyles:O,name:"Callout"}),n=s.classes,t=s.cx;return Object(M.jsxs)(B.a,Object.assign({ref:b,className:t(n.root,f),co:a},I,{children:[Object(M.jsxs)("div",{className:t(n.titleWrapper),children:[Object(M.jsx)(z,{color:y==="default"?g.colors.green2:g.colors.red2}),Object(M.jsx)("span",{className:t(n.title),children:l})]}),Object(M.jsx)("span",{className:t(n.content),children:_})]}))});A.displayName="@travelmakers-design/core/Callout";var q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Callout } from \\"../Callout\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Callout\\",\\n  component: Callout,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"warning\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    content: {\\n      defaultValue: \\"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Callout {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":37},"endLoc":{"col":1,"line":39},"startBody":{"col":23,"line":37},"endBody":{"col":1,"line":39}}};
    
import React from "react";
import { Callout } from "../Callout";

export default {
  title: "@travelmakers-design/core/Component/Callout",
  component: Callout,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "warning"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    content: {
      defaultValue: "\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <Callout {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,X={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}},q=`import React from "react";
import { Callout } from "../Callout";

export default {
  title: "@travelmakers-design/core/Component/Callout",
  component: Callout,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "warning"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    content: {
      defaultValue: "\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <Callout {...props} />;
};
`,X={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:39},startBody:{col:23,line:37},endBody:{col:1,line:39}}},U=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Callout } from \\"../Callout\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Callout\\",\\n  component: Callout,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"warning\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    content: {\\n      defaultValue: \\"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Callout {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":37},"endLoc":{"col":1,"line":39},"startBody":{"col":23,"line":37},"endBody":{"col":1,"line":39}}};
    
import React from "react";
import { Callout } from "../Callout";

export default {
  title: "@travelmakers-design/core/Component/Callout",
  component: Callout,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "warning"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    content: {
      defaultValue: "\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <Callout {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}}}},title:"@travelmakers-design/core/Component/Callout",component:A,argTypes:{type:{defaultValue:"default",description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","warning"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},content:{defaultValue:"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},D=function(b){return Object(M.jsx)(A,Object.assign({},b))};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout {...props} />;
}`}},D.parameters)},"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return j});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),M=function(p){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:p.fontSizes.h4,lineHeight:p.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:p.fontSizes.h1,lineHeight:p.lineHeights.h1+"px"}}},z=Object(J.a)(function(b,p){var y=p.size,l=y===void 0?"small":y,_=p.color,h=_===void 0?"navy":_;return{root:{},titleWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:w.a.maxSize},title:Object.assign({},M(b)[l],{color:h==="navy"?b.colors.navy1:b.colors.white,margin:"0 35px"}),divider:{backgroundColor:h==="navy"?b.colors.navy1:b.colors.white,flex:1,height:"1px"}}}),Y=e("./node_modules/react/jsx-runtime.js"),E=["size","color","title","className","co","overrideStyles"];function Z(b,p){if(b==null)return{};var y=A(b,p),l,_;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(_=0;_<h.length;_++)l=h[_],!(p.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,l)||(y[l]=b[l]))}return y}function A(b,p){if(b==null)return{};var y={},l=Object.keys(b),_,h;for(h=0;h<l.length;h++)_=l[h],!(p.indexOf(_)>=0)&&(y[_]=b[_]);return y}var q=Object(K.forwardRef)(function(b,p){var y=b.size,l=y===void 0?"small":y,_=b.color,h=_===void 0?"navy":_,f=b.title,a=b.className,O=b.co,I=b.overrideStyles,g=Z(b,E),s=Object(Q.c)(),n=z({size:l,color:h},{overrideStyles:I,name:"HeaderPage"}),t=n.classes,r=n.cx;return Object(Y.jsx)(B.a,Object.assign({ref:p,className:r(t.root,a),co:O},g,{children:Object(Y.jsxs)("div",{className:r(t.titleWrapper),children:[Object(Y.jsx)("span",{className:r(t.divider)}),Object(Y.jsx)("span",{className:r(t.title),children:f}),Object(Y.jsx)("span",{className:r(t.divider)})]})}))});q.displayName="@travelmakers-design/core/Header/Section";var X=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HeaderPage } from \\"../HeaderPage\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HeaderPage\\",\\n  component: HeaderPage,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <HeaderPage {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":33},"endLoc":{"col":1,"line":35},"startBody":{"col":23,"line":33},"endBody":{"col":1,"line":35}}};
    
import React from "react";
import { HeaderPage } from "../HeaderPage";

export default {
  title: "@travelmakers-design/core/Component/HeaderPage",
  component: HeaderPage,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderPage {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}},X=`import React from "react";
import { HeaderPage } from "../HeaderPage";

export default {
  title: "@travelmakers-design/core/Component/HeaderPage",
  component: HeaderPage,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderPage {...props} />;
};
`,U={Default:{startLoc:{col:23,line:33},endLoc:{col:1,line:35},startBody:{col:23,line:33},endBody:{col:1,line:35}}},D=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HeaderPage } from \\"../HeaderPage\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HeaderPage\\",\\n  component: HeaderPage,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <HeaderPage {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":33},"endLoc":{"col":1,"line":35},"startBody":{"col":23,"line":33},"endBody":{"col":1,"line":35}}};
    
import React from "react";
import { HeaderPage } from "../HeaderPage";

export default {
  title: "@travelmakers-design/core/Component/HeaderPage",
  component: HeaderPage,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderPage {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}}},title:"@travelmakers-design/core/Component/HeaderPage",component:q,argTypes:{size:{defaultValue:"small",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},j=function(p){return Object(Y.jsx)(q,Object.assign({},p))};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderPage {...props} />;
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return j});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/react/jsx-runtime.js"),w=function(p){var y,l;return Object(J.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p,{children:Object(J.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(J.jsx)("path",{stroke:(y=p.color)!==null&&y!==void 0?y:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(J.jsx)("path",{fill:(l=p.color)!==null&&l!==void 0?l:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};w.displayName="BackIcon",w.displayName="@travelmakers-design/core/BackIcon";var M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=function(p){return{small:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:p.fontSizes.b3,lineHeight:p.lineHeights.b3+"px"},large:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:p.fontSizes.h6,lineHeight:p.lineHeights.h6+"px"}}},Y=Object(M.a)(function(b,p){var y=p.size,l=y===void 0?"small":y;return{root:{display:"flex",alignItems:"center",width:"100%",height:l==="small"?"44px":"64px",maxWidth:"calc(1200px - 16px * 2)",padding:"0 16px",backgroundColor:b.colors.navy1},wrapper:{display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},title:Object.assign({},z(b)[l],{color:b.colors.white,marginLeft:24})}}),E=["size","title","className","co","overrideStyles"];function Z(b,p){if(b==null)return{};var y=A(b,p),l,_;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(_=0;_<h.length;_++)l=h[_],!(p.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,l)||(y[l]=b[l]))}return y}function A(b,p){if(b==null)return{};var y={},l=Object.keys(b),_,h;for(h=0;h<l.length;h++)_=l[h],!(p.indexOf(_)>=0)&&(y[_]=b[_]);return y}var q=Object(K.forwardRef)(function(b,p){var y=b.size,l=y===void 0?"small":y,_=b.title,h=b.className,f=b.co,a=b.overrideStyles,O=Z(b,E),I=Object(Q.c)(),g=Y({size:l},{overrideStyles:a,name:"HeaderSection"}),s=g.classes,n=g.cx;return Object(J.jsx)(B.a,Object.assign({ref:p,className:n(s.root,h),co:f},O,{children:Object(J.jsxs)("div",{className:n(s.wrapper),children:[Object(J.jsx)(w,{width:l==="small"?"16px":"24px",height:l==="small"?"16px":"24px"}),Object(J.jsx)("span",{className:n(s.title),children:_})]})}))});q.displayName="@travelmakers-design/core/Header/Section";var X=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HeaderSection } from \\"../HeaderSection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HeaderSection\\",\\n  component: HeaderSection,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD398\uC774\uC9C0 \uC774\uB984\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <HeaderSection {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":27},"endLoc":{"col":1,"line":29},"startBody":{"col":23,"line":27},"endBody":{"col":1,"line":29}}};
    
import React from "react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design/core/Component/HeaderSection",
  component: HeaderSection,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD398\uC774\uC9C0 \uC774\uB984",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderSection {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}},X=`import React from "react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design/core/Component/HeaderSection",
  component: HeaderSection,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD398\uC774\uC9C0 \uC774\uB984",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderSection {...props} />;
};
`,U={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},D=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HeaderSection } from \\"../HeaderSection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HeaderSection\\",\\n  component: HeaderSection,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD398\uC774\uC9C0 \uC774\uB984\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <HeaderSection {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":27},"endLoc":{"col":1,"line":29},"startBody":{"col":23,"line":27},"endBody":{"col":1,"line":29}}};
    
import React from "react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design/core/Component/HeaderSection",
  component: HeaderSection,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uD398\uC774\uC9C0 \uC774\uB984",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderSection {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@travelmakers-design/core/Component/HeaderSection",component:q,argTypes:{size:{defaultValue:"small",description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},title:{defaultValue:"\uD398\uC774\uC9C0 \uC774\uB984",table:{type:{summary:"React.ReactNode"}},description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},j=function(p){return Object(J.jsx)(q,Object.assign({},p))};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderSection {...props} />;
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return B});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./node_modules/react/jsx-runtime.js"),Q=e.n(G),B=function(w){return Object(G.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w,{children:Object(G.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};B.displayName="CloseIcon",B.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return D});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./node_modules/core-js/modules/es.string.small.js"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),M=e("./packages/travelmakers-design-core/src/constants/index.ts"),z=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Y={xsmall:{width:M.a.xsmall,height:M.a.xsmall},small:{width:M.a.small,height:M.a.small},medium:{width:M.a.medium,height:M.a.medium},large:{width:M.a.large,height:M.a.large}},E={xsmall:8,small:8,medium:16,large:16},Z=Object(J.a)(function(j,b,p){var y,l,_,h=b.variant,f=b.size,a=b.line,O=b.roundness,I=p("loading"),g=p("inner"),s=p("spinner"),n=h||j.colors.navy1;return{loading:(y={ref:I,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},y["."+g]={opacity:0},y["."+s]={display:"flex"},y),solid:(l={backgroundColor:j.palettes[n][j.colorScheme==="light",0],color:j.colorScheme==="light"?j.colors.white:j.colors.black,"&:not(:disabled):hover":{backgroundColor:j.palettes[n][j.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:j.palettes[n][j.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:O?j.radius.round:2,outline:"1px solid "+j.palettes[n][j.colorScheme==="light",0]}}},l["&:disabled:not(."+I+")"]={backgroundColor:j.colors.gray5,color:a?j.colors.black:j.colors.white},l),ghost:(_={backgroundColor:j.colors.transparent,border:"1px solid "+j.palettes[n][j.colorScheme==="light",0],color:j.palettes[n][j.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(z.a)(j.palettes[n][j.colorScheme==="light",0],j.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(z.a)(j.palettes[n][j.colorScheme==="light",1],j.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:O?j.radius.round:2,outline:"1px solid "+j.palettes[n][j.colorScheme==="light",0]}}},_["&:disabled:not(."+I+")"]={backgroundColor:j.colors.gray5,color:a?j.colors.black:j.colors.white},_),root:Object.assign({},Y[f],Object(w.b)(j),{borderRadius:O?j.radius.round:j.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:g,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:Y[f].width-E[f],height:Y[f].height-E[f]}},spinnerWrapper:{ref:s,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function X(j,b){if(j==null)return{};var p=U(j,b),y,l;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(j);for(l=0;l<_.length;l++)y=_[l],!(b.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(j,y)||(p[y]=j[y]))}return p}function U(j,b){if(j==null)return{};var p={},y=Object.keys(j),l,_;for(_=0;_<y.length;_++)l=y[_],!(b.indexOf(l)>=0)&&(p[l]=j[l]);return p}var D=Object(G.forwardRef)(function(j,b){var p=j.children,y=j.component,l=j.size,_=l===void 0?"medium":l,h=j.variant,f=j.line,a=j.type,O=a===void 0?"button":a,I=j.disabled,g=I===void 0?!1:I,s=j.roundness,n=s===void 0?!1:s,t=j.className,r=j.co,u=j.overrideStyles,x=X(j,q),d=Z({variant:h,size:_,line:f,roundness:n},{overrideStyles:u,name:"Button"}),c=d.classes,m=d.cx;return Object(A.jsx)(Q.a,Object.assign({component:y||"button",className:m(c.root,c[f?"ghost":"solid"],t),type:O,disabled:g,ref:b,onTouchStart:function(){},co:r},x,{children:Object(A.jsx)("div",{className:c.inner,children:p})}))});D.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return X});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),B=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),w=e("./node_modules/react/jsx-runtime.js"),M=["size","variant"];function z(U,D){if(U==null)return{};var j=Y(U,D),b,p;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(U);for(p=0;p<y.length;p++)b=y[p],!(D.indexOf(b)>=0)&&(!Object.prototype.propertyIsEnumerable.call(U,b)||(j[b]=U[b]))}return j}function Y(U,D){if(U==null)return{};var j={},b=Object.keys(U),p,y;for(y=0;y<b.length;y++)p=b[y],!(D.indexOf(p)>=0)&&(j[p]=U[p]);return j}var E=Object(B.forwardRef)(function(U,D){var j=U.size,b=j===void 0?"medium":j,p=U.variant,y=p===void 0?"primary":p,l=z(U,M);return Object(w.jsx)(Q.a,Object.assign({size:b,variant:y,ref:D},l,{children:Object(w.jsx)(J.a,{})}))});E.displayName="@travelmakers-design/core/CloseButton";var Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},Z=`import {
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
`,A={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},q=S.default={title:"@travelmakers-design/core/Component/CloseButton",component:E,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(K.g,{}),Object(w.jsx)(K.f,{}),Object(w.jsx)(K.b,{}),Object(w.jsx)(K.d,{}),Object(w.jsx)(K.a,{story:K.c}),Object(w.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},X=function(D){return Object(w.jsx)(E,Object.assign({},D))};X.displayName="Default",X.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},X.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),G=e("./node_modules/react/index.js"),Q=e.n(G),B=e("./node_modules/react/jsx-runtime.js"),J=e.n(B),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},w=`import {
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
`,M={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};S.default={title:"@travelmakers-design/core/Component/IconButton",component:te.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(W.g,{}),Object(B.jsx)(W.f,{}),Object(B.jsx)(W.b,{}),Object(B.jsx)(W.d,{}),Object(B.jsx)(W.a,{story:W.c}),Object(B.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var z=function(E){var Z=Object(B.jsx)("svg",{viewBox:"0 0 24 24",children:Object(B.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(B.jsx)(te.a,Object.assign({},E,{children:Z}))};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.fill.js"),U=e("./node_modules/react/index.js"),D=e("./node_modules/react/jsx-runtime.js"),j=function(o){return Object(D.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{children:[Object(D.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(D.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(D.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(D.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};j.displayName="CouponPercentIcon",j.displayName="@travelmakers-design/core/CouponPercentIcon";var b=e("./node_modules/core-js/modules/es.string.small.js"),p=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),l=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.caption+"px",fontSize:o.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b3+"px",fontSize:o.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2}}},_=function(o){return{small:{padding:"2px 4px"},medium:{padding:"0px 12px"},large:{padding:"0px 16px"}}},h=Object(p.a)(function(i,o){var v,T=o.fill;return{container:Object.assign({},Object(y.b)(i),l(i).small,_(i).small,(v={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:i.colors.green3,marginRight:"6px",gap:"5px",borderRadius:i.radius.medium,backgroundColor:i.colors.green5},v["&:last-child"]={marginRight:0},v)),line:{color:i.colors.green3,background:"inherit",border:"1px solid"}}}),f=["component","fill","children","className","overrideStyles","__staticSelector"];function a(i,o){if(i==null)return{};var v=O(i,o),T,C;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(i);for(C=0;C<R.length;C++)T=R[C],!(o.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,T)||(v[T]=i[T]))}return v}function O(i,o){if(i==null)return{};var v={},T=Object.keys(i),C,R;for(R=0;R<T.length;R++)C=T[R],!(o.indexOf(C)>=0)&&(v[C]=i[C]);return v}var I=Object(U.forwardRef)(function(i,o){var v=i.component,T=i.fill,C=T===void 0?!1:T,R=i.children,k=i.className,N=i.overrideStyles,V=i.__staticSelector,P=V===void 0?"span":V,F=a(i,f),H=v||"span",ae=h({fill:C},{overrideStyles:N,name:"span"}),ue=ae.classes,ge=ae.cx;return Object(D.jsxs)(H,Object.assign({ref:o,className:ge(ue.container,!C&&ue.line,k)},F,{children:[Object(D.jsx)(j,{}),R]}))});I.displayName="@travelmakers-design/core/IconTag";function g(i){return r(i)||t(i)||n(i)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(i,o){if(!!i){if(typeof i=="string")return u(i,o);var v=Object.prototype.toString.call(i).slice(8,-1);if(v==="Object"&&i.constructor&&(v=i.constructor.name),v==="Map"||v==="Set")return Array.from(i);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return u(i,o)}}function t(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function r(i){if(Array.isArray(i))return u(i)}function u(i,o){(o==null||o>i.length)&&(o=i.length);for(var v=0,T=new Array(o);v<o;v++)T[v]=i[v];return T}var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconTag } from \\"../IconTag\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconTag\\",\\n  component: IconTag,\\n  argTypes: {\\n    fill: {\\n      defaultValue: true,\\n      description: \\"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":49},"endLoc":{"col":1,"line":66},"startBody":{"col":23,"line":49},"endBody":{"col":1,"line":66}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconTag } from "../IconTag";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/IconTag",
  component: IconTag,
  argTypes: {
    fill: {
      defaultValue: true,
      description: "IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
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

  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(1).keys()].map((_, index) => (
        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>
      ))}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}},x=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconTag } from "../IconTag";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/IconTag",
  component: IconTag,
  argTypes: {
    fill: {
      defaultValue: true,
      description: "IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
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

  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(1).keys()].map((_, index) => (
        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>
      ))}
    </div>
  );
};
`,d={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:66},startBody:{col:23,line:49},endBody:{col:1,line:66}}},c=S.default={title:"@travelmakers-design/core/Component/IconTag",component:I,argTypes:{fill:{defaultValue:!0,description:"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { IconTag } from \\"../IconTag\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/IconTag\\",\\n  component: IconTag,\\n  argTypes: {\\n    fill: {\\n      defaultValue: true,\\n      description: \\"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":49},"endLoc":{"col":1,"line":66},"startBody":{"col":23,"line":49},"endBody":{"col":1,"line":66}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { IconTag } from "../IconTag";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/IconTag",
  component: IconTag,
  argTypes: {
    fill: {
      defaultValue: true,
      description: "IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
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

  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(1).keys()].map((_, index) => (
        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>
      ))}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Z.g,{}),Object(D.jsx)(Z.f,{}),Object(D.jsx)(Z.b,{}),Object(D.jsx)(Z.d,{}),Object(D.jsx)(Z.a,{story:Z.c}),Object(D.jsx)(Z.e,{})]})}},actions:{handles:["click button"]}}},m=function(o){var v=Object(D.jsx)("svg",{viewBox:"0 0 24 24",children:Object(D.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(D.jsx)("div",{style:{padding:24,display:"flex"},children:g(Array(1).keys()).map(function(T,C){return Object(D.jsxs)(I,Object.assign({},o,{children:["\uCFE0\uD3F0 \uC801\uC6A9\uAC00",C+1]}))})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(1).keys()].map((_, index) => (
        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>
      ))}
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return R});var $=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),D=e("./node_modules/react/index.js"),j=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),b=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=Object(b.a)(function(k,N){var V=N.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:V?V in k.radius?k.radius[V]:V:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(k.colorScheme==="dark",k.palettes.primary[0]),backgroundColor:(k.colorScheme==="dark",k.palettes.primary[0]),borderRadius:V?V in k.radius?k.radius[V]:V:0}}}),y=e("./node_modules/react/jsx-runtime.js"),l=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function _(k,N){return I(k)||O(k,N)||f(k,N)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(k,N){if(!!k){if(typeof k=="string")return a(k,N);var V=Object.prototype.toString.call(k).slice(8,-1);if(V==="Object"&&k.constructor&&(V=k.constructor.name),V==="Map"||V==="Set")return Array.from(k);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return a(k,N)}}function a(k,N){(N==null||N>k.length)&&(N=k.length);for(var V=0,P=new Array(N);V<N;V++)P[V]=k[V];return P}function O(k,N){var V=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(V!=null){var P=[],F=!0,H=!1,ae,ue;try{for(V=V.call(k);!(F=(ae=V.next()).done)&&(P.push(ae.value),!(N&&P.length===N));F=!0);}catch(ge){H=!0,ue=ge}finally{try{!F&&V.return!=null&&V.return()}finally{if(H)throw ue}}return P}}function I(k){if(Array.isArray(k))return k}function g(k,N){if(k==null)return{};var V=s(k,N),P,F;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(k);for(F=0;F<H.length;F++)P=H[F],!(N.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,P)||(V[P]=k[P]))}return V}function s(k,N){if(k==null)return{};var V={},P=Object.keys(k),F,H;for(H=0;H<P.length;H++)F=P[H],!(N.indexOf(F)>=0)&&(V[F]=k[F]);return V}var n=null,t="loadImage",r=function(N,V){N.forEach(function(P){P.isIntersecting&&(V.unobserve(P.target),P.target.dispatchEvent(new CustomEvent(t)))})},u=Object(D.forwardRef)(function(k,N){var V=k.lazy,P=k.threshold,F=P===void 0?.5:P,H=k.placeholder,ae=k.src,ue=k.radius,ge=k.width,me=ge===void 0?"100%":ge,L=k.height,ee=L===void 0?"auto":L,re=k.alt,pe=k.fit,be=k.style,he=k.className,je=k.co,le=k.overrideStyles,se=g(k,l),ye=p({radius:ue},{overrideStyles:le,name:"Image"}),ie=ye.classes,Oe=ye.cx,ke=Object(D.useState)(!1),Ie=_(ke,2),Re=Ie[0],Pe=Ie[1],Be=Object(D.useState)(!1),Le=_(Be,2),Ve=Le[0],de=Le[1],ne=Object(D.useRef)(null),fe={width:me,height:ee,objectFit:pe};return Object(D.useImperativeHandle)(N,function(){return ne.current}),Object(D.useEffect)(function(){if(!V){de(!0);return}var ve=function(){return de(!0)},ce=ne.current;return ce&&ce.addEventListener(t,ve),function(){ce&&ce.removeEventListener(t,ve)}},[V]),Object(D.useEffect)(function(){!V||(n=new IntersectionObserver(r,{threshold:F}),ne.current&&n.observe(ne.current))},[V,F]),Object(y.jsxs)(j.a,Object.assign({className:Oe(ie.root,he),co:je},se,{children:[Object(y.jsx)("img",{ref:ne,src:ae,alt:re,className:ie.image,style:fe,onLoad:function(){return Pe(!0)}}),(!Re||V&&!Ve)&&H&&Object(y.jsx)("div",{className:ie.placeholder,title:re,children:H})]}))});u.displayName="@travelmakers-design/core/Image";function x(k){return i(k)||m(k)||c(k)||d()}function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(k,N){if(!!k){if(typeof k=="string")return o(k,N);var V=Object.prototype.toString.call(k).slice(8,-1);if(V==="Object"&&k.constructor&&(V=k.constructor.name),V==="Map"||V==="Set")return Array.from(k);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return o(k,N)}}function m(k){if(typeof Symbol!="undefined"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)}function i(k){if(Array.isArray(k))return o(k)}function o(k,N){(N==null||N>k.length)&&(N=k.length);for(var V=0,P=new Array(N);V<N;V++)P[V]=k[V];return P}var v=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},v=`import {
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
`,T={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}},C=S.default={title:"@travelmakers-design/core/Component/Image",component:u,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Z.g,{}),Object(y.jsx)(Z.f,{}),Object(y.jsx)(Z.b,{}),Object(y.jsx)(Z.d,{}),Object(y.jsx)(Z.a,{story:Z.c}),Object(y.jsx)(Z.e,{})]})}}}},R=function(N){return Object(y.jsx)(y.Fragment,{children:x(new Array(10)).map(function(V,P){return Object(y.jsx)("div",{children:Object(y.jsx)(u,Object.assign({placeholder:Object(y.jsx)("div",{children:"Placeholder"})},N))},P)})})};R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return U});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=Object(J.a)(function(D,j){var b=j.type,p=b===void 0?"text":b,y=j.color,l=y===void 0?"navy":y;return{root:{display:"flex",alignItems:"center"},indicator:{fontFamily:"PT Serif",fontSize:D.fontSizes.h5,lineHeight:D.lineHeights.h5+"px",fontWeight:"700",color:l==="white"?"white":D.colors.navy1,letterSpacing:"2.66667px"}}}),M=e("./node_modules/react/jsx-runtime.js"),z=["type","color","totalPage","currentPage","className","co","overrideStyles"];function Y(D,j){if(D==null)return{};var b=E(D,j),p,y;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(D);for(y=0;y<l.length;y++)p=l[y],!(j.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,p)||(b[p]=D[p]))}return b}function E(D,j){if(D==null)return{};var b={},p=Object.keys(D),y,l;for(l=0;l<p.length;l++)y=p[l],!(j.indexOf(y)>=0)&&(b[y]=D[y]);return b}var Z=Object(K.forwardRef)(function(D,j){var b=D.type,p=b===void 0?"text":b,y=D.color,l=y===void 0?"navy":y,_=D.totalPage,h=_===void 0?1:_,f=D.currentPage,a=f===void 0?1:f,O=D.className,I=D.co,g=D.overrideStyles,s=Y(D,z),n=Object(Q.c)(),t=w({type:p,color:l},{overrideStyles:g,name:"Indicator"}),r=t.classes,u=t.cx;return Object(M.jsx)(B.a,Object.assign({ref:j,className:u(r.root,O),co:I},s,{children:Object(M.jsxs)("span",{className:u(r.indicator),children:[a,"/",h]})}))});Z.displayName="@travelmakers-design/core/Indicator";var A=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Indicator } from \\"../Indicator\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Indicator\\",\\n  component: Indicator,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"text\\",\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"text\\", \\"bullet\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    currentPage: {\\n      defaultValue: 1,\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}}};
    
import React from "react";
import { Indicator } from "../Indicator";

export default {
  title: "@travelmakers-design/core/Component/Indicator",
  component: Indicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "bullet"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,q={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},A=`import React from "react";
import { Indicator } from "../Indicator";

export default {
  title: "@travelmakers-design/core/Component/Indicator",
  component: Indicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "bullet"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
};
`,q={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}},X=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Indicator } from \\"../Indicator\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Indicator\\",\\n  component: Indicator,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"text\\",\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"text\\", \\"bullet\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    currentPage: {\\n      defaultValue: 1,\\n      description: \\"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}}};
    
import React from "react";
import { Indicator } from "../Indicator";

export default {
  title: "@travelmakers-design/core/Component/Indicator",
  component: Indicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["text", "bullet"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Indicator",component:Z,argTypes:{color:{defaultValue:"navy",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["text","bullet"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}},U=function(j){return Object(M.jsx)("div",{style:{padding:24},children:Object(M.jsx)(Z,Object.assign({},j))})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return l}),e.d(S,"WithIcon",function(){return _}),e.d(S,"WithRightSection",function(){return h}),e.d(S,"Textarea",function(){return f});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),E={xsmall:12,small:14,medium:14,large:14,xlarge:16},Z=Object(z.a)(function(a,O){var I=O.multiline,g=O.roundness,s=O.invalid,n=O.width,t=O.descriptionType,r=a.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(Y.b)(a),{height:I?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:I?a.lineHeight:a.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:a.fontSizes.b2,width:n?n+"px":"100%",color:a.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:g?a.radius.round:2,border:"1px solid "+a.colors.gray5,backgroundColor:a.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:a.colors.gray1,color:a.colors.gray1},"&:disabled":{backgroundColor:a.colors.gray7,borderColor:a.colors.gray5,color:a.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:a.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+r,"&::placeholder":{opacity:1}},disabled:{backgroundColor:a.colors.gray7,borderColor:a.colors.gray5,color:a.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:a.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function X(a,O){if(a==null)return{};var I=U(a,O),g,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(s=0;s<n.length;s++)g=n[s],!(O.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(I[g]=a[g]))}return I}function U(a,O){if(a==null)return{};var I={},g=Object.keys(a),s,n;for(n=0;n<g.length;n++)s=g[n],!(O.indexOf(s)>=0)&&(I[s]=a[s]);return I}var D=Object(J.forwardRef)(function(a,O){var I,g,s=a.component,n=a.width,t=a.label,r=a.description,u=a.descriptionType,x=u===void 0?"description":u,d=a.icon,c=a.rightSectionWidth,m=c===void 0?48:c,i=a.rightSection,o=a.rightSectionProps,v=o===void 0?{}:o,T=a.wrapperProps,C=a.invalid,R=C===void 0?!1:C,k=a.required,N=k===void 0?!1:k,V=a.disabled,P=V===void 0?!1:V,F=a.multiline,H=F===void 0?!1:F,ae=a.roundness,ue=ae===void 0?!1:ae,ge=a.className,me=a.style,L=a.co,ee=a.overrideStyles,re=a.__staticSelector,pe=re===void 0?"Input":re,be=X(a,q),he=Object(B.c)(),je=Z({roundness:ue,multiline:H,invalid:R,width:n,descriptionType:x},{overrideStyles:ee,name:pe}),le=je.classes,se=je.cx,ye=s||"input";return Object(A.jsxs)(M.a,{style:{width:n?n+"px":"100%"},children:[t&&Object(A.jsx)(w.a,{level:"b2",family:"Pretendard",color:he.colors.gray1,style:{marginBottom:4},children:t}),Object(A.jsxs)(M.a,Object.assign({className:se(le.wrapper,ge),co:L,style:me},T,{children:[d&&Object(A.jsx)("div",{className:se(le.icon,(I={},I[le.disabled]=P,I)),children:d}),Object(A.jsx)(ye,Object.assign({},be,{ref:O,className:se(le.input,(g={},g[le.withIcon]=d,g[le.invalid]=R,g[le.disabled]=P,g)),required:N,disabled:P,style:{paddingRight:i?m:he.spacing.small}})),i&&Object(A.jsx)("div",Object.assign({},v,{style:Object.assign({},v.style,{paddingRight:32}),className:se(le.rightSection,v.className),children:Object(A.jsx)(w.a,{level:"b2",family:"Pretendard",color:he.colors.green2,children:i})}))]})),r&&x==="description"?Object(A.jsx)(w.a,{level:"b3",family:"Pretendard",color:R?he.colors.red2:he.colors.navy3,style:{marginTop:4},children:r}):R&&Object(A.jsx)(w.a,{level:"b3",family:"Pretendard",color:x==="error"?he.colors.red2:x==="success"?he.colors.green3:he.colors.navy3,style:{marginTop:4},children:r})]})});D.displayName="@travelmakers-design/core/Input";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    descriptionType: {\\n      defaultValue: \\"description\\",\\n      description: \\"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"description\\", \\"error\\", \\"success\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      description: \\"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    rightSection: {\\n      defaultValue: \\"\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} rightSection={withRight} />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":114},"endLoc":{"col":1,"line":120},"startBody":{"col":23,"line":114},"endBody":{"col":1,"line":120}},"WithIcon":{"startLoc":{"col":24,"line":122},"endLoc":{"col":1,"line":128},"startBody":{"col":24,"line":122},"endBody":{"col":1,"line":128}},"WithRightSection":{"startLoc":{"col":32,"line":130},"endLoc":{"col":1,"line":138},"startBody":{"col":32,"line":130},"endBody":{"col":1,"line":138}},"Textarea":{"startLoc":{"col":24,"line":140},"endLoc":{"col":1,"line":146},"startBody":{"col":24,"line":140},"endBody":{"col":1,"line":146}}};
    
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
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
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
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
};;

export const WithIcon = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};;

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
};;

export const Textarea = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} rightSection={withRight} />\\n    </div>\\n  );\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,b={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},j=`import { Input } from "../Input";
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
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
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
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
`,b={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},p=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Input } from \\"../Input\\";\\nimport React from \\"react\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Input\\",\\n  component: Input,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 \`invalid:true\`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    descriptionType: {\\n      defaultValue: \\"description\\",\\n      description: \\"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"description\\", \\"error\\", \\"success\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    invalid: {\\n      defaultValue: false,\\n      description: \\"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    rightSection: {\\n      defaultValue: \\"\\",\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nconst Icon = () => (\\n  <svg viewBox=\\"0 0 24 24\\">\\n    <path\\n      d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n      fill=\\"currentColor\\"\\n    />\\n  </svg>\\n);\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithIcon = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport const WithRightSection = (props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} rightSection={withRight} />\\n    </div>\\n  );\\n};\\n\\nexport const Textarea = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":114},"endLoc":{"col":1,"line":120},"startBody":{"col":23,"line":114},"endBody":{"col":1,"line":120}},"WithIcon":{"startLoc":{"col":24,"line":122},"endLoc":{"col":1,"line":128},"startBody":{"col":24,"line":122},"endBody":{"col":1,"line":128}},"WithRightSection":{"startLoc":{"col":32,"line":130},"endLoc":{"col":1,"line":138},"startBody":{"col":32,"line":130},"endBody":{"col":1,"line":138}},"Textarea":{"startLoc":{"col":24,"line":140},"endLoc":{"col":1,"line":146},"startBody":{"col":24,"line":140},"endBody":{"col":1,"line":146}}};
    
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
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
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
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
};;

export const WithIcon = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};;

export const WithRightSection = (props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
};;

export const Textarea = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };
WithIcon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} />\\n    </div>\\n  );\\n}" }, ...WithIcon.parameters };
WithRightSection.parameters = { storySource: { source: "(props) => {\\n  const withRight = \\"\uC778\uC99D\uC644\uB8CC\\";\\n\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input icon={<Icon />} {...props} rightSection={withRight} />\\n    </div>\\n  );\\n}" }, ...WithRightSection.parameters };
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:D,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},y=function(){return Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};y.displayName="Icon";var l=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(D,Object.assign({},O))})};l.displayName="Default";var _=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(D,Object.assign({icon:Object(A.jsx)(y,{})},O))})};_.displayName="WithIcon";var h=function(O){var I="\uC778\uC99D\uC644\uB8CC";return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(D,Object.assign({icon:Object(A.jsx)(y,{})},O,{rightSection:I}))})};h.displayName="WithRightSection";var f=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(D,Object.assign({component:"textarea",multiline:!0},O))})};f.displayName="Textarea",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},l.parameters),_.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},_.parameters),h.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},h.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Modal/Modal.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return b});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),Q=e("./node_modules/react/index.js"),B=e("./node_modules/react-dom/index.js"),J=e.n(B),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),M=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=function(y,l){return{small:{fontFamily:"Pretendard",fontWeight:l==="text"?"bold":"normal",lineHeight:y.lineHeights.caption+"px",fontSize:y.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:l==="text"?"bold":"normal",lineHeight:y.lineHeights.b3+"px",fontSize:y.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:l==="text"?"bold":"normal",lineHeight:y.lineHeights.b2+"px",fontSize:y.fontSizes.b2}}},Y=function(y,l){return{small:{padding:l==="text"?"0px 4px":"0px 8px"},medium:{padding:l==="text"?"0px 5px":"0px 8px"},large:{padding:l==="text"?"1px 7px":"0px 8px"}}},E=Object(w.a)(function(p,y){var l,_,h,f,a,O,I,g,s,n,t,r,u,x,d,c,m,i=y.size,o=y.type;return{container:Object.assign({},Object(M.b)(p),{display:"flex",position:"fixed",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"rgba(0, 0, 0, 0.7)",width:"100%",height:"100%",zIndex:"10000",top:"0",left:"0"}),absoluteContainer:(_={width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"flex-end",top:"0",backgroundColor:p.colors.white},_["&.popup"]={alignItems:"center",backgroundColor:"transparent"},_["&.modalPopup"]=(l={position:"relative",maxWidth:"1200px",margin:"0 auto",maxHeight:"90vh",height:"100%",borderRadius:"30px 30px 0 0"},l[""+p.media.tablet]={maxHeight:"100%",height:"100%",borderRadius:"0"},l),_),closeContainer:{position:"absolute",width:"100%",height:"100%",zIndex:"100"},modalContainer:(h={display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"100%",maxHeight:"100%",borderRadius:"6px",boxSizing:"border-box",zIndex:"200"},h["&.popup"]={justifyContent:"center"},h["&.max-h"]={height:"100%"},h),modalContentsContainer:(a={display:"flex",position:"relative",justifyContent:"center",width:"100%",height:"100%",padding:"40px",overflowY:"hidden"},a[""+p.media.tablet]={padding:"0"},a[""+p.media.desktop]=(f={},f["-ms-overflow-style"]="none",f["&::-webkit-scrollbar"]={display:"none"},f),a["&.optionsBox, &.modalPopup, &.toastPopup"]={padding:0},a["&.Agreement"]={height:"calc(100% - 77px)"},a),modalContents:{display:"block",position:"relative",width:"100%",maxWidth:"768px"},modalHeader:(g={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"0"},g[""+p.media.desktop]={padding:"24px 16px 12px 24px"},g["&.optionsBox"]=(O={height:"40px",padding:"0 16px",background:p.colors.navy1},O[""+p.media.tablet]={height:"64px"},O),g["&.modalPopup"]=(I={color:p.colors.navy1,height:"auto",padding:"40px 12px"},I["@media screen and (min-width: 800px)"]={padding:"40px 0"},I["@media screen and (max-height: 640px)"]={paddingTop:"24px",paddingBottom:"24px"},I.justifyContent="space-between",I[""+p.media.tablet]={justifyContent:"start",padding:"0 16px",height:"44px",backgroundColor:p.colors.navy1,color:p.colors.white},I),g["&.toastPopup"]={justifyContent:"space-between"},g),modalTitle:(t={fontSize:"18px",fontWeight:"700",lineHeight:"1.39",color:p.colors.navy1,textAlign:"left",whiteSpace:"nowrap"},t["&.optionsBox"]=(s={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:"24px",color:"#FFFFFF"},s[""+p.media.tablet]={fontSize:"14px",lineHeight:"20px"},s),t["&.modalPopup"]=(n={color:p.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px"},n[""+p.media.tablet]={fontWeight:400,fontSize:"12px",lineHeight:"20px",color:p.colors.white},n),t[".toastPopup"]={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:"12px",lineHeight:"20px",color:p.colors.white},t),modalBackIcon:(r={width:"16px",height:"16px",cursor:"pointer",marginRight:"8px",display:"none"},r[""+p.media.tablet]={display:"inline-block"},r),modalCloseIcon:(u={width:"24px",height:"24px",cursor:"pointer",marginRight:"8px",display:"inline-block"},u[""+p.media.tablet]={display:"none"},u),modalContentText:(c={display:"block",width:"100%",maxHeight:"100%",lineHeight:1.5,whiteSpace:"pre-wrap",color:p.colors.navy1,overflowY:"auto",paddingBottom:"16px"},c[""+p.media.desktop]={fontSize:"12px",padding:"12px 20px"},c["&.Agreement"]=(d={height:"calc(100% - 44px)"},d[""+p.media.tablet]=(x={height:"calc(100% - 104px)"},x["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},x),d),c),modalAbsolute:(m={display:"block",position:"fixed",bottom:"0",width:"100%",maxWidth:"768px",zIndex:"100",backgroundColor:"white",padding:"16px 0"},m[""+p.media.desktop]={padding:"16px"},m)}}),Z=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),A=e("./node_modules/react/jsx-runtime.js"),q=function(y){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},y,{children:Object(A.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(A.jsx)("path",{stroke:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(A.jsx)("path",{fill:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};q.displayName="IcBackArrow",q.displayName="@travelmakers-design/core/IcBackArrow";var X=function(y){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},y,{children:Object(A.jsx)("g",{stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",children:Object(A.jsx)("path",{d:"M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212"})})}))};X.displayName="IcClose",X.displayName="@travelmakers-design/core/IcClose";var U=["component","open","ModalContainerClassName","onClose","containerStyle","wrapperStyle","modalPopup","centerPopup","children","className","overrideStyles","title","handleAgree","agreeText","backIcon","__staticSelector"];function D(p,y){if(p==null)return{};var l=j(p,y),_,h;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);for(h=0;h<f.length;h++)_=f[h],!(y.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,_)||(l[_]=p[_]))}return l}function j(p,y){if(p==null)return{};var l={},_=Object.keys(p),h,f;for(f=0;f<_.length;f++)h=_[f],!(y.indexOf(h)>=0)&&(l[h]=p[h]);return l}var b=Object(Q.forwardRef)(function(p,y){var l=p.component,_=p.open,h=p.ModalContainerClassName,f=p.onClose,a=p.containerStyle,O=a===void 0?{}:a,I=p.wrapperStyle,g=I===void 0?{}:I,s=p.modalPopup,n=s===void 0?!1:s,t=p.centerPopup,r=t===void 0?!1:t,u=p.children,x=p.className,d=p.overrideStyles,c=p.title,m=c===void 0?"":c,i=p.handleAgree,o=p.agreeText,v=o===void 0?"\uB3D9\uC758\uD558\uAE30":o,T=p.backIcon,C=T===void 0?!0:T,R=p.__staticSelector,k=R===void 0?"span":R,N=D(p,U),V=l||"span",P=E({},{overrideStyles:d,name:"span"}),F=P.classes,H=P.cx,ae=document.createElement("div");return document.body.appendChild(ae),Object(G.b)(_),Object(A.jsx)(A.Fragment,{children:_?J.a.createPortal(Object(A.jsx)(V,Object.assign({ref:y,className:H(F.container,x)},N,{children:Object(A.jsx)("div",{className:H(F.absoluteContainer,(n?"modalPopup":"")+(r?" popup":"")),style:O,children:Object(A.jsx)("div",{onClick:f,className:H(F.closeContainer,(n?"modalPopup":"")+(r?" popup":"")),children:Object(A.jsx)("div",{className:H(F.modalContainer,h||(n?" modalPopup":"")+(r?" popup":"")),style:g,children:Object(A.jsxs)("div",{className:H(F.modalContentsContainer),children:[Object(A.jsxs)("div",{className:H(F.modalContents,"modalPopup Agreement"),children:[Object(A.jsxs)("div",{className:H(F.modalHeader,"modalPopup Agreement"),children:[Object(A.jsx)(q,{onClick:f,className:H(F.modalBackIcon,"modalPopup Agreement")}),Object(A.jsx)("span",{className:H(F.modalTitle,"modalPopup Agreement"),children:m}),Object(A.jsx)(X,{onClick:f,className:H(F.modalCloseIcon,"modalPopup Agreement")})]}),Object(A.jsx)("div",{className:H(F.modalContentText),children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:u}})})]}),Object(A.jsx)("div",{className:H(F.modalAbsolute),children:Object(A.jsx)(Z.a,{fullWidth:!0,onClick:i,children:v})})]})})})})})),document.body):null})});b.displayName="@travelmakers-design/core/Modal"},"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),f=e("./node_modules/react/index.js"),a=e.n(f),O=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),I=e("./node_modules/react/jsx-runtime.js"),g=e.n(I);function s(i,o){return x(i)||u(i,o)||t(i,o)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(i,o){if(!!i){if(typeof i=="string")return r(i,o);var v=Object.prototype.toString.call(i).slice(8,-1);if(v==="Object"&&i.constructor&&(v=i.constructor.name),v==="Map"||v==="Set")return Array.from(i);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return r(i,o)}}function r(i,o){(o==null||o>i.length)&&(o=i.length);for(var v=0,T=new Array(o);v<o;v++)T[v]=i[v];return T}function u(i,o){var v=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(v!=null){var T=[],C=!0,R=!1,k,N;try{for(v=v.call(i);!(C=(k=v.next()).done)&&(T.push(k.value),!(o&&T.length===o));C=!0);}catch(V){R=!0,N=V}finally{try{!C&&v.return!=null&&v.return()}finally{if(R)throw N}}return T}}function x(i){if(Array.isArray(i))return i}var d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Modal } from \\"../Modal\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React, { useState } from \\"react\\";\\nimport { Button } from \\"../../Button\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Modal\\",\\n  component: Modal,\\n  argTypes: {\\n    open: {\\n      defaultValue: false,\\n      description: \\"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    modalPopup: {\\n      defaultValue: false,\\n      description: \\"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    centerPopup: {\\n      defaultValue: false,\\n      description: \\"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    ModalContainerClassName: {\\n      defaultValue: \\"\\",\\n      description: \\"Container\uC758 ClassName \uC9C0\uC815\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\\",\\n      description: \\"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    agreeText: {\\n      defaultValue: \\"\uB3D9\uC758\uD558\uAE30\\",\\n      description: \\"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":97},"endLoc":{"col":1,"line":114},"startBody":{"col":23,"line":97},"endBody":{"col":1,"line":114}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Modal } from "../Modal";
import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../Button";

export default {
  title: "@travelmakers-design/core/Component/Modal",
  component: Modal,
  argTypes: {
    open: {
      defaultValue: false,
      description: "Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    modalPopup: {
      defaultValue: false,
      description: "\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    centerPopup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    ModalContainerClassName: {
      defaultValue: "",
      description: "Container\uC758 ClassName \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    agreeText: {
      defaultValue: "\uB3D9\uC758\uD558\uAE30",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
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
  },
} as Meta;

export const Default = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 24, display: "flex", height: 500 }}>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        style={{ zIndex: 10001 }}
      >
        \uBAA8\uB2EC
      </Button>
      <Modal {...props} open={open} title={"title"}>
        content
      </Modal>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}},d=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Modal } from "../Modal";
import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../Button";

export default {
  title: "@travelmakers-design/core/Component/Modal",
  component: Modal,
  argTypes: {
    open: {
      defaultValue: false,
      description: "Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    modalPopup: {
      defaultValue: false,
      description: "\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    centerPopup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    ModalContainerClassName: {
      defaultValue: "",
      description: "Container\uC758 ClassName \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    agreeText: {
      defaultValue: "\uB3D9\uC758\uD558\uAE30",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
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
  },
} as Meta;

export const Default = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 24, display: "flex", height: 500 }}>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        style={{ zIndex: 10001 }}
      >
        \uBAA8\uB2EC
      </Button>
      <Modal {...props} open={open} title={"title"}>
        content
      </Modal>
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:97},endLoc:{col:1,line:114},startBody:{col:23,line:97},endBody:{col:1,line:114}}};S.default={title:"@travelmakers-design/core/Component/Modal",component:h.a,argTypes:{open:{defaultValue:!1,description:"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},modalPopup:{defaultValue:!1,description:"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",table:{type:{summary:"boolean"}},control:{type:"boolean"}},centerPopup:{defaultValue:!1,description:"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",table:{type:{summary:"boolean"}},control:{type:"boolean"}},ModalContainerClassName:{defaultValue:"",description:"Container\uC758 ClassName \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},agreeText:{defaultValue:"\uB3D9\uC758\uD558\uAE30",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Modal } from \\"../Modal\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React, { useState } from \\"react\\";\\nimport { Button } from \\"../../Button\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Modal\\",\\n  component: Modal,\\n  argTypes: {\\n    open: {\\n      defaultValue: false,\\n      description: \\"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    modalPopup: {\\n      defaultValue: false,\\n      description: \\"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    centerPopup: {\\n      defaultValue: false,\\n      description: \\"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    ModalContainerClassName: {\\n      defaultValue: \\"\\",\\n      description: \\"Container\uC758 ClassName \uC9C0\uC815\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\\",\\n      description: \\"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    agreeText: {\\n      defaultValue: \\"\uB3D9\uC758\uD558\uAE30\\",\\n      description: \\"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":97},"endLoc":{"col":1,"line":114},"startBody":{"col":23,"line":97},"endBody":{"col":1,"line":114}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Modal } from "../Modal";
import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../Button";

export default {
  title: "@travelmakers-design/core/Component/Modal",
  component: Modal,
  argTypes: {
    open: {
      defaultValue: false,
      description: "Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    modalPopup: {
      defaultValue: false,
      description: "\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    centerPopup: {
      defaultValue: false,
      description: "\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    ModalContainerClassName: {
      defaultValue: "",
      description: "Container\uC758 ClassName \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    agreeText: {
      defaultValue: "\uB3D9\uC758\uD558\uAE30",
      description: "Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
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
  },
} as Meta;

export const Default = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 24, display: "flex", height: 500 }}>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        style={{ zIndex: 10001 }}
      >
        \uBAA8\uB2EC
      </Button>
      <Modal {...props} open={open} title={"title"}>
        content
      </Modal>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}}},docs:{page:function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(_.g,{}),Object(I.jsx)(_.f,{}),Object(I.jsx)(_.b,{}),Object(I.jsx)(_.d,{}),Object(I.jsx)(_.a,{story:_.c}),Object(I.jsx)(_.e,{})]})}}}};var m=function(o){var v=Object(f.useState)(!1),T=s(v,2),C=T[0],R=T[1];return Object(I.jsxs)("div",{style:{padding:24,display:"flex",height:500},children:[Object(I.jsx)(O.a,{onClick:function(){R(function(N){return!N})},style:{zIndex:10001},children:"\uBAA8\uB2EC"}),Object(I.jsx)(h.a,Object.assign({},o,{open:C,title:"title",children:"content"}))]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 24, display: "flex", height: 500 }}>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        style={{ zIndex: 10001 }}
      >
        \uBAA8\uB2EC
      </Button>
      <Modal {...props} open={open} title={"title"}>
        content
      </Modal>
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return D});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=function(b){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:b.fontSizes.h4,lineHeight:b.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:b.fontSizes.h1,lineHeight:b.lineHeights.h1+"px"}}},M=Object(J.a)(function(j,b){var p=b.color,y=p===void 0?"navy":p,l=b.indicator,_=l===void 0?!1:l;return{root:{display:"flex",alignItems:"center"},indicator:{display:_?"block":"none",fontFamily:"PT Serif",fontSize:"20px",fontWeight:"700",color:y==="white"?"white":j.colors.navy1,marginRight:"16px",letterSpacing:"1.6px"},barContainer:{display:"block",position:"relative",width:"30vw",maxWidth:"456px",height:"2px",borderRadius:"3px",backgroundColor:y==="white"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.1)"},barActive:{display:"block",position:"absolute",width:"0%",height:"2px",borderRadius:"3px",backgroundColor:y==="white"?j.colors.white:j.colors.navy1}}}),z=e("./node_modules/react/jsx-runtime.js"),Y=["color","indicator","totalPage","currentPage","activeBarTransition","title","className","co","overrideStyles"];function E(j,b){if(j==null)return{};var p=Z(j,b),y,l;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(j);for(l=0;l<_.length;l++)y=_[l],!(b.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(j,y)||(p[y]=j[y]))}return p}function Z(j,b){if(j==null)return{};var p={},y=Object.keys(j),l,_;for(_=0;_<y.length;_++)l=y[_],!(b.indexOf(l)>=0)&&(p[l]=j[l]);return p}var A=Object(K.forwardRef)(function(j,b){var p=j.color,y=p===void 0?"navy":p,l=j.indicator,_=l===void 0?!1:l,h=j.totalPage,f=h===void 0?1:h,a=j.currentPage,O=a===void 0?1:a,I=j.activeBarTransition,g=I===void 0?!1:I,s=j.title,n=j.className,t=j.co,r=j.overrideStyles,u=E(j,Y),x=Object(Q.c)(),d=M({color:y,indicator:_},{overrideStyles:r,name:"Progress"}),c=d.classes,m=d.cx;return Object(z.jsxs)(B.a,Object.assign({ref:b,className:m(c.root,n),co:t},u,{children:[Object(z.jsxs)("span",{className:m(c.indicator),children:[O,"/",f]}),Object(z.jsx)("div",{className:m(c.barContainer),children:Object(z.jsx)("div",{className:m(c.barActive),style:{width:O/f*100+"%",transition:g?"width 3s linear":"none"}})})]}))});A.displayName="@travelmakers-design/core/Header/Section";var q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Progress } from \\"../Progress\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Progress\\",\\n  component: Progress,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    indicator: {\\n      defaultValue: false,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    currentPage: {\\n      defaultValue: 1,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    activeBarTransition: {\\n      defaultValue: false,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":57},"endLoc":{"col":1,"line":63},"startBody":{"col":23,"line":57},"endBody":{"col":1,"line":63}}};
    
import React from "react";
import { Progress } from "../Progress";

export default {
  title: "@travelmakers-design/core/Component/Progress",
  component: Progress,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    indicator: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    activeBarTransition: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,X={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},q=`import React from "react";
import { Progress } from "../Progress";

export default {
  title: "@travelmakers-design/core/Component/Progress",
  component: Progress,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    indicator: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    activeBarTransition: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};
`,X={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}},U=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Progress } from \\"../Progress\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Progress\\",\\n  component: Progress,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    indicator: {\\n      defaultValue: false,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    currentPage: {\\n      defaultValue: 1,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    activeBarTransition: {\\n      defaultValue: false,\\n      description: \\"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":57},"endLoc":{"col":1,"line":63},"startBody":{"col":23,"line":57},"endBody":{"col":1,"line":63}}};
    
import React from "react";
import { Progress } from "../Progress";

export default {
  title: "@travelmakers-design/core/Component/Progress",
  component: Progress,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    indicator: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    activeBarTransition: {
      defaultValue: false,
      description: "Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Progress",component:A,argTypes:{color:{defaultValue:"navy",description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},indicator:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},D=function(b){return Object(z.jsx)("div",{style:{padding:24},children:Object(z.jsx)(A,Object.assign({},b))})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
}`}},D.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),D=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),j=e("./node_modules/react/jsx-runtime.js"),b=function(v){return Object(j.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(j.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(j.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};b.displayName="SearchIcon",b.displayName="@travelmakers-design/core/SearchIcon";var p=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),_=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),h={xsmall:12,small:14,medium:14,large:14,xlarge:16},f=Object(l.a)(function(o,v){var T=v.multiline,C=v.roundness,R=v.invalid,k=v.width,N=v.descriptionType,V=o.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(_.b)(o),{height:T?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:T?o.lineHeight:o.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:o.fontSizes.b2,width:k?k+"px":"100%",color:o.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:C?o.radius.round:2,border:"1px solid "+o.colors.gray5,backgroundColor:o.colors.white,"&:focus, &:focus-within":{outline:"none",color:o.colors.gray1,border:"1px solid "+o.colors.gray1},"&:disabled":{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+V,"&::placeholder":{opacity:1}},disabled:{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},fill:{backgroundColor:o.colors.gray6,color:o.colors.navy3,border:"0px solid "+o.colors.gray5,"&:disabled":{backgroundColor:o.colors.gray6,border:"1px solid "+o.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:o.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),a=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function O(o,v){return t(o)||n(o,v)||g(o,v)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(o,v){if(!!o){if(typeof o=="string")return s(o,v);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return s(o,v)}}function s(o,v){(v==null||v>o.length)&&(v=o.length);for(var T=0,C=new Array(v);T<v;T++)C[T]=o[T];return C}function n(o,v){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,N,V;try{for(T=T.call(o);!(R=(N=T.next()).done)&&(C.push(N.value),!(v&&C.length===v));R=!0);}catch(P){k=!0,V=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw V}}return C}}function t(o){if(Array.isArray(o))return o}function r(o,v){if(o==null)return{};var T=u(o,v),C,R;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(o);for(R=0;R<k.length;R++)C=k[R],!(v.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,C)||(T[C]=o[C]))}return T}function u(o,v){if(o==null)return{};var T={},C=Object.keys(o),R,k;for(k=0;k<C.length;k++)R=C[k],!(v.indexOf(R)>=0)&&(T[R]=o[R]);return T}var x=Object(K.forwardRef)(function(o,v){var T,C,R=o.component,k=o.width,N=o.label,V=o.line,P=V===void 0?!0:V,F=o.description,H=o.descriptionType,ae=H===void 0?"description":H,ue=o.icon,ge=ue===void 0?Object(j.jsx)(b,{}):ue,me=o.rightSectionWidth,L=me===void 0?48:me,ee=o.rightSection,re=ee===void 0?Object(j.jsx)(D.a,{}):ee,pe=o.rightSectionProps,be=pe===void 0?{}:pe,he=o.wrapperProps,je=o.invalid,le=je===void 0?!1:je,se=o.required,ye=se===void 0?!1:se,ie=o.disabled,Oe=ie===void 0?!1:ie,ke=o.multiline,Ie=ke===void 0?!1:ke,Re=o.roundness,Pe=Re===void 0?!0:Re,Be=o.className,Le=o.style,Ve=o.co,de=o.overrideStyles,ne=o.value,fe=o.onChange,ve=r(o,a),ce=Object(U.c)(),_e=Object(K.useState)(ne),Te=O(_e,2),Ee=Te[0],De=Te[1],xe=f({roundness:Pe,multiline:Ie,invalid:le,width:k,descriptionType:ae},{overrideStyles:de,name:"Input"}),Se=xe.classes,Ae=xe.cx,we=R||"input",He=function(ze){!Oe&&We({target:{value:""}})},We=function(ze){var Fe;De(ze==null||(Fe=ze.target)===null||Fe===void 0?void 0:Fe.value),fe&&fe(ze)};return Object(j.jsxs)(y.a,{style:{width:k?k+"px":"100%"},children:[N&&Object(j.jsx)(p.a,{level:"b2",family:"Pretendard",color:ce.colors.gray1,style:{marginBottom:4},children:N}),Object(j.jsxs)(y.a,Object.assign({className:Ae(Se.wrapper,Be),co:Ve,style:Le},he,{children:[ge&&Object(j.jsx)("div",{className:Ae(Se.icon,(T={},T[Se.disabled]=Oe,T)),children:ge}),Object(j.jsx)(we,Object.assign({},ve,{ref:v,value:Ee,onChange:We,className:Ae(Se.input,(C={},C[Se.fill]=!P,C[Se.withIcon]=ge,C[Se.invalid]=le,C[Se.disabled]=Oe,C)),required:ye,disabled:Oe,style:{paddingRight:re?L:ce.spacing.small}})),re&&Object(j.jsx)("div",Object.assign({},be,{style:Object.assign({},be.style,{paddingRight:32}),className:Ae(Se.rightSection,be.className),onClick:He,children:re}))]})),F&&ae==="description"?Object(j.jsx)(p.a,{level:"b3",family:"Pretendard",color:le?ce.colors.red2:ce.colors.navy3,style:{marginTop:4},children:F}):le&&Object(j.jsx)(p.a,{level:"b3",family:"Pretendard",color:ae==="error"?ce.colors.red2:ae==="success"?ce.colors.green3:ce.colors.navy3,style:{marginTop:4},children:F})]})});x.displayName="@travelmakers-design/core/SearchInput";var d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { SearchInput } from \\"../SearchInput\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/SearchInput\\",\\n  component: SearchInput,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    line: {\\n      defaultValue: true,\\n      description: \\"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":53},"endLoc":{"col":1,"line":59},"startBody":{"col":23,"line":53},"endBody":{"col":1,"line":59}}};
    
import React from "react";
import { SearchInput } from "../SearchInput";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/SearchInput",
  component: SearchInput,
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
    placeholder: {
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    line: {
      defaultValue: true,
      description: "SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",
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
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},d=`import React from "react";
import { SearchInput } from "../SearchInput";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/SearchInput",
  component: SearchInput,
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
    placeholder: {
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    line: {
      defaultValue: true,
      description: "SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",
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
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},m=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { SearchInput } from \\"../SearchInput\\";\\n// import { Tooltip } from \\"../../Tooltip\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/SearchInput\\",\\n  component: SearchInput,\\n  argTypes: {\\n    width: {\\n      defaultValue: 328,\\n      description: \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    placeholder: {\\n      defaultValue: \\"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\\",\\n      description:\\n        \\"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    line: {\\n      defaultValue: true,\\n      description: \\"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":53},"endLoc":{"col":1,"line":59},"startBody":{"col":23,"line":53},"endBody":{"col":1,"line":59}}};
    
import React from "react";
import { SearchInput } from "../SearchInput";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/SearchInput",
  component: SearchInput,
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
    placeholder: {
      defaultValue: "\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      description:
        "Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    line: {
      defaultValue: true,
      description: "SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",
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
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:x,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},i=function(v){return Object(j.jsx)("div",{style:{padding:24},children:Object(j.jsx)(x,Object.assign({},v))})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return U});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=Object(B.a)(function(D,j){var b=j.size,p=j.color,y=p===void 0?D.colorScheme==="light"?D.colors.black:D.colors.white:p in D.palettes?(D.colorScheme==="light",D.palettes[p][0]):p in D.colors?D.colors[p]:p;return{root:{position:"relative",display:"inline-block",width:b in J.a?J.a[b]:b,height:b in J.a?J.a[b]:b,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:y},circle:{fill:y}}}}),M=e("./node_modules/react/jsx-runtime.js"),z=["size","color","className","co","overrideStyles"];function Y(D,j){if(D==null)return{};var b=E(D,j),p,y;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(D);for(y=0;y<l.length;y++)p=l[y],!(j.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,p)||(b[p]=D[p]))}return b}function E(D,j){if(D==null)return{};var b={},p=Object.keys(D),y,l;for(l=0;l<p.length;l++)y=p[l],!(j.indexOf(y)>=0)&&(b[y]=D[y]);return b}var Z=Object(K.forwardRef)(function(D,j){var b=D.size,p=b===void 0?"medium":b,y=D.color,l=D.className,_=D.co,h=D.overrideStyles,f=Y(D,z),a=w({size:p,color:y},{overrideStyles:h,name:"Spinner"}),O=a.classes,I=a.cx,g=Object(M.jsx)("i",{className:O.inner,children:Object(M.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(M.jsxs)("g",{transform:"translate(1 1)",children:[Object(M.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(M.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(M.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(M.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(M.jsx)(Q.a,Object.assign({ref:j,className:I(O.root,l),co:_},f,{children:g}))});Z.displayName="@travelmakers-design/core/Spinner";var A=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,q={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},A=`import React from "react";
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
`,q={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},X=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:Z,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},U=function(j){return Object(M.jsx)(Z,Object.assign({},j))};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return x});var $=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.fill.js"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),D=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),j=function(c){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.caption+"px",fontSize:c.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.b3+"px",fontSize:c.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.b2+"px",fontSize:c.fontSizes.b2}}},b=function(c,m){return{small:{padding:m?"2px 8px":"0px 8px"},medium:{padding:m?"2px 12px":"0px 12px"},large:{padding:m?"3px 12px":"0px 16px"}}},p=Object(U.a)(function(d,c){var m,i=c.color,o=c.roundness,v=c.size,T=c.fill;return{container:Object.assign({},Object(D.b)(d),j(d)[v],b(d,T)[v],(m={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:i==="gray"?d.colors.navy1:d.colors.white,marginRight:"6px",gap:"8px",borderRadius:o&&d.radius.round,backgroundColor:i==="green"?d.colors.green3:i==="blue"?d.colors.point_sky1:i==="purple"?d.colors.point_purple1:d.colors.gray6},m["&:last-child"]={marginRight:0},m)),line:{color:i==="green"?d.colors.green3:i==="blue"?d.colors.point_sky1:i==="purple"?d.colors.point_purple1:d.colors.gray3,background:"inherit",border:"1px solid"},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"}}}),y=e("./node_modules/react/jsx-runtime.js"),l=["component","size","color","roundness","fill","children","className","overrideStyles","__staticSelector"];function _(d,c){if(d==null)return{};var m=h(d,c),i,o;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(d);for(o=0;o<v.length;o++)i=v[o],!(c.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,i)||(m[i]=d[i]))}return m}function h(d,c){if(d==null)return{};var m={},i=Object.keys(d),o,v;for(v=0;v<i.length;v++)o=i[v],!(c.indexOf(o)>=0)&&(m[o]=d[o]);return m}var f=Object(Z.forwardRef)(function(d,c){var m=d.component,i=d.size,o=i===void 0?"small":i,v=d.color,T=v===void 0?"green":v,C=d.roundness,R=C===void 0?!1:C,k=d.fill,N=k===void 0?!0:k,V=d.children,P=d.className,F=d.overrideStyles,H=d.__staticSelector,ae=H===void 0?"span":H,ue=_(d,l),ge=m||"span",me=p({color:T,roundness:R,fill:N,size:o},{overrideStyles:F,name:"span"}),L=me.classes,ee=me.cx;return Object(y.jsx)(ge,Object.assign({ref:c,className:ee(L.container,L[T],!N&&L.line,P)},ue,{children:V}))});f.displayName="@travelmakers-design/core/Tag";function a(d){return s(d)||g(d)||I(d)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(d,c){if(!!d){if(typeof d=="string")return n(d,c);var m=Object.prototype.toString.call(d).slice(8,-1);if(m==="Object"&&d.constructor&&(m=d.constructor.name),m==="Map"||m==="Set")return Array.from(d);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(d,c)}}function g(d){if(typeof Symbol!="undefined"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}function s(d){if(Array.isArray(d))return n(d)}function n(d,c){(c==null||c>d.length)&&(c=d.length);for(var m=0,i=new Array(c);m<c;m++)i[m]=d[m];return i}var t=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"green\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fill: {\\n      defaultValue: true,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":53},"endLoc":{"col":1,"line":61},"startBody":{"col":23,"line":53},"endBody":{"col":1,"line":61}}};
    
import React from "react";
import { Tag } from "../Tag";

export default {
  title: "@travelmakers-design/core/Component/Tag",
  component: Tag,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "green",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["green", "blue", "purple", "gray"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fill: {
      defaultValue: true,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:69},startBody:{col:23,line:61},endBody:{col:1,line:69}}},t=`import React from "react";
import { Tag } from "../Tag";

export default {
  title: "@travelmakers-design/core/Component/Tag",
  component: Tag,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "green",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["green", "blue", "purple", "gray"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fill: {
      defaultValue: true,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
};
`,r={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:61},startBody:{col:23,line:53},endBody:{col:1,line:61}}},u=S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"green\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fill: {\\n      defaultValue: true,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":53},"endLoc":{"col":1,"line":61},"startBody":{"col":23,"line":53},"endBody":{"col":1,"line":61}}};
    
import React from "react";
import { Tag } from "../Tag";

export default {
  title: "@travelmakers-design/core/Component/Tag",
  component: Tag,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "green",
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["green", "blue", "purple", "gray"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fill: {
      defaultValue: true,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:69},startBody:{col:23,line:61},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/Tag",component:f,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},x=function(c){return Object(y.jsx)("div",{style:{padding:24,display:"flex"},children:a(Array(10).keys()).map(function(m,i){return Object(y.jsxs)(f,Object.assign({},c,{children:["Tag",i+1]}))})})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return y});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),G=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),Y=function(_){return{xsmall:{fontWeight:"normal",lineHeight:_.lineHeights.h6+"px",fontSize:_.fontSizes.h6},small:{fontWeight:"normal",lineHeight:_.lineHeights.h4+"px",fontSize:_.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:_.lineHeights.h2+"px",fontSize:_.fontSizes.h2},large:{fontWeight:"normal",lineHeight:_.lineHeights.h1+"px",fontSize:_.fontSizes.h1}}},E=function(_){return{display:_?"block":"inline-block",width:_?"100%":"auto"}},Z=Object(M.a)(function(l,_,h){var f,a,O=_.color,I=_.size,g=_.fullWidth,s=_.family,n=_.underline,t=_.leftIcon,r=_.rightIcon,u=h("loading"),x=h("inner"),d=h("spinner"),c=O||l.colors.navy1;return{loading:(f={ref:u,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},f["."+x]={opacity:0},f["."+d]={display:"flex"},f),solid:(a={color:c==="white"?l.colors.white:l.colors.navy1,"&:not(:disabled):hover":{color:c==="white"?l.colors.white:l.colors.navy1},"&:not(:disabled):active":{color:c==="white"?l.colors.gray6:l.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},a["&:disabled:not(."+u+")"]={color:l.colors.gray5},a),root:Object.assign({},E(g),Object(z.b)(l),Y(l)[I],{fontFamily:""+s,borderRadius:l.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:n?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:x,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function X(l,_){if(l==null)return{};var h=U(l,_),f,a;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(a=0;a<O.length;a++)f=O[a],!(_.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,f)||(h[f]=l[f]))}return h}function U(l,_){if(l==null)return{};var h={},f=Object.keys(l),a,O;for(O=0;O<f.length;O++)a=f[O],!(_.indexOf(a)>=0)&&(h[a]=l[a]);return h}var D=Object(W.forwardRef)(function(l,_){var h=l.children,f=l.component,a=l.family,O=a===void 0?"Pretendard":a,I=l.size,g=I===void 0?"medium":I,s=l.color,n=s===void 0?"navy":s,t=l.fullWidth,r=t===void 0?!1:t,u=l.type,x=u===void 0?"button":u,d=l.disabled,c=d===void 0?!1:d,m=l.underline,i=m===void 0?!1:m,o=l.leftIcon,v=l.rightIcon,T=l.className,C=l.co,R=l.overrideStyles,k=X(l,q),N=Object(B.c)(),V=Z({color:n,size:g,fullWidth:r,family:O,underline:i,leftIcon:o,rightIcon:v},{overrideStyles:R,name:"Button"}),P=V.classes,F=V.cx;return Object(A.jsx)(J.a,Object.assign({component:f||"button",ref:_,type:x,disabled:c,className:F(P.root,P.solid,T),co:C,onTouchStart:function(){}},k,{children:Object(A.jsxs)("div",{className:P.inner,children:[o&&Object(A.jsxs)("span",{className:F(P.icon,P.leftIcon),children:[o,"\xA0"]}),Object(A.jsx)("span",{className:P.label,children:h}),v&&Object(A.jsxs)("span",{className:F(P.icon,P.rightIcon),children:["\xA0",v]})]})}))});D.displayName="@travelmakers-design/core/TextButton";var j=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},j=`import {
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
`,b={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},p=S.default={title:"@travelmakers-design/core/Component/TextButton",component:D,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(K.g,{}),Object(A.jsx)(K.f,{}),Object(A.jsx)(K.b,{}),Object(A.jsx)(K.d,{}),Object(A.jsx)(K.a,{story:K.c}),Object(A.jsx)(K.e,{})]})}},actions:{handles:["click button"]}}},y=function(_){return Object(A.jsx)(D,Object.assign({},_,{children:"Button"}))};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return j});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.string.italics.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z={h1:{},small:{},medium:{},large:{}},Y=function(p){return{caption:{lineHeight:p.lineHeights.caption+"px",fontSize:p.fontSizes.caption},b3:{lineHeight:p.lineHeights.b3+"px",fontSize:p.fontSizes.b3},b2:{lineHeight:p.lineHeights.b2+"px",fontSize:p.fontSizes.b2},b1:{lineHeight:p.lineHeights.b1+"px",fontSize:p.fontSizes.b1},h6:{lineHeight:p.lineHeights.h6+"px",fontSize:p.fontSizes.h6},h5:{lineHeight:p.lineHeights.h5+"px",fontSize:p.fontSizes.h5},h4:{lineHeight:p.lineHeights.h4+"px",fontSize:p.fontSizes.h4},h3:{lineHeight:p.lineHeights.h3+"px",fontSize:p.fontSizes.h3},h2:{lineHeight:p.lineHeights.h2+"px",fontSize:p.fontSizes.h2},h1:{lineHeight:p.lineHeights.h1+"px",fontSize:p.fontSizes.h1}}},E=Object.keys(z).reduce(function(b,p){return b[p]=z[p].height,b},{}),Z=function(p){return{display:"block",width:"100%"}},A=Object(M.a)(function(b,p,y){var l,_,h=p.family,f=p.level,a=p.textAlign,O=p.disabled,I=p.strong,g=p.italic,s=p.underline,n=p.color,t=p.mobile,r=p.tablet,u=y("loading"),x=y("inner"),d=y("spinner");return{loading:(l={ref:u,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},l["."+x]={opacity:0},l["."+d]={display:"flex"},l),solid:{fontWeight:I?h==="Noto Serif KR"?600:700:400,fontStyle:g?"italic":"normal",textDecoration:s?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},z[f],Z(),Y(b)[f],(_={fontFamily:""+h,color:O?b.colors.gray5:n||b.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+a,WebkitAppearance:"none",outline:"none",border:"none"},_[""+b.media.mobile]=Object.assign({},Y(b)[t]),_[""+b.media.tablet]=Object.assign({},Y(b)[r]),_)),inner:{ref:x,height:"100%",overflow:"visible"},label:{height:"100%"}}}),q=e("./node_modules/react/jsx-runtime.js"),X=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function U(b,p){if(b==null)return{};var y=D(b,p),l,_;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(_=0;_<h.length;_++)l=h[_],!(p.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,l)||(y[l]=b[l]))}return y}function D(b,p){if(b==null)return{};var y={},l=Object.keys(b),_,h;for(h=0;h<l.length;h++)_=l[h],!(p.indexOf(_)>=0)&&(y[_]=b[_]);return y}var j=Object(B.forwardRef)(function(b,p){var y=b.children,l=b.component,_=b.family,h=_===void 0?"Noto Serif KR":_,f=b.level,a=f===void 0?"h1":f,O=b.mobileLevel,I=b.tabletLevel,g=b.textAlign,s=g===void 0?"left":g,n=b.disabled,t=n===void 0?!1:n,r=b.strong,u=r===void 0?!1:r,x=b.italic,d=x===void 0?!1:x,c=b.underline,m=c===void 0?!1:c,i=b.color,o=b.className,v=b.co,T=b.overrideStyles,C=U(b,X),R=Object(Q.c)(),k=A({family:h,level:a,disabled:t,strong:u,italic:d,underline:m,textAlign:s,color:i,mobile:O,tablet:I},{overrideStyles:T,name:"span"}),N=k.classes,V=k.cx;return Object(q.jsx)(J.a,Object.assign({component:l||"span",ref:p,type:"span",disabled:t,className:V(N.root,N.solid,o),co:v,onTouchStart:function(){}},C,{children:Object(q.jsx)("div",{className:N.inner,children:Object(q.jsx)("span",{className:N.label,children:y})})}))});j.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./node_modules/react/index.js"),G=e.n(te),Q=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),B=e("./node_modules/react/jsx-runtime.js"),J=e.n(B),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},w=`import {
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
`,M={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};S.default={title:"@travelmakers-design/core/General/Typography",component:Q.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(W.g,{}),Object(B.jsx)(W.f,{}),Object(B.jsx)(W.b,{}),Object(B.jsx)(W.d,{}),Object(B.jsx)(W.a,{story:W.c}),Object(B.jsx)(W.e,{})]})}}}};var z=function(E){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Q.a,Object.assign({},E,{level:"h1",children:"h1. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"h2",children:"h2. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"h3",children:"h3. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"h4",children:"h4. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"h5",children:"h5. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"h6",children:"h6. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"b1",children:"b1. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"b2",children:"b2. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"b3",children:"b3. Travelmakers Design"})),Object(B.jsx)(Q.a,Object.assign({},E,{level:"caption",children:"caption. Travelmakers Design"}))]})};z.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,S,e){"use strict";e.d(S,"a",function(){return l});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.array.map.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(z),E=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),q=e.n(A),X=e("./node_modules/react/jsx-runtime.js"),U=e.n(X),D=["component","className","style","co"];function j(_,h){if(_==null)return{};var f=b(_,h),a,O;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(_);for(O=0;O<I.length;O++)a=I[O],!(h.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,a)||(f[a]=_[a]))}return f}function b(_,h){if(_==null)return{};var f={},a=Object.keys(_),O,I;for(I=0;I<a.length;I++)O=a[I],!(h.indexOf(O)>=0)&&(f[O]=_[O]);return f}function p(_,h){return typeof _=="function"?_(h):_}function y(_,h){var f=Object(E.a)(),a=f.css,O=f.cx,I=Object(Z.c)();return Array.isArray(_)?O(h,_.map(function(g){return a(p(g,I))})):O(h,a(p(_,I)))}var l=Object(A.forwardRef)(function(_,h){var f=_.component,a=_.className,O=_.style,I=_.co,g=j(_,D),s=f||"div";return Object(X.jsx)(s,Object.assign({ref:h,className:y(I,a),style:O},g))});l.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},J=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:G.a};var M=function(){return Object(Q.jsx)(G.a,{co:function(E){return{width:100,height:100,backgroundColor:E.colors.gray3}}})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},M.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return $});var $={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return I});var $=e("./node_modules/core-js/modules/es.string.replace.js"),K=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),te=e("./node_modules/core-js/modules/es.number.constructor.js"),G=e("./node_modules/core-js/modules/es.parse-int.js"),Q=e("./node_modules/core-js/modules/es.array.map.js"),B=e("./node_modules/core-js/modules/es.string.split.js"),J=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),E=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.from.js");function j(g,s){return _(g)||l(g,s)||p(g,s)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(g,s){if(!!g){if(typeof g=="string")return y(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(g,s)}}function y(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function l(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,u=!1,x,d;try{for(n=n.call(g);!(r=(x=n.next()).done)&&(t.push(x.value),!(s&&t.length===s));r=!0);}catch(c){u=!0,d=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(u)throw d}}return t}}function _(g){if(Array.isArray(g))return g}function h(g){var s=g.replace("#","");return typeof s=="string"&&s.length===6&&!Number.isNaN(Number("0x"+s))}function f(g){var s=g.replace("#",""),n=parseInt(s,16),t=n>>16&255,r=n>>8&255,u=n&255;return{r:t,g:r,b:u,a:1}}function a(g){var s=g.replace(/[^0-9,.]/g,"").split(",").map(Number),n=j(s,4),t=n[0],r=n[1],u=n[2],x=n[3];return{r:t,g:r,b:u,a:x||1}}function O(g){return h(g)?f(g):g.startsWith("rgb")?a(g):{r:0,g:0,b:0,a:1}}var I=function(s,n){var t=O(s),r=t.r,u=t.g,x=t.b;return"rgba("+r+", "+u+", "+x+", "+n+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return G});var $=e("./node_modules/core-js/modules/es.array.concat.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=function(B){var J=Object(W.useRef)(B);return Object(W.useEffect)(function(){J.current=B},[B]),Object(W.useMemo)(function(){return function(){for(var w,M=arguments.length,z=new Array(M),Y=0;Y<M;Y++)z[Y]=arguments[Y];return(w=J.current)===null||w===void 0?void 0:w.call.apply(w,[J].concat(z))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},J=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var M=function(){var Y=Object(G.a)(function(){alert("Click away from red box!")});return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{ref:Y,style:{width:100,height:100,backgroundColor:"red"}})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
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
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return I});var $=e("./node_modules/core-js/modules/es.array.slice.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.function.name.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.array.from.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.is-array.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y),_=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function h(g,s){var n=typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(!n){if(Array.isArray(g)||(n=f(g))||s&&g&&typeof g.length=="number"){n&&(g=n);var t=0,r=function(){};return{s:r,n:function(){return t>=g.length?{done:!0}:{done:!1,value:g[t++]}},e:function(m){throw m},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,x=!1,d;return{s:function(){n=n.call(g)},n:function(){var m=n.next();return u=m.done,m},e:function(m){x=!0,d=m},f:function(){try{!u&&n.return!=null&&n.return()}finally{if(x)throw d}}}}function f(g,s){if(!!g){if(typeof g=="string")return a(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(g,s)}}function a(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}var O=["mousedown","touchstart"],I=function(s){var n=Object(y.useRef)(),t=Object(_.a)(s);return Object(y.useEffect)(function(){var r=function(m){var i=n.current;i&&!i.contains(m.target)&&t(m)},u=h(O),x;try{for(u.s();!(x=u.n()).done;){var d=x.value;document.addEventListener(d,r)}}catch(c){u.e(c)}finally{u.f()}return function(){var c=h(O),m;try{for(c.s();!(m=c.n()).done;){var i=m.value;document.removeEventListener(i,r)}}catch(o){c.e(o)}finally{c.f()}}},[n.current]),n}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/web.timers.js");function A(n,t){return j(n)||D(n,t)||X(n,t)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){if(!!n){if(typeof n=="string")return U(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(n,t)}}function U(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function D(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function j(n){if(Array.isArray(n))return n}var b=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.timeout,u=r===void 0?2e3:r,x=Object(E.useState)(null),d=A(x,2),c=d[0],m=d[1],i=Object(E.useState)(!1),o=A(i,2),v=o[0],T=o[1],C=Object(E.useState)(null),R=A(C,2),k=R[0],N=R[1],V=function(ae){clearTimeout(k),N(setTimeout(function(){return T(!1)},u)),T(ae)},P=function(ae){"clipboard"in navigator?navigator.clipboard.writeText(ae).then(function(){return V(!0)}).catch(function(ue){return m(ue)}):m(new Error("useClipboard: navigator.clipboard is not supported"))},F=function(){T(!1),m(null),clearTimeout(k)};return{copy:P,reset:F,error:c,copied:v}},p=e("./node_modules/react/jsx-runtime.js");function y(n,t){return a(n)||f(n,t)||_(n,t)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,t){if(!!n){if(typeof n=="string")return h(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(n,t)}}function h(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function f(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function a(n){if(Array.isArray(n))return n}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},O=`import React, { useState } from "react";

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
`,I={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},s=function(){var t=Object(E.useState)(""),r=y(t,2),u=r[0],x=r[1],d=b({timeout:3e3}),c=d.copy,m=d.copied;return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",onChange:function(o){return x(o.target.value)}}),Object(p.jsx)("button",{onClick:function(){return c(u)},children:"copy"}),Object(p.jsx)("span",{children:m&&"Copied!!"})]})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return w});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),te=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},G=e("./node_modules/react/jsx-runtime.js"),Q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Q=`import React from "react";
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
`,B={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},J=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},w=function(){var z=te();return Object(G.jsx)("div",{children:Object(G.jsx)("div",{children:z})})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},w.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return n});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),A=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function q(t,r){return b(t)||j(t,r)||U(t,r)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,r){if(!!t){if(typeof t=="string")return D(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return D(t,r)}}function D(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,x=new Array(r);u<r;u++)x[u]=t[u];return x}function j(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var x=[],d=!0,c=!1,m,i;try{for(u=u.call(t);!(d=(m=u.next()).done)&&(x.push(m.value),!(r&&x.length===r));d=!0);}catch(o){c=!0,i=o}finally{try{!d&&u.return!=null&&u.return()}finally{if(c)throw i}}return x}}function b(t){if(Array.isArray(t))return t}var p=function(r,u,x){var d=Object(A.a)(r,u),c=q(d,2),m=c[0],i=c[1];return Object(Z.a)(m,x),i},y=e("./node_modules/react/jsx-runtime.js");function l(t,r){return O(t)||a(t,r)||h(t,r)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(t,r){if(!!t){if(typeof t=="string")return f(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return f(t,r)}}function f(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,x=new Array(r);u<r;u++)x[u]=t[u];return x}function a(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var x=[],d=!0,c=!1,m,i;try{for(u=u.call(t);!(d=(m=u.next()).done)&&(x.push(m.value),!(r&&x.length===r));d=!0);}catch(o){c=!0,i=o}finally{try{!d&&u.return!=null&&u.return()}finally{if(c)throw i}}return x}}function O(t){if(Array.isArray(t))return t}var I=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},I=`import React, { useState } from "react";

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
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},s=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},n=function(){var r=Object(E.useState)(""),u=l(r,2),x=u[0],d=u[1],c=p(function(){alert("Updated!")},1e3,[x]);return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",onChange:function(i){return d(i.target.value)}}),Object(y.jsx)("button",{onClick:c,children:"Cancel"})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},J=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var M=function(){var Y=Object(G.a)();return Object(Q.jsxs)("div",{children:[Math.random(),Object(Q.jsx)("button",{onClick:Y,children:"Update"})]})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return s});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.function.name.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y);function _(n,t){return I(n)||O(n,t)||f(n,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,t){if(!!n){if(typeof n=="string")return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,t)}}function a(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function O(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function I(n){if(Array.isArray(n))return n}var g=function(t){return(t+1)%1e6},s=function(){var t=Object(y.useReducer)(g,0),r=_(t,2),u=r[1];return u}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport useHiddenBodyOverflow from \\"../useHiddenBodyOverflow\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHiddenBodyOverflow\\",\\n};\\n\\nexport const Default = () => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":17}}};
    
import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},J=`import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}};S.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport useHiddenBodyOverflow from \\"../useHiddenBodyOverflow\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/hooks/useHiddenBodyOverflow\\",\\n};\\n\\nexport const Default = () => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":17}}};
    
import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useHiddenBodyOverflow"};var M=function(){return Object(G.a)(!0),Object(Q.jsx)("div",{children:Object(Q.jsx)("span",{children:"useHiddenBodyOverflow"})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts":function(oe,S,e){"use strict";e.d(S,"b",function(){return W});var $=e("./node_modules/react/index.js"),K=e.n($),W=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function Q(w){w.preventDefault()}function B(){document.body.addEventListener("touchmove",Q,{passive:!1})}function J(){document.body.removeEventListener("touchmove",Q)}return Object($.useEffect)(function(){return G&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var w=document.body.style.top;document.body.style.cssText=""}},[]),Object($.useEffect)(function(){return G&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[G]),null};S.a=W},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.string.split.js"),A=e("./node_modules/core-js/modules/es.regexp.exec.js"),q=e("./node_modules/core-js/modules/es.string.replace.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),U=e("./node_modules/core-js/modules/es.regexp.to-string.js"),D=e("./node_modules/core-js/modules/es.date.to-string.js");function j(i,o){var v=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!v){if(Array.isArray(i)||(v=b(i))||o&&i&&typeof i.length=="number"){v&&(i=v);var T=0,C=function(){};return{s:C,n:function(){return T>=i.length?{done:!0}:{done:!1,value:i[T++]}},e:function(V){function P(F){return V.apply(this,arguments)}return P.toString=function(){return V.toString()},P}(function(V){throw V}),f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R=!0,k=!1,N;return{s:function(){v=v.call(i)},n:function(){var P=v.next();return R=P.done,P},e:function(V){function P(F){return V.apply(this,arguments)}return P.toString=function(){return V.toString()},P}(function(V){k=!0,N=V}),f:function(){try{!R&&v.return!=null&&v.return()}finally{if(k)throw N}}}}function b(i,o){if(!!i){if(typeof i=="string")return p(i,o);var v=Object.prototype.toString.call(i).slice(8,-1);if(v==="Object"&&i.constructor&&(v=i.constructor.name),v==="Map"||v==="Set")return Array.from(i);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return p(i,o)}}function p(i,o){(o==null||o>i.length)&&(o=i.length);for(var v=0,T=new Array(o);v<o;v++)T[v]=i[v];return T}var y={alt:1,ctrl:2,meta:4,shift:8},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},_={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},h=function(o){var v=o.key!==" "?o.key.toLowerCase():"space",T=0;return o.altKey&&(T+=y.alt),o.ctrlKey&&(T+=y.ctrl),o.metaKey&&(T+=y.meta),o.shiftKey&&(T+=y.shift),{modifiers:T,key:v}},f=function(o){var v=o.replace(/\s/g,"").toLowerCase().split("+"),T=0,C,R=j(v),k;try{for(R.s();!(k=R.n()).done;){var N=k.value;y[N]?T+=y[N]:y[_[N]]?T+=y[_[N]]:l[N]?(T+=y.shift,C=l[N]):_[N]?C=_[N]:C=N}}catch(V){R.e(V)}finally{R.f()}return{modifiers:T,key:C}},a=function(o,v){return o.modifiers===v.modifiers&&o.key===v.key},O=function(o){var v=Object(E.useMemo)(function(){return o.filter(function(P){return!P.global})},[o]),T=Object(E.useMemo)(function(){return o.filter(function(P){return P.global})},[o]),C=Object(E.useCallback)(function(P,F,H,ae){var ue=j(P?T:v),ge;try{for(ue.s();!(ge=ue.n()).done;){var me=ge.value;if(a(f(me.combo),F)){var L;(L=me[H])===null||L===void 0||L.call(me,ae)}}}catch(ee){ue.e(ee)}finally{ue.f()}},[v,T]),R=Object(E.useCallback)(function(P){C(!0,h(P),"onKeyDown",P)},[C]),k=Object(E.useCallback)(function(P){C(!0,h(P),"onKeyUp",P)},[C]),N=Object(E.useCallback)(function(P){C(!1,h(P.nativeEvent),"onKeyDown",P.nativeEvent)},[C]),V=Object(E.useCallback)(function(P){C(!1,h(P.nativeEvent),"onKeyUp",P.nativeEvent)},[C]);return Object(E.useEffect)(function(){return document.addEventListener("keydown",R),document.addEventListener("keyup",k),function(){document.removeEventListener("keydown",R),document.removeEventListener("keyup",k)}},[R,k]),{handleKeyDown:N,handleKeyUp:V}},I=e("./node_modules/react/jsx-runtime.js");function g(i,o){return u(i)||r(i,o)||n(i,o)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(i,o){if(!!i){if(typeof i=="string")return t(i,o);var v=Object.prototype.toString.call(i).slice(8,-1);if(v==="Object"&&i.constructor&&(v=i.constructor.name),v==="Map"||v==="Set")return Array.from(i);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return t(i,o)}}function t(i,o){(o==null||o>i.length)&&(o=i.length);for(var v=0,T=new Array(o);v<o;v++)T[v]=i[v];return T}function r(i,o){var v=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(v!=null){var T=[],C=!0,R=!1,k,N;try{for(v=v.call(i);!(C=(k=v.next()).done)&&(T.push(k.value),!(o&&T.length===o));C=!0);}catch(V){R=!0,N=V}finally{try{!C&&v.return!=null&&v.return()}finally{if(R)throw N}}return T}}function u(i){if(Array.isArray(i))return i}var x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},x=`import React, { useRef, useState } from "react";

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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},c=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},m=function(){var o=Object(E.useRef)(null),v=Object(E.useState)(""),T=g(v,2),C=T[0],R=T[1],k=O([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){o.current.select()}},{combo:"shift+r",onKeyUp:function(){R("")}}]),N=k.handleKeyDown,V=k.handleKeyUp;return Object(I.jsx)("div",{children:Object(I.jsx)("input",{ref:o,type:"text",value:C,onChange:function(F){return R(F.target.value)},onKeyDown:N,onKeyUp:V})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return c});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/react/index.js"),h=e.n(_),f=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),a=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),O=e("./node_modules/react/jsx-runtime.js"),I=e.n(O);function g(m,i){return u(m)||r(m,i)||n(m,i)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(m,i){if(!!m){if(typeof m=="string")return t(m,i);var o=Object.prototype.toString.call(m).slice(8,-1);if(o==="Object"&&m.constructor&&(o=m.constructor.name),o==="Map"||o==="Set")return Array.from(m);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(m,i)}}function t(m,i){(i==null||i>m.length)&&(i=m.length);for(var o=0,v=new Array(i);o<i;o++)v[o]=m[o];return v}function r(m,i){var o=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(o!=null){var v=[],T=!0,C=!1,R,k;try{for(o=o.call(m);!(T=(R=o.next()).done)&&(v.push(R.value),!(i&&v.length===i));T=!0);}catch(N){C=!0,k=N}finally{try{!T&&o.return!=null&&o.return()}finally{if(C)throw k}}return v}}function u(m){if(Array.isArray(m))return m}var x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},x=`import React, { useEffect } from "react";

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
`,d={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var c=function(){var i=Object(a.a)(),o=g(i,2),v=o[0],T=o[1],C=Object(f.a)();return Object(_.useEffect)(function(){C()},[]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{ref:T,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+v]})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return g});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.function.name.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y);function _(s,n){return I(s)||O(s,n)||f(s,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(s,n){if(!!s){if(typeof s=="string")return a(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(s,n)}}function a(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function O(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function I(s){if(Array.isArray(s))return s}var g=function(){var n=Object(y.useRef)(null),t=Object(y.useState)(!1),r=_(t,2),u=r[0],x=r[1],d=Object(y.useCallback)(function(){return x(!0)},[]),c=Object(y.useCallback)(function(){return x(!1)},[]);return Object(y.useEffect)(function(){var m=n.current;if(!!m)return m.addEventListener("mouseenter",d),m.addEventListener("mouseleave",c),function(){m.removeEventListener("mouseenter",d),m.removeEventListener("mouseleave",c)}},[n.current]),[u,n]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},J=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var M=function(){var Y=Object(G.a)();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:Y})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return s});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.function.name.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y);function _(n,t){return I(n)||O(n,t)||f(n,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,t){if(!!n){if(typeof n=="string")return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,t)}}function a(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function O(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function I(n){if(Array.isArray(n))return n}var g=0,s=function(t){var r=Object(y.useState)(t),u=_(r,2),x=u[0],d=u[1],c=t||x;return Object(y.useEffect)(function(){x==null&&(g+=1,d("tm-"+g))},[x]),c}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return I});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.array.for-each.js"),G=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),q=e("./node_modules/core-js/modules/es.array.from.js");function X(g,s){return p(g)||b(g,s)||D(g,s)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(g,s){if(!!g){if(typeof g=="string")return j(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(g,s)}}function j(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function b(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,u=!1,x,d;try{for(n=n.call(g);!(r=(x=n.next()).done)&&(t.push(x.value),!(s&&t.length===s));r=!0);}catch(c){u=!0,d=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(u)throw d}}return t}}function p(g){if(Array.isArray(g))return g}var y=["keypress","mousemove","touchmove","click","scroll"],l={events:y,initialState:!0},_=function(s,n){var t=Object.assign({},l,n),r=t.events,u=t.initialState,x=Object(K.useState)(u),d=X(x,2),c=d[0],m=d[1],i=Object(K.useRef)();return Object(K.useEffect)(function(){var o=function(){m(!1),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(function(){m(!0)},s)};return r.forEach(function(v){return document.addEventListener(v,o)}),function(){r.forEach(function(v){return document.removeEventListener(v,o)})}},[s]),c},h=e("./node_modules/react/jsx-runtime.js"),f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},f=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},O=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},I=function(){var s=_(3e3);return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Idle: ",""+s]})})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},I.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return g});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js");function Z(s,n){return D(s)||U(s,n)||q(s,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(s,n){if(!!s){if(typeof s=="string")return X(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(s,n)}}function X(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function U(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function D(s){if(Array.isArray(s))return s}var j=function(n){var t=Object(E.useState)(null),r=Z(t,2),u=r[0],x=r[1],d=Object(E.useRef)(),c=Object(E.useCallback)(function(m){if(d.current&&(d.current.disconnect(),d.current=null),m===null){x(null);return}d.current=new IntersectionObserver(function(i){var o=Z(i,1),v=o[0];x(v)},n),d.current.observe(m)},[n==null?void 0:n.rootMargin,n==null?void 0:n.root,n==null?void 0:n.threshold]);return[c,u]},b=e("./node_modules/react/jsx-runtime.js");function p(s,n){return f(s)||h(s,n)||l(s,n)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,n){if(!!s){if(typeof s=="string")return _(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(s,n)}}function _(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function h(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function f(s){if(Array.isArray(s))return s}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},a=`import React, { useRef } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},I=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},g=function(){var n=Object(E.useRef)(null),t=j({root:n.current,threshold:.5}),r=p(t,2),u=r[0],x=r[1];return Object(b.jsx)("div",{ref:n,style:{width:300,height:300,overflowY:"scroll"},children:Object(b.jsx)("div",{style:{height:500},children:Object(b.jsx)("div",{ref:u,style:{marginTop:290,height:50,backgroundColor:x!=null&&x.isIntersecting?"green":"red"},children:x!=null&&x.isIntersecting?"Half visible":"Obscured"})})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function A(f,a){return j(f)||D(f,a)||X(f,a)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(f,a){if(!!f){if(typeof f=="string")return U(f,a);var O=Object.prototype.toString.call(f).slice(8,-1);if(O==="Object"&&f.constructor&&(O=f.constructor.name),O==="Map"||O==="Set")return Array.from(f);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return U(f,a)}}function U(f,a){(a==null||a>f.length)&&(a=f.length);for(var O=0,I=new Array(a);O<a;O++)I[O]=f[O];return I}function D(f,a){var O=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(O!=null){var I=[],g=!0,s=!1,n,t;try{for(O=O.call(f);!(g=(n=O.next()).done)&&(I.push(n.value),!(a&&I.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&O.return!=null&&O.return()}finally{if(s)throw t}}return I}}function j(f){if(Array.isArray(f))return f}var b=function(a,O){var I=Object(Z.a)(a,O),g=A(I,2),s=g[0],n=g[1];return Object(K.useEffect)(function(){return s(),n},[s,n]),n},p=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},y=`import React from "react";
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
`,l={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},_=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},h=function(){var a=b(function(){alert("fire")},3e3);return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:a,children:"clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return d});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/react/index.js"),h=e.n(_),f=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),O=e.n(a);function I(c,m){return r(c)||t(c,m)||s(c,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(c,m){if(!!c){if(typeof c=="string")return n(c,m);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(c,m)}}function n(c,m){(m==null||m>c.length)&&(m=c.length);for(var i=0,o=new Array(m);i<m;i++)o[i]=c[i];return o}function t(c,m){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],v=!0,T=!1,C,R;try{for(i=i.call(c);!(v=(C=i.next()).done)&&(o.push(C.value),!(m&&o.length===m));v=!0);}catch(k){T=!0,R=k}finally{try{!v&&i.return!=null&&i.return()}finally{if(T)throw R}}return o}}function r(c){if(Array.isArray(c))return c}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},u=`import React from "react";
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var d=function(){var m=Object(f.a)(function(){alert("fire")},3e3),i=I(m,2),o=i[0],v=i[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:o,children:"run"}),Object(a.jsx)("button",{onClick:v,children:"clear"})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return Q});var $=e("./node_modules/core-js/modules/web.timers.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(J,w){var M=Object(W.useRef)(),z=Object(G.a)(J),Y=Object(W.useCallback)(function(){M.current&&clearInterval(M.current),M.current=setInterval(function(){z()},w)},[w]),E=Object(W.useCallback)(function(){M.current&&clearInterval(M.current)},[]);return Object(W.useEffect)(function(){return E},[E]),[Y,E]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return _});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=typeof document!="undefined"?E.useLayoutEffect:E.useEffect,A=e("./node_modules/react/jsx-runtime.js");function q(h,f){return b(h)||j(h,f)||U(h,f)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(h,f){if(!!h){if(typeof h=="string")return D(h,f);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(h,f)}}function D(h,f){(f==null||f>h.length)&&(f=h.length);for(var a=0,O=new Array(f);a<f;a++)O[a]=h[a];return O}function j(h,f){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var O=[],I=!0,g=!1,s,n;try{for(a=a.call(h);!(I=(s=a.next()).done)&&(O.push(s.value),!(f&&O.length===f));I=!0);}catch(t){g=!0,n=t}finally{try{!I&&a.return!=null&&a.return()}finally{if(g)throw n}}return O}}function b(h){if(Array.isArray(h))return h}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},p=`import React, { useState } from "react";

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
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},l=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},_=function(){var f=Object(E.useState)(!1),a=q(f,2),O=a[0],I=a[1];return Z(function(){I(!0)},[]),Object(A.jsx)("div",{children:O&&"mounted"})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return _});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js");function Z(h,f){return D(h)||U(h,f)||q(h,f)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(h,f){if(!!h){if(typeof h=="string")return X(h,f);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return X(h,f)}}function X(h,f){(f==null||f>h.length)&&(f=h.length);for(var a=0,O=new Array(f);a<f;a++)O[a]=h[a];return O}function U(h,f){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var O=[],I=!0,g=!1,s,n;try{for(a=a.call(h);!(I=(s=a.next()).done)&&(O.push(s.value),!(f&&O.length===f));I=!0);}catch(t){g=!0,n=t}finally{try{!I&&a.return!=null&&a.return()}finally{if(g)throw n}}return O}}function D(h){if(Array.isArray(h))return h}var j=function(f){var a=Object(K.useState)(!1),O=Z(a,2),I=O[0],g=O[1],s=Object(K.useCallback)(function(t){var r=t.key;r===f&&g(!0)},[f]),n=Object(K.useCallback)(function(t){var r=t.key;r===f&&g(!1)},[f]);return Object(K.useEffect)(function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",n)}},[s,n]),I},b=e("./node_modules/react/jsx-runtime.js"),p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},p=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},l=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},_=function(){var f=j("r");return Object(b.jsx)("div",{children:f&&"r key pressed"})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/core-js/modules/es.array.concat.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.array.includes.js"),U=e("./node_modules/core-js/modules/es.string.includes.js");function D(o){return p(o)||b(o)||_(o)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function p(o){if(Array.isArray(o))return h(o)}function y(o,v){return a(o)||f(o,v)||_(o,v)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(o,v){if(!!o){if(typeof o=="string")return h(o,v);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return h(o,v)}}function h(o,v){(v==null||v>o.length)&&(v=o.length);for(var T=0,C=new Array(v);T<v;T++)C[T]=o[T];return C}function f(o,v){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,N,V;try{for(T=T.call(o);!(R=(N=T.next()).done)&&(C.push(N.value),!(v&&C.length===v));R=!0);}catch(P){k=!0,V=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw V}}return C}}function a(o){if(Array.isArray(o))return o}var O=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],T=Object(Z.useState)(v),C=y(T,2),R=C[0],k=C[1],N=Object(Z.useCallback)(function(){for(var me=arguments.length,L=new Array(me),ee=0;ee<me;ee++)L[ee]=arguments[ee];return k(function(re){return[].concat(D(re),L)})},[]),V=Object(Z.useCallback)(function(){for(var me=arguments.length,L=new Array(me),ee=0;ee<me;ee++)L[ee]=arguments[ee];return k(function(re){return[].concat(L,D(re))})},[]),P=Object(Z.useCallback)(function(me){for(var L=arguments.length,ee=new Array(L>1?L-1:0),re=1;re<L;re++)ee[re-1]=arguments[re];return k(function(pe){return[].concat(D(pe.slice(0,me)),ee,D(pe.slice(me)))})},[]),F=Object(Z.useCallback)(function(){for(var me=arguments.length,L=new Array(me),ee=0;ee<me;ee++)L[ee]=arguments[ee];return k(function(re){return re.filter(function(pe,be){return!L.includes(be)})})},[]),H=Object(Z.useCallback)(function(){var me=D(R),L=me.pop();return k(me),L},[R]),ae=Object(Z.useCallback)(function(){var me=D(R),L=me.shift();return k(me),L},[R]),ue=Object(Z.useCallback)(function(me,L){k(function(ee){var re=D(ee);return re[me]=L,re})},[]),ge={setState:k,append:N,prepend:V,insert:P,remove:F,pop:H,shift:ae,setItem:ue};return[R,ge]},I=e("./node_modules/react/jsx-runtime.js");function g(o,v){return u(o)||r(o,v)||n(o,v)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(o,v){if(!!o){if(typeof o=="string")return t(o,v);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return t(o,v)}}function t(o,v){(v==null||v>o.length)&&(v=o.length);for(var T=0,C=new Array(v);T<v;T++)C[T]=o[T];return C}function r(o,v){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,N,V;try{for(T=T.call(o);!(R=(N=T.next()).done)&&(C.push(N.value),!(v&&C.length===v));R=!0);}catch(P){k=!0,V=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw V}}return C}}function u(o){if(Array.isArray(o))return o}var x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},x=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},c=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},m=5,i=function(){var v=O(["Item 1","Item 2","Item 3","Item 4","Item 5"]),T=g(v,2),C=T[0],R=T[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(){return R.append("Item "+ ++m)},children:"append"}),Object(I.jsx)("button",{onClick:function(){return R.pop()},children:"pop"}),Object(I.jsx)("button",{onClick:function(){return R.prepend("Item "+ ++m)},children:"prepend"}),Object(I.jsx)("button",{onClick:function(){return R.shift()},children:"shift"}),Object(I.jsx)("button",{onClick:function(){return R.setItem(3,"Updated")},children:"setItem 3 index"}),Object(I.jsx)("button",{onClick:function(){return R.remove(2,3)},children:"remove 2, 3 index"}),Object(I.jsx)("button",{onClick:function(){return R.insert(3,"Item "+ ++m)},children:"insert 3 index"})]}),Object(I.jsx)("ul",{children:C.map(function(k,N){return Object(I.jsx)("li",{children:k},N)})})]})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.promise.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),q=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),X=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),U=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),D=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),j=e("./node_modules/core-js/modules/es.object.define-property.js"),b=e("./node_modules/core-js/modules/es.object.create.js"),p=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),y=e("./node_modules/core-js/modules/es.array.for-each.js"),l=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),_=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),h=e("./node_modules/core-js/modules/es.array.reverse.js"),f=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return P};var P={},F=Object.prototype,H=F.hasOwnProperty,ae=typeof Symbol=="function"?Symbol:{},ue=ae.iterator||"@@iterator",ge=ae.asyncIterator||"@@asyncIterator",me=ae.toStringTag||"@@toStringTag";function L(de,ne,fe){return Object.defineProperty(de,ne,{value:fe,enumerable:!0,configurable:!0,writable:!0}),de[ne]}try{L({},"")}catch(de){L=function(fe,ve,ce){return fe[ve]=ce}}function ee(de,ne,fe,ve){var ce=ne&&ne.prototype instanceof be?ne:be,_e=Object.create(ce.prototype),Te=new Be(ve||[]);return _e._invoke=function(Ee,De,xe){var Se="suspendedStart";return function(Ae,we){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Ae==="throw")throw we;return Ve()}for(xe.method=Ae,xe.arg=we;;){var He=xe.delegate;if(He){var We=Ie(He,xe);if(We){if(We===pe)continue;return We}}if(xe.method==="next")xe.sent=xe._sent=xe.arg;else if(xe.method==="throw"){if(Se==="suspendedStart")throw Se="completed",xe.arg;xe.dispatchException(xe.arg)}else xe.method==="return"&&xe.abrupt("return",xe.arg);Se="executing";var Ke=re(Ee,De,xe);if(Ke.type==="normal"){if(Se=xe.done?"completed":"suspendedYield",Ke.arg===pe)continue;return{value:Ke.arg,done:xe.done}}Ke.type==="throw"&&(Se="completed",xe.method="throw",xe.arg=Ke.arg)}}}(de,fe,Te),_e}function re(de,ne,fe){try{return{type:"normal",arg:de.call(ne,fe)}}catch(ve){return{type:"throw",arg:ve}}}P.wrap=ee;var pe={};function be(){}function he(){}function je(){}var le={};L(le,ue,function(){return this});var se=Object.getPrototypeOf,ye=se&&se(se(Le([])));ye&&ye!==F&&H.call(ye,ue)&&(le=ye);var ie=je.prototype=be.prototype=Object.create(le);function Oe(de){["next","throw","return"].forEach(function(ne){L(de,ne,function(fe){return this._invoke(ne,fe)})})}function ke(de,ne){function fe(ce,_e,Te,Ee){var De=re(de[ce],de,_e);if(De.type!=="throw"){var xe=De.arg,Se=xe.value;return Se&&typeof Se=="object"&&H.call(Se,"__await")?ne.resolve(Se.__await).then(function(Ae){fe("next",Ae,Te,Ee)},function(Ae){fe("throw",Ae,Te,Ee)}):ne.resolve(Se).then(function(Ae){xe.value=Ae,Te(xe)},function(Ae){return fe("throw",Ae,Te,Ee)})}Ee(De.arg)}var ve;this._invoke=function(ce,_e){function Te(){return new ne(function(Ee,De){fe(ce,_e,Ee,De)})}return ve=ve?ve.then(Te,Te):Te()}}function Ie(de,ne){var fe=de.iterator[ne.method];if(fe===void 0){if(ne.delegate=null,ne.method==="throw"){if(de.iterator.return&&(ne.method="return",ne.arg=void 0,Ie(de,ne),ne.method==="throw"))return pe;ne.method="throw",ne.arg=new TypeError("The iterator does not provide a 'throw' method")}return pe}var ve=re(fe,de.iterator,ne.arg);if(ve.type==="throw")return ne.method="throw",ne.arg=ve.arg,ne.delegate=null,pe;var ce=ve.arg;return ce?ce.done?(ne[de.resultName]=ce.value,ne.next=de.nextLoc,ne.method!=="return"&&(ne.method="next",ne.arg=void 0),ne.delegate=null,pe):ce:(ne.method="throw",ne.arg=new TypeError("iterator result is not an object"),ne.delegate=null,pe)}function Re(de){var ne={tryLoc:de[0]};1 in de&&(ne.catchLoc=de[1]),2 in de&&(ne.finallyLoc=de[2],ne.afterLoc=de[3]),this.tryEntries.push(ne)}function Pe(de){var ne=de.completion||{};ne.type="normal",delete ne.arg,de.completion=ne}function Be(de){this.tryEntries=[{tryLoc:"root"}],de.forEach(Re,this),this.reset(!0)}function Le(de){if(de){var ne=de[ue];if(ne)return ne.call(de);if(typeof de.next=="function")return de;if(!isNaN(de.length)){var fe=-1,ve=function ce(){for(;++fe<de.length;)if(H.call(de,fe))return ce.value=de[fe],ce.done=!1,ce;return ce.value=void 0,ce.done=!0,ce};return ve.next=ve}}return{next:Ve}}function Ve(){return{value:void 0,done:!0}}return he.prototype=je,L(ie,"constructor",je),L(je,"constructor",he),he.displayName=L(je,me,"GeneratorFunction"),P.isGeneratorFunction=function(de){var ne=typeof de=="function"&&de.constructor;return!!ne&&(ne===he||(ne.displayName||ne.name)==="GeneratorFunction")},P.mark=function(de){return Object.setPrototypeOf?Object.setPrototypeOf(de,je):(de.__proto__=je,L(de,me,"GeneratorFunction")),de.prototype=Object.create(ie),de},P.awrap=function(de){return{__await:de}},Oe(ke.prototype),L(ke.prototype,ge,function(){return this}),P.AsyncIterator=ke,P.async=function(de,ne,fe,ve,ce){ce===void 0&&(ce=Promise);var _e=new ke(ee(de,ne,fe,ve),ce);return P.isGeneratorFunction(ne)?_e:_e.next().then(function(Te){return Te.done?Te.value:_e.next()})},Oe(ie),L(ie,me,"Generator"),L(ie,ue,function(){return this}),L(ie,"toString",function(){return"[object Generator]"}),P.keys=function(de){var ne=[];for(var fe in de)ne.push(fe);return ne.reverse(),function ve(){for(;ne.length;){var ce=ne.pop();if(ce in de)return ve.value=ce,ve.done=!1,ve}return ve.done=!0,ve}},P.values=Le,Be.prototype={constructor:Be,reset:function(ne){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Pe),!ne)for(var fe in this)fe.charAt(0)==="t"&&H.call(this,fe)&&!isNaN(+fe.slice(1))&&(this[fe]=void 0)},stop:function(){this.done=!0;var ne=this.tryEntries[0].completion;if(ne.type==="throw")throw ne.arg;return this.rval},dispatchException:function(ne){if(this.done)throw ne;var fe=this;function ve(xe,Se){return Te.type="throw",Te.arg=ne,fe.next=xe,Se&&(fe.method="next",fe.arg=void 0),!!Se}for(var ce=this.tryEntries.length-1;ce>=0;--ce){var _e=this.tryEntries[ce],Te=_e.completion;if(_e.tryLoc==="root")return ve("end");if(_e.tryLoc<=this.prev){var Ee=H.call(_e,"catchLoc"),De=H.call(_e,"finallyLoc");if(Ee&&De){if(this.prev<_e.catchLoc)return ve(_e.catchLoc,!0);if(this.prev<_e.finallyLoc)return ve(_e.finallyLoc)}else if(Ee){if(this.prev<_e.catchLoc)return ve(_e.catchLoc,!0)}else{if(!De)throw new Error("try statement without catch or finally");if(this.prev<_e.finallyLoc)return ve(_e.finallyLoc)}}}},abrupt:function(ne,fe){for(var ve=this.tryEntries.length-1;ve>=0;--ve){var ce=this.tryEntries[ve];if(ce.tryLoc<=this.prev&&H.call(ce,"finallyLoc")&&this.prev<ce.finallyLoc){var _e=ce;break}}_e&&(ne==="break"||ne==="continue")&&_e.tryLoc<=fe&&fe<=_e.finallyLoc&&(_e=null);var Te=_e?_e.completion:{};return Te.type=ne,Te.arg=fe,_e?(this.method="next",this.next=_e.finallyLoc,pe):this.complete(Te)},complete:function(ne,fe){if(ne.type==="throw")throw ne.arg;return ne.type==="break"||ne.type==="continue"?this.next=ne.arg:ne.type==="return"?(this.rval=this.arg=ne.arg,this.method="return",this.next="end"):ne.type==="normal"&&fe&&(this.next=fe),pe},finish:function(ne){for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe];if(ve.finallyLoc===ne)return this.complete(ve.completion,ve.afterLoc),Pe(ve),pe}},catch:function(ne){for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe];if(ve.tryLoc===ne){var ce=ve.completion;if(ce.type==="throw"){var _e=ce.arg;Pe(ve)}return _e}}throw new Error("illegal catch attempt")},delegateYield:function(ne,fe,ve){return this.delegate={iterator:Le(ne),resultName:fe,nextLoc:ve},this.method==="next"&&(this.arg=void 0),pe}},P}function O(P,F,H,ae,ue,ge,me){try{var L=P[ge](me),ee=L.value}catch(re){H(re);return}L.done?F(ee):Promise.resolve(ee).then(ae,ue)}function I(P){return function(){var F=this,H=arguments;return new Promise(function(ae,ue){var ge=P.apply(F,H);function me(ee){O(ge,ae,ue,me,L,"next",ee)}function L(ee){O(ge,ae,ue,me,L,"throw",ee)}me(void 0)})}}function g(P,F){return u(P)||r(P,F)||n(P,F)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(P,F){if(!!P){if(typeof P=="string")return t(P,F);var H=Object.prototype.toString.call(P).slice(8,-1);if(H==="Object"&&P.constructor&&(H=P.constructor.name),H==="Map"||H==="Set")return Array.from(P);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return t(P,F)}}function t(P,F){(F==null||F>P.length)&&(F=P.length);for(var H=0,ae=new Array(F);H<F;H++)ae[H]=P[H];return ae}function r(P,F){var H=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(H!=null){var ae=[],ue=!0,ge=!1,me,L;try{for(H=H.call(P);!(ue=(me=H.next()).done)&&(ae.push(me.value),!(F&&ae.length===F));ue=!0);}catch(ee){ge=!0,L=ee}finally{try{!ue&&H.return!=null&&H.return()}finally{if(ge)throw L}}return ae}}function u(P){if(Array.isArray(P))return P}var x=function(F){var H=Object(A.useState)(!1),ae=g(H,2),ue=ae[0],ge=ae[1],me=Object(f.a)(F),L=Object(A.useCallback)(I(a().mark(function ee(){var re,pe=arguments;return a().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return ge(!0),he.next=3,me.apply(void 0,pe);case 3:return re=he.sent,ge(!1),he.abrupt("return",re);case 6:case"end":return he.stop()}},ee)})),[F]);return[ue,L]},d=e("./node_modules/react/jsx-runtime.js");function c(P,F){return T(P)||v(P,F)||i(P,F)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(P,F){if(!!P){if(typeof P=="string")return o(P,F);var H=Object.prototype.toString.call(P).slice(8,-1);if(H==="Object"&&P.constructor&&(H=P.constructor.name),H==="Map"||H==="Set")return Array.from(P);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return o(P,F)}}function o(P,F){(F==null||F>P.length)&&(F=P.length);for(var H=0,ae=new Array(F);H<F;H++)ae[H]=P[H];return ae}function v(P,F){var H=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(H!=null){var ae=[],ue=!0,ge=!1,me,L;try{for(H=H.call(P);!(ue=(me=H.next()).done)&&(ae.push(me.value),!(F&&ae.length===F));ue=!0);}catch(ee){ge=!0,L=ee}finally{try{!ue&&H.return!=null&&H.return()}finally{if(ge)throw L}}return ae}}function T(P){if(Array.isArray(P))return P}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},C=`import React from "react";
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
`,R={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},k=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},N=function(F){return new Promise(function(H){return setTimeout(H,F)})},V=function(){var F=x(N),H=c(F,2),ae=H[0],ue=H[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return ue(2e3)},children:"Start"})}),Object(d.jsxs)("div",{children:["Loading: ",""+ae]})]})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Q=e("./node_modules/react/jsx-runtime.js"),B=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},J=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var M=function(){var Y=Object(G.a)("(min-width: 900px)");return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:["(min-width: 900px) : ",Y?"matches":"does not match"]})})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return n});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.function.name.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y);function _(t,r){return I(t)||O(t,r)||f(t,r)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,r){if(!!t){if(typeof t=="string")return a(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return a(t,r)}}function a(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,x=new Array(r);u<r;u++)x[u]=t[u];return x}function O(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var x=[],d=!0,c=!1,m,i;try{for(u=u.call(t);!(d=(m=u.next()).done)&&(x.push(m.value),!(r&&x.length===r));d=!0);}catch(o){c=!0,i=o}finally{try{!d&&u.return!=null&&u.return()}finally{if(c)throw i}}return x}}function I(t){if(Array.isArray(t))return t}function g(t,r){try{return t.addEventListener("change",r),function(){return t.removeEventListener("change",r)}}catch(u){return t.addListener(r),function(){return t.removeListener(r)}}}function s(t){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}var n=function(r){var u=Object(y.useState)(s(r)),x=_(u,2),d=x[0],c=x[1],m=Object(y.useRef)();return Object(y.useEffect)(function(){if("matchMedia"in window)return m.current=window.matchMedia(r),c(m.current.matches),g(m.current,function(i){return c(i.matches)})},[r]),d}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),A=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),q=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),D=function(t,r){typeof t=="function"?t(r):typeof t=="object"&&t!==null&&"current"in t&&(t.current=r)},j=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return Object(E.useCallback)(function(x){r.forEach(function(d){return D(d,x)})},r)},b=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return function(x){r.forEach(function(d){return D(d,x)})}},p=e("./node_modules/react/jsx-runtime.js");function y(n,t){return a(n)||f(n,t)||_(n,t)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,t){if(!!n){if(typeof n=="string")return h(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(n,t)}}function h(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function f(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u=[],x=!0,d=!1,c,m;try{for(r=r.call(n);!(x=(c=r.next()).done)&&(u.push(c.value),!(t&&u.length===t));x=!0);}catch(i){d=!0,m=i}finally{try{!x&&r.return!=null&&r.return()}finally{if(d)throw m}}return u}}function a(n){if(Array.isArray(n))return n}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},O=`import React, { useEffect } from "react";

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
`,I={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},s=function(){var t=Object(q.a)(),r=y(t,2),u=r[0],x=r[1],d=Object(Z.a)(function(){return alert("click away")}),c=j(x,d),m=Object(A.a)();return Object(E.useEffect)(function(){m()},[]),Object(p.jsx)("div",{children:Object(p.jsx)("div",{ref:c,style:{width:100,height:100,backgroundColor:"red"},children:""+u})})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
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
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js");function Z(f,a){return D(f)||U(f,a)||q(f,a)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(f,a){if(!!f){if(typeof f=="string")return X(f,a);var O=Object.prototype.toString.call(f).slice(8,-1);if(O==="Object"&&f.constructor&&(O=f.constructor.name),O==="Map"||O==="Set")return Array.from(f);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return X(f,a)}}function X(f,a){(a==null||a>f.length)&&(a=f.length);for(var O=0,I=new Array(a);O<a;O++)I[O]=f[O];return I}function U(f,a){var O=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(O!=null){var I=[],g=!0,s=!1,n,t;try{for(O=O.call(f);!(g=(n=O.next()).done)&&(I.push(n.value),!(a&&I.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&O.return!=null&&O.return()}finally{if(s)throw t}}return I}}function D(f){if(Array.isArray(f))return f}var j={angle:0,type:"landscape-primary"},b=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:j,O=Object(K.useState)(a),I=Z(O,2),g=I[0],s=I[1];return Object(K.useEffect)(function(){var n=window.screen,t=!0,r=function(){if(t){var x=n,d=x.orientation;if(d){var c=d.angle,m=d.type;s({angle:c,type:m})}else window.orientation!==void 0?s({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):s(a)}};return window.addEventListener("orientationchange",r),r(),function(){t=!1,window.addEventListener("orientationchange",r)}},[]),g},p=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},y=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,l={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},_=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},h=function(){var a=b();return Object(p.jsx)("div",{children:JSON.stringify(a)})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=function(){var Y=window.navigator,E=Y.userAgent,Z=Y.platform,A=["Macintosh","MacIntel","MacPPC","Mac68K"],q=["Win32","Win64","Windows","WinCE"],X=["iPhone","iPad","iPod"],U="unknown";return A.indexOf(Z)!==-1?U="macos":X.indexOf(Z)!==-1?U="ios":q.indexOf(Z)!==-1?U="windows":/Android/.test(E)?U="android":!U&&/Linux/.test(Z)&&(U="linux"),U},G=function(){return typeof window!="undefined"?te():"unknown"},Q=e("./node_modules/react/jsx-runtime.js"),B=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,J={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},B=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,J={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},w=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},M=function(){var Y=G();return Object(Q.jsx)("div",{children:Y})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return _});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=function(f){Object(E.useEffect)(function(){if(!!f){var a=function(I){I=I||window.event;var g=I.relatedTarget||I.toElement;(!g||g.nodeName==="HTML")&&f()};return document.addEventListener("mouseout",a),function(){document.removeEventListener("mouseout",a)}}},[])},A=e("./node_modules/react/jsx-runtime.js");function q(h,f){return b(h)||j(h,f)||U(h,f)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(h,f){if(!!h){if(typeof h=="string")return D(h,f);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(h,f)}}function D(h,f){(f==null||f>h.length)&&(f=h.length);for(var a=0,O=new Array(f);a<f;a++)O[a]=h[a];return O}function j(h,f){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var O=[],I=!0,g=!1,s,n;try{for(a=a.call(h);!(I=(s=a.next()).done)&&(O.push(s.value),!(f&&O.length===f));I=!0);}catch(t){g=!0,n=t}finally{try{!I&&a.return!=null&&a.return()}finally{if(g)throw n}}return O}}function b(h){if(Array.isArray(h))return h}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},p=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,y={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},l=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},_=function(){var f=Object(E.useState)(0),a=q(f,2),O=a[0],I=a[1];return Z(function(){return I(function(g){return g+1})}),Object(A.jsxs)("div",{children:["Page leave count: ",O]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return I});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),te=e("./node_modules/core-js/modules/es.array.concat.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js");function A(g){return U(g)||X(g)||b(g)||q()}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function U(g){if(Array.isArray(g))return p(g)}function D(g,s){return l(g)||y(g,s)||b(g,s)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(g,s){if(!!g){if(typeof g=="string")return p(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(g,s)}}function p(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function y(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,u=!1,x,d;try{for(n=n.call(g);!(r=(x=n.next()).done)&&(t.push(x.value),!(s&&t.length===s));r=!0);}catch(c){u=!0,d=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(u)throw d}}return t}}function l(g){if(Array.isArray(g))return g}var _=function(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(K.useState)({state:n.slice(0,s),queue:n.slice(s)}),r=D(t,2),u=r[0],x=u.state,d=u.queue,c=r[1],m=function(){for(var T=arguments.length,C=new Array(T),R=0;R<T;R++)C[R]=arguments[R];return c(function(k){var N=[].concat(A(k.state),A(k.queue),C);return{state:N.slice(0,s),queue:N.slice(s)}})},i=function(T){return c(function(C){var R=T([].concat(A(C.state),A(C.queue)));return{state:R.slice(0,s),queue:R.slice(s)}})},o=function(){return c(function(T){return{state:T.state,queue:[]}})};return{state:x,queue:d,add:m,update:i,cleanQueue:o}},h=e("./node_modules/react/jsx-runtime.js"),f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},f=`import React, { useState } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},O=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},I=function(){var s=_(10,[1,2,3]),n=s.state,t=s.queue,r=s.add,u=s.update,x=s.cleanQueue;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["state: ",n]}),Object(h.jsxs)("div",{children:["queue: ",t]}),Object(h.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(h.jsx)("button",{onClick:function(){return u(function(c){return c})},children:"update"}),Object(h.jsx)("button",{onClick:x,children:"clear"})]})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`() => {
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
}`}},I.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return d});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/react/index.js"),h=e.n(_),f=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),a=e("./node_modules/react/jsx-runtime.js"),O=e.n(a);function I(c,m){return r(c)||t(c,m)||s(c,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(c,m){if(!!c){if(typeof c=="string")return n(c,m);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(c,m)}}function n(c,m){(m==null||m>c.length)&&(m=c.length);for(var i=0,o=new Array(m);i<m;i++)o[i]=c[i];return o}function t(c,m){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],v=!0,T=!1,C,R;try{for(i=i.call(c);!(v=(C=i.next()).done)&&(o.push(C.value),!(m&&o.length===m));v=!0);}catch(k){T=!0,R=k}finally{try{!v&&i.return!=null&&i.return()}finally{if(T)throw R}}return o}}function r(c){if(Array.isArray(c))return c}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},u=`import React, { useEffect } from "react";

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
`,x={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var d=function(){var m=Object(f.a)({width:0,height:0}),i=I(m,2),o=i[0],v=i[1];return Object(_.useEffect)(function(){var T=function(){v({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}},[]),Object(a.jsx)("pre",{children:JSON.stringify(o,null,2)})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return g});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.function.name.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.array.from.js"),p=e.n(b),y=e("./node_modules/react/index.js"),l=e.n(y);function _(s,n){return I(s)||O(s,n)||f(s,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(s,n){if(!!s){if(typeof s=="string")return a(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(s,n)}}function a(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function O(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function I(s){if(Array.isArray(s))return s}var g=function(n){var t=Object(y.useRef)(0),r=Object(y.useState)(n),u=_(r,2),x=u[0],d=u[1],c=Object(y.useCallback)(function(m){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){d(m)})},[]);return[x,c]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return r});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),A=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function q(u,x){return b(u)||j(u,x)||U(u,x)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(u,x){if(!!u){if(typeof u=="string")return D(u,x);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return D(u,x)}}function D(u,x){(x==null||x>u.length)&&(x=u.length);for(var d=0,c=new Array(x);d<x;d++)c[d]=u[d];return c}function j(u,x){var d=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var c=[],m=!0,i=!1,o,v;try{for(d=d.call(u);!(m=(o=d.next()).done)&&(c.push(o.value),!(x&&c.length===x));m=!0);}catch(T){i=!0,v=T}finally{try{!m&&d.return!=null&&d.return()}finally{if(i)throw v}}return c}}function b(u){if(Array.isArray(u))return u}var p={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},y=typeof window!="undefined",l=function(){var x=Object(E.useRef)(null),d=Object(A.a)(p),c=q(d,2),m=c[0],i=c[1],o=Object(E.useMemo)(function(){return y?new ResizeObserver(function(v){var T=v[0];T&&i(T.contentRect)}):null},[]);return Object(E.useEffect)(function(){return x.current&&o.observe(x.current),function(){o.disconnect()}},[x.current]),[x,m]},_=e("./node_modules/react/jsx-runtime.js");function h(u,x){return g(u)||I(u,x)||a(u,x)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(u,x){if(!!u){if(typeof u=="string")return O(u,x);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return O(u,x)}}function O(u,x){(x==null||x>u.length)&&(x=u.length);for(var d=0,c=new Array(x);d<x;d++)c[d]=u[d];return c}function I(u,x){var d=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var c=[],m=!0,i=!1,o,v;try{for(d=d.call(u);!(m=(o=d.next()).done)&&(c.push(o.value),!(x&&c.length===x));m=!0);}catch(T){i=!0,v=T}finally{try{!m&&d.return!=null&&d.return()}finally{if(i)throw v}}return c}}function g(u){if(Array.isArray(u))return u}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,n={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},s=`import React, { useEffect } from "react";

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
`,n={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},t=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var x=l(),d=h(x,2),c=d[0],m=d[1],i=Object(Z.a)();return Object(E.useEffect)(function(){i()},[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("textarea",{ref:c,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(_.jsx)("div",{children:JSON.stringify(m)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return x});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.parse-int.js");function A(){var d=document.createElement("style");return d.type="text/css",d.setAttribute("tm-scroll-lock",""),d}function q(d){var c=document.head||document.getElementsByTagName("head")[0];c.appendChild(d)}function X(d,c){d.styleSheet?d.styleSheet.cssText=c:d.appendChild(document.createTextNode(c))}function U(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var d=parseInt(window.getComputedStyle(document.body).paddingRight,10),c=window.innerWidth-document.documentElement.clientWidth;return d+c}var D=function(c){var m=c.disableBodyPadding,i=m?null:U(),o=`body {
        --removed-scroll-width: `+i+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(i?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return o};function j(d,c){return _(d)||l(d,c)||p(d,c)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(d,c){if(!!d){if(typeof d=="string")return y(d,c);var m=Object.prototype.toString.call(d).slice(8,-1);if(m==="Object"&&d.constructor&&(m=d.constructor.name),m==="Map"||m==="Set")return Array.from(d);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return y(d,c)}}function y(d,c){(c==null||c>d.length)&&(c=d.length);for(var m=0,i=new Array(c);m<c;m++)i[m]=d[m];return i}function l(d,c){var m=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(m!=null){var i=[],o=!0,v=!1,T,C;try{for(m=m.call(d);!(o=(T=m.next()).done)&&(i.push(T.value),!(c&&i.length===c));o=!0);}catch(R){v=!0,C=R}finally{try{!o&&m.return!=null&&m.return()}finally{if(v)throw C}}return i}}function _(d){if(Array.isArray(d))return d}var h=function(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},i=Object(E.useState)(c||!1),o=j(i,2),v=o[0],T=o[1],C=Object(E.useRef)(0),R=m.disableBodyPadding,k=Object(E.useRef)(null),N=function(){C.current=window.scrollY;var F=D({disableBodyPadding:R}),H=A();X(H,F),q(H),k.current=H},V=function(){!(k!=null&&k.current)||(k.current.parentNode.removeChild(k.current),k.current=null)};return Object(E.useEffect)(function(){return v?N():V(),V},[v]),Object(E.useEffect)(function(){c!==void 0&&T(c)},[c]),Object(E.useEffect)(function(){c===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&T(!0)},[T]),[v,T]},f=e("./node_modules/react/jsx-runtime.js");function a(d,c){return n(d)||s(d,c)||I(d,c)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(d,c){if(!!d){if(typeof d=="string")return g(d,c);var m=Object.prototype.toString.call(d).slice(8,-1);if(m==="Object"&&d.constructor&&(m=d.constructor.name),m==="Map"||m==="Set")return Array.from(d);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return g(d,c)}}function g(d,c){(c==null||c>d.length)&&(c=d.length);for(var m=0,i=new Array(c);m<c;m++)i[m]=d[m];return i}function s(d,c){var m=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(m!=null){var i=[],o=!0,v=!1,T,C;try{for(m=m.call(d);!(o=(T=m.next()).done)&&(i.push(T.value),!(c&&i.length===c));o=!0);}catch(R){v=!0,C=R}finally{try{!o&&m.return!=null&&m.return()}finally{if(v)throw C}}return i}}function n(d){if(Array.isArray(d))return d}var t=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},t=`import React, { useState } from "react";

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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},u=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},x=function(){var c=Object(E.useState)(!1),m=a(c,2),i=m[0],o=m[1],v=h(i);return Object(f.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(f.jsx)("button",{onClick:function(){return o(function(C){return!C})},children:i?"Unlock":"Lock"}),v?"Scroll locked":"Scrollable"]})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
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
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function A(f,a){return j(f)||D(f,a)||X(f,a)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(f,a){if(!!f){if(typeof f=="string")return U(f,a);var O=Object.prototype.toString.call(f).slice(8,-1);if(O==="Object"&&f.constructor&&(O=f.constructor.name),O==="Map"||O==="Set")return Array.from(f);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return U(f,a)}}function U(f,a){(a==null||a>f.length)&&(a=f.length);for(var O=0,I=new Array(a);O<a;O++)I[O]=f[O];return I}function D(f,a){var O=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(O!=null){var I=[],g=!0,s=!1,n,t;try{for(O=O.call(f);!(g=(n=O.next()).done)&&(I.push(n.value),!(a&&I.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&O.return!=null&&O.return()}finally{if(s)throw t}}return I}}function j(f){if(Array.isArray(f))return f}var b=function(a,O){var I=Object(Z.a)(a,O),g=A(I,2),s=g[0],n=g[1];return Object(K.useEffect)(function(){return s(),n},[s,n]),n},p=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},y=`import React from "react";
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
`,l={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},_=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},h=function(){var a=b(function(){alert("fire!")},2e3);return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:a,children:"Clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return d});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/react/index.js"),h=e.n(_),f=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),O=e.n(a);function I(c,m){return r(c)||t(c,m)||s(c,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(c,m){if(!!c){if(typeof c=="string")return n(c,m);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(c,m)}}function n(c,m){(m==null||m>c.length)&&(m=c.length);for(var i=0,o=new Array(m);i<m;i++)o[i]=c[i];return o}function t(c,m){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],v=!0,T=!1,C,R;try{for(i=i.call(c);!(v=(C=i.next()).done)&&(o.push(C.value),!(m&&o.length===m));v=!0);}catch(k){T=!0,R=k}finally{try{!v&&i.return!=null&&i.return()}finally{if(T)throw R}}return o}}function r(c){if(Array.isArray(c))return c}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},u=`import React from "react";
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var d=function(){var m=Object(f.a)(function(){alert("fire!")},2e3),i=I(m,2),o=i[0],v=i[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:o,children:"Run"}),Object(a.jsx)("button",{onClick:v,children:"Clear"})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return Q});var $=e("./node_modules/core-js/modules/web.timers.js"),K=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(J,w){var M=Object(W.useRef)(),z=Object(G.a)(J),Y=Object(W.useCallback)(function(){M.current&&clearTimeout(M.current),M.current=setTimeout(function(){z()},w)},[w]),E=Object(W.useCallback)(function(){M.current&&clearTimeout(M.current)},[]);return Object(W.useEffect)(function(){return E},[E]),[Y,E]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return g});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js");function Z(s,n){return D(s)||U(s,n)||q(s,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(s,n){if(!!s){if(typeof s=="string")return X(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(s,n)}}function X(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function U(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function D(s){if(Array.isArray(s))return s}var j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(E.useState)(n),r=Z(t,2),u=r[0],x=r[1],d=Object(E.useCallback)(function(c){return x(function(m){return typeof c=="boolean"?c:!m})},[]);return[u,d]},b=e("./node_modules/react/jsx-runtime.js");function p(s,n){return f(s)||h(s,n)||l(s,n)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(s,n){if(!!s){if(typeof s=="string")return _(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(s,n)}}function _(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function h(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],u=!0,x=!1,d,c;try{for(t=t.call(s);!(u=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));u=!0);}catch(m){x=!0,c=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(x)throw c}}return r}}function f(s){if(Array.isArray(s))return s}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},a=`import React from "react";
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
`,O={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},I=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},g=function(){var n=j(),t=p(n,2),r=t[0],u=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["current state: ",""+r]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return u(!0)},children:"setTrue"}),Object(b.jsx)("button",{onClick:function(){return u(!1)},children:"setFalse"}),Object(b.jsx)("button",{onClick:u,children:"toggle"})]})]})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return n});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function A(t,r){return j(t)||D(t,r)||X(t,r)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t,r){if(!!t){if(typeof t=="string")return U(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return U(t,r)}}function U(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,x=new Array(r);u<r;u++)x[u]=t[u];return x}function D(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var x=[],d=!0,c=!1,m,i;try{for(u=u.call(t);!(d=(m=u.next()).done)&&(x.push(m.value),!(r&&x.length===r));d=!0);}catch(o){c=!0,i=o}finally{try{!d&&u.return!=null&&u.return()}finally{if(c)throw i}}return x}}function j(t){if(Array.isArray(t))return t}var b=function(r){var u=r.value,x=r.defaultValue,d=r.finalValue,c=r.rule,m=r.onChange,i=r.onValueUpdate,o=c(u),v=Object(E.useRef)("initial"),T=c(x)?x:d,C=Object(E.useState)(T),R=A(C,2),k=R[0],N=R[1],V=o?u:k;!o&&v.current==="controlled"&&(V=d),v.current=o?"controlled":"uncontrolled";var P=v.current,F=function(ae){typeof m=="function"&&m(ae),P==="uncontrolled"&&N(ae)};return Object(E.useEffect)(function(){P==="uncontrolled"&&N(V),typeof i=="function"&&i(V)},[P,V]),[V,F,v.current]},p=e("./node_modules/react/jsx-runtime.js");function y(t,r){return a(t)||f(t,r)||_(t,r)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,r){if(!!t){if(typeof t=="string")return h(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return h(t,r)}}function h(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,x=new Array(r);u<r;u++)x[u]=t[u];return x}function f(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var x=[],d=!0,c=!1,m,i;try{for(u=u.call(t);!(d=(m=u.next()).done)&&(x.push(m.value),!(r&&x.length===r));d=!0);}catch(o){c=!0,i=o}finally{try{!d&&u.return!=null&&u.return()}finally{if(c)throw i}}return x}}function a(t){if(Array.isArray(t))return t}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},O=`import React, { useState } from "react";

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
`,I={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},s=function(r){var u=r.label,x=r.value,d=r.defaultValue,c=r.onChange,m=Object(Z.a)(),i=b({value:x,defaultValue:d,finalValue:null,onChange:c,rule:function(R){return typeof R=="string"}}),o=y(i,2),v=o[0],T=o[1];return Object(p.jsxs)("div",{style:{padding:"1rem"},children:[Object(p.jsx)("label",{htmlFor:m,children:u}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{id:m,type:"text",value:v,onChange:function(R){return T(R.target.value)}})]})};s.displayName="CustomInput";var n=function(){var r=Object(E.useState)("controlled"),u=y(r,2),x=u[0],d=u[1];return Object(p.jsxs)("div",{style:{padding:20},children:[Object(p.jsx)(s,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(p.jsx)(s,{label:"Controlled",value:x,onChange:d}),Object(p.jsx)(s,{label:"Controlled (fixed value)",value:"fixed",onChange:d})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return d});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),B=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(B),w=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(X),D=e("./node_modules/core-js/modules/es.array.slice.js"),j=e.n(D),b=e("./node_modules/core-js/modules/es.function.name.js"),p=e.n(b),y=e("./node_modules/core-js/modules/es.array.from.js"),l=e.n(y),_=e("./node_modules/react/index.js"),h=e.n(_),f=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),a=e("./node_modules/react/jsx-runtime.js"),O=e.n(a);function I(c,m){return r(c)||t(c,m)||s(c,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(c,m){if(!!c){if(typeof c=="string")return n(c,m);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(c,m)}}function n(c,m){(m==null||m>c.length)&&(m=c.length);for(var i=0,o=new Array(m);i<m;i++)o[i]=c[i];return o}function t(c,m){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],v=!0,T=!1,C,R;try{for(i=i.call(c);!(v=(C=i.next()).done)&&(o.push(C.value),!(m&&o.length===m));v=!0);}catch(k){T=!0,R=k}finally{try{!v&&i.return!=null&&i.return()}finally{if(T)throw R}}return o}}function r(c){if(Array.isArray(c))return c}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},u=`import React, { useEffect, useState } from "react";

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
`,x={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var d=function(){var m=Object(_.useState)(""),i=I(m,2),o=i[0],v=i[1];return Object(_.useEffect)(function(){console.log("useEffect:",o)},[o]),Object(f.a)(function(){console.log("useUpdateEffect:",o)},[o]),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",onChange:function(C){return v(C.target.value)}})})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return W});var $=e("./node_modules/react/index.js"),K=e.n($),W=function(G,Q){var B=Object($.useRef)(!0);Object($.useEffect)(function(){if(!B.current)return G();B.current=!1},Q)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,S,e){"use strict";e.d(S,"c",function(){return E}),e.d(S,"d",function(){return Z}),e.d(S,"b",function(){return A}),e.d(S,"a",function(){return X});var $=e("./node_modules/react/index.js"),K=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),te=e("./node_modules/react/jsx-runtime.js"),G=function(D){var j=D.styles,b=E();return Object(te.jsx)(W.a,{styles:Object(W.b)(j(b))})};G.displayName="Global";var Q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},B=function(){return Object(te.jsx)(W.a,{styles:Q})};B.displayName="NormalizeCSS";var J=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),M=e("./node_modules/core-js/modules/es.object.assign.js");function z(U,D){return D?Object.keys(U).reduce(function(j,b){if(b==="headings"&&D.headings){var p=D.headings?Object.keys(U.headings).reduce(function(y,l){return y[l]=Object.assign({},U.headings[l],D.headings[l]),y},{}):U.headings;return Object.assign({},j,{headings:Object.assign({},U.headings,D.headings,p)})}return j[b]=typeof D[b]=="object"?Object.assign({},U[b],D[b]):D[b]||U[b],j},{}):U}var Y=Object($.createContext)({theme:K.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function E(){var U;return((U=Object($.useContext)(Y))===null||U===void 0?void 0:U.theme)||K.a}function Z(){var U;return((U=Object($.useContext)(Y))===null||U===void 0?void 0:U.styles)||{}}function A(){var U;return((U=Object($.useContext)(Y))===null||U===void 0?void 0:U.emotionOptions)||{key:"co",prepend:!0}}var q=function(){return Object(te.jsx)(G,{styles:function(j){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:j.fontFamily,backgroundColor:j.colorScheme==="dark"?j.colors.black:j.colors.white,color:j.colorScheme==="dark"?j.colors.white:j.colors.black,lineHeight:j.lineHeight,fontSizes:j.fontSizes.b3}}}})};q.displayName="GlobalStyles";var X=function(D){var j=D.theme,b=D.styles,p=b===void 0?{}:b,y=D.emotionOptions,l=D.withNormalizeCSS,_=l===void 0?!1:l,h=D.withGlobalStyles,f=h===void 0?!1:h,a=D.children;return Object(te.jsxs)(Y.Provider,{value:{theme:z(K.a,j),styles:p,emotionOptions:y},children:[_&&Object(te.jsx)(B,{}),f&&Object(te.jsx)(q,{}),a]})};X.displayName="TmProvider",X.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(oe,S,e){"use strict";e.d(S,"b",function(){return be}),e.d(S,"a",function(){return je});var $=e("./node_modules/core-js/modules/es.object.keys.js"),K={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[K.navy1,K.navy1,K.navy2],secondary:[K.green2,K.green2,K.green1],tertiary:[K.white,K.white,K.gray6],red:[K.red2,K.red2,K.red1]},te={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},G={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Q={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},B={small:2,medium:4,large:8,round:100,circular:"50%"},J={xsmall:4,small:8,medium:16,large:24},w={xsmall:576,small:768,medium:1024,large:1408},M={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},z={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},Y={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},E=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),Z={mobile:"@media (max-width: "+E.a.mobile+"px)",tablet:"@media (max-width: "+E.a.tablet+"px)",desktop:"@media (max-width: "+E.a.desktop+"px)",largeDesktop:"@media (max-width: "+E.a.maxSize+"px)"},A=e("./node_modules/core-js/modules/es.object.assign.js"),q=function(se){for(var ye="",ie=1;ie<se.length-1;ie+=1)ye+=se[ie]+" "+ie/(se.length-1)*100+"%, ";return se[0]+" 0%, "+ye+se[se.length-1]+" 100%"},X=function(se){for(var ye=arguments.length,ie=new Array(ye>1?ye-1:0),Oe=1;Oe<ye;Oe++)ie[Oe-1]=arguments[Oe];return"linear-gradient("+se+"deg, "+q(ie)+")"},U=function(){for(var se=arguments.length,ye=new Array(se),ie=0;ie<se;ie++)ye[ie]=arguments[ie];return"radial-gradient(circle, "+q(ye)+")"},D=function(se){return typeof se.size=="number"?se.size:se.sizes[se.size]||se.size||se.sizes.medium},j=function(se){return function(ye){return"@media (min-width: "+(D({size:ye,sizes:se.breakpoints})+1)+"px)"}},b=function(se){return function(ye){return"@media (max-width: "+D({size:ye,sizes:se.breakpoints})+"px)"}},p=e("./node_modules/core-js/modules/es.string.replace.js"),y=e("./node_modules/core-js/modules/es.regexp.exec.js"),l=e("./node_modules/core-js/modules/es.number.is-nan.js"),_=e("./node_modules/core-js/modules/es.number.constructor.js"),h=e("./node_modules/core-js/modules/es.parse-int.js"),f=e("./node_modules/core-js/modules/es.array.map.js"),a=e("./node_modules/core-js/modules/es.string.split.js"),O=e("./node_modules/core-js/modules/es.string.starts-with.js"),I=e("./node_modules/core-js/modules/es.array.is-array.js"),g=e("./node_modules/core-js/modules/es.symbol.js"),s=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),r=e("./node_modules/core-js/modules/es.string.iterator.js"),u=e("./node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),d=e("./node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/core-js/modules/es.function.name.js"),m=e("./node_modules/core-js/modules/es.array.from.js");function i(le,se){return R(le)||C(le,se)||v(le,se)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(le,se){if(!!le){if(typeof le=="string")return T(le,se);var ye=Object.prototype.toString.call(le).slice(8,-1);if(ye==="Object"&&le.constructor&&(ye=le.constructor.name),ye==="Map"||ye==="Set")return Array.from(le);if(ye==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ye))return T(le,se)}}function T(le,se){(se==null||se>le.length)&&(se=le.length);for(var ye=0,ie=new Array(se);ye<se;ye++)ie[ye]=le[ye];return ie}function C(le,se){var ye=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ye!=null){var ie=[],Oe=!0,ke=!1,Ie,Re;try{for(ye=ye.call(le);!(Oe=(Ie=ye.next()).done)&&(ie.push(Ie.value),!(se&&ie.length===se));Oe=!0);}catch(Pe){ke=!0,Re=Pe}finally{try{!Oe&&ye.return!=null&&ye.return()}finally{if(ke)throw Re}}return ie}}function R(le){if(Array.isArray(le))return le}var k=function(se){var ye=se.replace("#","");return typeof ye=="string"&&ye.length===6&&!Number.isNaN(Number("0x"+ye))},N=function(se){var ye=se.replace("#",""),ie=parseInt(ye,16),Oe=ie>>16&255,ke=ie>>8&255,Ie=ie&255;return{r:Oe,g:ke,b:Ie,a:1}},V=function(se){var ye=se.replace(/[^0-9,.]/g,"").split(",").map(Number),ie=i(ye,4),Oe=ie[0],ke=ie[1],Ie=ie[2],Re=ie[3];return{r:Oe,g:ke,b:Ie,a:Re||1}},P=function(se){return k(se)?N(se):se.startsWith("rgb")?V(se):{r:0,g:0,b:0,a:1}},F=function(se,ye){if(typeof se!="string"||ye>1||ye<0)return"rgba(0, 0, 0, 1)";var ie=P(se),Oe=ie.r,ke=ie.g,Ie=ie.b;return"rgba("+Oe+", "+ke+", "+Ie+", "+ye+")"},H=function(se,ye){var ie=P(se),Oe=ie.r,ke=ie.g,Ie=ie.b,Re=ie.a,Pe=1-ye,Be=function(Ve){return Math.round(Ve*Pe)};return"rgba("+Be(Oe)+", "+Be(ke)+", "+Be(Ie)+", "+Re+")"},ae=function(se,ye){var ie=P(se),Oe=ie.r,ke=ie.g,Ie=ie.b,Re=ie.a,Pe=function(Le){return Math.round(Le+(255-Le)*ye)};return"rgba("+Pe(Oe)+", "+Pe(ke)+", "+Pe(Ie)+", "+Re+")"},ue=function(se){return se*8},ge={linearGradient:X,radialGradient:U,smallerThan:b,largerThan:j,rgba:F,size:D,darken:H,lighten:ae,spacing:ue},me=function(se){return Object.assign({},se,{fn:{largerThan:ge.largerThan(se),smallerThan:ge.smallerThan(se),radialGradient:ge.radialGradient,linearGradient:ge.linearGradient,rgba:ge.rgba,size:ge.size,lighten:ge.lighten,darken:ge.darken,spacing:ge.spacing}})},L=Object.keys(W),ee=Object.keys(K),re=["xsmall","small","medium","large"],pe=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],be=function(se){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:se.fontFamily||"sans-serif"}},he={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:K.black,colors:K,palettes:W,shadows:te,fontSizes:G,lineHeights:Q,radius:B,spacing:J,breakpoints:w,headings:M,opacity:z,zIndex:Y,extra:{},media:Z},je=me(he)},"./packages/travelmakers-design-styles/src/theme/types/TmSize.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return $});var $={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200}},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return f});var $=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),B=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.array.from.js");function X(a,O){return p(a)||b(a,O)||D(a,O)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(a,O){if(!!a){if(typeof a=="string")return j(a,O);var I=Object.prototype.toString.call(a).slice(8,-1);if(I==="Object"&&a.constructor&&(I=a.constructor.name),I==="Map"||I==="Set")return Array.from(a);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return j(a,O)}}function j(a,O){(O==null||O>a.length)&&(O=a.length);for(var I=0,g=new Array(O);I<O;I++)g[I]=a[I];return g}function b(a,O){var I=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(I!=null){var g=[],s=!0,n=!1,t,r;try{for(I=I.call(a);!(s=(t=I.next()).done)&&(g.push(t.value),!(O&&g.length===O));s=!0);}catch(u){n=!0,r=u}finally{try{!s&&I.return!=null&&I.return()}finally{if(n)throw r}}return g}}function p(a){if(Array.isArray(a))return a}function y(a){var O={};return Object.keys(a).forEach(function(I){var g=X(a[I],2),s=g[0],n=g[1];O[s]=n}),O}var l=e("./node_modules/core-js/modules/es.array.reduce.js");function _(a,O,I){return Object.keys(O).reduce(function(g,s){return g[s]=a(O[s],I?"tm-"+I+"-"+s:null),g},{})}var h=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function f(a){var O=typeof a=="function"?a:function(){return a};function I(g,s){var n=Object(te.c)(),t=Object(te.d)()[s==null?void 0:s.name],r=Object(h.a)(),u=r.css,x=r.cx,d=0;function c(C){return d+=1,"tm-ref_"+(C||"")+"_"+d}var m=O(n,g,c),i=typeof(s==null?void 0:s.overrideStyles)=="function"?s==null?void 0:s.overrideStyles(n):(s==null?void 0:s.overrideStyles)||{},o=typeof t=="function"?t(n):t||{},v=typeof(s==null?void 0:s.co)=="function"?s.co(n):s==null?void 0:s.co,T=y(Object.keys(m).map(function(C){var R=x(u(m[C]),u(o[C]),u(i[C]),u(v));return[C,R]}));return{classes:_(x,T,s==null?void 0:s.name),cx:x,theme:n}}return I}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,S,e){"use strict";e.d(S,"a",function(){return T});var $=e("./node_modules/core-js/modules/es.object.assign.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/clsx/dist/clsx.m.js"),Z=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),A=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/react/index.js");function D(C){return y(C)||p(C)||b(C)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(C,R){if(!!C){if(typeof C=="string")return l(C,R);var k=Object.prototype.toString.call(C).slice(8,-1);if(k==="Object"&&C.constructor&&(k=C.constructor.name),k==="Map"||k==="Set")return Array.from(C);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return l(C,R)}}function p(C){if(typeof Symbol!="undefined"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function y(C){if(Array.isArray(C))return l(C)}function l(C,R){(R==null||R>C.length)&&(R=C.length);for(var k=0,N=new Array(R);k<R;k++)N[k]=C[k];return N}function _(C,R){var k=Object(U.useRef)();return(!k.current||R.length!==k.current.prevDeps.length||k.current.prevDeps.map(function(N,V){return N===R[V]}).indexOf(!1)>=0)&&(k.current={v:C(),prevDeps:D(R)}),k.current.v}var h=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/react/jsx-runtime.js"),O=function(){var C;function R(k){return C===void 0&&(C=Object(h.a)(k||{key:"co",prepend:!0})),C}return{getCache:R}}(),I=O.getCache,g=Object(U.createContext)(void 0);function s(){var C=Object(f.b)();return Object(U.useContext)(g)||I(C)}function n(C){var R=C.children,k=C.value;return Object(a.jsx)(g.Provider,{value:k,children:R})}n.displayName="CacheProvider";function t(C,R){return c(C)||d(C,R)||u(C,R)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(C,R){if(!!C){if(typeof C=="string")return x(C,R);var k=Object.prototype.toString.call(C).slice(8,-1);if(k==="Object"&&C.constructor&&(k=C.constructor.name),k==="Map"||k==="Set")return Array.from(C);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return x(C,R)}}function x(C,R){(R==null||R>C.length)&&(R=C.length);for(var k=0,N=new Array(R);k<R;k++)N[k]=C[k];return N}function d(C,R){var k=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(k!=null){var N=[],V=!0,P=!1,F,H;try{for(k=k.call(C);!(V=(F=k.next()).done)&&(N.push(F.value),!(R&&N.length===R));V=!0);}catch(ae){P=!0,H=ae}finally{try{!V&&k.return!=null&&k.return()}finally{if(P)throw H}}return N}}function c(C){if(Array.isArray(C))return C}var m="ref";function i(C){var R;if(C.length!==1)return{args:C,ref:R};var k=t(C,1),N=k[0];if(!(N instanceof Object))return{args:C,ref:R};if(!(m in N))return{args:C,ref:R};R=N[m];var V=Object.assign({},N);return delete V[m],{args:[V],ref:R}}var o=function(){function C(k,N,V){var P=[],F=Object(A.a)(k,P,V);return P.length<2?V:F+N(P)}function R(k){var N=k.cache,V=function(){for(var H=arguments.length,ae=new Array(H),ue=0;ue<H;ue++)ae[ue]=arguments[ue];var ge=i(ae),me=ge.ref,L=ge.args,ee=Object(Z.a)(L,N.registered);return Object(A.b)(N,ee,!1),N.key+"-"+ee.name+(me===void 0?"":" "+me)},P=function(){for(var H=arguments.length,ae=new Array(H),ue=0;ue<H;ue++)ae[ue]=arguments[ue];return C(N.registered,V,Object(E.a)(ae))};return{css:V,cx:P}}return{cssFactory:R}}(),v=o.cssFactory;function T(){var C=s();return _(function(){return v({cache:C})},[C])}},"./storybook-init-framework-entry.js":function(oe,S,e){"use strict";e.r(S);var $=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,S,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,S){}},[[0,4,5]]]);
