(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,S,e){"use strict";e.r(S);var $={};e.r($),e.d($,"parameters",function(){return c}),e.d($,"decorators",function(){return i});var H=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),M=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),J=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),w=e("./node_modules/core-js/modules/es.object.define-properties.js"),V=e("./node_modules/core-js/modules/es.object.define-property.js"),z=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e("./node_modules/react/index.js"),_=e("./node_modules/react/jsx-runtime.js");function d(o,p){return j(o)||a(o,p)||h(o,p)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(o,p){if(!!o){if(typeof o=="string")return y(o,p);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return y(o,p)}}function y(o,p){(p==null||p>o.length)&&(p=o.length);for(var T=0,C=new Array(p);T<p;T++)C[T]=o[T];return C}function a(o,p){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,U,L;try{for(T=T.call(o);!(R=(U=T.next()).done)&&(C.push(U.value),!(p&&C.length===p));R=!0);}catch(P){k=!0,L=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw L}}return C}}function j(o){if(Array.isArray(o))return o}var D=Object(f.createContext)(null),g=function(){var p=Object(f.useContext)(D);if(!p)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return p},s=function(p){var T=p.colorScheme,C=p.toggleColorScheme,R=p.children,k=Object(f.useState)("init"),U=d(k,2),L=U[0],P=U[1];return Object(f.useEffect)(function(){P("update")},[]),Object(_.jsx)(D.Provider,{value:{colorScheme:T,toggleColorScheme:C},children:R},L)};s.displayName="ColorSchemeProvider",s.displayName="@travelmakers-design/styles/ColorSchemeProvider";var n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),c={layout:"fullscreen",docs:{theme:t.themes.light},darkMode:{current:"light"}};function O(o){var p=Object(r.useDarkMode)()?"dark":"light";return Object(_.jsx)(s,{colorScheme:p,toggleColorScheme:function(){},children:Object(_.jsx)(n.a,{theme:{colorScheme:p},withGlobalStyles:!0,withNormalizeCSS:!0,children:o.children})})}O.displayName="ThemeWrapper";var i=[function(o){return Object(_.jsx)(O,{children:o()})}];function u(o,p){var T=Object.keys(o);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(o);p&&(C=C.filter(function(R){return Object.getOwnPropertyDescriptor(o,R).enumerable})),T.push.apply(T,C)}return T}function m(o){for(var p=1;p<arguments.length;p++){var T=arguments[p]!=null?arguments[p]:{};p%2?u(Object(T),!0).forEach(function(C){l(o,C,T[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(C){Object.defineProperty(o,C,Object.getOwnPropertyDescriptor(T,C))})}return o}function l(o,p,T){return p in o?Object.defineProperty(o,p,{value:T,enumerable:!0,configurable:!0,writable:!0}):o[p]=T,o}Object.keys($).forEach(function(o){var p=$[o];switch(o){case"args":return Object(z.d)(p);case"argTypes":return Object(z.b)(p);case"decorators":return p.forEach(function(C){return Object(z.f)(C,!1)});case"loaders":return p.forEach(function(C){return Object(z.g)(C,!1)});case"parameters":return Object(z.h)(m({},p),!1);case"argTypesEnhancers":return p.forEach(function(C){return Object(z.c)(C)});case"argsEnhancers":return p.forEach(function(C){return Object(z.e)(C)});case"render":return Object(z.i)(p);case"globals":case"globalTypes":{var T={};return T[o]=p,Object(z.h)(T,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,S,e){"use strict";(function($){var H=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,H.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],$,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,S,e){var $={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx","./travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx","./travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function H(te){var G=W(te);return e(G)}function W(te){if(!e.o($,te)){var G=new Error("Cannot find module '"+te+"'");throw G.code="MODULE_NOT_FOUND",G}return $[te]}H.keys=function(){return Object.keys($)},H.resolve=W,re.exports=H,H.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js"),q=function(t){return Object(A.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[Object(A.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(A.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]}))};q.displayName="AccordionCheck",q.displayName="@travelmakers-design/core/AccordionCheck";var X=function(t){return Object(A.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},t,{children:Object(A.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};X.displayName="AccordionIcon",X.displayName="@travelmakers-design/core/AccordionIcon";var N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),I=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),x=Object(N.a)(function(n,t){var r,c,O,i,u,m,l,o=t.open;return{container:Object.assign({},Object(I.b)(n),(r={display:"flex",flexDirection:"column",width:"100%",backgroundColor:n.colors.white,marginBottom:"4px"},r["&:last-child"]={marginBottom:0},r)),row:(c={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},c[""+n.media.desktop]={padding:"12px 16px 12px 16px"},c),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:n.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(O={display:"block",width:"100%",fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",fontWeight:"bold",color:n.colors.navy1},O[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px",fontWeight:"400"},O),icon:(i={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},i[""+n.media.mobile]={width:"24px",height:"24px"},i),content:(u={padding:"0 24px 14px 24px"},u[""+n.media.desktop]={padding:"0 16px 12px 16px"},u),divider:(m={width:"100%",height:"1px",backgroundColor:n.colors.navy1,marginBottom:"14px"},m[""+n.media.desktop]={marginBottom:"11px"},m),answerText:{display:"flex",lineHeight:"1.5"},answer:(l={fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",color:n.colors.navy1,width:"100%"},l[""+n.media.desktop]={marginTop:"3px"},l[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px"},l)}});function b(n,t){return h(n)||v(n,t)||_(n,t)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,t){if(!!n){if(typeof n=="string")return d(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(n,t)}}function d(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function v(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function h(n){if(Array.isArray(n))return n}var y=Object(Z.forwardRef)(function(n,t){var r=n.component,c=n.type,O=c===void 0?"Default":c,i=n.data,u=n.className,m=n.containerStyle,l=n.iconStyle,o=n.overrideStyles,p=n.__staticSelector,T=p===void 0?"div":p,C=Object(Z.useState)(Array.from({length:i.length},function(ae,ue){return!1})),R=b(C,2),k=R[0],U=R[1],L=r||"div",P=x({open:k},{overrideStyles:o,name:"div"}),F=P.classes,K=P.cx;return Object(A.jsx)("div",{className:K(m),children:i==null?void 0:i.map(function(ae,ue){return Object(A.jsxs)(L,{ref:t,className:K(F.container,u),children:[Object(A.jsxs)("div",{className:K(F.row),onClick:function(){return U(function(me){return me==null?void 0:me.map(function(B,ee){return ue===ee?!B:B})})},children:[Object(A.jsxs)("div",{className:K(F.titleWrap),children:[O==="Number"&&Object(A.jsxs)("span",{className:K(F.titleIndex),children:[ue+1,"."]}),O==="Checkbox"&&Object(A.jsx)("div",{style:{marginRight:8},children:Object(A.jsx)(q,{})}),Object(A.jsx)("span",{className:K(F.title),children:ae.question})]}),Object(A.jsx)(X,{className:K(F.icon),style:Object.assign({transform:"rotate("+(k[ue]?180:0)+"deg)"},l)})]}),k[ue]&&Object(A.jsxs)("div",{className:K(F.content),children:[Object(A.jsx)("div",{className:K(F.divider)}),Object(A.jsx)("div",{className:K(F.answerText),children:Object(A.jsx)("span",{className:K(F.answer),dangerouslySetInnerHTML:{__html:ae==null?void 0:ae.answer}})})]})]},"accordion-"+ue)})})});y.displayName="@travelmakers-design/core/Accordion";var a=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},a=`import { Accordion } from "../Accordion";
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
`,j={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},D=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:y,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:D,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof D}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},s=function(t){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(y,Object.assign({},t))})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return x}),e.d(S,"TextType",function(){return b}),e.d(S,"NumberType",function(){return f});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/react/index.js"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),w=function(d,v){return{small:{fontFamily:"Pretendard",fontWeight:v==="text"?"bold":"normal",lineHeight:d.lineHeights.caption+"px",fontSize:d.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:v==="text"?"bold":"normal",lineHeight:d.lineHeights.b3+"px",fontSize:d.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:v==="text"?"bold":"normal",lineHeight:d.lineHeights.b2+"px",fontSize:d.fontSizes.b2}}},V=function(d,v){return{small:{padding:v==="text"?"0px 4px":"0px 8px"},medium:{padding:v==="text"?"0px 5px":"0px 8px"},large:{padding:v==="text"?"1px 7px":"0px 8px"}}},z=Object(M.a)(function(_,d){var v=d.size,h=d.type;return{container:Object.assign({},Object(J.b)(_),w(_,h)[v],V(_,h)[v],{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:_.colors.white,borderRadius:h==="text"?"6px":_.radius.round,backgroundColor:_.colors.red2})}}),Y=e("./node_modules/react/jsx-runtime.js"),E=["component","size","type","children","className","overrideStyles","__staticSelector"];function Z(_,d){if(_==null)return{};var v=A(_,d),h,y;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(_);for(y=0;y<a.length;y++)h=a[y],!(d.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,h)||(v[h]=_[h]))}return v}function A(_,d){if(_==null)return{};var v={},h=Object.keys(_),y,a;for(a=0;a<h.length;a++)y=h[a],!(d.indexOf(y)>=0)&&(v[y]=_[y]);return v}var q=Object(Q.forwardRef)(function(_,d){var v=_.component,h=_.size,y=h===void 0?"small":h,a=_.type,j=a===void 0?"text":a,D=_.children,g=_.className,s=_.overrideStyles,n=_.__staticSelector,t=n===void 0?"span":n,r=Z(_,E),c=v||"span",O=z({size:y,type:j},{overrideStyles:s,name:"span"}),i=O.classes,u=O.cx;return Object(Y.jsx)(c,Object.assign({ref:d,className:u(i.container,g)},r,{children:D}))});q.displayName="@travelmakers-design/core/Badge";var X=`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,N={Default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},TextType:{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},NumberType:{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}},X=`import {
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
`,N={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}},TextType:{startLoc:{col:24,line:69},endLoc:{col:1,line:88},startBody:{col:24,line:69},endBody:{col:1,line:88}},NumberType:{startLoc:{col:26,line:90},endLoc:{col:1,line:119},startBody:{col:26,line:90},endBody:{col:1,line:119}}},I=S.default={title:"@travelmakers-design/core/Component/Badge",component:q,argTypes:{size:{defaultValue:"small",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",options:["text","number"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,locationsMap:{default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},"text-type":{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},"number-type":{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}}},docs:{page:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(H.g,{}),Object(Y.jsx)(H.f,{}),Object(Y.jsx)(H.b,{}),Object(Y.jsx)(H.d,{}),Object(Y.jsx)(H.a,{story:H.c}),Object(Y.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}},x=function(d){return Object(Y.jsx)("div",{style:{padding:24,display:"flex"},children:Object(Y.jsx)(q,Object.assign({},d,{children:"N"}))})};x.displayName="Default";var b=function(d){return Object(Y.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(Y.jsx)(q,Object.assign({},d,{type:"text",size:"small",style:{marginRight:"4px"},children:"N"})),Object(Y.jsx)(q,Object.assign({},d,{type:"text",size:"medium",style:{marginRight:"4px"},children:"N"})),Object(Y.jsx)(q,Object.assign({},d,{type:"text",size:"large",style:{marginRight:"4px"},children:"N"}))]})};b.displayName="TextType";var f=function(d){return Object(Y.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(Y.jsx)(q,Object.assign({},d,{type:"number",size:"small",style:{marginRight:"4px"},children:"1"})),Object(Y.jsx)(q,Object.assign({},d,{type:"number",size:"medium",style:{marginRight:"4px"},children:"1"})),Object(Y.jsx)(q,Object.assign({},d,{type:"number",size:"large",style:{marginRight:"4px"},children:"1"}))]})};f.displayName="NumberType",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
}`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},b.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json":function(re){re.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json":function(re){re.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"},{"key":"MARKETING","label":"\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758(\uC120\uD0DD)","content":"1. \uAD11\uACE0\uC131 \uC815\uBCF4\uC758 \uC774\uC6A9 \uBAA9\uC801\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC \uAE30\uD68C \uC81C\uACF5, \uC2E0\uADDC \uC18C\uC2DD \uC548\uB0B4 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778 \uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uC11C\uBE44\uC2A4 \uD654\uBA74, \uC804\uD654, e-mail, \uD734\uB300\uD3F0 \uBB38\uC790(SMS, LMS, MMS), \uC6B0\uD3B8\uBB3C, \uC571 \uD478\uC2DC, \uCE74\uCE74\uC624 \uCC44\uB110 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC5D0\uAC8C \uC81C\uACF5\uB420 \uC218 \uC788\uC73C\uBA70, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC9C4\uD589 \uC0AC\uD56D, \uC608\uC57D \uD655\uC778 \uB4F1 \uC758\uBB34\uC801\uC73C\uB85C \uC548\uB0B4\uB418\uC5B4\uC57C \uD558\uB294 \uC815\uBCF4\uC131 \uB0B4\uC6A9\uC740 \uC218\uC2E0 \uB3D9\uC758 \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C \uC81C\uACF5\uB429\uB2C8\uB2E4.\\n\\n2. \uBBF8\uB3D9\uC758 \uC2DC \uBD88\uC774\uC775 \uC0AC\uD56D\\n\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uACBD\uC6B0 \uC2E0\uADDC \uD638\uD154 \uC624\uD508 \uC18C\uC2DD, \uD504\uB85C\uBAA8\uC158 \uD2B9\uAC00 \uC18C\uC2DD, \uACE0\uAC1D \uB300\uC0C1 \uC774\uBCA4\uD2B8 \uC18C\uC2DD \uB4F1 \uD61C\uD0DD \uC0AC\uD56D \uC801\uC6A9\uC774 \uBD88\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C22\uC870 \uC81C5\uD56D\uC5D0 \uC758\uD574 \uC120\uD0DD \uC815\uBCF4 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uB3D9\uC758 \uAC70\uBD80\uD558\uC2DC\uB354\uB77C\uB3C4 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uACF5\uACE0\uC77C\uC790 : 2020.11.15\\n\uC2DC\uD589\uC77C\uC790 : 2020.11.16"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return me});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Z=e("./node_modules/core-js/modules/es.object.keys.js"),A=e("./node_modules/core-js/modules/es.array.index-of.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.object.values.js"),N=e("./node_modules/core-js/modules/es.array.reduce.js"),I=e("./node_modules/core-js/modules/es.array.includes.js"),x=e("./node_modules/core-js/modules/es.string.includes.js"),b=e("./node_modules/core-js/modules/es.array.map.js"),f=e("./node_modules/react/index.js"),_=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),d=e("./node_modules/react/jsx-runtime.js"),v=function(ee){return Object(d.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(d.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(d.jsx)("circle",{fill:"#30373F",cx:"12",cy:"12",r:"12"}),Object(d.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m7.405 10.84 3.296 4.185 6.304-6.4"})]})}))};v.displayName="IcChecked",v.displayName="@travelmakers-design/core/IcChecked";var h=function(ee){return Object(d.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},ee,{children:Object(d.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(d.jsx)("g",{children:Object(d.jsx)("g",{children:Object(d.jsxs)("g",{transform:"translate(-73 -67) translate(7 67) translate(66)",children:[Object(d.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#C1A485"}),Object(d.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M9.256 13.55L13.376 18.781 21.256 10.781"})]})})})})}))};h.displayName="IcCheckSelectedBeige",h.displayName="@travelmakers-design/core/IcCheckSelectedBeige";var y=function(ee){return Object(d.jsx)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(d.jsx)("path",{d:"M2.423 5.587 9 12.573l6.577-6.986",stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})}))};y.displayName="IcDropDown",y.displayName="@travelmakers-design/core/IcDropDown";var a=function(ee){return Object(d.jsx)("svg",Object.assign({width:"9",height:"15",viewBox:"0 0 9 15",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(d.jsx)("path",{d:"m.5 14.31 7-7-7-7",stroke:"#FFF","stroke-width":"2",fill:"none","fill-rule":"evenodd"})}))};a.displayName="IcDropDownWhite",a.displayName="@travelmakers-design/core/IcDropDownWhite";var j=function(ee){return Object(d.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ee,{children:Object(d.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(d.jsx)("circle",{fill:"#D7D7D7",cx:"10",cy:"10",r:"10"}),Object(d.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m6.17 9.033 2.748 3.488 5.253-5.333"})]})}))};j.displayName="IcUnCheck",j.displayName="@travelmakers-design/core/IcUnCheck";var D=e("./node_modules/core-js/modules/es.string.small.js"),g=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),n=function(ee,oe){if(oe>1){var pe,be;return be={},be["&:first-of-type"]=(pe={padding:"10px 16px",backgroundColor:ee.colors.gray6},pe["& > img"]={width:"16px",height:"16px",marginRight:"8px"},pe["& > span"]={fontWeight:"700"},pe),be}else return{}},t=Object(g.a)(function(B,ee){var oe,pe,be,he,je,le=ee.length,se=ee.popup;return{container:Object.assign({},Object(s.b)(B),{display:"block",width:"100%",border:"solid 1px #d7d7d7",borderRadius:B.radius.small}),option:Object.assign((oe={display:"flex",alignItems:"center",width:"100%",padding:"12px 16px",borderBottom:"solid 1px #d7d7d7",backgroundColor:"white",cursor:"pointer"},oe["&:last-child"]={borderBottom:0},oe[".transparent-agreement"]={backgroundColor:"transparent"},oe),n(B,le)),optionIcon:{width:"16px",height:"16px",marginRight:"12px",cursor:"pointer"},moreIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",cursor:"pointer"},labelContainer:{display:"flex",width:"100%",justifyContent:"space-between",cursor:"pointer"},label:(pe={fontSize:"12px",color:B.colors.navy1,lineHeight:"20px",wordBreak:"keep-all"},pe[".transparent-agreement &"]={color:B.colors.white},pe),moteIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",marginLeft:"auto",cursor:"pointer"},modalContentText:(je={display:"block",width:"100%",maxHeight:"100%",lineHeight:"1.5",whiteSpace:"pre-wrap",color:"${colors.navy}",overflowY:"auto",paddingBottom:"16px"},je[""+B.media.desktop]={fontSize:"12px",padding:"12px 20px"},je["&.Agreement"]=(he={height:"calc(100% - 44px)"},he["@media screen and (min-width: 768px)"]=(be={height:"calc(100% - 104px)"},be["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},be),he),je)}}),r=["component","transparent","options","value","defaultSelect","setValue","containerStyle","popup","children","className","overrideStyles","__staticSelector"];function c(B,ee){return l(B)||m(B,ee)||i(B,ee)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(B,ee){if(!!B){if(typeof B=="string")return u(B,ee);var oe=Object.prototype.toString.call(B).slice(8,-1);if(oe==="Object"&&B.constructor&&(oe=B.constructor.name),oe==="Map"||oe==="Set")return Array.from(B);if(oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe))return u(B,ee)}}function u(B,ee){(ee==null||ee>B.length)&&(ee=B.length);for(var oe=0,pe=new Array(ee);oe<ee;oe++)pe[oe]=B[oe];return pe}function m(B,ee){var oe=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(oe!=null){var pe=[],be=!0,he=!1,je,le;try{for(oe=oe.call(B);!(be=(je=oe.next()).done)&&(pe.push(je.value),!(ee&&pe.length===ee));be=!0);}catch(se){he=!0,le=se}finally{try{!be&&oe.return!=null&&oe.return()}finally{if(he)throw le}}return pe}}function l(B){if(Array.isArray(B))return B}function o(B,ee){if(B==null)return{};var oe=p(B,ee),pe,be;if(Object.getOwnPropertySymbols){var he=Object.getOwnPropertySymbols(B);for(be=0;be<he.length;be++)pe=he[be],!(ee.indexOf(pe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,pe)||(oe[pe]=B[pe]))}return oe}function p(B,ee){if(B==null)return{};var oe={},pe=Object.keys(B),be,he;for(he=0;he<pe.length;he++)be=pe[he],!(ee.indexOf(be)>=0)&&(oe[be]=B[be]);return oe}var T=Object(f.forwardRef)(function(B,ee){var oe=B.component,pe=B.transparent,be=pe===void 0?!1:pe,he=B.options,je=he===void 0?[]:he,le=B.value,se=B.defaultSelect,ye=se===void 0?null:se,ie=B.setValue,Oe=B.containerStyle,ke=Oe===void 0?{}:Oe,De=B.popup,Re=De===void 0?!1:De,Pe=B.children,Be=B.className,Le=B.overrideStyles,Ve=B.__staticSelector,de=Ve===void 0?"div":Ve,ne=o(B,r),fe=oe||"div",ve=t({},{overrideStyles:Le,name:"div"}),ce=ve.classes,_e=ve.cx,Te=Object(f.useState)(null),Ee=c(Te,2),Ie=Ee[0],xe=Ee[1],Se=Object(f.useState)(!1),Ae=c(Se,2),we=Ae[0],He=Ae[1],We=Object(f.useMemo)(function(){if(le)return Object.values(le).filter(function(Ce){return!!Ce}).length===je.length},[le,je.length]);Object(f.useEffect)(function(){ie==null||ie(je.reduce(function(Ce,Ue){return ye!==null&&ye.includes(Ue.key)?Ce[Ue.key]=!0:Ce[Ue.key]=!1,Ce},{}))},[]);var Ke=function(){var Ue={};je.map(function(Ye){return Ue[Ye.key]=!We}),ie==null||ie(Ue)},ze=function(Ue){xe(Ue),He(!0)},Fe=function(){He(!1)},$e=function(Ue){ie==null||ie(function(Ye){var Me;return Object.assign({},Ye,(Me={},Me[Ue.key]=!0,Me))}),He(!1)};return Object(d.jsxs)(fe,Object.assign({ref:ee,className:_e(ce.container,be&&"transparent-agreement",Be),style:ke},ne,{children:[je.length>1&&Object(d.jsxs)("div",{className:_e(ce.option),onClick:function(){return Ke()},children:[We?be?Object(d.jsx)(h,{className:_e(ce.optionIcon)}):Object(d.jsx)(v,{className:_e(ce.optionIcon)}):Object(d.jsx)(j,{className:_e(ce.optionIcon)}),Object(d.jsx)("span",{className:_e(ce.label),children:"\uC804\uCCB4 \uB3D9\uC758"})]}),je.map(function(Ce,Ue){return Object(d.jsxs)("div",{className:_e(ce.option),children:[le!=null&&le[Ce.key]?be?Object(d.jsx)(h,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}):Object(d.jsx)(v,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}):Object(d.jsx)(j,{className:_e(ce.optionIcon),onClick:function(){return ie==null?void 0:ie(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ce.key]=!Me[Ce.key]===void 0?!0:!Me[Ce.key],Ne))})}}),Object(d.jsxs)("div",{className:_e(ce.labelContainer),onClick:function(){return ze(Ce)},children:[Object(d.jsx)("span",{className:_e(ce.label),children:Ce.label}),be?Object(d.jsx)(a,{className:_e(ce.moreIcon),style:{transform:"rotate(0)"}}):Object(d.jsx)(y,{className:_e(ce.moreIcon),style:{transform:"rotate(-90deg)"}})]})]},"option-"+Ce.key)}),Ie&&we&&Object(d.jsx)(_.a,{open:we,onClose:Fe,modalPopup:Re,ModalContainerClassName:"max-h",handleAgree:function(){return $e(Ie)},title:Ie==null?void 0:Ie.label,backIcon:!0,children:Ie==null?void 0:Ie.content})]}))});T.displayName="@travelmakers-design/core/BottomSheet";function C(B,ee){return P(B)||L(B,ee)||k(B,ee)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(B,ee){if(!!B){if(typeof B=="string")return U(B,ee);var oe=Object.prototype.toString.call(B).slice(8,-1);if(oe==="Object"&&B.constructor&&(oe=B.constructor.name),oe==="Map"||oe==="Set")return Array.from(B);if(oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe))return U(B,ee)}}function U(B,ee){(ee==null||ee>B.length)&&(ee=B.length);for(var oe=0,pe=new Array(ee);oe<ee;oe++)pe[oe]=B[oe];return pe}function L(B,ee){var oe=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(oe!=null){var pe=[],be=!0,he=!1,je,le;try{for(oe=oe.call(B);!(be=(je=oe.next()).done)&&(pe.push(je.value),!(ee&&pe.length===ee));be=!0);}catch(se){he=!0,le=se}finally{try{!be&&oe.return!=null&&oe.return()}finally{if(he)throw le}}return pe}}function P(B){if(Array.isArray(B))return B}var F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,K={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}},F=`import {
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
`,K={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:72},startBody:{col:23,line:59},endBody:{col:1,line:72}}},ae=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json"),ue=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json"),ge=S.default={title:"@travelmakers-design/core/Component/BottomSheet",component:T,argTypes:{popup:{defaultValue:!1,description:"\uD31D\uC5C5 \uC5EC\uBD80",table:{type:{summary:"boolean"}},control:{type:"boolean"}},options:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}}},docs:{page:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E.g,{}),Object(d.jsx)(E.f,{}),Object(d.jsx)(E.b,{}),Object(d.jsx)(E.d,{}),Object(d.jsx)(E.a,{story:E.c}),Object(d.jsx)(E.e,{})]})}}}},me=function(ee){var oe=Object(f.useState)({}),pe=C(oe,2),be=pe[0],he=pe[1];return Object(d.jsx)("div",{style:{padding:24,display:"flex"},children:Object(d.jsx)(T,Object.assign({},ee,{options:ue,value:be,setValue:he,popup:!0}))})};me.displayName="Default",me.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},me.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return _});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Q=e("./node_modules/react/index.js"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/core-js/modules/es.string.small.js"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),Y=e("./packages/travelmakers-design-core/src/constants/index.ts"),E=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Z={xsmall:{height:Y.a.xsmall,padding:"0 24px"},small:{height:Y.a.small,padding:"0 24px"},medium:{height:Y.a.medium,padding:"0 24px"},large:{height:Y.a.large,padding:"0 24px"}},A=function(v){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.caption+"px",fontSize:v.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b3+"px",fontSize:v.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b2+"px",fontSize:v.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5+"px",fontSize:v.fontSizes.h5}}},q=Object.keys(Z).reduce(function(d,v){return d[v]=Z[v].height,d},{}),X=function(v){return{display:v?"block":"inline-block",width:v?"100%":"auto"}},N=Object(V.a)(function(d,v,h){var y,a,j,D=v.variant,g=v.size,s=v.fullWidth,n=v.roundness,t=v.line,r=h("loading"),c=h("inner"),O=h("spinner"),i=D||d.colors.navy1;return{loading:(y={ref:r,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},y["."+c]={opacity:0},y["."+O]={display:"flex"},y),solid:(a={backgroundColor:d.palettes[i][d.colorScheme==="light",0],color:i==="white"?d.colors.navy1:d.colors.white,"&:not(:disabled):hover":{backgroundColor:d.palettes[i][d.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:d.palettes[i][d.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:n?d.radius.round:2,outline:"1px solid "+d.palettes[i][d.colorScheme==="light",0]}}},a["&:disabled:not(."+r+")"]={backgroundColor:d.colors.gray5,color:t?d.colors.black:d.colors.white},a),ghost:(j={backgroundColor:d.colors.transparent,border:"1px solid "+d.palettes[i][d.colorScheme==="light",0],color:i==="white"?d.colors.white:d.palettes[i][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:n?d.radius.round:2,outline:"1px solid "+d.palettes[i][d.colorScheme==="light",0]}}},j["&:disabled:not(."+r+")"]={color:Object(E.a)(d.palettes[i][1],d.opacity.opacity3),border:"1px solid "+Object(E.a)(d.palettes[i][1],d.opacity.opacity3)},j),root:Object.assign({},Z[g],X(s),Object(z.b)(d),A(d)[g],{borderRadius:n?d.radius.round:d.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:c,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:O,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),I=e("./node_modules/react/jsx-runtime.js"),x=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function b(d,v){if(d==null)return{};var h=f(d,v),y,a;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(d);for(a=0;a<j.length;a++)y=j[a],!(v.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,y)||(h[y]=d[y]))}return h}function f(d,v){if(d==null)return{};var h={},y=Object.keys(d),a,j;for(j=0;j<y.length;j++)a=y[j],!(v.indexOf(a)>=0)&&(h[a]=d[a]);return h}var _=Object(Q.forwardRef)(function(d,v){var h=d.children,y=d.component,a=d.size,j=a===void 0?"medium":a,D=d.variant,g=D===void 0?"primary":D,s=d.line,n=s===void 0?!1:s,t=d.roundness,r=t===void 0?!1:t,c=d.fullWidth,O=c===void 0?!1:c,i=d.type,u=i===void 0?"button":i,m=d.disabled,l=m===void 0?!1:m,o=d.leftIcon,p=o===void 0?"":o,T=d.rightIcon,C=T===void 0?"":T,R=d.className,k=d.co,U=d.overrideStyles,L=b(d,x),P=Object(G.c)(),F=N({variant:g,size:j,fullWidth:O,roundness:r,line:n},{overrideStyles:U,name:"Button"}),K=F.classes,ae=F.cx;return Object(I.jsx)(M.a,Object.assign({component:y||"button",ref:v,type:u,disabled:l,className:ae(K.root,K[n?"ghost":"solid"],R),co:k,onTouchStart:function(){}},L,{children:Object(I.jsxs)("div",{className:K.inner,children:[p&&Object(I.jsx)("span",{className:ae(K.icon,K.leftIcon),children:p}),Object(I.jsx)("span",{className:K.label,children:h}),C&&Object(I.jsx)("span",{className:ae(K.icon,K.rightIcon),children:C})]})}))});_.displayName="@travelmakers-design/core/Button"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),G=e("./node_modules/react/index.js"),Q=e.n(G),M=e("./node_modules/react/jsx-runtime.js"),J=e.n(M),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},w=`import {
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
`,V={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}};S.default={title:"@travelmakers-design/core/Component/Button",component:te.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(W.g,{}),Object(M.jsx)(W.f,{}),Object(M.jsx)(W.b,{}),Object(M.jsx)(W.d,{}),Object(M.jsx)(W.a,{story:W.c}),Object(M.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var z=function(E){return Object(M.jsx)("div",{style:{margin:"0 auto"},children:Object(M.jsx)(te.a,Object.assign({},E,{children:"Button"}))})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return I});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=Object(J.a)(function(x,b){var f=b.type,_=f===void 0?"default":f;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px 24px",gap:"8px",backgroundColor:""+x.colors.gray6},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",padding:0,gap:"8px"},title:{color:_==="default"?x.colors.green2:x.colors.red2,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:x.fontSizes.b2,lineHeight:x.lineHeights.b2+"px"},content:{color:x.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:x.fontSizes.b2,lineHeight:x.lineHeights.b2+"px"}}}),V=e("./node_modules/react/jsx-runtime.js"),z=function(b){var f=b.color;return Object(V.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z",fill:f!=null?f:"#0D5E49"}),Object(V.jsx)("rect",{x:"0.5",y:"0.5",width:"13",height:"13",rx:"6.5",stroke:f!=null?f:"#0D5E49"})]})};z.displayName="CalloutAlertIcon",z.displayName="@travelmakers-design/core/CalloutAlertIcon";var Y=["type","title","content","color","className","co","overrideStyles"];function E(x,b){if(x==null)return{};var f=Z(x,b),_,d;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(x);for(d=0;d<v.length;d++)_=v[d],!(b.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,_)||(f[_]=x[_]))}return f}function Z(x,b){if(x==null)return{};var f={},_=Object.keys(x),d,v;for(v=0;v<_.length;v++)d=_[v],!(b.indexOf(d)>=0)&&(f[d]=x[d]);return f}var A=Object(H.forwardRef)(function(x,b){var f=x.type,_=f===void 0?"default":f,d=x.title,v=x.content,h=x.color,y=x.className,a=x.co,j=x.overrideStyles,D=E(x,Y),g=Object(Q.c)(),s=w({type:_},{overrideStyles:j,name:"Callout"}),n=s.classes,t=s.cx;return Object(V.jsxs)(M.a,Object.assign({ref:b,className:t(n.root,y),co:a},D,{children:[Object(V.jsxs)("div",{className:t(n.titleWrapper),children:[Object(V.jsx)(z,{color:_==="default"?g.colors.green2:g.colors.red2}),Object(V.jsx)("span",{className:t(n.title),children:d})]}),Object(V.jsx)("span",{className:t(n.content),children:v})]}))});A.displayName="@travelmakers-design/core/Callout";var q=`
    
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
`,X={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:39},startBody:{col:23,line:37},endBody:{col:1,line:39}}},N=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}}}},title:"@travelmakers-design/core/Component/Callout",component:A,argTypes:{type:{defaultValue:"default",description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","warning"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},content:{defaultValue:"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},I=function(b){return Object(V.jsx)(A,Object.assign({},b))};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout {...props} />;
}`}},I.parameters)},"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return x});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),V=function(f){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:f.fontSizes.h4,lineHeight:f.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:f.fontSizes.h1,lineHeight:f.lineHeights.h1+"px"}}},z=Object(J.a)(function(b,f){var _=f.size,d=_===void 0?"small":_,v=f.color,h=v===void 0?"navy":v;return{root:{},titleWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:w.a.maxSize},title:Object.assign({},V(b)[d],{color:h==="navy"?b.colors.navy1:b.colors.white,margin:"0 35px"}),divider:{backgroundColor:h==="navy"?b.colors.navy1:b.colors.white,flex:1,height:"1px"}}}),Y=e("./node_modules/react/jsx-runtime.js"),E=["size","color","title","className","co","overrideStyles"];function Z(b,f){if(b==null)return{};var _=A(b,f),d,v;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(v=0;v<h.length;v++)d=h[v],!(f.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,d)||(_[d]=b[d]))}return _}function A(b,f){if(b==null)return{};var _={},d=Object.keys(b),v,h;for(h=0;h<d.length;h++)v=d[h],!(f.indexOf(v)>=0)&&(_[v]=b[v]);return _}var q=Object(H.forwardRef)(function(b,f){var _=b.size,d=_===void 0?"small":_,v=b.color,h=v===void 0?"navy":v,y=b.title,a=b.className,j=b.co,D=b.overrideStyles,g=Z(b,E),s=Object(Q.c)(),n=z({size:d,color:h},{overrideStyles:D,name:"HeaderPage"}),t=n.classes,r=n.cx;return Object(Y.jsx)(M.a,Object.assign({ref:f,className:r(t.root,a),co:j},g,{children:Object(Y.jsxs)("div",{className:r(t.titleWrapper),children:[Object(Y.jsx)("span",{className:r(t.divider)}),Object(Y.jsx)("span",{className:r(t.title),children:y}),Object(Y.jsx)("span",{className:r(t.divider)})]})}))});q.displayName="@travelmakers-design/core/Header/Section";var X=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,N={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}},X=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:33},endLoc:{col:1,line:35},startBody:{col:23,line:33},endBody:{col:1,line:35}}},I=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}}},title:"@travelmakers-design/core/Component/HeaderPage",component:q,argTypes:{size:{defaultValue:"small",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},x=function(f){return Object(Y.jsx)(q,Object.assign({},f))};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderPage {...props} />;
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return x});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/react/jsx-runtime.js"),w=function(f){var _,d;return Object(J.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f,{children:Object(J.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(J.jsx)("path",{stroke:(_=f.color)!==null&&_!==void 0?_:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(J.jsx)("path",{fill:(d=f.color)!==null&&d!==void 0?d:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};w.displayName="BackIcon",w.displayName="@travelmakers-design/core/BackIcon";var V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=function(f){return{small:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:f.fontSizes.b3,lineHeight:f.lineHeights.b3+"px"},large:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:f.fontSizes.h6,lineHeight:f.lineHeights.h6+"px"}}},Y=Object(V.a)(function(b,f){var _=f.size,d=_===void 0?"small":_;return{root:{display:"flex",alignItems:"center",width:"100%",height:d==="small"?"44px":"64px",maxWidth:"calc(1200px - 16px * 2)",padding:"0 16px",backgroundColor:b.colors.navy1},wrapper:{display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},title:Object.assign({},z(b)[d],{color:b.colors.white,marginLeft:24})}}),E=["size","title","className","co","overrideStyles"];function Z(b,f){if(b==null)return{};var _=A(b,f),d,v;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(v=0;v<h.length;v++)d=h[v],!(f.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,d)||(_[d]=b[d]))}return _}function A(b,f){if(b==null)return{};var _={},d=Object.keys(b),v,h;for(h=0;h<d.length;h++)v=d[h],!(f.indexOf(v)>=0)&&(_[v]=b[v]);return _}var q=Object(H.forwardRef)(function(b,f){var _=b.size,d=_===void 0?"small":_,v=b.title,h=b.className,y=b.co,a=b.overrideStyles,j=Z(b,E),D=Object(Q.c)(),g=Y({size:d},{overrideStyles:a,name:"HeaderSection"}),s=g.classes,n=g.cx;return Object(J.jsx)(M.a,Object.assign({ref:f,className:n(s.root,h),co:y},j,{children:Object(J.jsxs)("div",{className:n(s.wrapper),children:[Object(J.jsx)(w,{width:d==="small"?"16px":"24px",height:d==="small"?"16px":"24px"}),Object(J.jsx)("span",{className:n(s.title),children:v})]})}))});q.displayName="@travelmakers-design/core/Header/Section";var X=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,N={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}},X=`import React from "react";
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
`,N={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},I=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@travelmakers-design/core/Component/HeaderSection",component:q,argTypes:{size:{defaultValue:"small",description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},title:{defaultValue:"\uD398\uC774\uC9C0 \uC774\uB984",table:{type:{summary:"React.ReactNode"}},description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},x=function(f){return Object(J.jsx)(q,Object.assign({},f))};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderSection {...props} />;
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return M});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./node_modules/react/jsx-runtime.js"),Q=e.n(G),M=function(w){return Object(G.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w,{children:Object(G.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};M.displayName="CloseIcon",M.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return I});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./node_modules/core-js/modules/es.string.small.js"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V=e("./packages/travelmakers-design-core/src/constants/index.ts"),z=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Y={xsmall:{width:V.a.xsmall,height:V.a.xsmall},small:{width:V.a.small,height:V.a.small},medium:{width:V.a.medium,height:V.a.medium},large:{width:V.a.large,height:V.a.large}},E={xsmall:8,small:8,medium:16,large:16},Z=Object(J.a)(function(x,b,f){var _,d,v,h=b.variant,y=b.size,a=b.line,j=b.roundness,D=f("loading"),g=f("inner"),s=f("spinner"),n=h||x.colors.navy1;return{loading:(_={ref:D,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},_["."+g]={opacity:0},_["."+s]={display:"flex"},_),solid:(d={backgroundColor:x.palettes[n][x.colorScheme==="light",0],color:x.colorScheme==="light"?x.colors.white:x.colors.black,"&:not(:disabled):hover":{backgroundColor:x.palettes[n][x.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:x.palettes[n][x.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:j?x.radius.round:2,outline:"1px solid "+x.palettes[n][x.colorScheme==="light",0]}}},d["&:disabled:not(."+D+")"]={backgroundColor:x.colors.gray5,color:a?x.colors.black:x.colors.white},d),ghost:(v={backgroundColor:x.colors.transparent,border:"1px solid "+x.palettes[n][x.colorScheme==="light",0],color:x.palettes[n][x.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(z.a)(x.palettes[n][x.colorScheme==="light",0],x.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(z.a)(x.palettes[n][x.colorScheme==="light",1],x.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:j?x.radius.round:2,outline:"1px solid "+x.palettes[n][x.colorScheme==="light",0]}}},v["&:disabled:not(."+D+")"]={backgroundColor:x.colors.gray5,color:a?x.colors.black:x.colors.white},v),root:Object.assign({},Y[y],Object(w.b)(x),{borderRadius:j?x.radius.round:x.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:g,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:Y[y].width-E[y],height:Y[y].height-E[y]}},spinnerWrapper:{ref:s,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function X(x,b){if(x==null)return{};var f=N(x,b),_,d;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(x);for(d=0;d<v.length;d++)_=v[d],!(b.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,_)||(f[_]=x[_]))}return f}function N(x,b){if(x==null)return{};var f={},_=Object.keys(x),d,v;for(v=0;v<_.length;v++)d=_[v],!(b.indexOf(d)>=0)&&(f[d]=x[d]);return f}var I=Object(G.forwardRef)(function(x,b){var f=x.children,_=x.component,d=x.size,v=d===void 0?"medium":d,h=x.variant,y=x.line,a=x.type,j=a===void 0?"button":a,D=x.disabled,g=D===void 0?!1:D,s=x.roundness,n=s===void 0?!1:s,t=x.className,r=x.co,c=x.overrideStyles,O=X(x,q),i=Z({variant:h,size:v,line:y,roundness:n},{overrideStyles:c,name:"Button"}),u=i.classes,m=i.cx;return Object(A.jsx)(Q.a,Object.assign({component:_||"button",className:m(u.root,u[y?"ghost":"solid"],t),type:j,disabled:g,ref:b,onTouchStart:function(){},co:r},O,{children:Object(A.jsx)("div",{className:u.inner,children:f})}))});I.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return X});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),M=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),w=e("./node_modules/react/jsx-runtime.js"),V=["size","variant"];function z(N,I){if(N==null)return{};var x=Y(N,I),b,f;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(N);for(f=0;f<_.length;f++)b=_[f],!(I.indexOf(b)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,b)||(x[b]=N[b]))}return x}function Y(N,I){if(N==null)return{};var x={},b=Object.keys(N),f,_;for(_=0;_<b.length;_++)f=b[_],!(I.indexOf(f)>=0)&&(x[f]=N[f]);return x}var E=Object(M.forwardRef)(function(N,I){var x=N.size,b=x===void 0?"medium":x,f=N.variant,_=f===void 0?"primary":f,d=z(N,V);return Object(w.jsx)(Q.a,Object.assign({size:b,variant:_,ref:I},d,{children:Object(w.jsx)(J.a,{})}))});E.displayName="@travelmakers-design/core/CloseButton";var Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H.g,{}),Object(w.jsx)(H.f,{}),Object(w.jsx)(H.b,{}),Object(w.jsx)(H.d,{}),Object(w.jsx)(H.a,{story:H.c}),Object(w.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}},X=function(I){return Object(w.jsx)(E,Object.assign({},I))};X.displayName="Default",X.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},X.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),G=e("./node_modules/react/index.js"),Q=e.n(G),M=e("./node_modules/react/jsx-runtime.js"),J=e.n(M),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},w=`import {
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
`,V={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};S.default={title:"@travelmakers-design/core/Component/IconButton",component:te.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(W.g,{}),Object(M.jsx)(W.f,{}),Object(M.jsx)(W.b,{}),Object(M.jsx)(W.d,{}),Object(M.jsx)(W.a,{story:W.c}),Object(M.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var z=function(E){var Z=Object(M.jsx)("svg",{viewBox:"0 0 24 24",children:Object(M.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(M.jsx)(te.a,Object.assign({},E,{children:Z}))};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.fill.js"),N=e("./node_modules/react/index.js"),I=e("./node_modules/react/jsx-runtime.js"),x=function(o){return Object(I.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{children:[Object(I.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(I.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(I.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(I.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};x.displayName="CouponPercentIcon",x.displayName="@travelmakers-design/core/CouponPercentIcon";var b=e("./node_modules/core-js/modules/es.string.small.js"),f=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),_=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),d=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.caption+"px",fontSize:o.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b3+"px",fontSize:o.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2}}},v=function(o){return{small:{padding:"2px 4px"},medium:{padding:"0px 12px"},large:{padding:"0px 16px"}}},h=Object(f.a)(function(l,o){var p,T=o.fill;return{container:Object.assign({},Object(_.b)(l),d(l).small,v(l).small,(p={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:l.colors.green3,marginRight:"6px",gap:"5px",borderRadius:l.radius.medium,backgroundColor:l.colors.green5},p["&:last-child"]={marginRight:0},p)),line:{color:l.colors.green3,background:"inherit",border:"1px solid"}}}),y=["component","fill","children","className","overrideStyles","__staticSelector"];function a(l,o){if(l==null)return{};var p=j(l,o),T,C;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(l);for(C=0;C<R.length;C++)T=R[C],!(o.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,T)||(p[T]=l[T]))}return p}function j(l,o){if(l==null)return{};var p={},T=Object.keys(l),C,R;for(R=0;R<T.length;R++)C=T[R],!(o.indexOf(C)>=0)&&(p[C]=l[C]);return p}var D=Object(N.forwardRef)(function(l,o){var p=l.component,T=l.fill,C=T===void 0?!1:T,R=l.children,k=l.className,U=l.overrideStyles,L=l.__staticSelector,P=L===void 0?"span":L,F=a(l,y),K=p||"span",ae=h({fill:C},{overrideStyles:U,name:"span"}),ue=ae.classes,ge=ae.cx;return Object(I.jsxs)(K,Object.assign({ref:o,className:ge(ue.container,!C&&ue.line,k)},F,{children:[Object(I.jsx)(x,{}),R]}))});D.displayName="@travelmakers-design/core/IconTag";function g(l){return r(l)||t(l)||n(l)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(l,o){if(!!l){if(typeof l=="string")return c(l,o);var p=Object.prototype.toString.call(l).slice(8,-1);if(p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set")return Array.from(l);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return c(l,o)}}function t(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function r(l){if(Array.isArray(l))return c(l)}function c(l,o){(o==null||o>l.length)&&(o=l.length);for(var p=0,T=new Array(o);p<o;p++)T[p]=l[p];return T}var O=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}},O=`import {
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
`,i={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:66},startBody:{col:23,line:49},endBody:{col:1,line:66}}},u=S.default={title:"@travelmakers-design/core/Component/IconTag",component:D,argTypes:{fill:{defaultValue:!0,description:"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Z.g,{}),Object(I.jsx)(Z.f,{}),Object(I.jsx)(Z.b,{}),Object(I.jsx)(Z.d,{}),Object(I.jsx)(Z.a,{story:Z.c}),Object(I.jsx)(Z.e,{})]})}},actions:{handles:["click button"]}}},m=function(o){var p=Object(I.jsx)("svg",{viewBox:"0 0 24 24",children:Object(I.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(I.jsx)("div",{style:{padding:24,display:"flex"},children:g(Array(1).keys()).map(function(T,C){return Object(I.jsxs)(D,Object.assign({},o,{children:["\uCFE0\uD3F0 \uC801\uC6A9\uAC00",C+1]}))})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return R});var $=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),b=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),f=Object(b.a)(function(k,U){var L=U.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:L?L in k.radius?k.radius[L]:L:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(k.colorScheme==="dark",k.palettes.primary[0]),backgroundColor:(k.colorScheme==="dark",k.palettes.primary[0]),borderRadius:L?L in k.radius?k.radius[L]:L:0}}}),_=e("./node_modules/react/jsx-runtime.js"),d=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function v(k,U){return D(k)||j(k,U)||y(k,U)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(k,U){if(!!k){if(typeof k=="string")return a(k,U);var L=Object.prototype.toString.call(k).slice(8,-1);if(L==="Object"&&k.constructor&&(L=k.constructor.name),L==="Map"||L==="Set")return Array.from(k);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return a(k,U)}}function a(k,U){(U==null||U>k.length)&&(U=k.length);for(var L=0,P=new Array(U);L<U;L++)P[L]=k[L];return P}function j(k,U){var L=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(L!=null){var P=[],F=!0,K=!1,ae,ue;try{for(L=L.call(k);!(F=(ae=L.next()).done)&&(P.push(ae.value),!(U&&P.length===U));F=!0);}catch(ge){K=!0,ue=ge}finally{try{!F&&L.return!=null&&L.return()}finally{if(K)throw ue}}return P}}function D(k){if(Array.isArray(k))return k}function g(k,U){if(k==null)return{};var L=s(k,U),P,F;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(k);for(F=0;F<K.length;F++)P=K[F],!(U.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,P)||(L[P]=k[P]))}return L}function s(k,U){if(k==null)return{};var L={},P=Object.keys(k),F,K;for(K=0;K<P.length;K++)F=P[K],!(U.indexOf(F)>=0)&&(L[F]=k[F]);return L}var n=null,t="loadImage",r=function(U,L){U.forEach(function(P){P.isIntersecting&&(L.unobserve(P.target),P.target.dispatchEvent(new CustomEvent(t)))})},c=Object(I.forwardRef)(function(k,U){var L=k.lazy,P=k.threshold,F=P===void 0?.5:P,K=k.placeholder,ae=k.src,ue=k.radius,ge=k.width,me=ge===void 0?"100%":ge,B=k.height,ee=B===void 0?"auto":B,oe=k.alt,pe=k.fit,be=k.style,he=k.className,je=k.co,le=k.overrideStyles,se=g(k,d),ye=f({radius:ue},{overrideStyles:le,name:"Image"}),ie=ye.classes,Oe=ye.cx,ke=Object(I.useState)(!1),De=v(ke,2),Re=De[0],Pe=De[1],Be=Object(I.useState)(!1),Le=v(Be,2),Ve=Le[0],de=Le[1],ne=Object(I.useRef)(null),fe={width:me,height:ee,objectFit:pe};return Object(I.useImperativeHandle)(U,function(){return ne.current}),Object(I.useEffect)(function(){if(!L){de(!0);return}var ve=function(){return de(!0)},ce=ne.current;return ce&&ce.addEventListener(t,ve),function(){ce&&ce.removeEventListener(t,ve)}},[L]),Object(I.useEffect)(function(){!L||(n=new IntersectionObserver(r,{threshold:F}),ne.current&&n.observe(ne.current))},[L,F]),Object(_.jsxs)(x.a,Object.assign({className:Oe(ie.root,he),co:je},se,{children:[Object(_.jsx)("img",{ref:ne,src:ae,alt:oe,className:ie.image,style:fe,onLoad:function(){return Pe(!0)}}),(!Re||L&&!Ve)&&K&&Object(_.jsx)("div",{className:ie.placeholder,title:oe,children:K})]}))});c.displayName="@travelmakers-design/core/Image";function O(k){return l(k)||m(k)||u(k)||i()}function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(k,U){if(!!k){if(typeof k=="string")return o(k,U);var L=Object.prototype.toString.call(k).slice(8,-1);if(L==="Object"&&k.constructor&&(L=k.constructor.name),L==="Map"||L==="Set")return Array.from(k);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return o(k,U)}}function m(k){if(typeof Symbol!="undefined"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)}function l(k){if(Array.isArray(k))return o(k)}function o(k,U){(U==null||U>k.length)&&(U=k.length);for(var L=0,P=new Array(U);L<U;L++)P[L]=k[L];return P}var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},p=`import {
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
`,T={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}},C=S.default={title:"@travelmakers-design/core/Component/Image",component:c,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Z.g,{}),Object(_.jsx)(Z.f,{}),Object(_.jsx)(Z.b,{}),Object(_.jsx)(Z.d,{}),Object(_.jsx)(Z.a,{story:Z.c}),Object(_.jsx)(Z.e,{})]})}}}},R=function(U){return Object(_.jsx)(_.Fragment,{children:O(new Array(10)).map(function(L,P){return Object(_.jsx)("div",{children:Object(_.jsx)(c,Object.assign({placeholder:Object(_.jsx)("div",{children:"Placeholder"})},U))},P)})})};R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return d}),e.d(S,"WithIcon",function(){return v}),e.d(S,"WithRightSection",function(){return h}),e.d(S,"Textarea",function(){return y});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.string.small.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),E={xsmall:12,small:14,medium:14,large:14,xlarge:16},Z=Object(z.a)(function(a,j){var D=j.multiline,g=j.roundness,s=j.invalid,n=j.width,t=j.descriptionType,r=a.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(Y.b)(a),{height:D?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:D?a.lineHeight:a.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:a.fontSizes.b2,width:n?n+"px":"100%",color:a.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:g?a.radius.round:2,border:"1px solid "+a.colors.gray5,backgroundColor:a.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:a.colors.gray1,color:a.colors.gray1},"&:disabled":{backgroundColor:a.colors.gray7,borderColor:a.colors.gray5,color:a.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:a.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+r,"&::placeholder":{opacity:1}},disabled:{backgroundColor:a.colors.gray7,borderColor:a.colors.gray5,color:a.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:a.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:a.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function X(a,j){if(a==null)return{};var D=N(a,j),g,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(s=0;s<n.length;s++)g=n[s],!(j.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(D[g]=a[g]))}return D}function N(a,j){if(a==null)return{};var D={},g=Object.keys(a),s,n;for(n=0;n<g.length;n++)s=g[n],!(j.indexOf(s)>=0)&&(D[s]=a[s]);return D}var I=Object(J.forwardRef)(function(a,j){var D,g,s=a.component,n=a.width,t=a.label,r=a.description,c=a.descriptionType,O=c===void 0?"description":c,i=a.icon,u=a.rightSectionWidth,m=u===void 0?48:u,l=a.rightSection,o=a.rightSectionProps,p=o===void 0?{}:o,T=a.wrapperProps,C=a.invalid,R=C===void 0?!1:C,k=a.required,U=k===void 0?!1:k,L=a.disabled,P=L===void 0?!1:L,F=a.multiline,K=F===void 0?!1:F,ae=a.roundness,ue=ae===void 0?!1:ae,ge=a.className,me=a.style,B=a.co,ee=a.overrideStyles,oe=a.__staticSelector,pe=oe===void 0?"Input":oe,be=X(a,q),he=Object(M.c)(),je=Z({roundness:ue,multiline:K,invalid:R,width:n,descriptionType:O},{overrideStyles:ee,name:pe}),le=je.classes,se=je.cx,ye=s||"input";return Object(A.jsxs)(V.a,{style:{width:n?n+"px":"100%"},children:[t&&Object(A.jsx)(w.a,{level:"b2",family:"Pretendard",color:he.colors.gray1,style:{marginBottom:4},children:t}),Object(A.jsxs)(V.a,Object.assign({className:se(le.wrapper,ge),co:B,style:me},T,{children:[i&&Object(A.jsx)("div",{className:se(le.icon,(D={},D[le.disabled]=P,D)),children:i}),Object(A.jsx)(ye,Object.assign({},be,{ref:j,className:se(le.input,(g={},g[le.withIcon]=i,g[le.invalid]=R,g[le.disabled]=P,g)),required:U,disabled:P,style:{paddingRight:l?m:he.spacing.small}})),l&&Object(A.jsx)("div",Object.assign({},p,{style:Object.assign({},p.style,{paddingRight:32}),className:se(le.rightSection,p.className),children:Object(A.jsx)(w.a,{level:"b2",family:"Pretendard",color:he.colors.green2,children:l})}))]})),r&&O==="description"?Object(A.jsx)(w.a,{level:"b3",family:"Pretendard",color:R?he.colors.red2:he.colors.navy3,style:{marginTop:4},children:r}):R&&Object(A.jsx)(w.a,{level:"b3",family:"Pretendard",color:O==="error"?he.colors.red2:O==="success"?he.colors.green3:he.colors.navy3,style:{marginTop:4},children:r})]})});I.displayName="@travelmakers-design/core/Input";var x=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,b={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},x=`import { Input } from "../Input";
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
`,b={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},f=S.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:I,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},_=function(){return Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};_.displayName="Icon";var d=function(j){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(I,Object.assign({},j))})};d.displayName="Default";var v=function(j){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(I,Object.assign({icon:Object(A.jsx)(_,{})},j))})};v.displayName="WithIcon";var h=function(j){var D="\uC778\uC99D\uC644\uB8CC";return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(I,Object.assign({icon:Object(A.jsx)(_,{})},j,{rightSection:D}))})};h.displayName="WithRightSection";var y=function(j){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(I,Object.assign({component:"textarea",multiline:!0},j))})};y.displayName="Textarea",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},d.parameters),v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},v.parameters),h.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},h.parameters),y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Modal/Modal.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return b});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),Q=e("./node_modules/react/index.js"),M=e("./node_modules/react-dom/index.js"),J=e.n(M),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=function(_,d){return{small:{fontFamily:"Pretendard",fontWeight:d==="text"?"bold":"normal",lineHeight:_.lineHeights.caption+"px",fontSize:_.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:d==="text"?"bold":"normal",lineHeight:_.lineHeights.b3+"px",fontSize:_.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:d==="text"?"bold":"normal",lineHeight:_.lineHeights.b2+"px",fontSize:_.fontSizes.b2}}},Y=function(_,d){return{small:{padding:d==="text"?"0px 4px":"0px 8px"},medium:{padding:d==="text"?"0px 5px":"0px 8px"},large:{padding:d==="text"?"1px 7px":"0px 8px"}}},E=Object(w.a)(function(f,_){var d,v,h,y,a,j,D,g,s,n,t,r,c,O,i,u,m,l=_.size,o=_.type;return{container:Object.assign({},Object(V.b)(f),{display:"flex",position:"fixed",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"rgba(0, 0, 0, 0.7)",width:"100%",height:"100%",zIndex:"10000",top:"0",left:"0"}),absoluteContainer:(v={width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"flex-end",top:"0",backgroundColor:f.colors.white},v["&.popup"]={alignItems:"center",backgroundColor:"transparent"},v["&.modalPopup"]=(d={position:"relative",maxWidth:"1200px",margin:"0 auto",maxHeight:"90vh",height:"100%",borderRadius:"30px 30px 0 0"},d[""+f.media.tablet]={maxHeight:"100%",height:"100%",borderRadius:"0"},d),v),closeContainer:{position:"absolute",width:"100%",height:"100%",zIndex:"100"},modalContainer:(h={display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"100%",maxHeight:"100%",borderRadius:"6px",boxSizing:"border-box",zIndex:"200"},h["&.popup"]={justifyContent:"center"},h["&.max-h"]={height:"100%"},h),modalContentsContainer:(a={display:"flex",position:"relative",justifyContent:"center",width:"100%",height:"100%",padding:"40px",overflowY:"hidden"},a[""+f.media.tablet]={padding:"0"},a[""+f.media.desktop]=(y={},y["-ms-overflow-style"]="none",y["&::-webkit-scrollbar"]={display:"none"},y),a["&.optionsBox, &.modalPopup, &.toastPopup"]={padding:0},a["&.Agreement"]={height:"calc(100% - 77px)"},a),modalContents:{display:"block",position:"relative",width:"100%",maxWidth:"768px"},modalHeader:(g={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"0"},g[""+f.media.desktop]={padding:"24px 16px 12px 24px"},g["&.optionsBox"]=(j={height:"40px",padding:"0 16px",background:f.colors.navy1},j[""+f.media.tablet]={height:"64px"},j),g["&.modalPopup"]=(D={color:f.colors.navy1,height:"auto",padding:"40px 12px"},D["@media screen and (min-width: 800px)"]={padding:"40px 0"},D["@media screen and (max-height: 640px)"]={paddingTop:"24px",paddingBottom:"24px"},D.justifyContent="space-between",D[""+f.media.tablet]={justifyContent:"start",padding:"0 16px",height:"44px",backgroundColor:f.colors.navy1,color:f.colors.white},D),g["&.toastPopup"]={justifyContent:"space-between"},g),modalTitle:(t={fontSize:"18px",fontWeight:"700",lineHeight:"1.39",color:f.colors.navy1,textAlign:"left",whiteSpace:"nowrap"},t["&.optionsBox"]=(s={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:"24px",color:"#FFFFFF"},s[""+f.media.tablet]={fontSize:"14px",lineHeight:"20px"},s),t["&.modalPopup"]=(n={color:f.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px"},n[""+f.media.tablet]={fontWeight:400,fontSize:"12px",lineHeight:"20px",color:f.colors.white},n),t[".toastPopup"]={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:"12px",lineHeight:"20px",color:f.colors.white},t),modalBackIcon:(r={width:"16px",height:"16px",cursor:"pointer",marginRight:"8px",display:"none"},r[""+f.media.tablet]={display:"inline-block"},r),modalCloseIcon:(c={width:"24px",height:"24px",cursor:"pointer",marginRight:"8px",display:"inline-block"},c[""+f.media.tablet]={display:"none"},c),modalContentText:(u={display:"block",width:"100%",maxHeight:"100%",lineHeight:1.5,whiteSpace:"pre-wrap",color:f.colors.navy1,overflowY:"auto",paddingBottom:"16px"},u[""+f.media.desktop]={fontSize:"12px",padding:"12px 20px"},u["&.Agreement"]=(i={height:"calc(100% - 44px)"},i[""+f.media.tablet]=(O={height:"calc(100% - 104px)"},O["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},O),i),u),modalAbsolute:(m={display:"block",position:"fixed",bottom:"0",width:"100%",maxWidth:"768px",zIndex:"100",backgroundColor:"white",padding:"16px 0"},m[""+f.media.desktop]={padding:"16px"},m)}}),Z=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),A=e("./node_modules/react/jsx-runtime.js"),q=function(_){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},_,{children:Object(A.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(A.jsx)("path",{stroke:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(A.jsx)("path",{fill:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};q.displayName="IcBackArrow",q.displayName="@travelmakers-design/core/IcBackArrow";var X=function(_){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},_,{children:Object(A.jsx)("g",{stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",children:Object(A.jsx)("path",{d:"M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212"})})}))};X.displayName="IcClose",X.displayName="@travelmakers-design/core/IcClose";var N=["component","open","ModalContainerClassName","onClose","containerStyle","wrapperStyle","modalPopup","centerPopup","children","className","overrideStyles","title","handleAgree","agreeText","backIcon","__staticSelector"];function I(f,_){if(f==null)return{};var d=x(f,_),v,h;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(f);for(h=0;h<y.length;h++)v=y[h],!(_.indexOf(v)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,v)||(d[v]=f[v]))}return d}function x(f,_){if(f==null)return{};var d={},v=Object.keys(f),h,y;for(y=0;y<v.length;y++)h=v[y],!(_.indexOf(h)>=0)&&(d[h]=f[h]);return d}var b=Object(Q.forwardRef)(function(f,_){var d=f.component,v=f.open,h=f.ModalContainerClassName,y=f.onClose,a=f.containerStyle,j=a===void 0?{}:a,D=f.wrapperStyle,g=D===void 0?{}:D,s=f.modalPopup,n=s===void 0?!1:s,t=f.centerPopup,r=t===void 0?!1:t,c=f.children,O=f.className,i=f.overrideStyles,u=f.title,m=u===void 0?"":u,l=f.handleAgree,o=f.agreeText,p=o===void 0?"\uB3D9\uC758\uD558\uAE30":o,T=f.backIcon,C=T===void 0?!0:T,R=f.__staticSelector,k=R===void 0?"span":R,U=I(f,N),L=d||"span",P=E({},{overrideStyles:i,name:"span"}),F=P.classes,K=P.cx,ae=document.createElement("div");return document.body.appendChild(ae),Object(G.b)(v),Object(A.jsx)(A.Fragment,{children:v?J.a.createPortal(Object(A.jsx)(L,Object.assign({ref:_,className:K(F.container,O)},U,{children:Object(A.jsx)("div",{className:K(F.absoluteContainer,(n?"modalPopup":"")+(r?" popup":"")),style:j,children:Object(A.jsx)("div",{onClick:y,className:K(F.closeContainer,(n?"modalPopup":"")+(r?" popup":"")),children:Object(A.jsx)("div",{className:K(F.modalContainer,h||(n?" modalPopup":"")+(r?" popup":"")),style:g,children:Object(A.jsxs)("div",{className:K(F.modalContentsContainer),children:[Object(A.jsxs)("div",{className:K(F.modalContents,"modalPopup Agreement"),children:[Object(A.jsxs)("div",{className:K(F.modalHeader,"modalPopup Agreement"),children:[Object(A.jsx)(q,{onClick:y,className:K(F.modalBackIcon,"modalPopup Agreement")}),Object(A.jsx)("span",{className:K(F.modalTitle,"modalPopup Agreement"),children:m}),Object(A.jsx)(X,{onClick:y,className:K(F.modalCloseIcon,"modalPopup Agreement")})]}),Object(A.jsx)("div",{className:K(F.modalContentText),children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})})]}),Object(A.jsx)("div",{className:K(F.modalAbsolute),children:Object(A.jsx)(Z.a,{fullWidth:!0,onClick:l,children:p})})]})})})})})),document.body):null})});b.displayName="@travelmakers-design/core/Modal"},"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),y=e("./node_modules/react/index.js"),a=e.n(y),j=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),D=e("./node_modules/react/jsx-runtime.js"),g=e.n(D);function s(l,o){return O(l)||c(l,o)||t(l,o)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(l,o){if(!!l){if(typeof l=="string")return r(l,o);var p=Object.prototype.toString.call(l).slice(8,-1);if(p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set")return Array.from(l);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return r(l,o)}}function r(l,o){(o==null||o>l.length)&&(o=l.length);for(var p=0,T=new Array(o);p<o;p++)T[p]=l[p];return T}function c(l,o){var p=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var T=[],C=!0,R=!1,k,U;try{for(p=p.call(l);!(C=(k=p.next()).done)&&(T.push(k.value),!(o&&T.length===o));C=!0);}catch(L){R=!0,U=L}finally{try{!C&&p.return!=null&&p.return()}finally{if(R)throw U}}return T}}function O(l){if(Array.isArray(l))return l}var i=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}},i=`import {
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
`,u={Default:{startLoc:{col:23,line:97},endLoc:{col:1,line:114},startBody:{col:23,line:97},endBody:{col:1,line:114}}};S.default={title:"@travelmakers-design/core/Component/Modal",component:h.a,argTypes:{open:{defaultValue:!1,description:"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},modalPopup:{defaultValue:!1,description:"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",table:{type:{summary:"boolean"}},control:{type:"boolean"}},centerPopup:{defaultValue:!1,description:"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",table:{type:{summary:"boolean"}},control:{type:"boolean"}},ModalContainerClassName:{defaultValue:"",description:"Container\uC758 ClassName \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},agreeText:{defaultValue:"\uB3D9\uC758\uD558\uAE30",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}}},docs:{page:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(v.g,{}),Object(D.jsx)(v.f,{}),Object(D.jsx)(v.b,{}),Object(D.jsx)(v.d,{}),Object(D.jsx)(v.a,{story:v.c}),Object(D.jsx)(v.e,{})]})}}}};var m=function(o){var p=Object(y.useState)(!1),T=s(p,2),C=T[0],R=T[1];return Object(D.jsxs)("div",{style:{padding:24,display:"flex",height:500},children:[Object(D.jsx)(j.a,{onClick:function(){R(function(U){return!U})},style:{zIndex:10001},children:"\uBAA8\uB2EC"}),Object(D.jsx)(h.a,Object.assign({},o,{open:C,title:"title",children:"content"}))]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return I});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),M=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=function(b){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:b.fontSizes.h4,lineHeight:b.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:b.fontSizes.h1,lineHeight:b.lineHeights.h1+"px"}}},V=Object(J.a)(function(x,b){var f=b.color,_=f===void 0?"navy":f,d=b.indicator,v=d===void 0?!1:d;return{root:{display:"flex",alignItems:"center"},indicator:{display:v?"block":"none",fontFamily:"PT Serif",fontSize:"20px",fontWeight:"700",color:_==="white"?"white":x.colors.navy1,marginRight:"16px",letterSpacing:"1.6px"},barContainer:{display:"block",position:"relative",width:"30vw",maxWidth:"456px",height:"2px",borderRadius:"3px",backgroundColor:_==="white"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.1)"},barActive:{display:"block",position:"absolute",width:"0%",height:"2px",borderRadius:"3px",backgroundColor:_==="white"?x.colors.white:x.colors.navy1}}}),z=e("./node_modules/react/jsx-runtime.js"),Y=["color","indicator","totalPage","currentPage","activeBarTransition","title","className","co","overrideStyles"];function E(x,b){if(x==null)return{};var f=Z(x,b),_,d;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(x);for(d=0;d<v.length;d++)_=v[d],!(b.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,_)||(f[_]=x[_]))}return f}function Z(x,b){if(x==null)return{};var f={},_=Object.keys(x),d,v;for(v=0;v<_.length;v++)d=_[v],!(b.indexOf(d)>=0)&&(f[d]=x[d]);return f}var A=Object(H.forwardRef)(function(x,b){var f=x.color,_=f===void 0?"navy":f,d=x.indicator,v=d===void 0?!1:d,h=x.totalPage,y=h===void 0?1:h,a=x.currentPage,j=a===void 0?1:a,D=x.activeBarTransition,g=D===void 0?!1:D,s=x.title,n=x.className,t=x.co,r=x.overrideStyles,c=E(x,Y),O=Object(Q.c)(),i=V({color:_,indicator:v},{overrideStyles:r,name:"Progress"}),u=i.classes,m=i.cx;return Object(z.jsxs)(M.a,Object.assign({ref:b,className:m(u.root,n),co:t},c,{children:[Object(z.jsx)("span",{className:m(u.indicator),children:"1/1"}),Object(z.jsx)("div",{className:m(u.barContainer),children:Object(z.jsx)("div",{className:m(u.barActive),style:{width:j/y*100+"%",transition:g?"width 3s linear":"none"}})})]}))});A.displayName="@travelmakers-design/core/Header/Section";var q=`
    
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
`,X={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}},N=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Progress",component:A,argTypes:{color:{defaultValue:"navy",description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},indicator:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},I=function(b){return Object(z.jsx)("div",{style:{padding:24},children:Object(z.jsx)(A,Object.assign({},b))})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
}`}},I.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return l});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.string.small.js"),N=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),I=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),x=e("./node_modules/react/jsx-runtime.js"),b=function(p){return Object(x.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(x.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(x.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};b.displayName="SearchIcon",b.displayName="@travelmakers-design/core/SearchIcon";var f=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),_=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),v=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),h={xsmall:12,small:14,medium:14,large:14,xlarge:16},y=Object(d.a)(function(o,p){var T=p.multiline,C=p.roundness,R=p.invalid,k=p.width,U=p.descriptionType,L=o.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(v.b)(o),{height:T?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:T?o.lineHeight:o.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:o.fontSizes.b2,width:k?k+"px":"100%",color:o.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:C?o.radius.round:2,border:"1px solid "+o.colors.gray5,backgroundColor:o.colors.white,"&:focus, &:focus-within":{outline:"none",color:o.colors.gray1,border:"1px solid "+o.colors.gray1},"&:disabled":{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+L,"&::placeholder":{opacity:1}},disabled:{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},fill:{backgroundColor:o.colors.gray6,color:o.colors.navy3,border:"0px solid "+o.colors.gray5,"&:disabled":{backgroundColor:o.colors.gray6,border:"1px solid "+o.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:o.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),a=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function j(o,p){return t(o)||n(o,p)||g(o,p)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(o,p){if(!!o){if(typeof o=="string")return s(o,p);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return s(o,p)}}function s(o,p){(p==null||p>o.length)&&(p=o.length);for(var T=0,C=new Array(p);T<p;T++)C[T]=o[T];return C}function n(o,p){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,U,L;try{for(T=T.call(o);!(R=(U=T.next()).done)&&(C.push(U.value),!(p&&C.length===p));R=!0);}catch(P){k=!0,L=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw L}}return C}}function t(o){if(Array.isArray(o))return o}function r(o,p){if(o==null)return{};var T=c(o,p),C,R;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(o);for(R=0;R<k.length;R++)C=k[R],!(p.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,C)||(T[C]=o[C]))}return T}function c(o,p){if(o==null)return{};var T={},C=Object.keys(o),R,k;for(k=0;k<C.length;k++)R=C[k],!(p.indexOf(R)>=0)&&(T[R]=o[R]);return T}var O=Object(H.forwardRef)(function(o,p){var T,C,R=o.component,k=o.width,U=o.label,L=o.line,P=L===void 0?!0:L,F=o.description,K=o.descriptionType,ae=K===void 0?"description":K,ue=o.icon,ge=ue===void 0?Object(x.jsx)(b,{}):ue,me=o.rightSectionWidth,B=me===void 0?48:me,ee=o.rightSection,oe=ee===void 0?Object(x.jsx)(I.a,{}):ee,pe=o.rightSectionProps,be=pe===void 0?{}:pe,he=o.wrapperProps,je=o.invalid,le=je===void 0?!1:je,se=o.required,ye=se===void 0?!1:se,ie=o.disabled,Oe=ie===void 0?!1:ie,ke=o.multiline,De=ke===void 0?!1:ke,Re=o.roundness,Pe=Re===void 0?!0:Re,Be=o.className,Le=o.style,Ve=o.co,de=o.overrideStyles,ne=o.value,fe=o.onChange,ve=r(o,a),ce=Object(N.c)(),_e=Object(H.useState)(ne),Te=j(_e,2),Ee=Te[0],Ie=Te[1],xe=y({roundness:Pe,multiline:De,invalid:le,width:k,descriptionType:ae},{overrideStyles:de,name:"Input"}),Se=xe.classes,Ae=xe.cx,we=R||"input",He=function(ze){!Oe&&We({target:{value:""}})},We=function(ze){var Fe;Ie(ze==null||(Fe=ze.target)===null||Fe===void 0?void 0:Fe.value),fe&&fe(ze)};return Object(x.jsxs)(_.a,{style:{width:k?k+"px":"100%"},children:[U&&Object(x.jsx)(f.a,{level:"b2",family:"Pretendard",color:ce.colors.gray1,style:{marginBottom:4},children:U}),Object(x.jsxs)(_.a,Object.assign({className:Ae(Se.wrapper,Be),co:Ve,style:Le},he,{children:[ge&&Object(x.jsx)("div",{className:Ae(Se.icon,(T={},T[Se.disabled]=Oe,T)),children:ge}),Object(x.jsx)(we,Object.assign({},ve,{ref:p,value:Ee,onChange:We,className:Ae(Se.input,(C={},C[Se.fill]=!P,C[Se.withIcon]=ge,C[Se.invalid]=le,C[Se.disabled]=Oe,C)),required:ye,disabled:Oe,style:{paddingRight:oe?B:ce.spacing.small}})),oe&&Object(x.jsx)("div",Object.assign({},be,{style:Object.assign({},be.style,{paddingRight:32}),className:Ae(Se.rightSection,be.className),onClick:He,children:oe}))]})),F&&ae==="description"?Object(x.jsx)(f.a,{level:"b3",family:"Pretendard",color:le?ce.colors.red2:ce.colors.navy3,style:{marginTop:4},children:F}):le&&Object(x.jsx)(f.a,{level:"b3",family:"Pretendard",color:ae==="error"?ce.colors.red2:ae==="success"?ce.colors.green3:ce.colors.navy3,style:{marginTop:4},children:F})]})});O.displayName="@travelmakers-design/core/SearchInput";var i=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},i=`import React from "react";
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
`,u={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},m=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:O,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},l=function(p){return Object(x.jsx)("div",{style:{padding:24},children:Object(x.jsx)(O,Object.assign({},p))})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return N});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=Object(M.a)(function(I,x){var b=x.size,f=x.color,_=f===void 0?I.colorScheme==="light"?I.colors.black:I.colors.white:f in I.palettes?(I.colorScheme==="light",I.palettes[f][0]):f in I.colors?I.colors[f]:f;return{root:{position:"relative",display:"inline-block",width:b in J.a?J.a[b]:b,height:b in J.a?J.a[b]:b,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:_},circle:{fill:_}}}}),V=e("./node_modules/react/jsx-runtime.js"),z=["size","color","className","co","overrideStyles"];function Y(I,x){if(I==null)return{};var b=E(I,x),f,_;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(I);for(_=0;_<d.length;_++)f=d[_],!(x.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(I,f)||(b[f]=I[f]))}return b}function E(I,x){if(I==null)return{};var b={},f=Object.keys(I),_,d;for(d=0;d<f.length;d++)_=f[d],!(x.indexOf(_)>=0)&&(b[_]=I[_]);return b}var Z=Object(H.forwardRef)(function(I,x){var b=I.size,f=b===void 0?"medium":b,_=I.color,d=I.className,v=I.co,h=I.overrideStyles,y=Y(I,z),a=w({size:f,color:_},{overrideStyles:h,name:"Spinner"}),j=a.classes,D=a.cx,g=Object(V.jsx)("i",{className:j.inner,children:Object(V.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(V.jsxs)("g",{transform:"translate(1 1)",children:[Object(V.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(V.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(V.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(V.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(V.jsx)(Q.a,Object.assign({ref:x,className:D(j.root,d),co:v},y,{children:g}))});Z.displayName="@travelmakers-design/core/Spinner";var A=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:Z,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},N=function(x){return Object(V.jsx)(Z,Object.assign({},x))};N.displayName="Default",N.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},N.parameters)},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return O});var $=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.from.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/core-js/modules/es.object.keys.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.fill.js"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),I=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),x=function(u){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.caption+"px",fontSize:u.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.b3+"px",fontSize:u.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:u.lineHeights.b2+"px",fontSize:u.fontSizes.b2}}},b=function(u,m){return{small:{padding:m?"2px 8px":"0px 8px"},medium:{padding:m?"2px 12px":"0px 12px"},large:{padding:m?"3px 12px":"0px 16px"}}},f=Object(N.a)(function(i,u){var m,l=u.color,o=u.roundness,p=u.size,T=u.fill;return{container:Object.assign({},Object(I.b)(i),x(i)[p],b(i,T)[p],(m={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:l==="gray"?i.colors.navy1:i.colors.white,marginRight:"6px",gap:"8px",borderRadius:o&&i.radius.round,backgroundColor:l==="green"?i.colors.green3:l==="blue"?i.colors.point_sky1:l==="purple"?i.colors.point_purple1:i.colors.gray6},m["&:last-child"]={marginRight:0},m)),line:{color:l==="green"?i.colors.green3:l==="blue"?i.colors.point_sky1:l==="purple"?i.colors.point_purple1:i.colors.gray3,background:"inherit",border:"1px solid"},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"}}}),_=e("./node_modules/react/jsx-runtime.js"),d=["component","size","color","roundness","fill","children","className","overrideStyles","__staticSelector"];function v(i,u){if(i==null)return{};var m=h(i,u),l,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(o=0;o<p.length;o++)l=p[o],!(u.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,l)||(m[l]=i[l]))}return m}function h(i,u){if(i==null)return{};var m={},l=Object.keys(i),o,p;for(p=0;p<l.length;p++)o=l[p],!(u.indexOf(o)>=0)&&(m[o]=i[o]);return m}var y=Object(Z.forwardRef)(function(i,u){var m=i.component,l=i.size,o=l===void 0?"small":l,p=i.color,T=p===void 0?"green":p,C=i.roundness,R=C===void 0?!1:C,k=i.fill,U=k===void 0?!0:k,L=i.children,P=i.className,F=i.overrideStyles,K=i.__staticSelector,ae=K===void 0?"span":K,ue=v(i,d),ge=m||"span",me=f({color:T,roundness:R,fill:U,size:o},{overrideStyles:F,name:"span"}),B=me.classes,ee=me.cx;return Object(_.jsx)(ge,Object.assign({ref:u,className:ee(B.container,B[T],!U&&B.line,P)},ue,{children:L}))});y.displayName="@travelmakers-design/core/Tag";function a(i){return s(i)||g(i)||D(i)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(i,u){if(!!i){if(typeof i=="string")return n(i,u);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,u)}}function g(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function s(i){if(Array.isArray(i))return n(i)}function n(i,u){(u==null||u>i.length)&&(u=i.length);for(var m=0,l=new Array(u);m<u;m++)l[m]=i[m];return l}var t=`
    
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
`,r={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:61},startBody:{col:23,line:53},endBody:{col:1,line:61}}},c=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:69},startBody:{col:23,line:61},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/Tag",component:y,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},O=function(u){return Object(_.jsx)("div",{style:{padding:24,display:"flex"},children:a(Array(10).keys()).map(function(m,l){return Object(_.jsxs)(y,Object.assign({},u,{children:["Tag",l+1]}))})})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},O.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return _});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),te=e("./node_modules/core-js/modules/es.object.keys.js"),G=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),Y=function(v){return{xsmall:{fontWeight:"normal",lineHeight:v.lineHeights.h6+"px",fontSize:v.fontSizes.h6},small:{fontWeight:"normal",lineHeight:v.lineHeights.h4+"px",fontSize:v.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:v.lineHeights.h2+"px",fontSize:v.fontSizes.h2},large:{fontWeight:"normal",lineHeight:v.lineHeights.h1+"px",fontSize:v.fontSizes.h1}}},E=function(v){return{display:v?"block":"inline-block",width:v?"100%":"auto"}},Z=Object(V.a)(function(d,v,h){var y,a,j=v.color,D=v.size,g=v.fullWidth,s=v.family,n=v.underline,t=v.leftIcon,r=v.rightIcon,c=h("loading"),O=h("inner"),i=h("spinner"),u=j||d.colors.navy1;return{loading:(y={ref:c,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},y["."+O]={opacity:0},y["."+i]={display:"flex"},y),solid:(a={color:u==="white"?d.colors.white:d.colors.navy1,"&:not(:disabled):hover":{color:u==="white"?d.colors.white:d.colors.navy1},"&:not(:disabled):active":{color:u==="white"?d.colors.gray6:d.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},a["&:disabled:not(."+c+")"]={color:d.colors.gray5},a),root:Object.assign({},E(g),Object(z.b)(d),Y(d)[D],{fontFamily:""+s,borderRadius:d.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:n?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:O,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),q=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function X(d,v){if(d==null)return{};var h=N(d,v),y,a;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(d);for(a=0;a<j.length;a++)y=j[a],!(v.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,y)||(h[y]=d[y]))}return h}function N(d,v){if(d==null)return{};var h={},y=Object.keys(d),a,j;for(j=0;j<y.length;j++)a=y[j],!(v.indexOf(a)>=0)&&(h[a]=d[a]);return h}var I=Object(W.forwardRef)(function(d,v){var h=d.children,y=d.component,a=d.family,j=a===void 0?"Pretendard":a,D=d.size,g=D===void 0?"medium":D,s=d.color,n=s===void 0?"navy":s,t=d.fullWidth,r=t===void 0?!1:t,c=d.type,O=c===void 0?"button":c,i=d.disabled,u=i===void 0?!1:i,m=d.underline,l=m===void 0?!1:m,o=d.leftIcon,p=d.rightIcon,T=d.className,C=d.co,R=d.overrideStyles,k=X(d,q),U=Object(M.c)(),L=Z({color:n,size:g,fullWidth:r,family:j,underline:l,leftIcon:o,rightIcon:p},{overrideStyles:R,name:"Button"}),P=L.classes,F=L.cx;return Object(A.jsx)(J.a,Object.assign({component:y||"button",ref:v,type:O,disabled:u,className:F(P.root,P.solid,T),co:C,onTouchStart:function(){}},k,{children:Object(A.jsxs)("div",{className:P.inner,children:[o&&Object(A.jsxs)("span",{className:F(P.icon,P.leftIcon),children:[o,"\xA0"]}),Object(A.jsx)("span",{className:P.label,children:h}),p&&Object(A.jsxs)("span",{className:F(P.icon,P.rightIcon),children:["\xA0",p]})]})}))});I.displayName="@travelmakers-design/core/TextButton";var x=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},x=`import {
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
`,b={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},f=S.default={title:"@travelmakers-design/core/Component/TextButton",component:I,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(H.g,{}),Object(A.jsx)(H.f,{}),Object(A.jsx)(H.b,{}),Object(A.jsx)(H.d,{}),Object(A.jsx)(H.a,{story:H.c}),Object(A.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}},_=function(v){return Object(A.jsx)(I,Object.assign({},v,{children:"Button"}))};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},_.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return x});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.string.italics.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),M=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z={h1:{},small:{},medium:{},large:{}},Y=function(f){return{caption:{lineHeight:f.lineHeights.caption+"px",fontSize:f.fontSizes.caption},b3:{lineHeight:f.lineHeights.b3+"px",fontSize:f.fontSizes.b3},b2:{lineHeight:f.lineHeights.b2+"px",fontSize:f.fontSizes.b2},b1:{lineHeight:f.lineHeights.b1+"px",fontSize:f.fontSizes.b1},h6:{lineHeight:f.lineHeights.h6+"px",fontSize:f.fontSizes.h6},h5:{lineHeight:f.lineHeights.h5+"px",fontSize:f.fontSizes.h5},h4:{lineHeight:f.lineHeights.h4+"px",fontSize:f.fontSizes.h4},h3:{lineHeight:f.lineHeights.h3+"px",fontSize:f.fontSizes.h3},h2:{lineHeight:f.lineHeights.h2+"px",fontSize:f.fontSizes.h2},h1:{lineHeight:f.lineHeights.h1+"px",fontSize:f.fontSizes.h1}}},E=Object.keys(z).reduce(function(b,f){return b[f]=z[f].height,b},{}),Z=function(f){return{display:"block",width:"100%"}},A=Object(V.a)(function(b,f,_){var d,v,h=f.family,y=f.level,a=f.textAlign,j=f.disabled,D=f.strong,g=f.italic,s=f.underline,n=f.color,t=f.mobile,r=f.tablet,c=_("loading"),O=_("inner"),i=_("spinner");return{loading:(d={ref:c,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},d["."+O]={opacity:0},d["."+i]={display:"flex"},d),solid:{fontWeight:D?h==="Noto Serif KR"?600:700:400,fontStyle:g?"italic":"normal",textDecoration:s?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},z[y],Z(),Y(b)[y],(v={fontFamily:""+h,color:j?b.colors.gray5:n||b.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+a,WebkitAppearance:"none",outline:"none",border:"none"},v[""+b.media.mobile]=Object.assign({},Y(b)[t]),v[""+b.media.tablet]=Object.assign({},Y(b)[r]),v)),inner:{ref:O,height:"100%",overflow:"visible"},label:{height:"100%"}}}),q=e("./node_modules/react/jsx-runtime.js"),X=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function N(b,f){if(b==null)return{};var _=I(b,f),d,v;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(b);for(v=0;v<h.length;v++)d=h[v],!(f.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,d)||(_[d]=b[d]))}return _}function I(b,f){if(b==null)return{};var _={},d=Object.keys(b),v,h;for(h=0;h<d.length;h++)v=d[h],!(f.indexOf(v)>=0)&&(_[v]=b[v]);return _}var x=Object(M.forwardRef)(function(b,f){var _=b.children,d=b.component,v=b.family,h=v===void 0?"Noto Serif KR":v,y=b.level,a=y===void 0?"h1":y,j=b.mobileLevel,D=b.tabletLevel,g=b.textAlign,s=g===void 0?"left":g,n=b.disabled,t=n===void 0?!1:n,r=b.strong,c=r===void 0?!1:r,O=b.italic,i=O===void 0?!1:O,u=b.underline,m=u===void 0?!1:u,l=b.color,o=b.className,p=b.co,T=b.overrideStyles,C=N(b,X),R=Object(Q.c)(),k=A({family:h,level:a,disabled:t,strong:c,italic:i,underline:m,textAlign:s,color:l,mobile:j,tablet:D},{overrideStyles:T,name:"span"}),U=k.classes,L=k.cx;return Object(q.jsx)(J.a,Object.assign({component:d||"span",ref:f,type:"span",disabled:t,className:L(U.root,U.solid,o),co:p,onTouchStart:function(){}},C,{children:Object(q.jsx)("div",{className:U.inner,children:Object(q.jsx)("span",{className:U.label,children:_})})}))});x.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),te=e("./node_modules/react/index.js"),G=e.n(te),Q=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./node_modules/react/jsx-runtime.js"),J=e.n(M),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},w=`import {
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
`,V={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};S.default={title:"@travelmakers-design/core/General/Typography",component:Q.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(W.g,{}),Object(M.jsx)(W.f,{}),Object(M.jsx)(W.b,{}),Object(M.jsx)(W.d,{}),Object(M.jsx)(W.a,{story:W.c}),Object(M.jsx)(W.e,{})]})}}}};var z=function(E){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Q.a,Object.assign({},E,{level:"h1",children:"h1. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"h2",children:"h2. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"h3",children:"h3. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"h4",children:"h4. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"h5",children:"h5. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"h6",children:"h6. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"b1",children:"b1. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"b2",children:"b2. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"b3",children:"b3. Travelmakers Design"})),Object(M.jsx)(Q.a,Object.assign({},E,{level:"caption",children:"caption. Travelmakers Design"}))]})};z.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},z.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,S,e){"use strict";e.d(S,"a",function(){return d});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.array.map.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(z),E=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),q=e.n(A),X=e("./node_modules/react/jsx-runtime.js"),N=e.n(X),I=["component","className","style","co"];function x(v,h){if(v==null)return{};var y=b(v,h),a,j;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(v);for(j=0;j<D.length;j++)a=D[j],!(h.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,a)||(y[a]=v[a]))}return y}function b(v,h){if(v==null)return{};var y={},a=Object.keys(v),j,D;for(D=0;D<a.length;D++)j=a[D],!(h.indexOf(j)>=0)&&(y[j]=v[j]);return y}function f(v,h){return typeof v=="function"?v(h):v}function _(v,h){var y=Object(E.a)(),a=y.css,j=y.cx,D=Object(Z.c)();return Array.isArray(v)?j(h,v.map(function(g){return a(f(g,D))})):j(h,a(f(v,D)))}var d=Object(A.forwardRef)(function(v,h){var y=v.component,a=v.className,j=v.style,D=v.co,g=x(v,I),s=y||"div";return Object(X.jsx)(s,Object.assign({ref:h,className:_(D,a),style:j},g))});d.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:G.a};var V=function(){return Object(Q.jsx)(G.a,{co:function(E){return{width:100,height:100,backgroundColor:E.colors.gray3}}})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},V.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return $});var $={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return D});var $=e("./node_modules/core-js/modules/es.string.replace.js"),H=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),te=e("./node_modules/core-js/modules/es.number.constructor.js"),G=e("./node_modules/core-js/modules/es.parse-int.js"),Q=e("./node_modules/core-js/modules/es.array.map.js"),M=e("./node_modules/core-js/modules/es.string.split.js"),J=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),E=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js");function x(g,s){return v(g)||d(g,s)||f(g,s)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(g,s){if(!!g){if(typeof g=="string")return _(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(g,s)}}function _(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function d(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,c=!1,O,i;try{for(n=n.call(g);!(r=(O=n.next()).done)&&(t.push(O.value),!(s&&t.length===s));r=!0);}catch(u){c=!0,i=u}finally{try{!r&&n.return!=null&&n.return()}finally{if(c)throw i}}return t}}function v(g){if(Array.isArray(g))return g}function h(g){var s=g.replace("#","");return typeof s=="string"&&s.length===6&&!Number.isNaN(Number("0x"+s))}function y(g){var s=g.replace("#",""),n=parseInt(s,16),t=n>>16&255,r=n>>8&255,c=n&255;return{r:t,g:r,b:c,a:1}}function a(g){var s=g.replace(/[^0-9,.]/g,"").split(",").map(Number),n=x(s,4),t=n[0],r=n[1],c=n[2],O=n[3];return{r:t,g:r,b:c,a:O||1}}function j(g){return h(g)?y(g):g.startsWith("rgb")?a(g):{r:0,g:0,b:0,a:1}}var D=function(s,n){var t=j(s),r=t.r,c=t.g,O=t.b;return"rgba("+r+", "+c+", "+O+", "+n+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return G});var $=e("./node_modules/core-js/modules/es.array.concat.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=function(M){var J=Object(W.useRef)(M);return Object(W.useEffect)(function(){J.current=M},[M]),Object(W.useMemo)(function(){return function(){for(var w,V=arguments.length,z=new Array(V),Y=0;Y<V;Y++)z[Y]=arguments[Y];return(w=J.current)===null||w===void 0?void 0:w.call.apply(w,[J].concat(z))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var V=function(){var Y=Object(G.a)(function(){alert("Click away from red box!")});return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{ref:Y,style:{width:100,height:100,backgroundColor:"red"}})})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
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
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return D});var $=e("./node_modules/core-js/modules/es.array.slice.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.function.name.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.array.from.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.is-array.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_),v=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function h(g,s){var n=typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(!n){if(Array.isArray(g)||(n=y(g))||s&&g&&typeof g.length=="number"){n&&(g=n);var t=0,r=function(){};return{s:r,n:function(){return t>=g.length?{done:!0}:{done:!1,value:g[t++]}},e:function(m){throw m},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,O=!1,i;return{s:function(){n=n.call(g)},n:function(){var m=n.next();return c=m.done,m},e:function(m){O=!0,i=m},f:function(){try{!c&&n.return!=null&&n.return()}finally{if(O)throw i}}}}function y(g,s){if(!!g){if(typeof g=="string")return a(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(g,s)}}function a(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}var j=["mousedown","touchstart"],D=function(s){var n=Object(_.useRef)(),t=Object(v.a)(s);return Object(_.useEffect)(function(){var r=function(m){var l=n.current;l&&!l.contains(m.target)&&t(m)},c=h(j),O;try{for(c.s();!(O=c.n()).done;){var i=O.value;document.addEventListener(i,r)}}catch(u){c.e(u)}finally{c.f()}return function(){var u=h(j),m;try{for(u.s();!(m=u.n()).done;){var l=m.value;document.removeEventListener(l,r)}}catch(o){u.e(o)}finally{u.f()}}},[n.current]),n}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/web.timers.js");function A(n,t){return x(n)||I(n,t)||X(n,t)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){if(!!n){if(typeof n=="string")return N(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(n,t)}}function N(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function I(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function x(n){if(Array.isArray(n))return n}var b=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.timeout,c=r===void 0?2e3:r,O=Object(E.useState)(null),i=A(O,2),u=i[0],m=i[1],l=Object(E.useState)(!1),o=A(l,2),p=o[0],T=o[1],C=Object(E.useState)(null),R=A(C,2),k=R[0],U=R[1],L=function(ae){clearTimeout(k),U(setTimeout(function(){return T(!1)},c)),T(ae)},P=function(ae){"clipboard"in navigator?navigator.clipboard.writeText(ae).then(function(){return L(!0)}).catch(function(ue){return m(ue)}):m(new Error("useClipboard: navigator.clipboard is not supported"))},F=function(){T(!1),m(null),clearTimeout(k)};return{copy:P,reset:F,error:u,copied:p}},f=e("./node_modules/react/jsx-runtime.js");function _(n,t){return a(n)||y(n,t)||v(n,t)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(n,t){if(!!n){if(typeof n=="string")return h(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(n,t)}}function h(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function y(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function a(n){if(Array.isArray(n))return n}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},j=`import React, { useState } from "react";

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
`,D={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},s=function(){var t=Object(E.useState)(""),r=_(t,2),c=r[0],O=r[1],i=b({timeout:3e3}),u=i.copy,m=i.copied;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",onChange:function(o){return O(o.target.value)}}),Object(f.jsx)("button",{onClick:function(){return u(c)},children:"copy"}),Object(f.jsx)("span",{children:m&&"Copied!!"})]})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return w});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),te=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},G=e("./node_modules/react/jsx-runtime.js"),Q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Q=`import React from "react";
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
`,M={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},J=S.default={parameters:{storySource:{source:`
    
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
}`}},w.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return n});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),A=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function q(t,r){return b(t)||x(t,r)||N(t,r)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(t,r){if(!!t){if(typeof t=="string")return I(t,r);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return I(t,r)}}function I(t,r){(r==null||r>t.length)&&(r=t.length);for(var c=0,O=new Array(r);c<r;c++)O[c]=t[c];return O}function x(t,r){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var O=[],i=!0,u=!1,m,l;try{for(c=c.call(t);!(i=(m=c.next()).done)&&(O.push(m.value),!(r&&O.length===r));i=!0);}catch(o){u=!0,l=o}finally{try{!i&&c.return!=null&&c.return()}finally{if(u)throw l}}return O}}function b(t){if(Array.isArray(t))return t}var f=function(r,c,O){var i=Object(A.a)(r,c),u=q(i,2),m=u[0],l=u[1];return Object(Z.a)(m,O),l},_=e("./node_modules/react/jsx-runtime.js");function d(t,r){return j(t)||a(t,r)||h(t,r)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(t,r){if(!!t){if(typeof t=="string")return y(t,r);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(t,r)}}function y(t,r){(r==null||r>t.length)&&(r=t.length);for(var c=0,O=new Array(r);c<r;c++)O[c]=t[c];return O}function a(t,r){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var O=[],i=!0,u=!1,m,l;try{for(c=c.call(t);!(i=(m=c.next()).done)&&(O.push(m.value),!(r&&O.length===r));i=!0);}catch(o){u=!0,l=o}finally{try{!i&&c.return!=null&&c.return()}finally{if(u)throw l}}return O}}function j(t){if(Array.isArray(t))return t}var D=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},D=`import React, { useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},n=function(){var r=Object(E.useState)(""),c=d(r,2),O=c[0],i=c[1],u=f(function(){alert("Updated!")},1e3,[O]);return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{type:"text",onChange:function(l){return i(l.target.value)}}),Object(_.jsx)("button",{onClick:u,children:"Cancel"})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var V=function(){var Y=Object(G.a)();return Object(Q.jsxs)("div",{children:[Math.random(),Object(Q.jsx)("button",{onClick:Y,children:"Update"})]})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return s});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_);function v(n,t){return D(n)||j(n,t)||y(n,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,t){if(!!n){if(typeof n=="string")return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,t)}}function a(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function j(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function D(n){if(Array.isArray(n))return n}var g=function(t){return(t+1)%1e6},s=function(){var t=Object(_.useReducer)(g,0),r=v(t,2),c=r[1];return c}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useHiddenBodyOverflow"};var V=function(){return Object(G.a)(!0),Object(Q.jsx)("div",{children:Object(Q.jsx)("span",{children:"useHiddenBodyOverflow"})})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts":function(re,S,e){"use strict";e.d(S,"b",function(){return W});var $=e("./node_modules/react/index.js"),H=e.n($),W=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function Q(w){w.preventDefault()}function M(){document.body.addEventListener("touchmove",Q,{passive:!1})}function J(){document.body.removeEventListener("touchmove",Q)}return Object($.useEffect)(function(){return G&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var w=document.body.style.top;document.body.style.cssText=""}},[]),Object($.useEffect)(function(){return G&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[G]),null};S.a=W},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return m});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.string.split.js"),A=e("./node_modules/core-js/modules/es.regexp.exec.js"),q=e("./node_modules/core-js/modules/es.string.replace.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),N=e("./node_modules/core-js/modules/es.regexp.to-string.js"),I=e("./node_modules/core-js/modules/es.date.to-string.js");function x(l,o){var p=typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(!p){if(Array.isArray(l)||(p=b(l))||o&&l&&typeof l.length=="number"){p&&(l=p);var T=0,C=function(){};return{s:C,n:function(){return T>=l.length?{done:!0}:{done:!1,value:l[T++]}},e:function(L){function P(F){return L.apply(this,arguments)}return P.toString=function(){return L.toString()},P}(function(L){throw L}),f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R=!0,k=!1,U;return{s:function(){p=p.call(l)},n:function(){var P=p.next();return R=P.done,P},e:function(L){function P(F){return L.apply(this,arguments)}return P.toString=function(){return L.toString()},P}(function(L){k=!0,U=L}),f:function(){try{!R&&p.return!=null&&p.return()}finally{if(k)throw U}}}}function b(l,o){if(!!l){if(typeof l=="string")return f(l,o);var p=Object.prototype.toString.call(l).slice(8,-1);if(p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set")return Array.from(l);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return f(l,o)}}function f(l,o){(o==null||o>l.length)&&(o=l.length);for(var p=0,T=new Array(o);p<o;p++)T[p]=l[p];return T}var _={alt:1,ctrl:2,meta:4,shift:8},d={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},v={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},h=function(o){var p=o.key!==" "?o.key.toLowerCase():"space",T=0;return o.altKey&&(T+=_.alt),o.ctrlKey&&(T+=_.ctrl),o.metaKey&&(T+=_.meta),o.shiftKey&&(T+=_.shift),{modifiers:T,key:p}},y=function(o){var p=o.replace(/\s/g,"").toLowerCase().split("+"),T=0,C,R=x(p),k;try{for(R.s();!(k=R.n()).done;){var U=k.value;_[U]?T+=_[U]:_[v[U]]?T+=_[v[U]]:d[U]?(T+=_.shift,C=d[U]):v[U]?C=v[U]:C=U}}catch(L){R.e(L)}finally{R.f()}return{modifiers:T,key:C}},a=function(o,p){return o.modifiers===p.modifiers&&o.key===p.key},j=function(o){var p=Object(E.useMemo)(function(){return o.filter(function(P){return!P.global})},[o]),T=Object(E.useMemo)(function(){return o.filter(function(P){return P.global})},[o]),C=Object(E.useCallback)(function(P,F,K,ae){var ue=x(P?T:p),ge;try{for(ue.s();!(ge=ue.n()).done;){var me=ge.value;if(a(y(me.combo),F)){var B;(B=me[K])===null||B===void 0||B.call(me,ae)}}}catch(ee){ue.e(ee)}finally{ue.f()}},[p,T]),R=Object(E.useCallback)(function(P){C(!0,h(P),"onKeyDown",P)},[C]),k=Object(E.useCallback)(function(P){C(!0,h(P),"onKeyUp",P)},[C]),U=Object(E.useCallback)(function(P){C(!1,h(P.nativeEvent),"onKeyDown",P.nativeEvent)},[C]),L=Object(E.useCallback)(function(P){C(!1,h(P.nativeEvent),"onKeyUp",P.nativeEvent)},[C]);return Object(E.useEffect)(function(){return document.addEventListener("keydown",R),document.addEventListener("keyup",k),function(){document.removeEventListener("keydown",R),document.removeEventListener("keyup",k)}},[R,k]),{handleKeyDown:U,handleKeyUp:L}},D=e("./node_modules/react/jsx-runtime.js");function g(l,o){return c(l)||r(l,o)||n(l,o)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(l,o){if(!!l){if(typeof l=="string")return t(l,o);var p=Object.prototype.toString.call(l).slice(8,-1);if(p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set")return Array.from(l);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return t(l,o)}}function t(l,o){(o==null||o>l.length)&&(o=l.length);for(var p=0,T=new Array(o);p<o;p++)T[p]=l[p];return T}function r(l,o){var p=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var T=[],C=!0,R=!1,k,U;try{for(p=p.call(l);!(C=(k=p.next()).done)&&(T.push(k.value),!(o&&T.length===o));C=!0);}catch(L){R=!0,U=L}finally{try{!C&&p.return!=null&&p.return()}finally{if(R)throw U}}return T}}function c(l){if(Array.isArray(l))return l}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},O=`import React, { useRef, useState } from "react";

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
`,i={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},u=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},m=function(){var o=Object(E.useRef)(null),p=Object(E.useState)(""),T=g(p,2),C=T[0],R=T[1],k=j([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){o.current.select()}},{combo:"shift+r",onKeyUp:function(){R("")}}]),U=k.handleKeyDown,L=k.handleKeyUp;return Object(D.jsx)("div",{children:Object(D.jsx)("input",{ref:o,type:"text",value:C,onChange:function(F){return R(F.target.value)},onKeyDown:U,onKeyUp:L})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return u});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/react/index.js"),h=e.n(v),y=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),a=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),j=e("./node_modules/react/jsx-runtime.js"),D=e.n(j);function g(m,l){return c(m)||r(m,l)||n(m,l)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(m,l){if(!!m){if(typeof m=="string")return t(m,l);var o=Object.prototype.toString.call(m).slice(8,-1);if(o==="Object"&&m.constructor&&(o=m.constructor.name),o==="Map"||o==="Set")return Array.from(m);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(m,l)}}function t(m,l){(l==null||l>m.length)&&(l=m.length);for(var o=0,p=new Array(l);o<l;o++)p[o]=m[o];return p}function r(m,l){var o=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(o!=null){var p=[],T=!0,C=!1,R,k;try{for(o=o.call(m);!(T=(R=o.next()).done)&&(p.push(R.value),!(l&&p.length===l));T=!0);}catch(U){C=!0,k=U}finally{try{!T&&o.return!=null&&o.return()}finally{if(C)throw k}}return p}}function c(m){if(Array.isArray(m))return m}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},O=`import React, { useEffect } from "react";

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
`,i={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var u=function(){var l=Object(a.a)(),o=g(l,2),p=o[0],T=o[1],C=Object(y.a)();return Object(v.useEffect)(function(){C()},[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{ref:T,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+p]})})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return g});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_);function v(s,n){return D(s)||j(s,n)||y(s,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,n){if(!!s){if(typeof s=="string")return a(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(s,n)}}function a(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function j(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function D(s){if(Array.isArray(s))return s}var g=function(){var n=Object(_.useRef)(null),t=Object(_.useState)(!1),r=v(t,2),c=r[0],O=r[1],i=Object(_.useCallback)(function(){return O(!0)},[]),u=Object(_.useCallback)(function(){return O(!1)},[]);return Object(_.useEffect)(function(){var m=n.current;if(!!m)return m.addEventListener("mouseenter",i),m.addEventListener("mouseleave",u),function(){m.removeEventListener("mouseenter",i),m.removeEventListener("mouseleave",u)}},[n.current]),[c,n]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var V=function(){var Y=Object(G.a)();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:Y})})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return s});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_);function v(n,t){return D(n)||j(n,t)||y(n,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,t){if(!!n){if(typeof n=="string")return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,t)}}function a(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function j(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function D(n){if(Array.isArray(n))return n}var g=0,s=function(t){var r=Object(_.useState)(t),c=v(r,2),O=c[0],i=c[1],u=t||O;return Object(_.useEffect)(function(){O==null&&(g+=1,i("tm-"+g))},[O]),u}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return D});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.array.for-each.js"),G=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),q=e("./node_modules/core-js/modules/es.array.from.js");function X(g,s){return f(g)||b(g,s)||I(g,s)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(g,s){if(!!g){if(typeof g=="string")return x(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(g,s)}}function x(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function b(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,c=!1,O,i;try{for(n=n.call(g);!(r=(O=n.next()).done)&&(t.push(O.value),!(s&&t.length===s));r=!0);}catch(u){c=!0,i=u}finally{try{!r&&n.return!=null&&n.return()}finally{if(c)throw i}}return t}}function f(g){if(Array.isArray(g))return g}var _=["keypress","mousemove","touchmove","click","scroll"],d={events:_,initialState:!0},v=function(s,n){var t=Object.assign({},d,n),r=t.events,c=t.initialState,O=Object(H.useState)(c),i=X(O,2),u=i[0],m=i[1],l=Object(H.useRef)();return Object(H.useEffect)(function(){var o=function(){m(!1),l.current&&window.clearTimeout(l.current),l.current=window.setTimeout(function(){m(!0)},s)};return r.forEach(function(p){return document.addEventListener(p,o)}),function(){r.forEach(function(p){return document.removeEventListener(p,o)})}},[s]),u},h=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},y=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},j=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},D=function(){var s=v(3e3);return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Idle: ",""+s]})})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return g});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js");function Z(s,n){return I(s)||N(s,n)||q(s,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(s,n){if(!!s){if(typeof s=="string")return X(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(s,n)}}function X(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function N(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function I(s){if(Array.isArray(s))return s}var x=function(n){var t=Object(E.useState)(null),r=Z(t,2),c=r[0],O=r[1],i=Object(E.useRef)(),u=Object(E.useCallback)(function(m){if(i.current&&(i.current.disconnect(),i.current=null),m===null){O(null);return}i.current=new IntersectionObserver(function(l){var o=Z(l,1),p=o[0];O(p)},n),i.current.observe(m)},[n==null?void 0:n.rootMargin,n==null?void 0:n.root,n==null?void 0:n.threshold]);return[u,c]},b=e("./node_modules/react/jsx-runtime.js");function f(s,n){return y(s)||h(s,n)||d(s,n)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(s,n){if(!!s){if(typeof s=="string")return v(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(s,n)}}function v(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function h(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function y(s){if(Array.isArray(s))return s}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},a=`import React, { useRef } from "react";

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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},D=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},g=function(){var n=Object(E.useRef)(null),t=x({root:n.current,threshold:.5}),r=f(t,2),c=r[0],O=r[1];return Object(b.jsx)("div",{ref:n,style:{width:300,height:300,overflowY:"scroll"},children:Object(b.jsx)("div",{style:{height:500},children:Object(b.jsx)("div",{ref:c,style:{marginTop:290,height:50,backgroundColor:O!=null&&O.isIntersecting?"green":"red"},children:O!=null&&O.isIntersecting?"Half visible":"Obscured"})})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function A(y,a){return x(y)||I(y,a)||X(y,a)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(y,a){if(!!y){if(typeof y=="string")return N(y,a);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return N(y,a)}}function N(y,a){(a==null||a>y.length)&&(a=y.length);for(var j=0,D=new Array(a);j<a;j++)D[j]=y[j];return D}function I(y,a){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var D=[],g=!0,s=!1,n,t;try{for(j=j.call(y);!(g=(n=j.next()).done)&&(D.push(n.value),!(a&&D.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&j.return!=null&&j.return()}finally{if(s)throw t}}return D}}function x(y){if(Array.isArray(y))return y}var b=function(a,j){var D=Object(Z.a)(a,j),g=A(D,2),s=g[0],n=g[1];return Object(H.useEffect)(function(){return s(),n},[s,n]),n},f=e("./node_modules/react/jsx-runtime.js"),_=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},_=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},v=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},h=function(){var a=b(function(){alert("fire")},3e3);return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:a,children:"clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/react/index.js"),h=e.n(v),y=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),j=e.n(a);function D(u,m){return r(u)||t(u,m)||s(u,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(u,m){if(!!u){if(typeof u=="string")return n(u,m);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,m)}}function n(u,m){(m==null||m>u.length)&&(m=u.length);for(var l=0,o=new Array(m);l<m;l++)o[l]=u[l];return o}function t(u,m){var l=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var o=[],p=!0,T=!1,C,R;try{for(l=l.call(u);!(p=(C=l.next()).done)&&(o.push(C.value),!(m&&o.length===m));p=!0);}catch(k){T=!0,R=k}finally{try{!p&&l.return!=null&&l.return()}finally{if(T)throw R}}return o}}function r(u){if(Array.isArray(u))return u}var c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},c=`import React from "react";
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
`,O={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var i=function(){var m=Object(y.a)(function(){alert("fire")},3e3),l=D(m,2),o=l[0],p=l[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:o,children:"run"}),Object(a.jsx)("button",{onClick:p,children:"clear"})]})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return Q});var $=e("./node_modules/core-js/modules/web.timers.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(J,w){var V=Object(W.useRef)(),z=Object(G.a)(J),Y=Object(W.useCallback)(function(){V.current&&clearInterval(V.current),V.current=setInterval(function(){z()},w)},[w]),E=Object(W.useCallback)(function(){V.current&&clearInterval(V.current)},[]);return Object(W.useEffect)(function(){return E},[E]),[Y,E]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return v});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=typeof document!="undefined"?E.useLayoutEffect:E.useEffect,A=e("./node_modules/react/jsx-runtime.js");function q(h,y){return b(h)||x(h,y)||N(h,y)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(h,y){if(!!h){if(typeof h=="string")return I(h,y);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(h,y)}}function I(h,y){(y==null||y>h.length)&&(y=h.length);for(var a=0,j=new Array(y);a<y;a++)j[a]=h[a];return j}function x(h,y){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var j=[],D=!0,g=!1,s,n;try{for(a=a.call(h);!(D=(s=a.next()).done)&&(j.push(s.value),!(y&&j.length===y));D=!0);}catch(t){g=!0,n=t}finally{try{!D&&a.return!=null&&a.return()}finally{if(g)throw n}}return j}}function b(h){if(Array.isArray(h))return h}var f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},f=`import React, { useState } from "react";

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
`,_={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},d=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},v=function(){var y=Object(E.useState)(!1),a=q(y,2),j=a[0],D=a[1];return Z(function(){D(!0)},[]),Object(A.jsx)("div",{children:j&&"mounted"})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return v});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js");function Z(h,y){return I(h)||N(h,y)||q(h,y)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(h,y){if(!!h){if(typeof h=="string")return X(h,y);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return X(h,y)}}function X(h,y){(y==null||y>h.length)&&(y=h.length);for(var a=0,j=new Array(y);a<y;a++)j[a]=h[a];return j}function N(h,y){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var j=[],D=!0,g=!1,s,n;try{for(a=a.call(h);!(D=(s=a.next()).done)&&(j.push(s.value),!(y&&j.length===y));D=!0);}catch(t){g=!0,n=t}finally{try{!D&&a.return!=null&&a.return()}finally{if(g)throw n}}return j}}function I(h){if(Array.isArray(h))return h}var x=function(y){var a=Object(H.useState)(!1),j=Z(a,2),D=j[0],g=j[1],s=Object(H.useCallback)(function(t){var r=t.key;r===y&&g(!0)},[y]),n=Object(H.useCallback)(function(t){var r=t.key;r===y&&g(!1)},[y]);return Object(H.useEffect)(function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",n)}},[s,n]),D},b=e("./node_modules/react/jsx-runtime.js"),f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},f=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,_={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},d=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},v=function(){var y=x("r");return Object(b.jsx)("div",{children:y&&"r key pressed"})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return l});var $=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/core-js/modules/es.array.concat.js"),q=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.array.includes.js"),N=e("./node_modules/core-js/modules/es.string.includes.js");function I(o){return f(o)||b(o)||v(o)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function f(o){if(Array.isArray(o))return h(o)}function _(o,p){return a(o)||y(o,p)||v(o,p)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(o,p){if(!!o){if(typeof o=="string")return h(o,p);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return h(o,p)}}function h(o,p){(p==null||p>o.length)&&(p=o.length);for(var T=0,C=new Array(p);T<p;T++)C[T]=o[T];return C}function y(o,p){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,U,L;try{for(T=T.call(o);!(R=(U=T.next()).done)&&(C.push(U.value),!(p&&C.length===p));R=!0);}catch(P){k=!0,L=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw L}}return C}}function a(o){if(Array.isArray(o))return o}var j=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],T=Object(Z.useState)(p),C=_(T,2),R=C[0],k=C[1],U=Object(Z.useCallback)(function(){for(var me=arguments.length,B=new Array(me),ee=0;ee<me;ee++)B[ee]=arguments[ee];return k(function(oe){return[].concat(I(oe),B)})},[]),L=Object(Z.useCallback)(function(){for(var me=arguments.length,B=new Array(me),ee=0;ee<me;ee++)B[ee]=arguments[ee];return k(function(oe){return[].concat(B,I(oe))})},[]),P=Object(Z.useCallback)(function(me){for(var B=arguments.length,ee=new Array(B>1?B-1:0),oe=1;oe<B;oe++)ee[oe-1]=arguments[oe];return k(function(pe){return[].concat(I(pe.slice(0,me)),ee,I(pe.slice(me)))})},[]),F=Object(Z.useCallback)(function(){for(var me=arguments.length,B=new Array(me),ee=0;ee<me;ee++)B[ee]=arguments[ee];return k(function(oe){return oe.filter(function(pe,be){return!B.includes(be)})})},[]),K=Object(Z.useCallback)(function(){var me=I(R),B=me.pop();return k(me),B},[R]),ae=Object(Z.useCallback)(function(){var me=I(R),B=me.shift();return k(me),B},[R]),ue=Object(Z.useCallback)(function(me,B){k(function(ee){var oe=I(ee);return oe[me]=B,oe})},[]),ge={setState:k,append:U,prepend:L,insert:P,remove:F,pop:K,shift:ae,setItem:ue};return[R,ge]},D=e("./node_modules/react/jsx-runtime.js");function g(o,p){return c(o)||r(o,p)||n(o,p)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(o,p){if(!!o){if(typeof o=="string")return t(o,p);var T=Object.prototype.toString.call(o).slice(8,-1);if(T==="Object"&&o.constructor&&(T=o.constructor.name),T==="Map"||T==="Set")return Array.from(o);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return t(o,p)}}function t(o,p){(p==null||p>o.length)&&(p=o.length);for(var T=0,C=new Array(p);T<p;T++)C[T]=o[T];return C}function r(o,p){var T=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(T!=null){var C=[],R=!0,k=!1,U,L;try{for(T=T.call(o);!(R=(U=T.next()).done)&&(C.push(U.value),!(p&&C.length===p));R=!0);}catch(P){k=!0,L=P}finally{try{!R&&T.return!=null&&T.return()}finally{if(k)throw L}}return C}}function c(o){if(Array.isArray(o))return o}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},O=`import React from "react";
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
`,i={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},u=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},m=5,l=function(){var p=j(["Item 1","Item 2","Item 3","Item 4","Item 5"]),T=g(p,2),C=T[0],R=T[1];return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:function(){return R.append("Item "+ ++m)},children:"append"}),Object(D.jsx)("button",{onClick:function(){return R.pop()},children:"pop"}),Object(D.jsx)("button",{onClick:function(){return R.prepend("Item "+ ++m)},children:"prepend"}),Object(D.jsx)("button",{onClick:function(){return R.shift()},children:"shift"}),Object(D.jsx)("button",{onClick:function(){return R.setItem(3,"Updated")},children:"setItem 3 index"}),Object(D.jsx)("button",{onClick:function(){return R.remove(2,3)},children:"remove 2, 3 index"}),Object(D.jsx)("button",{onClick:function(){return R.insert(3,"Item "+ ++m)},children:"insert 3 index"})]}),Object(D.jsx)("ul",{children:C.map(function(k,U){return Object(D.jsx)("li",{children:k},U)})})]})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`() => {
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
}`}},l.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return L});var $=e("./node_modules/core-js/modules/es.promise.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),te=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),q=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),X=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),N=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),I=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),x=e("./node_modules/core-js/modules/es.object.define-property.js"),b=e("./node_modules/core-js/modules/es.object.create.js"),f=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),_=e("./node_modules/core-js/modules/es.array.for-each.js"),d=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),v=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),h=e("./node_modules/core-js/modules/es.array.reverse.js"),y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return P};var P={},F=Object.prototype,K=F.hasOwnProperty,ae=typeof Symbol=="function"?Symbol:{},ue=ae.iterator||"@@iterator",ge=ae.asyncIterator||"@@asyncIterator",me=ae.toStringTag||"@@toStringTag";function B(de,ne,fe){return Object.defineProperty(de,ne,{value:fe,enumerable:!0,configurable:!0,writable:!0}),de[ne]}try{B({},"")}catch(de){B=function(fe,ve,ce){return fe[ve]=ce}}function ee(de,ne,fe,ve){var ce=ne&&ne.prototype instanceof be?ne:be,_e=Object.create(ce.prototype),Te=new Be(ve||[]);return _e._invoke=function(Ee,Ie,xe){var Se="suspendedStart";return function(Ae,we){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Ae==="throw")throw we;return Ve()}for(xe.method=Ae,xe.arg=we;;){var He=xe.delegate;if(He){var We=De(He,xe);if(We){if(We===pe)continue;return We}}if(xe.method==="next")xe.sent=xe._sent=xe.arg;else if(xe.method==="throw"){if(Se==="suspendedStart")throw Se="completed",xe.arg;xe.dispatchException(xe.arg)}else xe.method==="return"&&xe.abrupt("return",xe.arg);Se="executing";var Ke=oe(Ee,Ie,xe);if(Ke.type==="normal"){if(Se=xe.done?"completed":"suspendedYield",Ke.arg===pe)continue;return{value:Ke.arg,done:xe.done}}Ke.type==="throw"&&(Se="completed",xe.method="throw",xe.arg=Ke.arg)}}}(de,fe,Te),_e}function oe(de,ne,fe){try{return{type:"normal",arg:de.call(ne,fe)}}catch(ve){return{type:"throw",arg:ve}}}P.wrap=ee;var pe={};function be(){}function he(){}function je(){}var le={};B(le,ue,function(){return this});var se=Object.getPrototypeOf,ye=se&&se(se(Le([])));ye&&ye!==F&&K.call(ye,ue)&&(le=ye);var ie=je.prototype=be.prototype=Object.create(le);function Oe(de){["next","throw","return"].forEach(function(ne){B(de,ne,function(fe){return this._invoke(ne,fe)})})}function ke(de,ne){function fe(ce,_e,Te,Ee){var Ie=oe(de[ce],de,_e);if(Ie.type!=="throw"){var xe=Ie.arg,Se=xe.value;return Se&&typeof Se=="object"&&K.call(Se,"__await")?ne.resolve(Se.__await).then(function(Ae){fe("next",Ae,Te,Ee)},function(Ae){fe("throw",Ae,Te,Ee)}):ne.resolve(Se).then(function(Ae){xe.value=Ae,Te(xe)},function(Ae){return fe("throw",Ae,Te,Ee)})}Ee(Ie.arg)}var ve;this._invoke=function(ce,_e){function Te(){return new ne(function(Ee,Ie){fe(ce,_e,Ee,Ie)})}return ve=ve?ve.then(Te,Te):Te()}}function De(de,ne){var fe=de.iterator[ne.method];if(fe===void 0){if(ne.delegate=null,ne.method==="throw"){if(de.iterator.return&&(ne.method="return",ne.arg=void 0,De(de,ne),ne.method==="throw"))return pe;ne.method="throw",ne.arg=new TypeError("The iterator does not provide a 'throw' method")}return pe}var ve=oe(fe,de.iterator,ne.arg);if(ve.type==="throw")return ne.method="throw",ne.arg=ve.arg,ne.delegate=null,pe;var ce=ve.arg;return ce?ce.done?(ne[de.resultName]=ce.value,ne.next=de.nextLoc,ne.method!=="return"&&(ne.method="next",ne.arg=void 0),ne.delegate=null,pe):ce:(ne.method="throw",ne.arg=new TypeError("iterator result is not an object"),ne.delegate=null,pe)}function Re(de){var ne={tryLoc:de[0]};1 in de&&(ne.catchLoc=de[1]),2 in de&&(ne.finallyLoc=de[2],ne.afterLoc=de[3]),this.tryEntries.push(ne)}function Pe(de){var ne=de.completion||{};ne.type="normal",delete ne.arg,de.completion=ne}function Be(de){this.tryEntries=[{tryLoc:"root"}],de.forEach(Re,this),this.reset(!0)}function Le(de){if(de){var ne=de[ue];if(ne)return ne.call(de);if(typeof de.next=="function")return de;if(!isNaN(de.length)){var fe=-1,ve=function ce(){for(;++fe<de.length;)if(K.call(de,fe))return ce.value=de[fe],ce.done=!1,ce;return ce.value=void 0,ce.done=!0,ce};return ve.next=ve}}return{next:Ve}}function Ve(){return{value:void 0,done:!0}}return he.prototype=je,B(ie,"constructor",je),B(je,"constructor",he),he.displayName=B(je,me,"GeneratorFunction"),P.isGeneratorFunction=function(de){var ne=typeof de=="function"&&de.constructor;return!!ne&&(ne===he||(ne.displayName||ne.name)==="GeneratorFunction")},P.mark=function(de){return Object.setPrototypeOf?Object.setPrototypeOf(de,je):(de.__proto__=je,B(de,me,"GeneratorFunction")),de.prototype=Object.create(ie),de},P.awrap=function(de){return{__await:de}},Oe(ke.prototype),B(ke.prototype,ge,function(){return this}),P.AsyncIterator=ke,P.async=function(de,ne,fe,ve,ce){ce===void 0&&(ce=Promise);var _e=new ke(ee(de,ne,fe,ve),ce);return P.isGeneratorFunction(ne)?_e:_e.next().then(function(Te){return Te.done?Te.value:_e.next()})},Oe(ie),B(ie,me,"Generator"),B(ie,ue,function(){return this}),B(ie,"toString",function(){return"[object Generator]"}),P.keys=function(de){var ne=[];for(var fe in de)ne.push(fe);return ne.reverse(),function ve(){for(;ne.length;){var ce=ne.pop();if(ce in de)return ve.value=ce,ve.done=!1,ve}return ve.done=!0,ve}},P.values=Le,Be.prototype={constructor:Be,reset:function(ne){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Pe),!ne)for(var fe in this)fe.charAt(0)==="t"&&K.call(this,fe)&&!isNaN(+fe.slice(1))&&(this[fe]=void 0)},stop:function(){this.done=!0;var ne=this.tryEntries[0].completion;if(ne.type==="throw")throw ne.arg;return this.rval},dispatchException:function(ne){if(this.done)throw ne;var fe=this;function ve(xe,Se){return Te.type="throw",Te.arg=ne,fe.next=xe,Se&&(fe.method="next",fe.arg=void 0),!!Se}for(var ce=this.tryEntries.length-1;ce>=0;--ce){var _e=this.tryEntries[ce],Te=_e.completion;if(_e.tryLoc==="root")return ve("end");if(_e.tryLoc<=this.prev){var Ee=K.call(_e,"catchLoc"),Ie=K.call(_e,"finallyLoc");if(Ee&&Ie){if(this.prev<_e.catchLoc)return ve(_e.catchLoc,!0);if(this.prev<_e.finallyLoc)return ve(_e.finallyLoc)}else if(Ee){if(this.prev<_e.catchLoc)return ve(_e.catchLoc,!0)}else{if(!Ie)throw new Error("try statement without catch or finally");if(this.prev<_e.finallyLoc)return ve(_e.finallyLoc)}}}},abrupt:function(ne,fe){for(var ve=this.tryEntries.length-1;ve>=0;--ve){var ce=this.tryEntries[ve];if(ce.tryLoc<=this.prev&&K.call(ce,"finallyLoc")&&this.prev<ce.finallyLoc){var _e=ce;break}}_e&&(ne==="break"||ne==="continue")&&_e.tryLoc<=fe&&fe<=_e.finallyLoc&&(_e=null);var Te=_e?_e.completion:{};return Te.type=ne,Te.arg=fe,_e?(this.method="next",this.next=_e.finallyLoc,pe):this.complete(Te)},complete:function(ne,fe){if(ne.type==="throw")throw ne.arg;return ne.type==="break"||ne.type==="continue"?this.next=ne.arg:ne.type==="return"?(this.rval=this.arg=ne.arg,this.method="return",this.next="end"):ne.type==="normal"&&fe&&(this.next=fe),pe},finish:function(ne){for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe];if(ve.finallyLoc===ne)return this.complete(ve.completion,ve.afterLoc),Pe(ve),pe}},catch:function(ne){for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ve=this.tryEntries[fe];if(ve.tryLoc===ne){var ce=ve.completion;if(ce.type==="throw"){var _e=ce.arg;Pe(ve)}return _e}}throw new Error("illegal catch attempt")},delegateYield:function(ne,fe,ve){return this.delegate={iterator:Le(ne),resultName:fe,nextLoc:ve},this.method==="next"&&(this.arg=void 0),pe}},P}function j(P,F,K,ae,ue,ge,me){try{var B=P[ge](me),ee=B.value}catch(oe){K(oe);return}B.done?F(ee):Promise.resolve(ee).then(ae,ue)}function D(P){return function(){var F=this,K=arguments;return new Promise(function(ae,ue){var ge=P.apply(F,K);function me(ee){j(ge,ae,ue,me,B,"next",ee)}function B(ee){j(ge,ae,ue,me,B,"throw",ee)}me(void 0)})}}function g(P,F){return c(P)||r(P,F)||n(P,F)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(P,F){if(!!P){if(typeof P=="string")return t(P,F);var K=Object.prototype.toString.call(P).slice(8,-1);if(K==="Object"&&P.constructor&&(K=P.constructor.name),K==="Map"||K==="Set")return Array.from(P);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return t(P,F)}}function t(P,F){(F==null||F>P.length)&&(F=P.length);for(var K=0,ae=new Array(F);K<F;K++)ae[K]=P[K];return ae}function r(P,F){var K=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(K!=null){var ae=[],ue=!0,ge=!1,me,B;try{for(K=K.call(P);!(ue=(me=K.next()).done)&&(ae.push(me.value),!(F&&ae.length===F));ue=!0);}catch(ee){ge=!0,B=ee}finally{try{!ue&&K.return!=null&&K.return()}finally{if(ge)throw B}}return ae}}function c(P){if(Array.isArray(P))return P}var O=function(F){var K=Object(A.useState)(!1),ae=g(K,2),ue=ae[0],ge=ae[1],me=Object(y.a)(F),B=Object(A.useCallback)(D(a().mark(function ee(){var oe,pe=arguments;return a().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return ge(!0),he.next=3,me.apply(void 0,pe);case 3:return oe=he.sent,ge(!1),he.abrupt("return",oe);case 6:case"end":return he.stop()}},ee)})),[F]);return[ue,B]},i=e("./node_modules/react/jsx-runtime.js");function u(P,F){return T(P)||p(P,F)||l(P,F)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(P,F){if(!!P){if(typeof P=="string")return o(P,F);var K=Object.prototype.toString.call(P).slice(8,-1);if(K==="Object"&&P.constructor&&(K=P.constructor.name),K==="Map"||K==="Set")return Array.from(P);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return o(P,F)}}function o(P,F){(F==null||F>P.length)&&(F=P.length);for(var K=0,ae=new Array(F);K<F;K++)ae[K]=P[K];return ae}function p(P,F){var K=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(K!=null){var ae=[],ue=!0,ge=!1,me,B;try{for(K=K.call(P);!(ue=(me=K.next()).done)&&(ae.push(me.value),!(F&&ae.length===F));ue=!0);}catch(ee){ge=!0,B=ee}finally{try{!ue&&K.return!=null&&K.return()}finally{if(ge)throw B}}return ae}}function T(P){if(Array.isArray(P))return P}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},U=function(F){return new Promise(function(K){return setTimeout(K,F)})},L=function(){var F=O(U),K=u(F,2),ae=K[0],ue=K[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return ue(2e3)},children:"Start"})}),Object(i.jsxs)("div",{children:["Loading: ",""+ae]})]})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Q=e("./node_modules/react/jsx-runtime.js"),M=e.n(Q),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var V=function(){var Y=Object(G.a)("(min-width: 900px)");return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:["(min-width: 900px) : ",Y?"matches":"does not match"]})})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return n});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_);function v(t,r){return D(t)||j(t,r)||y(t,r)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,r){if(!!t){if(typeof t=="string")return a(t,r);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return a(t,r)}}function a(t,r){(r==null||r>t.length)&&(r=t.length);for(var c=0,O=new Array(r);c<r;c++)O[c]=t[c];return O}function j(t,r){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var O=[],i=!0,u=!1,m,l;try{for(c=c.call(t);!(i=(m=c.next()).done)&&(O.push(m.value),!(r&&O.length===r));i=!0);}catch(o){u=!0,l=o}finally{try{!i&&c.return!=null&&c.return()}finally{if(u)throw l}}return O}}function D(t){if(Array.isArray(t))return t}function g(t,r){try{return t.addEventListener("change",r),function(){return t.removeEventListener("change",r)}}catch(c){return t.addListener(r),function(){return t.removeListener(r)}}}function s(t){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}var n=function(r){var c=Object(_.useState)(s(r)),O=v(c,2),i=O[0],u=O[1],m=Object(_.useRef)();return Object(_.useEffect)(function(){if("matchMedia"in window)return m.current=window.matchMedia(r),u(m.current.matches),g(m.current,function(l){return u(l.matches)})},[r]),i}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return s});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),A=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),q=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),N=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=function(t,r){typeof t=="function"?t(r):typeof t=="object"&&t!==null&&"current"in t&&(t.current=r)},x=function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return Object(E.useCallback)(function(O){r.forEach(function(i){return I(i,O)})},r)},b=function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return function(O){r.forEach(function(i){return I(i,O)})}},f=e("./node_modules/react/jsx-runtime.js");function _(n,t){return a(n)||y(n,t)||v(n,t)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(n,t){if(!!n){if(typeof n=="string")return h(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(n,t)}}function h(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function y(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c=[],O=!0,i=!1,u,m;try{for(r=r.call(n);!(O=(u=r.next()).done)&&(c.push(u.value),!(t&&c.length===t));O=!0);}catch(l){i=!0,m=l}finally{try{!O&&r.return!=null&&r.return()}finally{if(i)throw m}}return c}}function a(n){if(Array.isArray(n))return n}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},j=`import React, { useEffect } from "react";

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
`,D={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},s=function(){var t=Object(q.a)(),r=_(t,2),c=r[0],O=r[1],i=Object(Z.a)(function(){return alert("click away")}),u=x(O,i),m=Object(A.a)();return Object(E.useEffect)(function(){m()},[]),Object(f.jsx)("div",{children:Object(f.jsx)("div",{ref:u,style:{width:100,height:100,backgroundColor:"red"},children:""+c})})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
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
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js");function Z(y,a){return I(y)||N(y,a)||q(y,a)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(y,a){if(!!y){if(typeof y=="string")return X(y,a);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return X(y,a)}}function X(y,a){(a==null||a>y.length)&&(a=y.length);for(var j=0,D=new Array(a);j<a;j++)D[j]=y[j];return D}function N(y,a){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var D=[],g=!0,s=!1,n,t;try{for(j=j.call(y);!(g=(n=j.next()).done)&&(D.push(n.value),!(a&&D.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&j.return!=null&&j.return()}finally{if(s)throw t}}return D}}function I(y){if(Array.isArray(y))return y}var x={angle:0,type:"landscape-primary"},b=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,j=Object(H.useState)(a),D=Z(j,2),g=D[0],s=D[1];return Object(H.useEffect)(function(){var n=window.screen,t=!0,r=function(){if(t){var O=n,i=O.orientation;if(i){var u=i.angle,m=i.type;s({angle:u,type:m})}else window.orientation!==void 0?s({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):s(a)}};return window.addEventListener("orientationchange",r),r(),function(){t=!1,window.addEventListener("orientationchange",r)}},[]),g},f=e("./node_modules/react/jsx-runtime.js"),_=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},_=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,d={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},v=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},h=function(){var a=b();return Object(f.jsx)("div",{children:JSON.stringify(a)})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return V});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),te=function(){var Y=window.navigator,E=Y.userAgent,Z=Y.platform,A=["Macintosh","MacIntel","MacPPC","Mac68K"],q=["Win32","Win64","Windows","WinCE"],X=["iPhone","iPad","iPod"],N="unknown";return A.indexOf(Z)!==-1?N="macos":X.indexOf(Z)!==-1?N="ios":q.indexOf(Z)!==-1?N="windows":/Android/.test(E)?N="android":!N&&/Linux/.test(Z)&&(N="linux"),N},G=function(){return typeof window!="undefined"?te():"unknown"},Q=e("./node_modules/react/jsx-runtime.js"),M=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,J={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},M=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},V=function(){var Y=G();return Object(Q.jsx)("div",{children:Y})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},V.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return v});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=function(y){Object(E.useEffect)(function(){if(!!y){var a=function(D){D=D||window.event;var g=D.relatedTarget||D.toElement;(!g||g.nodeName==="HTML")&&y()};return document.addEventListener("mouseout",a),function(){document.removeEventListener("mouseout",a)}}},[])},A=e("./node_modules/react/jsx-runtime.js");function q(h,y){return b(h)||x(h,y)||N(h,y)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(h,y){if(!!h){if(typeof h=="string")return I(h,y);var a=Object.prototype.toString.call(h).slice(8,-1);if(a==="Object"&&h.constructor&&(a=h.constructor.name),a==="Map"||a==="Set")return Array.from(h);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(h,y)}}function I(h,y){(y==null||y>h.length)&&(y=h.length);for(var a=0,j=new Array(y);a<y;a++)j[a]=h[a];return j}function x(h,y){var a=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(a!=null){var j=[],D=!0,g=!1,s,n;try{for(a=a.call(h);!(D=(s=a.next()).done)&&(j.push(s.value),!(y&&j.length===y));D=!0);}catch(t){g=!0,n=t}finally{try{!D&&a.return!=null&&a.return()}finally{if(g)throw n}}return j}}function b(h){if(Array.isArray(h))return h}var f=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},f=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,_={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},d=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},v=function(){var y=Object(E.useState)(0),a=q(y,2),j=a[0],D=a[1];return Z(function(){return D(function(g){return g+1})}),Object(A.jsxs)("div",{children:["Page leave count: ",j]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return D});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),te=e("./node_modules/core-js/modules/es.array.concat.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js");function A(g){return N(g)||X(g)||b(g)||q()}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(g){if(typeof Symbol!="undefined"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function N(g){if(Array.isArray(g))return f(g)}function I(g,s){return d(g)||_(g,s)||b(g,s)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(g,s){if(!!g){if(typeof g=="string")return f(g,s);var n=Object.prototype.toString.call(g).slice(8,-1);if(n==="Object"&&g.constructor&&(n=g.constructor.name),n==="Map"||n==="Set")return Array.from(g);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(g,s)}}function f(g,s){(s==null||s>g.length)&&(s=g.length);for(var n=0,t=new Array(s);n<s;n++)t[n]=g[n];return t}function _(g,s){var n=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(n!=null){var t=[],r=!0,c=!1,O,i;try{for(n=n.call(g);!(r=(O=n.next()).done)&&(t.push(O.value),!(s&&t.length===s));r=!0);}catch(u){c=!0,i=u}finally{try{!r&&n.return!=null&&n.return()}finally{if(c)throw i}}return t}}function d(g){if(Array.isArray(g))return g}var v=function(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(H.useState)({state:n.slice(0,s),queue:n.slice(s)}),r=I(t,2),c=r[0],O=c.state,i=c.queue,u=r[1],m=function(){for(var T=arguments.length,C=new Array(T),R=0;R<T;R++)C[R]=arguments[R];return u(function(k){var U=[].concat(A(k.state),A(k.queue),C);return{state:U.slice(0,s),queue:U.slice(s)}})},l=function(T){return u(function(C){var R=T([].concat(A(C.state),A(C.queue)));return{state:R.slice(0,s),queue:R.slice(s)}})},o=function(){return u(function(T){return{state:T.state,queue:[]}})};return{state:O,queue:i,add:m,update:l,cleanQueue:o}},h=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},y=`import React, { useState } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},j=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},D=function(){var s=v(10,[1,2,3]),n=s.state,t=s.queue,r=s.add,c=s.update,O=s.cleanQueue;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["state: ",n]}),Object(h.jsxs)("div",{children:["queue: ",t]}),Object(h.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(h.jsx)("button",{onClick:function(){return c(function(u){return u})},children:"update"}),Object(h.jsx)("button",{onClick:O,children:"clear"})]})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
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
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/react/index.js"),h=e.n(v),y=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),a=e("./node_modules/react/jsx-runtime.js"),j=e.n(a);function D(u,m){return r(u)||t(u,m)||s(u,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(u,m){if(!!u){if(typeof u=="string")return n(u,m);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,m)}}function n(u,m){(m==null||m>u.length)&&(m=u.length);for(var l=0,o=new Array(m);l<m;l++)o[l]=u[l];return o}function t(u,m){var l=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var o=[],p=!0,T=!1,C,R;try{for(l=l.call(u);!(p=(C=l.next()).done)&&(o.push(C.value),!(m&&o.length===m));p=!0);}catch(k){T=!0,R=k}finally{try{!p&&l.return!=null&&l.return()}finally{if(T)throw R}}return o}}function r(u){if(Array.isArray(u))return u}var c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},c=`import React, { useEffect } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var i=function(){var m=Object(y.a)({width:0,height:0}),l=D(m,2),o=l[0],p=l[1];return Object(v.useEffect)(function(){var T=function(){p({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}},[]),Object(a.jsx)("pre",{children:JSON.stringify(o,null,2)})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return g});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(b),_=e("./node_modules/react/index.js"),d=e.n(_);function v(s,n){return D(s)||j(s,n)||y(s,n)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,n){if(!!s){if(typeof s=="string")return a(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(s,n)}}function a(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function j(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function D(s){if(Array.isArray(s))return s}var g=function(n){var t=Object(_.useRef)(0),r=Object(_.useState)(n),c=v(r,2),O=c[0],i=c[1],u=Object(_.useCallback)(function(m){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){i(m)})},[]);return[O,u]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return r});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),A=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function q(c,O){return b(c)||x(c,O)||N(c,O)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(c,O){if(!!c){if(typeof c=="string")return I(c,O);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return I(c,O)}}function I(c,O){(O==null||O>c.length)&&(O=c.length);for(var i=0,u=new Array(O);i<O;i++)u[i]=c[i];return u}function x(c,O){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var u=[],m=!0,l=!1,o,p;try{for(i=i.call(c);!(m=(o=i.next()).done)&&(u.push(o.value),!(O&&u.length===O));m=!0);}catch(T){l=!0,p=T}finally{try{!m&&i.return!=null&&i.return()}finally{if(l)throw p}}return u}}function b(c){if(Array.isArray(c))return c}var f={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},_=typeof window!="undefined",d=function(){var O=Object(E.useRef)(null),i=Object(A.a)(f),u=q(i,2),m=u[0],l=u[1],o=Object(E.useMemo)(function(){return _?new ResizeObserver(function(p){var T=p[0];T&&l(T.contentRect)}):null},[]);return Object(E.useEffect)(function(){return O.current&&o.observe(O.current),function(){o.disconnect()}},[O.current]),[O,m]},v=e("./node_modules/react/jsx-runtime.js");function h(c,O){return g(c)||D(c,O)||a(c,O)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(c,O){if(!!c){if(typeof c=="string")return j(c,O);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(c,O)}}function j(c,O){(O==null||O>c.length)&&(O=c.length);for(var i=0,u=new Array(O);i<O;i++)u[i]=c[i];return u}function D(c,O){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var u=[],m=!0,l=!1,o,p;try{for(i=i.call(c);!(m=(o=i.next()).done)&&(u.push(o.value),!(O&&u.length===O));m=!0);}catch(T){l=!0,p=T}finally{try{!m&&i.return!=null&&i.return()}finally{if(l)throw p}}return u}}function g(c){if(Array.isArray(c))return c}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var O=d(),i=h(O,2),u=i[0],m=i[1],l=Object(Z.a)();return Object(E.useEffect)(function(){l()},[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("textarea",{ref:u,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(v.jsx)("div",{children:JSON.stringify(m)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return O});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.parse-int.js");function A(){var i=document.createElement("style");return i.type="text/css",i.setAttribute("tm-scroll-lock",""),i}function q(i){var u=document.head||document.getElementsByTagName("head")[0];u.appendChild(i)}function X(i,u){i.styleSheet?i.styleSheet.cssText=u:i.appendChild(document.createTextNode(u))}function N(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var i=parseInt(window.getComputedStyle(document.body).paddingRight,10),u=window.innerWidth-document.documentElement.clientWidth;return i+u}var I=function(u){var m=u.disableBodyPadding,l=m?null:N(),o=`body {
        --removed-scroll-width: `+l+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(l?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return o};function x(i,u){return v(i)||d(i,u)||f(i,u)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(i,u){if(!!i){if(typeof i=="string")return _(i,u);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return _(i,u)}}function _(i,u){(u==null||u>i.length)&&(u=i.length);for(var m=0,l=new Array(u);m<u;m++)l[m]=i[m];return l}function d(i,u){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var l=[],o=!0,p=!1,T,C;try{for(m=m.call(i);!(o=(T=m.next()).done)&&(l.push(T.value),!(u&&l.length===u));o=!0);}catch(R){p=!0,C=R}finally{try{!o&&m.return!=null&&m.return()}finally{if(p)throw C}}return l}}function v(i){if(Array.isArray(i))return i}var h=function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},l=Object(E.useState)(u||!1),o=x(l,2),p=o[0],T=o[1],C=Object(E.useRef)(0),R=m.disableBodyPadding,k=Object(E.useRef)(null),U=function(){C.current=window.scrollY;var F=I({disableBodyPadding:R}),K=A();X(K,F),q(K),k.current=K},L=function(){!(k!=null&&k.current)||(k.current.parentNode.removeChild(k.current),k.current=null)};return Object(E.useEffect)(function(){return p?U():L(),L},[p]),Object(E.useEffect)(function(){u!==void 0&&T(u)},[u]),Object(E.useEffect)(function(){u===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&T(!0)},[T]),[p,T]},y=e("./node_modules/react/jsx-runtime.js");function a(i,u){return n(i)||s(i,u)||D(i,u)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(i,u){if(!!i){if(typeof i=="string")return g(i,u);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return g(i,u)}}function g(i,u){(u==null||u>i.length)&&(u=i.length);for(var m=0,l=new Array(u);m<u;m++)l[m]=i[m];return l}function s(i,u){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var l=[],o=!0,p=!1,T,C;try{for(m=m.call(i);!(o=(T=m.next()).done)&&(l.push(T.value),!(u&&l.length===u));o=!0);}catch(R){p=!0,C=R}finally{try{!o&&m.return!=null&&m.return()}finally{if(p)throw C}}return l}}function n(i){if(Array.isArray(i))return i}var t=`
    
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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},c=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},O=function(){var u=Object(E.useState)(!1),m=a(u,2),l=m[0],o=m[1],p=h(l);return Object(y.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(y.jsx)("button",{onClick:function(){return o(function(C){return!C})},children:l?"Unlock":"Lock"}),p?"Scroll locked":"Scrollable"]})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
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
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return h});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function A(y,a){return x(y)||I(y,a)||X(y,a)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(y,a){if(!!y){if(typeof y=="string")return N(y,a);var j=Object.prototype.toString.call(y).slice(8,-1);if(j==="Object"&&y.constructor&&(j=y.constructor.name),j==="Map"||j==="Set")return Array.from(y);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return N(y,a)}}function N(y,a){(a==null||a>y.length)&&(a=y.length);for(var j=0,D=new Array(a);j<a;j++)D[j]=y[j];return D}function I(y,a){var j=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(j!=null){var D=[],g=!0,s=!1,n,t;try{for(j=j.call(y);!(g=(n=j.next()).done)&&(D.push(n.value),!(a&&D.length===a));g=!0);}catch(r){s=!0,t=r}finally{try{!g&&j.return!=null&&j.return()}finally{if(s)throw t}}return D}}function x(y){if(Array.isArray(y))return y}var b=function(a,j){var D=Object(Z.a)(a,j),g=A(D,2),s=g[0],n=g[1];return Object(H.useEffect)(function(){return s(),n},[s,n]),n},f=e("./node_modules/react/jsx-runtime.js"),_=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},_=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},v=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},h=function(){var a=b(function(){alert("fire!")},2e3);return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:a,children:"Clear"})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/react/index.js"),h=e.n(v),y=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),a=e("./node_modules/react/jsx-runtime.js"),j=e.n(a);function D(u,m){return r(u)||t(u,m)||s(u,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(u,m){if(!!u){if(typeof u=="string")return n(u,m);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,m)}}function n(u,m){(m==null||m>u.length)&&(m=u.length);for(var l=0,o=new Array(m);l<m;l++)o[l]=u[l];return o}function t(u,m){var l=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var o=[],p=!0,T=!1,C,R;try{for(l=l.call(u);!(p=(C=l.next()).done)&&(o.push(C.value),!(m&&o.length===m));p=!0);}catch(k){T=!0,R=k}finally{try{!p&&l.return!=null&&l.return()}finally{if(T)throw R}}return o}}function r(u){if(Array.isArray(u))return u}var c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},c=`import React from "react";
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
`,O={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var i=function(){var m=Object(y.a)(function(){alert("fire!")},2e3),l=D(m,2),o=l[0],p=l[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:o,children:"Run"}),Object(a.jsx)("button",{onClick:p,children:"Clear"})]})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return Q});var $=e("./node_modules/core-js/modules/web.timers.js"),H=e.n($),W=e("./node_modules/react/index.js"),te=e.n(W),G=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(J,w){var V=Object(W.useRef)(),z=Object(G.a)(J),Y=Object(W.useCallback)(function(){V.current&&clearTimeout(V.current),V.current=setTimeout(function(){z()},w)},[w]),E=Object(W.useCallback)(function(){V.current&&clearTimeout(V.current)},[]);return Object(W.useEffect)(function(){return E},[E]),[Y,E]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return g});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js");function Z(s,n){return I(s)||N(s,n)||q(s,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(s,n){if(!!s){if(typeof s=="string")return X(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(s,n)}}function X(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function N(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function I(s){if(Array.isArray(s))return s}var x=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(E.useState)(n),r=Z(t,2),c=r[0],O=r[1],i=Object(E.useCallback)(function(u){return O(function(m){return typeof u=="boolean"?u:!m})},[]);return[c,i]},b=e("./node_modules/react/jsx-runtime.js");function f(s,n){return y(s)||h(s,n)||d(s,n)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(s,n){if(!!s){if(typeof s=="string")return v(s,n);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(s,n)}}function v(s,n){(n==null||n>s.length)&&(n=s.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=s[t];return r}function h(s,n){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var r=[],c=!0,O=!1,i,u;try{for(t=t.call(s);!(c=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));c=!0);}catch(m){O=!0,u=m}finally{try{!c&&t.return!=null&&t.return()}finally{if(O)throw u}}return r}}function y(s){if(Array.isArray(s))return s}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},a=`import React from "react";
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
`,j={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},D=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},g=function(){var n=x(),t=f(n,2),r=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["current state: ",""+r]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return c(!0)},children:"setTrue"}),Object(b.jsx)("button",{onClick:function(){return c(!1)},children:"setFalse"}),Object(b.jsx)("button",{onClick:c,children:"toggle"})]})]})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return n});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),z=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function A(t,r){return x(t)||I(t,r)||X(t,r)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t,r){if(!!t){if(typeof t=="string")return N(t,r);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return N(t,r)}}function N(t,r){(r==null||r>t.length)&&(r=t.length);for(var c=0,O=new Array(r);c<r;c++)O[c]=t[c];return O}function I(t,r){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var O=[],i=!0,u=!1,m,l;try{for(c=c.call(t);!(i=(m=c.next()).done)&&(O.push(m.value),!(r&&O.length===r));i=!0);}catch(o){u=!0,l=o}finally{try{!i&&c.return!=null&&c.return()}finally{if(u)throw l}}return O}}function x(t){if(Array.isArray(t))return t}var b=function(r){var c=r.value,O=r.defaultValue,i=r.finalValue,u=r.rule,m=r.onChange,l=r.onValueUpdate,o=u(c),p=Object(E.useRef)("initial"),T=u(O)?O:i,C=Object(E.useState)(T),R=A(C,2),k=R[0],U=R[1],L=o?c:k;!o&&p.current==="controlled"&&(L=i),p.current=o?"controlled":"uncontrolled";var P=p.current,F=function(ae){typeof m=="function"&&m(ae),P==="uncontrolled"&&U(ae)};return Object(E.useEffect)(function(){P==="uncontrolled"&&U(L),typeof l=="function"&&l(L)},[P,L]),[L,F,p.current]},f=e("./node_modules/react/jsx-runtime.js");function _(t,r){return a(t)||y(t,r)||v(t,r)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(t,r){if(!!t){if(typeof t=="string")return h(t,r);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return h(t,r)}}function h(t,r){(r==null||r>t.length)&&(r=t.length);for(var c=0,O=new Array(r);c<r;c++)O[c]=t[c];return O}function y(t,r){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var O=[],i=!0,u=!1,m,l;try{for(c=c.call(t);!(i=(m=c.next()).done)&&(O.push(m.value),!(r&&O.length===r));i=!0);}catch(o){u=!0,l=o}finally{try{!i&&c.return!=null&&c.return()}finally{if(u)throw l}}return O}}function a(t){if(Array.isArray(t))return t}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},j=`import React, { useState } from "react";

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
`,D={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},g=S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},s=function(r){var c=r.label,O=r.value,i=r.defaultValue,u=r.onChange,m=Object(Z.a)(),l=b({value:O,defaultValue:i,finalValue:null,onChange:u,rule:function(R){return typeof R=="string"}}),o=_(l,2),p=o[0],T=o[1];return Object(f.jsxs)("div",{style:{padding:"1rem"},children:[Object(f.jsx)("label",{htmlFor:m,children:c}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{id:m,type:"text",value:p,onChange:function(R){return T(R.target.value)}})]})};s.displayName="CustomInput";var n=function(){var r=Object(E.useState)("controlled"),c=_(r,2),O=c[0],i=c[1];return Object(f.jsxs)("div",{style:{padding:20},children:[Object(f.jsx)(s,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(f.jsx)(s,{label:"Controlled",value:O,onChange:i}),Object(f.jsx)(s,{label:"Controlled (fixed value)",value:"fixed",onChange:i})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,S,e){"use strict";e.r(S),e.d(S,"Default",function(){return i});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e.n($),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(W),G=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n(G),M=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(M),w=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(w),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(z),E=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(E),A=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(A),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(X),I=e("./node_modules/core-js/modules/es.array.slice.js"),x=e.n(I),b=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(b),_=e("./node_modules/core-js/modules/es.array.from.js"),d=e.n(_),v=e("./node_modules/react/index.js"),h=e.n(v),y=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),a=e("./node_modules/react/jsx-runtime.js"),j=e.n(a);function D(u,m){return r(u)||t(u,m)||s(u,m)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(u,m){if(!!u){if(typeof u=="string")return n(u,m);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,m)}}function n(u,m){(m==null||m>u.length)&&(m=u.length);for(var l=0,o=new Array(m);l<m;l++)o[l]=u[l];return o}function t(u,m){var l=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var o=[],p=!0,T=!1,C,R;try{for(l=l.call(u);!(p=(C=l.next()).done)&&(o.push(C.value),!(m&&o.length===m));p=!0);}catch(k){T=!0,R=k}finally{try{!p&&l.return!=null&&l.return()}finally{if(T)throw R}}return o}}function r(u){if(Array.isArray(u))return u}var c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},c=`import React, { useEffect, useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};S.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var i=function(){var m=Object(v.useState)(""),l=D(m,2),o=l[0],p=l[1];return Object(v.useEffect)(function(){console.log("useEffect:",o)},[o]),Object(y.a)(function(){console.log("useUpdateEffect:",o)},[o]),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",onChange:function(C){return p(C.target.value)}})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return W});var $=e("./node_modules/react/index.js"),H=e.n($),W=function(G,Q){var M=Object($.useRef)(!0);Object($.useEffect)(function(){if(!M.current)return G();M.current=!1},Q)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,S,e){"use strict";e.d(S,"c",function(){return E}),e.d(S,"d",function(){return Z}),e.d(S,"b",function(){return A}),e.d(S,"a",function(){return X});var $=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),te=e("./node_modules/react/jsx-runtime.js"),G=function(I){var x=I.styles,b=E();return Object(te.jsx)(W.a,{styles:Object(W.b)(x(b))})};G.displayName="Global";var Q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},M=function(){return Object(te.jsx)(W.a,{styles:Q})};M.displayName="NormalizeCSS";var J=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.object.assign.js");function z(N,I){return I?Object.keys(N).reduce(function(x,b){if(b==="headings"&&I.headings){var f=I.headings?Object.keys(N.headings).reduce(function(_,d){return _[d]=Object.assign({},N.headings[d],I.headings[d]),_},{}):N.headings;return Object.assign({},x,{headings:Object.assign({},N.headings,I.headings,f)})}return x[b]=typeof I[b]=="object"?Object.assign({},N[b],I[b]):I[b]||N[b],x},{}):N}var Y=Object($.createContext)({theme:H.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function E(){var N;return((N=Object($.useContext)(Y))===null||N===void 0?void 0:N.theme)||H.a}function Z(){var N;return((N=Object($.useContext)(Y))===null||N===void 0?void 0:N.styles)||{}}function A(){var N;return((N=Object($.useContext)(Y))===null||N===void 0?void 0:N.emotionOptions)||{key:"co",prepend:!0}}var q=function(){return Object(te.jsx)(G,{styles:function(x){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:x.fontFamily,backgroundColor:x.colorScheme==="dark"?x.colors.black:x.colors.white,color:x.colorScheme==="dark"?x.colors.white:x.colors.black,lineHeight:x.lineHeight,fontSizes:x.fontSizes.b3}}}})};q.displayName="GlobalStyles";var X=function(I){var x=I.theme,b=I.styles,f=b===void 0?{}:b,_=I.emotionOptions,d=I.withNormalizeCSS,v=d===void 0?!1:d,h=I.withGlobalStyles,y=h===void 0?!1:h,a=I.children;return Object(te.jsxs)(Y.Provider,{value:{theme:z(H.a,x),styles:f,emotionOptions:_},children:[v&&Object(te.jsx)(M,{}),y&&Object(te.jsx)(q,{}),a]})};X.displayName="TmProvider",X.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,S,e){"use strict";e.d(S,"b",function(){return be}),e.d(S,"a",function(){return je});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[H.navy1,H.navy1,H.navy2],secondary:[H.green2,H.green2,H.green1],tertiary:[H.white,H.white,H.gray6],red:[H.red2,H.red2,H.red1]},te={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},G={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Q={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},M={small:2,medium:4,large:8,round:100,circular:"50%"},J={xsmall:4,small:8,medium:16,large:24},w={xsmall:576,small:768,medium:1024,large:1408},V={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},z={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},Y={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},E=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),Z={mobile:"@media (max-width: "+E.a.mobile+"px)",tablet:"@media (max-width: "+E.a.tablet+"px)",desktop:"@media (max-width: "+E.a.desktop+"px)",largeDesktop:"@media (max-width: "+E.a.maxSize+"px)"},A=e("./node_modules/core-js/modules/es.object.assign.js"),q=function(se){for(var ye="",ie=1;ie<se.length-1;ie+=1)ye+=se[ie]+" "+ie/(se.length-1)*100+"%, ";return se[0]+" 0%, "+ye+se[se.length-1]+" 100%"},X=function(se){for(var ye=arguments.length,ie=new Array(ye>1?ye-1:0),Oe=1;Oe<ye;Oe++)ie[Oe-1]=arguments[Oe];return"linear-gradient("+se+"deg, "+q(ie)+")"},N=function(){for(var se=arguments.length,ye=new Array(se),ie=0;ie<se;ie++)ye[ie]=arguments[ie];return"radial-gradient(circle, "+q(ye)+")"},I=function(se){return typeof se.size=="number"?se.size:se.sizes[se.size]||se.size||se.sizes.medium},x=function(se){return function(ye){return"@media (min-width: "+(I({size:ye,sizes:se.breakpoints})+1)+"px)"}},b=function(se){return function(ye){return"@media (max-width: "+I({size:ye,sizes:se.breakpoints})+"px)"}},f=e("./node_modules/core-js/modules/es.string.replace.js"),_=e("./node_modules/core-js/modules/es.regexp.exec.js"),d=e("./node_modules/core-js/modules/es.number.is-nan.js"),v=e("./node_modules/core-js/modules/es.number.constructor.js"),h=e("./node_modules/core-js/modules/es.parse-int.js"),y=e("./node_modules/core-js/modules/es.array.map.js"),a=e("./node_modules/core-js/modules/es.string.split.js"),j=e("./node_modules/core-js/modules/es.string.starts-with.js"),D=e("./node_modules/core-js/modules/es.array.is-array.js"),g=e("./node_modules/core-js/modules/es.symbol.js"),s=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),r=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),O=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/core-js/modules/es.function.name.js"),m=e("./node_modules/core-js/modules/es.array.from.js");function l(le,se){return R(le)||C(le,se)||p(le,se)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(le,se){if(!!le){if(typeof le=="string")return T(le,se);var ye=Object.prototype.toString.call(le).slice(8,-1);if(ye==="Object"&&le.constructor&&(ye=le.constructor.name),ye==="Map"||ye==="Set")return Array.from(le);if(ye==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ye))return T(le,se)}}function T(le,se){(se==null||se>le.length)&&(se=le.length);for(var ye=0,ie=new Array(se);ye<se;ye++)ie[ye]=le[ye];return ie}function C(le,se){var ye=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ye!=null){var ie=[],Oe=!0,ke=!1,De,Re;try{for(ye=ye.call(le);!(Oe=(De=ye.next()).done)&&(ie.push(De.value),!(se&&ie.length===se));Oe=!0);}catch(Pe){ke=!0,Re=Pe}finally{try{!Oe&&ye.return!=null&&ye.return()}finally{if(ke)throw Re}}return ie}}function R(le){if(Array.isArray(le))return le}var k=function(se){var ye=se.replace("#","");return typeof ye=="string"&&ye.length===6&&!Number.isNaN(Number("0x"+ye))},U=function(se){var ye=se.replace("#",""),ie=parseInt(ye,16),Oe=ie>>16&255,ke=ie>>8&255,De=ie&255;return{r:Oe,g:ke,b:De,a:1}},L=function(se){var ye=se.replace(/[^0-9,.]/g,"").split(",").map(Number),ie=l(ye,4),Oe=ie[0],ke=ie[1],De=ie[2],Re=ie[3];return{r:Oe,g:ke,b:De,a:Re||1}},P=function(se){return k(se)?U(se):se.startsWith("rgb")?L(se):{r:0,g:0,b:0,a:1}},F=function(se,ye){if(typeof se!="string"||ye>1||ye<0)return"rgba(0, 0, 0, 1)";var ie=P(se),Oe=ie.r,ke=ie.g,De=ie.b;return"rgba("+Oe+", "+ke+", "+De+", "+ye+")"},K=function(se,ye){var ie=P(se),Oe=ie.r,ke=ie.g,De=ie.b,Re=ie.a,Pe=1-ye,Be=function(Ve){return Math.round(Ve*Pe)};return"rgba("+Be(Oe)+", "+Be(ke)+", "+Be(De)+", "+Re+")"},ae=function(se,ye){var ie=P(se),Oe=ie.r,ke=ie.g,De=ie.b,Re=ie.a,Pe=function(Le){return Math.round(Le+(255-Le)*ye)};return"rgba("+Pe(Oe)+", "+Pe(ke)+", "+Pe(De)+", "+Re+")"},ue=function(se){return se*8},ge={linearGradient:X,radialGradient:N,smallerThan:b,largerThan:x,rgba:F,size:I,darken:K,lighten:ae,spacing:ue},me=function(se){return Object.assign({},se,{fn:{largerThan:ge.largerThan(se),smallerThan:ge.smallerThan(se),radialGradient:ge.radialGradient,linearGradient:ge.linearGradient,rgba:ge.rgba,size:ge.size,lighten:ge.lighten,darken:ge.darken,spacing:ge.spacing}})},B=Object.keys(W),ee=Object.keys(H),oe=["xsmall","small","medium","large"],pe=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],be=function(se){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:se.fontFamily||"sans-serif"}},he={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:H.black,colors:H,palettes:W,shadows:te,fontSizes:G,lineHeights:Q,radius:M,spacing:J,breakpoints:w,headings:V,opacity:z,zIndex:Y,extra:{},media:Z},je=me(he)},"./packages/travelmakers-design-styles/src/theme/types/TmSize.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return $});var $={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200}},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return y});var $=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),te=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),M=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.array.from.js");function X(a,j){return f(a)||b(a,j)||I(a,j)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(a,j){if(!!a){if(typeof a=="string")return x(a,j);var D=Object.prototype.toString.call(a).slice(8,-1);if(D==="Object"&&a.constructor&&(D=a.constructor.name),D==="Map"||D==="Set")return Array.from(a);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return x(a,j)}}function x(a,j){(j==null||j>a.length)&&(j=a.length);for(var D=0,g=new Array(j);D<j;D++)g[D]=a[D];return g}function b(a,j){var D=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(D!=null){var g=[],s=!0,n=!1,t,r;try{for(D=D.call(a);!(s=(t=D.next()).done)&&(g.push(t.value),!(j&&g.length===j));s=!0);}catch(c){n=!0,r=c}finally{try{!s&&D.return!=null&&D.return()}finally{if(n)throw r}}return g}}function f(a){if(Array.isArray(a))return a}function _(a){var j={};return Object.keys(a).forEach(function(D){var g=X(a[D],2),s=g[0],n=g[1];j[s]=n}),j}var d=e("./node_modules/core-js/modules/es.array.reduce.js");function v(a,j,D){return Object.keys(j).reduce(function(g,s){return g[s]=a(j[s],D?"tm-"+D+"-"+s:null),g},{})}var h=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function y(a){var j=typeof a=="function"?a:function(){return a};function D(g,s){var n=Object(te.c)(),t=Object(te.d)()[s==null?void 0:s.name],r=Object(h.a)(),c=r.css,O=r.cx,i=0;function u(C){return i+=1,"tm-ref_"+(C||"")+"_"+i}var m=j(n,g,u),l=typeof(s==null?void 0:s.overrideStyles)=="function"?s==null?void 0:s.overrideStyles(n):(s==null?void 0:s.overrideStyles)||{},o=typeof t=="function"?t(n):t||{},p=typeof(s==null?void 0:s.co)=="function"?s.co(n):s==null?void 0:s.co,T=_(Object.keys(m).map(function(C){var R=O(c(m[C]),c(o[C]),c(l[C]),c(p));return[C,R]}));return{classes:v(O,T,s==null?void 0:s.name),cx:O,theme:n}}return D}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,S,e){"use strict";e.d(S,"a",function(){return T});var $=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),E=e("./node_modules/clsx/dist/clsx.m.js"),Z=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),A=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),q=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/react/index.js");function I(C){return _(C)||f(C)||b(C)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(C,R){if(!!C){if(typeof C=="string")return d(C,R);var k=Object.prototype.toString.call(C).slice(8,-1);if(k==="Object"&&C.constructor&&(k=C.constructor.name),k==="Map"||k==="Set")return Array.from(C);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return d(C,R)}}function f(C){if(typeof Symbol!="undefined"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function _(C){if(Array.isArray(C))return d(C)}function d(C,R){(R==null||R>C.length)&&(R=C.length);for(var k=0,U=new Array(R);k<R;k++)U[k]=C[k];return U}function v(C,R){var k=Object(N.useRef)();return(!k.current||R.length!==k.current.prevDeps.length||k.current.prevDeps.map(function(U,L){return U===R[L]}).indexOf(!1)>=0)&&(k.current={v:C(),prevDeps:I(R)}),k.current.v}var h=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/react/jsx-runtime.js"),j=function(){var C;function R(k){return C===void 0&&(C=Object(h.a)(k||{key:"co",prepend:!0})),C}return{getCache:R}}(),D=j.getCache,g=Object(N.createContext)(void 0);function s(){var C=Object(y.b)();return Object(N.useContext)(g)||D(C)}function n(C){var R=C.children,k=C.value;return Object(a.jsx)(g.Provider,{value:k,children:R})}n.displayName="CacheProvider";function t(C,R){return u(C)||i(C,R)||c(C,R)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(C,R){if(!!C){if(typeof C=="string")return O(C,R);var k=Object.prototype.toString.call(C).slice(8,-1);if(k==="Object"&&C.constructor&&(k=C.constructor.name),k==="Map"||k==="Set")return Array.from(C);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return O(C,R)}}function O(C,R){(R==null||R>C.length)&&(R=C.length);for(var k=0,U=new Array(R);k<R;k++)U[k]=C[k];return U}function i(C,R){var k=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(k!=null){var U=[],L=!0,P=!1,F,K;try{for(k=k.call(C);!(L=(F=k.next()).done)&&(U.push(F.value),!(R&&U.length===R));L=!0);}catch(ae){P=!0,K=ae}finally{try{!L&&k.return!=null&&k.return()}finally{if(P)throw K}}return U}}function u(C){if(Array.isArray(C))return C}var m="ref";function l(C){var R;if(C.length!==1)return{args:C,ref:R};var k=t(C,1),U=k[0];if(!(U instanceof Object))return{args:C,ref:R};if(!(m in U))return{args:C,ref:R};R=U[m];var L=Object.assign({},U);return delete L[m],{args:[L],ref:R}}var o=function(){function C(k,U,L){var P=[],F=Object(A.a)(k,P,L);return P.length<2?L:F+U(P)}function R(k){var U=k.cache,L=function(){for(var K=arguments.length,ae=new Array(K),ue=0;ue<K;ue++)ae[ue]=arguments[ue];var ge=l(ae),me=ge.ref,B=ge.args,ee=Object(Z.a)(B,U.registered);return Object(A.b)(U,ee,!1),U.key+"-"+ee.name+(me===void 0?"":" "+me)},P=function(){for(var K=arguments.length,ae=new Array(K),ue=0;ue<K;ue++)ae[ue]=arguments[ue];return C(U.registered,L,Object(E.a)(ae))};return{css:L,cx:P}}return{cssFactory:R}}(),p=o.cssFactory;function T(){var C=s();return v(function(){return p({cache:C})},[C])}},"./storybook-init-framework-entry.js":function(re,S,e){"use strict";e.r(S);var $=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,S,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,S){}},[[0,4,5]]]);
